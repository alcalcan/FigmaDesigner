import * as http from 'http';
import { randomUUID } from 'crypto';
import { CommandEnvelope, EventEnvelope, SessionOpenResponse, SessionState } from '../../../shared/remoteProtocol';
import { ParsedCommandInput, ParsedEventInput } from '../../../shared/remoteValidation';

const SESSION_TTL_MS = 1000 * 60 * 60; // 1h
const PRESENCE_WINDOW_MS = 15_000;
const REDELIVERY_MS = 5_000;
const MAX_RECENT_EVENTS = 200;

type InFlightCommand = {
  envelope: CommandEnvelope;
  deliveredAt: number;
  attempts: number;
};

type SessionRecord = {
  id: string;
  createdAt: number;
  lastPluginSeenAt: number;
  lastWebSeenAt: number;
  commandQueue: CommandEnvelope[];
  inFlight: Map<string, InFlightCommand>;
  idempotencyToCommandId: Map<string, string>;
  commandHistory: Map<string, CommandEnvelope>;
  recentEvents: EventEnvelope[];
  sseClients: Set<http.ServerResponse>;
};

const sessions = new Map<string, SessionRecord>();

const touchPlugin = (session: SessionRecord) => {
  session.lastPluginSeenAt = Date.now();
};

const touchWeb = (session: SessionRecord) => {
  session.lastWebSeenAt = Date.now();
};

const toSessionState = (session: SessionRecord): SessionState => {
  const now = Date.now();
  return {
    sessionId: session.id,
    pluginConnected: now - session.lastPluginSeenAt <= PRESENCE_WINDOW_MS,
    webConnected: now - session.lastWebSeenAt <= PRESENCE_WINDOW_MS,
    lastSeenAt: Math.max(session.lastPluginSeenAt, session.lastWebSeenAt)
  };
};

const writeSse = (client: http.ServerResponse, event: EventEnvelope) => {
  client.write(`event: message\n`);
  client.write(`data: ${JSON.stringify(event)}\n\n`);
};

const pruneOldSessions = () => {
  const now = Date.now();
  for (const [id, session] of sessions.entries()) {
    const lastSeenAt = Math.max(session.lastPluginSeenAt, session.lastWebSeenAt);
    if (now - lastSeenAt > SESSION_TTL_MS) {
      for (const client of session.sseClients) {
        try {
          client.end();
        } catch {
          // ignore
        }
      }
      sessions.delete(id);
    }
  }
};

const resolveCommandFromIdempotency = (
  session: SessionRecord,
  key: string
): CommandEnvelope | null => {
  const knownCommandId = session.idempotencyToCommandId.get(key);
  if (!knownCommandId) return null;

  const queued = session.commandQueue.find((item) => item.id === knownCommandId);
  if (queued) return queued;

  const inFlight = session.inFlight.get(knownCommandId);
  if (inFlight) return inFlight.envelope;

  return session.commandHistory.get(knownCommandId) ?? null;
};

export const createSession = (webBaseUrl: string): SessionOpenResponse => {
  pruneOldSessions();

  const sessionId = randomUUID();
  const now = Date.now();
  const session: SessionRecord = {
    id: sessionId,
    createdAt: now,
    // Plugin presence should only become true after an actual plugin poll/heartbeat.
    lastPluginSeenAt: 0,
    lastWebSeenAt: now,
    commandQueue: [],
    inFlight: new Map<string, InFlightCommand>(),
    idempotencyToCommandId: new Map<string, string>(),
    commandHistory: new Map<string, CommandEnvelope>(),
    recentEvents: [],
    sseClients: new Set<http.ServerResponse>()
  };

  sessions.set(sessionId, session);

  return {
    sessionId,
    webUrl: `${webBaseUrl}/?session=${encodeURIComponent(sessionId)}`
  };
};

export const getSession = (sessionId: string): SessionRecord | null => {
  pruneOldSessions();
  return sessions.get(sessionId) ?? null;
};

export const registerWebHeartbeat = (sessionId: string): SessionState | null => {
  const session = getSession(sessionId);
  if (!session) return null;
  touchWeb(session);
  return toSessionState(session);
};

export const registerPluginHeartbeat = (sessionId: string): SessionState | null => {
  const session = getSession(sessionId);
  if (!session) return null;
  touchPlugin(session);
  return toSessionState(session);
};

export const enqueueCommand = (
  sessionId: string,
  input: ParsedCommandInput
): CommandEnvelope | null => {
  const session = getSession(sessionId);
  if (!session) return null;

  touchWeb(session);

  if (input.idempotencyKey) {
    const known = resolveCommandFromIdempotency(session, input.idempotencyKey);
    if (known) {
      return known;
    }
  }

  const envelope: CommandEnvelope = {
    id: randomUUID(),
    sessionId,
    type: input.type,
    payload: input.payload,
    idempotencyKey: input.idempotencyKey,
    createdAt: Date.now()
  };

  if (input.idempotencyKey) {
    session.idempotencyToCommandId.set(input.idempotencyKey, envelope.id);
  }
  session.commandHistory.set(envelope.id, envelope);
  if (session.commandHistory.size > 1000) {
    const oldest = session.commandHistory.keys().next().value;
    if (oldest) {
      session.commandHistory.delete(oldest);
    }
  }

  session.commandQueue.push(envelope);
  console.log(
    `[Bridge Session] Enqueued command session=${sessionId} command=${envelope.id} type=${envelope.type} queued=${session.commandQueue.length} inFlight=${session.inFlight.size}`
  );
  return envelope;
};

const takeNextQueuedCommand = (session: SessionRecord): CommandEnvelope | null => {
  if (session.commandQueue.length === 0) return null;
  const next = session.commandQueue.shift() ?? null;
  return next;
};

const takeRedeliveryCandidate = (session: SessionRecord): InFlightCommand | null => {
  const now = Date.now();
  for (const inFlight of session.inFlight.values()) {
    if (now - inFlight.deliveredAt >= REDELIVERY_MS) {
      return inFlight;
    }
  }
  return null;
};

export const pollCommand = (sessionId: string): { command: CommandEnvelope | null } | null => {
  const session = getSession(sessionId);
  if (!session) return null;

  touchPlugin(session);

  const redelivery = takeRedeliveryCandidate(session);
  if (redelivery) {
    redelivery.deliveredAt = Date.now();
    redelivery.attempts += 1;
    console.log(
      `[Bridge Session] Redeliver command session=${sessionId} command=${redelivery.envelope.id} type=${redelivery.envelope.type} attempts=${redelivery.attempts}`
    );
    return { command: redelivery.envelope };
  }

  const next = takeNextQueuedCommand(session);
  if (!next) {
    return { command: null };
  }

  session.inFlight.set(next.id, {
    envelope: next,
    deliveredAt: Date.now(),
    attempts: 1
  });
  console.log(
    `[Bridge Session] Dispatch command session=${sessionId} command=${next.id} type=${next.type} queued=${session.commandQueue.length} inFlight=${session.inFlight.size}`
  );

  return { command: next };
};

export const ackCommand = (sessionId: string, commandId: string): boolean => {
  const session = getSession(sessionId);
  if (!session) return false;
  touchPlugin(session);
  const deleted = session.inFlight.delete(commandId);
  console.log(
    `[Bridge Session] Ack command session=${sessionId} command=${commandId} ok=${deleted} queued=${session.commandQueue.length} inFlight=${session.inFlight.size}`
  );
  return deleted;
};

export const pushEvent = (sessionId: string, input: ParsedEventInput): EventEnvelope | null => {
  const session = getSession(sessionId);
  if (!session) return null;

  touchPlugin(session);

  if (input.type === 'command-ack' && input.commandId) {
    ackCommand(sessionId, input.commandId);
  }

  const envelope: EventEnvelope = {
    id: randomUUID(),
    sessionId,
    type: input.type,
    payload: input.payload,
    commandId: input.commandId,
    createdAt: Date.now()
  };

  session.recentEvents.push(envelope);
  if (session.recentEvents.length > MAX_RECENT_EVENTS) {
    session.recentEvents.splice(0, session.recentEvents.length - MAX_RECENT_EVENTS);
  }

  for (const client of session.sseClients) {
    try {
      writeSse(client, envelope);
    } catch {
      // dead socket cleanup below
    }
  }

  return envelope;
};

export const attachEventStream = (sessionId: string, res: http.ServerResponse): SessionState | null => {
  const session = getSession(sessionId);
  if (!session) return null;

  touchWeb(session);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive'
  });

  res.write(': connected\n\n');

  for (const event of session.recentEvents) {
    writeSse(res, event);
  }

  session.sseClients.add(res);

  res.on('close', () => {
    session.sseClients.delete(res);
  });

  return toSessionState(session);
};

export const getSessionStatus = (sessionId: string): (SessionState & {
  queuedCommands: number;
  inFlightCommands: number;
  eventsBuffered: number;
}) | null => {
  const session = getSession(sessionId);
  if (!session) return null;

  touchWeb(session);
  const state = toSessionState(session);

  return {
    ...state,
    queuedCommands: session.commandQueue.length,
    inFlightCommands: session.inFlight.size,
    eventsBuffered: session.recentEvents.length
  };
};

export const getActivePluginSession = (): SessionState | null => {
  pruneOldSessions();
  const now = Date.now();

  let active: SessionRecord | null = null;
  for (const session of sessions.values()) {
    if (now - session.lastPluginSeenAt > PRESENCE_WINDOW_MS) continue;
    if (!active || session.lastPluginSeenAt > active.lastPluginSeenAt) {
      active = session;
    }
  }

  if (!active) return null;
  return toSessionState(active);
};

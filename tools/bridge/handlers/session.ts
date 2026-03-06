import * as http from 'http';
import {
  attachEventStream,
  createSession,
  enqueueCommand,
  getActivePluginSession,
  getSessionStatus,
  pollCommand,
  pushEvent,
  registerPluginHeartbeat,
  registerWebHeartbeat
} from '../session/store';
import { parseCommandInput, parseEventInput } from '../../../shared/remoteValidation';

const readJsonBody = async (req: http.IncomingMessage): Promise<unknown> => {
  const chunks: Uint8Array[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  if (chunks.length === 0) return {};

  const raw = Buffer.concat(chunks).toString('utf-8');
  if (!raw.trim()) return {};
  return JSON.parse(raw);
};

const writeJson = (res: http.ServerResponse, statusCode: number, body: unknown) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
};

const resolveWebBaseUrl = (req: http.IncomingMessage, body: unknown): string => {
  if (body && typeof body === 'object' && !Array.isArray(body)) {
    const explicit = (body as Record<string, unknown>).webBaseUrl;
    if (typeof explicit === 'string' && explicit.trim().length > 0) {
      return explicit.replace(/\/$/, '');
    }
  }

  if (process.env.REMOTE_WEB_BASE_URL) {
    return process.env.REMOTE_WEB_BASE_URL.replace(/\/$/, '');
  }

  const host = req.headers.host;
  if (host && host.includes(':')) {
    const protocol = host.startsWith('localhost') || host.startsWith('127.0.0.1') ? 'http' : 'https';
    const hostname = host.split(':')[0];
    return `${protocol}://${hostname}:3000`;
  }

  return 'http://127.0.0.1:3000';
};

export const handleSessionOpen = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    const body = await readJsonBody(req);
    const webBaseUrl = resolveWebBaseUrl(req, body);
    const session = createSession(webBaseUrl);
    writeJson(res, 200, session);
  } catch (error) {
    writeJson(res, 400, { error: 'Invalid JSON body' });
  }
};

export const handleSessionPoll = (res: http.ServerResponse, sessionId: string) => {
  const result = pollCommand(sessionId);
  if (!result) {
    writeJson(res, 404, { error: 'Session not found' });
    return;
  }

  writeJson(res, 200, result);
};

export const handleSessionCommand = async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  sessionId: string
) => {
  try {
    const body = await readJsonBody(req);
    const input = parseCommandInput(body);
    if (!input) {
      writeJson(res, 400, { error: 'Invalid command payload' });
      return;
    }

    const command = enqueueCommand(sessionId, input);
    if (!command) {
      writeJson(res, 404, { error: 'Session not found' });
      return;
    }

    writeJson(res, 200, { command });
  } catch {
    writeJson(res, 400, { error: 'Invalid JSON body' });
  }
};

export const handleSessionEvent = async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  sessionId: string
) => {
  try {
    const body = await readJsonBody(req);
    const input = parseEventInput(body);
    if (!input) {
      writeJson(res, 400, { error: 'Invalid event payload' });
      return;
    }

    const event = pushEvent(sessionId, input);
    if (!event) {
      writeJson(res, 404, { error: 'Session not found' });
      return;
    }

    writeJson(res, 200, { event });
  } catch {
    writeJson(res, 400, { error: 'Invalid JSON body' });
  }
};

export const handleSessionEvents = (req: http.IncomingMessage, res: http.ServerResponse, sessionId: string) => {
  const state = attachEventStream(sessionId, res);
  if (!state) {
    writeJson(res, 404, { error: 'Session not found' });
    return;
  }

  req.on('close', () => {
    // handled by store via response close
  });
};

export const handleSessionStatus = (res: http.ServerResponse, sessionId: string) => {
  const status = getSessionStatus(sessionId);
  if (!status) {
    writeJson(res, 404, { error: 'Session not found' });
    return;
  }

  writeJson(res, 200, status);
};

export const handleActivePluginSession = (res: http.ServerResponse) => {
  const active = getActivePluginSession();
  if (!active) {
    writeJson(res, 404, { error: 'No active plugin session' });
    return;
  }

  writeJson(res, 200, active);
};

export const handleSessionHeartbeat = (
  res: http.ServerResponse,
  sessionId: string,
  actor: 'plugin' | 'web'
) => {
  const state = actor === 'plugin'
    ? registerPluginHeartbeat(sessionId)
    : registerWebHeartbeat(sessionId);

  if (!state) {
    writeJson(res, 404, { error: 'Session not found' });
    return;
  }

  writeJson(res, 200, state);
};

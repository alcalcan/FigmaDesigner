import { createSession, enqueueCommand, pollCommand, pushEvent, getSessionStatus } from './store';

const session = createSession('http://127.0.0.1:3000');

const command = enqueueCommand(session.sessionId, {
  type: 'create',
  payload: {},
  idempotencyKey: 'smoke-1'
});

if (!command) {
  throw new Error('Failed to enqueue command');
}

const polled = pollCommand(session.sessionId);
if (!polled || !polled.command || polled.command.id !== command.id) {
  throw new Error('Poll should return queued command');
}

const ackEvent = pushEvent(session.sessionId, {
  type: 'command-ack',
  payload: { ok: true },
  commandId: command.id
});

if (!ackEvent) {
  throw new Error('Failed to push ack event');
}

const status = getSessionStatus(session.sessionId);
if (!status || status.inFlightCommands !== 0) {
  throw new Error('In-flight commands should be 0 after ack');
}

console.log('Session smoke test passed.');

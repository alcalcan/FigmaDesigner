import { parseCommandInput, parseEventInput } from '../../../shared/remoteValidation';

const validCommand = parseCommandInput({
  type: 'capture-bridge',
  payload: { detailed: true },
  idempotencyKey: 'abc-1'
});

if (!validCommand) {
  throw new Error('Expected valid command to pass');
}

const invalidCommand = parseCommandInput({
  type: 'capture-bridge',
  payload: {},
  badField: true
});

if (invalidCommand) {
  throw new Error('Expected invalid command with unknown field to fail');
}

const validEvent = parseEventInput({
  type: 'capture-status',
  payload: { message: 'x' },
  commandId: 'cmd-1'
});

if (!validEvent) {
  throw new Error('Expected valid event to pass');
}

const invalidEvent = parseEventInput({
  type: 'unknown-event',
  payload: {}
});

if (invalidEvent) {
  throw new Error('Expected invalid event type to fail');
}

console.log('Contract smoke test passed.');

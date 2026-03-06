import { COMMAND_TYPES, CommandType, EVENT_TYPES, EventType } from './remoteProtocol';

const commandTypeSet = new Set<string>(COMMAND_TYPES);
const eventTypeSet = new Set<string>(EVENT_TYPES);

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const hasOnlyKeys = (
  obj: Record<string, unknown>,
  allowedKeys: readonly string[]
): boolean => Object.keys(obj).every((key) => allowedKeys.includes(key));

const isString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;

export const isCommandType = (value: unknown): value is CommandType =>
  typeof value === 'string' && commandTypeSet.has(value);

export const isEventType = (value: unknown): value is EventType =>
  typeof value === 'string' && eventTypeSet.has(value);

export interface ParsedCommandInput {
  type: CommandType;
  payload: Record<string, unknown>;
  idempotencyKey?: string;
}

export interface ParsedEventInput {
  type: EventType;
  payload: Record<string, unknown>;
  commandId?: string;
}

export const parseCommandInput = (value: unknown): ParsedCommandInput | null => {
  if (!isObject(value)) return null;
  if (!hasOnlyKeys(value, ['type', 'payload', 'idempotencyKey'])) return null;
  if (!isCommandType(value.type)) return null;

  const payload = isObject(value.payload) ? value.payload : {};
  const idempotencyKey = value.idempotencyKey;
  if (idempotencyKey !== undefined && !isString(idempotencyKey)) return null;

  return {
    type: value.type,
    payload,
    idempotencyKey: idempotencyKey as string | undefined
  };
};

export const parseEventInput = (value: unknown): ParsedEventInput | null => {
  if (!isObject(value)) return null;
  if (!hasOnlyKeys(value, ['type', 'payload', 'commandId'])) return null;
  if (!isEventType(value.type)) return null;

  const payload = isObject(value.payload) ? value.payload : {};
  if (value.commandId !== undefined && !isString(value.commandId)) return null;

  return {
    type: value.type,
    payload,
    commandId: value.commandId as string | undefined
  };
};

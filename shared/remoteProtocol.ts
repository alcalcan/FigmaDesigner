export const COMMAND_TYPES = [
  'create',
  'tools-select-instances',
  'tools-organize-grid',
  'tools-check-accessibility',
  'tools-extract-details',
  'capture',
  'capture-bridge',
  'capture-png',
  'capture-preview',
  'generate-from-json',
  'generate-component',
  'export-ppt-from-selection',
  'cancel',
  'open-legacy-ui',
  'open-web-ui',
  'remote-reconnect'
] as const;

export type CommandType = (typeof COMMAND_TYPES)[number];

export const EVENT_TYPES = [
  'log',
  'capture-status',
  'capture-bridge-result-packet',
  'capture-png-result-packet',
  'capture-preview-result-packet',
  'capture-finished',
  'capture-download',
  'capture-error',
  'export-ppt-data',
  'export-ppt-error',
  'command-ack',
  'session-status'
] as const;

export type EventType = (typeof EVENT_TYPES)[number];

export interface CommandEnvelope {
  id: string;
  sessionId: string;
  type: CommandType;
  payload: Record<string, unknown>;
  idempotencyKey?: string;
  createdAt: number;
}

export interface EventEnvelope {
  id: string;
  sessionId: string;
  type: EventType;
  payload: Record<string, unknown>;
  commandId?: string;
  createdAt: number;
}

export interface SessionState {
  sessionId: string;
  pluginConnected: boolean;
  webConnected: boolean;
  lastSeenAt: number;
}

export interface SessionOpenResponse {
  sessionId: string;
  webUrl: string;
}

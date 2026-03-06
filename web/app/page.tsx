'use client';

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Copy,
  FileCode2,
  Folder,
  FolderOpen,
  Hammer,
  Loader2,
  X
} from 'lucide-react';

type CommandType =
  | 'create'
  | 'tools-select-instances'
  | 'tools-organize-grid'
  | 'tools-check-accessibility'
  | 'tools-extract-details'
  | 'capture'
  | 'capture-bridge'
  | 'capture-png'
  | 'capture-preview'
  | 'generate-from-json'
  | 'generate-component'
  | 'export-ppt-from-selection'
  | 'cancel'
  | 'open-web-ui'
  | 'open-legacy-ui'
  | 'remote-reconnect';

type EventType =
  | 'log'
  | 'capture-status'
  | 'capture-bridge-result-packet'
  | 'capture-png-result-packet'
  | 'capture-preview-result-packet'
  | 'capture-finished'
  | 'capture-download'
  | 'capture-error'
  | 'export-ppt-data'
  | 'export-ppt-error'
  | 'command-ack'
  | 'session-status';

interface EventEnvelope {
  id: string;
  sessionId: string;
  type: EventType;
  payload: Record<string, unknown>;
  commandId?: string;
  createdAt: number;
}

interface SessionStatusResponse {
  sessionId: string;
  pluginConnected: boolean;
  webConnected: boolean;
  lastSeenAt: number;
  queuedCommands: number;
  inFlightCommands: number;
  eventsBuffered: number;
}

interface CommandEnvelope {
  id: string;
  sessionId: string;
  type: CommandType;
  payload: Record<string, unknown>;
  createdAt: number;
}

interface ExtractionFile {
  name: string;
  path: string;
  project: string;
}

interface ComponentIndex {
  components: string[];
  pages: string[];
  slides: string[];
  presentations: string[];
  flows: string[];
}

interface CaptureOptions {
  detailed: boolean;
  saveVectorInJson: boolean;
  processAuto: boolean;
  procedural: boolean;
  generatorOnly: boolean;
  exactRefactor: boolean;
  captureFolder: string;
  componentNameOverride: string;
}

interface PendingCommandMeta {
  kind: 'insert' | 'action';
  label: string;
  path?: string;
  type: CommandType;
}

interface CommandErrorState {
  title: string;
  message: string;
  details?: string;
  commandId?: string;
  commandType?: string;
  createdAt: number;
}

type CatalogSection = 'flows' | 'pages' | 'components' | 'presentations' | 'slides' | 'files';
type CatalogDeleteType = 'flow' | 'page' | 'component' | 'presentation' | 'slide';

const BRIDGE_BASE_URL = 'http://127.0.0.1:4000';
const COMMAND_TIMEOUTS = {
  generateComponentMs: 20_000,
  lightweightMs: 30_000,
  captureExportMs: 180_000
} as const;

const captureExportCommandTypes = new Set<CommandType>([
  'capture',
  'capture-bridge',
  'capture-png',
  'capture-preview',
  'export-ppt-from-selection'
]);

const getCommandTimeoutMs = (type: CommandType): number => {
  if (type === 'generate-component') return COMMAND_TIMEOUTS.generateComponentMs;
  if (captureExportCommandTypes.has(type)) return COMMAND_TIMEOUTS.captureExportMs;
  return COMMAND_TIMEOUTS.lightweightMs;
};

const createDefaultSectionEditMode = (): Record<CatalogSection, boolean> => ({
  flows: false,
  pages: false,
  components: false,
  presentations: false,
  slides: false,
  files: false
});

const defaultCaptureOptions: CaptureOptions = {
  detailed: true,
  saveVectorInJson: false,
  processAuto: true,
  procedural: false,
  generatorOnly: false,
  exactRefactor: false,
  captureFolder: 'captures',
  componentNameOverride: ''
};

const readJson = async <T,>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }
  return response.json() as Promise<T>;
};

const fetchWithTimeout = async (
  input: string,
  init: RequestInit = {},
  timeoutMs: number = 5_000
): Promise<Response> => {
  if (typeof AbortController === 'undefined') {
    return Promise.race([
      fetch(input, init),
      new Promise<Response>((_, reject) => {
        setTimeout(() => reject(new Error(`Request timed out after ${Math.round(timeoutMs / 1000)}s.`)), timeoutMs);
      })
    ]);
  }

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    window.clearTimeout(timer);
  }
};

const trimExt = (name: string): string => name.replace(/\.json$/i, '');
const stripCodeExt = (name: string): string => name.replace(/\.(tsx?|jsx?)$/i, '');
const normalizeSlashPath = (value: string): string => value.replace(/\\/g, '/').replace(/^\/+/, '');
const pathDirname = (value: string): string => {
  const normalized = normalizeSlashPath(value);
  const slash = normalized.lastIndexOf('/');
  if (slash <= 0) return '';
  return normalized.slice(0, slash);
};

const toProjectFromPath = (path: string): string => {
  const [project] = path.split('/');
  return project || 'Default';
};

interface TreeNode {
  key: string;
  label: string;
  value: string;
  isFolder: boolean;
  children: TreeNode[];
}

interface MutableTreeNode {
  key: string;
  label: string;
  value: string;
  isLeaf: boolean;
  children: Map<string, MutableTreeNode>;
}

interface ProjectTreeEntry {
  value: string;
  leafLabel: string;
  relativeLabel: string;
}

const buildPathTree = (
  paths: string[],
  keyPrefix: string,
  leafLabelTransform?: (leafLabel: string, fullPath: string) => string
): TreeNode[] => {
  const root = new Map<string, MutableTreeNode>();

  for (const fullPath of paths) {
    const parts = fullPath.split('/').filter(Boolean);
    if (parts.length === 0) continue;

    let map = root;
    let runningPath = '';

    for (let index = 0; index < parts.length; index += 1) {
      const part = parts[index];
      runningPath = runningPath ? `${runningPath}/${part}` : part;

      let node = map.get(part);
      if (!node) {
        node = {
          key: `${keyPrefix}:${runningPath}`,
          label: part,
          value: runningPath,
          isLeaf: false,
          children: new Map<string, MutableTreeNode>()
        };
        map.set(part, node);
      }

      if (index === parts.length - 1) {
        node.isLeaf = true;
        node.value = fullPath;
        if (leafLabelTransform) {
          node.label = leafLabelTransform(part, fullPath);
        }
      }

      map = node.children;
    }
  }

  const toNodes = (map: Map<string, MutableTreeNode>): TreeNode[] => {
    const values = Array.from(map.values()).map((node) => {
      const children = toNodes(node.children);
      const isFolder = children.length > 0;
      return {
        key: node.key,
        label: node.label,
        value: node.value,
        isFolder,
        children
      };
    });

    values.sort((a, b) => {
      if (a.isFolder !== b.isFolder) {
        return a.isFolder ? -1 : 1;
      }
      return a.label.localeCompare(b.label);
    });

    return values;
  };

  return toNodes(root);
};

const ensureLabelExt = (label: string, extension: string): string => {
  if (/\.[A-Za-z0-9]+$/.test(label)) return label;
  return `${label}${extension}`;
};

const buildProjectFileTree = (
  paths: string[],
  keyPrefix: string,
  extension: string = '.ts'
): TreeNode[] => {
  const grouped = new Map<string, ProjectTreeEntry[]>();
  const rootEntries = new Map<string, ProjectTreeEntry>();

  for (const rawPath of paths) {
    const normalized = rawPath.replace(/\\/g, '/').replace(/^\/+/, '');
    if (!normalized) continue;

    const parts = normalized.split('/').filter(Boolean);
    if (parts.length === 0) continue;

    const leaf = parts[parts.length - 1];
    const leafLabel = ensureLabelExt(leaf, extension);

    if (parts.length === 1) {
      rootEntries.set(normalized, {
        value: normalized,
        leafLabel,
        relativeLabel: leafLabel
      });
      continue;
    }

    const project = parts[0];
    const relativePath = parts.slice(1).join('/');
    const relativeLabel = ensureLabelExt(relativePath, extension);

    if (!grouped.has(project)) grouped.set(project, []);
    grouped.get(project)?.push({
      value: normalized,
      leafLabel,
      relativeLabel
    });
  }

  const folders: TreeNode[] = Array.from(grouped.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([project, entries]) => {
      const uniqueByValue = new Map<string, ProjectTreeEntry>();
      for (const entry of entries) {
        uniqueByValue.set(entry.value, entry);
      }
      const deduped = Array.from(uniqueByValue.values());

      const labelCount = new Map<string, number>();
      for (const entry of deduped) {
        labelCount.set(entry.leafLabel, (labelCount.get(entry.leafLabel) || 0) + 1);
      }

      const children = deduped
        .sort((a, b) => a.relativeLabel.localeCompare(b.relativeLabel))
        .map((entry) => {
          const duplicateLeaf = (labelCount.get(entry.leafLabel) || 0) > 1;
          return {
            key: `${keyPrefix}:${entry.value}`,
            label: duplicateLeaf ? entry.relativeLabel : entry.leafLabel,
            value: entry.value,
            isFolder: false,
            children: []
          } as TreeNode;
        });

      return {
        key: `${keyPrefix}:${project}`,
        label: project,
        value: project,
        isFolder: true,
        children
      } as TreeNode;
    });

  const rootLeaves: TreeNode[] = Array.from(rootEntries.values())
    .sort((a, b) => a.leafLabel.localeCompare(b.leafLabel))
    .map((entry) => ({
      key: `${keyPrefix}:${entry.value}`,
      label: entry.leafLabel,
      value: entry.value,
      isFolder: false,
      children: []
    }));

  return [...folders, ...rootLeaves];
};

export default function HomePage() {
  const [sessionId, setSessionId] = useState<string>('');
  const [status, setStatus] = useState<SessionStatusResponse | null>(null);
  const [events, setEvents] = useState<EventEnvelope[]>([]);
  const [infoMessage, setInfoMessage] = useState<string>('Initializing session...');

  const [files, setFiles] = useState<ExtractionFile[]>([]);
  const [selectedFilePath, setSelectedFilePath] = useState<string>('');

  const [componentIndex, setComponentIndex] = useState<ComponentIndex>({
    components: [],
    pages: [],
    slides: [],
    presentations: [],
    flows: []
  });
  const [selectedCatalogPath, setSelectedCatalogPath] = useState<string>('');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});
  const [_pendingCommands, setPendingCommands] = useState<Record<string, PendingCommandMeta>>({});
  const [insertPendingByPath, setInsertPendingByPath] = useState<Record<string, string>>({});
  const [deletePendingByPath, setDeletePendingByPath] = useState<Record<string, boolean>>({});
  const [sectionEditMode, setSectionEditMode] = useState<Record<CatalogSection, boolean>>(createDefaultSectionEditMode);
  const [commandError, setCommandError] = useState<CommandErrorState | null>(null);

  const [captureOptions, setCaptureOptions] = useState<CaptureOptions>(defaultCaptureOptions);
  const [previewCode, setPreviewCode] = useState<string>('');
  const [clipboardCapturePending, setClipboardCapturePending] = useState<boolean>(false);

  const [jsonInput, setJsonInput] = useState<string>('');
  const [assetsInput, setAssetsInput] = useState<string>('{}');


  const optionsRef = useRef<CaptureOptions>(captureOptions);
  const sessionRef = useRef<string>('');
  const selectedFileRef = useRef<string>('');
  const clipboardPendingRef = useRef<boolean>(clipboardCapturePending);
  const pendingCommandMetaRef = useRef<Record<string, PendingCommandMeta>>({});
  const commandTimeoutByIdRef = useRef<Record<string, number>>({});
  const insertPendingByPathRef = useRef<Record<string, string>>({});
  const pendingCaptureSaveRequestsRef = useRef<Set<Promise<void>>>(new Set());

  useEffect(() => {
    optionsRef.current = captureOptions;
  }, [captureOptions]);

  useEffect(() => {
    sessionRef.current = sessionId;
  }, [sessionId]);

  useEffect(() => {
    selectedFileRef.current = selectedFilePath;
  }, [selectedFilePath]);

  useEffect(() => {
    insertPendingByPathRef.current = insertPendingByPath;
  }, [insertPendingByPath]);

  useEffect(() => {
    clipboardPendingRef.current = clipboardCapturePending;
  }, [clipboardCapturePending]);

  const updateInsertPendingByPath = useCallback((
    updater: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)
  ) => {
    setInsertPendingByPath((prev) => {
      const next = typeof updater === 'function'
        ? (updater as (prev: Record<string, string>) => Record<string, string>)(prev)
        : updater;
      insertPendingByPathRef.current = next;
      return next;
    });
  }, []);

  useEffect(() => () => {
    for (const timerId of Object.values(commandTimeoutByIdRef.current)) {
      window.clearTimeout(timerId);
    }
    commandTimeoutByIdRef.current = {};
  }, []);

  const updateQuerySession = useCallback((id: string) => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('session', id);
    window.history.replaceState({}, '', url.toString());
  }, []);

  const clearQuerySession = useCallback(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.delete('session');
    window.history.replaceState({}, '', url.toString());
  }, []);

  const clearCommandTimeout = useCallback((commandId: string) => {
    const timerId = commandTimeoutByIdRef.current[commandId];
    if (timerId === undefined) return;
    window.clearTimeout(timerId);
    delete commandTimeoutByIdRef.current[commandId];
  }, []);

  const clearAllCommandTimeouts = useCallback(() => {
    for (const commandId of Object.keys(commandTimeoutByIdRef.current)) {
      clearCommandTimeout(commandId);
    }
  }, [clearCommandTimeout]);

  const clearPendingCommandState = useCallback((commandId: string, knownPath?: string) => {
    const pathHint = knownPath || pendingCommandMetaRef.current[commandId]?.path;
    if (pathHint) {
      updateInsertPendingByPath((prev) => {
        if (!prev[pathHint]) return prev;
        const next = { ...prev };
        delete next[pathHint];
        return next;
      });
    }

    updateInsertPendingByPath((prev) => {
      let changed = false;
      const next = { ...prev };
      for (const [path, value] of Object.entries(prev)) {
        if (value === commandId) {
          delete next[path];
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [updateInsertPendingByPath]);

  const resetSessionUiState = useCallback(() => {
    clearAllCommandTimeouts();
    pendingCommandMetaRef.current = {};
    setEvents([]);
    setPendingCommands({});
    updateInsertPendingByPath({});
    setDeletePendingByPath({});
    setSectionEditMode(createDefaultSectionEditMode());
    setCommandError(null);
  }, [clearAllCommandTimeouts, updateInsertPendingByPath]);

  const scheduleCommandTimeout = useCallback((
    commandId: string,
    type: CommandType
  ) => {
    clearCommandTimeout(commandId);
    const timeoutMs = getCommandTimeoutMs(type);
    const seconds = Math.round(timeoutMs / 1000);
    const timerId = window.setTimeout(() => {
      clearCommandTimeout(commandId);

      const meta = pendingCommandMetaRef.current[commandId];
      if (meta) {
        delete pendingCommandMetaRef.current[commandId];
      }

      setPendingCommands((prev) => {
        if (!prev[commandId]) return prev;
        const next = { ...prev };
        delete next[commandId];
        return next;
      });
      clearPendingCommandState(commandId, meta?.path);

      const commandType = meta?.type || type;
      const labelPrefix = meta?.label ? `${meta.label}: ` : '';
      const message = `${labelPrefix}No command-ack received within ${seconds}s.`;
      const details = [
        'Reason: timeout waiting for command acknowledgement.',
        `Session ID: ${sessionRef.current || 'unknown'}`,
        `Command ID: ${commandId}`,
        `Command Type: ${commandType}`
      ].join('\n');
      setInfoMessage(message);
      setCommandError({
        title: meta?.label || 'Command Timeout',
        message,
        details,
        commandId,
        commandType,
        createdAt: Date.now()
      });
    }, timeoutMs);
    commandTimeoutByIdRef.current[commandId] = timerId;
  }, [clearCommandTimeout, clearPendingCommandState]);

  const adoptActivePluginSession = useCallback(async (reason: string): Promise<SessionStatusResponse | null> => {
    try {
      const response = await fetchWithTimeout(`${BRIDGE_BASE_URL}/session/active-plugin`, {}, 4_000);
      if (!response.ok) {
        clearAllCommandTimeouts();
        pendingCommandMetaRef.current = {};
        setStatus(null);
        setSessionId('');
        setEvents([]);
        setPendingCommands({});
        updateInsertPendingByPath({});
        setCommandError(null);
        clearQuerySession();
        return null;
      }

      const active = await readJson<SessionStatusResponse>(response);
      if (!active?.sessionId) return null;

      const hasSwitchedSession = active.sessionId !== sessionRef.current;
      const currentQuerySession = typeof window !== 'undefined'
        ? new URL(window.location.href).searchParams.get('session')
        : null;
      if (hasSwitchedSession) {
        resetSessionUiState();
        setSessionId(active.sessionId);
        updateQuerySession(active.sessionId);
        setInfoMessage(`Session resynced (${reason}).`);
      } else if (currentQuerySession !== active.sessionId) {
        updateQuerySession(active.sessionId);
      }

      setStatus(active);
      return active;
    } catch {
      setInfoMessage('Bridge status endpoint is unreachable.');
      return null;
    }
  }, [clearAllCommandTimeouts, clearQuerySession, resetSessionUiState, updateInsertPendingByPath, updateQuerySession]);

  const ensureSession = useCallback(async () => {
    const active = await adoptActivePluginSession('startup');
    if (!active) {
      setInfoMessage('No active plugin session. Open the plugin and click "Open Web Control Center".');
    }
  }, [adoptActivePluginSession]);

  const restartSession = useCallback(async () => {
    const active = await adoptActivePluginSession('manual resync');
    if (!active) {
      setInfoMessage('No active plugin session. Open the plugin and click "Open Web Control Center".');
    }
  }, [adoptActivePluginSession]);

  const refreshSessionStatus = useCallback(async () => {
    const activeSession = await adoptActivePluginSession('status refresh');
    if (!activeSession) return;

    try {
      const response = await fetchWithTimeout(
        `${BRIDGE_BASE_URL}/session/${encodeURIComponent(activeSession.sessionId)}/status`,
        {},
        4_000
      );
      if (response.status === 404) {
        const adopted = await adoptActivePluginSession('plugin moved to a new session');
        if (!adopted) {
          setInfoMessage('No active plugin session. Reopen the Control Center from the plugin.');
        }
        return;
      }
      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }
      const nextStatus = await response.json() as SessionStatusResponse;
      setStatus(nextStatus);
    } catch {
      setInfoMessage('Bridge status endpoint is unreachable.');
    }
  }, [adoptActivePluginSession]);

  const sendCommand = useCallback(async (
    type: CommandType,
    payload: Record<string, unknown> = {},
    idempotencyKey?: string,
    meta?: PendingCommandMeta
  ): Promise<string | null> => {
    let targetSessionId = sessionRef.current;
    if (!targetSessionId) {
      const active = await adoptActivePluginSession(`dispatch ${type}`);
      targetSessionId = active?.sessionId || '';
    }

    if (!targetSessionId) {
      const message = 'Plugin is not connected to an active session. Open the plugin and click "Open Web Control Center" again.';
      setInfoMessage(message);
      setCommandError({
        title: meta?.label || `Command ${type}`,
        message,
        createdAt: Date.now()
      });
      return null;
    }

    const body = {
      type,
      payload,
      idempotencyKey: idempotencyKey ?? `${type}-${Date.now()}-${Math.random().toString(36).slice(2)}`
    };

    let response = await fetchWithTimeout(`${BRIDGE_BASE_URL}/session/${encodeURIComponent(targetSessionId)}/command`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }, 6_000);

    if (response.status === 404) {
      const adopted = await adoptActivePluginSession('command session expired');
      const recoveredSessionId = adopted?.sessionId || '';
      if (!recoveredSessionId) {
        throw new Error(`Failed to send command: ${type}. Active plugin session is unavailable.`);
      }
      targetSessionId = recoveredSessionId;
      response = await fetchWithTimeout(`${BRIDGE_BASE_URL}/session/${encodeURIComponent(targetSessionId)}/command`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }, 6_000);
    }

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || `Failed to send command: ${type}`);
    }

    const result = await readJson<{ command?: CommandEnvelope }>(response);
    const commandId = typeof result.command?.id === 'string' ? result.command.id : null;

    if (commandId) {
      if (meta) {
        pendingCommandMetaRef.current[commandId] = meta;
        setPendingCommands((prev) => ({
          ...prev,
          [commandId]: meta
        }));
      }
      scheduleCommandTimeout(commandId, type);
    }

    setInfoMessage(meta ? `${meta.label} queued...` : `Command queued: ${type}`);
    return commandId;
  }, [adoptActivePluginSession, scheduleCommandTimeout]);

  const loadFiles = useCallback(async () => {
    const response = await fetch(`${BRIDGE_BASE_URL}/list?t=${Date.now()}`);
    const data = await readJson<{ files: ExtractionFile[] }>(response);
    setFiles(data.files || []);
  }, []);

  const loadComponentIndex = useCallback(async () => {
    const response = await fetch(`${BRIDGE_BASE_URL}/list-components?t=${Date.now()}`);
    const data = await readJson<ComponentIndex>(response);
    setComponentIndex({
      components: data.components || [],
      pages: data.pages || [],
      slides: data.slides || [],
      presentations: data.presentations || [],
      flows: data.flows || []
    });
  }, []);

  const fetchDataAndAssets = useCallback(async (path: string) => {
    const readResponse = await fetch(`${BRIDGE_BASE_URL}/read?path=${encodeURIComponent(path)}`);
    const data = await readJson<Record<string, unknown>>(readResponse);

    const assetRefs = new Set<string>();
    const walkAssets = (value: unknown) => {
      if (!value || typeof value !== 'object') return;
      if (Array.isArray(value)) {
        value.forEach(walkAssets);
        return;
      }
      const obj = value as Record<string, unknown>;
      if (typeof obj.assetRef === 'string') assetRefs.add(obj.assetRef);
      if (typeof obj.svgPath === 'string') assetRefs.add(obj.svgPath);
      Object.values(obj).forEach(walkAssets);
    };

    walkAssets(data);

    const lastSlash = path.lastIndexOf('/');
    const dirPath = lastSlash >= 0 ? path.slice(0, lastSlash) : '';

    const assets: Record<string, string> = {};
    await Promise.all(
      Array.from(assetRefs).map(async (assetRef) => {
        const fullAssetPath = dirPath ? `${dirPath}/${assetRef}` : assetRef;
        const assetResponse = await fetch(
          `${BRIDGE_BASE_URL}/read-asset?project=&path=${encodeURIComponent(fullAssetPath)}`
        );
        if (!assetResponse.ok) return;
        const asset = await readJson<{ content?: string }>(assetResponse);
        if (typeof asset.content === 'string') {
          assets[assetRef] = asset.content;
        }
      })
    );

    return { data, assets };
  }, []);

  const generateFromSelectedFile = useCallback(async () => {
    if (!selectedFileRef.current) {
      setInfoMessage('Select one captured file first.');
      return;
    }
    const { data, assets } = await fetchDataAndAssets(selectedFileRef.current);
    await sendCommand('generate-from-json', { data, assets });
  }, [fetchDataAndAssets, sendCommand]);

  const convertSelectedToCode = useCallback(async () => {
    if (!selectedFileRef.current) {
      setInfoMessage('Select one captured file first.');
      return;
    }

    const payload = {
      path: selectedFileRef.current,
      project: toProjectFromPath(selectedFileRef.current),
      simplified: true,
      procedural: optionsRef.current.procedural,
      refactor: !optionsRef.current.generatorOnly,
      compact: !optionsRef.current.generatorOnly
    };

    await fetch(`${BRIDGE_BASE_URL}/generate-to-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    setInfoMessage(`Converted to component: ${trimExt(selectedFileRef.current.split('/').pop() || 'item')}`);
    await loadComponentIndex();
  }, [loadComponentIndex]);

  const saveCapturePacket = useCallback(async (payload: Record<string, unknown>) => {
    const packet = payload.packet;
    if (!packet || typeof packet !== 'object') return;

    const packetObj = packet as Record<string, unknown>;
    if (!packetObj.name || !packetObj.data) return;

    const requestPromise = (async () => {
      const response = await fetch(`${BRIDGE_BASE_URL}/save-packet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName: String(payload.projectName || 'Default').replace(/[^a-z0-9]/gi, '_'),
          name: packetObj.name,
          data: packetObj.data,
          assets: packetObj.assets,
          procedural: optionsRef.current.procedural,
          simplified: optionsRef.current.processAuto,
          batchFolder: optionsRef.current.captureFolder || 'captures',
          options: {
            refactor: !optionsRef.current.generatorOnly,
            compact: !optionsRef.current.generatorOnly,
            skipGeneration: optionsRef.current.processAuto
          }
        })
      });

      if (!response.ok) {
        let details = '';
        try {
          const errPayload = await response.json();
          if (typeof errPayload?.error === 'string') details = errPayload.error;
        } catch {
          // ignore JSON parsing errors for non-JSON responses
        }
        throw new Error(
          details || `Failed to save packet "${String(packetObj.name)}" (${response.status})`
        );
      }
    })();

    pendingCaptureSaveRequestsRef.current.add(requestPromise);
    try {
      await requestPromise;
    } finally {
      pendingCaptureSaveRequestsRef.current.delete(requestPromise);
    }
  }, []);

  const savePngPacket = useCallback(async (payload: Record<string, unknown>) => {
    const packet = payload.packet;
    if (!packet || typeof packet !== 'object') return;

    await fetch(`${BRIDGE_BASE_URL}/save-png`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        projectName: payload.projectName || 'Default',
        packets: [packet]
      })
    });
  }, []);

  const processPreviewPacket = useCallback(async (payload: Record<string, unknown>) => {
    const packet = payload.packet;
    if (!packet || typeof packet !== 'object') return;

    if (clipboardPendingRef.current) {
      clipboardPendingRef.current = false;
      setClipboardCapturePending(false);

      const clipboardResponse = await fetch(`${BRIDGE_BASE_URL}/generate-clipboard`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packet,
          options: {
            refactor: true,
            compact: !optionsRef.current.exactRefactor,
            procedural: optionsRef.current.procedural
          }
        })
      });
      const result = await readJson<{ status: string; code?: string; error?: string }>(clipboardResponse);
      if (result.status === 'ok' && result.code) {
        await navigator.clipboard.writeText(result.code);
        setInfoMessage('Clipboard capture copied.');
      } else {
        setInfoMessage(`Clipboard generation failed: ${result.error || 'Unknown error'}`);
      }
      return;
    }

    const response = await fetch(`${BRIDGE_BASE_URL}/generate-code-preview`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        packet,
        options: {
          refactor: true,
          compact: !optionsRef.current.exactRefactor,
          procedural: optionsRef.current.procedural
        }
      })
    });

    const result = await readJson<{ status: string; code?: string; error?: string }>(response);
    if (result.status === 'ok' && result.code) {
      setPreviewCode(result.code);
      setInfoMessage('Preview code updated.');
    } else {
      setInfoMessage(`Preview generation failed: ${result.error || 'Unknown error'}`);
    }
  }, []);

  const processCaptureFinished = useCallback(async (_payload: Record<string, unknown>) => {
    const pendingSaves = Array.from(pendingCaptureSaveRequestsRef.current);
    if (pendingSaves.length > 0) {
      const saveResults = await Promise.allSettled(pendingSaves);
      const failedSaves = saveResults.filter((entry) => entry.status === 'rejected');
      if (failedSaves.length > 0) {
        setInfoMessage(`Capture finished, but ${failedSaves.length} packet save(s) failed.`);
      }
    }

    if (!optionsRef.current.processAuto) {
      await loadFiles();
      await loadComponentIndex();
      return;
    }

    const folder = optionsRef.current.captureFolder || 'captures';
    // Keep generated components grouped under the selected capture folder.
    // This matches what users expect when they set a custom capture folder.
    const projectName = String(folder).replace(/[^a-z0-9_-]/gi, '_') || 'captures';

    await fetch(`${BRIDGE_BASE_URL}/generate-folder-to-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        folder,
        project: projectName,
        simplified: true,
        procedural: optionsRef.current.procedural,
        refactor: !optionsRef.current.generatorOnly,
        compact: !optionsRef.current.generatorOnly,
        cleanup: false
      })
    });

    await loadFiles();
    await loadComponentIndex();
    setInfoMessage(`Capture finished and processed in "${folder}".`);
  }, [loadComponentIndex, loadFiles]);

  const processCaptureDownload = useCallback((payload: Record<string, unknown>) => {
    const data = payload.data;
    const fileName = typeof payload.fileName === 'string' ? payload.fileName : 'capture.json';
    if (!data) return;

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  }, []);

  const processCommandAck = useCallback((envelope: EventEnvelope) => {
    const commandId = envelope.commandId;
    const ok = envelope.payload.ok !== false;
    const message = typeof envelope.payload.message === 'string'
      ? envelope.payload.message
      : ok
        ? 'Command completed.'
        : 'Command failed.';
    const details = typeof envelope.payload.details === 'string'
      ? envelope.payload.details
      : undefined;
    const commandType = typeof envelope.payload.commandType === 'string'
      ? envelope.payload.commandType
      : undefined;
    const ackDurationMs = typeof envelope.payload.durationMs === 'number'
      ? envelope.payload.durationMs
      : undefined;
    const ackErrorCode = typeof envelope.payload.errorCode === 'string'
      ? envelope.payload.errorCode
      : undefined;

    const meta = commandId ? pendingCommandMetaRef.current[commandId] : undefined;
    if (commandId) {
      clearCommandTimeout(commandId);
      if (pendingCommandMetaRef.current[commandId]) {
        delete pendingCommandMetaRef.current[commandId];
      }
      setPendingCommands((prev) => {
        if (!prev[commandId]) return prev;
        const next = { ...prev };
        delete next[commandId];
        return next;
      });
      clearPendingCommandState(commandId, meta?.path);
    }

    const labelPrefix = meta?.label ? `${meta.label}: ` : '';
    const userMessage = `${labelPrefix}${message}`;
    const mergedDetails = [
      details,
      ackErrorCode ? `Error Code: ${ackErrorCode}` : '',
      ackDurationMs !== undefined ? `Duration: ${ackDurationMs}ms` : ''
    ].filter(Boolean).join('\n');

    if (ok) {
      setInfoMessage(userMessage);
      return;
    }

    setInfoMessage(userMessage);
    setCommandError({
      title: meta?.label || 'Command Error',
      message: userMessage,
      details: mergedDetails || undefined,
      commandId,
      commandType: commandType || meta?.type,
      createdAt: envelope.createdAt
    });
  }, [clearCommandTimeout, clearPendingCommandState]);

  const handleIncomingEvent = useCallback(async (envelope: EventEnvelope) => {
    switch (envelope.type) {
      case 'capture-bridge-result-packet':
        await saveCapturePacket(envelope.payload);
        break;
      case 'capture-png-result-packet':
        await savePngPacket(envelope.payload);
        break;
      case 'capture-preview-result-packet':
        await processPreviewPacket(envelope.payload);
        break;
      case 'capture-finished':
        await processCaptureFinished(envelope.payload);
        break;
      case 'capture-download':
        processCaptureDownload(envelope.payload);
        break;
      case 'capture-error': {
        const message = typeof envelope.payload.message === 'string' ? envelope.payload.message : 'Capture error';
        setInfoMessage(message);
        break;
      }
      case 'export-ppt-error': {
        const message = typeof envelope.payload.message === 'string' ? envelope.payload.message : 'PPT export error';
        setInfoMessage(message);
        break;
      }
      case 'export-ppt-data':
        setInfoMessage('PPT payload received. Use plugin-side save flow if needed.');
        break;
      case 'command-ack':
        processCommandAck(envelope);
        break;
      default:
        break;
    }
  }, [
    processCommandAck,
    processCaptureDownload,
    processCaptureFinished,
    processPreviewPacket,
    saveCapturePacket,
    savePngPacket
  ]);

  useEffect(() => {
    void ensureSession();
  }, [ensureSession]);

  useEffect(() => {
    if (!sessionId) return;

    let cancelled = false;

    const connectEvents = () => {
      const stream = new EventSource(
        `${BRIDGE_BASE_URL}/session/${encodeURIComponent(sessionId)}/events`
      );

      stream.onmessage = (event) => {
        if (cancelled) return;
        try {
          const envelope = JSON.parse(event.data) as EventEnvelope;
          setEvents((prev) => [envelope, ...prev].slice(0, 200));
          void handleIncomingEvent(envelope);
        } catch {
          // ignore malformed events
        }
      };

      stream.onerror = () => {
        if (!cancelled) {
          setInfoMessage('Event stream disconnected. Reconnecting...');
        }
      };

      return stream;
    };

    const stream = connectEvents();
    const interval = setInterval(() => {
      void refreshSessionStatus();
    }, 1500);

    void refreshSessionStatus();
    void loadFiles();
    void loadComponentIndex();

    return () => {
      cancelled = true;
      clearInterval(interval);
      stream.close();
    };
  }, [
    handleIncomingEvent,
    loadComponentIndex,
    loadFiles,
    refreshSessionStatus,
    sessionId
  ]);

  const connected = useMemo(() => !!status?.pluginConnected, [status]);

  const ensurePluginConnected = useCallback((actionLabel: string): boolean => {
    if (connected) return true;
    const message = 'Plugin is not connected to this session. Open the plugin and click "Open Web Control Center" again.';
    setInfoMessage(message);
    setCommandError({
      title: actionLabel,
      message,
      createdAt: Date.now()
    });
    return false;
  }, [connected]);

  const toggleNode = useCallback((nodeKey: string) => {
    setExpandedNodes((prev) => ({ ...prev, [nodeKey]: !prev[nodeKey] }));
  }, []);

  const toggleSectionEdit = useCallback((section: CatalogSection) => {
    setSectionEditMode((prev) => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const deleteCatalogLeaf = useCallback(async (
    section: Exclude<CatalogSection, 'files'>,
    fullPath: string,
    label: string
  ) => {
    if (deletePendingByPath[fullPath]) return;
    setDeletePendingByPath((prev) => ({ ...prev, [fullPath]: true }));

    const typeMap: Record<Exclude<CatalogSection, 'files'>, CatalogDeleteType> = {
      flows: 'flow',
      pages: 'page',
      components: 'component',
      presentations: 'presentation',
      slides: 'slide'
    };

    const normalized = normalizeSlashPath(fullPath);
    const noExt = stripCodeExt(normalized);
    const folderCandidate = pathDirname(noExt);
    const fileFallback = normalized;
    const deletionTarget = folderCandidate || fileFallback;

    try {
      const response = await fetch(`${BRIDGE_BASE_URL}/delete-component-folder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          folder: deletionTarget,
          type: typeMap[section]
        })
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Delete failed for ${label}`);
      }

      if (selectedCatalogPath === fullPath) {
        setSelectedCatalogPath('');
      }

      await loadComponentIndex();
      setInfoMessage(`Deleted ${label}.`);
    } catch (error) {
      const message = (error as Error).message || `Failed to delete ${label}.`;
      setInfoMessage(message);
      setCommandError({
        title: `Delete ${label}`,
        message,
        createdAt: Date.now()
      });
    } finally {
      setDeletePendingByPath((prev) => {
        const next = { ...prev };
        delete next[fullPath];
        return next;
      });
    }
  }, [deletePendingByPath, loadComponentIndex, selectedCatalogPath]);

  const deleteExtractedFile = useCallback(async (fullPath: string, label: string) => {
    if (deletePendingByPath[fullPath]) return;
    setDeletePendingByPath((prev) => ({ ...prev, [fullPath]: true }));
    try {
      const response = await fetch(`${BRIDGE_BASE_URL}/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: fullPath })
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Delete failed for ${label}`);
      }
      if (selectedFilePath === fullPath) {
        setSelectedFilePath('');
      }
      await loadFiles();
      setInfoMessage(`Deleted ${label}.`);
    } catch (error) {
      const message = (error as Error).message || `Failed to delete ${label}.`;
      setInfoMessage(message);
      setCommandError({
        title: `Delete ${label}`,
        message,
        createdAt: Date.now()
      });
    } finally {
      setDeletePendingByPath((prev) => {
        const next = { ...prev };
        delete next[fullPath];
        return next;
      });
    }
  }, [deletePendingByPath, loadFiles, selectedFilePath]);

  const queueCatalogInsert = useCallback(async (fullPath: string, label: string) => {
    if (!ensurePluginConnected(`Insert ${label}`)) return;
    if (insertPendingByPathRef.current[fullPath]) return;

    const parts = fullPath.split('/').filter(Boolean);
    if (parts.length === 0) return;
    const componentName = stripCodeExt(parts[parts.length - 1]);
    const projectName = parts[0] || '';

    updateInsertPendingByPath((prev) => ({
      ...prev,
      [fullPath]: 'pending'
    }));

    try {
      const commandId = await sendCommand(
        'generate-component',
        { componentName, projectName },
        undefined,
        {
          kind: 'insert',
          label: `Insert ${label}`,
          path: fullPath,
          type: 'generate-component'
        }
      );

      if (commandId) {
        updateInsertPendingByPath((prev) => ({
          ...prev,
          [fullPath]: commandId
        }));
      } else {
        updateInsertPendingByPath((prev) => {
          const next = { ...prev };
          delete next[fullPath];
          return next;
        });
      }
    } catch (error) {
      const message = (error as Error).message || 'Failed to queue insert command.';
      updateInsertPendingByPath((prev) => {
        const next = { ...prev };
        delete next[fullPath];
        return next;
      });
      setInfoMessage(message);
      setCommandError({
        title: `Insert ${label}`,
        message,
        commandType: 'generate-component',
        createdAt: Date.now()
      });
    }
  }, [ensurePluginConnected, sendCommand, updateInsertPendingByPath]);

  const flowTree = useMemo(
    () => buildProjectFileTree(componentIndex.flows, 'flows'),
    [componentIndex.flows]
  );
  const pageTree = useMemo(
    () => buildProjectFileTree(componentIndex.pages, 'pages'),
    [componentIndex.pages]
  );
  const componentTree = useMemo(
    () => buildProjectFileTree(componentIndex.components, 'components'),
    [componentIndex.components]
  );
  const slideTree = useMemo(
    () => buildProjectFileTree(componentIndex.slides, 'slides'),
    [componentIndex.slides]
  );
  const presentationTree = useMemo(
    () => buildProjectFileTree(componentIndex.presentations, 'presentations'),
    [componentIndex.presentations]
  );
  const fileTree = useMemo(
    () => buildPathTree(
      files.map((file) => file.path),
      'files',
      (leaf) => trimExt(leaf)
    ),
    [files]
  );

  const renderTree = (
    nodes: TreeNode[],
    depth: number,
    options: {
      selectedValue: string;
      onSelect: (value: string) => void;
      insertable?: boolean;
      insertPendingByPath?: Record<string, string>;
      onInsert?: (value: string, label: string) => void;
      deletable?: boolean;
      editMode?: boolean;
      deletePendingByPath?: Record<string, boolean>;
      onDelete?: (value: string, label: string) => void;
    }
  ): ReactNode => (
    nodes.map((node) => {
      const paddingLeft = 12 + depth * 14;
      if (node.isFolder) {
        const expanded = !!expandedNodes[node.key];
        return (
          <div key={node.key}>
            <div
              className="tree-row folder-row"
              onClick={() => toggleNode(node.key)}
              style={{ paddingLeft }}
              role="button"
              tabIndex={0}
            >
              <div className="folder-main">
                <span className="tree-caret">
                  {expanded ? <ChevronDown size={12} strokeWidth={2.1} /> : <ChevronRight size={12} strokeWidth={2.1} />}
                </span>
                <span className={`tree-folder ${expanded ? 'open' : ''}`}>
                  {expanded ? <FolderOpen size={13} strokeWidth={2} /> : <Folder size={13} strokeWidth={2} />}
                </span>
                <span className="folder-label">{node.label}</span>
              </div>
            </div>
            {expanded ? renderTree(node.children, depth + 1, options) : null}
          </div>
        );
      }

      const selected = options.selectedValue === node.value;
      const insertPending = !!(options.insertable && options.insertPendingByPath?.[node.value]);
      const deletePending = !!(options.deletable && options.deletePendingByPath?.[node.value]);
      const showDelete = !!(options.deletable && options.editMode);
      return (
        <div
          key={node.key}
          className={`tree-row leaf-row ${selected ? 'active' : ''}`}
          onClick={() => options.onSelect(node.value)}
          style={{ paddingLeft }}
          role="button"
          tabIndex={0}
        >
          <div className="leaf-main">
            <span className="tree-file"><FileCode2 size={12} strokeWidth={1.9} /></span>
            <span className="leaf-label">{node.label}</span>
          </div>
          {showDelete ? (
            <button
              className="danger tiny-btn"
              disabled={deletePending}
              style={{ width: 'auto', margin: 0 }}
              onClick={(event) => {
                event.stopPropagation();
                options.onDelete?.(node.value, node.label);
              }}
            >
              {deletePending ? (
                <>
                  <Loader2 size={12} className="icon-spin" />
                  Deleting...
                </>
              ) : 'Delete'}
            </button>
          ) : options.insertable ? (
            <button
              className="secondary tiny-btn"
              disabled={insertPending || !connected}
              style={{ width: 'auto', margin: 0 }}
              onClick={(event) => {
                event.stopPropagation();
                options.onInsert?.(node.value, node.label);
              }}
            >
              {insertPending ? (
                <>
                  <Loader2 size={12} className="icon-spin" />
                  Inserting...
                </>
              ) : 'Insert'}
            </button>
          ) : null}
        </div>
      );
    })
  );

  return (
    <main>
      <div className="topbar">
        <h2>Figma Designer Control Center</h2>
        <div className="topbar-actions">
          <div className="status-badge">
            <span className={`dot ${connected ? 'active' : 'error'}`} />
            <span>{connected ? 'Plugin Connected' : 'Plugin Disconnected'}</span>
          </div>
          <button className="secondary small-btn" onClick={() => void refreshSessionStatus()}>Refresh</button>
          <button className="secondary small-btn" onClick={() => void restartSession()}>Resync Session</button>
        </div>
      </div>
      <div className="session-telemetry">
        <span className="telemetry-chip">sessionId: {status?.sessionId || sessionId || 'none'}</span>
        <span className="telemetry-chip">pluginConnected: {status?.pluginConnected ? 'true' : 'false'}</span>
        <span className="telemetry-chip">queued: {status?.queuedCommands ?? 0}</span>
        <span className="telemetry-chip">inFlight: {status?.inFlightCommands ?? 0}</span>
        <span className="telemetry-chip">eventsBuffered: {status?.eventsBuffered ?? 0}</span>
      </div>

      <div className="info-line">{infoMessage}</div>
      {commandError ? (
        <div className="error-card">
          <div className="error-header">
            <div className="error-title-wrap">
              <AlertCircle size={14} />
              <span>{commandError.title}</span>
            </div>
            <div className="error-actions">
              <button
                className="secondary small-btn"
                onClick={() => {
                  const lines = [
                    `Time: ${new Date(commandError.createdAt).toISOString()}`,
                    `Message: ${commandError.message}`,
                    commandError.commandType ? `Command: ${commandError.commandType}` : '',
                    commandError.commandId ? `Command ID: ${commandError.commandId}` : '',
                    commandError.details ? `Details:\n${commandError.details}` : ''
                  ].filter(Boolean);
                  void navigator.clipboard.writeText(lines.join('\n'));
                  setInfoMessage('Error details copied.');
                }}
              >
                <Copy size={12} />
                Copy
              </button>
              <button
                className="secondary small-btn"
                onClick={() => setCommandError(null)}
                aria-label="Dismiss error"
              >
                <X size={12} />
                Dismiss
              </button>
            </div>
          </div>
          <div className="error-message">{commandError.message}</div>
          {commandError.details ? (
            <pre className="error-details">{commandError.details}</pre>
          ) : null}
        </div>
      ) : null}

      <div className="ui-layout">
        <div className="plugin-column">
          <div className="section catalog-section">
            <label className="section-label">Flows (Auto-Scan)</label>
            <div className="card card-no-padding catalog-card">
              <div className="card-header">
                <span>Available Flows</span>
                <div className="list-actions">
                  <button
                    className="secondary small-btn"
                    onClick={() => toggleSectionEdit('flows')}
                  >
                    {sectionEditMode.flows ? 'Done' : 'Edit'}
                  </button>
                  <button className="secondary small-btn" onClick={() => void loadComponentIndex()}>Refresh</button>
                </div>
              </div>
              <div className="list tree-list catalog-list">
                {flowTree.length === 0
                  ? <div className="empty-row">Connect to server to see flows</div>
                  : renderTree(flowTree, 0, {
                    selectedValue: selectedCatalogPath,
                    onSelect: setSelectedCatalogPath,
                    deletable: true,
                    editMode: sectionEditMode.flows,
                    deletePendingByPath,
                    onDelete: (value, label) => {
                      void deleteCatalogLeaf('flows', value, label);
                    }
                  })}
              </div>
            </div>
          </div>

          <div className="section catalog-section">
            <label className="section-label">Pages (Auto-Scan)</label>
            <div className="card card-no-padding catalog-card">
              <div className="card-header">
                <span>Available Pages</span>
                <div className="list-actions">
                  <button
                    className="secondary small-btn"
                    onClick={() => toggleSectionEdit('pages')}
                  >
                    {sectionEditMode.pages ? 'Done' : 'Edit'}
                  </button>
                  <button className="secondary small-btn" onClick={() => void loadComponentIndex()}>Refresh</button>
                </div>
              </div>
              <div className="list tree-list catalog-list">
                {pageTree.length === 0
                  ? <div className="empty-row">Connect to server to see pages</div>
                  : renderTree(pageTree, 0, {
                    selectedValue: selectedCatalogPath,
                    onSelect: setSelectedCatalogPath,
                    insertable: true,
                    insertPendingByPath,
                    deletable: true,
                    editMode: sectionEditMode.pages,
                    deletePendingByPath,
                    onInsert: (value, label) => {
                      void queueCatalogInsert(value, label);
                    },
                    onDelete: (value, label) => {
                      void deleteCatalogLeaf('pages', value, label);
                    }
                  })}
              </div>
            </div>
          </div>

          <div className="section catalog-section">
            <label className="section-label">Components (Auto-Scan)</label>
            <div className="card card-no-padding catalog-card">
              <div className="card-header">
                <span>Available Components</span>
                <div className="list-actions">
                  <button
                    className="secondary small-btn"
                    onClick={() => toggleSectionEdit('components')}
                  >
                    {sectionEditMode.components ? 'Done' : 'Edit'}
                  </button>
                  <button className="secondary small-btn" onClick={() => void loadComponentIndex()}>Refresh</button>
                </div>
              </div>
              <div className="list tree-list catalog-list">
                {componentTree.length === 0
                  ? <div className="empty-row">Connect to server to see components</div>
                  : renderTree(componentTree, 0, {
                    selectedValue: selectedCatalogPath,
                    onSelect: setSelectedCatalogPath,
                    insertable: true,
                    insertPendingByPath,
                    deletable: true,
                    editMode: sectionEditMode.components,
                    deletePendingByPath,
                    onInsert: (value, label) => {
                      void queueCatalogInsert(value, label);
                    },
                    onDelete: (value, label) => {
                      void deleteCatalogLeaf('components', value, label);
                    }
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="plugin-column">
          <div className="section catalog-section">
            <label className="section-label">Presentations (Auto-Scan)</label>
            <div className="card card-no-padding catalog-card">
              <div className="card-header">
                <span>Available Presentations</span>
                <div className="list-actions">
                  <button
                    className="secondary small-btn"
                    onClick={() => toggleSectionEdit('presentations')}
                  >
                    {sectionEditMode.presentations ? 'Done' : 'Edit'}
                  </button>
                  <button className="secondary small-btn" onClick={() => void loadComponentIndex()}>Refresh</button>
                </div>
              </div>
              <div className="list tree-list catalog-list">
                {presentationTree.length === 0
                  ? <div className="empty-row">Connect to server to see presentations</div>
                  : renderTree(presentationTree, 0, {
                    selectedValue: selectedCatalogPath,
                    onSelect: setSelectedCatalogPath,
                    insertable: true,
                    insertPendingByPath,
                    deletable: true,
                    editMode: sectionEditMode.presentations,
                    deletePendingByPath,
                    onInsert: (value, label) => {
                      void queueCatalogInsert(value, label);
                    },
                    onDelete: (value, label) => {
                      void deleteCatalogLeaf('presentations', value, label);
                    }
                  })}
              </div>
            </div>
          </div>

          <div className="section catalog-section">
            <label className="section-label">Slides (Auto-Scan)</label>
            <div className="card card-no-padding catalog-card">
              <div className="card-header">
                <span>Available Slides</span>
                <div className="list-actions">
                  <button
                    className="secondary small-btn"
                    onClick={() => toggleSectionEdit('slides')}
                  >
                    {sectionEditMode.slides ? 'Done' : 'Edit'}
                  </button>
                  <button className="secondary small-btn" onClick={() => void loadComponentIndex()}>Refresh</button>
                </div>
              </div>
              <div className="list tree-list catalog-list">
                {slideTree.length === 0
                  ? <div className="empty-row">Connect to server to see slides</div>
                  : renderTree(slideTree, 0, {
                    selectedValue: selectedCatalogPath,
                    onSelect: setSelectedCatalogPath,
                    insertable: true,
                    insertPendingByPath,
                    deletable: true,
                    editMode: sectionEditMode.slides,
                    deletePendingByPath,
                    onInsert: (value, label) => {
                      void queueCatalogInsert(value, label);
                    },
                    onDelete: (value, label) => {
                      void deleteCatalogLeaf('slides', value, label);
                    }
                  })}
              </div>
            </div>
          </div>

          <div className="section catalog-section">
            <label className="section-label">Generate from JSON</label>
            <div className="card card-no-padding catalog-card">
              <div className="card-header">
                <span>Extracted Files</span>
                <div className="list-actions">
                  <button
                    className="secondary small-btn"
                    onClick={() => toggleSectionEdit('files')}
                  >
                    {sectionEditMode.files ? 'Done' : 'Edit'}
                  </button>
                  <button className="secondary small-btn" onClick={() => void loadFiles()}>Refresh</button>
                </div>
              </div>
              <div className="list tree-list catalog-list">
                {fileTree.length === 0
                  ? <div className="empty-row">Connect to server to see files</div>
                  : renderTree(fileTree, 0, {
                    selectedValue: selectedFilePath,
                    onSelect: setSelectedFilePath,
                    deletable: true,
                    editMode: sectionEditMode.files,
                    deletePendingByPath,
                    onDelete: (value, label) => {
                      void deleteExtractedFile(value, label);
                    }
                  })}
              </div>
              <div className="card-footer">
                <button className="success" onClick={() => void generateFromSelectedFile()}>Generate Selected</button>
                <button className="secondary" onClick={() => void convertSelectedToCode()}>Convert to Code Component</button>
                <button
                  className="secondary"
                  onClick={() => {
                    setClipboardCapturePending(false);
                    void sendCommand('capture-preview', {
                      detailed: captureOptions.detailed,
                      saveVectorInJson: captureOptions.saveVectorInJson,
                      skipAssets: !captureOptions.exactRefactor
                    });
                  }}
                >
                  Copy Compact Code
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="plugin-column">
          <div className="section">
            <div className="section-title-row">
              <label className="section-label">Bridge Server</label>
            </div>
            <div className="card">
              <input
                placeholder="Component Name (Optional)"
                value={captureOptions.componentNameOverride}
                onChange={(event) =>
                  setCaptureOptions((prev) => ({ ...prev, componentNameOverride: event.target.value }))
                }
              />
              <input
                style={{ marginTop: 8 }}
                placeholder="Folder (Default: captures)"
                value={captureOptions.captureFolder}
                onChange={(event) =>
                  setCaptureOptions((prev) => ({ ...prev, captureFolder: event.target.value }))
                }
              />
              <button
                className="success"
                style={{ marginTop: 10 }}
                onClick={() =>
                  void sendCommand('capture-bridge', {
                    detailed: captureOptions.detailed,
                    saveVectorInJson: captureOptions.saveVectorInJson,
                    procedural: captureOptions.procedural,
                    refactor: !captureOptions.generatorOnly,
                    compact: !captureOptions.generatorOnly,
                    componentNameOverride: captureOptions.componentNameOverride
                  })
                }
              >
                Capture Sync (to Disk)
              </button>
              <button className="secondary" onClick={() => void sendCommand('capture-png')}>Capture PNG</button>
              <button
                className="secondary"
                onClick={() => {
                  setClipboardCapturePending(true);
                  void sendCommand('capture-preview', {
                    detailed: captureOptions.detailed,
                    saveVectorInJson: captureOptions.saveVectorInJson,
                    skipAssets: false
                  });
                }}
              >
                Capture to Clipboard
              </button>
              <button
                className="secondary"
                onClick={() =>
                  void sendCommand('export-ppt-from-selection', {
                    fidelity: 'balanced',
                    rasterScale: 3,
                    compositionFallback: 'container',
                    textFidelityMode: 'always_editable',
                    platformProfile: 'cross_platform'
                  })
                }
              >
                Build PPT (Selected Frame)
              </button>
              <div className="option-row">
                <label className="checkbox-row">
                  <input
                    type="radio"
                    name="bridge_capture_mode"
                    checked={captureOptions.generatorOnly}
                    onChange={() =>
                      setCaptureOptions((prev) => ({ ...prev, generatorOnly: true, processAuto: false, procedural: false }))
                    }
                  />
                  Generator Only
                </label>
                <label className="checkbox-row">
                  <input
                    type="radio"
                    name="bridge_capture_mode"
                    checked={captureOptions.processAuto}
                    onChange={() =>
                      setCaptureOptions((prev) => ({ ...prev, generatorOnly: false, processAuto: true, procedural: false }))
                    }
                  />
                  Process & Refactor
                </label>
                <label className="checkbox-row">
                  <input
                    type="radio"
                    name="bridge_capture_mode"
                    checked={captureOptions.procedural}
                    onChange={() =>
                      setCaptureOptions((prev) => ({ ...prev, generatorOnly: false, processAuto: false, procedural: true }))
                    }
                  />
                  Procedural Gen
                </label>
              </div>
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={captureOptions.detailed}
                  onChange={(event) => setCaptureOptions((prev) => ({ ...prev, detailed: event.target.checked }))}
                />
                Recursive (Deep Capture)
              </label>
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={captureOptions.saveVectorInJson}
                  onChange={(event) => setCaptureOptions((prev) => ({ ...prev, saveVectorInJson: event.target.checked }))}
                />
                Save Vector in JSON (Slow)
              </label>
            </div>
          </div>

          <div className="section">
            <label className="section-label">Tools</label>
            <div className="card card-no-padding tool-list fixed-panel-card">
              <button className="tool-row-btn" onClick={() => void sendCommand('tools-select-instances')}>
                <Hammer size={12} className="tool-row-icon" />
                <span>Select All Instances</span>
              </button>
              <button className="tool-row-btn" onClick={() => void sendCommand('tools-organize-grid')}>
                <Hammer size={12} className="tool-row-icon" />
                <span>Organize in Grid</span>
              </button>
              <button className="tool-row-btn" onClick={() => void sendCommand('tools-check-accessibility')}>
                <Hammer size={12} className="tool-row-icon" />
                <span>Check Color Contrast (AA/AAA)</span>
              </button>
              <button className="tool-row-btn" onClick={() => void sendCommand('tools-extract-details')}>
                <Hammer size={12} className="tool-row-icon" />
                <span>Extract Details</span>
              </button>
              <button className="tool-row-btn" onClick={() => void sendCommand('capture', { detailed: captureOptions.detailed })}>
                <Hammer size={12} className="tool-row-icon" />
                <span>Download JSON (Manual)</span>
              </button>
              <button className="tool-row-btn tool-row-danger" onClick={() => void sendCommand('cancel')}>
                <Hammer size={12} className="tool-row-icon" />
                <span>Close Plugin</span>
              </button>
            </div>
          </div>

          <div className="section">
            <label className="section-label">Code Preview</label>
            <div className="card fixed-panel-card">
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={captureOptions.exactRefactor}
                  onChange={(event) => setCaptureOptions((prev) => ({ ...prev, exactRefactor: event.target.checked }))}
                />
                Exact Refactored Code (No Compact)
              </label>
              <textarea
                value={previewCode}
                onChange={(event) => setPreviewCode(event.target.value)}
                placeholder="Generated code will appear here..."
              />
              <div className="list-actions">
                <button
                  className="secondary"
                  onClick={() => {
                    void navigator.clipboard.writeText(previewCode);
                    setInfoMessage('Preview copied to clipboard.');
                  }}
                >
                  Copy Preview
                </button>
                <button className="secondary" onClick={() => setPreviewCode('')}>Clear</button>
              </div>
            </div>
          </div>

          <div className="section">
            <label className="section-label">Direct Generate from JSON</label>
            <div className="card fixed-panel-card">
              <textarea
                value={jsonInput}
                onChange={(event) => setJsonInput(event.target.value)}
                placeholder='Paste capture JSON object (root node)...'
              />
              <textarea
                style={{ marginTop: 8 }}
                value={assetsInput}
                onChange={(event) => setAssetsInput(event.target.value)}
                placeholder='Paste assets map JSON, e.g. {"assets/img.png":"base64..."}'
              />
              <button
                className="secondary"
                style={{ marginTop: 8 }}
                onClick={() => {
                  try {
                    const data = JSON.parse(jsonInput || '{}') as Record<string, unknown>;
                    const assets = JSON.parse(assetsInput || '{}') as Record<string, unknown>;
                    void sendCommand('generate-from-json', { data, assets });
                  } catch {
                    setInfoMessage('Invalid JSON input for generate-from-json.');
                  }
                }}
              >
                Send JSON Payload
              </button>
            </div>
          </div>

          <div className="section">
            <label className="section-label">Event Stream</label>
            <div className="card card-no-padding fixed-panel-card">
              <div className="log-list">
                {events.length === 0 ? (
                  <div className="empty-row">No events received yet</div>
                ) : (
                  events.map((eventItem) => (
                    <div
                      key={eventItem.id}
                      className={`log-item ${eventItem.type === 'command-ack' ? 'ack-event' : ''}`}
                    >
                      <div>
                        <span className={`log-type ${eventItem.type === 'command-ack' ? 'ack-type' : ''}`}>{eventItem.type}</span>
                        <span className="log-time">{new Date(eventItem.createdAt).toLocaleTimeString()}</span>
                      </div>
                      <div className="log-payload">{JSON.stringify(eventItem.payload).slice(0, 260)}</div>
                      {eventItem.commandId ? <div className="log-command-id">commandId: {eventItem.commandId}</div> : null}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

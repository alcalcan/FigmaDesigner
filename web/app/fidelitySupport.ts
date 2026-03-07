type GenericRecord = Record<string, unknown>;

const SUPPORTED_FILL_TYPES = new Set(['SOLID', 'GRADIENT_LINEAR', 'IMAGE']);
const SUPPORTED_STROKE_TYPES = new Set(['SOLID']);
const SUPPORTED_EFFECT_TYPES = new Set(['DROP_SHADOW', 'INNER_SHADOW', 'LAYER_BLUR', 'BACKGROUND_BLUR']);

const asRecord = (value: unknown): GenericRecord | null => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  return value as GenericRecord;
};

const asArray = <T,>(value: unknown): T[] => (Array.isArray(value) ? (value as T[]) : []);

const nodeLabel = (node: GenericRecord): string => {
  const type = typeof node.type === 'string' ? node.type : 'NODE';
  const name = typeof node.name === 'string' && node.name.trim().length > 0 ? node.name.trim() : '';
  return name ? `${name} (${type})` : type;
};

const pushIssue = (issues: string[], message: string): void => {
  if (!issues.includes(message)) {
    issues.push(message);
  }
};

const walk = (nodeValue: unknown, parentPath: string, issues: string[]): void => {
  const node = asRecord(nodeValue);
  if (!node) return;

  const label = nodeLabel(node);
  const currentPath = parentPath ? `${parentPath} > ${label}` : label;
  const props = asRecord(node.props) || {};

  // Mask support is now partially implemented via group wrapping in the renderer
  // if (props.isMask === true) {
  //   pushIssue(issues, `${currentPath}: mask behavior is not supported in Fidelity mode yet.`);
  // }

  const fills = asArray<GenericRecord>(props.fills);
  fills.forEach((fill, index) => {
    if (fill.visible === false) return;
    const fillType = typeof fill.type === 'string' ? fill.type : 'UNKNOWN';
    if (!SUPPORTED_FILL_TYPES.has(fillType)) {
      pushIssue(issues, `${currentPath}: fill[${index}] uses unsupported type "${fillType}".`);
    }
  });

  const strokes = asArray<GenericRecord>(props.strokes);
  strokes.forEach((stroke, index) => {
    if (stroke.visible === false) return;
    const strokeType = typeof stroke.type === 'string' ? stroke.type : 'UNKNOWN';
    if (!SUPPORTED_STROKE_TYPES.has(strokeType)) {
      pushIssue(issues, `${currentPath}: stroke[${index}] uses unsupported paint type "${strokeType}".`);
    }
  });

  const effects = asArray<GenericRecord>(props.effects);
  effects.forEach((effect, index) => {
    if (effect.visible === false) return;
    const effectType = typeof effect.type === 'string' ? effect.type : 'UNKNOWN';
    if (!SUPPORTED_EFFECT_TYPES.has(effectType)) {
      pushIssue(issues, `${currentPath}: effect[${index}] uses unsupported type "${effectType}".`);
    }
  });

  asArray<unknown>(node.children).forEach((child) => walk(child, currentPath, issues));
};

export const collectUnsupportedFidelitySemantics = (node: unknown): string[] => {
  const issues: string[] = [];
  walk(node, '', issues);
  return issues;
};

import { Pipeline } from "./pipeline";
import { JsonReconstructor } from "./components/JsonReconstructor";
import { AssetStore, processFills } from "./components/PaintHelpers";
import * as ComponentRegistry from "./components/index";
import * as ExtractPPT from "./presentation_logic/PPTExtractor";
import { runAccessibilityCheck } from "./tools/accessibility_checker";

// Plugin Initialization Log
console.log(`[Plugin] Starting code.ts | Time: ${Date.now()}`);

// Show the HTML page in "ui.html".
console.log("[Plugin] Calling figma.showUI");
figma.showUI(__html__, { width: 450, height: 800 });

// Helper to log to UI (since we can't see Figma console)
const logToUI = (msg: string) => {
  console.log(msg);
  if (figma.ui) {
    figma.ui.postMessage({ type: 'log', message: msg });
  }
};



// --- SHARED CAPTURE LOGIC ---
interface AssetRecord {
  fileName: string;
  type: 'image' | 'svg';
  content: string; // base64
}

const sanitizeName = (name: string) => name.replace(/[^a-z0-9]/gi, '_');

interface PptErrorElement {
  type: 'text';
  x: number;
  y: number;
  w: number;
  h: number;
  text: string;
  fontSize: number;
  color: string;
}

interface PptErrorSlide {
  name: string;
  elements: PptErrorElement[];
}

type PptSlidePayload = ExtractPPT.PPTSlide | PptErrorSlide;

const createPptErrorSlide = (name: string, text: string): PptErrorSlide => ({
  name,
  elements: [{
    type: 'text',
    x: 50,
    y: 300,
    w: 800,
    h: 100,
    text,
    fontSize: 24,
    color: "FF0000"
  }]
});

const postPptExportError = (message: string) => {
  figma.notify(message, { error: true });
  figma.ui.postMessage({
    type: 'export-ppt-error',
    message
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const safeGet = (node: any, key: string) => {
  try {
    const val = node[key];
    if (typeof val === "function") return undefined;
    if (val === figma.mixed) return "mixed";
    return val;
  } catch (e) {
    return undefined;
  }
};


// Helper for async timeouts
const withTimeout = <T>(promise: Promise<T>, ms: number, errorMsg: string): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error(errorMsg)), ms))
  ]);
};

const roundTo = (value: number, precision: number = 2): number => {
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
};

const formatPx = (value: unknown): string => {
  if (typeof value !== "number") return value === undefined ? "n/a" : String(value);
  return `${roundTo(value)}px`;
};

const formatDegrees = (value: unknown): string => {
  if (typeof value !== "number") return value === undefined ? "n/a" : String(value);
  return `${roundTo(value)}deg`;
};

const formatPercent = (value: unknown): string => {
  if (typeof value !== "number") return value === undefined ? "n/a" : String(value);
  return `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%`;
};

const hexFromChannel = (value: number): string =>
  Math.round(Math.max(0, Math.min(1, value)) * 255).toString(16).padStart(2, "0").toUpperCase();

const rgbToHex = (color: RGB): string =>
  `#${hexFromChannel(color.r)}${hexFromChannel(color.g)}${hexFromChannel(color.b)}`;

const rgbaToHex = (color: RGBA): string =>
  `#${hexFromChannel(color.r)}${hexFromChannel(color.g)}${hexFromChannel(color.b)}${hexFromChannel(color.a)}`;

const isPaint = (value: unknown): value is Paint =>
  typeof value === "object" && value !== null && "type" in value;

const toVisiblePaints = (value: unknown): Paint[] => {
  if (!Array.isArray(value)) return [];
  return value.filter((paint): paint is Paint => isPaint(paint) && paint.visible !== false);
};

const describePaint = (paint: Paint): string => {
  if (paint.type === "SOLID") {
    const opacity = typeof paint.opacity === "number" ? paint.opacity : 1;
    return `SOLID ${rgbToHex(paint.color)} (opacity ${formatPercent(opacity)})`;
  }

  if ("gradientStops" in paint) {
    const stops = paint.gradientStops
      .map((stop) => `${Math.round(stop.position * 100)}% ${rgbaToHex(stop.color)}`)
      .join(", ");
    return `${paint.type} [${stops}]`;
  }

  if (paint.type === "IMAGE") {
    return `IMAGE (scaleMode ${paint.scaleMode})`;
  }

  return paint.type;
};

const describePaintList = (value: unknown): string[] => {
  if (value === "mixed") return ["mixed"];
  const visiblePaints = toVisiblePaints(value);
  if (visiblePaints.length === 0) return ["none"];
  return visiblePaints.map((paint, index) => `${index + 1}. ${describePaint(paint)}`);
};

const firstSolidHex = (value: unknown): string | null => {
  const solid = toVisiblePaints(value).find((paint): paint is SolidPaint => paint.type === "SOLID");
  return solid ? rgbToHex(solid.color) : null;
};

const formatLineHeight = (value: unknown): string => {
  if (value === "mixed") return "mixed";
  if (typeof value !== "object" || value === null) return "n/a";

  const maybeValue = value as { unit?: unknown; value?: unknown };
  if (maybeValue.unit === "AUTO") return "AUTO";
  if (typeof maybeValue.value !== "number") return "n/a";
  if (maybeValue.unit === "PIXELS") return `${roundTo(maybeValue.value)}px`;
  if (maybeValue.unit === "PERCENT") return `${roundTo(maybeValue.value)}%`;
  return String(maybeValue.unit ?? "n/a");
};

const formatLetterSpacing = (value: unknown): string => {
  if (value === "mixed") return "mixed";
  if (typeof value !== "object" || value === null) return "n/a";

  const maybeValue = value as { unit?: unknown; value?: unknown };
  if (typeof maybeValue.value !== "number") return "n/a";
  if (maybeValue.unit === "PIXELS") return `${roundTo(maybeValue.value)}px`;
  if (maybeValue.unit === "PERCENT") return `${roundTo(maybeValue.value)}%`;
  return `${roundTo(maybeValue.value)}`;
};

const formatFontName = (value: unknown): string => {
  if (value === "mixed") return "mixed";
  if (typeof value !== "object" || value === null) return "n/a";

  const maybeFont = value as { family?: unknown; style?: unknown };
  if (typeof maybeFont.family === "string" && typeof maybeFont.style === "string") {
    return `${maybeFont.family} ${maybeFont.style}`;
  }

  return "n/a";
};

const describeEffects = (value: unknown): string[] => {
  if (value === "mixed") return ["mixed"];
  if (!Array.isArray(value) || value.length === 0) return ["none"];

  const lines: string[] = [];
  for (const effect of value) {
    if (typeof effect !== "object" || effect === null || !("type" in effect)) continue;
    const typedEffect = effect as {
      type?: unknown;
      visible?: unknown;
      radius?: unknown;
      offset?: { x: number; y: number };
      color?: RGBA;
    };

    const status = typedEffect.visible === false ? "hidden" : "visible";
    const radius = formatPx(typedEffect.radius);
    const offset = typedEffect.offset ? `${formatPx(typedEffect.offset.x)}, ${formatPx(typedEffect.offset.y)}` : "n/a";
    const color = typedEffect.color ? rgbaToHex(typedEffect.color) : "n/a";
    lines.push(`${String(typedEffect.type ?? "UNKNOWN")} (state ${status}, radius ${radius}, offset ${offset}, color ${color})`);
  }

  return lines.length > 0 ? lines : ["none"];
};

const getTextNodesForDetails = (sourceNode: SceneNode): TextNode[] => {
  const textNodes: TextNode[] = [];
  if (sourceNode.type === "TEXT") {
    textNodes.push(sourceNode);
  }

  if ("findAll" in sourceNode) {
    const descendants = sourceNode.findAll((node) => node.type === "TEXT") as TextNode[];
    textNodes.push(...descendants);
  }

  return textNodes;
};

const VECTOR_BOUND_TYPES = new Set<SceneNode["type"]>([
  "VECTOR",
  "BOOLEAN_OPERATION",
  "STAR",
  "POLYGON",
  "ELLIPSE",
  "LINE"
]);

interface VectorBoundsSummary {
  nodeCount: number;
  minX: number;
  minY: number;
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
}

const getVectorBoundsSummary = (sourceNode: SceneNode): VectorBoundsSummary | null => {
  const vectorNodes: SceneNode[] = [];

  if (VECTOR_BOUND_TYPES.has(sourceNode.type)) {
    vectorNodes.push(sourceNode);
  }

  if ("findAll" in sourceNode) {
    const descendants = sourceNode.findAll((node) => VECTOR_BOUND_TYPES.has(node.type));
    vectorNodes.push(...descendants);
  }

  if (vectorNodes.length === 0) return null;

  const sourceAbsX = sourceNode.absoluteTransform[0][2];
  const sourceAbsY = sourceNode.absoluteTransform[1][2];

  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  for (const node of vectorNodes) {
    const absX = node.absoluteTransform[0][2];
    const absY = node.absoluteTransform[1][2];
    minX = Math.min(minX, absX);
    minY = Math.min(minY, absY);
    maxX = Math.max(maxX, absX + node.width);
    maxY = Math.max(maxY, absY + node.height);
  }

  return {
    nodeCount: vectorNodes.length,
    minX,
    minY,
    width: Math.max(0, maxX - minX),
    height: Math.max(0, maxY - minY),
    offsetX: minX - sourceAbsX,
    offsetY: minY - sourceAbsY
  };
};

const buildNodeDetailsText = async (sourceNode: SceneNode): Promise<string> => {
  const lines: string[] = [];
  const fills = safeGet(sourceNode, "fills");
  const strokes = safeGet(sourceNode, "strokes");
  const paddingTop = safeGet(sourceNode, "paddingTop");
  const paddingRight = safeGet(sourceNode, "paddingRight");
  const paddingBottom = safeGet(sourceNode, "paddingBottom");
  const paddingLeft = safeGet(sourceNode, "paddingLeft");
  const layoutMode = safeGet(sourceNode, "layoutMode");
  const cornerRadius = safeGet(sourceNode, "cornerRadius");

  lines.push("DEVELOPER HANDOFF");
  lines.push("");
  lines.push(`Name: ${sourceNode.name}`);
  lines.push(`Type: ${sourceNode.type}`);
  lines.push(`Dimensions: ${formatPx(sourceNode.width)} x ${formatPx(sourceNode.height)}`);
  lines.push(`Position: x ${formatPx(sourceNode.x)}, y ${formatPx(sourceNode.y)}`);
  lines.push(`Opacity: ${formatPercent(safeGet(sourceNode, "opacity"))}`);
  lines.push(`Rotation: ${formatDegrees(safeGet(sourceNode, "rotation"))}`);
  lines.push(`Blend mode: ${String(safeGet(sourceNode, "blendMode") ?? "PASS_THROUGH")}`);

  if (sourceNode.type === "INSTANCE") {
    try {
      const mainComponent = await sourceNode.getMainComponentAsync();
      lines.push(`Main component: ${mainComponent ? mainComponent.name : "unknown"}`);
    } catch (_error) {
      lines.push("Main component: unknown");
    }
  }
  if (sourceNode.type === "COMPONENT") {
    lines.push(`Component key: ${sourceNode.key}`);
  }
  if ("defaultVariant" in sourceNode && sourceNode.defaultVariant) {
    lines.push(`Default variant: ${sourceNode.defaultVariant.name}`);
  }

  lines.push("");
  lines.push("Auto layout");
  lines.push(`- mode: ${layoutMode === undefined ? "n/a" : String(layoutMode)}`);
  lines.push(`- primary axis sizing: ${String(safeGet(sourceNode, "primaryAxisSizingMode") ?? "n/a")}`);
  lines.push(`- counter axis sizing: ${String(safeGet(sourceNode, "counterAxisSizingMode") ?? "n/a")}`);
  lines.push(`- item spacing: ${formatPx(safeGet(sourceNode, "itemSpacing"))}`);
  lines.push(`- padding top/right/bottom/left: ${formatPx(paddingTop)} / ${formatPx(paddingRight)} / ${formatPx(paddingBottom)} / ${formatPx(paddingLeft)}`);

  const vectorBounds = getVectorBoundsSummary(sourceNode);
  lines.push("");
  lines.push("Vector bounds");
  if (!vectorBounds) {
    lines.push("- no vector geometry found");
  } else {
    lines.push(`- vector nodes found: ${vectorBounds.nodeCount}`);
    lines.push(`- combined vector bbox: ${formatPx(vectorBounds.width)} x ${formatPx(vectorBounds.height)}`);
    lines.push(`- bbox offset in selected element: x ${formatPx(vectorBounds.offsetX)}, y ${formatPx(vectorBounds.offsetY)}`);
    lines.push(`- container vs vector delta: width ${formatPx(sourceNode.width - vectorBounds.width)}, height ${formatPx(sourceNode.height - vectorBounds.height)}`);
  }

  lines.push("");
  lines.push("Corners");
  lines.push(`- corner radius: ${formatPx(cornerRadius)}`);
  lines.push(`- top-left radius: ${formatPx(safeGet(sourceNode, "topLeftRadius"))}`);
  lines.push(`- top-right radius: ${formatPx(safeGet(sourceNode, "topRightRadius"))}`);
  lines.push(`- bottom-right radius: ${formatPx(safeGet(sourceNode, "bottomRightRadius"))}`);
  lines.push(`- bottom-left radius: ${formatPx(safeGet(sourceNode, "bottomLeftRadius"))}`);

  lines.push("");
  lines.push("Fills");
  describePaintList(fills).forEach((line) => lines.push(`- ${line}`));

  lines.push("");
  lines.push("Borders");
  lines.push(`- stroke weight: ${formatPx(safeGet(sourceNode, "strokeWeight"))}`);
  lines.push(`- stroke align: ${String(safeGet(sourceNode, "strokeAlign") ?? "n/a")}`);
  lines.push(`- stroke top/right/bottom/left: ${formatPx(safeGet(sourceNode, "strokeTopWeight"))} / ${formatPx(safeGet(sourceNode, "strokeRightWeight"))} / ${formatPx(safeGet(sourceNode, "strokeBottomWeight"))} / ${formatPx(safeGet(sourceNode, "strokeLeftWeight"))}`);
  lines.push(`- stroke style id: ${String(safeGet(sourceNode, "strokeStyleId") ?? "n/a")}`);
  describePaintList(strokes).forEach((line) => lines.push(`- ${line}`));

  lines.push("");
  lines.push("Effects");
  describeEffects(safeGet(sourceNode, "effects")).forEach((line) => lines.push(`- ${line}`));

  const textNodes = getTextNodesForDetails(sourceNode);
  lines.push("");
  lines.push(`Typography (${textNodes.length} text layer${textNodes.length === 1 ? "" : "s"})`);
  if (textNodes.length === 0) {
    lines.push("- none");
  } else {
    const maxTextRows = 20;
    textNodes.slice(0, maxTextRows).forEach((textNode, index) => {
      const textPreviewRaw = textNode.characters.replace(/\s+/g, " ").trim();
      const textPreview = textPreviewRaw.length > 60 ? `${textPreviewRaw.slice(0, 57)}...` : textPreviewRaw;
      const textColor = firstSolidHex(safeGet(textNode, "fills")) ?? "n/a";
      lines.push(
        `- ${index + 1}. ${textNode.name}: font ${formatFontName(safeGet(textNode, "fontName"))}, size ${formatPx(safeGet(textNode, "fontSize"))}, line-height ${formatLineHeight(safeGet(textNode, "lineHeight"))}, letter-spacing ${formatLetterSpacing(safeGet(textNode, "letterSpacing"))}, align ${String(safeGet(textNode, "textAlignHorizontal") ?? "n/a")}/${String(safeGet(textNode, "textAlignVertical") ?? "n/a")}, color ${textColor}, text "${textPreview}"`
      );
    });

    if (textNodes.length > maxTextRows) {
      lines.push(`- ... plus ${textNodes.length - maxTextRows} more text layers`);
    }
  }

  lines.push("");
  lines.push("Quick CSS");
  lines.push(`width: ${formatPx(sourceNode.width)};`);
  lines.push(`height: ${formatPx(sourceNode.height)};`);
  lines.push(`opacity: ${formatPercent(safeGet(sourceNode, "opacity"))};`);
  lines.push(`background: ${firstSolidHex(fills) ?? "transparent"};`);

  const strokeWeight = safeGet(sourceNode, "strokeWeight");
  const strokeColor = firstSolidHex(strokes);
  if (typeof strokeWeight === "number" && strokeColor) {
    lines.push(`border: ${formatPx(strokeWeight)} solid ${strokeColor};`);
  } else {
    lines.push("border: none;");
  }

  if (typeof cornerRadius === "number") {
    lines.push(`border-radius: ${formatPx(cornerRadius)};`);
  } else {
    lines.push("border-radius: mixed;");
  }

  if ([paddingTop, paddingRight, paddingBottom, paddingLeft].every((value) => typeof value === "number")) {
    lines.push(`padding: ${formatPx(paddingTop)} ${formatPx(paddingRight)} ${formatPx(paddingBottom)} ${formatPx(paddingLeft)};`);
  } else {
    lines.push("padding: n/a;");
  }

  return lines.join("\n");
};

const createNodePreviewCopy = (sourceNode: SceneNode): SceneNode => {
  if (sourceNode.type === "COMPONENT") {
    return sourceNode.createInstance();
  }
  if ("defaultVariant" in sourceNode && sourceNode.defaultVariant) {
    return sourceNode.defaultVariant.createInstance();
  }
  return sourceNode.clone();
};

const loadDetailsFont = async (): Promise<FontName> => {
  const fontCandidates: FontName[] = [
    { family: "Inter", style: "Regular" },
    { family: "Roboto", style: "Regular" }
  ];

  for (const font of fontCandidates) {
    try {
      await figma.loadFontAsync(font);
      return font;
    } catch (_error) {
      // Try next candidate.
    }
  }

  throw new Error("Unable to load a readable font for details text.");
};

const createExtractDetailsCard = async (sourceNode: SceneNode): Promise<FrameNode> => {
  const previewNode = createNodePreviewCopy(sourceNode);
  const font = await loadDetailsFont();

  const previewWidth = Math.max(1, Math.ceil(previewNode.width));
  const previewHeight = Math.max(1, Math.ceil(previewNode.height));
  const contentWidth = Math.max(520, previewWidth);

  const previewWrapper = figma.createFrame();
  previewWrapper.name = "Element Preview";
  previewWrapper.layoutMode = "NONE";
  previewWrapper.primaryAxisSizingMode = "FIXED";
  previewWrapper.counterAxisSizingMode = "FIXED";
  previewWrapper.resizeWithoutConstraints(previewWidth, previewHeight);
  previewWrapper.fills = [];
  previewWrapper.strokes = [];
  previewWrapper.clipsContent = false;
  previewWrapper.appendChild(previewNode);
  previewNode.x = 0;
  previewNode.y = 0;

  const detailsText = figma.createText();
  detailsText.name = "Developer Details";
  detailsText.fontName = font;
  detailsText.fontSize = 13;
  detailsText.lineHeight = { unit: "PIXELS", value: 20 };
  detailsText.fills = [{ type: "SOLID", color: { r: 0.13, g: 0.13, b: 0.13 } }];
  detailsText.characters = await buildNodeDetailsText(sourceNode);
  detailsText.textAutoResize = "HEIGHT";
  detailsText.resize(contentWidth, detailsText.height);
  detailsText.layoutAlign = "STRETCH";

  const detailsCard = figma.createFrame();
  detailsCard.name = `${sourceNode.name} / Extract Details`;
  detailsCard.layoutMode = "VERTICAL";
  detailsCard.primaryAxisSizingMode = "AUTO";
  detailsCard.counterAxisSizingMode = "FIXED";
  detailsCard.resizeWithoutConstraints(contentWidth + 80, 100);
  detailsCard.paddingTop = 40;
  detailsCard.paddingRight = 40;
  detailsCard.paddingBottom = 40;
  detailsCard.paddingLeft = 40;
  detailsCard.itemSpacing = 24;
  detailsCard.cornerRadius = 24;
  detailsCard.fills = [{ type: "SOLID", color: { r: 0.965, g: 0.965, b: 0.975 } }];
  detailsCard.strokes = [{ type: "SOLID", color: { r: 0.85, g: 0.85, b: 0.88 } }];
  detailsCard.strokeWeight = 1;
  detailsCard.clipsContent = false;

  detailsCard.appendChild(previewWrapper);
  detailsCard.appendChild(detailsText);

  const absoluteX = sourceNode.absoluteTransform[0][2];
  const absoluteY = sourceNode.absoluteTransform[1][2];
  detailsCard.x = absoluteX + sourceNode.width + 120;
  detailsCard.y = absoluteY;

  return detailsCard;
};

const captureNode = async (
  node: SceneNode,
  detailed: boolean,
  assetStore: AssetStore,
  rootName: string,
  saveVectorInJson: boolean = false,
  skipAssets: boolean = false,
  depth: number = 0,
  offset: { x: number, y: number } = { x: 0, y: 0 }
): Promise<Record<string, unknown> | null> => {

  if (depth > 200) {
    console.warn(`[Capture] Max recursion depth reached at node: ${node.name}`);
    return null;
  }

  // Skip non-visible nodes
  if (!node.visible) {
    return null;
  }

  const parentLayoutMode = (node.parent && "layoutMode" in node.parent)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? ((node.parent as any).layoutMode as "NONE" | "HORIZONTAL" | "VERTICAL" | "GRID")
    : undefined;
  const parentIsGrid = parentLayoutMode === "GRID";


  // 1. Basic Identity & Transform
  // Use 'Record<string, unknown>' to allow building the object dynamically
  const data: Record<string, unknown> = {
    id: node.id,
    name: node.name,
    type: node.type,
    visible: safeGet(node, "visible") ?? true,
    locked: safeGet(node, "locked") ?? false,
    opacity: safeGet(node, "opacity") ?? 1,
    blendMode: safeGet(node, "blendMode") ?? "PASS_THROUGH",
    isMask: safeGet(node, "isMask"),
    maskType: safeGet(node, "maskType"),
    clipsContent: safeGet(node, "clipsContent"),
    booleanOperation: safeGet(node, "booleanOperation"),
    effects: safeGet(node, "effects"),

    // Geometry
    x: (() => {
      let x = node.x;
      // Removed incorrect Group subtraction logic.
      // Parents in Figma groups contribute to the absolute position in a way that
      // node.x is actually relative to the Group's top-left (visually).
      // However, our previous logic was double-subtracting or misunderstanding the API slightly.
      // If we want 'relative to parent', node.x is ALREADY relative to parent (if Group/Frame).
      // If we want 'relative to selection root', we subtract offset.

      // Critical Fix: Do NOT subtract parent.x/y for Groups explicitly here. 
      // Figma's node.x/y for a child of a Group is relative to the Group's bounds.
      if (depth === 0) x -= offset.x;
      return x;
    })(),
    y: (() => {
      let y = node.y;
      if (depth === 0) y -= offset.y;
      return y;
    })(),
    width: node.width,
    height: node.height,
    rotation: safeGet(node, "rotation"),
    relativeTransform: (() => {
      const transform = safeGet(node, "relativeTransform");
      if (!transform) return transform;

      const t = [...transform.map((row: number[]) => [...row])] as [[number, number, number], [number, number, number]];

      // Normalization for Groups (children are relative to root Page instead of Group)
      if (node.parent && node.parent.type === "GROUP") {
        t[0][2] -= node.parent.x;
        t[1][2] -= node.parent.y;
      }

      // Normalization for selection root
      if (depth === 0) {
        t[0][2] -= offset.x;
        t[1][2] -= offset.y;
      }

      return t;
    })(),

    // Constraints & Layout Positioning
    constraints: safeGet(node, "constraints"),
    layoutAlign: safeGet(node, "layoutAlign"), // MIN, MAX, CENTER, STRETCH, INHERIT
    layoutGrow: safeGet(node, "layoutGrow"),
    layoutPositioning: safeGet(node, "layoutPositioning"), // AUTO, ABSOLUTE
    layoutSizingHorizontal: safeGet(node, "layoutSizingHorizontal"), // FIXED, HUG, FILL
    layoutSizingVertical: safeGet(node, "layoutSizingVertical"), // FIXED, HUG, FILL
    // Only grid children can legally carry row/column span.
    gridRowSpan: parentIsGrid ? safeGet(node, "gridRowSpan") : undefined,
    gridColumnSpan: parentIsGrid ? safeGet(node, "gridColumnSpan") : undefined,
  };

  // 2. Auto Layout (Frame / Component / Instance)
  if ("layoutMode" in node) {
    const layoutMode = safeGet(node, "layoutMode") as "NONE" | "HORIZONTAL" | "VERTICAL" | "GRID" | undefined;
    const primarySizing = safeGet(node, "primaryAxisSizingMode");
    const counterSizing = safeGet(node, "counterAxisSizingMode");

    // Store physical-axis sizing explicitly for new captures.
    // horizontal => width axis, vertical => height axis.
    // Legacy captures used primary/counter under these keys.
    const horizontalSizing = layoutMode === "VERTICAL" ? counterSizing : primarySizing;
    const verticalSizing = layoutMode === "VERTICAL" ? primarySizing : counterSizing;

    data.layout = {
      mode: layoutMode, // NONE, HORIZONTAL, VERTICAL
      sizing: {
        horizontal: horizontalSizing, // FIXED, AUTO (width axis)
        vertical: verticalSizing, // FIXED, AUTO (height axis)
      },
      sizingConvention: "PHYSICAL_AXES_V1",
      alignment: {
        primary: safeGet(node, "primaryAxisAlignItems"), // MIN, MAX, CENTER, SPACE_BETWEEN
        counter: safeGet(node, "counterAxisAlignItems"), // MIN, MAX, CENTER, BASELINE
      },
      spacing: safeGet(node, "itemSpacing"),
      counterAxisSpacing: safeGet(node, "counterAxisSpacing"),
      layoutWrap: safeGet(node, "layoutWrap"),
      counterAxisAlignContent: safeGet(node, "counterAxisAlignContent"),
      gridRowCount: safeGet(node, "gridRowCount"),
      gridColumnCount: safeGet(node, "gridColumnCount"),
      gridRowGap: safeGet(node, "gridRowGap"),
      gridColumnGap: safeGet(node, "gridColumnGap"),
      gridRowSizes: safeGet(node, "gridRowSizes"),
      gridColumnSizes: safeGet(node, "gridColumnSizes"),
      padding: {
        top: safeGet(node, "paddingTop"),
        right: safeGet(node, "paddingRight"),
        bottom: safeGet(node, "paddingBottom"),
        left: safeGet(node, "paddingLeft"),
      },
      itemReverseZIndex: safeGet(node, "itemReverseZIndex"),
      strokesIncludedInLayout: safeGet(node, "strokesIncludedInLayout"),
    };

    // Cleanup if no layout
    if (data.layout && (data.layout as { mode: string }).mode === "NONE") {
      // We usually keep it to explicitly say NONE, but can simplify if needed.
    }
  }

  // 3. Visuals: Fills (Images & Gradients)
  if ("fills" in node) {
    const nodeWithFills = node as GeometryMixin;
    try {
      // Add timeout to paint processing (images can hang)
      data.fills = await withTimeout(
        processFills(nodeWithFills.fills as Readonly<Paint[]>, assetStore),
        5000,
        `Fills processing timeout for ${node.name}`
      );
    } catch (e) {
      console.warn(`[Capture] Failed to process fills for ${node.name}:`, e);
      // Fallback: just use raw fills without hydrating assets, or empty
      data.fills = [];
    }
  }

  // 4. Visuals: Strokes
  if ("strokes" in node) {
    try {
      data.strokes = await withTimeout(
        processFills(node.strokes as Readonly<Paint[]>, assetStore),
        3000,
        `Strokes processing timeout for ${node.name}`
      );
    } catch (e) {
      console.warn(`[Capture] Failed to process strokes for ${node.name}:`, e);
      data.strokes = [];
    }

    data.strokeWeight = safeGet(node, "strokeWeight");
    data.strokeAlign = safeGet(node, "strokeAlign");
    data.strokeCap = safeGet(node, "strokeCap");
    data.strokeJoin = safeGet(node, "strokeJoin");
    data.dashPattern = safeGet(node, "dashPattern");
    data.strokeMiterLimit = safeGet(node, "strokeMiterLimit");
    data.strokeStyleId = safeGet(node, "strokeStyleId");

    // Always capture individual weights for frames/rects/etc.
    data.strokeTopWeight = safeGet(node, "strokeTopWeight");
    data.strokeRightWeight = safeGet(node, "strokeRightWeight");
    data.strokeBottomWeight = safeGet(node, "strokeBottomWeight");
    data.strokeLeftWeight = safeGet(node, "strokeLeftWeight");

    if (data.strokeWeight === "mixed") {
      console.log(`[Capture] Node ${node.name} has mixed strokeWeight. Weights: T:${data.strokeTopWeight} R:${data.strokeRightWeight} B:${data.strokeBottomWeight} L:${data.strokeLeftWeight}`);
    }
  }

  // 5. Geometry: Corners
  if ("cornerRadius" in node) {
    if (node.cornerRadius !== figma.mixed) {
      data.cornerRadius = node.cornerRadius;
    } else {
      data.cornerRadius = "mixed";
      if ("topLeftRadius" in node) {
        data.corners = {
          topLeft: safeGet(node, "topLeftRadius"),
          topRight: safeGet(node, "topRightRadius"),
          bottomRight: safeGet(node, "bottomRightRadius"),
          bottomLeft: safeGet(node, "bottomLeftRadius")
        };
      }
    }
  }

  // 5.5 Star / Polygon properties
  if (node.type === "STAR") {
    data.pointCount = safeGet(node, "pointCount");
    data.innerRadius = safeGet(node, "innerRadius");
  } else if (node.type === "POLYGON") {
    data.pointCount = safeGet(node, "pointCount");
  }

  // 6. Icon / Vector Export
  // We keep the heuristic: Vector/Star/Polygon/Group + Small OR name has "icon"/"star"
  // Including GROUP allows small grouped vectors to be treated as a single SVG asset.
  const isVectorLike = node.type === "VECTOR" || node.type === "STAR" || node.type === "POLYGON" || node.type === "BOOLEAN_OPERATION" || node.type === "GROUP";

  // Ensure masks are never treated as icons/assets to export as SVG
  const isMask = safeGet(node, "isMask") === true;

  const isIcon = isVectorLike &&
    !isMask &&
    node.type !== "BOOLEAN_OPERATION" && ( // Exclude Boolean Operations from automatic icon classification
      (node.width <= 64 && node.height <= 64) ||
      node.name.toLowerCase().includes("icon") ||
      node.name.toLowerCase().includes("star")
    );

  // New logic: Export vectors as SVG unless explicitly asked to keep in JSON
  const isVectorToExport = isVectorLike && !saveVectorInJson && !isMask;

  const hasVisibleContent = (node: SceneNode): boolean => {
    // Check Dimensions (Must have some size)
    if (node.width < 0.01 || node.height < 0.01) return false;

    // Check Fills
    if ("fills" in node) {
      const fills = safeGet(node, "fills");
      if (fills === "mixed") return true;
      if (Array.isArray(fills) && (fills as Paint[]).some(p => p.visible !== false && p.opacity !== 0)) return true;
    }
    // Check Strokes
    if ("strokes" in node) {
      const strokes = safeGet(node, "strokes");
      if (strokes === "mixed") return true;
      if (Array.isArray(strokes) && (strokes as Paint[]).some(p => p.visible !== false && p.opacity !== 0)) return true;
    }
    // Check Effects
    if ("effects" in node && Array.isArray(node.effects)) {
      if (node.effects.some(e => e.visible !== false)) return true;
    }

    // Check if it's a mask (Masks are functional content even if they have no fills/strokes)
    if ("isMask" in node && node.isMask === true) return true;

    // Check Children (for Containers/Boolean Ops that might have visible content inside)
    if ("children" in node) {
      return (node as ChildrenMixin).children.some(child => child.visible && hasVisibleContent(child));
    }

    return false;
  };

  if (isIcon || isVectorToExport) {
    // Optimization: Skip export if the node has no visible content (avoids "node may not have any visible layers" error)
    const hasContent = hasVisibleContent(node);

    if (hasContent || skipAssets) {
      try {
        let base64 = "";
        if (skipAssets) {
          // Create dummy SVG content with correct dimensions
          const w = node.width || 1;
          const h = node.height || 1;
          const dummySvg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${h}" fill="none"/></svg>`;
          base64 = figma.base64Encode(Uint8Array.from(dummySvg.split('').map(c => c.charCodeAt(0))));
        } else {
          // Wrap exportAsync in timeout (5 seconds)
          const svgBytes = await withTimeout(
            node.exportAsync({ format: 'SVG' }),
            5000,
            `SVG Export Timed Out for ${node.name}`
          );
          base64 = figma.base64Encode(svgBytes);
        }

        const prefix = isIcon ? 'icon' : 'vector';
        const fileName = `${prefix}_${sanitizeName(node.name)}_${node.id.replace(/:/g, '_')}.svg`;
        const assetRef = `assets/${fileName}`;
        assetStore.assets[assetRef] = { bytesBase64: base64 };
        data.svgPath = assetRef;
        // Flag to tell BaseComponent NOT to try and guess if this is a rotated icon
        // because we are capturing it exactly as is from the source.
        data.preventBakingAnalysis = true;
      } catch (e) {
        const msg = (e as Error).message || "";
        if (msg.includes("visible layers") || msg.includes("no visible layers")) {
          // Ignore this specific error as it just means the node is invisible/empty, which is fine.
        } else {
          console.warn(`Failed to export SVG for ${node.name}:`, e);
          // Don't kill the whole process, just continue without the SVG
          // Maybe add a placeholder error property?
          data.exportError = msg;
        }
      }
    }
  }

  // Also capture raw vector paths if available (for exact reconstruction)
  // ALWAYS capture if detailed mode is on to ensure procedural analysis has enough data
  if ("vectorPaths" in node && (detailed || saveVectorInJson || node.type === "VECTOR" || !data.svgPath)) {
    data.vectorPaths = safeGet(node, "vectorPaths");
  }
  if ("vectorNetwork" in node && (detailed || saveVectorInJson || node.type === "VECTOR" || !data.svgPath)) {
    data.vectorNetwork = safeGet(node, "vectorNetwork");
  }

  // 7. Typography
  if (node.type === "TEXT") {
    data.text = {
      characters: node.characters,
      fontSize: safeGet(node, "fontSize"),
      fontName: safeGet(node, "fontName"),
      fontWeight: safeGet(node, "fontWeight"),
      textAlignHorizontal: safeGet(node, "textAlignHorizontal"),
      textAlignVertical: safeGet(node, "textAlignVertical"),
      textAutoResize: safeGet(node, "textAutoResize"),
      letterSpacing: safeGet(node, "letterSpacing"),
      lineHeight: safeGet(node, "lineHeight"),
      textCase: safeGet(node, "textCase"),
      textDecoration: safeGet(node, "textDecoration"),
      fills: safeGet(node, "fills"), // Base fills
      paragraphSpacing: safeGet(node, "paragraphSpacing"),
      paragraphIndent: safeGet(node, "paragraphIndent"),
    };

    // Capture Segments for mixed styling
    try {
      const segments = node.getStyledTextSegments([
        'fills', 'fontSize', 'fontName', 'fontWeight', 'letterSpacing', 'lineHeight', 'textCase', 'textDecoration'
      ]);
      (data.text as Record<string, unknown>).segments = await Promise.all(segments.map(async seg => ({
        characters: seg.characters,
        start: seg.start,
        end: seg.end,
        fontSize: seg.fontSize,
        fontName: seg.fontName,
        fontWeight: seg.fontWeight,
        letterSpacing: seg.letterSpacing,
        lineHeight: seg.lineHeight,
        textCase: seg.textCase,
        textDecoration: seg.textDecoration,
        fills: await processFills(seg.fills as Paint[], assetStore)
      })));
    } catch (e) {
      console.warn("Failed to capture text segments", e);
    }
  }

  // 8. Component Properties
  if (node.type === "INSTANCE") {
    data.componentProperties = safeGet(node, "componentProperties");
    try {
      const main = await node.getMainComponentAsync();
      if (main) {
        data.mainComponentId = main.id;
        data.mainComponentName = main.name;
      }
    } catch (e) {
      // ignore
    }
  }

  // 9. Recursion
  if (detailed && "children" in node) {
    // Process children sequentially to avoid flooding the event loop if one hangs
    // or keep Promise.all but rely on individual timeouts inside captureNode?
    // Using Promise.all is faster. We just need to make sure the recursion doesn't
    // blow up the stack, which we check with depth.

    // NOTE: Timeout wrapper logic is applied at the TOP LEVEL call or inside the loop,
    // but enforcing it recursively within children is also good practice.

    const childPromises = (node as ChildrenMixin).children.map(child =>
      captureNode(child, detailed, assetStore, rootName, saveVectorInJson, skipAssets, depth + 1)
    );
    const resolvedChildren = await Promise.all(childPromises);
    data.children = resolvedChildren.filter((c): c is Record<string, unknown> => c !== null);
  }

  return data;
};


// calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
// calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  try {
    if (msg.type === 'create') {
      const pipeline = new Pipeline();
      await pipeline.run();
    }

    // --- Tools Handlers ---
    if (msg.type === 'tools-select-instances') {
      const instances = figma.currentPage.findAll(n => n.type === "INSTANCE");
      figma.currentPage.selection = instances;
      const count = instances.length;
      figma.notify(`Selected ${count} instances.`);
      console.log(`Selected ${count} instances.`);
    }

    if (msg.type === 'tools-organize-grid') {
      const selection = figma.currentPage.selection;
      if (selection.length < 2) {
        figma.notify("Select at least 2 items to reorganize.", { error: true });
        return;
      }

      const count = selection.length;
      const cols = Math.ceil(Math.sqrt(count));
      const gap = 100;

      // Sort slightly by Y then X to keep visual order
      const sorted = [...selection].sort((a, b) => {
        if (Math.abs(a.y - b.y) > 50) return a.y - b.y;
        return a.x - b.x;
      });

      // Grid with fixed cell size based on max dimensions
      const maxW = Math.max(...sorted.map(n => n.width));
      const maxH = Math.max(...sorted.map(n => n.height));

      // Start from the top-left of the selection
      const startX = Math.min(...selection.map(n => n.x));
      const startY = Math.min(...selection.map(n => n.y));

      sorted.forEach((node, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;

        node.x = startX + col * (maxW + gap);
        node.y = startY + row * (maxH + gap);
      });

      figma.notify(`Reorganized ${count} items into a grid.`);
    }

    if (msg.type === 'tools-check-accessibility') {
      const selection = figma.currentPage.selection;
      await runAccessibilityCheck(selection);
    }

    if (msg.type === 'tools-extract-details') {
      const selection = figma.currentPage.selection;
      if (selection.length !== 1) {
        figma.notify("Select exactly one element to extract details.", { error: true });
        return;
      }

      const sourceNode = selection[0];
      const detailsCard = await createExtractDetailsCard(sourceNode);
      figma.currentPage.selection = [detailsCard];
      figma.viewport.scrollAndZoomIntoView([detailsCard]);
      figma.notify(`Extracted details for "${sourceNode.name}".`);
    }

    // Handle Manual Capture (Download)
    if (msg.type === 'capture') {
      const selection = figma.currentPage.selection;
      if (selection.length === 0) {
        console.log("Nothing selected to capture.");
        return;
      }

      const assetStore: AssetStore = {
        imageHashToAssetRef: new Map(),
        assets: {},
        nextId: 1
      };

      // Calculate Bounding Box for selection to center coordinates
      const selectionX = Math.min(...selection.map(n => n.x));
      const selectionY = Math.min(...selection.map(n => n.y));
      const offset = { x: selectionX, y: selectionY };

      const detailsRaw = await Promise.all(selection.map(node =>
        captureNode(node, msg.detailed, assetStore, node.name, false, false, 0, offset)
      ));
      const details = detailsRaw.filter((d): d is Record<string, unknown> => d !== null);

      if (details.length === 0) {
        console.log("No visible nodes in selection to capture.");
        return;
      }

      const projectName = figma.root.name;
      const fileName = `${projectName}_capture.json`;

      // Flatten AssetStore to AssetRecord[]
      const assets: AssetRecord[] = Object.entries(assetStore.assets).map(([ref, val]) => ({
        fileName: ref.replace(/^assets\//, ''),
        type: ref.endsWith('.svg') ? 'svg' : 'image',
        content: val.bytesBase64
      }));

      figma.ui.postMessage({
        type: 'capture-download',
        data: details,
        fileName: fileName,
        assets: assets
      });
    }

    // Handle Capture request from Bridge (via UI)
    if (msg.type === 'capture-bridge' || msg.type === 'capture-png' || msg.type === 'capture-preview') {
      console.log(`[Plugin] Received ${msg.type} request`);
      try {
        const selection = figma.currentPage.selection;
        console.log(`[Plugin] Selection count: ${selection.length}`);

        if (selection.length === 0) {
          console.warn("[Plugin] No selection");
          figma.notify("Please select at least one element to capture.", { error: true });
          figma.ui.postMessage({ type: 'capture-error', message: "No selection" });
          return;
        }

        const projectName = figma.root.name;

        if (msg.type === 'capture-png') {

          const total = selection.length;

          // Smart Capture for Demo/Case Pages:
          // If 1 item is selected and it is a known Demo/Case page,
          // then we actually want to export its children (Variants)
          if (selection.length === 1 && (selection[0].name.includes("Demo") || selection[0].name.includes("Case"))) {
            const parent = selection[0];
            if ("children" in parent) {
              // Filter for likely variants (Instances/Frames/Components)
              const variants = (parent as ChildrenMixin).children.filter(child =>
                child.type === "INSTANCE" || child.type === "FRAME" || child.type === "COMPONENT"
              );
              // Note: We use the visual order (which matches children order in AutoLayout usually)

              if (variants.length > 0) {
                console.log(`[Plugin] Smart Capture: Detected Demo Page '${parent.name}'. Exporting ${variants.length} variants...`);
                let variantIndex = 1;
                const variantTotal = variants.length;

                for (const node of variants) {
                  figma.ui.postMessage({
                    type: 'capture-status',
                    message: `Capturing Variant ${variantIndex} / ${variantTotal}...`,
                    count: variantIndex,
                    total: variantTotal
                  });

                  try {
                    const pngBytes = await node.exportAsync({
                      format: 'PNG',
                      constraint: { type: 'SCALE', value: 2 }
                    });
                    const base64 = figma.base64Encode(pngBytes);

                    // Enforce naming convention: variant_<number>
                    const variantName = `variant_${variantIndex}`;

                    // User Request Override: If specifically NavBookingDemo, save to "BookingCase" folder
                    let targetProjectName = projectName;
                    if (parent.name === "NavBookingDemo") {
                      targetProjectName = "BookingCase";
                    }

                    figma.ui.postMessage({
                      type: 'capture-png-result-packet',
                      projectName: targetProjectName,
                      packet: {
                        name: variantName,
                        data: base64
                      },
                      isLast: variantIndex === variantTotal
                    });
                    variantIndex++;
                  } catch (e) {
                    console.warn(`Failed to export variant ${node.name}`, e);
                  }
                }
                return; // Done with smart capture
              }
            }
          }

          let count = 0;
          for (const node of selection) {
            count++;
            console.log(`[Plugin] Capturing PNG ${count}/${total}: ${node.name} (ID: ${node.id})`);

            figma.ui.postMessage({
              type: 'capture-status',
              message: `Capturing PNG ${count} / ${total}...`,
              count,
              total
            });

            try {
              const pngBytes = await node.exportAsync({
                format: 'PNG',
                constraint: { type: 'SCALE', value: 2 }
              });
              const base64 = figma.base64Encode(pngBytes);

              figma.ui.postMessage({
                type: 'capture-png-result-packet',
                projectName: projectName,
                packet: {
                  name: node.name,
                  data: base64
                },
                isLast: count === total
              });
            } catch (e) {
              console.warn(`Failed to export PNG for ${node.name}`, e);
            }
          }
          return;
        }

        const total = selection.length;
        let count = 0;

        for (const node of selection) {
          count++;
          const isLast = count === total;
          console.log(`[Plugin] Capturing ${count}/${total}: ${node.name} (ID: ${node.id})`);

          figma.ui.postMessage({
            type: 'capture-status',
            message: `Capturing ${count} / ${total}...`,
            count,
            total
          });

          const assetStore: AssetStore = {
            imageHashToAssetRef: new Map(),
            assets: {},
            nextId: 1
          };

          // Calculate Bounding Box for selection to center coordinates
          const selectionX = Math.min(...selection.map(n => n.x));
          const selectionY = Math.min(...selection.map(n => n.y));
          const selectionOffset = { x: selectionX, y: selectionY };

          try {
            const data = await captureNode(node, msg.detailed, assetStore, node.name, msg.saveVectorInJson, msg.skipAssets, 0, selectionOffset);

            if (!data) {
              console.warn(`[Plugin] Capture returned null for ${node.name}`);
              // Report "skipped" to the UI so it knows we moved past this element
              figma.ui.postMessage({
                type: 'capture-bridge-result-packet',
                projectName: projectName,
                packet: null, // Signals skip
                count,
                total,
                isLast
              });
              continue;
            }

            // Flatten for bridge
            const assets: AssetRecord[] = Object.entries(assetStore.assets).map(([ref, val]) => ({
              fileName: ref.replace(/^assets\//, ''),
              type: ref.endsWith('.svg') ? 'svg' : 'image',
              content: val.bytesBase64
            }));

            console.log(`[Plugin] Node ${node.name} captured. Assets: ${assets.length}`);

            const resultType = msg.type === 'capture-preview' ? 'capture-preview-result-packet' : 'capture-bridge-result-packet';

            // Override Logic: If componentNameOverride is provided and we are capturing a single item (or it's the first one, but UI usually blocks batch rename effectively), use it.
            // Actually for batch, one name doesn't make sense unless it's a prefix, but let's assume single item usage for now 
            // OR if the user really wants to name all selected items the same (which would overwrite), we should probably handle that by appending index if count > 1.
            let finalName = node.name;
            if (msg.componentNameOverride && total === 1) {
              finalName = msg.componentNameOverride;
            } else if (msg.componentNameOverride && total > 1) {
              finalName = `${msg.componentNameOverride}_${count}`;
            }

            figma.ui.postMessage({
              type: resultType,
              projectName: projectName,
              packet: {
                name: finalName,
                data: data,
                assets: assets
              },
              count,
              total,
              isLast
            });
          } catch (e) {
            console.error(`Capture failed for ${node.name}:`, e);
            // Still send something to keep count on UI side
            figma.ui.postMessage({
              type: 'capture-bridge-result-packet',
              projectName: projectName,
              packet: null,
              count,
              total,
              isLast
            });
          }
        }

        console.log("[Plugin] Capture Loop Finished");
        figma.ui.postMessage({ type: 'capture-finished', projectName: projectName });
      } catch (e) {
        console.error("Capture failed:", e);
        figma.notify("Capture failed: " + (e as Error).message, { error: true });
        figma.ui.postMessage({ type: 'capture-error', message: (e as Error).message });
      }
    }

    // Handle Dynamic Generation from JSON
    if (msg.type === 'generate-from-json') {
      try {
        if (!msg.data || typeof msg.data !== 'object' || !msg.data.type) {
          throw new Error("Invalid JSON payload. Select a valid extracted JSON file and try again.");
        }

        // Figma viewport center
        const { x, y } = figma.viewport.center;

        // We use a dummy path since we're passing the data directly in a slightly hacky way for now, 
        // or we can update JsonReconstructor to accept data directly.
        // Given JsonReconstructor currently uses a registry, I'll update it to have a static method or 
        // handle direct data injection.

        const reconstructor = new JsonReconstructor("");
        // Safely set data through public method
        reconstructor.setData(msg.data);

        // Pass assets (image base64 content) for hydration
        const result = await reconstructor.create({ x, y, assets: msg.assets });

        if (result) {
          figma.currentPage.appendChild(result);
          figma.viewport.scrollAndZoomIntoView([result]);
          console.log("Reconstruction from JSON complete.");
        }
      } catch (e) {
        const message = (e as Error).message || "Failed to generate from JSON";
        console.error("Failed to generate from JSON:", e);
        figma.notify(message, { error: true });
        figma.ui.postMessage({ type: 'capture-error', message });
      }
    }

    if (msg.type === 'generate-component') {
      const name = msg.componentName;
      const projectName = msg.projectName; // Optional
      type GeneratedComponentClass = new () => {
        create: (props: Record<string, unknown>) => SceneNode | Promise<SceneNode>;
        createAsync?: (props: Record<string, unknown>) => Promise<SceneNode>;
      };
      const componentRegistry = ComponentRegistry as unknown as Record<string, GeneratedComponentClass | undefined>;

      logToUI(`[Plugin] Requested Component: '${name}', Project: '${projectName}'`);
      logToUI(`[Plugin] Current Registry Keys: ${Object.keys(ComponentRegistry).join(", ")}`);

      let ComponentClass = componentRegistry[name];
      logToUI(`[Plugin] Initial lookup for '${name}': ${ComponentClass ? 'FOUND' : 'NOT FOUND'}`);

      if (!ComponentClass && projectName) {
        // Try aliased name: e.g. chip_expand_Alex_CookBook
        const safeProjectName = sanitizeName(projectName);
        const aliasedName = `${name}_${safeProjectName}`;
        ComponentClass = componentRegistry[aliasedName];
        logToUI(`[Plugin] Alias lookup for '${aliasedName}': ${ComponentClass ? 'FOUND' : 'NOT FOUND'}`);
      }

      if (!ComponentClass) {
        figma.notify(`Component ${name} not found in registry.`, { error: true });
        return;
      }

      try {
        const instance = new ComponentClass();
        const { x, y } = figma.viewport.center;

        // Default props
        const props = {
          x,
          y,
          name: projectName ? `${projectName}_presentation` : name,
          label: "Insert",
          primary: true,
          handle: "@uefa",
          role: "UEFA Presentation",
          bio: "Auto-generated presentation container.",
          followerCount: "0"
        };

        let result: SceneNode;

        // Prefer createAsync if available (used in Button.ts for font loading)
        if (typeof instance.createAsync === 'function') {
          result = await instance.createAsync(props);
        } else {
          result = await instance.create(props);
        }

        if (result) {
          figma.currentPage.appendChild(result);
          figma.viewport.scrollAndZoomIntoView([result]);
          figma.notify(`Generated ${name}`);
        }
      } catch (e) {
        console.error(e);
        figma.notify(`Failed to generate ${name}: ${(e as Error).message}`, { error: true });
      }
    }

    if (msg.type === 'export-ppt-from-selection') {
      const selection = figma.currentPage.selection;
      if (selection.length !== 1) {
        postPptExportError("Select exactly one presentation frame on canvas.");
        return;
      }

      const presentationNode = selection[0];
      if (presentationNode.type !== 'FRAME') {
        postPptExportError("Selected node must be a FRAME.");
        return;
      }

      const slideFrames = presentationNode.children.filter((child): child is FrameNode => child.type === 'FRAME');
      if (slideFrames.length === 0) {
        postPptExportError("No first-level child frames found in the selected frame.");
        return;
      }

      const fidelity: ExtractPPT.PPTFidelity =
        msg.fidelity === 'editable' || msg.fidelity === 'exact' ? msg.fidelity : 'balanced';
      const compositionFallback: ExtractPPT.PPTCompositionFallback =
        msg.compositionFallback === 'none' ? 'none' : 'container';
      const rasterScale = typeof msg.rasterScale === 'number' && msg.rasterScale > 0
        ? msg.rasterScale
        : 3;
      const textFidelityMode: ExtractPPT.PPTTextFidelityMode =
        msg.textFidelityMode === 'always_editable' || msg.textFidelityMode === 'always_raster'
          ? msg.textFidelityMode
          : 'always_editable';
      const platformProfile: ExtractPPT.PPTPlatformProfile =
        msg.platformProfile === 'mac_365' || msg.platformProfile === 'win_365'
          ? msg.platformProfile
          : 'cross_platform';

      const slides: PptSlidePayload[] = [];
      for (const slideFrame of slideFrames) {
        console.log(`[Plugin] Extracting selected slide: ${slideFrame.name} (ID: ${slideFrame.id})`);
        try {
          const slideData = await ExtractPPT.PPTExtractor.extract(slideFrame, {
            fidelity,
            rasterScale,
            compositionFallback,
            textFidelityMode,
            platformProfile
          });
          slides.push(slideData);
        } catch (err) {
          const reason = err instanceof Error ? err.message : String(err);
          console.error(`[Plugin] Error extracting slide ${slideFrame.name}:`, err);
          slides.push(createPptErrorSlide(`Error_${slideFrame.name}`, `Error extracting slide: ${reason}`));
        }
      }

      figma.ui.postMessage({
        type: 'export-ppt-data',
        payload: [{
          presentationName: presentationNode.name || "Presentation",
          slides
        }],
        docName: figma.root.name
      });
    }

    if (msg.type === 'cancel') {
      figma.closePlugin();
    }
  } catch (e) {
    console.error("Uncaught Plugin Error:", e);
    figma.notify("Plugin Error: " + (e as Error).message);
    figma.ui.postMessage({ type: 'capture-error', message: (e as Error).message || String(e) });
  }
};

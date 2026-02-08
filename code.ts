import { Pipeline } from "./pipeline";
import { JsonReconstructor } from "./components/JsonReconstructor";
import { AssetStore, processFills } from "./components/PaintHelpers";
import * as ComponentRegistry from "./components/index";
import * as ExtractPPT from "./presentation_logic/PPTExtractor";

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

logToUI(`[Plugin] Registry Keys: ${Object.keys(ComponentRegistry).join(", ")}`);

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
  };

  // 2. Auto Layout (Frame / Component / Instance)
  if ("layoutMode" in node) {
    data.layout = {
      mode: safeGet(node, "layoutMode"), // NONE, HORIZONTAL, VERTICAL
      sizing: {
        horizontal: safeGet(node, "primaryAxisSizingMode"), // FIXED, AUTO
        vertical: safeGet(node, "counterAxisSizingMode"),
      },
      alignment: {
        primary: safeGet(node, "primaryAxisAlignItems"), // MIN, MAX, CENTER, SPACE_BETWEEN
        counter: safeGet(node, "counterAxisAlignItems"), // MIN, MAX, CENTER, BASELINE
      },
      spacing: safeGet(node, "itemSpacing"),
      counterAxisSpacing: safeGet(node, "counterAxisSpacing"),
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
    data.fills = await processFills(nodeWithFills.fills as Readonly<Paint[]>, assetStore);
  }

  // 4. Visuals: Strokes
  if ("strokes" in node) {
    data.strokes = await processFills(node.strokes as Readonly<Paint[]>, assetStore);
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
          const svgBytes = await node.exportAsync({ format: 'SVG' });
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
          console.warn(`Failed to export SVG for ${node.name}`, e);
        }
      }
    }
  }

  // Also capture raw vector paths if available (for exact reconstruction)
  // ALWAYS capture if detailed mode is on to ensure procedural analysis has enough data
  if ("vectorPaths" in node && (detailed || saveVectorInJson || !data.svgPath)) {
    data.vectorPaths = safeGet(node, "vectorPaths");
  }
  if ("vectorNetwork" in node && (detailed || saveVectorInJson || !data.svgPath)) {
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

            figma.ui.postMessage({
              type: resultType,
              projectName: projectName,
              packet: {
                name: node.name,
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
        console.error("Failed to generate from JSON:", e);
      }
    }

    if (msg.type === 'generate-component') {
      const name = msg.componentName;
      const projectName = msg.projectName; // Optional

      logToUI(`[Plugin] Requested Component: '${name}', Project: '${projectName}'`);
      logToUI(`[Plugin] Current Registry Keys: ${Object.keys(ComponentRegistry).join(", ")}`);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let ComponentClass = (ComponentRegistry as any)[name];
      logToUI(`[Plugin] Initial lookup for '${name}': ${ComponentClass ? 'FOUND' : 'NOT FOUND'}`);

      if (!ComponentClass && projectName) {
        // Try aliased name: e.g. chip_expand_Alex_CookBook
        const safeProjectName = sanitizeName(projectName);
        const aliasedName = `${name}_${safeProjectName}`;
        ComponentClass = (ComponentRegistry as any)[aliasedName];
        logToUI(`[Plugin] Alias lookup for '${aliasedName}': ${ComponentClass ? 'FOUND' : 'NOT FOUND'}`);
      }

      if (!ComponentClass) {
        figma.notify(`Component ${name} not found in registry.`, { error: true });
        return;
      }

      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const instance = new ComponentClass() as any;
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
          : 'smart_hybrid';
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

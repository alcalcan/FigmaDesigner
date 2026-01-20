import { Pipeline } from "./pipeline";
import { JsonReconstructor } from "./components/JsonReconstructor";
import { AssetStore, processFills } from "./components/PaintHelpers";

// Show the HTML page in "ui.html".
figma.showUI(__html__, { width: 300, height: 400 });

// --- SHARED CAPTURE LOGIC ---
interface AssetRecord {
  fileName: string;
  type: 'image' | 'svg';
  content: string; // base64
}

const sanitizeName = (name: string) => name.replace(/[^a-z0-9]/gi, '_');

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
  rootName: string
): Promise<Record<string, unknown>> => {

  // 1. Basic Identity & Transform
  // Use 'any' to allow building the object dynamically without strict type guards for every intermediate read
  const data: any = {
    id: node.id,
    name: node.name,
    type: node.type,
    visible: safeGet(node, "visible") ?? true,
    locked: safeGet(node, "locked") ?? false,
    opacity: safeGet(node, "opacity") ?? 1,
    blendMode: safeGet(node, "blendMode") ?? "PASS_THROUGH",
    isMask: safeGet(node, "isMask"),
    effects: safeGet(node, "effects"),

    // Geometry
    x: node.x,
    y: node.y,
    width: node.width,
    height: node.height,
    rotation: safeGet(node, "rotation"),
    relativeTransform: safeGet(node, "relativeTransform"),

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
      }
    };

    // Cleanup if no layout
    if (data.layout.mode === "NONE") {
      // We usually keep it to explicitly say NONE, but can simplify if needed.
    }
  }

  // 3. Visuals: Fills (Images & Gradients)
  if ("fills" in node) {
    const nodeWithFills = node as GeometryMixin;
    data.fills = await processFills(nodeWithFills.fills, assetStore);
  }

  // 4. Visuals: Strokes
  if ("strokes" in node) {
    data.strokes = safeGet(node, "strokes");
    data.strokeWeight = safeGet(node, "strokeWeight");
    data.strokeAlign = safeGet(node, "strokeAlign");
    data.strokeCap = safeGet(node, "strokeCap");
    data.strokeJoin = safeGet(node, "strokeJoin");
    data.dashPattern = safeGet(node, "dashPattern");
    data.strokeMiterLimit = safeGet(node, "strokeMiterLimit");
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

  // 6. Icon / Vector Export
  // We keep the heuristic: Vector + Small OR name has "icon"
  const isIcon = node.type === "VECTOR" && (
    (node.width <= 64 && node.height <= 64) ||
    node.name.toLowerCase().includes("icon")
  );

  if (isIcon) {
    try {
      const svgBytes = await node.exportAsync({ format: 'SVG' });
      const base64 = figma.base64Encode(svgBytes);
      const fileName = `icon_${sanitizeName(node.name)}_${node.id.replace(/:/g, '_')}.svg`;
      const assetRef = `assets/${fileName}`;
      assetStore.assets[assetRef] = { bytesBase64: base64 };
      data.svgPath = assetRef;
    } catch (e) {
      console.warn(`Failed to export SVG for ${node.name}`, e);
    }
  }

  // Also capture raw vector paths if available (for exact reconstruction)
  if ("vectorPaths" in node) {
    data.vectorPaths = safeGet(node, "vectorPaths");
  }
  if ("vectorNetwork" in node) {
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
    };

    // Capture Segments for mixed styling
    try {
      const segments = node.getStyledTextSegments([
        'fills', 'fontSize', 'fontName', 'fontWeight', 'letterSpacing', 'lineHeight', 'textCase', 'textDecoration'
      ]);
      (data.text as any).segments = await Promise.all(segments.map(async seg => ({
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
        fills: await processFills(seg.fills as any, assetStore)
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
    data.children = await Promise.all(
      (node as ChildrenMixin).children.map(child => captureNode(child, detailed, assetStore, rootName))
    );
  }

  return data;
};


// calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
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

    const details = await Promise.all(selection.map(node => captureNode(node, msg.detailed, assetStore, node.name)));
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
  if (msg.type === 'capture-bridge') {
    try {
      const selection = figma.currentPage.selection;
      if (selection.length === 0) {
        figma.notify("Please select at least one element to capture.", { error: true });
        figma.ui.postMessage({ type: 'capture-error', message: "No selection" });
        return;
      }

      const projectName = figma.root.name;
      const packets = await Promise.all(selection.map(async (node) => {
        const assetStore: AssetStore = {
          imageHashToAssetRef: new Map(),
          assets: {},
          nextId: 1
        };
        const data = await captureNode(node, msg.detailed, assetStore, node.name);

        // Flatten for bridge
        const assets: AssetRecord[] = Object.entries(assetStore.assets).map(([ref, val]) => ({
          fileName: ref.replace(/^assets\//, ''),
          type: ref.endsWith('.svg') ? 'svg' : 'image',
          content: val.bytesBase64
        }));

        return {
          name: node.name,
          data: data,
          assets: assets
        };
      }));

      figma.ui.postMessage({
        type: 'capture-bridge-result-batch',
        projectName: projectName,
        packets: packets
      });
    } catch (e) {
      console.error("Capture failed:", e);
      figma.notify("Capture failed: " + (e as any).message, { error: true });
      figma.ui.postMessage({ type: 'capture-error', message: (e as any).message });
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

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

import { Pipeline } from "./pipeline";
import { JsonReconstructor } from "./components/JsonReconstructor";

// Show the HTML page in "ui.html".
figma.showUI(__html__, { width: 300, height: 400 });

// --- SHARED CAPTURE LOGIC ---
interface AssetRecord {
  fileName: string;
  type: 'image' | 'svg';
  content: string; // base64
}

const captureNode = async (
  node: SceneNode,
  detailed: boolean,
  assets: AssetRecord[]
): Promise<Record<string, unknown>> => {
  // 1. Basic Properties
  const data: Record<string, unknown> = {
    id: node.id,
    name: node.name,
    type: node.type,
    x: node.x,
    y: node.y,
    width: node.width,
    height: node.height,
    rotation: "rotation" in node ? node.rotation : undefined,
    visible: "visible" in node ? node.visible : true,
    opacity: "opacity" in node ? node.opacity : 1,
    blendMode: "blendMode" in node ? node.blendMode : "PASS_THROUGH",
    locked: "locked" in node ? node.locked : false,
  };

  // 2. Constraints & Resizing
  if ("constraints" in node) {
    data.constraints = node.constraints;
  }
  if ("layoutAlign" in node) data.layoutAlign = node.layoutAlign;
  if ("layoutGrow" in node) data.layoutGrow = node.layoutGrow;

  // 3. Layout Properties (Frame, Component, Instance)
  if ("layoutMode" in node) {
    data.layout = {
      mode: node.layoutMode,
      sizing: {
        horizontal: "primaryAxisSizingMode" in node ? node.primaryAxisSizingMode : undefined,
        vertical: "counterAxisSizingMode" in node ? node.counterAxisSizingMode : undefined,
      },
      alignment: {
        primary: "primaryAxisAlignItems" in node ? node.primaryAxisAlignItems : undefined,
        counter: "counterAxisAlignItems" in node ? node.counterAxisAlignItems : undefined,
      },
      spacing: "itemSpacing" in node ? node.itemSpacing : 0,
      padding: {
        top: "paddingTop" in node ? node.paddingTop : 0,
        right: "paddingRight" in node ? node.paddingRight : 0,
        bottom: "paddingBottom" in node ? node.paddingBottom : 0,
        left: "paddingLeft" in node ? node.paddingLeft : 0,
      }
    };
  }

  // 4. Visual Properties (Fills, Strokes, Effects)
  if ("fills" in node && node.fills !== figma.mixed) {
    // Process fills to detect images
    const processedFills = await Promise.all(node.fills.map(async (fill) => {
      if (fill.type === 'IMAGE' && fill.imageHash) {
        const image = figma.getImageByHash(fill.imageHash);
        if (image) {
          const bytes = await image.getBytesAsync();
          const base64 = figma.base64Encode(bytes);
          const ext = 'png'; // Default to png for now
          const fileName = `img_${fill.imageHash.substring(0, 8)}.${ext}`;

          // Check if already in assets
          if (!assets.find(a => a.fileName === fileName)) {
            assets.push({ fileName, type: 'image', content: base64 });
          }

          // Add asset reference to fill
          return { ...fill, assetRef: `assets/${fileName}` };
        }
      }
      return fill;
    }));
    data.fills = processedFills;
  }

  // Check for Icon Export (SVG)
  const isIcon = node.type === "VECTOR" && (
    (node.width <= 64 && node.height <= 64) ||
    node.name.toLowerCase().includes("icon")
  );

  if (isIcon) {
    try {
      const svgBytes = await node.exportAsync({ format: 'SVG' });
      const base64 = figma.base64Encode(svgBytes);
      const fileName = `icon_${node.name.replace(/[^a-z0-9]/gi, '_')}_${node.id.replace(/:/g, '_')}.svg`;

      assets.push({ fileName, type: 'svg', content: base64 });
      data.svgPath = `assets/${fileName}`;
    } catch (e) {
      console.warn(`Failed to export SVG for ${node.name}`, e);
    }
  }

  if ("strokes" in node && node.strokes.length > 0) {
    data.strokes = node.strokes;
    data.strokeWeight = "strokeWeight" in node ? node.strokeWeight : 0;
    data.strokeAlign = "strokeAlign" in node ? node.strokeAlign : "INSIDE";
    // Stroke specific caps/joins
    if ("strokeCap" in node) data.strokeCap = node.strokeCap;
    if ("strokeJoin" in node) data.strokeJoin = node.strokeJoin;
    if ("dashPattern" in node) data.dashPattern = node.dashPattern;
  }
  // Check for mixed effects safely
  if ("effects" in node && node.effects.length > 0) {
    data.effects = node.effects;
  }

  // 4.5 Capture Vector Data
  if (node.type === "VECTOR") {
    const vectorNode = node as VectorNode;
    data.vectorPaths = vectorNode.vectorPaths;
  }

  // 5. Geometry / Styling (Corner Radius)
  if ("cornerRadius" in node && node.cornerRadius !== figma.mixed) {
    data.cornerRadius = node.cornerRadius;
  } else if ("topLeftRadius" in node) {
    data.corners = {
      topLeft: node.topLeftRadius,
      topRight: node.topRightRadius,
      bottomRight: node.bottomRightRadius,
      bottomLeft: node.bottomLeftRadius
    };
  }

  // 6. Typography (TextNode)
  if (node.type === "TEXT") {
    const textNode = node as TextNode;
    data.text = {
      characters: node.characters,
      fontSize: node.fontSize !== figma.mixed ? node.fontSize : "mixed",
      fontName: node.fontName !== figma.mixed ? node.fontName : "mixed",
      fontWeight: node.fontWeight !== figma.mixed ? node.fontWeight : "mixed",
      textAlignHorizontal: node.textAlignHorizontal,
      textAlignVertical: node.textAlignVertical,
      textAutoResize: node.textAutoResize,
      letterSpacing: node.letterSpacing !== figma.mixed ? node.letterSpacing : "mixed",
      lineHeight: node.lineHeight !== figma.mixed ? node.lineHeight : "mixed",
      textCase: node.textCase !== figma.mixed ? node.textCase : "ORIGINAL",
      textDecoration: node.textDecoration !== figma.mixed ? node.textDecoration : "NONE",
      // Include color explicitly for easier use in non-figma environments
      fills: node.fills !== figma.mixed ? node.fills : undefined
    };

    // Capture segments for mixed styles
    // We capture specific properties that tend to vary
    const segments = textNode.getStyledTextSegments([
      'fills',
      'fontSize',
      'fontName',
      'fontWeight',
      'letterSpacing',
      'lineHeight',
      'textCase',
      'textDecoration'
    ]);

    // Optimize: only include segments if there's actual variation or if we want robustness
    // For now, let's include them to ensure we get the data.
    // We Map them to a serializable format
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data.text as any).segments = segments.map(seg => ({
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
      fills: seg.fills
    }));
  }

  // 7. Component Properties (for Instances)
  if (node.type === "INSTANCE") {
    try {
      const mainComponent = await node.getMainComponentAsync();
      data.mainComponentId = mainComponent ? mainComponent.id : null;
    } catch (e) {
      console.warn("Failed to get main component async", e);
      data.mainComponentId = null;
    }
    data.componentProperties = node.componentProperties;
  }

  // Recursion
  if (detailed && "children" in node) {
    data.children = await Promise.all(
      (node as ChildrenMixin).children.map(child => captureNode(child, detailed, assets))
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

    const assets: AssetRecord[] = [];
    const details = await Promise.all(selection.map(node => captureNode(node, msg.detailed, assets)));
    const projectName = figma.root.name;
    const fileName = `${projectName}_capture.json`;

    figma.ui.postMessage({
      type: 'capture-download',
      data: details,
      fileName: fileName,
      assets: assets
    });
  }

  // Handle Capture request from Bridge (via UI)
  if (msg.type === 'capture-bridge') {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      console.log("Nothing selected to capture via bridge.");
      return;
    }

    const assets: AssetRecord[] = [];
    const details = await Promise.all(selection.map(node => captureNode(node, msg.detailed, assets)));
    const projectName = figma.root.name;

    figma.ui.postMessage({
      type: 'capture-bridge-result',
      projectName: projectName,
      data: details,
      assets: assets
    });
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

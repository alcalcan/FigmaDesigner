import { Pipeline } from "./pipeline";
import { JsonReconstructor } from "./components/JsonReconstructor";
import { AssetStore, processFills } from "./components/PaintHelpers";
import * as ComponentRegistry from "./components/index";

// Show the HTML page in "ui.html".
figma.showUI(__html__, { width: 450, height: 800 });

// --- SHARED CAPTURE LOGIC ---
interface AssetRecord {
  fileName: string;
  type: 'image' | 'svg';
  content: string; // base64
}

const sanitizeName = (name: string) => name.replace(/[^a-z0-9]/gi, '_');

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
  skipAssets: boolean = false
): Promise<Record<string, unknown> | null> => {

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
    x: node.parent && node.parent.type === "GROUP" ? node.x - node.parent.x : node.x,
    y: node.parent && node.parent.type === "GROUP" ? node.y - node.parent.y : node.y,
    width: node.width,
    height: node.height,
    rotation: safeGet(node, "rotation"),
    relativeTransform: (() => {
      const transform = safeGet(node, "relativeTransform");
      if (transform && node.parent && node.parent.type === "GROUP") {
        const t = [...transform.map((row: number[]) => [...row])] as [[number, number, number], [number, number, number]];
        t[0][2] -= node.parent.x;
        t[1][2] -= node.parent.y;
        return t;
      }
      return transform;
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

  const isIcon = isVectorLike &&
    node.type !== "BOOLEAN_OPERATION" && ( // Exclude Boolean Operations from automatic icon classification
      (node.width <= 64 && node.height <= 64) ||
      node.name.toLowerCase().includes("icon") ||
      node.name.toLowerCase().includes("star")
    );

  // New logic: Export vectors as SVG unless explicitly asked to keep in JSON
  const isVectorToExport = isVectorLike && !saveVectorInJson;

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
      captureNode(child, detailed, assetStore, rootName, saveVectorInJson, skipAssets)
    );
    const resolvedChildren = await Promise.all(childPromises);
    data.children = resolvedChildren.filter((c): c is Record<string, unknown> => c !== null);
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

    const detailsRaw = await Promise.all(selection.map(node => captureNode(node, msg.detailed, assetStore, node.name, false, false)));
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

        try {
          const data = await captureNode(node, msg.detailed, assetStore, node.name, msg.saveVectorInJson, msg.skipAssets);

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ComponentClass = (ComponentRegistry as any)[name];

    if (!ComponentClass && projectName) {
      // Try aliased name: e.g. chip_expand_Alex_CookBook
      const safeProjectName = sanitizeName(projectName);
      const aliasedName = `${name}_${safeProjectName}`;
      ComponentClass = (ComponentRegistry as any)[aliasedName];
    }

    if (!ComponentClass) {
      figma.notify(`Component ${name} not found`, { error: true });
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const instance = new ComponentClass() as any;
      const { x, y } = figma.viewport.center;

      // Default props
      // We pass extra props 'label'/'primary' in case it's a Button.
      // Other components will ignore them.
      const props = {
        x,
        y,
        label: "Click Me",
        primary: true,
        name: "John Doe",
        handle: "@johndoe",
        role: "Software Engineer",
        bio: "Designing the future of UI with AI-powered tools.",
        followerCount: "1,234"
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

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

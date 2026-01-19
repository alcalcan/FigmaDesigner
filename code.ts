import { Pipeline } from "./pipeline";

// Show the HTML page in "ui.html".
figma.showUI(__html__, { width: 300, height: 400 });

// --- SHARED CAPTURE LOGIC ---
const captureNode = async (node: SceneNode, detailed: boolean): Promise<any> => {
  // 1. Basic Properties
  const data: any = {
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
    data.fills = node.fills;
  }
  if ("strokes" in node && node.strokes.length > 0) {
    data.strokes = node.strokes;
    data.strokeWeight = "strokeWeight" in node ? node.strokeWeight : 0;
    data.strokeAlign = "strokeAlign" in node ? node.strokeAlign : "INSIDE";
    // Stroke specific caps/joins
    if ("strokeCap" in node) data.strokeCap = node.strokeCap;
    if ("strokeJoin" in node) data.strokeJoin = node.strokeJoin;
  }
  // Check for mixed effects safely
  if ("effects" in node && node.effects.length > 0) {
    data.effects = node.effects;
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
    };
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
      (node as ChildrenMixin).children.map(child => captureNode(child, detailed))
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

    const details = await Promise.all(selection.map(node => captureNode(node, msg.detailed)));
    const projectName = figma.root.name;
    const fileName = `${projectName}_capture.json`;

    figma.ui.postMessage({
      type: 'capture-download',
      data: details,
      fileName: fileName
    });
  }

  // Handle Capture request from Bridge (via UI)
  if (msg.type === 'capture-bridge') {
    const selection = figma.currentPage.selection;
    if (selection.length > 0) {
      const details = await Promise.all(selection.map(node => captureNode(node, msg.detailed)));

      figma.ui.postMessage({
        type: 'capture-bridge-result',
        data: details,
        projectName: figma.root.name
      });
    }
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

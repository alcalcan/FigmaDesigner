import { SerializedNode } from './JsonReconstructor';
import { applySizeAndTransform, detectBakedRotation, T2x3 } from "./TransformHelpers";
import { AssetSource, hydrateFills } from "./PaintHelpers";

export { type T2x3 };

export interface ComponentProps {
  x: number;
  y: number;
  text?: string;
  subtext?: string;
  hideButtons?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}


// T2x3 is now imported from TransformHelpers

export interface NodeDefinition {
  type: "FRAME" | "TEXT" | "VECTOR" | "RECTANGLE" | "ELLIPSE" | "LINE" | "STAR" | "POLYGON" | "INSTANCE" | "COMPONENT" | "GROUP" | "BOOLEAN_OPERATION";
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: Record<string, any>;
  booleanOperation?: "UNION" | "INTERSECT" | "SUBTRACT" | "EXCLUDE";
  layoutProps?: {
    width?: number;
    height?: number;
    relativeTransform?: T2x3;
    parentIsAutoLayout: boolean;
    layoutPositioning?: "AUTO" | "ABSOLUTE";
    layoutGrow?: 0 | 1;
    layoutAlign?: "INHERIT" | "STRETCH" | "MIN" | "CENTER" | "MAX";
  };
  children?: NodeDefinition[];
  // For specialized nodes like Vectors where we might pass raw SVG or paths
  svgContent?: string;
  vectorPaths?: VectorPaths;
  shouldFlatten?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any;
}

export abstract class BaseComponent {
  abstract create(props: ComponentProps): SceneNode | Promise<SceneNode>;

  /**
   * Generic renderer for data-driven component structure
   */
  async renderDefinition(def: NodeDefinition, parent?: BaseNode): Promise<SceneNode> {
    let node: SceneNode;
    let isFromSvg = false;

    // 1. Create Node
    switch (def.type) {
      case "FRAME": node = figma.createFrame(); break;
      case "TEXT": node = figma.createText(); break;
      case "RECTANGLE": node = figma.createRectangle(); break;
      case "ELLIPSE": node = figma.createEllipse(); break;
      case "LINE": node = figma.createLine(); break;
      case "STAR":
        if (def.svgContent) {
          node = figma.createNodeFromSvg(def.svgContent);
          isFromSvg = true;
        } else {
          const starNode = figma.createStar();
          if (def.props?.pointCount !== undefined) starNode.pointCount = def.props.pointCount;
          if (def.props?.innerRadius !== undefined) starNode.innerRadius = def.props.innerRadius;
          node = starNode;
        }
        break;
      case "POLYGON":
        if (def.svgContent) {
          node = figma.createNodeFromSvg(def.svgContent);
          isFromSvg = true;
        } else {
          const polyNode = figma.createPolygon();
          if (def.props?.pointCount !== undefined) polyNode.pointCount = def.props.pointCount;
          node = polyNode;
        }
        break;
      case "VECTOR":
        if (def.svgContent) {
          isFromSvg = true;
          // Detect and fix baked rotations in SVG assets
          let finalSvgContent = def.svgContent;
          const layout = def.layoutProps;
          if (layout && layout.width && layout.height && layout.relativeTransform) {
            // Regex to extract SVG dimensions
            const wMatch = finalSvgContent.match(/<svg[^>]*width=["']([\d.]+)["']/);
            const hMatch = finalSvgContent.match(/<svg[^>]*height=["']([\d.]+)["']/);
            if (wMatch && hMatch) {
              const svgW = parseFloat(wMatch[1]);
              const svgH = parseFloat(hMatch[1]);
              const jsonW = layout.width;
              const jsonH = layout.height;

              if (detectBakedRotation(svgW, svgH, jsonW, jsonH)) {
                console.log(`[BaseComponent] Detected baked rotation for ${def.name || 'Vector'}. Normalizing...`);

                // 1. Swap dimensions in layoutProps so the node is resized to its "unrotated" shape
                if (layout) {
                  const tmp = layout.width;
                  layout.width = layout.height;
                  layout.height = tmp;

                  // 2. Force identity rotation in layoutProps to prevent double-rotation
                  layout.relativeTransform = [
                    [1, 0, layout.relativeTransform[0][2]],
                    [0, 1, layout.relativeTransform[1][2]]
                  ];
                }

                // 3. Ensure SVG header matches its OWN intrinsic dimensions to prevent clipping
                finalSvgContent = finalSvgContent.replace(/<svg[^>]*>/i,
                  `<svg width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}" fill="none" xmlns="http://www.w3.org/2000/svg">`
                );
              }
            }
          }
          node = figma.createNodeFromSvg(finalSvgContent);
        } else {
          node = figma.createVector();
          if (def.vectorPaths) {
            (node as VectorNode).vectorPaths = def.vectorPaths;
          }
        }
        break;
      case "BOOLEAN_OPERATION": {
        // 1. Determine Parent (Figma boolean ops require nodes to be in document)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const opParent = (parent || figma.currentPage) as any;

        // 2. Create Children
        const childNodes: SceneNode[] = [];
        if (def.children) {
          for (const childDef of def.children) {
            childNodes.push(await this.renderDefinition(childDef, opParent as BaseNode & ChildrenMixin));
          }
        }

        // 3. Perform Operation
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        switch (def.props?.booleanOperation || (def as any).booleanOperation) {
          case "UNION": node = figma.union(childNodes, opParent); break;
          case "SUBTRACT": node = figma.subtract(childNodes, opParent); break;
          case "INTERSECT": node = figma.intersect(childNodes, opParent); break;
          case "EXCLUDE": node = figma.exclude(childNodes, opParent); break;
          default: node = figma.union(childNodes, opParent);
        }
        break;
      }
      case "COMPONENT": {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const componentClass = (def as any).component;
        if (componentClass) {
          const instance = new componentClass();
          // Pass EVERYTHING to the nested component: props and layout properties
          console.log(`[BaseComponent] Creating nested component: ${def.name || (componentClass as any).name}`);
          node = await instance.create({
            ...(def.props || {}),
            ...(def.layoutProps || {})
          });
        } else {
          console.warn(`[BaseComponent] COMPONENT type used without 'component' class reference in definition for ${def.name}`);
          node = figma.createFrame();
        }
        break;
      }
      // TODO: Handle INSTANCE, GROUP if needed
      default: node = figma.createFrame(); break;
    }

    if (parent && "appendChild" in parent) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (parent as any).appendChild(node);
    }

    // 2.5. Flatten if requested (must be done after appending children, but potentially before other props?)
    // Actually flatten should be done after children are created/appended to the node itself (which we did in recursion or specific steps above)
    // But wait, for FRAME/VECTOR/etc we haven't recursed yet! Recursion is step 5.
    // If we flatten, we need children to be present.
    // So we must move recursion UP or handle flatten differently.

    // HOWEVER, standard `figma.flatten` takes an array of nodes.
    // If this node IS the container to be flattened, usually it means "flatten THIS node and its children into a vector".
    // But `figma.flatten([node])` works if node has children.

    // Let's re-order:
    // 1. Create Node
    // 2. Recursion (create children) -> we need children for flatten!
    // 3. Flatten
    // 4. Set Properties (on the potentially new flattened node)
    // 5. Append to parent (if not already done? No, we need it in parent for some ops?)

    // Let's adjust the flow for 'shouldFlatten'.

    // 1.5 Apply Container Layout Properties (Before Children)
    // CRITICAL: We must set layoutMode and related properties on the parent BEFORE appending children.
    // This allows children to successfully set `layoutPositioning: "ABSOLUTE"`, which requires
    // the parent to be an Auto Layout frame.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const safeNode = node as any;
    if (def.props) {
      if (def.props.layoutMode && def.props.layoutMode !== "NONE") {
        safeNode.layoutMode = def.props.layoutMode;

        // Apply other AutoLayout properties immediately
        const layoutKeys = [
          "primaryAxisSizingMode", "counterAxisSizingMode",
          "primaryAxisAlignItems", "counterAxisAlignItems",
          "itemSpacing",
          "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
          "itemReverseZIndex", "strokesIncludedInLayout",
          "layoutWrap" // Just in case
        ];

        for (const key of layoutKeys) {
          if (def.props[key] !== undefined) {
            safeNode[key] = def.props[key];
          }
        }
      } else if (def.props.layoutMode === "NONE") {
        safeNode.layoutMode = "NONE";
      }
    }

    // 5. Recursion (Moved Up for Flatten Support)
    // CRITICAL: Skip recursion for BOOLEAN_OPERATION nodes because they handle their children
    // specially inside the 'renderDefinition' switch block to ensure document order.
    if (def.children && def.type !== "BOOLEAN_OPERATION") {
      for (const childDef of def.children) {
        if ("appendChild" in node) {
          await this.renderDefinition(childDef, node as BaseNode & ChildrenMixin);
        }
      }
    }

    // 2.5 Handle Flattening
    if (def.shouldFlatten) {
      try {
        // Flatten replaces the node with a new Vector node
        const flattened = figma.flatten([node], (parent || figma.currentPage) as BaseNode & ChildrenMixin);
        node = flattened;
      } catch (e) {
        console.warn(`[BaseComponent] Failed to flatten node ${def.name || 'node'}`, e);
      }
    }


    // 3. Set Properties
    // Re-assign safeNode in case node identity changed due to flattening
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const finalNode = node as any;

    if (def.props) {
      // Pre-load font for TextNodes to avoid "unloaded font" errors when setting characters/properties
      if (def.type === "TEXT") {
        const fontProp = def.props.font;
        if (fontProp) {
          await this.setFont(finalNode, fontProp);
        } else {
          // If no explicit font prop, ensure the default font is loaded
          const currentFont = finalNode.fontName;
          if (currentFont && currentFont !== figma.mixed) {
            await figma.loadFontAsync(currentFont as FontName);
          }
        }
      }

      const skippedKeys = new Set([
        "layoutMode", "font",
        "primaryAxisSizingMode", "counterAxisSizingMode",
        "primaryAxisAlignItems", "counterAxisAlignItems",
        "itemSpacing",
        "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
        "itemReverseZIndex", "strokesIncludedInLayout",
        "layoutWrap",
        "pointCount", "innerRadius" // Shape specific
      ]);

      for (const [key, value] of Object.entries(def.props)) {
        if (skippedKeys.has(key)) continue;
        if (value === undefined) continue; // Safety: skip if dynamic prop is undefined

        // Special handling for fills/strokes to hydrate paints
        if (key === "fills" || key === "strokes") {
          // Allow overriding paints even for SVG content if explicit props are provided
          finalNode[key] = await this.hydratePaints(value);
        } else if (key === "effects") {
          finalNode[key] = this.hydrateEffects(value);
        } else {
          try {
            // Check key existence and skip if it's not a property or if it's a function
            if (key in finalNode && typeof (finalNode as any)[key] !== 'function') {
              (finalNode as any)[key] = value;
            } else if (!(key in finalNode)) {
              // Optionally log or ignore custom props
              // console.log(`Skipping non-Figma property: ${key}`);
            }
          } catch (e) {
            console.warn(`Failed to set property ${key} on ${def.name} `, e);
          }
        }
      }
    }

    // Set explicit name from definition LAST so it overrides any generic 'name' prop
    if (def.name) finalNode.name = def.name;

    // Special handling for vectors created from SVG - they are often frames containing vectors
    // If it's a Frame from SVG, we might want to flatten it or handle it as requested.
    // referencing generated code: figma.flatten([v10])

    // 4. Transform / Layout
    if (def.layoutProps) {
      // Create a copy of layoutProps to safely modify
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const layoutOpts = { ...def.layoutProps } as any;

      // CRITICAL FIX: If sizing mode is AUTO (Hug Contents), we must NOT hardcode the dimension via resize(),
      // because resize() forces the node into FIXED mode. We should let the content drive the size.
      if ("layoutMode" in node && (node as FrameNode).layoutMode !== "NONE") {
        const frame = node as FrameNode;
        const isHorizontal = frame.layoutMode === "HORIZONTAL";
        const isVertical = frame.layoutMode === "VERTICAL";

        // Primary Axis
        if (frame.primaryAxisSizingMode === "AUTO") {
          if (isHorizontal) delete layoutOpts.width;
          if (isVertical) delete layoutOpts.height;
        }

        // Counter Axis
        if (frame.counterAxisSizingMode === "AUTO") {
          if (isHorizontal) delete layoutOpts.height;
          if (isVertical) delete layoutOpts.width;
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      applySizeAndTransform(node as any, layoutOpts);

      // Explicitly apply layoutPositioning if requested
      if (def.layoutProps.layoutPositioning && "layoutPositioning" in node) {
        try {
          (node as any).layoutPositioning = def.layoutProps.layoutPositioning;
        } catch (e) {
          console.warn(`[BaseComponent] Failed to set layoutPositioning on ${def.name}`, e);
        }
      }

      // Apply layoutGrow and layoutAlign
      if (def.layoutProps.layoutGrow !== undefined && "layoutGrow" in node) {
        (node as any).layoutGrow = def.layoutProps.layoutGrow;
      }
      if (def.layoutProps.layoutAlign && "layoutAlign" in node) {
        (node as any).layoutAlign = def.layoutProps.layoutAlign;
      }
    }

    // 4.5 Post-Create Hook (Specialized logic)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((def as any).postCreate && typeof (def as any).postCreate === 'function') {
      await (def as any).postCreate(node, def.props);
    }

    // 5. Recursion
    // 5. Recursion (Already done if we flattened, but check if we skipped it?)
    // If we moved recursion up, we should remove it from here.
    // But wait, step 2 (Append) was before recursion in original code.
    // Original: 1. Create, 2. Append, 3. Props, 4. Layout, 5. Recursion.

    // If we move recursion up, we change the order of operations.
    // Is that safe?
    // Usually yes, unless children depend on parent props (which they might for layout).
    // But `renderDefinition` passes `node` as parent.
    // If `node` doesn't have layout/props set yet, children might not layout correctly?
    // Figma usually handles layout dynamically.

    // OPTIMIZATION: Only move recursion up if we plan to flatten?
    // Or just do it. Let's stick to the modification plan:
    // If we moved it up in step 2.5 replacement, we must delete it here or guard it.
    // The previous ReplacementChunk replaced insertion at step 2.
    // So we need to REMOVE this block.


    return node;
  }


  /**
   * Helper to convert portable paints (with handles/assetRefs) to Figma-ready paints
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async hydratePaints(paints: any[]): Promise<any[]> {
    if (!paints || !Array.isArray(paints)) {
      if (paints && typeof paints === 'object' && Object.keys(paints).length > 0) {
        console.warn(`[BaseComponent] Expected array for paints, received non-empty object:`, paints);
      }
      return [];
    }

    const hydrated = await Promise.all(paints.map(async (p) => {
      const paint = { ...p };

      // Clean up properties that Figma rejects
      if (paint.originalImageHash) delete paint.originalImageHash;

      // Sanitize color objects: Figma Paint API (fills/strokes) only accepts RGB, no 'a' (alpha).
      // Alpha must be handled via the top-level 'opacity' property on the paint.
      if (paint.color && typeof paint.color === 'object') {
        // We use JSON clone because paint.color is a simple RGB(A) object.
        // This ensures we aren't mutating the original input property data.
        const colorClone = JSON.parse(JSON.stringify(paint.color));
        if ('a' in colorClone) {
          if (paint.opacity === undefined) {
            paint.opacity = colorClone.a;
          }
          delete colorClone.a;
        }
        paint.color = colorClone;
      }

      // Handle Images
      if (paint.type === "IMAGE") {
        if (paint.assetRef) {
          try {
            if (typeof paint.assetRef === 'string' && paint.assetRef.length > 100) {
              const bytes = figma.base64Decode(paint.assetRef.split(',')[1] || paint.assetRef);
              const img = figma.createImage(bytes);
              paint.imageHash = img.hash;
            }
            delete paint.assetRef;
          } catch (e) {
            console.warn("Failed to hydrate image", e);
          }
        }

        // Validation check: If we don't have an imageHash by now, this paint is invalid for Figma sets
        if (!paint.imageHash) {
          console.warn("Removing image paint without hash:", paint);
          return null;
        }
      }

      return paint;
    }));

    // Filter out nulls (failed/skipped images)
    return hydrated.filter(Boolean);
  }

  /**
   * Safe setter for fontName. Falls back to Inter Regular if loading fails.
   */
  async setFont(node: TextNode, font: FontName): Promise<void> {
    try {
      await figma.loadFontAsync(font);
      node.fontName = font;
    } catch (e) {
      console.warn(`Failed to load font ${font.family} ${font.style}, falling back.`);
      // Attempt to load Inter Regular just in case it wasn't loaded
      try {
        const fallback = { family: "Inter", style: "Regular" };
        await figma.loadFontAsync(fallback);
        node.fontName = fallback;
      } catch (e2) {
        console.warn("Retrying Inter Regular failed", e2);
      }
    }
  }

  /**
   * Safe setter for setRangeFontName. Falls back to Inter Regular if loading fails.
   */
  async setRangeFont(node: TextNode, start: number, end: number, font: FontName): Promise<void> {
    try {
      await figma.loadFontAsync(font);
      node.setRangeFontName(start, end, font);
    } catch (e) {
      console.warn(`Failed to load font range ${font.family} ${font.style}, falling back.`);
      try {
        const fallback = { family: "Inter", style: "Regular" };
        await figma.loadFontAsync(fallback);
        node.setRangeFontName(start, end, fallback);
      } catch (e2) { /* ignore */ }
    }
  }

  /**
   * Helper to convert portable effects to Figma-ready effects
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hydrateEffects(effects: any[]): Effect[] {
    if (!effects || !Array.isArray(effects)) return [];

    const hydrated = effects.map((e) => {
      const effect = { ...e };

      // Sanitize color in effects (Drop Shadow, Inner Shadow)
      if (effect.color && typeof effect.color === 'object') {
        const colorClone = JSON.parse(JSON.stringify(effect.color));
        // Keep 'a' for effects if present, but deep clone ensures no ref mutation.
        effect.color = colorClone;
      }

      // Strict Key Filtering for Drop Shadow to avoid "unrecognized keys"
      if (effect.type === "DROP_SHADOW" || effect.type === "INNER_SHADOW") {
        return {
          type: effect.type,
          color: effect.color,
          offset: effect.offset,
          radius: effect.radius,
          spread: effect.spread,
          visible: effect.visible !== undefined ? effect.visible : true,
          blendMode: effect.blendMode || "NORMAL",
          showShadowBehindNode: effect.showShadowBehindNode !== undefined ? effect.showShadowBehindNode : false
        } as Effect;
      }

      if (effect.type === "LAYER_BLUR" || effect.type === "BACKGROUND_BLUR") {
        return {
          type: effect.type,
          radius: effect.radius,
          visible: effect.visible !== undefined ? effect.visible : true
        } as Effect;
      }

      return effect;
    });

    return hydrated;
  }
}


/// <reference types="@figma/plugin-typings" />
export interface ComponentProps {
  x: number;
  y: number;
  text?: string;
  subtext?: string;
  hideButtons?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}


export type T2x3 = [[number, number, number], [number, number, number]];

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
  };
  children?: NodeDefinition[];
  // For specialized nodes like Vectors where we might pass raw SVG or paths
  svgContent?: string;
  vectorPaths?: VectorPaths;
  shouldFlatten?: boolean;
}

export abstract class BaseComponent {
  abstract create(props: ComponentProps): SceneNode | Promise<SceneNode>;

  /**
   * Generic renderer for data-driven component structure
   */
  async renderDefinition(def: NodeDefinition, parent?: BaseNode): Promise<SceneNode> {
    let node: SceneNode;

    // 1. Create Node
    switch (def.type) {
      case "FRAME": node = figma.createFrame(); break;
      case "TEXT": node = figma.createText(); break;
      case "RECTANGLE": node = figma.createRectangle(); break;
      case "ELLIPSE": node = figma.createEllipse(); break;
      case "LINE": node = figma.createLine(); break;
      case "STAR": node = figma.createStar(); break;
      case "POLYGON": node = figma.createPolygon(); break;
      case "VECTOR":
        if (def.svgContent) {
          node = figma.createNodeFromSvg(def.svgContent);
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
      // TODO: Handle INSTANCE, COMPONENT, GROUP if needed
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
        console.warn("Failed to flatten node", def.name, e);
      }
    }


    // 3. Set Properties
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const safeNode = node as any;
    if (def.name) safeNode.name = def.name;

    if (def.props) {
      // Prioritize layoutMode to avoid errors with dependent props (e.g. itemReverseZIndex)
      if (def.props.layoutMode) {
        safeNode.layoutMode = def.props.layoutMode;
      }

      // Pre-load font for TextNodes to avoid "unloaded font" errors when setting characters/properties
      if (def.type === "TEXT") {
        const fontProp = def.props.font;
        if (fontProp) {
          await this.setFont(safeNode, fontProp);
        } else {
          // If no explicit font prop, ensure the default font is loaded
          const currentFont = safeNode.fontName;
          if (currentFont && currentFont !== figma.mixed) {
            await figma.loadFontAsync(currentFont as FontName);
          }
        }
      }

      for (const [key, value] of Object.entries(def.props)) {
        if (key === "layoutMode") continue; // Already set
        if (key === "font" && def.type === "TEXT") continue; // Already handled

        // Special handling for fills/strokes to hydrate paints
        if (key === "fills" || key === "strokes") {
          safeNode[key] = await this.hydratePaints(value);
        } else {
          // Check if property exists on node to avoid errors? 
          // For now, we assume the generator produced valid properties.
          try {
            // Safety check for layout properties that require Autolayout
            if (key === "itemReverseZIndex" || key === "strokesIncludedInLayout") {
              // Must have layoutMode set to something other than NONE
              if (!safeNode.layoutMode || safeNode.layoutMode === "NONE") {
                continue;
              }
            }
            // Check key existence to be safe, or just assign
            safeNode[key] = value;
          } catch (e) {
            console.warn(`Failed to set property ${key} on ${def.name}`, e);
          }
        }
      }
    }

    // Special handling for vectors created from SVG - they are often frames containing vectors
    // If it's a Frame from SVG, we might want to flatten it or handle it as requested.
    // referencing generated code: figma.flatten([v10])

    // 4. Transform / Layout
    if (def.layoutProps) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.applyLayoutProps(node as any, def.layoutProps);
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

  applyLayoutProps(
    node: SceneNode & LayoutMixin & GeometryMixin,
    opts: {
      width?: number;
      height?: number;
      relativeTransform?: T2x3;
      parentIsAutoLayout: boolean;
      layoutPositioning?: "AUTO" | "ABSOLUTE";
    }
  ) {
    const { width, height, relativeTransform, parentIsAutoLayout } = opts;
    const positioning = opts.layoutPositioning ?? "AUTO";

    if (typeof width === "number" && typeof height === "number") {
      node.resize(width, height);
    }

    if (relativeTransform) {
      const t = relativeTransform;
      const inFlow = parentIsAutoLayout && positioning !== "ABSOLUTE";

      // Strip translation in auto-layout flow; keep axis vectors
      const tx = inFlow ? 0 : t[0][2];
      const ty = inFlow ? 0 : t[1][2];

      try {
        node.relativeTransform = [
          [t[0][0], t[0][1], tx],
          [t[1][0], t[1][1], ty],
        ];
      } catch (e) {
        console.warn("Failed to set relativeTransform", e);
      }
    }
  }

  /**
   * Helper to convert portable paints (with handles/assetRefs) to Figma-ready paints
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async hydratePaints(paints: any[]): Promise<any[]> {
    if (!paints || !Array.isArray(paints)) return paints;

    const hydrated = await Promise.all(paints.map(async (p) => {
      const paint = { ...p };

      // Clean up properties that Figma rejects
      if (paint.originalImageHash) delete paint.originalImageHash;

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
}


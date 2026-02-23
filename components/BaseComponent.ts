import { applySizeAndTransform, detectBakedRotation, T2x3 } from "./TransformHelpers";

export { type T2x3 };

export interface ComponentProps {
  x?: number;
  y?: number;
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
  props?: Record<string, any> & {
    richTextSpans?: { start: number; end: number; font?: FontName; fills?: Paint[]; fontSize?: number }[];
    arcData?: { startingAngle: number; endingAngle: number; innerRadius: number };
  };
  booleanOperation?: "UNION" | "INTERSECT" | "SUBTRACT" | "EXCLUDE";
  layoutProps?: {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    relativeTransform?: T2x3;
    parentIsAutoLayout?: boolean;
    layoutPositioning?: "AUTO" | "ABSOLUTE";
    layoutGrow?: number;
    layoutAlign?: "MIN" | "CENTER" | "MAX" | "STRETCH" | "INHERIT";
    layoutSizingHorizontal?: "FIXED" | "HUG" | "FILL";
    layoutSizingVertical?: "FIXED" | "HUG" | "FILL";
    constraints?: Constraints;
    preserveAutoLayoutTranslation?: boolean;
  };
  children?: NodeDefinition[];
  // For specialized nodes like Vectors where we might pass raw SVG or paths
  svgContent?: string;
  vectorPaths?: VectorPaths;
  shouldFlatten?: boolean;
  preventBakingAnalysis?: boolean;
  component?: new () => {
    create: (props: ComponentProps) => SceneNode | Promise<SceneNode>;
    createAsync?: (props: ComponentProps) => Promise<SceneNode>;
  };
  postCreate?: (node: SceneNode, props?: NodeDefinition["props"]) => void | Promise<void>;
}

export abstract class BaseComponent {
  private static nativeGlassSupport: boolean | null = null;

  private supportsNativeGlassEffects(): boolean {
    if (BaseComponent.nativeGlassSupport !== null) return BaseComponent.nativeGlassSupport;

    let frameProbe: FrameNode | null = null;
    let rectProbe: RectangleNode | null = null;
    try {
      // Probe with minimal payload. We test both frame and rectangle because
      // captures frequently apply GLASS on frames.
      frameProbe = figma.createFrame();
      frameProbe.resizeWithoutConstraints(2, 2);
      frameProbe.fills = [];
      frameProbe.effects = [{ type: "GLASS", visible: true, radius: 1 } as unknown as Effect];

      rectProbe = figma.createRectangle();
      rectProbe.effects = [{ type: "GLASS", visible: true, radius: 1 } as unknown as Effect];
      BaseComponent.nativeGlassSupport = true;
    } catch (_err) {
      BaseComponent.nativeGlassSupport = false;
    } finally {
      try {
        frameProbe?.remove();
        rectProbe?.remove();
      } catch (_removeErr) { /* noop */ }
    }

    return BaseComponent.nativeGlassSupport;
  }

  abstract create(props: ComponentProps): SceneNode | Promise<SceneNode>;

  /**
   * Generic renderer for data-driven component structure
   */
  async renderDefinition(def: NodeDefinition, parent?: BaseNode): Promise<SceneNode> {
    let node: SceneNode;
    let isSvgContainerNode = false;
    let skipCapturedChildren = false;
    let preSizedNonAutoLayoutContainer = false;
    // let pendingLayoutGrow: number | undefined;
    // let pendingLayoutAlign: string | undefined;

    // 1. Create Node
    switch (def.type) {
      case "FRAME":
        if (def.svgContent) {
          node = figma.createNodeFromSvg(def.svgContent);
          node.fills = [];
          isSvgContainerNode = true;
          skipCapturedChildren = true;
        } else {
          node = figma.createFrame();
          // Default to transparent to ensure Groups converted to Frames don't result in white boxes
          node.fills = [];
        }
        break;
      case "TEXT": node = figma.createText(); break;
      case "RECTANGLE": node = figma.createRectangle(); break;
      case "ELLIPSE": node = figma.createEllipse(); break;
      case "LINE": node = figma.createLine(); break;
      case "STAR":
        if (def.svgContent) {
          node = figma.createNodeFromSvg(def.svgContent);
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
        } else {
          const polyNode = figma.createPolygon();
          if (def.props?.pointCount !== undefined) polyNode.pointCount = def.props.pointCount;
          node = polyNode;
        }
        break;
      case "VECTOR":
        if (def.svgContent) {
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

              // Respect the 'preventBakingAnalysis' flag if present (from new Capture logic)
              if (!def.preventBakingAnalysis && detectBakedRotation(svgW, svgH, jsonW, jsonH)) {
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
          const svgContainer = figma.createNodeFromSvg(finalSvgContent);
          svgContainer.fills = [];
          try {
            // Fidelity rule: NodeDefinition type VECTOR should instantiate as a real VectorNode.
            node = figma.flatten([svgContainer], figma.currentPage);
          } catch (flattenError) {
            console.warn(`[BaseComponent] Failed to flatten SVG vector ${def.name || "Vector"}, using container fallback`, flattenError);
            node = svgContainer;
          }
        } else {
          node = figma.createVector();
          if (def.vectorPaths) {
            (node as VectorNode).vectorPaths = def.vectorPaths;
          }
        }
        break;
      case "GROUP":
        if (def.svgContent) {
          node = figma.createNodeFromSvg(def.svgContent);
          node.fills = [];
          isSvgContainerNode = true;
          skipCapturedChildren = true;
        } else {
          const groupFallback = figma.createFrame();
          groupFallback.fills = [];
          node = groupFallback;
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
        const componentClass = def.component;
        if (componentClass) {
          const instance = new componentClass();
          // Pass EVERYTHING to the nested component: props and layout properties
          console.log(`[BaseComponent] Creating nested component: ${def.name || componentClass.name}`);
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
      // TODO: Handle INSTANCE if needed
      default: node = figma.createFrame(); break;
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
        const isGrid = def.props.layoutMode === "GRID";
        const layoutKeys = isGrid
          ? [
            "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
            "primaryAxisAlignItems", "counterAxisAlignItems",
            "itemReverseZIndex", "strokesIncludedInLayout",
            "gridRowCount", "gridColumnCount", "gridRowGap", "gridColumnGap"
          ]
          : [
            "primaryAxisSizingMode", "counterAxisSizingMode",
            "primaryAxisAlignItems", "counterAxisAlignItems",
            "itemSpacing", "counterAxisSpacing",
            "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
            "itemReverseZIndex", "strokesIncludedInLayout",
            "layoutWrap", "counterAxisAlignContent"
          ];

        for (const key of layoutKeys) {
          // Check both props and layoutProps (where ComponentHelpers puts defaults)
          const val = def.props[key] !== undefined ? def.props[key] : def.layoutProps?.[key as keyof typeof def.layoutProps];
          if (val !== undefined) {
            safeNode[key] = val;
          }
        }
      } else if (def.props.layoutMode === "NONE") {
        safeNode.layoutMode = "NONE";
      }
    }

    // Fidelity: pre-size non-auto-layout containers before reconstructing children.
    // This prevents SCALE-constrained children from inheriting a transient 100x100 parent size.
    if (
      !skipCapturedChildren &&
      "children" in node &&
      "resizeWithoutConstraints" in node &&
      def.layoutProps &&
      typeof def.layoutProps.width === "number" &&
      typeof def.layoutProps.height === "number"
    ) {
      const layoutMode = "layoutMode" in node ? (node as FrameNode).layoutMode : "NONE";
      if (layoutMode === "NONE") {
        try {
          const safeW = Math.max(def.layoutProps.width, 0.01);
          const safeH = Math.max(def.layoutProps.height, 0.01);
          node.resizeWithoutConstraints(safeW, safeH);
          preSizedNonAutoLayoutContainer = true;
        } catch (preSizeErr) {
          console.warn(`[BaseComponent] Failed pre-size for ${def.name || def.type}`, preSizeErr);
        }
      }
    }

    // 5. Recursion (Moved Up for Flatten Support)
    // CRITICAL: Skip recursion for BOOLEAN_OPERATION nodes because they handle their children
    // specially inside the 'renderDefinition' switch block to ensure document order.
    if (def.children && def.type !== "BOOLEAN_OPERATION" && !skipCapturedChildren) {
      for (const childDef of def.children) {
        if ("appendChild" in node) {
          await this.renderDefinition(childDef, node as BaseNode & ChildrenMixin);
        }
      }
    }

    // 2.5 Handle Flattening
    if (def.shouldFlatten) {
      try {
        const flattenParent = (parent || figma.currentPage) as BaseNode & ChildrenMixin;
        // Ensure node is attached before flattening to match Figma expectations.
        // This mirrors runtime behavior used by JsonReconstructor (attach late but valid).
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((node as any).parent !== flattenParent) {
          try {
            flattenParent.appendChild(node);
          } catch (_attachErr) { /* noop */ }
        }
        // Flatten replaces the node with a new Vector node
        const flattened = figma.flatten([node], flattenParent);
        node = flattened;
      } catch (e) {
        console.warn(`[BaseComponent] Failed to flatten node ${def.name || 'node'}`, e);
      }
    }


    // 3. Set Properties
    // Re-assign final node in case identity changed due to flattening
    const finalNode = node as SceneNode & Record<string, unknown>;

    if (def.props) {
      // Pre-load font for TextNodes to avoid "unloaded font" errors when setting characters/properties
      if (def.type === "TEXT") {
        const textNode = node as TextNode;
        const fontProp = def.props.font;
        if (fontProp) {
          await this.setFont(textNode, fontProp);
        } else {
          // If no explicit font prop, ensure the default font is loaded
          const currentFont = textNode.fontName;
          if (currentFont && currentFont !== figma.mixed) {
            await figma.loadFontAsync(currentFont as FontName);
          }
        }
      }

      const skippedKeys = new Set([
        "layoutMode", "font",
        "primaryAxisSizingMode", "counterAxisSizingMode",
        "primaryAxisAlignItems", "counterAxisAlignItems",
        "itemSpacing", "counterAxisSpacing",
        "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
        "itemReverseZIndex", "strokesIncludedInLayout",
        "layoutWrap", "counterAxisAlignContent",
        "gridRowCount", "gridColumnCount", "gridRowGap", "gridColumnGap", "gridRowSizes", "gridColumnSizes",
        "pointCount", "innerRadius", // Shape specific
        "width", "height", "x", "y", "rotation", // Read-only or handled via resize/transform
        "relativeTransform", "layoutGrow", "layoutAlign", // Handled in layoutProps
        "layoutSizingHorizontal", "layoutSizingVertical", // apply post-attach to avoid invalid FILL errors
        "gridRowSpan", "gridColumnSpan", // apply post-attach only when parent is GRID
        "type", "children", "fontWeight" // Read-only or handled explicitly
      ]);
      const skipSvgContainerPaintHydration = isSvgContainerNode;

      for (const [key, value] of Object.entries(def.props)) {
        if (skippedKeys.has(key)) continue;
        if (value === undefined) continue; // Safety: skip if dynamic prop is undefined

        // Special handling for fills/strokes to hydrate paints
        if (key === "fills" || key === "strokes") {
          if (skipSvgContainerPaintHydration) continue;
          const hydrated = await this.hydratePaints(value);
          finalNode[key] = hydrated;
          // Apply hydration back to def.props so postCreate hooks see safe colors
          def.props[key] = hydrated;
        } else if (key === "effects") {
          // Prefer exact captured effects (including newer effect types). If the runtime rejects
          // those payloads, fall back to conservative legacy-safe hydration.
          const exactEffects = this.hydrateEffects(value, { preserveUnknown: true });
          try {
            finalNode[key] = exactEffects;
          } catch (effectErr) {
            console.warn(`[BaseComponent] Failed to apply exact effects on ${def.name || def.type}, falling back`, effectErr);
            const fallbackEffects = this.hydrateEffects(value, { preserveUnknown: false });
            try {
              finalNode[key] = fallbackEffects;
            } catch (fallbackErr) {
              console.warn(`[BaseComponent] Failed to apply fallback effects on ${def.name || def.type}, dropping effects`, fallbackErr);
              finalNode[key] = [];
            }
          }
        } else {
          try {
            // Check key existence and skip if it's not a property or if it's a function
            if (key in finalNode && typeof finalNode[key] !== 'function') {
              finalNode[key] = value;
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

    // Handle Rich Text Spans for Text Nodes
    if (def.props?.richTextSpans && node.type === "TEXT") {
      const textNode = node as TextNode;
      const textLen = textNode.characters.length;

      for (const span of def.props.richTextSpans) {
        // Bounds check
        if (span.start >= textLen) continue; // Start beyond end
        const safeEnd = Math.min(span.end, textLen);
        if (safeEnd <= span.start) continue; // Empty range

        if (span.font) {
          await this.setRangeFont(textNode, span.start, safeEnd, span.font);
        }
        if (span.fills) {
          // Additional safety: hydrate paints if needed or raw? 
          // setRangeFills expects Paint[], BaseComponent hydratePaints returns Paint[].
          // Assuming the props are already hydrated or raw compatible. 
          try {
            textNode.setRangeFills(span.start, safeEnd, span.fills);
          } catch (fillErr) {
            console.warn("[BaseComponent] setRangeFills failed", fillErr);
          }
        }
        if (span.fontSize) {
          try {
            textNode.setRangeFontSize(span.start, safeEnd, span.fontSize);
          } catch (fsErr) {
            console.warn("[BaseComponent] setRangeFontSize failed", fsErr);
          }
        }
      }
    }

    // Fix for Masks: Ensure they have a fill so they are not invisible
    if (def.props && def.props.isMask) {
      if ("fills" in finalNode) {
        const n = finalNode as GeometryMixin;
        if (!n.fills || (Array.isArray(n.fills) && n.fills.length === 0)) {
          // Masks need a fill to be effective (opacity source). Any solid fill works.
          n.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
          // Force ALPHA mask type so the fill constitutes the mask (ignoring vector paths if missing)
          if ("maskType" in node) {
            node.maskType = "ALPHA";
          }
        }
      }
    }

    // Set explicit name from definition LAST so it overrides any generic 'name' prop
    if (def.name) finalNode.name = def.name;

    // Special handling for vectors created from SVG - they are often frames containing vectors
    // If it's a Frame from SVG, we might want to flatten it or handle it as requested.
    // referencing generated code: figma.flatten([v10])



    // 4.5 Post-Create Hook (Specialized logic)
    if (typeof def.postCreate === 'function') {
      await def.postCreate(node, def.props);
    }

    // 4.8 Attach to parent at the end to preserve stable auto-layout behavior.
    // This matches JsonReconstructor ordering more closely and avoids intermediate
    // layout calculations with partially configured nodes.
    if (parent && "appendChild" in parent) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const parentWithChildren = parent as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((node as any).parent !== parentWithChildren) {
        try {
          parentWithChildren.appendChild(node);
        } catch (appendErr) {
          console.warn(`[BaseComponent] Failed to append ${def.name || def.type} to parent`, appendErr);
        }
      }
    }

    // 4.9 Post-attach property application & Transform
    // CRITICAL: Transforms and absolute positioning must be applied AFTER the node is 
    // attached to its parent. This prevents Figma's Auto Layout from stripping
    // positional data or misaligning elements.
    if (def.layoutProps) {
      const parentNode = node.parent;

      // 1. Set Layout Positioning
      if (def.layoutProps.layoutPositioning && "layoutPositioning" in node) {
        try {
          if (parentNode && "layoutMode" in parentNode && parentNode.layoutMode !== "NONE") {
            (node as LayoutMixin).layoutPositioning = def.layoutProps.layoutPositioning;
          }
        } catch (e) {
          console.warn(`[BaseComponent] Failed to set layoutPositioning on ${def.name || def.type}`, e);
        }
      }

      // 2. Apply Size and Transform
      const layoutOpts: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        preserveAutoLayoutTranslation?: boolean;
      } = {
        width: preSizedNonAutoLayoutContainer ? undefined : def.layoutProps.width,
        height: preSizedNonAutoLayoutContainer ? undefined : def.layoutProps.height,
        relativeTransform: def.layoutProps.relativeTransform,
        preserveAutoLayoutTranslation: def.layoutProps.preserveAutoLayoutTranslation
      };

      // Preserve translation for in-flow auto-layout children only when explicitly requested.
      if (def.layoutProps.preserveAutoLayoutTranslation === true) {
        layoutOpts.preserveAutoLayoutTranslation = true;
      }

      // TEXT Node hugging support
      if (def.type === "TEXT" && def.props?.textAutoResize === "WIDTH_AND_HEIGHT") {
        delete layoutOpts.width;
        delete layoutOpts.height;
      }

      if (
        "layoutMode" in node &&
        (node as FrameNode).layoutMode !== "NONE"
      ) {
        const frame = node as FrameNode;
        try {
          // Only force FIXED on the axis we are explicitly resizing with a number.
          // This prevents Figma from overriding HUG/FILL on the other axis.
          if (typeof layoutOpts.width === "number" && frame.primaryAxisSizingMode !== "FIXED") {
            frame.primaryAxisSizingMode = "FIXED";
          }
          if (typeof layoutOpts.height === "number" && frame.counterAxisSizingMode !== "FIXED") {
            frame.counterAxisSizingMode = "FIXED";
          }
        } catch (e) { /* ignore */ }
      }

      applySizeAndTransform(node as SceneNode & LayoutMixin, layoutOpts);

      // Re-apply container layout props after transform (resize can reset them)
      if ("layoutMode" in node && (node as FrameNode).layoutMode !== "NONE" && def.props) {
        const frame = node as FrameNode;
        const isGrid = frame.layoutMode === "GRID";
        const autoLayoutKeys = isGrid
          ? [
            "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
            "primaryAxisAlignItems", "counterAxisAlignItems",
            "itemReverseZIndex", "strokesIncludedInLayout",
            "gridRowCount", "gridColumnCount", "gridRowGap", "gridColumnGap"
          ]
          : [
            "primaryAxisSizingMode", "counterAxisSizingMode", "primaryAxisAlignItems",
            "counterAxisAlignItems", "itemSpacing", "counterAxisSpacing", "paddingTop", "paddingRight",
            "paddingBottom", "paddingLeft", "itemReverseZIndex", "strokesIncludedInLayout",
            "counterAxisAlignContent"
          ];
        const frameMutable = frame as unknown as Record<string, unknown>;
        for (const key of autoLayoutKeys) {
          const val = def.props[key] !== undefined ? def.props[key] : def.layoutProps?.[key as keyof typeof def.layoutProps];
          if (val !== undefined) {
            frameMutable[key] = val;
          }
        }
        if (!isGrid && def.props.layoutWrap !== undefined && "layoutWrap" in frame) {
          frameMutable.layoutWrap = def.props.layoutWrap;
        }
        if (Array.isArray(def.props.gridRowSizes) && "gridRowSizes" in frame) {
          def.props.gridRowSizes.forEach((size: { type?: "FLEX" | "FIXED" | "HUG"; value?: number }, idx: number) => {
            if (!frame.gridRowSizes[idx]) return;
            try {
              if (size.type) frame.gridRowSizes[idx].type = size.type;
              if (typeof size.value === "number") frame.gridRowSizes[idx].value = size.value;
            } catch (_err) { /* noop */ }
          });
        }
        if (Array.isArray(def.props.gridColumnSizes) && "gridColumnSizes" in frame) {
          def.props.gridColumnSizes.forEach((size: { type?: "FLEX" | "FIXED" | "HUG"; value?: number }, idx: number) => {
            if (!frame.gridColumnSizes[idx]) return;
            try {
              if (size.type) frame.gridColumnSizes[idx].type = size.type;
              if (typeof size.value === "number") frame.gridColumnSizes[idx].value = size.value;
            } catch (_err) { /* noop */ }
          });
        }
      }

      // 3. Apply child placement props (Grow/Align/Constraints)
      const grow = def.layoutProps.layoutGrow ?? def.props?.layoutGrow;
      const align = def.layoutProps.layoutAlign ?? def.props?.layoutAlign;
      const sizingHorizontal = def.layoutProps.layoutSizingHorizontal ?? def.props?.layoutSizingHorizontal;
      const sizingVertical = def.layoutProps.layoutSizingVertical ?? def.props?.layoutSizingVertical;
      if (grow !== undefined && "layoutGrow" in node) {
        try { (node as LayoutMixin).layoutGrow = grow; } catch (e) { /* ignore */ }
      }
      if (align && "layoutAlign" in node) {
        try {
          (node as LayoutMixin).layoutAlign = align as "MIN" | "CENTER" | "MAX" | "STRETCH" | "INHERIT";
        } catch (e) { /* ignore */ }
      }

      // Apply layoutSizing shorthands if provided. We removed the restrictive 'shouldApplyLayoutSizingShorthand'
      // check to ensure these are always honored if specified.
      if (sizingHorizontal && "layoutSizingHorizontal" in node) {
        try {
          (node as LayoutMixin).layoutSizingHorizontal = sizingHorizontal;
        } catch (e) { /* ignore */ }
      }
      if (sizingVertical && "layoutSizingVertical" in node) {
        try {
          (node as LayoutMixin).layoutSizingVertical = sizingVertical;
        } catch (e) { /* ignore */ }
      }

      if (def.layoutProps.constraints && "constraints" in node) {
        (node as ConstraintMixin).constraints = def.layoutProps.constraints;
      }

      const parentIsGrid = !!(
        node.parent &&
        "layoutMode" in node.parent &&
        (node.parent as FrameNode).layoutMode === "GRID"
      );
      if (parentIsGrid) {
        if (typeof def.props?.gridRowSpan === "number" && "gridRowSpan" in node) {
          try { (node as LayoutMixin).gridRowSpan = def.props.gridRowSpan; } catch (_err) { /* noop */ }
        }
        if (typeof def.props?.gridColumnSpan === "number" && "gridColumnSpan" in node) {
          try { (node as LayoutMixin).gridColumnSpan = def.props.gridColumnSpan; } catch (_err) { /* noop */ }
        }
      }
    }

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
      console.warn(`[BaseComponent] setFont: FAILED to load ${font.family} ${font.style}. Error:`, e);
      // Attempt to load Inter Regular just in case it wasn't loaded
      try {
        const fallback = { family: "Inter", style: "Regular" };
        await figma.loadFontAsync(fallback);
        node.fontName = fallback;
      } catch (e2) {
        console.warn("[BaseComponent] setFont: Retrying Inter Regular failed", e2);
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
  hydrateEffects(effects: any[], options: { preserveUnknown?: boolean } = {}): Effect[] {
    if (!effects || !Array.isArray(effects)) return [];
    const preserveUnknown = options.preserveUnknown !== false;

    return effects.reduce<Effect[]>((acc, e) => {
      const converted = this.convertEffect(e, preserveUnknown);
      if (converted) {
        if (Array.isArray(converted)) {
          acc.push(...converted);
        } else {
          acc.push(converted);
        }
      }
      return acc;
    }, []);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  convertEffect(effectData: any, preserveUnknown: boolean = true): Effect | Effect[] | null {
    const effect = { ...effectData };
    delete effect.boundVariables;

    // Sanitize color
    if (effect.color && typeof effect.color === 'object') {
      const colorClone = JSON.parse(JSON.stringify(effect.color));
      const hasRgb = typeof colorClone.r === 'number' && typeof colorClone.g === 'number' && typeof colorClone.b === 'number';
      if (!hasRgb) {
        // Invalid/mixed/variable alias color payloads are rejected by set_effects.
        delete effect.color;
      } else {
        if (typeof colorClone.a === 'number') {
          const a = Math.max(0, Math.min(1, colorClone.a));
          colorClone.a = a;
        }
        effect.color = colorClone;
      }
    }

    if (effect.type === "DROP_SHADOW" || effect.type === "INNER_SHADOW") {
      return {
        type: effect.type,
        color: effect.color || { r: 0, g: 0, b: 0, a: 0.25 },
        offset: {
          x: typeof effect.offset?.x === 'number' ? effect.offset.x : 0,
          y: typeof effect.offset?.y === 'number' ? effect.offset.y : 0
        },
        radius: typeof effect.radius === 'number' ? effect.radius : 0,
        spread: typeof effect.spread === 'number' ? effect.spread : 0,
        visible: effect.visible !== undefined ? effect.visible : true,
        blendMode: effect.blendMode || "NORMAL",
        showShadowBehindNode: effect.showShadowBehindNode !== undefined ? effect.showShadowBehindNode : false
      } as Effect;
    }

    if (effect.type === "LAYER_BLUR" || effect.type === "BACKGROUND_BLUR") {
      return {
        type: effect.type,
        radius: typeof effect.radius === 'number' ? effect.radius : 20,
        visible: effect.visible !== undefined ? effect.visible : true
      } as Effect;
    }

    // Preserve custom/new effect types when requested for capture fidelity.
    if (effect.type === "GLASS") {
      // Keep native GLASS payload minimal. Some runtimes accept GLASS but reject
      // extended metadata fields from capture payloads.
      const nativeGlass: Record<string, unknown> = {
        type: "GLASS",
        visible: effect.visible !== undefined ? effect.visible : true,
        radius: typeof effect.radius === 'number' ? effect.radius : 20
      };

      if (preserveUnknown) {
        if (this.supportsNativeGlassEffects()) {
          return nativeGlass as unknown as Effect;
        }
      }

      // Legacy fallback for environments that reject unknown effect types.
      const radius = typeof effect.radius === 'number' ? effect.radius : 20;
      const glassEffects: Effect[] = [];

      // 1. Background Blur
      glassEffects.push({
        type: "BACKGROUND_BLUR",
        radius: radius,
        visible: effect.visible !== undefined ? effect.visible : true
      } as Effect);

      // 2. Reflection/Highlight (Inner Shadow)
      // Simulate light from top-left (-45deg) by using a white Inner Shadow
      glassEffects.push({
        type: "INNER_SHADOW",
        color: { r: 1, g: 1, b: 1, a: 0.4 }, // Semi-transparent White
        offset: { x: 0, y: 1 }, // Subtle top highlight
        radius: radius * 0.5, // Softness relative to blur
        spread: 0,
        visible: effect.visible !== undefined ? effect.visible : true,
        blendMode: "SCREEN"
      });

      // 3. Depth (Drop Shadow)
      glassEffects.push({
        type: "DROP_SHADOW",
        color: { r: 0, g: 0, b: 0, a: 0.15 }, // Semi-transparent Black
        offset: { x: 0, y: 4 },
        radius: radius,
        spread: 0,
        visible: effect.visible !== undefined ? effect.visible : true,
        blendMode: "NORMAL",
        showShadowBehindNode: false
      });

      return glassEffects;
    }

    if (preserveUnknown && typeof effect.type === "string") {
      // Best-effort pass-through without known-invalid keys.
      return effect as unknown as Effect;
    }

    return null;
  }
}

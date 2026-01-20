import { BaseComponent, ComponentProps } from "./BaseComponent";
import { applySizeAndTransform, T2x3 } from "./TransformHelpers";
import { AssetSource, hydrateFills } from "./PaintHelpers";
// import frame2609217 from "../tools/extraction/Competition_newsletters/Frame_2609217_2026-01-19_14-19-05.json";

export interface SerializedNode {
    type: "FRAME" | "INSTANCE" | "COMPONENT" | "TEXT" | "RECTANGLE" | "VECTOR" | "ELLIPSE" | "BOOLEAN_OPERATION" | "GROUP";
    name?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotation?: number;
    visible?: boolean;
    opacity?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    relativeTransform?: any; // Transform matrix [[a, b, tx], [c, d, ty]]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blendMode?: any;
    isMask?: boolean;
    maskType?: "ALPHA" | "VECTOR" | "LUMINANCE";
    clipsContent?: boolean;
    booleanOperation?: "UNION" | "INTERSECT" | "SUBTRACT" | "EXCLUDE";
    locked?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constraints?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fills?: (any & { assetRef?: string })[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strokes?: any[];
    strokeWeight?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strokeAlign?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    effects?: any[];
    cornerRadius?: number | "mixed";

    layout?: {
        mode?: "NONE" | "HORIZONTAL" | "VERTICAL";
        sizing?: {
            horizontal?: "AUTO" | "FIXED";
            vertical?: "AUTO" | "FIXED";
        };
        alignment?: {
            primary?: "MIN" | "MAX" | "CENTER" | "SPACE_BETWEEN";
            counter?: "MIN" | "MAX" | "CENTER" | "BASELINE";
        };
        spacing?: number;
        padding?: {
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        };
    };

    // Layout Positioning
    layoutAlign?: "MIN" | "MAX" | "CENTER" | "STRETCH" | "INHERIT";
    layoutGrow?: number;
    layoutPositioning?: "AUTO" | "ABSOLUTE"; // Explicitly added

    text?: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fontName?: any;
        fontSize?: number | "mixed";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        textAlignHorizontal?: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        textAlignVertical?: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        textAutoResize?: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        letterSpacing?: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lineHeight?: any;
        characters?: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fills?: any[] | "mixed";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        segments?: any[];
    };

    corners?: {
        topLeft?: number;
        topRight?: number;
        bottomRight?: number;
        bottomLeft?: number;
    };

    // Vector support
    vectorPaths?: { windingRule: "NONZERO" | "EVENODD", data: string }[];

    children?: SerializedNode[];
}

// Internal registry for data sources
const JsonRegistry: Record<string, SerializedNode> = {
    // "tools/extraction/Competition_newsletters/Frame_2609217_2026-01-19_14-19-05.json": frame2609217 as unknown as SerializedNode
};

export class JsonReconstructor extends BaseComponent {
    private data: SerializedNode;
    private jsonPath: string;

    constructor(jsonPath: string) {
        super();
        this.jsonPath = jsonPath;
        // Default initialization to avoid build errors
        this.data = { type: "FRAME", name: "Empty Registry Result" };

        if (jsonPath) {
            const registryData = JsonRegistry[jsonPath as keyof typeof JsonRegistry];
            if (registryData) {
                this.data = registryData;
            } else {
                console.error(`No JSON data found for path: ${jsonPath}`);
                console.warn("Available paths:", Object.keys(JsonRegistry));
            }
        }
    }

    public setData(data: SerializedNode) {
        this.data = data;
    }

    async create(props: ComponentProps & { assets?: Record<string, string> }): Promise<SceneNode> {
        const assetSource: AssetSource = {
            assets: {},
            createdImagesByAssetRef: new Map()
        };

        // Populate assets from props
        if (props.assets) {
            Object.entries(props.assets).forEach(([key, val]) => {
                assetSource.assets[key] = { bytesBase64: val };
            });
        }

        const result = await this.reconstruct(this.data, undefined, assetSource);
        if (result) {
            result.x = props.x;
            result.y = props.y;
            return result;
        }
        throw new Error("Failed to reconstruct node from JSON data");
    }

    async reconstruct(data: SerializedNode, parent?: FrameNode | GroupNode | SectionNode | PageNode, assetSource?: AssetSource): Promise<SceneNode | null> {
        console.log(`Reconstructing node: ${data.name} (${data.type})`);
        let node: SceneNode | null = null;

        try {
            // 1. Create Node based on type
            if (data.type === "FRAME" || data.type === "INSTANCE" || data.type === "COMPONENT") {
                node = figma.createFrame();
            } else if (data.type === "TEXT") {
                node = figma.createText();
            } else if (data.type === "RECTANGLE") {
                node = figma.createRectangle();
            } else if (data.type === "VECTOR") {
                node = figma.createVector();
            } else if (data.type === "ELLIPSE") {
                node = figma.createEllipse();
            } else if (data.type === "GROUP") {
                if (data.children && data.children.length > 0) {
                    const childrenNodes: SceneNode[] = [];
                    // Create children on current page first to establish relative positions
                    for (const childData of data.children) {
                        // Pass currentPage to ensure they are created on root for consistent grouping
                        const childNode = await this.reconstruct(childData, figma.currentPage, assetSource);
                        if (childNode) childrenNodes.push(childNode);
                    }

                    if (childrenNodes.length > 0) {
                        // Create group in the target parent
                        node = figma.group(childrenNodes, parent || figma.currentPage);
                        data.children = []; // Prevent re-processing in Step 7
                    }
                }

                if (!node) {
                    console.warn("Group with no children, creating empty frame placeholder");
                    node = figma.createFrame();
                    node.visible = false;
                }
            } else if (data.type === "BOOLEAN_OPERATION") {
                if (data.children && data.children.length > 0) {
                    const childrenNodes: SceneNode[] = [];
                    for (const childData of data.children) {
                        const childNode = await this.reconstruct(childData, undefined, assetSource);
                        if (childNode) childrenNodes.push(childNode);
                    }

                    if (childrenNodes.length > 0) {
                        if (data.booleanOperation === "SUBTRACT") {
                            node = figma.subtract(childrenNodes, parent || figma.currentPage);
                        } else if (data.booleanOperation === "INTERSECT") {
                            node = figma.intersect(childrenNodes, parent || figma.currentPage);
                        } else if (data.booleanOperation === "EXCLUDE") {
                            node = figma.exclude(childrenNodes, parent || figma.currentPage);
                        } else {
                            // Default to UNION
                            node = figma.union(childrenNodes, parent || figma.currentPage);
                        }

                        // Clear children from data so Step 7 doesn't re-add them
                        data.children = [];
                    }
                }

                if (!node) {
                    console.warn("Boolean operation with no children, skipping or creating empty frame placeholder");
                    node = figma.createFrame();
                }
            }

            if (!node) {
                console.warn(`Unsupported node type: ${data.type}`);
                return null;
            }

            // 2. Apply Basic Properties
            if (data.name) node.name = data.name;

            // --- STRICT ORDER OF OPERATIONS --- 
            // 1. Layout Properties (Mode, Align)
            // 2. Layout Positioning (Child props)
            // 3. Size & Transform (Atomic application)

            // Step 1: Layout Properties (Auto Layout Container)
            if ("layoutMode" in node && data.layout) {
                const frame = node as FrameNode;
                frame.layoutMode = data.layout.mode || "NONE";

                if (frame.layoutMode !== "NONE") {
                    if (data.layout.sizing) {
                        frame.primaryAxisSizingMode = data.layout.sizing.horizontal === "AUTO" ? "AUTO" : "FIXED";
                        frame.counterAxisSizingMode = data.layout.sizing.vertical === "AUTO" ? "AUTO" : "FIXED";
                    }
                    if (data.layout.alignment) {
                        frame.primaryAxisAlignItems = data.layout.alignment.primary || "MIN";
                        frame.counterAxisAlignItems = data.layout.alignment.counter || "MIN";
                    }
                    frame.itemSpacing = data.layout.spacing || 0;
                    if (data.layout.padding) {
                        frame.paddingTop = data.layout.padding.top || 0;
                        frame.paddingRight = data.layout.padding.right || 0;
                        frame.paddingBottom = data.layout.padding.bottom || 0;
                        frame.paddingLeft = data.layout.padding.left || 0;
                    }
                }
            }

            // Step 2: Layout Positioning (Child Properties)
            if ("layoutAlign" in node && data.layoutAlign) {
                node.layoutAlign = data.layoutAlign;
            }
            if ("layoutGrow" in node && data.layoutGrow !== undefined) {
                node.layoutGrow = data.layoutGrow;
            }


            // Step 3: Size & Transform (Atomic)
            // This prevents drift by setting size before matrix, and respecting auto-layout parent
            if ("resize" in node) {
                const width = data.width || 1;
                const height = data.height || 1;
                // Use relativeTransform if we have it (preferred), otherwise use rotation fallback
                const rTransform = data.relativeTransform as T2x3 | undefined;

                if (rTransform) {
                    applySizeAndTransform(node as SceneNode & LayoutMixin, {
                        width,
                        height,
                        relativeTransform: rTransform
                    });
                } else {
                    // Fallback for old captures
                    node.resizeWithoutConstraints(width, height);
                    node.rotation = data.rotation || 0;
                    // Only set x/y for absolute positioning fallback
                    if ((node as any).layoutPositioning !== 'AUTO') {
                        node.x = data.x !== undefined ? data.x : 0;
                        node.y = data.y !== undefined ? data.y : 0;
                    }
                }
            }

            node.visible = data.visible !== undefined ? data.visible : true;
            node.opacity = data.opacity !== undefined ? data.opacity : 1;

            if ("blendMode" in node && data.blendMode) {
                node.blendMode = data.blendMode || "PASS_THROUGH";
            }
            if ("locked" in node) {
                node.locked = data.locked || false;
            }

            // 2.5 Apply Advanced Visuals
            if ("isMask" in node && data.isMask !== undefined) {
                node.isMask = data.isMask;
            }
            if ("maskType" in node && data.maskType) {
                node.maskType = data.maskType;
            }
            if ("clipsContent" in node && data.clipsContent !== undefined) {
                node.clipsContent = data.clipsContent;
            }
            if ("booleanOperation" in node && data.booleanOperation) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (node as any).booleanOperation = data.booleanOperation;
            }

            // 4. Apply Visual Properties
            // Important: Apply fills carefully. Sometimes boundVariables cause issues if missing.
            if ("fills" in node && data.fills) {
                try {
                    const hydratedFills = await hydrateFills(data.fills, assetSource!);
                    if (hydratedFills) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        node.fills = hydratedFills as any;
                    }
                } catch (e) {
                    console.warn(`Failed to apply fills to ${node.name}`, e);
                }
            }
            if ("strokes" in node) {
                if (data.strokes) {
                    node.strokes = data.strokes;
                    if ("strokeWeight" in node && data.strokeWeight !== undefined) node.strokeWeight = data.strokeWeight;
                    if ("strokeAlign" in node && data.strokeAlign) node.strokeAlign = data.strokeAlign;
                } else {
                    node.strokes = [];
                }
            }
            if ("effects" in node && data.effects) {
                node.effects = data.effects;
            }
            if ("cornerRadius" in node) {
                if (data.cornerRadius !== undefined && data.cornerRadius !== "mixed") {
                    node.cornerRadius = data.cornerRadius;
                } else if (data.corners) {
                    if ("topLeftRadius" in node) node.topLeftRadius = data.corners.topLeft || 0;
                    if ("topRightRadius" in node) node.topRightRadius = data.corners.topRight || 0;
                    if ("bottomRightRadius" in node) node.bottomRightRadius = data.corners.bottomRight || 0;
                    if ("bottomLeftRadius" in node) node.bottomLeftRadius = data.corners.bottomLeft || 0;
                }
            }

            // 4.5 Apply Vector Paths
            if (node.type === "VECTOR" && data.vectorPaths) {
                (node as VectorNode).vectorPaths = data.vectorPaths;
            }

            // 6. Apply Text Properties
            if (node.type === "TEXT" && data.text) {
                const textNode = node as TextNode;

                // Determine target font, handling "mixed" or missing data
                let font: FontName = { family: "Inter", style: "Regular" };
                if (data.text.fontName && data.text.fontName !== "mixed") {
                    font = data.text.fontName;
                }

                try {
                    // Figma requires the CURRENT font of the node to be loaded before any write operation.
                    // New text nodes default to Inter Regular.
                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

                    // Only load and set target font if it's different from default/already loaded
                    if (font.family !== "Inter" || font.style !== "Regular") {
                        await figma.loadFontAsync(font);
                        textNode.fontName = font;
                    } else {
                        textNode.fontName = { family: "Inter", style: "Regular" };
                    }
                } catch (e) {
                    console.warn(`Failed to load/apply font ${font.family} ${font.style}, falling back to Inter Regular`);
                    textNode.fontName = { family: "Inter", style: "Regular" };
                }

                if (data.text.fontSize !== undefined && data.text.fontSize !== "mixed") {
                    textNode.fontSize = data.text.fontSize;
                }
                if (data.text.textAlignHorizontal) textNode.textAlignHorizontal = data.text.textAlignHorizontal;
                if (data.text.textAlignVertical) textNode.textAlignVertical = data.text.textAlignVertical;
                if (data.text.textAutoResize) textNode.textAutoResize = data.text.textAutoResize;
                if (data.text.letterSpacing && data.text.letterSpacing !== "mixed") {
                    textNode.letterSpacing = typeof data.text.letterSpacing === "number"
                        ? { value: data.text.letterSpacing, unit: "PIXELS" }
                        : data.text.letterSpacing;
                }
                if (data.text.lineHeight && data.text.lineHeight !== "mixed") {
                    textNode.lineHeight = typeof data.text.lineHeight === "number"
                        ? { value: data.text.lineHeight, unit: "PIXELS" }
                        : data.text.lineHeight;
                }

                // Characters MUST be set after font load and other properties
                textNode.characters = data.text.characters || "";

                // Apply text fills last (to ensure font load doesn't reset them)
                if (data.text.fills && data.text.fills !== "mixed") {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    textNode.fills = data.text.fills as any;
                }

                // 6b. Apply Mixed Style Segments
                if (data.text.segments && data.text.segments.length > 0) {
                    let currentIndex = 0;
                    // We need to load all fonts required by segments first
                    const uniqueFonts = new Set<string>();
                    for (const seg of data.text.segments) {
                        if (seg.fontName) {
                            uniqueFonts.add(JSON.stringify(seg.fontName));
                        }
                    }

                    // Load all fonts used in segments
                    await Promise.all(Array.from(uniqueFonts).map(async (fStr) => {
                        try {
                            const fontFn = JSON.parse(fStr);
                            await figma.loadFontAsync(fontFn);
                        } catch (e) {
                            console.warn("Failed to load segment font", fStr);
                        }
                    }));

                    for (const seg of data.text.segments) {
                        let start = currentIndex;
                        let end = currentIndex + (seg.characters ? seg.characters.length : 0);

                        // Use captured indices if available (Preferred)
                        if (typeof seg.start === 'number' && typeof seg.end === 'number') {
                            start = seg.start;
                            end = seg.end;
                        }

                        // If characters match position (sanity check, though we are iterating segments in order)
                        // Actually, segments from getStyledTextSegments usually cover the whole string in order.
                        // But let's use the range safely.

                        if (end > textNode.characters.length) {
                            console.warn("Segment end out of bounds, skipping remaining");
                            break;
                        }

                        // Apply Fills
                        if (seg.fills && seg.fills !== "mixed") {
                            try {
                                const hydrated = await hydrateFills(seg.fills, assetSource!);
                                if (hydrated) {
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    textNode.setRangeFills(start, end, hydrated as any);
                                }
                            } catch (e) { console.warn("Failed to set range fills", e); }
                        }

                        // Apply Font Size
                        if (seg.fontSize && seg.fontSize !== "mixed") {
                            try {
                                textNode.setRangeFontSize(start, end, seg.fontSize);
                            } catch (e) { console.warn("Failed to set range font size", e); }
                        }

                        // Apply Font Name
                        if (seg.fontName && seg.fontName !== "mixed") {
                            try {
                                textNode.setRangeFontName(start, end, seg.fontName);
                            } catch (e) { console.warn("Failed to set range font name", e); }
                        }

                        // Apply Line Height
                        if (seg.lineHeight && seg.lineHeight !== "mixed") {
                            try {
                                const lh = typeof seg.lineHeight === "number"
                                    ? { value: seg.lineHeight, unit: "PIXELS" }
                                    : seg.lineHeight;
                                textNode.setRangeLineHeight(start, end, lh);
                            } catch (e) { console.warn("Failed to set range line height", e); }
                        }

                        // Apply Letter Spacing
                        if (seg.letterSpacing && seg.letterSpacing !== "mixed") {
                            try {
                                const ls = typeof seg.letterSpacing === "number"
                                    ? { value: seg.letterSpacing, unit: "PIXELS" }
                                    : seg.letterSpacing;
                                textNode.setRangeLetterSpacing(start, end, ls);
                            } catch (e) { console.warn("Failed to set range letter spacing", e); }
                        }
                        // Apply Text Case
                        if (seg.textCase && seg.textCase !== "mixed") {
                            try {
                                textNode.setRangeTextCase(start, end, seg.textCase);
                            } catch (e) { console.warn("Failed to set range text case", e); }
                        }
                        // Apply Text Decoration
                        if (seg.textDecoration && seg.textDecoration !== "mixed") {
                            try {
                                textNode.setRangeTextDecoration(start, end, seg.textDecoration);
                            } catch (e) { console.warn("Failed to set range text decoration", e); }
                        }

                        currentIndex = end;
                    }
                }
            }

            // 7. Handle Children (Recursion)
            if ("children" in node && data.children && data.children.length > 0) {
                const container = node as FrameNode;
                for (const childData of data.children) {
                    await this.reconstruct(childData, container, assetSource);
                }
            }

            // 8. Add to parent
            if (parent) {
                parent.appendChild(node);
            } else {
                // If it's the root call and no parent provided, ensure it's on the page
                figma.currentPage.appendChild(node);
            }

            // 9. Apply Context-Dependent Properties (Must be attached to parent)
            if ("layoutPositioning" in node && (data as any).layoutPositioning) {
                // Now node.parent is set properly
                if (node.parent && "layoutMode" in node.parent && (node.parent as FrameNode).layoutMode !== "NONE") {
                    try {
                        (node as any).layoutPositioning = (data as any).layoutPositioning;
                    } catch (e) {
                        console.warn("Failed to set layoutPositioning", e);
                    }
                }
            }

            return node;
        } catch (error) {
            console.error(`Error reconstructing node ${data.name}:`, error);
            return null;
        }
    }
}

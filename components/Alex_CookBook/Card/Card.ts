import { BaseComponent, ComponentProps } from "../../BaseComponent";

export interface CardProps extends ComponentProps {
    variant?: "elevated" | "outlined" | "flat";
    backgroundColor?: RGB | RGBA;

    // Structure
    imageNode?: SceneNode;
    imagePosition?: "top" | "bottom" | "left" | "right";

    headerNode?: SceneNode;
    bodyNode?: SceneNode;
    footerNode?: SceneNode;
    overlayNode?: SceneNode;
    overlayPosition?: "bottom-stretch" | "custom"; // Define how overlay is positioned

    // Layout configuration
    paddingMode?: "all-in-one" | "all" | "multi-part" | "none";
    padding?: number;
    gap?: number;
    cornerRadius?: number | { topLeft: number, topRight: number, bottomLeft: number, bottomRight: number };

    // Width / Height
    fillWidth?: boolean;
    fillHeight?: boolean;
}

export class Card extends BaseComponent {
    async create(props: CardProps): Promise<FrameNode> {
        const {
            variant = "elevated",
            backgroundColor = { r: 1, g: 1, b: 1 },
            imageNode,
            imagePosition = "top",
            headerNode,
            bodyNode,
            footerNode,
            paddingMode = "all-in-one",
            padding = 24, // Standard default padding
            gap = 16,
            cornerRadius = 16,
            fillWidth = false,
            fillHeight = false,
            width,
            height,
            x = 0,
            y = 0
        } = props;

        const root = figma.createFrame();
        root.name = "Card";

        // Root Styles
        root.fills = [await this.createSolidPaint(backgroundColor)];

        if (typeof cornerRadius === "number") {
            root.cornerRadius = cornerRadius;
        } else {
            root.topLeftRadius = cornerRadius.topLeft;
            root.topRightRadius = cornerRadius.topRight;
            root.bottomLeftRadius = cornerRadius.bottomLeft;
            root.bottomRightRadius = cornerRadius.bottomRight;
        }
        root.clipsContent = true;

        if (variant === "elevated") {
            root.effects = [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.08 },
                offset: { x: 0, y: 4 },
                radius: 12,
                spread: 0,
                visible: true,
                blendMode: "NORMAL"
            }];
        } else if (variant === "outlined") {
            root.strokes = [await this.createSolidPaint({ r: 0.9, g: 0.9, b: 0.9 })];
            root.strokeWeight = 1;
        }

        if (paddingMode === "all") {
            root.paddingTop = padding;
            root.paddingBottom = padding;
            root.paddingLeft = padding;
            root.paddingRight = padding;
        }

        // --- Auto Layout Config ---
        // Image controls root flow direction if image is left/right
        root.layoutMode = (imageNode && (imagePosition === "left" || imagePosition === "right")) ? "HORIZONTAL" : "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "AUTO";
        root.itemSpacing = gap;

        root.layoutAlign = fillWidth ? "STRETCH" : "INHERIT";
        root.layoutGrow = fillHeight ? 1 : 0;

        // --- Content Wrapper ---
        const contentContainer = figma.createFrame();
        contentContainer.name = "Content";
        contentContainer.layoutMode = "VERTICAL";
        contentContainer.primaryAxisSizingMode = "AUTO";
        contentContainer.counterAxisSizingMode = "AUTO";
        contentContainer.itemSpacing = gap;
        contentContainer.fills = [];

        // Apply Padding to the wrapper
        if (paddingMode === "all-in-one") {
            contentContainer.paddingTop = padding;
            contentContainer.paddingBottom = padding;
            contentContainer.paddingLeft = padding;
            contentContainer.paddingRight = padding;
        } else {
            // "none" or "multi-part" - multi-part means children handle padding
            contentContainer.paddingTop = 0;
            contentContainer.paddingBottom = 0;
            contentContainer.paddingLeft = 0;
            contentContainer.paddingRight = 0;
        }

        // --- Content Nodes Assembly ---
        const contentNodes: SceneNode[] = [];
        if (headerNode) contentNodes.push(headerNode);
        if (bodyNode) contentNodes.push(bodyNode);
        if (footerNode) contentNodes.push(footerNode);

        for (const node of contentNodes) {
            contentContainer.appendChild(node);

            // If "all-in-one" padding mode OR if we just want nodes to stretch to fill card width
            if ("layoutAlign" in node && paddingMode !== "none") {
                node.layoutAlign = "STRETCH";
            }
            if ("layoutMode" in node && "primaryAxisSizingMode" in node && fillHeight && contentNodes.length === 1) {
                // If only 1 node, it could grow to fill height
                node.layoutGrow = 1;
            }
        }

        // --- Root Assembly ---
        const hasContent = contentNodes.length > 0;

        if (hasContent) {
            // Always stretch content container in its counter-axis to allow fill effects
            contentContainer.layoutAlign = "STRETCH";
        }

        if (imageNode) {
            if (imagePosition === "top" || imagePosition === "left") {
                root.appendChild(imageNode);
                if (hasContent) root.appendChild(contentContainer);
            } else {
                if (hasContent) root.appendChild(contentContainer);
                root.appendChild(imageNode);
            }

            // Image Sizing Logic
            if ("layoutAlign" in imageNode) {
                // Always stretch image in its counter-axis to avoid weird gaps
                imageNode.layoutAlign = "STRETCH";
                if (root.layoutMode === "HORIZONTAL") {
                    // If no explicit width on image node, and we are horizontal, we need a default
                    if (!("width" in imageNode && imageNode.width > 0)) {
                        (imageNode as any).resize(200, imageNode.height || 200);
                    }
                }
            }
        } else {
            if (hasContent) root.appendChild(contentContainer);
        }

        // --- Adjust Dimensions if Fill properties are set ---
        if (fillWidth) {
            if (root.layoutMode === "VERTICAL") {
                root.layoutAlign = "STRETCH";
                root.counterAxisSizingMode = "FIXED";
            } else { // HORIZONTAL
                root.layoutAlign = "STRETCH";
                root.primaryAxisSizingMode = "FIXED";
                if (hasContent) {
                    contentContainer.layoutGrow = 1;
                }
            }
        } else if (width !== undefined) {
            if (root.layoutMode === "VERTICAL") {
                root.counterAxisSizingMode = "FIXED";
            } else { // HORIZONTAL
                root.primaryAxisSizingMode = "FIXED";
                if (hasContent) {
                    contentContainer.layoutGrow = 1; // Allow content to fill remaining horizontal space
                }
            }
        }

        if (fillHeight) {
            if (root.layoutMode === "VERTICAL") {
                root.layoutGrow = 1;
                root.primaryAxisSizingMode = "FIXED";
                if (hasContent) {
                    contentContainer.layoutGrow = 1;
                }
            } else { // HORIZONTAL
                root.layoutAlign = "STRETCH";
                root.counterAxisSizingMode = "FIXED";
            }
            if (hasContent) contentContainer.layoutAlign = "STRETCH";
        } else if (height !== undefined) {
            if (root.layoutMode === "VERTICAL") {
                root.primaryAxisSizingMode = "FIXED";
            } else { // HORIZONTAL
                root.counterAxisSizingMode = "FIXED";
            }
        } else {
            // Default: Hug height if not filling or set
            if (root.layoutMode === "HORIZONTAL") {
                root.counterAxisSizingMode = "AUTO";
            } else {
                root.primaryAxisSizingMode = "AUTO";
            }
        }

        // --- Final Radius Sync ---
        // If we have paddingMode "all" and an image, let's make sure the image is rounded nicely too
        if (paddingMode === "all" && imageNode && "cornerRadius" in imageNode) {
            const r = typeof cornerRadius === "number" ? cornerRadius : 0;
            const innerR = Math.max(0, r - padding / 2); // Simple heuristic for inner radius
            (imageNode as any).cornerRadius = innerR || 8;
        }

        root.x = x;
        root.y = y;
        if (width !== undefined) {
            root.resize(width, root.height);
        }
        if (height !== undefined) {
            root.resize(root.width, height);
        }

        if (props.overlayNode) {
            root.appendChild(props.overlayNode);
            if ("layoutPositioning" in props.overlayNode) {
                const overlay = props.overlayNode as FrameNode;
                overlay.layoutPositioning = "ABSOLUTE";

                if (props.overlayPosition !== "custom") {
                    // Default behavior: Bottom-stretch
                    // Reset its position and make it fill width - using the FINAL root.width
                    overlay.x = 0;
                    overlay.resize(root.width, overlay.height);

                    // Anchoring to bottom and stretching width
                    overlay.constraints = { horizontal: "STRETCH", vertical: "MAX" };

                    // Position it at the bottom using FINAL root.height
                    overlay.y = root.height - overlay.height;
                }
            }
        }

        return root;
    }

    private async createSolidPaint(color: RGB | RGBA): Promise<SolidPaint> {
        return {
            type: "SOLID",
            color: { r: color.r, g: color.g, b: color.b },
            opacity: "a" in color ? color.a : 1,
            visible: true,
            blendMode: "NORMAL"
        };
    }
}

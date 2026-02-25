import { BaseComponent, ComponentProps } from "../../BaseComponent";

export type CardVariant = "elevated" | "outlined" | "filled" | "none";

export interface CardChipCellProps {
    label: string;
    inset?: number;
    backgroundColor?: RGB | RGBA;
    textColor?: RGB | RGBA;
    cornerRadius?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    fontSize?: number;
    fontWeight?: "Regular" | "Medium" | "Semi Bold" | "Bold";
}

export interface CardOverlayProps {
    enabled?: boolean;
    horizontal?: "left" | "center" | "right" | "stretch";
    vertical?: "top" | "center" | "bottom" | "stretch";
    insetX?: number;
    insetY?: number;
}

export interface CardProps extends ComponentProps {
    variant?: CardVariant;
    backgroundColor?: RGB | RGBA;

    // Structure
    imageNode?: SceneNode;
    imagePosition?: "top" | "bottom" | "left" | "right";

    headerNode?: SceneNode;
    bodyNode?: SceneNode;
    footerNode?: SceneNode;
    overlayNode?: SceneNode;
    overlay?: CardOverlayProps;
    overlayPosition?: "bottom-stretch" | "custom"; // Define how overlay is positioned
    chipCell?: CardChipCellProps;

    // Layout configuration
    paddingMode?: "all-in-one" | "all" | "multi-part" | "none";
    padding?: number;
    gap?: number;
    contentGap?: number; // Decoupled gap for internal content
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
            contentGap = 16, // Default content gap
            cornerRadius = 16,
            chipCell,
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
        // root.fills = [await this.createSolidPaint(backgroundColor)]; // This will be handled by variant logic

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
            root.fills = [await this.createSolidPaint(backgroundColor)]; // Use backgroundColor for elevated
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
            root.fills = [await this.createSolidPaint(backgroundColor)]; // Use backgroundColor for outlined
            root.strokes = [await this.createSolidPaint({ r: 0.9, g: 0.9, b: 0.9 })];
            root.strokeWeight = 1;
        } else if (variant === "filled") {
            root.fills = [await this.createSolidPaint({ r: 0.96, g: 0.96, b: 0.96 })]; // Hardcoded fill for "filled"
        } else if (variant === "none") {
            root.fills = [];
            root.effects = [];
            root.strokes = [];
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
        contentContainer.itemSpacing = contentGap; // Use decoupled contentGap
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
            if ("layoutMode" in node && "primaryAxisSizingMode" in node && (fillHeight || height !== undefined) && contentNodes.length === 1) {
                // If only 1 node and height is fixed, it could grow to fill height
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
                if (hasContent) {
                    contentContainer.layoutGrow = 1;
                }
            } else { // HORIZONTAL
                root.counterAxisSizingMode = "FIXED";
                if (hasContent) {
                    contentContainer.layoutAlign = "STRETCH";
                }
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

        const hasOverlay = Boolean(props.overlayNode) && (props.overlay?.enabled ?? true);
        if (hasOverlay && props.overlayNode) {
            const customOverlayX = ("x" in props.overlayNode) ? (props.overlayNode as SceneNode).x : 0;
            const customOverlayY = ("y" in props.overlayNode) ? (props.overlayNode as SceneNode).y : 0;
            root.appendChild(props.overlayNode);
            if ("layoutPositioning" in props.overlayNode) {
                const overlay = props.overlayNode as FrameNode;
                overlay.layoutPositioning = "ABSOLUTE";
                if (props.overlay) {
                    this.applyOverlayPlacement(overlay, root, props.overlay);
                } else if (props.overlayPosition !== "custom") {
                    // Default behavior: Bottom-stretch
                    // Reset its position and make it fill width - using the FINAL root.width
                    overlay.x = 0;
                    overlay.resize(root.width, overlay.height);

                    // Anchoring to bottom and stretching width
                    overlay.constraints = { horizontal: "STRETCH", vertical: "MAX" };

                    // Position it at the bottom using FINAL root.height
                    overlay.y = root.height - overlay.height;
                } else {
                    // Preserve caller-defined coordinates after switching to absolute positioning.
                    overlay.constraints = { horizontal: "MIN", vertical: "MIN" };
                    overlay.x = customOverlayX;
                    overlay.y = customOverlayY;
                }
            }
        }

        if (chipCell?.label?.trim()) {
            const chipNode = await this.createChipCell(chipCell);
            root.appendChild(chipNode);
            chipNode.layoutPositioning = "ABSOLUTE";
            chipNode.constraints = { horizontal: "MIN", vertical: "MIN" };
            const inset = chipCell.inset ?? 12;
            chipNode.x = inset;
            chipNode.y = inset;
        }

        return root;
    }

    private applyOverlayPlacement(overlay: FrameNode, root: FrameNode, options: CardOverlayProps): void {
        const insetX = options.insetX ?? 0;
        const insetY = options.insetY ?? 0;
        const horizontal = options.horizontal ?? "left";
        const vertical = options.vertical ?? "top";

        if (horizontal === "stretch") {
            const targetWidth = Math.max(1, root.width - (insetX * 2));
            overlay.x = insetX;
            overlay.resize(targetWidth, overlay.height);
        } else if (horizontal === "center") {
            overlay.x = Math.round((root.width - overlay.width) / 2);
        } else if (horizontal === "right") {
            overlay.x = Math.max(0, root.width - overlay.width - insetX);
        } else {
            overlay.x = insetX;
        }

        if (vertical === "stretch") {
            const targetHeight = Math.max(1, root.height - (insetY * 2));
            overlay.y = insetY;
            overlay.resize(overlay.width, targetHeight);
        } else if (vertical === "center") {
            overlay.y = Math.round((root.height - overlay.height) / 2);
        } else if (vertical === "bottom") {
            overlay.y = Math.max(0, root.height - overlay.height - insetY);
        } else {
            overlay.y = insetY;
        }

        overlay.constraints = {
            horizontal: horizontal === "stretch" ? "STRETCH" : "MIN",
            vertical: vertical === "stretch" ? "STRETCH" : "MIN"
        };
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

    private async createChipCell(chipCell: CardChipCellProps): Promise<FrameNode> {
        const chip = figma.createFrame();
        chip.name = "Chip Cell";
        chip.layoutMode = "HORIZONTAL";
        chip.primaryAxisSizingMode = "AUTO";
        chip.counterAxisSizingMode = "AUTO";
        chip.primaryAxisAlignItems = "CENTER";
        chip.counterAxisAlignItems = "CENTER";
        chip.paddingLeft = chipCell.paddingHorizontal ?? 10;
        chip.paddingRight = chipCell.paddingHorizontal ?? 10;
        chip.paddingTop = chipCell.paddingVertical ?? 6;
        chip.paddingBottom = chipCell.paddingVertical ?? 6;
        chip.cornerRadius = chipCell.cornerRadius ?? 6;
        chip.fills = [await this.createSolidPaint(chipCell.backgroundColor ?? { r: 0.8, g: 0.1, b: 0.1 })];

        const label = figma.createText();
        label.characters = chipCell.label;
        label.fontSize = chipCell.fontSize ?? 12;
        await figma.loadFontAsync({ family: "Inter", style: chipCell.fontWeight ?? "Bold" });
        label.fontName = { family: "Inter", style: chipCell.fontWeight ?? "Bold" };
        label.fills = [await this.createSolidPaint(chipCell.textColor ?? { r: 1, g: 1, b: 1 })];
        chip.appendChild(label);

        return chip;
    }
}

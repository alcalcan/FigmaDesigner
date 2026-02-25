import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { button, ButtonProps } from "../button/button";
import { Lucide_heart } from "../../lucide_icons/Lucide_heart/Lucide_heart";
import { Lucide_arrow_left } from "../../lucide_icons/Lucide_arrow_left/Lucide_arrow_left";

export type CardVariant = "elevated" | "outlined" | "filled" | "none" | "disciplinary";
export type CardImagePosition = "top" | "bottom" | "left" | "right";
export type CardLayoutDirection = "vertical" | "horizontal";
export type CardFontWeight = "Regular" | "Medium" | "Semi Bold" | "Bold";
export type CardStackDirection = "vertical" | "horizontal" | "free";
export type CardStackMainAlign = "start" | "center" | "end" | "space-between";
export type CardStackCrossAlign = "start" | "center" | "end" | "stretch";
export type CardTextAlign = "left" | "center" | "right";
export type CardContentMode = "block" | "overlay-bottom" | "overlay-fill";
export type CardShapeKind = "rectangle" | "ellipse";

export interface CardInsets {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export interface CardChipCellProps {
    label: string;
    inset?: number;
    backgroundColor?: RGB | RGBA;
    textColor?: RGB | RGBA;
    cornerRadius?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    fontSize?: number;
    fontWeight?: CardFontWeight;
}

export interface CardOverlayProps {
    enabled?: boolean;
    horizontal?: "left" | "center" | "right" | "stretch";
    vertical?: "top" | "center" | "bottom" | "stretch";
    insetX?: number;
    insetY?: number;
}

export interface CardFloatingActionButtonProps {
    enabled?: boolean;
    props?: ButtonProps;
    horizontal?: "left" | "center" | "right";
    vertical?: "top" | "center" | "bottom";
    insetX?: number;
    insetY?: number;
}

export interface CardThreadRepliesProps {
    parentComment: SceneNode;
    replies: SceneNode[];
    name?: string;
    gap?: number;
    repliesGap?: number;
    repliesIndent?: number;
    connectorStartY?: number;
    connectorX?: number;
    connectorColor?: RGB | RGBA;
}

export type CardThreadMetaIcon = "heart" | "reply" | "none";

export interface CardThreadCommentProps {
    author: string;
    message: string;
    timeLabel?: string;
    likesLabel: string;
    repliesLabel?: string;
    toggleLabel?: string;
    compact?: boolean;
}

export interface CardThreadSeparatorProps {
    width?: number;
    color?: RGB | RGBA;
    name?: string;
}

export interface DisciplinaryCardProps {
    category: string;
    title: string;
    date: string;
    themeColor: RGB;
    bodyText: string;
}

export interface CardMediaPlaceholder {
    type: "placeholder";
    width?: number;
    height?: number;
    backgroundColor?: RGB | RGBA;
    cornerRadius?: number;
    label?: string;
    labelColor?: RGB | RGBA;
    labelWeight?: CardFontWeight;
    labelSize?: number;
    emoji?: string;
    layoutAlign?: "INHERIT" | "STRETCH";
}

export interface CardMediaNode {
    type: "node";
    node: SceneNode;
}

export type CardMedia = CardMediaPlaceholder | CardMediaNode;

export interface CardTextContent {
    type: "text";
    text: string;
    size?: number;
    weight?: CardFontWeight;
    color?: RGB | RGBA;
    align?: CardTextAlign;
    fill?: boolean;
    grow?: number;
    position?: "auto" | "absolute";
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    constraints?: Constraints;
    lineHeight?: number;
    textDecoration?: TextDecoration;
}

export interface CardSpacerContent {
    type: "spacer";
    size: number;
}

export interface CardNodeContent {
    type: "node";
    node: SceneNode;
    fill?: boolean;
    grow?: number;
    position?: "auto" | "absolute";
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    constraints?: Constraints;
}

export type CardComponentFactory = new () => {
    create: (props: ComponentProps) => SceneNode | Promise<SceneNode>;
};

export interface CardComponentContent {
    type: "component";
    component: CardComponentFactory;
    props?: ComponentProps;
    fill?: boolean;
    grow?: number;
    position?: "auto" | "absolute";
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    constraints?: Constraints;
}

export interface CardShapeContent {
    type: "shape";
    shape?: CardShapeKind;
    width: number;
    height: number;
    fillColor?: RGB | RGBA;
    fills?: Paint[];
    strokeColor?: RGB | RGBA;
    strokes?: Paint[];
    strokeWeight?: number;
    dashPattern?: number[];
    cornerRadius?: number;
    effects?: Effect[];
    fill?: boolean;
    grow?: number;
    position?: "auto" | "absolute";
    x?: number;
    y?: number;
    constraints?: Constraints;
    name?: string;
}

export interface CardStackContent {
    type: "stack";
    name?: string;
    direction?: CardStackDirection;
    gap?: number;
    align?: CardStackMainAlign;
    crossAlign?: CardStackCrossAlign;
    fill?: boolean;
    grow?: number;
    position?: "auto" | "absolute";
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    constraints?: Constraints;
    padding?: number | CardInsets;
    fillColor?: RGB | RGBA;
    fills?: Paint[];
    strokeColor?: RGB | RGBA;
    strokes?: Paint[];
    strokeWeight?: number;
    cornerRadius?: number;
    effects?: Effect[];
    clipsContent?: boolean;
    items: CardContent[];
}

export type CardContent =
    | CardTextContent
    | CardSpacerContent
    | CardNodeContent
    | CardComponentContent
    | CardShapeContent
    | CardStackContent;

export type CardContentInput = CardContent | CardContent[];

export interface CardCornerRadius {
    topLeft: number;
    topRight: number;
    bottomLeft: number;
    bottomRight: number;
}

export interface CardCopyProps {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    price?: string;
    previousPrice?: string;
    footnote?: string;
    align?: CardTextAlign;
}

export interface CardPriceTagProps {
    price: string;
    previousPrice?: string;
    align?: CardTextAlign;
}

export interface CardTextNodeProps {
    text: string;
    size?: number;
    weight?: CardFontWeight;
    color?: RGB | RGBA;
    align?: CardTextAlign;
    fill?: boolean;
    lineHeight?: number;
    textDecoration?: TextDecoration;
}

export interface CardRowNodeProps {
    gap?: number;
    align?: CardStackMainAlign;
    crossAlign?: CardStackCrossAlign;
    fill?: boolean;
}

export interface CardProps extends ComponentProps {
    variant?: CardVariant;
    backgroundColor?: RGB | RGBA;
    disciplinary?: DisciplinaryCardProps;
    layout?: CardLayoutDirection;
    copy?: CardCopyProps;
    title?: string;
    subtitle?: string;
    description?: string;
    eyebrow?: string;
    footnote?: string;
    priceTag?: CardPriceTagProps;
    contentMode?: CardContentMode;

    // Structure
    media?: CardMedia;
    mediaPosition?: CardImagePosition;
    imageNode?: SceneNode;
    imagePosition?: CardImagePosition;

    header?: CardContentInput;
    body?: CardContentInput;
    footer?: CardContentInput;
    headerNode?: SceneNode;
    bodyNode?: SceneNode;
    footerNode?: SceneNode;
    overlayContent?: CardContentInput;
    overlayNode?: SceneNode;
    overlay?: CardOverlayProps;
    overlayPosition?: "bottom-stretch" | "custom"; // Define how overlay is positioned
    chipCell?: CardChipCellProps;
    floatingActionButton?: CardFloatingActionButtonProps;

    // Layout configuration
    paddingMode?: "all-in-one" | "all" | "multi-part" | "none";
    padding?: number | CardInsets;
    contentPadding?: number | CardInsets;
    gap?: number;
    contentGap?: number; // Decoupled gap for internal content
    cornerRadius?: number | CardCornerRadius;

    // Width / Height
    fillWidth?: boolean;
    fillHeight?: boolean;
}

export class Card extends BaseComponent {
    static text(text: string, options: Omit<CardTextContent, "type" | "text"> = {}): CardTextContent {
        return { type: "text", text, ...options };
    }

    static node(node: SceneNode, options: Omit<CardNodeContent, "type" | "node"> = {}): CardNodeContent {
        return { type: "node", node, ...options };
    }

    static component(
        component: CardComponentFactory,
        props: ComponentProps = {},
        options: Omit<CardComponentContent, "type" | "component" | "props"> = {}
    ): CardComponentContent {
        return { type: "component", component, props, ...options };
    }

    static spacer(size: number): CardSpacerContent {
        return { type: "spacer", size };
    }

    static column(
        items: CardContent[],
        options: Omit<CardStackContent, "type" | "direction" | "items"> = {}
    ): CardStackContent {
        return { type: "stack", direction: "vertical", items, ...options };
    }

    static row(
        items: CardContent[],
        options: Omit<CardStackContent, "type" | "direction" | "items"> = {}
    ): CardStackContent {
        return { type: "stack", direction: "horizontal", items, ...options };
    }

    static placeholder(options: Omit<CardMediaPlaceholder, "type">): CardMediaPlaceholder {
        return { type: "placeholder", ...options };
    }

    static shape(options: Omit<CardShapeContent, "type">): CardShapeContent {
        return { type: "shape", ...options };
    }

    async contentNode(content: CardContentInput, name: string = "Card Content"): Promise<SceneNode> {
        return this.createContentNode(content, name);
    }

    async textNode(props: CardTextNodeProps): Promise<TextNode> {
        const node = await this.createContentItem({ type: "text", ...props }, "Card Text Node");
        return node as TextNode;
    }

    createRowNode(props: CardRowNodeProps = {}): FrameNode {
        const row = figma.createFrame();
        row.name = "Card Row";
        row.layoutMode = "HORIZONTAL";
        row.itemSpacing = props.gap ?? 8;
        row.fills = [];
        row.primaryAxisSizingMode = (props.align === "space-between" && props.fill === true) ? "FIXED" : "AUTO";
        row.counterAxisSizingMode = "AUTO";
        row.primaryAxisAlignItems = this.mapMainAxisAlign(props.align);
        row.counterAxisAlignItems = this.mapCrossAxisAlign(props.crossAlign);
        if (props.fill) {
            row.layoutAlign = "STRETCH";
        }
        return row;
    }

    async placeholderNode(props: Omit<CardMediaPlaceholder, "type">): Promise<FrameNode> {
        const node = await this.createMediaNode({ type: "placeholder", ...props });
        return node as FrameNode;
    }

    async threadCommentNode(props: CardThreadCommentProps): Promise<SceneNode> {
        const compact = props.compact ?? false;
        const timeLabel = props.timeLabel ?? "";

        const headingItems: CardContent[] = [
            Card.text(props.author, {
                size: compact ? 20 : 24,
                weight: "Semi Bold",
                color: { r: 0.15, g: 0.20, b: 0.27 },
                fill: false
            })
        ];
        if (timeLabel) {
            headingItems.push(Card.text(timeLabel, {
                size: compact ? 14 : 16,
                color: { r: 0.54, g: 0.59, b: 0.65 },
                fill: false
            }));
        }

        const actionItems: CardContent[] = [
            this.createThreadMetaAction("Like", "heart", compact),
            this.createThreadMetaAction("Reply", "reply", compact),
            this.createThreadMetaAction(props.likesLabel, "none", compact)
        ];
        if (props.repliesLabel) {
            actionItems.push(this.createThreadMetaAction(props.repliesLabel, "none", compact));
        }

        const items: CardContent[] = [
            Card.row([
                Card.shape({
                    shape: "ellipse",
                    name: "Avatar Placeholder",
                    width: compact ? 38 : 44,
                    height: compact ? 38 : 44,
                    fillColor: { r: 0.39, g: 0.46, b: 0.54 },
                    strokeColor: { r: 0.87, g: 0.90, b: 0.94 },
                    strokeWeight: 1,
                    fill: false
                }),
                Card.column([
                    Card.row(headingItems, {
                        gap: 8,
                        fill: true,
                        crossAlign: "start",
                        align: timeLabel ? "space-between" : "start"
                    }),
                    Card.text(props.message, {
                        size: compact ? 18 : 20,
                        color: { r: 0.15, g: 0.20, b: 0.27 },
                        fill: true
                    }),
                    Card.row(actionItems, {
                        gap: compact ? 10 : 14,
                        fill: false,
                        crossAlign: "center"
                    })
                ], {
                    gap: 16,
                    fill: true,
                    crossAlign: "stretch"
                })
            ], {
                gap: 12,
                fill: true,
                crossAlign: "start"
            })
        ];

        if (props.toggleLabel) {
            items.push(Card.row([
                Card.text(props.toggleLabel, {
                    size: compact ? 16 : 18,
                    weight: "Semi Bold",
                    color: { r: 0.09, g: 0.12, b: 0.16 },
                    fill: false
                })
            ], {
                gap: 0,
                fill: true,
                padding: { left: compact ? 50 : 56, right: 0, top: 0, bottom: 0 }
            }));
        }

        return this.contentNode(
            Card.column(items, {
                gap: 16,
                fill: true,
                crossAlign: "stretch"
            }),
            `Comment: ${props.author}`
        );
    }

    async threadSeparatorNode(props: CardThreadSeparatorProps = {}): Promise<SceneNode> {
        return this.contentNode(Card.shape({
            width: props.width ?? 100,
            height: 1,
            fill: true,
            fillColor: props.color ?? { r: 0.89, g: 0.91, b: 0.94 },
            name: props.name ?? "Thread Separator"
        }), props.name ?? "Thread Separator");
    }

    async threadWithReplies(props: CardThreadRepliesProps): Promise<SceneNode> {
        const gap = props.gap ?? 12;
        const repliesGap = props.repliesGap ?? 12;
        const repliesIndent = props.repliesIndent ?? 56;
        const connectorStartY = props.connectorStartY ?? 56;
        const connectorX = props.connectorX ?? 22;
        const connectorColor = props.connectorColor ?? { r: 0.86, g: 0.89, b: 0.93 };

        const repliesHeight = props.replies.reduce((total, reply, index) => {
            const withCurrent = total + reply.height;
            return index === 0 ? withCurrent : withCurrent + repliesGap;
        }, 0);
        const repliesTop = props.parentComment.height + gap;
        const connectorHeight = Math.max(2, repliesTop + repliesHeight - connectorStartY);

        return this.contentNode(
            Card.column([
                Card.node(props.parentComment),
                Card.column(
                    props.replies.map((reply) => Card.node(reply)),
                    {
                        gap: repliesGap,
                        fill: true,
                        crossAlign: "stretch",
                        padding: { left: repliesIndent, right: 0, top: 0, bottom: 0 }
                    }
                ),
                Card.shape({
                    name: "Reply Connector",
                    width: 2,
                    height: connectorHeight,
                    fillColor: connectorColor,
                    position: "absolute",
                    x: connectorX,
                    y: connectorStartY
                })
            ], {
                gap,
                fill: true,
                crossAlign: "stretch"
            }),
            props.name ?? "Thread With Replies"
        );
    }

    private createThreadMetaAction(label: string, iconType: CardThreadMetaIcon, compact: boolean): CardContent {
        const metaColor = { r: 0.52, g: 0.56, b: 0.62 };
        const iconSize = compact ? 12 : 14;
        const items: CardContent[] = [];

        if (iconType === "heart") {
            items.push(Card.component(Lucide_heart, { width: iconSize, color: metaColor, strokeWeight: 1.8 }, { fill: false }));
        } else if (iconType === "reply") {
            items.push(Card.component(Lucide_arrow_left, { width: iconSize, color: metaColor, strokeWeight: 1.8 }, { fill: false }));
        }

        items.push(Card.text(label, { size: compact ? 14 : 16, color: metaColor, fill: false }));
        return Card.row(items, { gap: 4, fill: false, crossAlign: "center" });
    }

    async create(props: CardProps): Promise<FrameNode> {
        const {
            variant = "elevated",
            backgroundColor = { r: 1, g: 1, b: 1 },
            imageNode: directImageNode,
            imagePosition: directImagePosition,
            headerNode: directHeaderNode,
            footerNode: directFooterNode,
            cornerRadius = 16,
            chipCell,
            fillWidth = false,
            fillHeight = false,
            width,
            height,
            x = 0,
            y = 0
        } = props;

        // Variables that variants might override or create internally
        let {
            paddingMode = "all-in-one",
            padding = 24,
            gap = 16
        } = props;
        const { contentGap = 16, bodyNode: directBodyNode } = props;
        const contentMode: CardContentMode = props.contentMode ?? "block";
        let contentPadding: number | CardInsets = props.contentPadding ?? padding;

        const imageNode = directImageNode ?? (props.media ? await this.createMediaNode(props.media) : undefined);
        const imagePosition = directImagePosition ?? props.mediaPosition ?? (props.layout === "horizontal" ? "left" : "top");

        let headerNode = directHeaderNode;
        if (!headerNode && props.header) {
            headerNode = await this.createContentNode(props.header, "Header");
        }

        let bodyNode = directBodyNode;
        if (!bodyNode && props.body) {
            bodyNode = await this.createContentNode(props.body, "Body");
        }

        let footerNode = directFooterNode;
        if (!footerNode && props.footer) {
            footerNode = await this.createContentNode(props.footer, "Footer");
        }

        const semanticCopy: CardCopyProps | undefined = props.copy ?? (
            props.title ||
            props.subtitle ||
            props.description ||
            props.eyebrow ||
            props.footnote ||
            props.priceTag
                ? {
                    title: props.title,
                    subtitle: props.subtitle,
                    description: props.description,
                    eyebrow: props.eyebrow,
                    footnote: props.footnote,
                    price: props.priceTag?.price,
                    previousPrice: props.priceTag?.previousPrice,
                    align: props.priceTag?.align
                }
                : undefined
        );

        if (semanticCopy) {
            const copyNodes = await this.createCopyNodes(semanticCopy);
            headerNode = headerNode ?? copyNodes.headerNode;
            bodyNode = bodyNode ?? copyNodes.bodyNode;
            footerNode = footerNode ?? copyNodes.footerNode;
        }

        let overlayNode = props.overlayNode;
        if (!overlayNode && props.overlayContent) {
            overlayNode = await this.createContentNode(props.overlayContent, "Overlay");
        }

        const root = figma.createFrame();
        root.name = "Card";

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
        } else if (variant === "disciplinary") {
            root.fills = [await this.createSolidPaint({ r: 1, g: 1, b: 1 })];
            root.strokes = [await this.createSolidPaint({ r: 0.9, g: 0.9, b: 0.9 })];
            root.strokeWeight = 1;
            padding = props.padding ?? 25; // Default disciplinary padding
            paddingMode = props.paddingMode ?? "all-in-one";
            contentPadding = props.contentPadding ?? padding;
            gap = 0;
            if (props.disciplinary && !bodyNode) {
                bodyNode = await this.createDisciplinaryBody(props.disciplinary);
            }
        }

        if (paddingMode === "all") {
            this.applyPadding(root, padding);
        }

        // --- Auto Layout Config ---
        const rootMode: CardLayoutDirection = imageNode
            ? ((imagePosition === "left" || imagePosition === "right") ? "horizontal" : "vertical")
            : (props.layout ?? "vertical");
        root.layoutMode = rootMode === "horizontal" ? "HORIZONTAL" : "VERTICAL";
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
            this.applyPadding(contentContainer, contentPadding);
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
        const useContentOverlay = hasContent && Boolean(imageNode) && contentMode !== "block";

        if (hasContent) {
            // Always stretch content container in its counter-axis to allow fill effects
            contentContainer.layoutAlign = "STRETCH";
        }

        if (imageNode) {
            if (useContentOverlay) {
                root.appendChild(imageNode);
            } else if (imagePosition === "top" || imagePosition === "left") {
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
                        if ("resize" in imageNode) {
                            imageNode.resize(200, imageNode.height || 200);
                        }
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
            const paddingInset = this.resolvePadding(padding);
            const maxInset = Math.max(paddingInset.top, paddingInset.right, paddingInset.bottom, paddingInset.left);
            const innerR = Math.max(0, r - maxInset / 2); // Simple heuristic for inner radius
            const cornerNode = imageNode as SceneNode & { cornerRadius: number };
            cornerNode.cornerRadius = innerR || 8;
        }

        root.x = x;
        root.y = y;
        if (width !== undefined) {
            root.resize(width, root.height);
        }
        if (height !== undefined) {
            root.resize(root.width, height);
        }

        if (useContentOverlay) {
            root.appendChild(contentContainer);
            contentContainer.layoutPositioning = "ABSOLUTE";
            if (contentMode === "overlay-fill") {
                contentContainer.x = 0;
                contentContainer.y = 0;
                contentContainer.resize(root.width, root.height);
                contentContainer.constraints = { horizontal: "STRETCH", vertical: "STRETCH" };
            } else {
                contentContainer.x = 0;
                contentContainer.resize(root.width, contentContainer.height);
                contentContainer.y = root.height - contentContainer.height;
                contentContainer.constraints = { horizontal: "STRETCH", vertical: "MAX" };
            }
        }

        const hasOverlay = Boolean(overlayNode) && (props.overlay?.enabled ?? true);
        if (hasOverlay && overlayNode) {
            const customOverlayX = ("x" in overlayNode) ? overlayNode.x : 0;
            const customOverlayY = ("y" in overlayNode) ? overlayNode.y : 0;
            root.appendChild(overlayNode);
            if ("layoutPositioning" in overlayNode) {
                const overlay = overlayNode as FrameNode;
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

        if (props.floatingActionButton && (props.floatingActionButton.enabled ?? true)) {
            const fabConfig = props.floatingActionButton;
            const fabComponent = new button();
            const fabNode = await fabComponent.create({
                variant: "fab",
                size: "small",
                withShadow: true,
                ...fabConfig.props
            });

            root.appendChild(fabNode);
            if ("layoutPositioning" in fabNode) {
                const fab = fabNode as FrameNode;
                fab.layoutPositioning = "ABSOLUTE";
                this.applyFloatingActionButtonPlacement(fab, root, fabConfig);
            }
        }

        return root;
    }

    private resolvePadding(value: number | CardInsets): Required<CardInsets> {
        if (typeof value === "number") {
            return { top: value, right: value, bottom: value, left: value };
        }
        return {
            top: value.top ?? 0,
            right: value.right ?? 0,
            bottom: value.bottom ?? 0,
            left: value.left ?? 0
        };
    }

    private applyPadding(node: FrameNode, value: number | CardInsets): void {
        const resolved = this.resolvePadding(value);
        node.paddingTop = resolved.top;
        node.paddingRight = resolved.right;
        node.paddingBottom = resolved.bottom;
        node.paddingLeft = resolved.left;
    }

    private async createMediaNode(media: CardMedia): Promise<SceneNode> {
        if (media.type === "node") {
            return media.node;
        }

        const frame = figma.createFrame();
        frame.name = "Card Media Placeholder";
        frame.resize(media.width ?? 320, media.height ?? 180);
        frame.layoutMode = "VERTICAL";
        frame.primaryAxisAlignItems = "CENTER";
        frame.counterAxisAlignItems = "CENTER";
        frame.primaryAxisSizingMode = "FIXED";
        frame.counterAxisSizingMode = "FIXED";
        frame.fills = [await this.createSolidPaint(media.backgroundColor ?? { r: 0.80, g: 0.85, b: 0.90 })];
        frame.layoutAlign = media.layoutAlign ?? "STRETCH";

        if (typeof media.cornerRadius === "number") {
            frame.cornerRadius = media.cornerRadius;
        }

        if (media.emoji) {
            const emoji = figma.createText();
            emoji.characters = media.emoji;
            emoji.fontSize = Math.min(frame.width, frame.height) * 0.35;
            await this.setFont(emoji, { family: "Inter", style: "Regular" });
            frame.appendChild(emoji);
        }

        if (media.label) {
            const label = figma.createText();
            label.characters = media.label;
            label.fontSize = media.labelSize ?? 12;
            label.fills = [await this.createSolidPaint(media.labelColor ?? { r: 0.95, g: 0.97, b: 1 })];
            await this.setFont(label, { family: "Inter", style: media.labelWeight ?? "Semi Bold" });
            label.textAutoResize = "WIDTH_AND_HEIGHT";
            frame.appendChild(label);
        }

        return frame;
    }

    private async createContentNode(content: CardContentInput, name: string): Promise<SceneNode> {
        if (Array.isArray(content)) {
            return this.createContentNode({
                type: "stack",
                name,
                direction: "vertical",
                gap: 8,
                fill: true,
                crossAlign: "stretch",
                items: content
            }, name);
        }

        return this.createContentItem(content, name);
    }

    private async createCopyNodes(copy: CardCopyProps): Promise<{
        headerNode?: SceneNode;
        bodyNode?: SceneNode;
        footerNode?: SceneNode;
    }> {
        const headerItems: CardContent[] = [];
        const bodyItems: CardContent[] = [];

        if (copy.eyebrow) {
            headerItems.push({
                type: "text",
                text: copy.eyebrow,
                size: 12,
                weight: "Semi Bold",
                color: { r: 0.45, g: 0.50, b: 0.58 },
                align: copy.align ?? "left"
            });
        }

        if (copy.title) {
            headerItems.push({
                type: "text",
                text: copy.title,
                size: 20,
                weight: "Semi Bold",
                color: { r: 0.12, g: 0.16, b: 0.22 },
                align: copy.align ?? "left"
            });
        }

        if (copy.subtitle) {
            headerItems.push({
                type: "text",
                text: copy.subtitle,
                size: 16,
                weight: "Regular",
                color: { r: 0.35, g: 0.39, b: 0.46 },
                align: copy.align ?? "left"
            });
        }

        if (copy.description) {
            bodyItems.push({
                type: "text",
                text: copy.description,
                size: 14,
                weight: "Regular",
                color: { r: 0.32, g: 0.36, b: 0.44 },
                align: copy.align ?? "left"
            });
        }

        if (copy.price || copy.previousPrice) {
            const priceItems: CardContent[] = [];
            if (copy.price) {
                priceItems.push({
                    type: "text",
                    text: copy.price,
                    size: 22,
                    weight: "Bold",
                    color: { r: 0.12, g: 0.16, b: 0.22 },
                    fill: false
                });
            }
            if (copy.previousPrice) {
                priceItems.push({
                    type: "text",
                    text: copy.previousPrice,
                    size: 14,
                    weight: "Regular",
                    color: { r: 0.55, g: 0.59, b: 0.65 },
                    fill: false,
                    textDecoration: "STRIKETHROUGH"
                });
            }

            bodyItems.push({
                type: "stack",
                direction: "horizontal",
                gap: 8,
                crossAlign: "center",
                fill: copy.align !== "center",
                align: copy.align === "center" ? "center" : "start",
                items: priceItems
            });
        }

        if (copy.footnote) {
            bodyItems.push({
                type: "text",
                text: copy.footnote,
                size: 12,
                weight: "Regular",
                color: { r: 0.50, g: 0.54, b: 0.61 },
                align: copy.align ?? "left"
            });
        }

        const headerNode = headerItems.length
            ? await this.createContentNode({
                type: "stack",
                name: "Copy Header",
                direction: "vertical",
                gap: 6,
                crossAlign: copy.align === "center" ? "center" : "stretch",
                fill: true,
                items: headerItems
            }, "Copy Header")
            : undefined;

        const bodyNode = bodyItems.length
            ? await this.createContentNode({
                type: "stack",
                name: "Copy Body",
                direction: "vertical",
                gap: 8,
                crossAlign: copy.align === "center" ? "center" : "stretch",
                fill: true,
                items: bodyItems
            }, "Copy Body")
            : undefined;

        return { headerNode, bodyNode };
    }

    private async createContentItem(content: CardContent, fallbackName: string): Promise<SceneNode> {
        if (content.type === "text") {
            const textNode = figma.createText();
            textNode.name = `Card Text: ${content.text.slice(0, 24)}`;
            textNode.characters = content.text;
            textNode.fontSize = content.size ?? 16;
            textNode.fills = [await this.createSolidPaint(content.color ?? { r: 0.16, g: 0.20, b: 0.26 })];
            await this.setFont(textNode, { family: "Inter", style: content.weight ?? "Regular" });
            if (typeof content.lineHeight === "number") {
                textNode.lineHeight = { value: content.lineHeight, unit: "PIXELS" };
            }
            if (content.textDecoration) {
                textNode.textDecoration = content.textDecoration;
            }

            const fill = content.fill ?? true;
            if (fill) {
                textNode.layoutAlign = "STRETCH";
                textNode.textAutoResize = "HEIGHT";
            } else {
                textNode.textAutoResize = "WIDTH_AND_HEIGHT";
            }

            if (content.align) {
                const horizontalAlignMap: Record<CardTextAlign, "LEFT" | "CENTER" | "RIGHT"> = {
                    left: "LEFT",
                    center: "CENTER",
                    right: "RIGHT"
                };
                textNode.textAlignHorizontal = horizontalAlignMap[content.align];
            }

            this.applyContentLayout(textNode, content);
            return textNode;
        }

        if (content.type === "spacer") {
            const spacer = figma.createFrame();
            spacer.name = "Card Spacer";
            spacer.resize(1, Math.max(0, content.size));
            spacer.fills = [];
            spacer.layoutAlign = "STRETCH";
            return spacer;
        }

        if (content.type === "node") {
            this.applyContentLayout(content.node, content);
            return content.node;
        }

        if (content.type === "component") {
            const instance = new content.component();
            const node = await instance.create(content.props ?? {});
            this.applyContentLayout(node, content);
            return node;
        }

        if (content.type === "shape") {
            const shape = content.shape === "ellipse" ? figma.createEllipse() : figma.createRectangle();
            shape.name = content.name ?? "Card Shape";
            shape.resize(content.width, content.height);
            if (content.fills) {
                shape.fills = content.fills;
            } else if (content.fillColor) {
                shape.fills = [await this.createSolidPaint(content.fillColor)];
            } else {
                shape.fills = [];
            }
            if (content.strokes) {
                shape.strokes = content.strokes;
            } else if (content.strokeColor) {
                shape.strokes = [await this.createSolidPaint(content.strokeColor)];
            }
            if (typeof content.strokeWeight === "number") {
                shape.strokeWeight = content.strokeWeight;
            }
            if (content.dashPattern) {
                shape.dashPattern = content.dashPattern;
            }
            if (typeof content.cornerRadius === "number" && "cornerRadius" in shape) {
                shape.cornerRadius = content.cornerRadius;
            }
            if (content.effects) {
                shape.effects = content.effects;
            }
            this.applyContentLayout(shape, content);
            return shape;
        }

        const stack = figma.createFrame();
        stack.name = content.name ?? fallbackName;
        stack.layoutMode = content.direction === "free"
            ? "NONE"
            : content.direction === "horizontal"
                ? "HORIZONTAL"
                : "VERTICAL";
        if (stack.layoutMode !== "NONE") {
            stack.itemSpacing = content.gap ?? 8;
        }
        if (content.fills) {
            stack.fills = content.fills;
        } else if (content.fillColor) {
            stack.fills = [await this.createSolidPaint(content.fillColor)];
        } else {
            stack.fills = [];
        }
        if (content.strokes) {
            stack.strokes = content.strokes;
        } else if (content.strokeColor) {
            stack.strokes = [await this.createSolidPaint(content.strokeColor)];
        }
        if (typeof content.strokeWeight === "number") {
            stack.strokeWeight = content.strokeWeight;
        }
        if (typeof content.cornerRadius === "number") {
            stack.cornerRadius = content.cornerRadius;
        }
        if (content.effects) {
            stack.effects = content.effects;
        }
        if (typeof content.clipsContent === "boolean") {
            stack.clipsContent = content.clipsContent;
        }
        // `SPACE_BETWEEN` only behaves as expected when the main axis is fixed.
        const needsFixedMainAxis = content.align === "space-between" && content.fill === true;
        if (stack.layoutMode !== "NONE") {
            stack.primaryAxisSizingMode = needsFixedMainAxis ? "FIXED" : "AUTO";
            stack.counterAxisSizingMode = "AUTO";
            stack.primaryAxisAlignItems = this.mapMainAxisAlign(content.align);
            stack.counterAxisAlignItems = this.mapCrossAxisAlign(content.crossAlign);
        }

        if (content.padding !== undefined) {
            this.applyPadding(stack, content.padding);
        }

        for (const childContent of content.items) {
            const child = await this.createContentItem(childContent, "Content Item");
            stack.appendChild(child);
            this.applyContentLayout(child, this.getContentLayout(childContent));

            if (
                stack.layoutMode === "VERTICAL" &&
                (content.crossAlign ?? "stretch") === "stretch" &&
                "layoutAlign" in child &&
                child.layoutAlign !== "STRETCH"
            ) {
                child.layoutAlign = "STRETCH";
            }
        }

        this.applyContentLayout(stack, content);
        return stack;
    }

    private applyContentLayout(
        node: SceneNode,
        layout: {
            fill?: boolean;
            grow?: number;
            position?: "auto" | "absolute";
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            constraints?: Constraints;
        }
    ): void {
        if ("layoutAlign" in node && layout.fill) {
            node.layoutAlign = "STRETCH";
        }
        if ("layoutGrow" in node && typeof layout.grow === "number") {
            node.layoutGrow = layout.grow;
        }
        if ("layoutPositioning" in node && layout.position === "absolute") {
            if (this.canUseAutoLayoutAbsolute(node)) {
                node.layoutPositioning = "ABSOLUTE";
            }
            if (typeof layout.x === "number") node.x = layout.x;
            if (typeof layout.y === "number") node.y = layout.y;
            if (layout.constraints && "constraints" in node) node.constraints = layout.constraints;
        }
        if ("resize" in node) {
            const nextWidth = typeof layout.width === "number" ? layout.width : node.width;
            const nextHeight = typeof layout.height === "number" ? layout.height : node.height;
            if (typeof layout.width === "number" || typeof layout.height === "number") {
                node.resize(nextWidth, nextHeight);
            }
        }
    }

    private getContentLayout(content: CardContent): {
        fill?: boolean;
        grow?: number;
        position?: "auto" | "absolute";
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        constraints?: Constraints;
    } {
        if (content.type === "spacer") {
            return {};
        }

        return {
            fill: content.fill,
            grow: content.grow,
            position: content.position,
            x: content.x,
            y: content.y,
            width: content.width,
            height: content.height,
            constraints: content.constraints
        };
    }

    private canUseAutoLayoutAbsolute(node: SceneNode): boolean {
        const parent = node.parent;
        if (!parent || !("layoutMode" in parent)) {
            return false;
        }
        return parent.layoutMode !== "NONE";
    }

    private mapMainAxisAlign(align: CardStackMainAlign | undefined): "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN" {
        const value = align ?? "start";
        if (value === "center") return "CENTER";
        if (value === "end") return "MAX";
        if (value === "space-between") return "SPACE_BETWEEN";
        return "MIN";
    }

    private mapCrossAxisAlign(align: CardStackCrossAlign | undefined): "MIN" | "CENTER" | "MAX" | "BASELINE" {
        const value = align ?? "stretch";
        if (value === "center") return "CENTER";
        if (value === "end") return "MAX";
        if (value === "stretch") return "MIN";
        return "MIN";
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

    private applyFloatingActionButtonPlacement(
        fab: FrameNode,
        root: FrameNode,
        options: CardFloatingActionButtonProps
    ): void {
        const insetX = options.insetX ?? 16;
        const insetY = options.insetY ?? 16;
        const horizontal = options.horizontal ?? "right";
        const vertical = options.vertical ?? "top";

        if (horizontal === "center") {
            fab.x = Math.round((root.width - fab.width) / 2);
        } else if (horizontal === "left") {
            fab.x = insetX;
        } else {
            fab.x = Math.max(0, root.width - fab.width - insetX);
        }

        if (vertical === "center") {
            fab.y = Math.round((root.height - fab.height) / 2);
        } else if (vertical === "bottom") {
            fab.y = Math.max(0, root.height - fab.height - insetY);
        } else {
            fab.y = insetY;
        }

        fab.constraints = {
            horizontal: horizontal === "left" ? "MIN" : horizontal === "center" ? "CENTER" : "MAX",
            vertical: vertical === "top" ? "MIN" : vertical === "center" ? "CENTER" : "MAX"
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

    private async createManropeText(text: string, size: number, color: RGB, fillWidth: boolean = true, lineHeight?: LineHeight): Promise<TextNode> {
        const node = figma.createText();
        node.characters = text;
        node.fontSize = size;
        node.fills = [{ type: "SOLID", color }];
        await figma.loadFontAsync({ family: "Manrope", style: "Regular" });
        node.fontName = { family: "Manrope", style: "Regular" };
        if (lineHeight) {
            node.lineHeight = lineHeight;
        }
        if (fillWidth) {
            node.layoutAlign = "STRETCH";
            node.textAutoResize = "HEIGHT";
        }
        return node;
    }

    private async createDisciplinaryBody(props: DisciplinaryCardProps): Promise<FrameNode> {
        const content = figma.createFrame();
        content.name = "UEFA Card Content";
        content.layoutMode = "VERTICAL";
        content.itemSpacing = 0;
        content.fills = [];
        content.layoutAlign = "STRETCH";
        content.layoutGrow = 1;

        const categoryText = await this.createManropeText(props.category, 16, props.themeColor, true);
        content.appendChild(categoryText);

        const titleSection = figma.createFrame();
        titleSection.name = "Title Section";
        titleSection.layoutMode = "VERTICAL";
        titleSection.itemSpacing = 16;
        titleSection.paddingTop = 12;
        titleSection.fills = [];
        titleSection.layoutAlign = "STRETCH";
        titleSection.layoutGrow = 1;

        const titleText = await this.createManropeText(props.title, 24, { r: 0.07, g: 0.22, b: 0.52 }, true, { value: 26.4, unit: "PIXELS" });
        const dateText = await this.createManropeText(props.date, 16, { r: 0.41, g: 0.50, b: 0.65 }, true, { value: 17.6, unit: "PIXELS" });
        titleSection.appendChild(titleText);
        titleSection.appendChild(dateText);
        content.appendChild(titleSection);

        const rectSection = figma.createFrame();
        rectSection.name = "Rectangle Section";
        rectSection.layoutMode = "VERTICAL";
        rectSection.itemSpacing = 0;
        rectSection.paddingTop = 16;
        rectSection.fills = [];
        rectSection.layoutAlign = "STRETCH";
        rectSection.counterAxisSizingMode = "FIXED";

        const colorRect = figma.createFrame();
        colorRect.name = "UEFA Color Rectangle";
        colorRect.resize(40, 4);
        colorRect.fills = [{ type: "SOLID", color: props.themeColor }];
        rectSection.appendChild(colorRect);
        content.appendChild(rectSection);

        const bodySection = figma.createFrame();
        bodySection.name = "Body Section";
        bodySection.layoutMode = "VERTICAL";
        bodySection.itemSpacing = 0;
        bodySection.paddingTop = 24;
        bodySection.fills = [];
        bodySection.layoutAlign = "STRETCH";
        bodySection.layoutGrow = 1;

        const bodyTextNode = await this.createManropeText(props.bodyText, 16, { r: 0.07, g: 0.22, b: 0.52 }, true, { value: 17.6, unit: "PIXELS" });
        bodySection.appendChild(bodyTextNode);
        content.appendChild(bodySection);

        return content;
    }
}

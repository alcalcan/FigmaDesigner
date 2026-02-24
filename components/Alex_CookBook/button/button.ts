import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface ButtonProps extends ComponentProps {
    variant?: "primary" | "secondary" | "ghost" | "danger" | "neutral" | "outline" | "icon" | "fab";
    size?: "small" | "medium" | "large";
    state?: "default" | "hover" | "disabled" | "loading";
    label?: string;
    width?: number | "fill";
    frontIcon?: any;
    backIcon?: any;
    iconSize?: number;
    textColor?: RGB;
    cornerRadius?: number;
    justifyContent?: "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN";
    fontWeight?: "Regular" | "SemiBold" | "Bold";
    baseColor?: RGB;
    withShadow?: boolean;
    padding?: number | { v?: number, h?: number };
}

export class button extends BaseComponent {
    async create(props: ButtonProps): Promise<SceneNode> {
        const variant = props.variant || "primary";
        const size = props.size || "medium";
        const state = props.state || "default";
        const labelText = props.label;
        const iconSize = props.iconSize || (size === "small" ? 16 : size === "large" ? 24 : 20);

        // Style tokens - More premium color palette
        const colors = {
            primary: { r: 0.1, g: 0.4, b: 0.9 }, // Modern Blue
            primaryHover: { r: 0.05, g: 0.3, b: 0.7 },
            secondary: { r: 1, g: 1, b: 1 },
            secondaryBorder: { r: 0.85, g: 0.88, b: 0.92 },
            secondaryText: { r: 0.1, g: 0.15, b: 0.25 },
            ghost: { r: 0, g: 0, b: 0, opacity: 0 },
            danger: { r: 0.9, g: 0.15, b: 0.2 },
            dangerHover: { r: 0.7, g: 0.1, b: 0.15 },
            neutral: { r: 0.1, g: 0.12, b: 0.15 }, // Dark/Black variant
            neutralHover: { r: 0, g: 0, b: 0 },
            disabled: { r: 0.94, g: 0.95, b: 0.96 },
            disabledText: { r: 0.6, g: 0.65, b: 0.7 }
        };

        const sizePadding = {
            small: { v: 6, h: 12, height: 32, fontSize: 13, gap: 6, squareSize: 32 },
            medium: { v: 10, h: 20, height: 44, fontSize: 15, gap: 8, squareSize: 44 },
            large: { v: 14, h: 28, height: 56, fontSize: 17, gap: 10, squareSize: 56 }
        };

        const currentSize = sizePadding[size];

        let fills: any[] = [];
        let strokes: any[] = [];
        let textColor = { r: 1, g: 1, b: 1 };

        if (state === "disabled") {
            fills = [{ type: "SOLID", color: colors.disabled }];
            textColor = colors.disabledText;
        } else {
            // Determine base color based on variant
            let baseColor: RGB = colors.primary;
            let hoverColor: RGB = colors.primaryHover;

            if (variant === "danger") {
                baseColor = colors.danger;
                hoverColor = colors.dangerHover;
            } else if (variant === "neutral" || variant === "fab" || variant === "icon") {
                baseColor = colors.neutral;
                hoverColor = colors.neutralHover;
            }

            // User override
            if (props.baseColor) {
                baseColor = props.baseColor;
                // Simple darker hover logic (crude but effective)
                hoverColor = { r: baseColor.r * 0.8, g: baseColor.g * 0.8, b: baseColor.b * 0.8 };
            }

            switch (variant) {
                case "primary":
                case "neutral":
                case "fab":
                case "icon":
                    fills = [{ type: "SOLID", color: state === "hover" ? hoverColor : baseColor }];
                    break;
                case "secondary":
                case "outline":
                    fills = [{ type: "SOLID", color: colors.secondary }];
                    strokes = [{ type: "SOLID", color: variant === "outline" ? baseColor : colors.secondaryBorder }];
                    textColor = variant === "outline" ? baseColor : colors.secondaryText;
                    if (state === "hover") {
                        fills = [{ type: "SOLID", color: colors.disabled, opacity: 0.4 }];
                    }
                    break;
                case "ghost":
                    fills = [];
                    textColor = baseColor;
                    if (state === "hover") {
                        fills = [{ type: "SOLID", color: baseColor, opacity: 0.1 }];
                    }
                    break;
            }
        }

        if (props.textColor) {
            textColor = props.textColor;
        }

        const children: NodeDefinition[] = [];

        // Main Icon (Front)
        if (props.frontIcon) {
            children.push({
                type: "COMPONENT",
                component: props.frontIcon,
                props: {
                    width: iconSize,
                    height: iconSize,
                    color: textColor
                },
                postCreate: async (node: SceneNode) => {
                    await this.applyIconStyle(node, textColor);
                },
                layoutProps: {
                    parentIsAutoLayout: true,
                    width: iconSize,
                    height: iconSize
                }
            });
        }

        const isSquare = variant === "icon" || variant === "fab";

        // Text Label
        if (labelText !== undefined && !isSquare) {
            children.push({
                type: "TEXT",
                name: "Button Label",
                props: {
                    characters: state === "loading" ? "Loading..." : labelText,
                    fontSize: currentSize.fontSize,
                    font: { family: "Open Sans", style: props.fontWeight || "SemiBold" },
                    fills: [{ type: "SOLID", color: textColor }]
                }
            });
        }

        // Back Icon
        if (props.backIcon && !isSquare) {
            children.push({
                type: "COMPONENT",
                component: props.backIcon,
                props: {
                    width: iconSize,
                    height: iconSize,
                    color: textColor
                },
                postCreate: async (node: SceneNode) => {
                    await this.applyIconStyle(node, textColor);
                },
                layoutProps: {
                    parentIsAutoLayout: true,
                    width: iconSize,
                    height: iconSize
                }
            });
        }

        const cornerRounding = props.cornerRadius !== undefined ? props.cornerRadius : (isSquare ? currentSize.squareSize / 2 : 12);

        const structure: NodeDefinition = {
            type: "FRAME",
            name: `Button/${variant}/${size}/${state}`,
            props: {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: props.justifyContent || "CENTER",
                counterAxisAlignItems: "CENTER",
                primaryAxisSizingMode: props.width === "fill" ? "FIXED" : (isSquare ? "FIXED" : "AUTO"),
                counterAxisSizingMode: isSquare ? "FIXED" : "AUTO",
                itemSpacing: currentSize.gap,
                paddingTop: isSquare ? 0 : (typeof props.padding === 'number' ? props.padding : (props.padding?.v ?? currentSize.v)),
                paddingBottom: isSquare ? 0 : (typeof props.padding === 'number' ? props.padding : (props.padding?.v ?? currentSize.v)),
                paddingLeft: isSquare ? 0 : (typeof props.padding === 'number' ? props.padding : (props.padding?.h ?? currentSize.h)),
                paddingRight: isSquare ? 0 : (typeof props.padding === 'number' ? props.padding : (props.padding?.h ?? currentSize.h)),
                cornerRadius: cornerRounding,
                fills,
                strokes,
                strokeWeight: strokes.length > 0 ? 1 : 0,
                layoutAlign: props.width === "fill" ? "STRETCH" : "INHERIT"
            },
            layoutProps: {
                width: props.width === "fill" ? undefined : (isSquare ? currentSize.squareSize : (typeof props.width === "number" ? props.width : undefined)),
                height: isSquare ? currentSize.squareSize : undefined,
                parentIsAutoLayout: true
            },
            children
        };

        const node = await this.renderDefinition(structure);

        // Add shadow for FAB or if explicitly requested
        if (variant === "fab" || props.withShadow) {
            const shadowColor = props.withShadow && variant !== "fab" ? { r: 0, g: 0, b: 0, a: 0.08 } : { r: 0, g: 0, b: 0, a: 0.12 };
            const shadowRadius = variant === "fab" ? 16 : 8;
            const shadowOffset = variant === "fab" ? 6 : 4;

            (node as FrameNode).effects = [{
                type: "DROP_SHADOW",
                color: shadowColor,
                offset: { x: 0, y: shadowOffset },
                radius: shadowRadius,
                spread: 0,
                visible: true,
                blendMode: "NORMAL",
                showShadowBehindNode: false
            }];
        }

        node.x = props.x ?? 0;
        node.y = props.y ?? 0;

        return node;
    }

    /**
     * Recursively applies color to all vector/geometry children of an icon.
     */
    private async applyIconStyle(node: SceneNode, color: RGB) {
        const isContainer = node.type === "FRAME" || node.type === "GROUP" || node.type === "COMPONENT" || node.type === "INSTANCE";

        if (isContainer) {
            if ("clipsContent" in node) {
                (node as FrameNode).clipsContent = false;
            }
            const children = (node as any).children || [];
            for (const child of children) {
                await this.applyIconStyle(child, color);
            }
            return;
        }

        if ("constraints" in node) {
            (node as ConstraintMixin).constraints = { horizontal: "SCALE", vertical: "SCALE" };
        }

        if ("fills" in node) {
            const geometry = node as GeometryMixin;
            const currentFills = (geometry.fills as Paint[]) || [];
            if (currentFills.length > 0) {
                geometry.fills = [{ type: 'SOLID', color }];
            }
        }

        if ("strokes" in node) {
            const geometry = node as GeometryMixin;
            const currentStrokes = (geometry.strokes as Paint[]) || [];
            if (currentStrokes.length > 0) {
                geometry.strokes = [{ type: 'SOLID', color }];
            }
        }
    }
}

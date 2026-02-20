import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface ButtonProps extends ComponentProps {
    variant?: "primary" | "secondary" | "ghost" | "danger";
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
}

export class button extends BaseComponent {
    async create(props: ButtonProps): Promise<SceneNode> {
        const variant = props.variant || "primary";
        const size = props.size || "medium";
        const state = props.state || "default";
        const labelText = props.label;
        const iconSize = props.iconSize || (size === "small" ? 16 : size === "large" ? 24 : 20);

        // Style tokens
        const colors = {
            primary: { r: 0, g: 0.635, b: 0.588 }, // Brand green
            primaryHover: { r: 0, g: 0.5, b: 0.45 },
            secondary: { r: 1, g: 1, b: 1 },
            secondaryBorder: { r: 0, g: 0.635, b: 0.588 },
            ghost: { r: 0, g: 0, b: 0, opacity: 0 },
            danger: { r: 0.9, g: 0.2, b: 0.2 },
            dangerHover: { r: 0.7, g: 0.1, b: 0.1 },
            disabled: { r: 0.9, g: 0.9, b: 0.9 },
            disabledText: { r: 0.4, g: 0.4, b: 0.4 }
        };

        const sizePadding = {
            small: { v: 8, h: 12, height: 32, fontSize: 14, gap: 8 },
            medium: { v: 10, h: 20, height: 40, fontSize: 16, gap: 10 },
            large: { v: 12, h: 24, height: 48, fontSize: 18, gap: 12 }
        };

        const currentSize = sizePadding[size];

        let fills: any[] = [];
        let strokes: any[] = [];
        let textColor = { r: 1, g: 1, b: 1 };

        if (state === "disabled") {
            fills = [{ type: "SOLID", color: colors.disabled }];
            textColor = colors.disabledText;
        } else {
            switch (variant) {
                case "primary":
                    fills = [{ type: "SOLID", color: state === "hover" ? colors.primaryHover : colors.primary }];
                    break;
                case "secondary":
                    fills = [{ type: "SOLID", color: colors.secondary }];
                    strokes = [{ type: "SOLID", color: colors.secondaryBorder }];
                    textColor = colors.secondaryBorder;
                    break;
                case "ghost":
                    fills = [];
                    textColor = colors.primary;
                    if (state === "hover") {
                        fills = [{ type: "SOLID", color: { r: 0, g: 0.635, b: 0.588 }, opacity: 0.1 }];
                    }
                    break;
                case "danger":
                    fills = [{ type: "SOLID", color: state === "hover" ? colors.dangerHover : colors.danger }];
                    break;
            }
        }

        if (props.textColor) {
            textColor = props.textColor;
        }

        const children: NodeDefinition[] = [];

        // Front Icon
        if (props.frontIcon) {
            children.push({
                type: "COMPONENT",
                name: "Front Icon",
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

        // Text Label
        if (labelText !== undefined) {
            children.push({
                type: "TEXT",
                name: "Button Label",
                props: {
                    characters: state === "loading" ? "Loading..." : labelText,
                    fontSize: currentSize.fontSize,
                    font: { family: "Open Sans", style: "Bold" },
                    fills: [{ type: "SOLID", color: textColor }]
                }
            });
        }

        // Back Icon
        if (props.backIcon) {
            children.push({
                type: "COMPONENT",
                name: "Back Icon",
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

        const structure: NodeDefinition = {
            type: "FRAME",
            name: `Button/${variant}/${size}/${state}`,
            props: {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: props.justifyContent || "CENTER",
                counterAxisAlignItems: "CENTER",
                primaryAxisSizingMode: props.width === "fill" ? "FIXED" : "AUTO",
                counterAxisSizingMode: "AUTO",
                itemSpacing: currentSize.gap,
                paddingTop: currentSize.v,
                paddingBottom: currentSize.v,
                paddingLeft: currentSize.h,
                paddingRight: currentSize.h,
                cornerRadius: props.cornerRadius ?? 4,
                fills,
                strokes,
                strokeWeight: strokes.length > 0 ? 1 : 0,
                layoutAlign: props.width === "fill" ? "STRETCH" : "INHERIT"
            },
            layoutProps: {
                width: props.width === "fill" ? undefined : (typeof props.width === "number" ? props.width : undefined),
                parentIsAutoLayout: true
            },
            children
        };

        const node = await this.renderDefinition(structure);

        node.x = props.x ?? 0;
        node.y = props.y ?? 0;

        return node;
    }

    /**
     * Recursively applies color to all vector/geometry children of an icon.
     * Specifically avoids applying background colors to container frames.
     */
    private async applyIconStyle(node: SceneNode, color: RGB) {
        const isContainer = node.type === "FRAME" || node.type === "GROUP" || node.type === "COMPONENT" || node.type === "INSTANCE";

        if (isContainer) {
            // Disable clipping to prevent accidental cropping of icons
            if ("clipsContent" in node) {
                (node as FrameNode).clipsContent = false;
            }

            // Recurse into children
            const children = (node as any).children || [];
            for (const child of children) {
                await this.applyIconStyle(child, color);
            }
            // Skip applying colors to the container frame itself
            return;
        }

        // Enforce SCALE constraints on leaf nodes so they resize correctly within the button
        if ("constraints" in node) {
            (node as ConstraintMixin).constraints = { horizontal: "SCALE", vertical: "SCALE" };
        }

        // Apply color specifically to geometry types (Vector, BooleanOperation, etc.)
        if ("fills" in node) {
            const geometry = node as GeometryMixin;
            const fills = (geometry.fills as Paint[]) || [];
            if (fills.length > 0) {
                geometry.fills = [{ type: 'SOLID', color }];
            }
        }

        if ("strokes" in node) {
            const geometry = node as GeometryMixin;
            const strokes = (geometry.strokes as Paint[]) || [];
            if (strokes.length > 0) {
                geometry.strokes = [{ type: 'SOLID', color }];
            }
        }
    }
}

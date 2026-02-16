import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface ButtonProps extends ComponentProps {
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "small" | "medium" | "large";
    state?: "default" | "hover" | "disabled" | "loading";
    label?: string;
    width?: number | "fill";
}

export class button extends BaseComponent {
    async create(props: ButtonProps): Promise<SceneNode> {
        const variant = props.variant || "primary";
        const size = props.size || "medium";
        const state = props.state || "default";
        const labelText = props.label || "Button";

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
            disabledText: { r: 0.6, g: 0.6, b: 0.6 }
        };

        const sizePadding = {
            small: { v: 8, h: 16, height: 32, fontSize: 14 },
            medium: { v: 10, h: 24, height: 40, fontSize: 16 },
            large: { v: 12, h: 32, height: 48, fontSize: 18 }
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

        const structure: NodeDefinition = {
            type: "FRAME",
            name: `Button/${variant}/${size}/${state}`,
            props: {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                paddingTop: currentSize.v,
                paddingBottom: currentSize.v,
                paddingLeft: currentSize.h,
                paddingRight: currentSize.h,
                cornerRadius: 4,
                fills,
                strokes,
                strokeWeight: strokes.length > 0 ? 1 : 0,
                layoutAlign: props.width === "fill" ? "STRETCH" : "INHERIT"
            },
            layoutProps: {
                width: props.width === "fill" ? undefined : (typeof props.width === "number" ? props.width : undefined),
                height: currentSize.height,
                parentIsAutoLayout: true
            },
            children: [
                {
                    type: "TEXT",
                    name: "Button Label",
                    props: {
                        characters: state === "loading" ? "Loading..." : labelText,
                        fontSize: currentSize.fontSize,
                        font: { family: "Open Sans", style: "Bold" },
                        fills: [{ type: "SOLID", color: textColor }]
                    }
                }
            ]
        };

        const node = await this.renderDefinition(structure);

        node.x = props.x ?? 0;
        node.y = props.y ?? 0;

        return node;
    }
}

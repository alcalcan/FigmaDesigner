import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface BadgeProps extends ComponentProps {
    variant?: "neutral" | "success" | "warning" | "error" | "info";
    type?: "solid" | "subtle";
    label?: string;
}

export class badge extends BaseComponent {
    async create(props: BadgeProps): Promise<SceneNode> {
        const variant = props.variant || "neutral";
        const type = props.type || "subtle";
        const labelText = props.label || "Badge";

        const colors = {
            neutral: { bg: { r: 0.9, g: 0.9, b: 0.9 }, text: { r: 0.3, g: 0.3, b: 0.3 } },
            success: { bg: { r: 0, g: 0.635, b: 0.588 }, text: { r: 1, g: 1, b: 1 } },
            warning: { bg: { r: 1, g: 0.75, b: 0 }, text: { r: 0.4, g: 0.3, b: 0 } },
            error: { bg: { r: 0.9, g: 0.2, b: 0.2 }, text: { r: 1, g: 1, b: 1 } },
            info: { bg: { r: 0.1, g: 0.5, b: 0.9 }, text: { r: 1, g: 1, b: 1 } }
        };

        const subtleColors = {
            neutral: { bg: { r: 0.95, g: 0.95, b: 0.96 }, text: { r: 0.4, g: 0.4, b: 0.4 } },
            success: { bg: { r: 0.9, g: 0.98, b: 0.98 }, text: { r: 0, g: 0.5, b: 0.45 } },
            warning: { bg: { r: 1, g: 0.98, b: 0.9 }, text: { r: 0.6, g: 0.45, b: 0 } },
            error: { bg: { r: 1, g: 0.94, b: 0.94 }, text: { r: 0.7, g: 0.1, b: 0.1 } },
            info: { bg: { r: 0.9, g: 0.95, b: 1 }, text: { r: 0.05, g: 0.3, b: 0.6 } }
        };

        const currentColors = type === "solid" ? colors[variant] : subtleColors[variant];

        const structure: NodeDefinition = {
            type: "FRAME",
            name: `Badge/${variant}/${type}`,
            props: {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 12,
                paddingRight: 12,
                cornerRadius: 12,
                fills: [{ type: "SOLID", color: currentColors.bg }],
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO"
            },
            layoutProps: {
                parentIsAutoLayout: true
            },
            children: [
                {
                    type: "TEXT",
                    name: "Label",
                    props: {
                        characters: labelText.toUpperCase(),
                        fontSize: 10,
                        font: { family: "Open Sans", style: "Bold" },
                        fills: [{ type: "SOLID", color: currentColors.text }],
                        letterSpacing: { unit: "PERCENT", value: 5 }
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

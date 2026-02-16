import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export interface MetricCardProps extends ComponentProps {
    label?: string;
    value?: string;
    trend?: string;
    trendDirection?: "up" | "down" | "neutral";
}

export class metric_card extends BaseComponent {
    async create(props: MetricCardProps): Promise<SceneNode> {
        const trendColor = props.trendDirection === "down"
            ? { r: 0.86, g: 0.15, b: 0.15 } // Red
            : props.trendDirection === "up"
                ? { r: 0.1, g: 0.6, b: 0.35 } // Green
                : { r: 0.5, g: 0.5, b: 0.5 }; // Grey

        const structure: NodeDefinition = createFrame("metric_card", {
            layoutMode: "VERTICAL",
            itemSpacing: 8,
            paddingTop: 24,
            paddingRight: 24,
            paddingBottom: 24,
            paddingLeft: 24,
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "FIXED",
            fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            cornerRadius: 16,
            effects: [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.08 },
                offset: { x: 0, y: 4 },
                radius: 16,
                showShadowBehindNode: true
            }],
            layoutProps: { width: 280 }
        }, [
            createText("Label", (props.label || "Total Revenue").toUpperCase(), 12, "Bold", { r: 0.5, g: 0.55, b: 0.6 }, {
                font: { family: "Open Sans", style: "Bold" },
                textAutoResize: "HEIGHT",
                layoutAlign: "STRETCH",
                letterSpacing: { unit: "PERCENT", value: 5 }
            }),
            createFrame("Value Row", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 12,
                primaryAxisAlignItems: "MIN",
                counterAxisAlignItems: "BASELINE",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                layoutAlign: "STRETCH"
            }, [
                createText("Value", props.value || "$12,450", 32, "Bold", { r: 0.1, g: 0.15, b: 0.2 }, {
                    font: { family: "Open Sans", style: "Bold" },
                    textAutoResize: "WIDTH_AND_HEIGHT"
                }),
                props.trend ? createFrame("Trend Chip", {
                    layoutMode: "HORIZONTAL",
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingLeft: 8,
                    paddingRight: 8,
                    cornerRadius: 100,
                    fills: [{ type: "SOLID", color: { ...trendColor, a: 0.1 } } as any], // Light background
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO"
                }, [
                    createText("Trend Text", props.trend, 12, "Bold", trendColor, {
                        font: { family: "Open Sans", style: "Bold" },
                        textAutoResize: "WIDTH_AND_HEIGHT"
                    })
                ]) : null
            ].filter(Boolean) as NodeDefinition[])
        ]);

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

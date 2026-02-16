import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector } from "../../ComponentHelpers";

export interface LineChartCardProps extends ComponentProps {
    title?: string;
    dataPoints?: number[]; // Array of normalized values 0-1
    color?: RGB;
}

export class line_chart_card extends BaseComponent {
    async create(props: LineChartCardProps): Promise<SceneNode> {
        const chartColor = props.color || { r: 0.2, g: 0.6, b: 1 }; // Default Blue
        // Generate a simple path string from data points
        // M 0, y0 L step, y1 L 2*step, y2 ...
        const data = props.dataPoints || [0.2, 0.5, 0.4, 0.8, 0.6, 0.9, 0.7];
        const width = 248; // Internal width (300 - padding)
        const height = 80;
        const step = width / (data.length - 1);

        let pathData = `M 0 ${height - (data[0] * height)}`;
        for (let i = 1; i < data.length; i++) {
            pathData += ` L ${i * step} ${height - (data[i] * height)}`;
        }

        const structure: NodeDefinition = createFrame("line_chart_card", {
            layoutMode: "VERTICAL",
            itemSpacing: 16,
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "FIXED",
            fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            cornerRadius: 12,
            effects: [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.06 },
                offset: { x: 0, y: 2 },
                radius: 8,
                showShadowBehindNode: true
            }],
            layoutProps: { width: 300 }
        }, [
            createFrame("Header", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "SPACE_BETWEEN",
                layoutAlign: "STRETCH",
                layoutProps: { height: 24 }
            }, [
                createText("Title", props.title || "Weekly Engagement", 14, "Bold", { r: 0.2, g: 0.24, b: 0.28 }, {
                    font: { family: "Open Sans", style: "Bold" },
                    textAutoResize: "WIDTH_AND_HEIGHT"
                }),
                createFrame("Icon Placeholder", {
                    width: 24, height: 24,
                    fills: [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }],
                    cornerRadius: 12
                }) // Could be an icon
            ]),
            createFrame("Chart Area", {
                layoutMode: "VERTICAL", // Although it contains a vector, we wrap it
                width: 260,
                height: 100,
                fills: [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.99 } }],
                cornerRadius: 4,
                paddingTop: 10, paddingBottom: 10, paddingLeft: 6, paddingRight: 6
            }, [
                // The line vector
                createVector("Line Path", `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${pathData}" stroke="rgb(${Math.round(chartColor.r * 255)},${Math.round(chartColor.g * 255)},${Math.round(chartColor.b * 255)})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, {
                    layoutProps: { width: width, height: height }
                })
            ])
        ]);

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

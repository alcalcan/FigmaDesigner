import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createVector } from "../../ComponentHelpers";

export interface GraphChartProps extends ComponentProps {
    dataPoints?: number[];
    height?: number;
    gradientStart?: RGB;
    gradientEnd?: RGB;
    showChartShadow?: boolean;
    chartFillType?: "gradient" | "solid";
    chartOpacity?: number;
    chartGradientOpacityStart?: number;
    chartGradientOpacityEnd?: number;
    cornerRadius?: number;
}

export class graph_chart extends BaseComponent {
    async create(props: GraphChartProps): Promise<SceneNode> {
        const height = props.height || 200;
        const dataPoints = props.dataPoints || [0.2, 0.4, 0.3, 0.6, 0.5, 0.8, 0.7, 0.6, 0.9, 0.85];
        const cornerRadius = props.cornerRadius ?? 32;

        const structure: NodeDefinition = {
            type: "FRAME",
            name: "graph_chart",
            props: {
                layoutMode: "VERTICAL",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "FIXED",
                clipsContent: true,
                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0 }], // Transparent container
                cornerRadius: cornerRadius,
            },
            layoutProps: {
                width: 1200,
                height: height,
                layoutSizingHorizontal: "FILL",
                layoutSizingVertical: "FIXED",
                parentIsAutoLayout: true,
                layoutAlign: "STRETCH",
            },
            children: [
                this.renderWave(
                    dataPoints,
                    1200, // Initial width
                    height,
                    {
                        start: props.gradientStart,
                        end: props.gradientEnd,
                        fillType: props.chartFillType,
                        opacity: props.chartOpacity,
                        gradientOpacityStart: props.chartGradientOpacityStart,
                        gradientOpacityEnd: props.chartGradientOpacityEnd,
                        showShadow: props.showChartShadow !== false
                    }
                )
            ].filter(Boolean) as NodeDefinition[]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }

    private renderWave(data: number[], width: number, height: number, customStyle?: {
        start?: RGB,
        end?: RGB,
        fillType?: "gradient" | "solid",
        opacity?: number,
        gradientOpacityStart?: number,
        gradientOpacityEnd?: number,
        showShadow?: boolean
    }): NodeDefinition | null {
        if (data.length < 2) return null;

        const step = width / (data.length - 1);
        const points = data.map((d, i) => ({ x: i * step, y: height - (d * height) }));

        // Start from bottom-left corner
        let pathData = `M 0 ${height} `;

        // Line to the first point
        pathData += `L ${points[0].x} ${points[0].y} `;

        // Use cubic beziers for smoothing
        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i - 1] || points[i];
            const p1 = points[i];
            const p2 = points[i + 1];
            const p3 = points[i + 2] || points[i + 1];

            const tension = 0.2;

            const cp1x = p1.x + (p2.x - p0.x) * tension;
            const cp1y = p1.y + (p2.y - p0.y) * tension;
            const cp2x = p2.x - (p3.x - p1.x) * tension;
            const cp2y = p2.y - (p3.y - p1.y) * tension;

            pathData += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
        }

        // Close back to bottom
        pathData += `L ${width} ${height} Z`;

        const startColor = customStyle?.start || { r: 0, g: 0.3, b: 0.8 };
        const endColor = customStyle?.end || { r: 0.6, g: 0.2, b: 1 };
        const isSolid = customStyle?.fillType === "solid";
        const baseOpacity = customStyle?.opacity ?? 1;
        const gradOpacityStart = customStyle?.gradientOpacityStart ?? 0.8;
        const gradOpacityEnd = customStyle?.gradientOpacityEnd ?? 1.0;

        const startRGB = `rgb(${Math.round(startColor.r * 255)}, ${Math.round(startColor.g * 255)}, ${Math.round(startColor.b * 255)})`;
        const endRGB = `rgb(${Math.round(endColor.r * 255)}, ${Math.round(endColor.g * 255)}, ${Math.round(endColor.b * 255)})`;

        const fillValue = isSolid ? startRGB : "url(#paint0_linear_dynamic)";
        const fillOpacity = isSolid ? baseOpacity : 1;

        return createVector("Area Fill", `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="${pathData}" fill="${fillValue}" fill-opacity="${fillOpacity}"/>
${!isSolid ? `
<defs>
<linearGradient id="paint0_linear_dynamic" x1="${width / 2}" y1="${height}" x2="${width / 2}" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="${startRGB}" stop-opacity="${gradOpacityStart * baseOpacity}"/>
<stop offset="1" stop-color="${endRGB}" stop-opacity="${gradOpacityEnd * baseOpacity}"/>
</linearGradient>
</defs>` : ""}
</svg>`, {
            layoutProps: {
                width: undefined,
                height: undefined,
                parentIsAutoLayout: true,
                layoutPositioning: "AUTO",
                layoutAlign: "STRETCH",
                layoutGrow: 1,
                constraints: { horizontal: "STRETCH", vertical: "STRETCH" }
            },
            effects: customStyle?.showShadow !== false ? [{
                visible: true,
                blendMode: "NORMAL",
                type: "DROP_SHADOW",
                radius: 40,
                color: { ...endColor, a: 0.4 },
                offset: { x: 0, y: 15 },
                spread: 0,
                showShadowBehindNode: false
            }] : []
        });
    }
}

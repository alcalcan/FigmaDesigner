import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createVector } from "../../ComponentHelpers";

export interface GraphChartProps extends ComponentProps {
    type?: "spline" | "bar";
    dataPoints?: (number | { value: number, offset?: number })[];
    height?: number;
    gradientStart?: RGB;
    gradientEnd?: RGB;
    showChartShadow?: boolean;
    chartFillType?: "gradient" | "solid" | "none";
    chartOpacity?: number;
    chartGradientOpacityStart?: number;
    chartGradientOpacityEnd?: number;
    cornerRadius?: number;
    barGap?: number;
    barRadius?: number;
    barWidth?: number;
    barVAlign?: "MIN" | "CENTER" | "MAX";
    sizingHorizontal?: "FILL" | "FIXED" | "HUG";
    sizingVertical?: "FILL" | "FIXED" | "HUG";
}

export class graph_chart extends BaseComponent {
    async create(props: GraphChartProps): Promise<SceneNode> {
        const height = props.height ?? 200;
        const chartWidth = Math.max(1, props.width ?? 1200);
        const normalizedData: { value: number, offset: number }[] = (props.dataPoints ?? []).map(d =>
            typeof d === "number" ? { value: d, offset: 0 } : { value: d.value, offset: d.offset ?? 0 }
        );
        const dataPointsValues = normalizedData.map(d => d.value);

        const cornerRadius = props.cornerRadius ?? 32;
        const sizingH = props.sizingHorizontal ?? "FILL";
        const sizingV = props.sizingVertical ?? "FIXED";

        const structure: NodeDefinition = {
            type: "FRAME",
            name: "graph_chart",
            props: {
                layoutMode: "VERTICAL",
                primaryAxisSizingMode: sizingV === "HUG" ? "AUTO" : "FIXED",
                counterAxisSizingMode: sizingH === "HUG" ? "AUTO" : "FIXED",
                clipsContent: true,
                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0 }], // Transparent container
                cornerRadius: props.type === "bar" ? cornerRadius : 0, // No rounding for spline containers to avoid bottom bar look
            },
            layoutProps: {
                width: sizingH === "FIXED" ? chartWidth : undefined,
                height: sizingV === "FIXED" ? height : undefined,
                layoutSizingHorizontal: sizingH,
                layoutSizingVertical: sizingV,
                parentIsAutoLayout: true,
                layoutAlign: "STRETCH",
                layoutGrow: sizingV === "FILL" ? 1 : 0
            },
            children: [
                props.type === "bar"
                    ? this.renderBars(
                        normalizedData,
                        chartWidth,
                        height,
                        {
                            type: props.type,
                            start: props.gradientStart,
                            end: props.gradientEnd,
                            fillType: props.chartFillType,
                            opacity: props.chartOpacity,
                            gap: props.barGap,
                            radius: props.barRadius,
                            barWidth: props.barWidth,
                            vAlign: props.barVAlign,
                            showShadow: props.showChartShadow !== false,
                            sizingH: sizingH,
                            sizingV: sizingV
                        }
                    )
                    : this.renderWave(
                        dataPointsValues,
                        chartWidth,
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

    private renderBars(data: { value: number, offset: number }[], width: number, height: number, customStyle?: {
        type?: "bar",
        start?: RGB,
        end?: RGB,
        fillType?: "gradient" | "solid" | "none",
        opacity?: number,
        gap?: number,
        radius?: number,
        barWidth?: number,
        vAlign?: "MIN" | "CENTER" | "MAX",
        showShadow?: boolean,
        sizingH?: "FILL" | "FIXED" | "HUG",
        sizingV?: "FILL" | "FIXED" | "HUG"
    }): NodeDefinition {
        const sizingH = customStyle?.sizingH ?? "FILL";
        const sizingV = customStyle?.sizingV ?? "FIXED";
        const gap = customStyle?.gap ?? 8;
        const startColor = customStyle?.start || { r: 0.1, g: 0.4, b: 0.9 };
        const endColor = customStyle?.end || { r: 0.4, g: 0.8, b: 1 };
        const baseOpacity = customStyle?.opacity ?? 1;
        const barWidthProp = customStyle?.barWidth;
        const vAlign = customStyle?.vAlign ?? "MAX";
        const rawValues = data.map(d => d.value);
        const minRawValue = Math.min(...rawValues);
        const maxRawValue = Math.max(...rawValues);
        const rawRange = maxRawValue - minRawValue;
        const normalizedFloor = 0.12;
        const normalizedData = data.map(d => ({
            value: rawRange < 0.0001
                ? 1
                : Math.max(
                    normalizedFloor,
                    Math.min(1, normalizedFloor + ((d.value - minRawValue) / rawRange) * (1 - normalizedFloor))
                ),
            offset: Math.max(0, Math.min(1, d.offset))
        }));

        return {
            type: "FRAME",
            name: "Bars",
            props: {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: barWidthProp ? "CENTER" : "MIN",
                primaryAxisSizingMode: "FIXED", // Essential for horizontal FILL children
                counterAxisSizingMode: "FIXED", // Essential for vertical FILL children
                itemSpacing: gap,
                fills: []
            },
            layoutProps: {
                width: sizingH === "FIXED" ? width : undefined,
                height: sizingV === "FIXED" ? height : undefined,
                parentIsAutoLayout: true,
                layoutAlign: "STRETCH",
                layoutGrow: sizingV === "FILL" ? 1 : 0,
                layoutSizingHorizontal: sizingH,
                layoutSizingVertical: sizingV
            },
            children: normalizedData.map((d, i) => {
                return {
                    type: "FRAME",
                    name: `Bar Group ${i}`,
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisAlignItems: vAlign,
                        primaryAxisSizingMode: "FIXED", // Essential for vertical FILL children
                        counterAxisSizingMode: "FIXED", // Essential for horizontal FILL children
                        fills: []
                    },
                    layoutProps: {
                        width: barWidthProp,
                        height: sizingV === "FIXED" ? height : undefined,
                        layoutSizingHorizontal: barWidthProp ? "FIXED" : "FILL",
                        layoutSizingVertical: sizingV === "FIXED" ? "FIXED" : "FILL",
                        layoutAlign: "STRETCH",
                        layoutGrow: barWidthProp ? 0 : 1, // Don't grow if we have a fixed width
                        parentIsAutoLayout: true
                    },
                    children: [
                        // When using FILL height, we use spacers to represent the percentage
                        vAlign === "MAX" && d.value < 1 && {
                            type: "FRAME",
                            name: "Top Spacer",
                            layoutProps: {
                                width: undefined,
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "FILL",
                                layoutGrow: 1 - d.value,
                                parentIsAutoLayout: true
                            }
                        },
                        vAlign === "CENTER" && {
                            type: "FRAME",
                            name: "Top Half Spacer",
                            layoutProps: {
                                width: undefined,
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "FILL",
                                layoutGrow: (1 - d.value) / 2,
                                parentIsAutoLayout: true
                            }
                        },
                        d.offset > 0 && {
                            type: "FRAME",
                            name: "Offset Spacer",
                            layoutProps: {
                                width: undefined,
                                height: undefined,
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "FILL",
                                layoutGrow: d.offset,
                                parentIsAutoLayout: true
                            }
                        },
                        {
                            type: "FRAME",
                            name: `Bar ${i}`,
                            props: {
                                cornerRadius: customStyle?.radius ?? 4,
                                fills: customStyle?.fillType === "solid"
                                    ? [{ type: "SOLID", color: startColor, opacity: baseOpacity }]
                                    : [{
                                        type: "GRADIENT_LINEAR",
                                        gradientStops: [
                                            { color: { ...startColor, a: baseOpacity }, position: 0 },
                                            { color: { ...endColor, a: baseOpacity }, position: 1 }
                                        ],
                                        gradientTransform: [[0, 1, 0], [-1, 0, 1]] // Vertical
                                    }],
                                effects: customStyle?.showShadow ? [{
                                    visible: true,
                                    blendMode: "NORMAL",
                                    type: "DROP_SHADOW",
                                    radius: 10,
                                    color: { ...endColor, a: 0.3 },
                                    offset: { x: 0, y: 4 },
                                    spread: 0,
                                    showShadowBehindNode: false
                                }] : []
                            },
                            layoutProps: {
                                width: undefined,
                                height: undefined,
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "FILL",
                                layoutGrow: d.value,
                                parentIsAutoLayout: true,
                            }
                        },
                        vAlign === "CENTER" && {
                            type: "FRAME",
                            name: "Bottom Half Spacer",
                            layoutProps: {
                                width: undefined,
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "FILL",
                                layoutGrow: (1 - d.value) / 2,
                                parentIsAutoLayout: true
                            }
                        },
                        vAlign === "MIN" && d.value < 1 && {
                            type: "FRAME",
                            name: "Bottom Spacer",
                            layoutProps: {
                                width: undefined,
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "FILL",
                                layoutGrow: 1 - d.value,
                                parentIsAutoLayout: true
                            }
                        }
                    ].filter(Boolean) as NodeDefinition[]
                };
            })
        };
    }

    private renderWave(data: number[], width: number, height: number, customStyle?: {
        start?: RGB,
        end?: RGB,
        fillType?: "gradient" | "solid" | "none",
        opacity?: number,
        gradientOpacityStart?: number,
        gradientOpacityEnd?: number,
        showShadow?: boolean
    }): NodeDefinition | null {
        if (data.length < 2) return null;

        const step = width / (data.length - 1);
        const points = data.map((d, i) => ({ x: i * step, y: height - (d * height) }));

        // Create line path (the top curve)
        let linePath = `M ${points[0].x} ${points[0].y} `;
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

            linePath += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
        }

        // Create area path by closing the line loop at the bottom
        const areaPath = linePath + ` L ${width} ${height} L 0 ${height} Z`;

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
${customStyle?.fillType !== "none" ? `<path d="${areaPath}" fill="${fillValue}" fill-opacity="${fillOpacity}"/>` : ""}
<path d="${linePath}" stroke="${isSolid ? startRGB : endRGB}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
${!isSolid ? `
<defs>
<linearGradient id="paint0_linear_dynamic" x1="${width / 2}" y1="${height}" x2="${width / 2}" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="${startRGB}" stop-opacity="${gradOpacityStart * baseOpacity}"/>
<stop offset="1" stop-color="${endRGB}" stop-opacity="${gradOpacityEnd * baseOpacity}"/>
</linearGradient>
</defs>` : ""}
</svg>`, {
            layoutProps: {
                width: width, // Essential to avoid collapse
                height: height, // Essential to avoid collapse
                parentIsAutoLayout: true,
                layoutPositioning: "AUTO",
                layoutAlign: "STRETCH",
                layoutGrow: 1,
                layoutSizingHorizontal: "FILL",
                layoutSizingVertical: "FILL",
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

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createVector } from "../../ComponentHelpers";

export interface GraphLineSeries {
    label?: string;
    dataPoints: number[];
    strokeColor?: RGB;
    strokeWidth?: number;
    showArea?: boolean;
    areaStartOpacity?: number;
    areaEndOpacity?: number;
    tooltipLabel?: string;
}

export interface GraphChartProps extends ComponentProps {
    type?: "spline" | "bar" | "line";
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
    lineSeries?: GraphLineSeries[];
    lineSeriesCount?: number;
    lineYAxisMin?: number;
    lineYAxisMax?: number;
    lineYAxisTicks?: number[];
    linePaddingLeft?: number;
    linePaddingRight?: number;
    linePaddingTop?: number;
    linePaddingBottom?: number;
    lineYAxisLabelOffsetX?: number;
    lineYAxisLabelOffsetY?: number;
    lineSelectedIndex?: number;
    lineXAxisTickIndices?: number[];
    lineXAxisTickLabels?: string[];
    lineXAxisLabelOffsetY?: number;
    lineXAxisLabelCenterAdjust?: number;
    lineShowTooltip?: boolean;
    lineTooltipLines?: string[];
    lineTooltipX?: number;
    lineTooltipY?: number;
    lineTooltipOffsetX?: number;
    lineTooltipOffsetY?: number;
    lineShowCursor?: boolean;
    lineCursorOffsetX?: number;
    lineCursorHeightExtra?: number;
    lineShowMarkers?: boolean;
    lineMarkerRadius?: number;
    lineMarkerOffsetX?: number;
    lineMarkerOffsetY?: number;
    lineStrokeWidth?: number;
    lineStrokeColor?: RGB;
    lineStrokeColors?: RGB[];
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
                    : props.type === "line"
                        ? this.renderMultiLine(
                            props.lineSeries ?? [],
                            chartWidth,
                            height,
                            {
                                sizingH,
                                sizingV,
                                seriesCount: props.lineSeriesCount,
                                yMin: props.lineYAxisMin,
                                yMax: props.lineYAxisMax,
                                yTicks: props.lineYAxisTicks,
                                paddingLeft: props.linePaddingLeft,
                                paddingRight: props.linePaddingRight,
                                paddingTop: props.linePaddingTop,
                                paddingBottom: props.linePaddingBottom,
                                yAxisLabelOffsetX: props.lineYAxisLabelOffsetX,
                                yAxisLabelOffsetY: props.lineYAxisLabelOffsetY,
                                selectedIndex: props.lineSelectedIndex,
                                xTickIndices: props.lineXAxisTickIndices,
                                xTickLabels: props.lineXAxisTickLabels,
                                xAxisLabelOffsetY: props.lineXAxisLabelOffsetY,
                                xAxisLabelCenterAdjust: props.lineXAxisLabelCenterAdjust,
                                showTooltip: props.lineShowTooltip !== false,
                                tooltipLines: props.lineTooltipLines,
                                tooltipX: props.lineTooltipX,
                                tooltipY: props.lineTooltipY,
                                tooltipOffsetX: props.lineTooltipOffsetX,
                                tooltipOffsetY: props.lineTooltipOffsetY,
                                showCursor: props.lineShowCursor !== false,
                                cursorOffsetX: props.lineCursorOffsetX,
                                cursorHeightExtra: props.lineCursorHeightExtra,
                                showMarkers: props.lineShowMarkers !== false,
                                markerRadius: props.lineMarkerRadius,
                                markerOffsetX: props.lineMarkerOffsetX,
                                markerOffsetY: props.lineMarkerOffsetY,
                                defaultStrokeWidth: props.lineStrokeWidth,
                                defaultStrokeColor: props.lineStrokeColor,
                                strokeColors: props.lineStrokeColors
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

    private renderMultiLine(
        series: GraphLineSeries[],
        width: number,
        height: number,
        options?: {
            sizingH?: "FILL" | "FIXED" | "HUG";
            sizingV?: "FILL" | "FIXED" | "HUG";
            seriesCount?: number;
            yMin?: number;
            yMax?: number;
            yTicks?: number[];
            paddingLeft?: number;
            paddingRight?: number;
            paddingTop?: number;
            paddingBottom?: number;
            yAxisLabelOffsetX?: number;
            yAxisLabelOffsetY?: number;
            selectedIndex?: number;
            xTickIndices?: number[];
            xTickLabels?: string[];
            xAxisLabelOffsetY?: number;
            xAxisLabelCenterAdjust?: number;
            showTooltip?: boolean;
            tooltipLines?: string[];
            tooltipX?: number;
            tooltipY?: number;
            tooltipOffsetX?: number;
            tooltipOffsetY?: number;
            showCursor?: boolean;
            cursorOffsetX?: number;
            cursorHeightExtra?: number;
            showMarkers?: boolean;
            markerRadius?: number;
            markerOffsetX?: number;
            markerOffsetY?: number;
            defaultStrokeWidth?: number;
            defaultStrokeColor?: RGB;
            strokeColors?: RGB[];
        }
    ): NodeDefinition | null {
        const sizingH = options?.sizingH ?? "FILL";
        const sizingV = options?.sizingV ?? "FIXED";
        const limitedSeries = series.slice(0, options?.seriesCount ? Math.max(1, Math.floor(options.seriesCount)) : series.length);
        const validSeries = limitedSeries.filter(s => Array.isArray(s.dataPoints) && s.dataPoints.length >= 2);
        if (validSeries.length === 0) return null;

        const pointCount = Math.min(...validSeries.map(s => s.dataPoints.length));
        if (pointCount < 2) return null;
        const normalizedSeries = validSeries.map(s => ({ ...s, dataPoints: s.dataPoints.slice(0, pointCount) }));
        const paletteFallbacks: RGB[] = [
            { r: 0.45, g: 0.36, b: 0.56 },
            { r: 0.69, g: 0.64, b: 0.94 },
            { r: 0.25, g: 0.62, b: 0.88 },
            { r: 0.94, g: 0.55, b: 0.16 }
        ];

        const allValues = normalizedSeries.flatMap(s => s.dataPoints);
        const minDataValue = Math.min(...allValues);
        const maxDataValue = Math.max(...allValues);
        let yMin = typeof options?.yMin === "number" ? options.yMin : minDataValue;
        let yMax = typeof options?.yMax === "number" ? options.yMax : maxDataValue;
        // Never clip plotted data; expand provided bounds if needed.
        yMin = Math.min(yMin, minDataValue);
        yMax = Math.max(yMax, maxDataValue);
        if (yMax <= yMin) yMax = yMin + 1;
        // Add a small top headroom so peaks don't touch/crop at the top edge.
        const yRange = yMax - yMin;
        yMax += yRange * 0.06;

        const leftPad = options?.paddingLeft ?? 52;
        const rightPad = options?.paddingRight ?? 10;
        const topPad = options?.paddingTop ?? 10;
        const bottomPad = options?.paddingBottom ?? 28;
        const plotWidth = Math.max(1, width - leftPad - rightPad);
        const plotHeight = Math.max(1, height - topPad - bottomPad);
        const xStep = pointCount > 1 ? plotWidth / (pointCount - 1) : plotWidth;
        const baselineY = topPad + plotHeight;
        const yLabelOffsetX = options?.yAxisLabelOffsetX ?? 0;
        const yLabelOffsetY = options?.yAxisLabelOffsetY ?? -6;
        const xLabelOffsetY = options?.xAxisLabelOffsetY ?? 10;
        const xLabelCenterAdjust = options?.xAxisLabelCenterAdjust ?? 8;
        const cursorOffsetX = options?.cursorOffsetX ?? 0;
        const cursorHeightExtra = options?.cursorHeightExtra ?? 2;
        const markerRadius = options?.markerRadius ?? 5;
        const markerOffsetX = options?.markerOffsetX ?? 0;
        const markerOffsetY = options?.markerOffsetY ?? 0;
        const tooltipOffsetX = options?.tooltipOffsetX ?? 0;
        const tooltipOffsetY = options?.tooltipOffsetY ?? 0;

        const xAt = (index: number): number => leftPad + index * xStep;
        const yAt = (value: number): number => topPad + plotHeight - ((value - yMin) / (yMax - yMin)) * plotHeight;
        const pointsBySeries = normalizedSeries.map(line =>
            line.dataPoints.map((v, i) => ({ x: xAt(i), y: yAt(v) }))
        );

        const yTicks = (options?.yTicks && options.yTicks.length > 1)
            ? options.yTicks
            : Array.from({ length: 6 }, (_, i) => yMin + ((yMax - yMin) / 5) * i);
        const xTickIndices = (options?.xTickIndices && options.xTickIndices.length > 0
            ? options.xTickIndices
            : [0, 4, 8, 12, 16, 20, 24, 28, pointCount - 1]
        ).map(i => Math.max(0, Math.min(pointCount - 1, Math.round(i))));
        const uniqueXTickIndices = Array.from(new Set(xTickIndices));

        const children: NodeDefinition[] = [];
        yTicks.forEach((tick) => {
            const y = yAt(tick);
            children.push({
                type: "RECTANGLE",
                name: `Y Grid Line ${this.formatAxisTick(tick)}`,
                props: {
                    fills: [{ type: "SOLID", color: { r: 0.93, g: 0.94, b: 0.97 } }]
                },
                layoutProps: {
                    width: plotWidth,
                    height: 1,
                    parentIsAutoLayout: true,
                    layoutPositioning: "ABSOLUTE",
                    relativeTransform: [[1, 0, leftPad], [0, 1, y]]
                }
            });

            children.push({
                type: "TEXT",
                name: `Y Axis Label ${this.formatAxisTick(tick)}`,
                props: {
                    characters: this.formatAxisTick(tick),
                    font: { family: "Inter", style: "Medium" },
                    fontSize: 10,
                    textAutoResize: "WIDTH_AND_HEIGHT",
                    fills: [{ type: "SOLID", color: { r: 0.58, g: 0.61, b: 0.69 } }]
                },
                layoutProps: {
                    parentIsAutoLayout: true,
                    layoutPositioning: "ABSOLUTE",
                    relativeTransform: [[1, 0, yLabelOffsetX], [0, 1, y + yLabelOffsetY]]
                }
            });
        });

        uniqueXTickIndices.forEach((index, i) => {
            const x = xAt(index);
            const text = options?.xTickLabels?.[i] ?? String(index + 1).padStart(2, "0");
            children.push({
                type: "TEXT",
                name: `X Axis Label ${text}`,
                props: {
                    characters: text,
                    font: { family: "Inter", style: "Medium" },
                    fontSize: 10,
                    textAutoResize: "WIDTH_AND_HEIGHT",
                    fills: [{ type: "SOLID", color: { r: 0.63, g: 0.65, b: 0.72 } }]
                },
                layoutProps: {
                    parentIsAutoLayout: true,
                    layoutPositioning: "ABSOLUTE",
                    relativeTransform: [[1, 0, x - xLabelCenterAdjust], [0, 1, topPad + plotHeight + xLabelOffsetY]]
                }
            });
        });

        const defs: string[] = [];
        const areaLayers: string[] = [];
        const lineShadowUnderlays: string[] = [];
        const lineUnderlays: string[] = [];
        const lineLayers: string[] = [];
        normalizedSeries.forEach((line, i) => {
            const points = pointsBySeries[i];
            const linePath = this.buildSmoothPath(points);
            const strokeColor =
                line.strokeColor ??
                options?.strokeColors?.[i] ??
                options?.defaultStrokeColor ??
                paletteFallbacks[i % paletteFallbacks.length];
            const stroke = this.rgbToCss(strokeColor);
            const strokeWidth = Math.max(1, line.strokeWidth ?? options?.defaultStrokeWidth ?? 4);
            if (line.showArea) {
                const gradientId = `lineArea${i}`;
                defs.push(`
<linearGradient id="${gradientId}" x1="0" y1="${topPad}" x2="0" y2="${baselineY}" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="${stroke}" stop-opacity="${line.areaStartOpacity ?? 0.16}"/>
  <stop offset="1" stop-color="${stroke}" stop-opacity="${line.areaEndOpacity ?? 0.02}"/>
</linearGradient>`);
                const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(2)} ${baselineY.toFixed(2)} L ${points[0].x.toFixed(2)} ${baselineY.toFixed(2)} Z`;
                areaLayers.push(`<path d="${areaPath}" fill="url(#${gradientId})"/>`);
            }
            lineShadowUnderlays.push(`<path d="${linePath}" fill="none" stroke="rgb(12,12,14)" stroke-opacity="0.25" stroke-width="${strokeWidth + 4}" stroke-linecap="round" stroke-linejoin="round"/>`);
            lineUnderlays.push(`<path d="${linePath}" fill="none" stroke="rgb(255,255,255)" stroke-opacity="0.55" stroke-width="${strokeWidth + 2}" stroke-linecap="round" stroke-linejoin="round"/>`);
            lineLayers.push(`<path d="${linePath}" fill="none" stroke="${stroke}" stroke-opacity="1" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`);
        });

        const selectedIndex = Math.max(0, Math.min(pointCount - 1, Math.round(options?.selectedIndex ?? Math.min(9, pointCount - 1))));
        const selectedX = xAt(selectedIndex);
        let topSelectedY = baselineY;
        const defsMarkup = defs.length > 0 ? `<defs>${defs.join("")}</defs>` : "";
        const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
${defsMarkup}
${areaLayers.join("")}
${lineShadowUnderlays.join("")}
${lineUnderlays.join("")}
${lineLayers.join("")}
</svg>`;
        children.push({
            type: "FRAME",
            name: "Multi Line Strokes & Areas",
            svgContent: svg,
            props: {
                layoutMode: "NONE",
                fills: []
            },
            layoutProps: {
                parentIsAutoLayout: true,
                layoutPositioning: "ABSOLUTE",
                relativeTransform: [[1, 0, 0], [0, 1, 0]]
            }
        });

        if (options?.showCursor !== false) {
            children.push({
                type: "RECTANGLE",
                name: "Selected Day Cursor",
                props: {
                    fills: [{ type: "SOLID", color: { r: 0.12, g: 0.12, b: 0.15 }, opacity: 0.9 }]
                },
                layoutProps: {
                    width: 2,
                    height: plotHeight + cursorHeightExtra,
                    parentIsAutoLayout: true,
                    layoutPositioning: "ABSOLUTE",
                    relativeTransform: [[1, 0, selectedX - 1 + cursorOffsetX], [0, 1, topPad]]
                }
            });
        }

        if (options?.showMarkers !== false) {
            normalizedSeries.forEach((line, i) => {
                const point = pointsBySeries[i][selectedIndex];
                topSelectedY = Math.min(topSelectedY, point.y);
                children.push({
                    type: "ELLIPSE",
                    name: `Selected ${line.label ?? `Line ${i + 1}`} Point`,
                    props: {
                        fills: [{
                            type: "SOLID",
                            color:
                                line.strokeColor ??
                                options?.strokeColors?.[i] ??
                                options?.defaultStrokeColor ??
                                paletteFallbacks[i % paletteFallbacks.length]
                        }],
                        strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                        strokeWeight: 2
                    },
                    layoutProps: {
                        width: markerRadius * 2,
                        height: markerRadius * 2,
                        parentIsAutoLayout: true,
                        layoutPositioning: "ABSOLUTE",
                        relativeTransform: [[1, 0, point.x - markerRadius + markerOffsetX], [0, 1, point.y - markerRadius + markerOffsetY]]
                    }
                });
            });
        }

        if (options?.showTooltip !== false) {
            const tooltipLines = options?.tooltipLines && options.tooltipLines.length > 0
                ? options.tooltipLines
                : normalizedSeries.map(line =>
                    `${line.tooltipLabel ?? line.label ?? "Series"}: ${this.formatMoney(line.dataPoints[selectedIndex])}`
                );
            const estimatedWidth = Math.max(...tooltipLines.map(l => l.length)) * 6.4 + 24;
            const tooltipHeight = tooltipLines.length * 16 + 16;
            const defaultX = Math.max(leftPad, Math.min(width - rightPad - estimatedWidth, selectedX - estimatedWidth / 2));
            const defaultY = Math.max(8, topSelectedY - tooltipHeight - 14);
            const tooltipX = (typeof options?.tooltipX === "number" ? options.tooltipX : defaultX) + tooltipOffsetX;
            const tooltipY = (typeof options?.tooltipY === "number" ? options.tooltipY : defaultY) + tooltipOffsetY;

            const tooltipChildren: NodeDefinition[] = tooltipLines.map((line, idx) => ({
                type: "TEXT",
                name: `Tooltip Line ${idx + 1}`,
                props: {
                    characters: line,
                    font: { family: "Inter", style: "Bold" },
                    fontSize: 11,
                    textAutoResize: "WIDTH_AND_HEIGHT",
                    fills: [{ type: "SOLID", color: { r: 0.93, g: 0.94, b: 0.97 } }]
                }
            }));

            children.push({
                type: "FRAME",
                name: "Selected Day Tooltip",
                props: {
                    layoutMode: "VERTICAL",
                    itemSpacing: 4,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 12,
                    paddingRight: 12,
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO",
                    cornerRadius: 10,
                    fills: [{ type: "SOLID", color: { r: 0.09, g: 0.1, b: 0.12 } }],
                    effects: [{
                        type: "DROP_SHADOW",
                        visible: true,
                        color: { r: 0.05, g: 0.06, b: 0.08, a: 0.24 },
                        radius: 12,
                        offset: { x: 0, y: 6 },
                        spread: 0,
                        blendMode: "NORMAL",
                        showShadowBehindNode: false
                    }]
                },
                layoutProps: {
                    parentIsAutoLayout: true,
                    layoutPositioning: "ABSOLUTE",
                    relativeTransform: [[1, 0, tooltipX], [0, 1, tooltipY]]
                },
                children: tooltipChildren
            });
        }

        return {
            type: "FRAME",
            name: "Multi Line Layer Stack",
            props: {
                layoutMode: "NONE",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "FIXED",
                clipsContent: true,
                fills: []
            },
            layoutProps: {
                width: width,
                height: height,
                parentIsAutoLayout: true,
                layoutAlign: "STRETCH",
                layoutGrow: sizingV === "FILL" ? 1 : 0,
                layoutSizingHorizontal: sizingH,
                layoutSizingVertical: sizingV
            },
            children
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

    private buildSmoothPath(points: Array<{ x: number; y: number }>): string {
        if (points.length < 2) return "";
        let path = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} `;
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

            path += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
        }
        return path.trim();
    }

    private rgbToCss(color: RGB): string {
        return `rgb(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)})`;
    }

    private formatMoney(value: number): string {
        return `$${Math.round(value).toLocaleString("en-US")}`;
    }

    private formatAxisTick(value: number): string {
        if (Math.abs(value) < 0.0001) return "$0";
        if (Math.abs(value) >= 1000) {
            const scaled = value / 1000;
            const rounded = Number.isInteger(scaled) ? scaled.toFixed(0) : scaled.toFixed(1);
            return `$${rounded}k`;
        }
        return this.formatMoney(value);
    }

    private escapeXml(text: string): string {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;");
    }
}

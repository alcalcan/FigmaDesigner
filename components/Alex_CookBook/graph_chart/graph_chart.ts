import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface GraphLineSeries {
    label?: string;
    dataPoints: number[];
    strokeColor?: RGB;
    strokeWidth?: number;
    showArea?: boolean;
    areaStartOpacity?: number;
    areaEndOpacity?: number;
    areaStartColor?: RGB;
    areaEndColor?: RGB;
    areaFillType?: "gradient" | "solid" | "none";
    areaOpacity?: number;
    tooltipLabel?: string;
}

export interface GraphChartDomain {
    min?: number;
    max?: number;
    headroomPct?: number;
}

export interface GraphChartPlot {
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
}

export interface GraphChartAxes {
    showX?: boolean;
    showY?: boolean;
    xTickIndices?: number[];
    xTickLabels?: string[];
    yTicks?: number[];
    xLabelOffsetY?: number;
    xLabelCenterAdjust?: number;
    yLabelOffsetX?: number;
    yLabelOffsetY?: number;
}

export interface GraphChartTooltip {
    show?: boolean;
    lines?: string[];
    x?: number;
    y?: number;
    offsetX?: number;
    offsetY?: number;
    minTop?: number;
}

export interface GraphChartCursor {
    show?: boolean;
    offsetX?: number;
    heightExtra?: number;
}

export interface GraphChartMarkers {
    show?: boolean;
    scope?: "all" | "focus";
    radius?: number;
    offsetX?: number;
    offsetY?: number;
}

export interface GraphChartInteraction {
    selectedIndex?: number;
    tooltip?: GraphChartTooltip;
    cursor?: GraphChartCursor;
    markers?: GraphChartMarkers;
    focus?: {
        show?: boolean;
        seriesIndex?: number;
    };
}

export interface GraphChartStroke {
    width?: number;
    color?: RGB;
    colors?: RGB[];
    showUnderlays?: boolean;
}

export interface GraphChartArea {
    fillType?: "gradient" | "solid" | "none";
    startColor?: RGB;
    endColor?: RGB;
    opacity?: number;
    gradientOpacityStart?: number;
    gradientOpacityEnd?: number;
    shadow?: boolean;
}

export interface GraphChartBar {
    gap?: number;
    radius?: number;
    width?: number;
    vAlign?: "MIN" | "CENTER" | "MAX";
}

export interface GraphChartProps extends ComponentProps {
    type?: "spline" | "bar" | "line";

    // New canonical props
    series?: GraphLineSeries[];
    curve?: "smooth" | "linear";
    domain?: GraphChartDomain;
    plot?: GraphChartPlot;
    axes?: GraphChartAxes;
    interaction?: GraphChartInteraction;
    stroke?: GraphChartStroke;
    area?: GraphChartArea;
    bar?: GraphChartBar;

    // Shared sizing/layout
    height?: number;
    cornerRadius?: number;
    sizingHorizontal?: "FILL" | "FIXED" | "HUG";
    sizingVertical?: "FILL" | "FIXED" | "HUG";

    /** @deprecated Use `area.startColor` */
    gradientStart?: RGB;
    /** @deprecated Use `area.endColor` */
    gradientEnd?: RGB;
    /** @deprecated Use `area.shadow` */
    showChartShadow?: boolean;
    /** @deprecated Use `area.fillType` */
    chartFillType?: "gradient" | "solid" | "none";
    /** @deprecated Use `area.opacity` */
    chartOpacity?: number;
    /** @deprecated Use `area.gradientOpacityStart` */
    chartGradientOpacityStart?: number;
    /** @deprecated Use `area.gradientOpacityEnd` */
    chartGradientOpacityEnd?: number;

    /** @deprecated Use `bar.gap` */
    barGap?: number;
    /** @deprecated Use `bar.radius` */
    barRadius?: number;
    /** @deprecated Use `bar.width` */
    barWidth?: number;
    /** @deprecated Use `bar.vAlign` */
    barVAlign?: "MIN" | "CENTER" | "MAX";

    /** @deprecated Use `series` */
    dataPoints?: (number | { value: number, offset?: number })[];
    /** @deprecated Use `series` */
    lineSeries?: GraphLineSeries[];
    /** @deprecated Use `series` (slice at callsite or adapter) */
    lineSeriesCount?: number;
    /** @deprecated Use `domain.min` */
    lineYAxisMin?: number;
    /** @deprecated Use `domain.max` */
    lineYAxisMax?: number;
    /** @deprecated Use `axes.yTicks` */
    lineYAxisTicks?: number[];
    /** @deprecated Use `plot.paddingLeft` */
    linePaddingLeft?: number;
    /** @deprecated Use `plot.paddingRight` */
    linePaddingRight?: number;
    /** @deprecated Use `plot.paddingTop` */
    linePaddingTop?: number;
    /** @deprecated Use `plot.paddingBottom` */
    linePaddingBottom?: number;
    /** @deprecated Use `axes.yLabelOffsetX` */
    lineYAxisLabelOffsetX?: number;
    /** @deprecated Use `axes.yLabelOffsetY` */
    lineYAxisLabelOffsetY?: number;
    /** @deprecated Use `interaction.selectedIndex` */
    lineSelectedIndex?: number;
    /** @deprecated Use `axes.xTickIndices` */
    lineXAxisTickIndices?: number[];
    /** @deprecated Use `axes.xTickLabels` */
    lineXAxisTickLabels?: string[];
    /** @deprecated Use `axes.xLabelOffsetY` */
    lineXAxisLabelOffsetY?: number;
    /** @deprecated Use `axes.xLabelCenterAdjust` */
    lineXAxisLabelCenterAdjust?: number;
    /** @deprecated Use `interaction.tooltip.show` */
    lineShowTooltip?: boolean;
    /** @deprecated Use `interaction.tooltip.lines` */
    lineTooltipLines?: string[];
    /** @deprecated Use `interaction.tooltip.x` */
    lineTooltipX?: number;
    /** @deprecated Use `interaction.tooltip.y` */
    lineTooltipY?: number;
    /** @deprecated Use `interaction.tooltip.offsetX` */
    lineTooltipOffsetX?: number;
    /** @deprecated Use `interaction.tooltip.offsetY` */
    lineTooltipOffsetY?: number;
    /** @deprecated Use `interaction.cursor.show` */
    lineShowCursor?: boolean;
    /** @deprecated Use `interaction.cursor.offsetX` */
    lineCursorOffsetX?: number;
    /** @deprecated Use `interaction.cursor.heightExtra` */
    lineCursorHeightExtra?: number;
    /** @deprecated Use `interaction.markers.show` */
    lineShowMarkers?: boolean;
    /** @deprecated Use `interaction.markers.radius` */
    lineMarkerRadius?: number;
    /** @deprecated Use `interaction.markers.offsetX` */
    lineMarkerOffsetX?: number;
    /** @deprecated Use `interaction.markers.offsetY` */
    lineMarkerOffsetY?: number;
    /** @deprecated Use `stroke.width` */
    lineStrokeWidth?: number;
    /** @deprecated Use `stroke.color` */
    lineStrokeColor?: RGB;
    /** @deprecated Use `stroke.colors` */
    lineStrokeColors?: RGB[];
}

type GraphChartType = "spline" | "bar" | "line";

type NormalizedSeriesArea = {
    enabled: boolean;
    fillType: "gradient" | "solid" | "none";
    topColor: RGB;
    bottomColor: RGB;
    topOpacity: number;
    bottomOpacity: number;
    solidColor: RGB;
    solidOpacity: number;
};

type NormalizedGraphSeries = {
    label?: string;
    tooltipLabel?: string;
    dataPoints: number[];
    strokeColor?: RGB;
    strokeWidth?: number;
    area?: NormalizedSeriesArea;
};

type NormalizedGraphProps = {
    type: GraphChartType;
    width: number;
    height: number;
    cornerRadius: number;
    sizingH: "FILL" | "FIXED" | "HUG";
    sizingV: "FILL" | "FIXED" | "HUG";
    barData: { value: number; offset: number }[];
    barStyle: {
        start: RGB;
        end: RGB;
        fillType: "gradient" | "solid" | "none";
        opacity: number;
        gap: number;
        radius: number;
        barWidth?: number;
        vAlign: "MIN" | "CENTER" | "MAX";
        showShadow: boolean;
    };
    xy?: {
        series: NormalizedGraphSeries[];
        curve: "smooth" | "linear";
        plot: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        };
        domain: {
            min?: number;
            max?: number;
            headroomPct: number;
            expandToData: boolean;
        };
        axes: {
            showX: boolean;
            showY: boolean;
            xTickIndices?: number[];
            xTickLabels?: string[];
            yTicks?: number[];
            xLabelOffsetY: number;
            xLabelCenterAdjust: number;
            yLabelOffsetX: number;
            yLabelOffsetY: number;
        };
        interaction: {
            selectedIndex?: number;
            tooltip: {
                show: boolean;
                lines?: string[];
                x?: number;
                y?: number;
                offsetX: number;
                offsetY: number;
                minTop: number;
            };
            cursor: {
                show: boolean;
                offsetX: number;
                heightExtra: number;
            };
            markers: {
                show: boolean;
                scope: "all" | "focus";
                radius: number;
                offsetX: number;
                offsetY: number;
            };
            focus: {
                show: boolean;
                seriesIndex: number;
            };
        };
        stroke: {
            defaultWidth?: number;
            defaultColor?: RGB;
            colors?: RGB[];
        };
        useLineUnderlays: boolean;
        shadow?: {
            enabled: boolean;
            color: RGB;
        };
    };
    legacyKeysUsed: string[];
};

export class graph_chart extends BaseComponent {
    private static warnedLegacyPropSignatures = new Set<string>();

    async create(props: GraphChartProps): Promise<SceneNode> {
        const normalized = this.normalizeGraphProps(props);

        if (normalized.legacyKeysUsed.length > 0) {
            const signature = normalized.legacyKeysUsed.slice().sort().join("|");
            if (!graph_chart.warnedLegacyPropSignatures.has(signature)) {
                graph_chart.warnedLegacyPropSignatures.add(signature);
                console.warn(`[graph_chart] Deprecated props used: ${normalized.legacyKeysUsed.join(", ")}. Prefer nested props (series, domain, plot, axes, interaction, stroke, area, bar).`);
            }
        }

        const structure: NodeDefinition = {
            type: "FRAME",
            name: "graph_chart",
            props: {
                layoutMode: "VERTICAL",
                primaryAxisSizingMode: normalized.sizingV === "HUG" ? "AUTO" : "FIXED",
                counterAxisSizingMode: normalized.sizingH === "HUG" ? "AUTO" : "FIXED",
                clipsContent: true,
                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0 }],
                cornerRadius: normalized.type === "bar" ? normalized.cornerRadius : 0,
            },
            layoutProps: {
                width: normalized.sizingH === "FIXED" ? normalized.width : undefined,
                height: normalized.sizingV === "FIXED" ? normalized.height : undefined,
                layoutSizingHorizontal: normalized.sizingH,
                layoutSizingVertical: normalized.sizingV,
                parentIsAutoLayout: true,
                layoutAlign: "STRETCH",
                layoutGrow: normalized.sizingV === "FILL" ? 1 : 0
            },
            children: [
                normalized.type === "bar"
                    ? this.renderBars(
                        normalized.barData,
                        normalized.width,
                        normalized.height,
                        {
                            type: "bar",
                            start: normalized.barStyle.start,
                            end: normalized.barStyle.end,
                            fillType: normalized.barStyle.fillType,
                            opacity: normalized.barStyle.opacity,
                            gap: normalized.barStyle.gap,
                            radius: normalized.barStyle.radius,
                            barWidth: normalized.barStyle.barWidth,
                            vAlign: normalized.barStyle.vAlign,
                            showShadow: normalized.barStyle.showShadow,
                            sizingH: normalized.sizingH,
                            sizingV: normalized.sizingV
                        }
                    )
                    : this.renderXYChart(
                        normalized.width,
                        normalized.height,
                        normalized.sizingH,
                        normalized.sizingV,
                        normalized.xy
                    )
            ].filter(Boolean) as NodeDefinition[]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }

    private normalizeGraphProps(props: GraphChartProps): NormalizedGraphProps {
        const type: GraphChartType = props.type ?? "spline";
        const width = Math.max(1, props.width ?? 1200);
        const height = Math.max(1, props.height ?? 200);
        const cornerRadius = props.cornerRadius ?? 32;
        const sizingH = props.sizingHorizontal ?? "FILL";
        const sizingV = props.sizingVertical ?? "FIXED";

        const legacyKeysUsed = this.detectLegacyKeys(props);
        const barData = (props.dataPoints ?? []).map((d) => {
            if (typeof d === "number") {
                return { value: d, offset: 0 };
            }
            return { value: d.value, offset: d.offset ?? 0 };
        });

        const areaFillType = props.area?.fillType ?? props.chartFillType ?? (type === "spline" ? "gradient" : "none");
        const areaStartColor = props.area?.startColor ?? props.gradientStart ?? (type === "spline" ? { r: 0, g: 0.3, b: 0.8 } : { r: 0.1, g: 0.4, b: 0.9 });
        const areaEndColor = props.area?.endColor ?? props.gradientEnd ?? (type === "spline" ? { r: 0.6, g: 0.2, b: 1 } : { r: 0.4, g: 0.8, b: 1 });
        const areaOpacity = props.area?.opacity ?? props.chartOpacity ?? 1;
        const areaGradientOpacityStart = props.area?.gradientOpacityStart ?? props.chartGradientOpacityStart ?? 0.8;
        const areaGradientOpacityEnd = props.area?.gradientOpacityEnd ?? props.chartGradientOpacityEnd ?? 1;
        const areaShadow = props.area?.shadow ?? props.showChartShadow ?? (type === "spline");

        const normalized: NormalizedGraphProps = {
            type,
            width,
            height,
            cornerRadius,
            sizingH,
            sizingV,
            barData,
            barStyle: {
                start: areaStartColor,
                end: areaEndColor,
                fillType: areaFillType,
                opacity: areaOpacity,
                gap: props.bar?.gap ?? props.barGap ?? 8,
                radius: props.bar?.radius ?? props.barRadius ?? 4,
                barWidth: props.bar?.width ?? props.barWidth,
                vAlign: props.bar?.vAlign ?? props.barVAlign ?? "MAX",
                showShadow: areaShadow
            },
            legacyKeysUsed
        };

        if (type === "bar") {
            return normalized;
        }

        const usingCanonicalSeries = Array.isArray(props.series) && props.series.length > 0;
        const usingLegacySeries = !usingCanonicalSeries && Array.isArray(props.lineSeries) && props.lineSeries.length > 0;
        const usingLegacyDataPoints = !usingCanonicalSeries && !usingLegacySeries && barData.length > 0;

        let sourceSeries: GraphLineSeries[] = [];
        if (usingCanonicalSeries) {
            sourceSeries = (props.series ?? []).map((s) => ({ ...s, dataPoints: [...s.dataPoints] }));
        } else if (usingLegacySeries) {
            sourceSeries = (props.lineSeries ?? []).map((s) => ({ ...s, dataPoints: [...s.dataPoints] }));
            if (typeof props.lineSeriesCount === "number") {
                const count = Math.max(1, Math.floor(props.lineSeriesCount));
                sourceSeries = sourceSeries.slice(0, count);
            }
        } else if (usingLegacyDataPoints) {
            sourceSeries = [
                {
                    label: "Series",
                    dataPoints: barData.map((d) => d.value)
                }
            ];
        }

        const sanitizedSeries = sourceSeries
            .map((series) => {
                const sanitizedPoints = (series.dataPoints ?? []).filter((value) => typeof value === "number" && Number.isFinite(value));
                if (sanitizedPoints.length < 2) {
                    return null;
                }

                const legacyAreaEnabled = series.showArea === true;
                const globalAreaEnabled = areaFillType !== "none";
                const areaEnabled = typeof series.showArea === "boolean"
                    ? series.showArea
                    : (type === "spline" ? globalAreaEnabled : legacyAreaEnabled || globalAreaEnabled);

                const lineSeriesArea: NormalizedSeriesArea | undefined = areaEnabled
                    ? this.normalizeSeriesArea(type, series, {
                        fillType: areaFillType,
                        startColor: areaStartColor,
                        endColor: areaEndColor,
                        opacity: areaOpacity,
                        gradientOpacityStart: areaGradientOpacityStart,
                        gradientOpacityEnd: areaGradientOpacityEnd
                    })
                    : undefined;

                const defaultSplineStroke = areaFillType === "solid" ? areaStartColor : areaEndColor;
                const normalizedStrokeColor = series.strokeColor
                    ?? (type === "spline" ? defaultSplineStroke : undefined);
                const normalizedStrokeWidth = series.strokeWidth
                    ?? (type === "spline" ? 2 : undefined);

                return {
                    label: series.label,
                    tooltipLabel: series.tooltipLabel,
                    dataPoints: sanitizedPoints,
                    strokeColor: normalizedStrokeColor,
                    strokeWidth: normalizedStrokeWidth,
                    area: lineSeriesArea
                } as NormalizedGraphSeries;
            })
            .filter((series): series is NormalizedGraphSeries => series !== null);

        const focusShow = props.interaction?.focus?.show === true;
        normalized.xy = {
            series: sanitizedSeries,
            curve: props.curve ?? "smooth",
            plot: {
                left: props.plot?.paddingLeft ?? props.linePaddingLeft ?? (type === "line" ? 52 : 0),
                right: props.plot?.paddingRight ?? props.linePaddingRight ?? (type === "line" ? 10 : 0),
                top: props.plot?.paddingTop ?? props.linePaddingTop ?? (type === "line" ? 10 : 0),
                bottom: props.plot?.paddingBottom ?? props.linePaddingBottom ?? (type === "line" ? 28 : 0)
            },
            domain: {
                min: props.domain?.min ?? props.lineYAxisMin ?? (type === "spline" ? 0 : undefined),
                max: props.domain?.max ?? props.lineYAxisMax ?? (type === "spline" ? 1 : undefined),
                headroomPct: props.domain?.headroomPct ?? (type === "line" ? 0.06 : 0),
                expandToData: type === "line"
            },
            axes: {
                showX: props.axes?.showX ?? (type === "line"),
                showY: props.axes?.showY ?? (type === "line"),
                xTickIndices: props.axes?.xTickIndices ?? props.lineXAxisTickIndices,
                xTickLabels: props.axes?.xTickLabels ?? props.lineXAxisTickLabels,
                yTicks: props.axes?.yTicks ?? props.lineYAxisTicks,
                xLabelOffsetY: props.axes?.xLabelOffsetY ?? props.lineXAxisLabelOffsetY ?? 10,
                xLabelCenterAdjust: props.axes?.xLabelCenterAdjust ?? props.lineXAxisLabelCenterAdjust ?? 8,
                yLabelOffsetX: props.axes?.yLabelOffsetX ?? props.lineYAxisLabelOffsetX ?? 0,
                yLabelOffsetY: props.axes?.yLabelOffsetY ?? props.lineYAxisLabelOffsetY ?? -6
            },
            interaction: {
                selectedIndex: props.interaction?.selectedIndex ?? props.lineSelectedIndex,
                tooltip: {
                    show: props.interaction?.tooltip?.show
                        ?? props.lineShowTooltip
                        ?? (focusShow ? true : (type === "line")),
                    lines: props.interaction?.tooltip?.lines ?? props.lineTooltipLines,
                    x: props.interaction?.tooltip?.x ?? props.lineTooltipX,
                    y: props.interaction?.tooltip?.y ?? props.lineTooltipY,
                    offsetX: props.interaction?.tooltip?.offsetX ?? props.lineTooltipOffsetX ?? 0,
                    offsetY: props.interaction?.tooltip?.offsetY ?? props.lineTooltipOffsetY ?? 0,
                    minTop: props.interaction?.tooltip?.minTop ?? 4
                },
                cursor: {
                    show: props.interaction?.cursor?.show ?? props.lineShowCursor ?? (type === "line"),
                    offsetX: props.interaction?.cursor?.offsetX ?? props.lineCursorOffsetX ?? 0,
                    heightExtra: props.interaction?.cursor?.heightExtra ?? props.lineCursorHeightExtra ?? 2
                },
                markers: {
                    show: focusShow || (props.interaction?.markers?.show ?? props.lineShowMarkers ?? (type === "line")),
                    scope: props.interaction?.markers?.scope ?? "all",
                    radius: props.interaction?.markers?.radius ?? props.lineMarkerRadius ?? 5,
                    offsetX: props.interaction?.markers?.offsetX ?? props.lineMarkerOffsetX ?? 0,
                    offsetY: props.interaction?.markers?.offsetY ?? props.lineMarkerOffsetY ?? 0
                },
                focus: {
                    show: focusShow,
                    seriesIndex: Math.max(0, Math.floor(props.interaction?.focus?.seriesIndex ?? 0))
                }
            },
            stroke: {
                defaultWidth: props.stroke?.width ?? props.lineStrokeWidth ?? (type === "line" ? 4 : undefined),
                defaultColor: props.stroke?.color ?? props.lineStrokeColor,
                colors: props.stroke?.colors ?? props.lineStrokeColors
            },
            useLineUnderlays: props.stroke?.showUnderlays === true,
            shadow: {
                enabled: areaShadow,
                color: areaEndColor
            }
        };

        return normalized;
    }

    private normalizeSeriesArea(
        type: GraphChartType,
        series: GraphLineSeries,
        globalArea: {
            fillType: "gradient" | "solid" | "none";
            startColor: RGB;
            endColor: RGB;
            opacity: number;
            gradientOpacityStart: number;
            gradientOpacityEnd: number;
        }
    ): NormalizedSeriesArea {
        const explicitFillType = series.areaFillType;
        const explicitStartColor = series.areaStartColor;
        const explicitEndColor = series.areaEndColor;
        const explicitOpacity = series.areaOpacity;

        if (type === "line" && series.showArea) {
            const fillType = explicitFillType ?? "gradient";
            const color = series.strokeColor ?? explicitEndColor ?? globalArea.endColor;
            const startColor = explicitStartColor ?? color;
            const endColor = explicitEndColor ?? color;
            const opacity = explicitOpacity ?? 1;
            return {
                enabled: true,
                fillType,
                topColor: endColor,
                bottomColor: startColor,
                topOpacity: (series.areaStartOpacity ?? 0.16) * opacity,
                bottomOpacity: (series.areaEndOpacity ?? 0.02) * opacity,
                solidColor: startColor,
                solidOpacity: 0.14 * opacity
            };
        }

        const effectiveFillType = explicitFillType ?? globalArea.fillType;
        const effectiveStartColor = explicitStartColor ?? globalArea.startColor;
        const effectiveEndColor = explicitEndColor ?? globalArea.endColor;
        const effectiveOpacity = explicitOpacity ?? globalArea.opacity;

        if (effectiveFillType === "solid") {
            return {
                enabled: true,
                fillType: "solid",
                topColor: effectiveStartColor,
                bottomColor: effectiveStartColor,
                topOpacity: effectiveOpacity,
                bottomOpacity: effectiveOpacity,
                solidColor: effectiveStartColor,
                solidOpacity: effectiveOpacity
            };
        }

        if (effectiveFillType === "none") {
            return {
                enabled: false,
                fillType: "none",
                topColor: effectiveEndColor,
                bottomColor: effectiveStartColor,
                topOpacity: 0,
                bottomOpacity: 0,
                solidColor: effectiveStartColor,
                solidOpacity: 0
            };
        }

        return {
            enabled: true,
            fillType: "gradient",
            topColor: effectiveEndColor,
            bottomColor: effectiveStartColor,
            topOpacity: globalArea.gradientOpacityEnd * effectiveOpacity,
            bottomOpacity: globalArea.gradientOpacityStart * effectiveOpacity,
            solidColor: effectiveStartColor,
            solidOpacity: effectiveOpacity
        };
    }

    private detectLegacyKeys(props: GraphChartProps): string[] {
        const legacyKeys: Array<keyof GraphChartProps> = [
            "dataPoints",
            "gradientStart",
            "gradientEnd",
            "showChartShadow",
            "chartFillType",
            "chartOpacity",
            "chartGradientOpacityStart",
            "chartGradientOpacityEnd",
            "barGap",
            "barRadius",
            "barWidth",
            "barVAlign",
            "lineSeries",
            "lineSeriesCount",
            "lineYAxisMin",
            "lineYAxisMax",
            "lineYAxisTicks",
            "linePaddingLeft",
            "linePaddingRight",
            "linePaddingTop",
            "linePaddingBottom",
            "lineYAxisLabelOffsetX",
            "lineYAxisLabelOffsetY",
            "lineSelectedIndex",
            "lineXAxisTickIndices",
            "lineXAxisTickLabels",
            "lineXAxisLabelOffsetY",
            "lineXAxisLabelCenterAdjust",
            "lineShowTooltip",
            "lineTooltipLines",
            "lineTooltipX",
            "lineTooltipY",
            "lineTooltipOffsetX",
            "lineTooltipOffsetY",
            "lineShowCursor",
            "lineCursorOffsetX",
            "lineCursorHeightExtra",
            "lineShowMarkers",
            "lineMarkerRadius",
            "lineMarkerOffsetX",
            "lineMarkerOffsetY",
            "lineStrokeWidth",
            "lineStrokeColor",
            "lineStrokeColors"
        ];

        return legacyKeys.filter((key) => props[key] !== undefined).map((key) => String(key));
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
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "FIXED",
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
                        primaryAxisSizingMode: "FIXED",
                        counterAxisSizingMode: "FIXED",
                        fills: []
                    },
                    layoutProps: {
                        width: barWidthProp,
                        height: sizingV === "FIXED" ? height : undefined,
                        layoutSizingHorizontal: barWidthProp ? "FIXED" : "FILL",
                        layoutSizingVertical: sizingV === "FIXED" ? "FIXED" : "FILL",
                        layoutAlign: "STRETCH",
                        layoutGrow: barWidthProp ? 0 : 1,
                        parentIsAutoLayout: true
                    },
                    children: [
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
                                    : customStyle?.fillType === "none"
                                        ? []
                                        : [{
                                            type: "GRADIENT_LINEAR",
                                            gradientStops: [
                                                { color: { ...startColor, a: baseOpacity }, position: 0 },
                                                { color: { ...endColor, a: baseOpacity }, position: 1 }
                                            ],
                                            gradientTransform: [[0, 1, 0], [-1, 0, 1]]
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

    private renderXYChart(
        width: number,
        height: number,
        sizingH: "FILL" | "FIXED" | "HUG",
        sizingV: "FILL" | "FIXED" | "HUG",
        options?: NormalizedGraphProps["xy"]
    ): NodeDefinition | null {
        if (!options) {
            return null;
        }

        const limitedSeries = options.series.filter((series) => Array.isArray(series.dataPoints) && series.dataPoints.length >= 2);
        if (limitedSeries.length === 0) return null;

        const pointCount = Math.min(...limitedSeries.map((series) => series.dataPoints.length));
        if (pointCount < 2) return null;

        const normalizedSeries = limitedSeries.map((series) => ({ ...series, dataPoints: series.dataPoints.slice(0, pointCount) }));
        const paletteFallbacks: RGB[] = [
            { r: 0.45, g: 0.36, b: 0.56 },
            { r: 0.69, g: 0.64, b: 0.94 },
            { r: 0.25, g: 0.62, b: 0.88 },
            { r: 0.94, g: 0.55, b: 0.16 }
        ];

        const allValues = normalizedSeries.flatMap((series) => series.dataPoints);
        const minDataValue = Math.min(...allValues);
        const maxDataValue = Math.max(...allValues);

        let yMin = typeof options.domain.min === "number" ? options.domain.min : minDataValue;
        let yMax = typeof options.domain.max === "number" ? options.domain.max : maxDataValue;

        if (options.domain.expandToData) {
            yMin = Math.min(yMin, minDataValue);
            yMax = Math.max(yMax, maxDataValue);
        }

        if (yMax <= yMin) {
            yMax = yMin + 1;
        }

        if (options.domain.headroomPct > 0) {
            yMax += (yMax - yMin) * options.domain.headroomPct;
        }

        const leftPad = options.plot.left;
        const rightPad = options.plot.right;
        const topPad = options.plot.top;
        const bottomPad = options.plot.bottom;

        const plotWidth = Math.max(1, width - leftPad - rightPad);
        const plotHeight = Math.max(1, height - topPad - bottomPad);
        const xStep = pointCount > 1 ? plotWidth / (pointCount - 1) : plotWidth;
        const baselineY = topPad + plotHeight;

        const xAt = (index: number): number => leftPad + index * xStep;
        const yAt = (value: number): number => topPad + plotHeight - ((value - yMin) / (yMax - yMin)) * plotHeight;

        const pointsBySeries = normalizedSeries.map((line) =>
            line.dataPoints.map((value, index) => ({ x: xAt(index), y: yAt(value) }))
        );

        const children: NodeDefinition[] = [];

        if (options.axes.showY) {
            const yTicks = (options.axes.yTicks && options.axes.yTicks.length > 1)
                ? options.axes.yTicks
                : Array.from({ length: 6 }, (_, i) => yMin + ((yMax - yMin) / 5) * i);

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
                        relativeTransform: [[1, 0, options.axes.yLabelOffsetX], [0, 1, y + options.axes.yLabelOffsetY]]
                    }
                });
            });
        }

        if (options.axes.showX) {
            const xTickIndices = (options.axes.xTickIndices && options.axes.xTickIndices.length > 0
                ? options.axes.xTickIndices
                : [0, 4, 8, 12, 16, 20, 24, 28, pointCount - 1]
            ).map((index) => Math.max(0, Math.min(pointCount - 1, Math.round(index))));

            const uniqueXTickIndices = Array.from(new Set(xTickIndices));
            uniqueXTickIndices.forEach((index, i) => {
                const x = xAt(index);
                const text = options.axes.xTickLabels?.[i] ?? String(index + 1).padStart(2, "0");
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
                        relativeTransform: [[1, 0, x - options.axes.xLabelCenterAdjust], [0, 1, topPad + plotHeight + options.axes.xLabelOffsetY]]
                    }
                });
            });
        }

        const areaVectors: NodeDefinition[] = [];
        const lineShadowVectors: NodeDefinition[] = [];
        const lineUnderlayVectors: NodeDefinition[] = [];
        const lineVectors: NodeDefinition[] = [];
        const lineColorDefault = normalizedSeries.length > 1 ? undefined : options.stroke.defaultColor;

        const layerLayoutProps = {
            width,
            height,
            parentIsAutoLayout: true as const,
            layoutPositioning: "ABSOLUTE" as const,
            relativeTransform: [[1, 0, 0], [0, 1, 0]] as [[number, number, number], [number, number, number]]
        };

        const buildVectorSvg = (body: string): string => `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
${body}
</svg>`;

        normalizedSeries.forEach((series, index) => {
            const points = pointsBySeries[index];
            const linePath = this.buildPath(points, options.curve, 0.2);
            const strokeColor =
                series.strokeColor
                ?? options.stroke.colors?.[index]
                ?? lineColorDefault
                ?? paletteFallbacks[index % paletteFallbacks.length];
            const stroke = this.rgbToCss(strokeColor);
            const strokeWidth = Math.max(1, series.strokeWidth ?? options.stroke.defaultWidth ?? 4);
            const seriesName = series.label ?? `Line ${index + 1}`;

            const area = series.area;
            if (area?.enabled && area.fillType !== "none") {
                const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(2)} ${baselineY.toFixed(2)} L ${points[0].x.toFixed(2)} ${baselineY.toFixed(2)} Z`;

                if (area.fillType === "solid") {
                    const areaNode = this.createSvgLayer(`Area Fill ${seriesName}`, buildVectorSvg(`<path d="${areaPath}" fill="${this.rgbToCss(area.solidColor)}" fill-opacity="${area.solidOpacity}"/>`), layerLayoutProps);
                    if (areaNode) areaVectors.push(areaNode);
                } else {
                    const gradientId = `lineArea${index}`;
                    const areaNode = this.createSvgLayer(`Area Fill ${seriesName}`, buildVectorSvg(`
<defs>
<linearGradient id="${gradientId}" x1="0" y1="${topPad}" x2="0" y2="${baselineY}" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="${this.rgbToCss(area.topColor)}" stop-opacity="${area.topOpacity}"/>
  <stop offset="1" stop-color="${this.rgbToCss(area.bottomColor)}" stop-opacity="${area.bottomOpacity}"/>
</linearGradient>
</defs>
<path d="${areaPath}" fill="url(#${gradientId})"/>`), layerLayoutProps);
                    if (areaNode) areaVectors.push(areaNode);
                }
            }

            if (options.useLineUnderlays) {
                const shadowNode = this.createSvgLayer(`Line Shadow ${seriesName}`, buildVectorSvg(`<path d="${linePath}" fill="none" stroke="rgb(12,12,14)" stroke-opacity="0.25" stroke-width="${strokeWidth + 4}" stroke-linecap="round" stroke-linejoin="round"/>`), layerLayoutProps);
                if (shadowNode) lineShadowVectors.push(shadowNode);
                const underlayNode = this.createSvgLayer(`Line Underlay ${seriesName}`, buildVectorSvg(`<path d="${linePath}" fill="none" stroke="rgb(255,255,255)" stroke-opacity="0.55" stroke-width="${strokeWidth + 2}" stroke-linecap="round" stroke-linejoin="round"/>`), layerLayoutProps);
                if (underlayNode) lineUnderlayVectors.push(underlayNode);
            }

            const lineNode = this.createSvgLayer(`Line Stroke ${seriesName}`, buildVectorSvg(`<path d="${linePath}" fill="none" stroke="${stroke}" stroke-opacity="1" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`), layerLayoutProps);
            if (lineNode) lineVectors.push(lineNode);
        });

        if (options.shadow?.enabled) {
            areaVectors.forEach((areaNode) => {
                areaNode.props = {
                    ...(areaNode.props ?? {}),
                    effects: [{
                        visible: true,
                        blendMode: "NORMAL",
                        type: "DROP_SHADOW",
                        radius: 40,
                        color: { ...options.shadow?.color, a: 0.4 },
                        offset: { x: 0, y: 15 },
                        spread: 0,
                        showShadowBehindNode: false
                    }]
                };
            });
        }
        children.push(...areaVectors, ...lineShadowVectors, ...lineUnderlayVectors, ...lineVectors);

        const selectedIndex = Math.max(0, Math.min(pointCount - 1, Math.round(options.interaction.selectedIndex ?? Math.min(9, pointCount - 1))));
        const selectedX = xAt(selectedIndex);
        const focusSeriesIndex = Math.max(0, Math.min(normalizedSeries.length - 1, options.interaction.focus.seriesIndex));
        const focusSeries = normalizedSeries[focusSeriesIndex];
        const focusPoint = pointsBySeries[focusSeriesIndex][selectedIndex];
        const useFocusedMarkerOnly = options.interaction.focus.show && options.interaction.markers.scope === "focus";
        let topSelectedY = options.interaction.focus.show ? focusPoint.y : baselineY;

        if (options.interaction.cursor.show) {
            children.push({
                type: "RECTANGLE",
                name: "Selected Day Cursor",
                props: {
                    fills: [{ type: "SOLID", color: { r: 0.12, g: 0.12, b: 0.15 }, opacity: 0.9 }]
                },
                layoutProps: {
                    width: 2,
                    height: plotHeight + options.interaction.cursor.heightExtra,
                    parentIsAutoLayout: true,
                    layoutPositioning: "ABSOLUTE",
                    relativeTransform: [[1, 0, selectedX - 1 + options.interaction.cursor.offsetX], [0, 1, topPad]]
                }
            });
        }

        if (options.interaction.markers.show) {
            if (useFocusedMarkerOnly) {
                children.push({
                    type: "ELLIPSE",
                    name: `Selected ${focusSeries.label ?? `Line ${focusSeriesIndex + 1}`} Point`,
                    props: {
                        fills: [{
                            type: "SOLID",
                            color:
                                focusSeries.strokeColor
                                ?? options.stroke.colors?.[focusSeriesIndex]
                                ?? lineColorDefault
                                ?? paletteFallbacks[focusSeriesIndex % paletteFallbacks.length]
                        }],
                        strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                        strokeWeight: 2
                    },
                    layoutProps: {
                        width: options.interaction.markers.radius * 2,
                        height: options.interaction.markers.radius * 2,
                        parentIsAutoLayout: true,
                        layoutPositioning: "ABSOLUTE",
                        relativeTransform: [
                            [1, 0, focusPoint.x - options.interaction.markers.radius + options.interaction.markers.offsetX],
                            [0, 1, focusPoint.y - options.interaction.markers.radius + options.interaction.markers.offsetY]
                        ]
                    }
                });
            } else {
                normalizedSeries.forEach((series, index) => {
                    const point = pointsBySeries[index][selectedIndex];
                    if (!options.interaction.focus.show) {
                        topSelectedY = Math.min(topSelectedY, point.y);
                    }
                    children.push({
                        type: "ELLIPSE",
                        name: `Selected ${series.label ?? `Line ${index + 1}`} Point`,
                        props: {
                            fills: [{
                                type: "SOLID",
                                color:
                                    series.strokeColor
                                    ?? options.stroke.colors?.[index]
                                    ?? lineColorDefault
                                    ?? paletteFallbacks[index % paletteFallbacks.length]
                            }],
                            strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                            strokeWeight: 2
                        },
                        layoutProps: {
                            width: options.interaction.markers.radius * 2,
                            height: options.interaction.markers.radius * 2,
                            parentIsAutoLayout: true,
                            layoutPositioning: "ABSOLUTE",
                            relativeTransform: [
                                [1, 0, point.x - options.interaction.markers.radius + options.interaction.markers.offsetX],
                                [0, 1, point.y - options.interaction.markers.radius + options.interaction.markers.offsetY]
                            ]
                        }
                    });
                });
            }
        }

        if (options.interaction.tooltip.show) {
            const tooltipLines = options.interaction.tooltip.lines && options.interaction.tooltip.lines.length > 0
                ? options.interaction.tooltip.lines
                : normalizedSeries.map((series) =>
                    `${series.tooltipLabel ?? series.label ?? "Series"}: ${this.formatMoney(series.dataPoints[selectedIndex])}`
                );

            const estimatedWidth = Math.max(...tooltipLines.map((line) => line.length), 1) * 6.4 + 24;
            const tooltipHeight = tooltipLines.length * 16 + 16;
            const defaultX = Math.max(leftPad, Math.min(width - rightPad - estimatedWidth, selectedX - estimatedWidth / 2));
            const defaultY = Math.max(options.interaction.tooltip.minTop, topSelectedY - tooltipHeight - 14);
            const tooltipX = (typeof options.interaction.tooltip.x === "number" ? options.interaction.tooltip.x : defaultX) + options.interaction.tooltip.offsetX;
            const tooltipY = (typeof options.interaction.tooltip.y === "number" ? options.interaction.tooltip.y : defaultY) + options.interaction.tooltip.offsetY;

            const tooltipChildren: NodeDefinition[] = tooltipLines.map((line, index) => ({
                type: "TEXT",
                name: `Tooltip Line ${index + 1}`,
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
            name: "XY Layer Stack",
            props: {
                layoutMode: "NONE",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "FIXED",
                clipsContent: true,
                fills: []
            },
            layoutProps: {
                width,
                height,
                parentIsAutoLayout: true,
                layoutAlign: "STRETCH",
                layoutGrow: sizingV === "FILL" ? 1 : 0,
                layoutSizingHorizontal: sizingH,
                layoutSizingVertical: sizingV
            },
            children
        };
    }

    private buildPath(points: Array<{ x: number; y: number }>, curve: "smooth" | "linear", tension: number): string {
        if (points.length < 2) return "";

        if (curve === "linear") {
            let linearPath = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} `;
            for (let i = 1; i < points.length; i += 1) {
                linearPath += `L ${points[i].x.toFixed(2)} ${points[i].y.toFixed(2)} `;
            }
            return linearPath.trim();
        }

        let path = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} `;
        for (let i = 0; i < points.length - 1; i += 1) {
            const p0 = points[i - 1] || points[i];
            const p1 = points[i];
            const p2 = points[i + 1];
            const p3 = points[i + 2] || points[i + 1];

            const cp1x = p1.x + (p2.x - p0.x) * tension;
            const cp1y = p1.y + (p2.y - p0.y) * tension;
            const cp2x = p2.x - (p3.x - p1.x) * tension;
            const cp2y = p2.y - (p3.y - p1.y) * tension;

            path += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
        }

        return path.trim();
    }

    private createSvgLayer(
        name: string,
        svgContent: string,
        layoutProps: {
            width: number;
            height: number;
            parentIsAutoLayout: true;
            layoutPositioning: "ABSOLUTE";
            relativeTransform: [[number, number, number], [number, number, number]];
        }
    ): NodeDefinition {
        return {
            type: "FRAME",
            name,
            svgContent,
            props: {
                layoutMode: "NONE",
                fills: []
            },
            layoutProps
        };
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
}

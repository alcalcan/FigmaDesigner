import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector } from "../../ComponentHelpers";
import { Lucide_star } from "../../lucide_icons/Lucide_star/Lucide_star";
import { Lucide_settings } from "../../lucide_icons/Lucide_settings/Lucide_settings";
import { Lucide_arrow_up } from "../../lucide_icons/Lucide_arrow_up/Lucide_arrow_up";
import { Lucide_arrow_down } from "../../lucide_icons/Lucide_arrow_down/Lucide_arrow_down";
import { Lucide_minus } from "../../lucide_icons/Lucide_minus/Lucide_minus";
import SVG_metric_card_design1_assets_vector_Area_Fill_1578_10451_svg_orig from "../../captures/metric_card_design1/assets/metric_card_design1_assets_vector_Area_Fill_1578_10451_svg_orig.svg";

export interface MetricCardDesign1Props extends ComponentProps {
    title?: string;
    value?: string;
    period?: string;
    platformName?: string;
    trendDirection?: "up" | "down" | "neutral";
    trendValue?: string;
    variant?: "standard" | "compact";
    layoutDirection?: "vertical" | "horizontal" | "hero" | "hero-centered" | "header-circle";
    width?: number | "fill";
    height?: number | "fill" | "hug";
    chartWidth?: number;
    gap?: number | "auto";
    footerGap?: number | "auto";
    dataPoints?: number[];
    showChart?: boolean;
    chartType?: "area" | "line" | "circle";
    chartHeight?: number | "fill";
    gradientStart?: RGB;
    gradientEnd?: RGB;
    showChartShadow?: boolean;
    chartFillType?: "gradient" | "solid";
    chartOpacity?: number;
    chartGradientOpacityStart?: number;
    chartGradientOpacityEnd?: number;
    trendPillRadius?: number;
    cornerRadius?: number;
    cardShadow?: "none" | "small" | "standard";
    cardFillType?: "gradient" | "solid";
    strokeWeight?: number;
    strokeColor?: RGB;
    showFooter?: boolean;
    chartCornerRadius?: number;
}

export class metric_card_design1 extends BaseComponent {
    async create(props: MetricCardDesign1Props): Promise<SceneNode> {
        const isCompact = props.variant === "compact";
        const isHeaderCircle = props.layoutDirection === "header-circle";
        const isHorizontal = props.layoutDirection === "horizontal" || props.layoutDirection === "hero" || props.layoutDirection === "hero-centered" || isHeaderCircle;
        const isHero = props.layoutDirection === "hero" || props.layoutDirection === "hero-centered" || isHeaderCircle;
        const isHeroCentered = props.layoutDirection === "hero-centered";
        const isFillWidth = props.width === "fill" || props.layoutSizingHorizontal === "FILL";
        const isFillHeight = props.height === "fill" || props.layoutSizingVertical === "FILL";
        const isHugHeight = props.height === "hug" || props.layoutSizingVertical === "HUG";

        const title = props.title || "Server Latency";
        const value = props.value || "24ms";
        const period = props.period || "Global Avg.";
        const platformName = props.platformName || "Cloudfront";
        const trendDirection = props.trendDirection || "up";
        const trendValue = props.trendValue || "Stable";

        const primaryTextColor = { r: 0.05, g: 0.08, b: 0.15 };
        const secondaryTextColor = { r: 0.45, g: 0.5, b: 0.6 };
        const periodTextColor = { r: 0.5, g: 0.55, b: 0.65 };
        const platformTextColor = { r: 0.55, g: 0.6, b: 0.7 };
        const trendColor = { r: 0.2, g: 0.5, b: 1 };
        const iconBlack = { r: 0, g: 0, b: 0 };

        const defaultGradientStart = { r: 0, g: 0, b: 0.388 }; // #000063
        const defaultGradientEnd = { r: 0.68, g: 0.4, b: 1 }; // #AE67FF

        const startColor = props.gradientStart || defaultGradientStart;
        const endColor = props.gradientEnd || defaultGradientEnd;

        const rootWidth = isCompact ? 320 : 491;
        const rootHeight = isCompact ? 200 : 304;
        const isChartFill = props.chartHeight === "fill";
        const sparklineHeight = (typeof props.chartHeight === 'number') ? props.chartHeight : (isCompact ? 40 : 70);
        const showChart = props.showChart !== false;
        const defaultGap = isCompact ? 10 : 16;
        const gap = typeof props.gap === "number" ? props.gap : defaultGap;
        const padding = isCompact ? 12 : 16;
        const sparklineCornerRadius = props.chartCornerRadius ?? (props.cornerRadius !== undefined ? Math.max(0, props.cornerRadius - padding) : (isCompact ? 12 : 16));
        const starIconSize = 18;
        const platformIconSize = 18;
        const trendIconSize = isCompact ? 12 : 14;

        const sparklineWidth = props.chartWidth ?? (isHorizontal ? (isCompact ? 100 : 180) : (isCompact ? 320 - 24 : 490.6667 - 32));

        const headerComponent: NodeDefinition = createFrame("Header", {
            layoutMode: "HORIZONTAL",
            primaryAxisAlignItems: isHeaderCircle ? "SPACE_BETWEEN" : "MIN",
            counterAxisAlignItems: isHeaderCircle ? "MIN" : "CENTER",
            itemSpacing: isHeaderCircle ? 0 : 8,
            layoutSizingHorizontal: (isHeroCentered || isHeaderCircle) ? "FILL" : "HUG",
            layoutSizingVertical: "HUG",
            fills: []
        }, [
            createText("Period", period, isCompact ? 11 : 12, "Medium", periodTextColor, {
                font: { family: "Inter", style: "Medium" },
                layoutSizingHorizontal: "HUG",
                layoutSizingVertical: "HUG"
            }),
            isHeaderCircle ? null : createFrame("Icon Wrapper", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                paddingTop: 1,
                paddingRight: 1,
                paddingBottom: 1,
                paddingLeft: 1,
                layoutSizingHorizontal: "HUG",
                layoutSizingVertical: "HUG",
                fills: []
            }, [
                {
                    type: "COMPONENT",
                    name: "Star Icon",
                    component: Lucide_star,
                    props: {
                        width: starIconSize,
                        height: starIconSize,
                        color: iconBlack,
                    },
                    layoutProps: {
                        width: starIconSize,
                        height: starIconSize,
                        layoutSizingHorizontal: "FIXED",
                        layoutSizingVertical: "FIXED",
                        parentIsAutoLayout: true,
                        constraints: { horizontal: "CENTER", vertical: "CENTER" }
                    }
                }
            ])
        ].filter(Boolean) as NodeDefinition[]);

        const chartNodes: NodeDefinition[] = [];
        if (props.chartType === "circle") {
            const circleSize = (typeof props.chartWidth === 'number' && props.chartWidth > 0) ? props.chartWidth :
                ((typeof props.chartHeight === 'number' && props.chartHeight > 0) ? props.chartHeight : (isHeaderCircle ? 48 : (isHero ? 120 : (isCompact ? 48 : 80))));
            const circleNode = this.renderCircle(
                (props.dataPoints && props.dataPoints.length > 0) ? props.dataPoints[props.dataPoints.length - 1] : 0.75,
                circleSize,
                { start: startColor, end: endColor }
            );
            if (circleNode) {
                if ((isHeroCentered || isHeaderCircle) && props.value) {
                    // Add value inside circle
                    const valueInside = createText("Centered Value", props.value, isHeaderCircle ? 12 : 28, "Bold", { r: 0.1, g: 0.1, b: 0.1 }, {
                        textAlignHorizontal: "CENTER",
                        textAlignVertical: "CENTER",
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG"
                    });
                    circleNode.children = [...(circleNode.children || []), valueInside];
                }

                if (isHeaderCircle) {
                    // Push to header instead of standard list
                    headerComponent.children = [...(headerComponent.children || []), circleNode];
                } else {
                    chartNodes.push(circleNode);
                }
            }
        } else {
            const waveNode = this.renderWave(
                props.dataPoints || [0.2, 0.4, 0.3, 0.6, 0.5, 0.8, 0.7],
                sparklineWidth,
                sparklineHeight,
                {
                    start: startColor,
                    end: endColor,
                    fillType: props.chartFillType,
                    opacity: props.chartOpacity,
                    gradientOpacityStart: props.chartGradientOpacityStart,
                    gradientOpacityEnd: props.chartGradientOpacityEnd
                },
                props.chartType === "line" ? "line" : "area"
            );
            if (waveNode) chartNodes.push(waveNode);
        }

        const sparklineContainer: NodeDefinition | null = showChart ? createFrame("Sparkline Container", {
            layoutMode: "VERTICAL",
            primaryAxisAlignItems: "CENTER",
            counterAxisAlignItems: "CENTER",
            clipsContent: false, // Allow glow/shadow to bleed out
            layoutSizingHorizontal: isHero ? "HUG" : "FILL",
            layoutSizingVertical: isChartFill ? "FILL" : ((isHero && !isFillHeight && typeof props.height !== 'number') ? "HUG" : "FIXED"),
            cornerRadius: sparklineCornerRadius,
            fills: [],
            effects: (props.showChartShadow !== false && !isHeroCentered) ? [{
                visible: true,
                blendMode: "NORMAL",
                type: "DROP_SHADOW",
                radius: 20,
                color: { ...endColor, a: 0.2 },
                offset: { x: 0, y: 4 },
                spread: 0,
                showShadowBehindNode: false
            }] : [],
            layoutProps: {
                width: undefined,
                height: isChartFill ? undefined : sparklineHeight,
                layoutSizingVertical: isChartFill ? "FILL" : "FIXED",
                parentIsAutoLayout: true
            }
        }, chartNodes) : null;

        const contentComponent: NodeDefinition = createFrame("Content", {
            layoutMode: "VERTICAL",
            itemSpacing: isCompact ? 4 : 8,
            layoutSizingHorizontal: isHorizontal ? "HUG" : "FILL",
            layoutSizingVertical: "HUG",
            primaryAxisAlignItems: isHorizontal ? "MIN" : "CENTER",
            counterAxisAlignItems: isHorizontal ? "MIN" : "CENTER",
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: isHorizontal ? "AUTO" : "FIXED",
            clipsContent: false,
            fills: []
        }, [
            createText("Label", title, isCompact ? 14 : 16, "Regular", secondaryTextColor, {
                font: { family: "Inter", style: "Regular" },
                layoutSizingHorizontal: "HUG",
                layoutSizingVertical: "HUG"
            }),
            createText("Value", value, isCompact ? 38 : 48, "Bold", primaryTextColor, {
                font: { family: "Inter", style: "Bold" },
                letterSpacing: { unit: "PIXELS", value: isCompact ? -1.2 : -1.5 },
                layoutSizingHorizontal: "HUG",
                layoutSizingVertical: "HUG"
            }),
            (!isHorizontal && showChart && sparklineContainer) ? sparklineContainer : null
        ].filter(Boolean) as NodeDefinition[]);

        const platformFrame = createFrame("Platform Name", {
            layoutMode: "HORIZONTAL",
            itemSpacing: 8,
            counterAxisAlignItems: "CENTER",
            layoutSizingHorizontal: "HUG",
            layoutSizingVertical: "HUG",
            fills: []
        }, [
            createFrame("Icon Wrapper", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                paddingTop: 1,
                paddingRight: 1,
                paddingBottom: 1,
                paddingLeft: 1,
                layoutSizingHorizontal: "HUG",
                layoutSizingVertical: "HUG",
                fills: []
            }, [
                {
                    type: "COMPONENT",
                    name: "Platform Icon",
                    component: Lucide_settings,
                    props: {
                        width: platformIconSize,
                        height: platformIconSize,
                        color: iconBlack,
                    },
                    layoutProps: {
                        width: platformIconSize,
                        height: platformIconSize,
                        layoutSizingHorizontal: "FIXED",
                        layoutSizingVertical: "FIXED",
                        parentIsAutoLayout: true,
                        constraints: { horizontal: "CENTER", vertical: "CENTER" }
                    }
                }
            ]),
            createText("Platform Name Text", platformName, isCompact ? 11 : 12, "Medium", platformTextColor, {
                font: { family: "Inter", style: "Medium" }
            })
        ]);

        const trendPillFrame = createFrame("Trend Pill", {
            layoutMode: "HORIZONTAL",
            itemSpacing: isCompact ? 4 : 6,
            paddingTop: isCompact ? 6 : 8,
            paddingBottom: isCompact ? 6 : 8,
            paddingLeft: isCompact ? 8 : 12,
            paddingRight: isCompact ? 8 : 12,
            cornerRadius: props.trendPillRadius ?? (isCompact ? 12 : 16),
            primaryAxisAlignItems: "CENTER",
            counterAxisAlignItems: "CENTER",
            layoutSizingHorizontal: "HUG",
            layoutSizingVertical: "HUG",
            fills: [{ type: "SOLID", color: trendColor, opacity: 0.1 }]
        }, [
            createFrame("Icon Wrapper", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                paddingTop: 1,
                paddingRight: 1,
                paddingBottom: 1,
                paddingLeft: 1,
                layoutSizingHorizontal: "HUG",
                layoutSizingVertical: "HUG",
                fills: []
            }, [
                {
                    type: "COMPONENT",
                    name: "Trend Icon",
                    component: trendDirection === "up" ? Lucide_arrow_up : trendDirection === "down" ? Lucide_arrow_down : Lucide_minus,
                    props: {
                        width: trendIconSize,
                        height: trendIconSize,
                        color: trendColor,
                    },
                    layoutProps: {
                        width: trendIconSize,
                        height: trendIconSize,
                        layoutSizingHorizontal: "FIXED",
                        layoutSizingVertical: "FIXED",
                        parentIsAutoLayout: true,
                        constraints: { horizontal: "CENTER", vertical: "CENTER" }
                    }
                }
            ]),
            createText("Trend %", trendValue, isCompact ? 12 : 13, "Bold", trendColor, {
                font: { family: "Inter", style: "Bold" }
            }),
            !isCompact
                ? createText("Trend Abs", trendDirection === "up" ? "(+8ms)" : trendDirection === "down" ? "(-8ms)" : "(0ms)", 13, "Medium", platformTextColor, {
                    font: { family: "Inter", style: "Medium" }
                })
                : null
        ].filter(Boolean) as NodeDefinition[]);

        const footerComponent: NodeDefinition | null = props.showFooter !== false ? createFrame("Footer", {
            layoutMode: "HORIZONTAL",
            primaryAxisAlignItems: props.footerGap === "auto" || (typeof props.footerGap === "undefined" && isHorizontal) ? "SPACE_BETWEEN" : "MIN",
            counterAxisAlignItems: "CENTER",
            layoutSizingHorizontal: "FILL",
            layoutSizingVertical: "HUG",
            itemSpacing: typeof props.footerGap === "number" ? props.footerGap : 20,
            fills: []
        }, [
            platformFrame,
            trendPillFrame
        ]) : null;

        const heroCenteredTitleComponent = (isHeroCentered || isHeaderCircle) ? createText("Hero Title", title, 24, "Bold", { r: 0.1, g: 0.1, b: 0.1 }, {
            font: { family: "Inter", style: "Bold" },
            layoutSizingHorizontal: "FILL",
            layoutSizingVertical: "HUG"
        }) : null;

        const bodyContentForHero = isHero ? createFrame("Info Stack", {
            layoutMode: "VERTICAL",
            primaryAxisAlignItems: (isHeroCentered || isHeaderCircle) ? "SPACE_BETWEEN" : "MIN",
            counterAxisAlignItems: "MIN",
            layoutSizingHorizontal: (isHeroCentered || isHeaderCircle) ? "FILL" : "HUG",
            layoutSizingVertical: (isHeroCentered || isHeaderCircle) ? "FILL" : "HUG",
            itemSpacing: isHeroCentered ? 0 : 8,
            fills: []
        }, [
            headerComponent,
            heroCenteredTitleComponent,
            (!isHeroCentered && !isHeaderCircle) ? contentComponent : null,
            (isHeroCentered || isHeaderCircle) ? trendPillFrame : (props.showFooter !== false ? platformFrame : null)
        ].filter(Boolean) as NodeDefinition[]) : null;

        const visualGroupForHero = isHero ? createFrame("Visual Group", {
            layoutMode: "VERTICAL",
            primaryAxisAlignItems: "MIN",
            counterAxisAlignItems: "CENTER",
            layoutSizingHorizontal: "HUG",
            layoutSizingVertical: "HUG",
            itemSpacing: 12,
            clipsContent: false,
            fills: []
        }, [
            showChart && !isHeaderCircle ? sparklineContainer : null,
            (!isHeroCentered && !isHeaderCircle && props.showFooter !== false) ? trendPillFrame : null
        ].filter(Boolean) as NodeDefinition[]) : null;

        const bodyComponent = isHero ? createFrame("Body", {
            layoutMode: "HORIZONTAL",
            primaryAxisAlignItems: "SPACE_BETWEEN",
            counterAxisAlignItems: "CENTER",
            layoutSizingHorizontal: "FILL",
            layoutSizingVertical: (isFillHeight || typeof props.height === 'number') ? "FILL" : "HUG",
            itemSpacing: 24,
            clipsContent: false,
            fills: []
        }, [
            bodyContentForHero,
            isHeaderCircle ? null : visualGroupForHero
        ].filter(Boolean) as NodeDefinition[]) : (isHorizontal ? createFrame("Body", {
            layoutMode: "HORIZONTAL",
            primaryAxisAlignItems: "MIN",
            counterAxisAlignItems: "CENTER",
            layoutSizingHorizontal: "FILL",
            layoutSizingVertical: "HUG",
            itemSpacing: 8,
            clipsContent: false,
            fills: []
        }, [
            contentComponent,
            showChart ? sparklineContainer : null
        ].filter(Boolean) as NodeDefinition[]) : contentComponent);

        const structure: NodeDefinition = {
            type: "FRAME",
            name: isCompact ? "metric_card_design1_compact" : "metric_card_design1",
            props: {
                layoutMode: "VERTICAL",
                itemSpacing: gap,
                paddingTop: padding,
                paddingRight: padding,
                paddingBottom: padding,
                paddingLeft: padding,
                primaryAxisSizingMode: (typeof props.height === 'number' || isFillHeight) ? "FIXED" : "AUTO",
                counterAxisSizingMode: "FIXED",
                primaryAxisAlignItems: props.gap === "auto" ? "SPACE_BETWEEN" : "MIN",
                counterAxisAlignItems: "MIN",
                clipsContent: false,
                fills: props.cardFillType === "solid" ? [
                    { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 1 }
                ] : [
                    {
                        visible: true,
                        opacity: 1,
                        blendMode: "NORMAL",
                        type: "GRADIENT_LINEAR",
                        gradientStops: [
                            { color: { r: 1, g: 1, b: 1, a: 1 }, position: 0 },
                            { color: { r: 0.98, g: 0.99, b: 1, a: 0.96 }, position: 1 }
                        ],
                        gradientTransform: [
                            [0.690418004989624, 0.38661691546440125, -0.044504158198833466],
                            [-0.38661691546440125, 0.37372609972953796, 0.49469995498657227]
                        ]
                    }
                ],
                strokes: [{ type: "SOLID", color: props.strokeColor ?? { r: 1, g: 1, b: 1 }, opacity: 1 }],
                strokeWeight: props.strokeWeight ?? 2,
                strokeAlign: "OUTSIDE",
                cornerRadius: props.cornerRadius ?? (isCompact ? 24 : 32),
                effects: (props.cardShadow === "small") ? [
                    {
                        visible: true,
                        blendMode: "NORMAL",
                        type: "DROP_SHADOW",
                        radius: 12,
                        color: { r: 0, g: 0, b: 0, a: 0.04 },
                        offset: { x: 0, y: 4 },
                        spread: 0,
                        showShadowBehindNode: true
                    }
                ] : (props.cardShadow === "standard" || typeof props.cardShadow === "undefined") ? [
                    { visible: true, type: "BACKGROUND_BLUR", radius: 24, blurType: "NORMAL" },
                    {
                        visible: true,
                        blendMode: "NORMAL",
                        type: "DROP_SHADOW",
                        radius: 32,
                        color: { r: 0.05, g: 0.1, b: 0.2, a: 0.06 },
                        offset: { x: 0, y: 16 },
                        spread: 0,
                        showShadowBehindNode: true
                    },
                    {
                        visible: true,
                        blendMode: "NORMAL",
                        type: "DROP_SHADOW",
                        radius: 4,
                        color: { r: 0, g: 0, b: 0, a: 0.02 },
                        offset: { x: 0, y: 4 },
                        spread: 0,
                        showShadowBehindNode: true
                    }
                ] : []
            },
            layoutProps: {
                width: isFillWidth ? undefined : (typeof props.width === "number" ? props.width : rootWidth),
                height: (typeof props.height === "number") ? props.height : undefined,
                layoutSizingHorizontal: isFillWidth ? "FILL" : "FIXED",
                layoutSizingVertical: isFillHeight ? "FILL" : "HUG",
                layoutGrow: isFillWidth ? 1 : 0,
                parentIsAutoLayout: true
            },
            children: isHero ? [bodyComponent] : [
                headerComponent,
                bodyComponent,
                footerComponent
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
        gradientOpacityEnd?: number
    }, chartType: "area" | "line" = "area"): NodeDefinition | null {
        if (data.length < 2) return null;

        const step = width / (data.length - 1);
        const vPaddingTop = 6;
        const vPaddingBottom = chartType === "line" ? 6 : 0;
        const points = data.map((d, i) => ({
            x: i * step,
            y: vPaddingTop + (1 - d) * (height - vPaddingTop - vPaddingBottom)
        }));

        // Start from bottom-left corner for area, or first y for line
        let pathData = chartType === "line" ? `M 0 ${points[0].y} ` : `M 0 ${height} L 0 ${points[0].y} `;

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

        // Close back to bottom for area
        if (chartType !== "line") {
            pathData += `L ${width} ${height} Z`;
        }

        const startColor = customStyle?.start || { r: 0, g: 0, b: 0.388 };
        const endColor = customStyle?.end || { r: 0.68, g: 0.4, b: 1 };
        const isSolid = customStyle?.fillType === "solid";
        const baseOpacity = customStyle?.opacity ?? 1;
        const gradOpacityStart = customStyle?.gradientOpacityStart ?? 0.8;
        const gradOpacityEnd = customStyle?.gradientOpacityEnd ?? 1.0;

        const startRGB = `rgb(${Math.round(startColor.r * 255)}, ${Math.round(startColor.g * 255)}, ${Math.round(startColor.b * 255)})`;
        const endRGB = `rgb(${Math.round(endColor.r * 255)}, ${Math.round(endColor.g * 255)}, ${Math.round(endColor.b * 255)})`;

        let svgContent = '';
        if (chartType === "line") {
            const strokeColor = isSolid ? startRGB : "url(#paint0_linear_dynamic)";
            svgContent = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="${pathData}" stroke="${strokeColor}" stroke-width="3" fill="none" stroke-linecap="round"/>
${!isSolid ? `
<defs>
<linearGradient id="paint0_linear_dynamic" x1="0" y1="0" x2="${width}" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="${startRGB}"/>
<stop offset="1" stop-color="${endRGB}"/>
</linearGradient>
</defs>` : ""}
</svg>`;
        } else {
            const fillValue = isSolid ? startRGB : "url(#paint0_linear_dynamic)";
            const fillOpacity = isSolid ? baseOpacity : 1;
            svgContent = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="${pathData}" fill="${fillValue}" fill-opacity="${fillOpacity}"/>
${!isSolid ? `
<defs>
<linearGradient id="paint0_linear_dynamic" x1="${width / 2}" y1="${height}" x2="${width / 2}" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="${startRGB}" stop-opacity="${gradOpacityStart * baseOpacity}"/>
<stop offset="1" stop-color="${endRGB}" stop-opacity="${gradOpacityEnd * baseOpacity}"/>
</linearGradient>
</defs>` : ""}
</svg>`;
        }

        return createVector(chartType === "line" ? "Line Chart" : "Area Fill", svgContent, {
            layoutProps: {
                width: undefined,
                height: undefined,
                parentIsAutoLayout: true,
                layoutPositioning: "AUTO",
                layoutAlign: "STRETCH",
                layoutGrow: 1,
                constraints: { horizontal: "STRETCH", vertical: "STRETCH" }
            }
        });
    }

    private renderCircle(percentage: number, targetSize: number, customStyle?: { start?: RGB, end?: RGB }): NodeDefinition | null {
        const strokeWidth = Math.max(4, targetSize * 0.10);
        const innerRadiusRatio = 1 - (strokeWidth * 2 / targetSize);

        const startColor = customStyle?.start || { r: 0, g: 0, b: 0.388 };
        const endColor = customStyle?.end || { r: 0.68, g: 0.4, b: 1 };

        const trackFill = [{ type: "SOLID", color: startColor, opacity: 0.15 }];
        const gradientFill = [{
            type: "GRADIENT_LINEAR",
            gradientTransform: [[1, 0, 0], [0, 1, 0]],
            gradientStops: [
                { position: 0, color: { ...startColor, a: 1 } },
                { position: 1, color: { ...endColor, a: 1 } }
            ]
        }];

        const startingAngle = -Math.PI / 2;
        const sweepAngle = Math.min(Math.max(percentage, 0), 1) * 2 * Math.PI;

        const ellipses: NodeDefinition[] = [
            {
                type: "ELLIPSE",
                name: "Track",
                props: {
                    fills: trackFill,
                    arcData: {
                        startingAngle: 0,
                        endingAngle: 2 * Math.PI,
                        innerRadius: innerRadiusRatio
                    }
                },
                layoutProps: {
                    width: targetSize,
                    height: targetSize,
                    layoutPositioning: "ABSOLUTE",
                    x: 0,
                    y: 0
                }
            }
        ];

        if (percentage > 0) {
            ellipses.push({
                type: "ELLIPSE",
                name: "Progress",
                props: {
                    fills: gradientFill,
                    cornerRadius: targetSize, // fully rounded caps
                    arcData: {
                        startingAngle: startingAngle,
                        endingAngle: startingAngle + sweepAngle,
                        innerRadius: innerRadiusRatio
                    }
                },
                layoutProps: {
                    width: targetSize,
                    height: targetSize,
                    layoutPositioning: "ABSOLUTE",
                    x: 0,
                    y: 0
                }
            });
        }

        return {
            type: "FRAME",
            name: "Circle Chart",
            props: {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                fills: [],
                clipsContent: false
            },
            layoutProps: {
                width: targetSize,
                height: targetSize,
                parentIsAutoLayout: true,
                layoutPositioning: "AUTO"
            },
            children: ellipses
        };
    }
}

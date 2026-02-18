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
    dataPoints?: number[];
    gradientStart?: RGB;
    gradientEnd?: RGB;
}

export class metric_card_design1 extends BaseComponent {
    async create(props: MetricCardDesign1Props): Promise<SceneNode> {
        const isCompact = props.variant === "compact";
        const isFillWidth = props.width === "fill" || props.layoutSizingHorizontal === "FILL";
        const isFillHeight = props.height === "fill" || props.layoutSizingVertical === "FILL";

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

        const rootWidth = isCompact ? 320 : 490.6667;
        const rootHeight = isCompact ? 200 : 304;
        const sparklineHeight = isCompact ? 40 : 70;
        const sparklineCornerRadius = isCompact ? 12 : 16;
        const starIconSize = 18;
        const platformIconSize = 18;
        const trendIconSize = isCompact ? 12 : 14;

        const structure: NodeDefinition = {
            type: "FRAME",
            name: isCompact ? "metric_card_design1_compact" : "metric_card_design1",
            props: {
                layoutMode: "VERTICAL",
                itemSpacing: isCompact ? 10 : 16,
                paddingTop: isCompact ? 12 : 16,
                paddingRight: isCompact ? 12 : 16,
                paddingBottom: isCompact ? 12 : 16,
                paddingLeft: isCompact ? 12 : 16,
                primaryAxisSizingMode: (typeof props.height === 'number' || isFillHeight) ? "FIXED" : "AUTO",
                counterAxisSizingMode: "FIXED",
                primaryAxisAlignItems: "SPACE_BETWEEN",
                counterAxisAlignItems: "MIN",
                clipsContent: true,
                fills: [
                    {
                        visible: true,
                        opacity: 1,
                        blendMode: "NORMAL",
                        type: "GRADIENT_LINEAR",
                        gradientStops: [
                            { color: { r: 1, g: 1, b: 1, a: 1 }, position: 0 },
                            { color: { r: 0.9800000190734863, g: 0.9900000095367432, b: 1, a: 0.9599999785423279 }, position: 1 }
                        ],
                        gradientTransform: [
                            [0.690418004989624, 0.38661691546440125, -0.044504158198833466],
                            [-0.38661691546440125, 0.37372609972953796, 0.49469995498657227]
                        ]
                    }
                ],
                strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 1 }],
                strokeWeight: 2,
                strokeAlign: "OUTSIDE",
                cornerRadius: isCompact ? 24 : 32,
                effects: [
                    { visible: true, type: "BACKGROUND_BLUR", radius: 24, blurType: "NORMAL" },
                    {
                        visible: true,
                        blendMode: "NORMAL",
                        type: "DROP_SHADOW",
                        radius: 32,
                        color: { r: 0.05, g: 0.1, b: 0.2, a: 0.05999999865889549 },
                        offset: { x: 0, y: 16 },
                        spread: 0,
                        showShadowBehindNode: true
                    },
                    {
                        visible: true,
                        blendMode: "NORMAL",
                        type: "DROP_SHADOW",
                        radius: 4,
                        color: { r: 0, g: 0, b: 0, a: 0.019999999552965164 },
                        offset: { x: 0, y: 4 },
                        spread: 0,
                        showShadowBehindNode: true
                    }
                ]
            },
            layoutProps: {
                width: isFillWidth ? undefined : (typeof props.width === "number" ? props.width : rootWidth),
                height: isFillHeight ? undefined : (typeof props.height === "number" ? props.height : rootHeight),
                layoutSizingHorizontal: isFillWidth ? "FILL" : "FIXED",
                layoutSizingVertical: isFillHeight ? "FILL" : "HUG",
                layoutGrow: isFillWidth ? 1 : 0,
                parentIsAutoLayout: true
            },
            children: [
                createFrame("Header", {
                    layoutMode: "HORIZONTAL",
                    primaryAxisAlignItems: "MIN",
                    counterAxisAlignItems: "CENTER",
                    itemSpacing: 8,
                    layoutSizingHorizontal: "HUG",
                    layoutSizingVertical: "HUG",
                    fills: []
                }, [
                    createText("Period", period, isCompact ? 11 : 12, "Medium", periodTextColor, {
                        font: { family: "Inter", style: "Medium" },
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG"
                    }),
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
                ]),

                createFrame("Content", {
                    layoutMode: "VERTICAL",
                    itemSpacing: isCompact ? 4 : 8,
                    layoutSizingHorizontal: "FILL",
                    layoutSizingVertical: "HUG",
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "FIXED",
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
                    createFrame("Sparkline Container", {
                        layoutMode: "VERTICAL",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER",
                        clipsContent: true,
                        layoutSizingHorizontal: "FILL",
                        layoutSizingVertical: "FIXED",
                        cornerRadius: sparklineCornerRadius,
                        fills: [],
                        effects: [{
                            visible: true,
                            blendMode: "NORMAL",
                            type: "DROP_SHADOW",
                            radius: 18.899999618530273,
                            color: { ...endColor, a: 0.8 },
                            offset: { x: 0, y: 5 },
                            spread: 0,
                            showShadowBehindNode: false
                        }],
                        layoutProps: {
                            height: sparklineHeight,
                            parentIsAutoLayout: true
                        }
                    }, [
                        this.renderWave(
                            props.dataPoints || [0.2, 0.4, 0.3, 0.6, 0.5, 0.8, 0.7],
                            isCompact ? 320 - 24 : 490.6667 - 32,
                            sparklineHeight,
                            { start: startColor, end: endColor }
                        )
                    ])
                ]),

                createFrame("Footer", {
                    layoutMode: "HORIZONTAL",
                    primaryAxisAlignItems: "SPACE_BETWEEN",
                    counterAxisAlignItems: isCompact ? "CENTER" : "MAX",
                    layoutSizingHorizontal: "FILL",
                    layoutSizingVertical: "HUG",
                    itemSpacing: isCompact ? 12 : 20,
                    fills: []
                }, [
                    createFrame("Platform Name", {
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
                    ]),

                    createFrame("Trend Pill", {
                        layoutMode: "HORIZONTAL",
                        itemSpacing: isCompact ? 4 : 6,
                        paddingTop: isCompact ? 6 : 8,
                        paddingBottom: isCompact ? 6 : 8,
                        paddingLeft: isCompact ? 8 : 12,
                        paddingRight: isCompact ? 8 : 12,
                        cornerRadius: 8,
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER",
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG",
                        fills: [{ type: "SOLID", color: trendColor, opacity: 0.1 }]
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
                                parentIsAutoLayout: true
                            }
                        },
                        createText("Trend %", trendValue, isCompact ? 12 : 13, "Bold", trendColor, {
                            font: { family: "Inter", style: "Bold" }
                        }),
                        !isCompact
                            ? createText("Trend Abs", trendDirection === "up" ? "(+8ms)" : trendDirection === "down" ? "(-8ms)" : "((0ms))", 13, "Medium", platformTextColor, {
                                font: { family: "Inter", style: "Medium" }
                            })
                            : null
                    ].filter(Boolean) as NodeDefinition[])
                ])
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }

    private renderWave(data: number[], width: number, height: number, customGradient?: { start?: RGB, end?: RGB }): NodeDefinition | null {
        if (data.length < 2) return null;

        const step = width / (data.length - 1);
        const points = data.map((d, i) => ({ x: i * step, y: height - (d * height) }));

        // Start from bottom-left corner
        let pathData = `M 0 ${height} `;

        // Line to the first point
        pathData += `L ${points[0].x} ${points[0].y} `;

        // Use cubic beziers for smoothing
        // For each segment i to i+1, we use points i-1, i, i+1, i+2 to calculate control points
        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i - 1] || points[i];
            const p1 = points[i];
            const p2 = points[i + 1];
            const p3 = points[i + 2] || points[i + 1];

            // Tension parameter controls how "tight" the curve is. 
            // 0.2 to 0.4 is usually good for sparklines.
            const tension = 0.2;

            const cp1x = p1.x + (p2.x - p0.x) * tension;
            const cp1y = p1.y + (p2.y - p0.y) * tension;
            const cp2x = p2.x - (p3.x - p1.x) * tension;
            const cp2y = p2.y - (p3.y - p1.y) * tension;

            pathData += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
        }

        // Close back to bottom
        pathData += `L ${width} ${height} Z`;

        const startColor = customGradient?.start || { r: 0, g: 0, b: 0.388 }; // Default #000063-ish
        const endColor = customGradient?.end || { r: 0.68, g: 0.4, b: 1 }; // Default #AE67FF-ish

        const startRGB = `rgb(${Math.round(startColor.r * 255)}, ${Math.round(startColor.g * 255)}, ${Math.round(startColor.b * 255)})`;
        const endRGB = `rgb(${Math.round(endColor.r * 255)}, ${Math.round(endColor.g * 255)}, ${Math.round(endColor.b * 255)})`;

        return createVector("Area Fill", `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="${pathData}" fill="url(#paint0_linear_dynamic)"/>
<defs>
<linearGradient id="paint0_linear_dynamic" x1="${width / 2}" y1="${height}" x2="${width / 2}" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="${startRGB}" stop-opacity="0.8"/>
<stop offset="1" stop-color="${endRGB}"/>
</linearGradient>
</defs>
</svg>`, {
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
}

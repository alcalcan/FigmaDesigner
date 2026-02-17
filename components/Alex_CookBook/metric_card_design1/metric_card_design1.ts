import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector } from "../../ComponentHelpers";
import { Lucide_star } from "../../lucide_icons/Lucide_star/Lucide_star";
import { Lucide_settings } from "../../lucide_icons/Lucide_settings/Lucide_settings";
import { Lucide_arrow_up } from "../../lucide_icons/Lucide_arrow_up/Lucide_arrow_up";
import { Lucide_arrow_down } from "../../lucide_icons/Lucide_arrow_down/Lucide_arrow_down";
import { Lucide_minus } from "../../lucide_icons/Lucide_minus/Lucide_minus";

export interface MetricCardDesign1Props extends ComponentProps {
    title?: string;
    value?: string;
    period?: string;
    platformName?: string;
    trendDirection?: 'up' | 'down' | 'neutral';
    trendValue?: string;
    variant?: 'default' | 'compact';
    dataPoints?: number[];
}

export class metric_card_design1 extends BaseComponent {
    async create(props: MetricCardDesign1Props): Promise<SceneNode> {
        // Defaults
        const title = props.title || "Server Latency";
        const value = props.value || "24ms";
        const period = props.period || "Global Avg.";
        const platformName = props.platformName || "Cloudfront";
        const trendDirection = props.trendDirection || "up";
        const trendValue = props.trendValue || "Stable";

        const sparklineGradientId = `sparkline_gradient_${Math.floor(Math.random() * 1000000)}`;

        // Exact SVG assets from capture
        // Exact SVG assets from capture
        // (Removed hardcoded SVG icons as we are now using Lucide components)
        const SVG_TREND_NEUTRAL = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.91667 7H11.0833" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

        // Areas Fill SVG Content
        const AREA_FILL_SVG = `
<svg width="459" height="73" viewBox="0 0 459 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 72.7246V20.7419L40.1256 7.27501C66.4464 -1.55875 94.7995 -2.36712 121.581 4.95267L172.737 18.9346C193.307 24.5566 214.889 25.4055 235.837 21.4165L312.629 6.79332C328.099 3.84741 343.955 3.53272 359.53 5.86248L459 20.7419V72.7246H0Z" fill="url(#${sparklineGradientId})"/>
<defs>
<linearGradient id="${sparklineGradientId}" x1="217.5" y1="72.7246" x2="217.5" y2="-6.27539" gradientUnits="userSpaceOnUse">
<stop stop-color="#000063"/>
<stop offset="1" stop-color="#AE67FF"/>
</linearGradient>
</defs>
</svg>`;

        // Colors and Styles from capture
        const primaryTextColor = { r: 0.05, g: 0.08, b: 0.15 };
        const secondaryTextColor = { r: 0.45, g: 0.5, b: 0.6 };
        const periodTextColor = { r: 0.5, g: 0.55, b: 0.65 };
        const platformTextColor = { r: 0.55, g: 0.6, b: 0.7 };
        const trendColor = { r: 0.2, g: 0.5, b: 1 };

        // --- Structure ---
        const structure: NodeDefinition = {
            type: "FRAME",
            name: "metric_card_design1",
            props: {
                layoutMode: "VERTICAL",
                itemSpacing: 16,
                paddingTop: 16,
                paddingRight: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "FIXED",
                clipsContent: true,
                fills: [
                    {
                        visible: true, opacity: 1, blendMode: "NORMAL", type: "GRADIENT_LINEAR",
                        gradientStops: [
                            { color: { r: 1, g: 1, b: 1, a: 1 }, position: 0 },
                            { color: { r: 0.9800000190734863, g: 0.9900000095367432, b: 1, a: 0.9599999785423279 }, position: 1 }
                        ],
                        gradientTransform: [
                            [0.690418004989624, 0.38661691546440125, -0.044504158198833466],
                            [-0.38661691546440125, 0.37372609972953796, 0.49469995498657227]
                        ]
                    } as any
                ],
                strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 1 }],
                strokeWeight: 2,
                strokeAlign: "OUTSIDE",
                cornerRadius: 32,
                effects: [
                    {
                        visible: true, type: "BACKGROUND_BLUR",
                        radius: 24,
                        blurType: "NORMAL"
                    },
                    {
                        visible: true, blendMode: "NORMAL", type: "DROP_SHADOW",
                        radius: 32,
                        color: { r: 0.05, g: 0.1, b: 0.2, a: 0.05999999865889549 },
                        offset: { x: 0, y: 16 },
                        spread: 0,
                        showShadowBehindNode: true
                    },
                    {
                        visible: true, blendMode: "NORMAL", type: "DROP_SHADOW",
                        radius: 4,
                        color: { r: 0, g: 0, b: 0, a: 0.019999999552965164 },
                        offset: { x: 0, y: 4 },
                        spread: 0,
                        showShadowBehindNode: true
                    }
                ]
            },
            layoutProps: {
                width: 490.6667,
                layoutSizingHorizontal: "FIXED",
                layoutSizingVertical: "HUG",
                parentIsAutoLayout: false
            },
            children: [
                // Header
                createFrame("Header", {
                    layoutMode: "HORIZONTAL",
                    primaryAxisAlignItems: "MIN",
                    counterAxisAlignItems: "CENTER",
                    layoutSizingHorizontal: "FILL",
                    layoutSizingVertical: "HUG",
                    itemSpacing: 8,
                    fills: []
                }, [
                    createText("Period", period, 12, "Medium", periodTextColor, {
                        font: { family: "Inter", style: "Medium" },
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG"
                    }),
                    {
                        type: "COMPONENT",
                        name: "Star Icon",
                        component: Lucide_star,
                        props: { width: 18, color: periodTextColor, strokeWeight: 1.5 },
                        layoutProps: {
                            width: 18, height: 18,
                            layoutSizingHorizontal: "FIXED",
                            layoutSizingVertical: "FIXED",
                            parentIsAutoLayout: true
                        }
                    }
                ]),

                // Content
                createFrame("Content", {
                    layoutMode: "VERTICAL",
                    itemSpacing: 8,
                    layoutSizingHorizontal: "FILL",
                    layoutSizingVertical: "HUG",
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    primaryAxisSizingMode: "AUTO",
                    clipsContent: false,
                    fills: []
                }, [
                    createText("Label", title, 16, "Regular", secondaryTextColor, {
                        font: { family: "Inter", style: "Regular" },
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG"
                    }),
                    createText("Value", value, 48, "Bold", primaryTextColor, {
                        font: { family: "Inter", style: "Bold" },
                        letterSpacing: { unit: "PIXELS", value: -1.5 },
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG"
                    }),

                    // Sparkline Wrapper
                    createFrame("Sparkline Container", {
                        layoutMode: "VERTICAL",
                        layoutSizingHorizontal: "FILL",
                        layoutSizingVertical: "HUG",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER",
                        paddingTop: 0,
                        paddingBottom: 0,
                        cornerRadius: 16,
                        clipsContent: true,
                        fills: [],
                        effects: [{
                            visible: true, blendMode: "NORMAL", type: "DROP_SHADOW",
                            radius: 18.899999618530273,
                            color: { r: 0.6117647290229797, g: 0.364705890417099, b: 0.9372549057006836, a: 0.800000011920929 },
                            offset: { x: 0, y: 5 },
                            spread: 0,
                            showShadowBehindNode: false
                        }]
                    }, [
                        createVector("Area Fill", AREA_FILL_SVG, {
                            layoutProps: {
                                width: 459,
                                height: 79,
                                layoutPositioning: "AUTO",
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "FIXED",
                                constraints: { horizontal: "MIN", vertical: "MIN" }
                            },
                        })
                    ]),
                ]),

                // Footer
                createFrame("Footer", {
                    layoutMode: "HORIZONTAL",
                    primaryAxisAlignItems: "SPACE_BETWEEN",
                    counterAxisAlignItems: "CENTER",
                    layoutSizingHorizontal: "FILL",
                    layoutSizingVertical: "HUG",
                    itemSpacing: 20,
                    fills: []
                }, [
                    // Platform
                    createFrame("Platform Name", {
                        layoutMode: "HORIZONTAL",
                        itemSpacing: 8,
                        counterAxisAlignItems: "CENTER",
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG",
                        fills: []
                    }, [
                        {
                            type: "COMPONENT",
                            name: "Platform Icon",
                            component: Lucide_settings,
                            props: { width: 18, color: platformTextColor, strokeWeight: 1.5 },
                            layoutProps: {
                                width: 18, height: 18,
                                parentIsAutoLayout: true
                            }
                        },
                        createText("Platform Name Text", platformName, 12, "Medium", platformTextColor, {
                            font: { family: "Inter", style: "Medium" }
                        })
                    ]),

                    // Trend Pill
                    createFrame("Trend Pill", {
                        layoutMode: "HORIZONTAL",
                        itemSpacing: 4,
                        paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12,
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
                            component: trendDirection === 'up' ? Lucide_arrow_up : trendDirection === 'down' ? Lucide_arrow_down : Lucide_minus,
                            props: { width: 14, color: trendColor, strokeWeight: 3.5 },
                            layoutProps: {
                                width: 14, height: 14,
                                parentIsAutoLayout: true
                            }
                        },
                        createText("Trend %", trendValue, 13, "Bold", trendColor, {
                            font: { family: "Inter", style: "Bold" }
                        }),
                        createText("Trend Abs", trendDirection === 'up' ? "(+8ms)" : trendDirection === 'down' ? "(-8ms)" : "((0ms))", 13, "Medium", platformTextColor, {
                            font: { family: "Inter", style: "Medium" }
                        })
                    ])
                ])
            ]
        };

        const root = await this.renderDefinition(structure);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

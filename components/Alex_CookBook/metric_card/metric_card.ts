import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector } from "../../ComponentHelpers";
import {
    Action___favourite,
    Action___favourite_active,
    Lucide_arrow_up,
    Lucide_arrow_down,
    Features___stats // Corrected from Action___stats
} from "../../index";

export interface MetricCardProps extends ComponentProps {
    label?: string; // e.g. "Active Users"
    value?: string; // e.g. "436"
    period?: string; // e.g. "Month to Date"
    trend?: string; // e.g. "12%"
    trendValue?: string; // e.g. "(150)"
    trendDirection?: "up" | "down" | "neutral";
    isFavorite?: boolean;
    platformName?: string; // e.g. "Google Analytics 4"
    platformIcon?: any;
    sparklineData?: number[]; // Array of 0-1 values
    color?: RGB; // Primary accent color (for trend/sparkline)

    // Layout Props
    width?: number | "fill";
    height?: number | "fill";

    // New Props for Compact Variant
    variant?: "standard" | "compact";
    chartType?: "line" | "bar" | "none"; // Defaults: standard->line, compact->none
    icon?: any; // Icon for the compact left slot
}

export class metric_card extends BaseComponent {
    async create(props: MetricCardProps): Promise<SceneNode> {
        const primaryColor = props.color || { r: 0.05, g: 0.75, b: 0.45 }; // Default Green
        const isUp = props.trendDirection === "up";
        const isDown = props.trendDirection === "down";

        // Define colors based on direction if not provided, or Use provided color
        const stateColor = isDown
            ? { r: 0.95, g: 0.25, b: 0.25 }
            : isUp
                ? { r: 0.1, g: 0.8, b: 0.5 }
                : { r: 0.2, g: 0.5, b: 1 };

        const chartColor = props.color || stateColor;

        // Sparkline Generation Data
        const data = props.sparklineData || [0.2, 0.4, 0.3, 0.6, 0.5, 0.8, 0.7];

        const renderLineChart = (targetHeight: number = 40, fillHeight: boolean = false) => {
            const width = 240; // Reference width for path generation
            const step = width / (data.length - 1);
            let areaData = `M 0 ${targetHeight} L 0 ${targetHeight - (data[0] * targetHeight)}`;

            for (let i = 1; i < data.length; i++) {
                const x = i * step;
                const y = targetHeight - (data[i] * targetHeight);
                areaData += ` L ${x} ${y}`;
            }
            areaData += ` L ${width} ${targetHeight} Z`;

            const r = Math.round(chartColor.r * 255);
            const g = Math.round(chartColor.g * 255);
            const b = Math.round(chartColor.b * 255);
            const colorStr = `rgb(${r},${g},${b})`;

            return createFrame("Chart_Container", {
                layoutMode: "NONE",
                fills: [],
                layoutProps: {
                    height: fillHeight ? undefined : targetHeight,
                    layoutAlign: "STRETCH",
                    layoutGrow: fillHeight ? 1 : 0,
                    parentIsAutoLayout: true,
                    counterAxisSizingMode: fillHeight ? "FIXED" : "FIXED"
                }
            }, [
                // Area Fill - Solid color as requested
                createVector("Chart_Area_Fill", `
<svg width="100%" height="100%" viewBox="0 0 ${width} ${targetHeight}" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${areaData}" fill="${colorStr}" fill-opacity="0.1"/>
</svg>`, {
                    layoutProps: { width: undefined, height: undefined, layoutAlign: "STRETCH", layoutPositioning: "AUTO", constraints: { horizontal: "STRETCH", vertical: "STRETCH" } }
                })
            ]);
        };

        // -- Render Helper: Bar Chart --
        const renderBarChart = (targetWidth: number = 60, targetHeight: number = 32) => {
            const barWidth = (targetWidth / data.length) - 2;
            return createFrame("Bar Chart Container", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 2,
                primaryAxisAlignItems: "SPACE_BETWEEN",
                counterAxisAlignItems: "MAX",
                layoutProps: {
                    width: targetWidth,
                    height: targetHeight,
                    layoutAlign: "STRETCH",
                    parentIsAutoLayout: true
                }
            }, data.map((d, i) => createFrame(`Bar ${i}`, {
                cornerRadius: 1.5,
                fills: [{ type: "SOLID", color: chartColor }],
                layoutProps: { width: barWidth, height: Math.max(d * targetHeight, 4), parentIsAutoLayout: true }
            })));
        };

        // --- COMPACT VARIANT ---
        if (props.variant === "compact") {
            const isFill = props.width === "fill";
            const structure: NodeDefinition = createFrame("metric_card_compact", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 16,
                paddingTop: 20,
                paddingRight: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                primaryAxisSizingMode: isFill ? "FIXED" : "AUTO",
                counterAxisSizingMode: "AUTO",
                fills: [{
                    type: "GRADIENT_LINEAR",
                    gradientStops: [
                        { position: 0, color: { r: 1, g: 1, b: 1, a: 1 } },
                        { position: 1, color: { r: 0.98, g: 0.99, b: 1, a: 0.95 } }
                    ],
                    gradientTransform: [[0, 1, 0], [-1, 0, 1]]
                } as any],
                strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.5 }],
                cornerRadius: 24,
                effects: [
                    { type: "BACKGROUND_BLUR", radius: 10, visible: true },
                    { type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.04 }, offset: { x: 0, y: 8 }, radius: 16, showShadowBehindNode: true }
                ],
                layoutProps: {
                    width: isFill ? undefined : (typeof props.width === 'number' ? props.width : undefined),
                    layoutAlign: isFill ? "STRETCH" : "INHERIT",
                    layoutGrow: isFill ? 1 : 0,
                    minWidth: 200
                }
            }, [
                // 1. Icon Container
                props.icon ? createFrame("Icon Container", {
                    cornerRadius: 16,
                    fills: [{ type: "SOLID", color: { ...chartColor, a: 0.1 } }],
                    layoutMode: "HORIZONTAL",
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    clipsContent: false, // Prevent icon cropping
                    layoutProps: { width: 44, height: 44 }
                }, [
                    {
                        type: "COMPONENT",
                        component: props.icon,
                        name: "Icon",
                        props: { width: 24, height: 24, color: chartColor, strokeWeight: 2 },
                        layoutProps: { width: 24, height: 24, parentIsAutoLayout: true }
                    }
                ]) : null,

                // 2. Text Stack
                createFrame("Text Stack", {
                    layoutMode: "VERTICAL",
                    itemSpacing: 2,
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "MIN",
                    fills: [],
                    layoutProps: { layoutGrow: 1, parentIsAutoLayout: true }
                }, [
                    createText("Label", props.label || "Label", 12, "SemiBold", { r: 0.5, g: 0.55, b: 0.65 }, {
                        font: { family: "Inter", style: "SemiBold" }
                    }),
                    createText("Value", props.value || "$0.00", 22, "Bold", { r: 0.1, g: 0.12, b: 0.2 }, {
                        font: { family: "Inter", style: "Bold" }
                    })
                ]),

                // 3. Chart
                props.chartType === "bar" ? renderBarChart(64, 32) :
                    props.chartType === "line" ? renderLineChart(32, false) : null

            ].filter(Boolean) as NodeDefinition[]);

            const root = await this.renderDefinition(structure);
            root.x = props.x ?? 0;
            root.y = props.y ?? 0;
            return root;
        }

        // --- STANDARD VARIANT ---
        const isFillWidth = props.width === "fill";
        const isFillHeight = props.height === "fill";

        const structure: NodeDefinition = createFrame("metric_card", {
            layoutMode: "VERTICAL",
            itemSpacing: 20,
            paddingTop: 32,
            paddingRight: 32,
            paddingBottom: 32,
            paddingLeft: 32,
            primaryAxisSizingMode: isFillHeight ? "FIXED" : "AUTO",
            counterAxisSizingMode: isFillWidth ? "FIXED" : "AUTO",
            fills: [{
                type: "GRADIENT_LINEAR",
                gradientStops: [
                    { position: 0, color: { r: 1, g: 1, b: 1, a: 1 } },
                    { position: 1, color: { r: 0.98, g: 0.99, b: 1, a: 0.96 } }
                ],
                gradientTransform: [[0, 1, 0], [-1, 0, 1]]
            } as any],
            strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 }],
            strokeWeight: 1,
            cornerRadius: 32,
            effects: [
                { type: "BACKGROUND_BLUR", radius: 24, visible: true },
                { type: "DROP_SHADOW", color: { r: 0.05, g: 0.1, b: 0.2, a: 0.06 }, offset: { x: 0, y: 16 }, radius: 32, showShadowBehindNode: true },
                { type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.02 }, offset: { x: 0, y: 4 }, radius: 4, showShadowBehindNode: true }
            ],
            layoutProps: {
                width: isFillWidth ? undefined : (typeof props.width === 'number' ? props.width : undefined),
                height: isFillHeight ? undefined : (typeof props.height === 'number' ? props.height : undefined),
                layoutAlign: "INHERIT", // Fix: Don't STRETCH by default (prevents vertical stretch in horizontal rows)
                layoutGrow: isFillWidth ? 1 : 0, // In horizontal parent, width fill is Grow
                minWidth: 280
            }
        }, [
            // Header
            createFrame("Header", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "SPACE_BETWEEN",
                layoutAlign: "STRETCH",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "AUTO", // Hug height
                counterAxisAlignItems: "CENTER",
                fills: []
            }, [
                createText("Period", props.period || "Month to Date", 12, "Medium", { r: 0.5, g: 0.55, b: 0.65 }, {
                    font: { family: "Inter", style: "Medium" }
                }),
                {
                    type: "COMPONENT",
                    component: props.isFavorite ? Action___favourite_active : Action___favourite,
                    name: "Star Icon",
                    props: {
                        width: 22, height: 22,
                        color: props.isFavorite ? { r: 0.98, g: 0.75, b: 0.15 } : { r: 0.82, g: 0.85, b: 0.9 }
                    },
                    layoutProps: { width: 22, height: 22, parentIsAutoLayout: true }
                }
            ]),

            // Content
            createFrame("Content", {
                layoutMode: "VERTICAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                layoutAlign: "STRETCH",
                itemSpacing: 16,
                fills: [],
                layoutProps: {
                    layoutGrow: isFillHeight ? 1 : 0,
                    parentIsAutoLayout: true
                }
            }, [
                createText("Label", props.label || "Active Users", 16, "SemiBold", { r: 0.45, g: 0.5, b: 0.6 }, {
                    font: { family: "Inter", style: "SemiBold" }
                }),
                createText("Value", props.value || "1,234", 48, "Bold", { r: 0.05, g: 0.08, b: 0.15 }, {
                    font: { family: "Inter", style: "Bold" },
                    letterSpacing: { unit: "PIXELS", value: -1.5 }
                }),

                // Sparkline
                createFrame("Chart_Area_Wrapper", {
                    layoutMode: "VERTICAL",
                    layoutAlign: "STRETCH",
                    layoutGrow: isFillHeight ? 1 : 0,
                    primaryAxisSizingMode: isFillHeight ? "FIXED" : "AUTO",
                    counterAxisSizingMode: "FIXED",
                    fills: [],
                    clipsContent: false
                }, [
                    renderLineChart(64, isFillHeight)
                ]),

                // Trend Pill
                createFrame("Trend Pill", {
                    layoutMode: "HORIZONTAL",
                    itemSpacing: 6,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 12,
                    paddingRight: 12,
                    cornerRadius: 100,
                    fills: [{ type: "SOLID", color: { ...stateColor, a: 0.1 } } as any],
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO", // Hug height
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    layoutProps: { parentIsAutoLayout: true }
                }, [
                    {
                        type: "FRAME",
                        name: "Trend Icon Wrapper",
                        props: {
                            layoutMode: "HORIZONTAL",
                            primaryAxisAlignItems: "CENTER",
                            counterAxisAlignItems: "CENTER",
                            itemSpacing: 0,
                            fills: []
                        },
                        layoutProps: { width: 14, height: 14, parentIsAutoLayout: true },
                        children: [
                            {
                                type: "COMPONENT",
                                name: "Trend Icon",
                                component: isDown ? Lucide_arrow_down : Lucide_arrow_up,
                                props: { width: 14, height: 14, color: stateColor, strokeWeight: 4 },
                                layoutProps: { width: 14, height: 14, parentIsAutoLayout: true }
                            }
                        ]
                    },
                    createText("Trend %", props.trend || "10%", 13, "Bold", stateColor, {
                        font: { family: "Inter", style: "Bold" }
                    }),
                    props.trendValue ? createText("Trend Abs", `(${props.trendValue})`, 13, "Medium", { r: 0.55, g: 0.6, b: 0.7 }, {
                        font: { family: "Inter", style: "Medium" }
                    }) : null
                ].filter(Boolean) as NodeDefinition[])
            ]),

            // Footer
            createFrame("Footer", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "MIN",
                counterAxisAlignItems: "CENTER",
                itemSpacing: 10,
                layoutAlign: "STRETCH",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "AUTO", // Hug height
                fills: [],
                layoutProps: { parentIsAutoLayout: true }
            }, [
                {
                    type: "COMPONENT",
                    component: props.platformIcon || Features___stats,
                    name: "Platform Icon",
                    props: {
                        width: 18, height: 18,
                        color: props.platformName?.includes("Instagram") ? { r: 0.85, g: 0.25, b: 0.55 } :
                            props.platformName?.includes("Facebook") ? { r: 0.25, g: 0.45, b: 0.85 } :
                                { r: 0.98, g: 0.55, b: 0.05 }
                    },
                    layoutProps: { width: 18, height: 18, parentIsAutoLayout: true }
                },
                createText("Platform Name", props.platformName || "Google Analytics 4", 12, "Medium", { r: 0.55, g: 0.6, b: 0.7 }, {
                    font: { family: "Inter", style: "Medium" }
                })
            ])
        ]);

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

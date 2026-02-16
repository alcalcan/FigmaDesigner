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
        // Reference uses Green for up, Red for down, Blue for neutral/info
        const stateColor = isDown
            ? { r: 0.95, g: 0.25, b: 0.25 }
            : isUp
                ? { r: 0.1, g: 0.8, b: 0.5 }
                : { r: 0.2, g: 0.5, b: 1 };

        const chartColor = props.color || stateColor;

        // Sparkline Generation Data
        const data = props.sparklineData || [0.2, 0.4, 0.3, 0.6, 0.5, 0.8, 0.7];
        const sparkWidth = props.variant === "compact" ? 60 : 140;
        const sparkHeight = props.variant === "compact" ? 30 : 40;

        // -- Render Helper: Line Chart --
        const renderLineChart = () => {
            const step = sparkWidth / (data.length - 1);
            let pathData = `M 0 ${sparkHeight - (data[0] * sparkHeight)}`;
            for (let i = 1; i < data.length; i++) {
                pathData += ` L ${i * step} ${sparkHeight - (data[i] * sparkHeight)}`;
            }
            return createFrame("Sparkline Container", {
                layoutMode: "NONE",
                fills: [],
                layoutProps: { width: sparkWidth, height: sparkHeight } // Correctly passed to layoutProps
            }, [
                createVector("Sparkline Path", `<svg width="${sparkWidth}" height="${sparkHeight}" viewBox="0 0 ${sparkWidth} ${sparkHeight}" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${pathData}" stroke="rgb(${Math.round(chartColor.r * 255)},${Math.round(chartColor.g * 255)},${Math.round(chartColor.b * 255)})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, {
                    layoutProps: { width: sparkWidth, height: sparkHeight, layoutPositioning: "ABSOLUTE", parentIsAutoLayout: true }
                })
            ]);
        };

        // -- Render Helper: Bar Chart --
        const renderBarChart = () => {
            const barWidth = (sparkWidth / data.length) - 2;
            return createFrame("Bar Chart Container", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 2,
                primaryAxisAlignItems: "SPACE_BETWEEN", // Spread bars evenly
                counterAxisAlignItems: "MAX", // Align bottom
                layoutProps: { width: sparkWidth, height: sparkHeight } // Fixed size container
            }, data.map((d, i) => createFrame(`Bar ${i}`, {
                cornerRadius: 2,
                fills: [{ type: "SOLID", color: chartColor }],
                layoutProps: { width: barWidth, height: Math.max(d * sparkHeight, 4), parentIsAutoLayout: true } // Min height 4px
            })));
        };

        // --- COMPACT VARIANT ---
        if (props.variant === "compact") {
            const structure: NodeDefinition = createFrame("metric_card_compact", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 16,
                paddingTop: 16,
                paddingRight: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                cornerRadius: 16,
                effects: [{
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.05 },
                    offset: { x: 0, y: 4 },
                    radius: 12,
                    showShadowBehindNode: true
                }],
                layoutProps: { minWidth: 240 } // Minimum width for stability
            }, [
                // 1. Icon (Optional)
                props.icon ? createFrame("Icon Container", {
                    width: 48, height: 48,
                    cornerRadius: 24,
                    fills: [{ type: "SOLID", color: { ...chartColor, a: 0.1 } }],
                    layoutMode: "HORIZONTAL",
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    layoutProps: { width: 48, height: 48 }
                }, [
                    {
                        type: "COMPONENT",
                        component: props.icon,
                        name: "Icon",
                        props: { width: 24, height: 24, color: chartColor },
                        layoutProps: { width: 24, height: 24, parentIsAutoLayout: true }
                    }
                ]) : null,

                // 2. Text Stack
                createFrame("Text Stack", {
                    layoutMode: "VERTICAL",
                    itemSpacing: 4,
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "MIN", // Left aligned
                    layoutGrow: 1,
                    fills: []
                }, [
                    createText("Label", props.label || "Label", 12, "Regular", { r: 0.6, g: 0.6, b: 0.7 }, {
                        font: { family: "Inter", style: "Regular" }
                    }),
                    createText("Value", props.value || "$0.00", 20, "Bold", { r: 0.1, g: 0.1, b: 0.2 }, {
                        font: { family: "Inter", style: "Bold" }
                    })
                ]),

                // 3. Chart (Optional)
                props.chartType === "bar" ? renderBarChart() :
                    props.chartType === "line" ? renderLineChart() : null

            ].filter(Boolean) as NodeDefinition[]);

            const root = await this.renderDefinition(structure);
            root.x = props.x ?? 0;
            root.y = props.y ?? 0;
            return root;
        }

        // --- STANDARD VARIANT (Default) ---
        const structure: NodeDefinition = createFrame("metric_card", {
            layoutMode: "VERTICAL",
            itemSpacing: 12,
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            primaryAxisSizingMode: "FIXED",
            counterAxisSizingMode: "FIXED",
            fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            strokes: [], // Clean borderless look or very subtle
            effects: [
                {
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.05 },
                    offset: { x: 0, y: 2 },
                    radius: 8,
                    showShadowBehindNode: true
                }
            ],
            cornerRadius: 12, // Slightly tighter radius per reference
            layoutProps: { width: 280, height: 220, layoutAlign: "STRETCH" } // Fixed size card
        }, [
            // --- HEADER: Period + Favorite ---
            createFrame("Header", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "SPACE_BETWEEN",
                layoutAlign: "STRETCH",
                counterAxisAlignItems: "CENTER",
                fills: []
            }, [
                createText("Period", props.period || "Month to Date", 10, "Regular", { r: 0.6, g: 0.6, b: 0.6 }, {
                    font: { family: "Inter", style: "Regular" }
                }),
                {
                    type: "COMPONENT",
                    component: props.isFavorite ? Action___favourite_active : Action___favourite,
                    name: "Star Icon",
                    props: {
                        width: 16,
                        height: 16,
                        color: props.isFavorite ? { r: 0.98, g: 0.8, b: 0.2 } : { r: 0.8, g: 0.8, b: 0.8 }
                    },
                    layoutProps: { width: 16, height: 16, parentIsAutoLayout: true }
                }
            ]),

            // --- CONTENT: Label, Value, Sparkline, Trend ---
            createFrame("Content", {
                layoutMode: "VERTICAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER", // Center everything
                layoutAlign: "STRETCH", // Width
                layoutGrow: 1, // Height (Take remaining space)
                itemSpacing: 8,
                fills: []
            }, [
                // Label
                createText("Label", props.label || "Active Users", 14, "Bold", { r: 0.2, g: 0.2, b: 0.2 }, {
                    font: { family: "Inter", style: "Bold" }
                }),
                // Value
                createText("Value", props.value || "1,234", 36, "Bold", { r: 0.1, g: 0.1, b: 0.1 }, {
                    font: { family: "Inter", style: "Bold" },
                    letterSpacing: { unit: "PIXELS", value: -1 }
                }),
                // Sparkline
                renderLineChart(), // Always render line chart for standard layout

                // Trend Pill
                createFrame("Trend Pill", {
                    layoutMode: "HORIZONTAL",
                    itemSpacing: 4,
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingLeft: 8,
                    paddingRight: 8,
                    cornerRadius: 100,
                    fills: [{ type: "SOLID", color: { ...stateColor, a: 0.1 } } as any],
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER"
                }, [
                    {
                        type: "COMPONENT",
                        component: isDown ? Lucide_arrow_down : Lucide_arrow_up,
                        props: { width: 10, height: 10, color: stateColor, strokeWeight: 3 },
                        layoutProps: { width: 10, height: 10, parentIsAutoLayout: true }
                    },
                    createText("Trend %", props.trend || "10%", 11, "Bold", stateColor, {
                        font: { family: "Inter", style: "Bold" }
                    }),
                    props.trendValue ? createText("Trend Abs", `(${props.trendValue})`, 11, "Regular", { r: 0.6, g: 0.6, b: 0.6 }, {
                        font: { family: "Inter", style: "Regular" }
                    }) : null
                ].filter(Boolean) as NodeDefinition[])
            ]),

            // --- FOOTER: Platform ---
            createFrame("Footer", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "MIN",
                counterAxisAlignItems: "CENTER",
                itemSpacing: 6,
                layoutAlign: "STRETCH",
                fills: []
            }, [
                {
                    type: "COMPONENT",
                    component: props.platformIcon || Features___stats,
                    name: "Platform Icon",
                    props: {
                        width: 12,
                        height: 12,
                        color: props.platformName?.includes("Instagram") ? { r: 0.8, g: 0.2, b: 0.5 } :
                            props.platformName?.includes("Facebook") ? { r: 0.2, g: 0.4, b: 0.8 } :
                                { r: 0.95, g: 0.5, b: 0 } // Default Orange (GA4)
                    },
                    layoutProps: { width: 12, height: 12, parentIsAutoLayout: true }
                },
                createText("Platform Name", props.platformName || "Google Analytics 4", 10, "Regular", { r: 0.6, g: 0.6, b: 0.6 }, {
                    font: { family: "Inter", style: "Regular" }
                })
            ])
        ]);

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

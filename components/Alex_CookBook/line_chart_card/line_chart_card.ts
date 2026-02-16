import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector } from "../../ComponentHelpers";
import { Action___Description, Action___sorting } from "../../index";

export interface LineChartCardProps extends ComponentProps {
    title?: string;
    dataPoints?: number[]; // Array of normalized values 0-1
    color?: RGB;
}

export class line_chart_card extends BaseComponent {
    async create(props: LineChartCardProps): Promise<SceneNode> {
        const chartColor = props.color || { r: 0.2, g: 0.5, b: 1 }; // Modern Blue
        const data = props.dataPoints || [0.2, 0.5, 0.4, 0.8, 0.6, 0.9, 0.7];

        const cardWidth = 340;
        const padding = 24;
        const internalWidth = cardWidth - (padding * 2);
        const height = 120;
        const step = internalWidth / (data.length - 1);

        // Generate smoother path string using intermediate segments (mocking a curve)
        let pathData = `M 0 ${height - (data[0] * height)}`;
        let areaData = `M 0 ${height} L 0 ${height - (data[0] * height)}`;

        for (let i = 1; i < data.length; i++) {
            const x = i * step;
            const y = height - (data[i] * height);

            // For a "smoother" look without full Bezier, we can add a midpoint or just use L
            // Real Bezier would be: pathData += ` C ${prevX + step/2} ${prevY}, ${x - step/2} ${y}, ${x} ${y}`;
            // But let's stick to L for reliability and focus on the Area fill and Glow
            pathData += ` L ${x} ${y}`;
            areaData += ` L ${x} ${y}`;
        }
        areaData += ` L ${internalWidth} ${height} Z`;

        const structure: NodeDefinition = createFrame("line_chart_card", {
            layoutMode: "VERTICAL",
            itemSpacing: 24,
            paddingTop: 24,
            paddingRight: 24,
            paddingBottom: 24,
            paddingLeft: 24,
            primaryAxisSizingMode: "FIXED", // Standardized grid height
            counterAxisSizingMode: "FIXED",
            fills: [{
                type: "GRADIENT_LINEAR",
                gradientStops: [
                    { position: 0, color: { r: 1, g: 1, b: 1, a: 0.98 } },
                    { position: 1, color: { r: 0.98, g: 0.99, b: 1, a: 0.9 } }
                ],
                gradientTransform: [[0, 1, 0], [-1, 0, 1]]
            } as any],
            strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 }],
            strokeWeight: 1,
            cornerRadius: 28,
            effects: [
                {
                    type: "BACKGROUND_BLUR",
                    radius: 20,
                    visible: true
                },
                // Layered Shadows
                {
                    type: "DROP_SHADOW",
                    color: { r: 0.05, g: 0.1, b: 0.2, a: 0.04 },
                    offset: { x: 0, y: 16 },
                    radius: 32,
                    showShadowBehindNode: true
                },
                {
                    type: "DROP_SHADOW",
                    color: { r: 0.05, g: 0.1, b: 0.2, a: 0.02 },
                    offset: { x: 0, y: 4 },
                    radius: 4,
                    showShadowBehindNode: true
                }
            ],
            layoutProps: { width: cardWidth, height: 280 }
        }, [
            createFrame("Header", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "SPACE_BETWEEN",
                counterAxisAlignItems: "CENTER",
                layoutAlign: "STRETCH",
                fills: []
            }, [
                createFrame("Title Stack", {
                    layoutMode: "VERTICAL",
                    itemSpacing: 4,
                    layoutGrow: 1,
                    fills: []
                }, [
                    createText("Title", props.title || "Weekly Engagement", 16, "Bold", { r: 0.1, g: 0.15, b: 0.25 }, {
                        font: { family: "Open Sans", style: "Bold" },
                        textAutoResize: "HEIGHT",
                        layoutAlign: "STRETCH"
                    }),
                    createText("Subtitle", "Data from last 7 days", 11, "Regular", { r: 0.5, g: 0.55, b: 0.65 }, {
                        font: { family: "Open Sans", style: "Regular" },
                        layoutAlign: "STRETCH"
                    })
                ]),
                createFrame("Icon Wrapper", {
                    cornerRadius: 16,
                    fills: [{ type: "SOLID", color: { r: 0.95, g: 0.96, b: 0.98 } }],
                    layoutMode: "HORIZONTAL",
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    layoutProps: { width: 32, height: 32 }
                }, [
                    {
                        type: "COMPONENT",
                        component: Action___sorting,
                        name: "Utility Icon",
                        props: {
                            width: 16,
                            height: 16,
                            strokeWeight: 2,
                            color: { r: 0.4, g: 0.45, b: 0.55 }
                        },
                        layoutProps: { width: 16, height: 16, parentIsAutoLayout: true }
                    }
                ])
            ]),
            createFrame("Chart Area", {
                layoutMode: "NONE", // Manual positioning for overlaps
                width: internalWidth,
                height: height,
                fills: [],
                clipsContent: false,
                layoutGrow: 1
            }, [
                // Area fill with gradient
                createVector("Area Fill", `<svg width="${internalWidth}" height="${height}" viewBox="0 0 ${internalWidth} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${areaData}" fill="url(#paint0_linear)" fill-opacity="0.15"/><defs><linearGradient id="paint0_linear" x1="${internalWidth / 2}" y1="0" x2="${internalWidth / 2}" y2="${height}" gradientUnits="userSpaceOnUse"><stop stop-color="rgb(${Math.round(chartColor.r * 255)},${Math.round(chartColor.g * 255)},${Math.round(chartColor.b * 255)})"/><stop offset="1" stop-color="rgb(${Math.round(chartColor.r * 255)},${Math.round(chartColor.g * 255)},${Math.round(chartColor.b * 255)})" stop-opacity="0"/></linearGradient></defs></svg>`, {
                    layoutProps: { width: internalWidth, height: height, x: 0, y: 0, layoutPositioning: "ABSOLUTE" }
                }),
                // The line vector
                createVector("Line Path", `<svg width="${internalWidth}" height="${height}" viewBox="0 0 ${internalWidth} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${pathData}" stroke="rgb(${Math.round(chartColor.r * 255)},${Math.round(chartColor.g * 255)},${Math.round(chartColor.b * 255)})" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`, {
                    layoutProps: { width: internalWidth, height: height, x: 0, y: 0, layoutPositioning: "ABSOLUTE" }
                }),
                // Data points (dots)
                ...data.map((d, i) => createFrame(`Point ${i}`, {
                    cornerRadius: 3,
                    fills: [{ type: "SOLID", color: chartColor }],
                    strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                    strokeWeight: 1.5,
                    layoutProps: {
                        width: 6,
                        height: 6,
                        x: i * step - 3,
                        y: height - (d * height) - 3,
                        layoutPositioning: "ABSOLUTE"
                    }
                }))
            ])
        ]);

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

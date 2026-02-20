import { ComponentProps } from "../../components/BaseComponent";
import { metric_card_design1 as metric_card_design1_Alex_CookBook } from "../../components/Alex_CookBook/metric_card_design1/metric_card_design1";
import { BaseDemoPage } from "./BaseDemoPage";

export class MetricCardsDesign1Demo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Metric Cards Design 1 Showcase", 1200);

        await this.addHeader(
            root,
            "Metric Cards - Modern Glassmorphic",
            "Data visualization patterns with glassmorphism and modern aesthetics."
        );

        const design1 = new metric_card_design1_Alex_CookBook();

        // --- ORIGINAL VARIATIONS ---
        await this.addSection(root, "Original Variations", "Default component behavior using fixed heights.", async (container) => {
            const row = this.createRow(container);

            await this.createCardWithCaption(design1, row, {
                title: "Original Size 1",
                value: "491 x 304",
                period: "Component Default",
                trendDirection: "up",
                trendValue: "Stable",
                height: "hug",
                gap: 24
            }, "Default component behavior (Gap 24)");

            await this.createCardWithCaption(design1, row, {
                title: "Original Size 2",
                value: "491 x 304",
                period: "Component Default",
                trendDirection: "neutral",
                trendValue: "Stable",
                height: "hug",
                gap: 24,
                gradientStart: { r: 0.02, g: 0.08, b: 0.25 }, // Dark Blue
                gradientEnd: { r: 0.15, g: 0.35, b: 0.8 }    // Rich Blue
            }, "Custom Blue gradient (Gap 24)");
        });


        // --- CHART CUSTOMIZATION ---
        await this.addSection(root, "Chart Customization", "Varying chart heights and visibility.", async (container) => {
            const row = this.createRow(container);

            // Tall Chart
            await this.createCardWithCaption(design1, row, {
                title: "Peak Loading",
                value: "92%",
                period: "Worker C",
                trendDirection: "up",
                trendValue: "Critical",
                width: "fill",
                height: "hug",
                chartHeight: 120, // Tall chart
                gap: 24,
                dataPoints: [0.1, 0.3, 0.2, 0.9, 0.8, 1.0, 0.95],
                gradientStart: { r: 0.8, g: 0.1, b: 0.1 },
                gradientEnd: { r: 1, g: 0.4, b: 0.1 }
            }, "Tall Chart (Height: 120px)");

            // Short Chart
            await this.createCardWithCaption(design1, row, {
                title: "API Latency",
                value: "14ms",
                period: "Edge 2",
                trendDirection: "down",
                trendValue: "Stable",
                width: "fill",
                height: "hug",
                chartHeight: 30, // Short chart
                gap: 24,
                dataPoints: [0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2],
                gradientStart: { r: 0.1, g: 0.6, b: 0.8 },
                gradientEnd: { r: 0.4, g: 0.9, b: 1 }
            }, "Short Chart (Height: 30px)");

            // No Chart
            await this.createCardWithCaption(design1, row, {
                title: "License Status",
                value: "Active",
                period: "Subscription",
                trendDirection: "neutral",
                trendValue: "Valid",
                width: "fill",
                height: "hug",
                showChart: false, // Hidden chart
                gap: 24,
                gradientStart: { r: 0.5, g: 0.5, b: 0.5 },
                gradientEnd: { r: 0.8, g: 0.8, b: 0.8 }
            }, "No Chart (Hidden)");
        });

        // --- ADVANCED CHART STYLES ---
        await this.addSection(root, "Advanced Chart Styles", "Exploring opacity, fills, and shadows.", async (container) => {
            const row = this.createRow(container);

            // Solid Fill, No Shadow
            await this.createCardWithCaption(design1, row, {
                title: "Disk Usage",
                value: "84%",
                period: "Storage A",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: "hug",
                chartFillType: "solid",
                showChartShadow: false,
                gradientStart: { r: 1, g: 0.6, b: 0.1 }, // Orange-ish
                gap: 24,
                dataPoints: [0.2, 0.4, 0.5, 0.7, 0.8, 0.82, 0.84]
            }, "Solid Fill, No Shadow");

            // Transparent Gradient - Refined (Blue, No Shadow)
            await this.createCardWithCaption(design1, row, {
                title: "Network Out",
                value: "256Mbps",
                period: "Edge 3",
                trendDirection: "down",
                trendValue: "Low",
                width: "fill",
                height: "hug",
                chartOpacity: 0.3,
                showChartShadow: false,
                gap: 24,
                gradientStart: { r: 0.1, g: 0.4, b: 0.9 }, // Deep Blue
                gradientEnd: { r: 0.4, g: 0.8, b: 1 }
            }, "Transparent Blue, No Shadow");

            // Fading Effect - Refined (No Shadow)
            await this.createCardWithCaption(design1, row, {
                title: "User Growth",
                value: "1.2k",
                period: "This Week",
                trendDirection: "up",
                trendValue: "+15%",
                width: "fill",
                height: "hug",
                chartGradientOpacityStart: 0.05,
                chartGradientOpacityEnd: 0.9,
                showChartShadow: false,
                gap: 24,
                gradientStart: { r: 0.4, g: 0.1, b: 0.9 },
                gradientEnd: { r: 0.6, g: 0.4, b: 1 },
                dataPoints: [0.1, 0.2, 0.4, 0.5, 0.8, 0.9, 1.0]
            }, "Gradient Fading, No Shadow");
        });

        // --- FLAT VARIATIONS ---
        await this.addSection(root, "Flat Variations", "Clean styles without shadows or glassmorphism.", async (container) => {
            const row = this.createRow(container);

            // 1. Gradient in Graph
            await this.createCardWithCaption(design1, row, {
                title: "Response Rate",
                value: "94.2%",
                period: "All Systems",
                trendDirection: "up",
                trendValue: "Healthy",
                width: "fill",
                height: "hug",
                cornerRadius: 32, // Proper rounding (16+16)
                cardShadow: "none",
                showChartShadow: false,
                chartFillType: "gradient", // Gradient in graph
                cardFillType: "solid",
                showFooter: false, // Take out footer
                strokeWeight: 1,
                strokeColor: { r: 0.92, g: 0.94, b: 0.96 }, // Light darker border
                gap: 24,
                gradientStart: { r: 0, g: 0.6, b: 1 },
                gradientEnd: { r: 0.4, g: 0.8, b: 1 }
            }, "Flat Style (Gradient Graph)");

            // 2. Border on Card
            await this.createCardWithCaption(design1, row, {
                title: "Memory Usage",
                value: "1.2GB",
                period: "Cluster A",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: "hug",
                cornerRadius: 8, // Low roundness
                chartCornerRadius: 8, // Equivalent graph roundness
                cardShadow: "none",
                showChartShadow: false,
                chartFillType: "solid",
                cardFillType: "solid",
                strokeWeight: 1,
                strokeColor: { r: 0.92, g: 0.94, b: 0.96 }, // Consistent light border
                gap: 24,
                gradientStart: { r: 0.5, g: 0.3, b: 0.9 }
            }, "Flat Style (Outline Border)");

            // 3. Small Shadow
            await this.createCardWithCaption(design1, row, {
                title: "Active Users",
                value: "2,400",
                period: "Real-time",
                trendDirection: "up",
                trendValue: "+120",
                width: "fill",
                height: "hug",
                cornerRadius: 32, // Proper rounding
                cardShadow: "small", // Small shadow
                showChartShadow: false,
                chartFillType: "solid",
                cardFillType: "solid",
                strokeWeight: 1,
                strokeColor: { r: 0.92, g: 0.94, b: 0.96 }, // Consistent light border
                gap: 24,
                gradientStart: { r: 1, g: 0.5, b: 0 }
            }, "Flat Style (Small Shadow)");
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async createCardWithCaption(design: metric_card_design1_Alex_CookBook, row: FrameNode, props: any, caption: string): Promise<FrameNode> {
        const container = figma.createFrame();
        container.name = `Variant: ${caption}`;
        container.layoutMode = "VERTICAL";
        container.itemSpacing = 12;
        container.fills = [];
        container.clipsContent = false;

        // Append to row first so layout props below are valid
        row.appendChild(container);

        // Ensure container doesn't default to 100px
        container.resize(row.width, 100);

        const card = await design.create({ ...props, height: "hug" });
        container.appendChild(card);

        // Mimic sizing: if card is set to fill (width), container must grow in the row
        if (props.width === "fill") {
            (container as any).layoutGrow = 1;

            // Inside the vertical container, card should stretch to fill width
            if ('layoutAlign' in card) {
                (card as any).layoutAlign = "STRETCH";
            }
        } else {
            // For fixed width (like the original 491px), hug the card
            container.counterAxisSizingMode = "AUTO";
        }

        if ("layoutSizingVertical" in container) {
            (container as any).layoutSizingVertical = "HUG";
        }
        container.primaryAxisSizingMode = "AUTO";

        if ("layoutSizingVertical" in card) {
            (card as any).layoutSizingVertical = "HUG";
        }
        if ("primaryAxisSizingMode" in card && (card as any).layoutMode === "VERTICAL") {
            (card as any).primaryAxisSizingMode = "AUTO";
        }

        const text = figma.createText();
        text.fontName = { family: "Inter", style: "Medium" };
        text.characters = caption;
        text.fontSize = 12;
        text.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.5, b: 0.6 } }];

        container.appendChild(text);
        // Set layoutAlign after appending to ensure it's a child of an AL frame
        text.layoutAlign = "STRETCH";
        text.textAlignHorizontal = "CENTER";

        return container;
    }
}

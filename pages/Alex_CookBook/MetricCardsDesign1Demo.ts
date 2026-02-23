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

        const root = await this.initPage("Metric Cards Design 1 Showcase", 1440);

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
                gap: 24
            }, "1. Default component behavior (Gap 24)");

            await this.createCardWithCaption(design1, row, {
                title: "Original Size 2",
                value: "491 x 304",
                period: "Component Default",
                trendDirection: "neutral",
                trendValue: "Stable",
                gap: 24,
                gradientStart: { r: 0.02, g: 0.08, b: 0.25 }, // Dark Blue
                gradientEnd: { r: 0.15, g: 0.35, b: 0.8 }    // Rich Blue
            }, "2. Custom Blue gradient (Gap 24)");
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
            }, "3. Tall Chart (Height: 120px)");

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
            }, "4. Short Chart (Height: 30px)");

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
            }, "5. No Chart (Hidden)");
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
            }, "6. Solid Fill, No Shadow");

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
            }, "7. Transparent Blue, No Shadow");

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
            }, "8. Gradient Fading, No Shadow");
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
            }, "9. Flat Style (Gradient Graph)");

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
            }, "10. Flat Style (Outline Border)");

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
            }, "11. Flat Style (Small Shadow)");
        });

        // --- HORIZONTAL VARIATIONS ---
        await this.addSection(root, "Horizontal Layout", "Text on the left, chart element on the right.", async (container) => {
            const row = this.createRow(container);

            // 1. Horizontal Default (Area Chart)
            await this.createCardWithCaption(design1, row, {
                title: "Server Latency",
                value: "42ms",
                period: "Global Avg.",
                trendDirection: "down",
                trendValue: "Decreasing",
                width: "fill",
                height: 260, // Fixed height to show fill behaviors
                layoutDirection: "horizontal",
                chartWidth: 160,
                chartHeight: "fill", // Map height fill
                chartType: "area",
                gap: 24,
                gradientStart: { r: 0.1, g: 0.7, b: 0.4 }, // Greenish
                gradientEnd: { r: 0.2, g: 0.9, b: 0.6 }
            }, "12. Horizontal Layout (Standard)");

            // 2. Horizontal Compact
            await this.createCardWithCaption(design1, row, {
                title: "Active Connections",
                value: "12.4k",
                period: "Real-time",
                trendDirection: "up",
                trendValue: "+4%",
                variant: "compact", // Compact horizontal
                width: "fill",
                height: 200, // Fixed height to show fill behaviors
                layoutDirection: "horizontal",
                chartWidth: 120, // Smaller chart for compact
                chartHeight: "fill", // Map height fill
                gap: 12, // Fixed vertical gap for the card
                footerGap: "auto", // Spaced-out footer
                gradientStart: { r: 0.8, g: 0.1, b: 0.1 },
                gradientEnd: { r: 1, g: 0.4, b: 0.1 }
            }, "13. Horizontal Layout (Compact)");

            // 3. Horizontal No Chart
            await this.createCardWithCaption(design1, row, {
                title: "Node Status",
                value: "Online",
                period: "Cluster B",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 200,
                layoutDirection: "horizontal",
                showChart: false,
                gap: 24
            }, "14. Horizontal Layout (No Chart)");

            const row2 = this.createRow(container);

            // 4. Horizontal Line Chart
            await this.createCardWithCaption(design1, row2, {
                title: "CPU Usage",
                value: "68%",
                period: "Current Server",
                trendDirection: "up",
                trendValue: "+12%",
                width: "fill",
                height: 260,
                layoutDirection: "horizontal",
                chartWidth: 160,
                chartHeight: "fill",
                chartType: "line", // Using line chart
                gap: 24,
                gradientStart: { r: 0.4, g: 0.1, b: 0.9 }, // Purple
                gradientEnd: { r: 0.6, g: 0.4, b: 1.0 }
            }, "15. Horizontal Layout (Line Chart)");

            // 5. Horizontal Circle Chart
            await this.createCardWithCaption(design1, row2, {
                title: "Memory Used",
                value: "75%",
                period: "Database Cluster",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 200,
                layoutDirection: "horizontal",
                chartWidth: 100,
                chartType: "circle", // Circle donut chart
                dataPoints: [0.75], // 75% filled segment
                gap: 24,
                gradientStart: { r: 0.15, g: 0.45, b: 0.95 }, // Blue
                gradientEnd: { r: 0.35, g: 0.65, b: 1.0 }
            }, "16. Horizontal Layout (Circle)");
        });

        // --- HERO CIRCLE VARIANT ---
        await this.addSection(root, "Hero Circle Variant", "Large circle indicator side-by-side with content stack.", async (container) => {
            const row = this.createRow(container);

            await this.createCardWithCaption(design1, row, {
                title: "Database Cluster",
                value: "75%",
                period: "Memory Used",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 220,
                layoutDirection: "hero",
                chartType: "circle",
                dataPoints: [0.75],
                gap: 24,
                gradientStart: { r: 0.15, g: 0.45, b: 0.95 },
                gradientEnd: { r: 0.35, g: 0.65, b: 1.0 }
            }, "17. Hero Layout (Circle)");

            await this.createCardWithCaption(design1, row, {
                title: "API Performance",
                value: "98.2%",
                period: "Global Reliability",
                trendDirection: "up",
                trendValue: "Healthy",
                width: "fill",
                height: 220,
                layoutDirection: "hero",
                chartType: "circle",
                dataPoints: [0.982],
                gap: 24,
                gradientStart: { r: 0.05, g: 0.6, b: 0.3 },
                gradientEnd: { r: 0.2, g: 0.8, b: 0.5 }
            }, "18. Hero Layout (Circle - Green)");
        });

        await this.addSection(root, "Centered Hero Variant", "Percentage value inside circle with large prominent title.", async (container) => {
            const row = this.createRow(container);

            await this.createCardWithCaption(design1, row, {
                title: "Database Cluster",
                value: "75%",
                period: "Memory Used",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 220,
                layoutDirection: "hero-centered",
                chartType: "circle",
                dataPoints: [0.75],
                gap: 24,
                gradientStart: { r: 0.15, g: 0.45, b: 0.95 },
                gradientEnd: { r: 0.35, g: 0.65, b: 1.0 }
            }, "19. Hero Layout (Centered)");

            await this.createCardWithCaption(design1, row, {
                title: "API Reliability",
                value: "98%",
                period: "Global Performance",
                trendDirection: "up",
                trendValue: "Healthy",
                width: "fill",
                height: 220,
                layoutDirection: "hero-centered",
                chartType: "circle",
                dataPoints: [0.98],
                gap: 24,
                gradientStart: { r: 0.05, g: 0.6, b: 0.3 },
                gradientEnd: { r: 0.2, g: 0.8, b: 0.5 }
            }, "20. Hero Layout (Centered - Green)");

            await this.createCardWithCaption(design1, row, {
                title: "System Cache",
                value: "25%",
                period: "Hit Rate",
                trendDirection: "down",
                trendValue: "Critical",
                width: "fill",
                height: 220,
                layoutDirection: "hero-centered",
                chartType: "circle",
                dataPoints: [0.25],
                gap: 24,
                gradientStart: { r: 1.0, g: 0.2, b: 0.2 },
                gradientEnd: { r: 1.0, g: 0.5, b: 0.0 }
            }, "21. Hero Layout (Centered - Red)");
        });

        await this.addSection(root, "Side Indicator Variant", "Small 48px indicator placed on the right, providing a compact and balanced hero-style layout.", async (container) => {
            const row = this.createRow(container);

            await this.createCardWithCaption(design1, row, {
                title: "Database Cluster",
                value: "75%",
                period: "Memory Used",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 220,
                layoutDirection: "header-circle",
                chartType: "circle",
                dataPoints: [0.75],
                gap: 24,
                gradientStart: { r: 0.15, g: 0.45, b: 0.95 },
                gradientEnd: { r: 0.35, g: 0.65, b: 1.0 }
            }, "22. Side Indicator (Blue)");

            await this.createCardWithCaption(design1, row, {
                title: "API Performance",
                value: "98.2%",
                period: "Global Reliability",
                trendDirection: "up",
                trendValue: "Healthy",
                width: "fill",
                height: 220,
                layoutDirection: "header-circle",
                chartType: "circle",
                dataPoints: [0.982],
                gap: 24,
                gradientStart: { r: 0.05, g: 0.6, b: 0.3 },
                gradientEnd: { r: 0.2, g: 0.8, b: 0.5 }
            }, "23. Side Indicator (Green)");
        });

        await this.addSection(root, "Hero Triple Variant", "Three-column layout separating metadata, trend pill, and indicator.", async (container) => {
            const row = this.createRow(container);

            await this.createCardWithCaption(design1, row, {
                title: "Database Cluster",
                value: "75%",
                period: "Memory Used",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 220,
                layoutDirection: "hero-triple",
                chartType: "circle",
                dataPoints: [0.75],
                gap: 24,
                gradientStart: { r: 0.15, g: 0.45, b: 0.95 },
                gradientEnd: { r: 0.35, g: 0.65, b: 1.0 }
            }, "24. Hero Triple (Blue)");

            await this.createCardWithCaption(design1, row, {
                title: "API Performance",
                value: "98.2%",
                period: "Global Reliability",
                trendDirection: "up",
                trendValue: "Healthy",
                width: "fill",
                height: 220,
                layoutDirection: "hero-triple",
                chartType: "circle",
                dataPoints: [0.982],
                gap: 24,
                gradientStart: { r: 0.05, g: 0.6, b: 0.3 },
                gradientEnd: { r: 0.2, g: 0.8, b: 0.5 }
            }, "25. Hero Triple (Green)");
        });

        await this.addSection(root, "Icon Indicator Variants", "Solid gradient circle with white icons representing data types.", async (container) => {
            const row = this.createRow(container);

            await this.createCardWithCaption(design1, row, {
                title: "Database Cluster",
                value: "75%",
                period: "Global Health",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 140,
                layoutDirection: "header-circle",
                chartType: "icon",
                icon: "Lucide_server",
                gradientStart: { r: 0.15, g: 0.45, b: 0.95 },
                gradientEnd: { r: 0.35, g: 0.65, b: 1.0 }
            }, "26. Side Indicator with Icon");

            await this.createCardWithCaption(design1, row, {
                title: "API Performance",
                value: "98.2%",
                period: "Global Health",
                trendDirection: "up",
                trendValue: "Healthy",
                width: "fill",
                height: 220,
                layoutDirection: "hero-triple",
                chartType: "icon",
                icon: "Lucide_activity",
                gap: 24,
                gradientStart: { r: 0.05, g: 0.6, b: 0.3 },
                gradientEnd: { r: 0.2, g: 0.8, b: 0.5 }
            }, "27. Hero Triple with Icon");

            const secondRow = this.createRow(container);
            await this.createCardWithCaption(design1, secondRow, {
                title: "System Activity",
                value: "Optimal",
                period: "Network Performance",
                trendDirection: "up",
                trendValue: "Healthy",
                width: "fill",
                height: 320,
                layoutDirection: "hero-centered",
                chartType: "icon",
                icon: "Lucide_activity",
                iconStrokeWeight: 3.5,
                gradientStart: { r: 0.25, g: 0.25, b: 0.95 },
                gradientEnd: { r: 0.45, g: 0.45, b: 1.0 }
            }, "28. Activity Hero (Centered)");

            await this.createCardWithCaption(design1, secondRow, {
                title: "Server Clusters",
                value: "P3-092",
                period: "Global Instances",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 320,
                layoutDirection: "hero-centered",
                chartType: "icon",
                icon: "Lucide_server",
                iconStrokeWeight: 3.5,
                gradientStart: { r: 0.45, g: 0.15, b: 0.95 },
                gradientEnd: { r: 0.65, g: 0.35, b: 1.0 }
            }, "29. Server Hero (Centered)");

            await this.createCardWithCaption(design1, secondRow, {
                title: "Database Hub",
                value: "Syncing",
                period: "Regional Replicas",
                trendDirection: "up",
                trendValue: "12ms",
                width: "fill",
                height: 320,
                layoutDirection: "hero-centered",
                chartType: "icon",
                icon: "Lucide_database",
                iconStrokeWeight: 3.5,
                gradientStart: { r: 0.98, g: 0.25, b: 0.15 },
                gradientEnd: { r: 1.0, g: 0.45, b: 0.35 }
            }, "30. Database Hero (Centered)");
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

        // Ensure container doesn't default to 100px width; height is auto (HUG)
        container.resize(row.width, 100);

        // All variant wrappers should grow to fill available row width
        (container as any).layoutGrow = 1;

        // Force fill width and hug height behavior for all show-cased cards in the demo
        const cardProps = { ...props, width: "fill", height: "hug" };
        const card = await design.create(cardProps);
        container.appendChild(card);

        // Inside the vertical container, card should stretch to fill width
        if ('layoutAlign' in card) {
            (card as any).layoutAlign = "STRETCH";
        }

        if ("layoutSizingVertical" in container) {
            (container as any).layoutSizingVertical = "HUG";
        }
        container.primaryAxisSizingMode = "AUTO";

        // Only override the card to hug vertically if it's explicitly filling horizontal space 
        // to prevent large blank areas. If fixed size (default), leave it as-is.
        if (cardProps.width === "fill" || cardProps.height === "hug") {
            if ("layoutSizingVertical" in card) {
                (card as any).layoutSizingVertical = "HUG";
            }
            if ("primaryAxisSizingMode" in card && (card as any).layoutMode === "VERTICAL") {
                (card as any).primaryAxisSizingMode = "AUTO";
            }
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

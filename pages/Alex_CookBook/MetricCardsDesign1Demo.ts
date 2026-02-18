import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { metric_card_design1 as metric_card_design1_Alex_CookBook } from "../../components/Alex_CookBook/metric_card_design1/metric_card_design1";

export class MetricCardsDesign1Demo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = figma.createFrame();
        root.name = "Metric Cards Design 1 Showcase";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 48;
        root.paddingTop = 80;
        root.paddingLeft = 80;
        root.paddingRight = 80;
        root.paddingBottom = 80;
        root.counterAxisSizingMode = "FIXED";
        root.resize(1200, 100);
        root.primaryAxisSizingMode = "AUTO";
        root.clipsContent = false;
        root.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.99 } }];

        const design1 = new metric_card_design1_Alex_CookBook();

        // --- TITLE ---
        const title = figma.createText();
        title.characters = "Metric Cards - Modern Glassmorphic (Design 1)";
        title.fontSize = 32;
        title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        root.appendChild(title);

        // --- ORIGINAL VARIATIONS ---
        const originalGroup = this.createSection(root, "Original Variations");
        const originalRow = this.createRow();
        originalRow.layoutAlign = "STRETCH";

        originalRow.appendChild(await design1.create({
            title: "Original Size 1",
            value: "491 x 304",
            period: "Component Default",
            trendDirection: "up",
            trendValue: "Stable",
            height: "hug",
            gap: 24
        }));

        originalRow.appendChild(await design1.create({
            title: "Original Size 2",
            value: "491 x 304",
            period: "Component Default",
            trendDirection: "neutral",
            trendValue: "Stable",
            height: "hug",
            gap: 24,
            gradientStart: { r: 0.02, g: 0.08, b: 0.25 }, // Dark Blue
            gradientEnd: { r: 0.15, g: 0.35, b: 0.8 }    // Rich Blue
        }));

        originalGroup.appendChild(originalRow);

        // --- STANDARD VARIATIONS ---
        const standardGroup = this.createSection(root, "Standard Variations");
        const standardRow = this.createRow();
        standardRow.layoutAlign = "STRETCH";

        // Original Look
        standardRow.appendChild(await design1.create({
            title: "Server Latency",
            value: "24ms",
            period: "Global Avg.",
            trendDirection: "up",
            trendValue: "12%",
            width: "fill",
            height: 304,
            gap: "auto"
        }));

        // Red Variation
        standardRow.appendChild(await design1.create({
            title: "Error Rate",
            value: "0.02%",
            period: "Last Hour",
            trendDirection: "down",
            trendValue: "0.05%",
            width: "fill",
            height: 304,
            gap: "auto",
            dataPoints: [0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
            gradientStart: { r: 0.9, g: 0.1, b: 0.2 },
            gradientEnd: { r: 1, g: 0.5, b: 0.6 }
        }));

        // Green Variation
        standardRow.appendChild(await design1.create({
            title: "CPU Usage",
            value: "45%",
            period: "Cluster B",
            trendDirection: "neutral",
            trendValue: "Stable",
            width: "fill",
            height: 304,
            gap: "auto",
            dataPoints: [0.4, 0.42, 0.41, 0.4, 0.43, 0.41, 0.4],
            gradientStart: { r: 0.1, g: 0.7, b: 0.3 }, // Green
            gradientEnd: { r: 0.4, g: 0.9, b: 0.6 }
        }));

        standardGroup.appendChild(standardRow);

        // --- COMPACT VARIATIONS ---
        const compactGroup = this.createSection(root, "Compact Variations");
        const compactRow = this.createRow();
        compactRow.layoutAlign = "STRETCH";

        // Blue Compact
        compactRow.appendChild(await design1.create({
            variant: "compact",
            title: "Network In",
            value: "1.2Gbps",
            period: "Edge 1",
            trendDirection: "neutral",
            trendValue: "Stable",
            width: "fill",
            height: 200,
            gap: "auto",
            dataPoints: [0.6, 0.61, 0.59, 0.6, 0.62, 0.6, 0.6],
            gradientStart: { r: 0.1, g: 0.4, b: 0.9 },
            gradientEnd: { r: 0.4, g: 0.8, b: 1 }
        }));

        // Orange Compact
        compactRow.appendChild(await design1.create({
            variant: "compact",
            title: "Queue Depth",
            value: "14",
            period: "Worker B",
            trendDirection: "up",
            trendValue: "High",
            width: "fill",
            height: 200,
            gap: "auto",
            dataPoints: [0.1, 0.2, 0.4, 0.8, 0.7, 0.9, 0.95],
            gradientStart: { r: 0.9, g: 0.6, b: 0.1 },
            gradientEnd: { r: 1, g: 0.9, b: 0.4 }
        }));

        // Red Compact
        compactRow.appendChild(await design1.create({
            variant: "compact",
            title: "Memory Usage",
            value: "4.2GB",
            period: "Region A",
            trendDirection: "up",
            trendValue: "2%",
            width: "fill",
            height: 200,
            gap: "auto",
            dataPoints: [0.2, 0.4, 0.5, 0.6, 0.8, 0.85, 0.95],
            gradientStart: { r: 0.9, g: 0.1, b: 0.2 },
            gradientEnd: { r: 1, g: 0.5, b: 0.6 }
        }));

        compactGroup.appendChild(compactRow);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private createSection(root: FrameNode, title: string): FrameNode {
        const container = figma.createFrame();
        container.name = title;
        container.layoutMode = "VERTICAL";
        container.itemSpacing = 24;
        container.fills = [];
        container.layoutAlign = "STRETCH";
        container.primaryAxisSizingMode = "AUTO";
        container.clipsContent = false;

        const label = figma.createText();
        label.characters = title.toUpperCase();
        label.fontSize = 14;
        label.letterSpacing = { unit: "PERCENT", value: 10 };
        label.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
        container.appendChild(label);

        root.appendChild(container);
        return container;
    }

    private createRow(): FrameNode {
        const row = figma.createFrame();
        row.layoutMode = "HORIZONTAL";
        row.itemSpacing = 24;
        row.fills = [];
        row.layoutAlign = "STRETCH";
        row.primaryAxisSizingMode = "FIXED";
        row.counterAxisSizingMode = "AUTO";
        row.clipsContent = false;
        return row;
    }
}

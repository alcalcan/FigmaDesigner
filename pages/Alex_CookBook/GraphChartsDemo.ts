import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { graph_chart, GraphChartProps } from "../../components/Alex_CookBook/graph_chart/graph_chart";

export class GraphChartsDemo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = figma.createFrame();
        root.name = "Graph Charts Showcase - Full Width";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 64;
        root.paddingTop = 80;
        root.paddingLeft = 80;
        root.paddingRight = 80;
        root.paddingBottom = 80;
        root.counterAxisSizingMode = "FIXED";
        root.resize(1200, 100);
        root.primaryAxisSizingMode = "AUTO";
        root.clipsContent = false;
        root.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.99 } }];

        const graphCreator = new graph_chart();

        // --- TITLE ---
        const titleContainer = figma.createFrame();
        titleContainer.layoutMode = "VERTICAL";
        titleContainer.itemSpacing = 8;
        titleContainer.fills = [];
        titleContainer.layoutAlign = "STRETCH";

        const title = figma.createText();
        title.characters = "Graph Charts - Full Page Width Rendering";
        title.fontSize = 32;
        title.fontName = { family: "Inter", style: "Bold" };
        title.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        titleContainer.appendChild(title);

        const subtitle = figma.createText();
        subtitle.characters = "Showcasing chart rendering logic adapted for full-width contexts.";
        subtitle.fontSize = 16;
        subtitle.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.5, b: 0.6 } }];
        titleContainer.appendChild(subtitle);

        root.appendChild(titleContainer);

        // --- SECTION 1: Standard Variation ---
        await this.addSection(root, graphCreator, "Standard Performance Tracking", "Fluid Spline Area Chart • Gradient Fill, Soft Shadow, 16px Roundness", {
            dataPoints: [0.1, 0.3, 0.2, 0.5, 0.4, 0.8, 0.7, 0.9, 0.85, 1.0],
            height: 240,
            gradientStart: { r: 0.1, g: 0.4, b: 0.9 },
            gradientEnd: { r: 0.4, g: 0.8, b: 1 },
            showChartShadow: true
        });

        // --- SECTION 2: Compact Dense Data ---
        await this.addSection(root, graphCreator, "High-Density API Metrics (Shortened)", "Fluid Spline Area Chart • Solid Gradient, No Shadow, Compact Height (120px)", {
            dataPoints: Array.from({ length: 40 }, () => Math.random() * 0.5 + 0.2),
            height: 120,
            gradientStart: { r: 0.02, g: 0.08, b: 0.25 },
            gradientEnd: { r: 0.15, g: 0.35, b: 0.8 },
            showChartShadow: false
        });

        // --- SECTION 3: Warning State ---
        await this.addSection(root, graphCreator, "Critical Load Peak", "Fluid Spline Area Chart • Warning Colors, Glow Shadow, Peak Data Visualization", {
            dataPoints: [0.2, 0.25, 0.3, 0.4, 0.9, 0.85, 0.95, 0.8, 0.3, 0.2],
            height: 200,
            gradientStart: { r: 0.8, g: 0.1, b: 0.1 },
            gradientEnd: { r: 1, g: 0.4, b: 0.1 },
            chartFillType: "gradient",
            showChartShadow: true
        });

        // --- SECTION 4: Solid Style ---
        await this.addSection(root, graphCreator, "Disk Read Latency (Solid Style)", "Fluid Spline Area Chart • Transparent Solid Fill, No Shadow, Custom Opacity", {
            dataPoints: [0.4, 0.45, 0.42, 0.5, 0.48, 0.55, 0.52, 0.6, 0.58],
            height: 180,
            gradientStart: { r: 0.4, g: 0.1, b: 0.9 },
            chartFillType: "solid",
            chartOpacity: 0.2,
            showChartShadow: false
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async addSection(root: FrameNode, creator: graph_chart, label: string, description: string, props: GraphChartProps) {
        const section = figma.createFrame();
        section.name = label;
        section.layoutMode = "VERTICAL";
        section.itemSpacing = 12;
        section.fills = [];
        section.layoutAlign = "STRETCH";
        section.clipsContent = false;

        const labelText = figma.createText();
        labelText.characters = label.toUpperCase();
        labelText.fontSize = 14;
        labelText.letterSpacing = { unit: "PERCENT", value: 10 };
        labelText.fontName = { family: "Inter", style: "Bold" };
        labelText.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        section.appendChild(labelText);

        const chart = await creator.create({
            cornerRadius: 16,
            ...props
        });
        section.appendChild(chart);

        const descText = figma.createText();
        descText.characters = description;
        descText.fontSize = 13;
        descText.fontName = { family: "Inter", style: "Medium" };
        descText.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.5, b: 0.6 } }];
        descText.layoutAlign = "STRETCH";
        descText.textAlignHorizontal = "CENTER";
        section.appendChild(descText);

        root.appendChild(section);
    }
}

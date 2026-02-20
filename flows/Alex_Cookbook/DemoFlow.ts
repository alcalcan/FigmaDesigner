import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { MetricCardsDesign1Demo } from "../../pages/Alex_CookBook/MetricCardsDesign1Demo";
import { CookbookComponentsDemo } from "../../pages/Alex_CookBook/CookbookComponentsDemo";
import { GraphChartsDemo } from "../../pages/Alex_CookBook/GraphChartsDemo";
import { TopBarsDemo } from "../../pages/Alex_CookBook/TopBarsDemo";
import { Layout } from "../../slides/theme";

export class DemoFlow extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        // Create a horizontal layout wrapper for the flow
        const flowContainer = figma.createFrame();
        flowContainer.name = "DemoFlow_Container";
        flowContainer.x = props.x || 0;
        flowContainer.y = props.y || 0;
        flowContainer.fills = []; // Transparent background
        flowContainer.layoutMode = "HORIZONTAL";
        flowContainer.primaryAxisSizingMode = "AUTO";
        flowContainer.counterAxisSizingMode = "AUTO";
        flowContainer.itemSpacing = Layout.CONTENT_GAP * 4; // Add spacing between pages
        flowContainer.paddingTop = 100;
        flowContainer.paddingBottom = 100;
        flowContainer.paddingLeft = 100;
        flowContainer.paddingRight = 100;

        // Instantiate the individual pages
        const metricsDemo = new MetricCardsDesign1Demo();
        const topBarsDemo = new TopBarsDemo();
        const graphsDemo = new GraphChartsDemo();

        // Create the pages
        const pages = [
            await metricsDemo.create({}),
            await topBarsDemo.create({}),
            await graphsDemo.create({})
        ];

        // Append pages to the flow container
        for (const page of pages) {
            flowContainer.appendChild(page);
        }

        return flowContainer;
    }
}

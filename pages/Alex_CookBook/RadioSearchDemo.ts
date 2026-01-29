
import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { search_bar_expanded_radio } from "../../components/Alex_CookBook/search_bar_expanded_radio/search_bar_expanded_radio";
import { Page_title } from "../../components/Alex_CookBook/Page_title/Page_title";

export class RadioSearchDemo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "Radio Search Demo";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 40;
        root.paddingTop = 60;
        root.paddingLeft = 120; // Standard padding
        root.paddingRight = 120; // Standard padding
        root.paddingBottom = 60;
        root.primaryAxisSizingMode = "FIXED"; // Fixed height
        root.counterAxisSizingMode = "FIXED"; // Standard for pages
        root.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.98 } }];

        // Standard 1680px width, 1050px height
        root.resize(1680, 1050);



        // Page Title Component
        const pageTitleComp = new Page_title();
        const pageTitleNode = await pageTitleComp.create({
            x: 0,
            y: 0,
            title: "Search Bar with Radio Buttons",
            subtitle: "Explore our components"
        });
        root.appendChild(pageTitleNode);

        // Component
        const searchComp = new search_bar_expanded_radio();
        const searchNode = await searchComp.create({
            x: 0,
            y: 0,
            placeholder: "Search for resources..."
        });
        (searchNode as FrameNode).layoutAlign = "STRETCH";

        root.appendChild(searchNode);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

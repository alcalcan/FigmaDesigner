import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Top_bar } from "../../components/Alex_CookBook/Top_bar/Top_bar";
import { Header } from "../../components/UEFA_Academy_online/Header/Header";
import { Page_title } from "../../components/UEFA_Academy_online/Page_title/Page_title";
import { search_bar } from "../../components/UEFA_Academy_online/search_bar/search_bar";
import { sidebar } from "../../components/UEFA_Academy_online/sidebar/sidebar";
import { card } from "../../components/UEFA_Academy_online/card/card";
import { Content_container } from "../../components/UEFA_Academy_online/Content_container/Content_container";

export class UEFA_Academy_online_Summary extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "UEFA Academy online - Summary";

        // Setup Auto Layout for the page
        root.layoutMode = "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "FIXED"; // Width is usually fixed for pages
        root.counterAxisAlignItems = "CENTER";
        root.itemSpacing = 0;

        // default page width 1440
        root.resize(1440, 100);

        // 1. Create Components
        const topBarComp = new Top_bar();
        const headerComp = new Header();
        const contentContainerComp = new Content_container();
        const titleComp = new Page_title();
        const searchBarComp = new search_bar();
        const cardComp = new card();
        const sidebarComp = new sidebar();

        // 2. Generate Nodes
        const topBarNode = await topBarComp.create({ x: 0, y: 0 });
        const headerNode = await headerComp.create({ x: 0, y: 0 });
        const contentContainerNode = await contentContainerComp.create({ x: 0, y: 0 });

        const titleNode = await titleComp.create({ x: 0, y: 0 });
        const searchBarNode = await searchBarComp.create({ x: 0, y: 0 });
        const cardNode = await cardComp.create({ x: 0, y: 0 });
        const sidebarNode = await sidebarComp.create({ x: 0, y: 0 });

        // 3. Arrangement within Content Container

        // Create a Column for Search Bar and Card
        const leftColumn = figma.createFrame();
        leftColumn.name = "Left Column";
        leftColumn.layoutMode = "VERTICAL";
        leftColumn.primaryAxisSizingMode = "AUTO";
        leftColumn.counterAxisSizingMode = "AUTO";
        leftColumn.counterAxisAlignItems = "MIN";
        leftColumn.itemSpacing = 24;
        leftColumn.fills = []; // Transparent

        leftColumn.appendChild(searchBarNode);
        leftColumn.appendChild(cardNode);

        // Create a Row for Left Column and Sidebar
        const mainContentRow = figma.createFrame();
        mainContentRow.name = "Main Content Row";
        mainContentRow.layoutMode = "HORIZONTAL";
        mainContentRow.primaryAxisSizingMode = "AUTO";
        mainContentRow.counterAxisSizingMode = "AUTO";
        mainContentRow.counterAxisAlignItems = "MIN";
        mainContentRow.itemSpacing = 24;
        mainContentRow.fills = []; // Transparent

        mainContentRow.appendChild(leftColumn);
        mainContentRow.appendChild(sidebarNode);

        // Append to Content Container
        (contentContainerNode as FrameNode).appendChild(titleNode);
        (contentContainerNode as FrameNode).appendChild(mainContentRow);

        // 4. Append to Root
        root.appendChild(topBarNode);
        root.appendChild(headerNode);
        root.appendChild(contentContainerNode);

        // 5. Layout Alignment & Constraints
        [topBarNode, headerNode, contentContainerNode].forEach(node => {
            if ("layoutAlign" in node) {
                (node as LayoutMixin).layoutAlign = "STRETCH";
            }
        });

        // Set constraints for children inside row to handle full width if needed
        if ("layoutGrow" in leftColumn) (leftColumn as LayoutMixin).layoutGrow = 1;
        if ("layoutAlign" in searchBarNode) (searchBarNode as LayoutMixin).layoutAlign = "STRETCH";
        if ("layoutAlign" in cardNode) (cardNode as LayoutMixin).layoutAlign = "STRETCH";
        if ("layoutAlign" in mainContentRow) (mainContentRow as LayoutMixin).layoutAlign = "STRETCH";

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Top_bar } from "../../components/Competition_newsletters/Top_bar/Top_bar";
import { Header } from "../../components/UEFA_Academy_online/Header/Header";
import { Page_title } from "../../components/UEFA_Academy_online/Page_title/Page_title";
import { search_bar } from "../../components/UEFA_Academy_online/search_bar/search_bar";
import { card } from "../../components/UEFA_Academy_online/card/card";
import { Content_container } from "../../components/UEFA_Academy_online/Content_container/Content_container";
import { simple_info } from "../../components/UEFA_Academy_online/simple_info/simple_info";
import { sidebar } from "../../components/UEFA_Academy_online/sidebar/sidebar";
import { TitleBar_withCTA } from "../../components/UEFA_Academy_online/TitleBar_withCTA/TitleBar_withCTA";

export class UEFA_Academy_online_Summary extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "UEFA Academy online - Summary";

        // Setup Auto Layout for the page
        root.layoutMode = "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "FIXED";
        root.counterAxisAlignItems = "CENTER";
        root.itemSpacing = 0;
        if ("clipsContent" in root) root.clipsContent = false;
        root.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }]);

        // default page width 1680
        root.resize(1680, 100);

        // 1. Create Components
        const topBarComp = new Top_bar();
        const headerComp = new Header();
        const contentContainerComp = new Content_container();
        const titleBarCTAComp = new TitleBar_withCTA();
        const searchBarComp = new search_bar();
        const cardComp = new card();
        const sidebarComp = new sidebar();
        const simpleInfoComp = new simple_info();

        // 2. Generate Nodes
        const topBarNode = await topBarComp.create({ x: 0, y: 0 });
        const headerNode = await headerComp.create({ x: 0, y: 0 });
        const contentContainerNode = await contentContainerComp.create({ x: 0, y: 0 });

        const titleBarNode = await titleBarCTAComp.create({
            x: 0,
            y: 0,
            text: "Academy Courses",
            subtext: "Explore our latest modules and professional development programs",
            hideButtons: true
        });

        const searchBarNode = await searchBarComp.create({ x: 0, y: 0 });
        const cardNode = await cardComp.create({ x: 0, y: 0 });
        const sidebarNode = await sidebarComp.create({ x: 0, y: 0 });
        const simpleInfoNode = await simpleInfoComp.create({ x: 0, y: 0, text: "Tip: Use the search bar to find specific resources quickly." });

        // 3. Arrangement within Content Container

        // Create a Column for Search Bar and Card
        const leftColumn = figma.createFrame();
        leftColumn.name = "Left Column";
        leftColumn.layoutMode = "VERTICAL";
        leftColumn.primaryAxisSizingMode = "AUTO";
        leftColumn.counterAxisSizingMode = "AUTO";
        leftColumn.counterAxisAlignItems = "MIN";
        leftColumn.itemSpacing = 24;
        leftColumn.fills = [];
        if ("clipsContent" in leftColumn) leftColumn.clipsContent = false;

        leftColumn.appendChild(searchBarNode);
        leftColumn.appendChild(cardNode);

        // Create a Row for Left Column and Sidebar
        const mainContentRow = figma.createFrame();
        mainContentRow.name = "Main Content Row";
        mainContentRow.layoutMode = "HORIZONTAL";
        mainContentRow.primaryAxisSizingMode = "AUTO";
        mainContentRow.counterAxisSizingMode = "AUTO";
        mainContentRow.counterAxisAlignItems = "MIN";
        mainContentRow.itemSpacing = 40;
        mainContentRow.fills = [];
        if ("clipsContent" in mainContentRow) mainContentRow.clipsContent = false;

        mainContentRow.appendChild(leftColumn);
        mainContentRow.appendChild(sidebarNode);

        // Append to Content Container
        const container = contentContainerNode as FrameNode;
        container.appendChild(titleBarNode);
        container.appendChild(simpleInfoNode);
        container.appendChild(mainContentRow);

        // 4. Append to Root
        root.appendChild(topBarNode);
        root.appendChild(headerNode);
        root.appendChild(container);

        // 5. Layout Alignment & Constraints

        if ("resize" in container) {
            container.resize(1680, container.height);
        }
        if ("counterAxisSizingMode" in container) {
            container.counterAxisSizingMode = "AUTO"; // Allow height to be driven by content
        }
        if ("clipsContent" in container) container.clipsContent = false;
        container.fills = [];
        container.layoutAlign = "STRETCH";

        // All children of the vertical root and content container should fill width
        [topBarNode, headerNode, container, titleBarNode, simpleInfoNode, mainContentRow].forEach(node => {
            if ("layoutAlign" in node) {
                (node as LayoutMixin).layoutAlign = "STRETCH";
            }
        });

        if ("primaryAxisSizingMode" in mainContentRow) {
            mainContentRow.primaryAxisSizingMode = "FIXED"; // Width is parent
        }
        mainContentRow.layoutAlign = "STRETCH";

        if ("primaryAxisSizingMode" in mainContentRow) {
            mainContentRow.primaryAxisSizingMode = "FIXED";
        }

        // inside Main Content Row (HORIZONTAL):
        if ("layoutGrow" in leftColumn) {
            (leftColumn as LayoutMixin).layoutGrow = 1;
            leftColumn.primaryAxisSizingMode = "FIXED";
        }

        // inside Left Column (VERTICAL):
        [searchBarNode, cardNode].forEach(node => {
            if ("layoutAlign" in node) {
                (node as LayoutMixin).layoutAlign = "STRETCH";
            }
        });

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

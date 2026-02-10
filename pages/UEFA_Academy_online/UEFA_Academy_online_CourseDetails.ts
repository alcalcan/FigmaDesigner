import { Placeholder } from "../../components/Placeholder";
import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Top_bar } from "../../components/Newsletters_competititon/Top_bar/Top_bar";
import { Header } from "../../components/UEFA_Academy_online/Header/Header";
import { TitleBar_withCTA } from "../../components/UEFA_Academy_online/TitleBar_withCTA/TitleBar_withCTA";
import { simple_info } from "../../components/UEFA_Academy_online/simple_info/simple_info";
import { expanded_card } from "../../components/Alex_CookBook/expanded_card/expanded_card";
import { sidebar_filtering } from "../../components/Alex_CookBook/sidebar_filtering/sidebar_filtering";
import { SubSection_collapsed } from "../../components/UEFA_Academy_online/SubSection/SubSection_collapsed";
import { Content_container } from "../../components/UEFA_Academy_online/Content_container/Content_container";

export class UEFA_Academy_online_CourseDetails extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "UEFA Academy online - Course Details";

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

        // 1. Instantiate Components
        const topBarComp = new Top_bar();
        const headerComp = new Header();
        const contentContainerComp = new Content_container();
        const titleBarCTAComp = new TitleBar_withCTA();
        const subSectionComp = new expanded_card();
        const subSectionCollapsedComp = new SubSection_collapsed();
        const simpleInfoComp = new simple_info();
        const sidebarComp = new sidebar_filtering();

        // 2. Create Nodes
        const topBarNode = await topBarComp.create({ x: 0, y: 0 });
        const headerNode = await headerComp.create({ x: 0, y: 0 });
        const contentContainerNode = await contentContainerComp.create({ x: 0, y: 0 });

        // Update TitleBar to use new dynamic text and hide redundant buttons
        const titleBarCTANode = await titleBarCTAComp.create({
            x: 0,
            y: 0,
            text: "Academy Course: Motivation",
            subtext: "Mastering motivation in women's football refereeing",
            hideButtons: true
        });

        const simpleInfoNode = await simpleInfoComp.create({ x: 0, y: 0, text: "Reminder: Complete the assessment at the end of Module 1 to unlock further content." });


        const subSectionNode1 = await subSectionComp.create({
            x: 0,
            y: 0,
            headerTitle: "Module 1: Professional Development",
            items: [
                { name: "Anti-Doping, Medical and Health", isSelected: false },
                { name: "Club Licensing", isSelected: false },
                { name: "Coach Education", isSelected: false },
                { name: "Disciplinary and integrity", isSelected: false },
                { name: "Event Management and Operations", isSelected: false },
                { name: "Governance and Strategic Management", isSelected: false }
            ]
        });

        const subSectionNodeCollapsed = await subSectionCollapsedComp.create({
            x: 0,
            y: 0,
            name: "Module 2: Advanced Strategies (Unlocked)",
            items: [
                "Innovation",
                "Leadership",
                "Marketing Sponsorship"
            ]
        });

        const subSectionNode2 = await subSectionComp.create({
            x: 0,
            y: 0,
            headerTitle: "Module 3: Global Impact",
            items: [
                { name: "Financial Sustainability", isSelected: false },
                { name: "Player Welfare", isSelected: false },
                { name: "Talent Identification", isSelected: false }
            ]
        });
        const sidebarNode = await sidebarComp.create({ x: 0, y: 0 });

        // 3. Arrangement within Content Container

        // Create left column for main content
        const leftColumn = figma.createFrame();
        leftColumn.name = "Main Content Column";
        leftColumn.layoutMode = "VERTICAL";
        leftColumn.primaryAxisSizingMode = "AUTO";
        leftColumn.counterAxisSizingMode = "FIXED"; // fill container
        leftColumn.itemSpacing = 40;
        leftColumn.fills = [];
        if ("clipsContent" in leftColumn) leftColumn.clipsContent = false;
        leftColumn.layoutAlign = "STRETCH";
        leftColumn.layoutGrow = 1;

        leftColumn.appendChild(simpleInfoNode);
        leftColumn.appendChild(subSectionNode1);
        leftColumn.appendChild(subSectionNodeCollapsed);
        leftColumn.appendChild(subSectionNode2);

        // Create Main Content Row (Two Columns)
        const mainContentRow = figma.createFrame();
        mainContentRow.name = "Main Content Row";
        mainContentRow.layoutMode = "HORIZONTAL";
        mainContentRow.primaryAxisSizingMode = "FIXED"; // stretch horizontally
        mainContentRow.counterAxisSizingMode = "AUTO";
        mainContentRow.counterAxisAlignItems = "MIN";
        mainContentRow.itemSpacing = 40;
        mainContentRow.fills = [];
        if ("clipsContent" in mainContentRow) mainContentRow.clipsContent = false;
        mainContentRow.layoutAlign = "STRETCH";
        mainContentRow.layoutGrow = 0;

        mainContentRow.appendChild(leftColumn);
        mainContentRow.appendChild(sidebarNode);

        const container = contentContainerNode as FrameNode;
        container.layoutMode = "VERTICAL";
        container.itemSpacing = 40;
        container.counterAxisAlignItems = "MIN";
        container.primaryAxisSizingMode = "AUTO";
        container.counterAxisSizingMode = "AUTO";
        if ("clipsContent" in container) container.clipsContent = false;
        container.resize(1680, container.height);
        container.fills = [];

        container.appendChild(titleBarCTANode);
        container.appendChild(mainContentRow);

        // 4. Final Root Assembly
        root.appendChild(topBarNode);
        root.appendChild(headerNode);
        root.appendChild(container);

        // 5. Layout & Constraints
        [topBarNode, headerNode, container].forEach(node => {
            if ("layoutAlign" in node) {
                (node as LayoutMixin).layoutAlign = "STRETCH";
            }
        });

        // All children of container should stretch
        [titleBarCTANode, mainContentRow].forEach(node => {
            if ("layoutAlign" in node) {
                (node as LayoutMixin).layoutAlign = "STRETCH";
            }
        });

        // Sidebar fixed width could be set here if needed, but sidebar component usually has its own
        if ("layoutAlign" in sidebarNode) (sidebarNode as LayoutMixin).layoutAlign = "MIN";
        if ("layoutGrow" in sidebarNode) (sidebarNode as LayoutMixin).layoutGrow = 0;

        // Ensure children fill column width
        [simpleInfoNode, subSectionNode1, subSectionNodeCollapsed, subSectionNode2].forEach(node => {
            if ("layoutAlign" in node) (node as LayoutMixin).layoutAlign = "STRETCH";
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

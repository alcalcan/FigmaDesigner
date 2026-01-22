import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Top_bar } from "../../components/Alex_CookBook/Top_bar/Top_bar";
import { Header } from "../../components/UEFA_Academy_online/Header/Header";
import { search_bar } from "../../components/UEFA_Academy_online/search_bar/search_bar";

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
        const searchBarComp = new search_bar();

        // 2. Generate Nodes
        // We pass 0,0 because Auto Layout will handle positioning
        const topBarNode = await topBarComp.create({ x: 0, y: 0 });
        const headerNode = await headerComp.create({ x: 0, y: 0 });
        const searchBarNode = await searchBarComp.create({ x: 0, y: 0 });

        // 3. Append to Root
        root.appendChild(topBarNode);
        root.appendChild(headerNode);
        root.appendChild(searchBarNode);

        // 4. Ensure components take full width if they are designed to
        [topBarNode, headerNode, searchBarNode].forEach(node => {
            if ("layoutAlign" in node) {
                (node as any).layoutAlign = "STRETCH";
            }
        });

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

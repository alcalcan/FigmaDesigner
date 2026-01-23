import { BaseComponent, ComponentProps } from "../../BaseComponent";

export class Content_container extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = figma.createFrame();
        root.name = "Content_container";

        // Setup Auto Layout for the content container
        root.layoutMode = "VERTICAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "FIXED";
        root.counterAxisAlignItems = "MIN";
        root.itemSpacing = 24; // Default spacing between elements in content
        root.paddingTop = 40;
        root.paddingBottom = 40;
        root.paddingLeft = 120;
        root.paddingRight = 120;

        root.fills = await this.hydratePaints([]); // Transparent by default

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

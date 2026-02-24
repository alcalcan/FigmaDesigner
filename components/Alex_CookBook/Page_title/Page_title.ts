import { BaseComponent, ComponentProps } from "../../BaseComponent";


// SVG Assets






export class Page_title extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });

        const root = figma.createFrame();
        root.name = "Page title";
        root.layoutMode = "VERTICAL";
        root.counterAxisSizingMode = "AUTO"; // Width depends on content (or FIXED if needed)
        root.primaryAxisSizingMode = "AUTO"; // Height depends on content
        root.itemSpacing = 8; // Gap between title and subtitle
        root.fills = []; // Transparent background

        // Title
        const titleNode = figma.createText();
        titleNode.name = "Title";
        titleNode.fontName = { family: "Open Sans", style: "Bold" };
        titleNode.characters = props.title || "Page Title";
        titleNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]; // Black
        root.appendChild(titleNode);

        // Subtitle
        if (props.subtitle) {
            const subtitleNode = figma.createText();
            subtitleNode.name = "Subtitle";
            subtitleNode.fontName = { family: "Open Sans", style: "Regular" };
            subtitleNode.characters = props.subtitle;
            subtitleNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]; // Black
            root.appendChild(subtitleNode);
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

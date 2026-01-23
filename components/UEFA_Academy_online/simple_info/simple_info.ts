import { BaseComponent, ComponentProps } from "../../BaseComponent";

// SVG Assets - Support / information
const SVG_info_icon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7C9.4477 7 9 6.55228 9 6C9 5.44772 9.4477 5 10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 2C14.4154 2 18 5.58457 18 10C18 14.4154 14.4154 18 10 18C5.58457 18 2 14.4154 2 10C2 5.58457 5.58457 2 10 2Z" fill="#0077B6"/>
</svg>`;

export class simple_info extends BaseComponent {
    async create(props: ComponentProps & { text?: string }): Promise<SceneNode> {
        // Load fonts
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
            await figma.loadFontAsync({ family: "Manrope", style: "SemiBold" });
        } catch (e) {
            console.warn("Failed to load fonts", e);
        }

        const root = figma.createFrame();
        root.name = "simple_info";
        root.layoutMode = "HORIZONTAL";
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "AUTO";
        root.primaryAxisAlignItems = "MIN";
        root.counterAxisAlignItems = "CENTER";
        root.itemSpacing = 8;
        root.paddingTop = 8;
        root.paddingRight = 12;
        root.paddingBottom = 8;
        root.paddingLeft = 12;
        root.cornerRadius = 6;

        // Transparent or very light background
        root.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0.94, "g": 0.97, "b": 1.0 }, "opacity": 1 }]);

        // Icon
        const iconNode = figma.createNodeFromSvg(SVG_info_icon);
        const icon = figma.flatten([iconNode]);
        icon.name = "info-icon";
        root.appendChild(icon);

        // Text
        const textNode = figma.createText();
        textNode.characters = props.text || "No information provided.";
        textNode.fontSize = 14;
        await this.setFont(textNode, { family: "Manrope", style: "SemiBold" });
        textNode.fills = await this.hydratePaints([{ "type": "SOLID", "color": { "r": 0, "g": 0, "b": 0 } }]);
        root.appendChild(textNode);

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

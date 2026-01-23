import { BaseComponent, ComponentProps } from "./BaseComponent";

export class Placeholder extends BaseComponent {
    private missingComponentName: string;

    constructor(name: string = "Missing Component") {
        super();
        this.missingComponentName = name;
    }

    async create(props: ComponentProps): Promise<SceneNode> {
        const frame = figma.createFrame();
        frame.name = `Placeholder: ${this.missingComponentName}`;

        // Setup visual style
        frame.resize(200, 100);
        frame.fills = [{ type: 'SOLID', color: { r: 1, g: 0.95, b: 0.95 } }];
        frame.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }];
        frame.strokeWeight = 2;
        frame.dashPattern = [4, 4];
        frame.cornerRadius = 8;

        // Add text
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const title = figma.createText();
        title.fontName = { family: "Inter", style: "Bold" };
        title.characters = "MISSING COMPONENT";
        title.fontSize = 12;
        title.fills = [{ type: 'SOLID', color: { r: 0.8, g: 0, b: 0 } }];
        frame.appendChild(title);

        const sub = figma.createText();
        sub.fontName = { family: "Inter", style: "Regular" };
        sub.characters = this.missingComponentName;
        sub.fontSize = 10;
        sub.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0, b: 0 } }];
        frame.appendChild(sub);

        // Center content
        frame.layoutMode = "VERTICAL";
        frame.primaryAxisAlignItems = "CENTER";
        frame.counterAxisAlignItems = "CENTER";
        frame.itemSpacing = 4;

        frame.x = props.x;
        frame.y = props.y;

        return frame;
    }
}

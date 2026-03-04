import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Footer } from "./Footer";

export class AcademyFooter extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const original = new Footer();
        const node = await original.create(props);
        if (node.type === "FRAME") {
            node.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        }
        return node;
    }
}

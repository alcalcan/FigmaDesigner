import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { ModalsDemo } from "../../pages/Alex_CookBook/ModalsDemo";

export class ModalsFlow extends BaseComponent {
    async create(_props: ComponentProps): Promise<FrameNode> {
        const flowContainer = figma.createFrame();
        flowContainer.name = "Modals Demo Flow";
        flowContainer.layoutMode = "HORIZONTAL";
        flowContainer.itemSpacing = 160;
        flowContainer.paddingTop = 160;
        flowContainer.paddingBottom = 160;
        flowContainer.paddingLeft = 160;
        flowContainer.paddingRight = 160;
        flowContainer.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.96, b: 0.97 } }];

        const modalsDemo = new ModalsDemo();

        flowContainer.appendChild(await modalsDemo.create({}));

        // Adjust dimensions to hug contents
        flowContainer.primaryAxisSizingMode = "AUTO";
        flowContainer.counterAxisSizingMode = "AUTO";

        return flowContainer;
    }
}

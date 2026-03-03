import { ComponentProps } from "../../components/BaseComponent";
import { AcademyHeader } from "../../components/UEFA_Academy/Header/AcademyHeader";
import { BaseDemoPage } from "../Alex_CookBook/BaseDemoPage";

export class AcademyHeaderDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("UEFA Academy - Academy Header Demo", 1680, false);

        await this.addHeader(
            root,
            "Academy Header Demo",
            "This page demonstrates the simplified Academy Header component."
        );

        const academyHeaderComp = new AcademyHeader();

        await this.addSection(
            root,
            "1. Default Academy Header",
            "The simplified header with Academy Logo on the left and Menu action on the right.",
            async (container) => {
                const header = await academyHeaderComp.create({ x: 0, y: 0 });
                if ("layoutAlign" in header) {
                    header.layoutAlign = "STRETCH";
                }
                container.appendChild(header);
            }
        );

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

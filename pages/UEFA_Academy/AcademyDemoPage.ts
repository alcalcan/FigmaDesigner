import { ComponentProps } from "../../components/BaseComponent";
import { AcademyHeader } from "../../components/UEFA_Academy/Header/AcademyHeader";
import { AcademyHeaderBanner } from "../../components/UEFA_Academy/HeaderBanner/AcademyHeaderBanner";
import { BaseDemoPage } from "../Alex_CookBook/BaseDemoPage";

export class AcademyDemoPage extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("UEFA Academy - Academy Demo Page", 1680, false);

        await this.addHeader(
            root,
            "Academy Demo Page",
            "This page demonstrates the simplified Academy components."
        );

        const academyHeaderComp = new AcademyHeader();
        const academyHeaderBannerComp = new AcademyHeaderBanner();

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

        await this.addSection(
            root,
            "2. Academy Header Banner",
            "The simplified header banner with title, description, and primary CTA.",
            async (container) => {
                const banner = await academyHeaderBannerComp.create({
                    x: 0,
                    y: 0,
                    title: "The knowledge hub of European football",
                    description: "We train managers, specialists and players to supply the world's favourite sport with the best professionals.",
                    buttonLabel: "VIEW PROGRAMME CATALOGUE"
                });
                if ("layoutAlign" in banner) {
                    banner.layoutAlign = "STRETCH";
                }
                container.appendChild(banner);
            }
        );

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

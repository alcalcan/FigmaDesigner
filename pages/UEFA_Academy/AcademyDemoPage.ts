import { ComponentProps } from "../../components/BaseComponent";
import { AcademyHeader } from "../../components/UEFA_Academy/Header/AcademyHeader";
import { AcademyHeaderBanner } from "../../components/UEFA_Academy/HeaderBanner/AcademyHeaderBanner";
import { AcademyMission } from "../../components/UEFA_Academy/Mission/AcademyMission";
import { BaseDemoPage } from "../Alex_CookBook/BaseDemoPage";

export class AcademyDemoPage extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("UEFA Academy - Academy Demo Page", 1680, true);
        await this.addHeader(
            root,
            "Academy Demo Page",
            "Showcasing Academy components with numbered captions and implementation notes."
        );

        const academyHeaderComp = new AcademyHeader();
        const academyHeaderBannerComp = new AcademyHeaderBanner();
        const academyMissionComp = new AcademyMission();

        const header = await academyHeaderComp.create({ x: 0, y: 0 });
        this.enforceComponentWidth(header, 1680);
        await this.appendHugSection(
            root,
            "Section: AcademyHeader",
            "1. Default Academy Header",
            "A clean top bar with brand logo, contextual external action, and menu trigger. Rendered as the real component at 1680 width.",
            header
        );

        const banner = await academyHeaderBannerComp.create({
            x: 0,
            y: 0,
            title: "The knowledge hub of European football",
            description: "We train managers, specialists and players to supply the world's favourite sport with the best professionals.",
            buttonLabel: "VIEW PROGRAMME CATALOGUE"
        });
        this.enforceComponentWidth(banner, 1680);
        await this.appendHugSection(
            root,
            "Section: AcademyHeaderBanner",
            "2. Academy Header Banner",
            "Hero banner layout combining heading, supporting copy, CTA, and visual block. Rendered as the real component at 1680 width.",
            banner
        );

        const mission = await academyMissionComp.create({
            x: 0,
            y: 0,
            title: "ABOUT THE UEFA ACADEMY",
            description: "Building on UEFA’s professional excellence, the Academy inspires the education of individuals and organisations to continuously elevate football.",
            buttonLabel: "READ MORE"
        });
        this.enforceComponentWidth(mission, 1680);
        await this.appendHugSection(
            root,
            "Section: AcademyMission",
            "3. Academy Mission Banner",
            "Mission section with integrated image and full-width gradient overlay contained inside the 1680 x 292 component bounds.",
            mission
        );

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async appendHugSection(
        root: FrameNode,
        name: string,
        title: string,
        description: string,
        component: SceneNode
    ): Promise<void> {
        const section = figma.createFrame();
        section.name = name;
        section.layoutMode = "VERTICAL";
        section.fills = [];
        section.itemSpacing = 20;
        section.primaryAxisSizingMode = "AUTO";
        section.counterAxisSizingMode = "AUTO";
        section.layoutAlign = "INHERIT";
        section.clipsContent = false;

        const info = figma.createFrame();
        info.name = "Section Info";
        info.layoutMode = "VERTICAL";
        info.fills = [];
        info.itemSpacing = 8;
        info.resize(1680, 100);
        info.primaryAxisSizingMode = "AUTO";
        info.counterAxisSizingMode = "FIXED";
        info.layoutAlign = "INHERIT";
        info.clipsContent = false;

        const titleNode = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        titleNode.fontName = { family: "Inter", style: "Semi Bold" };
        titleNode.characters = title;
        titleNode.fontSize = 24;
        titleNode.layoutAlign = "STRETCH";
        titleNode.textAutoResize = "HEIGHT";
        titleNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        info.appendChild(titleNode);

        const descNode = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        descNode.fontName = { family: "Inter", style: "Regular" };
        descNode.characters = description;
        descNode.fontSize = 16;
        descNode.layoutAlign = "STRETCH";
        descNode.textAutoResize = "HEIGHT";
        descNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        info.appendChild(descNode);

        section.appendChild(info);
        section.appendChild(component);
        root.appendChild(section);
    }

    private enforceComponentWidth(node: SceneNode, width: number): void {
        if ("resize" in node) {
            node.resize(width, node.height);
        }
        if ("layoutAlign" in node) {
            node.layoutAlign = "INHERIT";
        }
    }
}

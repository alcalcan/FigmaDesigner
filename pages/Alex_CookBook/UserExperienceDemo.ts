import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { AffinityMap } from "../../components/Alex_CookBook/miscellaneous/AffinityMap";
import { FlowDiagram } from "../../components/Alex_CookBook/miscellaneous/FlowDiagram";
import { DecisionMap } from "../../components/Alex_CookBook/miscellaneous/DecisionMap";
import { SiteArchitecture } from "../../components/Alex_CookBook/miscellaneous/SiteArchitecture";

export class UserExperienceDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<FrameNode> {
        const root = await this.initPage("UX Components & Flow Demo", 1920);

        await this.addHeader(
            root,
            "User Experience Architecture",
            "A collection of components that help define and visualize user journeys, site structure, and complex decision flows."
        );

        // Affinity Map
        await this.addSection(
            root,
            "Affinity Map",
            "Use this component to visualize groupings of user feedback, research insights, or brainstorming notes.",
            async (container) => {
                const affinityMap = new AffinityMap();
                const node = await affinityMap.create({});
                const wrapped = await this.wrapWithCaption(node, "1. Affinity / Concept Grouping", "AffinityMapWrapper", true);
                container.appendChild(wrapped);
            },
            { padding: 48 }
        );

        // Flow Diagram
        await this.addSection(
            root,
            "User Flow Diagram",
            "This component demonstrates a sequential journey a user takes through the application.",
            async (container) => {
                const flowDiagram = new FlowDiagram();
                const node = await flowDiagram.create({});
                const wrapped = await this.wrapWithCaption(node, "2. Linear User Flow", "FlowDiagramWrapper", true);
                container.appendChild(wrapped);
            },
            { padding: 48 }
        );

        // Decision Map / Tree
        await this.addSection(
            root,
            "Decision Map",
            "A branching logic structure useful for mapping out logic and routing within the application.",
            async (container) => {
                const row = this.createRow(container, 48);

                const decisionMap = new DecisionMap();
                const defaultNode = await decisionMap.create({});
                const defaultWrapped = await this.wrapWithCaption(defaultNode, "3. Binary Logic Branching", "DecisionMapWrapper");

                const turnUpNode = await decisionMap.create({ connectorVariant: "turn-up" });
                const turnUpWrapped = await this.wrapWithCaption(
                    turnUpNode,
                    "3b. Turn-Up Connector (Returns to Earlier Step)",
                    "DecisionMapTurnUpWrapper"
                );

                row.appendChild(defaultWrapped);
                row.appendChild(turnUpWrapped);
            },
            { padding: 48 }
        );

        // Site Architecture
        await this.addSection(
            root,
            "Site Architecture",
            "A structural view of the application's page hierarchy.",
            async (container) => {
                const row = this.createRow(container, 48);

                const siteArchitecture = new SiteArchitecture();
                const node = await siteArchitecture.create({});
                const wrapped = await this.wrapWithCaption(node, "4. Level 1 and Level 2 Pages", "SiteArchitectureWrapper");

                row.appendChild(wrapped);
            }
        );

        return root;
    }
}

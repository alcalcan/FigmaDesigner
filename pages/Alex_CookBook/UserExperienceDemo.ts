import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { AffinityMap } from "../../components/Alex_CookBook/miscellaneous/AffinityMap";
import { FlowDiagram } from "../../components/Alex_CookBook/miscellaneous/FlowDiagram";
import { DecisionMap } from "../../components/Alex_CookBook/miscellaneous/DecisionMap";
import { SiteArchitecture } from "../../components/Alex_CookBook/miscellaneous/SiteArchitecture";

export class UserExperienceDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<FrameNode> {
        const root = await this.initPage("UX Components & Flow Demo", 1200);

        await this.addHeader(
            root,
            "User Experience Architecture",
            "A collection of components that help define and visualize user journeys, site structure, and complex decision flows."
        );

        // Affinity Map
        await this.addSection(
            root,
            "1. Affinity Map",
            "Use this component to visualize groupings of user feedback, research insights, or brainstorming notes.",
            async (container) => {
                const affinityMap = new AffinityMap();
                const node = await affinityMap.create({});
                const wrapped = await this.wrapWithCaption(node, "Affinity / Concept Grouping", "AffinityMapWrapper", true);
                container.appendChild(wrapped);
            },
            { padding: 48 }
        );

        // Flow Diagram
        await this.addSection(
            root,
            "2. User Flow Diagram",
            "This component demonstrates a sequential journey a user takes through the application.",
            async (container) => {
                const flowDiagram = new FlowDiagram();
                const node = await flowDiagram.create({});
                const wrapped = await this.wrapWithCaption(node, "Linear User Flow", "FlowDiagramWrapper", true);
                container.appendChild(wrapped);
            },
            { padding: 48 }
        );

        // Decision Map / Tree
        await this.addSection(
            root,
            "3. Decision Map",
            "A branching logic structure useful for mapping out logic and routing within the application.",
            async (container) => {
                const row = this.createRow(container, 48);

                const decisionMap = new DecisionMap();
                const node = await decisionMap.create({});
                const wrapped = await this.wrapWithCaption(node, "Binary Logic Branching", "DecisionMapWrapper");

                // Add an alternate simpler flow just purely for visual balancing or keep it simple
                row.appendChild(wrapped);
            },
            { padding: 48 }
        );

        // Site Architecture
        await this.addSection(
            root,
            "4. Site Architecture",
            "A structural view of the application's page hierarchy.",
            async (container) => {
                const row = this.createRow(container, 48);

                const siteArchitecture = new SiteArchitecture();
                const node = await siteArchitecture.create({});
                const wrapped = await this.wrapWithCaption(node, "Level 1 and Level 2 Pages", "SiteArchitectureWrapper");

                row.appendChild(wrapped);
            }
        );

        return root;
    }
}

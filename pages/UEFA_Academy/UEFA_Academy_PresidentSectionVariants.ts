import { ComponentProps } from "../../components/BaseComponent";
import { PresidentSection } from "../../components/UEFA_Academy/PresidentSection/PresidentSection";
import { BaseDemoPage } from "../Alex_CookBook/BaseDemoPage";

export class UEFA_Academy_PresidentSectionVariants extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("UEFA Academy - President Section Variants", 1680, true);

        await this.addHeader(
            root,
            "President Section Variants",
            "This page demonstrates the different variants of the President Section component."
        );

        const presidentSectionComp = new PresidentSection();

        await this.addSection(
            root,
            "1. Empty Variant",
            "President message exact reproduction of the standard variant but without the 'Follow us' block.",
            async (container) => {
                const variant1 = await presidentSectionComp.create({ x: 0, y: 0, variant: 'empty' });
                container.appendChild(variant1);
            }
        );

        await this.addSection(
            root,
            "2. Outside Variant",
            "President message with 'Follow Us' section displayed outside the main content card.",
            async (container) => {
                const variant2 = await presidentSectionComp.create({ x: 0, y: 0, variant: 'outside' });
                container.appendChild(variant2);
            }
        );

        await this.addSection(
            root,
            "3. Stay Connected Variant",
            "President message with a custom 'Stay Connected' panel housing the Follow Us icons.",
            async (container) => {
                const variant3 = await presidentSectionComp.create({ x: 0, y: 0, variant: 'stay-connected' });
                container.appendChild(variant3);
            }
        );

        await this.addSection(
            root,
            "4. In-Card Variant",
            "President message with the 'Follow us' and LinkedIn icon located inside the white card.",
            async (container) => {
                const variant4 = await presidentSectionComp.create({ x: 0, y: 0, variant: 'in-card' });
                container.appendChild(variant4);
            }
        );

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

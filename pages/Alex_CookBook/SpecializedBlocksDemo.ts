import { BaseDemoPage } from "./BaseDemoPage";
import { ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { createFrame, createText } from "../../components/ComponentHelpers";

// Components
import { Browser } from "../../components/Alex_CookBook/Browser/Browser";

export class SpecializedBlocksDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("Containers & Wrappers");
        await this.addHeader(root, "Containers & Wrappers", "Showcasing structural containers and shell mockups.");

        // Helper function to wrap components with descriptive text labels underneath
        const wrapWithCaption = async (node: SceneNode, captionText: string, wrapperName = "Wrapper"): Promise<FrameNode> => {
            const wrapperDef: NodeDefinition = {
                type: "FRAME",
                name: wrapperName,
                props: {
                    layoutMode: "VERTICAL",
                    itemSpacing: 16,
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "FIXED",
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    fills: [],
                    clipsContent: false,
                    layoutAlign: "STRETCH",
                },
                layoutProps: { parentIsAutoLayout: true },
                children: [
                    createText("Caption", captionText, 14, "Medium", { r: 0.4, g: 0.4, b: 0.4 }, {
                        font: { family: "Inter", style: "Medium" }
                    })
                ]
            };

            const wrapper = await this.renderDefinition(wrapperDef) as FrameNode;
            wrapper.insertChild(0, node);
            return wrapper;
        };

        // --- BROWSER MOCKUP ---
        await this.addSection(root, "Browser Container", "Wrapper for showing generic screens.", async (container) => {
            const browser = new Browser();
            const browserNode = await browser.create({});
            (browserNode as FrameNode).layoutAlign = "STRETCH";

            container.appendChild(await wrapWithCaption(browserNode, "1. Responsive Browser Shell"));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

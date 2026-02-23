import { BaseDemoPage } from "./BaseDemoPage";
import { ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { createFrame, createText } from "../../components/ComponentHelpers";

// Components
import { Info_generated } from "../../components/Alex_CookBook/Info_generated/Info_generated";
import { Toast } from "../../components/Alex_CookBook/toast/toast";

export class InfoAndToastsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        const root = await this.initPage("Info & Toasts");
        await this.addHeader(root, "Info & Toasts", "Showcasing informational blocks and notification toasts.");

        // Helper function to wrap components with descriptive text labels underneath
        const wrapWithCaption = async (node: SceneNode, captionText: string, wrapperName = "Wrapper"): Promise<FrameNode> => {
            const wrapperDef: NodeDefinition = {
                type: "FRAME",
                name: wrapperName,
                props: {
                    layoutMode: "VERTICAL",
                    itemSpacing: 16,
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO",
                    primaryAxisAlignItems: "CENTER",
                    counterAxisAlignItems: "CENTER",
                    fills: [],
                    clipsContent: false,
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

        // --- EMBEDDED INFO BLOCKS ---
        await this.addSection(root, "Embedded Info Blocks", "Standard blocks rendering inline with content.", async (container) => {
            const row1 = figma.createFrame();
            row1.name = "Row Simple";
            row1.layoutMode = "HORIZONTAL";
            row1.itemSpacing = 24;
            row1.layoutAlign = "STRETCH";
            row1.primaryAxisSizingMode = "FIXED";
            row1.counterAxisSizingMode = "AUTO";
            row1.fills = [];
            row1.clipsContent = false;

            const row2 = figma.createFrame();
            row2.name = "Row Complex";
            row2.layoutMode = "HORIZONTAL";
            row2.itemSpacing = 24;
            row2.layoutAlign = "STRETCH";
            row2.primaryAxisSizingMode = "FIXED";
            row2.counterAxisSizingMode = "AUTO";
            row2.fills = [];
            row2.clipsContent = false;

            const info = new Info_generated();

            // Row 1: Simple Info Variants
            row1.appendChild(await wrapWithCaption(
                await info.create({ width: 280, variant: "simple", colorTheme: "blue", description: "This is a simple blue info tip." }),
                "1. Simple Blue"
            ));
            row1.appendChild(await wrapWithCaption(
                await info.create({ width: 280, variant: "simple", colorTheme: "red", description: "There might be a critical issue." }),
                "2. Simple Red"
            ));
            row1.appendChild(await wrapWithCaption(
                await info.create({ width: 280, variant: "simple", colorTheme: "yellow", description: "Action required soon." }),
                "3. Simple Yellow"
            ));

            // Row 2: Complex Info Variants
            row2.appendChild(await wrapWithCaption(
                await info.create({
                    width: 280, variant: "complex", colorTheme: "blue",
                    title: "Information", description: "Highly detailed contextual message spanning lines."
                }),
                "4. Complex Blue"
            ));
            row2.appendChild(await wrapWithCaption(
                await info.create({
                    width: 280, variant: "complex", colorTheme: "red",
                    title: "Alert", description: "Critical network failure detected in the region."
                }),
                "5. Complex Red"
            ));
            row2.appendChild(await wrapWithCaption(
                await info.create({
                    width: 280, variant: "complex", colorTheme: "yellow",
                    title: "Warning", description: "Your subscription is about to expire in 3 days."
                }),
                "6. Complex Yellow"
            ));

            container.appendChild(row1);
            container.appendChild(row2);
        });

        // --- TOAST NOTIFICATIONS (RIGHT ALIGNED) ---
        await this.addSection(root, "Right-Aligned Toasts & Notifications", "Absolute positioning on the right side.", async (container) => {
            const toastWrapper = figma.createFrame();
            toastWrapper.name = "Right-Aligned Environment";
            toastWrapper.layoutMode = "VERTICAL";
            toastWrapper.itemSpacing = 24;
            toastWrapper.layoutAlign = "STRETCH";
            toastWrapper.primaryAxisSizingMode = "AUTO";
            toastWrapper.counterAxisSizingMode = "AUTO";
            toastWrapper.primaryAxisAlignItems = "MAX"; // Align to the right
            toastWrapper.paddingTop = 32;
            toastWrapper.paddingBottom = 32;
            toastWrapper.paddingLeft = 32;
            toastWrapper.paddingRight = 32;
            toastWrapper.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.97, b: 0.99 } }];
            toastWrapper.cornerRadius = 12;
            toastWrapper.clipsContent = false;

            const toastBlock = new Toast();

            toastWrapper.appendChild(await wrapWithCaption(
                await toastBlock.create({
                    width: 400, variant: "success", title: "Changes Saved", description: "Your profile has been updated successfully."
                }),
                "7. Success Toast (Right)"
            ));

            toastWrapper.appendChild(await wrapWithCaption(
                await toastBlock.create({
                    width: 400, variant: "error", title: "Upload Failed", description: "The image size exceeds the 5MB limit.", actionText: "Retry"
                }),
                "8. Error Toast with Action"
            ));

            container.appendChild(toastWrapper);
        });

        // --- TOAST NOTIFICATIONS (LEFT ALIGNED) ---
        await this.addSection(root, "Left-Aligned Toasts & Notifications", "Variations for left-positioned UI elements.", async (container) => {
            const toastWrapper = figma.createFrame();
            toastWrapper.name = "Left-Aligned Environment";
            toastWrapper.layoutMode = "VERTICAL";
            toastWrapper.itemSpacing = 24;
            toastWrapper.layoutAlign = "STRETCH";
            toastWrapper.primaryAxisSizingMode = "AUTO";
            toastWrapper.counterAxisSizingMode = "AUTO";
            toastWrapper.primaryAxisAlignItems = "MIN"; // Align to the left
            toastWrapper.paddingTop = 32;
            toastWrapper.paddingBottom = 32;
            toastWrapper.paddingLeft = 32;
            toastWrapper.paddingRight = 32;
            toastWrapper.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.97, b: 0.99 } }];
            toastWrapper.cornerRadius = 12;
            toastWrapper.clipsContent = false;

            const toastBlock = new Toast();

            toastWrapper.appendChild(await wrapWithCaption(
                await toastBlock.create({
                    width: 360, variant: "info", title: "New Feature", description: "Check out our new dark mode settings in the preferences menu.", actionText: "View"
                }),
                "9. Info Toast (Left)"
            ));

            toastWrapper.appendChild(await wrapWithCaption(
                await toastBlock.create({
                    width: 360, variant: "warning", title: "Storage Almost Full", description: "You have used 90% of your available storage.", actionText: "Upgrade"
                }),
                "10. Warning Toast with Action"
            ));

            container.appendChild(toastWrapper);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

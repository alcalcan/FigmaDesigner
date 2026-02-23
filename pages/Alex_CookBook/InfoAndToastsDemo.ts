import { BaseDemoPage } from "./BaseDemoPage";
import { ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { createFrame, createText } from "../../components/ComponentHelpers";

// Components
import { Info_generated } from "../../components/Alex_CookBook/Info_generated/Info_generated";
import { Toast } from "../../components/Alex_CookBook/toast/toast";

// Icons
import { Lucide_info } from "../../components/lucide_icons/Lucide_info/Lucide_info";
import { Lucide_check_circle } from "../../components/lucide_icons/Lucide_check_circle/Lucide_check_circle";
import { Lucide_star } from "../../components/lucide_icons/Lucide_star/Lucide_star";
import { Lucide_x } from "../../components/lucide_icons/Lucide_x/Lucide_x";

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

        // --- SLIM INFO BLOCKS ---
        await this.addSection(root, "Slim Info Blocks", "Compact, single-row informational bars.", async (container) => {
            const rowSlim = figma.createFrame();
            rowSlim.name = "Row Slim";
            rowSlim.layoutMode = "HORIZONTAL";
            rowSlim.itemSpacing = 24;
            rowSlim.layoutAlign = "STRETCH";
            rowSlim.primaryAxisSizingMode = "FIXED";
            rowSlim.counterAxisSizingMode = "AUTO";
            rowSlim.fills = [];
            rowSlim.clipsContent = false;

            const info = new Info_generated();

            rowSlim.appendChild(await wrapWithCaption(
                await info.create({ width: 280, variant: "slim", colorTheme: "blue", description: "Operation successful." }),
                "7. Slim Blue"
            ));
            rowSlim.appendChild(await wrapWithCaption(
                await info.create({ width: 280, variant: "slim", colorTheme: "red", description: "Failed to connect." }),
                "8. Slim Red"
            ));
            rowSlim.appendChild(await wrapWithCaption(
                await info.create({ width: 280, variant: "slim", colorTheme: "yellow", description: "Syncing data..." }),
                "9. Slim Yellow"
            ));

            container.appendChild(rowSlim);
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
                "10. Success Toast (Right)"
            ));

            toastWrapper.appendChild(await wrapWithCaption(
                await toastBlock.create({
                    width: 400, variant: "error", title: "Upload Failed", description: "The image size exceeds the 5MB limit.", actionText: "Retry"
                }),
                "11. Error Toast with Action"
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
                "12. Info Toast (Left)"
            ));

            toastWrapper.appendChild(await wrapWithCaption(
                await toastBlock.create({
                    width: 360, variant: "warning", title: "Storage Almost Full", description: "You have used 90% of your available storage.", actionText: "Upgrade"
                }),
                "13. Warning Toast with Action"
            ));

            container.appendChild(toastWrapper);
        });

        // --- PREMIUM INFO TOASTS (METRIC CARD STYLE) ---
        await this.addSection(root, "Premium Info Toasts", "Adopting the premium visual language of the metric card components.", async (container) => {
            const toastWrapper = figma.createFrame();
            toastWrapper.name = "Premium Environment";
            toastWrapper.layoutMode = "VERTICAL";
            toastWrapper.itemSpacing = 24;
            toastWrapper.layoutAlign = "STRETCH";
            toastWrapper.primaryAxisSizingMode = "AUTO";
            toastWrapper.counterAxisSizingMode = "AUTO";
            toastWrapper.primaryAxisAlignItems = "MIN";
            toastWrapper.paddingTop = 40;
            toastWrapper.paddingBottom = 40;
            toastWrapper.paddingLeft = 40;
            toastWrapper.paddingRight = 40;
            toastWrapper.fills = [{ type: "SOLID", color: { r: 0.94, g: 0.95, b: 0.98 } }];
            toastWrapper.cornerRadius = 16;
            toastWrapper.clipsContent = false;

            const createPremiumToast = async (nodes: (NodeDefinition | SceneNode | null)[], width = 450): Promise<FrameNode> => {
                const toastDef: NodeDefinition = {
                    type: "FRAME",
                    name: "Premium Toast",
                    props: {
                        layoutMode: "HORIZONTAL",
                        primaryAxisAlignItems: "MIN",
                        counterAxisAlignItems: "CENTER",
                        itemSpacing: 12,
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 16,
                        cornerRadius: 32,
                        fills: [
                            {
                                visible: true,
                                opacity: 1,
                                blendMode: "NORMAL",
                                type: "GRADIENT_LINEAR",
                                gradientStops: [
                                    { color: { r: 1, g: 1, b: 1, a: 1 }, position: 0 },
                                    { color: { r: 0.98, g: 0.99, b: 1, a: 0.96 }, position: 1 }
                                ],
                                gradientTransform: [
                                    [1, 0, 0],
                                    [0, 1, 0]
                                ]
                            }
                        ],
                        strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 1 }],
                        strokeWeight: 2,
                        strokeAlign: "OUTSIDE",
                        effects: [
                            { visible: true, type: "BACKGROUND_BLUR", radius: 24 },
                            {
                                visible: true,
                                blendMode: "NORMAL",
                                type: "DROP_SHADOW",
                                radius: 32,
                                color: { r: 0.05, g: 0.1, b: 0.2, a: 0.06 },
                                offset: { x: 0, y: 16 },
                                spread: 0,
                                showShadowBehindNode: true
                            },
                            {
                                visible: true,
                                blendMode: "NORMAL",
                                type: "DROP_SHADOW",
                                radius: 4,
                                color: { r: 0, g: 0, b: 0, a: 0.02 },
                                offset: { x: 0, y: 4 },
                                spread: 0,
                                showShadowBehindNode: true
                            }
                        ]
                    },
                    layoutProps: {
                        width: width,
                        layoutSizingHorizontal: "FIXED",
                        layoutSizingVertical: "HUG",
                        parentIsAutoLayout: true
                    },
                    children: nodes.filter(n => n !== null) as NodeDefinition[]
                };
                return await this.renderDefinition(toastDef) as FrameNode;
            };

            // Variant 1: [Icon] [Bold Text] [X] (Small icon on right)
            const iconSize = 20;
            const xIconSize = 16;

            const variant1 = await createPremiumToast([
                {
                    type: "COMPONENT",
                    name: "Info Icon",
                    component: Lucide_info,
                    props: { width: iconSize, height: iconSize, color: { r: 0.15, g: 0.45, b: 0.95 } },
                    layoutProps: { parentIsAutoLayout: true }
                },
                createText("Label", "Component successfully updated.", 14, "Bold", { r: 0.05, g: 0.08, b: 0.15 }, {
                    font: { family: "Inter", style: "Bold" },
                    layoutGrow: 1,
                    layoutSizingHorizontal: "FILL"
                }),
                {
                    type: "COMPONENT",
                    name: "Close Icon",
                    component: Lucide_x,
                    props: { width: xIconSize, height: xIconSize, color: { r: 0.45, g: 0.5, b: 0.6 } },
                    layoutProps: { parentIsAutoLayout: true }
                }
            ]);

            // Variant 2: [Regular Text] [Large 48px Icon]
            const largeIconSize = 48;
            const variant2 = await createPremiumToast([
                createText("Description", "Your special achievement has been unlocked!", 14, "Regular", { r: 0.45, g: 0.5, b: 0.6 }, {
                    font: { family: "Inter", style: "Regular" },
                    layoutGrow: 1,
                    layoutSizingHorizontal: "FILL"
                }),
                {
                    type: "COMPONENT",
                    name: "Celebration Icon",
                    component: Lucide_star,
                    props: {
                        width: largeIconSize,
                        height: largeIconSize,
                        color: { r: 0.95, g: 0.75, b: 0.1 }
                    },
                    layoutProps: {
                        width: largeIconSize,
                        height: largeIconSize,
                        layoutSizingHorizontal: "FIXED",
                        layoutSizingVertical: "FIXED",
                        parentIsAutoLayout: true
                    }
                }
            ]);

            toastWrapper.appendChild(await wrapWithCaption(variant1, "14. Premium Success (Bold + X)"));
            toastWrapper.appendChild(await wrapWithCaption(variant2, "15. Achievement Unlock (Large Icon)"));

            container.appendChild(toastWrapper);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

import { BaseDemoPage } from "./BaseDemoPage";
import { modal } from "../../components/Alex_CookBook/modal/modal";
import { createText, createFrame } from "../../components/ComponentHelpers";
import { input_field } from "../../components/Alex_CookBook/input_field/input_field";
import { button } from "../../components/Alex_CookBook/button/button";
import { ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Info_generated } from "../../components/Alex_CookBook/Info_generated/Info_generated";

export class ModalsDemo extends BaseDemoPage {
    async create(_props: ComponentProps): Promise<FrameNode> {
        const root = await this.initPage("Modals Demo");

        await this.addHeader(root, "Modals", "A versatile modal component supporting standard and separated layouts.");

        // Helper function to wrap modals with descriptive text labels underneath
        const wrapWithCaption = async (modalNode: SceneNode, captionText: string, wrapperName = "Modal Wrapper"): Promise<FrameNode> => {
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
            wrapper.insertChild(0, modalNode);
            return wrapper;
        };

        // Form fields to reuse across examples
        const firstNameInput: NodeDefinition = {
            type: "COMPONENT",
            component: input_field,
            name: "First Name Input",
            props: { label: "First Name", placeholder: "Alexandru", type: "simple" },
            layoutProps: { layoutAlign: "STRETCH" }
        };

        const lastNameInput: NodeDefinition = {
            type: "COMPONENT",
            component: input_field,
            name: "Last Name Input",
            props: { label: "Last Name", placeholder: "Calcan", type: "simple" },
            layoutProps: { layoutAlign: "STRETCH" }
        };

        // Section 1: Standard Modals
        await this.addSection(root, "Standard Unified Modals", "Basic alert and confirmation modals.", async (container) => {
            const basicModal = new modal();
            const basicModalNode = await basicModal.create({
                title: "Are you sure you want to delete this?",
                description: "This action cannot be undone.",
                variant: "unified",
                primaryCtaText: "Delete",
                secondaryCtaText: "Cancel",
                width: 480
            });
            container.appendChild(await wrapWithCaption(basicModalNode, "1. Standard Danger Modal"));

            // Icon Modal Example
            const iconModal = new modal();
            const iconModalNode = await iconModal.create({
                title: "Critical System Error",
                description: "The database connection could not be established. Please check your network and try again.",
                variant: "unified",
                primaryCtaText: "Retry Connection",
                secondaryCtaText: "Dismiss",
                statusIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
                width: 480
            });
            container.appendChild(await wrapWithCaption(iconModalNode, "2. Icon Alert Modal"));

            const formModal = new modal();
            const formModalNode = await formModal.create({
                title: "Create Account",
                description: "Enter your details to register.",
                variant: "unified",
                primaryCtaText: "Register",
                secondaryCtaText: "Cancel",
                bodyContent: [
                    {
                        type: "COMPONENT",
                        component: Info_generated,
                        name: "Registration Warning",
                        props: {
                            variant: "slim",
                            colorTheme: "yellow",
                            description: "Your data will be stored securely.",
                            showDismiss: false
                        },
                        layoutProps: { layoutAlign: "STRETCH" }
                    },
                    firstNameInput,
                    lastNameInput
                ],
                width: 480
            });
            container.appendChild(await wrapWithCaption(formModalNode, "3. Standard Form Modal"));
        });

        // Section 2: Unified with Dividers
        await this.addSection(root, "Unified Modals with Dividers", "A solid background split by subtle lines.", async (container) => {
            const unifiedDividerModal = new modal();
            const unifiedDividerModalNode = await unifiedDividerModal.create({
                title: "Account Settings",
                description: "Manage your personal information and preferences.",
                variant: "unified_with_dividers",
                primaryCtaText: "Save Changes",
                secondaryCtaText: "Discard",
                bodyContent: [firstNameInput, lastNameInput],
                width: 500
            });
            container.appendChild(await wrapWithCaption(unifiedDividerModalNode, "4. Divided Sections Layout"));
        });

        // Section 3: Separated Modals
        await this.addSection(root, "Separated Modals", "Visually distinguishes the header, body, and footer.", async (container) => {
            const separatedModal = new modal();
            const separatedModalNode = await separatedModal.create({
                title: "Edit Profile",
                description: "Update your personal information below.",
                variant: "separated",
                primaryCtaText: "Save Changes",
                secondaryCtaText: "Discard",
                bodyContent: [firstNameInput, lastNameInput],
                width: 500
            });
            container.appendChild(await wrapWithCaption(separatedModalNode, "5. Separated Layout Demo"));

            // Custom Confirmation Modal based on User Snippet
            const confirmationModal = new modal();
            const confirmationModalNode = await confirmationModal.create({
                title: "Configure Offer 13",
                variant: "separated",
                showCloseIcon: false,
                width: 292,
                rootCornerRadius: 0,
                rootStrokes: [{ type: "SOLID", color: { r: 19 / 255, g: 55 / 255, b: 66 / 255 } }], // Dark Teal stroke
                headerFill: { r: 19 / 255, g: 55 / 255, b: 66 / 255 }, // Dark Teal
                titleColorOverride: { r: 1, g: 1, b: 1 }, // White text
                bodyFill: { r: 248 / 255, g: 248 / 255, b: 249 / 255 }, // Light Grey
                bodyContent: [
                    {
                        type: "COMPONENT",
                        component: input_field,
                        name: "Subsidy Rate",
                        props: { label: "Subsidy rate", placeholder: "0 - 100 <%>", type: "simple" },
                        layoutProps: { layoutAlign: "STRETCH" }
                    },
                    {
                        type: "COMPONENT",
                        component: input_field,
                        name: "Min Loan",
                        props: { label: "Min loan value", placeholder: "Please type a value <£>", type: "simple" },
                        layoutProps: { layoutAlign: "STRETCH" }
                    },
                    {
                        type: "COMPONENT",
                        component: input_field,
                        name: "Max Loan",
                        props: { label: "Max loan value", placeholder: "Please type a value <£>", type: "simple" },
                        layoutProps: { layoutAlign: "STRETCH" }
                    }
                ],
                customFooterContent: [
                    {
                        type: "FRAME",
                        name: "BTN_standard",
                        props: {
                            layoutMode: "HORIZONTAL",
                            itemSpacing: 8,
                            paddingTop: 4,
                            paddingRight: 16,
                            paddingBottom: 4,
                            paddingLeft: 16,
                            cornerRadius: 2,
                            fills: [{ type: "SOLID", color: { r: 93 / 255, g: 111 / 255, b: 117 / 255 } }], // #5D6F75
                            primaryAxisSizingMode: "AUTO",
                            counterAxisSizingMode: "AUTO",
                        },
                        layoutProps: { parentIsAutoLayout: true },
                        children: [
                            createText("BTN_label", "Attach Offer", 16, "Bold", { r: 1, g: 1, b: 1 }, {
                                font: { family: "Inter", style: "Bold" },
                                letterSpacing: { unit: "PERCENT", value: 1.25 },
                                lineHeight: { unit: "PIXELS", value: 24 }
                            })
                        ]
                    },
                    {
                        type: "FRAME",
                        name: "BTN_standard",
                        props: {
                            layoutMode: "HORIZONTAL",
                            itemSpacing: 8,
                            paddingTop: 4,
                            paddingRight: 16,
                            paddingBottom: 4,
                            paddingLeft: 16,
                            cornerRadius: 2,
                            fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                            strokes: [{ type: "SOLID", color: { r: 19 / 255, g: 55 / 255, b: 66 / 255 } }], // #133742
                            strokeWeight: 1,
                            primaryAxisSizingMode: "AUTO",
                            counterAxisSizingMode: "AUTO",
                        },
                        layoutProps: { parentIsAutoLayout: true },
                        children: [
                            createText("BTN_label", "Cancel", 16, "Bold", { r: 19 / 255, g: 55 / 255, b: 66 / 255 }, {
                                font: { family: "Inter", style: "Bold" },
                                letterSpacing: { unit: "PERCENT", value: 1.25 },
                                lineHeight: { unit: "PIXELS", value: 24 }
                            })
                        ]
                    }
                ]
            });
            container.appendChild(await wrapWithCaption(confirmationModalNode, "6. DEKO Custom Component", "DEKO"));
        });

        // Section 4: Edge-to-edge content
        await this.addSection(root, "Edge-to-Edge Content", "Using bodyPadding = 'none' for full-width content.", async (container) => {
            const edgeModal = new modal();
            const edgeModalNode = await edgeModal.create({
                title: "Full Width Media/Data",
                description: "This modal uses bodyPadding = 'none'",
                variant: "separated",
                bodyPadding: "none",
                primaryCtaText: "Confirm",
                bodyContent: [
                    {
                        type: "FRAME",
                        name: "Placeholder Rect",
                        props: {
                            layoutMode: "HORIZONTAL",
                            primaryAxisSizingMode: "FIXED",
                            counterAxisSizingMode: "FIXED",
                            fills: [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.92 } }]
                        },
                        layoutProps: {
                            height: 200,
                            layoutAlign: "STRETCH",
                            parentIsAutoLayout: true
                        },
                        children: [
                            createText("Placeholder Text", "600 x 200 Area", 16, "Semi Bold", { r: 0.4, g: 0.4, b: 0.4 }, {
                                font: { family: "Inter", style: "Semi Bold" },
                                textAlignHorizontal: "CENTER",
                                textAlignVertical: "CENTER",
                                layoutAlign: "STRETCH",
                                layoutGrow: 1
                            })
                        ]
                    }
                ],
                width: 600
            });
            container.appendChild(await wrapWithCaption(edgeModalNode, "7. Zero Padding Container"));
        });

        return root;
    }
}

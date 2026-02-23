import { BaseDemoPage } from "./BaseDemoPage";
import { modal } from "../../components/Alex_CookBook/modal/modal";
import { createText } from "../../components/ComponentHelpers";
import { input_field } from "../../components/Alex_CookBook/input_field/input_field";
import { ComponentProps, NodeDefinition } from "../../components/BaseComponent";

export class ModalsDemo extends BaseDemoPage {
    async create(_props: ComponentProps): Promise<FrameNode> {
        const root = await this.initPage("Modals Demo");

        await this.addHeader(root, "Modals", "A versatile modal component supporting standard and separated layouts.");

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
            container.appendChild(await basicModal.create({
                title: "Alert",
                description: "This is a basic alert with just a title and body.",
                variant: "unified",
                width: 400
            }));

            const footerModal = new modal();
            container.appendChild(await footerModal.create({
                title: "Are you sure?",
                description: "This action cannot be undone. Are you sure you wish to proceed?",
                variant: "unified",
                primaryCtaText: "Yes, Delete",
                secondaryCtaText: "Cancel",
                width: 480
            }));
            const formModal = new modal();
            container.appendChild(await formModal.create({
                title: "Create Account",
                description: "Enter your details to register.",
                variant: "unified",
                primaryCtaText: "Register",
                secondaryCtaText: "Cancel",
                bodyContent: [firstNameInput, lastNameInput],
                width: 480
            }));
        });

        // Section 2: Unified with Dividers
        await this.addSection(root, "Unified Modals with Dividers", "A solid background split by subtle lines.", async (container) => {
            const unifiedDividerModal = new modal();
            container.appendChild(await unifiedDividerModal.create({
                title: "Account Settings",
                description: "Manage your personal information and preferences.",
                variant: "unified_with_dividers",
                primaryCtaText: "Save Changes",
                secondaryCtaText: "Discard",
                bodyContent: [firstNameInput, lastNameInput],
                width: 500
            }));
        });

        // Section 3: Separated Modals
        await this.addSection(root, "Separated Modals", "Visually distinguishes the header, body, and footer.", async (container) => {
            const separatedModal = new modal();
            container.appendChild(await separatedModal.create({
                title: "Edit Profile",
                description: "Update your personal information below.",
                variant: "separated",
                primaryCtaText: "Save Changes",
                secondaryCtaText: "Discard",
                bodyContent: [firstNameInput, lastNameInput],
                width: 500
            }));
        });

        // Section 4: Edge-to-edge content
        await this.addSection(root, "Edge-to-Edge Content", "Using bodyPadding = 'none' for full-width content.", async (container) => {
            const edgeModal = new modal();
            container.appendChild(await edgeModal.create({
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
            }));
        });

        return root;
    }
}

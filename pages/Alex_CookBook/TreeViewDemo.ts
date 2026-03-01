import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { tree_view } from "../../components/Alex_CookBook/tree_view/tree_view";
import { input_field } from "../../components/Alex_CookBook/input_field/input_field";
import { button } from "../../components/Alex_CookBook/button/button";
import { progress_stepper } from "../../components/Alex_CookBook/progress_stepper/progress_stepper";
import { Card } from "../../components/Alex_CookBook/Card/Card";

export class TreeViewDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Alex CookBook - Tree View Demo", 1200);

        await this.addHeader(
            root,
            "Tree View",
            "A parametric component for rendering vertical document outlines, system logs, and file explorer trees."
        );

        const tv = new tree_view();

        const normalizeAutoLayoutChild = (node: SceneNode, align: "MIN" | "MAX" | "STRETCH" | "INHERIT" = "STRETCH") => {
            if ("layoutPositioning" in node) {
                node.layoutPositioning = "AUTO";
            }
            if ("layoutAlign" in node) {
                node.layoutAlign = align;
            }
        };

        // --- SECTION 1: Iris Tree View ("body" variant) - Document Structure ---
        await this.addSection(root, "Iris Tree View ('body' variant)", "Flat document outline for Iris report structures.", async (container) => {
            const wrapper = this.createColumn(container, 32);
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "CENTER";

            const bodyVariant = await tv.create({
                width: 400,
                leftColumnPaddingTop: 0,
                nodes: [
                    { title: "Cover Sheet", iconType: "check", iconColor: "blue", status: "completed" },
                    { title: "Information page", iconType: "check", iconColor: "blue", status: "completed" },
                    { title: "Contents page", iconType: "check", iconColor: "blue", status: "completed" },
                    { title: "Director’s report", subTitle: "Optional", iconType: "check", iconColor: "blue", status: "completed" },
                    { title: "Accountants report", iconType: "empty-circle", iconColor: "grey", status: "inactive" },
                    { title: "Profit and loss account", iconType: "empty-circle", iconColor: "grey", status: "inactive" },
                    { title: "Balance sheet", iconType: "empty-circle", iconColor: "grey", status: "inactive" },
                    { title: "Accounting policies", iconType: "empty-circle", iconColor: "grey", status: "inactive" },
                    { title: "Notes to the financial statements", iconType: "empty-circle", iconColor: "grey", status: "inactive" }
                ]
            });
            const card = await new Card().create({
                variant: "elevated",
                padding: 40,
                fillWidth: true,
                body: Card.node(bodyVariant, { fill: true })
            });
            const wrappedCard = await this.wrapWithCaption(card, "01 - Flat Document Outline", "Wrapper", true);
            wrapper.appendChild(wrappedCard);
        });

        // --- SECTION 2: Iris Tree View Original ("All_Notes" variant) - Flat Notes List ---
        await this.addSection(root, "Iris Tree View Original ('All_Notes')", "Detailed, selectable note sections.", async (container) => {
            const wrapper = this.createRow(container, 24);
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "MIN";

            const topSelected = await tv.create({
                width: 470,
                lineColor: { r: 0.9, g: 0.9, b: 0.9 }, // Lighter line for Iris
                paddingRight: 0,
                itemContentPaddingRight: 24,
                leftColumnPaddingTop: 0,
                nodes: [
                    {
                        title: "Notes to the financial statements", subTitle: "FRS102 - Section 1A", iconType: "empty-circle", iconColor: "blue", status: "active", isExpanded: true,
                        description: "This is an Optional Section. To include it in your report, please fill at least the mandatory * fields from inside", bottomActionNode: "Edit",
                        rowStroke: { r: 0.1686, g: 0, b: 0.67451, a: 0.07 }, rowStrokeWeight: 1
                    },
                    { title: "Statutory information", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Critical accounting judgements and estimates", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Average number of employees", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Operating profit/(loss)", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Exceptional items", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Goodwill", iconType: "check", iconColor: "blue", status: "completed" },
                    { title: "Intangible assets - Revaluations", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Tangible fixed assets", iconType: "empty-circle", iconColor: "grey" }
                ]
            });
            const card1 = await new Card().create({
                variant: "elevated",
                padding: 24,
                body: Card.node(topSelected, { fill: true })
            });

            const wrappedCard1 = await this.wrapWithCaption(card1, "02 - Selected At Top", "Wrapper", true);
            if ("layoutGrow" in wrappedCard1) wrappedCard1.layoutGrow = 1;
            wrapper.appendChild(wrappedCard1);

            const middleSelected = await tv.create({
                width: 470,
                lineColor: { r: 0.9, g: 0.9, b: 0.9 },
                paddingRight: 0,
                itemContentPaddingRight: 24,
                nodes: [
                    { title: "Notes to the financial statements", subTitle: "FRS102 - Section 1A", iconType: "empty-circle", iconColor: "grey", status: "inactive", isExpanded: false },
                    { title: "Statutory information", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Critical accounting judgements and estimates", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Average number of employees", iconType: "empty-circle", iconColor: "grey" },
                    {
                        title: "Operating profit/(loss)", subTitle: "FRS102 - Section 5", iconType: "empty-circle", iconColor: "blue", status: "active", isExpanded: true,
                        description: "Selected in the middle to test card spacing, vertical rhythm, and row alignment.", bottomActionNode: "Edit"
                    },
                    { title: "Exceptional items", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Goodwill", iconType: "check", iconColor: "blue", status: "completed" },
                    { title: "Intangible assets - Revaluations", iconType: "empty-circle", iconColor: "grey" },
                    { title: "Tangible fixed assets", iconType: "empty-circle", iconColor: "grey" }
                ]
            });
            const card2 = await new Card().create({
                variant: "elevated",
                padding: 24,
                body: Card.node(middleSelected, { fill: true })
            });

            const wrappedCard2 = await this.wrapWithCaption(card2, "03 - Selected In Middle", "Wrapper", true);
            if ("layoutGrow" in wrappedCard2) wrappedCard2.layoutGrow = 1;
            wrapper.appendChild(wrappedCard2);
        });

        // --- SECTION 3: Iris Tree View V3 (Nested Tree) - Deep Nested Tree ---
        await this.addSection(root, "Iris Tree View V3 (Nested Tree)", "Deep nesting stress test for sibling/last-node connector behavior.", async (container) => {
            const wrapper = this.createColumn(container, 32);
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "CENTER";

            const nestedVariant = await tv.create({
                width: 460,
                lineColor: { r: 0.84, g: 0.86, b: 0.9 },
                leftColumnPaddingTop: 0,
                nodes: [
                    { title: "Workspace", iconType: "chevron-down", iconColor: "black", isExpanded: true, indentLevel: 0 },
                    { title: "Design System", iconType: "chevron-down", iconColor: "black", isExpanded: true, indentLevel: 1 },
                    { title: "Tokens", iconType: "chevron-down", iconColor: "black", isExpanded: true, indentLevel: 2 },
                    { title: "colors.json", iconType: "check", iconColor: "blue", status: "completed", isExpanded: false, indentLevel: 3 },
                    { title: "spacing.json", iconType: "empty-circle", iconColor: "grey", isExpanded: false, indentLevel: 3 },
                    { title: "typography.json", iconType: "empty-circle", iconColor: "grey", isExpanded: false, indentLevel: 3 },
                    { title: "Components", iconType: "chevron-down", iconColor: "black", isExpanded: true, indentLevel: 2 },
                    { title: "Buttons.fig", iconType: "check", iconColor: "blue", status: "completed", isExpanded: false, indentLevel: 3 },
                    { title: "Inputs.fig", iconType: "empty-circle", iconColor: "grey", isExpanded: false, indentLevel: 3 },
                    { title: "Patterns", iconType: "chevron-right", iconColor: "grey", isExpanded: false, indentLevel: 2 },
                    { title: "QA", iconType: "chevron-down", iconColor: "black", isExpanded: true, indentLevel: 1 },
                    { title: "Accessibility.md", iconType: "empty-circle", iconColor: "grey", isExpanded: false, indentLevel: 2 },
                    { title: "Release Notes.md", iconType: "check", iconColor: "blue", status: "completed", isExpanded: false, indentLevel: 2 },
                    { title: "Archive", iconType: "chevron-right", iconColor: "grey", isExpanded: false, indentLevel: 1 }
                ]
            });
            const card = await new Card().create({
                variant: "elevated",
                padding: 40,
                fillWidth: true,
                body: Card.node(nestedVariant, { fill: true })
            });

            const wrappedCard = await this.wrapWithCaption(card, "04 - Nested Hierarchy", "Wrapper", true);
            wrapper.appendChild(wrappedCard);
        });

        // --- SECTION 4: IDE File Explorer (VS Code Style) ---
        await this.addSection(root, "IDE File Explorer", "Dense technical layout with custom icons, git decorators, and inline actions.", async (container) => {
            const wrapper = this.createColumn(container, 16);
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "CENTER";

            const searchNode = await new input_field().create({
                placeholder: "Search file by name...",
                type: "simple",
                showSearchIcon: true,
                width: 324,
                cornerRadius: 8
            });
            normalizeAutoLayoutChild(searchNode, "INHERIT");

            const ideVariant = await tv.create({
                width: 324,
                dense: true,
                paddingLeft: 4,
                paddingRight: 4,
                itemPaddingVertical: 8,
                itemPaddingHorizontal: 8,
                nodes: [
                    {
                        title: "src", iconType: "chevron-down", isExpanded: true, indentLevel: 0,
                        rightContent: [
                            tree_view.badge("Modified", "warning")
                        ]
                    },
                    {
                        title: "components", iconType: "chevron-down", isExpanded: true, indentLevel: 1, isHovered: true,
                        rightContent: [
                            tree_view.actionRow([
                                tree_view.actionText("Add File"),
                                tree_view.actionText("Add Folder")
                            ])
                        ]
                    },
                    {
                        title: "App.tsx", indentLevel: 2,
                        customIcon: tree_view.fileIcon("Re", { r: 0.2, g: 0.6, b: 0.8 }),
                        rightContent: [
                            tree_view.badge("M", "warning")
                        ]
                    },
                    {
                        title: "utils.ts", indentLevel: 2,
                        customIcon: tree_view.fileIcon("TS", { r: 0.1, g: 0.4, b: 0.8 }),
                        rightContent: [
                            tree_view.badge("U")
                        ]
                    },
                    {
                        title: "package.json", indentLevel: 0,
                        customIcon: tree_view.fileIcon("{}", { r: 0.8, g: 0.8, b: 0.2 })
                    }
                ]
            });
            normalizeAutoLayoutChild(ideVariant, "INHERIT");

            const card = await new Card().create({
                variant: "elevated",
                padding: 18,
                width: 360,
                body: Card.column([Card.node(searchNode), Card.node(ideVariant)], { gap: 14 })
            });

            const wrappedCard = await this.wrapWithCaption(card, "05 - IDE File Explorer");
            wrapper.appendChild(wrappedCard);
        });

        // --- SECTION 5: E-commerce Faceted Filter ---
        await this.addSection(root, "Modern E-commerce Filter", "Airy design with checkboxes and count badges.", async (container) => {
            const wrapper = this.createColumn(container, 32);
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "CENTER";

            const filterVariant = await tv.create({
                width: 456,
                dense: false,
                paddingTop: 6,
                nodes: [
                    { title: "CATEGORIES", iconType: "chevron-down", iconColor: "grey", indentLevel: 0, status: "active", isExpanded: true },
                    {
                        title: "Sneakers", checkbox: true, indentLevel: 1, rightContent: [
                            tree_view.badge("37", "grey")
                        ]
                    },
                    {
                        title: "Running", checkbox: false, indentLevel: 1, rightContent: [
                            tree_view.badge("14", "grey")
                        ]
                    },
                    { title: "BRANDS", iconType: "chevron-down", iconColor: "grey", indentLevel: 0, status: "active", isExpanded: true },
                    {
                        title: "Nike", checkbox: true, indentLevel: 1, rightContent: [
                            tree_view.badge("22", "grey")
                        ]
                    },
                    {
                        title: "Adidas", checkbox: false, indentLevel: 1, rightContent: [
                            tree_view.badge("15", "grey")
                        ]
                    },
                    {
                        title: "Puma", checkbox: false, indentLevel: 1, rightContent: [
                            tree_view.badge("8", "grey")
                        ]
                    },
                    { title: "PRICE RANGE", iconType: "chevron-right", iconColor: "grey", indentLevel: 0, status: "active", isExpanded: false }
                ]
            });
            normalizeAutoLayoutChild(filterVariant, "INHERIT");

            const card = await new Card().create({
                variant: "elevated",
                padding: 24,
                cornerRadius: 22,
                width: 500,
                body: Card.node(filterVariant)
            });

            const wrappedCard = await this.wrapWithCaption(card, "06 - Modern E-commerce Filter");
            wrapper.appendChild(wrappedCard);
        });

        // --- SECTION 6: Enterprise SaaS Role Configurator ---
        await this.addSection(root, "Enterprise SaaS Roles", "Configurator with indeterminate states and disabled badges.", async (container) => {
            const wrapper = this.createColumn(container, 32);
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "CENTER";

            const saasVariant = await tv.create({
                width: 596,
                dense: true,
                nodes: [
                    { title: "Administrator Privileges", checkbox: "indeterminate", isExpanded: true, indentLevel: 0 },
                    { title: "User Management", checkbox: true, isExpanded: true, indentLevel: 1 },
                    { title: "Create Users", checkbox: true, indentLevel: 2 },
                    { title: "Delete Users", checkbox: true, indentLevel: 2 },
                    { title: "Billing", checkbox: false, isExpanded: true, indentLevel: 1 },
                    { title: "View Invoices", checkbox: true, indentLevel: 2 },
                    {
                        title: "Change Plan", checkbox: false, isDisabled: true, indentLevel: 2, rightContent: [
                            tree_view.badge("Pro Only", "warning")
                        ]
                    }
                ]
            });
            normalizeAutoLayoutChild(saasVariant, "INHERIT");

            const card = await new Card().create({
                variant: "elevated",
                padding: 22,
                width: 640,
                body: Card.node(saasVariant)
            });

            const wrappedCard = await this.wrapWithCaption(card, "07 - Enterprise SaaS Roles");
            wrapper.appendChild(wrappedCard);
        });

        // --- SECTION 7: Activity Log / Comment Thread ---
        await this.addSection(root, "Activity Log", "Social timeline using thread lines and avatars.", async (container) => {
            const wrapper = this.createColumn(container, 32);
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "CENTER";
            const getAvatar = (initials: string, color: { r: number, g: number, b: number }) => tree_view.avatar(initials, color);
            const rowBg = { r: 0, g: 0.106, b: 0.706, a: 0.02 };
            const timestamp = (time: string) => [tree_view.textNode(time, { size: 12, color: { r: 0.5, g: 0.5, b: 0.5 } })];

            const activityVariant = await tv.create({
                width: 776,
                lineColor: { r: 0.86, g: 0.89, b: 0.93 },
                paddingLeft: 8,
                itemContentPaddingLeft: 8,
                itemContentPaddingRight: 16,
                dense: false,
                nodes: [
                    {
                        title: "Alex Calcan",
                        subTitle: "Design System Lead",
                        description: "I've updated the component library to support the new faceted filters. Let me know what you think.",
                        customIcon: getAvatar("AC", { r: 0.2, g: 0.4, b: 0.9 }),
                        isExpanded: true,
                        indentLevel: 0,
                        rightContent: timestamp("2h ago"),
                        rowBackgroundColor: rowBg,
                        rowPaddingTop: 16,
                        topLeftRadius: 16,
                        topRightRadius: 16
                    },
                    {
                        title: "Fred Jenkins",
                        description: "Looks great! Did we account for the responsive views on mobile?",
                        customIcon: getAvatar("FJ", { r: 0.8, g: 0.3, b: 0.5 }),
                        isExpanded: true,
                        indentLevel: 1,
                        rightContent: timestamp("1h ago"),
                        rowBackgroundColor: rowBg
                    },
                    {
                        title: "Mike Ross",
                        description: "The padding feels a bit tight for touch targets. Maybe increase it by 4px?",
                        customIcon: getAvatar("MR", { r: 0.1, g: 0.6, b: 0.3 }),
                        isExpanded: true,
                        indentLevel: 1,
                        rightContent: timestamp("30m ago"),
                        rowBackgroundColor: rowBg
                    },
                    {
                        title: "Reply to Mike",
                        customIcon: getAvatar("AC", { r: 0.2, g: 0.4, b: 0.9 }),
                        indentLevel: 2,
                        isExpanded: true,
                        extendGuideLines: true,
                        rowFill: { r: 0.996, g: 0.996, b: 0.996, a: 1 },
                        rowStroke: { r: 1, g: 1, b: 1, a: 1 },
                        rowStrokeWeight: 3,
                        rowStrokeAlign: "OUTSIDE",
                        rowEffects: [
                            {
                                visible: true,
                                blendMode: "NORMAL",
                                type: "DROP_SHADOW",
                                radius: 20,
                                color: { r: 0, g: 0, b: 0, a: 0.11 },
                                offset: { x: 0, y: 0 },
                                spread: 0,
                                showShadowBehindNode: true
                            }
                        ],
                        rowCornerRadius: 16,
                        rowPaddingTop: 16,
                        rowPaddingBottom: 16,
                        rowPaddingLeft: 16,
                        rowPaddingRight: 16,
                        expandedContent: [
                            {
                                type: "COMPONENT",
                                component: input_field,
                                props: {
                                    placeholder: "Reply to Mike...",
                                    width: "fill",
                                    type: "multiline",
                                    height: "auto"
                                },
                                layoutProps: { layoutGrow: 1, parentIsAutoLayout: true }
                            },
                            {
                                type: "FRAME",
                                name: "Action Bar",
                                layoutProps: { parentIsAutoLayout: true, layoutAlign: "STRETCH" },
                                props: {
                                    layoutMode: "HORIZONTAL",
                                    primaryAxisSizingMode: "AUTO",
                                    counterAxisSizingMode: "AUTO",
                                    primaryAxisAlignItems: "MAX",
                                    fills: []
                                },
                                children: [
                                    {
                                        type: "COMPONENT",
                                        component: button,
                                        props: { label: "Comment", variant: "primary", size: "small" },
                                        layoutProps: { parentIsAutoLayout: true }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });

            normalizeAutoLayoutChild(activityVariant, "INHERIT");

            const card = await new Card().create({
                variant: "elevated",
                padding: 22,
                width: 820,
                body: Card.node(activityVariant, { fill: true })
            });

            const wrappedCard = await this.wrapWithCaption(card, "08 - Activity Log");
            wrapper.appendChild(wrappedCard);
        });

        // --- SECTION 8: Vertical Progress Stepper ---
        await this.addSection(root, "Progress Stepper Flow", "Linear checkout steps using the dedicated progress_stepper component within a structured layout.", async (container) => {
            const wrapper = this.createColumn(container, 32);
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "CENTER";

            const ps = new progress_stepper();

            const stepperHeader = await ps.create({
                width: 760,
                steps: ["Account Details", "Shipping Address", "Payment Method", "Review Order"],
                currentStep: 3,
                indicatorSize: 20,
                fontFamily: "Inter",
                activeColor: { r: 0.12, g: 0.45, b: 0.9 },
                completedColor: { r: 0.12, g: 0.45, b: 0.9 },
                pendingColor: { r: 0.83, g: 0.86, b: 0.92 }
            });
            normalizeAutoLayoutChild(stepperHeader, "INHERIT");

            const panelTitle = figma.createText();
            await this.setFont(panelTitle, { family: "Inter", style: "Semi Bold" });
            panelTitle.characters = "Payment Method";
            panelTitle.fontSize = 16;
            panelTitle.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.12 } }];
            panelTitle.textAutoResize = "WIDTH_AND_HEIGHT";

            const paymentMethodField = await new input_field().create({
                placeholder: "Select payment method",
                type: "dropdown",
                width: 340,
                cornerRadius: 8
            });

            const cardNumberField = await new input_field().create({
                placeholder: "Card Number",
                type: "simple",
                width: 340,
                cornerRadius: 8
            });

            const mmYyField = await new input_field().create({
                placeholder: "MM/YY",
                type: "simple",
                width: 120,
                cornerRadius: 8
            });

            const cvcField = await new input_field().create({
                placeholder: "CVC",
                type: "simple",
                width: 90,
                cornerRadius: 8
            });

            const compactRow = Card.row([Card.node(mmYyField), Card.node(cvcField)], { gap: 10, crossAlign: "center" });

            const divider = Card.shape({ width: 728, height: 1, fillColor: { r: 0.91, g: 0.93, b: 0.96 } });

            const continueButton = await new button().create({
                label: "Continue",
                variant: "primary",
                width: 180
            });

            const actionRow = Card.row([Card.node(continueButton)], { gap: 0, align: "end", fill: true });

            const checkoutPanel = await new Card().create({
                variant: "outlined",
                padding: 16,
                cornerRadius: 12,
                width: 760,
                body: Card.column([
                    Card.node(panelTitle),
                    Card.node(paymentMethodField),
                    Card.node(cardNumberField),
                    compactRow,
                    divider,
                    actionRow
                ], { gap: 12, crossAlign: "start" })
            });

            const card = await new Card().create({
                variant: "elevated",
                padding: 26,
                width: 820,
                body: Card.column([
                    Card.node(stepperHeader),
                    Card.node(checkoutPanel)
                ], { gap: 24, crossAlign: "start" })
            });

            const wrappedCard = await this.wrapWithCaption(card, "09 - Progress Stepper Flow");
            wrapper.appendChild(wrappedCard);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

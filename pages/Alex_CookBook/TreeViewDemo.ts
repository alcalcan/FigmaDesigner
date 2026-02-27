import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { tree_view } from "../../components/Alex_CookBook/tree_view/tree_view";

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

        // --- SECTION 1: Iris Tree View ("body" variant) - Document Structure ---
        await this.addSection(root, "Iris Tree View ('body' variant)", "Flat document outline for Iris report structures.", async (container) => {
            const wrapper = this.createRow(container, 32);
            wrapper.paddingLeft = 40; wrapper.paddingRight = 40; wrapper.paddingTop = 40; wrapper.paddingBottom = 40;

            const bodyVariant = await tv.create({
                width: 400,
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
            const bodyVariantCaption = await this.wrapWithCaption(bodyVariant, "01 - Flat Document Outline");
            wrapper.appendChild(bodyVariantCaption);
        });

        // --- SECTION 2: Iris Tree View Original ("All_Notes" variant) - Flat Notes List ---
        await this.addSection(root, "Iris Tree View Original ('All_Notes')", "Detailed, selectable note sections.", async (container) => {
            const wrapper = this.createRow(container, 24);
            wrapper.paddingLeft = 0; wrapper.paddingRight = 0; wrapper.paddingTop = 24; wrapper.paddingBottom = 24;

            const topSelected = await tv.create({
                width: 470,
                lineColor: { r: 0.9, g: 0.9, b: 0.9 }, // Lighter line for Iris
                paddingRight: 0,
                itemContentPaddingRight: 24,
                nodes: [
                    {
                        title: "Notes to the financial statements", subTitle: "FRS102 - Section 1A", iconType: "empty-circle", iconColor: "blue", status: "active", isExpanded: true,
                        description: "This is an Optional Section. To include it in your report, please fill at least the mandatory * fields from inside", bottomActionNode: "Edit"
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
            const topSelectedCapture = await this.wrapWithCaption(topSelected, "02 - Selected At Top");
            wrapper.appendChild(topSelectedCapture);

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
            const middleSelectedCapture = await this.wrapWithCaption(middleSelected, "03 - Selected In Middle");
            wrapper.appendChild(middleSelectedCapture);
        });

        // --- SECTION 3: Iris Tree View V3 (Nested Tree) - Deep Nested Tree ---
        await this.addSection(root, "Iris Tree View V3 (Nested Tree)", "Deep nesting stress test for sibling/last-node connector behavior.", async (container) => {
            const wrapper = this.createRow(container, 32);
            wrapper.paddingLeft = 40; wrapper.paddingRight = 40; wrapper.paddingTop = 40; wrapper.paddingBottom = 40;

            const nestedVariant = await tv.create({
                width: 460,
                lineColor: { r: 0.84, g: 0.86, b: 0.9 },
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
            const nestedVariantCaption = await this.wrapWithCaption(nestedVariant, "04 - Nested Hierarchy");
            wrapper.appendChild(nestedVariantCaption);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

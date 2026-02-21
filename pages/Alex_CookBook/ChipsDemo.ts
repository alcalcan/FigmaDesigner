import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { badge } from "../../components/Alex_CookBook/badge/badge";
import { chip_expand } from "../../components/Alex_CookBook/chip_expand/chip_expand";

export class ChipsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Light" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Chips & Statuses", 1200);

        await this.addHeader(
            root,
            "Chips & Statuses",
            "Showcasing status badges, interactive chips, and semantic tags."
        );

        // --- SECTION 1: Status Badges ---
        await this.addSection(root, "Status Badges", "Semantic badges for showing states like success, warning, or error.", async (container) => {
            const b = new badge();

            // Solid Row
            const solidRow = this.createRow(container);
            solidRow.name = "Solid Styles";
            solidRow.appendChild(await b.create({ label: "Success", variant: "success", type: "solid" }));
            solidRow.appendChild(await b.create({ label: "Warning", variant: "warning", type: "solid" }));
            solidRow.appendChild(await b.create({ label: "Error", variant: "error", type: "solid" }));
            solidRow.appendChild(await b.create({ label: "Info", variant: "info", type: "solid" }));
            solidRow.appendChild(await b.create({ label: "Neutral", variant: "neutral", type: "solid" }));
            container.appendChild(solidRow);

            // Subtle Row
            const subtleRow = this.createRow(container);
            subtleRow.name = "Subtle Styles";
            subtleRow.appendChild(await b.create({ label: "Success", variant: "success", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Warning", variant: "warning", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Error", variant: "error", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Info", variant: "info", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Neutral", variant: "neutral", type: "subtle" }));
            container.appendChild(subtleRow);

            // Corner Radius Variations
            const radiusRow = this.createRow(container);
            radiusRow.name = "Corner Radius Variations";
            radiusRow.appendChild(await b.create({ label: "Pill Shape", variant: "info", type: "solid", cornerRadius: 100 }));
            radiusRow.appendChild(await b.create({ label: "Default Round", variant: "info", type: "solid", cornerRadius: 12 }));
            radiusRow.appendChild(await b.create({ label: "Square Corners", variant: "info", type: "solid", cornerRadius: 4 }));
            container.appendChild(radiusRow);
        });

        // --- SECTION 2: Interactive Chips ---
        await this.addSection(root, "Interactive Chips", "Chips that can be clicked, hovered, selected, or expanded.", async (container) => {
            const chip = new chip_expand();

            const stateRow = this.createRow(container);
            stateRow.name = "States";
            stateRow.appendChild(await chip.create({ text: "Default State" }));
            stateRow.appendChild(await chip.create({ text: "Hover State", hover: true }));
            stateRow.appendChild(await chip.create({ text: "Selected State", selected: true }));
            container.appendChild(stateRow);

            const utilityRow = this.createRow(container);
            utilityRow.name = "Utilities";
            utilityRow.appendChild(await chip.create({ text: "Expanded Menu", expanded: true }));
            utilityRow.appendChild(await chip.create({ text: "Pill Shaped", cornerRadius: 100 }));
            container.appendChild(utilityRow);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

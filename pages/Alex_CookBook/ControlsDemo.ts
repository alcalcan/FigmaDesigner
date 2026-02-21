import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { checkbox } from "../../components/Alex_CookBook/checkbox/checkbox";
import { radio_button } from "../../components/Alex_CookBook/radio_button/radio_button";
import { toggle } from "../../components/Alex_CookBook/toggle/toggle";

export class ControlsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Light" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Controls Showcase", 1200);

        await this.addHeader(
            root,
            "Controls",
            "Focused showcase for standard input controls like checkboxes, radio buttons, and toggles."
        );

        // --- SECTION 1: Checkboxes ---
        await this.addSection(root, "Checkboxes", "Standard checkbox controls for multiple selections.", async (container) => {
            const cb = new checkbox();
            const row = this.createRow(container);
            const stack = this.createStack();

            stack.appendChild(await cb.create({ characterOverride: "Unchecked Checkbox", checked: false }));
            stack.appendChild(await cb.create({ characterOverride: "Checked Checkbox", checked: true }));
            stack.appendChild(await cb.create({ characterOverride: "Hover State Checkbox", hoverState: true }));

            row.appendChild(stack);
            container.appendChild(row);
        });

        // --- SECTION 2: Radio Buttons ---
        await this.addSection(root, "Radio Buttons", "Standard radio buttons for single selections.", async (container) => {
            const rb = new radio_button();
            const row = this.createRow(container);
            const stack = this.createStack();

            stack.appendChild(await rb.create({ characterOverride: "Unselected Radio", checked: false }));
            stack.appendChild(await rb.create({ characterOverride: "Selected Radio", checked: true }));
            stack.appendChild(await rb.create({ characterOverride: "Hover State Radio", hoverState: true }));

            row.appendChild(stack);
            container.appendChild(row);
        });

        // --- SECTION 3: Toggles ---
        await this.addSection(root, "Toggles", "Switch toggles for boolean settings.", async (container) => {
            const tg = new toggle();
            const row = this.createRow(container);
            const stack = this.createStack();

            stack.appendChild(await tg.create({ isOn: false }));
            stack.appendChild(await tg.create({ isOn: true }));

            row.appendChild(stack);
            container.appendChild(row);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private createStack(): FrameNode {
        const stack = figma.createFrame();
        stack.name = "Stack";
        stack.layoutMode = "VERTICAL";
        stack.itemSpacing = 16;
        stack.fills = [];
        stack.primaryAxisSizingMode = "AUTO";
        stack.counterAxisSizingMode = "AUTO";
        return stack;
    }
}

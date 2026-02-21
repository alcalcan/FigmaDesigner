import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { checkbox } from "../../components/Alex_CookBook/checkbox/checkbox";
import { radio_button } from "../../components/Alex_CookBook/radio_button/radio_button";
import { toggle } from "../../components/Alex_CookBook/toggle/toggle";
import { dropdown_input } from "../../components/Alex_CookBook/dropdown_input/dropdown_input";

export class OptionsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Light" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Options & Controls Showcase", 1200);

        await this.addHeader(
            root,
            "Options & Controls",
            "Showcasing dropdown inputs, checkboxes, radio buttons, and toggles."
        );

        // --- SECTION 1: Dropdown Inputs ---
        await this.addSection(root, "Dropdown Inputs", "Professional dropdown inputs with various options.", async (container) => {
            const di = new dropdown_input();

            const row = this.createRow(container);

            const diNode1 = await di.create({
                placeholder: "Professional Dropdown",
                options: [
                    { name: "Option 1", selected: false },
                    { name: "Option 2", selected: true },
                    { name: "Option 3", selected: false }
                ],
                width: 320
            });
            row.appendChild(diNode1);

            const diNode2 = await di.create({
                placeholder: "Select Category...",
                options: [
                    { name: "Design", selected: false },
                    { name: "Engineering", selected: false },
                    { name: "Product", selected: false }
                ],
                width: 320
            });
            row.appendChild(diNode2);

            container.appendChild(row);
        });

        // --- SECTION 2: Checkboxes ---
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

        // --- SECTION 3: Radio Buttons ---
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

        // --- SECTION 4: Toggles ---
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

import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { dropdown_options } from "../../components/Alex_CookBook/dropdown_options/dropdown_options";
import { dropdown_input } from "../../components/Alex_CookBook/dropdown_input/dropdown_input";
import { date_picker } from "../../components/Alex_CookBook/date_picker/date_picker";
import { Lucide_edit_2 } from "../../components/lucide_icons/Lucide_edit_2/Lucide_edit_2";
import { Lucide_external_link } from "../../components/lucide_icons/Lucide_external_link/Lucide_external_link";
import { Lucide_trash_2 } from "../../components/lucide_icons/Lucide_trash_2/Lucide_trash_2";

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

        const root = await this.initPage("Options Demo", 1200);

        await this.addHeader(
            root,
            "Options & Select Menus",
            "Showcasing dropdown inputs and raw option menu lists with interactive states and layout variations."
        );

        // --- SECTION 1: Dropdown Inputs ---
        await this.addSection(root, "Dropdown Inputs", "Complete dropdown inputs with placeholders and integrated option menus.", async (container) => {
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

        // --- SECTION 2: Raw Options Menus ---
        await this.addSection(root, "Dropdown Options Lists", "Standalone configurable menu lists demonstrating hover states, selection, and padding structure.", async (container) => {
            const drp = new dropdown_options();
            const row1 = this.createRow(container);

            // Full Width Options Menu (padding on individual options, 0 on body sides, but some TB padding)
            row1.appendChild(await drp.create({
                width: 280,
                bodyPaddingLeft: 0,
                bodyPaddingRight: 0,
                bodyPaddingTop: 8,
                bodyPaddingBottom: 8,
                selectionType: "radio",
                options: [
                    { name: "Default Option (No Body Padding)", selected: false },
                    { name: "Hovered Option", selected: false, hoverState: true },
                    { name: "Selected Option", selected: true }
                ]
            }));

            // Padded Body Options Menu
            row1.appendChild(await drp.create({
                width: 280,
                bodyPadding: 16,
                selectionType: "checkbox",
                options: [
                    { name: "Checkbox Option (16px Body Padding)", selected: false },
                    { name: "Hovered Checkbox", selected: false, hoverState: true },
                    { name: "Checked Checkbox", selected: true }
                ]
            }));

            container.appendChild(row1);
        });

        // --- SECTION 3: Styled Options ---
        await this.addSection(root, "Styled Dropdown Options", "Custom rounded corners, shadows, and label truncation for checkboxes.", async (container) => {
            const drp = new dropdown_options();
            const row = this.createRow(container);

            // Rounded & Shadowed Rows
            row.appendChild(await drp.create({
                width: 280,
                bodyPadding: 16,
                options: [
                    { name: "Row Rounded (8px)", selected: false, hoverState: true, rowCornerRadius: 8 },
                    { name: "Row Rounded (100px)", selected: false, hoverState: true, rowCornerRadius: 100 },
                    { name: "Row with Shadow", selected: false, hoverState: true, rowShadow: true, rowCornerRadius: 8 },
                    { name: "Box Shadow (Legacy)", selected: false, boxShadow: true }
                ]
            }));

            // Ellipsis / Truncation
            row.appendChild(await drp.create({
                width: 280,
                bodyPadding: 16,
                options: [
                    { name: "Checkbox Options with automatically truncated text that is very long", selected: false },
                    { name: "This is a very long label that should be truncated with ellipsis", selected: true, labelMaxWidth: 180 }
                ]
            }));

            container.appendChild(row);
        });

        // --- SECTION 4: Dropdown Body Styles ---
        await this.addSection(root, "Dropdown Body Styles", "Custom corner radius and shadow effects for the entire dropdown container.", async (container) => {
            const drp = new dropdown_options();
            const row = this.createRow(container);

            // High Rounding
            row.appendChild(await drp.create({
                width: 250,
                bodyCornerRadius: 32,
                bodyPadding: 24,
                options: [
                    { name: "Super Rounded (32px)", selected: true },
                    { name: "Secondary Action", selected: false },
                    { name: "Tertiary Item", selected: false }
                ]
            }));

            // Premium Shadow
            row.appendChild(await drp.create({
                width: 250,
                bodyShadow: "PREMIUM",
                bodyCornerRadius: 16,
                options: [
                    { name: "Premium Soft Shadow", selected: false },
                    { name: "Another Premium Item", selected: true },
                    { name: "List Item 3", selected: false }
                ]
            }));

            // Square & No Shadow
            row.appendChild(await drp.create({
                width: 250,
                bodyCornerRadius: 0,
                bodyShadow: false,
                options: [
                    { name: "Square & No Shadow", selected: false },
                    { name: "Minimal Item 2", selected: false },
                    { name: "Minimal Item 3", selected: false }
                ]
            }));

            container.appendChild(row);
        });

        // --- SECTION 5: Icon Options Menus ---
        await this.addSection(root, "Icon Options Menus", "Dropdowns utilizing vector icons instead of traditional radio or checkbox indicators.", async (container) => {
            const drp = new dropdown_options();
            const row = this.createRow(container);

            row.appendChild(await drp.create({
                width: 250,
                bodyCornerRadius: 16,
                bodyPadding: 12,
                selectionType: "radio", // the component delegates icons via the radio_button component
                options: [
                    { name: "Edit Item", selected: false, icon: Lucide_edit_2, hoverState: true },
                    { name: "Open Externally", selected: false, icon: Lucide_external_link },
                    { name: "Delete Item", selected: false, icon: Lucide_trash_2 }
                ]
            }));

            container.appendChild(row);
        });

        // --- SECTION 6: Date & Time Pickers ---
        await this.addSection(root, "Date & Time Pickers", "Inputs providing context-specific dropdowns for date and time selection.", async (container) => {
            const dp = new date_picker();
            const row = this.createRow(container);

            const today = new Date();
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const monthStr = monthNames[today.getMonth()];
            const dayNum = today.getDate();
            const mockDateVal = `${monthStr} ${dayNum}, 2026`;

            // Date Picker
            row.appendChild(await dp.create({
                type: "date",
                width: 320,
                isOpen: true,
                value: mockDateVal
            }));

            // Time Picker
            row.appendChild(await dp.create({
                type: "time",
                width: 320,
                isOpen: true,
                value: "10:30",
                timeOptions: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"]
            }));

            // Give the container enough padding for absolute dropdowns
            container.paddingBottom = 300;
            container.appendChild(row);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

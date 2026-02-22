import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { input_field } from "../../components/Alex_CookBook/input_field/input_field";
import { Lucide_user, Lucide_mail, Lucide_search, Lucide_info, Lucide_alert_circle, Lucide_check_circle, Lucide_chevron_down } from "../../components/index";

export class InputDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });

        const root = await this.initPage("Input Fields Showcase", 1200);

        await this.addHeader(
            root,
            "Input Fields",
            "Showcasing various input types, states, icons, and helper text variations."
        );

        const input = new input_field();

        // --- SECTION 1: Basic Types ---
        await this.addSection(root, "Basic Types", "Simple text inputs vs Dropdown styled inputs.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await input.create({
                placeholder: "Standard text input",
                type: "simple",
                width: 300
            }));
            row.appendChild(await input.create({
                placeholder: "Dropdown style input",
                type: "dropdown",
                width: 300
            }));
            container.appendChild(row);
        });

        // --- SECTION 2: Numerical & Stepper ---
        await this.addSection(root, "Numerical & Stepper", "Input fields with built-in numerical controls.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await input.create({
                value: "1",
                placeholder: "Quantity",
                type: "simple",
                isStepper: true,
                backgroundColor: { r: 0.97, g: 0.98, b: 0.99, a: 1 },
                cornerRadius: 6,
                width: 300
            }));
            container.appendChild(row);
        });

        // --- SECTION 3: Advanced Types ---
        await this.addSection(root, "Advanced Types", "Commonly used inputs like text area, date & time, password, and file upload.", async (container) => {
            const row1 = this.createRow(container);
            row1.appendChild(await input.create({
                placeholder: "Enter long text here...",
                value: "This is a text area.\nIt supports multiple lines of content\nand is vertically aligned to the top.",
                type: "textarea",
                width: 300,
                height: 100
            }));

            const col = figma.createFrame();
            col.name = "Date & Time Column";
            col.layoutMode = "VERTICAL";
            col.itemSpacing = 16;
            col.fills = [];
            col.primaryAxisSizingMode = "AUTO";
            col.counterAxisSizingMode = "AUTO";
            col.clipsContent = false;

            col.appendChild(await input.create({
                placeholder: "Select Date",
                value: "10/24/2026",
                type: "date",
                width: 300
            }));
            col.appendChild(await input.create({
                placeholder: "Select Time",
                value: "14:30",
                type: "time",
                width: 300
            }));

            row1.appendChild(col);
            container.appendChild(row1);

            const row2 = this.createRow(container);
            row2.appendChild(await input.create({
                placeholder: "Password",
                value: "securepassword123",
                type: "password",
                width: 300
            }));
            row2.appendChild(await input.create({
                placeholder: "Upload Document",
                value: "proposal_v2.pdf",
                type: "file",
                width: 300
            }));
            container.appendChild(row2);
        });

        // --- SECTION 4: States & Feedback ---
        await this.addSection(root, "States & Validation", "Visual feedback for different validation states.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await input.create({
                value: "Good content",
                type: "simple",
                state: "success",
                helperText: "Everything looks perfect",
                helperType: "info",
                width: 280
            }));

            row.appendChild(await input.create({
                value: "Invalid data",
                type: "simple",
                state: "error",
                helperText: "Please enter a valid email",
                helperType: "error",
                width: 280
            }));

            row.appendChild(await input.create({
                value: "Almost there",
                type: "simple",
                state: "warning",
                helperText: "Check this field again",
                helperType: "warning",
                width: 280
            }));

            container.appendChild(row);
        });

        // --- SECTION 5: Icon Integration ---
        await this.addSection(root, "Icon Variations", "Front and back icons with flexible positioning.", async (container) => {
            const row1 = this.createRow(container);
            row1.appendChild(await input.create({
                placeholder: "Username",
                type: "simple",
                frontIcon: Lucide_user,
                width: 280
            }));
            row1.appendChild(await input.create({
                placeholder: "Email address",
                type: "simple",
                frontIcon: Lucide_mail,
                width: 280
            }));
            row1.appendChild(await input.create({
                placeholder: "Search...",
                type: "simple",
                showSearchIcon: true,
                searchIconPosition: "front",
                width: 280
            }));

            const row2 = this.createRow(container);
            row2.appendChild(await input.create({
                placeholder: "Both icons",
                type: "simple",
                frontIcon: Lucide_user,
                backIcon: Lucide_chevron_down,
                width: 280
            }));
            row2.appendChild(await input.create({
                placeholder: "Search with clear",
                type: "simple",
                showSearchIcon: true,
                searchIconPosition: "back",
                clear: true,
                width: 280
            }));

            container.appendChild(row1);
            container.appendChild(row2);
        });

        // --- SECTION 6: Styling & Sizing ---
        await this.addSection(root, "Styling & Corner Radius", "Customizing the look and feel through corner radius and widths.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await input.create({
                placeholder: "Sharp corners (4px)",
                type: "simple",
                cornerRadius: 4,
                width: 280
            }));

            row.appendChild(await input.create({
                placeholder: "Rounded corners (12px)",
                type: "simple",
                cornerRadius: 12,
                width: 280
            }));

            row.appendChild(await input.create({
                placeholder: "Pill shape (999px)",
                type: "simple",
                cornerRadius: 999,
                width: 280
            }));

            container.appendChild(row);
        });

        // --- SECTION 7: Shadow & Borderless Variations ---
        await this.addSection(root, "Shadow & Borderless", "Modern input fields without borders and with drop shadows.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await input.create({
                placeholder: "Floating Input",
                type: "simple",
                hasBorder: false,
                withShadow: true,
                width: 280
            }));

            row.appendChild(await input.create({
                placeholder: "Search with Shadow",
                type: "simple",
                frontIcon: Lucide_search,
                hasBorder: false,
                withShadow: true,
                cornerRadius: 999,
                width: 280
            }));

            row.appendChild(await input.create({
                placeholder: "Dropdown Shadow",
                type: "dropdown",
                hasBorder: false,
                withShadow: true,
                width: 280
            }));

            container.appendChild(row);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

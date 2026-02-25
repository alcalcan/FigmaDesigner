import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { input_field } from "../../components/Alex_CookBook/input_field/input_field";
import { dropdown_input } from "../../components/Alex_CookBook/dropdown_input/dropdown_input";
import { Lucide_user, Lucide_mail, Lucide_search, Lucide_info, Lucide_alert_circle, Lucide_check_circle, Lucide_chevron_down } from "../../components/index";

export class InputDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Manrope", style: "Regular" });
        await figma.loadFontAsync({ family: "Manrope", style: "SemiBold" });

        const root = await this.initPage("Input Fields Showcase", 1200);

        await this.addHeader(
            root,
            "Input Fields",
            "Showcasing various input types, states, icons, and helper text variations."
        );

        const input = new input_field();
        const dropInput = new dropdown_input();

        let captCount = 1;
        const wrapWithCaption = async (node: SceneNode, captionText: string): Promise<FrameNode> => {
            const wrapper = figma.createFrame();
            wrapper.name = "Wrapper";
            wrapper.layoutMode = "VERTICAL";
            wrapper.itemSpacing = 16;
            wrapper.primaryAxisSizingMode = "AUTO";
            wrapper.counterAxisSizingMode = "AUTO";
            wrapper.primaryAxisAlignItems = "CENTER";
            wrapper.counterAxisAlignItems = "CENTER";
            wrapper.fills = [];
            wrapper.clipsContent = false;

            const caption = figma.createText();
            caption.fontName = { family: "Inter", style: "Medium" };
            caption.characters = `${captCount++}. ${captionText}`;
            caption.fontSize = 14;
            caption.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];

            wrapper.appendChild(node);
            wrapper.appendChild(caption);
            return wrapper;
        };

        // --- SECTION 1: Basic Types ---
        await this.addSection(root, "Basic Types", "Simple text inputs vs Dropdown styled inputs.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Standard text input",
                type: "simple",
                width: 300
            }), "Standard"));
            row.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Dropdown style input",
                type: "dropdown",
                width: 300
            }), "Standard Dropdown"));
            row.appendChild(await wrapWithCaption(await dropInput.create({
                placeholder: "By publication year",
                value: "All years",
                variant: "two-line",
                width: 200
            }), "Two-Line Dropdown"));
            container.appendChild(row);
        });

        // --- SECTION 2: Numerical & Stepper ---
        await this.addSection(root, "Numerical & Stepper", "Input fields with built-in numerical controls.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await wrapWithCaption(await input.create({
                value: "1",
                placeholder: "Quantity",
                type: "simple",
                isStepper: true,
                backgroundColor: { r: 0.97, g: 0.98, b: 0.99, a: 1 },
                cornerRadius: 6,
                width: 300
            }), "Stepper"));
            container.appendChild(row);
        });

        // --- SECTION 3: Advanced Types ---
        await this.addSection(root, "Advanced Types", "Commonly used inputs like text area, date & time, password, and file upload.", async (container) => {
            const row1 = this.createRow(container);
            row1.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Enter long text here...",
                value: "This is a text area.\nIt supports multiple lines of content\nand is vertically aligned to the top.",
                type: "textarea",
                width: 300,
                height: 100
            }), "Text Area"));

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

            row1.appendChild(await wrapWithCaption(col, "Date & Time"));
            container.appendChild(row1);

            const row2 = this.createRow(container);
            row2.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Password",
                value: "securepassword123",
                type: "password",
                width: 300
            }), "Password"));
            row2.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Upload Document",
                value: "proposal_v2.pdf",
                type: "file",
                width: 300
            }), "File Upload"));
            container.appendChild(row2);
        });

        // --- SECTION 4: States & Feedback ---
        await this.addSection(root, "States & Validation", "Visual feedback for different validation states.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await wrapWithCaption(await input.create({
                value: "Good content",
                type: "simple",
                state: "success",
                helperText: "Everything looks perfect",
                helperType: "info",
                width: 280
            }), "Success State"));

            row.appendChild(await wrapWithCaption(await input.create({
                value: "Invalid data",
                type: "simple",
                state: "error",
                helperText: "Please enter a valid email",
                helperType: "error",
                width: 280
            }), "Error State"));

            row.appendChild(await wrapWithCaption(await input.create({
                value: "Almost there",
                type: "simple",
                state: "warning",
                helperText: "Check this field again",
                helperType: "warning",
                width: 280
            }), "Warning State"));

            container.appendChild(row);
        });

        // --- SECTION 5: Icon Integration ---
        await this.addSection(root, "Icon Variations", "Front and back icons with flexible positioning.", async (container) => {
            const row1 = this.createRow(container);
            row1.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Username",
                type: "simple",
                frontIcon: Lucide_user,
                width: 280
            }), "Front Icon"));
            row1.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Email address",
                type: "simple",
                frontIcon: Lucide_mail,
                width: 280
            }), "Front Icon"));
            row1.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Search...",
                type: "simple",
                showSearchIcon: true,
                searchIconPosition: "front",
                width: 280
            }), "Search (Front)"));

            const row2 = this.createRow(container);
            row2.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Both icons",
                type: "simple",
                frontIcon: Lucide_user,
                backIcon: Lucide_chevron_down,
                width: 280
            }), "Both Icons"));
            row2.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Search with clear",
                type: "simple",
                showSearchIcon: true,
                searchIconPosition: "back",
                clear: true,
                width: 280
            }), "Search (Back) & Clear"));

            container.appendChild(row1);
            container.appendChild(row2);
        });

        // --- SECTION 6: Styling & Sizing ---
        await this.addSection(root, "Styling & Corner Radius", "Customizing the look and feel through corner radius and widths.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Sharp corners (4px)",
                type: "simple",
                cornerRadius: 4,
                width: 280
            }), "Sharp Corners"));

            row.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Rounded corners (12px)",
                type: "simple",
                cornerRadius: 12,
                width: 280
            }), "Rounded Corners"));

            row.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Pill shape (999px)",
                type: "simple",
                cornerRadius: 999,
                width: 280
            }), "Pill Shape"));

            container.appendChild(row);
        });

        // --- SECTION 7: Shadow & Borderless Variations ---
        await this.addSection(root, "Shadow & Borderless", "Modern input fields without borders and with drop shadows.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Floating Input",
                type: "simple",
                hasBorder: false,
                withShadow: true,
                width: 280
            }), "Floating Input"));

            row.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Search with Shadow",
                type: "simple",
                frontIcon: Lucide_search,
                hasBorder: false,
                withShadow: true,
                cornerRadius: 999,
                width: 280
            }), "Floating Circular"));

            row.appendChild(await wrapWithCaption(await input.create({
                placeholder: "Dropdown Shadow",
                type: "dropdown",
                hasBorder: false,
                withShadow: true,
                width: 280
            }), "Floating Dropdown"));

            container.appendChild(row);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

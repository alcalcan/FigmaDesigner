import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";

// Components
import { button } from "../../components/Alex_CookBook/button/button";
import { Lucide_plus, Lucide_chevron_down, Lucide_arrow_right, Action___settings, Lucide_bell, Lucide_search, Lucide_user } from "../../components/index";
import { LibraryPageTitle } from "../../components/UEFA_Library/Page_title/LibraryPageTitle";


export class ButtonsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Light" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Premium Buttons Showcase", 1200);

        await this.addHeader(
            root,
            "Premium Buttons",
            "Showcasing modern aesthetics, pill shapes, icon-only variants, and Floating Action Buttons (FAB)."
        );

        const btn = new button();

        // --- SECTION 1: Roundness & Pill Shapes ---
        await this.addSection(root, "Roundness & Styles", "Default (12px) vs Pill Shape with optional shadows.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await btn.create({ label: "Modern Default", variant: "primary", withShadow: true }));
            row.appendChild(await btn.create({ label: "Pill Shaped", variant: "primary", cornerRadius: 999, withShadow: true }));
            row.appendChild(await btn.create({ label: "Soft Outline", variant: "outline", cornerRadius: 999 }));
            row.appendChild(await btn.create({ label: "Dark Neutral", variant: "neutral", cornerRadius: 999, withShadow: true }));
            container.appendChild(row);
        });

        // --- SECTION 2: Floating Action Buttons (FAB) ---
        await this.addSection(root, "Floating Action & Icon Only", "Circular buttons with shadows and centering.", async (container) => {
            const row = this.createRow(container);

            // FAB Variants
            row.appendChild(await btn.create({ variant: "fab", frontIcon: Lucide_plus, size: "large" }));
            row.appendChild(await btn.create({ variant: "fab", frontIcon: Lucide_bell, size: "medium", baseColor: { r: 1, g: 0.4, b: 0 } })); // Orange FAB

            // Icon Only
            row.appendChild(await btn.create({ variant: "icon", frontIcon: Lucide_search, size: "medium" }));
            row.appendChild(await btn.create({ variant: "outline", frontIcon: Lucide_user, size: "small" }));

            container.appendChild(row);
        });

        // --- SECTION 3: Premium Color Palette ---
        await this.addSection(root, "Color Palette", "Exploring custom colors and modern variants.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await btn.create({ label: "Indigo Blue", baseColor: { r: 0.25, g: 0.35, b: 1 } }));
            row.appendChild(await btn.create({ label: "Emerald Green", baseColor: { r: 0.05, g: 0.65, b: 0.4 } }));
            row.appendChild(await btn.create({ label: "Crimson Red", baseColor: { r: 0.9, g: 0.1, b: 0.2 }, variant: "outline" }));
            row.appendChild(await btn.create({ label: "Deep Purple", baseColor: { r: 0.4, g: 0.2, b: 0.8 } }));
            container.appendChild(row);
        });

        // --- SECTION 4: States & Feedback ---
        await this.addSection(root, "States & Feedback", "Visual cues for user interaction: Default, Hover, Disabled, and Loading.", async (container) => {
            // Primary Variant States
            const primaryRow = this.createRow(container);
            primaryRow.appendChild(await btn.create({ label: "Primary Default", variant: "primary", state: "default" }));
            primaryRow.appendChild(await btn.create({ label: "Primary Hover", variant: "primary", state: "hover" }));
            primaryRow.appendChild(await btn.create({ label: "Primary Disabled", variant: "primary", state: "disabled" }));
            primaryRow.appendChild(await btn.create({ label: "Primary Loading", variant: "primary", state: "loading" }));
            container.appendChild(primaryRow);

            // Outline / Ghost States
            const outlineRow = this.createRow(container);
            outlineRow.appendChild(await btn.create({ label: "Outline Default", variant: "outline", state: "default" }));
            outlineRow.appendChild(await btn.create({ label: "Outline Hover", variant: "outline", state: "hover" }));
            outlineRow.appendChild(await btn.create({ label: "Ghost Default", variant: "ghost", state: "default" }));
            outlineRow.appendChild(await btn.create({ label: "Ghost Hover", variant: "ghost", state: "hover" }));
            container.appendChild(outlineRow);
        });

        // --- SECTION 5: Standard Sizes ---
        await this.addSection(root, "Standard Sizes", "Exploring button dimensions from Small to Large.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await btn.create({ label: "Small Action", size: "small", variant: "secondary" }));
            row.appendChild(await btn.create({ label: "Medium Default", size: "medium" }));
            row.appendChild(await btn.create({ label: "Large Highlight", size: "large", cornerRadius: 16 }));
            container.appendChild(row);
        });

        // --- SECTION 5: Icons Integration ---
        await this.addSection(root, "Icon Integration", "Consistent icon scaling and placement.", async (container) => {
            const row = this.createRow(container);
            row.appendChild(await btn.create({ label: "Add Item", frontIcon: Lucide_plus, cornerRadius: 999 }));
            row.appendChild(await btn.create({ label: "Next Step", backIcon: Lucide_arrow_right, variant: "neutral" }));
            row.appendChild(await btn.create({ label: "Settings", frontIcon: Action___settings, variant: "outline" }));
            container.appendChild(row);
        });

        // --- SECTION 6: UEFA Library Notification Controls ---
        await this.addSection(root, "UEFA Library Notification Controls", "Recreated controls used on Library notification page + capture reference underneath.", async (container) => {
            const recreationRow = this.createRow(container);
            recreationRow.appendChild(await btn.create({
                variant: "outline",
                label: "Cancel",
                size: "medium",
                cornerRadius: 24,
                baseColor: { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 },
                textColor: { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 },
                padding: { v: 12, h: 24 }
            }));
            recreationRow.appendChild(await btn.create({
                variant: "primary",
                label: "Save",
                size: "medium",
                width: 192,
                cornerRadius: 24,
                baseColor: { r: 0.7019608020782471, g: 0.7529411911964417, b: 0.772549033164978 },
                textColor: { r: 1, g: 1, b: 1 },
                padding: { v: 12, h: 24 }
            }));
            recreationRow.appendChild(await btn.create({
                variant: "icon",
                size: "medium",
                frontIcon: Lucide_chevron_down,
                iconSize: 24,
                cornerRadius: 100,
                baseColor: { r: 0.9450980424880981, g: 0.9529411792755127, b: 0.9725490212440491 },
                textColor: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }
            }));
            container.appendChild(recreationRow);

            const captureLabel = figma.createText();
            await figma.loadFontAsync({ family: "Inter", style: "Medium" });
            captureLabel.fontName = { family: "Inter", style: "Medium" };
            captureLabel.characters = "Capture Reference (UEFA Library Notification Title Bar)";
            captureLabel.fontSize = 14;
            captureLabel.fills = [{ type: "SOLID", color: { r: 0.38823530077934265, g: 0.47843137383461, b: 0.5215686559677124 } }];
            captureLabel.layoutAlign = "STRETCH";
            captureLabel.textAutoResize = "HEIGHT";
            container.appendChild(captureLabel);

            const captureNode = await new LibraryPageTitle().create({
                variant: "notification",
                width: 1000,
                paddingTop: 32,
                paddingRight: 40,
                paddingBottom: 32,
                paddingLeft: 40
            });
            container.appendChild(captureNode);

        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

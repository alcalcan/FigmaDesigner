
import { BaseComponent, ComponentProps } from "../../components/BaseComponent";

// Components
import { Page_title } from "../../components/Alex_CookBook/Page_title/Page_title";
import { expanded_card } from "../../components/Alex_CookBook/expanded_card/expanded_card";
import { accordion } from "../../components/Alex_CookBook/accordion/accordion";
import { checkbox } from "../../components/Alex_CookBook/checkbox/checkbox";
import { chip_expand } from "../../components/Alex_CookBook/chip_expand/chip_expand";
import { input_field } from "../../components/Alex_CookBook/input_field/input_field";
import { radio_button } from "../../components/Alex_CookBook/radio_button/radio_button";
import { recipe_card } from "../../components/Alex_CookBook/recipe_card/recipe_card";
import { search_bar } from "../../components/Alex_CookBook/search_bar/search_bar";
import { search_bar_expanded } from "../../components/Alex_CookBook/search_bar_expanded/search_bar_expanded";
import { search_bar_expanded_radio } from "../../components/Alex_CookBook/search_bar_expanded_radio/search_bar_expanded_radio";
import { sidebar_filtering } from "../../components/Alex_CookBook/sidebar_filtering/sidebar_filtering";
import { toggle } from "../../components/Alex_CookBook/toggle/toggle";
import { uefa_cards_4x } from "../../components/Alex_CookBook/uefa_cards_4x/uefa_cards_4x";
import { progress_stepper } from "../../components/Alex_CookBook/progress_stepper/progress_stepper";
import { social_profile_card } from "../../components/Alex_CookBook/social_profile_card/social_profile_card";
import { BookingLogo_color } from "../../components/Alex_CookBook/BookingLogo_color/BookingLogo_color";

export class RadioSearchDemo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Light" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        const root = figma.createFrame();
        root.name = "Alex CookBook - Component Showcase";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 64; // Generous section spacing
        root.paddingTop = 100;
        root.paddingLeft = 120;
        root.paddingRight = 120;
        root.paddingBottom = 100;
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "FIXED";
        root.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.99 } }];

        root.resize(1680, 5000); // Temporary large height, will hug later
        root.clipsContent = false;

        // --- IDENTITY ---
        await this.addSection(root, "Identity", async (container) => {
            const pageTitle = new Page_title();
            container.appendChild(await pageTitle.create({
                title: "Alex CookBook UI Kit",
                subtitle: "A comprehensive showcase of all available components and their variations."
            }));

            const logoRow = this.createRow();
            logoRow.paddingTop = 20;
            logoRow.paddingBottom = 20;
            logoRow.paddingLeft = 20;
            logoRow.paddingRight = 20;
            logoRow.fills = [{ type: 'SOLID', color: { r: 0.15, g: 0.15, b: 0.15 } }]; // Dark background for contrast
            logoRow.cornerRadius = 8;

            const logo = new BookingLogo_color();
            logoRow.appendChild(await logo.create({ variant: 'color' }));
            logoRow.appendChild(await logo.create({ variant: 'white' }));
            container.appendChild(logoRow);

            const subSection = new expanded_card();
            // Demonstrating new props: custom header and badge
            const subSectionNode = await subSection.create({
                headerTitle: "Organization",
                badgeLabel: "Departments"
            });
            (subSectionNode as FrameNode).layoutAlign = "STRETCH";
            container.appendChild(subSectionNode);
        });

        // --- INPUTS & SEARCH ---
        await this.addSection(root, "Inputs & Search", async (container) => {
            const inputComp = new input_field();

            // Row for simple inputs (Horizontal with layoutGrow to fill width)
            const row = figma.createFrame();
            row.layoutMode = "HORIZONTAL";
            row.itemSpacing = 24;
            row.fills = [];
            row.primaryAxisSizingMode = "FIXED";
            row.counterAxisSizingMode = "AUTO";
            row.layoutAlign = "STRETCH"; // Fill parent width
            row.clipsContent = false;

            const inputs = [
                await inputComp.create({ placeholder: "Simple Input", type: "simple", width: "fill" }),
                await inputComp.create({ placeholder: "Dropdown Style", type: "dropdown", width: "fill" }),
                await inputComp.create({ placeholder: "With Search Icon", showSearchIcon: true, type: "simple", width: "fill" }),
                await inputComp.create({ placeholder: "Name", value: "Alex Calcan", type: "simple", width: "fill" }),
                await inputComp.create({ placeholder: "Clearable", value: "Search Term", clear: true, iconSize: 16, type: "simple", width: "fill" })
            ];

            inputs.forEach(node => {
                row.appendChild(node);
            });

            container.appendChild(row);

            // Search Bars
            const searchDefault = new search_bar();
            const searchDefaultNode = await searchDefault.create({ placeholder: "Default Search Bar" });
            (searchDefaultNode as FrameNode).layoutAlign = "STRETCH";
            container.appendChild(searchDefaultNode);

            const searchExpanded = new search_bar_expanded();
            const searchExpandedNode = await searchExpanded.create({ placeholder: "Expanded Search (Checkbox)" });
            (searchExpandedNode as FrameNode).layoutAlign = "STRETCH";
            container.appendChild(searchExpandedNode);

            const searchRadio = new search_bar_expanded_radio();
            const searchRadioNode = await searchRadio.create({ placeholder: "Expanded Search (Radio)" });
            (searchRadioNode as FrameNode).layoutAlign = "STRETCH";
            container.appendChild(searchRadioNode);
        });

        // --- CONTROLS ---
        await this.addSection(root, "Controls", async (container) => {
            const row = this.createRow();

            // Checkboxes
            const cb = new checkbox();
            const cbCol = this.createStack();
            cbCol.appendChild(await cb.create({ characterOverride: "Unchecked Checkbox", checked: false }));
            cbCol.appendChild(await cb.create({ characterOverride: "Checked Checkbox", checked: true }));
            cbCol.appendChild(await cb.create({ characterOverride: "Hover State Checkbox", hoverState: true }));
            row.appendChild(cbCol);

            // Radio Buttons
            const rb = new radio_button();
            const rbCol = this.createStack();
            rbCol.appendChild(await rb.create({ characterOverride: "Unselected Radio", checked: false }));
            rbCol.appendChild(await rb.create({ characterOverride: "Selected Radio", checked: true }));
            rbCol.appendChild(await rb.create({ characterOverride: "Hover State Radio", hoverState: true }));
            row.appendChild(rbCol);

            // Toggles
            const tg = new toggle();
            const tgCol = this.createStack();
            tgCol.appendChild(await tg.create({ isOn: false }));
            tgCol.appendChild(await tg.create({ isOn: true }));
            row.appendChild(tgCol);

            container.appendChild(row);
        });

        // --- NAVIGATION ---
        await this.addSection(root, "Navigation & Menus", async (container) => {
            const row = this.createRow();

            // Chips
            const chip = new chip_expand();
            row.appendChild(await chip.create({ text: "Default Chip" }));
            row.appendChild(await chip.create({ text: "Selected Chip", selected: true }));
            row.appendChild(await chip.create({ text: "Hover Chip", hover: true }));
            row.appendChild(await chip.create({ text: "Expanded Chip", expanded: true }));

            container.appendChild(row);

            // Accordion
            const acc = new accordion();
            container.appendChild(await acc.create({ title: "Accordion Component (Default)" }));
            container.appendChild(await acc.create({ title: "Accordion (Expanded)", expanded: true }));

            // Sidebar (Large)
            const sb = new sidebar_filtering();
            const sbNode = await sb.create({});
            container.appendChild(sbNode);
        });

        // --- STATUS & PROGRESS ---
        await this.addSection(root, "Status & Progress", async (container) => {
            const ps = new progress_stepper();
            container.appendChild(await ps.create({
                steps: ["Research", "Design", "Develop", "Test", "Deploy"],
                currentStep: 2
            }));
            container.appendChild(await ps.create({
                steps: ["Step A", "Step B", "Step C"],
                currentStep: 1,
                indicatorShape: "SQUARE",
                indicatorContent: "LETTER"
            }));
            container.appendChild(await ps.create({
                steps: ["Start", "Middle", "End"],
                currentStep: 3,
                indicatorContent: "DOT",
                activeColor: { r: 0, g: 0.6, b: 1 }
            }));
        });

        // --- CONTENT CARDS ---
        await this.addSection(root, "Content Cards", async (container) => {
            const cardRow = this.createRow();
            cardRow.itemSpacing = 32;

            const recipe = new recipe_card();
            cardRow.appendChild(await recipe.create({
                title: "Traditional Pesto Pasta",
                category: "Dinner",
                time: "20 min",
                difficulty: "Easy"
            }));

            const profile = new social_profile_card();
            cardRow.appendChild(await profile.create({
                name: "Alex Calcan",
                handle: "@alcalcan",
                avatarUrl: "", // Added missing required prop
                bio: "Product Designer & AI Engineer. Building the future of design tools.",
                followerCount: "12.4k"
            }));

            container.appendChild(cardRow);

            const uefa = new uefa_cards_4x();
            const uefaNode = await uefa.create({});
            (uefaNode as FrameNode).layoutAlign = "STRETCH";
            container.appendChild(uefaNode);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async addSection(root: FrameNode, title: string, contentBuilder: (container: FrameNode) => Promise<void>) {
        const section = figma.createFrame();
        section.name = `Section: ${title}`;
        section.layoutMode = "VERTICAL";
        section.itemSpacing = 32;
        section.fills = [];
        section.layoutAlign = "STRETCH";
        section.primaryAxisSizingMode = "AUTO";
        section.clipsContent = false; // Allow dropdowns to overflow

        const label = figma.createText();
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        label.characters = title.toUpperCase();
        label.fontSize = 14;
        label.letterSpacing = { unit: "PERCENT", value: 10 };
        label.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
        section.appendChild(label);

        const contentContainer = figma.createFrame();
        contentContainer.name = "Content";
        contentContainer.layoutMode = "VERTICAL";
        contentContainer.itemSpacing = 24;
        contentContainer.fills = [];
        contentContainer.layoutAlign = "STRETCH";
        contentContainer.primaryAxisSizingMode = "AUTO";
        contentContainer.clipsContent = false; // Allow dropdowns to overflow
        contentContainer.itemReverseZIndex = true; // Ensure top items (like dropdowns) stack OVER bottom items

        await contentBuilder(contentContainer);

        section.appendChild(contentContainer);
        root.appendChild(section);
    }

    private createRow(): FrameNode {
        const row = figma.createFrame();
        row.layoutMode = "HORIZONTAL";
        row.itemSpacing = 24;
        row.fills = [];
        row.primaryAxisSizingMode = "AUTO";
        row.counterAxisSizingMode = "AUTO";
        row.counterAxisAlignItems = "CENTER";
        row.clipsContent = false;
        return row;
    }

    private createStack(): FrameNode {
        const stack = figma.createFrame();
        stack.layoutMode = "VERTICAL";
        stack.itemSpacing = 12;
        stack.fills = [];
        stack.primaryAxisSizingMode = "AUTO";
        stack.counterAxisSizingMode = "AUTO";
        return stack;
    }
}

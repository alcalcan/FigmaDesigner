import { Placeholder } from "../../components/Placeholder";

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
import { progress_stepper } from "../../components/Alex_CookBook/progress_stepper/progress_stepper";
import { slider } from "../../components/Alex_CookBook/slider/slider";
import { social_profile_card } from "../../components/Alex_CookBook/social_profile_card/social_profile_card";
import { dropdown_input } from "../../components/Alex_CookBook/dropdown_input/dropdown_input";
import { metric_card } from "../../components/Alex_CookBook/metric_card/metric_card";
import { line_chart_card } from "../../components/Alex_CookBook/line_chart_card/line_chart_card";
import { button } from "../../components/Alex_CookBook/button/button";
import { badge } from "../../components/Alex_CookBook/badge/badge";
import { tabs } from "../../components/Alex_CookBook/tabs/tabs";
import { Features___store, Features___stats, Lucide_users } from "../../components/index";

export class CookbookComponentsDemo extends BaseComponent {
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
            logoRow.fills = [{ type: 'SOLID', color: { r: 0, g: 0.067, b: 0.173 } }]; // Very dark blue for logo contrast
            logoRow.cornerRadius = 8;

            const logo = new Placeholder("BookingLogo_color");
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

            // States and Professional Inputs
            const stateRow = this.createRow();
            stateRow.layoutAlign = "STRETCH";
            stateRow.appendChild(await inputComp.create({ placeholder: "Error State", state: "error", helperText: "This field is required", width: 320 }));
            stateRow.appendChild(await inputComp.create({ placeholder: "Warning State", state: "warning", helperText: "Check your input", width: 320 }));
            stateRow.appendChild(await inputComp.create({ placeholder: "Success State", state: "success", helperText: "Looking good!", width: 320 }));
            container.appendChild(stateRow);

            // Dropdown Input Showcase
            const di = new dropdown_input();
            const diNode = await di.create({
                placeholder: "Professional Dropdown",
                options: [
                    { name: "Option 1", selected: false },
                    { name: "Option 2", selected: true },
                    { name: "Option 3", selected: false }
                ],
                width: 320
            });
            // (diNode as FrameNode).layoutAlign = "STRETCH"; // REMOVED to respect fixed width 320
            container.appendChild(diNode);

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

        // --- BUTTONS ---
        await this.addSection(root, "Buttons", async (container) => {
            const btn = new button();

            // Variants Row
            const variantRow = this.createRow();
            variantRow.appendChild(await btn.create({ label: "Primary", variant: "primary" }));
            variantRow.appendChild(await btn.create({ label: "Secondary", variant: "secondary" }));
            variantRow.appendChild(await btn.create({ label: "Ghost", variant: "ghost" }));
            variantRow.appendChild(await btn.create({ label: "Danger", variant: "danger" }));
            container.appendChild(variantRow);

            // States Row
            const stateRow = this.createRow();
            stateRow.appendChild(await btn.create({ label: "Default", state: "default" }));
            stateRow.appendChild(await btn.create({ label: "Hover State", state: "hover" }));
            stateRow.appendChild(await btn.create({ label: "Disabled", state: "disabled" }));
            stateRow.appendChild(await btn.create({ label: "Loading", state: "loading" }));
            container.appendChild(stateRow);

            // Sizes Row
            const sizeRow = this.createRow();
            sizeRow.appendChild(await btn.create({ label: "Small Button", size: "small" }));
            sizeRow.appendChild(await btn.create({ label: "Medium Button", size: "medium" }));
            sizeRow.appendChild(await btn.create({ label: "Large Button", size: "large" }));
            container.appendChild(sizeRow);

            // Full Width Button
            container.appendChild(await btn.create({ label: "Full Width Primary Button", width: "fill" }));
        });

        // --- BADGES & TABS ---
        await this.addSection(root, "Badges & Tabs", async (container) => {
            const b = new badge();

            // Subtle Badges
            const subtleRow = this.createRow();
            subtleRow.appendChild(await b.create({ label: "Neutral", variant: "neutral", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Success", variant: "success", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Warning", variant: "warning", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Error", variant: "error", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Info", variant: "info", type: "subtle" }));
            container.appendChild(subtleRow);

            // Solid Badges
            const solidRow = this.createRow();
            solidRow.appendChild(await b.create({ label: "Neutral Solid", variant: "neutral", type: "solid" }));
            solidRow.appendChild(await b.create({ label: "Success Solid", variant: "success", type: "solid" }));
            solidRow.appendChild(await b.create({ label: "Warning Solid", variant: "warning", type: "solid" }));
            solidRow.appendChild(await b.create({ label: "Error Solid", variant: "error", type: "solid" }));
            solidRow.appendChild(await b.create({ label: "Info Solid", variant: "info", type: "solid" }));
            container.appendChild(solidRow);

            const t = new tabs();
            container.appendChild(await t.create({ items: ["Overview", "Details", "Ingredients", "Reviews"], activeIndex: 0 }));
            container.appendChild(await t.create({ items: ["Messages", "Notifications", "Settings"], activeIndex: 1 }));
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

        // --- SLIDERS ---
        await this.addSection(root, "Sliders", async (container) => {
            const sl = new slider();

            const simpleRow = this.createRow();
            simpleRow.appendChild(await sl.create({ type: "simple", value: 30, width: 300 }));
            simpleRow.appendChild(await sl.create({ type: "simple", value: 70, width: 300 }));
            container.appendChild(simpleRow);

            const rangeRow = this.createRow();
            rangeRow.appendChild(await sl.create({ type: "range", rangeValue: [10, 40], width: 300 }));
            rangeRow.appendChild(await sl.create({ type: "range", rangeValue: [30, 90], width: 300 }));
            container.appendChild(rangeRow);

            const inputRow = this.createRow();
            inputRow.appendChild(await sl.create({ type: "with-input", value: 45, width: 300 }));
            inputRow.appendChild(await sl.create({ type: "with-input", value: 82, width: 300 }));
            container.appendChild(inputRow);

            const rangeInputRow = this.createRow();
            rangeInputRow.appendChild(await sl.create({ type: "range-with-inputs", rangeValue: [15, 65], width: 480 }));
            rangeInputRow.appendChild(await sl.create({ type: "range-with-inputs", rangeValue: [40, 95], width: 480 }));
            container.appendChild(rangeInputRow);
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

            const uefa = new Placeholder("uefa_cards_4x");
            const uefaNode = await uefa.create({});
            (uefaNode as FrameNode).layoutAlign = "STRETCH";
            container.appendChild(uefaNode);
        });

        // --- DATA VISUALIZATION ---
        await this.addSection(root, "Data Visualization", async (container) => {
            // Dashboard Container for all cards (Metrics + Charts)
            const dashboard = figma.createFrame();
            dashboard.name = "Dashboard Grid";
            dashboard.layoutMode = "HORIZONTAL";
            dashboard.layoutWrap = "WRAP"; // Wraps items to next row
            dashboard.itemSpacing = 32; // Horizontal gap
            dashboard.counterAxisSpacing = 32; // Vertical gap
            dashboard.primaryAxisAlignItems = "MIN";
            dashboard.counterAxisAlignItems = "MIN";
            dashboard.layoutAlign = "STRETCH"; // Fill the parent width
            dashboard.primaryAxisSizingMode = "FIXED"; // Needed for wrapping to trigger against the parent width
            dashboard.counterAxisSizingMode = "AUTO"; // Grow height as needed
            dashboard.fills = [];
            dashboard.clipsContent = false;

            const metric = new metric_card();
            const chart = new line_chart_card();

            // Add Metric Cards (Reference Style)
            dashboard.appendChild(await metric.create({
                label: "Active Users",
                value: "436",
                period: "Month to Date",
                trend: "191%",
                trendValue: "150",
                trendDirection: "up",
                isFavorite: true,
                platformName: "Google Analytics 4",
                sparklineData: [0.2, 0.3, 0.25, 0.4, 0.35, 0.5, 0.45],
                color: { r: 0.1, g: 0.8, b: 0.5 } // Green
            }));

            dashboard.appendChild(await metric.create({
                label: "Engaged Sessions",
                value: "488",
                period: "Month to Date",
                trend: "297%",
                trendValue: "123",
                trendDirection: "up",
                isFavorite: true,
                platformName: "Google Analytics 4",
                sparklineData: [0.3, 0.4, 0.35, 0.5, 0.4, 0.6, 0.5],
                color: { r: 0.1, g: 0.8, b: 0.5 } // Green
            }));

            dashboard.appendChild(await metric.create({
                label: "Impressions",
                value: "22,321",
                period: "Month to Date",
                trend: "5%",
                trendValue: "23,545",
                trendDirection: "down",
                isFavorite: true,
                platformName: "Instagram Business",
                sparklineData: [0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.35],
                color: { r: 0.95, g: 0.25, b: 0.25 } // Red
            }));

            dashboard.appendChild(await metric.create({
                label: "Total Followers",
                value: "3,062",
                period: "Month to Date",
                trendDirection: "neutral", // Blue line
                isFavorite: true,
                platformName: "Instagram Business",
                sparklineData: [0.1, 0.2, 0.25, 0.3, 0.4, 0.45, 0.5],
                color: { r: 0.2, g: 0.5, b: 1 } // Blue
            }));

            // --- Compact Metric Cards Row ---
            const compactRow = figma.createFrame();
            compactRow.name = "Compact Cards Row";
            compactRow.layoutMode = "HORIZONTAL";
            compactRow.itemSpacing = 16;
            compactRow.layoutAlign = "STRETCH";
            compactRow.primaryAxisSizingMode = "FIXED";
            compactRow.counterAxisSizingMode = "AUTO";
            compactRow.fills = [];

            // 1. Basket (All Spendings)
            compactRow.appendChild(await metric.create({
                variant: "compact",
                icon: Features___store,
                label: "All Spendings",
                value: "$574.34",
                chartType: "none",
                color: { r: 0.4, g: 0.3, b: 1 } // Purple
            }));

            // 2. Bar Chart (Spent this month)
            compactRow.appendChild(await metric.create({
                variant: "compact",
                label: "Spent this month",
                value: "$682.5",
                chartType: "bar",
                color: { r: 0.3, g: 0.2, b: 0.9 }, // Deep Purple
                sparklineData: [0.4, 0.6, 0.5, 0.8, 0.3, 0.9, 0.2]
            }));

            // 3. Stats (Earnings)
            compactRow.appendChild(await metric.create({
                variant: "compact",
                icon: Features___stats,
                label: "Earnings",
                value: "$350.40",
                chartType: "none",
                color: { r: 0.3, g: 0.4, b: 0.9 } // Blue-ish Purple
            }));

            // 4. User + Line (New clients)
            compactRow.appendChild(await metric.create({
                variant: "compact",
                icon: Lucide_users,
                label: "New clients",
                value: "321",
                chartType: "line",
                color: { r: 0.5, g: 0.4, b: 0.9 }, // Light Purple
                sparklineData: [0.2, 0.3, 0.2, 0.5, 0.4, 0.8, 0.7]
            }));

            dashboard.appendChild(compactRow);

            // Add Chart Cards (Keeping existing ones for variety)
            dashboard.appendChild(await chart.create({
                title: "Weekly Traffic",
                dataPoints: [0.1, 0.4, 0.3, 0.7, 0.5, 0.8, 0.6],
                color: { r: 0.05, g: 0.75, b: 0.45 } // Emerald Green
            }));

            dashboard.appendChild(await chart.create({
                title: "Server Load",
                dataPoints: [0.2, 0.3, 0.5, 0.4, 0.6, 0.8, 0.9],
                color: { r: 0.95, g: 0.2, b: 0.2 } // Vibrant Red
            }));

            container.appendChild(dashboard);
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

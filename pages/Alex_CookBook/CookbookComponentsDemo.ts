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
import { table } from "../../components/Alex_CookBook/table/table";
import { Features___store, Features___stats, Lucide_users, Lucide_plus, Lucide_chevron_down, Lucide_arrow_right, Action___settings } from "../../components/index";

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
        root.paddingTop = 80;
        root.paddingLeft = 80;
        root.paddingRight = 80;
        root.paddingBottom = 80;
        root.counterAxisSizingMode = "FIXED"; // Fixed width for showcase
        root.resize(1680, 100); // Set fixed width first

        root.primaryAxisSizingMode = "AUTO"; // Then set height to Hug
        root.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.99 } }];

        root.layoutAlign = "STRETCH";
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

            // Icons Showcase Row
            const iconRow = this.createRow();
            iconRow.appendChild(await btn.create({ label: "Add Recipe", variant: "primary", frontIcon: Lucide_plus }));
            iconRow.appendChild(await btn.create({ label: "Select Option", variant: "secondary", backIcon: Lucide_chevron_down }));
            iconRow.appendChild(await btn.create({ label: "Continue", variant: "primary", backIcon: Lucide_arrow_right }));
            iconRow.appendChild(await btn.create({ label: "Settings", variant: "ghost", frontIcon: Action___settings }));
            iconRow.appendChild(await btn.create({ label: "Disabled Action", state: "disabled", frontIcon: Lucide_plus }));
            container.appendChild(iconRow);

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
        // --- DATA VISUALIZATION ---
        await this.addSection(root, "Data Visualization", async (container) => {
            // Dashboard Container for all cards (Metrics + Charts)
            const dashboard = figma.createFrame();
            dashboard.name = "Dashboard Grid";
            dashboard.layoutMode = "VERTICAL";
            dashboard.itemSpacing = 24;
            dashboard.layoutAlign = "STRETCH";
            dashboard.primaryAxisSizingMode = "AUTO";
            dashboard.counterAxisSizingMode = "FIXED";
            dashboard.fills = [];
            dashboard.clipsContent = false;

            const metric = new metric_card();
            const chart = new line_chart_card();

            // 3x3 Grid Layout - Varied Data
            const gridData = [
                { label: "Daily Active Users", value: "8,241", trend: "+12.5%", trendValue: "(+842)", period: "Last 24h", color: { r: 0.1, g: 0.8, b: 0.4 }, platform: "Google Analytics", icon: Lucide_users, data: [0.2, 0.4, 0.3, 0.6, 0.5, 0.8, 0.7] },
                { label: "Gross Revenue", value: "$42,500", trend: "+8.2%", trendValue: "(+$3.2k)", period: "Month to Date", color: { r: 0.2, g: 0.5, b: 1.0 }, platform: "Stripe Billing", icon: Action___settings, data: [0.1, 0.2, 0.4, 0.35, 0.6, 0.55, 0.9] },
                { label: "Churn Rate", value: "2.4%", trend: "-1.2%", trendValue: "(-0.5%)", period: "Last 30 Days", color: { r: 0.9, g: 0.2, b: 0.3 }, platform: "Customer Success", icon: Features___stats, data: [0.8, 0.7, 0.6, 0.65, 0.5, 0.4, 0.35] },
                { label: "Avg. Session Time", value: "4m 32s", trend: "+15%", trendValue: "(+42s)", period: "Last 7 Days", color: { r: 1.0, g: 0.6, b: 0.0 }, platform: "Mixpanel", icon: Lucide_users, data: [0.3, 0.35, 0.5, 0.45, 0.7, 0.65, 0.8] },
                { label: "Support Tickets", value: "142", trend: "-5.4%", trendValue: "(-8)", period: "Open Tickets", color: { r: 0.6, g: 0.3, b: 0.9 }, platform: "Zendesk", icon: Action___settings, data: [0.5, 0.4, 0.45, 0.3, 0.35, 0.25, 0.2] },
                { label: "New Signups", value: "1,452", trend: "+22%", trendValue: "(+280)", period: "Regional Growth", color: { r: 0.0, g: 0.7, b: 0.8 }, platform: "Internal Auth", icon: Features___stats, data: [0.1, 0.3, 0.2, 0.5, 0.45, 0.8, 0.95] },
                { label: "Server Latency", value: "24ms", trend: "Stable", trendValue: "(0ms)", period: "Global Avg.", color: { r: 0.5, g: 0.5, b: 0.6 }, platform: "Cloudfront", icon: Action___settings, data: [0.2, 0.21, 0.2, 0.19, 0.2, 0.2, 0.2] },
                { label: "Ad Conversion", value: "3.8%", trend: "+0.4%", trendValue: "(+12%)", period: "FB Campaigns", color: { r: 0.2, g: 0.4, b: 0.8 }, platform: "Meta Ads", icon: Lucide_users, data: [0.4, 0.5, 0.45, 0.6, 0.55, 0.75, 0.85] },
                { label: "API Error Rate", value: "0.04%", trend: "-0.01%", trendValue: "(-20%)", period: "Production", color: { r: 0.8, g: 0.1, b: 0.2 }, platform: "Sentry", icon: Features___stats, data: [0.4, 0.3, 0.35, 0.2, 0.15, 0.1, 0.05] }
            ];

            for (let r = 0; r < 3; r++) {
                const row = figma.createFrame();
                row.name = `Row ${r + 1}`;
                row.layoutMode = "HORIZONTAL";
                row.itemSpacing = 24;
                row.layoutAlign = "STRETCH";
                row.primaryAxisSizingMode = "FIXED"; // Stretch
                row.counterAxisSizingMode = "AUTO"; // Hug
                row.fills = [];
                row.clipsContent = false; // Show shadows!
                dashboard.appendChild(row);

                for (let c = 0; c < 3; c++) {
                    const idx = r * 3 + c;
                    const data = gridData[idx];

                    row.appendChild(await metric.create({
                        label: data.label,
                        value: data.value,
                        trend: data.trend,
                        trendValue: data.trendValue,
                        period: data.period,
                        color: data.color,
                        platformName: data.platform,
                        platformIcon: data.icon,
                        sparklineData: data.data,
                        width: "fill"
                    }));
                }
            }

            // Line Chart and Compact Metrics below the grid
            const secondaryRow = figma.createFrame();
            secondaryRow.name = "Secondary Row";
            secondaryRow.layoutMode = "HORIZONTAL";
            secondaryRow.itemSpacing = 24;
            secondaryRow.layoutAlign = "STRETCH";
            secondaryRow.primaryAxisSizingMode = "FIXED";
            secondaryRow.counterAxisSizingMode = "AUTO";
            secondaryRow.fills = [];
            secondaryRow.clipsContent = false; // Show shadows!
            dashboard.appendChild(secondaryRow);

            secondaryRow.appendChild(await chart.create({
                title: "Weekly Engagement",
                dataPoints: [0.3, 0.4, 0.2, 0.6, 0.5, 0.8, 0.75],
                color: { r: 0.1, g: 0.6, b: 0.9 }
            }));
            secondaryRow.appendChild(await chart.create({
                title: "Conversion Pulse",
                dataPoints: [0.1, 0.25, 0.2, 0.4, 0.35, 0.8, 0.9],
                color: { r: 0.8, g: 0.2, b: 0.4 }
            }));

            const compactCol = figma.createFrame();
            compactCol.name = "Compact Metrics Column";
            compactCol.layoutMode = "VERTICAL";
            compactCol.itemSpacing = 16;
            compactCol.layoutGrow = 1;
            compactCol.primaryAxisSizingMode = "AUTO";
            compactCol.counterAxisSizingMode = "FIXED";
            compactCol.fills = [];
            compactCol.clipsContent = false; // Show shadows!
            secondaryRow.appendChild(compactCol);

            compactCol.appendChild(await metric.create({
                variant: "compact", width: "fill", label: "Store Visits", value: "1,240",
                icon: Features___store, color: { r: 0.4, g: 0.7, b: 0.2 }, chartType: "line",
                sparklineData: [0.2, 0.3, 0.25, 0.4, 0.5, 0.45, 0.6]
            }));
            compactCol.appendChild(await metric.create({
                variant: "compact", width: "fill", label: "Referrals", value: "854",
                icon: Lucide_users, color: { r: 0.9, g: 0.4, b: 0.1 }, chartType: "bar",
                sparklineData: [0.1, 0.2, 0.4, 0.6, 0.5, 0.8, 0.7]
            }));

            container.appendChild(dashboard);
        });

        // --- TABLES ---
        await this.addSection(root, "Tables", async (container) => {
            const t = new table();

            // 1. Simple Table
            const simpleTable = await t.create({
                width: "fill",
                columns: [
                    { label: "Product", key: "name", width: "fill" },
                    { label: "Category", key: "category", width: 200 },
                    { label: "Price", key: "price", width: 120, align: "RIGHT" },
                    { label: "Stock", key: "stock", width: 120, align: "CENTER" }
                ],
                data: [
                    { name: "Wireless Headphones", category: "Electronics", price: "$199.99", stock: "45" },
                    { name: "Smart Watch", category: "Wearables", price: "$249.00", stock: "12" },
                    { name: "Bluetooth Speaker", category: "Electronics", price: "$89.50", stock: "88" }
                ]
            });
            container.appendChild(simpleTable);

            // 2. User Table with Badges
            const userTable = await t.create({
                width: "fill",
                columns: [
                    { label: "User", key: "user", width: "fill" },
                    { label: "Email", key: "email", width: 300 },
                    { label: "Role", key: "role", width: 150 },
                    { label: "Status", key: "status", width: 150, type: "badge" }
                ],
                data: [
                    { user: "Alex Calcan", email: "alex@example.com", role: "Admin", status: "Active" },
                    { user: "John Doe", email: "john@doe.com", role: "Editor", status: "Pending" },
                    { user: "Sarah Smith", email: "sarah@design.com", role: "Designer", status: "Inactive" },
                    { user: "Mike Ross", email: "mike@law.com", role: "Member", status: "Active" }
                ]
            });
            container.appendChild(userTable);

            // 3. Order Table with Checkboxes
            const orderTable = await t.create({
                width: "fill",
                columns: [
                    { label: "Selected", key: "selected", width: 80, type: "checkbox", align: "CENTER" },
                    { label: "Order ID", key: "id", width: 150 },
                    { label: "Customer", key: "customer", width: "fill" },
                    { label: "Date", key: "date", width: 180 },
                    { label: "Total", key: "total", width: 120, align: "RIGHT" }
                ],
                data: [
                    { selected: true, id: "#ORD-9921", customer: "Apple Inc.", date: "Oct 24, 2023", total: "$2,450.00" },
                    { selected: false, id: "#ORD-9922", customer: "Google Cloud", date: "Oct 25, 2023", total: "$1,200.00" },
                    { selected: true, id: "#ORD-9923", customer: "Microsoft Corp.", date: "Oct 26, 2023", total: "$5,630.00" }
                ]
            });
            container.appendChild(orderTable);
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

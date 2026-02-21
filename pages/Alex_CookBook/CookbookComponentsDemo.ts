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
import { metric_card_design1 as metric_card_design1_Alex_CookBook } from "../../components/Alex_CookBook/metric_card_design1/metric_card_design1";
import { dropdown_options } from "../../components/Alex_CookBook/dropdown_options/dropdown_options";

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

            const logoRow = this.createRow(container);
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
            const stateRow = this.createRow(container);
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
            const variantRow = this.createRow(container);
            variantRow.appendChild(await btn.create({ label: "Primary", variant: "primary" }));
            variantRow.appendChild(await btn.create({ label: "Secondary", variant: "secondary" }));
            variantRow.appendChild(await btn.create({ label: "Ghost", variant: "ghost" }));
            variantRow.appendChild(await btn.create({ label: "Danger", variant: "danger" }));
            container.appendChild(variantRow);

            // States Row
            const stateRow = this.createRow(container);
            stateRow.appendChild(await btn.create({ label: "Default", state: "default" }));
            stateRow.appendChild(await btn.create({ label: "Hover State", state: "hover" }));
            stateRow.appendChild(await btn.create({ label: "Disabled", state: "disabled" }));
            stateRow.appendChild(await btn.create({ label: "Loading", state: "loading" }));
            container.appendChild(stateRow);

            // Sizes Row
            const sizeRow = this.createRow(container);
            sizeRow.appendChild(await btn.create({ label: "Small Button", size: "small" }));
            sizeRow.appendChild(await btn.create({ label: "Medium Button", size: "medium" }));
            sizeRow.appendChild(await btn.create({ label: "Large Button", size: "large" }));
            container.appendChild(sizeRow);

            // Icons Showcase Row
            const iconRow = this.createRow(container);
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
            const subtleRow = this.createRow(container);
            subtleRow.appendChild(await b.create({ label: "Neutral", variant: "neutral", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Success", variant: "success", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Warning", variant: "warning", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Error", variant: "error", type: "subtle" }));
            subtleRow.appendChild(await b.create({ label: "Info", variant: "info", type: "subtle" }));
            container.appendChild(subtleRow);

            // Solid Badges
            const solidRow = this.createRow(container);
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
            const row = this.createRow(container);

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

            const simpleRow = this.createRow(container);
            simpleRow.appendChild(await sl.create({ type: "simple", value: 30, width: 300 }));
            simpleRow.appendChild(await sl.create({ type: "simple", value: 70, width: 300 }));
            container.appendChild(simpleRow);

            const rangeRow = this.createRow(container);
            rangeRow.appendChild(await sl.create({ type: "range", rangeValue: [10, 40], width: 300 }));
            rangeRow.appendChild(await sl.create({ type: "range", rangeValue: [30, 90], width: 300 }));
            container.appendChild(rangeRow);

            const inputRow = this.createRow(container);
            inputRow.appendChild(await sl.create({ type: "with-input", value: 45, width: 300 }));
            inputRow.appendChild(await sl.create({ type: "with-input", value: 82, width: 300 }));
            container.appendChild(inputRow);

            const rangeInputRow = this.createRow(container);
            rangeInputRow.appendChild(await sl.create({ type: "range-with-inputs", rangeValue: [15, 65], width: 480 }));
            rangeInputRow.appendChild(await sl.create({ type: "range-with-inputs", rangeValue: [40, 95], width: 480 }));
            container.appendChild(rangeInputRow);
        });

        // --- NAVIGATION ---
        await this.addSection(root, "Navigation & Menus", async (container) => {
            const row = this.createRow(container);

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
            // Note: Progress stepper moved to its own dedicated section below.
            const b = new badge();
            const row = this.createRow(container);
            row.appendChild(await b.create({ label: "Loading...", variant: "info" }));
            row.appendChild(await b.create({ label: "In Progress", variant: "warning" }));
            container.appendChild(row);
        });

        // --- CONTENT CARDS ---
        await this.addSection(root, "Content Cards", async (container) => {
            const cardRow = this.createRow(container);
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
            // 2. Dashboard Container for standard metrics
            const dashboard = figma.createFrame();
            dashboard.name = "Dashboard Grid";
            dashboard.layoutMode = "VERTICAL";
            dashboard.itemSpacing = 24;
            dashboard.layoutAlign = "STRETCH";
            dashboard.primaryAxisSizingMode = "AUTO";
            dashboard.counterAxisSizingMode = "FIXED";
            dashboard.counterAxisAlignItems = "MIN";
            dashboard.fills = [];
            dashboard.clipsContent = false;

            const metric = new metric_card();
            const chart = new line_chart_card();

            const createDashboardRow = (name: string, container: FrameNode): FrameNode => {
                const row = figma.createFrame();
                row.name = name;
                row.layoutMode = "HORIZONTAL";
                row.itemSpacing = 24;
                row.layoutAlign = "STRETCH";
                row.primaryAxisSizingMode = "FIXED"; // Fill available width from vertical parent
                row.counterAxisSizingMode = "AUTO"; // Hug card height
                row.counterAxisAlignItems = "MIN"; // Keep cards top-aligned when content height differs
                row.fills = [];
                row.clipsContent = false;

                container.appendChild(row);
                row.resize(container.width, 100);
                return row;
            };

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
                const row = createDashboardRow(`Row ${r + 1}`, dashboard);

                for (let c = 0; c < 3; c++) {
                    const idx = r * 3 + c;
                    const data = gridData[idx];

                    const metricNode = await metric.create({
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
                    });

                    const metricFrame = metricNode as FrameNode;
                    metricFrame.layoutGrow = 1; // Explicit fill behavior in horizontal rows
                    metricFrame.layoutAlign = "INHERIT"; // Preserve hug height, avoid vertical stretch
                    row.appendChild(metricFrame);
                }
            }

            // Line Chart and Compact Metrics below the grid
            const secondaryRow = createDashboardRow("Secondary Row", dashboard);

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

        // --- METRIC CARDS - MODERN GLASSMORPHIC (DESIGN 1) ---
        await this.addSection(root, "Metric Cards - Modern Glassmorphic (Design 1)", async (container) => {
            const design1 = new metric_card_design1_Alex_CookBook();

            // 1. Standard Variations Row
            const standardRow = this.createRow(container);
            standardRow.layoutAlign = "STRETCH";
            standardRow.name = "Standard Variations";

            // Up Trend - ORIGINAL
            standardRow.appendChild(await design1.create({
                title: "Server Latency",
                value: "24ms",
                period: "Global Avg.",
                trendDirection: "up",
                trendValue: "12%",
                width: "fill",
                height: 304,
                gap: "auto"
            }));

            // Down Trend
            standardRow.appendChild(await design1.create({
                title: "Error Rate",
                value: "0.02%",
                period: "Last Hour",
                trendDirection: "down",
                trendValue: "0.05%",
                width: "fill",
                height: 304,
                gap: "auto",
                dataPoints: [0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],
                gradientStart: { r: 0.9, g: 0.1, b: 0.2 }, // Red
                gradientEnd: { r: 1, g: 0.5, b: 0.6 }
            }));

            // Neutral
            standardRow.appendChild(await design1.create({
                title: "CPU Usage",
                value: "45%",
                period: "Cluster B",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 304,
                gap: "auto",
                dataPoints: [0.4, 0.42, 0.41, 0.4, 0.43, 0.41, 0.4],
                gradientStart: { r: 0.1, g: 0.7, b: 0.3 }, // Green
                gradientEnd: { r: 0.4, g: 0.9, b: 0.6 }
            }));

            container.appendChild(standardRow);

            // 2. Compact Variations Row
            const compactRow = this.createRow(container);
            compactRow.layoutAlign = "STRETCH";
            compactRow.name = "Compact Variations";

            compactRow.appendChild(await design1.create({
                variant: "compact",
                title: "Memory Usage",
                value: "4.2GB",
                period: "Region A",
                trendDirection: "up",
                trendValue: "2%",
                width: "fill",
                height: 200,
                gap: "auto",
                dataPoints: [0.2, 0.4, 0.5, 0.6, 0.8, 0.85, 0.95],
                gradientStart: { r: 0.9, g: 0.1, b: 0.2 }, // Red
                gradientEnd: { r: 1, g: 0.5, b: 0.6 }
            }));

            compactRow.appendChild(await design1.create({
                variant: "compact",
                title: "Disk I/O",
                value: "120MB/s",
                period: "Storage X",
                trendDirection: "down",
                trendValue: "5%",
                width: "fill",
                height: 200,
                gap: "auto",
                dataPoints: [0.2, 0.3, 0.5, 0.4, 0.6, 0.5, 0.3],
                gradientStart: { r: 0.1, g: 0.7, b: 0.3 }, // Green
                gradientEnd: { r: 0.4, g: 0.9, b: 0.6 }
            }));

            compactRow.appendChild(await design1.create({
                variant: "compact",
                title: "Network In",
                value: "1.2Gbps",
                period: "Edge 1",
                trendDirection: "neutral",
                trendValue: "Stable",
                width: "fill",
                height: 200,
                gap: "auto",
                dataPoints: [0.6, 0.61, 0.59, 0.6, 0.62, 0.6, 0.6],
                gradientStart: { r: 0.1, g: 0.4, b: 0.9 }, // Blue
                gradientEnd: { r: 0.4, g: 0.8, b: 1 }
            }));

            compactRow.appendChild(await design1.create({
                variant: "compact",
                title: "Queue Depth",
                value: "14",
                period: "Worker B",
                trendDirection: "up",
                trendValue: "High",
                width: "fill",
                height: 200,
                gap: "auto",
                dataPoints: [0.1, 0.2, 0.4, 0.8, 0.7, 0.9, 0.95],
                gradientStart: { r: 0.9, g: 0.6, b: 0.1 }, // Orange
                gradientEnd: { r: 1, g: 0.9, b: 0.4 }
            }));

            container.appendChild(compactRow);
        });

        // --- OPTIONS ---
        await this.addSection(root, "Options (Checkbox & Radio Group Menus)", async (container) => {
            const drp = new dropdown_options();
            const row1 = this.createRow(container);

            // Full Width Options Menu (padding on individual options, 0 on body)
            row1.appendChild(await drp.create({
                width: 240,
                bodyPadding: 0,
                selectionType: "radio",
                options: [
                    { name: "Default Option (No Padding Body)", selected: false },
                    { name: "Hovered Option", selected: false, hoverState: true },
                    { name: "Selected Option", selected: true }
                ]
            }));

            // Padded Body Options Menu
            row1.appendChild(await drp.create({
                width: 240,
                bodyPadding: 8,
                selectionType: "checkbox",
                options: [
                    { name: "Checkbox Option (Padded Body)", selected: false },
                    { name: "Hovered Checkbox", selected: false, hoverState: true },
                    { name: "Checked Checkbox", selected: true }
                ]
            }));

            container.appendChild(row1);
        });

        // --- CHIPS ---
        await this.addSection(root, "Chips & Status Badges", async (container) => {
            const b = new badge();
            const chip = new chip_expand();

            // Status Chips Variations (Roundness + Styles)
            const styleRow = this.createRow(container);
            styleRow.name = "Status Chips Styles";
            styleRow.appendChild(await b.create({ label: "Default Round (Solid)", variant: "success", type: "solid" }));
            styleRow.appendChild(await b.create({ label: "Default Round (Subtle)", variant: "success", type: "subtle" }));
            styleRow.appendChild(await b.create({ label: "Square Corners (Solid)", variant: "info", type: "solid", cornerRadius: 4 }));
            styleRow.appendChild(await b.create({ label: "Square Corners (Subtle)", variant: "info", type: "subtle", cornerRadius: 4 }));
            styleRow.appendChild(await b.create({ label: "Pilled (Solid)", variant: "warning", type: "solid", cornerRadius: 100 }));
            container.appendChild(styleRow);

            // Expanding / Interaction Chips
            const chipRow = this.createRow(container);
            chipRow.name = "Interactive Chips";
            chipRow.appendChild(await chip.create({ text: "Default interactive chip" }));
            chipRow.appendChild(await chip.create({ text: "Hovered chip", hover: true }));
            chipRow.appendChild(await chip.create({ text: "Selected chip", selected: true }));
            chipRow.appendChild(await chip.create({ text: "Expanded chip", expanded: true }));
            chipRow.appendChild(await chip.create({ text: "More Round Chip", cornerRadius: 100 }));
            container.appendChild(chipRow);
        });

        // --- PROGRESS STEPPER ---
        await this.addSection(root, "Progress Stepper", async (container) => {
            const ps = new progress_stepper();

            // Default
            container.appendChild(await ps.create({
                width: 700,
                steps: ["Cart", "Checkout", "Payment", "Review", "Complete"],
                currentStep: 2
            }));

            // Square + Letter
            container.appendChild(await ps.create({
                width: 700,
                steps: ["Registration", "Verification", "Onboarding"],
                currentStep: 1,
                indicatorShape: "SQUARE",
                indicatorContent: "LETTER"
            }));

            // Circle Dots + Custom Colors
            container.appendChild(await ps.create({
                width: 700,
                steps: ["Step 1", "Step 2", "Step 3", "Step 4"],
                currentStep: 3,
                indicatorContent: "DOT",
                completedStepContent: "DOT",
                activeColor: { r: 0.9, g: 0.2, b: 0.2 }, // Red active
                completedColor: { r: 0.1, g: 0.7, b: 0.3 } // Green completed
            }));

            // Just Numbers everywhere
            container.appendChild(await ps.create({
                width: 700,
                steps: ["Phase 1", "Phase 2", "Phase 3"],
                currentStep: 1,
                completedStepContent: "NUMBER",
                activeColor: { r: 0.5, g: 0.1, b: 0.9 } // Purple
            }));
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
        section.counterAxisSizingMode = "FIXED";
        section.clipsContent = false;

        root.appendChild(section);

        const availableWidth = root.width - (root.paddingLeft + root.paddingRight);
        section.resize(availableWidth, 100);

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
        contentContainer.counterAxisSizingMode = "FIXED";
        contentContainer.clipsContent = false;
        contentContainer.itemReverseZIndex = true;

        section.appendChild(contentContainer);
        contentContainer.resize(availableWidth, 100);

        await contentBuilder(contentContainer);
    }

    private createRow(container: FrameNode): FrameNode {
        const row = figma.createFrame();
        row.layoutMode = "HORIZONTAL";
        row.itemSpacing = 24;
        row.fills = [];
        row.layoutAlign = "STRETCH";
        row.counterAxisAlignItems = "MIN";
        row.clipsContent = false;

        container.appendChild(row);
        const availableWidth = container.width - (container.paddingLeft + container.paddingRight);
        row.resize(Math.max(1, availableWidth), 100);

        // Apply sizing modes AFTER resize to ensure they are not overridden
        row.primaryAxisSizingMode = "FIXED";
        row.counterAxisSizingMode = "AUTO"; // Height hugs content

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

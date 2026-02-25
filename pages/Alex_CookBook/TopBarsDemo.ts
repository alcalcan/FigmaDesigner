import { ComponentProps } from "../../components/BaseComponent";
import { top_bar } from "../../components/Alex_CookBook/top_bar/top_bar";
import { BaseDemoPage } from "./BaseDemoPage";

export class TopBarsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        const root = await this.initPage("Alex CookBook - TopBars Demo");

        await this.addHeader(
            root,
            "Top Bars & Headers",
            "Global navigation patterns for the modern web."
        );

        const tb = new top_bar();

        // --- Simple Top Bars ---
        await this.addSection(root, "Simple Headers", "Basic logo and profile setup.", async (container) => {
            container.appendChild(await tb.create({ variant: "simple" }));
            container.appendChild(await tb.create({ variant: "simple", showMenu: true, showNotifications: false }));
        });

        // --- Navigation Top Bars ---
        await this.addSection(root, "Navigation Headers", "Includes main global links.", async (container) => {
            container.appendChild(await tb.create({ variant: "navigation", showSearchAction: true }));
            container.appendChild(await tb.create({
                variant: "navigation",
                navItems: ["Home", "Products", "Solutions", "Pricing", "Contact"],
                showSearchAction: true
            }));
        });

        // --- Search Top Bars ---
        await this.addSection(root, "Search & Utility Headers", "Includes search bars for deep exploration.", async (container) => {
            container.appendChild(await tb.create({ variant: "search", searchCornerRadius: 100 }));
            container.appendChild(await tb.create({ variant: "full", showMenu: true, searchCornerRadius: 8 }));
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        // --- Floating Island Top Bars ---
        await this.addSection(root, "Floating Islands", "Super rounded navigation patterns separating logo, search, and profile.", async (container) => {
            container.itemSpacing = 24;
            container.appendChild(await tb.create({ variant: "floating" }));
            container.appendChild(await tb.create({ variant: "floating", navItems: [], showMenu: true, showNotifications: false }));
        });

        // --- Unified Island Top Bar ---
        await this.addSection(root, "Unified Island", "A single cohesive floating pill for the entire header.", async (container) => {
            container.itemSpacing = 24;
            container.appendChild(await tb.create({ variant: "island", showSearchAction: true, showNotifications: true, showProfile: true, navItems: ["Dashboard", "Projects", "Team"] }));
            container.appendChild(await tb.create({ variant: "island", showHamburgerMenu: true, showProfile: false, showNotifications: false, navItems: [] }));
        });

        // --- UEFA Euro 28 Navigation ---
        await this.addSection(root, "UEFA Euro 28 Navigation", "A specialized navigation bar recreated for UEFA Euro 28.", async (container) => {
            // Desktop
            container.appendChild(await tb.create({ variant: "main_navigation_28", platform: "desktop", width: 1440 }));
            // Mobile
            container.appendChild(await tb.create({ variant: "main_navigation_28", platform: "mobile", width: 375 }));
        });

        // --- UEFA Main Navigation ---
        await this.addSection(root, "UEFA Main Navigation", "Standard UEFA wide top navigation bar.", async (container) => {
            // Desktop
            container.appendChild(await tb.create({ variant: "main_navigation", platform: "desktop", width: 1440 }));
            // Mobile
            container.appendChild(await tb.create({ variant: "main_navigation", platform: "mobile", width: 375 }));
        });

        return root;
    }
}

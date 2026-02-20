import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Page_title } from "../../components/Alex_CookBook/Page_title/Page_title";
import { top_bar } from "../../components/Alex_CookBook/top_bar/top_bar";

export class TopBarsDemo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        const root = figma.createFrame();
        root.name = "Alex CookBook - TopBars Demo";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 64;
        root.paddingTop = 80;
        root.paddingLeft = 80;
        root.paddingRight = 80;
        root.paddingBottom = 80;
        root.counterAxisSizingMode = "FIXED";
        root.resize(1680, 100);

        root.primaryAxisSizingMode = "AUTO";
        root.fills = [{ type: "SOLID", color: { r: 0.949, g: 0.960, b: 0.980 } }]; // #F2F5FA

        root.layoutAlign = "STRETCH";
        root.clipsContent = false;

        // Ensure root hugs height
        root.primaryAxisSizingMode = "AUTO";

        const pageTitle = new Page_title();
        const titleNode = await pageTitle.create({
            title: "Top Bars & Headers",
            subtitle: "Global navigation patterns for the modern web."
        });
        root.appendChild(titleNode);

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

        return root;
    }

    private async addSection(root: FrameNode, title: string, description: string, contentBuilder: (container: FrameNode) => Promise<void>) {
        const section = figma.createFrame();
        section.name = `Section: ${title}`;
        section.layoutMode = "VERTICAL";
        section.itemSpacing = 24;
        section.fills = [];
        section.layoutAlign = "STRETCH";
        section.primaryAxisSizingMode = "AUTO"; // Height Hug
        section.counterAxisSizingMode = "FIXED"; // Width Fill
        section.clipsContent = false;

        const headerContainer = figma.createFrame();
        headerContainer.name = "Header";
        headerContainer.layoutMode = "VERTICAL";
        headerContainer.itemSpacing = 8;
        headerContainer.fills = [];
        headerContainer.layoutAlign = "STRETCH";
        headerContainer.primaryAxisSizingMode = "AUTO";
        headerContainer.counterAxisSizingMode = "FIXED";

        const label = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        label.characters = title;
        label.fontSize = 24;
        label.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.12 } }];
        label.layoutAlign = "STRETCH";
        label.textAutoResize = "HEIGHT";
        headerContainer.appendChild(label);

        const desc = figma.createText();
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        desc.characters = description;
        desc.fontSize = 16;
        desc.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.45 } }];
        desc.layoutAlign = "STRETCH";
        desc.textAutoResize = "HEIGHT";
        headerContainer.appendChild(desc);

        section.appendChild(headerContainer);

        // Add a subtle border container around content to distinguish it from the page
        const shadowWrapper = figma.createFrame();
        shadowWrapper.name = "Demo Preview Container";
        shadowWrapper.layoutMode = "VERTICAL";
        shadowWrapper.itemSpacing = 24; // 24px gap between examples as requested
        shadowWrapper.fills = []; // Let page background show through
        shadowWrapper.layoutAlign = "STRETCH"; // Width Fill
        shadowWrapper.primaryAxisSizingMode = "AUTO"; // Height Hug
        shadowWrapper.counterAxisSizingMode = "FIXED"; // Width Fill
        shadowWrapper.paddingLeft = 24;
        shadowWrapper.paddingRight = 24;
        shadowWrapper.paddingTop = 24;
        shadowWrapper.paddingBottom = 24;
        shadowWrapper.clipsContent = false;
        shadowWrapper.cornerRadius = 16;
        shadowWrapper.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
        shadowWrapper.strokeWeight = 1;

        await contentBuilder(shadowWrapper);
        section.appendChild(shadowWrapper);

        root.appendChild(section);
    }
}

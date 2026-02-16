import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import * as Icons from "../../components/index";

const CATEGORIES: Record<string, string[]> = {
    "Navigation": [
        "arrow-up", "arrow-down", "arrow-left", "arrow-right",
        "chevron-up", "chevron-down", "chevron-left", "chevron-right",
        "chevrons-up", "chevrons-down", "chevrons-left", "chevrons-right",
        "menu", "more-horizontal", "more-vertical",
        "external-link", "move", "maximize", "minimize"
    ],
    "Action": [
        "plus", "minus", "x", "check", "search",
        "trash-2", "edit-2", "copy", "download", "upload",
        "refresh-cw", "save", "filter"
    ],
    "Files & Folders": [
        "file", "file-text", "file-plus", "file-minus",
        "folder", "folder-plus", "folder-minus", "folder-open",
        "archive", "hard-drive"
    ],
    "Communication": [
        "user", "user-plus", "users", "mail", "phone",
        "message-square", "message-circle", "bell", "bell-off",
        "share-2", "send", "at-sign"
    ],
    "Indicators": [
        "alert-circle", "alert-triangle", "info", "help-circle",
        "check-circle", "clock", "calendar", "shield", "flag"
    ],
    "Devices & System": [
        "settings", "home", "image", "camera", "video",
        "monitor", "smartphone", "laptop", "mouse", "keyboard",
        "battery", "wifi", "bluetooth"
    ]
};

export class Lucide_IconShowcase extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });

        const totalIcons = Object.values(CATEGORIES).reduce((acc, val) => acc + val.length, 0);

        const root = figma.createFrame();
        root.name = "Lucide Icon Showcase (Curated)";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 100;
        root.paddingTop = 160;
        root.paddingLeft = 160;
        root.paddingRight = 160;
        root.paddingBottom = 200;
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "AUTO";
        root.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // Pure white background for high-end look

        // Header Section
        const header = figma.createFrame();
        header.layoutMode = "VERTICAL";
        header.itemSpacing = 24;
        header.primaryAxisSizingMode = "AUTO";
        header.counterAxisSizingMode = "AUTO";
        header.fills = [];
        root.appendChild(header);

        // Title Row
        const titleRow = figma.createFrame();
        titleRow.layoutMode = "HORIZONTAL";
        titleRow.itemSpacing = 24;
        titleRow.counterAxisAlignItems = "CENTER";
        titleRow.primaryAxisSizingMode = "AUTO";
        titleRow.counterAxisSizingMode = "AUTO";
        titleRow.fills = [];
        header.appendChild(titleRow);

        const title = figma.createText();
        title.characters = "Lucide Icons";
        title.fontSize = 64;
        title.letterSpacing = { unit: "PERCENT", value: -3 };
        title.fontName = { family: "Open Sans", style: "Bold" };
        title.fills = [{ type: "SOLID", color: { r: 0.05, g: 0.05, b: 0.05 } }];
        title.textAutoResize = "WIDTH_AND_HEIGHT";
        titleRow.appendChild(title);

        const countBadge = figma.createFrame();
        countBadge.paddingLeft = 16; countBadge.paddingRight = 16;
        countBadge.paddingTop = 8; countBadge.paddingBottom = 8;
        countBadge.cornerRadius = 12;
        countBadge.layoutMode = "HORIZONTAL";
        countBadge.primaryAxisSizingMode = "AUTO";
        countBadge.counterAxisSizingMode = "AUTO";
        countBadge.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
        titleRow.appendChild(countBadge);

        const countText = figma.createText();
        countText.characters = `${totalIcons} Icons`;
        countText.fontSize = 18;
        countText.fontName = { family: "Inter", style: "Bold" };
        countText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        countText.textAutoResize = "WIDTH_AND_HEIGHT";
        countBadge.appendChild(countText);

        // Subtitle Container
        const subtitle = figma.createText();
        subtitle.characters = "A curated collection of professional vector icons, refined for high-fidelity UI design.";
        subtitle.fontSize = 20;
        subtitle.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.48, b: 0.52 } }];
        subtitle.textAutoResize = "WIDTH_AND_HEIGHT";
        header.appendChild(subtitle);

        // Categories
        for (const [categoryName, iconNames] of Object.entries(CATEGORIES)) {
            const categorySection = figma.createFrame();
            categorySection.name = `${categoryName} Section`;
            categorySection.layoutMode = "VERTICAL";
            categorySection.itemSpacing = 48;
            categorySection.fills = [];
            categorySection.primaryAxisSizingMode = "AUTO";
            categorySection.counterAxisSizingMode = "AUTO";
            root.appendChild(categorySection);

            // Category Header
            const catHeader = figma.createFrame();
            catHeader.layoutMode = "HORIZONTAL";
            catHeader.itemSpacing = 16;
            catHeader.counterAxisAlignItems = "CENTER";
            catHeader.primaryAxisSizingMode = "AUTO";
            catHeader.counterAxisSizingMode = "AUTO";
            catHeader.fills = [];
            categorySection.appendChild(catHeader);

            const categoryTitle = figma.createText();
            categoryTitle.characters = categoryName;
            categoryTitle.fontSize = 28;
            categoryTitle.fontName = { family: "Inter", style: "Bold" };
            categoryTitle.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.12, b: 0.15 } }];
            categoryTitle.textAutoResize = "WIDTH_AND_HEIGHT";
            catHeader.appendChild(categoryTitle);

            const catLine = figma.createRectangle();
            catLine.resize(100, 2);
            catLine.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
            catHeader.appendChild(catLine);

            const catCount = figma.createText();
            catCount.characters = `${iconNames.length} items`;
            catCount.fontSize = 14;
            catCount.fontName = { family: "Inter", style: "Medium" };
            catCount.fills = [{ type: "SOLID", color: { r: 0.6, g: 0.65, b: 0.7 } }];
            catCount.textAutoResize = "WIDTH_AND_HEIGHT";
            catHeader.appendChild(catCount);

            // Grid Container
            const grid = figma.createFrame();
            grid.name = `${categoryName} Grid`;
            grid.layoutMode = "HORIZONTAL";
            grid.layoutWrap = "WRAP";
            grid.itemSpacing = 64; // Generous horizontal spacing
            grid.counterAxisSpacing = 64; // Generous vertical spacing
            grid.fills = [];
            grid.primaryAxisSizingMode = "FIXED";
            grid.counterAxisSizingMode = "AUTO";
            grid.resize(1400, 100);
            categorySection.appendChild(grid);

            for (const iconName of iconNames) {
                const componentName = `Lucide_${iconName.replace(/-/g, '_')}`;
                const IconClass = (Icons as any)[componentName];

                if (!IconClass) continue;

                try {
                    const itemContainer = figma.createFrame();
                    itemContainer.name = `Icon Item: ${iconName}`;
                    itemContainer.layoutMode = "VERTICAL";
                    itemContainer.itemSpacing = 16;
                    itemContainer.counterAxisAlignItems = "CENTER";
                    itemContainer.fills = [];
                    itemContainer.primaryAxisSizingMode = "AUTO";
                    itemContainer.counterAxisSizingMode = "AUTO";

                    // Icon Container
                    const iconBox = figma.createFrame();
                    iconBox.resize(40, 40);
                    iconBox.fills = [];
                    iconBox.layoutMode = "HORIZONTAL";
                    iconBox.primaryAxisAlignItems = "CENTER";
                    iconBox.counterAxisAlignItems = "CENTER";
                    itemContainer.appendChild(iconBox);

                    const iconInstance = new (IconClass as any)();
                    const iconNode = await iconInstance.create({ x: 0, y: 0, width: 24, strokeWeight: 2.0 });
                    iconBox.appendChild(iconNode);

                    // Label
                    const label = figma.createText();
                    label.characters = iconName;
                    label.fontSize = 11;
                    label.fontName = { family: "Inter", style: "Medium" };
                    label.textAlignHorizontal = "CENTER";
                    label.fills = [{ type: "SOLID", color: { r: 0.55, g: 0.6, b: 0.65 } }];
                    label.textAutoResize = "WIDTH_AND_HEIGHT";
                    itemContainer.appendChild(label);

                    grid.appendChild(itemContainer);
                } catch (e) {
                    console.warn(`Failed to render icon: ${iconName}`, e);
                }
            }
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import * as Icons from "../../components/index";

export class UEFA_IconShowcase extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Essential fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });

        const root = figma.createFrame();
        root.name = "UEFA Icon Showcase";
        root.layoutMode = "VERTICAL";
        root.itemSpacing = 40;
        root.paddingTop = 100;
        root.paddingLeft = 100;
        root.paddingRight = 100;
        root.paddingBottom = 100;
        root.primaryAxisSizingMode = "AUTO";
        root.counterAxisSizingMode = "AUTO";
        root.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.99 } }];

        // Title
        const title = figma.createText();
        title.characters = "UEFA ICON SHOWCASE";
        title.fontSize = 32;
        await figma.loadFontAsync({ family: "Open Sans", style: "Bold" });
        title.fontName = { family: "Open Sans", style: "Bold" };
        root.appendChild(title);

        // Grid Container
        const grid = figma.createFrame();
        grid.name = "Icon Grid";
        grid.layoutMode = "HORIZONTAL";
        grid.layoutWrap = "WRAP";
        grid.itemSpacing = 40;
        grid.counterAxisSpacing = 60;
        grid.fills = [];
        grid.primaryAxisSizingMode = "FIXED";
        grid.counterAxisSizingMode = "AUTO";
        grid.resize(1600, 100); // Increased width to fill page better, auto height
        root.appendChild(grid);

        // Filter for UEFA icons only
        const iconEntries = Object.entries(Icons).filter(([name]) =>
            name.startsWith("Action___") ||
            name.startsWith("AV___") ||
            name.startsWith("Features___") ||
            name.startsWith("Football___") ||
            name.startsWith("Gaming___") ||
            name.startsWith("Navigation___") ||
            name.startsWith("Product___") ||
            name === "VAR_progress" ||
            name === "VAR_resolution" ||
            name === "Card__Single_Card_Red"
        );

        let count = 1;
        for (const [name, IconClass] of iconEntries) {
            try {
                const itemContainer = figma.createFrame();
                itemContainer.name = `Icon Item ${count}`;
                itemContainer.layoutMode = "VERTICAL";
                itemContainer.itemSpacing = 8;
                itemContainer.counterAxisAlignItems = "CENTER";
                itemContainer.fills = [];
                itemContainer.primaryAxisSizingMode = "AUTO";
                itemContainer.counterAxisSizingMode = "FIXED";
                itemContainer.resize(120, 120);

                // 1. Number above (Text format)
                const numText = figma.createText();
                numText.characters = count.toString();
                numText.fontSize = 12;
                numText.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
                itemContainer.appendChild(numText);

                // 2. Icon
                if (typeof IconClass === 'function' && IconClass.prototype instanceof BaseComponent) {
                    const iconInstance = new (IconClass as any)();
                    const iconNode = await iconInstance.create({ x: 0, y: 0 });
                    itemContainer.appendChild(iconNode);
                } else {
                    // Fallback for non-class exports if any
                    const placeholder = figma.createRectangle();
                    placeholder.resize(24, 24);
                    placeholder.fills = [{ type: "SOLID", color: { r: 1, g: 0, b: 0 } }];
                    itemContainer.appendChild(placeholder);
                }

                // 3. Label
                const label = figma.createText();
                label.characters = name;
                label.fontSize = 10;
                label.textAlignHorizontal = "CENTER";
                label.layoutAlign = "STRETCH";
                label.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
                itemContainer.appendChild(label);

                grid.appendChild(itemContainer);
                count++;
            } catch (e) {
                console.warn(`Failed to render icon: ${name}`, e);
            }
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

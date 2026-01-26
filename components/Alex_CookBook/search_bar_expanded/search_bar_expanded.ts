import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { search_bar } from "../search_bar/search_bar";
import { checkbox_element } from "../checkbox_element/checkbox_element";

export class search_bar_expanded extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // 1. Create the base search bar
        const baseSearchBar = new search_bar();
        const root = await baseSearchBar.create(props) as FrameNode;
        root.name = "search_bar_expanded";
        root.clipsContent = false; // Ensure dropdown is visible

        // Ensure root itself has no background
        root.fills = [];

        // 2. Load necessary fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });

        // 3. Create the Dropdown Menu (Absolute Positioned)
        const menu = figma.createFrame();
        menu.name = "Dropdown Menu";
        menu.layoutMode = "VERTICAL";
        menu.primaryAxisSizingMode = "AUTO"; // Hug height
        menu.counterAxisSizingMode = "FIXED";
        menu.itemSpacing = 4;
        menu.paddingTop = 8;
        menu.paddingRight = 8;
        menu.paddingBottom = 8;
        menu.paddingLeft = 8;
        menu.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        menu.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.92, b: 0.94 } }];
        menu.effects = [{
            type: "DROP_SHADOW",
            color: { r: 0, g: 0, b: 0, a: 0.1 },
            offset: { x: 0, y: 4 },
            radius: 12,
            visible: true,
            blendMode: "NORMAL"
        }];
        menu.cornerRadius = 12;
        menu.resize(200, menu.height); // Set width to 200px as suggested

        // 4. Find the "Author" chip for alignment
        const chipsContainer = root.findOne(n => n.name === "Chips Container") as FrameNode;
        const authorChip = chipsContainer?.children.find(c => {
            const text = (c as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
            return text && text.characters === "Author";
        }) as FrameNode;

        // Append to root BEFORE setting absolute positioning
        root.appendChild(menu);
        menu.layoutPositioning = "ABSOLUTE";
        menu.y = root.height;

        if (authorChip && chipsContainer) {
            // Right-align menu with the right edge of the chip
            const chipAbsoluteX = chipsContainer.x + authorChip.x;
            const chipWidth = authorChip.width;
            menu.x = chipAbsoluteX + chipWidth - menu.width;

            if (menu.x < 0) menu.x = 0;
            if (menu.x + menu.width > root.width) menu.x = root.width - menu.width;
        } else {
            menu.x = root.width - menu.width;
        }

        // 5. Add Options using the Alex_CookBook checkbox_element
        // No search bar inside per user request
        const checkboxComp = new checkbox_element();
        const authors = [
            { name: "Jamie Oliver", selected: true },
            { name: "Gordon Ramsay", selected: false },
            { name: "Nigella Lawson", selected: false },
            { name: "Yotam Ottolenghi", selected: true }
        ];

        for (const auth of authors) {
            const checkboxInstance = await checkboxComp.create({ x: 0, y: 0 }) as FrameNode;
            checkboxInstance.name = `Option: ${auth.name}`;
            checkboxInstance.layoutAlign = "STRETCH";
            checkboxInstance.primaryAxisSizingMode = "FIXED";
            checkboxInstance.counterAxisSizingMode = "AUTO";
            checkboxInstance.resize(menu.width - 16, 28); // Account for menu padding

            const textNode = checkboxInstance.findOne(n => n.type === "TEXT") as TextNode;
            if (textNode) {
                await figma.loadFontAsync(textNode.fontName as FontName);
                textNode.characters = auth.name;
                textNode.fontSize = 14;
            }

            // Correctly toggle checked state for Alex_CookBook's EXCLUDE boolean operation
            const shape = checkboxInstance.findOne(n => n.name === "Shape") as BooleanOperationNode;
            if (shape && shape.children.length >= 2) {
                const hole = shape.children[1] as SceneNode;
                hole.visible = !auth.selected;
                shape.visible = true;
            }

            menu.appendChild(checkboxInstance);
        }

        return root;
    }
}

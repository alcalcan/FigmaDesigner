import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { chip_expand as chip_expand_Alex_CookBook } from "../../Alex_CookBook/chip_expand/chip_expand";

// SVG Assets
const SVG_search_icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#59707B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21L16.65 16.65" stroke="#59707B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

type T2x3 = [[number, number, number], [number, number, number]];
function applySizeAndTransform(
    node: SceneNode & LayoutMixin & GeometryMixin,
    opts: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        parentIsAutoLayout: boolean;
        layoutPositioning?: "AUTO" | "ABSOLUTE";
    }
) {
    const { width, height, relativeTransform, parentIsAutoLayout } = opts;
    const positioning = opts.layoutPositioning ?? "AUTO";

    if (typeof width === "number" && typeof height === "number") {
        node.resize(width, height);
    }

    if (relativeTransform) {
        const t = relativeTransform;
        const inFlow = parentIsAutoLayout && positioning !== "ABSOLUTE";

        const tx = inFlow ? 0 : t[0][2];
        const ty = inFlow ? 0 : t[1][2];

        try {
            node.relativeTransform = [
                [t[0][0], t[0][1], tx],
                [t[1][0], t[1][1], ty],
            ];
        } catch (e) {
            console.warn("Failed to set relativeTransform", e);
        }
    }
}

export class search_bar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });

        const root = figma.createFrame();
        root.name = "search_bar";
        root.layoutMode = "HORIZONTAL";
        root.primaryAxisSizingMode = "FIXED";
        root.counterAxisSizingMode = "AUTO";
        root.primaryAxisAlignItems = "MIN";
        root.counterAxisAlignItems = "CENTER";
        root.itemSpacing = 16;
        root.paddingTop = 16;
        root.paddingBottom = 16;
        root.fills = [];
        root.resize(1077, 72);

        // --- Search Input Area ---
        const searchInputGroup = figma.createFrame();
        searchInputGroup.name = "Search Input Group";
        searchInputGroup.layoutMode = "HORIZONTAL";
        searchInputGroup.primaryAxisSizingMode = "FIXED";
        searchInputGroup.counterAxisSizingMode = "AUTO";
        searchInputGroup.primaryAxisAlignItems = "MIN";
        searchInputGroup.counterAxisAlignItems = "CENTER";
        searchInputGroup.itemSpacing = 12;
        searchInputGroup.paddingTop = 8;
        searchInputGroup.paddingRight = 12;
        searchInputGroup.paddingBottom = 8;
        searchInputGroup.paddingLeft = 12;
        searchInputGroup.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        searchInputGroup.strokes = [{ type: "SOLID", color: { r: 0.7, g: 0.75, b: 0.77 } }];
        searchInputGroup.cornerRadius = 4;
        searchInputGroup.resize(586, 40);
        searchInputGroup.layoutGrow = 1;

        const placeholder = figma.createText();
        placeholder.characters = "Poner algo aquí para la busqueda";
        placeholder.fontSize = 14;
        placeholder.fills = [{ type: "SOLID", color: { r: 0.35, g: 0.44, b: 0.48 } }];
        placeholder.layoutGrow = 1;

        const searchIcon = figma.createNodeFromSvg(SVG_search_icon);
        searchIcon.name = "Icon";

        searchInputGroup.appendChild(placeholder);
        searchInputGroup.appendChild(searchIcon);
        root.appendChild(searchInputGroup);

        // --- Chips Area ---
        const chipsContainer = figma.createFrame();
        chipsContainer.name = "Frame 1728";
        chipsContainer.layoutMode = "HORIZONTAL";
        chipsContainer.primaryAxisSizingMode = "AUTO";
        chipsContainer.counterAxisSizingMode = "AUTO";
        chipsContainer.primaryAxisAlignItems = "MIN";
        chipsContainer.counterAxisAlignItems = "CENTER";
        chipsContainer.itemSpacing = 16;
        chipsContainer.paddingLeft = 16;
        chipsContainer.fills = [];

        const chipExpand = new chip_expand_Alex_CookBook();
        const chipLabels = ["Newer first", "PDF", "Author", "Range date"];
        for (const label of chipLabels) {
            const chipNode = await chipExpand.create({ x: 0, y: 0 });
            const textNode = (chipNode as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
            if (textNode) {
                await figma.loadFontAsync(textNode.fontName as FontName);
                textNode.characters = label;
            }
            chipsContainer.appendChild(chipNode);
        }
        root.appendChild(chipsContainer);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

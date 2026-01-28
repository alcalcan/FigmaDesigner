
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
// Assets
// External: IMG_uefa_cards_autocaptured_img_1_png
// External: IMG_uefa_cards_autocaptured_img_2_png
// External: IMG_uefa_cards_autocaptured_img_3_png
// External: IMG_uefa_cards_autocaptured_img_4_png
// External: SVG_uefa_cards_autocaptured_assets_icon_Play_Icon_1036_2210_svg_54x54
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_1_1036_2221_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_2_1036_2222_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_3_1036_2223_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_4_1036_2224_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_5_1036_2225_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_1_1036_2238_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_2_1036_2239_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_3_1036_2240_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_4_1036_2241_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_5_1036_2242_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Play_Icon_1036_2245_svg_54x54
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_1_1036_2256_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_2_1036_2257_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_3_1036_2258_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_4_1036_2259_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_5_1036_2260_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_1_1036_2273_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_2_1036_2274_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_3_1036_2275_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_4_1036_2276_svg_12x12
// External: SVG_uefa_cards_autocaptured_assets_icon_Star_5_1036_2277_svg_12x12

// --- Constants & Defaults ---
const COLORS = {
    WHITE: { r: 1, g: 1, b: 1 },
    BLACK: { r: 0, g: 0, b: 0 }
};

const DEFAULT_PROPS = {
    visible: true, opacity: 1, locked: false, blendMode: "PASS_THROUGH",
    isMask: false, maskType: "ALPHA",
    strokes: [], fills: [], effects: [], cornerRadius: 0
};




// --- Helper Functions ---

const createFrame = (name: string, overrides: any = {}, children: any[] = []) => ({
    type: "FRAME" as const,
    name,
    props: { ...DEFAULT_PROPS, ...overrides },
    children: children.filter(c => c !== null), // Filter nulls for optional children
    layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps }
});

const createText = (name: string, text: string, fontSize: number, style: string, color: any, overrides: any = {}) => ({
    type: "TEXT" as const,
    name,
    props: {
        ...DEFAULT_PROPS,
        strokeAlign: "OUTSIDE",
        characters: text,
        fontSize,
        font: { family: "Open Sans", style },
        fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color }],
        textAlignHorizontal: "LEFT", textAlignVertical: "TOP", textAutoResize: "WIDTH_AND_HEIGHT",
        paragraphSpacing: 0, paragraphIndent: 0,
        ...overrides
    },
    layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps }
});

const createVector = (name: string, svgContent: string, overrides: any = {}) => {
    if (!svgContent) return null; // Handle missing data (optional node)
    return {
        type: "VECTOR" as const,
        shouldFlatten: true,
        name,
        props: { ...DEFAULT_PROPS, ...overrides },
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps },
        svgContent
    };
};


export class uefa_cards_autocaptured extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Empty", {}, []);
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        
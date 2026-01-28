
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
// Assets
// External: SVG_sidebar_assets_icon_Vector__Stroke__1077_290_svg_22_000059127807617x21_020004272460938
// External: SVG_sidebar_assets_icon_Rectangle_77_Copy_7_1077_296_svg_42x22
// External: SVG_sidebar_assets_icon_Oval_1_Copy_13_1077_300_svg_18x18
// External: SVG_sidebar_assets_icon_Shape_1077_304_svg_10x10
// External: SVG_sidebar_assets_icon_Union_1077_328_svg_8x8
// External: SVG_sidebar_assets_icon_Vector_1077_336_svg_7x1
// External: SVG_sidebar_assets_icon_Checkmark_1077_370_svg_8x7
// External: SVG_sidebar_assets_icon_Union_1077_399_svg_8x8

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


export class sidebar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Empty", {}, []);
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        
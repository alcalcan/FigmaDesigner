
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
// Assets
import SVG_checkbox_SubSection_assets_icon_Vector_1077_648_svg_12x7_400000095367432 from "./assets/checkbox_SubSection_assets_icon_Vector_1077_648_svg_12x7_400000095367432.svg";

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

const findShape = (n: any): any => {
    if (n.name === 'Checkbox' && n.children) {
        const shape = n.children.find((c: any) => c.name === 'Shape');
        if (shape && shape.children && shape.children.length > 1) return shape;
    }
    if (n.children) {
        for (const c of n.children) {
            const s = findShape(c);
            if (s) return s;
        }
    }
    return null;
};

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


export class checkbox_SubSection extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Empty (Conversion Failed)", {}, []);
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        
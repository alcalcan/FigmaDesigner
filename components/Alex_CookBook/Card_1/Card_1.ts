
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
// Assets
import IMG_Card_1_img_1_png from "./assets/Card_1_img_1_png.png";
import SVG_Card_1_assets_icon_Play_Icon_1077_152_svg_54x54 from "./assets/Card_1_assets_icon_Play_Icon_1077_152_svg_54x54.svg";
import SVG_Card_1_assets_icon_Star_1_1077_166_svg_12x12 from "./assets/Card_1_assets_icon_Star_1_1077_166_svg_12x12.svg";
import SVG_Card_1_assets_icon_Star_2_1077_170_svg_12x12 from "./assets/Card_1_assets_icon_Star_2_1077_170_svg_12x12.svg";
import SVG_Card_1_assets_icon_Star_3_1077_174_svg_12x12 from "./assets/Card_1_assets_icon_Star_3_1077_174_svg_12x12.svg";
import SVG_Card_1_assets_icon_Star_4_1077_178_svg_12x12 from "./assets/Card_1_assets_icon_Star_4_1077_178_svg_12x12.svg";
import SVG_Card_1_assets_icon_Star_5_1077_182_svg_12x12 from "./assets/Card_1_assets_icon_Star_5_1077_182_svg_12x12.svg";

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

const LIST_0_DATA = [
  {
    "text_yg18k": "Refereeing in Women’s Football: Motivation.",
    "fillColor": {
      "r": 0.10000000149011612,
      "g": 0.1899999976158142,
      "b": 0.23999999463558197
    },
    "isSelected": true
  },
  {
    "text_yg18k": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.",
    "fillColor": {
      "r": 0.10000000149011612,
      "g": 0.1899999976158142,
      "b": 0.23999999463558197
    },
    "isSelected": true
  }
];
const LIST_1_DATA = [
  {
    "text_yg18k": "by ",
    "fillColor": {
      "r": 0.38999998569488525,
      "g": 0.47999998927116394,
      "b": 0.5199999809265137
    },
    "isSelected": true
  },
  {
    "text_yg18k": "Alex Calcan",
    "fillColor": {
      "r": 0.38999998569488525,
      "g": 0.47999998927116394,
      "b": 0.5199999809265137
    },
    "isSelected": true
  }
];
const LIST_2_DATA = [
  {
    "var_svgContentVar_8p3rz": "SVG_Card_1_assets_icon_Star_1_1077_166_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_Card_1_assets_icon_Star_2_1077_170_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_Card_1_assets_icon_Star_3_1077_174_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_Card_1_assets_icon_Star_4_1077_178_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_Card_1_assets_icon_Star_5_1077_182_svg_12x12",
    "isSelected": false
  }
];



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


export class Card_1 extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Card 1", {layoutProps:{width:343,height:441},layoutMode:"VERTICAL"}, [
createFrame("Image Container", {layoutProps:{layoutPositioning:"AUTO",width:343,height:229,relativeTransform:[[1,0,0],[0,1,0]]}}, [
createVector("Play Icon", SVG_Card_1_assets_icon_Play_Icon_1077_152_svg_54x54, {layoutProps:{layoutPositioning:"AUTO",width:54,height:54,relativeTransform:[[1,0,144],[0,1,87]]}})
]),
createFrame("Content Padding", {layoutProps:{layoutPositioning:"AUTO",width:343,height:212,relativeTransform:[[1,0,0],[0,1,229]]},layoutMode:"VERTICAL",itemSpacing:16,paddingTop:16,paddingRight:16,paddingBottom:16,paddingLeft:16}, [
...LIST_0_DATA.map(item => {
            const node = createText("Refereeing in Women’s Football: Motivation.", item.text_yg18k, 20, "SemiBold", COLORS.BLACK, {layoutProps:{layoutPositioning:"AUTO",width:311,height:54,relativeTransform:[[1,0,16],[0,1,16]]}});

            // Checkbox Logic: Bind checkmark visibility to selection
            const shape = findShape(renderNode);
            if (shape) {
                // The second child (index 1) is the inner checkmark/hole
                if (shape.children && shape.children.length > 1) {
                     shape.children[1].props = shape.children[1].props || {};
                     // Force checkmark visibility when selected
                     shape.children[1].props.visible = !!item.isSelected;

                     // Visual State Toggling
                     shape.props = shape.props || {};
                     if (item.isSelected) {
                         // Checked: Ensure Fill, No Stroke
                         shape.props.strokes = [];
                     } else {
                         // Unchecked: No Fill, Bold Dark Stroke
                         shape.props.fills = [];
                         shape.props.strokes = [{
                             "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                             "color": { "r": 0.1, "g": 0.2, "b": 0.24 } // Approx dark color
                         }];
                         shape.props.strokeWeight = 2;
                         shape.props.strokeAlign = "INSIDE";
                     }
                }
            }

            if (item.isSelected) {
                renderNode.props = renderNode.props || {};
                renderNode.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                }];
            } else {
                if (renderNode.props) renderNode.props.fills = [];
            }

            return node
        }),
createFrame("Footer", {layoutProps:{layoutPositioning:"AUTO",width:311,height:37,relativeTransform:[[1,0,16],[0,1,159]]},layoutMode:"VERTICAL",itemSpacing:4}, [
createFrame("Author Info", {layoutProps:{layoutPositioning:"AUTO",width:95,height:19,relativeTransform:[[1,0,0],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:4}, [
...LIST_1_DATA.map(item => {
            const node = createText("by", item.text_yg18k, 12, "Light", COLORS.BLACK, {layoutProps:{layoutPositioning:"AUTO",width:13,height:16,relativeTransform:[[1,0,0],[0,1,0]]}});

            // Checkbox Logic: Bind checkmark visibility to selection
            const shape = findShape(renderNode);
            if (shape) {
                // The second child (index 1) is the inner checkmark/hole
                if (shape.children && shape.children.length > 1) {
                     shape.children[1].props = shape.children[1].props || {};
                     // Force checkmark visibility when selected
                     shape.children[1].props.visible = !!item.isSelected;

                     // Visual State Toggling
                     shape.props = shape.props || {};
                     if (item.isSelected) {
                         // Checked: Ensure Fill, No Stroke
                         shape.props.strokes = [];
                     } else {
                         // Unchecked: No Fill, Bold Dark Stroke
                         shape.props.fills = [];
                         shape.props.strokes = [{
                             "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                             "color": { "r": 0.1, "g": 0.2, "b": 0.24 } // Approx dark color
                         }];
                         shape.props.strokeWeight = 2;
                         shape.props.strokeAlign = "INSIDE";
                     }
                }
            }

            if (item.isSelected) {
                renderNode.props = renderNode.props || {};
                renderNode.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                }];
            } else {
                if (renderNode.props) renderNode.props.fills = [];
            }

            return node
        })
]),
createFrame("Rating Block", {layoutProps:{layoutPositioning:"AUTO",width:119,height:14,relativeTransform:[[1,0,0],[0,1,23]]},layoutMode:"HORIZONTAL",itemSpacing:6}, [
createText("Relevance", "Relevance", 10, "SemiBold", COLORS.BLACK, {layoutProps:{layoutPositioning:"AUTO",width:49,height:14,relativeTransform:[[1,0,0],[0,1,0]]}}),
createFrame("Rating Stars", {layoutProps:{layoutPositioning:"AUTO",width:64,height:12,relativeTransform:[[1,0,55],[0,1,1]]},layoutMode:"HORIZONTAL",itemSpacing:1}, [
...LIST_2_DATA.map(item => {
            const node = createVector("Star 1", item.var_svgContentVar_8p3rz, {layoutProps:{layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,0],[0,1,0]]}});

            // Checkbox Logic: Bind checkmark visibility to selection
            const shape = findShape(renderNode);
            if (shape) {
                // The second child (index 1) is the inner checkmark/hole
                if (shape.children && shape.children.length > 1) {
                     shape.children[1].props = shape.children[1].props || {};
                     // Force checkmark visibility when selected
                     shape.children[1].props.visible = !!item.isSelected;

                     // Visual State Toggling
                     shape.props = shape.props || {};
                     if (item.isSelected) {
                         // Checked: Ensure Fill, No Stroke
                         shape.props.strokes = [];
                     } else {
                         // Unchecked: No Fill, Bold Dark Stroke
                         shape.props.fills = [];
                         shape.props.strokes = [{
                             "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                             "color": { "r": 0.1, "g": 0.2, "b": 0.24 } // Approx dark color
                         }];
                         shape.props.strokeWeight = 2;
                         shape.props.strokeAlign = "INSIDE";
                     }
                }
            }

            if (item.isSelected) {
                renderNode.props = renderNode.props || {};
                renderNode.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                }];
            } else {
                if (renderNode.props) renderNode.props.fills = [];
            }

            return node
        })
])
])
])
])
]);
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        
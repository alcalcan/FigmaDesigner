
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
// Assets


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
    "text_b79tb": "`Subjects`",
    "isSelected": false
  },
  {
    "text_3uwp1": "`2`",
    "isSelected": false
  }
];
const LIST_1_DATA = [
  {
    "text_uwfcz": "`Anti-Doping, Medical and Health`",
    "text_pzjhs": "`Communication, PR and Media`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_vwujt": "`Event and Volunteer Management`",
    "text_uh0ju": "`Football and Social Responsibility`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_4nnkv": "`Football Development`",
    "text_onird": "`Governance, Organisation of Football and Sport`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_yd0av": "`Innovation`",
    "text_02ypl": "`Leadership`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_0wget": "`Marketing Sponsorship`",
    "text_ghdw9": "`Legal and Integrity`",
    "isSelected": false,
    "isCheckboxActive": false
  }
];
const LIST_2_DATA = [
  {
    "text_5gobc": "`Anti-Doping, Medical and Health`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_uxsrs": "`Communication, PR and Media`",
    "isSelected": false,
    "isCheckboxActive": false
  }
];
const LIST_3_DATA = [
  {
    "text_shp34": "`Event and Volunteer Management`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_aqrz1": "`Football and Social Responsibility`",
    "isSelected": false,
    "isCheckboxActive": false
  }
];
const LIST_4_DATA = [
  {
    "text_cjxbd": "`Football Development`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_jp0m3": "`Governance, Organisation of Football and Sport`",
    "isSelected": false,
    "isCheckboxActive": false
  }
];
const LIST_5_DATA = [
  {
    "text_sijrc": "`Innovation`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_opufa": "`Leadership`",
    "isSelected": false,
    "isCheckboxActive": false
  }
];
const LIST_6_DATA = [
  {
    "text_ejdf8": "`Marketing Sponsorship`",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "text_4qghc": "`Legal and Integrity`",
    "isSelected": false,
    "isCheckboxActive": false
  }
];



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


export class uefa_cards_4x_procedural_repro extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("uefa_cards_4x_procedural_repro", {layoutProps:{width:1440,height:176},layoutMode:"VERTICAL",itemSpacing:24,paddingTop:24,paddingRight:24,paddingBottom:24,paddingLeft:24}, [
createFrame("Header", {layoutProps:{width:1392,height:40,relativeTransform:[[1,0,24],[0,1,24]],layoutPositioning:"AUTO"},layoutMode:"HORIZONTAL",itemSpacing:24}, [
createText("Subject", "`Subject`", 20, "Regular", COLORS.BLACK, {layoutProps:{width:1196,height:25,relativeTransform:[[1,0,0],[0,1,7.5]],layoutPositioning:"AUTO"}}),
createFrame("Frame 1695", {layoutProps:{width:108,height:29,relativeTransform:[[1,0,1220],[0,1,5.5]],layoutPositioning:"AUTO"},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:4,paddingRight:16,paddingBottom:4,paddingLeft:16}, LIST_0_DATA.map(item => {
            const node = createText("Filter name", item.text_y4stp, 14, "Regular", COLORS.BLACK, {layoutProps:{width:58,height:18,relativeTransform:[[1,0,16],[0,1,5.5]],layoutPositioning:"AUTO"}});

            // Checkbox Logic: Bind checkmark visibility to selection
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

            const shape = findShape(node);
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
                node.props = node.props || {};
                node.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                }];
            } else {
                if (node.props) node.props.fills = [];
            }

            return node;
        })),
createFrame("Frame 1696", {layoutProps:{width:40,height:40,relativeTransform:[[1,0,1352],[0,1,0]],layoutPositioning:"AUTO"},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8}, [
createFrame("Navigation / chevron-up", {layoutProps:{width:24,height:24,relativeTransform:[[1,-1.224648970167536e-16,8],[1.224648970167536e-16,1,8]],layoutPositioning:"AUTO"}}, [
createFrame("Vector", {layoutProps:{width:12,height:7.400000095367432,relativeTransform:[[1,1.224648970167536e-16,6],[-1.224648970167536e-16,1,7.9749755859375]],layoutPositioning:"AUTO"}}, [])
])
])
]),
createFrame("Frame 1928", {layoutProps:{width:1392,height:64,relativeTransform:[[1,0,24],[0,1,88]],layoutPositioning:"AUTO"},layoutMode:"HORIZONTAL",itemSpacing:32}, LIST_1_DATA.map(item => {
            const node = createFrame("Frame 1936", {layoutProps:{width:265,height:64,relativeTransform:[[1,0,0],[0,1,0]],layoutPositioning:"AUTO"},layoutMode:"VERTICAL",itemSpacing:16}, [
createFrame("Frame 1926", {layoutProps:{width:265,height:24,relativeTransform:[[1,0,0],[0,1,0]],layoutPositioning:"AUTO"},layoutMode:"HORIZONTAL",itemSpacing:4}, [
createFrame("Checkbox", {layoutProps:{width:20,height:20,relativeTransform:[[1,0,0],[0,1,2]],layoutPositioning:"AUTO"}}, [
createFrame("Shape", {layoutProps:{width:15,height:15,relativeTransform:[[1,0,2.5],[0,1,2.5]],layoutPositioning:"AUTO"}}, [])
]),
createText("Filter name", item.text_iy0b6, 16, "Regular", COLORS.BLACK, {layoutProps:{width:241,height:24,relativeTransform:[[1,0,24],[0,1,0]],layoutPositioning:"AUTO"}})
]),
createFrame("Frame 1926", {layoutProps:{width:254,height:24,relativeTransform:[[1,0,0],[0,1,40]],layoutPositioning:"AUTO"},layoutMode:"HORIZONTAL",itemSpacing:4}, [
createFrame("Checkbox", {layoutProps:{width:20,height:20,relativeTransform:[[1,0,0],[0,1,2]],layoutPositioning:"AUTO"}}, [
createFrame("Shape", {layoutProps:{width:15,height:15,relativeTransform:[[1,0,2.5],[0,1,2.5]],layoutPositioning:"AUTO"}}, [])
]),
createText("Filter name", item.text_y1i0u, 16, "Regular", COLORS.BLACK, {layoutProps:{width:230,height:24,relativeTransform:[[1,0,24],[0,1,0]],layoutPositioning:"AUTO"}})
])
]);

            // Checkbox Logic: Bind checkmark visibility to selection
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

            const shape = findShape(node);
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
                node.props = node.props || {};
                node.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                }];
            } else {
                if (node.props) node.props.fills = [];
            }

            return node;
        }))
]);
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        
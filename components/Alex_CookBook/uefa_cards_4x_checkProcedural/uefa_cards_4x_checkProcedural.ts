
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
// Assets
import IMG_uefa_cards_4x_checkProcedural_img_1_png from "./assets/uefa_cards_4x_checkProcedural_img_1_png.png";
import IMG_uefa_cards_4x_checkProcedural_img_2_png from "./assets/uefa_cards_4x_checkProcedural_img_2_png.png";
import IMG_uefa_cards_4x_checkProcedural_img_3_png from "./assets/uefa_cards_4x_checkProcedural_img_3_png.png";
import IMG_uefa_cards_4x_checkProcedural_img_4_png from "./assets/uefa_cards_4x_checkProcedural_img_4_png.png";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Play_Icon_1106_696_svg_54x54 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Play_Icon_1106_696_svg_54x54.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_710_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_710_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_714_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_714_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_718_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_718_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_722_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_722_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_726_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_726_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_742_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_742_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_746_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_746_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_750_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_750_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_754_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_754_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_758_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_758_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Play_Icon_1106_764_svg_54x54 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Play_Icon_1106_764_svg_54x54.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_778_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_778_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_782_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_782_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_786_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_786_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_790_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_790_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_794_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_794_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_810_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_810_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_814_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_814_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_818_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_818_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_822_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_822_svg_12x12.svg";
import SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_826_svg_12x12 from "./assets/uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_826_svg_12x12.svg";

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
    "image_gi9d1": "IMG_uefa_cards_4x_checkProcedural_img_1_png",
    "show_jbago": true,
    "var_svgContentVar_dtdmz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Play_Icon_1106_696_svg_54x54",
    "text_g8aiw": "Refereeing in Women’s Football: Motivation.",
    "text_29ik8": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.",
    "text_svbwa": "Alex Calcan",
    "var_svgContentVar_x49il": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_710_svg_12x12",
    "var_svgContentVar_ooazw": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_714_svg_12x12",
    "var_svgContentVar_g8ch8": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_718_svg_12x12",
    "var_svgContentVar_7sdyj": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_722_svg_12x12",
    "var_svgContentVar_nkk5s": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_726_svg_12x12",
    "isSelected": false
  },
  {
    "image_gi9d1": "IMG_uefa_cards_4x_checkProcedural_img_2_png",
    "text_g8aiw": "Advanced Coaching Techniques 2026",
    "text_29ik8": "Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.",
    "text_svbwa": "Mihai Popescu",
    "var_svgContentVar_x49il": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_742_svg_12x12",
    "var_svgContentVar_ooazw": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_746_svg_12x12",
    "var_svgContentVar_g8ch8": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_750_svg_12x12",
    "var_svgContentVar_7sdyj": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_754_svg_12x12",
    "var_svgContentVar_nkk5s": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_758_svg_12x12",
    "isSelected": false
  },
  {
    "image_gi9d1": "IMG_uefa_cards_4x_checkProcedural_img_3_png",
    "show_jbago": true,
    "var_svgContentVar_dtdmz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Play_Icon_1106_764_svg_54x54",
    "text_g8aiw": "Youth Academy Growth Strategy",
    "text_29ik8": "Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.",
    "text_svbwa": "Elena Ionescu",
    "var_svgContentVar_x49il": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_778_svg_12x12",
    "var_svgContentVar_ooazw": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_782_svg_12x12",
    "var_svgContentVar_g8ch8": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_786_svg_12x12",
    "var_svgContentVar_7sdyj": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_790_svg_12x12",
    "var_svgContentVar_nkk5s": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_794_svg_12x12",
    "isSelected": false
  },
  {
    "image_gi9d1": "IMG_uefa_cards_4x_checkProcedural_img_4_png",
    "text_g8aiw": "Sustainable Stadium Operations",
    "text_29ik8": "Reducing carbon footprints and implementing circular economy principles in modern stadium management.",
    "text_svbwa": "David Moore",
    "var_svgContentVar_x49il": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_810_svg_12x12",
    "var_svgContentVar_ooazw": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_814_svg_12x12",
    "var_svgContentVar_g8ch8": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_818_svg_12x12",
    "var_svgContentVar_7sdyj": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_822_svg_12x12",
    "var_svgContentVar_nkk5s": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_826_svg_12x12",
    "isSelected": false
  }
];
const LIST_1_DATA = [
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
const LIST_2_DATA = [
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
const LIST_3_DATA = [
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_710_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_714_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_718_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_722_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_726_svg_12x12",
    "isSelected": false
  }
];
const LIST_4_DATA = [
  {
    "text_yg18k": "Advanced Coaching Techniques 2026",
    "fillColor": {
      "r": 0.10000000149011612,
      "g": 0.1899999976158142,
      "b": 0.23999999463558197
    },
    "isSelected": true
  },
  {
    "text_yg18k": "Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.",
    "fillColor": {
      "r": 0.10000000149011612,
      "g": 0.1899999976158142,
      "b": 0.23999999463558197
    },
    "isSelected": true
  }
];
const LIST_5_DATA = [
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
    "text_yg18k": "Mihai Popescu",
    "fillColor": {
      "r": 0.38999998569488525,
      "g": 0.47999998927116394,
      "b": 0.5199999809265137
    },
    "isSelected": true
  }
];
const LIST_6_DATA = [
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_742_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_746_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_750_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_754_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_758_svg_12x12",
    "isSelected": false
  }
];
const LIST_7_DATA = [
  {
    "text_yg18k": "Youth Academy Growth Strategy",
    "fillColor": {
      "r": 0.10000000149011612,
      "g": 0.1899999976158142,
      "b": 0.23999999463558197
    },
    "isSelected": true
  },
  {
    "text_yg18k": "Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.",
    "fillColor": {
      "r": 0.10000000149011612,
      "g": 0.1899999976158142,
      "b": 0.23999999463558197
    },
    "isSelected": true
  }
];
const LIST_8_DATA = [
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
    "text_yg18k": "Elena Ionescu",
    "fillColor": {
      "r": 0.38999998569488525,
      "g": 0.47999998927116394,
      "b": 0.5199999809265137
    },
    "isSelected": true
  }
];
const LIST_9_DATA = [
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_778_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_782_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_786_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_790_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_794_svg_12x12",
    "isSelected": false
  }
];
const LIST_10_DATA = [
  {
    "text_yg18k": "Sustainable Stadium Operations",
    "fillColor": {
      "r": 0.10000000149011612,
      "g": 0.1899999976158142,
      "b": 0.23999999463558197
    },
    "isSelected": true
  },
  {
    "text_yg18k": "Reducing carbon footprints and implementing circular economy principles in modern stadium management.",
    "fillColor": {
      "r": 0.10000000149011612,
      "g": 0.1899999976158142,
      "b": 0.23999999463558197
    },
    "isSelected": true
  }
];
const LIST_11_DATA = [
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
    "text_yg18k": "David Moore",
    "fillColor": {
      "r": 0.38999998569488525,
      "g": 0.47999998927116394,
      "b": 0.5199999809265137
    },
    "isSelected": true
  }
];
const LIST_12_DATA = [
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_810_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_814_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_818_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_822_svg_12x12",
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": "SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_826_svg_12x12",
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


export class uefa_cards_4x_checkProcedural extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("uefa_cards_4x_checkProcedural", {layoutProps:{width:1444,height:441},layoutMode:"HORIZONTAL",itemSpacing:24}, [
...LIST_0_DATA.map(item => {
            const node = createFrame("Card 1", {layoutProps:{layoutPositioning:"AUTO",width:343,height:441,relativeTransform:[[1,0,0],[0,1,0]]},layoutMode:"VERTICAL"}, [
createFrame("Image Container", {layoutProps:{layoutPositioning:"AUTO",width:343,height:229,relativeTransform:[[1,0,0],[0,1,0]]}, fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "IMAGE", scaleMode: "FILL", assetRef: item.image_gi9d1 }] }, [
createVector("Play Icon", item.var_svgContentVar_dtdmz, {layoutProps:{layoutPositioning:"AUTO",width:54,height:54,relativeTransform:[[1,0,144],[0,1,87]]}})
]),
createFrame("Content Padding", {layoutProps:{layoutPositioning:"AUTO",width:343,height:212,relativeTransform:[[1,0,0],[0,1,229]]},layoutMode:"VERTICAL",itemSpacing:16,paddingTop:16,paddingRight:16,paddingBottom:16,paddingLeft:16}, [
createText("Refereeing in Women’s Football: Motivation.", item.text_g8aiw, 20, "SemiBold", COLORS.BLACK, {layoutProps:{layoutPositioning:"AUTO",width:311,height:54,relativeTransform:[[1,0,16],[0,1,16]]}}),
createText("The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.", item.text_29ik8, 14, "Regular", COLORS.BLACK, {layoutProps:{layoutPositioning:"AUTO",width:311,height:57,relativeTransform:[[1,0,16],[0,1,86]]}}),
createFrame("Footer", {layoutProps:{layoutPositioning:"AUTO",width:311,height:37,relativeTransform:[[1,0,16],[0,1,159]]},layoutMode:"VERTICAL",itemSpacing:4}, [
createFrame("Author Info", {layoutProps:{layoutPositioning:"AUTO",width:95,height:19,relativeTransform:[[1,0,0],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:4}, [
createText("by", "by ", 12, "Light", COLORS.BLACK, {layoutProps:{layoutPositioning:"AUTO",width:13,height:16,relativeTransform:[[1,0,0],[0,1,0]]}}),
createText("Alex Calcan", item.text_svbwa, 14, "SemiBold", COLORS.BLACK, {layoutProps:{layoutPositioning:"AUTO",width:78,height:19,relativeTransform:[[1,0,17],[0,1,0]]}})
]),
createFrame("Rating Block", {layoutProps:{layoutPositioning:"AUTO",width:119,height:14,relativeTransform:[[1,0,0],[0,1,23]]},layoutMode:"HORIZONTAL",itemSpacing:6}, [
createText("Relevance", "Relevance", 10, "SemiBold", COLORS.BLACK, {layoutProps:{layoutPositioning:"AUTO",width:49,height:14,relativeTransform:[[1,0,0],[0,1,0]]}}),
createFrame("Rating Stars", {layoutProps:{layoutPositioning:"AUTO",width:64,height:12,relativeTransform:[[1,0,55],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:1}, [
createVector("Star 1", item.var_svgContentVar_x49il, {layoutProps:{layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,2.460467385390075e-10],[0,1,0]]}}),
createVector("Star 2", item.var_svgContentVar_ooazw, {layoutProps:{layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,13],[0,1,0]]}}),
createVector("Star 3", item.var_svgContentVar_g8ch8, {layoutProps:{layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,26],[0,1,0]]}}),
createVector("Star 4", item.var_svgContentVar_7sdyj, {layoutProps:{layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,39],[0,1,0]]}}),
createVector("Star 5", item.var_svgContentVar_nkk5s, {layoutProps:{layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,52],[0,1,0]]}})
])
])
])
])
]);

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
]);
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        
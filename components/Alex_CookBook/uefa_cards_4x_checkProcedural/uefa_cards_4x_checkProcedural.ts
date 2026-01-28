
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector } from "../../ComponentHelpers";

// --- Assets ---
import IMG_uefa_cards_4x_checkProcedural_img_1_png from "././assets/uefa_cards_4x_checkProcedural_img_1.png";
import IMG_uefa_cards_4x_checkProcedural_img_2_png from "././assets/uefa_cards_4x_checkProcedural_img_2.png";
import IMG_uefa_cards_4x_checkProcedural_img_3_png from "././assets/uefa_cards_4x_checkProcedural_img_3.png";
import IMG_uefa_cards_4x_checkProcedural_img_4_png from "././assets/uefa_cards_4x_checkProcedural_img_4.png";
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
    BLACK: { r: 0, g: 0, b: 0 },
    TRANSPARENT: { r: 0, g: 0, b: 0, a: 0 }
};

const DEFAULT_PROPS = {
    visible: true, 
    opacity: 1, 
    locked: false, 
    blendMode: "PASS_THROUGH",
    isMask: false, 
    maskType: "ALPHA",
    strokes: [], 
    fills: [], 
    effects: [], 
    cornerRadius: 0
};

const DEFAULT_LAYOUT_PROPS = {
    width: 100,
    height: 100,
    itemSpacing: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    counterAxisSizingMode: "FIXED",
    primaryAxisSizingMode: "FIXED"
};

const LIST_0_DATA = [
  {
    "image_gi9d1": IMG_uefa_cards_4x_checkProcedural_img_1_png,
    "show_jbago": true,
    "var_svgContentVar_dtdmz": SVG_uefa_cards_4x_checkProcedural_assets_icon_Play_Icon_1106_696_svg_54x54,
    "text_g8aiw": "Refereeing in Women’s Football: Motivation.",
    "text_29ik8": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.",
    "text_svbwa": "Alex Calcan",
    "var_svgContentVar_x49il": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_710_svg_12x12,
    "var_svgContentVar_ooazw": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_714_svg_12x12,
    "var_svgContentVar_g8ch8": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_718_svg_12x12,
    "var_svgContentVar_7sdyj": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_722_svg_12x12,
    "var_svgContentVar_nkk5s": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_726_svg_12x12,
    "isSelected": false
  },
  {
    "image_gi9d1": IMG_uefa_cards_4x_checkProcedural_img_2_png,
    "text_g8aiw": "Advanced Coaching Techniques 2026",
    "text_29ik8": "Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.",
    "text_svbwa": "Mihai Popescu",
    "var_svgContentVar_x49il": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_742_svg_12x12,
    "var_svgContentVar_ooazw": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_746_svg_12x12,
    "var_svgContentVar_g8ch8": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_750_svg_12x12,
    "var_svgContentVar_7sdyj": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_754_svg_12x12,
    "var_svgContentVar_nkk5s": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_758_svg_12x12,
    "isSelected": false
  },
  {
    "image_gi9d1": IMG_uefa_cards_4x_checkProcedural_img_3_png,
    "show_jbago": true,
    "var_svgContentVar_dtdmz": SVG_uefa_cards_4x_checkProcedural_assets_icon_Play_Icon_1106_764_svg_54x54,
    "text_g8aiw": "Youth Academy Growth Strategy",
    "text_29ik8": "Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.",
    "text_svbwa": "Elena Ionescu",
    "var_svgContentVar_x49il": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_778_svg_12x12,
    "var_svgContentVar_ooazw": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_782_svg_12x12,
    "var_svgContentVar_g8ch8": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_786_svg_12x12,
    "var_svgContentVar_7sdyj": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_790_svg_12x12,
    "var_svgContentVar_nkk5s": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_794_svg_12x12,
    "isSelected": false
  },
  {
    "image_gi9d1": IMG_uefa_cards_4x_checkProcedural_img_4_png,
    "text_g8aiw": "Sustainable Stadium Operations",
    "text_29ik8": "Reducing carbon footprints and implementing circular economy principles in modern stadium management.",
    "text_svbwa": "David Moore",
    "var_svgContentVar_x49il": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_1_1106_810_svg_12x12,
    "var_svgContentVar_ooazw": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_2_1106_814_svg_12x12,
    "var_svgContentVar_g8ch8": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_3_1106_818_svg_12x12,
    "var_svgContentVar_7sdyj": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_4_1106_822_svg_12x12,
    "var_svgContentVar_nkk5s": SVG_uefa_cards_4x_checkProcedural_assets_icon_Star_5_1106_826_svg_12x12,
    "isSelected": false
  }
];


export class uefa_cards_4x_checkProcedural extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("uefa_cards_4x_checkProcedural", {layoutProps:{width:1444,height:441,parentIsAutoLayout:false},layoutMode:"HORIZONTAL",itemSpacing:24}, [
...LIST_0_DATA.map(item => {
            return createFrame("Card 1", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:343,height:441,relativeTransform:[[1,0,0],[0,1,0]]},layoutMode:"VERTICAL",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],cornerRadius:12}, [
createFrame("Image Container", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:343,height:229,relativeTransform:[[1,0,0],[0,1,0]]}, "fills": [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "IMAGE", scaleMode: "FILL", assetRef: item.image_gi9d1 }] }, [
createVector("Play Icon", item.var_svgContentVar_dtdmz, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:54,height:54,relativeTransform:[[1,0,144],[0,1,87]]}})
]),
createFrame("Content Padding", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:343,height:212,relativeTransform:[[1,0,0],[0,1,229]]},layoutMode:"VERTICAL",itemSpacing:16,paddingTop:16,paddingRight:16,paddingBottom:16,paddingLeft:16}, [
createText("Refereeing in Women’s Football: Motivation.", item.text_g8aiw, 20, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:311,height:54,relativeTransform:[[1,0,16],[0,1,16]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10000000149011612,g:0.1899999976158142,b:0.23999999463558197},boundVariables:{}}],textAutoResize:"NONE",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"SemiBold"}}),
createText("The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.", item.text_29ik8, 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:311,height:57,relativeTransform:[[1,0,16],[0,1,86]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10000000149011612,g:0.1899999976158142,b:0.23999999463558197},boundVariables:{}}],textAutoResize:"NONE",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Footer", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:311,height:37,relativeTransform:[[1,0,16],[0,1,159]]},layoutMode:"VERTICAL",itemSpacing:4}, [
createFrame("Author Info", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:95,height:19,relativeTransform:[[1,0,0],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:4}, [
createText("by", "by ", 12, "Light", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.38999998569488525,g:0.47999998927116394,b:0.5199999809265137},boundVariables:{}}],textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Light"}}),
createText("Alex Calcan", item.text_svbwa, 14, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,17],[0,1,0]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.38999998569488525,g:0.47999998927116394,b:0.5199999809265137},boundVariables:{}}],textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"SemiBold"}})
]),
createFrame("Rating Block", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:119,height:14,relativeTransform:[[1,0,0],[0,1,23]]},layoutMode:"HORIZONTAL",itemSpacing:6}, [
createText("Relevance", "Relevance", 10, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.44999998807907104,g:0.550000011920929,b:0.5799999833106995},boundVariables:{}}],textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Rating Stars", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:64,height:12,relativeTransform:[[1,0,55],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:1}, [
createVector("Star 1", item.var_svgContentVar_x49il, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,2.460467385390075e-10],[0,1,0]]}}),
createVector("Star 2", item.var_svgContentVar_ooazw, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,13],[0,1,0]]}}),
createVector("Star 3", item.var_svgContentVar_g8ch8, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,26],[0,1,0]]}}),
createVector("Star 4", item.var_svgContentVar_7sdyj, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,39],[0,1,0]]}}),
createVector("Star 5", item.var_svgContentVar_nkk5s, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,52],[0,1,0]]}})
])
])
])
])
]) as unknown as NodeDefinition;
        })
]);
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        
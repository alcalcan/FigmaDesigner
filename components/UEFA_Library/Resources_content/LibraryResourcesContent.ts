
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";
import { toggle } from "../../Alex_CookBook/toggle/toggle";
import { Lucide_search } from "../../index";

// --- Assets ---
import IMG_Proposal_notification_img_7_png from "./assets/Proposal_notification_img_7.png";
import IMG_Proposal_notification_img_8_png from "./assets/Proposal_notification_img_8.png";
import IMG_Proposal_notification_img_9_png from "./assets/Proposal_notification_img_9.png";
import SVG_Proposal_notification_BOLD_CHEVRON_FIX_10x6 from "./assets/Proposal_notification_BOLD_CHEVRON_FIX_10x6.svg";
import SVG_Proposal_notification_Synth_Path_25 from "./assets/Proposal_notification_Synth_Path_25.svg";
import SVG_Proposal_notification_Synth_Path_26 from "./assets/Proposal_notification_Synth_Path_26.svg";
import SVG_Proposal_notification_Synth_Path_27 from "./assets/Proposal_notification_Synth_Path_27.svg";
import SVG_Proposal_notification_Synth_Path_30 from "./assets/Proposal_notification_Synth_Path_30.svg";
import SVG_Proposal_notification_Synth_Path_31 from "./assets/Proposal_notification_Synth_Path_31.svg";
import SVG_Proposal_notification_Synth_Path_32 from "./assets/Proposal_notification_Synth_Path_32.svg";
import SVG_Proposal_notification_Synth_Path_33 from "./assets/Proposal_notification_Synth_Path_33.svg";
import SVG_Proposal_notification_Synth_Path_34 from "./assets/Proposal_notification_Synth_Path_34.svg";
import SVG_Proposal_notification_Synth_Path_35 from "./assets/Proposal_notification_Synth_Path_35.svg";
import SVG_Proposal_notification_Synth_Path_36 from "./assets/Proposal_notification_Synth_Path_36.svg";
import SVG_Proposal_notification_Synth_Path_37 from "./assets/Proposal_notification_Synth_Path_37.svg";
import SVG_Proposal_notification_Synth_Path_38 from "./assets/Proposal_notification_Synth_Path_38.svg";
import SVG_Proposal_notification_Synth_Path_39 from "./assets/Proposal_notification_Synth_Path_39.svg";
import SVG_Proposal_notification_Synth_Path_40 from "./assets/Proposal_notification_Synth_Path_40.svg";
import SVG_Proposal_notification_Synth_Path_41 from "./assets/Proposal_notification_Synth_Path_41.svg";
import SVG_Proposal_notification_Synth_Path_42 from "./assets/Proposal_notification_Synth_Path_42.svg";
import SVG_Proposal_notification_Synth_Path_43 from "./assets/Proposal_notification_Synth_Path_43.svg";
import SVG_Proposal_notification_Synth_Path_44 from "./assets/Proposal_notification_Synth_Path_44.svg";
import SVG_Proposal_notification_Synth_Path_45 from "./assets/Proposal_notification_Synth_Path_45.svg";
import SVG_Proposal_notification_Synth_Shape_28 from "./assets/Proposal_notification_Synth_Shape_28.svg";
import SVG_Proposal_notification_Synth_Shape_7 from "./assets/Proposal_notification_Synth_Shape_7.svg";
import SVG_Proposal_notification_Synth_Vector_12 from "./assets/Proposal_notification_Synth_Vector_12.svg";
import SVG_Proposal_notification_Synth_Vector_13 from "./assets/Proposal_notification_Synth_Vector_13.svg";
import SVG_Proposal_notification_Synth_Vector_15 from "./assets/Proposal_notification_Synth_Vector_15.svg";
import SVG_Proposal_notification_Synth_Vector_16 from "./assets/Proposal_notification_Synth_Vector_16.svg";
import SVG_Proposal_notification_assets_icon_Oval_1_Copy_13_I3379_17221_7466_30960_svg_orig from "./assets/Proposal_notification_assets_icon_Oval_1_Copy_13_I3379_17221_7466_30960_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Rectangle_77_Copy_7_I3379_17221_7466_30959_svg_orig from "./assets/Proposal_notification_assets_icon_Rectangle_77_Copy_7_I3379_17221_7466_30959_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17214_7515_31651_7461_30655_70_441_svg_10x6_override from "./assets/Proposal_notification_assets_icon_Shape_I3379_17214_7515_31651_7461_30655_70_441_svg_10x6_override.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_10_70_471_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17215_214_10_70_471_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_4_70_475_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17215_214_4_70_475_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17221_7466_30966_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17221_7466_30966_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Union_I3379_17230_5250_18144_svg_orig from "./assets/Proposal_notification_assets_icon_Union_I3379_17230_5250_18144_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Union_I3379_17261_5250_18144_svg_orig from "./assets/Proposal_notification_assets_icon_Union_I3379_17261_5250_18144_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17212_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3379_17212_3016_7769_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17219_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3379_17219_3016_7769_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3383_3719_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3383_3719_3016_7769_svg_orig.svg";

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
    "image_m8s0n": IMG_Proposal_notification_img_9_png,
    "imageHash": "2f6ef3fb06496786e98ae08168b69e05ba58f0b7",
    "var_svgContentVar_oyoa8": SVG_Proposal_notification_Synth_Vector_12,
    "var_svgContentVar_xemsx": SVG_Proposal_notification_Synth_Vector_13,
    "var_svgContentVar_9i55h": SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig,
    "isSelected": false
  },
  {
    "image_m8s0n": IMG_Proposal_notification_img_7_png,
    "imageHash": "53600b9b753bcf27aa29e70bd45039034c373525",
    "var_svgContentVar_oyoa8": SVG_Proposal_notification_Synth_Vector_15,
    "var_svgContentVar_xemsx": SVG_Proposal_notification_Synth_Vector_16,
    "var_svgContentVar_9i55h": SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17212_3016_7769_svg_orig,
    "isSelected": false
  }
];
const LIST_1_DATA = [
  {
    "text_drg03": "Newer first",
    "fillColor": {
      "r": 0.9450980424880981,
      "g": 0.9529411792755127,
      "b": 0.9725490212440491
    },
    "isSelected": true
  },
  {
    "text_drg03": "PDF",
    "fillColor": {
      "r": 0.7019608020782471,
      "g": 0.7529411911964417,
      "b": 0.772549033164978
    },
    "isSelected": true
  },
  {
    "text_drg03": "Author",
    "fillColor": {
      "r": 0.9450980424880981,
      "g": 0.9529411792755127,
      "b": 0.9725490212440491
    },
    "isSelected": true
  },
  {
    "text_drg03": "Range date",
    "fillColor": {
      "r": 0.9450980424880981,
      "g": 0.9529411792755127,
      "b": 0.9725490212440491
    },
    "isSelected": true
  }
];
const LIST_4_DATA = [
  {
    "var_svgContentVar_8p3rz": SVG_Proposal_notification_assets_icon_Rectangle_77_Copy_7_I3379_17221_7466_30959_svg_orig,
    "fillColor": {
      "r": 0.6000000238418579,
      "g": 0.6000000238418579,
      "b": 0.6000000238418579
    },
    "isSelected": true
  },
  {
    "var_svgContentVar_8p3rz": SVG_Proposal_notification_assets_icon_Oval_1_Copy_13_I3379_17221_7466_30960_svg_orig,
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": SVG_Proposal_notification_assets_icon_Shape_I3379_17221_7466_30966_svg_orig,
    "isSelected": false
  }
];
const LIST_5_DATA = [
  {
    "var_svgContentVar_8p3rz": SVG_Proposal_notification_Synth_Path_25,
    "fillColor": {
      "r": 0,
      "g": 0,
      "b": 0
    },
    "isSelected": true
  },
  {
    "var_svgContentVar_8p3rz": SVG_Proposal_notification_Synth_Path_26,
    "fillColor": {
      "r": 0,
      "g": 0,
      "b": 0
    },
    "isSelected": true
  }
];
const LIST_6_DATA = [
  {
    "var_svgContentVar_dpef1": SVG_Proposal_notification_Synth_Path_30,
    "var_svgContentVar_59fwc": SVG_Proposal_notification_Synth_Path_31,
    "text_7byk2": "UEFA Academy",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_Proposal_notification_Synth_Path_32,
    "var_svgContentVar_59fwc": SVG_Proposal_notification_Synth_Path_33,
    "text_7byk2": "UEFA Assist",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_Proposal_notification_Synth_Path_34,
    "var_svgContentVar_59fwc": SVG_Proposal_notification_Synth_Path_35,
    "text_7byk2": "UEFA Events",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_Proposal_notification_Synth_Path_36,
    "var_svgContentVar_59fwc": SVG_Proposal_notification_Synth_Path_37,
    "text_7byk2": "UEFA Football Development",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_Proposal_notification_Synth_Path_38,
    "var_svgContentVar_59fwc": SVG_Proposal_notification_Synth_Path_39,
    "text_7byk2": "UEFA Grow",
    "fillColor": {
      "r": 0.9450980424880981,
      "g": 0.9529411792755127,
      "b": 0.9725490212440491
    },
    "isSelected": true,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_Proposal_notification_Synth_Path_40,
    "var_svgContentVar_59fwc": SVG_Proposal_notification_Synth_Path_41,
    "text_7byk2": "UEFA Hatrick",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_Proposal_notification_Synth_Path_42,
    "var_svgContentVar_59fwc": SVG_Proposal_notification_Synth_Path_43,
    "text_7byk2": "UEFA Anti-Doping and Medical",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_Proposal_notification_Synth_Path_44,
    "var_svgContentVar_59fwc": SVG_Proposal_notification_Synth_Path_45,
    "text_7byk2": "UEFA Intelligence Center",
    "isSelected": false,
    "isCheckboxActive": false
  }
];


export class LibraryResourcesContent extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Resources Content Layout", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1680,height:1184,relativeTransform:[[1,0,0],[0,1,394]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:24,paddingRight:120,paddingBottom:16,paddingLeft:120,primaryAxisSizingMode:"FIXED",counterAxisSizingMode:"AUTO",layoutAlign:"STRETCH",clipsContent:false,strokeWeight:1}, [
createFrame("Resources Cards Container", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1077,height:1168,relativeTransform:[[1,0,120],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:24,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",layoutAlign:"INHERIT",layoutSizingHorizontal:"HUG",layoutSizingVertical:"HUG",strokeWeight:1}, [
createFrame("search_bar", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1077,height:72,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,paddingTop:16,paddingBottom:16,counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"SPACE_BETWEEN",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Text Field", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:586,height:40,relativeTransform:[[1,0,0],[0,1,16]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:8,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,strokeWeight:1}, [
createFrame("Compact", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:586,height:40,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:12,paddingTop:8,paddingRight:12,paddingBottom:8,paddingLeft:12,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7019608020782471,g:0.7529411911964417,b:0.772549033164978},boundVariables:{}}],strokeWeight:1,cornerRadius:4}, [
createFrame("Inner", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:562,height:24,relativeTransform:[[1,0,12],[0,1,8]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,strokeWeight:1}, [
createText("Placeh❌older", "Poner algo aquí para la busqueda", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,1.5]],constraints:{horizontal:"CENTER",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.3490196168422699,g:0.43921568989753723,b:0.48235294222831726},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Icon", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,538],[0,1,0]],constraints:{horizontal:"MAX",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],visible:false,strokeWeight:1}, [
createVector("Shape", SVG_Proposal_notification_Synth_Shape_7, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:6,height:10,relativeTransform:[[0,1,7],[-1,0,16]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.07058823853731155,g:0.2235294133424759,b:0.5215686559677124},boundVariables:{}}],strokeAlign:"CENTER"})
])
])
])
]),
createFrame("Frame 1728", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:491,height:32,relativeTransform:[[1,0,586],[0,1,20]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,paddingLeft:16,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"MAX",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
...LIST_1_DATA.map(item => {
            return createFrame("chip_dropdown", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:125,height:32,relativeTransform:[[1,0,16],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,paddingLeft:16,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1,cornerRadius:8, "fills": item.isSelected ? [{ type: "SOLID", color: item.fillColor }] : [{"visible":true,"opacity":1,"blendMode":"NORMAL","type":"SOLID","color":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"boundVariables":{}}] }, [
createText("Newer first", item.text_drg03, 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,16],[0,1,5.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Frame 1667", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:32,height:32,relativeTransform:[[1,0,93],[0,-1,32]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createFrame("Navigation / Chevron / Down", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:16,height:16,relativeTransform:[[1,0,8],[0,-1,24]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Shape", SVG_Proposal_notification_BOLD_CHEVRON_FIX_10x6, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:10,height:6,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeAlign:"CENTER"})
])
])
]) as unknown as NodeDefinition;
        })
])
]),
createFrame("Resource Card", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1077,height:308,relativeTransform:[[1,0,0],[0,1,96]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",counterAxisSizingMode:"AUTO",layoutAlign:"STRETCH",layoutSizingHorizontal:"FIXED",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],effects:[{visible:true,blendMode:"NORMAL",type:"DROP_SHADOW",radius:6,boundVariables:{},color:{r:0,g:0,b:0,a:0.11999999731779099},offset:{x:0,y:2},spread:0,showShadowBehindNode:true}],strokeWeight:1,cornerRadius:4}, [
createRectangle("Rectangle 45", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:464,height:308,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"IMAGE",scaleMode:"FILL",scalingFactor:1,filters:{exposure:0,contrast:0,saturation:0,temperature:0,tint:0,highlights:0,shadows:0},originalImageHash:"d68ed38d85752b656704db1b0ecbfbc3ac629eac",assetRef:IMG_Proposal_notification_img_8_png}],strokeWeight:1,topLeftRadius:4,bottomLeftRadius:4}),
createFrame("AV / play-circle", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"ABSOLUTE",width:64,height:64,relativeTransform:[[1,0,488],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",strokeWeight:1}, [
createVector("Vector", SVG_Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:53.3333,height:53.3333,relativeTransform:[[1,0,5.3333],[0,1,5.3333]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1})
]),
createFrame("Card Content Container", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:613,height:308,relativeTransform:[[1,0,464],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,paddingTop:24,paddingRight:24,paddingBottom:24,paddingLeft:24,primaryAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutGrow:1,layoutSizingHorizontal:"FILL",strokeWeight:1}, [
createFrame("Card Content Stack", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:565,height:161,relativeTransform:[[1,0,24],[0,1,24]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Card Header Content", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:565,height:50,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createText("Text", "Refereeing in Women’s Football: Motivation.", 20, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Logos / UEFA Roundel", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:48,height:48,relativeTransform:[[1,0,517],[0,1,1]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createRectangle("UEFA_Is_POS_4cp", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:48,height:48,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"IMAGE",scaleMode:"CROP",imageTransform:[[1,0,0],[0,1,0]],scalingFactor:0.5,filters:{exposure:0,contrast:0,saturation:0,temperature:0,tint:0,highlights:0,shadows:0},imageHash:"d1a818547948badf457342eb3e3336a71cf59875"}],strokeAlign:"CENTER"})
])
]),
createText("Text", "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.", 16, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:565,height:95,relativeTransform:[[1,0,0],[0,1,66]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}})
]),
createFrame("Frame 1613", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:89,height:32,relativeTransform:[[1,0,24],[0,1,201]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,paddingLeft:16,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.9125000238418579,g:0.8250520825386047,b:0.8669542074203491},boundVariables:{}}],strokeWeight:1,cornerRadius:8}, [
createText("Video", "Video ", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,16],[0,1,5.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Frame 1667", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:32,height:32,relativeTransform:[[1,0,57],[0,-1,32]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createFrame("AV / play", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:16,height:16,relativeTransform:[[1,0,8],[0,-1,24]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Vector", SVG_Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:6.7582,height:8.2399,relativeTransform:[[1,0,5.3333],[0,1,3.88]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1})
])
])
]),
createFrame("Frame 1661", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:565,height:35,relativeTransform:[[1,0,24],[0,1,249]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutGrow:1,strokeWeight:1}, [
createFrame("Frame 1661", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:525,height:24,relativeTransform:[[1,0,0],[0,1,5.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,primaryAxisSizingMode:"AUTO",layoutAlign:"INHERIT",layoutGrow:1,strokeWeight:1}, [
createText("by Author name", "by Author name", 12, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.38823530077934265,g:0.47843137383461,b:0.5215686559677124},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER"})
]),
createFrame("Actions / Star", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,541],[0,1,5.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Vector (Stroke)", SVG_Proposal_notification_assets_icon_Vector__Stroke__I3383_3719_3016_7769_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:22.0001,height:21.02,relativeTransform:[[1,0,1],[0,1,1]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7019608020782471,g:0.7529411911964417,b:0.772549033164978},boundVariables:{}}],strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
])
])
]),
...LIST_0_DATA.map(item => {
            return createFrame("Resource Card", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1077,height:308,relativeTransform:[[1,0,0],[0,1,428]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",counterAxisSizingMode:"AUTO",layoutAlign:"STRETCH",layoutSizingHorizontal:"FIXED",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],effects:[{visible:true,blendMode:"NORMAL",type:"DROP_SHADOW",radius:6,boundVariables:{},color:{r:0,g:0,b:0,a:0.11999999731779099},offset:{x:0,y:2},spread:0,showShadowBehindNode:true}],strokeWeight:1,cornerRadius:4}, [
createRectangle("Rectangle 45", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:464,height:308,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"IMAGE",scaleMode:"FILL",scalingFactor:1,filters:{exposure:0,contrast:0,saturation:0,temperature:0,tint:0,highlights:0,shadows:0},originalImageHash:item.imageHash,assetRef:item.image_m8s0n}],strokeWeight:1,topLeftRadius:4,bottomLeftRadius:4}),
createFrame("Card Content Container", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:613,height:308,relativeTransform:[[1,0,464],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,paddingTop:24,paddingRight:24,paddingBottom:24,paddingLeft:24,primaryAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutGrow:1,layoutSizingHorizontal:"FILL",strokeWeight:1}, [
createFrame("Card Content Stack", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:565,height:161,relativeTransform:[[1,0,24],[0,1,24]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Card Header Content", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:565,height:50,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createText("Text", "Refereeing in Women’s Football: Motivation.", 20, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Logos / UEFA Roundel", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:48,height:48,relativeTransform:[[1,0,517],[0,1,1]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createRectangle("UEFA_Is_POS_4cp", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:48,height:48,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"IMAGE",scaleMode:"CROP",imageTransform:[[1,0,0],[0,1,0]],scalingFactor:0.5,filters:{exposure:0,contrast:0,saturation:0,temperature:0,tint:0,highlights:0,shadows:0},imageHash:"d1a818547948badf457342eb3e3336a71cf59875"}],strokeAlign:"CENTER"})
])
]),
createText("Text", "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.", 16, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:565,height:95,relativeTransform:[[1,0,0],[0,1,66]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}})
]),
createFrame("Frame 1613", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:78,height:32,relativeTransform:[[1,0,24],[0,1,201]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,paddingLeft:16,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.9125000238418579,g:0.8250520825386047,b:0.8669542074203491},boundVariables:{}}],strokeWeight:1,cornerRadius:8}, [
createText("PDF", "PDF", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,16],[0,1,5.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Frame 1667", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:32,height:32,relativeTransform:[[1,0,46],[0,-1,32]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createFrame("Actions / Download", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:16,height:16,relativeTransform:[[1,0,8],[0,-1,24]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createBooleanOperation("Union", "UNION", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:13.3333,height:13.3333,relativeTransform:[[1,0,1.3333],[0,1,1.3333]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1}, [
createVector("Vector", item.var_svgContentVar_oyoa8, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:13.3333,height:5.336,relativeTransform:[[1,0,1.3333],[0,1,9.3307]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1}),
createVector("Vector", item.var_svgContentVar_xemsx, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:8,height:9.338,relativeTransform:[[1,0,4],[0,-1,10.6713]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1})
])
])
])
]),
createFrame("Frame 1661", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:565,height:35,relativeTransform:[[1,0,24],[0,1,249]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutGrow:1,strokeWeight:1}, [
createFrame("Frame 1661", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:525,height:24,relativeTransform:[[1,0,0],[0,1,5.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,primaryAxisSizingMode:"AUTO",layoutAlign:"INHERIT",layoutGrow:1,strokeWeight:1}, [
createText("by Author name", "by Author name", 12, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.38823530077934265,g:0.47843137383461,b:0.5215686559677124},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER"})
]),
createFrame("Actions / Star", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,541],[0,1,5.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Vector (Stroke)", item.var_svgContentVar_9i55h, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:22.0001,height:21.02,relativeTransform:[[1,0,1],[0,1,1]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7019608020782471,g:0.7529411911964417,b:0.772549033164978},boundVariables:{}}],strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
])
])
]) as unknown as NodeDefinition;
        }),
createFrame("Frame 1922", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1077,height:76,relativeTransform:[[1,0,0],[0,1,1092]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:100,paddingTop:32,counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"SPACE_BETWEEN",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Items per page", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:264,height:44,relativeTransform:[[1,0,0],[0,1,32]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:8,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createText("Text", "Items per page", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,11.5]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Default", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:77,height:44,relativeTransform:[[1,0,106],[0,1,0]],constraints:{horizontal:"CENTER",vertical:"CENTER"}},layoutMode:"HORIZONTAL",itemSpacing:16,paddingTop:10,paddingRight:12,paddingBottom:10,paddingLeft:12,primaryAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7019608020782471,g:0.7529411911964417,b:0.772549033164978},boundVariables:{}}],strokeWeight:1,cornerRadius:4}, [
createFrame("Inner", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:53,height:24,relativeTransform:[[1,0,12],[0,1,10]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:12,primaryAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createText("Placeh❌older", "10", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,1.5]],constraints:{horizontal:"CENTER",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.3490196168422699,g:0.43921568989753723,b:0.48235294222831726},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Icon", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,29],[0,1,0]],constraints:{horizontal:"MAX",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Shape", SVG_Proposal_notification_assets_icon_Shape_I3379_17214_7515_31651_7461_30655_70_441_svg_10x6_override, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:10,height:6,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7019608020782471,g:0.7529411911964417,b:0.772549033164978},boundVariables:{}}],strokeAlign:"CENTER"})
])
])
]),
createText("Text", "1 - 10 of 50", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,191],[0,1,11.5]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"RIGHT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}})
]),
createFrame("Default", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:208,height:24,relativeTransform:[[1,0,869],[0,1,42]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:8,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createText("Link", "First", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.5058823823928833,g:0.5960784554481506,b:0.6392157077789307},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Icon", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,37],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Shape", SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_4_70_475_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:8,height:14,relativeTransform:[[1,0,8],[0,1,5]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7019608020782471,g:0.7529411911964417,b:0.772549033164978},boundVariables:{}}],strokeAlign:"CENTER"})
]),
createText("Text", "Page 1 of 5", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,69],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP"}),
createFrame("Icon", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,149],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Shape", SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_10_70_471_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:8,height:14,relativeTransform:[[-1,0,16],[0,-1,19]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeAlign:"CENTER"})
]),
createText("Link", "Last", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,181],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}})
])
])
]),
createFrame("sidebar", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:339,height:694,relativeTransform:[[1,0,1221],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,paddingRight:16,paddingLeft:16,primaryAxisSizingMode:"AUTO",layoutAlign:"STRETCH",layoutGrow:0,layoutSizingHorizontal:"FILL",layoutSizingVertical:"FILL",clipsContent:false,strokeWeight:1,cornerRadius:14}, [
createFrame("Frame 1714", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:25,relativeTransform:[[1,0,16],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",clipsContent:false,strokeWeight:1}, [
createFrame("Frame 1919", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:249,height:25,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,clipsContent:false,strokeWeight:1}, [
createFrame("Actions / Star", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,0],[0,1,0.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Vector (Stroke)", SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17219_3016_7769_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:22.0001,height:21.02,relativeTransform:[[1,0,1],[0,1,1]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
]),
createText("Favourites", "Favourites", 20, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,28],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}})
]),
{
  type: "COMPONENT",
  name: "Toggle",
  component: toggle,
  props: {
    isOn: true,
    trackOnColor: { r: 0, g: 0.6352941176, b: 0.5882352941 },
    trackOffColor: { r: 0.6, g: 0.6, b: 0.6 }
  },
  layoutProps: {
    parentIsAutoLayout: true,
    layoutPositioning: "AUTO",
    width: 42,
    height: 22,
    relativeTransform: [[1,0,265],[0,1,1.5]],
    constraints: { horizontal: "MIN", vertical: "MIN" }
  }
} as unknown as NodeDefinition
]),
createLine("Line 62", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:0,relativeTransform:[[1,0,16],[0,1,41]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeWeight:1,strokeAlign:"CENTER"}),
createFrame("Frame 1713", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:40,relativeTransform:[[1,0,16],[0,1,57]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",clipsContent:false,strokeWeight:1}, [
createText("Filters", "Filters", 20, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,7.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Frame 1695", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:40,height:40,relativeTransform:[[1,0,267],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.9450980424880981,g:0.9529411792755127,b:0.9725490212440491},boundVariables:{}}],strokeWeight:1,cornerRadius:100}, [
{type:"COMPONENT",name:"Search Icon",component:Lucide_search,props:{width:24,height:24,strokeWeight:2,color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772}},layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,8],[0,1,8]],constraints:{horizontal:"MIN",vertical:"MIN"}}} as unknown as NodeDefinition
]),
]),
createFrame("Text Field", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:69,relativeTransform:[[1,0,16],[0,1,113]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:8,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",clipsContent:false,strokeWeight:1}, [
createFrame("Compact", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:40,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:12,paddingTop:8,paddingRight:12,paddingBottom:8,paddingLeft:12,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",clipsContent:false,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7019608020782471,g:0.7529411911964417,b:0.772549033164978},boundVariables:{}}],strokeWeight:1,cornerRadius:4}, [
createFrame("Inner", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:283,height:24,relativeTransform:[[1,0,12],[0,1,8]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,layoutSizingHorizontal:"FILL",clipsContent:false,strokeWeight:1}, [
createText("Placeh❌older", "Grow", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,1.5]],constraints:{horizontal:"CENTER",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.3490196168422699,g:0.43921568989753723,b:0.48235294222831726},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Icon", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,248],[0,1,0]],constraints:{horizontal:"MAX",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],visible:false,strokeWeight:1}, [
createVector("Shape", SVG_Proposal_notification_Synth_Shape_28, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:6,height:10,relativeTransform:[[0,1,7],[-1,0,16]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.07058823853731155,g:0.2235294133424759,b:0.5215686559677124},boundVariables:{}}],strokeAlign:"CENTER"})
])
])
]),
createText("Helper", "1 result", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,48]],constraints:{horizontal:"STRETCH",vertical:"MAX"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.4000000059604645,g:0.4000000059604645,b:0.4000000059604645},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}})
]),
createFrame("Frame 1712", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:32,relativeTransform:[[1,0,16],[0,1,198]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0}, [
createText("Text", "SUBJECT", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,4]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Actions / Add / Small", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,295],[0,1,10]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Union", SVG_Proposal_notification_assets_icon_Union_I3379_17230_5250_18144_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:8,height:8,relativeTransform:[[1,0,2],[0,1,2]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
]),
createFrame("Initiative Filters", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:384,relativeTransform:[[1,0,16],[0,1,246]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:12,primaryAxisSizingMode:"AUTO",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",strokeWeight:1,cornerRadius:8}, [
createFrame("Initiative Header Row", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:32,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0}, [
createText("Filter 6", "UEFA INITIATIVE", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,4]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Actions / Minus / Small", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,295],[0,1,10]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createLine("Vector", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:7,height:0,relativeTransform:[[1,0,2.5],[0,1,6]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
]),
...LIST_6_DATA.map(item => {
            return createFrame("Initiative Option Row", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:32,relativeTransform:[[1,0,0],[0,1,44]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,paddingLeft:8,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0, "fills": item.isSelected ? [{ type: "SOLID", color: item.fillColor }] : [] }, [
createFrame("Checkbox", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:20,height:20,relativeTransform:[[1,0,8],[0,1,6]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createRectangle("Checkbox Outline", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:15,height:15,relativeTransform:[[1,0,2.5],[0,1,2.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1})
]),
createText("Filter name", item.text_7byk2, 16, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,32],[0,1,4]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}})
]) as unknown as NodeDefinition;
        })
]),
createFrame("Frame 1649", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:32,relativeTransform:[[1,0,16],[0,1,646]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0}, [
createText("Text", "ORGANISATION", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,4]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Actions / Add / Small", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,295],[0,1,10]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Union", SVG_Proposal_notification_assets_icon_Union_I3379_17261_5250_18144_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:8,height:8,relativeTransform:[[1,0,2],[0,1,2]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
]),
createFrame("Frame 1656", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:0,relativeTransform:[[1,0,16],[0,1,694]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8,counterAxisSizingMode:"AUTO",layoutAlign:"STRETCH",strokeWeight:1}, [

])
])
]);
        
        const root = await this.renderDefinition(structure);
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        return root; 
    }
}
        

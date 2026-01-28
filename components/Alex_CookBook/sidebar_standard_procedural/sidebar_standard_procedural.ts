
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createBooleanOperation } from "../../ComponentHelpers";

// --- Assets ---
import SVG_sidebar_standard_procedural_assets_icon_Vector__Stroke__1124_731_svg_22_000059127807617x21_020004272460938 from "./assets/sidebar_standard_procedural_assets_icon_Vector__Stroke__1124_731_svg_22_000059127807617x21_020004272460938.svg";
import SVG_sidebar_standard_procedural_assets_icon_Rectangle_77_Copy_7_1124_737_svg_42x22 from "./assets/sidebar_standard_procedural_assets_icon_Rectangle_77_Copy_7_1124_737_svg_42x22.svg";
import SVG_sidebar_standard_procedural_assets_icon_Oval_1_Copy_13_1124_741_svg_18x18 from "./assets/sidebar_standard_procedural_assets_icon_Oval_1_Copy_13_1124_741_svg_18x18.svg";
import SVG_sidebar_standard_procedural_assets_icon_Shape_1124_745_svg_10x10 from "./assets/sidebar_standard_procedural_assets_icon_Shape_1124_745_svg_10x10.svg";
import SVG_sidebar_standard_procedural_Synth_Path_4 from "./assets/sidebar_standard_procedural_Synth_Path_4.svg";
import SVG_sidebar_standard_procedural_Synth_Path_5 from "./assets/sidebar_standard_procedural_Synth_Path_5.svg";
import SVG_sidebar_standard_procedural_Synth_Path_6 from "./assets/sidebar_standard_procedural_Synth_Path_6.svg";
import SVG_sidebar_standard_procedural_Synth_Shape_7 from "./assets/sidebar_standard_procedural_Synth_Shape_7.svg";
import SVG_sidebar_standard_procedural_assets_icon_Union_1124_781_svg_8x8 from "./assets/sidebar_standard_procedural_assets_icon_Union_1124_781_svg_8x8.svg";
import SVG_sidebar_standard_procedural_assets_icon_Vector_1124_789_svg_7x0 from "./assets/sidebar_standard_procedural_assets_icon_Vector_1124_789_svg_7x0.svg";
import SVG_sidebar_standard_procedural_Synth_Path_10 from "./assets/sidebar_standard_procedural_Synth_Path_10.svg";
import SVG_sidebar_standard_procedural_Synth_Path_11 from "./assets/sidebar_standard_procedural_Synth_Path_11.svg";
import SVG_sidebar_standard_procedural_Synth_Path_12 from "./assets/sidebar_standard_procedural_Synth_Path_12.svg";
import SVG_sidebar_standard_procedural_Synth_Path_13 from "./assets/sidebar_standard_procedural_Synth_Path_13.svg";
import SVG_sidebar_standard_procedural_Synth_Path_14 from "./assets/sidebar_standard_procedural_Synth_Path_14.svg";
import SVG_sidebar_standard_procedural_Synth_Path_15 from "./assets/sidebar_standard_procedural_Synth_Path_15.svg";
import SVG_sidebar_standard_procedural_Synth_Path_16 from "./assets/sidebar_standard_procedural_Synth_Path_16.svg";
import SVG_sidebar_standard_procedural_Synth_Path_17 from "./assets/sidebar_standard_procedural_Synth_Path_17.svg";
import SVG_sidebar_standard_procedural_Synth_Path_18 from "./assets/sidebar_standard_procedural_Synth_Path_18.svg";
import SVG_sidebar_standard_procedural_Synth_Path_19 from "./assets/sidebar_standard_procedural_Synth_Path_19.svg";
import SVG_sidebar_standard_procedural_Synth_Path_20 from "./assets/sidebar_standard_procedural_Synth_Path_20.svg";
import SVG_sidebar_standard_procedural_Synth_Path_21 from "./assets/sidebar_standard_procedural_Synth_Path_21.svg";
import SVG_sidebar_standard_procedural_Synth_Path_22 from "./assets/sidebar_standard_procedural_Synth_Path_22.svg";
import SVG_sidebar_standard_procedural_Synth_Path_23 from "./assets/sidebar_standard_procedural_Synth_Path_23.svg";
import SVG_sidebar_standard_procedural_Synth_Path_24 from "./assets/sidebar_standard_procedural_Synth_Path_24.svg";
import SVG_sidebar_standard_procedural_Synth_Path_25 from "./assets/sidebar_standard_procedural_Synth_Path_25.svg";
import SVG_sidebar_standard_procedural_assets_icon_Union_1124_892_svg_8x8 from "./assets/sidebar_standard_procedural_assets_icon_Union_1124_892_svg_8x8.svg";

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
    "var_svgContentVar_8p3rz": SVG_sidebar_standard_procedural_assets_icon_Rectangle_77_Copy_7_1124_737_svg_42x22,
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": SVG_sidebar_standard_procedural_assets_icon_Oval_1_Copy_13_1124_741_svg_18x18,
    "isSelected": false
  },
  {
    "var_svgContentVar_8p3rz": SVG_sidebar_standard_procedural_assets_icon_Shape_1124_745_svg_10x10,
    "isSelected": false
  }
];
const LIST_1_DATA = [
  {
    "var_svgContentVar_8p3rz": SVG_sidebar_standard_procedural_Synth_Path_4,
    "fillColor": {
      "r": 0,
      "g": 0,
      "b": 0
    },
    "isSelected": true
  },
  {
    "var_svgContentVar_8p3rz": SVG_sidebar_standard_procedural_Synth_Path_5,
    "fillColor": {
      "r": 0,
      "g": 0,
      "b": 0
    },
    "isSelected": true
  }
];
const LIST_2_DATA = [
  {
    "var_svgContentVar_dpef1": SVG_sidebar_standard_procedural_Synth_Path_10,
    "var_svgContentVar_59fwc": SVG_sidebar_standard_procedural_Synth_Path_11,
    "text_7byk2": "UEFA Academy",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_sidebar_standard_procedural_Synth_Path_12,
    "var_svgContentVar_59fwc": SVG_sidebar_standard_procedural_Synth_Path_13,
    "text_7byk2": "UEFA Assist",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_sidebar_standard_procedural_Synth_Path_14,
    "var_svgContentVar_59fwc": SVG_sidebar_standard_procedural_Synth_Path_15,
    "text_7byk2": "UEFA Events",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_sidebar_standard_procedural_Synth_Path_16,
    "var_svgContentVar_59fwc": SVG_sidebar_standard_procedural_Synth_Path_17,
    "text_7byk2": "UEFA Football Development",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_sidebar_standard_procedural_Synth_Path_18,
    "var_svgContentVar_59fwc": SVG_sidebar_standard_procedural_Synth_Path_19,
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
    "var_svgContentVar_dpef1": SVG_sidebar_standard_procedural_Synth_Path_20,
    "var_svgContentVar_59fwc": SVG_sidebar_standard_procedural_Synth_Path_21,
    "text_7byk2": "UEFA Hatrick",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_sidebar_standard_procedural_Synth_Path_22,
    "var_svgContentVar_59fwc": SVG_sidebar_standard_procedural_Synth_Path_23,
    "text_7byk2": "UEFA Anti-Doping and Medical",
    "isSelected": false,
    "isCheckboxActive": false
  },
  {
    "var_svgContentVar_dpef1": SVG_sidebar_standard_procedural_Synth_Path_24,
    "var_svgContentVar_59fwc": SVG_sidebar_standard_procedural_Synth_Path_25,
    "text_7byk2": "UEFA Intelligence Center",
    "isSelected": false,
    "isCheckboxActive": false
  }
];


export class sidebar_standard_procedural extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("sidebar_standard_procedural", {layoutProps:{width:328,height:694,parentIsAutoLayout:false},layoutMode:"VERTICAL",itemSpacing:16,paddingRight:16,paddingLeft:16,primaryAxisSizingMode:"AUTO",strokeWeight:1,cornerRadius:14}, [
createFrame("Frame 1714", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:25,relativeTransform:[[1,0,16],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Frame 1919", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:238,height:25,relativeTransform:[[1,0,0],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,strokeWeight:1}, [
createFrame("Actions / Star", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,0],[0,1,0.5]]},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Vector (Stroke)", SVG_sidebar_standard_procedural_assets_icon_Vector__Stroke__1124_731_svg_22_000059127807617x21_020004272460938, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:22.000059127807617,height:21.020004272460938,relativeTransform:[[1,0,0.9999708533287048],[0,1,1]]},strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
]),
createText("Favourites", "Favourites", 20, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:210,height:25,relativeTransform:[[1,0,28],[0,1,0]]},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"NONE",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}})
]),
createFrame("Toggle", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:42,height:22,relativeTransform:[[1,0,254],[0,1,1.5]]},layoutAlign:"INHERIT",strokeWeight:1}, [
...LIST_0_DATA.map(item => {
            return createVector("Rectangle 77 Copy 7", item.var_svgContentVar_8p3rz, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:42,height:22,relativeTransform:[[1,0,0],[0,1,0]]},strokeAlign:"CENTER"}) as unknown as NodeDefinition;
        })
])
]),
createFrame("Line 62", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:0,relativeTransform:[[1,0,16],[0,1,41]]},layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeWeight:1,strokeAlign:"CENTER"}, [

]),
createFrame("Frame 1713", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:40,relativeTransform:[[1,0,16],[0,1,57]]},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createText("Filters", "Filters", 20, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,7.5]]},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Frame 1695", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:40,height:40,relativeTransform:[[1,0,256],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.9450980424880981,g:0.9529411792755127,b:0.9725490212440491},boundVariables:{}}],strokeWeight:1,cornerRadius:100}, [
createFrame("Actions / Search", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,8],[0,1,8]]},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createBooleanOperation("Shape", "UNION", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:18.997970581054688,height:18.999923706054688,relativeTransform:[[1,0,3],[0,1,3]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeAlign:"CENTER"}, [
createBooleanOperation("Oval", "EXCLUDE", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:16,height:16,relativeTransform:[[1,0,3],[0,1,3]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeAlign:"CENTER"}, [
...LIST_1_DATA.map(item => {
            return createFrame("Path", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:16,height:16,relativeTransform:[[1,0,3],[0,1,3]]},strokeAlign:"CENTER", "fills": item.isSelected ? [{ type: "SOLID", color: item.fillColor }] : [{"visible":true,"opacity":1,"blendMode":"NORMAL","type":"SOLID","color":{"r":0,"g":0,"b":0},"boundVariables":{}}] }, []) as unknown as NodeDefinition;
        })
]),
createVector("Path", SVG_sidebar_standard_procedural_Synth_Path_6, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:6.349999904632568,height:6.349999904632568,relativeTransform:[[1,0,15.6484375],[0,1,15.650390625]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeAlign:"CENTER"})
])
])
])
]),
createFrame("Text Field", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:69,relativeTransform:[[1,0,16],[0,1,113]]},layoutMode:"VERTICAL",itemSpacing:8,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createFrame("Compact", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:40,relativeTransform:[[1,0,0],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:12,paddingTop:8,paddingRight:12,paddingBottom:8,paddingLeft:12,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7019608020782471,g:0.7529411911964417,b:0.772549033164978},boundVariables:{}}],strokeWeight:1,cornerRadius:4}, [
createFrame("Inner", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:272,height:24,relativeTransform:[[1,0,12],[0,1,8]]},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,strokeWeight:1}, [
createText("Placeh❌older", "Grow", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,1.5]]},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.3490196168422699,g:0.43921568989753723,b:0.48235294222831726},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}}),
createFrame("Icon", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,248],[0,1,0]]},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Shape", SVG_sidebar_standard_procedural_Synth_Shape_7, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:6,height:10,relativeTransform:[[-1.8369701465288538e-16,1,7],[-1,-1.8369701465288538e-16,16]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeAlign:"CENTER"})
])
])
]),
createText("Helper", "1 result", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,48]]},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.4000000059604645,g:0.4000000059604645,b:0.4000000059604645},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Open Sans",style:"Regular"}})
]),
createFrame("Frame 1712", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:32,relativeTransform:[[1,0,16],[0,1,198]]},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0}, [
createText("Text", "SUBJECT", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,4]]},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Actions / Add / Small", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,284],[0,1,10]]},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Union", SVG_sidebar_standard_procedural_assets_icon_Union_1124_781_svg_8x8, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:8,height:8,relativeTransform:[[1,0,2],[0,1,2]]},strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
]),
createFrame("Frame 1711", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:384,relativeTransform:[[1,0,16],[0,1,246]]},layoutMode:"VERTICAL",itemSpacing:12,layoutAlign:"STRETCH",strokeWeight:1,cornerRadius:8}, [
createFrame("Frame 1704", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:32,relativeTransform:[[1,0,0],[0,1,0]]},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0}, [
createText("Filter 6", "UEFA INITIATIVE", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:280,height:24,relativeTransform:[[1,0,0],[0,1,4]]},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"NONE",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Actions / Minus / Small", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,284],[0,1,10]]},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Vector", SVG_sidebar_standard_procedural_assets_icon_Vector_1124_789_svg_7x0, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:7,height:0,relativeTransform:[[1,0,2.5],[0,1,6]]},strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
]),
...LIST_2_DATA.map(item => {
            return createFrame("Frame 1705", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:32,relativeTransform:[[1,0,0],[0,1,44]]},layoutMode:"HORIZONTAL",itemSpacing:4,paddingLeft:8,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0, "fills": item.isSelected ? [{ type: "SOLID", color: item.fillColor }] : [] }, [
createFrame("Checkbox", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:20,height:20,relativeTransform:[[1,0,8],[0,1,6]]},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createBooleanOperation("Shape", "UNION", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:15,height:15,relativeTransform:[[1,0,2.5],[0,1,2.5]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeAlign:"CENTER"}, [
createVector("Path", item.var_svgContentVar_dpef1, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:15,height:15,relativeTransform:[[1,0,2.5],[0,1,2.5]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeAlign:"CENTER"}),
createVector("Path", item.var_svgContentVar_59fwc, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:11.666666984558105,height:11.666666984558105,relativeTransform:[[1,0,4.166666030883789],[0,1,4.166656494140625]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeAlign:"CENTER"})
])
]),
createText("Filter name", item.text_7byk2, 16, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:264,height:24,relativeTransform:[[1,0,32],[0,1,4]]},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"NONE",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}})
]) as unknown as NodeDefinition;
        })
]),
createFrame("Frame 1649", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,height:32,relativeTransform:[[1,0,16],[0,1,646]]},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0}, [
createText("Text", "ORGANISATION", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:280,height:24,relativeTransform:[[1,0,0],[0,1,4]]},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"NONE",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Actions / Add / Small", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,284],[0,1,10]]},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createVector("Union", SVG_sidebar_standard_procedural_assets_icon_Union_1124_892_svg_8x8, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:8,height:8,relativeTransform:[[1,0,2],[0,1,2]]},strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
]),
createFrame("Frame 1656", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:296,relativeTransform:[[1,0,16],[0,1,694]]},layoutMode:"HORIZONTAL",itemSpacing:8,paddingTop:8,paddingRight:8,paddingBottom:8,paddingLeft:8,counterAxisSizingMode:"AUTO",layoutAlign:"STRETCH",strokeWeight:1}, [

])
]);
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        
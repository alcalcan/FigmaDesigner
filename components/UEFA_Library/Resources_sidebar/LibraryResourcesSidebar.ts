
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";
import { toggle } from "../../Alex_CookBook/toggle/toggle";
import { Lucide_search } from "../../index";

// --- Assets ---
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
import SVG_Proposal_notification_assets_icon_Oval_1_Copy_13_I3379_17221_7466_30960_svg_orig from "./assets/Proposal_notification_assets_icon_Oval_1_Copy_13_I3379_17221_7466_30960_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Rectangle_77_Copy_7_I3379_17221_7466_30959_svg_orig from "./assets/Proposal_notification_assets_icon_Rectangle_77_Copy_7_I3379_17221_7466_30959_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17221_7466_30966_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17221_7466_30966_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Union_I3379_17230_5250_18144_svg_orig from "./assets/Proposal_notification_assets_icon_Union_I3379_17230_5250_18144_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Union_I3379_17261_5250_18144_svg_orig from "./assets/Proposal_notification_assets_icon_Union_I3379_17261_5250_18144_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17219_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3379_17219_3016_7769_svg_orig.svg";

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
const LIST_1_DATA = [
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
const LIST_2_DATA = [
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


export class LibraryResourcesSidebar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("sidebar", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:339,height:694,relativeTransform:[[1,0,1221],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,paddingRight:16,paddingLeft:16,primaryAxisSizingMode:"AUTO",layoutAlign:"STRETCH",layoutGrow:0,layoutSizingHorizontal:"FILL",layoutSizingVertical:"FILL",clipsContent:false,strokeWeight:1,cornerRadius:14}, [
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
...LIST_2_DATA.map(item => {
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
]);
        
        const root = await this.renderDefinition(structure);
        root.name = "LibraryResourcesSidebar";
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        return root; 
    }
}
        

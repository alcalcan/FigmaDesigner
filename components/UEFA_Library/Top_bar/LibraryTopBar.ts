
import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";

// --- Assets ---
import SVG_Proposal_notification_Synth_VectorStroke_2 from "./assets/Proposal_notification_Synth_VectorStroke_2.svg";
import SVG_Proposal_notification_Synth_VectorStroke_3 from "./assets/Proposal_notification_Synth_VectorStroke_3.svg";
import SVG_Proposal_notification_Synth_VectorStroke_4 from "./assets/Proposal_notification_Synth_VectorStroke_4.svg";
import SVG_LibraryTopBar_UEFA_com_wordmark from "./assets/LibraryTopBar_UEFA_com_wordmark.svg";
import SVG_Proposal_notification_assets_icon_Vector_3379_18133_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_3379_18133_svg_orig.svg";

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
    "var_svgContentVar_8p3rz": SVG_Proposal_notification_Synth_VectorStroke_2,
    "fillColor": {
      "r": 0.07058823853731155,
      "g": 0.2235294133424759,
      "b": 0.5215686559677124
    },
    "isSelected": true
  },
  {
    "var_svgContentVar_8p3rz": SVG_Proposal_notification_Synth_VectorStroke_3,
    "fillColor": {
      "r": 0.07058823853731155,
      "g": 0.2235294133424759,
      "b": 0.5215686559677124
    },
    "isSelected": true
  },
  {
    "var_svgContentVar_8p3rz": SVG_Proposal_notification_Synth_VectorStroke_4,
    "fillColor": {
      "r": 0.07058823853731155,
      "g": 0.2235294133424759,
      "b": 0.5215686559677124
    },
    "isSelected": true
  }
];


export class LibraryTopBar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Top bar", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1680,height:40,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:77,paddingTop:8,paddingRight:40,paddingBottom:8,paddingLeft:40,counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"SPACE_BETWEEN",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.9490196108818054,g:0.9529411792755127,b:0.95686274766922},boundVariables:{}}],strokeWeight:1}, [
createFrame("Frame 1607", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:205,height:21,relativeTransform:[[1,0,40],[0,1,9.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:23,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createFrame("Frame 1837", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:205,height:21,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:12,primaryAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Group 19", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:98.4645,height:16,relativeTransform:[[1,0,0],[0,1,2.5]]},layoutAlign:"INHERIT"}, [
createVector("UEFA.com", SVG_LibraryTopBar_UEFA_com_wordmark, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:98.4645,height:15.9454,relativeTransform:[[1,0,0],[0,1,0.0547]]},strokeWeight:0})
]),
createLine("Line 39", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:21,height:0,relativeTransform:[[0,-1,66],[1,0,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1,strokeAlign:"CENTER"}),
createFrame("Frame 1614", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:82,height:21,relativeTransform:[[1,0,78],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createText("Resources", "Resources", 16, "Bold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Bold"}})
])
])
]),
createFrame("Frame 1838", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:950.6206,height:24,relativeTransform:[[1,0,689.3794],[0,1,8]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:24,primaryAxisAlignItems:"MAX",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Frame 1944", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,750.6206],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",strokeWeight:1}, [
createFrame("Notifications / notifications-none", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},strokeWeight:1}, [
createVector("Vector", SVG_Proposal_notification_assets_icon_Vector_3379_18133_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:15,height:19.1923,relativeTransform:[[1,0,4.5],[0,1,2.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1})
]),
createEllipse("Ellipse 1", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:8,height:8,relativeTransform:[[1,0,16],[0,1,16]],constraints:{horizontal:"MIN",vertical:"MIN"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:0.23137255012989044,b:0.23137255012989044},boundVariables:{}}],strokeWeight:1})
]),
createFrame("Frame 1612", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:104,height:24,relativeTransform:[[1,0,798.6206],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,primaryAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Frame 1612", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:104,height:24,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,primaryAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Frame 1618", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:88,height:24,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createFrame("pk-avatar", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createEllipse("Ellipse 22", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeWeight:1}),
createText("FW", "JD", 14, "Bold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",relativeTransform:[[1,0,3.5],[0,1,2]],constraints:{horizontal:"CENTER",vertical:"CENTER"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.2705882489681244,g:0.3607843220233917,b:0.40392157435417175},boundVariables:{}}],strokeWeight:2.473090410232544,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"CENTER",textAlignVertical:"TOP",font:{family:"Manrope",style:"Bold"}})
]),
createText("John Doe", "John Doe", 14, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,28],[0,1,1.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}})
]),
createLine("Line 43", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:0,relativeTransform:[[0,-1,104],[1,0,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeWeight:1,strokeAlign:"CENTER"})
])
]),
createFrame("Navigation / Hamburger", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,926.6206],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createBooleanOperation("Union", "UNION", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:20,height:14,relativeTransform:[[1,0,2],[0,1,5]]},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"}, [
...LIST_0_DATA.map(item => {
            return createVector("Vector (Stroke)", item.var_svgContentVar_8p3rz, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:20,height:2,relativeTransform:[[1,0,2],[0,1,11]]},strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND", "fills": item.isSelected ? [{ type: "SOLID", color: item.fillColor }] : [{"visible":true,"opacity":1,"blendMode":"NORMAL","type":"SOLID","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}] }) as unknown as NodeDefinition;
        })
])
])
])
]);
        
        const root = await this.renderDefinition(structure);
        root.name = "LibraryTopBar";
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        normalizeLibraryLayerNames(root);
        return root; 
    }
}
        

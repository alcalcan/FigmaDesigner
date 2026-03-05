
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";

// --- Assets ---
import SVG_Proposal_notification_BOLD_CHEVRON_FIX_10x6 from "./assets/Proposal_notification_BOLD_CHEVRON_FIX_10x6.svg";
import SVG_Proposal_notification_Synth_Shape_7 from "./assets/Proposal_notification_Synth_Shape_7.svg";

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


export class LibraryResourcesSearchBar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("search_bar", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1077,height:72,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,paddingTop:16,paddingBottom:16,counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"SPACE_BETWEEN",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
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
...LIST_0_DATA.map(item => {
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
]);
        
        const root = await this.renderDefinition(structure);
        normalizeLibraryLayerNames(root);
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        return root; 
    }
}
        

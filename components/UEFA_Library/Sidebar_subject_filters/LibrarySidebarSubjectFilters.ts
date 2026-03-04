
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";

// --- Assets ---
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


export class LibrarySidebarSubjectFilters extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Initiative Filters", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:384,relativeTransform:[[1,0,16],[0,1,246]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:12,primaryAxisSizingMode:"AUTO",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",strokeWeight:1,cornerRadius:8}, [
createFrame("Initiative Header Row", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:32,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.8156862854957581,g:0.8470588326454163,b:0.8588235378265381},boundVariables:{}}],strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0}, [
createText("Filter 6", "UEFA INITIATIVE", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,4]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}}),
createFrame("Actions / Minus / Small", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:12,height:12,relativeTransform:[[1,0,295],[0,1,10]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createLine("Vector", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:7,height:0,relativeTransform:[[1,0,2.5],[0,1,6]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeWeight:2,strokeAlign:"CENTER",strokeCap:"ROUND",strokeJoin:"ROUND"})
])
]),
...LIST_0_DATA.map(item => {
            return createFrame("Initiative Option Row", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:307,height:32,relativeTransform:[[1,0,0],[0,1,44]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,paddingLeft:8,counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",layoutSizingHorizontal:"FILL",strokeTopWeight:0,strokeRightWeight:0,strokeBottomWeight:1,strokeLeftWeight:0, "fills": item.isSelected ? [{ type: "SOLID", color: item.fillColor }] : [] }, [
createFrame("Checkbox", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:20,height:20,relativeTransform:[[1,0,8],[0,1,6]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1}, [
createRectangle("Checkbox Outline", {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:15,height:15,relativeTransform:[[1,0,2.5],[0,1,2.5]],constraints:{horizontal:"MIN",vertical:"MIN"}},fills:[{visible:false,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokes:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1})
]),
createText("Filter name", item.text_7byk2, 16, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,32],[0,1,4]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}})
]) as unknown as NodeDefinition;
        })
]);
        
        const root = await this.renderDefinition(structure);
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        return root; 
    }
}
        

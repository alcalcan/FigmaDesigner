
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";

// --- Assets ---
import IMG_Proposal_notification_img_2_png from "./assets/Proposal_notification_img_2.png";

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
    "text_yg18k": "UEFA Academy",
    "fillColor": {
      "r": 0.10196078568696976,
      "g": 0.1921568661928177,
      "b": 0.23529411852359772
    },
    "isSelected": true
  },
  {
    "text_yg18k": "The UEFA Academy trains managers, specialists and players to supply the world’s favourite sport with the best professionals.",
    "fillColor": {
      "r": 0.10196078568696976,
      "g": 0.1921568661928177,
      "b": 0.23529411852359772
    },
    "isSelected": true
  }
];


export class LibraryIntro extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Frame 1617", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1,height:320,relativeTransform:[[1,0,120],[0,1,48]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",paddingTop:64,paddingRight:32,paddingBottom:64,paddingLeft:32,primaryAxisAlignItems:"CENTER",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}},{visible:true,opacity:1,blendMode:"MULTIPLY",type:"IMAGE",scaleMode:"CROP",imageTransform:[[1.5813429355621338,0,-0.7785917520523071],[0,0.5250946879386902,0.10719798505306244]],scalingFactor:1,filters:{exposure:0,contrast:0,saturation:0,temperature:0,tint:0,highlights:0,shadows:0},originalImageHash:"150b63fa646ed8a39e228e22e806462134ac57cc",assetRef:IMG_Proposal_notification_img_2_png}],effects:[{visible:true,blendMode:"NORMAL",type:"DROP_SHADOW",radius:6,boundVariables:{},color:{r:0,g:0,b:0,a:0.11999999731779099},offset:{x:0,y:2},spread:0,showShadowBehindNode:true}],strokeWeight:1}, [
createFrame("Frame 1615", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1,height:202,relativeTransform:[[1,0,0.5],[0,1,59]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:26,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,strokeWeight:1}, [
...LIST_0_DATA.map(item => {
            return createText("UEFA Academy", item.text_yg18k, 24, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}, "fills": item.isSelected ? [{ type: "SOLID", color: item.fillColor }] : [{"visible":true,"opacity":1,"blendMode":"NORMAL","type":"SOLID","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}] }) as unknown as NodeDefinition;
        }),
createFrame("Primary", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:135,height:48,relativeTransform:[[1,0,0],[0,1,154]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",paddingTop:12,paddingRight:24,paddingBottom:12,paddingLeft:24,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",counterAxisAlignItems:"CENTER",layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0.6352941393852234,b:0.5882353186607361},boundVariables:{}}],strokeWeight:1,cornerRadius:100}, [
createText("Label", "Learn more", 16, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,24],[0,1,12]],constraints:{horizontal:"STRETCH",vertical:"CENTER"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"CENTER",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}})
])
])
]);
        
        const root = await this.renderDefinition(structure);
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        return root; 
    }
}
        
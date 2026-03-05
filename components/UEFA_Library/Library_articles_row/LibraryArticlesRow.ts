
import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";

// --- Assets ---
import IMG_Proposal_notification_img_3_png from "./assets/Proposal_notification_img_3.png";
import IMG_Proposal_notification_img_4_png from "./assets/Proposal_notification_img_4.png";
import IMG_Proposal_notification_img_5_png from "./assets/Proposal_notification_img_5.png";
import IMG_Proposal_notification_img_6_png from "./assets/Proposal_notification_img_6.png";

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
    "image_gi9d1": IMG_Proposal_notification_img_3_png,
    "imageHash": "53600b9b753bcf27aa29e70bd45039034c373525",
    "isSelected": false
  },
  {
    "image_gi9d1": IMG_Proposal_notification_img_4_png,
    "imageHash": "d6f3b23264dd483546de453eeef7c6782b5d923f",
    "isSelected": false
  },
  {
    "image_gi9d1": IMG_Proposal_notification_img_5_png,
    "imageHash": "707cbb62af7d9774194feffae7db7284a4719141",
    "isSelected": false
  },
  {
    "image_gi9d1": IMG_Proposal_notification_img_6_png,
    "imageHash": "53d394c4577bd2ad4235d0666feb13b9ca37fd82",
    "isSelected": false
  }
];


export class LibraryArticlesRow extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Related Cards Row", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1444,height:438,relativeTransform:[[1,0,121],[0,1,48]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:24,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",layoutAlign:"INHERIT",clipsContent:false,strokeWeight:1}, [
...LIST_0_DATA.map(item => {
            return createFrame("Related Resource Card", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:343,height:438,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",primaryAxisSizingMode:"AUTO",layoutAlign:"STRETCH",clipsContent:false,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:1,g:1,b:1},boundVariables:{}}],effects:[{visible:true,blendMode:"NORMAL",type:"DROP_SHADOW",radius:6,boundVariables:{},color:{r:0,g:0,b:0,a:0.11999999731779099},offset:{x:0,y:2},spread:0,showShadowBehindNode:true}],strokeWeight:1,cornerRadius:4}, [
createRectangle("Rectangle 45", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:343,height:229,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"IMAGE",scaleMode:"FILL",imageTransform:[[1,0,0],[0,0.9831932783126831,0.008403373882174492]],scalingFactor:1,rotation:0,filters:{exposure:0,contrast:0,saturation:0,temperature:0,tint:0,highlights:0,shadows:0},originalImageHash:item.imageHash,assetRef:item.image_gi9d1}],strokeWeight:1,topLeftRadius:4,topRightRadius:4}),
createFrame("Frame 1615", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:343,height:209,relativeTransform:[[1,0,0],[0,1,229]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:24,paddingTop:24,paddingRight:16,paddingBottom:24,paddingLeft:16,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Frame 1644", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:311,height:161,relativeTransform:[[1,0,16],[0,1,24]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:16,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createFrame("Frame 1713", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:311,height:50,relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,counterAxisSizingMode:"AUTO",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
createText("Text", "Refereeing in Women’s Football: Motivation.", 20, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"SemiBold"}})
]),
createText("Text", "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.", 16, "Regular", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:311,height:95,relativeTransform:[[1,0,0],[0,1,66]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"STRETCH",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.10196078568696976,g:0.1921568661928177,b:0.23529411852359772},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAlignHorizontal:"LEFT",textAlignVertical:"CENTER",font:{family:"Open Sans",style:"Regular"}})
])
])
]) as unknown as NodeDefinition;
        })
]);
        
        const root = await this.renderDefinition(structure);
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        normalizeLibraryLayerNames(root);
        return root; 
    }
}
        

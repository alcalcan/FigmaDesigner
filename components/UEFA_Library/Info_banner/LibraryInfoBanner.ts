
import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";

// --- Assets ---
import SVG_Proposal_notification_assets_icon_Vector_I3383_3749_1004_374_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3383_3749_1004_374_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3384_160_5086_20_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3384_160_5086_20_svg_orig.svg";

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



export class LibraryInfoBanner extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Info", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1680,height:90,relativeTransform:[[1,0,0],[0,1,224]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",paddingRight:120,paddingLeft:120,counterAxisSizingMode:"AUTO",layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0.7803921699523926,g:0.9176470637321472,b:0.9843137264251709},boundVariables:{}}],strokeWeight:1,cornerRadius:4}, [
createFrame("AV / play-circle", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"ABSOLUTE",width:64,height:64,relativeTransform:[[1,0,488],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",strokeWeight:1}, [

]),
createFrame("Frame 1615", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1440,height:90,relativeTransform:[[1,0,120],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:16,paddingTop:16,paddingBottom:16,layoutAlign:"STRETCH",layoutGrow:1,strokeWeight:1}, [
createFrame("Frame 1924", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:30,relativeTransform:[[1,0,0],[0,1,16]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:8,paddingTop:6,primaryAxisSizingMode:"AUTO",counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"INHERIT",strokeWeight:1}, [
createFrame("Support / information", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,0],[0,1,6]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",strokeWeight:1}, [
createVector("Vector", SVG_Proposal_notification_assets_icon_Vector_I3383_3749_1004_374_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:20,height:20,relativeTransform:[[1,0,2],[0,1,2]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1})
])
]),
createFrame("Frame 1923", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1400,height:58,relativeTransform:[[1,0,40],[0,1,16]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"VERTICAL",itemSpacing:4,primaryAxisSizingMode:"AUTO",primaryAxisAlignItems:"CENTER",layoutAlign:"INHERIT",layoutGrow:1,strokeWeight:1}, [
createText("Don’t miss out!", "Don’t miss out!", 20, "Bold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Manrope",style:"Bold"}}),
createFrame("Frame 1925", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1400,height:24,relativeTransform:[[1,0,0],[0,1,34]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:4,counterAxisSizingMode:"AUTO",layoutAlign:"STRETCH",strokeWeight:1}, [
createText("Click on the bell icon", "Click on the bell icon", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,0],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"WIDTH_AND_HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Manrope",style:"SemiBold"}}),
createFrame("Notifications / notifications-active", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:24,height:24,relativeTransform:[[1,0,161],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",strokeWeight:1}, [
createVector("Vector", SVG_Proposal_notification_assets_icon_Vector_I3384_160_5086_20_svg_orig, {layoutProps:{parentIsAutoLayout:false,layoutPositioning:"AUTO",width:18.7153,height:19.1923,relativeTransform:[[1,0,2.6423],[0,1,2.5]],constraints:{horizontal:"SCALE",vertical:"SCALE"}},fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1})
]),
createText("in the top-right corner on the page. Use it to choose what you want to follow and we’ll notify you when new resources are added that match your interests.", "in the top-right corner on the page. Use it to choose what you want to follow and we’ll notify you when new resources are added that match your interests.", 16, "SemiBold", COLORS.BLACK, {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",relativeTransform:[[1,0,189],[0,1,0]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutAlign:"INHERIT",layoutGrow:1,fills:[{visible:true,opacity:1,blendMode:"NORMAL",type:"SOLID",color:{r:0,g:0,b:0},boundVariables:{}}],strokeWeight:1,strokeAlign:"OUTSIDE",textAutoResize:"HEIGHT",textAlignHorizontal:"LEFT",textAlignVertical:"TOP",font:{family:"Manrope",style:"SemiBold"}})
])
])
])
]);
        
        const root = await this.renderDefinition(structure);
        root.name = "LibraryInfoBanner";
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        normalizeLibraryLayerNames(root);
        return root; 
    }
}
        

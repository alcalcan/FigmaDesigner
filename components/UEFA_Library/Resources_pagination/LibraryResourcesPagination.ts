
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";

// --- Assets ---
import SVG_Proposal_notification_assets_icon_Shape_I3379_17214_7515_31651_7461_30655_70_441_svg_10x6_override from "./assets/Proposal_notification_assets_icon_Shape_I3379_17214_7515_31651_7461_30655_70_441_svg_10x6_override.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_10_70_471_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17215_214_10_70_471_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_4_70_475_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17215_214_4_70_475_svg_orig.svg";

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



export class LibraryResourcesPagination extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Frame 1922", {layoutProps:{parentIsAutoLayout:true,layoutPositioning:"AUTO",width:1077,height:76,relativeTransform:[[1,0,0],[0,1,1092]],constraints:{horizontal:"MIN",vertical:"MIN"}},layoutMode:"HORIZONTAL",itemSpacing:100,paddingTop:32,counterAxisSizingMode:"AUTO",primaryAxisAlignItems:"SPACE_BETWEEN",counterAxisAlignItems:"CENTER",layoutAlign:"STRETCH",strokeWeight:1}, [
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
]);
        
        const root = await this.renderDefinition(structure);
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        return root; 
    }
}
        
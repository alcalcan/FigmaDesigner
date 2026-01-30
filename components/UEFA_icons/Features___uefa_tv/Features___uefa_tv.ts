import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

// SVG Imports
import SVG_Features___uefa_tv_Synth_Vector_0 from "./assets/Features___uefa_tv_Synth_Vector_0.svg";
import SVG_Features___uefa_tv_Synth_Vector_1 from "./assets/Features___uefa_tv_Synth_Vector_1.svg";



function applySizeAndTransform(
    node: SceneNode & LayoutMixin & GeometryMixin,
    opts: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        parentIsAutoLayout: boolean;
        layoutPositioning?: "AUTO" | "ABSOLUTE";
    }
) {
    const { width, height, relativeTransform, parentIsAutoLayout } = opts;
    const positioning = opts.layoutPositioning ?? "AUTO";

    if (typeof width === "number" && typeof height === "number") {
        node.resize(width, height);
    }

    if (relativeTransform) {
        const t = relativeTransform;
        const inFlow = parentIsAutoLayout && positioning !== "ABSOLUTE";

        // Strip translation in auto-layout flow; keep axis vectors
        const tx = inFlow ? 0 : t[0][2];
        const ty = inFlow ? 0 : t[1][2];

        try {
            node.relativeTransform = [
                [t[0][0], t[0][1], tx],
                [t[1][0], t[1][1], ty],
            ];
        } catch (e) {
            console.warn("Failed to set relativeTransform", e);
        }
    }
}


export class Features___uefa_tv extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "Features / uefa-tv";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("maskType" in root) root.maskType = "ALPHA";
if ("clipsContent" in root) root.clipsContent = true;
if ("layoutMode" in root) {
    root.layoutMode = "NONE";
}
root.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root.strokes = await this.hydratePaints([]);
root.strokeWeight = 1;
root.strokeAlign = "INSIDE";
if ("strokeCap" in root) root.strokeCap = "NONE";
if ("strokeJoin" in root) root.strokeJoin = "MITER";
if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
if ("strokeTopWeight" in root) root.strokeTopWeight = 1;
if ("strokeRightWeight" in root) root.strokeRightWeight = 1;
if ("strokeBottomWeight" in root) root.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root) root.strokeLeftWeight = 1;
root.effects = [];
if ("cornerRadius" in root) root.cornerRadius = 0;

// Start Child: Union

// Boolean Child: Vector
const root_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_Features___uefa_tv_Synth_Vector_0);
root_child_0_child_0_svgContainer.resize(20, 16);
const root_child_0_child_0 = figma.flatten([root_child_0_child_0_svgContainer]);
root_child_0_child_0.name = "Vector";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0) root_child_0_child_0.maskType = "ALPHA";
root_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0.strokeWeight = 0.02500000037252903;
root_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0) root_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0) root_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0) root_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0.effects = [];
root_child_0_child_0.vectorPaths = [{"windingRule":"NONZERO","data":"M 5.684210777282715 16 L 5.684210777282715 14.117647171020508 L 1.7126052379608154 14.117647171020508 C 1.2340262830257416 14.117647171020508 0.8289474248886108 13.952941209077835 0.4973684549331665 13.623529434204102 C 0.16578948497772217 13.294117659330368 0 12.891686916351318 0 12.41623592376709 L 0 1.7014117240905762 C 0 1.2259607315063477 0.16578948497772217 0.8235294222831726 0.4973684549331665 0.4941176474094391 C 0.8289474248886108 0.16470587253570557 1.2340262830257416 0 1.7126052379608154 0 L 18.287395477294922 0 C 18.765974432229996 0 19.171053171157837 0.16470587253570557 19.50263214111328 0.4941176474094391 C 19.834211111068726 0.8235294222831726 20 1.2259607315063477 20 1.7014117240905762 L 20 12.41623592376709 C 20 12.891686916351318 19.834211111068726 13.294117659330368 19.50263214111328 13.623529434204102 C 19.171053171157837 13.952941209077835 18.765974432229996 14.117647171020508 18.287395477294922 14.117647171020508 L 14.315790176391602 14.117647171020508 L 14.315790176391602 16 L 5.684210777282715 16 Z M 1.7126052379608154 12.705883026123047 L 18.287395477294922 12.705883026123047 C 18.3603428453207 12.705883026123047 18.4271327778697 12.675687566399574 18.487764358520508 12.61529541015625 C 18.548553831875324 12.555060114711523 18.578947067260742 12.488706514239311 18.578947067260742 12.41623592376709 L 18.578947067260742 1.7014117240905762 C 18.578947067260742 1.6289411336183548 18.548553831875324 1.5625876523554325 18.487764358520508 1.5023523569107056 C 18.4271327778697 1.4419602006673813 18.3603428453207 1.4117647409439087 18.287395477294922 1.4117647409439087 L 1.7126052379608154 1.4117647409439087 C 1.6396578699350357 1.4117647409439087 1.5728686526417732 1.4419602006673813 1.5122370719909668 1.5023523569107056 C 1.4514475986361504 1.5625876523554325 1.4210526943206787 1.6289411336183548 1.4210526943206787 1.7014117240905762 L 1.4210526943206787 12.41623592376709 C 1.4210526943206787 12.488706514239311 1.4514475986361504 12.555060114711523 1.5122370719909668 12.61529541015625 C 1.5728686526417732 12.675687566399574 1.6396578699350357 12.705883026123047 1.7126052379608154 12.705883026123047 Z"},{"windingRule":"NONE","data":"M 1.4210526943206787 12.705883026123047 L 1.4210526943206787 1.4117647409439087"}];
applySizeAndTransform(root_child_0_child_0, {"width":20,"height":16,"relativeTransform":[[1,0,2],[0,1,4]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_0.x = 2;
root_child_0_child_0.y = 4;

// Boolean Child: Vector
const root_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_Features___uefa_tv_Synth_Vector_1);
root_child_0_child_1_svgContainer.resize(5.957525730133057, 7.601881980895996);
const root_child_0_child_1 = figma.flatten([root_child_0_child_1_svgContainer]);
root_child_0_child_1.name = "Vector";
root_child_0_child_1.visible = true;
root_child_0_child_1.opacity = 1;
root_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1) root_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1) root_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_1) root_child_0_child_1.maskType = "ALPHA";
root_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1.strokeWeight = 0.02500000037252903;
root_child_0_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1) root_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1) root_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1) root_child_0_child_1.strokeMiterLimit = 4;
root_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_1) root_child_0_child_1.cornerRadius = 0.5;
root_child_0_child_1.vectorPaths = [{"windingRule":"NONE","data":"M 0 7.601881980895996 L 5.957525730133057 3.800940752029419 L 0 0 L 0 7.601881980895996 Z"}];
applySizeAndTransform(root_child_0_child_1, {"width":5.957525730133057,"height":7.601881980895996,"relativeTransform":[[1,0,9.5],[0,1,7.25787353515625]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_1.x = 9.5;
root_child_0_child_1.y = 7.25787353515625;
const root_child_0 = figma.union([root_child_0_child_0, root_child_0_child_1], figma.currentPage);
root_child_0.name = "Union";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
root_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 0.02500000037252903;
root_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0) root_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0) root_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0) root_child_0.strokeMiterLimit = 4;
root_child_0.effects = [];
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 0;
root.appendChild(root_child_0);
applySizeAndTransform(root_child_0, {"width":20,"height":16,"relativeTransform":[[1,0,2],[0,1,4]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0.x = 2;
root_child_0.y = 4;


        applySizeAndTransform(root, {"width":24,"height":24,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

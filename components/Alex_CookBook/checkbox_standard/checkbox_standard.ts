import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

// SVG Imports
import SVG_checkbox_standard_Synth_Path_0 from "./assets/checkbox_standard_Synth_Path_0.svg";
import SVG_checkbox_standard_Synth_Path_1 from "./assets/checkbox_standard_Synth_Path_1.svg";



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


export class checkbox_standard extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "checkbox_standard";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("maskType" in root) root.maskType = "ALPHA";
if ("clipsContent" in root) root.clipsContent = false;
if ("layoutMode" in root) {
    root.layoutMode = "HORIZONTAL";
    root.primaryAxisSizingMode = "FIXED";
    root.counterAxisSizingMode = "FIXED";
    root.primaryAxisAlignItems = "MIN";
    root.counterAxisAlignItems = "CENTER";
    root.itemSpacing = 4;
    root.paddingTop = 0;
    root.paddingRight = 0;
    root.paddingBottom = 0;
    root.paddingLeft = 8;
    root.itemReverseZIndex = false;
    root.strokesIncludedInLayout = false;
}
root.fills = await this.hydratePaints([]);
root.strokes = await this.hydratePaints([]);
root.strokeAlign = "INSIDE";
if ("strokeCap" in root) root.strokeCap = "NONE";
if ("strokeJoin" in root) root.strokeJoin = "MITER";
if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
if ("strokeTopWeight" in root) root.strokeTopWeight = 0;
if ("strokeRightWeight" in root) root.strokeRightWeight = 0;
if ("strokeBottomWeight" in root) root.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root) root.strokeLeftWeight = 0;
root.effects = [];
if ("cornerRadius" in root) root.cornerRadius = 0;

// Start Child: Checkbox
const root_child_0 = figma.createFrame();
root_child_0.name = "Checkbox";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0) root_child_0.clipsContent = false;
if ("layoutMode" in root_child_0) {
    root_child_0.layoutMode = "NONE";
}
root_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 1;
root_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0) root_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0) root_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0) root_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0) root_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0) root_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0) root_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0) root_child_0.strokeLeftWeight = 1;
root_child_0.effects = [];
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_checkbox_standard_Synth_Path_0);
root_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_0_child_0_child_0 = figma.flatten([root_child_0_child_0_child_0_svgContainer]);
root_child_0_child_0_child_0.name = "Path";
root_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.maskType = "ALPHA";
root_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0.strokeWeight = 0;
root_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.cornerRadius = 0;
root_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"}];
applySizeAndTransform(root_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_0_child_0.x = 2.5;
root_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_checkbox_standard_Synth_Path_1);
root_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_0_child_0_child_1 = figma.flatten([root_child_0_child_0_child_1_svgContainer]);
root_child_0_child_0_child_1.name = "Path";
root_child_0_child_0_child_1.visible = true;
root_child_0_child_0_child_1.opacity = 1;
root_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.maskType = "ALPHA";
root_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_1.strokeWeight = 0;
root_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.cornerRadius = 0;
root_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666030883789],[0,1,4.166656494140625]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_0_child_1.x = 4.166666030883789;
root_child_0_child_0_child_1.y = 4.166656494140625;
const root_child_0_child_0 = figma.exclude([root_child_0_child_0_child_0, root_child_0_child_0_child_1], figma.currentPage);
root_child_0_child_0.name = "Shape";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0) root_child_0_child_0.maskType = "ALPHA";
root_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0.strokeWeight = 0;
root_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_0) root_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0) root_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0) root_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0) root_child_0_child_0.cornerRadius = 0;
root_child_0.appendChild(root_child_0_child_0);
applySizeAndTransform(root_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_0.x = 2.5;
root_child_0_child_0.y = 2.5;
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "INHERIT";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1 = figma.createText();
root_child_1.name = "Filter name";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1) root_child_1.isMask = false;
if ("maskType" in root_child_1) root_child_1.maskType = "ALPHA";
root_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1.strokes = await this.hydratePaints([]);
root_child_1.strokeWeight = 1;
root_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1) root_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1) root_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1) root_child_1.strokeMiterLimit = 4;
root_child_1.effects = [];
// Text Properties
root_child_1.characters = `UEFA Football Development`;
root_child_1.fontSize = 16;
root_child_1.textAlignHorizontal = "LEFT";
root_child_1.textAlignVertical = "CENTER";
root_child_1.textAutoResize = "NONE";
root_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1) root_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1) root_child_1.textDecoration = "NONE";
root_child_1.paragraphSpacing = 0;
root_child_1.paragraphIndent = 0;
await this.setFont(root_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1, 0, 25, {"family":"Open Sans","style":"Regular"});
root_child_1.setRangeFills(0, 25, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1.setRangeFontSize(0, 25, 16);
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "INHERIT";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":264,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":296,"height":32,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

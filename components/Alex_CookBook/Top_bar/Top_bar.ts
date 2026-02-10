import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

// SVG Imports
import SVG_Top_bar_assets_vector_UEFA_com_858_8512_svg_98_46454620361328x15_945378303527832 from "./assets/Top_bar_assets_vector_UEFA_com_858_8512_svg_98_46454620361328x15_945378303527832.svg";
import SVG_Top_bar_assets_icon_Vector_858_8522_svg_14_999951362609863x19_192251205444336 from "./assets/Top_bar_assets_icon_Vector_858_8522_svg_14_999951362609863x19_192251205444336.svg";
import SVG_Top_bar_Synth_VectorStroke_2 from "./assets/Top_bar_Synth_VectorStroke_2.svg";
import SVG_Top_bar_Synth_VectorStroke_3 from "./assets/Top_bar_Synth_VectorStroke_3.svg";
import SVG_Top_bar_Synth_VectorStroke_4 from "./assets/Top_bar_Synth_VectorStroke_4.svg";



function applySizeAndTransform(
    node: SceneNode & LayoutMixin & GeometryMixin,
    opts: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        parentIsAutoLayout: boolean;
        layoutPositioning?: "AUTO" | "ABSOLUTE";
        constraints?: Constraints;
    }
) {
    const { width, height, relativeTransform, parentIsAutoLayout, constraints } = opts;
    const positioning = opts.layoutPositioning ?? "AUTO";

    if (typeof width === "number" && typeof height === "number") {
        node.resize(width, height);
    }

    if (constraints && "constraints" in node) {
        try {
            node.constraints = constraints;
        } catch (e) {
            console.warn("Failed to set constraints", e);
        }
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


export class Top_bar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "Top bar";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("clipsContent" in root) root.clipsContent = false;
if ("layoutMode" in root) {
    root.layoutMode = "HORIZONTAL";
    root.primaryAxisSizingMode = "FIXED";
    root.counterAxisSizingMode = "AUTO";
    root.primaryAxisAlignItems = "SPACE_BETWEEN";
    root.counterAxisAlignItems = "CENTER";
    root.itemSpacing = 77;
    root.paddingTop = 8;
    root.paddingRight = 40;
    root.paddingBottom = 8;
    root.paddingLeft = 40;
}
root.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9490196108818054,"g":0.9529411792755127,"b":0.95686274766922},"boundVariables":{}}]);
root.strokes = await this.hydratePaints([]);
root.strokeWeight = 1;
root.strokeAlign = "INSIDE";
if ("strokeCap" in root) root.strokeCap = "NONE";
if ("strokeJoin" in root) root.strokeJoin = "MITER";
if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
root.effects = [];
if ("cornerRadius" in root) root.cornerRadius = 0;

// Start Child: Frame 1607
const root_child_0 = figma.createFrame();
root_child_0.name = "Frame 1607";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("clipsContent" in root_child_0) root_child_0.clipsContent = false;
if ("layoutMode" in root_child_0) {
    root_child_0.layoutMode = "HORIZONTAL";
    root_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0.counterAxisSizingMode = "AUTO";
    root_child_0.primaryAxisAlignItems = "MIN";
    root_child_0.counterAxisAlignItems = "CENTER";
    root_child_0.itemSpacing = 23;
    root_child_0.paddingTop = 0;
    root_child_0.paddingRight = 0;
    root_child_0.paddingBottom = 0;
    root_child_0.paddingLeft = 0;
}
root_child_0.fills = await this.hydratePaints([]);
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 1;
root_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0) root_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0) root_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0) root_child_0.strokeMiterLimit = 4;
root_child_0.effects = [];
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 0;

// Start Child: Frame 1837
const root_child_0_child_0 = figma.createFrame();
root_child_0_child_0.name = "Frame 1837";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
if ("clipsContent" in root_child_0_child_0) root_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_0_child_0) {
    root_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0_child_0.counterAxisSizingMode = "FIXED";
    root_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_0_child_0.itemSpacing = 12;
    root_child_0_child_0.paddingTop = 0;
    root_child_0_child_0.paddingRight = 0;
    root_child_0_child_0.paddingBottom = 0;
    root_child_0_child_0.paddingLeft = 0;
}
root_child_0_child_0.fills = await this.hydratePaints([]);
root_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0.strokeWeight = 1;
root_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0) root_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0) root_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0) root_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0) root_child_0_child_0.cornerRadius = 0;

// Start Child: Group 19
const root_child_0_child_0_child_0 = figma.createFrame(); // Group handled as Frame
root_child_0_child_0_child_0.fills = []; // Groups normally have no fills, but Frame defaults to white
root_child_0_child_0_child_0.clipsContent = false; // Groups never clip content
root_child_0_child_0_child_0.strokes = [];
root_child_0_child_0_child_0.strokeWeight = 0;
root_child_0_child_0_child_0.name = "Group 19";
root_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.isMask = false;
root_child_0_child_0_child_0.effects = [];

// Start Child: Logos / Wordmark / UEFA.com Black
const root_child_0_child_0_child_0_child_0 = figma.createFrame();
root_child_0_child_0_child_0_child_0.name = "Logos / Wordmark / UEFA.com Black";
root_child_0_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.isMask = false;
if ("clipsContent" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_0_child_0_child_0_child_0) {
    root_child_0_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":0.25775936245918274,"g":0.25775936245918274,"b":0.25775936245918274},"boundVariables":{}}]);
root_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0_child_0.strokeWeight = 0.5517241358757019;
root_child_0_child_0_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: UEFA.com
const root_child_0_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_Top_bar_assets_vector_UEFA_com_858_8512_svg_98_46454620361328x15_945378303527832);
root_child_0_child_0_child_0_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_0_child_0_child_0_child_0 = figma.flatten([root_child_0_child_0_child_0_child_0_child_0_svgContainer]);
root_child_0_child_0_child_0_child_0_child_0.name = "UEFA.com";
root_child_0_child_0_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0_child_0.isMask = false;
root_child_0_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0_child_0_child_0.strokeWeight = 1;
root_child_0_child_0_child_0_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_0_child_0_child_0_child_0.appendChild(root_child_0_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_0_child_0_child_0_child_0_child_0, {"width":98.46454620361328,"height":15.945378303527832,"relativeTransform":[[1,0,0],[0,1,0.0546875]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_0_child_0_child_0_child_0_child_0.x = 0;
root_child_0_child_0_child_0_child_0_child_0.y = 0.0546875;
root_child_0_child_0_child_0.appendChild(root_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_0_child_0_child_0_child_0, {"width":54,"height":16,"relativeTransform":[[1,0,0],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_0_child_0_child_0_child_0.x = 0;
root_child_0_child_0_child_0_child_0.y = 2.5;
root_child_0_child_0.appendChild(root_child_0_child_0_child_0);
// Child Layout Props
root_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0_child_0, {"width":54,"height":18.5,"relativeTransform":[[1,0,0],[0,1,2.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Line 39
const root_child_0_child_0_child_1 = figma.createLine();
root_child_0_child_0_child_1.name = "Line 39";
root_child_0_child_0_child_1.visible = true;
root_child_0_child_0_child_1.opacity = 1;
root_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.isMask = false;
root_child_0_child_0_child_1.fills = await this.hydratePaints([]);
root_child_0_child_0_child_1.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_0_child_1.strokeWeight = 1;
root_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_0_child_0_child_1.effects = [];
root_child_0_child_0.appendChild(root_child_0_child_0_child_1);
// Child Layout Props
root_child_0_child_0_child_1.layoutAlign = "STRETCH";
root_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0_child_1, {"width":21,"height":1,"relativeTransform":[[-4.3711395392165286e-8,-1,67],[1,-4.3711395392165286e-8,2.1855697696082643e-8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Frame 1614
const root_child_0_child_0_child_2 = figma.createFrame();
root_child_0_child_0_child_2.name = "Frame 1614";
root_child_0_child_0_child_2.visible = true;
root_child_0_child_0_child_2.opacity = 1;
root_child_0_child_0_child_2.locked = false;
if ("blendMode" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.isMask = false;
if ("clipsContent" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.clipsContent = false;
if ("layoutMode" in root_child_0_child_0_child_2) {
    root_child_0_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_0_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_0_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_0_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_0_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_0_child_0_child_2.itemSpacing = 4;
    root_child_0_child_0_child_2.paddingTop = 0;
    root_child_0_child_0_child_2.paddingRight = 0;
    root_child_0_child_0_child_2.paddingBottom = 0;
    root_child_0_child_0_child_2.paddingLeft = 0;
}
root_child_0_child_0_child_2.fills = await this.hydratePaints([]);
root_child_0_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_2.strokeWeight = 1;
root_child_0_child_0_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.strokeMiterLimit = 4;
root_child_0_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_2) root_child_0_child_0_child_2.cornerRadius = 0;

// Start Child: Resources
const root_child_0_child_0_child_2_child_0 = figma.createText();
root_child_0_child_0_child_2_child_0.name = "Resources";
root_child_0_child_0_child_2_child_0.visible = true;
root_child_0_child_0_child_2_child_0.opacity = 1;
root_child_0_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_2_child_0) root_child_0_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_2_child_0) root_child_0_child_0_child_2_child_0.isMask = false;
root_child_0_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_2_child_0.strokeWeight = 1;
root_child_0_child_0_child_2_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_0_child_2_child_0) root_child_0_child_0_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_2_child_0) root_child_0_child_0_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_2_child_0) root_child_0_child_0_child_2_child_0.strokeMiterLimit = 4;
root_child_0_child_0_child_2_child_0.effects = [];
// Text Properties
root_child_0_child_0_child_2_child_0.characters = `Resources`;
root_child_0_child_0_child_2_child_0.fontSize = 16;
root_child_0_child_0_child_2_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_0_child_2_child_0.textAlignVertical = "CENTER";
root_child_0_child_0_child_2_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_0_child_2_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_0_child_2_child_0.lineHeight = {"unit":"PIXELS","value":21};
if ("textCase" in root_child_0_child_0_child_2_child_0) root_child_0_child_0_child_2_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_0_child_2_child_0) root_child_0_child_0_child_2_child_0.textDecoration = "NONE";
await this.setFont(root_child_0_child_0_child_2_child_0, {"family":"Open Sans","style":"Bold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_0_child_2_child_0, 0, 9, {"family":"Open Sans","style":"Bold"});
root_child_0_child_0_child_2_child_0.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_0_child_2_child_0.setRangeFontSize(0, 9, 16);
root_child_0_child_0_child_2.appendChild(root_child_0_child_0_child_2_child_0);
// Child Layout Props
root_child_0_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_0_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0_child_2_child_0, {"width":82,"height":21,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_0_child_0.appendChild(root_child_0_child_0_child_2);
// Child Layout Props
root_child_0_child_0_child_2.layoutAlign = "INHERIT";
root_child_0_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0_child_2, {"width":82,"height":21,"relativeTransform":[[1,0,79],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_0.appendChild(root_child_0_child_0);
// Child Layout Props
root_child_0_child_0.layoutAlign = "STRETCH";
root_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0, {"width":161,"height":21,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "INHERIT";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":161,"height":21,"relativeTransform":[[1,0,40],[0,1,9.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Frame 1838
const root_child_1 = figma.createFrame();
root_child_1.name = "Frame 1838";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1) root_child_1.isMask = false;
if ("clipsContent" in root_child_1) root_child_1.clipsContent = false;
if ("layoutMode" in root_child_1) {
    root_child_1.layoutMode = "HORIZONTAL";
    root_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1.counterAxisSizingMode = "FIXED";
    root_child_1.primaryAxisAlignItems = "MAX";
    root_child_1.counterAxisAlignItems = "CENTER";
    root_child_1.itemSpacing = 24;
    root_child_1.paddingTop = 0;
    root_child_1.paddingRight = 0;
    root_child_1.paddingBottom = 0;
    root_child_1.paddingLeft = 0;
}
root_child_1.fills = await this.hydratePaints([]);
root_child_1.strokes = await this.hydratePaints([]);
root_child_1.strokeWeight = 1;
root_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1) root_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1) root_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1) root_child_1.strokeMiterLimit = 4;
root_child_1.effects = [];
if ("cornerRadius" in root_child_1) root_child_1.cornerRadius = 0;

// Start Child: Notifications / notifications-none
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Notifications / notifications-none";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
if ("clipsContent" in root_child_1_child_0) root_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_0.fills = await this.hydratePaints([]);
root_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0.strokeWeight = 1;
root_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0) root_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0) root_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0) root_child_1_child_0.strokeMiterLimit = 4;
root_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0) root_child_1_child_0.cornerRadius = 0;

// Start Child: Vector
const root_child_1_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_Top_bar_assets_icon_Vector_858_8522_svg_14_999951362609863x19_192251205444336);
root_child_1_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_0_child_0 = figma.flatten([root_child_1_child_0_child_0_svgContainer]);
root_child_1_child_0_child_0.name = "Vector";
root_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.isMask = false;
root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokeWeight = 1;
root_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.cornerRadius = 0;
root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
applySizeAndTransform(root_child_1_child_0_child_0, {"width":14.999951362609863,"height":19.192251205444336,"relativeTransform":[[1,0,4.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1_child_0_child_0.x = 4.5;
root_child_1_child_0_child_0.y = 2.5;
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0, {"width":24,"height":24,"relativeTransform":[[1,0,749.62060546875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Frame 1612
const root_child_1_child_1 = figma.createFrame();
root_child_1_child_1.name = "Frame 1612";
root_child_1_child_1.visible = true;
root_child_1_child_1.opacity = 1;
root_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1) root_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1) root_child_1_child_1.isMask = false;
if ("clipsContent" in root_child_1_child_1) root_child_1_child_1.clipsContent = false;
if ("layoutMode" in root_child_1_child_1) {
    root_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1.itemSpacing = 16;
    root_child_1_child_1.paddingTop = 0;
    root_child_1_child_1.paddingRight = 0;
    root_child_1_child_1.paddingBottom = 0;
    root_child_1_child_1.paddingLeft = 0;
}
root_child_1_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1.strokeWeight = 1;
root_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1) root_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1) root_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1) root_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1) root_child_1_child_1.cornerRadius = 0;

// Start Child: Frame 1612
const root_child_1_child_1_child_0 = figma.createFrame();
root_child_1_child_1_child_0.name = "Frame 1612";
root_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.isMask = false;
if ("clipsContent" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_0) {
    root_child_1_child_1_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_0.itemSpacing = 16;
    root_child_1_child_1_child_0.paddingTop = 0;
    root_child_1_child_1_child_0.paddingRight = 0;
    root_child_1_child_1_child_0.paddingBottom = 0;
    root_child_1_child_1_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokeWeight = 1;
root_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.cornerRadius = 0;

// Start Child: Frame 1618
const root_child_1_child_1_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_0_child_0.name = "Frame 1618";
root_child_1_child_1_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.isMask = false;
if ("clipsContent" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_0_child_0) {
    root_child_1_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_0_child_0.itemSpacing = 4;
    root_child_1_child_1_child_0_child_0.paddingTop = 0;
    root_child_1_child_1_child_0_child_0.paddingRight = 0;
    root_child_1_child_1_child_0_child_0.paddingBottom = 0;
    root_child_1_child_1_child_0_child_0.paddingLeft = 0;
}
root_child_1_child_1_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0.strokeWeight = 1;
root_child_1_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.cornerRadius = 0;

// Start Child: pk-avatar
const root_child_1_child_1_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_0_child_0_child_0.name = "pk-avatar";
root_child_1_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.isMask = false;
if ("clipsContent" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_0_child_0_child_0) {
    root_child_1_child_1_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0_child_0.strokeWeight = 1;
root_child_1_child_1_child_0_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Ellipse 22
const root_child_1_child_1_child_0_child_0_child_0_child_0 = figma.createEllipse();
root_child_1_child_1_child_0_child_0_child_0_child_0.name = "Ellipse 22";
root_child_1_child_1_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.isMask = false;
root_child_1_child_1_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0_child_0_child_0.strokeWeight = 1;
root_child_1_child_1_child_0_child_0_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_0_child_0_child_0.appendChild(root_child_1_child_1_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_0_child_0_child_0_child_0, {"width":24,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1_child_1_child_0_child_0_child_0_child_0.x = 0;
root_child_1_child_1_child_0_child_0_child_0_child_0.y = 0;

// Start Child: FW
const root_child_1_child_1_child_0_child_0_child_0_child_1 = figma.createText();
root_child_1_child_1_child_0_child_0_child_0_child_1.name = "FW";
root_child_1_child_1_child_0_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.isMask = false;
root_child_1_child_1_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.2705882489681244,"g":0.3607843220233917,"b":0.40392157435417175},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0_child_0_child_1.strokeWeight = 2.473090410232544;
root_child_1_child_1_child_0_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_0_child_0_child_0_child_1.characters = `JD`;
root_child_1_child_1_child_0_child_0_child_0_child_1.fontSize = 14;
root_child_1_child_1_child_0_child_0_child_0_child_1.textAlignHorizontal = "CENTER";
root_child_1_child_1_child_0_child_0_child_0_child_1.textAlignVertical = "TOP";
root_child_1_child_1_child_0_child_0_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_0_child_0_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_1_child_0_child_0_child_0_child_1.lineHeight = {"unit":"PERCENT","value":150};
if ("textCase" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.textDecoration = "NONE";
await this.setFont(root_child_1_child_1_child_0_child_0_child_0_child_1, {"family":"Manrope","style":"Bold"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_0_child_0_child_0_child_1, 0, 2, {"family":"Manrope","style":"Bold"});
root_child_1_child_1_child_0_child_0_child_0_child_1.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.2705882489681244,"g":0.3607843220233917,"b":0.40392157435417175},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0_child_1.setRangeFontSize(0, 2, 14);
root_child_1_child_1_child_0_child_0_child_0.appendChild(root_child_1_child_1_child_0_child_0_child_0_child_1);
applySizeAndTransform(root_child_1_child_1_child_0_child_0_child_0_child_1, {"width":17,"height":21,"relativeTransform":[[1,0,3.5],[0,1,2]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1_child_1_child_0_child_0_child_0_child_1.x = 3.5;
root_child_1_child_1_child_0_child_0_child_0_child_1.y = 2;
root_child_1_child_1_child_0_child_0.appendChild(root_child_1_child_1_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_0_child_0, {"width":24,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: John Doe
const root_child_1_child_1_child_0_child_0_child_1 = figma.createText();
root_child_1_child_1_child_0_child_0_child_1.name = "John Doe";
root_child_1_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_1.isMask = false;
root_child_1_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0_child_1.strokeWeight = 1;
root_child_1_child_1_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_0_child_0_child_1.characters = `John Doe`;
root_child_1_child_1_child_0_child_0_child_1.fontSize = 14;
root_child_1_child_1_child_0_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_0_child_0_child_1.textAlignVertical = "CENTER";
root_child_1_child_1_child_0_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_0_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_1_child_0_child_0_child_1.lineHeight = {"unit":"PIXELS","value":21};
if ("textCase" in root_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_1.textDecoration = "NONE";
await this.setFont(root_child_1_child_1_child_0_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_0_child_0_child_1, 0, 8, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_0_child_0_child_1.setRangeFills(0, 8, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_1.setRangeFontSize(0, 8, 14);
root_child_1_child_1_child_0_child_0.appendChild(root_child_1_child_1_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_0_child_1, {"width":60,"height":21,"relativeTransform":[[1,0,28],[0,1,1.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_0, {"width":88,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Line 43
const root_child_1_child_1_child_0_child_1 = figma.createLine();
root_child_1_child_1_child_0_child_1.name = "Line 43";
root_child_1_child_1_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.isMask = false;
root_child_1_child_1_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_1.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_1.strokeWeight = 1;
root_child_1_child_1_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_1.effects = [];
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_0_child_1.layoutAlign = "STRETCH";
root_child_1_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_1, {"width":24,"height":1,"relativeTransform":[[-4.3711395392165286e-8,-1,105],[1,-4.3711395392165286e-8,2.1855697696082643e-8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_0.layoutAlign = "STRETCH";
root_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0, {"width":105,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_1);
// Child Layout Props
root_child_1_child_1.layoutAlign = "STRETCH";
root_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1, {"width":105,"height":24,"relativeTransform":[[1,0,797.62060546875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Navigation / Hamburger
const root_child_1_child_2 = figma.createFrame();
root_child_1_child_2.name = "Navigation / Hamburger";
root_child_1_child_2.visible = true;
root_child_1_child_2.opacity = 1;
root_child_1_child_2.locked = false;
if ("blendMode" in root_child_1_child_2) root_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2) root_child_1_child_2.isMask = false;
if ("clipsContent" in root_child_1_child_2) root_child_1_child_2.clipsContent = true;
if ("layoutMode" in root_child_1_child_2) {
    root_child_1_child_2.layoutMode = "NONE";
}
root_child_1_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_2.strokeWeight = 1;
root_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_2) root_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2) root_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2) root_child_1_child_2.strokeMiterLimit = 4;
root_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_2) root_child_1_child_2.cornerRadius = 0;

// Start Child: Union

// Boolean Child: Vector (Stroke)
const root_child_1_child_2_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_Top_bar_Synth_VectorStroke_2);
root_child_1_child_2_child_0_child_0_svgContainer.resize(20, 2);
const root_child_1_child_2_child_0_child_0 = figma.flatten([root_child_1_child_2_child_0_child_0_svgContainer]);
root_child_1_child_2_child_0_child_0.name = "Vector (Stroke)";
root_child_1_child_2_child_0_child_0.visible = true;
root_child_1_child_2_child_0_child_0.opacity = 1;
root_child_1_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.isMask = false;
root_child_1_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0_child_0.strokeWeight = 2;
root_child_1_child_2_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.cornerRadius = 0;
root_child_1_child_2_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}];
applySizeAndTransform(root_child_1_child_2_child_0_child_0, {"width":20,"height":2,"relativeTransform":[[1,0,2],[0,1,11]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0_child_0.x = 2;
root_child_1_child_2_child_0_child_0.y = 11;

// Boolean Child: Vector (Stroke)
const root_child_1_child_2_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_Top_bar_Synth_VectorStroke_3);
root_child_1_child_2_child_0_child_1_svgContainer.resize(20, 2);
const root_child_1_child_2_child_0_child_1 = figma.flatten([root_child_1_child_2_child_0_child_1_svgContainer]);
root_child_1_child_2_child_0_child_1.name = "Vector (Stroke)";
root_child_1_child_2_child_0_child_1.visible = true;
root_child_1_child_2_child_0_child_1.opacity = 1;
root_child_1_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.isMask = false;
root_child_1_child_2_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0_child_1.strokeWeight = 2;
root_child_1_child_2_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_2_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.cornerRadius = 0;
root_child_1_child_2_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}];
applySizeAndTransform(root_child_1_child_2_child_0_child_1, {"width":20,"height":2,"relativeTransform":[[1,0,2],[0,1,5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0_child_1.x = 2;
root_child_1_child_2_child_0_child_1.y = 5;

// Boolean Child: Vector (Stroke)
const root_child_1_child_2_child_0_child_2_svgContainer = figma.createNodeFromSvg(SVG_Top_bar_Synth_VectorStroke_4);
root_child_1_child_2_child_0_child_2_svgContainer.resize(20, 2);
const root_child_1_child_2_child_0_child_2 = figma.flatten([root_child_1_child_2_child_0_child_2_svgContainer]);
root_child_1_child_2_child_0_child_2.name = "Vector (Stroke)";
root_child_1_child_2_child_0_child_2.visible = true;
root_child_1_child_2_child_0_child_2.opacity = 1;
root_child_1_child_2_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_2) root_child_1_child_2_child_0_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_2) root_child_1_child_2_child_0_child_2.isMask = false;
root_child_1_child_2_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0_child_2.strokeWeight = 2;
root_child_1_child_2_child_0_child_2.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_0_child_2) root_child_1_child_2_child_0_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_2) root_child_1_child_2_child_0_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_2) root_child_1_child_2_child_0_child_2.strokeMiterLimit = 4;
root_child_1_child_2_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0_child_2) root_child_1_child_2_child_0_child_2.cornerRadius = 0;
root_child_1_child_2_child_0_child_2.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}];
applySizeAndTransform(root_child_1_child_2_child_0_child_2, {"width":20,"height":2,"relativeTransform":[[1,0,2],[0,1,17]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0_child_2.x = 2;
root_child_1_child_2_child_0_child_2.y = 17;
const root_child_1_child_2_child_0 = figma.union([root_child_1_child_2_child_0_child_0, root_child_1_child_2_child_0_child_1, root_child_1_child_2_child_0_child_2], figma.currentPage);
root_child_1_child_2_child_0.name = "Union";
root_child_1_child_2_child_0.visible = true;
root_child_1_child_2_child_0.opacity = 1;
root_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.isMask = false;
root_child_1_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0.strokeWeight = 2;
root_child_1_child_2_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeCap = "ROUND";
if ("strokeJoin" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeJoin = "ROUND";
if ("strokeMiterLimit" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeMiterLimit = 4;
root_child_1_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.cornerRadius = 0;
root_child_1_child_2.appendChild(root_child_1_child_2_child_0);
applySizeAndTransform(root_child_1_child_2_child_0, {"width":20,"height":14,"relativeTransform":[[1,0,2],[0,1,5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0.x = 2;
root_child_1_child_2_child_0.y = 5;
root_child_1.appendChild(root_child_1_child_2);
// Child Layout Props
root_child_1_child_2.layoutAlign = "INHERIT";
root_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2, {"width":24,"height":24,"relativeTransform":[[1,0,926.62060546875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "STRETCH";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":950.62060546875,"height":24,"relativeTransform":[[1,0,689.37939453125],[0,1,8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});


        applySizeAndTransform(root, {"width":1680,"height":40,"parentIsAutoLayout":false});

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

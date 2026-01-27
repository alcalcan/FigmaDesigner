import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

// SVG Imports
import SVG_SubSection_assets_icon_chevron_up_1042_4709_svg_12x7_400000095367432 from "../assets/SubSection_assets_icon_chevron_up_1042_4709_svg_12x7_400000095367432.svg";



type T2x3 = [[number, number, number], [number, number, number]];
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


export class SubSection extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "SubSection";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("maskType" in root) root.maskType = "ALPHA";
if ("clipsContent" in root) root.clipsContent = true;
if ("layoutMode" in root) {
    root.layoutMode = "VERTICAL";
    root.primaryAxisSizingMode = "AUTO";
    root.counterAxisSizingMode = "FIXED";
    root.primaryAxisAlignItems = "MIN";
    root.counterAxisAlignItems = "MIN";
    root.itemSpacing = 24;
    root.paddingTop = 24;
    root.paddingRight = 24;
    root.paddingBottom = 24;
    root.paddingLeft = 24;
    root.itemReverseZIndex = false;
    root.strokesIncludedInLayout = false;
}
root.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
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
root.effects = [{"type":"DROP_SHADOW","visible":true,"radius":6,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.11999999731779099},"offset":{"x":0,"y":2},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
if ("cornerRadius" in root) root.cornerRadius = 8;

// Start Child: Header
const root_child_0 = figma.createFrame();
root_child_0.name = "Header";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0) root_child_0.clipsContent = true;
if ("layoutMode" in root_child_0) {
    root_child_0.layoutMode = "HORIZONTAL";
    root_child_0.primaryAxisSizingMode = "FIXED";
    root_child_0.counterAxisSizingMode = "AUTO";
    root_child_0.primaryAxisAlignItems = "MIN";
    root_child_0.counterAxisAlignItems = "CENTER";
    root_child_0.itemSpacing = 24;
    root_child_0.paddingTop = 0;
    root_child_0.paddingRight = 0;
    root_child_0.paddingBottom = 0;
    root_child_0.paddingLeft = 0;
    root_child_0.itemReverseZIndex = false;
    root_child_0.strokesIncludedInLayout = false;
}
root_child_0.fills = await this.hydratePaints([]);
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

// Start Child: Subject
const root_child_0_child_0 = figma.createText();
root_child_0_child_0.name = "Subject";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0) root_child_0_child_0.maskType = "ALPHA";
root_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0.strokeWeight = 1;
root_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_0) root_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0) root_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0) root_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0.effects = [];
// Text Properties
root_child_0_child_0.characters = `Subject`;
root_child_0_child_0.fontSize = 20;
root_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_0.textAlignVertical = "TOP";
root_child_0_child_0.textAutoResize = "HEIGHT";
root_child_0_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_0_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_0_child_0) root_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_0) root_child_0_child_0.textDecoration = "NONE";
root_child_0_child_0.paragraphSpacing = 0;
root_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_0, 0, 7, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_0.setRangeFills(0, 7, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_0_child_0.setRangeFontSize(0, 7, 20);
root_child_0.appendChild(root_child_0_child_0);
// Child Layout Props
root_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_0, {"width":1188,"height":27,"relativeTransform":[[1,0,0],[0,1,6.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Badge
const root_child_0_child_1 = figma.createFrame();
root_child_0_child_1.name = "Badge";
root_child_0_child_1.visible = true;
root_child_0_child_1.opacity = 1;
root_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1) root_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1) root_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_1) root_child_0_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1) root_child_0_child_1.clipsContent = true;
if ("layoutMode" in root_child_0_child_1) {
    root_child_0_child_1.layoutMode = "HORIZONTAL";
    root_child_0_child_1.primaryAxisSizingMode = "AUTO";
    root_child_0_child_1.counterAxisSizingMode = "AUTO";
    root_child_0_child_1.primaryAxisAlignItems = "MIN";
    root_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_0_child_1.itemSpacing = 8;
    root_child_0_child_1.paddingTop = 4;
    root_child_0_child_1.paddingRight = 16;
    root_child_0_child_1.paddingBottom = 4;
    root_child_0_child_1.paddingLeft = 16;
    root_child_0_child_1.itemReverseZIndex = false;
    root_child_0_child_1.strokesIncludedInLayout = false;
}
root_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_1.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.6299999952316284,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_0_child_1.strokeWeight = 1;
root_child_0_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1) root_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1) root_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1) root_child_0_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_1) root_child_0_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_1) root_child_0_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_1) root_child_0_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_1) root_child_0_child_1.strokeLeftWeight = 1;
root_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_1) root_child_0_child_1.cornerRadius = 100;

// Start Child: Subjects
const root_child_0_child_1_child_0 = figma.createText();
root_child_0_child_1_child_0.name = "Subjects";
root_child_0_child_1_child_0.visible = true;
root_child_0_child_1_child_0.opacity = 1;
root_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.maskType = "ALPHA";
root_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0.strokeWeight = 1;
root_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_0_child_1_child_0.characters = `Subjects`;
root_child_0_child_1_child_0.fontSize = 14;
root_child_0_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_0.textAlignVertical = "TOP";
root_child_0_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_0_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.textDecoration = "NONE";
root_child_0_child_1_child_0.paragraphSpacing = 0;
root_child_0_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_0, {"family":"Manrope","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_0, 0, 8, {"family":"Manrope","style":"Regular"});
root_child_0_child_1_child_0.setRangeFills(0, 8, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_1_child_0.setRangeFontSize(0, 8, 14);
root_child_0_child_1.appendChild(root_child_0_child_1_child_0);
// Child Layout Props
root_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_0, {"width":58,"height":19,"relativeTransform":[[1,0,16],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: 10
const root_child_0_child_1_child_1 = figma.createText();
root_child_0_child_1_child_1.name = "10";
root_child_0_child_1_child_1.visible = true;
root_child_0_child_1_child_1.opacity = 1;
root_child_0_child_1_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.maskType = "ALPHA";
root_child_0_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_1.strokeWeight = 1;
root_child_0_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeMiterLimit = 4;
root_child_0_child_1_child_1.effects = [];
// Text Properties
root_child_0_child_1_child_1.characters = `10`;
root_child_0_child_1_child_1.fontSize = 16;
root_child_0_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_1.textAlignVertical = "TOP";
root_child_0_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_1_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_0_child_1_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.textDecoration = "NONE";
root_child_0_child_1_child_1.paragraphSpacing = 0;
root_child_0_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_1, {"family":"Manrope","style":"Bold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_1, 0, 2, {"family":"Manrope","style":"Bold"});
root_child_0_child_1_child_1.setRangeFills(0, 2, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_0_child_1_child_1.setRangeFontSize(0, 2, 16);
root_child_0_child_1.appendChild(root_child_0_child_1_child_1);
// Child Layout Props
root_child_0_child_1_child_1.layoutAlign = "INHERIT";
root_child_0_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_1, {"width":18,"height":22,"relativeTransform":[[1,0,82],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_1);
// Child Layout Props
root_child_0_child_1.layoutAlign = "INHERIT";
root_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1, {"width":116,"height":30,"relativeTransform":[[1,0,1212],[0,1,5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Chevron Container
const root_child_0_child_2 = figma.createFrame();
root_child_0_child_2.name = "Chevron Container";
root_child_0_child_2.visible = true;
root_child_0_child_2.opacity = 1;
root_child_0_child_2.locked = false;
if ("blendMode" in root_child_0_child_2) root_child_0_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2) root_child_0_child_2.isMask = false;
if ("maskType" in root_child_0_child_2) root_child_0_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_2) root_child_0_child_2.clipsContent = true;
if ("layoutMode" in root_child_0_child_2) {
    root_child_0_child_2.layoutMode = "NONE";
}
root_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9399999976158142,"g":0.949999988079071,"b":0.9700000286102295},"boundVariables":{}}]);
root_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_2.strokeWeight = 1;
root_child_0_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2) root_child_0_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2) root_child_0_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2) root_child_0_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_2) root_child_0_child_2.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_2) root_child_0_child_2.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_2) root_child_0_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_2) root_child_0_child_2.strokeLeftWeight = 1;
root_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_2) root_child_0_child_2.cornerRadius = 100;

// Start Child: chevron-up
const root_child_0_child_2_child_0_svgContainer = figma.createNodeFromSvg(SVG_SubSection_assets_icon_chevron_up_1042_4709_svg_12x7_400000095367432);
root_child_0_child_2_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_2_child_0 = figma.flatten([root_child_0_child_2_child_0_svgContainer]);
root_child_0_child_2_child_0.name = "chevron-up";
root_child_0_child_2_child_0.visible = true;
root_child_0_child_2_child_0.opacity = 1;
root_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.isMask = false;
if ("maskType" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.maskType = "ALPHA";
root_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0.strokeWeight = 1;
root_child_0_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.cornerRadius = 0;
root_child_0_child_2.appendChild(root_child_0_child_2_child_0);
applySizeAndTransform(root_child_0_child_2_child_0, {"width":12,"height":7.400000095367432,"relativeTransform":[[1,0,14],[0,1,16.299999237060547]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_2_child_0.x = 14;
root_child_0_child_2_child_0.y = 16.299999237060547;
root_child_0.appendChild(root_child_0_child_2);
// Child Layout Props
root_child_0_child_2.layoutAlign = "INHERIT";
root_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2, {"width":40,"height":40,"relativeTransform":[[1,0,1352],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "STRETCH";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":1392,"height":40,"relativeTransform":[[1,0,24],[0,1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Content Area
const root_child_1 = figma.createFrame();
root_child_1.name = "Content Area";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1) root_child_1.isMask = false;
if ("maskType" in root_child_1) root_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1) root_child_1.clipsContent = true;
if ("layoutMode" in root_child_1) {
    root_child_1.layoutMode = "HORIZONTAL";
    root_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1.counterAxisSizingMode = "AUTO";
    root_child_1.primaryAxisAlignItems = "MIN";
    root_child_1.counterAxisAlignItems = "MIN";
    root_child_1.itemSpacing = 32;
    root_child_1.paddingTop = 0;
    root_child_1.paddingRight = 0;
    root_child_1.paddingBottom = 0;
    root_child_1.paddingLeft = 0;
    root_child_1.itemReverseZIndex = false;
    root_child_1.strokesIncludedInLayout = false;
}
root_child_1.fills = await this.hydratePaints([]);
root_child_1.strokes = await this.hydratePaints([]);
root_child_1.strokeWeight = 1;
root_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1) root_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1) root_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1) root_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1) root_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1) root_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1) root_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1) root_child_1.strokeLeftWeight = 1;
root_child_1.effects = [];
if ("cornerRadius" in root_child_1) root_child_1.cornerRadius = 0;

// Start Child: Column 1
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Column 1";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_0) root_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0) root_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "VERTICAL";
    root_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0.counterAxisAlignItems = "MIN";
    root_child_1_child_0.itemSpacing = 16;
    root_child_1_child_0.paddingTop = 0;
    root_child_1_child_0.paddingRight = 0;
    root_child_1_child_0.paddingBottom = 0;
    root_child_1_child_0.paddingLeft = 0;
    root_child_1_child_0.itemReverseZIndex = false;
    root_child_1_child_0.strokesIncludedInLayout = false;
}
root_child_1_child_0.fills = await this.hydratePaints([]);
root_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0.strokeWeight = 1;
root_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0) root_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0) root_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0) root_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0) root_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0) root_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0) root_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0) root_child_1_child_0.strokeLeftWeight = 1;
root_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0) root_child_1_child_0.cornerRadius = 0;

// Start Child: Checkbox Item
const root_child_1_child_0_child_0 = figma.createFrame();
root_child_1_child_0_child_0.name = "Checkbox Item";
root_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_0) {
    root_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_0.itemSpacing = 12;
    root_child_1_child_0_child_0.paddingTop = 0;
    root_child_1_child_0_child_0.paddingRight = 0;
    root_child_1_child_0_child_0.paddingBottom = 0;
    root_child_1_child_0_child_0.paddingLeft = 0;
    root_child_1_child_0_child_0.itemReverseZIndex = false;
    root_child_1_child_0_child_0.strokesIncludedInLayout = false;
}
root_child_1_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokeWeight = 1;
root_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeLeftWeight = 1;
root_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_0_child_0_child_0 = figma.createFrame();
root_child_1_child_0_child_0_child_0.name = "Checkbox";
root_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_0_child_0) {
    root_child_1_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0.strokeWeight = 1;
root_child_1_child_0_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeLeftWeight = 1;
root_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.cornerRadius = 4;
root_child_1_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_0_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Anti-Doping, Medical and Health
const root_child_1_child_0_child_0_child_1 = figma.createText();
root_child_1_child_0_child_0_child_1.name = "Anti-Doping, Medical and Health";
root_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_1.strokeWeight = 1;
root_child_1_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_0_child_0_child_1.characters = `Anti-Doping, Medical and Health`;
root_child_1_child_0_child_0_child_1.fontSize = 16;
root_child_1_child_0_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_0_child_0_child_1.textAlignVertical = "TOP";
root_child_1_child_0_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_0_child_0_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_0_child_0_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.textDecoration = "NONE";
root_child_1_child_0_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_0_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_0_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_0_child_0_child_1, 0, 31, {"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_0_child_1.setRangeFills(0, 31, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_1.setRangeFontSize(0, 31, 16);
root_child_1_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_0_child_1, {"width":241,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_0, {"width":273,"height":22,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Checkbox Item
const root_child_1_child_0_child_1 = figma.createFrame();
root_child_1_child_0_child_1.name = "Checkbox Item";
root_child_1_child_0_child_1.visible = true;
root_child_1_child_0_child_1.opacity = 1;
root_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_1) {
    root_child_1_child_0_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_1.itemSpacing = 12;
    root_child_1_child_0_child_1.paddingTop = 0;
    root_child_1_child_0_child_1.paddingRight = 0;
    root_child_1_child_0_child_1.paddingBottom = 0;
    root_child_1_child_0_child_1.paddingLeft = 0;
    root_child_1_child_0_child_1.itemReverseZIndex = false;
    root_child_1_child_0_child_1.strokesIncludedInLayout = false;
}
root_child_1_child_0_child_1.fills = await this.hydratePaints([]);
root_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_1.strokeWeight = 1;
root_child_1_child_0_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.strokeLeftWeight = 1;
root_child_1_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_0_child_1_child_0 = figma.createFrame();
root_child_1_child_0_child_1_child_0.name = "Checkbox";
root_child_1_child_0_child_1_child_0.visible = true;
root_child_1_child_0_child_1_child_0.opacity = 1;
root_child_1_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_1_child_0) {
    root_child_1_child_0_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_0.strokeWeight = 1;
root_child_1_child_0_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.strokeLeftWeight = 1;
root_child_1_child_0_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.cornerRadius = 4;
root_child_1_child_0_child_1.appendChild(root_child_1_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Communication, PR and Media
const root_child_1_child_0_child_1_child_1 = figma.createText();
root_child_1_child_0_child_1_child_1.name = "Communication, PR and Media";
root_child_1_child_0_child_1_child_1.visible = true;
root_child_1_child_0_child_1_child_1.opacity = 1;
root_child_1_child_0_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.maskType = "ALPHA";
root_child_1_child_0_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_1_child_1.strokeWeight = 1;
root_child_1_child_0_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_0_child_1_child_1.effects = [];
// Text Properties
root_child_1_child_0_child_1_child_1.characters = `Communication, PR and Media`;
root_child_1_child_0_child_1_child_1.fontSize = 16;
root_child_1_child_0_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_0_child_1_child_1.textAlignVertical = "TOP";
root_child_1_child_0_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_0_child_1_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_0_child_1_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.textDecoration = "NONE";
root_child_1_child_0_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_0_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_0_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_0_child_1_child_1, 0, 27, {"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_1_child_1.setRangeFills(0, 27, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_1.setRangeFontSize(0, 27, 16);
root_child_1_child_0_child_1.appendChild(root_child_1_child_0_child_1_child_1);
// Child Layout Props
root_child_1_child_0_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_1_child_1, {"width":230,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_1, {"width":262,"height":22,"relativeTransform":[[1,0,0],[0,1,38]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Checkbox Item
const root_child_1_child_0_child_2 = figma.createFrame();
root_child_1_child_0_child_2.name = "Checkbox Item";
root_child_1_child_0_child_2.visible = true;
root_child_1_child_0_child_2.opacity = 1;
root_child_1_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.isMask = false;
if ("maskType" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_2) {
    root_child_1_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_2.itemSpacing = 12;
    root_child_1_child_0_child_2.paddingTop = 0;
    root_child_1_child_0_child_2.paddingRight = 0;
    root_child_1_child_0_child_2.paddingBottom = 0;
    root_child_1_child_0_child_2.paddingLeft = 0;
    root_child_1_child_0_child_2.itemReverseZIndex = false;
    root_child_1_child_0_child_2.strokesIncludedInLayout = false;
}
root_child_1_child_0_child_2.fills = await this.hydratePaints([]);
root_child_1_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_2.strokeWeight = 1;
root_child_1_child_0_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.strokeLeftWeight = 1;
root_child_1_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_2) root_child_1_child_0_child_2.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_0_child_2_child_0 = figma.createFrame();
root_child_1_child_0_child_2_child_0.name = "Checkbox";
root_child_1_child_0_child_2_child_0.visible = true;
root_child_1_child_0_child_2_child_0.opacity = 1;
root_child_1_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_2_child_0) {
    root_child_1_child_0_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_2_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_2_child_0.strokeWeight = 1;
root_child_1_child_0_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.strokeLeftWeight = 1;
root_child_1_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_2_child_0) root_child_1_child_0_child_2_child_0.cornerRadius = 4;
root_child_1_child_0_child_2.appendChild(root_child_1_child_0_child_2_child_0);
// Child Layout Props
root_child_1_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_2_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Event and Volunteer Management
const root_child_1_child_0_child_2_child_1 = figma.createText();
root_child_1_child_0_child_2_child_1.name = "Event and Volunteer Management";
root_child_1_child_0_child_2_child_1.visible = true;
root_child_1_child_0_child_2_child_1.opacity = 1;
root_child_1_child_0_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_2_child_1) root_child_1_child_0_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_2_child_1) root_child_1_child_0_child_2_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_2_child_1) root_child_1_child_0_child_2_child_1.maskType = "ALPHA";
root_child_1_child_0_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_2_child_1.strokeWeight = 1;
root_child_1_child_0_child_2_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_0_child_2_child_1) root_child_1_child_0_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_2_child_1) root_child_1_child_0_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_2_child_1) root_child_1_child_0_child_2_child_1.strokeMiterLimit = 4;
root_child_1_child_0_child_2_child_1.effects = [];
// Text Properties
root_child_1_child_0_child_2_child_1.characters = `Event and Volunteer Management`;
root_child_1_child_0_child_2_child_1.fontSize = 16;
root_child_1_child_0_child_2_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_0_child_2_child_1.textAlignVertical = "TOP";
root_child_1_child_0_child_2_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_0_child_2_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_0_child_2_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_0_child_2_child_1) root_child_1_child_0_child_2_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_0_child_2_child_1) root_child_1_child_0_child_2_child_1.textDecoration = "NONE";
root_child_1_child_0_child_2_child_1.paragraphSpacing = 0;
root_child_1_child_0_child_2_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_0_child_2_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_0_child_2_child_1, 0, 30, {"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_2_child_1.setRangeFills(0, 30, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_2_child_1.setRangeFontSize(0, 30, 16);
root_child_1_child_0_child_2.appendChild(root_child_1_child_0_child_2_child_1);
// Child Layout Props
root_child_1_child_0_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_2_child_1, {"width":255,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_2);
// Child Layout Props
root_child_1_child_0_child_2.layoutAlign = "INHERIT";
root_child_1_child_0_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_2, {"width":287,"height":22,"relativeTransform":[[1,0,0],[0,1,76]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Checkbox Item
const root_child_1_child_0_child_3 = figma.createFrame();
root_child_1_child_0_child_3.name = "Checkbox Item";
root_child_1_child_0_child_3.visible = true;
root_child_1_child_0_child_3.opacity = 1;
root_child_1_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.isMask = false;
if ("maskType" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_3) {
    root_child_1_child_0_child_3.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_3.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_3.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_3.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_3.itemSpacing = 12;
    root_child_1_child_0_child_3.paddingTop = 0;
    root_child_1_child_0_child_3.paddingRight = 0;
    root_child_1_child_0_child_3.paddingBottom = 0;
    root_child_1_child_0_child_3.paddingLeft = 0;
    root_child_1_child_0_child_3.itemReverseZIndex = false;
    root_child_1_child_0_child_3.strokesIncludedInLayout = false;
}
root_child_1_child_0_child_3.fills = await this.hydratePaints([]);
root_child_1_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_3.strokeWeight = 1;
root_child_1_child_0_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.strokeLeftWeight = 1;
root_child_1_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_3) root_child_1_child_0_child_3.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_0_child_3_child_0 = figma.createFrame();
root_child_1_child_0_child_3_child_0.name = "Checkbox";
root_child_1_child_0_child_3_child_0.visible = true;
root_child_1_child_0_child_3_child_0.opacity = 1;
root_child_1_child_0_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_3_child_0) {
    root_child_1_child_0_child_3_child_0.layoutMode = "NONE";
}
root_child_1_child_0_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_3_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_3_child_0.strokeWeight = 1;
root_child_1_child_0_child_3_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.strokeLeftWeight = 1;
root_child_1_child_0_child_3_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_3_child_0) root_child_1_child_0_child_3_child_0.cornerRadius = 4;
root_child_1_child_0_child_3.appendChild(root_child_1_child_0_child_3_child_0);
// Child Layout Props
root_child_1_child_0_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_3_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Football and Social Responsibility
const root_child_1_child_0_child_3_child_1 = figma.createText();
root_child_1_child_0_child_3_child_1.name = "Football and Social Responsibility";
root_child_1_child_0_child_3_child_1.visible = true;
root_child_1_child_0_child_3_child_1.opacity = 1;
root_child_1_child_0_child_3_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_3_child_1) root_child_1_child_0_child_3_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_3_child_1) root_child_1_child_0_child_3_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_3_child_1) root_child_1_child_0_child_3_child_1.maskType = "ALPHA";
root_child_1_child_0_child_3_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_3_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_3_child_1.strokeWeight = 1;
root_child_1_child_0_child_3_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_0_child_3_child_1) root_child_1_child_0_child_3_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_3_child_1) root_child_1_child_0_child_3_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_3_child_1) root_child_1_child_0_child_3_child_1.strokeMiterLimit = 4;
root_child_1_child_0_child_3_child_1.effects = [];
// Text Properties
root_child_1_child_0_child_3_child_1.characters = `Football and Social Responsibility`;
root_child_1_child_0_child_3_child_1.fontSize = 16;
root_child_1_child_0_child_3_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_0_child_3_child_1.textAlignVertical = "TOP";
root_child_1_child_0_child_3_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_0_child_3_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_0_child_3_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_0_child_3_child_1) root_child_1_child_0_child_3_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_0_child_3_child_1) root_child_1_child_0_child_3_child_1.textDecoration = "NONE";
root_child_1_child_0_child_3_child_1.paragraphSpacing = 0;
root_child_1_child_0_child_3_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_0_child_3_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_0_child_3_child_1, 0, 34, {"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_3_child_1.setRangeFills(0, 34, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_0_child_3_child_1.setRangeFontSize(0, 34, 16);
root_child_1_child_0_child_3.appendChild(root_child_1_child_0_child_3_child_1);
// Child Layout Props
root_child_1_child_0_child_3_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_3_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_3_child_1, {"width":248,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_3);
// Child Layout Props
root_child_1_child_0_child_3.layoutAlign = "INHERIT";
root_child_1_child_0_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_3, {"width":280,"height":22,"relativeTransform":[[1,0,0],[0,1,114]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_0, {"width":442.6666564941406,"height":136,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Column 2
const root_child_1_child_1 = figma.createFrame();
root_child_1_child_1.name = "Column 2";
root_child_1_child_1.visible = true;
root_child_1_child_1.opacity = 1;
root_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1) root_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1) root_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1) root_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1) root_child_1_child_1.clipsContent = true;
if ("layoutMode" in root_child_1_child_1) {
    root_child_1_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1.counterAxisAlignItems = "MIN";
    root_child_1_child_1.itemSpacing = 16;
    root_child_1_child_1.paddingTop = 0;
    root_child_1_child_1.paddingRight = 0;
    root_child_1_child_1.paddingBottom = 0;
    root_child_1_child_1.paddingLeft = 0;
    root_child_1_child_1.itemReverseZIndex = false;
    root_child_1_child_1.strokesIncludedInLayout = false;
}
root_child_1_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1.strokeWeight = 1;
root_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1) root_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1) root_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1) root_child_1_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1) root_child_1_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1) root_child_1_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1) root_child_1_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1) root_child_1_child_1.strokeLeftWeight = 1;
root_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1) root_child_1_child_1.cornerRadius = 0;

// Start Child: Checkbox Item
const root_child_1_child_1_child_0 = figma.createFrame();
root_child_1_child_1_child_0.name = "Checkbox Item";
root_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_0) {
    root_child_1_child_1_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_0.itemSpacing = 12;
    root_child_1_child_1_child_0.paddingTop = 0;
    root_child_1_child_1_child_0.paddingRight = 0;
    root_child_1_child_1_child_0.paddingBottom = 0;
    root_child_1_child_1_child_0.paddingLeft = 0;
    root_child_1_child_1_child_0.itemReverseZIndex = false;
    root_child_1_child_1_child_0.strokesIncludedInLayout = false;
}
root_child_1_child_1_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokeWeight = 1;
root_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeLeftWeight = 1;
root_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_1_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_0_child_0.name = "Checkbox";
root_child_1_child_1_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_0_child_0) {
    root_child_1_child_1_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0.strokeWeight = 1;
root_child_1_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.strokeLeftWeight = 1;
root_child_1_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.cornerRadius = 4;
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Football Development
const root_child_1_child_1_child_0_child_1 = figma.createText();
root_child_1_child_1_child_0_child_1.name = "Football Development";
root_child_1_child_1_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.maskType = "ALPHA";
root_child_1_child_1_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_1.strokeWeight = 1;
root_child_1_child_1_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_0_child_1.characters = `Football Development`;
root_child_1_child_1_child_0_child_1.fontSize = 16;
root_child_1_child_1_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_0_child_1.textAlignVertical = "TOP";
root_child_1_child_1_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_0_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_0_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.textDecoration = "NONE";
root_child_1_child_1_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_0_child_1, 0, 20, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_0_child_1.setRangeFills(0, 20, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_1.setRangeFontSize(0, 20, 16);
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_1, {"width":165,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0, {"width":197,"height":22,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Checkbox Item
const root_child_1_child_1_child_1 = figma.createFrame();
root_child_1_child_1_child_1.name = "Checkbox Item";
root_child_1_child_1_child_1.visible = true;
root_child_1_child_1_child_1.opacity = 1;
root_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_1) {
    root_child_1_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1.itemSpacing = 12;
    root_child_1_child_1_child_1.paddingTop = 0;
    root_child_1_child_1_child_1.paddingRight = 0;
    root_child_1_child_1_child_1.paddingBottom = 0;
    root_child_1_child_1_child_1.paddingLeft = 0;
    root_child_1_child_1_child_1.itemReverseZIndex = false;
    root_child_1_child_1_child_1.strokesIncludedInLayout = false;
}
root_child_1_child_1_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1.strokeWeight = 1;
root_child_1_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeLeftWeight = 1;
root_child_1_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_1_child_1_child_0 = figma.createFrame();
root_child_1_child_1_child_1_child_0.name = "Checkbox";
root_child_1_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_1_child_0) {
    root_child_1_child_1_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0.strokeWeight = 1;
root_child_1_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeLeftWeight = 1;
root_child_1_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.cornerRadius = 4;
root_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Governance, Organisation of Football and Sport
const root_child_1_child_1_child_1_child_1 = figma.createText();
root_child_1_child_1_child_1_child_1.name = "Governance, Organisation of Football and Sport";
root_child_1_child_1_child_1_child_1.visible = true;
root_child_1_child_1_child_1_child_1.opacity = 1;
root_child_1_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.maskType = "ALPHA";
root_child_1_child_1_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_1.strokeWeight = 1;
root_child_1_child_1_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_1_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_1_child_1.characters = `Governance, Organisation of Football and Sport`;
root_child_1_child_1_child_1_child_1.fontSize = 16;
root_child_1_child_1_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_1_child_1.textAlignVertical = "TOP";
root_child_1_child_1_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_1_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_1_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.textDecoration = "NONE";
root_child_1_child_1_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_1_child_1, 0, 46, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_1_child_1.setRangeFills(0, 46, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_1.setRangeFontSize(0, 46, 16);
root_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_1);
// Child Layout Props
root_child_1_child_1_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_1, {"width":355,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_1);
// Child Layout Props
root_child_1_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1, {"width":387,"height":22,"relativeTransform":[[1,0,0],[0,1,38]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Checkbox Item
const root_child_1_child_1_child_2 = figma.createFrame();
root_child_1_child_1_child_2.name = "Checkbox Item";
root_child_1_child_1_child_2.visible = true;
root_child_1_child_1_child_2.opacity = 1;
root_child_1_child_1_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.isMask = false;
if ("maskType" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_2) {
    root_child_1_child_1_child_2.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_2.itemSpacing = 12;
    root_child_1_child_1_child_2.paddingTop = 0;
    root_child_1_child_1_child_2.paddingRight = 0;
    root_child_1_child_1_child_2.paddingBottom = 0;
    root_child_1_child_1_child_2.paddingLeft = 0;
    root_child_1_child_1_child_2.itemReverseZIndex = false;
    root_child_1_child_1_child_2.strokesIncludedInLayout = false;
}
root_child_1_child_1_child_2.fills = await this.hydratePaints([]);
root_child_1_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2.strokeWeight = 1;
root_child_1_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.strokeLeftWeight = 1;
root_child_1_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_1_child_2_child_0 = figma.createFrame();
root_child_1_child_1_child_2_child_0.name = "Checkbox";
root_child_1_child_1_child_2_child_0.visible = true;
root_child_1_child_1_child_2_child_0.opacity = 1;
root_child_1_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_2_child_0) {
    root_child_1_child_1_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_0.strokeWeight = 1;
root_child_1_child_1_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.strokeLeftWeight = 1;
root_child_1_child_1_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.cornerRadius = 4;
root_child_1_child_1_child_2.appendChild(root_child_1_child_1_child_2_child_0);
// Child Layout Props
root_child_1_child_1_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Innovation
const root_child_1_child_1_child_2_child_1 = figma.createText();
root_child_1_child_1_child_2_child_1.name = "Innovation";
root_child_1_child_1_child_2_child_1.visible = true;
root_child_1_child_1_child_2_child_1.opacity = 1;
root_child_1_child_1_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.maskType = "ALPHA";
root_child_1_child_1_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1.strokeWeight = 1;
root_child_1_child_1_child_2_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_2_child_1.characters = `Innovation`;
root_child_1_child_1_child_2_child_1.fontSize = 16;
root_child_1_child_1_child_2_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_2_child_1.textAlignVertical = "TOP";
root_child_1_child_1_child_2_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_2_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_2_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.textDecoration = "NONE";
root_child_1_child_1_child_2_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_2_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_2_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_2_child_1, 0, 10, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_2_child_1.setRangeFills(0, 10, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_1.setRangeFontSize(0, 10, 16);
root_child_1_child_1_child_2.appendChild(root_child_1_child_1_child_2_child_1);
// Child Layout Props
root_child_1_child_1_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1, {"width":80,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_2);
// Child Layout Props
root_child_1_child_1_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2, {"width":112,"height":22,"relativeTransform":[[1,0,0],[0,1,76]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Checkbox Item
const root_child_1_child_1_child_3 = figma.createFrame();
root_child_1_child_1_child_3.name = "Checkbox Item";
root_child_1_child_1_child_3.visible = true;
root_child_1_child_1_child_3.opacity = 1;
root_child_1_child_1_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.isMask = false;
if ("maskType" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_3) {
    root_child_1_child_1_child_3.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_3.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_3.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_3.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_3.itemSpacing = 12;
    root_child_1_child_1_child_3.paddingTop = 0;
    root_child_1_child_1_child_3.paddingRight = 0;
    root_child_1_child_1_child_3.paddingBottom = 0;
    root_child_1_child_1_child_3.paddingLeft = 0;
    root_child_1_child_1_child_3.itemReverseZIndex = false;
    root_child_1_child_1_child_3.strokesIncludedInLayout = false;
}
root_child_1_child_1_child_3.fills = await this.hydratePaints([]);
root_child_1_child_1_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3.strokeWeight = 1;
root_child_1_child_1_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.strokeLeftWeight = 1;
root_child_1_child_1_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3) root_child_1_child_1_child_3.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_1_child_3_child_0 = figma.createFrame();
root_child_1_child_1_child_3_child_0.name = "Checkbox";
root_child_1_child_1_child_3_child_0.visible = true;
root_child_1_child_1_child_3_child_0.opacity = 1;
root_child_1_child_1_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_3_child_0) {
    root_child_1_child_1_child_3_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_0.strokeWeight = 1;
root_child_1_child_1_child_3_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.strokeLeftWeight = 1;
root_child_1_child_1_child_3_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_3_child_0) root_child_1_child_1_child_3_child_0.cornerRadius = 4;
root_child_1_child_1_child_3.appendChild(root_child_1_child_1_child_3_child_0);
// Child Layout Props
root_child_1_child_1_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Leadership
const root_child_1_child_1_child_3_child_1 = figma.createText();
root_child_1_child_1_child_3_child_1.name = "Leadership";
root_child_1_child_1_child_3_child_1.visible = true;
root_child_1_child_1_child_3_child_1.opacity = 1;
root_child_1_child_1_child_3_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_3_child_1) root_child_1_child_1_child_3_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_3_child_1) root_child_1_child_1_child_3_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_3_child_1) root_child_1_child_1_child_3_child_1.maskType = "ALPHA";
root_child_1_child_1_child_3_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_3_child_1.strokeWeight = 1;
root_child_1_child_1_child_3_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_3_child_1) root_child_1_child_1_child_3_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_3_child_1) root_child_1_child_1_child_3_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_3_child_1) root_child_1_child_1_child_3_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_3_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_3_child_1.characters = `Leadership`;
root_child_1_child_1_child_3_child_1.fontSize = 16;
root_child_1_child_1_child_3_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_3_child_1.textAlignVertical = "TOP";
root_child_1_child_1_child_3_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_3_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_3_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_3_child_1) root_child_1_child_1_child_3_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_3_child_1) root_child_1_child_1_child_3_child_1.textDecoration = "NONE";
root_child_1_child_1_child_3_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_3_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_3_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_3_child_1, 0, 10, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_3_child_1.setRangeFills(0, 10, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_1_child_3_child_1.setRangeFontSize(0, 10, 16);
root_child_1_child_1_child_3.appendChild(root_child_1_child_1_child_3_child_1);
// Child Layout Props
root_child_1_child_1_child_3_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_3_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3_child_1, {"width":83,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_3);
// Child Layout Props
root_child_1_child_1_child_3.layoutAlign = "INHERIT";
root_child_1_child_1_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_3, {"width":115,"height":22,"relativeTransform":[[1,0,0],[0,1,114]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_1);
// Child Layout Props
root_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1, {"width":442.66668701171875,"height":136,"relativeTransform":[[1,0,474.6666564941406],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Column 3
const root_child_1_child_2 = figma.createFrame();
root_child_1_child_2.name = "Column 3";
root_child_1_child_2.visible = true;
root_child_1_child_2.opacity = 1;
root_child_1_child_2.locked = false;
if ("blendMode" in root_child_1_child_2) root_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2) root_child_1_child_2.isMask = false;
if ("maskType" in root_child_1_child_2) root_child_1_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2) root_child_1_child_2.clipsContent = true;
if ("layoutMode" in root_child_1_child_2) {
    root_child_1_child_2.layoutMode = "VERTICAL";
    root_child_1_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_2.counterAxisSizingMode = "FIXED";
    root_child_1_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_2.counterAxisAlignItems = "MIN";
    root_child_1_child_2.itemSpacing = 16;
    root_child_1_child_2.paddingTop = 0;
    root_child_1_child_2.paddingRight = 0;
    root_child_1_child_2.paddingBottom = 0;
    root_child_1_child_2.paddingLeft = 0;
    root_child_1_child_2.itemReverseZIndex = false;
    root_child_1_child_2.strokesIncludedInLayout = false;
}
root_child_1_child_2.fills = await this.hydratePaints([]);
root_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_2.strokeWeight = 1;
root_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_2) root_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2) root_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2) root_child_1_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_2) root_child_1_child_2.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_2) root_child_1_child_2.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_2) root_child_1_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_2) root_child_1_child_2.strokeLeftWeight = 1;
root_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_2) root_child_1_child_2.cornerRadius = 0;

// Start Child: Checkbox Item
const root_child_1_child_2_child_0 = figma.createFrame();
root_child_1_child_2_child_0.name = "Checkbox Item";
root_child_1_child_2_child_0.visible = true;
root_child_1_child_2_child_0.opacity = 1;
root_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_2_child_0) {
    root_child_1_child_2_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_2_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_2_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_2_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_2_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_2_child_0.itemSpacing = 12;
    root_child_1_child_2_child_0.paddingTop = 0;
    root_child_1_child_2_child_0.paddingRight = 0;
    root_child_1_child_2_child_0.paddingBottom = 0;
    root_child_1_child_2_child_0.paddingLeft = 0;
    root_child_1_child_2_child_0.itemReverseZIndex = false;
    root_child_1_child_2_child_0.strokesIncludedInLayout = false;
}
root_child_1_child_2_child_0.fills = await this.hydratePaints([]);
root_child_1_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0.strokeWeight = 1;
root_child_1_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeLeftWeight = 1;
root_child_1_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_2_child_0_child_0 = figma.createFrame();
root_child_1_child_2_child_0_child_0.name = "Checkbox";
root_child_1_child_2_child_0_child_0.visible = true;
root_child_1_child_2_child_0_child_0.opacity = 1;
root_child_1_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_2_child_0_child_0) {
    root_child_1_child_2_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_0.strokeWeight = 1;
root_child_1_child_2_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.strokeLeftWeight = 1;
root_child_1_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.cornerRadius = 4;
root_child_1_child_2_child_0.appendChild(root_child_1_child_2_child_0_child_0);
// Child Layout Props
root_child_1_child_2_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_2_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_0_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Marketing Sponsorship
const root_child_1_child_2_child_0_child_1 = figma.createText();
root_child_1_child_2_child_0_child_1.name = "Marketing Sponsorship";
root_child_1_child_2_child_0_child_1.visible = true;
root_child_1_child_2_child_0_child_1.opacity = 1;
root_child_1_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.maskType = "ALPHA";
root_child_1_child_2_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0_child_1.strokeWeight = 1;
root_child_1_child_2_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_2_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_2_child_0_child_1.characters = `Marketing Sponsorship`;
root_child_1_child_2_child_0_child_1.fontSize = 16;
root_child_1_child_2_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_2_child_0_child_1.textAlignVertical = "TOP";
root_child_1_child_2_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_2_child_0_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_2_child_0_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.textDecoration = "NONE";
root_child_1_child_2_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_2_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_2_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_2_child_0_child_1, 0, 21, {"family":"Open Sans","style":"Regular"});
root_child_1_child_2_child_0_child_1.setRangeFills(0, 21, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_1.setRangeFontSize(0, 21, 16);
root_child_1_child_2_child_0.appendChild(root_child_1_child_2_child_0_child_1);
// Child Layout Props
root_child_1_child_2_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_2_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_0_child_1, {"width":173,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_2.appendChild(root_child_1_child_2_child_0);
// Child Layout Props
root_child_1_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_0, {"width":205,"height":22,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Checkbox Item
const root_child_1_child_2_child_1 = figma.createFrame();
root_child_1_child_2_child_1.name = "Checkbox Item";
root_child_1_child_2_child_1.visible = true;
root_child_1_child_2_child_1.opacity = 1;
root_child_1_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.clipsContent = true;
if ("layoutMode" in root_child_1_child_2_child_1) {
    root_child_1_child_2_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_2_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_2_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_2_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_2_child_1.itemSpacing = 12;
    root_child_1_child_2_child_1.paddingTop = 0;
    root_child_1_child_2_child_1.paddingRight = 0;
    root_child_1_child_2_child_1.paddingBottom = 0;
    root_child_1_child_2_child_1.paddingLeft = 0;
    root_child_1_child_2_child_1.itemReverseZIndex = false;
    root_child_1_child_2_child_1.strokesIncludedInLayout = false;
}
root_child_1_child_2_child_1.fills = await this.hydratePaints([]);
root_child_1_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_1.strokeWeight = 1;
root_child_1_child_2_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.strokeLeftWeight = 1;
root_child_1_child_2_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_2_child_1_child_0 = figma.createFrame();
root_child_1_child_2_child_1_child_0.name = "Checkbox";
root_child_1_child_2_child_1_child_0.visible = true;
root_child_1_child_2_child_1_child_0.opacity = 1;
root_child_1_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_2_child_1_child_0) {
    root_child_1_child_2_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_0.strokeWeight = 1;
root_child_1_child_2_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.strokeLeftWeight = 1;
root_child_1_child_2_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.cornerRadius = 4;
root_child_1_child_2_child_1.appendChild(root_child_1_child_2_child_1_child_0);
// Child Layout Props
root_child_1_child_2_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Legal and Integrity
const root_child_1_child_2_child_1_child_1 = figma.createText();
root_child_1_child_2_child_1_child_1.name = "Legal and Integrity";
root_child_1_child_2_child_1_child_1.visible = true;
root_child_1_child_2_child_1_child_1.opacity = 1;
root_child_1_child_2_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.maskType = "ALPHA";
root_child_1_child_2_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_1_child_1.strokeWeight = 1;
root_child_1_child_2_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_2_child_1_child_1.effects = [];
// Text Properties
root_child_1_child_2_child_1_child_1.characters = `Legal and Integrity`;
root_child_1_child_2_child_1_child_1.fontSize = 16;
root_child_1_child_2_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_2_child_1_child_1.textAlignVertical = "TOP";
root_child_1_child_2_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_2_child_1_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_2_child_1_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.textDecoration = "NONE";
root_child_1_child_2_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_2_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_2_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_2_child_1_child_1, 0, 19, {"family":"Open Sans","style":"Regular"});
root_child_1_child_2_child_1_child_1.setRangeFills(0, 19, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23000000417232513},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_1.setRangeFontSize(0, 19, 16);
root_child_1_child_2_child_1.appendChild(root_child_1_child_2_child_1_child_1);
// Child Layout Props
root_child_1_child_2_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_2_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_1_child_1, {"width":138,"height":22,"relativeTransform":[[1,0,32],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_2.appendChild(root_child_1_child_2_child_1);
// Child Layout Props
root_child_1_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_1, {"width":170,"height":22,"relativeTransform":[[1,0,0],[0,1,38]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_2);
// Child Layout Props
root_child_1_child_2.layoutAlign = "INHERIT";
root_child_1_child_2.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_2, {"width":442.66668701171875,"height":60,"relativeTransform":[[1,0,949.3333740234375],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "STRETCH";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":1392,"height":136,"relativeTransform":[[1,0,24],[0,1,88]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":1440,"height":248,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

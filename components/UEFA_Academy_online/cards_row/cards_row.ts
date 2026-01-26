import { BaseComponent, ComponentProps } from "../../BaseComponent";
import IMG_img_1_png from "./assets/img_1.png";
import IMG_img_2_png from "./assets/img_2.png";
import IMG_img_3_png from "./assets/img_3.png";
import IMG_img_4_png from "./assets/img_4.png";


// SVG Assets



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


export class cards_row extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "cards_row";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("maskType" in root) root.maskType = "ALPHA";
if ("clipsContent" in root) root.clipsContent = false;
if ("layoutMode" in root) {
    root.layoutMode = "HORIZONTAL";
    root.primaryAxisSizingMode = "AUTO";
    root.counterAxisSizingMode = "AUTO";
    root.primaryAxisAlignItems = "MIN";
    root.counterAxisAlignItems = "MIN";
    root.itemSpacing = 24;
    root.paddingTop = 0;
    root.paddingRight = 0;
    root.paddingBottom = 0;
    root.paddingLeft = 0;
    root.itemReverseZIndex = false;
    root.strokesIncludedInLayout = false;
}
root.fills = await this.hydratePaints([]);
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

// Start Child: Frame 1635
const root_child_0 = figma.createFrame();
root_child_0.name = "Frame 1635";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0) root_child_0.clipsContent = false;
if ("layoutMode" in root_child_0) {
    root_child_0.layoutMode = "VERTICAL";
    root_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0.counterAxisSizingMode = "FIXED";
    root_child_0.primaryAxisAlignItems = "MIN";
    root_child_0.counterAxisAlignItems = "MIN";
    root_child_0.itemSpacing = 0;
    root_child_0.paddingTop = 0;
    root_child_0.paddingRight = 0;
    root_child_0.paddingBottom = 0;
    root_child_0.paddingLeft = 0;
    root_child_0.itemReverseZIndex = false;
    root_child_0.strokesIncludedInLayout = false;
}
root_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
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
root_child_0.effects = [{"type":"DROP_SHADOW","visible":true,"radius":6,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.11999999731779099},"offset":{"x":0,"y":2},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 4;

// Start Child: Rectangle 45
const root_child_0_child_0 = figma.createRectangle();
root_child_0_child_0.name = "Rectangle 45";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0) root_child_0_child_0.maskType = "ALPHA";
root_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,0.9831932783126831,0.008403373882174492]],"scalingFactor":1,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"53600b9b753bcf27aa29e70bd45039034c373525","assetRef":IMG_img_1_png}]);
root_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0.strokeWeight = 1;
root_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0) root_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0) root_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0) root_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_0) root_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_0) root_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_0) root_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_0) root_child_0_child_0.strokeLeftWeight = 1;
root_child_0_child_0.effects = [];
if ("topLeftRadius" in root_child_0_child_0) root_child_0_child_0.topLeftRadius = 4;
if ("topRightRadius" in root_child_0_child_0) root_child_0_child_0.topRightRadius = 4;
root_child_0.appendChild(root_child_0_child_0);
// Child Layout Props
root_child_0_child_0.layoutAlign = "STRETCH";
root_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0, {"width":343,"height":229,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1615
const root_child_0_child_1 = figma.createFrame();
root_child_0_child_1.name = "Frame 1615";
root_child_0_child_1.visible = true;
root_child_0_child_1.opacity = 1;
root_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1) root_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1) root_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_1) root_child_0_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1) root_child_0_child_1.clipsContent = true;
if ("layoutMode" in root_child_0_child_1) {
    root_child_0_child_1.layoutMode = "VERTICAL";
    root_child_0_child_1.primaryAxisSizingMode = "AUTO";
    root_child_0_child_1.counterAxisSizingMode = "FIXED";
    root_child_0_child_1.primaryAxisAlignItems = "CENTER";
    root_child_0_child_1.counterAxisAlignItems = "MIN";
    root_child_0_child_1.itemSpacing = 24;
    root_child_0_child_1.paddingTop = 24;
    root_child_0_child_1.paddingRight = 16;
    root_child_0_child_1.paddingBottom = 24;
    root_child_0_child_1.paddingLeft = 16;
    root_child_0_child_1.itemReverseZIndex = false;
    root_child_0_child_1.strokesIncludedInLayout = false;
}
root_child_0_child_1.fills = await this.hydratePaints([]);
root_child_0_child_1.strokes = await this.hydratePaints([]);
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
if ("cornerRadius" in root_child_0_child_1) root_child_0_child_1.cornerRadius = 0;

// Start Child: Frame 1644
const root_child_0_child_1_child_0 = figma.createFrame();
root_child_0_child_1_child_0.name = "Frame 1644";
root_child_0_child_1_child_0.visible = true;
root_child_0_child_1_child_0.opacity = 1;
root_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_0_child_1_child_0) {
    root_child_0_child_1_child_0.layoutMode = "VERTICAL";
    root_child_0_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_0_child_1_child_0.primaryAxisAlignItems = "CENTER";
    root_child_0_child_1_child_0.counterAxisAlignItems = "MIN";
    root_child_0_child_1_child_0.itemSpacing = 16;
    root_child_0_child_1_child_0.paddingTop = 0;
    root_child_0_child_1_child_0.paddingRight = 0;
    root_child_0_child_1_child_0.paddingBottom = 0;
    root_child_0_child_1_child_0.paddingLeft = 0;
    root_child_0_child_1_child_0.itemReverseZIndex = false;
    root_child_0_child_1_child_0.strokesIncludedInLayout = false;
}
root_child_0_child_1_child_0.fills = await this.hydratePaints([]);
root_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0.strokeWeight = 1;
root_child_0_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeLeftWeight = 1;
root_child_0_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.cornerRadius = 0;

// Start Child: Frame 1713
const root_child_0_child_1_child_0_child_0 = figma.createFrame();
root_child_0_child_1_child_0_child_0.name = "Frame 1713";
root_child_0_child_1_child_0_child_0.visible = true;
root_child_0_child_1_child_0_child_0.opacity = 1;
root_child_0_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_0_child_1_child_0_child_0) {
    root_child_0_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_0_child_1_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_0_child_1_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_0_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_0_child_1_child_0_child_0.itemSpacing = 16;
    root_child_0_child_1_child_0_child_0.paddingTop = 0;
    root_child_0_child_1_child_0_child_0.paddingRight = 0;
    root_child_0_child_1_child_0_child_0.paddingBottom = 0;
    root_child_0_child_1_child_0_child_0.paddingLeft = 0;
    root_child_0_child_1_child_0_child_0.itemReverseZIndex = false;
    root_child_0_child_1_child_0_child_0.strokesIncludedInLayout = false;
}
root_child_0_child_1_child_0_child_0.fills = await this.hydratePaints([]);
root_child_0_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0_child_0.strokeWeight = 1;
root_child_0_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.strokeLeftWeight = 1;
root_child_0_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_0_child_0) root_child_0_child_1_child_0_child_0.cornerRadius = 0;

// Start Child: Refereeing in Women’s Football: Motivation.
const root_child_0_child_1_child_0_child_0_child_0 = figma.createText();
root_child_0_child_1_child_0_child_0_child_0.name = "Refereeing in Women’s Football: Motivation.";
root_child_0_child_1_child_0_child_0_child_0.visible = true;
root_child_0_child_1_child_0_child_0_child_0.opacity = 1;
root_child_0_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0_child_0_child_0) root_child_0_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0_child_0_child_0) root_child_0_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_0_child_0_child_0) root_child_0_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_0_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0_child_0_child_0.strokeWeight = 1;
root_child_0_child_1_child_0_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_0_child_0_child_0) root_child_0_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_0_child_0_child_0) root_child_0_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_0_child_0_child_0) root_child_0_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_1_child_0_child_0_child_0.effects = [];
// Text Properties
root_child_0_child_1_child_0_child_0_child_0.characters = `Refereeing in Women’s Football:
Motivation.`;
root_child_0_child_1_child_0_child_0_child_0.fontSize = 20;
root_child_0_child_1_child_0_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_0_child_0_child_0.textAlignVertical = "CENTER";
root_child_0_child_1_child_0_child_0_child_0.textAutoResize = "HEIGHT";
root_child_0_child_1_child_0_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_1_child_0_child_0_child_0.lineHeight = {"unit":"PIXELS","value":25};
if ("textCase" in root_child_0_child_1_child_0_child_0_child_0) root_child_0_child_1_child_0_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_0_child_0_child_0) root_child_0_child_1_child_0_child_0_child_0.textDecoration = "NONE";
root_child_0_child_1_child_0_child_0_child_0.paragraphSpacing = 0;
root_child_0_child_1_child_0_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_0_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_0_child_0_child_0, 0, 43, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_1_child_0_child_0_child_0.setRangeFills(0, 43, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_1_child_0_child_0_child_0.setRangeFontSize(0, 43, 20);
root_child_0_child_1_child_0_child_0.appendChild(root_child_0_child_1_child_0_child_0_child_0);
// Child Layout Props
root_child_0_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_1_child_0_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_1_child_0_child_0_child_0, {"width":311,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_1_child_0.appendChild(root_child_0_child_1_child_0_child_0);
// Child Layout Props
root_child_0_child_1_child_0_child_0.layoutAlign = "STRETCH";
root_child_0_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_0_child_0, {"width":311,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.
const root_child_0_child_1_child_0_child_1 = figma.createText();
root_child_0_child_1_child_0_child_1.name = "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.";
root_child_0_child_1_child_0_child_1.visible = true;
root_child_0_child_1_child_0_child_1.opacity = 1;
root_child_0_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_0_child_1) root_child_0_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0_child_1) root_child_0_child_1_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_0_child_1) root_child_0_child_1_child_0_child_1.maskType = "ALPHA";
root_child_0_child_1_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0_child_1.strokeWeight = 1;
root_child_0_child_1_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_0_child_1) root_child_0_child_1_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_0_child_1) root_child_0_child_1_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_0_child_1) root_child_0_child_1_child_0_child_1.strokeMiterLimit = 4;
root_child_0_child_1_child_0_child_1.effects = [];
// Text Properties
root_child_0_child_1_child_0_child_1.characters = `The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future
of our sport.`;
root_child_0_child_1_child_0_child_1.fontSize = 16;
root_child_0_child_1_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_0_child_1.textAlignVertical = "CENTER";
root_child_0_child_1_child_0_child_1.textTruncation = "ENDING";
root_child_0_child_1_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_1_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_0_child_1_child_0_child_1) root_child_0_child_1_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_0_child_1) root_child_0_child_1_child_0_child_1.textDecoration = "NONE";
root_child_0_child_1_child_0_child_1.paragraphSpacing = 0;
root_child_0_child_1_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_0_child_1, 0, 152, {"family":"Open Sans","style":"Regular"});
root_child_0_child_1_child_0_child_1.setRangeFills(0, 152, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_1_child_0_child_1.setRangeFontSize(0, 152, 16);
root_child_0_child_1_child_0.appendChild(root_child_0_child_1_child_0_child_1);
// Child Layout Props
root_child_0_child_1_child_0_child_1.layoutAlign = "STRETCH";
root_child_0_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_0_child_1, {"width":311,"height":95,"relativeTransform":[[1,0,0],[0,1,66]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_1.appendChild(root_child_0_child_1_child_0);
// Child Layout Props
root_child_0_child_1_child_0.layoutAlign = "STRETCH";
root_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_0, {"width":311,"height":161,"relativeTransform":[[1,0,16],[0,1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_1);
// Child Layout Props
root_child_0_child_1.layoutAlign = "STRETCH";
root_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1, {"width":343,"height":209,"relativeTransform":[[1,0,0],[0,1,229]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "STRETCH";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":343,"height":438,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1636
const root_child_1 = figma.createFrame();
root_child_1.name = "Frame 1636";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1) root_child_1.isMask = false;
if ("maskType" in root_child_1) root_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1) root_child_1.clipsContent = false;
if ("layoutMode" in root_child_1) {
    root_child_1.layoutMode = "VERTICAL";
    root_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1.counterAxisSizingMode = "FIXED";
    root_child_1.primaryAxisAlignItems = "MIN";
    root_child_1.counterAxisAlignItems = "MIN";
    root_child_1.itemSpacing = 0;
    root_child_1.paddingTop = 0;
    root_child_1.paddingRight = 0;
    root_child_1.paddingBottom = 0;
    root_child_1.paddingLeft = 0;
    root_child_1.itemReverseZIndex = false;
    root_child_1.strokesIncludedInLayout = false;
}
root_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
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
root_child_1.effects = [{"type":"DROP_SHADOW","visible":true,"radius":6,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.11999999731779099},"offset":{"x":0,"y":2},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
if ("cornerRadius" in root_child_1) root_child_1.cornerRadius = 4;

// Start Child: Rectangle 45
const root_child_1_child_0 = figma.createRectangle();
root_child_1_child_0.name = "Rectangle 45";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_0) root_child_1_child_0.maskType = "ALPHA";
root_child_1_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,0.9078576564788818,0.046071168035268784]],"scalingFactor":1,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"d6f3b23264dd483546de453eeef7c6782b5d923f","assetRef":IMG_img_2_png}]);
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
if ("topLeftRadius" in root_child_1_child_0) root_child_1_child_0.topLeftRadius = 4;
if ("topRightRadius" in root_child_1_child_0) root_child_1_child_0.topRightRadius = 4;
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "STRETCH";
root_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0, {"width":343,"height":229,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1615
const root_child_1_child_1 = figma.createFrame();
root_child_1_child_1.name = "Frame 1615";
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
    root_child_1_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1.counterAxisAlignItems = "MIN";
    root_child_1_child_1.itemSpacing = 24;
    root_child_1_child_1.paddingTop = 24;
    root_child_1_child_1.paddingRight = 16;
    root_child_1_child_1.paddingBottom = 24;
    root_child_1_child_1.paddingLeft = 16;
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

// Start Child: Frame 1644
const root_child_1_child_1_child_0 = figma.createFrame();
root_child_1_child_1_child_0.name = "Frame 1644";
root_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_0) {
    root_child_1_child_1_child_0.layoutMode = "VERTICAL";
    root_child_1_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_0.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1_child_0.counterAxisAlignItems = "MIN";
    root_child_1_child_1_child_0.itemSpacing = 16;
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

// Start Child: Frame 1713
const root_child_1_child_1_child_0_child_0 = figma.createFrame();
root_child_1_child_1_child_0_child_0.name = "Frame 1713";
root_child_1_child_1_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_0_child_0) {
    root_child_1_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_0_child_0.itemSpacing = 16;
    root_child_1_child_1_child_0_child_0.paddingTop = 0;
    root_child_1_child_1_child_0_child_0.paddingRight = 0;
    root_child_1_child_1_child_0_child_0.paddingBottom = 0;
    root_child_1_child_1_child_0_child_0.paddingLeft = 0;
    root_child_1_child_1_child_0_child_0.itemReverseZIndex = false;
    root_child_1_child_1_child_0_child_0.strokesIncludedInLayout = false;
}
root_child_1_child_1_child_0_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
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
if ("cornerRadius" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.cornerRadius = 0;

// Start Child: Refereeing in Women’s Football: Motivation.
const root_child_1_child_1_child_0_child_0_child_0 = figma.createText();
root_child_1_child_1_child_0_child_0_child_0.name = "Refereeing in Women’s Football: Motivation.";
root_child_1_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0_child_0.strokeWeight = 1;
root_child_1_child_1_child_0_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_0_child_0_child_0.characters = `Refereeing in Women’s Football:
Motivation.`;
root_child_1_child_1_child_0_child_0_child_0.fontSize = 20;
root_child_1_child_1_child_0_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_0_child_0_child_0.textAlignVertical = "CENTER";
root_child_1_child_1_child_0_child_0_child_0.textAutoResize = "HEIGHT";
root_child_1_child_1_child_0_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_1_child_0_child_0_child_0.lineHeight = {"unit":"PIXELS","value":25};
if ("textCase" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.textDecoration = "NONE";
root_child_1_child_1_child_0_child_0_child_0.paragraphSpacing = 0;
root_child_1_child_1_child_0_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_0_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_0_child_0_child_0, 0, 43, {"family":"Open Sans","style":"SemiBold"});
root_child_1_child_1_child_0_child_0_child_0.setRangeFills(0, 43, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0.setRangeFontSize(0, 43, 20);
root_child_1_child_1_child_0_child_0.appendChild(root_child_1_child_1_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_1_child_0_child_0_child_0, {"width":311,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_0_child_0.layoutAlign = "STRETCH";
root_child_1_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_0, {"width":311,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.
const root_child_1_child_1_child_0_child_1 = figma.createText();
root_child_1_child_1_child_0_child_1.name = "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.";
root_child_1_child_1_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.maskType = "ALPHA";
root_child_1_child_1_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_1.strokeWeight = 1;
root_child_1_child_1_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_0_child_1.characters = `The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future
of our sport.`;
root_child_1_child_1_child_0_child_1.fontSize = 16;
root_child_1_child_1_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_0_child_1.textAlignVertical = "CENTER";
root_child_1_child_1_child_0_child_1.textTruncation = "ENDING";
root_child_1_child_1_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_1_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.textDecoration = "NONE";
root_child_1_child_1_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_0_child_1, 0, 152, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_0_child_1.setRangeFills(0, 152, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_1.setRangeFontSize(0, 152, 16);
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_0_child_1.layoutAlign = "STRETCH";
root_child_1_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_1, {"width":311,"height":95,"relativeTransform":[[1,0,0],[0,1,66]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_0.layoutAlign = "STRETCH";
root_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0, {"width":311,"height":161,"relativeTransform":[[1,0,16],[0,1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_1);
// Child Layout Props
root_child_1_child_1.layoutAlign = "STRETCH";
root_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1, {"width":343,"height":209,"relativeTransform":[[1,0,0],[0,1,229]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "STRETCH";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":343,"height":438,"relativeTransform":[[1,0,367],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1637
const root_child_2 = figma.createFrame();
root_child_2.name = "Frame 1637";
root_child_2.visible = true;
root_child_2.opacity = 1;
root_child_2.locked = false;
if ("blendMode" in root_child_2) root_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2) root_child_2.isMask = false;
if ("maskType" in root_child_2) root_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_2) root_child_2.clipsContent = false;
if ("layoutMode" in root_child_2) {
    root_child_2.layoutMode = "VERTICAL";
    root_child_2.primaryAxisSizingMode = "AUTO";
    root_child_2.counterAxisSizingMode = "FIXED";
    root_child_2.primaryAxisAlignItems = "MIN";
    root_child_2.counterAxisAlignItems = "MIN";
    root_child_2.itemSpacing = 0;
    root_child_2.paddingTop = 0;
    root_child_2.paddingRight = 0;
    root_child_2.paddingBottom = 0;
    root_child_2.paddingLeft = 0;
    root_child_2.itemReverseZIndex = false;
    root_child_2.strokesIncludedInLayout = false;
}
root_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_2.strokes = await this.hydratePaints([]);
root_child_2.strokeWeight = 1;
root_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2) root_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_2) root_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2) root_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2) root_child_2.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2) root_child_2.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2) root_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2) root_child_2.strokeLeftWeight = 1;
root_child_2.effects = [{"type":"DROP_SHADOW","visible":true,"radius":6,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.11999999731779099},"offset":{"x":0,"y":2},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
if ("cornerRadius" in root_child_2) root_child_2.cornerRadius = 4;

// Start Child: Rectangle 45
const root_child_2_child_0 = figma.createRectangle();
root_child_2_child_0.name = "Rectangle 45";
root_child_2_child_0.visible = true;
root_child_2_child_0.opacity = 1;
root_child_2_child_0.locked = false;
if ("blendMode" in root_child_2_child_0) root_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_0) root_child_2_child_0.isMask = false;
if ("maskType" in root_child_2_child_0) root_child_2_child_0.maskType = "ALPHA";
root_child_2_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,0.4666898846626282,0.2666550576686859]],"scalingFactor":1,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"707cbb62af7d9774194feffae7db7284a4719141","assetRef":IMG_img_3_png}]);
root_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_0.strokeWeight = 1;
root_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_0) root_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_0) root_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_0) root_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2_child_0) root_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2_child_0) root_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2_child_0) root_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2_child_0) root_child_2_child_0.strokeLeftWeight = 1;
root_child_2_child_0.effects = [];
if ("topLeftRadius" in root_child_2_child_0) root_child_2_child_0.topLeftRadius = 4;
if ("topRightRadius" in root_child_2_child_0) root_child_2_child_0.topRightRadius = 4;
root_child_2.appendChild(root_child_2_child_0);
// Child Layout Props
root_child_2_child_0.layoutAlign = "STRETCH";
root_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_0, {"width":343,"height":229,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1615
const root_child_2_child_1 = figma.createFrame();
root_child_2_child_1.name = "Frame 1615";
root_child_2_child_1.visible = true;
root_child_2_child_1.opacity = 1;
root_child_2_child_1.locked = false;
if ("blendMode" in root_child_2_child_1) root_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1) root_child_2_child_1.isMask = false;
if ("maskType" in root_child_2_child_1) root_child_2_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1) root_child_2_child_1.clipsContent = true;
if ("layoutMode" in root_child_2_child_1) {
    root_child_2_child_1.layoutMode = "VERTICAL";
    root_child_2_child_1.primaryAxisSizingMode = "AUTO";
    root_child_2_child_1.counterAxisSizingMode = "FIXED";
    root_child_2_child_1.primaryAxisAlignItems = "CENTER";
    root_child_2_child_1.counterAxisAlignItems = "MIN";
    root_child_2_child_1.itemSpacing = 24;
    root_child_2_child_1.paddingTop = 24;
    root_child_2_child_1.paddingRight = 16;
    root_child_2_child_1.paddingBottom = 24;
    root_child_2_child_1.paddingLeft = 16;
    root_child_2_child_1.itemReverseZIndex = false;
    root_child_2_child_1.strokesIncludedInLayout = false;
}
root_child_2_child_1.fills = await this.hydratePaints([]);
root_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1.strokeWeight = 1;
root_child_2_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1) root_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1) root_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1) root_child_2_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2_child_1) root_child_2_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2_child_1) root_child_2_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2_child_1) root_child_2_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2_child_1) root_child_2_child_1.strokeLeftWeight = 1;
root_child_2_child_1.effects = [];
if ("cornerRadius" in root_child_2_child_1) root_child_2_child_1.cornerRadius = 0;

// Start Child: Frame 1644
const root_child_2_child_1_child_0 = figma.createFrame();
root_child_2_child_1_child_0.name = "Frame 1644";
root_child_2_child_1_child_0.visible = true;
root_child_2_child_1_child_0.opacity = 1;
root_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_2_child_1_child_0) {
    root_child_2_child_1_child_0.layoutMode = "VERTICAL";
    root_child_2_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_2_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_2_child_1_child_0.primaryAxisAlignItems = "CENTER";
    root_child_2_child_1_child_0.counterAxisAlignItems = "MIN";
    root_child_2_child_1_child_0.itemSpacing = 16;
    root_child_2_child_1_child_0.paddingTop = 0;
    root_child_2_child_1_child_0.paddingRight = 0;
    root_child_2_child_1_child_0.paddingBottom = 0;
    root_child_2_child_1_child_0.paddingLeft = 0;
    root_child_2_child_1_child_0.itemReverseZIndex = false;
    root_child_2_child_1_child_0.strokesIncludedInLayout = false;
}
root_child_2_child_1_child_0.fills = await this.hydratePaints([]);
root_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0.strokeWeight = 1;
root_child_2_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeLeftWeight = 1;
root_child_2_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.cornerRadius = 0;

// Start Child: Frame 1713
const root_child_2_child_1_child_0_child_0 = figma.createFrame();
root_child_2_child_1_child_0_child_0.name = "Frame 1713";
root_child_2_child_1_child_0_child_0.visible = true;
root_child_2_child_1_child_0_child_0.opacity = 1;
root_child_2_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_2_child_1_child_0_child_0) {
    root_child_2_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_2_child_1_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_2_child_1_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_2_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_2_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_2_child_1_child_0_child_0.itemSpacing = 16;
    root_child_2_child_1_child_0_child_0.paddingTop = 0;
    root_child_2_child_1_child_0_child_0.paddingRight = 0;
    root_child_2_child_1_child_0_child_0.paddingBottom = 0;
    root_child_2_child_1_child_0_child_0.paddingLeft = 0;
    root_child_2_child_1_child_0_child_0.itemReverseZIndex = false;
    root_child_2_child_1_child_0_child_0.strokesIncludedInLayout = false;
}
root_child_2_child_1_child_0_child_0.fills = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_0.strokeWeight = 1;
root_child_2_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeLeftWeight = 1;
root_child_2_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.cornerRadius = 0;

// Start Child: Refereeing in Women’s Football: Motivation.
const root_child_2_child_1_child_0_child_0_child_0 = figma.createText();
root_child_2_child_1_child_0_child_0_child_0.name = "Refereeing in Women’s Football: Motivation.";
root_child_2_child_1_child_0_child_0_child_0.visible = true;
root_child_2_child_1_child_0_child_0_child_0.opacity = 1;
root_child_2_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_2_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_0_child_0.strokeWeight = 1;
root_child_2_child_1_child_0_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_2_child_1_child_0_child_0_child_0.effects = [];
// Text Properties
root_child_2_child_1_child_0_child_0_child_0.characters = `Refereeing in Women’s Football:
Motivation.`;
root_child_2_child_1_child_0_child_0_child_0.fontSize = 20;
root_child_2_child_1_child_0_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_2_child_1_child_0_child_0_child_0.textAlignVertical = "CENTER";
root_child_2_child_1_child_0_child_0_child_0.textAutoResize = "HEIGHT";
root_child_2_child_1_child_0_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_2_child_1_child_0_child_0_child_0.lineHeight = {"unit":"PIXELS","value":25};
if ("textCase" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.textDecoration = "NONE";
root_child_2_child_1_child_0_child_0_child_0.paragraphSpacing = 0;
root_child_2_child_1_child_0_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_2_child_1_child_0_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_2_child_1_child_0_child_0_child_0, 0, 43, {"family":"Open Sans","style":"SemiBold"});
root_child_2_child_1_child_0_child_0_child_0.setRangeFills(0, 43, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_0_child_0.setRangeFontSize(0, 43, 20);
root_child_2_child_1_child_0_child_0.appendChild(root_child_2_child_1_child_0_child_0_child_0);
// Child Layout Props
root_child_2_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_2_child_1_child_0_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_2_child_1_child_0_child_0_child_0, {"width":311,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_0.appendChild(root_child_2_child_1_child_0_child_0);
// Child Layout Props
root_child_2_child_1_child_0_child_0.layoutAlign = "STRETCH";
root_child_2_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_0_child_0, {"width":311,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.
const root_child_2_child_1_child_0_child_1 = figma.createText();
root_child_2_child_1_child_0_child_1.name = "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.";
root_child_2_child_1_child_0_child_1.visible = true;
root_child_2_child_1_child_0_child_1.opacity = 1;
root_child_2_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_2_child_1_child_0_child_1) root_child_2_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0_child_1) root_child_2_child_1_child_0_child_1.isMask = false;
if ("maskType" in root_child_2_child_1_child_0_child_1) root_child_2_child_1_child_0_child_1.maskType = "ALPHA";
root_child_2_child_1_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_1.strokeWeight = 1;
root_child_2_child_1_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_2_child_1_child_0_child_1) root_child_2_child_1_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0_child_1) root_child_2_child_1_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0_child_1) root_child_2_child_1_child_0_child_1.strokeMiterLimit = 4;
root_child_2_child_1_child_0_child_1.effects = [];
// Text Properties
root_child_2_child_1_child_0_child_1.characters = `The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future
of our sport.`;
root_child_2_child_1_child_0_child_1.fontSize = 16;
root_child_2_child_1_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_2_child_1_child_0_child_1.textAlignVertical = "CENTER";
root_child_2_child_1_child_0_child_1.textTruncation = "ENDING";
root_child_2_child_1_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_2_child_1_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_2_child_1_child_0_child_1) root_child_2_child_1_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_2_child_1_child_0_child_1) root_child_2_child_1_child_0_child_1.textDecoration = "NONE";
root_child_2_child_1_child_0_child_1.paragraphSpacing = 0;
root_child_2_child_1_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_2_child_1_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_2_child_1_child_0_child_1, 0, 152, {"family":"Open Sans","style":"Regular"});
root_child_2_child_1_child_0_child_1.setRangeFills(0, 152, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_1.setRangeFontSize(0, 152, 16);
root_child_2_child_1_child_0.appendChild(root_child_2_child_1_child_0_child_1);
// Child Layout Props
root_child_2_child_1_child_0_child_1.layoutAlign = "STRETCH";
root_child_2_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_0_child_1, {"width":311,"height":95,"relativeTransform":[[1,0,0],[0,1,66]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2_child_1.appendChild(root_child_2_child_1_child_0);
// Child Layout Props
root_child_2_child_1_child_0.layoutAlign = "STRETCH";
root_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_0, {"width":311,"height":161,"relativeTransform":[[1,0,16],[0,1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2.appendChild(root_child_2_child_1);
// Child Layout Props
root_child_2_child_1.layoutAlign = "STRETCH";
root_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1, {"width":343,"height":209,"relativeTransform":[[1,0,0],[0,1,229]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_2);
// Child Layout Props
root_child_2.layoutAlign = "STRETCH";
root_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_2, {"width":343,"height":438,"relativeTransform":[[1,0,734],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1638
const root_child_3 = figma.createFrame();
root_child_3.name = "Frame 1638";
root_child_3.visible = true;
root_child_3.opacity = 1;
root_child_3.locked = false;
if ("blendMode" in root_child_3) root_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3) root_child_3.isMask = false;
if ("maskType" in root_child_3) root_child_3.maskType = "ALPHA";
if ("clipsContent" in root_child_3) root_child_3.clipsContent = false;
if ("layoutMode" in root_child_3) {
    root_child_3.layoutMode = "VERTICAL";
    root_child_3.primaryAxisSizingMode = "AUTO";
    root_child_3.counterAxisSizingMode = "FIXED";
    root_child_3.primaryAxisAlignItems = "MIN";
    root_child_3.counterAxisAlignItems = "MIN";
    root_child_3.itemSpacing = 0;
    root_child_3.paddingTop = 0;
    root_child_3.paddingRight = 0;
    root_child_3.paddingBottom = 0;
    root_child_3.paddingLeft = 0;
    root_child_3.itemReverseZIndex = false;
    root_child_3.strokesIncludedInLayout = false;
}
root_child_3.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_3.strokes = await this.hydratePaints([]);
root_child_3.strokeWeight = 1;
root_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3) root_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_3) root_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3) root_child_3.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3) root_child_3.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3) root_child_3.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3) root_child_3.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3) root_child_3.strokeLeftWeight = 1;
root_child_3.effects = [{"type":"DROP_SHADOW","visible":true,"radius":6,"boundVariables":{},"color":{"r":0,"g":0,"b":0,"a":0.11999999731779099},"offset":{"x":0,"y":2},"spread":0,"blendMode":"NORMAL","showShadowBehindNode":true}];
if ("cornerRadius" in root_child_3) root_child_3.cornerRadius = 4;

// Start Child: Rectangle 45
const root_child_3_child_0 = figma.createRectangle();
root_child_3_child_0.name = "Rectangle 45";
root_child_3_child_0.visible = true;
root_child_3_child_0.opacity = 1;
root_child_3_child_0.locked = false;
if ("blendMode" in root_child_3_child_0) root_child_3_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_0) root_child_3_child_0.isMask = false;
if ("maskType" in root_child_3_child_0) root_child_3_child_0.maskType = "ALPHA";
root_child_3_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,0.8672073483467102,0.06639634072780609]],"scalingFactor":1,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"53d394c4577bd2ad4235d0666feb13b9ca37fd82","assetRef":IMG_img_4_png}]);
root_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_0.strokeWeight = 1;
root_child_3_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_0) root_child_3_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_0) root_child_3_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_0) root_child_3_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_0) root_child_3_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_0) root_child_3_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_0) root_child_3_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_0) root_child_3_child_0.strokeLeftWeight = 1;
root_child_3_child_0.effects = [];
if ("topLeftRadius" in root_child_3_child_0) root_child_3_child_0.topLeftRadius = 4;
if ("topRightRadius" in root_child_3_child_0) root_child_3_child_0.topRightRadius = 4;
root_child_3.appendChild(root_child_3_child_0);
// Child Layout Props
root_child_3_child_0.layoutAlign = "STRETCH";
root_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_0, {"width":343,"height":229,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1615
const root_child_3_child_1 = figma.createFrame();
root_child_3_child_1.name = "Frame 1615";
root_child_3_child_1.visible = true;
root_child_3_child_1.opacity = 1;
root_child_3_child_1.locked = false;
if ("blendMode" in root_child_3_child_1) root_child_3_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1) root_child_3_child_1.isMask = false;
if ("maskType" in root_child_3_child_1) root_child_3_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_1) root_child_3_child_1.clipsContent = true;
if ("layoutMode" in root_child_3_child_1) {
    root_child_3_child_1.layoutMode = "VERTICAL";
    root_child_3_child_1.primaryAxisSizingMode = "AUTO";
    root_child_3_child_1.counterAxisSizingMode = "FIXED";
    root_child_3_child_1.primaryAxisAlignItems = "CENTER";
    root_child_3_child_1.counterAxisAlignItems = "MIN";
    root_child_3_child_1.itemSpacing = 24;
    root_child_3_child_1.paddingTop = 24;
    root_child_3_child_1.paddingRight = 16;
    root_child_3_child_1.paddingBottom = 24;
    root_child_3_child_1.paddingLeft = 16;
    root_child_3_child_1.itemReverseZIndex = false;
    root_child_3_child_1.strokesIncludedInLayout = false;
}
root_child_3_child_1.fills = await this.hydratePaints([]);
root_child_3_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_1.strokeWeight = 1;
root_child_3_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1) root_child_3_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1) root_child_3_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1) root_child_3_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_1) root_child_3_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_1) root_child_3_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_1) root_child_3_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_1) root_child_3_child_1.strokeLeftWeight = 1;
root_child_3_child_1.effects = [];
if ("cornerRadius" in root_child_3_child_1) root_child_3_child_1.cornerRadius = 0;

// Start Child: Frame 1644
const root_child_3_child_1_child_0 = figma.createFrame();
root_child_3_child_1_child_0.name = "Frame 1644";
root_child_3_child_1_child_0.visible = true;
root_child_3_child_1_child_0.opacity = 1;
root_child_3_child_1_child_0.locked = false;
if ("blendMode" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.isMask = false;
if ("maskType" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_3_child_1_child_0) {
    root_child_3_child_1_child_0.layoutMode = "VERTICAL";
    root_child_3_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_3_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_3_child_1_child_0.primaryAxisAlignItems = "CENTER";
    root_child_3_child_1_child_0.counterAxisAlignItems = "MIN";
    root_child_3_child_1_child_0.itemSpacing = 16;
    root_child_3_child_1_child_0.paddingTop = 0;
    root_child_3_child_1_child_0.paddingRight = 0;
    root_child_3_child_1_child_0.paddingBottom = 0;
    root_child_3_child_1_child_0.paddingLeft = 0;
    root_child_3_child_1_child_0.itemReverseZIndex = false;
    root_child_3_child_1_child_0.strokesIncludedInLayout = false;
}
root_child_3_child_1_child_0.fills = await this.hydratePaints([]);
root_child_3_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_0.strokeWeight = 1;
root_child_3_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeLeftWeight = 1;
root_child_3_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.cornerRadius = 0;

// Start Child: Frame 1713
const root_child_3_child_1_child_0_child_0 = figma.createFrame();
root_child_3_child_1_child_0_child_0.name = "Frame 1713";
root_child_3_child_1_child_0_child_0.visible = true;
root_child_3_child_1_child_0_child_0.opacity = 1;
root_child_3_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_3_child_1_child_0_child_0) {
    root_child_3_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_3_child_1_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_3_child_1_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_3_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_3_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_3_child_1_child_0_child_0.itemSpacing = 16;
    root_child_3_child_1_child_0_child_0.paddingTop = 0;
    root_child_3_child_1_child_0_child_0.paddingRight = 0;
    root_child_3_child_1_child_0_child_0.paddingBottom = 0;
    root_child_3_child_1_child_0_child_0.paddingLeft = 0;
    root_child_3_child_1_child_0_child_0.itemReverseZIndex = false;
    root_child_3_child_1_child_0_child_0.strokesIncludedInLayout = false;
}
root_child_3_child_1_child_0_child_0.fills = await this.hydratePaints([]);
root_child_3_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_0_child_0.strokeWeight = 1;
root_child_3_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.strokeLeftWeight = 1;
root_child_3_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_0_child_0) root_child_3_child_1_child_0_child_0.cornerRadius = 0;

// Start Child: Refereeing in Women’s Football: Motivation.
const root_child_3_child_1_child_0_child_0_child_0 = figma.createText();
root_child_3_child_1_child_0_child_0_child_0.name = "Refereeing in Women’s Football: Motivation.";
root_child_3_child_1_child_0_child_0_child_0.visible = true;
root_child_3_child_1_child_0_child_0_child_0.opacity = 1;
root_child_3_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_3_child_1_child_0_child_0_child_0) root_child_3_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_0_child_0_child_0) root_child_3_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_3_child_1_child_0_child_0_child_0) root_child_3_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_3_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_3_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_0_child_0_child_0.strokeWeight = 1;
root_child_3_child_1_child_0_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_1_child_0_child_0_child_0) root_child_3_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_0_child_0_child_0) root_child_3_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_0_child_0_child_0) root_child_3_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_3_child_1_child_0_child_0_child_0.effects = [];
// Text Properties
root_child_3_child_1_child_0_child_0_child_0.characters = `Refereeing in Women’s Football:
Motivation.`;
root_child_3_child_1_child_0_child_0_child_0.fontSize = 20;
root_child_3_child_1_child_0_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_3_child_1_child_0_child_0_child_0.textAlignVertical = "CENTER";
root_child_3_child_1_child_0_child_0_child_0.textAutoResize = "HEIGHT";
root_child_3_child_1_child_0_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_3_child_1_child_0_child_0_child_0.lineHeight = {"unit":"PIXELS","value":25};
if ("textCase" in root_child_3_child_1_child_0_child_0_child_0) root_child_3_child_1_child_0_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_1_child_0_child_0_child_0) root_child_3_child_1_child_0_child_0_child_0.textDecoration = "NONE";
root_child_3_child_1_child_0_child_0_child_0.paragraphSpacing = 0;
root_child_3_child_1_child_0_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_3_child_1_child_0_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_3_child_1_child_0_child_0_child_0, 0, 43, {"family":"Open Sans","style":"SemiBold"});
root_child_3_child_1_child_0_child_0_child_0.setRangeFills(0, 43, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_3_child_1_child_0_child_0_child_0.setRangeFontSize(0, 43, 20);
root_child_3_child_1_child_0_child_0.appendChild(root_child_3_child_1_child_0_child_0_child_0);
// Child Layout Props
root_child_3_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_3_child_1_child_0_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_3_child_1_child_0_child_0_child_0, {"width":311,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3_child_1_child_0.appendChild(root_child_3_child_1_child_0_child_0);
// Child Layout Props
root_child_3_child_1_child_0_child_0.layoutAlign = "STRETCH";
root_child_3_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_0_child_0, {"width":311,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.
const root_child_3_child_1_child_0_child_1 = figma.createText();
root_child_3_child_1_child_0_child_1.name = "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.";
root_child_3_child_1_child_0_child_1.visible = true;
root_child_3_child_1_child_0_child_1.opacity = 1;
root_child_3_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_3_child_1_child_0_child_1) root_child_3_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_0_child_1) root_child_3_child_1_child_0_child_1.isMask = false;
if ("maskType" in root_child_3_child_1_child_0_child_1) root_child_3_child_1_child_0_child_1.maskType = "ALPHA";
root_child_3_child_1_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_3_child_1_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_0_child_1.strokeWeight = 1;
root_child_3_child_1_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_1_child_0_child_1) root_child_3_child_1_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_0_child_1) root_child_3_child_1_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_0_child_1) root_child_3_child_1_child_0_child_1.strokeMiterLimit = 4;
root_child_3_child_1_child_0_child_1.effects = [];
// Text Properties
root_child_3_child_1_child_0_child_1.characters = `The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future
of our sport.`;
root_child_3_child_1_child_0_child_1.fontSize = 16;
root_child_3_child_1_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_3_child_1_child_0_child_1.textAlignVertical = "CENTER";
root_child_3_child_1_child_0_child_1.textTruncation = "ENDING";
root_child_3_child_1_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_3_child_1_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_3_child_1_child_0_child_1) root_child_3_child_1_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_1_child_0_child_1) root_child_3_child_1_child_0_child_1.textDecoration = "NONE";
root_child_3_child_1_child_0_child_1.paragraphSpacing = 0;
root_child_3_child_1_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_3_child_1_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_3_child_1_child_0_child_1, 0, 152, {"family":"Open Sans","style":"Regular"});
root_child_3_child_1_child_0_child_1.setRangeFills(0, 152, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_3_child_1_child_0_child_1.setRangeFontSize(0, 152, 16);
root_child_3_child_1_child_0.appendChild(root_child_3_child_1_child_0_child_1);
// Child Layout Props
root_child_3_child_1_child_0_child_1.layoutAlign = "STRETCH";
root_child_3_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_0_child_1, {"width":311,"height":95,"relativeTransform":[[1,0,0],[0,1,66]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3_child_1.appendChild(root_child_3_child_1_child_0);
// Child Layout Props
root_child_3_child_1_child_0.layoutAlign = "STRETCH";
root_child_3_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_0, {"width":311,"height":161,"relativeTransform":[[1,0,16],[0,1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3.appendChild(root_child_3_child_1);
// Child Layout Props
root_child_3_child_1.layoutAlign = "STRETCH";
root_child_3_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1, {"width":343,"height":209,"relativeTransform":[[1,0,0],[0,1,229]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_3);
// Child Layout Props
root_child_3.layoutAlign = "STRETCH";
root_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_3, {"width":343,"height":438,"relativeTransform":[[1,0,1101],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":1444,"height":438,"parentIsAutoLayout":false});

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

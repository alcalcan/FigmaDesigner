import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import IMG_uefa_cards_4x_procedural_repro_img_1_png from "././assets/uefa_cards_4x_procedural_repro_img_1.png";
import IMG_uefa_cards_4x_procedural_repro_img_2_png from "././assets/uefa_cards_4x_procedural_repro_img_2.png";
import IMG_uefa_cards_4x_procedural_repro_img_3_png from "././assets/uefa_cards_4x_procedural_repro_img_3.png";
import IMG_uefa_cards_4x_procedural_repro_img_4_png from "././assets/uefa_cards_4x_procedural_repro_img_4.png";

// SVG Imports



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


export class uefa_cards_4x_procedural_repro extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "uefa_cards_4x_procedural_repro";
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

// Start Child: Card 1
const root_child_0 = figma.createFrame();
root_child_0.name = "Card 1";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0) root_child_0.clipsContent = true;
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
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 12;

// Start Child: Image Container
const root_child_0_child_0 = figma.createFrame();
root_child_0_child_0.name = "Image Container";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0) root_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_0) root_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_0_child_0) {
    root_child_0_child_0.layoutMode = "NONE";
}
root_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":1,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"53600b9b753bcf27aa29e70bd45039034c373525","assetRef":IMG_uefa_cards_4x_procedural_repro_img_1_png}]);
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
if ("cornerRadius" in root_child_0_child_0) root_child_0_child_0.cornerRadius = 0;

// Start Child: Play Icon
root_child_0_child_0_child_0.name = "Play Icon";
root_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.maskType = "ALPHA";
root_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0.strokeWeight = 1;
root_child_0_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.cornerRadius = 0;
root_child_0_child_0.appendChild(root_child_0_child_0_child_0);
applySizeAndTransform(root_child_0_child_0_child_0, {"width":54,"height":54,"relativeTransform":[[1,0,144],[0,1,87]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_0_child_0.x = 144;
root_child_0_child_0_child_0.y = 87;
root_child_0.appendChild(root_child_0_child_0);
// Child Layout Props
root_child_0_child_0.layoutAlign = "STRETCH";
root_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0, {"width":343,"height":229,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Content Padding
const root_child_0_child_1 = figma.createFrame();
root_child_0_child_1.name = "Content Padding";
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
    root_child_0_child_1.primaryAxisAlignItems = "MIN";
    root_child_0_child_1.counterAxisAlignItems = "MIN";
    root_child_0_child_1.itemSpacing = 16;
    root_child_0_child_1.paddingTop = 16;
    root_child_0_child_1.paddingRight = 16;
    root_child_0_child_1.paddingBottom = 16;
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

// Start Child: Refereeing in Women’s Football: Motivation.
const root_child_0_child_1_child_0 = figma.createText();
root_child_0_child_1_child_0.name = "Refereeing in Women’s Football: Motivation.";
root_child_0_child_1_child_0.visible = true;
root_child_0_child_1_child_0.opacity = 1;
root_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.maskType = "ALPHA";
root_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0.strokeWeight = 1;
root_child_0_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_1_child_0.effects = [];
// Text Properties
root_child_0_child_1_child_0.characters = `Refereeing in Women’s Football: Motivation.`;
root_child_0_child_1_child_0.fontSize = 20;
root_child_0_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_0.textAlignVertical = "TOP";
root_child_0_child_1_child_0.textAutoResize = "HEIGHT";
root_child_0_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_0_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.textDecoration = "NONE";
root_child_0_child_1_child_0.paragraphSpacing = 0;
root_child_0_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_0, 0, 43, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_1_child_0.setRangeFills(0, 43, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_0_child_1_child_0.setRangeFontSize(0, 43, 20);
root_child_0_child_1.appendChild(root_child_0_child_1_child_0);
// Child Layout Props
root_child_0_child_1_child_0.layoutAlign = "STRETCH";
root_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_0, {"width":311,"height":54,"relativeTransform":[[1,0,16],[0,1,16]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.
const root_child_0_child_1_child_1 = figma.createText();
root_child_0_child_1_child_1.name = "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.";
root_child_0_child_1_child_1.visible = true;
root_child_0_child_1_child_1.opacity = 1;
root_child_0_child_1_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.maskType = "ALPHA";
root_child_0_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_0_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_1.strokeWeight = 1;
root_child_0_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeMiterLimit = 4;
root_child_0_child_1_child_1.effects = [];
// Text Properties
root_child_0_child_1_child_1.characters = `The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.`;
root_child_0_child_1_child_1.fontSize = 14;
root_child_0_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_1.textAlignVertical = "TOP";
root_child_0_child_1_child_1.textAutoResize = "HEIGHT";
root_child_0_child_1_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_0_child_1_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.textDecoration = "NONE";
root_child_0_child_1_child_1.paragraphSpacing = 0;
root_child_0_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_1, 0, 119, {"family":"Open Sans","style":"Regular"});
root_child_0_child_1_child_1.setRangeFills(0, 119, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_0_child_1_child_1.setRangeFontSize(0, 119, 14);
root_child_0_child_1.appendChild(root_child_0_child_1_child_1);
// Child Layout Props
root_child_0_child_1_child_1.layoutAlign = "STRETCH";
root_child_0_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_1, {"width":311,"height":57,"relativeTransform":[[1,0,16],[0,1,86]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Footer
const root_child_0_child_1_child_2 = figma.createFrame();
root_child_0_child_1_child_2.name = "Footer";
root_child_0_child_1_child_2.visible = true;
root_child_0_child_1_child_2.opacity = 1;
root_child_0_child_1_child_2.locked = false;
if ("blendMode" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.isMask = false;
if ("maskType" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.clipsContent = true;
if ("layoutMode" in root_child_0_child_1_child_2) {
    root_child_0_child_1_child_2.layoutMode = "VERTICAL";
    root_child_0_child_1_child_2.primaryAxisSizingMode = "AUTO";
    root_child_0_child_1_child_2.counterAxisSizingMode = "FIXED";
    root_child_0_child_1_child_2.primaryAxisAlignItems = "MIN";
    root_child_0_child_1_child_2.counterAxisAlignItems = "MIN";
    root_child_0_child_1_child_2.itemSpacing = 4;
    root_child_0_child_1_child_2.paddingTop = 0;
    root_child_0_child_1_child_2.paddingRight = 0;
    root_child_0_child_1_child_2.paddingBottom = 0;
    root_child_0_child_1_child_2.paddingLeft = 0;
    root_child_0_child_1_child_2.itemReverseZIndex = false;
    root_child_0_child_1_child_2.strokesIncludedInLayout = false;
}
root_child_0_child_1_child_2.fills = await this.hydratePaints([]);
root_child_0_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2.strokeWeight = 1;
root_child_0_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeLeftWeight = 1;
root_child_0_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.cornerRadius = 0;

// Start Child: Author Info
const root_child_0_child_1_child_2_child_0 = figma.createFrame();
root_child_0_child_1_child_2_child_0.name = "Author Info";
root_child_0_child_1_child_2_child_0.visible = true;
root_child_0_child_1_child_2_child_0.opacity = 1;
root_child_0_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_0_child_1_child_2_child_0) {
    root_child_0_child_1_child_2_child_0.layoutMode = "HORIZONTAL";
    root_child_0_child_1_child_2_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0_child_1_child_2_child_0.counterAxisSizingMode = "AUTO";
    root_child_0_child_1_child_2_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_1_child_2_child_0.counterAxisAlignItems = "MIN";
    root_child_0_child_1_child_2_child_0.itemSpacing = 4;
    root_child_0_child_1_child_2_child_0.paddingTop = 0;
    root_child_0_child_1_child_2_child_0.paddingRight = 0;
    root_child_0_child_1_child_2_child_0.paddingBottom = 0;
    root_child_0_child_1_child_2_child_0.paddingLeft = 0;
    root_child_0_child_1_child_2_child_0.itemReverseZIndex = false;
    root_child_0_child_1_child_2_child_0.strokesIncludedInLayout = false;
}
root_child_0_child_1_child_2_child_0.fills = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_0.strokeWeight = 1;
root_child_0_child_1_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.strokeLeftWeight = 1;
root_child_0_child_1_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2_child_0) root_child_0_child_1_child_2_child_0.cornerRadius = 0;

// Start Child: by
const root_child_0_child_1_child_2_child_0_child_0 = figma.createText();
root_child_0_child_1_child_2_child_0_child_0.name = "by";
root_child_0_child_1_child_2_child_0_child_0.visible = true;
root_child_0_child_1_child_2_child_0_child_0.opacity = 1;
root_child_0_child_1_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_0_child_0) root_child_0_child_1_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_0_child_0) root_child_0_child_1_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_0_child_0) root_child_0_child_1_child_2_child_0_child_0.maskType = "ALPHA";
root_child_0_child_1_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_0_child_1_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_0_child_0.strokeWeight = 1;
root_child_0_child_1_child_2_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_0_child_0) root_child_0_child_1_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_0_child_0) root_child_0_child_1_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_0_child_0) root_child_0_child_1_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_1_child_2_child_0_child_0.effects = [];
// Text Properties
root_child_0_child_1_child_2_child_0_child_0.characters = `by `;
root_child_0_child_1_child_2_child_0_child_0.fontSize = 12;
root_child_0_child_1_child_2_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_2_child_0_child_0.textAlignVertical = "TOP";
root_child_0_child_1_child_2_child_0_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_1_child_2_child_0_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_0_child_1_child_2_child_0_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_0_child_1_child_2_child_0_child_0) root_child_0_child_1_child_2_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_2_child_0_child_0) root_child_0_child_1_child_2_child_0_child_0.textDecoration = "NONE";
root_child_0_child_1_child_2_child_0_child_0.paragraphSpacing = 0;
root_child_0_child_1_child_2_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_2_child_0_child_0, {"family":"Open Sans","style":"Light"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_2_child_0_child_0, 0, 3, {"family":"Open Sans","style":"Light"});
root_child_0_child_1_child_2_child_0_child_0.setRangeFills(0, 3, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_0_child_1_child_2_child_0_child_0.setRangeFontSize(0, 3, 12);
root_child_0_child_1_child_2_child_0.appendChild(root_child_0_child_1_child_2_child_0_child_0);
// Child Layout Props
root_child_0_child_1_child_2_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_0_child_0, {"width":13,"height":16,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Alex Calcan
const root_child_0_child_1_child_2_child_0_child_1 = figma.createText();
root_child_0_child_1_child_2_child_0_child_1.name = "Alex Calcan";
root_child_0_child_1_child_2_child_0_child_1.visible = true;
root_child_0_child_1_child_2_child_0_child_1.opacity = 1;
root_child_0_child_1_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_0_child_1) root_child_0_child_1_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_0_child_1) root_child_0_child_1_child_2_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_0_child_1) root_child_0_child_1_child_2_child_0_child_1.maskType = "ALPHA";
root_child_0_child_1_child_2_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_0_child_1_child_2_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_0_child_1.strokeWeight = 1;
root_child_0_child_1_child_2_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_0_child_1) root_child_0_child_1_child_2_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_0_child_1) root_child_0_child_1_child_2_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_0_child_1) root_child_0_child_1_child_2_child_0_child_1.strokeMiterLimit = 4;
root_child_0_child_1_child_2_child_0_child_1.effects = [];
// Text Properties
root_child_0_child_1_child_2_child_0_child_1.characters = `Alex Calcan`;
root_child_0_child_1_child_2_child_0_child_1.fontSize = 14;
root_child_0_child_1_child_2_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_2_child_0_child_1.textAlignVertical = "TOP";
root_child_0_child_1_child_2_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_1_child_2_child_0_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_0_child_1_child_2_child_0_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_0_child_1_child_2_child_0_child_1) root_child_0_child_1_child_2_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_2_child_0_child_1) root_child_0_child_1_child_2_child_0_child_1.textDecoration = "NONE";
root_child_0_child_1_child_2_child_0_child_1.paragraphSpacing = 0;
root_child_0_child_1_child_2_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_2_child_0_child_1, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_2_child_0_child_1, 0, 11, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_1_child_2_child_0_child_1.setRangeFills(0, 11, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_0_child_1_child_2_child_0_child_1.setRangeFontSize(0, 11, 14);
root_child_0_child_1_child_2_child_0.appendChild(root_child_0_child_1_child_2_child_0_child_1);
// Child Layout Props
root_child_0_child_1_child_2_child_0_child_1.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_0_child_1, {"width":78,"height":19,"relativeTransform":[[1,0,17],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_1_child_2.appendChild(root_child_0_child_1_child_2_child_0);
// Child Layout Props
root_child_0_child_1_child_2_child_0.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_0, {"width":95,"height":19,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Rating Block
const root_child_0_child_1_child_2_child_1 = figma.createFrame();
root_child_0_child_1_child_2_child_1.name = "Rating Block";
root_child_0_child_1_child_2_child_1.visible = true;
root_child_0_child_1_child_2_child_1.opacity = 1;
root_child_0_child_1_child_2_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.clipsContent = true;
if ("layoutMode" in root_child_0_child_1_child_2_child_1) {
    root_child_0_child_1_child_2_child_1.layoutMode = "HORIZONTAL";
    root_child_0_child_1_child_2_child_1.primaryAxisSizingMode = "AUTO";
    root_child_0_child_1_child_2_child_1.counterAxisSizingMode = "AUTO";
    root_child_0_child_1_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_0_child_1_child_2_child_1.counterAxisAlignItems = "CENTER";
    root_child_0_child_1_child_2_child_1.itemSpacing = 6;
    root_child_0_child_1_child_2_child_1.paddingTop = 0;
    root_child_0_child_1_child_2_child_1.paddingRight = 0;
    root_child_0_child_1_child_2_child_1.paddingBottom = 0;
    root_child_0_child_1_child_2_child_1.paddingLeft = 0;
    root_child_0_child_1_child_2_child_1.itemReverseZIndex = false;
    root_child_0_child_1_child_2_child_1.strokesIncludedInLayout = false;
}
root_child_0_child_1_child_2_child_1.fills = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1.strokeWeight = 1;
root_child_0_child_1_child_2_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.strokeLeftWeight = 1;
root_child_0_child_1_child_2_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2_child_1) root_child_0_child_1_child_2_child_1.cornerRadius = 0;

// Start Child: Relevance
const root_child_0_child_1_child_2_child_1_child_0 = figma.createText();
root_child_0_child_1_child_2_child_1_child_0.name = "Relevance";
root_child_0_child_1_child_2_child_1_child_0.visible = true;
root_child_0_child_1_child_2_child_1_child_0.opacity = 1;
root_child_0_child_1_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_1_child_0) root_child_0_child_1_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_1_child_0) root_child_0_child_1_child_2_child_1_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_1_child_0) root_child_0_child_1_child_2_child_1_child_0.maskType = "ALPHA";
root_child_0_child_1_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44999998807907104,"g":0.550000011920929,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_0_child_1_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1_child_0.strokeWeight = 1;
root_child_0_child_1_child_2_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_1_child_0) root_child_0_child_1_child_2_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_1_child_0) root_child_0_child_1_child_2_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_1_child_0) root_child_0_child_1_child_2_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_1_child_2_child_1_child_0.effects = [];
// Text Properties
root_child_0_child_1_child_2_child_1_child_0.characters = `Relevance`;
root_child_0_child_1_child_2_child_1_child_0.fontSize = 10;
root_child_0_child_1_child_2_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_2_child_1_child_0.textAlignVertical = "TOP";
root_child_0_child_1_child_2_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_1_child_2_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_0_child_1_child_2_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_0_child_1_child_2_child_1_child_0) root_child_0_child_1_child_2_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_2_child_1_child_0) root_child_0_child_1_child_2_child_1_child_0.textDecoration = "NONE";
root_child_0_child_1_child_2_child_1_child_0.paragraphSpacing = 0;
root_child_0_child_1_child_2_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_2_child_1_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_2_child_1_child_0, 0, 9, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_1_child_2_child_1_child_0.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44999998807907104,"g":0.550000011920929,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_0_child_1_child_2_child_1_child_0.setRangeFontSize(0, 9, 10);
root_child_0_child_1_child_2_child_1.appendChild(root_child_0_child_1_child_2_child_1_child_0);
// Child Layout Props
root_child_0_child_1_child_2_child_1_child_0.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_1_child_0, {"width":49,"height":14,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Rating Stars
const root_child_0_child_1_child_2_child_1_child_1 = figma.createFrame();
root_child_0_child_1_child_2_child_1_child_1.name = "Rating Stars";
root_child_0_child_1_child_2_child_1_child_1.visible = true;
root_child_0_child_1_child_2_child_1_child_1.opacity = 1;
root_child_0_child_1_child_2_child_1_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.clipsContent = true;
if ("layoutMode" in root_child_0_child_1_child_2_child_1_child_1) {
    root_child_0_child_1_child_2_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_0_child_1_child_2_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_0_child_1_child_2_child_1_child_1.counterAxisSizingMode = "AUTO";
    root_child_0_child_1_child_2_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_0_child_1_child_2_child_1_child_1.counterAxisAlignItems = "MIN";
    root_child_0_child_1_child_2_child_1_child_1.itemSpacing = 1;
    root_child_0_child_1_child_2_child_1_child_1.paddingTop = 0;
    root_child_0_child_1_child_2_child_1_child_1.paddingRight = 0;
    root_child_0_child_1_child_2_child_1_child_1.paddingBottom = 0;
    root_child_0_child_1_child_2_child_1_child_1.paddingLeft = 0;
    root_child_0_child_1_child_2_child_1_child_1.itemReverseZIndex = false;
    root_child_0_child_1_child_2_child_1_child_1.strokesIncludedInLayout = false;
}
root_child_0_child_1_child_2_child_1_child_1.fills = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1_child_1.strokeWeight = 1;
root_child_0_child_1_child_2_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.strokeLeftWeight = 1;
root_child_0_child_1_child_2_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1.cornerRadius = 0;

// Start Child: Star 1
root_child_0_child_1_child_2_child_1_child_1_child_0.name = "Star 1";
root_child_0_child_1_child_2_child_1_child_1_child_0.visible = true;
root_child_0_child_1_child_2_child_1_child_1_child_0.opacity = 1;
root_child_0_child_1_child_2_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_1_child_1_child_0) root_child_0_child_1_child_2_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_1_child_1_child_0) root_child_0_child_1_child_2_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_1_child_1_child_0) root_child_0_child_1_child_2_child_1_child_1_child_0.maskType = "ALPHA";
root_child_0_child_1_child_2_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1_child_1_child_0.strokeWeight = 1;
root_child_0_child_1_child_2_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_1_child_1_child_0) root_child_0_child_1_child_2_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_1_child_1_child_0) root_child_0_child_1_child_2_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_1_child_1_child_0) root_child_0_child_1_child_2_child_1_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_1_child_2_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2_child_1_child_1_child_0) root_child_0_child_1_child_2_child_1_child_1_child_0.cornerRadius = 0;
root_child_0_child_1_child_2_child_1_child_1.appendChild(root_child_0_child_1_child_2_child_1_child_1_child_0);
// Child Layout Props
root_child_0_child_1_child_2_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_1_child_1_child_0, {"width":12,"height":12,"relativeTransform":[[1,0,-1.0248015769320773e-9],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 2
root_child_0_child_1_child_2_child_1_child_1_child_1.name = "Star 2";
root_child_0_child_1_child_2_child_1_child_1_child_1.visible = true;
root_child_0_child_1_child_2_child_1_child_1_child_1.opacity = 1;
root_child_0_child_1_child_2_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_1_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_1_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_1_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1_child_1.maskType = "ALPHA";
root_child_0_child_1_child_2_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1_child_1_child_1.strokeWeight = 1;
root_child_0_child_1_child_2_child_1_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_1_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_1_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_1_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1_child_1.strokeMiterLimit = 4;
root_child_0_child_1_child_2_child_1_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2_child_1_child_1_child_1) root_child_0_child_1_child_2_child_1_child_1_child_1.cornerRadius = 0;
root_child_0_child_1_child_2_child_1_child_1.appendChild(root_child_0_child_1_child_2_child_1_child_1_child_1);
// Child Layout Props
root_child_0_child_1_child_2_child_1_child_1_child_1.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_1_child_1_child_1, {"width":12,"height":12,"relativeTransform":[[1,0,13],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 3
root_child_0_child_1_child_2_child_1_child_1_child_2.name = "Star 3";
root_child_0_child_1_child_2_child_1_child_1_child_2.visible = true;
root_child_0_child_1_child_2_child_1_child_1_child_2.opacity = 1;
root_child_0_child_1_child_2_child_1_child_1_child_2.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_1_child_1_child_2) root_child_0_child_1_child_2_child_1_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_1_child_1_child_2) root_child_0_child_1_child_2_child_1_child_1_child_2.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_1_child_1_child_2) root_child_0_child_1_child_2_child_1_child_1_child_2.maskType = "ALPHA";
root_child_0_child_1_child_2_child_1_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1_child_1_child_2.strokeWeight = 1;
root_child_0_child_1_child_2_child_1_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_1_child_1_child_2) root_child_0_child_1_child_2_child_1_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_1_child_1_child_2) root_child_0_child_1_child_2_child_1_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_1_child_1_child_2) root_child_0_child_1_child_2_child_1_child_1_child_2.strokeMiterLimit = 4;
root_child_0_child_1_child_2_child_1_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2_child_1_child_1_child_2) root_child_0_child_1_child_2_child_1_child_1_child_2.cornerRadius = 0;
root_child_0_child_1_child_2_child_1_child_1.appendChild(root_child_0_child_1_child_2_child_1_child_1_child_2);
// Child Layout Props
root_child_0_child_1_child_2_child_1_child_1_child_2.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_1_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_1_child_1_child_2, {"width":12,"height":12,"relativeTransform":[[1,0,26],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 4
root_child_0_child_1_child_2_child_1_child_1_child_3.name = "Star 4";
root_child_0_child_1_child_2_child_1_child_1_child_3.visible = true;
root_child_0_child_1_child_2_child_1_child_1_child_3.opacity = 1;
root_child_0_child_1_child_2_child_1_child_1_child_3.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_1_child_1_child_3) root_child_0_child_1_child_2_child_1_child_1_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_1_child_1_child_3) root_child_0_child_1_child_2_child_1_child_1_child_3.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_1_child_1_child_3) root_child_0_child_1_child_2_child_1_child_1_child_3.maskType = "ALPHA";
root_child_0_child_1_child_2_child_1_child_1_child_3.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1_child_1_child_3.strokeWeight = 1;
root_child_0_child_1_child_2_child_1_child_1_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_1_child_1_child_3) root_child_0_child_1_child_2_child_1_child_1_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_1_child_1_child_3) root_child_0_child_1_child_2_child_1_child_1_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_1_child_1_child_3) root_child_0_child_1_child_2_child_1_child_1_child_3.strokeMiterLimit = 4;
root_child_0_child_1_child_2_child_1_child_1_child_3.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2_child_1_child_1_child_3) root_child_0_child_1_child_2_child_1_child_1_child_3.cornerRadius = 0;
root_child_0_child_1_child_2_child_1_child_1.appendChild(root_child_0_child_1_child_2_child_1_child_1_child_3);
// Child Layout Props
root_child_0_child_1_child_2_child_1_child_1_child_3.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_1_child_1_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_1_child_1_child_3, {"width":12,"height":12,"relativeTransform":[[1,0,39],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 5
root_child_0_child_1_child_2_child_1_child_1_child_4.name = "Star 5";
root_child_0_child_1_child_2_child_1_child_1_child_4.visible = true;
root_child_0_child_1_child_2_child_1_child_1_child_4.opacity = 1;
root_child_0_child_1_child_2_child_1_child_1_child_4.locked = false;
if ("blendMode" in root_child_0_child_1_child_2_child_1_child_1_child_4) root_child_0_child_1_child_2_child_1_child_1_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2_child_1_child_1_child_4) root_child_0_child_1_child_2_child_1_child_1_child_4.isMask = false;
if ("maskType" in root_child_0_child_1_child_2_child_1_child_1_child_4) root_child_0_child_1_child_2_child_1_child_1_child_4.maskType = "ALPHA";
root_child_0_child_1_child_2_child_1_child_1_child_4.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2_child_1_child_1_child_4.strokeWeight = 1;
root_child_0_child_1_child_2_child_1_child_1_child_4.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_2_child_1_child_1_child_4) root_child_0_child_1_child_2_child_1_child_1_child_4.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2_child_1_child_1_child_4) root_child_0_child_1_child_2_child_1_child_1_child_4.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2_child_1_child_1_child_4) root_child_0_child_1_child_2_child_1_child_1_child_4.strokeMiterLimit = 4;
root_child_0_child_1_child_2_child_1_child_1_child_4.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2_child_1_child_1_child_4) root_child_0_child_1_child_2_child_1_child_1_child_4.cornerRadius = 0;
root_child_0_child_1_child_2_child_1_child_1.appendChild(root_child_0_child_1_child_2_child_1_child_1_child_4);
// Child Layout Props
root_child_0_child_1_child_2_child_1_child_1_child_4.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_1_child_1_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_1_child_1_child_4, {"width":12,"height":12,"relativeTransform":[[1,0,52],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_1_child_2_child_1.appendChild(root_child_0_child_1_child_2_child_1_child_1);
// Child Layout Props
root_child_0_child_1_child_2_child_1_child_1.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_1_child_1, {"width":64,"height":12,"relativeTransform":[[1,0,55],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_1_child_2.appendChild(root_child_0_child_1_child_2_child_1);
// Child Layout Props
root_child_0_child_1_child_2_child_1.layoutAlign = "INHERIT";
root_child_0_child_1_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2_child_1, {"width":119,"height":14,"relativeTransform":[[1,0,0],[0,1,23]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_1.appendChild(root_child_0_child_1_child_2);
// Child Layout Props
root_child_0_child_1_child_2.layoutAlign = "STRETCH";
root_child_0_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_2, {"width":311,"height":37,"relativeTransform":[[1,0,16],[0,1,159]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_1);
// Child Layout Props
root_child_0_child_1.layoutAlign = "STRETCH";
root_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1, {"width":343,"height":212,"relativeTransform":[[1,0,0],[0,1,229]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "INHERIT";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":343,"height":441,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Card 2
const root_child_1 = figma.createFrame();
root_child_1.name = "Card 2";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1) root_child_1.isMask = false;
if ("maskType" in root_child_1) root_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1) root_child_1.clipsContent = true;
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
if ("cornerRadius" in root_child_1) root_child_1.cornerRadius = 12;

// Start Child: Image Container
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Image Container";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_0) root_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0) root_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":1,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"d6f3b23264dd483546de453eeef7c6782b5d923f","assetRef":IMG_uefa_cards_4x_procedural_repro_img_2_png}]);
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
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "STRETCH";
root_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0, {"width":343,"height":229,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Content Padding
const root_child_1_child_1 = figma.createFrame();
root_child_1_child_1.name = "Content Padding";
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
    root_child_1_child_1.paddingTop = 16;
    root_child_1_child_1.paddingRight = 16;
    root_child_1_child_1.paddingBottom = 16;
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

// Start Child: Advanced Coaching Techniques 2026
const root_child_1_child_1_child_0 = figma.createText();
root_child_1_child_1_child_0.name = "Advanced Coaching Techniques 2026";
root_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.maskType = "ALPHA";
root_child_1_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokeWeight = 1;
root_child_1_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_0.characters = `Advanced Coaching Techniques 2026`;
root_child_1_child_1_child_0.fontSize = 20;
root_child_1_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_0.textAlignVertical = "TOP";
root_child_1_child_1_child_0.textAutoResize = "HEIGHT";
root_child_1_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.textDecoration = "NONE";
root_child_1_child_1_child_0.paragraphSpacing = 0;
root_child_1_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_0, 0, 33, {"family":"Open Sans","style":"SemiBold"});
root_child_1_child_1_child_0.setRangeFills(0, 33, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_1_child_1_child_0.setRangeFontSize(0, 33, 20);
root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_0.layoutAlign = "STRETCH";
root_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0, {"width":311,"height":54,"relativeTransform":[[1,0,16],[0,1,16]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.
const root_child_1_child_1_child_1 = figma.createText();
root_child_1_child_1_child_1.name = "Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.";
root_child_1_child_1_child_1.visible = true;
root_child_1_child_1_child_1.opacity = 1;
root_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.maskType = "ALPHA";
root_child_1_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1.strokeWeight = 1;
root_child_1_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_1.characters = `Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.`;
root_child_1_child_1_child_1.fontSize = 14;
root_child_1_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_1.textAlignVertical = "TOP";
root_child_1_child_1_child_1.textAutoResize = "HEIGHT";
root_child_1_child_1_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.textDecoration = "NONE";
root_child_1_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_1, 0, 101, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_1.setRangeFills(0, 101, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_1_child_1_child_1.setRangeFontSize(0, 101, 14);
root_child_1_child_1.appendChild(root_child_1_child_1_child_1);
// Child Layout Props
root_child_1_child_1_child_1.layoutAlign = "STRETCH";
root_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1, {"width":311,"height":57,"relativeTransform":[[1,0,16],[0,1,86]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Footer
const root_child_1_child_1_child_2 = figma.createFrame();
root_child_1_child_1_child_2.name = "Footer";
root_child_1_child_1_child_2.visible = true;
root_child_1_child_1_child_2.opacity = 1;
root_child_1_child_1_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.isMask = false;
if ("maskType" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_2) root_child_1_child_1_child_2.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_2) {
    root_child_1_child_1_child_2.layoutMode = "VERTICAL";
    root_child_1_child_1_child_2.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2.counterAxisSizingMode = "FIXED";
    root_child_1_child_1_child_2.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_2.counterAxisAlignItems = "MIN";
    root_child_1_child_1_child_2.itemSpacing = 4;
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

// Start Child: Author Info
const root_child_1_child_1_child_2_child_0 = figma.createFrame();
root_child_1_child_1_child_2_child_0.name = "Author Info";
root_child_1_child_1_child_2_child_0.visible = true;
root_child_1_child_1_child_2_child_0.opacity = 1;
root_child_1_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_2_child_0) {
    root_child_1_child_1_child_2_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_2_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_2_child_0.counterAxisAlignItems = "MIN";
    root_child_1_child_1_child_2_child_0.itemSpacing = 4;
    root_child_1_child_1_child_2_child_0.paddingTop = 0;
    root_child_1_child_1_child_2_child_0.paddingRight = 0;
    root_child_1_child_1_child_2_child_0.paddingBottom = 0;
    root_child_1_child_1_child_2_child_0.paddingLeft = 0;
    root_child_1_child_1_child_2_child_0.itemReverseZIndex = false;
    root_child_1_child_1_child_2_child_0.strokesIncludedInLayout = false;
}
root_child_1_child_1_child_2_child_0.fills = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_0.strokes = await this.hydratePaints([]);
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
if ("cornerRadius" in root_child_1_child_1_child_2_child_0) root_child_1_child_1_child_2_child_0.cornerRadius = 0;

// Start Child: by
const root_child_1_child_1_child_2_child_0_child_0 = figma.createText();
root_child_1_child_1_child_2_child_0_child_0.name = "by";
root_child_1_child_1_child_2_child_0_child_0.visible = true;
root_child_1_child_1_child_2_child_0_child_0.opacity = 1;
root_child_1_child_1_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_0_child_0) root_child_1_child_1_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_0_child_0) root_child_1_child_1_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_0_child_0) root_child_1_child_1_child_2_child_0_child_0.maskType = "ALPHA";
root_child_1_child_1_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_0_child_0.strokeWeight = 1;
root_child_1_child_1_child_2_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_0_child_0) root_child_1_child_1_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_0_child_0) root_child_1_child_1_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_0_child_0) root_child_1_child_1_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_0_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_2_child_0_child_0.characters = `by `;
root_child_1_child_1_child_2_child_0_child_0.fontSize = 12;
root_child_1_child_1_child_2_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_2_child_0_child_0.textAlignVertical = "TOP";
root_child_1_child_1_child_2_child_0_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_2_child_0_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_2_child_0_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_2_child_0_child_0) root_child_1_child_1_child_2_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_2_child_0_child_0) root_child_1_child_1_child_2_child_0_child_0.textDecoration = "NONE";
root_child_1_child_1_child_2_child_0_child_0.paragraphSpacing = 0;
root_child_1_child_1_child_2_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_2_child_0_child_0, {"family":"Open Sans","style":"Light"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_2_child_0_child_0, 0, 3, {"family":"Open Sans","style":"Light"});
root_child_1_child_1_child_2_child_0_child_0.setRangeFills(0, 3, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_0_child_0.setRangeFontSize(0, 3, 12);
root_child_1_child_1_child_2_child_0.appendChild(root_child_1_child_1_child_2_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_2_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_0_child_0, {"width":13,"height":16,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Mihai Popescu
const root_child_1_child_1_child_2_child_0_child_1 = figma.createText();
root_child_1_child_1_child_2_child_0_child_1.name = "Mihai Popescu";
root_child_1_child_1_child_2_child_0_child_1.visible = true;
root_child_1_child_1_child_2_child_0_child_1.opacity = 1;
root_child_1_child_1_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_0_child_1) root_child_1_child_1_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_0_child_1) root_child_1_child_1_child_2_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_0_child_1) root_child_1_child_1_child_2_child_0_child_1.maskType = "ALPHA";
root_child_1_child_1_child_2_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_0_child_1.strokeWeight = 1;
root_child_1_child_1_child_2_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_0_child_1) root_child_1_child_1_child_2_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_0_child_1) root_child_1_child_1_child_2_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_0_child_1) root_child_1_child_1_child_2_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_2_child_0_child_1.characters = `Mihai Popescu`;
root_child_1_child_1_child_2_child_0_child_1.fontSize = 14;
root_child_1_child_1_child_2_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_2_child_0_child_1.textAlignVertical = "TOP";
root_child_1_child_1_child_2_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_2_child_0_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_2_child_0_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_2_child_0_child_1) root_child_1_child_1_child_2_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_2_child_0_child_1) root_child_1_child_1_child_2_child_0_child_1.textDecoration = "NONE";
root_child_1_child_1_child_2_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_2_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_2_child_0_child_1, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_2_child_0_child_1, 0, 13, {"family":"Open Sans","style":"SemiBold"});
root_child_1_child_1_child_2_child_0_child_1.setRangeFills(0, 13, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_0_child_1.setRangeFontSize(0, 13, 14);
root_child_1_child_1_child_2_child_0.appendChild(root_child_1_child_1_child_2_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_2_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_0_child_1, {"width":99,"height":19,"relativeTransform":[[1,0,17],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_2.appendChild(root_child_1_child_1_child_2_child_0);
// Child Layout Props
root_child_1_child_1_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_0, {"width":116,"height":19,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Rating Block
const root_child_1_child_1_child_2_child_1 = figma.createFrame();
root_child_1_child_1_child_2_child_1.name = "Rating Block";
root_child_1_child_1_child_2_child_1.visible = true;
root_child_1_child_1_child_2_child_1.opacity = 1;
root_child_1_child_1_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_2_child_1) {
    root_child_1_child_1_child_2_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_2_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_2_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_2_child_1.itemSpacing = 6;
    root_child_1_child_1_child_2_child_1.paddingTop = 0;
    root_child_1_child_1_child_2_child_1.paddingRight = 0;
    root_child_1_child_1_child_2_child_1.paddingBottom = 0;
    root_child_1_child_1_child_2_child_1.paddingLeft = 0;
    root_child_1_child_1_child_2_child_1.itemReverseZIndex = false;
    root_child_1_child_1_child_2_child_1.strokesIncludedInLayout = false;
}
root_child_1_child_1_child_2_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1.strokeWeight = 1;
root_child_1_child_1_child_2_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.strokeLeftWeight = 1;
root_child_1_child_1_child_2_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2_child_1) root_child_1_child_1_child_2_child_1.cornerRadius = 0;

// Start Child: Relevance
const root_child_1_child_1_child_2_child_1_child_0 = figma.createText();
root_child_1_child_1_child_2_child_1_child_0.name = "Relevance";
root_child_1_child_1_child_2_child_1_child_0.visible = true;
root_child_1_child_1_child_2_child_1_child_0.opacity = 1;
root_child_1_child_1_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1_child_0) root_child_1_child_1_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1_child_0) root_child_1_child_1_child_2_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1_child_0) root_child_1_child_1_child_2_child_1_child_0.maskType = "ALPHA";
root_child_1_child_1_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44999998807907104,"g":0.550000011920929,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1_child_0.strokeWeight = 1;
root_child_1_child_1_child_2_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1_child_0) root_child_1_child_1_child_2_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1_child_0) root_child_1_child_1_child_2_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1_child_0) root_child_1_child_1_child_2_child_1_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_1_child_0.effects = [];
// Text Properties
root_child_1_child_1_child_2_child_1_child_0.characters = `Relevance`;
root_child_1_child_1_child_2_child_1_child_0.fontSize = 10;
root_child_1_child_1_child_2_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_2_child_1_child_0.textAlignVertical = "TOP";
root_child_1_child_1_child_2_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_2_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_1_child_1_child_2_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_1_child_1_child_2_child_1_child_0) root_child_1_child_1_child_2_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_2_child_1_child_0) root_child_1_child_1_child_2_child_1_child_0.textDecoration = "NONE";
root_child_1_child_1_child_2_child_1_child_0.paragraphSpacing = 0;
root_child_1_child_1_child_2_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_2_child_1_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_2_child_1_child_0, 0, 9, {"family":"Open Sans","style":"SemiBold"});
root_child_1_child_1_child_2_child_1_child_0.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44999998807907104,"g":0.550000011920929,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_1_child_1_child_2_child_1_child_0.setRangeFontSize(0, 9, 10);
root_child_1_child_1_child_2_child_1.appendChild(root_child_1_child_1_child_2_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_2_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1_child_0, {"width":49,"height":14,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Rating Stars
const root_child_1_child_1_child_2_child_1_child_1 = figma.createFrame();
root_child_1_child_1_child_2_child_1_child_1.name = "Rating Stars";
root_child_1_child_1_child_2_child_1_child_1.visible = true;
root_child_1_child_1_child_2_child_1_child_1.opacity = 1;
root_child_1_child_1_child_2_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_2_child_1_child_1) {
    root_child_1_child_1_child_2_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_2_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2_child_1_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_2_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_2_child_1_child_1.counterAxisAlignItems = "MIN";
    root_child_1_child_1_child_2_child_1_child_1.itemSpacing = 1;
    root_child_1_child_1_child_2_child_1_child_1.paddingTop = 0;
    root_child_1_child_1_child_2_child_1_child_1.paddingRight = 0;
    root_child_1_child_1_child_2_child_1_child_1.paddingBottom = 0;
    root_child_1_child_1_child_2_child_1_child_1.paddingLeft = 0;
    root_child_1_child_1_child_2_child_1_child_1.itemReverseZIndex = false;
    root_child_1_child_1_child_2_child_1_child_1.strokesIncludedInLayout = false;
}
root_child_1_child_1_child_2_child_1_child_1.fills = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1_child_1.strokeWeight = 1;
root_child_1_child_1_child_2_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.strokeLeftWeight = 1;
root_child_1_child_1_child_2_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1.cornerRadius = 0;

// Start Child: Star 1
root_child_1_child_1_child_2_child_1_child_1_child_0.name = "Star 1";
root_child_1_child_1_child_2_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_2_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_2_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1_child_1_child_0) root_child_1_child_1_child_2_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1_child_1_child_0) root_child_1_child_1_child_2_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1_child_1_child_0) root_child_1_child_1_child_2_child_1_child_1_child_0.maskType = "ALPHA";
root_child_1_child_1_child_2_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1_child_1_child_0.strokeWeight = 1;
root_child_1_child_1_child_2_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1_child_1_child_0) root_child_1_child_1_child_2_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1_child_1_child_0) root_child_1_child_1_child_2_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1_child_1_child_0) root_child_1_child_1_child_2_child_1_child_1_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2_child_1_child_1_child_0) root_child_1_child_1_child_2_child_1_child_1_child_0.cornerRadius = 0;
root_child_1_child_1_child_2_child_1_child_1.appendChild(root_child_1_child_1_child_2_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_2_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1_child_1_child_0, {"width":12,"height":12,"relativeTransform":[[1,0,-1.0248299986415077e-9],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 2
root_child_1_child_1_child_2_child_1_child_1_child_1.name = "Star 2";
root_child_1_child_1_child_2_child_1_child_1_child_1.visible = true;
root_child_1_child_1_child_2_child_1_child_1_child_1.opacity = 1;
root_child_1_child_1_child_2_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1_child_1.maskType = "ALPHA";
root_child_1_child_1_child_2_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1_child_1_child_1.strokeWeight = 1;
root_child_1_child_1_child_2_child_1_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_1_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2_child_1_child_1_child_1) root_child_1_child_1_child_2_child_1_child_1_child_1.cornerRadius = 0;
root_child_1_child_1_child_2_child_1_child_1.appendChild(root_child_1_child_1_child_2_child_1_child_1_child_1);
// Child Layout Props
root_child_1_child_1_child_2_child_1_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1_child_1_child_1, {"width":12,"height":12,"relativeTransform":[[1,0,13],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 3
root_child_1_child_1_child_2_child_1_child_1_child_2.name = "Star 3";
root_child_1_child_1_child_2_child_1_child_1_child_2.visible = true;
root_child_1_child_1_child_2_child_1_child_1_child_2.opacity = 1;
root_child_1_child_1_child_2_child_1_child_1_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1_child_1_child_2) root_child_1_child_1_child_2_child_1_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1_child_1_child_2) root_child_1_child_1_child_2_child_1_child_1_child_2.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1_child_1_child_2) root_child_1_child_1_child_2_child_1_child_1_child_2.maskType = "ALPHA";
root_child_1_child_1_child_2_child_1_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1_child_1_child_2.strokeWeight = 1;
root_child_1_child_1_child_2_child_1_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1_child_1_child_2) root_child_1_child_1_child_2_child_1_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1_child_1_child_2) root_child_1_child_1_child_2_child_1_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1_child_1_child_2) root_child_1_child_1_child_2_child_1_child_1_child_2.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_1_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2_child_1_child_1_child_2) root_child_1_child_1_child_2_child_1_child_1_child_2.cornerRadius = 0;
root_child_1_child_1_child_2_child_1_child_1.appendChild(root_child_1_child_1_child_2_child_1_child_1_child_2);
// Child Layout Props
root_child_1_child_1_child_2_child_1_child_1_child_2.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1_child_1_child_2, {"width":12,"height":12,"relativeTransform":[[1,0,26],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 4
root_child_1_child_1_child_2_child_1_child_1_child_3.name = "Star 4";
root_child_1_child_1_child_2_child_1_child_1_child_3.visible = true;
root_child_1_child_1_child_2_child_1_child_1_child_3.opacity = 1;
root_child_1_child_1_child_2_child_1_child_1_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1_child_1_child_3) root_child_1_child_1_child_2_child_1_child_1_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1_child_1_child_3) root_child_1_child_1_child_2_child_1_child_1_child_3.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1_child_1_child_3) root_child_1_child_1_child_2_child_1_child_1_child_3.maskType = "ALPHA";
root_child_1_child_1_child_2_child_1_child_1_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1_child_1_child_3.strokeWeight = 1;
root_child_1_child_1_child_2_child_1_child_1_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1_child_1_child_3) root_child_1_child_1_child_2_child_1_child_1_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1_child_1_child_3) root_child_1_child_1_child_2_child_1_child_1_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1_child_1_child_3) root_child_1_child_1_child_2_child_1_child_1_child_3.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_1_child_1_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2_child_1_child_1_child_3) root_child_1_child_1_child_2_child_1_child_1_child_3.cornerRadius = 0;
root_child_1_child_1_child_2_child_1_child_1.appendChild(root_child_1_child_1_child_2_child_1_child_1_child_3);
// Child Layout Props
root_child_1_child_1_child_2_child_1_child_1_child_3.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1_child_1_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1_child_1_child_3, {"width":12,"height":12,"relativeTransform":[[1,0,39],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 5
root_child_1_child_1_child_2_child_1_child_1_child_4.name = "Star 5";
root_child_1_child_1_child_2_child_1_child_1_child_4.visible = true;
root_child_1_child_1_child_2_child_1_child_1_child_4.opacity = 1;
root_child_1_child_1_child_2_child_1_child_1_child_4.locked = false;
if ("blendMode" in root_child_1_child_1_child_2_child_1_child_1_child_4) root_child_1_child_1_child_2_child_1_child_1_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_2_child_1_child_1_child_4) root_child_1_child_1_child_2_child_1_child_1_child_4.isMask = false;
if ("maskType" in root_child_1_child_1_child_2_child_1_child_1_child_4) root_child_1_child_1_child_2_child_1_child_1_child_4.maskType = "ALPHA";
root_child_1_child_1_child_2_child_1_child_1_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_2_child_1_child_1_child_4.strokeWeight = 1;
root_child_1_child_1_child_2_child_1_child_1_child_4.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_2_child_1_child_1_child_4) root_child_1_child_1_child_2_child_1_child_1_child_4.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_2_child_1_child_1_child_4) root_child_1_child_1_child_2_child_1_child_1_child_4.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_2_child_1_child_1_child_4) root_child_1_child_1_child_2_child_1_child_1_child_4.strokeMiterLimit = 4;
root_child_1_child_1_child_2_child_1_child_1_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_2_child_1_child_1_child_4) root_child_1_child_1_child_2_child_1_child_1_child_4.cornerRadius = 0;
root_child_1_child_1_child_2_child_1_child_1.appendChild(root_child_1_child_1_child_2_child_1_child_1_child_4);
// Child Layout Props
root_child_1_child_1_child_2_child_1_child_1_child_4.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1_child_1_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1_child_1_child_4, {"width":12,"height":12,"relativeTransform":[[1,0,52],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_2_child_1.appendChild(root_child_1_child_1_child_2_child_1_child_1);
// Child Layout Props
root_child_1_child_1_child_2_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1_child_1, {"width":64,"height":12,"relativeTransform":[[1,0,55],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_2.appendChild(root_child_1_child_1_child_2_child_1);
// Child Layout Props
root_child_1_child_1_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2_child_1, {"width":119,"height":14,"relativeTransform":[[1,0,0],[0,1,23]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_2);
// Child Layout Props
root_child_1_child_1_child_2.layoutAlign = "STRETCH";
root_child_1_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_2, {"width":311,"height":37,"relativeTransform":[[1,0,16],[0,1,159]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_1);
// Child Layout Props
root_child_1_child_1.layoutAlign = "STRETCH";
root_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1, {"width":343,"height":212,"relativeTransform":[[1,0,0],[0,1,229]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "INHERIT";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":343,"height":441,"relativeTransform":[[1,0,367],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Card 3
const root_child_2 = figma.createFrame();
root_child_2.name = "Card 3";
root_child_2.visible = true;
root_child_2.opacity = 1;
root_child_2.locked = false;
if ("blendMode" in root_child_2) root_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2) root_child_2.isMask = false;
if ("maskType" in root_child_2) root_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_2) root_child_2.clipsContent = true;
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
if ("cornerRadius" in root_child_2) root_child_2.cornerRadius = 12;

// Start Child: Image Container
const root_child_2_child_0 = figma.createFrame();
root_child_2_child_0.name = "Image Container";
root_child_2_child_0.visible = true;
root_child_2_child_0.opacity = 1;
root_child_2_child_0.locked = false;
if ("blendMode" in root_child_2_child_0) root_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_0) root_child_2_child_0.isMask = false;
if ("maskType" in root_child_2_child_0) root_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_0) root_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_2_child_0) {
    root_child_2_child_0.layoutMode = "NONE";
}
root_child_2_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":1,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"707cbb62af7d9774194feffae7db7284a4719141","assetRef":IMG_uefa_cards_4x_procedural_repro_img_3_png}]);
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
if ("cornerRadius" in root_child_2_child_0) root_child_2_child_0.cornerRadius = 0;

// Start Child: Play Icon
root_child_2_child_0_child_0.name = "Play Icon";
root_child_2_child_0_child_0.visible = true;
root_child_2_child_0_child_0.opacity = 1;
root_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_2_child_0_child_0) root_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_0_child_0) root_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_2_child_0_child_0) root_child_2_child_0_child_0.maskType = "ALPHA";
root_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_0_child_0.strokeWeight = 1;
root_child_2_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_0_child_0) root_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_0_child_0) root_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_0_child_0) root_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_0_child_0) root_child_2_child_0_child_0.cornerRadius = 0;
root_child_2_child_0.appendChild(root_child_2_child_0_child_0);
applySizeAndTransform(root_child_2_child_0_child_0, {"width":54,"height":54,"relativeTransform":[[1,0,144],[0,1,87]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_2_child_0_child_0.x = 144;
root_child_2_child_0_child_0.y = 87;
root_child_2.appendChild(root_child_2_child_0);
// Child Layout Props
root_child_2_child_0.layoutAlign = "STRETCH";
root_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_0, {"width":343,"height":229,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Content Padding
const root_child_2_child_1 = figma.createFrame();
root_child_2_child_1.name = "Content Padding";
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
    root_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_2_child_1.counterAxisAlignItems = "MIN";
    root_child_2_child_1.itemSpacing = 16;
    root_child_2_child_1.paddingTop = 16;
    root_child_2_child_1.paddingRight = 16;
    root_child_2_child_1.paddingBottom = 16;
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

// Start Child: Youth Academy Growth Strategy
const root_child_2_child_1_child_0 = figma.createText();
root_child_2_child_1_child_0.name = "Youth Academy Growth Strategy";
root_child_2_child_1_child_0.visible = true;
root_child_2_child_1_child_0.opacity = 1;
root_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.maskType = "ALPHA";
root_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0.strokeWeight = 1;
root_child_2_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.strokeMiterLimit = 4;
root_child_2_child_1_child_0.effects = [];
// Text Properties
root_child_2_child_1_child_0.characters = `Youth Academy Growth Strategy`;
root_child_2_child_1_child_0.fontSize = 20;
root_child_2_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_2_child_1_child_0.textAlignVertical = "TOP";
root_child_2_child_1_child_0.textAutoResize = "HEIGHT";
root_child_2_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_2_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.textDecoration = "NONE";
root_child_2_child_1_child_0.paragraphSpacing = 0;
root_child_2_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_2_child_1_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_2_child_1_child_0, 0, 29, {"family":"Open Sans","style":"SemiBold"});
root_child_2_child_1_child_0.setRangeFills(0, 29, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_2_child_1_child_0.setRangeFontSize(0, 29, 20);
root_child_2_child_1.appendChild(root_child_2_child_1_child_0);
// Child Layout Props
root_child_2_child_1_child_0.layoutAlign = "STRETCH";
root_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_0, {"width":311,"height":54,"relativeTransform":[[1,0,16],[0,1,16]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.
const root_child_2_child_1_child_1 = figma.createText();
root_child_2_child_1_child_1.name = "Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.";
root_child_2_child_1_child_1.visible = true;
root_child_2_child_1_child_1.opacity = 1;
root_child_2_child_1_child_1.locked = false;
if ("blendMode" in root_child_2_child_1_child_1) root_child_2_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_1) root_child_2_child_1_child_1.isMask = false;
if ("maskType" in root_child_2_child_1_child_1) root_child_2_child_1_child_1.maskType = "ALPHA";
root_child_2_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_2_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_1.strokeWeight = 1;
root_child_2_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_2_child_1_child_1) root_child_2_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_1) root_child_2_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_1) root_child_2_child_1_child_1.strokeMiterLimit = 4;
root_child_2_child_1_child_1.effects = [];
// Text Properties
root_child_2_child_1_child_1.characters = `Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.`;
root_child_2_child_1_child_1.fontSize = 14;
root_child_2_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_2_child_1_child_1.textAlignVertical = "TOP";
root_child_2_child_1_child_1.textAutoResize = "HEIGHT";
root_child_2_child_1_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_2_child_1_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_2_child_1_child_1) root_child_2_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_2_child_1_child_1) root_child_2_child_1_child_1.textDecoration = "NONE";
root_child_2_child_1_child_1.paragraphSpacing = 0;
root_child_2_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_2_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_2_child_1_child_1, 0, 105, {"family":"Open Sans","style":"Regular"});
root_child_2_child_1_child_1.setRangeFills(0, 105, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_2_child_1_child_1.setRangeFontSize(0, 105, 14);
root_child_2_child_1.appendChild(root_child_2_child_1_child_1);
// Child Layout Props
root_child_2_child_1_child_1.layoutAlign = "STRETCH";
root_child_2_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_1, {"width":311,"height":57,"relativeTransform":[[1,0,16],[0,1,86]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Footer
const root_child_2_child_1_child_2 = figma.createFrame();
root_child_2_child_1_child_2.name = "Footer";
root_child_2_child_1_child_2.visible = true;
root_child_2_child_1_child_2.opacity = 1;
root_child_2_child_1_child_2.locked = false;
if ("blendMode" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.isMask = false;
if ("maskType" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.clipsContent = true;
if ("layoutMode" in root_child_2_child_1_child_2) {
    root_child_2_child_1_child_2.layoutMode = "VERTICAL";
    root_child_2_child_1_child_2.primaryAxisSizingMode = "AUTO";
    root_child_2_child_1_child_2.counterAxisSizingMode = "FIXED";
    root_child_2_child_1_child_2.primaryAxisAlignItems = "MIN";
    root_child_2_child_1_child_2.counterAxisAlignItems = "MIN";
    root_child_2_child_1_child_2.itemSpacing = 4;
    root_child_2_child_1_child_2.paddingTop = 0;
    root_child_2_child_1_child_2.paddingRight = 0;
    root_child_2_child_1_child_2.paddingBottom = 0;
    root_child_2_child_1_child_2.paddingLeft = 0;
    root_child_2_child_1_child_2.itemReverseZIndex = false;
    root_child_2_child_1_child_2.strokesIncludedInLayout = false;
}
root_child_2_child_1_child_2.fills = await this.hydratePaints([]);
root_child_2_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2.strokeWeight = 1;
root_child_2_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.strokeLeftWeight = 1;
root_child_2_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2) root_child_2_child_1_child_2.cornerRadius = 0;

// Start Child: Author Info
const root_child_2_child_1_child_2_child_0 = figma.createFrame();
root_child_2_child_1_child_2_child_0.name = "Author Info";
root_child_2_child_1_child_2_child_0.visible = true;
root_child_2_child_1_child_2_child_0.opacity = 1;
root_child_2_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_2_child_1_child_2_child_0) {
    root_child_2_child_1_child_2_child_0.layoutMode = "HORIZONTAL";
    root_child_2_child_1_child_2_child_0.primaryAxisSizingMode = "AUTO";
    root_child_2_child_1_child_2_child_0.counterAxisSizingMode = "AUTO";
    root_child_2_child_1_child_2_child_0.primaryAxisAlignItems = "MIN";
    root_child_2_child_1_child_2_child_0.counterAxisAlignItems = "MIN";
    root_child_2_child_1_child_2_child_0.itemSpacing = 4;
    root_child_2_child_1_child_2_child_0.paddingTop = 0;
    root_child_2_child_1_child_2_child_0.paddingRight = 0;
    root_child_2_child_1_child_2_child_0.paddingBottom = 0;
    root_child_2_child_1_child_2_child_0.paddingLeft = 0;
    root_child_2_child_1_child_2_child_0.itemReverseZIndex = false;
    root_child_2_child_1_child_2_child_0.strokesIncludedInLayout = false;
}
root_child_2_child_1_child_2_child_0.fills = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_0.strokeWeight = 1;
root_child_2_child_1_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.strokeLeftWeight = 1;
root_child_2_child_1_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2_child_0) root_child_2_child_1_child_2_child_0.cornerRadius = 0;

// Start Child: by
const root_child_2_child_1_child_2_child_0_child_0 = figma.createText();
root_child_2_child_1_child_2_child_0_child_0.name = "by";
root_child_2_child_1_child_2_child_0_child_0.visible = true;
root_child_2_child_1_child_2_child_0_child_0.opacity = 1;
root_child_2_child_1_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_0_child_0) root_child_2_child_1_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_0_child_0) root_child_2_child_1_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_0_child_0) root_child_2_child_1_child_2_child_0_child_0.maskType = "ALPHA";
root_child_2_child_1_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_2_child_1_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_0_child_0.strokeWeight = 1;
root_child_2_child_1_child_2_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_0_child_0) root_child_2_child_1_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_0_child_0) root_child_2_child_1_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_0_child_0) root_child_2_child_1_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_2_child_1_child_2_child_0_child_0.effects = [];
// Text Properties
root_child_2_child_1_child_2_child_0_child_0.characters = `by `;
root_child_2_child_1_child_2_child_0_child_0.fontSize = 12;
root_child_2_child_1_child_2_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_2_child_1_child_2_child_0_child_0.textAlignVertical = "TOP";
root_child_2_child_1_child_2_child_0_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_2_child_1_child_2_child_0_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_2_child_1_child_2_child_0_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_2_child_1_child_2_child_0_child_0) root_child_2_child_1_child_2_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_2_child_1_child_2_child_0_child_0) root_child_2_child_1_child_2_child_0_child_0.textDecoration = "NONE";
root_child_2_child_1_child_2_child_0_child_0.paragraphSpacing = 0;
root_child_2_child_1_child_2_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_2_child_1_child_2_child_0_child_0, {"family":"Open Sans","style":"Light"});
// Styled Segments
await this.setRangeFont(root_child_2_child_1_child_2_child_0_child_0, 0, 3, {"family":"Open Sans","style":"Light"});
root_child_2_child_1_child_2_child_0_child_0.setRangeFills(0, 3, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_2_child_1_child_2_child_0_child_0.setRangeFontSize(0, 3, 12);
root_child_2_child_1_child_2_child_0.appendChild(root_child_2_child_1_child_2_child_0_child_0);
// Child Layout Props
root_child_2_child_1_child_2_child_0_child_0.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_0_child_0, {"width":13,"height":16,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Elena Ionescu
const root_child_2_child_1_child_2_child_0_child_1 = figma.createText();
root_child_2_child_1_child_2_child_0_child_1.name = "Elena Ionescu";
root_child_2_child_1_child_2_child_0_child_1.visible = true;
root_child_2_child_1_child_2_child_0_child_1.opacity = 1;
root_child_2_child_1_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_0_child_1) root_child_2_child_1_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_0_child_1) root_child_2_child_1_child_2_child_0_child_1.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_0_child_1) root_child_2_child_1_child_2_child_0_child_1.maskType = "ALPHA";
root_child_2_child_1_child_2_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_2_child_1_child_2_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_0_child_1.strokeWeight = 1;
root_child_2_child_1_child_2_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_0_child_1) root_child_2_child_1_child_2_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_0_child_1) root_child_2_child_1_child_2_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_0_child_1) root_child_2_child_1_child_2_child_0_child_1.strokeMiterLimit = 4;
root_child_2_child_1_child_2_child_0_child_1.effects = [];
// Text Properties
root_child_2_child_1_child_2_child_0_child_1.characters = `Elena Ionescu`;
root_child_2_child_1_child_2_child_0_child_1.fontSize = 14;
root_child_2_child_1_child_2_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_2_child_1_child_2_child_0_child_1.textAlignVertical = "TOP";
root_child_2_child_1_child_2_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_2_child_1_child_2_child_0_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_2_child_1_child_2_child_0_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_2_child_1_child_2_child_0_child_1) root_child_2_child_1_child_2_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_2_child_1_child_2_child_0_child_1) root_child_2_child_1_child_2_child_0_child_1.textDecoration = "NONE";
root_child_2_child_1_child_2_child_0_child_1.paragraphSpacing = 0;
root_child_2_child_1_child_2_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_2_child_1_child_2_child_0_child_1, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_2_child_1_child_2_child_0_child_1, 0, 13, {"family":"Open Sans","style":"SemiBold"});
root_child_2_child_1_child_2_child_0_child_1.setRangeFills(0, 13, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_2_child_1_child_2_child_0_child_1.setRangeFontSize(0, 13, 14);
root_child_2_child_1_child_2_child_0.appendChild(root_child_2_child_1_child_2_child_0_child_1);
// Child Layout Props
root_child_2_child_1_child_2_child_0_child_1.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_0_child_1, {"width":93,"height":19,"relativeTransform":[[1,0,17],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_2.appendChild(root_child_2_child_1_child_2_child_0);
// Child Layout Props
root_child_2_child_1_child_2_child_0.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_0, {"width":110,"height":19,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Rating Block
const root_child_2_child_1_child_2_child_1 = figma.createFrame();
root_child_2_child_1_child_2_child_1.name = "Rating Block";
root_child_2_child_1_child_2_child_1.visible = true;
root_child_2_child_1_child_2_child_1.opacity = 1;
root_child_2_child_1_child_2_child_1.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.clipsContent = true;
if ("layoutMode" in root_child_2_child_1_child_2_child_1) {
    root_child_2_child_1_child_2_child_1.layoutMode = "HORIZONTAL";
    root_child_2_child_1_child_2_child_1.primaryAxisSizingMode = "AUTO";
    root_child_2_child_1_child_2_child_1.counterAxisSizingMode = "AUTO";
    root_child_2_child_1_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_2_child_1_child_2_child_1.counterAxisAlignItems = "CENTER";
    root_child_2_child_1_child_2_child_1.itemSpacing = 6;
    root_child_2_child_1_child_2_child_1.paddingTop = 0;
    root_child_2_child_1_child_2_child_1.paddingRight = 0;
    root_child_2_child_1_child_2_child_1.paddingBottom = 0;
    root_child_2_child_1_child_2_child_1.paddingLeft = 0;
    root_child_2_child_1_child_2_child_1.itemReverseZIndex = false;
    root_child_2_child_1_child_2_child_1.strokesIncludedInLayout = false;
}
root_child_2_child_1_child_2_child_1.fills = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1.strokeWeight = 1;
root_child_2_child_1_child_2_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.strokeLeftWeight = 1;
root_child_2_child_1_child_2_child_1.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2_child_1) root_child_2_child_1_child_2_child_1.cornerRadius = 0;

// Start Child: Relevance
const root_child_2_child_1_child_2_child_1_child_0 = figma.createText();
root_child_2_child_1_child_2_child_1_child_0.name = "Relevance";
root_child_2_child_1_child_2_child_1_child_0.visible = true;
root_child_2_child_1_child_2_child_1_child_0.opacity = 1;
root_child_2_child_1_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_1_child_0) root_child_2_child_1_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_1_child_0) root_child_2_child_1_child_2_child_1_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_1_child_0) root_child_2_child_1_child_2_child_1_child_0.maskType = "ALPHA";
root_child_2_child_1_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44999998807907104,"g":0.550000011920929,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_2_child_1_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1_child_0.strokeWeight = 1;
root_child_2_child_1_child_2_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_1_child_0) root_child_2_child_1_child_2_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_1_child_0) root_child_2_child_1_child_2_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_1_child_0) root_child_2_child_1_child_2_child_1_child_0.strokeMiterLimit = 4;
root_child_2_child_1_child_2_child_1_child_0.effects = [];
// Text Properties
root_child_2_child_1_child_2_child_1_child_0.characters = `Relevance`;
root_child_2_child_1_child_2_child_1_child_0.fontSize = 10;
root_child_2_child_1_child_2_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_2_child_1_child_2_child_1_child_0.textAlignVertical = "TOP";
root_child_2_child_1_child_2_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_2_child_1_child_2_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_2_child_1_child_2_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_2_child_1_child_2_child_1_child_0) root_child_2_child_1_child_2_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_2_child_1_child_2_child_1_child_0) root_child_2_child_1_child_2_child_1_child_0.textDecoration = "NONE";
root_child_2_child_1_child_2_child_1_child_0.paragraphSpacing = 0;
root_child_2_child_1_child_2_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_2_child_1_child_2_child_1_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_2_child_1_child_2_child_1_child_0, 0, 9, {"family":"Open Sans","style":"SemiBold"});
root_child_2_child_1_child_2_child_1_child_0.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44999998807907104,"g":0.550000011920929,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_2_child_1_child_2_child_1_child_0.setRangeFontSize(0, 9, 10);
root_child_2_child_1_child_2_child_1.appendChild(root_child_2_child_1_child_2_child_1_child_0);
// Child Layout Props
root_child_2_child_1_child_2_child_1_child_0.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_1_child_0, {"width":49,"height":14,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Rating Stars
const root_child_2_child_1_child_2_child_1_child_1 = figma.createFrame();
root_child_2_child_1_child_2_child_1_child_1.name = "Rating Stars";
root_child_2_child_1_child_2_child_1_child_1.visible = true;
root_child_2_child_1_child_2_child_1_child_1.opacity = 1;
root_child_2_child_1_child_2_child_1_child_1.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.clipsContent = true;
if ("layoutMode" in root_child_2_child_1_child_2_child_1_child_1) {
    root_child_2_child_1_child_2_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_2_child_1_child_2_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_2_child_1_child_2_child_1_child_1.counterAxisSizingMode = "AUTO";
    root_child_2_child_1_child_2_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_2_child_1_child_2_child_1_child_1.counterAxisAlignItems = "MIN";
    root_child_2_child_1_child_2_child_1_child_1.itemSpacing = 1;
    root_child_2_child_1_child_2_child_1_child_1.paddingTop = 0;
    root_child_2_child_1_child_2_child_1_child_1.paddingRight = 0;
    root_child_2_child_1_child_2_child_1_child_1.paddingBottom = 0;
    root_child_2_child_1_child_2_child_1_child_1.paddingLeft = 0;
    root_child_2_child_1_child_2_child_1_child_1.itemReverseZIndex = false;
    root_child_2_child_1_child_2_child_1_child_1.strokesIncludedInLayout = false;
}
root_child_2_child_1_child_2_child_1_child_1.fills = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1_child_1.strokeWeight = 1;
root_child_2_child_1_child_2_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.strokeLeftWeight = 1;
root_child_2_child_1_child_2_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1.cornerRadius = 0;

// Start Child: Star 1
root_child_2_child_1_child_2_child_1_child_1_child_0.name = "Star 1";
root_child_2_child_1_child_2_child_1_child_1_child_0.visible = true;
root_child_2_child_1_child_2_child_1_child_1_child_0.opacity = 1;
root_child_2_child_1_child_2_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_1_child_1_child_0) root_child_2_child_1_child_2_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_1_child_1_child_0) root_child_2_child_1_child_2_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_1_child_1_child_0) root_child_2_child_1_child_2_child_1_child_1_child_0.maskType = "ALPHA";
root_child_2_child_1_child_2_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1_child_1_child_0.strokeWeight = 1;
root_child_2_child_1_child_2_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_1_child_1_child_0) root_child_2_child_1_child_2_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_1_child_1_child_0) root_child_2_child_1_child_2_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_1_child_1_child_0) root_child_2_child_1_child_2_child_1_child_1_child_0.strokeMiterLimit = 4;
root_child_2_child_1_child_2_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2_child_1_child_1_child_0) root_child_2_child_1_child_2_child_1_child_1_child_0.cornerRadius = 0;
root_child_2_child_1_child_2_child_1_child_1.appendChild(root_child_2_child_1_child_2_child_1_child_1_child_0);
// Child Layout Props
root_child_2_child_1_child_2_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_1_child_1_child_0, {"width":12,"height":12,"relativeTransform":[[1,0,-1.0247731552226469e-9],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 2
root_child_2_child_1_child_2_child_1_child_1_child_1.name = "Star 2";
root_child_2_child_1_child_2_child_1_child_1_child_1.visible = true;
root_child_2_child_1_child_2_child_1_child_1_child_1.opacity = 1;
root_child_2_child_1_child_2_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_1_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_1_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_1_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1_child_1.maskType = "ALPHA";
root_child_2_child_1_child_2_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1_child_1_child_1.strokeWeight = 1;
root_child_2_child_1_child_2_child_1_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_1_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_1_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_1_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1_child_1.strokeMiterLimit = 4;
root_child_2_child_1_child_2_child_1_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2_child_1_child_1_child_1) root_child_2_child_1_child_2_child_1_child_1_child_1.cornerRadius = 0;
root_child_2_child_1_child_2_child_1_child_1.appendChild(root_child_2_child_1_child_2_child_1_child_1_child_1);
// Child Layout Props
root_child_2_child_1_child_2_child_1_child_1_child_1.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_1_child_1_child_1, {"width":12,"height":12,"relativeTransform":[[1,0,13],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 3
root_child_2_child_1_child_2_child_1_child_1_child_2.name = "Star 3";
root_child_2_child_1_child_2_child_1_child_1_child_2.visible = true;
root_child_2_child_1_child_2_child_1_child_1_child_2.opacity = 1;
root_child_2_child_1_child_2_child_1_child_1_child_2.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_1_child_1_child_2) root_child_2_child_1_child_2_child_1_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_1_child_1_child_2) root_child_2_child_1_child_2_child_1_child_1_child_2.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_1_child_1_child_2) root_child_2_child_1_child_2_child_1_child_1_child_2.maskType = "ALPHA";
root_child_2_child_1_child_2_child_1_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1_child_1_child_2.strokeWeight = 1;
root_child_2_child_1_child_2_child_1_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_1_child_1_child_2) root_child_2_child_1_child_2_child_1_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_1_child_1_child_2) root_child_2_child_1_child_2_child_1_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_1_child_1_child_2) root_child_2_child_1_child_2_child_1_child_1_child_2.strokeMiterLimit = 4;
root_child_2_child_1_child_2_child_1_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2_child_1_child_1_child_2) root_child_2_child_1_child_2_child_1_child_1_child_2.cornerRadius = 0;
root_child_2_child_1_child_2_child_1_child_1.appendChild(root_child_2_child_1_child_2_child_1_child_1_child_2);
// Child Layout Props
root_child_2_child_1_child_2_child_1_child_1_child_2.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_1_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_1_child_1_child_2, {"width":12,"height":12,"relativeTransform":[[1,0,26],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 4
root_child_2_child_1_child_2_child_1_child_1_child_3.name = "Star 4";
root_child_2_child_1_child_2_child_1_child_1_child_3.visible = true;
root_child_2_child_1_child_2_child_1_child_1_child_3.opacity = 1;
root_child_2_child_1_child_2_child_1_child_1_child_3.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_1_child_1_child_3) root_child_2_child_1_child_2_child_1_child_1_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_1_child_1_child_3) root_child_2_child_1_child_2_child_1_child_1_child_3.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_1_child_1_child_3) root_child_2_child_1_child_2_child_1_child_1_child_3.maskType = "ALPHA";
root_child_2_child_1_child_2_child_1_child_1_child_3.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1_child_1_child_3.strokeWeight = 1;
root_child_2_child_1_child_2_child_1_child_1_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_1_child_1_child_3) root_child_2_child_1_child_2_child_1_child_1_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_1_child_1_child_3) root_child_2_child_1_child_2_child_1_child_1_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_1_child_1_child_3) root_child_2_child_1_child_2_child_1_child_1_child_3.strokeMiterLimit = 4;
root_child_2_child_1_child_2_child_1_child_1_child_3.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2_child_1_child_1_child_3) root_child_2_child_1_child_2_child_1_child_1_child_3.cornerRadius = 0;
root_child_2_child_1_child_2_child_1_child_1.appendChild(root_child_2_child_1_child_2_child_1_child_1_child_3);
// Child Layout Props
root_child_2_child_1_child_2_child_1_child_1_child_3.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_1_child_1_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_1_child_1_child_3, {"width":12,"height":12,"relativeTransform":[[1,0,39],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 5
root_child_2_child_1_child_2_child_1_child_1_child_4.name = "Star 5";
root_child_2_child_1_child_2_child_1_child_1_child_4.visible = true;
root_child_2_child_1_child_2_child_1_child_1_child_4.opacity = 1;
root_child_2_child_1_child_2_child_1_child_1_child_4.locked = false;
if ("blendMode" in root_child_2_child_1_child_2_child_1_child_1_child_4) root_child_2_child_1_child_2_child_1_child_1_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_2_child_1_child_1_child_4) root_child_2_child_1_child_2_child_1_child_1_child_4.isMask = false;
if ("maskType" in root_child_2_child_1_child_2_child_1_child_1_child_4) root_child_2_child_1_child_2_child_1_child_1_child_4.maskType = "ALPHA";
root_child_2_child_1_child_2_child_1_child_1_child_4.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_2_child_1_child_1_child_4.strokeWeight = 1;
root_child_2_child_1_child_2_child_1_child_1_child_4.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_2_child_1_child_2_child_1_child_1_child_4) root_child_2_child_1_child_2_child_1_child_1_child_4.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_2_child_1_child_1_child_4) root_child_2_child_1_child_2_child_1_child_1_child_4.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_2_child_1_child_1_child_4) root_child_2_child_1_child_2_child_1_child_1_child_4.strokeMiterLimit = 4;
root_child_2_child_1_child_2_child_1_child_1_child_4.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_2_child_1_child_1_child_4) root_child_2_child_1_child_2_child_1_child_1_child_4.cornerRadius = 0;
root_child_2_child_1_child_2_child_1_child_1.appendChild(root_child_2_child_1_child_2_child_1_child_1_child_4);
// Child Layout Props
root_child_2_child_1_child_2_child_1_child_1_child_4.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_1_child_1_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_1_child_1_child_4, {"width":12,"height":12,"relativeTransform":[[1,0,52],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_2_child_1.appendChild(root_child_2_child_1_child_2_child_1_child_1);
// Child Layout Props
root_child_2_child_1_child_2_child_1_child_1.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_1_child_1, {"width":64,"height":12,"relativeTransform":[[1,0,55],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_2.appendChild(root_child_2_child_1_child_2_child_1);
// Child Layout Props
root_child_2_child_1_child_2_child_1.layoutAlign = "INHERIT";
root_child_2_child_1_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2_child_1, {"width":119,"height":14,"relativeTransform":[[1,0,0],[0,1,23]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2_child_1.appendChild(root_child_2_child_1_child_2);
// Child Layout Props
root_child_2_child_1_child_2.layoutAlign = "STRETCH";
root_child_2_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_2, {"width":311,"height":37,"relativeTransform":[[1,0,16],[0,1,159]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2.appendChild(root_child_2_child_1);
// Child Layout Props
root_child_2_child_1.layoutAlign = "STRETCH";
root_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1, {"width":343,"height":212,"relativeTransform":[[1,0,0],[0,1,229]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_2);
// Child Layout Props
root_child_2.layoutAlign = "INHERIT";
root_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_2, {"width":343,"height":441,"relativeTransform":[[1,0,734],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Card 4
const root_child_3 = figma.createFrame();
root_child_3.name = "Card 4";
root_child_3.visible = true;
root_child_3.opacity = 1;
root_child_3.locked = false;
if ("blendMode" in root_child_3) root_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3) root_child_3.isMask = false;
if ("maskType" in root_child_3) root_child_3.maskType = "ALPHA";
if ("clipsContent" in root_child_3) root_child_3.clipsContent = true;
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
if ("cornerRadius" in root_child_3) root_child_3.cornerRadius = 12;

// Start Child: Image Container
const root_child_3_child_0 = figma.createFrame();
root_child_3_child_0.name = "Image Container";
root_child_3_child_0.visible = true;
root_child_3_child_0.opacity = 1;
root_child_3_child_0.locked = false;
if ("blendMode" in root_child_3_child_0) root_child_3_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_0) root_child_3_child_0.isMask = false;
if ("maskType" in root_child_3_child_0) root_child_3_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_0) root_child_3_child_0.clipsContent = true;
if ("layoutMode" in root_child_3_child_0) {
    root_child_3_child_0.layoutMode = "NONE";
}
root_child_3_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":1,"rotation":0,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"53d394c4577bd2ad4235d0666feb13b9ca37fd82","assetRef":IMG_uefa_cards_4x_procedural_repro_img_4_png}]);
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
if ("cornerRadius" in root_child_3_child_0) root_child_3_child_0.cornerRadius = 0;
root_child_3.appendChild(root_child_3_child_0);
// Child Layout Props
root_child_3_child_0.layoutAlign = "STRETCH";
root_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_0, {"width":343,"height":229,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Content Padding
const root_child_3_child_1 = figma.createFrame();
root_child_3_child_1.name = "Content Padding";
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
    root_child_3_child_1.primaryAxisAlignItems = "MIN";
    root_child_3_child_1.counterAxisAlignItems = "MIN";
    root_child_3_child_1.itemSpacing = 16;
    root_child_3_child_1.paddingTop = 16;
    root_child_3_child_1.paddingRight = 16;
    root_child_3_child_1.paddingBottom = 16;
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

// Start Child: Sustainable Stadium Operations
const root_child_3_child_1_child_0 = figma.createText();
root_child_3_child_1_child_0.name = "Sustainable Stadium Operations";
root_child_3_child_1_child_0.visible = true;
root_child_3_child_1_child_0.opacity = 1;
root_child_3_child_1_child_0.locked = false;
if ("blendMode" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.isMask = false;
if ("maskType" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.maskType = "ALPHA";
root_child_3_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_3_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_0.strokeWeight = 1;
root_child_3_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.strokeMiterLimit = 4;
root_child_3_child_1_child_0.effects = [];
// Text Properties
root_child_3_child_1_child_0.characters = `Sustainable Stadium Operations`;
root_child_3_child_1_child_0.fontSize = 20;
root_child_3_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_3_child_1_child_0.textAlignVertical = "TOP";
root_child_3_child_1_child_0.textAutoResize = "HEIGHT";
root_child_3_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_3_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_1_child_0) root_child_3_child_1_child_0.textDecoration = "NONE";
root_child_3_child_1_child_0.paragraphSpacing = 0;
root_child_3_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_3_child_1_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_3_child_1_child_0, 0, 30, {"family":"Open Sans","style":"SemiBold"});
root_child_3_child_1_child_0.setRangeFills(0, 30, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_3_child_1_child_0.setRangeFontSize(0, 30, 20);
root_child_3_child_1.appendChild(root_child_3_child_1_child_0);
// Child Layout Props
root_child_3_child_1_child_0.layoutAlign = "STRETCH";
root_child_3_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_0, {"width":311,"height":54,"relativeTransform":[[1,0,16],[0,1,16]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Reducing carbon footprints and implementing circular economy principles in modern stadium management.
const root_child_3_child_1_child_1 = figma.createText();
root_child_3_child_1_child_1.name = "Reducing carbon footprints and implementing circular economy principles in modern stadium management.";
root_child_3_child_1_child_1.visible = true;
root_child_3_child_1_child_1.opacity = 1;
root_child_3_child_1_child_1.locked = false;
if ("blendMode" in root_child_3_child_1_child_1) root_child_3_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_1) root_child_3_child_1_child_1.isMask = false;
if ("maskType" in root_child_3_child_1_child_1) root_child_3_child_1_child_1.maskType = "ALPHA";
root_child_3_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_3_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_1.strokeWeight = 1;
root_child_3_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_1_child_1) root_child_3_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_1) root_child_3_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_1) root_child_3_child_1_child_1.strokeMiterLimit = 4;
root_child_3_child_1_child_1.effects = [];
// Text Properties
root_child_3_child_1_child_1.characters = `Reducing carbon footprints and implementing circular economy principles in modern stadium management.`;
root_child_3_child_1_child_1.fontSize = 14;
root_child_3_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_3_child_1_child_1.textAlignVertical = "TOP";
root_child_3_child_1_child_1.textAutoResize = "HEIGHT";
root_child_3_child_1_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_3_child_1_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_3_child_1_child_1) root_child_3_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_1_child_1) root_child_3_child_1_child_1.textDecoration = "NONE";
root_child_3_child_1_child_1.paragraphSpacing = 0;
root_child_3_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_3_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_3_child_1_child_1, 0, 101, {"family":"Open Sans","style":"Regular"});
root_child_3_child_1_child_1.setRangeFills(0, 101, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10000000149011612,"g":0.1899999976158142,"b":0.23999999463558197},"boundVariables":{}}]);
root_child_3_child_1_child_1.setRangeFontSize(0, 101, 14);
root_child_3_child_1.appendChild(root_child_3_child_1_child_1);
// Child Layout Props
root_child_3_child_1_child_1.layoutAlign = "STRETCH";
root_child_3_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_1, {"width":311,"height":57,"relativeTransform":[[1,0,16],[0,1,86]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Footer
const root_child_3_child_1_child_2 = figma.createFrame();
root_child_3_child_1_child_2.name = "Footer";
root_child_3_child_1_child_2.visible = true;
root_child_3_child_1_child_2.opacity = 1;
root_child_3_child_1_child_2.locked = false;
if ("blendMode" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.isMask = false;
if ("maskType" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.clipsContent = true;
if ("layoutMode" in root_child_3_child_1_child_2) {
    root_child_3_child_1_child_2.layoutMode = "VERTICAL";
    root_child_3_child_1_child_2.primaryAxisSizingMode = "AUTO";
    root_child_3_child_1_child_2.counterAxisSizingMode = "FIXED";
    root_child_3_child_1_child_2.primaryAxisAlignItems = "MIN";
    root_child_3_child_1_child_2.counterAxisAlignItems = "MIN";
    root_child_3_child_1_child_2.itemSpacing = 4;
    root_child_3_child_1_child_2.paddingTop = 0;
    root_child_3_child_1_child_2.paddingRight = 0;
    root_child_3_child_1_child_2.paddingBottom = 0;
    root_child_3_child_1_child_2.paddingLeft = 0;
    root_child_3_child_1_child_2.itemReverseZIndex = false;
    root_child_3_child_1_child_2.strokesIncludedInLayout = false;
}
root_child_3_child_1_child_2.fills = await this.hydratePaints([]);
root_child_3_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2.strokeWeight = 1;
root_child_3_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.strokeLeftWeight = 1;
root_child_3_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2) root_child_3_child_1_child_2.cornerRadius = 0;

// Start Child: Author Info
const root_child_3_child_1_child_2_child_0 = figma.createFrame();
root_child_3_child_1_child_2_child_0.name = "Author Info";
root_child_3_child_1_child_2_child_0.visible = true;
root_child_3_child_1_child_2_child_0.opacity = 1;
root_child_3_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_3_child_1_child_2_child_0) {
    root_child_3_child_1_child_2_child_0.layoutMode = "HORIZONTAL";
    root_child_3_child_1_child_2_child_0.primaryAxisSizingMode = "AUTO";
    root_child_3_child_1_child_2_child_0.counterAxisSizingMode = "AUTO";
    root_child_3_child_1_child_2_child_0.primaryAxisAlignItems = "MIN";
    root_child_3_child_1_child_2_child_0.counterAxisAlignItems = "MIN";
    root_child_3_child_1_child_2_child_0.itemSpacing = 4;
    root_child_3_child_1_child_2_child_0.paddingTop = 0;
    root_child_3_child_1_child_2_child_0.paddingRight = 0;
    root_child_3_child_1_child_2_child_0.paddingBottom = 0;
    root_child_3_child_1_child_2_child_0.paddingLeft = 0;
    root_child_3_child_1_child_2_child_0.itemReverseZIndex = false;
    root_child_3_child_1_child_2_child_0.strokesIncludedInLayout = false;
}
root_child_3_child_1_child_2_child_0.fills = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_0.strokeWeight = 1;
root_child_3_child_1_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.strokeLeftWeight = 1;
root_child_3_child_1_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2_child_0) root_child_3_child_1_child_2_child_0.cornerRadius = 0;

// Start Child: by
const root_child_3_child_1_child_2_child_0_child_0 = figma.createText();
root_child_3_child_1_child_2_child_0_child_0.name = "by";
root_child_3_child_1_child_2_child_0_child_0.visible = true;
root_child_3_child_1_child_2_child_0_child_0.opacity = 1;
root_child_3_child_1_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_0_child_0) root_child_3_child_1_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_0_child_0) root_child_3_child_1_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_0_child_0) root_child_3_child_1_child_2_child_0_child_0.maskType = "ALPHA";
root_child_3_child_1_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_3_child_1_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_0_child_0.strokeWeight = 1;
root_child_3_child_1_child_2_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_0_child_0) root_child_3_child_1_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_0_child_0) root_child_3_child_1_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_0_child_0) root_child_3_child_1_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_3_child_1_child_2_child_0_child_0.effects = [];
// Text Properties
root_child_3_child_1_child_2_child_0_child_0.characters = `by `;
root_child_3_child_1_child_2_child_0_child_0.fontSize = 12;
root_child_3_child_1_child_2_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_3_child_1_child_2_child_0_child_0.textAlignVertical = "TOP";
root_child_3_child_1_child_2_child_0_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_3_child_1_child_2_child_0_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_3_child_1_child_2_child_0_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_3_child_1_child_2_child_0_child_0) root_child_3_child_1_child_2_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_1_child_2_child_0_child_0) root_child_3_child_1_child_2_child_0_child_0.textDecoration = "NONE";
root_child_3_child_1_child_2_child_0_child_0.paragraphSpacing = 0;
root_child_3_child_1_child_2_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_3_child_1_child_2_child_0_child_0, {"family":"Open Sans","style":"Light"});
// Styled Segments
await this.setRangeFont(root_child_3_child_1_child_2_child_0_child_0, 0, 3, {"family":"Open Sans","style":"Light"});
root_child_3_child_1_child_2_child_0_child_0.setRangeFills(0, 3, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_3_child_1_child_2_child_0_child_0.setRangeFontSize(0, 3, 12);
root_child_3_child_1_child_2_child_0.appendChild(root_child_3_child_1_child_2_child_0_child_0);
// Child Layout Props
root_child_3_child_1_child_2_child_0_child_0.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_0_child_0, {"width":13,"height":16,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: David Moore
const root_child_3_child_1_child_2_child_0_child_1 = figma.createText();
root_child_3_child_1_child_2_child_0_child_1.name = "David Moore";
root_child_3_child_1_child_2_child_0_child_1.visible = true;
root_child_3_child_1_child_2_child_0_child_1.opacity = 1;
root_child_3_child_1_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_0_child_1) root_child_3_child_1_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_0_child_1) root_child_3_child_1_child_2_child_0_child_1.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_0_child_1) root_child_3_child_1_child_2_child_0_child_1.maskType = "ALPHA";
root_child_3_child_1_child_2_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_3_child_1_child_2_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_0_child_1.strokeWeight = 1;
root_child_3_child_1_child_2_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_0_child_1) root_child_3_child_1_child_2_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_0_child_1) root_child_3_child_1_child_2_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_0_child_1) root_child_3_child_1_child_2_child_0_child_1.strokeMiterLimit = 4;
root_child_3_child_1_child_2_child_0_child_1.effects = [];
// Text Properties
root_child_3_child_1_child_2_child_0_child_1.characters = `David Moore`;
root_child_3_child_1_child_2_child_0_child_1.fontSize = 14;
root_child_3_child_1_child_2_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_3_child_1_child_2_child_0_child_1.textAlignVertical = "TOP";
root_child_3_child_1_child_2_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_3_child_1_child_2_child_0_child_1.letterSpacing = {"unit":"PERCENT","value":0};
root_child_3_child_1_child_2_child_0_child_1.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_3_child_1_child_2_child_0_child_1) root_child_3_child_1_child_2_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_1_child_2_child_0_child_1) root_child_3_child_1_child_2_child_0_child_1.textDecoration = "NONE";
root_child_3_child_1_child_2_child_0_child_1.paragraphSpacing = 0;
root_child_3_child_1_child_2_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_3_child_1_child_2_child_0_child_1, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_3_child_1_child_2_child_0_child_1, 0, 11, {"family":"Open Sans","style":"SemiBold"});
root_child_3_child_1_child_2_child_0_child_1.setRangeFills(0, 11, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38999998569488525,"g":0.47999998927116394,"b":0.5199999809265137},"boundVariables":{}}]);
root_child_3_child_1_child_2_child_0_child_1.setRangeFontSize(0, 11, 14);
root_child_3_child_1_child_2_child_0.appendChild(root_child_3_child_1_child_2_child_0_child_1);
// Child Layout Props
root_child_3_child_1_child_2_child_0_child_1.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_0_child_1, {"width":87,"height":19,"relativeTransform":[[1,0,17],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3_child_1_child_2.appendChild(root_child_3_child_1_child_2_child_0);
// Child Layout Props
root_child_3_child_1_child_2_child_0.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_0, {"width":104,"height":19,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Rating Block
const root_child_3_child_1_child_2_child_1 = figma.createFrame();
root_child_3_child_1_child_2_child_1.name = "Rating Block";
root_child_3_child_1_child_2_child_1.visible = true;
root_child_3_child_1_child_2_child_1.opacity = 1;
root_child_3_child_1_child_2_child_1.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.clipsContent = true;
if ("layoutMode" in root_child_3_child_1_child_2_child_1) {
    root_child_3_child_1_child_2_child_1.layoutMode = "HORIZONTAL";
    root_child_3_child_1_child_2_child_1.primaryAxisSizingMode = "AUTO";
    root_child_3_child_1_child_2_child_1.counterAxisSizingMode = "AUTO";
    root_child_3_child_1_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_3_child_1_child_2_child_1.counterAxisAlignItems = "CENTER";
    root_child_3_child_1_child_2_child_1.itemSpacing = 6;
    root_child_3_child_1_child_2_child_1.paddingTop = 0;
    root_child_3_child_1_child_2_child_1.paddingRight = 0;
    root_child_3_child_1_child_2_child_1.paddingBottom = 0;
    root_child_3_child_1_child_2_child_1.paddingLeft = 0;
    root_child_3_child_1_child_2_child_1.itemReverseZIndex = false;
    root_child_3_child_1_child_2_child_1.strokesIncludedInLayout = false;
}
root_child_3_child_1_child_2_child_1.fills = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1.strokeWeight = 1;
root_child_3_child_1_child_2_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.strokeLeftWeight = 1;
root_child_3_child_1_child_2_child_1.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2_child_1) root_child_3_child_1_child_2_child_1.cornerRadius = 0;

// Start Child: Relevance
const root_child_3_child_1_child_2_child_1_child_0 = figma.createText();
root_child_3_child_1_child_2_child_1_child_0.name = "Relevance";
root_child_3_child_1_child_2_child_1_child_0.visible = true;
root_child_3_child_1_child_2_child_1_child_0.opacity = 1;
root_child_3_child_1_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_1_child_0) root_child_3_child_1_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_1_child_0) root_child_3_child_1_child_2_child_1_child_0.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_1_child_0) root_child_3_child_1_child_2_child_1_child_0.maskType = "ALPHA";
root_child_3_child_1_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44999998807907104,"g":0.550000011920929,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_3_child_1_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1_child_0.strokeWeight = 1;
root_child_3_child_1_child_2_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_1_child_0) root_child_3_child_1_child_2_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_1_child_0) root_child_3_child_1_child_2_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_1_child_0) root_child_3_child_1_child_2_child_1_child_0.strokeMiterLimit = 4;
root_child_3_child_1_child_2_child_1_child_0.effects = [];
// Text Properties
root_child_3_child_1_child_2_child_1_child_0.characters = `Relevance`;
root_child_3_child_1_child_2_child_1_child_0.fontSize = 10;
root_child_3_child_1_child_2_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_3_child_1_child_2_child_1_child_0.textAlignVertical = "TOP";
root_child_3_child_1_child_2_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_3_child_1_child_2_child_1_child_0.letterSpacing = {"unit":"PERCENT","value":0};
root_child_3_child_1_child_2_child_1_child_0.lineHeight = {"unit":"AUTO"};
if ("textCase" in root_child_3_child_1_child_2_child_1_child_0) root_child_3_child_1_child_2_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_1_child_2_child_1_child_0) root_child_3_child_1_child_2_child_1_child_0.textDecoration = "NONE";
root_child_3_child_1_child_2_child_1_child_0.paragraphSpacing = 0;
root_child_3_child_1_child_2_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_3_child_1_child_2_child_1_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_3_child_1_child_2_child_1_child_0, 0, 9, {"family":"Open Sans","style":"SemiBold"});
root_child_3_child_1_child_2_child_1_child_0.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.44999998807907104,"g":0.550000011920929,"b":0.5799999833106995},"boundVariables":{}}]);
root_child_3_child_1_child_2_child_1_child_0.setRangeFontSize(0, 9, 10);
root_child_3_child_1_child_2_child_1.appendChild(root_child_3_child_1_child_2_child_1_child_0);
// Child Layout Props
root_child_3_child_1_child_2_child_1_child_0.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_1_child_0, {"width":49,"height":14,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Rating Stars
const root_child_3_child_1_child_2_child_1_child_1 = figma.createFrame();
root_child_3_child_1_child_2_child_1_child_1.name = "Rating Stars";
root_child_3_child_1_child_2_child_1_child_1.visible = true;
root_child_3_child_1_child_2_child_1_child_1.opacity = 1;
root_child_3_child_1_child_2_child_1_child_1.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.clipsContent = true;
if ("layoutMode" in root_child_3_child_1_child_2_child_1_child_1) {
    root_child_3_child_1_child_2_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_3_child_1_child_2_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_3_child_1_child_2_child_1_child_1.counterAxisSizingMode = "AUTO";
    root_child_3_child_1_child_2_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_3_child_1_child_2_child_1_child_1.counterAxisAlignItems = "MIN";
    root_child_3_child_1_child_2_child_1_child_1.itemSpacing = 1;
    root_child_3_child_1_child_2_child_1_child_1.paddingTop = 0;
    root_child_3_child_1_child_2_child_1_child_1.paddingRight = 0;
    root_child_3_child_1_child_2_child_1_child_1.paddingBottom = 0;
    root_child_3_child_1_child_2_child_1_child_1.paddingLeft = 0;
    root_child_3_child_1_child_2_child_1_child_1.itemReverseZIndex = false;
    root_child_3_child_1_child_2_child_1_child_1.strokesIncludedInLayout = false;
}
root_child_3_child_1_child_2_child_1_child_1.fills = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1_child_1.strokeWeight = 1;
root_child_3_child_1_child_2_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.strokeLeftWeight = 1;
root_child_3_child_1_child_2_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1.cornerRadius = 0;

// Start Child: Star 1
root_child_3_child_1_child_2_child_1_child_1_child_0.name = "Star 1";
root_child_3_child_1_child_2_child_1_child_1_child_0.visible = true;
root_child_3_child_1_child_2_child_1_child_1_child_0.opacity = 1;
root_child_3_child_1_child_2_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_1_child_1_child_0) root_child_3_child_1_child_2_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_1_child_1_child_0) root_child_3_child_1_child_2_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_1_child_1_child_0) root_child_3_child_1_child_2_child_1_child_1_child_0.maskType = "ALPHA";
root_child_3_child_1_child_2_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1_child_1_child_0.strokeWeight = 1;
root_child_3_child_1_child_2_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_1_child_1_child_0) root_child_3_child_1_child_2_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_1_child_1_child_0) root_child_3_child_1_child_2_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_1_child_1_child_0) root_child_3_child_1_child_2_child_1_child_1_child_0.strokeMiterLimit = 4;
root_child_3_child_1_child_2_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2_child_1_child_1_child_0) root_child_3_child_1_child_2_child_1_child_1_child_0.cornerRadius = 0;
root_child_3_child_1_child_2_child_1_child_1.appendChild(root_child_3_child_1_child_2_child_1_child_1_child_0);
// Child Layout Props
root_child_3_child_1_child_2_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_1_child_1_child_0, {"width":12,"height":12,"relativeTransform":[[1,0,-1.0247731552226469e-9],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 2
root_child_3_child_1_child_2_child_1_child_1_child_1.name = "Star 2";
root_child_3_child_1_child_2_child_1_child_1_child_1.visible = true;
root_child_3_child_1_child_2_child_1_child_1_child_1.opacity = 1;
root_child_3_child_1_child_2_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_1_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_1_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_1_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1_child_1.maskType = "ALPHA";
root_child_3_child_1_child_2_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1_child_1_child_1.strokeWeight = 1;
root_child_3_child_1_child_2_child_1_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_1_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_1_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_1_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1_child_1.strokeMiterLimit = 4;
root_child_3_child_1_child_2_child_1_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2_child_1_child_1_child_1) root_child_3_child_1_child_2_child_1_child_1_child_1.cornerRadius = 0;
root_child_3_child_1_child_2_child_1_child_1.appendChild(root_child_3_child_1_child_2_child_1_child_1_child_1);
// Child Layout Props
root_child_3_child_1_child_2_child_1_child_1_child_1.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_1_child_1_child_1, {"width":12,"height":12,"relativeTransform":[[1,0,13],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 3
root_child_3_child_1_child_2_child_1_child_1_child_2.name = "Star 3";
root_child_3_child_1_child_2_child_1_child_1_child_2.visible = true;
root_child_3_child_1_child_2_child_1_child_1_child_2.opacity = 1;
root_child_3_child_1_child_2_child_1_child_1_child_2.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_1_child_1_child_2) root_child_3_child_1_child_2_child_1_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_1_child_1_child_2) root_child_3_child_1_child_2_child_1_child_1_child_2.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_1_child_1_child_2) root_child_3_child_1_child_2_child_1_child_1_child_2.maskType = "ALPHA";
root_child_3_child_1_child_2_child_1_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1_child_1_child_2.strokeWeight = 1;
root_child_3_child_1_child_2_child_1_child_1_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_1_child_1_child_2) root_child_3_child_1_child_2_child_1_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_1_child_1_child_2) root_child_3_child_1_child_2_child_1_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_1_child_1_child_2) root_child_3_child_1_child_2_child_1_child_1_child_2.strokeMiterLimit = 4;
root_child_3_child_1_child_2_child_1_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2_child_1_child_1_child_2) root_child_3_child_1_child_2_child_1_child_1_child_2.cornerRadius = 0;
root_child_3_child_1_child_2_child_1_child_1.appendChild(root_child_3_child_1_child_2_child_1_child_1_child_2);
// Child Layout Props
root_child_3_child_1_child_2_child_1_child_1_child_2.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_1_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_1_child_1_child_2, {"width":12,"height":12,"relativeTransform":[[1,0,26],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 4
root_child_3_child_1_child_2_child_1_child_1_child_3.name = "Star 4";
root_child_3_child_1_child_2_child_1_child_1_child_3.visible = true;
root_child_3_child_1_child_2_child_1_child_1_child_3.opacity = 1;
root_child_3_child_1_child_2_child_1_child_1_child_3.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_1_child_1_child_3) root_child_3_child_1_child_2_child_1_child_1_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_1_child_1_child_3) root_child_3_child_1_child_2_child_1_child_1_child_3.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_1_child_1_child_3) root_child_3_child_1_child_2_child_1_child_1_child_3.maskType = "ALPHA";
root_child_3_child_1_child_2_child_1_child_1_child_3.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1_child_1_child_3.strokeWeight = 1;
root_child_3_child_1_child_2_child_1_child_1_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_1_child_1_child_3) root_child_3_child_1_child_2_child_1_child_1_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_1_child_1_child_3) root_child_3_child_1_child_2_child_1_child_1_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_1_child_1_child_3) root_child_3_child_1_child_2_child_1_child_1_child_3.strokeMiterLimit = 4;
root_child_3_child_1_child_2_child_1_child_1_child_3.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2_child_1_child_1_child_3) root_child_3_child_1_child_2_child_1_child_1_child_3.cornerRadius = 0;
root_child_3_child_1_child_2_child_1_child_1.appendChild(root_child_3_child_1_child_2_child_1_child_1_child_3);
// Child Layout Props
root_child_3_child_1_child_2_child_1_child_1_child_3.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_1_child_1_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_1_child_1_child_3, {"width":12,"height":12,"relativeTransform":[[1,0,39],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Star 5
root_child_3_child_1_child_2_child_1_child_1_child_4.name = "Star 5";
root_child_3_child_1_child_2_child_1_child_1_child_4.visible = true;
root_child_3_child_1_child_2_child_1_child_1_child_4.opacity = 1;
root_child_3_child_1_child_2_child_1_child_1_child_4.locked = false;
if ("blendMode" in root_child_3_child_1_child_2_child_1_child_1_child_4) root_child_3_child_1_child_2_child_1_child_1_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1_child_2_child_1_child_1_child_4) root_child_3_child_1_child_2_child_1_child_1_child_4.isMask = false;
if ("maskType" in root_child_3_child_1_child_2_child_1_child_1_child_4) root_child_3_child_1_child_2_child_1_child_1_child_4.maskType = "ALPHA";
root_child_3_child_1_child_2_child_1_child_1_child_4.strokes = await this.hydratePaints([]);
root_child_3_child_1_child_2_child_1_child_1_child_4.strokeWeight = 1;
root_child_3_child_1_child_2_child_1_child_1_child_4.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_1_child_2_child_1_child_1_child_4) root_child_3_child_1_child_2_child_1_child_1_child_4.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1_child_2_child_1_child_1_child_4) root_child_3_child_1_child_2_child_1_child_1_child_4.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1_child_2_child_1_child_1_child_4) root_child_3_child_1_child_2_child_1_child_1_child_4.strokeMiterLimit = 4;
root_child_3_child_1_child_2_child_1_child_1_child_4.effects = [];
if ("cornerRadius" in root_child_3_child_1_child_2_child_1_child_1_child_4) root_child_3_child_1_child_2_child_1_child_1_child_4.cornerRadius = 0;
root_child_3_child_1_child_2_child_1_child_1.appendChild(root_child_3_child_1_child_2_child_1_child_1_child_4);
// Child Layout Props
root_child_3_child_1_child_2_child_1_child_1_child_4.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_1_child_1_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_1_child_1_child_4, {"width":12,"height":12,"relativeTransform":[[1,0,52],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3_child_1_child_2_child_1.appendChild(root_child_3_child_1_child_2_child_1_child_1);
// Child Layout Props
root_child_3_child_1_child_2_child_1_child_1.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_1_child_1, {"width":64,"height":12,"relativeTransform":[[1,0,55],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3_child_1_child_2.appendChild(root_child_3_child_1_child_2_child_1);
// Child Layout Props
root_child_3_child_1_child_2_child_1.layoutAlign = "INHERIT";
root_child_3_child_1_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2_child_1, {"width":119,"height":14,"relativeTransform":[[1,0,0],[0,1,23]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3_child_1.appendChild(root_child_3_child_1_child_2);
// Child Layout Props
root_child_3_child_1_child_2.layoutAlign = "STRETCH";
root_child_3_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1_child_2, {"width":311,"height":37,"relativeTransform":[[1,0,16],[0,1,159]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3.appendChild(root_child_3_child_1);
// Child Layout Props
root_child_3_child_1.layoutAlign = "STRETCH";
root_child_3_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1, {"width":343,"height":212,"relativeTransform":[[1,0,0],[0,1,229]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_3);
// Child Layout Props
root_child_3.layoutAlign = "INHERIT";
root_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_3, {"width":343,"height":441,"relativeTransform":[[1,0,1101],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":1444,"height":441,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

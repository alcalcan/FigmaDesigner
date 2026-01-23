import { BaseComponent, ComponentProps } from "../../BaseComponent";


// SVG Assets
const SVG_assets_icon_Vector_I3387_1517_5698_23_svg_12x7_400000095367432 = `<svg width="12" height="7.400000095367432" viewBox="0 0 12 7.400000095367432" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4 7.4L0 6L6 0L12 6L10.6 7.4L6 2.8L1.4 7.4Z" fill="black"/>
</svg>
`;



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
if ("clipsContent" in root) root.clipsContent = false;
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
if ("clipsContent" in root_child_0) root_child_0.clipsContent = false;
if ("layoutMode" in root_child_0) {
    root_child_0.layoutMode = "HORIZONTAL";
    root_child_0.primaryAxisSizingMode = "FIXED";
    root_child_0.counterAxisSizingMode = "AUTO";
    root_child_0.primaryAxisAlignItems = "CENTER";
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
root_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
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
root_child_0_child_0.textAlignVertical = "CENTER";
root_child_0_child_0.textAutoResize = "HEIGHT";
root_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_0.lineHeight = {"unit":"PIXELS","value":25};
if ("textCase" in root_child_0_child_0) root_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_0) root_child_0_child_0.textDecoration = "NONE";
root_child_0_child_0.paragraphSpacing = 0;
root_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_0, 0, 7, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_0.setRangeFills(0, 7, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_0.setRangeFontSize(0, 7, 20);
root_child_0.appendChild(root_child_0_child_0);
// Child Layout Props
root_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_0, {"width":1196,"height":25,"relativeTransform":[[1,0,0],[0,1,7.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1695
const root_child_0_child_1 = figma.createFrame();
root_child_0_child_1.name = "Frame 1695";
root_child_0_child_1.visible = true;
root_child_0_child_1.opacity = 1;
root_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1) root_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1) root_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_1) root_child_0_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1) root_child_0_child_1.clipsContent = false;
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
root_child_0_child_1.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.6352941393852234,"b":0.5882353186607361},"boundVariables":{}}]);
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

// Start Child: Filter name
const root_child_0_child_1_child_0 = figma.createText();
root_child_0_child_1_child_0.name = "Filter name";
root_child_0_child_1_child_0.visible = true;
root_child_0_child_1_child_0.opacity = 1;
root_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.maskType = "ALPHA";
root_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
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
root_child_0_child_1_child_0.textAlignVertical = "CENTER";
root_child_0_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_1_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_1_child_0.lineHeight = {"unit":"PERCENT","value":129.99999523162842};
if ("textCase" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.textDecoration = "NONE";
root_child_0_child_1_child_0.paragraphSpacing = 14;
root_child_0_child_1_child_0.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_0, {"family":"Manrope","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_0, 0, 8, {"family":"Manrope","style":"Regular"});
root_child_0_child_1_child_0.setRangeFills(0, 8, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_1_child_0.setRangeFontSize(0, 8, 14);
root_child_0_child_1.appendChild(root_child_0_child_1_child_0);
// Child Layout Props
root_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_0, {"width":58,"height":18,"relativeTransform":[[1,0,16],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_0_child_1_child_1 = figma.createText();
root_child_0_child_1_child_1.name = "Filter name";
root_child_0_child_1_child_1.visible = true;
root_child_0_child_1_child_1.opacity = 1;
root_child_0_child_1_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.maskType = "ALPHA";
root_child_0_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_1.strokeWeight = 1;
root_child_0_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeMiterLimit = 4;
root_child_0_child_1_child_1.effects = [];
// Text Properties
root_child_0_child_1_child_1.characters = `2`;
root_child_0_child_1_child_1.fontSize = 16;
root_child_0_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_0_child_1_child_1.textAlignVertical = "CENTER";
root_child_0_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_1_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_1_child_1.lineHeight = {"unit":"PERCENT","value":129.99999523162842};
if ("textCase" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.textDecoration = "NONE";
root_child_0_child_1_child_1.paragraphSpacing = 20;
root_child_0_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_0_child_1_child_1, {"family":"Manrope","style":"Bold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_1_child_1, 0, 1, {"family":"Manrope","style":"Bold"});
root_child_0_child_1_child_1.setRangeFills(0, 1, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_1_child_1.setRangeFontSize(0, 1, 16);
root_child_0_child_1.appendChild(root_child_0_child_1_child_1);
// Child Layout Props
root_child_0_child_1_child_1.layoutAlign = "INHERIT";
root_child_0_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1_child_1, {"width":10,"height":21,"relativeTransform":[[1,0,82],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_1);
// Child Layout Props
root_child_0_child_1.layoutAlign = "INHERIT";
root_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1, {"width":108,"height":29,"relativeTransform":[[1,0,1220],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1696
const root_child_0_child_2 = figma.createFrame();
root_child_0_child_2.name = "Frame 1696";
root_child_0_child_2.visible = true;
root_child_0_child_2.opacity = 1;
root_child_0_child_2.locked = false;
if ("blendMode" in root_child_0_child_2) root_child_0_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2) root_child_0_child_2.isMask = false;
if ("maskType" in root_child_0_child_2) root_child_0_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_2) root_child_0_child_2.clipsContent = false;
if ("layoutMode" in root_child_0_child_2) {
    root_child_0_child_2.layoutMode = "HORIZONTAL";
    root_child_0_child_2.primaryAxisSizingMode = "AUTO";
    root_child_0_child_2.counterAxisSizingMode = "AUTO";
    root_child_0_child_2.primaryAxisAlignItems = "MIN";
    root_child_0_child_2.counterAxisAlignItems = "MIN";
    root_child_0_child_2.itemSpacing = 8;
    root_child_0_child_2.paddingTop = 8;
    root_child_0_child_2.paddingRight = 8;
    root_child_0_child_2.paddingBottom = 8;
    root_child_0_child_2.paddingLeft = 8;
    root_child_0_child_2.itemReverseZIndex = false;
    root_child_0_child_2.strokesIncludedInLayout = false;
}
root_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"boundVariables":{}}]);
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

// Start Child: Navigation / chevron-up
const root_child_0_child_2_child_0 = figma.createFrame();
root_child_0_child_2_child_0.name = "Navigation / chevron-up";
root_child_0_child_2_child_0.visible = true;
root_child_0_child_2_child_0.opacity = 1;
root_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.isMask = false;
if ("maskType" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_0_child_2_child_0) {
    root_child_0_child_2_child_0.layoutMode = "NONE";
}
root_child_0_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0.strokeWeight = 1;
root_child_0_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeLeftWeight = 1;
root_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.cornerRadius = 0;

// Start Child: Vector
const root_child_0_child_2_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Vector_I3387_1517_5698_23_svg_12x7_400000095367432);
root_child_0_child_2_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_2_child_0_child_0 = figma.flatten([root_child_0_child_2_child_0_child_0_svgContainer]);
root_child_0_child_2_child_0_child_0.name = "Vector";
root_child_0_child_2_child_0_child_0.visible = true;
root_child_0_child_2_child_0_child_0.opacity = 1;
root_child_0_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.maskType = "ALPHA";
root_child_0_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0_child_0.strokeWeight = 1;
root_child_0_child_2_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.cornerRadius = 0;
root_child_0_child_2_child_0.appendChild(root_child_0_child_2_child_0_child_0);
applySizeAndTransform(root_child_0_child_2_child_0_child_0, {"width":12,"height":7.400000095367432,"relativeTransform":[[1,1.224648970167536e-16,6],[-1.224648970167536e-16,1,7.9749755859375]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_2_child_0_child_0.x = 6;
root_child_0_child_2_child_0_child_0.y = 7.9749755859375;
root_child_0_child_2.appendChild(root_child_0_child_2_child_0);
// Child Layout Props
root_child_0_child_2_child_0.layoutAlign = "INHERIT";
root_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_0, {"width":24,"height":24,"relativeTransform":[[1,-1.224648970167536e-16,8],[1.224648970167536e-16,1,8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
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

// Start Child: Frame 1928
const root_child_1 = figma.createFrame();
root_child_1.name = "Frame 1928";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1) root_child_1.isMask = false;
if ("maskType" in root_child_1) root_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1) root_child_1.clipsContent = false;
if ("layoutMode" in root_child_1) {
    root_child_1.layoutMode = "HORIZONTAL";
    root_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1.counterAxisSizingMode = "AUTO";
    root_child_1.primaryAxisAlignItems = "MIN";
    root_child_1.counterAxisAlignItems = "CENTER";
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

// Start Child: Frame 1936
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Frame 1936";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_0) root_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0) root_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "VERTICAL";
    root_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_0.primaryAxisAlignItems = "CENTER";
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

// Start Child: Frame 1926
const root_child_1_child_0_child_0 = figma.createFrame();
root_child_1_child_0_child_0.name = "Frame 1926";
root_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_0_child_0) {
    root_child_1_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_0.itemSpacing = 4;
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
if ("clipsContent" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_0_child_0_child_0) {
    root_child_1_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
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
if ("cornerRadius" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_1_child_0_child_0_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_0_child_0_child_0_child_0_child_0.name = "Path";
root_child_1_child_0_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_0_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_0_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_0_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_0_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_0_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_0_child_0_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_0_child_0_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_0_child_0_child_0_child_0_child_0.x = 2.5;
root_child_1_child_0_child_0_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_1_child_0_child_0_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_0_child_0_child_0_child_0_child_1.name = "Path";
root_child_1_child_0_child_0_child_0_child_0_child_1.visible = true;
root_child_1_child_0_child_0_child_0_child_0_child_1.opacity = 1;
root_child_1_child_0_child_0_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_0_child_0_child_0_child_1) root_child_1_child_0_child_0_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0_child_0_child_0_child_1) root_child_1_child_0_child_0_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_0_child_0_child_0_child_1) root_child_1_child_0_child_0_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_0_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_0_child_0_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_0_child_0_child_0_child_0_child_1) root_child_1_child_0_child_0_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0_child_0_child_0_child_1) root_child_1_child_0_child_0_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0_child_0_child_0_child_1) root_child_1_child_0_child_0_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_0_child_0_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0_child_0_child_0_child_1) root_child_1_child_0_child_0_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_0_child_0_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_1_child_0_child_0_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_0_child_0_child_0_child_0_child_1.x = 4.166666626930237;
root_child_1_child_0_child_0_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_1_child_0_child_0_child_0_child_0 = figma.exclude([root_child_1_child_0_child_0_child_0_child_0_child_0, root_child_1_child_0_child_0_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_0_child_0_child_0_child_0.name = "Shape";
root_child_1_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_0_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_0_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_0_child_0_child_0_child_0.x = 2.5;
root_child_1_child_0_child_0_child_0_child_0.y = 2.5;
root_child_1_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0);
// Child Layout Props
root_child_1_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_0_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_0_child_0_child_1 = figma.createText();
root_child_1_child_0_child_0_child_1.name = "Filter name";
root_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
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
root_child_1_child_0_child_0_child_1.textAlignVertical = "CENTER";
root_child_1_child_0_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_0_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_0_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_0_child_0_child_1) root_child_1_child_0_child_0_child_1.textDecoration = "NONE";
root_child_1_child_0_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_0_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_0_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_0_child_0_child_1, 0, 31, {"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_0_child_1.setRangeFills(0, 31, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_1.setRangeFontSize(0, 31, 16);
root_child_1_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_1);
// Child Layout Props
root_child_1_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_0_child_1, {"width":241,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_0, {"width":265,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1927
const root_child_1_child_0_child_1 = figma.createFrame();
root_child_1_child_0_child_1.name = "Frame 1927";
root_child_1_child_0_child_1.visible = true;
root_child_1_child_0_child_1.opacity = 1;
root_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_1) root_child_1_child_0_child_1.clipsContent = false;
if ("layoutMode" in root_child_1_child_0_child_1) {
    root_child_1_child_0_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_0_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_0_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_0_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_0_child_1.itemSpacing = 4;
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
if ("clipsContent" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_0_child_1_child_0) {
    root_child_1_child_0_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
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
if ("cornerRadius" in root_child_1_child_0_child_1_child_0) root_child_1_child_0_child_1_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_1_child_0_child_1_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_0_child_1_child_0_child_0_child_0.name = "Path";
root_child_1_child_0_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_0_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_0_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_1_child_0_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_1_child_0_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_1_child_0_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_0_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_1_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_0_child_1_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_0_child_1_child_0_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_1_child_0_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_1_child_0_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_0_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_1_child_0_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_0_child_1_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_0_child_1_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_0_child_1_child_0_child_0_child_0.x = 2.5;
root_child_1_child_0_child_1_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_1_child_0_child_1_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_0_child_1_child_0_child_0_child_1.name = "Path";
root_child_1_child_0_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_0_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_0_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_1_child_0_child_0_child_1) root_child_1_child_0_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_1_child_0_child_0_child_1) root_child_1_child_0_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_1_child_0_child_0_child_1) root_child_1_child_0_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_0_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_1_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_0_child_1_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_0_child_1_child_0_child_0_child_1) root_child_1_child_0_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_1_child_0_child_0_child_1) root_child_1_child_0_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_1_child_0_child_0_child_1) root_child_1_child_0_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_0_child_1_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_1_child_0_child_0_child_1) root_child_1_child_0_child_1_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_0_child_1_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_1_child_0_child_1_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_0_child_1_child_0_child_0_child_1.x = 4.166666626930237;
root_child_1_child_0_child_1_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_1_child_0_child_1_child_0_child_0 = figma.exclude([root_child_1_child_0_child_1_child_0_child_0_child_0, root_child_1_child_0_child_1_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_0_child_1_child_0_child_0.name = "Shape";
root_child_1_child_0_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_1_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_1_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_1_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0.maskType = "ALPHA";
root_child_1_child_0_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_1_child_0_child_0.strokeWeight = 0;
root_child_1_child_0_child_1_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_0_child_1_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_1_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_1_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_0_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_1_child_0_child_0) root_child_1_child_0_child_1_child_0_child_0.cornerRadius = 0;
root_child_1_child_0_child_1_child_0.appendChild(root_child_1_child_0_child_1_child_0_child_0);
applySizeAndTransform(root_child_1_child_0_child_1_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_0_child_1_child_0_child_0.x = 2.5;
root_child_1_child_0_child_1_child_0_child_0.y = 2.5;
root_child_1_child_0_child_1.appendChild(root_child_1_child_0_child_1_child_0);
// Child Layout Props
root_child_1_child_0_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_0_child_1_child_1 = figma.createText();
root_child_1_child_0_child_1_child_1.name = "Filter name";
root_child_1_child_0_child_1_child_1.visible = true;
root_child_1_child_0_child_1_child_1.opacity = 1;
root_child_1_child_0_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.maskType = "ALPHA";
root_child_1_child_0_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
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
root_child_1_child_0_child_1_child_1.textAlignVertical = "CENTER";
root_child_1_child_0_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_0_child_1_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_0_child_1_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_0_child_1_child_1) root_child_1_child_0_child_1_child_1.textDecoration = "NONE";
root_child_1_child_0_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_0_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_0_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_0_child_1_child_1, 0, 27, {"family":"Open Sans","style":"Regular"});
root_child_1_child_0_child_1_child_1.setRangeFills(0, 27, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_0_child_1_child_1.setRangeFontSize(0, 27, 16);
root_child_1_child_0_child_1.appendChild(root_child_1_child_0_child_1_child_1);
// Child Layout Props
root_child_1_child_0_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_1_child_1, {"width":230,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_0.appendChild(root_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_1, {"width":254,"height":24,"relativeTransform":[[1,0,0],[0,1,40]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0, {"width":265,"height":64,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1937
const root_child_1_child_1 = figma.createFrame();
root_child_1_child_1.name = "Frame 1937";
root_child_1_child_1.visible = true;
root_child_1_child_1.opacity = 1;
root_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1) root_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1) root_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1) root_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1) root_child_1_child_1.clipsContent = false;
if ("layoutMode" in root_child_1_child_1) {
    root_child_1_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_1.primaryAxisAlignItems = "CENTER";
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

// Start Child: Frame 1928
const root_child_1_child_1_child_0 = figma.createFrame();
root_child_1_child_1_child_0.name = "Frame 1928";
root_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_0) {
    root_child_1_child_1_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_0.itemSpacing = 4;
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
if ("clipsContent" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_0_child_0) {
    root_child_1_child_1_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
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

// Start Child: Shape

// Boolean Child: Shape
const root_child_1_child_1_child_0_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_1_child_0_child_0_child_0_child_0.name = "Shape";
root_child_1_child_1_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_1_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.36705881357192993,"b":0.7058823704719543},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_1_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_0_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_1_child_0_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_0_child_0_child_0_child_0.x = 2.5;
root_child_1_child_1_child_0_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Shape
const root_child_1_child_1_child_0_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_1_child_0_child_0_child_0_child_1.name = "Shape";
root_child_1_child_1_child_0_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_1_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_1_child_0_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_0_child_0_child_1) root_child_1_child_1_child_0_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_1_child_0_child_0_child_0_child_1.vectorPaths = [{"windingRule":"NONZERO","data":"M 1.2977024912834167 4.405015707015991 C 0.9889980902274449 4.120446344216664 0.502139578262965 4.13375531633695 0.21027361353238425 4.434742132822673 C -0.08159235119819644 4.735728949308395 -0.06794211765130362 5.210416217645009 0.24076228340466818 5.494985580444336 L 2.1934243043263755 7.294984658559164 C 2.48996136089166 7.56833794216315 2.953827405969302 7.56833794216315 3.250364462534587 7.294984658559164 L 9.75923776626587 1.2949865063031516 C 10.06794216732184 1.010417143503825 10.081592698891958 0.5357300738493602 9.789726734161377 0.2347432573636373 C 9.497860769430796 -0.0662435591220856 9.01100161174933 -0.07955255607763928 8.70229721069336 0.20501680672168732 L 2.721894383430481 5.717862049738566 L 1.2977024912834167 4.405015707015991 Z"}];
applySizeAndTransform(root_child_1_child_1_child_0_child_0_child_0_child_1, {"width":10,"height":7.5,"relativeTransform":[[1,0,5],[0,1,6.666666507720947]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_0_child_0_child_0_child_1.x = 5;
root_child_1_child_1_child_0_child_0_child_0_child_1.y = 6.666666507720947;
const root_child_1_child_1_child_0_child_0_child_0 = figma.subtract([root_child_1_child_1_child_0_child_0_child_0_child_0, root_child_1_child_1_child_0_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_1_child_0_child_0_child_0.name = "Shape";
root_child_1_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_1_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_0_child_0.appendChild(root_child_1_child_1_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_0_child_0_child_0.x = 2.5;
root_child_1_child_1_child_0_child_0_child_0.y = 2.5;
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_1_child_0_child_1 = figma.createText();
root_child_1_child_1_child_0_child_1.name = "Filter name";
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
root_child_1_child_1_child_0_child_1.characters = `Event and Volunteer Management`;
root_child_1_child_1_child_0_child_1.fontSize = 16;
root_child_1_child_1_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_0_child_1.textAlignVertical = "CENTER";
root_child_1_child_1_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_1_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.textDecoration = "NONE";
root_child_1_child_1_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_0_child_1, 0, 30, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_0_child_1.setRangeFills(0, 30, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_1.setRangeFontSize(0, 30, 16);
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_1);
// Child Layout Props
root_child_1_child_1_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0_child_1, {"width":255,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_0, {"width":279,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1929
const root_child_1_child_1_child_1 = figma.createFrame();
root_child_1_child_1_child_1.name = "Frame 1929";
root_child_1_child_1_child_1.visible = true;
root_child_1_child_1_child_1.opacity = 1;
root_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_1) {
    root_child_1_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_1_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_1_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1_child_1.itemSpacing = 4;
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
if ("clipsContent" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_1_child_1_child_0) {
    root_child_1_child_1_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
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
if ("cornerRadius" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_1_child_1_child_1_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_1_child_1_child_0_child_0_child_0.name = "Path";
root_child_1_child_1_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_1_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_1_child_1_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_1_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0_child_0_child_0.x = 2.5;
root_child_1_child_1_child_1_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_1_child_1_child_1_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_1_child_1_child_0_child_0_child_1.name = "Path";
root_child_1_child_1_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_1_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_1_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_1_child_1_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_1_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0_child_1) root_child_1_child_1_child_1_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_1_child_1_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0_child_0_child_1.x = 4.166666626930237;
root_child_1_child_1_child_1_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_1_child_1_child_1_child_0_child_0 = figma.exclude([root_child_1_child_1_child_1_child_0_child_0_child_0, root_child_1_child_1_child_1_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_1_child_1_child_0_child_0.name = "Shape";
root_child_1_child_1_child_1_child_0_child_0.visible = true;
root_child_1_child_1_child_1_child_0_child_0.opacity = 1;
root_child_1_child_1_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.maskType = "ALPHA";
root_child_1_child_1_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_0_child_0.strokeWeight = 0;
root_child_1_child_1_child_1_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_1_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_1_child_0_child_0) root_child_1_child_1_child_1_child_0_child_0.cornerRadius = 0;
root_child_1_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_1_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_1_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_1_child_0_child_0.x = 2.5;
root_child_1_child_1_child_1_child_0_child_0.y = 2.5;
root_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_1_child_1_child_1 = figma.createText();
root_child_1_child_1_child_1_child_1.name = "Filter name";
root_child_1_child_1_child_1_child_1.visible = true;
root_child_1_child_1_child_1_child_1.opacity = 1;
root_child_1_child_1_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.maskType = "ALPHA";
root_child_1_child_1_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_1_child_1.strokeWeight = 1;
root_child_1_child_1_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_1_child_1_child_1.effects = [];
// Text Properties
root_child_1_child_1_child_1_child_1.characters = `Football and Social Responsibility`;
root_child_1_child_1_child_1_child_1.fontSize = 16;
root_child_1_child_1_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_1_child_1_child_1.textAlignVertical = "CENTER";
root_child_1_child_1_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_1_child_1_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_1_child_1_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.textDecoration = "NONE";
root_child_1_child_1_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_1_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_1_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_1_child_1_child_1, 0, 34, {"family":"Open Sans","style":"Regular"});
root_child_1_child_1_child_1_child_1.setRangeFills(0, 34, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_1_child_1_child_1.setRangeFontSize(0, 34, 16);
root_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_1);
// Child Layout Props
root_child_1_child_1_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1_child_1, {"width":248,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_1.appendChild(root_child_1_child_1_child_1);
// Child Layout Props
root_child_1_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1_child_1, {"width":272,"height":24,"relativeTransform":[[1,0,0],[0,1,40]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_1);
// Child Layout Props
root_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_1, {"width":279,"height":64,"relativeTransform":[[1,0,297],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1938
const root_child_1_child_2 = figma.createFrame();
root_child_1_child_2.name = "Frame 1938";
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
    root_child_1_child_2.counterAxisSizingMode = "AUTO";
    root_child_1_child_2.primaryAxisAlignItems = "CENTER";
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

// Start Child: Frame 1930
const root_child_1_child_2_child_0 = figma.createFrame();
root_child_1_child_2_child_0.name = "Frame 1930";
root_child_1_child_2_child_0.visible = true;
root_child_1_child_2_child_0.opacity = 1;
root_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_2_child_0) {
    root_child_1_child_2_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_2_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_2_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_2_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_2_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_2_child_0.itemSpacing = 4;
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
if ("clipsContent" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_2_child_0_child_0) {
    root_child_1_child_2_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
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
if ("cornerRadius" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_1_child_2_child_0_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_2_child_0_child_0_child_0_child_0.name = "Path";
root_child_1_child_2_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_2_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_2_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_0_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_2_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_2_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_0_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_2_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_2_child_0_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_2_child_0_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0_child_0_child_0_child_0.x = 2.5;
root_child_1_child_2_child_0_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_1_child_2_child_0_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_2_child_0_child_0_child_0_child_1.name = "Path";
root_child_1_child_2_child_0_child_0_child_0_child_1.visible = true;
root_child_1_child_2_child_0_child_0_child_0_child_1.opacity = 1;
root_child_1_child_2_child_0_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_0_child_0_child_1) root_child_1_child_2_child_0_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_0_child_0_child_1) root_child_1_child_2_child_0_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_0_child_0_child_0_child_1) root_child_1_child_2_child_0_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_2_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_2_child_0_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_0_child_0_child_0_child_1) root_child_1_child_2_child_0_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_0_child_0_child_1) root_child_1_child_2_child_0_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_0_child_0_child_1) root_child_1_child_2_child_0_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_2_child_0_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0_child_0_child_0_child_1) root_child_1_child_2_child_0_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_2_child_0_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_1_child_2_child_0_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0_child_0_child_0_child_1.x = 4.166666626930237;
root_child_1_child_2_child_0_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_1_child_2_child_0_child_0_child_0 = figma.exclude([root_child_1_child_2_child_0_child_0_child_0_child_0, root_child_1_child_2_child_0_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_2_child_0_child_0_child_0.name = "Shape";
root_child_1_child_2_child_0_child_0_child_0.visible = true;
root_child_1_child_2_child_0_child_0_child_0.opacity = 1;
root_child_1_child_2_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_2_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_2_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_2_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0_child_0_child_0) root_child_1_child_2_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_2_child_0_child_0.appendChild(root_child_1_child_2_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_2_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0_child_0_child_0.x = 2.5;
root_child_1_child_2_child_0_child_0_child_0.y = 2.5;
root_child_1_child_2_child_0.appendChild(root_child_1_child_2_child_0_child_0);
// Child Layout Props
root_child_1_child_2_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_2_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_0_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_2_child_0_child_1 = figma.createText();
root_child_1_child_2_child_0_child_1.name = "Filter name";
root_child_1_child_2_child_0_child_1.visible = true;
root_child_1_child_2_child_0_child_1.opacity = 1;
root_child_1_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.maskType = "ALPHA";
root_child_1_child_2_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0_child_1.strokeWeight = 1;
root_child_1_child_2_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_2_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_2_child_0_child_1.characters = `Football Development`;
root_child_1_child_2_child_0_child_1.fontSize = 16;
root_child_1_child_2_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_2_child_0_child_1.textAlignVertical = "CENTER";
root_child_1_child_2_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_2_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_2_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.textDecoration = "NONE";
root_child_1_child_2_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_2_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_2_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_2_child_0_child_1, 0, 20, {"family":"Open Sans","style":"Regular"});
root_child_1_child_2_child_0_child_1.setRangeFills(0, 20, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_2_child_0_child_1.setRangeFontSize(0, 20, 16);
root_child_1_child_2_child_0.appendChild(root_child_1_child_2_child_0_child_1);
// Child Layout Props
root_child_1_child_2_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_2_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_0_child_1, {"width":165,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_2.appendChild(root_child_1_child_2_child_0);
// Child Layout Props
root_child_1_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_0, {"width":189,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1931
const root_child_1_child_2_child_1 = figma.createFrame();
root_child_1_child_2_child_1.name = "Frame 1931";
root_child_1_child_2_child_1.visible = true;
root_child_1_child_2_child_1.opacity = 1;
root_child_1_child_2_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2_child_1) root_child_1_child_2_child_1.clipsContent = false;
if ("layoutMode" in root_child_1_child_2_child_1) {
    root_child_1_child_2_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_2_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_2_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_2_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_2_child_1.itemSpacing = 4;
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
if ("clipsContent" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_2_child_1_child_0) {
    root_child_1_child_2_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
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
if ("cornerRadius" in root_child_1_child_2_child_1_child_0) root_child_1_child_2_child_1_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Shape
const root_child_1_child_2_child_1_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_2_child_1_child_0_child_0_child_0.name = "Shape";
root_child_1_child_2_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_2_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_2_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_1_child_0_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_1_child_0_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_1_child_0_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_2_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.36705881357192993,"b":0.7058823704719543},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_1_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_2_child_1_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_1_child_0_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_1_child_0_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_1_child_0_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_2_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_1_child_0_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_2_child_1_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_2_child_1_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_1_child_0_child_0_child_0.x = 2.5;
root_child_1_child_2_child_1_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Shape
const root_child_1_child_2_child_1_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_2_child_1_child_0_child_0_child_1.name = "Shape";
root_child_1_child_2_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_2_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_2_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_1_child_0_child_0_child_1) root_child_1_child_2_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_1_child_0_child_0_child_1) root_child_1_child_2_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_1_child_0_child_0_child_1) root_child_1_child_2_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_2_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_1_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_2_child_1_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_1_child_0_child_0_child_1) root_child_1_child_2_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_1_child_0_child_0_child_1) root_child_1_child_2_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_1_child_0_child_0_child_1) root_child_1_child_2_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_2_child_1_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_1_child_0_child_0_child_1) root_child_1_child_2_child_1_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_2_child_1_child_0_child_0_child_1.vectorPaths = [{"windingRule":"NONZERO","data":"M 1.2977024912834167 4.405015707015991 C 0.9889980902274449 4.120446344216664 0.502139578262965 4.13375531633695 0.21027361353238425 4.434742132822673 C -0.08159235119819644 4.735728949308395 -0.06794211765130362 5.210416217645009 0.24076228340466818 5.494985580444336 L 2.1934243043263755 7.294984658559164 C 2.48996136089166 7.56833794216315 2.953827405969302 7.56833794216315 3.250364462534587 7.294984658559164 L 9.75923776626587 1.2949865063031516 C 10.06794216732184 1.010417143503825 10.081592698891958 0.5357300738493602 9.789726734161377 0.2347432573636373 C 9.497860769430796 -0.0662435591220856 9.01100161174933 -0.07955255607763928 8.70229721069336 0.20501680672168732 L 2.721894383430481 5.717862049738566 L 1.2977024912834167 4.405015707015991 Z"}];
applySizeAndTransform(root_child_1_child_2_child_1_child_0_child_0_child_1, {"width":10,"height":7.5,"relativeTransform":[[1,0,5],[0,1,6.666666507720947]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_1_child_0_child_0_child_1.x = 5;
root_child_1_child_2_child_1_child_0_child_0_child_1.y = 6.666666507720947;
const root_child_1_child_2_child_1_child_0_child_0 = figma.subtract([root_child_1_child_2_child_1_child_0_child_0_child_0, root_child_1_child_2_child_1_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_2_child_1_child_0_child_0.name = "Shape";
root_child_1_child_2_child_1_child_0_child_0.visible = true;
root_child_1_child_2_child_1_child_0_child_0.opacity = 1;
root_child_1_child_2_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_1_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_1_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_1_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0.maskType = "ALPHA";
root_child_1_child_2_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_1_child_0_child_0.strokeWeight = 0;
root_child_1_child_2_child_1_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_2_child_1_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_1_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_1_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_2_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_1_child_0_child_0) root_child_1_child_2_child_1_child_0_child_0.cornerRadius = 0;
root_child_1_child_2_child_1_child_0.appendChild(root_child_1_child_2_child_1_child_0_child_0);
applySizeAndTransform(root_child_1_child_2_child_1_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_1_child_0_child_0.x = 2.5;
root_child_1_child_2_child_1_child_0_child_0.y = 2.5;
root_child_1_child_2_child_1.appendChild(root_child_1_child_2_child_1_child_0);
// Child Layout Props
root_child_1_child_2_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_2_child_1_child_1 = figma.createText();
root_child_1_child_2_child_1_child_1.name = "Filter name";
root_child_1_child_2_child_1_child_1.visible = true;
root_child_1_child_2_child_1_child_1.opacity = 1;
root_child_1_child_2_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.maskType = "ALPHA";
root_child_1_child_2_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_1_child_1.strokeWeight = 1;
root_child_1_child_2_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_2_child_1_child_1.effects = [];
// Text Properties
root_child_1_child_2_child_1_child_1.characters = `Governance, Organisation of Football and Sport`;
root_child_1_child_2_child_1_child_1.fontSize = 16;
root_child_1_child_2_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_2_child_1_child_1.textAlignVertical = "CENTER";
root_child_1_child_2_child_1_child_1.textAutoResize = "HEIGHT";
root_child_1_child_2_child_1_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_2_child_1_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_2_child_1_child_1) root_child_1_child_2_child_1_child_1.textDecoration = "NONE";
root_child_1_child_2_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_2_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_2_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_2_child_1_child_1, 0, 46, {"family":"Open Sans","style":"Regular"});
root_child_1_child_2_child_1_child_1.setRangeFills(0, 46, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_2_child_1_child_1.setRangeFontSize(0, 46, 16);
root_child_1_child_2_child_1.appendChild(root_child_1_child_2_child_1_child_1);
// Child Layout Props
root_child_1_child_2_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_2_child_1_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_1_child_2_child_1_child_1, {"width":355,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_2.appendChild(root_child_1_child_2_child_1);
// Child Layout Props
root_child_1_child_2_child_1.layoutAlign = "INHERIT";
root_child_1_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2_child_1, {"width":379,"height":24,"relativeTransform":[[1,0,0],[0,1,40]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_2);
// Child Layout Props
root_child_1_child_2.layoutAlign = "INHERIT";
root_child_1_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_2, {"width":379,"height":64,"relativeTransform":[[1,0,608],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1939
const root_child_1_child_3 = figma.createFrame();
root_child_1_child_3.name = "Frame 1939";
root_child_1_child_3.visible = true;
root_child_1_child_3.opacity = 1;
root_child_1_child_3.locked = false;
if ("blendMode" in root_child_1_child_3) root_child_1_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3) root_child_1_child_3.isMask = false;
if ("maskType" in root_child_1_child_3) root_child_1_child_3.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_3) root_child_1_child_3.clipsContent = false;
if ("layoutMode" in root_child_1_child_3) {
    root_child_1_child_3.layoutMode = "VERTICAL";
    root_child_1_child_3.primaryAxisSizingMode = "AUTO";
    root_child_1_child_3.counterAxisSizingMode = "AUTO";
    root_child_1_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_3.counterAxisAlignItems = "MIN";
    root_child_1_child_3.itemSpacing = 16;
    root_child_1_child_3.paddingTop = 0;
    root_child_1_child_3.paddingRight = 0;
    root_child_1_child_3.paddingBottom = 0;
    root_child_1_child_3.paddingLeft = 0;
    root_child_1_child_3.itemReverseZIndex = false;
    root_child_1_child_3.strokesIncludedInLayout = false;
}
root_child_1_child_3.fills = await this.hydratePaints([]);
root_child_1_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_3.strokeWeight = 1;
root_child_1_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_3) root_child_1_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3) root_child_1_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3) root_child_1_child_3.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_3) root_child_1_child_3.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_3) root_child_1_child_3.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_3) root_child_1_child_3.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_3) root_child_1_child_3.strokeLeftWeight = 1;
root_child_1_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_3) root_child_1_child_3.cornerRadius = 0;

// Start Child: Frame 1932
const root_child_1_child_3_child_0 = figma.createFrame();
root_child_1_child_3_child_0.name = "Frame 1932";
root_child_1_child_3_child_0.visible = true;
root_child_1_child_3_child_0.opacity = 1;
root_child_1_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_3_child_0) {
    root_child_1_child_3_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_3_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_3_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_3_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_3_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_3_child_0.itemSpacing = 4;
    root_child_1_child_3_child_0.paddingTop = 0;
    root_child_1_child_3_child_0.paddingRight = 0;
    root_child_1_child_3_child_0.paddingBottom = 0;
    root_child_1_child_3_child_0.paddingLeft = 0;
    root_child_1_child_3_child_0.itemReverseZIndex = false;
    root_child_1_child_3_child_0.strokesIncludedInLayout = false;
}
root_child_1_child_3_child_0.fills = await this.hydratePaints([]);
root_child_1_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_0.strokeWeight = 1;
root_child_1_child_3_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeLeftWeight = 1;
root_child_1_child_3_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_3_child_0_child_0 = figma.createFrame();
root_child_1_child_3_child_0_child_0.name = "Checkbox";
root_child_1_child_3_child_0_child_0.visible = true;
root_child_1_child_3_child_0_child_0.opacity = 1;
root_child_1_child_3_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_3_child_0_child_0) {
    root_child_1_child_3_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_3_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_3_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_0_child_0.strokeWeight = 1;
root_child_1_child_3_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.strokeLeftWeight = 1;
root_child_1_child_3_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_1_child_3_child_0_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_3_child_0_child_0_child_0_child_0.name = "Path";
root_child_1_child_3_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_3_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_3_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_3_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_3_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_0_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_3_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_3_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_0_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_3_child_0_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_3_child_0_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_3_child_0_child_0_child_0_child_0.x = 2.5;
root_child_1_child_3_child_0_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_1_child_3_child_0_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_3_child_0_child_0_child_0_child_1.name = "Path";
root_child_1_child_3_child_0_child_0_child_0_child_1.visible = true;
root_child_1_child_3_child_0_child_0_child_0_child_1.opacity = 1;
root_child_1_child_3_child_0_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_3_child_0_child_0_child_0_child_1) root_child_1_child_3_child_0_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0_child_0_child_0_child_1) root_child_1_child_3_child_0_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_3_child_0_child_0_child_0_child_1) root_child_1_child_3_child_0_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_3_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_3_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_0_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_3_child_0_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_3_child_0_child_0_child_0_child_1) root_child_1_child_3_child_0_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_0_child_0_child_0_child_1) root_child_1_child_3_child_0_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_0_child_0_child_0_child_1) root_child_1_child_3_child_0_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_3_child_0_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_0_child_0_child_0_child_1) root_child_1_child_3_child_0_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_3_child_0_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_1_child_3_child_0_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_3_child_0_child_0_child_0_child_1.x = 4.166666626930237;
root_child_1_child_3_child_0_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_1_child_3_child_0_child_0_child_0 = figma.exclude([root_child_1_child_3_child_0_child_0_child_0_child_0, root_child_1_child_3_child_0_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_3_child_0_child_0_child_0.name = "Shape";
root_child_1_child_3_child_0_child_0_child_0.visible = true;
root_child_1_child_3_child_0_child_0_child_0.opacity = 1;
root_child_1_child_3_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_3_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_3_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_3_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_3_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_3_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_0_child_0_child_0) root_child_1_child_3_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_3_child_0_child_0.appendChild(root_child_1_child_3_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_3_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_3_child_0_child_0_child_0.x = 2.5;
root_child_1_child_3_child_0_child_0_child_0.y = 2.5;
root_child_1_child_3_child_0.appendChild(root_child_1_child_3_child_0_child_0);
// Child Layout Props
root_child_1_child_3_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_3_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_3_child_0_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_3_child_0_child_1 = figma.createText();
root_child_1_child_3_child_0_child_1.name = "Filter name";
root_child_1_child_3_child_0_child_1.visible = true;
root_child_1_child_3_child_0_child_1.opacity = 1;
root_child_1_child_3_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.maskType = "ALPHA";
root_child_1_child_3_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_3_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_0_child_1.strokeWeight = 1;
root_child_1_child_3_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_3_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_3_child_0_child_1.characters = `Innovation`;
root_child_1_child_3_child_0_child_1.fontSize = 16;
root_child_1_child_3_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_3_child_0_child_1.textAlignVertical = "CENTER";
root_child_1_child_3_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_3_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_3_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.textDecoration = "NONE";
root_child_1_child_3_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_3_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_3_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_3_child_0_child_1, 0, 10, {"family":"Open Sans","style":"Regular"});
root_child_1_child_3_child_0_child_1.setRangeFills(0, 10, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_3_child_0_child_1.setRangeFontSize(0, 10, 16);
root_child_1_child_3_child_0.appendChild(root_child_1_child_3_child_0_child_1);
// Child Layout Props
root_child_1_child_3_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_3_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_3_child_0_child_1, {"width":80,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_3.appendChild(root_child_1_child_3_child_0);
// Child Layout Props
root_child_1_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_3_child_0, {"width":104,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: checkbox_element
const root_child_1_child_3_child_1 = figma.createFrame();
root_child_1_child_3_child_1.name = "checkbox_element";
root_child_1_child_3_child_1.visible = true;
root_child_1_child_3_child_1.opacity = 1;
root_child_1_child_3_child_1.locked = false;
if ("blendMode" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.isMask = false;
if ("maskType" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.clipsContent = false;
if ("layoutMode" in root_child_1_child_3_child_1) {
    root_child_1_child_3_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_3_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_3_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_3_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_3_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_3_child_1.itemSpacing = 4;
    root_child_1_child_3_child_1.paddingTop = 0;
    root_child_1_child_3_child_1.paddingRight = 0;
    root_child_1_child_3_child_1.paddingBottom = 0;
    root_child_1_child_3_child_1.paddingLeft = 0;
    root_child_1_child_3_child_1.itemReverseZIndex = false;
    root_child_1_child_3_child_1.strokesIncludedInLayout = false;
}
root_child_1_child_3_child_1.fills = await this.hydratePaints([]);
root_child_1_child_3_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_1.strokeWeight = 1;
root_child_1_child_3_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.strokeLeftWeight = 1;
root_child_1_child_3_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_1) root_child_1_child_3_child_1.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_3_child_1_child_0 = figma.createFrame();
root_child_1_child_3_child_1_child_0.name = "Checkbox";
root_child_1_child_3_child_1_child_0.visible = true;
root_child_1_child_3_child_1_child_0.opacity = 1;
root_child_1_child_3_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_3_child_1_child_0) {
    root_child_1_child_3_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_3_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_3_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_1_child_0.strokeWeight = 1;
root_child_1_child_3_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.strokeLeftWeight = 1;
root_child_1_child_3_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_1_child_0) root_child_1_child_3_child_1_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_1_child_3_child_1_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_3_child_1_child_0_child_0_child_0.name = "Path";
root_child_1_child_3_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_3_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_3_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_1_child_0_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_1_child_0_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_1_child_0_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_3_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_3_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_1_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_3_child_1_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_3_child_1_child_0_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_1_child_0_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_1_child_0_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_3_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_1_child_0_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_3_child_1_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_3_child_1_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_3_child_1_child_0_child_0_child_0.x = 2.5;
root_child_1_child_3_child_1_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_1_child_3_child_1_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_3_child_1_child_0_child_0_child_1.name = "Path";
root_child_1_child_3_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_3_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_3_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_3_child_1_child_0_child_0_child_1) root_child_1_child_3_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_1_child_0_child_0_child_1) root_child_1_child_3_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_3_child_1_child_0_child_0_child_1) root_child_1_child_3_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_3_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_3_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_1_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_3_child_1_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_3_child_1_child_0_child_0_child_1) root_child_1_child_3_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_1_child_0_child_0_child_1) root_child_1_child_3_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_1_child_0_child_0_child_1) root_child_1_child_3_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_3_child_1_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_1_child_0_child_0_child_1) root_child_1_child_3_child_1_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_3_child_1_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_1_child_3_child_1_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_3_child_1_child_0_child_0_child_1.x = 4.166666626930237;
root_child_1_child_3_child_1_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_1_child_3_child_1_child_0_child_0 = figma.exclude([root_child_1_child_3_child_1_child_0_child_0_child_0, root_child_1_child_3_child_1_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_3_child_1_child_0_child_0.name = "Shape";
root_child_1_child_3_child_1_child_0_child_0.visible = true;
root_child_1_child_3_child_1_child_0_child_0.opacity = 1;
root_child_1_child_3_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_1_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_1_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_1_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0.maskType = "ALPHA";
root_child_1_child_3_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_3_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_1_child_0_child_0.strokeWeight = 0;
root_child_1_child_3_child_1_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_3_child_1_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_1_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_1_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_3_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_1_child_0_child_0) root_child_1_child_3_child_1_child_0_child_0.cornerRadius = 0;
root_child_1_child_3_child_1_child_0.appendChild(root_child_1_child_3_child_1_child_0_child_0);
applySizeAndTransform(root_child_1_child_3_child_1_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_3_child_1_child_0_child_0.x = 2.5;
root_child_1_child_3_child_1_child_0_child_0.y = 2.5;
root_child_1_child_3_child_1.appendChild(root_child_1_child_3_child_1_child_0);
// Child Layout Props
root_child_1_child_3_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_3_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_3_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_3_child_1_child_1 = figma.createText();
root_child_1_child_3_child_1_child_1.name = "Filter name";
root_child_1_child_3_child_1_child_1.visible = true;
root_child_1_child_3_child_1_child_1.opacity = 1;
root_child_1_child_3_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_3_child_1_child_1) root_child_1_child_3_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_1_child_1) root_child_1_child_3_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_3_child_1_child_1) root_child_1_child_3_child_1_child_1.maskType = "ALPHA";
root_child_1_child_3_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_3_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_1_child_1.strokeWeight = 1;
root_child_1_child_3_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_3_child_1_child_1) root_child_1_child_3_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_1_child_1) root_child_1_child_3_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_1_child_1) root_child_1_child_3_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_3_child_1_child_1.effects = [];
// Text Properties
root_child_1_child_3_child_1_child_1.characters = `Leadership`;
root_child_1_child_3_child_1_child_1.fontSize = 16;
root_child_1_child_3_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_3_child_1_child_1.textAlignVertical = "CENTER";
root_child_1_child_3_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_3_child_1_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_3_child_1_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_3_child_1_child_1) root_child_1_child_3_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_3_child_1_child_1) root_child_1_child_3_child_1_child_1.textDecoration = "NONE";
root_child_1_child_3_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_3_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_3_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_3_child_1_child_1, 0, 10, {"family":"Open Sans","style":"Regular"});
root_child_1_child_3_child_1_child_1.setRangeFills(0, 10, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_3_child_1_child_1.setRangeFontSize(0, 10, 16);
root_child_1_child_3_child_1.appendChild(root_child_1_child_3_child_1_child_1);
// Child Layout Props
root_child_1_child_3_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_3_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_3_child_1_child_1, {"width":83,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_3.appendChild(root_child_1_child_3_child_1);
// Child Layout Props
root_child_1_child_3_child_1.layoutAlign = "INHERIT";
root_child_1_child_3_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_3_child_1, {"width":107,"height":24,"relativeTransform":[[1,0,0],[0,1,40]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_3);
// Child Layout Props
root_child_1_child_3.layoutAlign = "INHERIT";
root_child_1_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_3, {"width":107,"height":64,"relativeTransform":[[1,0,1019],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1940
const root_child_1_child_4 = figma.createFrame();
root_child_1_child_4.name = "Frame 1940";
root_child_1_child_4.visible = true;
root_child_1_child_4.opacity = 1;
root_child_1_child_4.locked = false;
if ("blendMode" in root_child_1_child_4) root_child_1_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4) root_child_1_child_4.isMask = false;
if ("maskType" in root_child_1_child_4) root_child_1_child_4.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_4) root_child_1_child_4.clipsContent = false;
if ("layoutMode" in root_child_1_child_4) {
    root_child_1_child_4.layoutMode = "VERTICAL";
    root_child_1_child_4.primaryAxisSizingMode = "AUTO";
    root_child_1_child_4.counterAxisSizingMode = "AUTO";
    root_child_1_child_4.primaryAxisAlignItems = "MIN";
    root_child_1_child_4.counterAxisAlignItems = "MIN";
    root_child_1_child_4.itemSpacing = 16;
    root_child_1_child_4.paddingTop = 0;
    root_child_1_child_4.paddingRight = 0;
    root_child_1_child_4.paddingBottom = 0;
    root_child_1_child_4.paddingLeft = 0;
    root_child_1_child_4.itemReverseZIndex = false;
    root_child_1_child_4.strokesIncludedInLayout = false;
}
root_child_1_child_4.fills = await this.hydratePaints([]);
root_child_1_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_4.strokeWeight = 1;
root_child_1_child_4.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_4) root_child_1_child_4.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4) root_child_1_child_4.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4) root_child_1_child_4.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_4) root_child_1_child_4.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_4) root_child_1_child_4.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_4) root_child_1_child_4.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_4) root_child_1_child_4.strokeLeftWeight = 1;
root_child_1_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_4) root_child_1_child_4.cornerRadius = 0;

// Start Child: Frame 1935
const root_child_1_child_4_child_0 = figma.createFrame();
root_child_1_child_4_child_0.name = "Frame 1935";
root_child_1_child_4_child_0.visible = true;
root_child_1_child_4_child_0.opacity = 1;
root_child_1_child_4_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_4_child_0) {
    root_child_1_child_4_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_4_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_4_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_4_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_4_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_4_child_0.itemSpacing = 4;
    root_child_1_child_4_child_0.paddingTop = 0;
    root_child_1_child_4_child_0.paddingRight = 0;
    root_child_1_child_4_child_0.paddingBottom = 0;
    root_child_1_child_4_child_0.paddingLeft = 0;
    root_child_1_child_4_child_0.itemReverseZIndex = false;
    root_child_1_child_4_child_0.strokesIncludedInLayout = false;
}
root_child_1_child_4_child_0.fills = await this.hydratePaints([]);
root_child_1_child_4_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_0.strokeWeight = 1;
root_child_1_child_4_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeLeftWeight = 1;
root_child_1_child_4_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_4_child_0_child_0 = figma.createFrame();
root_child_1_child_4_child_0_child_0.name = "Checkbox";
root_child_1_child_4_child_0_child_0.visible = true;
root_child_1_child_4_child_0_child_0.opacity = 1;
root_child_1_child_4_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_4_child_0_child_0) {
    root_child_1_child_4_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_4_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_4_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_0_child_0.strokeWeight = 1;
root_child_1_child_4_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeLeftWeight = 1;
root_child_1_child_4_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_1_child_4_child_0_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_4_child_0_child_0_child_0_child_0.name = "Path";
root_child_1_child_4_child_0_child_0_child_0_child_0.visible = true;
root_child_1_child_4_child_0_child_0_child_0_child_0.opacity = 1;
root_child_1_child_4_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_0_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_0_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_4_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_4_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_0_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_4_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_4_child_0_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_0_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_0_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_4_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_0_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_4_child_0_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_4_child_0_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_4_child_0_child_0_child_0_child_0.x = 2.5;
root_child_1_child_4_child_0_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_1_child_4_child_0_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_4_child_0_child_0_child_0_child_1.name = "Path";
root_child_1_child_4_child_0_child_0_child_0_child_1.visible = true;
root_child_1_child_4_child_0_child_0_child_0_child_1.opacity = 1;
root_child_1_child_4_child_0_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_4_child_0_child_0_child_0_child_1) root_child_1_child_4_child_0_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0_child_0_child_0_child_1) root_child_1_child_4_child_0_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_4_child_0_child_0_child_0_child_1) root_child_1_child_4_child_0_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_4_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_4_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_0_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_4_child_0_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_4_child_0_child_0_child_0_child_1) root_child_1_child_4_child_0_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_0_child_0_child_0_child_1) root_child_1_child_4_child_0_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_0_child_0_child_0_child_1) root_child_1_child_4_child_0_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_4_child_0_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_0_child_0_child_0_child_1) root_child_1_child_4_child_0_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_4_child_0_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_1_child_4_child_0_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_4_child_0_child_0_child_0_child_1.x = 4.166666626930237;
root_child_1_child_4_child_0_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_1_child_4_child_0_child_0_child_0 = figma.exclude([root_child_1_child_4_child_0_child_0_child_0_child_0, root_child_1_child_4_child_0_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_4_child_0_child_0_child_0.name = "Shape";
root_child_1_child_4_child_0_child_0_child_0.visible = true;
root_child_1_child_4_child_0_child_0_child_0.opacity = 1;
root_child_1_child_4_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_4_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_4_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_4_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_4_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_4_child_0_child_0.appendChild(root_child_1_child_4_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_4_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_4_child_0_child_0_child_0.x = 2.5;
root_child_1_child_4_child_0_child_0_child_0.y = 2.5;
root_child_1_child_4_child_0.appendChild(root_child_1_child_4_child_0_child_0);
// Child Layout Props
root_child_1_child_4_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_4_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_4_child_0_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_4_child_0_child_1 = figma.createText();
root_child_1_child_4_child_0_child_1.name = "Filter name";
root_child_1_child_4_child_0_child_1.visible = true;
root_child_1_child_4_child_0_child_1.opacity = 1;
root_child_1_child_4_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_4_child_0_child_1) root_child_1_child_4_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0_child_1) root_child_1_child_4_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_4_child_0_child_1) root_child_1_child_4_child_0_child_1.maskType = "ALPHA";
root_child_1_child_4_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_4_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_0_child_1.strokeWeight = 1;
root_child_1_child_4_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_4_child_0_child_1) root_child_1_child_4_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_0_child_1) root_child_1_child_4_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_0_child_1) root_child_1_child_4_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_4_child_0_child_1.effects = [];
// Text Properties
root_child_1_child_4_child_0_child_1.characters = `Marketing Sponsorship`;
root_child_1_child_4_child_0_child_1.fontSize = 16;
root_child_1_child_4_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_4_child_0_child_1.textAlignVertical = "CENTER";
root_child_1_child_4_child_0_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_4_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_4_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_4_child_0_child_1) root_child_1_child_4_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_4_child_0_child_1) root_child_1_child_4_child_0_child_1.textDecoration = "NONE";
root_child_1_child_4_child_0_child_1.paragraphSpacing = 0;
root_child_1_child_4_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_4_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_4_child_0_child_1, 0, 21, {"family":"Open Sans","style":"Regular"});
root_child_1_child_4_child_0_child_1.setRangeFills(0, 21, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_4_child_0_child_1.setRangeFontSize(0, 21, 16);
root_child_1_child_4_child_0.appendChild(root_child_1_child_4_child_0_child_1);
// Child Layout Props
root_child_1_child_4_child_0_child_1.layoutAlign = "INHERIT";
root_child_1_child_4_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_4_child_0_child_1, {"width":173,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_4.appendChild(root_child_1_child_4_child_0);
// Child Layout Props
root_child_1_child_4_child_0.layoutAlign = "INHERIT";
root_child_1_child_4_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_4_child_0, {"width":197,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1934
const root_child_1_child_4_child_1 = figma.createFrame();
root_child_1_child_4_child_1.name = "Frame 1934";
root_child_1_child_4_child_1.visible = true;
root_child_1_child_4_child_1.opacity = 1;
root_child_1_child_4_child_1.locked = false;
if ("blendMode" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.isMask = false;
if ("maskType" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.clipsContent = false;
if ("layoutMode" in root_child_1_child_4_child_1) {
    root_child_1_child_4_child_1.layoutMode = "HORIZONTAL";
    root_child_1_child_4_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1_child_4_child_1.counterAxisSizingMode = "AUTO";
    root_child_1_child_4_child_1.primaryAxisAlignItems = "MIN";
    root_child_1_child_4_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_4_child_1.itemSpacing = 4;
    root_child_1_child_4_child_1.paddingTop = 0;
    root_child_1_child_4_child_1.paddingRight = 0;
    root_child_1_child_4_child_1.paddingBottom = 0;
    root_child_1_child_4_child_1.paddingLeft = 0;
    root_child_1_child_4_child_1.itemReverseZIndex = false;
    root_child_1_child_4_child_1.strokesIncludedInLayout = false;
}
root_child_1_child_4_child_1.fills = await this.hydratePaints([]);
root_child_1_child_4_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_1.strokeWeight = 1;
root_child_1_child_4_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.strokeLeftWeight = 1;
root_child_1_child_4_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_1) root_child_1_child_4_child_1.cornerRadius = 0;

// Start Child: Checkbox
const root_child_1_child_4_child_1_child_0 = figma.createFrame();
root_child_1_child_4_child_1_child_0.name = "Checkbox";
root_child_1_child_4_child_1_child_0.visible = true;
root_child_1_child_4_child_1_child_0.opacity = 1;
root_child_1_child_4_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_4_child_1_child_0) {
    root_child_1_child_4_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_4_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_4_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_1_child_0.strokeWeight = 1;
root_child_1_child_4_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.strokeLeftWeight = 1;
root_child_1_child_4_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_1_child_0) root_child_1_child_4_child_1_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_1_child_4_child_1_child_0_child_0_child_0 = figma.createVector();
root_child_1_child_4_child_1_child_0_child_0_child_0.name = "Path";
root_child_1_child_4_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_4_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_4_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_1_child_0_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_1_child_0_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_1_child_0_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_4_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_4_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_1_child_0_child_0_child_0.strokeWeight = 0;
root_child_1_child_4_child_1_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_4_child_1_child_0_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_1_child_0_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_1_child_0_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_4_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_1_child_0_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_4_child_1_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_1_child_4_child_1_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_4_child_1_child_0_child_0_child_0.x = 2.5;
root_child_1_child_4_child_1_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_1_child_4_child_1_child_0_child_0_child_1 = figma.createVector();
root_child_1_child_4_child_1_child_0_child_0_child_1.name = "Path";
root_child_1_child_4_child_1_child_0_child_0_child_1.visible = true;
root_child_1_child_4_child_1_child_0_child_0_child_1.opacity = 1;
root_child_1_child_4_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_4_child_1_child_0_child_0_child_1) root_child_1_child_4_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_1_child_0_child_0_child_1) root_child_1_child_4_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_4_child_1_child_0_child_0_child_1) root_child_1_child_4_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_1_child_4_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_1_child_4_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_1_child_0_child_0_child_1.strokeWeight = 0;
root_child_1_child_4_child_1_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_4_child_1_child_0_child_0_child_1) root_child_1_child_4_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_1_child_0_child_0_child_1) root_child_1_child_4_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_1_child_0_child_0_child_1) root_child_1_child_4_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_4_child_1_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_1_child_0_child_0_child_1) root_child_1_child_4_child_1_child_0_child_0_child_1.cornerRadius = 0;
root_child_1_child_4_child_1_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_1_child_4_child_1_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_4_child_1_child_0_child_0_child_1.x = 4.166666626930237;
root_child_1_child_4_child_1_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_1_child_4_child_1_child_0_child_0 = figma.exclude([root_child_1_child_4_child_1_child_0_child_0_child_0, root_child_1_child_4_child_1_child_0_child_0_child_1], figma.currentPage);
root_child_1_child_4_child_1_child_0_child_0.name = "Shape";
root_child_1_child_4_child_1_child_0_child_0.visible = true;
root_child_1_child_4_child_1_child_0_child_0.opacity = 1;
root_child_1_child_4_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_1_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_1_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_1_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0.maskType = "ALPHA";
root_child_1_child_4_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_4_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_1_child_0_child_0.strokeWeight = 0;
root_child_1_child_4_child_1_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_4_child_1_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_1_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_1_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_4_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_1_child_0_child_0) root_child_1_child_4_child_1_child_0_child_0.cornerRadius = 0;
root_child_1_child_4_child_1_child_0.appendChild(root_child_1_child_4_child_1_child_0_child_0);
applySizeAndTransform(root_child_1_child_4_child_1_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_4_child_1_child_0_child_0.x = 2.5;
root_child_1_child_4_child_1_child_0_child_0.y = 2.5;
root_child_1_child_4_child_1.appendChild(root_child_1_child_4_child_1_child_0);
// Child Layout Props
root_child_1_child_4_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_4_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_4_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,0],[0,1,2]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_1_child_4_child_1_child_1 = figma.createText();
root_child_1_child_4_child_1_child_1.name = "Filter name";
root_child_1_child_4_child_1_child_1.visible = true;
root_child_1_child_4_child_1_child_1.opacity = 1;
root_child_1_child_4_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_4_child_1_child_1) root_child_1_child_4_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_1_child_1) root_child_1_child_4_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_4_child_1_child_1) root_child_1_child_4_child_1_child_1.maskType = "ALPHA";
root_child_1_child_4_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_4_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_1_child_1.strokeWeight = 1;
root_child_1_child_4_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_4_child_1_child_1) root_child_1_child_4_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_1_child_1) root_child_1_child_4_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_1_child_1) root_child_1_child_4_child_1_child_1.strokeMiterLimit = 4;
root_child_1_child_4_child_1_child_1.effects = [];
// Text Properties
root_child_1_child_4_child_1_child_1.characters = `Legal and Integrity`;
root_child_1_child_4_child_1_child_1.fontSize = 16;
root_child_1_child_4_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_1_child_4_child_1_child_1.textAlignVertical = "CENTER";
root_child_1_child_4_child_1_child_1.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_4_child_1_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_4_child_1_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_1_child_4_child_1_child_1) root_child_1_child_4_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_4_child_1_child_1) root_child_1_child_4_child_1_child_1.textDecoration = "NONE";
root_child_1_child_4_child_1_child_1.paragraphSpacing = 0;
root_child_1_child_4_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_1_child_4_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_1_child_4_child_1_child_1, 0, 19, {"family":"Open Sans","style":"Regular"});
root_child_1_child_4_child_1_child_1.setRangeFills(0, 19, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_1_child_4_child_1_child_1.setRangeFontSize(0, 19, 16);
root_child_1_child_4_child_1.appendChild(root_child_1_child_4_child_1_child_1);
// Child Layout Props
root_child_1_child_4_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_4_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_4_child_1_child_1, {"width":138,"height":24,"relativeTransform":[[1,0,24],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1_child_4.appendChild(root_child_1_child_4_child_1);
// Child Layout Props
root_child_1_child_4_child_1.layoutAlign = "INHERIT";
root_child_1_child_4_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_4_child_1, {"width":162,"height":24,"relativeTransform":[[1,0,0],[0,1,40]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_4);
// Child Layout Props
root_child_1_child_4.layoutAlign = "INHERIT";
root_child_1_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_4, {"width":197,"height":64,"relativeTransform":[[1,0,1158],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "STRETCH";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":1392,"height":64,"relativeTransform":[[1,0,24],[0,1,88]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":1440,"height":176,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

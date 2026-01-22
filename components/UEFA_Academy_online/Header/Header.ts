import { BaseComponent, ComponentProps } from "../../BaseComponent";
import IMG_img_1_opt_png from "./assets/img_1_opt.png";


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


export class Header extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "Header";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("clipsContent" in root) root.clipsContent = false;
if ("layoutMode" in root) {
    root.layoutMode = "VERTICAL";
    root.primaryAxisSizingMode = "FIXED";
    root.counterAxisSizingMode = "FIXED";
    root.primaryAxisAlignItems = "CENTER";
    root.counterAxisAlignItems = "MIN";
    root.itemSpacing = 8;
    root.paddingTop = 16;
    root.paddingRight = 120;
    root.paddingBottom = 16;
    root.paddingLeft = 120;
}
root.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.09666664153337479,"g":0.6444442868232727,"b":0.6038684248924255},"boundVariables":{}},{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"OVERLAY","scaleMode":"FILL","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"rotation":0,"filters":{"exposure":0.17796610295772552,"contrast":0,"saturation":-1,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"4e43f0beb37bf8962bd3b95e3346809e1ad6aa07","assetRef":IMG_img_1_opt_png}]);
root.strokes = await this.hydratePaints([]);
root.strokeWeight = 1;
root.strokeAlign = "INSIDE";
if ("strokeCap" in root) root.strokeCap = "NONE";
if ("strokeJoin" in root) root.strokeJoin = "MITER";
if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
root.effects = [];
if ("cornerRadius" in root) root.cornerRadius = 0;

// Start Child: Frame 1612
const root_child_0 = figma.createFrame();
root_child_0.name = "Frame 1612";
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
    root_child_0.itemSpacing = 16;
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

// Start Child: Frame 1613
const root_child_0_child_0 = figma.createFrame();
root_child_0_child_0.name = "Frame 1613";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
if ("clipsContent" in root_child_0_child_0) root_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_0_child_0) {
    root_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_0_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_0_child_0.itemSpacing = 4;
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

// Start Child: UEFA Resources
const root_child_0_child_0_child_0 = figma.createText();
root_child_0_child_0_child_0.name = "UEFA Resources";
root_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.isMask = false;
root_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0.strokeWeight = 1;
root_child_0_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0_child_0.effects = [];
// Text Properties
root_child_0_child_0_child_0.characters = "UEFA Resources";
root_child_0_child_0_child_0.fontSize = 40;
root_child_0_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_0_child_0.textAlignVertical = "CENTER";
root_child_0_child_0_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_0_child_0.lineHeight = {"unit":"PIXELS","value":50};
if ("textCase" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.textDecoration = "NONE";
await this.setFont(root_child_0_child_0_child_0, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_0_child_0_child_0, 0, 14, {"family":"Open Sans","style":"Regular"});
root_child_0_child_0_child_0.setRangeFills(0, 14, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_0_child_0.setRangeFontSize(0, 14, 40);
root_child_0_child_0.appendChild(root_child_0_child_0_child_0);
// Child Layout Props
root_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0_child_0, {"width":300,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_0);
// Child Layout Props
root_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0, {"width":300,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "INHERIT";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":300,"height":50,"relativeTransform":[[1,0,120],[0,1,53]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1613
const root_child_1 = figma.createFrame();
root_child_1.name = "Frame 1613";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1) root_child_1.isMask = false;
if ("clipsContent" in root_child_1) root_child_1.clipsContent = false;
if ("layoutMode" in root_child_1) {
    root_child_1.layoutMode = "HORIZONTAL";
    root_child_1.primaryAxisSizingMode = "AUTO";
    root_child_1.counterAxisSizingMode = "AUTO";
    root_child_1.primaryAxisAlignItems = "MIN";
    root_child_1.counterAxisAlignItems = "CENTER";
    root_child_1.itemSpacing = 16;
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

// Start Child: Frame 1613
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Frame 1613";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
if ("clipsContent" in root_child_1_child_0) root_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "HORIZONTAL";
    root_child_1_child_0.primaryAxisSizingMode = "AUTO";
    root_child_1_child_0.counterAxisSizingMode = "AUTO";
    root_child_1_child_0.primaryAxisAlignItems = "MIN";
    root_child_1_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_0.itemSpacing = 4;
    root_child_1_child_0.paddingTop = 0;
    root_child_1_child_0.paddingRight = 0;
    root_child_1_child_0.paddingBottom = 0;
    root_child_1_child_0.paddingLeft = 0;
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

// Start Child: Second line for text description
const root_child_1_child_0_child_0 = figma.createText();
root_child_1_child_0_child_0.name = "Second line for text description";
root_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.isMask = false;
root_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokeWeight = 1;
root_child_1_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_0_child_0.effects = [];
// Text Properties
root_child_1_child_0_child_0.characters = "Second line for text description";
root_child_1_child_0_child_0.fontSize = 16;
root_child_1_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_1_child_0_child_0.textAlignVertical = "CENTER";
root_child_1_child_0_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_1_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_1_child_0_child_0.lineHeight = {"unit":"PIXELS","value":20};
if ("textCase" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.textDecoration = "NONE";
await this.setFont(root_child_1_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_1_child_0_child_0, 0, 32, {"family":"Open Sans","style":"SemiBold"});
root_child_1_child_0_child_0.setRangeFills(0, 32, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_0.setRangeFontSize(0, 32, 16);
root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0_child_0, {"width":241,"height":20,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0, {"width":241,"height":20,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "INHERIT";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":241,"height":20,"relativeTransform":[[1,0,120],[0,1,111]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":1680,"height":184,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

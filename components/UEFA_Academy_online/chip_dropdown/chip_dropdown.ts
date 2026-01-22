import { BaseComponent, ComponentProps } from "../../BaseComponent";


// SVG Assets
const SVG_assets_icon_Shape_I3379_17148_70_461_svg_5_333333492279053x9_333333015441895 = `<svg width="5.333333492279053" height="9.333333015441895" viewBox="0 0 5.333333492279053 9.333333015441895" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.195272C0.877722 -0.0650772 0.455612 -0.0650772 0.195262 0.195272C-0.0650874 0.455622 -0.0650874 0.877732 0.195262 1.13808L4.19526 5.13808C4.45561 5.39843 4.87772 5.39843 5.13807 5.13808L9.13807 1.13808C9.39842 0.877732 9.39842 0.455622 9.13807 0.195272C8.87772 -0.0650772 8.45561 -0.0650772 8.19526 0.195272L4.66667 3.72387L1.13807 0.195272Z" fill="#1A313C"/>
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


export class chip_dropdown extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "chip_dropdown";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("clipsContent" in root) root.clipsContent = false;
if ("layoutMode" in root) {
    root.layoutMode = "HORIZONTAL";
    root.primaryAxisSizingMode = "AUTO";
    root.counterAxisSizingMode = "AUTO";
    root.primaryAxisAlignItems = "MIN";
    root.counterAxisAlignItems = "CENTER";
    root.itemSpacing = 4;
    root.paddingTop = 0;
    root.paddingRight = 0;
    root.paddingBottom = 0;
    root.paddingLeft = 16;
}
root.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"boundVariables":{}}]);
root.strokes = await this.hydratePaints([]);
root.strokeWeight = 1;
root.strokeAlign = "INSIDE";
if ("strokeCap" in root) root.strokeCap = "NONE";
if ("strokeJoin" in root) root.strokeJoin = "MITER";
if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
root.effects = [];
if ("cornerRadius" in root) root.cornerRadius = 8;

// Start Child: Newer first
const root_child_0 = figma.createText();
root_child_0.name = "Newer first";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
root_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 1;
root_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0) root_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0) root_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0) root_child_0.strokeMiterLimit = 4;
root_child_0.effects = [];
// Text Properties
root_child_0.characters = "Newer first";
root_child_0.fontSize = 14;
root_child_0.textAlignHorizontal = "LEFT";
root_child_0.textAlignVertical = "CENTER";
root_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0.lineHeight = {"unit":"PIXELS","value":21};
if ("textCase" in root_child_0) root_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0) root_child_0.textDecoration = "NONE";
await this.setFont(root_child_0, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_0, 0, 11, {"family":"Open Sans","style":"Regular"});
root_child_0.setRangeFills(0, 11, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0.setRangeFontSize(0, 11, 14);
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "INHERIT";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":73,"height":21,"relativeTransform":[[1,0,16],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1667
const root_child_1 = figma.createFrame();
root_child_1.name = "Frame 1667";
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
    root_child_1.itemSpacing = 8;
    root_child_1.paddingTop = 8;
    root_child_1.paddingRight = 8;
    root_child_1.paddingBottom = 8;
    root_child_1.paddingLeft = 8;
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

// Start Child: Navigation / Chevron / Down
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Navigation / Chevron / Down";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
if ("clipsContent" in root_child_1_child_0) root_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0.strokeWeight = 1;
root_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0) root_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0) root_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0) root_child_1_child_0.strokeMiterLimit = 4;
root_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0) root_child_1_child_0.cornerRadius = 0;

// Start Child: Shape
const root_child_1_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Shape_I3379_17148_70_461_svg_5_333333492279053x9_333333015441895);
root_child_1_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_0_child_0 = figma.flatten([root_child_1_child_0_child_0_svgContainer]);
root_child_1_child_0_child_0.name = "Shape";
root_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.isMask = false;
root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokeWeight = 0;
root_child_1_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.cornerRadius = 0;
root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
applySizeAndTransform(root_child_1_child_0_child_0, {"width":5.333333492279053,"height":9.333333015441895,"relativeTransform":[[-1.8369701465288538e-16,1,3.3333332538604736],[-1,-1.8369701465288538e-16,10.666666984558105]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_0_child_0.x = 3.3333332538604736;
root_child_1_child_0_child_0.y = 10.666666984558105;
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_1_child_0, {"width":16,"height":16,"relativeTransform":[[1,0,8],[0,-1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "INHERIT";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":32,"height":32,"relativeTransform":[[1,0,93],[0,-1,32]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":125,"height":32,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

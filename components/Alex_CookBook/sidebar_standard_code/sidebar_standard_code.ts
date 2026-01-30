import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

// SVG Imports
import SVG_sidebar_standard_code_assets_icon_Vector__Stroke__I1119_8689_3016_7769_svg_22_000059127807617x21_020004272460938 from "./assets/sidebar_standard_code_assets_icon_Vector__Stroke__I1119_8689_3016_7769_svg_22_000059127807617x21_020004272460938.svg";
import SVG_sidebar_standard_code_assets_icon_Rectangle_77_Copy_7_I1119_8691_7466_30959_svg_42x22 from "./assets/sidebar_standard_code_assets_icon_Rectangle_77_Copy_7_I1119_8691_7466_30959_svg_42x22.svg";
import SVG_sidebar_standard_code_assets_icon_Oval_1_Copy_13_I1119_8691_7466_30960_svg_18x18 from "./assets/sidebar_standard_code_assets_icon_Oval_1_Copy_13_I1119_8691_7466_30960_svg_18x18.svg";
import SVG_sidebar_standard_code_assets_icon_Shape_I1119_8691_7466_30966_svg_10x10 from "./assets/sidebar_standard_code_assets_icon_Shape_I1119_8691_7466_30966_svg_10x10.svg";
import SVG_sidebar_standard_code_Synth_Path_4 from "./assets/sidebar_standard_code_Synth_Path_4.svg";
import SVG_sidebar_standard_code_Synth_Path_5 from "./assets/sidebar_standard_code_Synth_Path_5.svg";
import SVG_sidebar_standard_code_Synth_Path_6 from "./assets/sidebar_standard_code_Synth_Path_6.svg";
import SVG_sidebar_standard_code_Synth_Shape_7 from "./assets/sidebar_standard_code_Synth_Shape_7.svg";
import SVG_sidebar_standard_code_assets_icon_Union_I1119_8700_5250_18144_svg_8x8 from "./assets/sidebar_standard_code_assets_icon_Union_I1119_8700_5250_18144_svg_8x8.svg";
import SVG_sidebar_standard_code_assets_icon_Vector_I1119_8704_1914_8670_svg_7x0 from "./assets/sidebar_standard_code_assets_icon_Vector_I1119_8704_1914_8670_svg_7x0.svg";
import SVG_sidebar_standard_code_Synth_Path_10 from "./assets/sidebar_standard_code_Synth_Path_10.svg";
import SVG_sidebar_standard_code_Synth_Path_11 from "./assets/sidebar_standard_code_Synth_Path_11.svg";
import SVG_sidebar_standard_code_Synth_Path_12 from "./assets/sidebar_standard_code_Synth_Path_12.svg";
import SVG_sidebar_standard_code_Synth_Path_13 from "./assets/sidebar_standard_code_Synth_Path_13.svg";
import SVG_sidebar_standard_code_Synth_Path_14 from "./assets/sidebar_standard_code_Synth_Path_14.svg";
import SVG_sidebar_standard_code_Synth_Path_15 from "./assets/sidebar_standard_code_Synth_Path_15.svg";
import SVG_sidebar_standard_code_Synth_Path_16 from "./assets/sidebar_standard_code_Synth_Path_16.svg";
import SVG_sidebar_standard_code_Synth_Path_17 from "./assets/sidebar_standard_code_Synth_Path_17.svg";
import SVG_sidebar_standard_code_Synth_Path_18 from "./assets/sidebar_standard_code_Synth_Path_18.svg";
import SVG_sidebar_standard_code_Synth_Path_19 from "./assets/sidebar_standard_code_Synth_Path_19.svg";
import SVG_sidebar_standard_code_Synth_Path_20 from "./assets/sidebar_standard_code_Synth_Path_20.svg";
import SVG_sidebar_standard_code_Synth_Path_21 from "./assets/sidebar_standard_code_Synth_Path_21.svg";
import SVG_sidebar_standard_code_Synth_Path_22 from "./assets/sidebar_standard_code_Synth_Path_22.svg";
import SVG_sidebar_standard_code_Synth_Path_23 from "./assets/sidebar_standard_code_Synth_Path_23.svg";
import SVG_sidebar_standard_code_Synth_Path_24 from "./assets/sidebar_standard_code_Synth_Path_24.svg";
import SVG_sidebar_standard_code_Synth_Path_25 from "./assets/sidebar_standard_code_Synth_Path_25.svg";
import SVG_sidebar_standard_code_assets_icon_Union_I1119_8731_5250_18144_svg_8x8 from "./assets/sidebar_standard_code_assets_icon_Union_I1119_8731_5250_18144_svg_8x8.svg";



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


export class sidebar_standard_code extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "sidebar_standard code";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("maskType" in root) root.maskType = "ALPHA";
if ("clipsContent" in root) root.clipsContent = false;
if ("layoutMode" in root) {
    root.layoutMode = "VERTICAL";
    root.primaryAxisSizingMode = "FIXED";
    root.counterAxisSizingMode = "AUTO";
    root.primaryAxisAlignItems = "MIN";
    root.counterAxisAlignItems = "MIN";
    root.itemSpacing = 16;
    root.paddingTop = 0;
    root.paddingRight = 16;
    root.paddingBottom = 0;
    root.paddingLeft = 16;
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
if ("cornerRadius" in root) root.cornerRadius = 14;

// Start Child: Frame 1714
const root_child_0 = figma.createFrame();
root_child_0.name = "Frame 1714";
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
    root_child_0.primaryAxisAlignItems = "MIN";
    root_child_0.counterAxisAlignItems = "CENTER";
    root_child_0.itemSpacing = 16;
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

// Start Child: Frame 1919
const root_child_0_child_0 = figma.createFrame();
root_child_0_child_0.name = "Frame 1919";
root_child_0_child_0.visible = true;
root_child_0_child_0.opacity = 1;
root_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0) root_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_0) root_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_0_child_0) {
    root_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_0_child_0.itemSpacing = 4;
    root_child_0_child_0.paddingTop = 0;
    root_child_0_child_0.paddingRight = 0;
    root_child_0_child_0.paddingBottom = 0;
    root_child_0_child_0.paddingLeft = 0;
    root_child_0_child_0.itemReverseZIndex = false;
    root_child_0_child_0.strokesIncludedInLayout = false;
}
root_child_0_child_0.fills = await this.hydratePaints([]);
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

// Start Child: Actions / Star
const root_child_0_child_0_child_0 = figma.createFrame();
root_child_0_child_0_child_0.name = "Actions / Star";
root_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_0_child_0_child_0) {
    root_child_0_child_0_child_0.layoutMode = "NONE";
}
root_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0.strokeWeight = 1;
root_child_0_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.strokeLeftWeight = 1;
root_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_0) root_child_0_child_0_child_0.cornerRadius = 0;

// Start Child: Vector (Stroke)
const root_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_assets_icon_Vector__Stroke__I1119_8689_3016_7769_svg_22_000059127807617x21_020004272460938);
root_child_0_child_0_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_0_child_0_child_0 = figma.flatten([root_child_0_child_0_child_0_child_0_svgContainer]);
root_child_0_child_0_child_0_child_0.name = "Vector (Stroke)";
root_child_0_child_0_child_0_child_0.visible = true;
root_child_0_child_0_child_0_child_0.opacity = 1;
root_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.maskType = "ALPHA";
root_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_0_child_0.strokeWeight = 2;
root_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.strokeCap = "ROUND";
if ("strokeJoin" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.strokeJoin = "ROUND";
if ("strokeMiterLimit" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_0_child_0_child_0) root_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_0_child_0_child_0.appendChild(root_child_0_child_0_child_0_child_0);
applySizeAndTransform(root_child_0_child_0_child_0_child_0, {"width":22.000059127807617,"height":21.020004272460938,"relativeTransform":[[1,0,0.9999708533287048],[0,1,1]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_0_child_0_child_0.x = 0.9999708533287048;
root_child_0_child_0_child_0_child_0.y = 1;
root_child_0_child_0.appendChild(root_child_0_child_0_child_0);
// Child Layout Props
root_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0_child_0, {"width":24,"height":24,"relativeTransform":[[1,0,0],[0,1,0.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Favourites
const root_child_0_child_0_child_1 = figma.createText();
root_child_0_child_0_child_1.name = "Favourites";
root_child_0_child_0_child_1.visible = true;
root_child_0_child_0_child_1.opacity = 1;
root_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.maskType = "ALPHA";
root_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_0_child_1.strokeWeight = 1;
root_child_0_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_0_child_0_child_1.effects = [];
// Text Properties
root_child_0_child_0_child_1.characters = `Favourites`;
root_child_0_child_0_child_1.fontSize = 20;
root_child_0_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_0_child_0_child_1.textAlignVertical = "CENTER";
root_child_0_child_0_child_1.textAutoResize = "HEIGHT";
root_child_0_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_0_child_1.lineHeight = {"unit":"PIXELS","value":25};
if ("textCase" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_0_child_1) root_child_0_child_0_child_1.textDecoration = "NONE";
root_child_0_child_0_child_1.paragraphSpacing = 0;
root_child_0_child_0_child_1.paragraphIndent = 0;
await this.setFont(root_child_0_child_0_child_1, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_0_child_1, 0, 10, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_0_child_1.setRangeFills(0, 10, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_0_child_1.setRangeFontSize(0, 10, 20);
root_child_0_child_0.appendChild(root_child_0_child_0_child_1);
// Child Layout Props
root_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_0_child_0_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_0_child_1, {"width":221,"height":25,"relativeTransform":[[1,0,28],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_0);
// Child Layout Props
root_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_0, {"width":249,"height":25,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Toggle
const root_child_0_child_1 = figma.createFrame();
root_child_0_child_1.name = "Toggle";
root_child_0_child_1.visible = true;
root_child_0_child_1.opacity = 1;
root_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1) root_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1) root_child_0_child_1.isMask = false;
if ("maskType" in root_child_0_child_1) root_child_0_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_0_child_1) root_child_0_child_1.clipsContent = false;
if ("layoutMode" in root_child_0_child_1) {
    root_child_0_child_1.layoutMode = "NONE";
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

// Start Child: Rectangle 77 Copy 7
const root_child_0_child_1_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_assets_icon_Rectangle_77_Copy_7_I1119_8691_7466_30959_svg_42x22);
root_child_0_child_1_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_1_child_0 = figma.flatten([root_child_0_child_1_child_0_svgContainer]);
root_child_0_child_1_child_0.name = "Rectangle 77 Copy 7";
root_child_0_child_1_child_0.visible = true;
root_child_0_child_1_child_0.opacity = 1;
root_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.isMask = false;
if ("maskType" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.maskType = "ALPHA";
root_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0.strokeWeight = 0;
root_child_0_child_1_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_1_child_0.effects = [];
root_child_0_child_1.appendChild(root_child_0_child_1_child_0);
applySizeAndTransform(root_child_0_child_1_child_0, {"width":42,"height":22,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_1_child_0.x = 0;
root_child_0_child_1_child_0.y = 0;

// Start Child: Oval 1 Copy 13
const root_child_0_child_1_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_assets_icon_Oval_1_Copy_13_I1119_8691_7466_30960_svg_18x18);
root_child_0_child_1_child_1_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_1_child_1 = figma.flatten([root_child_0_child_1_child_1_svgContainer]);
root_child_0_child_1_child_1.name = "Oval 1 Copy 13";
root_child_0_child_1_child_1.visible = true;
root_child_0_child_1_child_1.opacity = 1;
root_child_0_child_1_child_1.locked = false;
if ("blendMode" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.isMask = false;
if ("maskType" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.maskType = "ALPHA";
root_child_0_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_1.strokeWeight = 0;
root_child_0_child_1_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.strokeMiterLimit = 4;
root_child_0_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_1) root_child_0_child_1_child_1.cornerRadius = 0;
root_child_0_child_1.appendChild(root_child_0_child_1_child_1);
applySizeAndTransform(root_child_0_child_1_child_1, {"width":18,"height":18,"relativeTransform":[[1,0,2],[0,1,2]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_1_child_1.x = 2;
root_child_0_child_1_child_1.y = 2;

// Start Child: Shape
const root_child_0_child_1_child_2_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_assets_icon_Shape_I1119_8691_7466_30966_svg_10x10);
root_child_0_child_1_child_2_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_1_child_2 = figma.flatten([root_child_0_child_1_child_2_svgContainer]);
root_child_0_child_1_child_2.name = "Shape";
root_child_0_child_1_child_2.visible = true;
root_child_0_child_1_child_2.opacity = 1;
root_child_0_child_1_child_2.locked = false;
if ("blendMode" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.isMask = false;
if ("maskType" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.maskType = "ALPHA";
root_child_0_child_1_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_2.strokeWeight = 0;
root_child_0_child_1_child_2.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.strokeMiterLimit = 4;
root_child_0_child_1_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_2) root_child_0_child_1_child_2.cornerRadius = 0;
root_child_0_child_1.appendChild(root_child_0_child_1_child_2);
applySizeAndTransform(root_child_0_child_1_child_2, {"width":10,"height":10,"relativeTransform":[[1,0,24],[0,1,6]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_1_child_2.x = 24;
root_child_0_child_1_child_2.y = 6;
root_child_0.appendChild(root_child_0_child_1);
// Child Layout Props
root_child_0_child_1.layoutAlign = "INHERIT";
root_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1, {"width":42,"height":22,"relativeTransform":[[1,0,265],[0,1,1.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "STRETCH";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":307,"height":25,"relativeTransform":[[1,0,16],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Line 62
const root_child_1 = figma.createLine();
root_child_1.name = "Line 62";
root_child_1.visible = true;
root_child_1.opacity = 1;
root_child_1.locked = false;
if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1) root_child_1.isMask = false;
if ("maskType" in root_child_1) root_child_1.maskType = "ALPHA";
root_child_1.fills = await this.hydratePaints([]);
root_child_1.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}]);
root_child_1.strokeWeight = 1;
root_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_1) root_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1) root_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1) root_child_1.strokeMiterLimit = 4;
root_child_1.effects = [];
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "STRETCH";
root_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_1, {"width":307,"height":0,"relativeTransform":[[1,0,16],[0,1,41]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1713
const root_child_2 = figma.createFrame();
root_child_2.name = "Frame 1713";
root_child_2.visible = true;
root_child_2.opacity = 1;
root_child_2.locked = false;
if ("blendMode" in root_child_2) root_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2) root_child_2.isMask = false;
if ("maskType" in root_child_2) root_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_2) root_child_2.clipsContent = false;
if ("layoutMode" in root_child_2) {
    root_child_2.layoutMode = "HORIZONTAL";
    root_child_2.primaryAxisSizingMode = "FIXED";
    root_child_2.counterAxisSizingMode = "AUTO";
    root_child_2.primaryAxisAlignItems = "MIN";
    root_child_2.counterAxisAlignItems = "CENTER";
    root_child_2.itemSpacing = 16;
    root_child_2.paddingTop = 0;
    root_child_2.paddingRight = 0;
    root_child_2.paddingBottom = 0;
    root_child_2.paddingLeft = 0;
    root_child_2.itemReverseZIndex = false;
    root_child_2.strokesIncludedInLayout = false;
}
root_child_2.fills = await this.hydratePaints([]);
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
root_child_2.effects = [];
if ("cornerRadius" in root_child_2) root_child_2.cornerRadius = 0;

// Start Child: Filters
const root_child_2_child_0 = figma.createText();
root_child_2_child_0.name = "Filters";
root_child_2_child_0.visible = true;
root_child_2_child_0.opacity = 1;
root_child_2_child_0.locked = false;
if ("blendMode" in root_child_2_child_0) root_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_0) root_child_2_child_0.isMask = false;
if ("maskType" in root_child_2_child_0) root_child_2_child_0.maskType = "ALPHA";
root_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_0.strokeWeight = 1;
root_child_2_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_2_child_0) root_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_0) root_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_0) root_child_2_child_0.strokeMiterLimit = 4;
root_child_2_child_0.effects = [];
// Text Properties
root_child_2_child_0.characters = `Filters`;
root_child_2_child_0.fontSize = 20;
root_child_2_child_0.textAlignHorizontal = "LEFT";
root_child_2_child_0.textAlignVertical = "CENTER";
root_child_2_child_0.textAutoResize = "HEIGHT";
root_child_2_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_2_child_0.lineHeight = {"unit":"PIXELS","value":25};
if ("textCase" in root_child_2_child_0) root_child_2_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_2_child_0) root_child_2_child_0.textDecoration = "NONE";
root_child_2_child_0.paragraphSpacing = 0;
root_child_2_child_0.paragraphIndent = 0;
await this.setFont(root_child_2_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_2_child_0, 0, 7, {"family":"Open Sans","style":"SemiBold"});
root_child_2_child_0.setRangeFills(0, 7, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_2_child_0.setRangeFontSize(0, 7, 20);
root_child_2.appendChild(root_child_2_child_0);
// Child Layout Props
root_child_2_child_0.layoutAlign = "INHERIT";
root_child_2_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_2_child_0, {"width":251,"height":25,"relativeTransform":[[1,0,0],[0,1,7.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1695
const root_child_2_child_1 = figma.createFrame();
root_child_2_child_1.name = "Frame 1695";
root_child_2_child_1.visible = true;
root_child_2_child_1.opacity = 1;
root_child_2_child_1.locked = false;
if ("blendMode" in root_child_2_child_1) root_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1) root_child_2_child_1.isMask = false;
if ("maskType" in root_child_2_child_1) root_child_2_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1) root_child_2_child_1.clipsContent = false;
if ("layoutMode" in root_child_2_child_1) {
    root_child_2_child_1.layoutMode = "HORIZONTAL";
    root_child_2_child_1.primaryAxisSizingMode = "AUTO";
    root_child_2_child_1.counterAxisSizingMode = "AUTO";
    root_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_2_child_1.counterAxisAlignItems = "MIN";
    root_child_2_child_1.itemSpacing = 8;
    root_child_2_child_1.paddingTop = 8;
    root_child_2_child_1.paddingRight = 8;
    root_child_2_child_1.paddingBottom = 8;
    root_child_2_child_1.paddingLeft = 8;
    root_child_2_child_1.itemReverseZIndex = false;
    root_child_2_child_1.strokesIncludedInLayout = false;
}
root_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"boundVariables":{}}]);
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
if ("cornerRadius" in root_child_2_child_1) root_child_2_child_1.cornerRadius = 100;

// Start Child: Actions / Search
const root_child_2_child_1_child_0 = figma.createFrame();
root_child_2_child_1_child_0.name = "Actions / Search";
root_child_2_child_1_child_0.visible = true;
root_child_2_child_1_child_0.opacity = 1;
root_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_2_child_1_child_0) root_child_2_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_2_child_1_child_0) {
    root_child_2_child_1_child_0.layoutMode = "NONE";
}
root_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
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

// Start Child: Shape

// Boolean Child: Oval

// Boolean Child: Path
const root_child_2_child_1_child_0_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_4);
root_child_2_child_1_child_0_child_0_child_0_child_0_svgContainer.resize(16, 16);
const root_child_2_child_1_child_0_child_0_child_0_child_0 = figma.flatten([root_child_2_child_1_child_0_child_0_child_0_child_0_svgContainer]);
root_child_2_child_1_child_0_child_0_child_0_child_0.name = "Path";
root_child_2_child_1_child_0_child_0_child_0_child_0.visible = true;
root_child_2_child_1_child_0_child_0_child_0_child_0.opacity = 1;
root_child_2_child_1_child_0_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_0_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_0_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0_child_0.maskType = "ALPHA";
root_child_2_child_1_child_0_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_0_child_0_child_0.strokeWeight = 0;
root_child_2_child_1_child_0_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_2_child_1_child_0_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_2_child_1_child_0_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_0_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0_child_0.cornerRadius = 0;
root_child_2_child_1_child_0_child_0_child_0_child_0.vectorPaths = [{"windingRule":"NONZERO","data":"M 8 16 C 12.418278217315674 16 16 12.418278217315674 16 8 C 16 3.581721782684326 12.418278217315674 0 8 0 C 3.581721782684326 0 0 3.581721782684326 0 8 C 0 12.418278217315674 3.581721782684326 16 8 16 Z"}];
applySizeAndTransform(root_child_2_child_1_child_0_child_0_child_0_child_0, {"width":16,"height":16,"relativeTransform":[[1,0,3],[0,1,3]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_0_child_0_child_0_child_0.x = 3;
root_child_2_child_1_child_0_child_0_child_0_child_0.y = 3;

// Boolean Child: Path
const root_child_2_child_1_child_0_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_5);
root_child_2_child_1_child_0_child_0_child_0_child_1_svgContainer.resize(12, 12);
const root_child_2_child_1_child_0_child_0_child_0_child_1 = figma.flatten([root_child_2_child_1_child_0_child_0_child_0_child_1_svgContainer]);
root_child_2_child_1_child_0_child_0_child_0_child_1.name = "Path";
root_child_2_child_1_child_0_child_0_child_0_child_1.visible = true;
root_child_2_child_1_child_0_child_0_child_0_child_1.opacity = 1;
root_child_2_child_1_child_0_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_2_child_1_child_0_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_2_child_1_child_0_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_0_child_1.maskType = "ALPHA";
root_child_2_child_1_child_0_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_0_child_0_child_1.strokeWeight = 0;
root_child_2_child_1_child_0_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_2_child_1_child_0_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_2_child_1_child_0_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_0_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_0_child_1.cornerRadius = 0;
root_child_2_child_1_child_0_child_0_child_0_child_1.vectorPaths = [{"windingRule":"NONZERO","data":"M 6 12 C 2.686291456222534 12 0 9.313708543777466 0 6 C 0 2.686291456222534 2.686291456222534 0 6 0 C 9.313708543777466 0 12 2.686291456222534 12 6 C 12 9.313708543777466 9.313708543777466 12 6 12 Z"}];
applySizeAndTransform(root_child_2_child_1_child_0_child_0_child_0_child_1, {"width":12,"height":12,"relativeTransform":[[1,0,5],[0,1,5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_0_child_0_child_0_child_1.x = 5;
root_child_2_child_1_child_0_child_0_child_0_child_1.y = 5;
const root_child_2_child_1_child_0_child_0_child_0 = figma.exclude([root_child_2_child_1_child_0_child_0_child_0_child_0, root_child_2_child_1_child_0_child_0_child_0_child_1], figma.currentPage);
root_child_2_child_1_child_0_child_0_child_0.name = "Oval";
root_child_2_child_1_child_0_child_0_child_0.visible = true;
root_child_2_child_1_child_0_child_0_child_0.opacity = 1;
root_child_2_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_2_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_0_child_0.strokeWeight = 0;
root_child_2_child_1_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_2_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_0_child_0_child_0) root_child_2_child_1_child_0_child_0_child_0.cornerRadius = 0;
applySizeAndTransform(root_child_2_child_1_child_0_child_0_child_0, {"width":16,"height":16,"relativeTransform":[[1,0,3],[0,1,3]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_0_child_0_child_0.x = 3;
root_child_2_child_1_child_0_child_0_child_0.y = 3;

// Boolean Child: Path
const root_child_2_child_1_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_6);
root_child_2_child_1_child_0_child_0_child_1_svgContainer.resize(6.349999904632568, 6.349999904632568);
const root_child_2_child_1_child_0_child_0_child_1 = figma.flatten([root_child_2_child_1_child_0_child_0_child_1_svgContainer]);
root_child_2_child_1_child_0_child_0_child_1.name = "Path";
root_child_2_child_1_child_0_child_0_child_1.visible = true;
root_child_2_child_1_child_0_child_0_child_1.opacity = 1;
root_child_2_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_2_child_1_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_2_child_1_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_2_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_0_child_1.strokeWeight = 0;
root_child_2_child_1_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_2_child_1_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_2_child_1_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_0_child_0_child_1) root_child_2_child_1_child_0_child_0_child_1.cornerRadius = 0;
root_child_2_child_1_child_0_child_0_child_1.vectorPaths = [{"windingRule":"NONZERO","data":"M 6.057106971740723 4.642893314361572 L 1.7071068286895752 0.2928932309150696 C 1.3165825307369232 -0.0976310670375824 0.6834175288677216 -0.0976310670375824 0.2928932309150696 0.2928932309150696 C -0.0976310670375824 0.6834175288677216 -0.0976310670375824 1.3165825307369232 0.2928932309150696 1.7071068286895752 L 4.642893314361572 6.057106971740723 C 5.033417612314224 6.447631269693375 5.666582673788071 6.447631269693375 6.057106971740723 6.057106971740723 C 6.447631269693375 5.666582673788071 6.447631269693375 5.033417612314224 6.057106971740723 4.642893314361572 Z"}];
applySizeAndTransform(root_child_2_child_1_child_0_child_0_child_1, {"width":6.349999904632568,"height":6.349999904632568,"relativeTransform":[[1,0,15.6484375],[0,1,15.650390625]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_0_child_0_child_1.x = 15.6484375;
root_child_2_child_1_child_0_child_0_child_1.y = 15.650390625;
const root_child_2_child_1_child_0_child_0 = figma.union([root_child_2_child_1_child_0_child_0_child_0, root_child_2_child_1_child_0_child_0_child_1], figma.currentPage);
root_child_2_child_1_child_0_child_0.name = "Shape";
root_child_2_child_1_child_0_child_0.visible = true;
root_child_2_child_1_child_0_child_0.opacity = 1;
root_child_2_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.maskType = "ALPHA";
root_child_2_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_2_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_2_child_1_child_0_child_0.strokeWeight = 0;
root_child_2_child_1_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_2_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_2_child_1_child_0_child_0) root_child_2_child_1_child_0_child_0.cornerRadius = 0;
root_child_2_child_1_child_0.appendChild(root_child_2_child_1_child_0_child_0);
applySizeAndTransform(root_child_2_child_1_child_0_child_0, {"width":18.997970581054688,"height":18.999923706054688,"relativeTransform":[[1,0,3],[0,1,3]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_2_child_1_child_0_child_0.x = 3;
root_child_2_child_1_child_0_child_0.y = 3;
root_child_2_child_1.appendChild(root_child_2_child_1_child_0);
// Child Layout Props
root_child_2_child_1_child_0.layoutAlign = "INHERIT";
root_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1_child_0, {"width":24,"height":24,"relativeTransform":[[1,0,8],[0,1,8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_2.appendChild(root_child_2_child_1);
// Child Layout Props
root_child_2_child_1.layoutAlign = "INHERIT";
root_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_2_child_1, {"width":40,"height":40,"relativeTransform":[[1,0,267],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_2);
// Child Layout Props
root_child_2.layoutAlign = "STRETCH";
root_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_2, {"width":307,"height":40,"relativeTransform":[[1,0,16],[0,1,57]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Text Field
const root_child_3 = figma.createFrame();
root_child_3.name = "Text Field";
root_child_3.visible = true;
root_child_3.opacity = 1;
root_child_3.locked = false;
if ("blendMode" in root_child_3) root_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3) root_child_3.isMask = false;
if ("maskType" in root_child_3) root_child_3.maskType = "ALPHA";
if ("clipsContent" in root_child_3) root_child_3.clipsContent = false;
if ("layoutMode" in root_child_3) {
    root_child_3.layoutMode = "VERTICAL";
    root_child_3.primaryAxisSizingMode = "FIXED";
    root_child_3.counterAxisSizingMode = "AUTO";
    root_child_3.primaryAxisAlignItems = "CENTER";
    root_child_3.counterAxisAlignItems = "MIN";
    root_child_3.itemSpacing = 8;
    root_child_3.paddingTop = 0;
    root_child_3.paddingRight = 0;
    root_child_3.paddingBottom = 0;
    root_child_3.paddingLeft = 0;
    root_child_3.itemReverseZIndex = false;
    root_child_3.strokesIncludedInLayout = false;
}
root_child_3.fills = await this.hydratePaints([]);
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
root_child_3.effects = [];
if ("cornerRadius" in root_child_3) root_child_3.cornerRadius = 0;

// Start Child: Compact
const root_child_3_child_0 = figma.createFrame();
root_child_3_child_0.name = "Compact";
root_child_3_child_0.visible = true;
root_child_3_child_0.opacity = 1;
root_child_3_child_0.locked = false;
if ("blendMode" in root_child_3_child_0) root_child_3_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_0) root_child_3_child_0.isMask = false;
if ("maskType" in root_child_3_child_0) root_child_3_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_0) root_child_3_child_0.clipsContent = false;
if ("layoutMode" in root_child_3_child_0) {
    root_child_3_child_0.layoutMode = "HORIZONTAL";
    root_child_3_child_0.primaryAxisSizingMode = "FIXED";
    root_child_3_child_0.counterAxisSizingMode = "AUTO";
    root_child_3_child_0.primaryAxisAlignItems = "MIN";
    root_child_3_child_0.counterAxisAlignItems = "CENTER";
    root_child_3_child_0.itemSpacing = 12;
    root_child_3_child_0.paddingTop = 8;
    root_child_3_child_0.paddingRight = 12;
    root_child_3_child_0.paddingBottom = 8;
    root_child_3_child_0.paddingLeft = 12;
    root_child_3_child_0.itemReverseZIndex = false;
    root_child_3_child_0.strokesIncludedInLayout = false;
}
root_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_3_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7019608020782471,"g":0.7529411911964417,"b":0.772549033164978},"boundVariables":{}}]);
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
if ("cornerRadius" in root_child_3_child_0) root_child_3_child_0.cornerRadius = 4;

// Start Child: Inner
const root_child_3_child_0_child_0 = figma.createFrame();
root_child_3_child_0_child_0.name = "Inner";
root_child_3_child_0_child_0.visible = true;
root_child_3_child_0_child_0.opacity = 1;
root_child_3_child_0_child_0.locked = false;
if ("blendMode" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.isMask = false;
if ("maskType" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_3_child_0_child_0) {
    root_child_3_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_3_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_3_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_3_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_3_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_3_child_0_child_0.itemSpacing = 16;
    root_child_3_child_0_child_0.paddingTop = 0;
    root_child_3_child_0_child_0.paddingRight = 0;
    root_child_3_child_0_child_0.paddingBottom = 0;
    root_child_3_child_0_child_0.paddingLeft = 0;
    root_child_3_child_0_child_0.itemReverseZIndex = false;
    root_child_3_child_0_child_0.strokesIncludedInLayout = false;
}
root_child_3_child_0_child_0.fills = await this.hydratePaints([]);
root_child_3_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_0_child_0.strokeWeight = 1;
root_child_3_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.strokeLeftWeight = 1;
root_child_3_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_3_child_0_child_0) root_child_3_child_0_child_0.cornerRadius = 0;

// Start Child: Placeh❌older
const root_child_3_child_0_child_0_child_0 = figma.createText();
root_child_3_child_0_child_0_child_0.name = "Placeh❌older";
root_child_3_child_0_child_0_child_0.visible = true;
root_child_3_child_0_child_0_child_0.opacity = 1;
root_child_3_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_3_child_0_child_0_child_0) root_child_3_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_0_child_0_child_0) root_child_3_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_3_child_0_child_0_child_0) root_child_3_child_0_child_0_child_0.maskType = "ALPHA";
root_child_3_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3490196168422699,"g":0.43921568989753723,"b":0.48235294222831726},"boundVariables":{}}]);
root_child_3_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_0_child_0_child_0.strokeWeight = 1;
root_child_3_child_0_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_0_child_0_child_0) root_child_3_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_0_child_0_child_0) root_child_3_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_0_child_0_child_0) root_child_3_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_3_child_0_child_0_child_0.effects = [];
// Text Properties
root_child_3_child_0_child_0_child_0.characters = `Grow`;
root_child_3_child_0_child_0_child_0.fontSize = 14;
root_child_3_child_0_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_3_child_0_child_0_child_0.textAlignVertical = "TOP";
root_child_3_child_0_child_0_child_0.textAutoResize = "HEIGHT";
root_child_3_child_0_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_3_child_0_child_0_child_0.lineHeight = {"unit":"PIXELS","value":21};
if ("textCase" in root_child_3_child_0_child_0_child_0) root_child_3_child_0_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_0_child_0_child_0) root_child_3_child_0_child_0_child_0.textDecoration = "NONE";
root_child_3_child_0_child_0_child_0.paragraphSpacing = 0;
root_child_3_child_0_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_3_child_0_child_0_child_0, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_3_child_0_child_0_child_0, 0, 4, {"family":"Open Sans","style":"Regular"});
root_child_3_child_0_child_0_child_0.setRangeFills(0, 4, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3490196168422699,"g":0.43921568989753723,"b":0.48235294222831726},"boundVariables":{}}]);
root_child_3_child_0_child_0_child_0.setRangeFontSize(0, 4, 14);
root_child_3_child_0_child_0.appendChild(root_child_3_child_0_child_0_child_0);
// Child Layout Props
root_child_3_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_3_child_0_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_3_child_0_child_0_child_0, {"width":232,"height":21,"relativeTransform":[[1,0,0],[0,1,1.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Icon
const root_child_3_child_0_child_0_child_1 = figma.createFrame();
root_child_3_child_0_child_0_child_1.name = "Icon";
root_child_3_child_0_child_0_child_1.visible = true;
root_child_3_child_0_child_0_child_1.opacity = 0;
root_child_3_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.clipsContent = false;
if ("layoutMode" in root_child_3_child_0_child_0_child_1) {
    root_child_3_child_0_child_0_child_1.layoutMode = "NONE";
}
root_child_3_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_3_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_0_child_0_child_1.strokeWeight = 1;
root_child_3_child_0_child_0_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.strokeLeftWeight = 1;
root_child_3_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_3_child_0_child_0_child_1) root_child_3_child_0_child_0_child_1.cornerRadius = 0;

// Start Child: Shape
const root_child_3_child_0_child_0_child_1_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Shape_7);
root_child_3_child_0_child_0_child_1_child_0_svgContainer.resize(6, 10);
const root_child_3_child_0_child_0_child_1_child_0 = figma.flatten([root_child_3_child_0_child_0_child_1_child_0_svgContainer]);
root_child_3_child_0_child_0_child_1_child_0.name = "Shape";
root_child_3_child_0_child_0_child_1_child_0.visible = true;
root_child_3_child_0_child_0_child_1_child_0.opacity = 1;
root_child_3_child_0_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_3_child_0_child_0_child_1_child_0) root_child_3_child_0_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_0_child_0_child_1_child_0) root_child_3_child_0_child_0_child_1_child_0.isMask = false;
if ("maskType" in root_child_3_child_0_child_0_child_1_child_0) root_child_3_child_0_child_0_child_1_child_0.maskType = "ALPHA";
root_child_3_child_0_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_3_child_0_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_3_child_0_child_0_child_1_child_0.strokeWeight = 0;
root_child_3_child_0_child_0_child_1_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_3_child_0_child_0_child_1_child_0) root_child_3_child_0_child_0_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_0_child_0_child_1_child_0) root_child_3_child_0_child_0_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_0_child_0_child_1_child_0) root_child_3_child_0_child_0_child_1_child_0.strokeMiterLimit = 4;
root_child_3_child_0_child_0_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_3_child_0_child_0_child_1_child_0) root_child_3_child_0_child_0_child_1_child_0.cornerRadius = 0;
root_child_3_child_0_child_0_child_1_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 5.161276340484619 L 6 0 L 6 10 L 0 5.161276340484619 Z"}];
root_child_3_child_0_child_0_child_1.appendChild(root_child_3_child_0_child_0_child_1_child_0);
applySizeAndTransform(root_child_3_child_0_child_0_child_1_child_0, {"width":6,"height":10,"relativeTransform":[[-1.8369701465288538e-16,1,7],[-1,-1.8369701465288538e-16,16]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_3_child_0_child_0_child_1_child_0.x = 7;
root_child_3_child_0_child_0_child_1_child_0.y = 16;
root_child_3_child_0_child_0.appendChild(root_child_3_child_0_child_0_child_1);
// Child Layout Props
root_child_3_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_3_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_0_child_0_child_1, {"width":24,"height":24,"relativeTransform":[[1,0,248],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3_child_0.appendChild(root_child_3_child_0_child_0);
// Child Layout Props
root_child_3_child_0_child_0.layoutAlign = "INHERIT";
root_child_3_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_3_child_0_child_0, {"width":272,"height":24,"relativeTransform":[[1,0,12],[0,1,8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_3.appendChild(root_child_3_child_0);
// Child Layout Props
root_child_3_child_0.layoutAlign = "STRETCH";
root_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_0, {"width":296,"height":40,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Helper
const root_child_3_child_1 = figma.createText();
root_child_3_child_1.name = "Helper";
root_child_3_child_1.visible = true;
root_child_3_child_1.opacity = 1;
root_child_3_child_1.locked = false;
if ("blendMode" in root_child_3_child_1) root_child_3_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_3_child_1) root_child_3_child_1.isMask = false;
if ("maskType" in root_child_3_child_1) root_child_3_child_1.maskType = "ALPHA";
root_child_3_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.4000000059604645,"g":0.4000000059604645,"b":0.4000000059604645},"boundVariables":{}}]);
root_child_3_child_1.strokes = await this.hydratePaints([]);
root_child_3_child_1.strokeWeight = 1;
root_child_3_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_3_child_1) root_child_3_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_3_child_1) root_child_3_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_3_child_1) root_child_3_child_1.strokeMiterLimit = 4;
root_child_3_child_1.effects = [];
// Text Properties
root_child_3_child_1.characters = `1 result`;
root_child_3_child_1.fontSize = 14;
root_child_3_child_1.textAlignHorizontal = "LEFT";
root_child_3_child_1.textAlignVertical = "TOP";
root_child_3_child_1.textAutoResize = "HEIGHT";
root_child_3_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_3_child_1.lineHeight = {"unit":"PIXELS","value":21};
if ("textCase" in root_child_3_child_1) root_child_3_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_3_child_1) root_child_3_child_1.textDecoration = "NONE";
root_child_3_child_1.paragraphSpacing = 0;
root_child_3_child_1.paragraphIndent = 0;
await this.setFont(root_child_3_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_3_child_1, 0, 8, {"family":"Open Sans","style":"Regular"});
root_child_3_child_1.setRangeFills(0, 8, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.4000000059604645,"g":0.4000000059604645,"b":0.4000000059604645},"boundVariables":{}}]);
root_child_3_child_1.setRangeFontSize(0, 8, 14);
root_child_3.appendChild(root_child_3_child_1);
// Child Layout Props
root_child_3_child_1.layoutAlign = "INHERIT";
root_child_3_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_3_child_1, {"width":296,"height":21,"relativeTransform":[[1,0,0],[0,1,48]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_3);
// Child Layout Props
root_child_3.layoutAlign = "INHERIT";
root_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_3, {"width":296,"height":69,"relativeTransform":[[1,0,16],[0,1,113]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1712
const root_child_4 = figma.createFrame();
root_child_4.name = "Frame 1712";
root_child_4.visible = true;
root_child_4.opacity = 1;
root_child_4.locked = false;
if ("blendMode" in root_child_4) root_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_4) root_child_4.isMask = false;
if ("maskType" in root_child_4) root_child_4.maskType = "ALPHA";
if ("clipsContent" in root_child_4) root_child_4.clipsContent = false;
if ("layoutMode" in root_child_4) {
    root_child_4.layoutMode = "HORIZONTAL";
    root_child_4.primaryAxisSizingMode = "FIXED";
    root_child_4.counterAxisSizingMode = "FIXED";
    root_child_4.primaryAxisAlignItems = "MIN";
    root_child_4.counterAxisAlignItems = "CENTER";
    root_child_4.itemSpacing = 4;
    root_child_4.paddingTop = 0;
    root_child_4.paddingRight = 0;
    root_child_4.paddingBottom = 0;
    root_child_4.paddingLeft = 0;
    root_child_4.itemReverseZIndex = false;
    root_child_4.strokesIncludedInLayout = false;
}
root_child_4.fills = await this.hydratePaints([]);
root_child_4.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}]);
root_child_4.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_4) root_child_4.strokeCap = "NONE";
if ("strokeJoin" in root_child_4) root_child_4.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_4) root_child_4.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_4) root_child_4.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_4) root_child_4.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_4) root_child_4.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_4) root_child_4.strokeLeftWeight = 0;
root_child_4.effects = [];
if ("cornerRadius" in root_child_4) root_child_4.cornerRadius = 0;

// Start Child: Text
const root_child_4_child_0 = figma.createText();
root_child_4_child_0.name = "Text";
root_child_4_child_0.visible = true;
root_child_4_child_0.opacity = 1;
root_child_4_child_0.locked = false;
if ("blendMode" in root_child_4_child_0) root_child_4_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_4_child_0) root_child_4_child_0.isMask = false;
if ("maskType" in root_child_4_child_0) root_child_4_child_0.maskType = "ALPHA";
root_child_4_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_4_child_0.strokes = await this.hydratePaints([]);
root_child_4_child_0.strokeWeight = 1;
root_child_4_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_4_child_0) root_child_4_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_4_child_0) root_child_4_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_4_child_0) root_child_4_child_0.strokeMiterLimit = 4;
root_child_4_child_0.effects = [];
// Text Properties
root_child_4_child_0.characters = `SUBJECT`;
root_child_4_child_0.fontSize = 16;
root_child_4_child_0.textAlignHorizontal = "LEFT";
root_child_4_child_0.textAlignVertical = "CENTER";
root_child_4_child_0.textAutoResize = "HEIGHT";
root_child_4_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_4_child_0.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_4_child_0) root_child_4_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_4_child_0) root_child_4_child_0.textDecoration = "NONE";
root_child_4_child_0.paragraphSpacing = 0;
root_child_4_child_0.paragraphIndent = 0;
await this.setFont(root_child_4_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_4_child_0, 0, 7, {"family":"Open Sans","style":"SemiBold"});
root_child_4_child_0.setRangeFills(0, 7, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_4_child_0.setRangeFontSize(0, 7, 16);
root_child_4.appendChild(root_child_4_child_0);
// Child Layout Props
root_child_4_child_0.layoutAlign = "INHERIT";
root_child_4_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_4_child_0, {"width":291,"height":24,"relativeTransform":[[1,0,0],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Actions / Add / Small
const root_child_4_child_1 = figma.createFrame();
root_child_4_child_1.name = "Actions / Add / Small";
root_child_4_child_1.visible = true;
root_child_4_child_1.opacity = 1;
root_child_4_child_1.locked = false;
if ("blendMode" in root_child_4_child_1) root_child_4_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_4_child_1) root_child_4_child_1.isMask = false;
if ("maskType" in root_child_4_child_1) root_child_4_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_4_child_1) root_child_4_child_1.clipsContent = true;
if ("layoutMode" in root_child_4_child_1) {
    root_child_4_child_1.layoutMode = "NONE";
}
root_child_4_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_4_child_1.strokes = await this.hydratePaints([]);
root_child_4_child_1.strokeWeight = 1;
root_child_4_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_4_child_1) root_child_4_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_4_child_1) root_child_4_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_4_child_1) root_child_4_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_4_child_1) root_child_4_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_4_child_1) root_child_4_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_4_child_1) root_child_4_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_4_child_1) root_child_4_child_1.strokeLeftWeight = 1;
root_child_4_child_1.effects = [];
if ("cornerRadius" in root_child_4_child_1) root_child_4_child_1.cornerRadius = 0;

// Start Child: Union
const root_child_4_child_1_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_assets_icon_Union_I1119_8700_5250_18144_svg_8x8);
root_child_4_child_1_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_4_child_1_child_0 = figma.flatten([root_child_4_child_1_child_0_svgContainer]);
root_child_4_child_1_child_0.name = "Union";
root_child_4_child_1_child_0.visible = true;
root_child_4_child_1_child_0.opacity = 1;
root_child_4_child_1_child_0.locked = false;
if ("blendMode" in root_child_4_child_1_child_0) root_child_4_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_4_child_1_child_0) root_child_4_child_1_child_0.isMask = false;
if ("maskType" in root_child_4_child_1_child_0) root_child_4_child_1_child_0.maskType = "ALPHA";
root_child_4_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_4_child_1_child_0.strokeWeight = 0;
root_child_4_child_1_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_4_child_1_child_0) root_child_4_child_1_child_0.strokeCap = "ROUND";
if ("strokeJoin" in root_child_4_child_1_child_0) root_child_4_child_1_child_0.strokeJoin = "ROUND";
if ("strokeMiterLimit" in root_child_4_child_1_child_0) root_child_4_child_1_child_0.strokeMiterLimit = 4;
root_child_4_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_4_child_1_child_0) root_child_4_child_1_child_0.cornerRadius = 0;
root_child_4_child_1.appendChild(root_child_4_child_1_child_0);
applySizeAndTransform(root_child_4_child_1_child_0, {"width":8,"height":8,"relativeTransform":[[1,0,2],[0,1,2]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_4_child_1_child_0.x = 2;
root_child_4_child_1_child_0.y = 2;
root_child_4.appendChild(root_child_4_child_1);
// Child Layout Props
root_child_4_child_1.layoutAlign = "INHERIT";
root_child_4_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_4_child_1, {"width":12,"height":12,"relativeTransform":[[1,0,295],[0,1,10]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_4);
// Child Layout Props
root_child_4.layoutAlign = "STRETCH";
root_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_4, {"width":307,"height":32,"relativeTransform":[[1,0,16],[0,1,198]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1711
const root_child_5 = figma.createFrame();
root_child_5.name = "Frame 1711";
root_child_5.visible = true;
root_child_5.opacity = 1;
root_child_5.locked = false;
if ("blendMode" in root_child_5) root_child_5.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5) root_child_5.isMask = false;
if ("maskType" in root_child_5) root_child_5.maskType = "ALPHA";
if ("clipsContent" in root_child_5) root_child_5.clipsContent = false;
if ("layoutMode" in root_child_5) {
    root_child_5.layoutMode = "VERTICAL";
    root_child_5.primaryAxisSizingMode = "FIXED";
    root_child_5.counterAxisSizingMode = "AUTO";
    root_child_5.primaryAxisAlignItems = "MIN";
    root_child_5.counterAxisAlignItems = "MIN";
    root_child_5.itemSpacing = 12;
    root_child_5.paddingTop = 0;
    root_child_5.paddingRight = 0;
    root_child_5.paddingBottom = 0;
    root_child_5.paddingLeft = 0;
    root_child_5.itemReverseZIndex = false;
    root_child_5.strokesIncludedInLayout = false;
}
root_child_5.fills = await this.hydratePaints([]);
root_child_5.strokes = await this.hydratePaints([]);
root_child_5.strokeWeight = 1;
root_child_5.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5) root_child_5.strokeCap = "NONE";
if ("strokeJoin" in root_child_5) root_child_5.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5) root_child_5.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5) root_child_5.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5) root_child_5.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5) root_child_5.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5) root_child_5.strokeLeftWeight = 1;
root_child_5.effects = [];
if ("cornerRadius" in root_child_5) root_child_5.cornerRadius = 8;

// Start Child: Frame 1704
const root_child_5_child_0 = figma.createFrame();
root_child_5_child_0.name = "Frame 1704";
root_child_5_child_0.visible = true;
root_child_5_child_0.opacity = 1;
root_child_5_child_0.locked = false;
if ("blendMode" in root_child_5_child_0) root_child_5_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_0) root_child_5_child_0.isMask = false;
if ("maskType" in root_child_5_child_0) root_child_5_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_0) root_child_5_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_0) {
    root_child_5_child_0.layoutMode = "HORIZONTAL";
    root_child_5_child_0.primaryAxisSizingMode = "FIXED";
    root_child_5_child_0.counterAxisSizingMode = "FIXED";
    root_child_5_child_0.primaryAxisAlignItems = "MIN";
    root_child_5_child_0.counterAxisAlignItems = "CENTER";
    root_child_5_child_0.itemSpacing = 4;
    root_child_5_child_0.paddingTop = 0;
    root_child_5_child_0.paddingRight = 0;
    root_child_5_child_0.paddingBottom = 0;
    root_child_5_child_0.paddingLeft = 0;
    root_child_5_child_0.itemReverseZIndex = false;
    root_child_5_child_0.strokesIncludedInLayout = false;
}
root_child_5_child_0.fills = await this.hydratePaints([]);
root_child_5_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}]);
root_child_5_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_0) root_child_5_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_0) root_child_5_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_0) root_child_5_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_0) root_child_5_child_0.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_0) root_child_5_child_0.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_0) root_child_5_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_0) root_child_5_child_0.strokeLeftWeight = 0;
root_child_5_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_0) root_child_5_child_0.cornerRadius = 0;

// Start Child: Filter 6
const root_child_5_child_0_child_0 = figma.createText();
root_child_5_child_0_child_0.name = "Filter 6";
root_child_5_child_0_child_0.visible = true;
root_child_5_child_0_child_0.opacity = 1;
root_child_5_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_0_child_0) root_child_5_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_0_child_0) root_child_5_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_0_child_0) root_child_5_child_0_child_0.maskType = "ALPHA";
root_child_5_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.6352941393852234,"b":0.5882353186607361},"boundVariables":{}}]);
root_child_5_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_0_child_0.strokeWeight = 1;
root_child_5_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_0_child_0) root_child_5_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_0_child_0) root_child_5_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_0_child_0) root_child_5_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_0_child_0.effects = [];
// Text Properties
root_child_5_child_0_child_0.characters = `UEFA INITIATIVE`;
root_child_5_child_0_child_0.fontSize = 16;
root_child_5_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_5_child_0_child_0.textAlignVertical = "CENTER";
root_child_5_child_0_child_0.textAutoResize = "HEIGHT";
root_child_5_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_0_child_0.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_0_child_0) root_child_5_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_0_child_0) root_child_5_child_0_child_0.textDecoration = "NONE";
root_child_5_child_0_child_0.paragraphSpacing = 0;
root_child_5_child_0_child_0.paragraphIndent = 0;
await this.setFont(root_child_5_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_5_child_0_child_0, 0, 15, {"family":"Open Sans","style":"SemiBold"});
root_child_5_child_0_child_0.setRangeFills(0, 15, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.6352941393852234,"b":0.5882353186607361},"boundVariables":{}}]);
root_child_5_child_0_child_0.setRangeFontSize(0, 15, 16);
root_child_5_child_0.appendChild(root_child_5_child_0_child_0);
// Child Layout Props
root_child_5_child_0_child_0.layoutAlign = "INHERIT";
root_child_5_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_0_child_0, {"width":291,"height":24,"relativeTransform":[[1,0,0],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Actions / Minus / Small
const root_child_5_child_0_child_1 = figma.createFrame();
root_child_5_child_0_child_1.name = "Actions / Minus / Small";
root_child_5_child_0_child_1.visible = true;
root_child_5_child_0_child_1.opacity = 1;
root_child_5_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.clipsContent = true;
if ("layoutMode" in root_child_5_child_0_child_1) {
    root_child_5_child_0_child_1.layoutMode = "NONE";
}
root_child_5_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_0_child_1.strokeWeight = 1;
root_child_5_child_0_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.strokeLeftWeight = 1;
root_child_5_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_0_child_1) root_child_5_child_0_child_1.cornerRadius = 0;

// Start Child: Vector
const root_child_5_child_0_child_1_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_assets_icon_Vector_I1119_8704_1914_8670_svg_7x0);
root_child_5_child_0_child_1_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_5_child_0_child_1_child_0 = figma.flatten([root_child_5_child_0_child_1_child_0_svgContainer]);
root_child_5_child_0_child_1_child_0.name = "Vector";
root_child_5_child_0_child_1_child_0.visible = true;
root_child_5_child_0_child_1_child_0.opacity = 1;
root_child_5_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_5_child_0_child_1_child_0) root_child_5_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_0_child_1_child_0) root_child_5_child_0_child_1_child_0.isMask = false;
if ("maskType" in root_child_5_child_0_child_1_child_0) root_child_5_child_0_child_1_child_0.maskType = "ALPHA";
root_child_5_child_0_child_1_child_0.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.6352941393852234,"b":0.5882353186607361},"boundVariables":{}}]);
root_child_5_child_0_child_1_child_0.strokeWeight = 2;
root_child_5_child_0_child_1_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_0_child_1_child_0) root_child_5_child_0_child_1_child_0.strokeCap = "ROUND";
if ("strokeJoin" in root_child_5_child_0_child_1_child_0) root_child_5_child_0_child_1_child_0.strokeJoin = "ROUND";
if ("strokeMiterLimit" in root_child_5_child_0_child_1_child_0) root_child_5_child_0_child_1_child_0.strokeMiterLimit = 4;
root_child_5_child_0_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_0_child_1_child_0) root_child_5_child_0_child_1_child_0.cornerRadius = 0;
root_child_5_child_0_child_1.appendChild(root_child_5_child_0_child_1_child_0);
applySizeAndTransform(root_child_5_child_0_child_1_child_0, {"width":7,"height":0,"relativeTransform":[[1,0,2.5],[0,1,6]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_0_child_1_child_0.x = 2.5;
root_child_5_child_0_child_1_child_0.y = 6;
root_child_5_child_0.appendChild(root_child_5_child_0_child_1);
// Child Layout Props
root_child_5_child_0_child_1.layoutAlign = "INHERIT";
root_child_5_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_0_child_1, {"width":12,"height":12,"relativeTransform":[[1,0,295],[0,1,10]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_0);
// Child Layout Props
root_child_5_child_0.layoutAlign = "STRETCH";
root_child_5_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_0, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1705
const root_child_5_child_1 = figma.createFrame();
root_child_5_child_1.name = "Frame 1705";
root_child_5_child_1.visible = true;
root_child_5_child_1.opacity = 1;
root_child_5_child_1.locked = false;
if ("blendMode" in root_child_5_child_1) root_child_5_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_1) root_child_5_child_1.isMask = false;
if ("maskType" in root_child_5_child_1) root_child_5_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_1) root_child_5_child_1.clipsContent = false;
if ("layoutMode" in root_child_5_child_1) {
    root_child_5_child_1.layoutMode = "HORIZONTAL";
    root_child_5_child_1.primaryAxisSizingMode = "FIXED";
    root_child_5_child_1.counterAxisSizingMode = "FIXED";
    root_child_5_child_1.primaryAxisAlignItems = "MIN";
    root_child_5_child_1.counterAxisAlignItems = "CENTER";
    root_child_5_child_1.itemSpacing = 4;
    root_child_5_child_1.paddingTop = 0;
    root_child_5_child_1.paddingRight = 0;
    root_child_5_child_1.paddingBottom = 0;
    root_child_5_child_1.paddingLeft = 8;
    root_child_5_child_1.itemReverseZIndex = false;
    root_child_5_child_1.strokesIncludedInLayout = false;
}
root_child_5_child_1.fills = await this.hydratePaints([]);
root_child_5_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_1) root_child_5_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_1) root_child_5_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_1) root_child_5_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_1) root_child_5_child_1.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_1) root_child_5_child_1.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_1) root_child_5_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_1) root_child_5_child_1.strokeLeftWeight = 0;
root_child_5_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_1) root_child_5_child_1.cornerRadius = 0;

// Start Child: Checkbox
const root_child_5_child_1_child_0 = figma.createFrame();
root_child_5_child_1_child_0.name = "Checkbox";
root_child_5_child_1_child_0.visible = true;
root_child_5_child_1_child_0.opacity = 1;
root_child_5_child_1_child_0.locked = false;
if ("blendMode" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.isMask = false;
if ("maskType" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_1_child_0) {
    root_child_5_child_1_child_0.layoutMode = "NONE";
}
root_child_5_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_1_child_0.strokeWeight = 1;
root_child_5_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.strokeLeftWeight = 1;
root_child_5_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_1_child_0) root_child_5_child_1_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_5_child_1_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_10);
root_child_5_child_1_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_5_child_1_child_0_child_0_child_0 = figma.flatten([root_child_5_child_1_child_0_child_0_child_0_svgContainer]);
root_child_5_child_1_child_0_child_0_child_0.name = "Path";
root_child_5_child_1_child_0_child_0_child_0.visible = true;
root_child_5_child_1_child_0_child_0_child_0.opacity = 1;
root_child_5_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_1_child_0_child_0_child_0) root_child_5_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_1_child_0_child_0_child_0) root_child_5_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_1_child_0_child_0_child_0) root_child_5_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_5_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_1_child_0_child_0_child_0.strokeWeight = 0;
root_child_5_child_1_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_1_child_0_child_0_child_0) root_child_5_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_1_child_0_child_0_child_0) root_child_5_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_1_child_0_child_0_child_0) root_child_5_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_1_child_0_child_0_child_0) root_child_5_child_1_child_0_child_0_child_0.cornerRadius = 0;
root_child_5_child_1_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_5_child_1_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_1_child_0_child_0_child_0.x = 2.5;
root_child_5_child_1_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_5_child_1_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_11);
root_child_5_child_1_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_5_child_1_child_0_child_0_child_1 = figma.flatten([root_child_5_child_1_child_0_child_0_child_1_svgContainer]);
root_child_5_child_1_child_0_child_0_child_1.name = "Path";
root_child_5_child_1_child_0_child_0_child_1.visible = true;
root_child_5_child_1_child_0_child_0_child_1.opacity = 1;
root_child_5_child_1_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_1_child_0_child_0_child_1) root_child_5_child_1_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_1_child_0_child_0_child_1) root_child_5_child_1_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_1_child_0_child_0_child_1) root_child_5_child_1_child_0_child_0_child_1.maskType = "ALPHA";
root_child_5_child_1_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_1_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_1_child_0_child_0_child_1.strokeWeight = 0;
root_child_5_child_1_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_1_child_0_child_0_child_1) root_child_5_child_1_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_1_child_0_child_0_child_1) root_child_5_child_1_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_1_child_0_child_0_child_1) root_child_5_child_1_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_5_child_1_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_1_child_0_child_0_child_1) root_child_5_child_1_child_0_child_0_child_1.cornerRadius = 0;
root_child_5_child_1_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_5_child_1_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_1_child_0_child_0_child_1.x = 4.166666626930237;
root_child_5_child_1_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_5_child_1_child_0_child_0 = figma.exclude([root_child_5_child_1_child_0_child_0_child_0, root_child_5_child_1_child_0_child_0_child_1], figma.currentPage);
root_child_5_child_1_child_0_child_0.name = "Shape";
root_child_5_child_1_child_0_child_0.visible = true;
root_child_5_child_1_child_0_child_0.opacity = 1;
root_child_5_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_1_child_0_child_0) root_child_5_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_1_child_0_child_0) root_child_5_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_1_child_0_child_0) root_child_5_child_1_child_0_child_0.maskType = "ALPHA";
root_child_5_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_1_child_0_child_0.strokeWeight = 0;
root_child_5_child_1_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_1_child_0_child_0) root_child_5_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_1_child_0_child_0) root_child_5_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_1_child_0_child_0) root_child_5_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_1_child_0_child_0) root_child_5_child_1_child_0_child_0.cornerRadius = 0;
root_child_5_child_1_child_0.appendChild(root_child_5_child_1_child_0_child_0);
applySizeAndTransform(root_child_5_child_1_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_1_child_0_child_0.x = 2.5;
root_child_5_child_1_child_0_child_0.y = 2.5;
root_child_5_child_1.appendChild(root_child_5_child_1_child_0);
// Child Layout Props
root_child_5_child_1_child_0.layoutAlign = "INHERIT";
root_child_5_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_1_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_5_child_1_child_1 = figma.createText();
root_child_5_child_1_child_1.name = "Filter name";
root_child_5_child_1_child_1.visible = true;
root_child_5_child_1_child_1.opacity = 1;
root_child_5_child_1_child_1.locked = false;
if ("blendMode" in root_child_5_child_1_child_1) root_child_5_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_1_child_1) root_child_5_child_1_child_1.isMask = false;
if ("maskType" in root_child_5_child_1_child_1) root_child_5_child_1_child_1.maskType = "ALPHA";
root_child_5_child_1_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_1_child_1.strokeWeight = 1;
root_child_5_child_1_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_1_child_1) root_child_5_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_1_child_1) root_child_5_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_1_child_1) root_child_5_child_1_child_1.strokeMiterLimit = 4;
root_child_5_child_1_child_1.effects = [];
// Text Properties
root_child_5_child_1_child_1.characters = `UEFA Academy`;
root_child_5_child_1_child_1.fontSize = 16;
root_child_5_child_1_child_1.textAlignHorizontal = "LEFT";
root_child_5_child_1_child_1.textAlignVertical = "CENTER";
root_child_5_child_1_child_1.textAutoResize = "HEIGHT";
root_child_5_child_1_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_1_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_1_child_1) root_child_5_child_1_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_1_child_1) root_child_5_child_1_child_1.textDecoration = "NONE";
root_child_5_child_1_child_1.paragraphSpacing = 0;
root_child_5_child_1_child_1.paragraphIndent = 0;
await this.setFont(root_child_5_child_1_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_5_child_1_child_1, 0, 12, {"family":"Open Sans","style":"Regular"});
root_child_5_child_1_child_1.setRangeFills(0, 12, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_1_child_1.setRangeFontSize(0, 12, 16);
root_child_5_child_1.appendChild(root_child_5_child_1_child_1);
// Child Layout Props
root_child_5_child_1_child_1.layoutAlign = "INHERIT";
root_child_5_child_1_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_1_child_1, {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_1);
// Child Layout Props
root_child_5_child_1.layoutAlign = "STRETCH";
root_child_5_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_1, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,44]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1706
const root_child_5_child_2 = figma.createFrame();
root_child_5_child_2.name = "Frame 1706";
root_child_5_child_2.visible = true;
root_child_5_child_2.opacity = 1;
root_child_5_child_2.locked = false;
if ("blendMode" in root_child_5_child_2) root_child_5_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_2) root_child_5_child_2.isMask = false;
if ("maskType" in root_child_5_child_2) root_child_5_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_2) root_child_5_child_2.clipsContent = false;
if ("layoutMode" in root_child_5_child_2) {
    root_child_5_child_2.layoutMode = "HORIZONTAL";
    root_child_5_child_2.primaryAxisSizingMode = "FIXED";
    root_child_5_child_2.counterAxisSizingMode = "FIXED";
    root_child_5_child_2.primaryAxisAlignItems = "MIN";
    root_child_5_child_2.counterAxisAlignItems = "CENTER";
    root_child_5_child_2.itemSpacing = 4;
    root_child_5_child_2.paddingTop = 0;
    root_child_5_child_2.paddingRight = 0;
    root_child_5_child_2.paddingBottom = 0;
    root_child_5_child_2.paddingLeft = 8;
    root_child_5_child_2.itemReverseZIndex = false;
    root_child_5_child_2.strokesIncludedInLayout = false;
}
root_child_5_child_2.fills = await this.hydratePaints([]);
root_child_5_child_2.strokes = await this.hydratePaints([]);
root_child_5_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_2) root_child_5_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_2) root_child_5_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_2) root_child_5_child_2.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_2) root_child_5_child_2.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_2) root_child_5_child_2.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_2) root_child_5_child_2.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_2) root_child_5_child_2.strokeLeftWeight = 0;
root_child_5_child_2.effects = [];
if ("cornerRadius" in root_child_5_child_2) root_child_5_child_2.cornerRadius = 0;

// Start Child: Checkbox
const root_child_5_child_2_child_0 = figma.createFrame();
root_child_5_child_2_child_0.name = "Checkbox";
root_child_5_child_2_child_0.visible = true;
root_child_5_child_2_child_0.opacity = 1;
root_child_5_child_2_child_0.locked = false;
if ("blendMode" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.isMask = false;
if ("maskType" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_2_child_0) {
    root_child_5_child_2_child_0.layoutMode = "NONE";
}
root_child_5_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_2_child_0.strokeWeight = 1;
root_child_5_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.strokeLeftWeight = 1;
root_child_5_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_2_child_0) root_child_5_child_2_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_5_child_2_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_12);
root_child_5_child_2_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_5_child_2_child_0_child_0_child_0 = figma.flatten([root_child_5_child_2_child_0_child_0_child_0_svgContainer]);
root_child_5_child_2_child_0_child_0_child_0.name = "Path";
root_child_5_child_2_child_0_child_0_child_0.visible = true;
root_child_5_child_2_child_0_child_0_child_0.opacity = 1;
root_child_5_child_2_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_2_child_0_child_0_child_0) root_child_5_child_2_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_2_child_0_child_0_child_0) root_child_5_child_2_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_2_child_0_child_0_child_0) root_child_5_child_2_child_0_child_0_child_0.maskType = "ALPHA";
root_child_5_child_2_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_2_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_2_child_0_child_0_child_0.strokeWeight = 0;
root_child_5_child_2_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_2_child_0_child_0_child_0) root_child_5_child_2_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_2_child_0_child_0_child_0) root_child_5_child_2_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_2_child_0_child_0_child_0) root_child_5_child_2_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_2_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_2_child_0_child_0_child_0) root_child_5_child_2_child_0_child_0_child_0.cornerRadius = 0;
root_child_5_child_2_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_5_child_2_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_2_child_0_child_0_child_0.x = 2.5;
root_child_5_child_2_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_5_child_2_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_13);
root_child_5_child_2_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_5_child_2_child_0_child_0_child_1 = figma.flatten([root_child_5_child_2_child_0_child_0_child_1_svgContainer]);
root_child_5_child_2_child_0_child_0_child_1.name = "Path";
root_child_5_child_2_child_0_child_0_child_1.visible = true;
root_child_5_child_2_child_0_child_0_child_1.opacity = 1;
root_child_5_child_2_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_2_child_0_child_0_child_1) root_child_5_child_2_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_2_child_0_child_0_child_1) root_child_5_child_2_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_2_child_0_child_0_child_1) root_child_5_child_2_child_0_child_0_child_1.maskType = "ALPHA";
root_child_5_child_2_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_2_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_2_child_0_child_0_child_1.strokeWeight = 0;
root_child_5_child_2_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_2_child_0_child_0_child_1) root_child_5_child_2_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_2_child_0_child_0_child_1) root_child_5_child_2_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_2_child_0_child_0_child_1) root_child_5_child_2_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_5_child_2_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_2_child_0_child_0_child_1) root_child_5_child_2_child_0_child_0_child_1.cornerRadius = 0;
root_child_5_child_2_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_5_child_2_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_2_child_0_child_0_child_1.x = 4.166666626930237;
root_child_5_child_2_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_5_child_2_child_0_child_0 = figma.exclude([root_child_5_child_2_child_0_child_0_child_0, root_child_5_child_2_child_0_child_0_child_1], figma.currentPage);
root_child_5_child_2_child_0_child_0.name = "Shape";
root_child_5_child_2_child_0_child_0.visible = true;
root_child_5_child_2_child_0_child_0.opacity = 1;
root_child_5_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_2_child_0_child_0) root_child_5_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_2_child_0_child_0) root_child_5_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_2_child_0_child_0) root_child_5_child_2_child_0_child_0.maskType = "ALPHA";
root_child_5_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_2_child_0_child_0.strokeWeight = 0;
root_child_5_child_2_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_2_child_0_child_0) root_child_5_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_2_child_0_child_0) root_child_5_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_2_child_0_child_0) root_child_5_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_2_child_0_child_0) root_child_5_child_2_child_0_child_0.cornerRadius = 0;
root_child_5_child_2_child_0.appendChild(root_child_5_child_2_child_0_child_0);
applySizeAndTransform(root_child_5_child_2_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_2_child_0_child_0.x = 2.5;
root_child_5_child_2_child_0_child_0.y = 2.5;
root_child_5_child_2.appendChild(root_child_5_child_2_child_0);
// Child Layout Props
root_child_5_child_2_child_0.layoutAlign = "INHERIT";
root_child_5_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_2_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_5_child_2_child_1 = figma.createText();
root_child_5_child_2_child_1.name = "Filter name";
root_child_5_child_2_child_1.visible = true;
root_child_5_child_2_child_1.opacity = 1;
root_child_5_child_2_child_1.locked = false;
if ("blendMode" in root_child_5_child_2_child_1) root_child_5_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_2_child_1) root_child_5_child_2_child_1.isMask = false;
if ("maskType" in root_child_5_child_2_child_1) root_child_5_child_2_child_1.maskType = "ALPHA";
root_child_5_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_2_child_1.strokeWeight = 1;
root_child_5_child_2_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_2_child_1) root_child_5_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_2_child_1) root_child_5_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_2_child_1) root_child_5_child_2_child_1.strokeMiterLimit = 4;
root_child_5_child_2_child_1.effects = [];
// Text Properties
root_child_5_child_2_child_1.characters = `UEFA Assist`;
root_child_5_child_2_child_1.fontSize = 16;
root_child_5_child_2_child_1.textAlignHorizontal = "LEFT";
root_child_5_child_2_child_1.textAlignVertical = "CENTER";
root_child_5_child_2_child_1.textAutoResize = "HEIGHT";
root_child_5_child_2_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_2_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_2_child_1) root_child_5_child_2_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_2_child_1) root_child_5_child_2_child_1.textDecoration = "NONE";
root_child_5_child_2_child_1.paragraphSpacing = 0;
root_child_5_child_2_child_1.paragraphIndent = 0;
await this.setFont(root_child_5_child_2_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_5_child_2_child_1, 0, 11, {"family":"Open Sans","style":"Regular"});
root_child_5_child_2_child_1.setRangeFills(0, 11, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_2_child_1.setRangeFontSize(0, 11, 16);
root_child_5_child_2.appendChild(root_child_5_child_2_child_1);
// Child Layout Props
root_child_5_child_2_child_1.layoutAlign = "INHERIT";
root_child_5_child_2_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_2_child_1, {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_2);
// Child Layout Props
root_child_5_child_2.layoutAlign = "STRETCH";
root_child_5_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_2, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,88]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1707
const root_child_5_child_3 = figma.createFrame();
root_child_5_child_3.name = "Frame 1707";
root_child_5_child_3.visible = true;
root_child_5_child_3.opacity = 1;
root_child_5_child_3.locked = false;
if ("blendMode" in root_child_5_child_3) root_child_5_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_3) root_child_5_child_3.isMask = false;
if ("maskType" in root_child_5_child_3) root_child_5_child_3.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_3) root_child_5_child_3.clipsContent = false;
if ("layoutMode" in root_child_5_child_3) {
    root_child_5_child_3.layoutMode = "HORIZONTAL";
    root_child_5_child_3.primaryAxisSizingMode = "FIXED";
    root_child_5_child_3.counterAxisSizingMode = "FIXED";
    root_child_5_child_3.primaryAxisAlignItems = "MIN";
    root_child_5_child_3.counterAxisAlignItems = "CENTER";
    root_child_5_child_3.itemSpacing = 4;
    root_child_5_child_3.paddingTop = 0;
    root_child_5_child_3.paddingRight = 0;
    root_child_5_child_3.paddingBottom = 0;
    root_child_5_child_3.paddingLeft = 8;
    root_child_5_child_3.itemReverseZIndex = false;
    root_child_5_child_3.strokesIncludedInLayout = false;
}
root_child_5_child_3.fills = await this.hydratePaints([]);
root_child_5_child_3.strokes = await this.hydratePaints([]);
root_child_5_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_3) root_child_5_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_3) root_child_5_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_3) root_child_5_child_3.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_3) root_child_5_child_3.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_3) root_child_5_child_3.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_3) root_child_5_child_3.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_3) root_child_5_child_3.strokeLeftWeight = 0;
root_child_5_child_3.effects = [];
if ("cornerRadius" in root_child_5_child_3) root_child_5_child_3.cornerRadius = 0;

// Start Child: Checkbox
const root_child_5_child_3_child_0 = figma.createFrame();
root_child_5_child_3_child_0.name = "Checkbox";
root_child_5_child_3_child_0.visible = true;
root_child_5_child_3_child_0.opacity = 1;
root_child_5_child_3_child_0.locked = false;
if ("blendMode" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.isMask = false;
if ("maskType" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_3_child_0) {
    root_child_5_child_3_child_0.layoutMode = "NONE";
}
root_child_5_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_3_child_0.strokeWeight = 1;
root_child_5_child_3_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.strokeLeftWeight = 1;
root_child_5_child_3_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_3_child_0) root_child_5_child_3_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_5_child_3_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_14);
root_child_5_child_3_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_5_child_3_child_0_child_0_child_0 = figma.flatten([root_child_5_child_3_child_0_child_0_child_0_svgContainer]);
root_child_5_child_3_child_0_child_0_child_0.name = "Path";
root_child_5_child_3_child_0_child_0_child_0.visible = true;
root_child_5_child_3_child_0_child_0_child_0.opacity = 1;
root_child_5_child_3_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_3_child_0_child_0_child_0) root_child_5_child_3_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_3_child_0_child_0_child_0) root_child_5_child_3_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_3_child_0_child_0_child_0) root_child_5_child_3_child_0_child_0_child_0.maskType = "ALPHA";
root_child_5_child_3_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_3_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_3_child_0_child_0_child_0.strokeWeight = 0;
root_child_5_child_3_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_3_child_0_child_0_child_0) root_child_5_child_3_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_3_child_0_child_0_child_0) root_child_5_child_3_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_3_child_0_child_0_child_0) root_child_5_child_3_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_3_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_3_child_0_child_0_child_0) root_child_5_child_3_child_0_child_0_child_0.cornerRadius = 0;
root_child_5_child_3_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_5_child_3_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_3_child_0_child_0_child_0.x = 2.5;
root_child_5_child_3_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_5_child_3_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_15);
root_child_5_child_3_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_5_child_3_child_0_child_0_child_1 = figma.flatten([root_child_5_child_3_child_0_child_0_child_1_svgContainer]);
root_child_5_child_3_child_0_child_0_child_1.name = "Path";
root_child_5_child_3_child_0_child_0_child_1.visible = true;
root_child_5_child_3_child_0_child_0_child_1.opacity = 1;
root_child_5_child_3_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_3_child_0_child_0_child_1) root_child_5_child_3_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_3_child_0_child_0_child_1) root_child_5_child_3_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_3_child_0_child_0_child_1) root_child_5_child_3_child_0_child_0_child_1.maskType = "ALPHA";
root_child_5_child_3_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_3_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_3_child_0_child_0_child_1.strokeWeight = 0;
root_child_5_child_3_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_3_child_0_child_0_child_1) root_child_5_child_3_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_3_child_0_child_0_child_1) root_child_5_child_3_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_3_child_0_child_0_child_1) root_child_5_child_3_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_5_child_3_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_3_child_0_child_0_child_1) root_child_5_child_3_child_0_child_0_child_1.cornerRadius = 0;
root_child_5_child_3_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_5_child_3_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_3_child_0_child_0_child_1.x = 4.166666626930237;
root_child_5_child_3_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_5_child_3_child_0_child_0 = figma.exclude([root_child_5_child_3_child_0_child_0_child_0, root_child_5_child_3_child_0_child_0_child_1], figma.currentPage);
root_child_5_child_3_child_0_child_0.name = "Shape";
root_child_5_child_3_child_0_child_0.visible = true;
root_child_5_child_3_child_0_child_0.opacity = 1;
root_child_5_child_3_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_3_child_0_child_0) root_child_5_child_3_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_3_child_0_child_0) root_child_5_child_3_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_3_child_0_child_0) root_child_5_child_3_child_0_child_0.maskType = "ALPHA";
root_child_5_child_3_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_3_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_3_child_0_child_0.strokeWeight = 0;
root_child_5_child_3_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_3_child_0_child_0) root_child_5_child_3_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_3_child_0_child_0) root_child_5_child_3_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_3_child_0_child_0) root_child_5_child_3_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_3_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_3_child_0_child_0) root_child_5_child_3_child_0_child_0.cornerRadius = 0;
root_child_5_child_3_child_0.appendChild(root_child_5_child_3_child_0_child_0);
applySizeAndTransform(root_child_5_child_3_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_3_child_0_child_0.x = 2.5;
root_child_5_child_3_child_0_child_0.y = 2.5;
root_child_5_child_3.appendChild(root_child_5_child_3_child_0);
// Child Layout Props
root_child_5_child_3_child_0.layoutAlign = "INHERIT";
root_child_5_child_3_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_3_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_5_child_3_child_1 = figma.createText();
root_child_5_child_3_child_1.name = "Filter name";
root_child_5_child_3_child_1.visible = true;
root_child_5_child_3_child_1.opacity = 1;
root_child_5_child_3_child_1.locked = false;
if ("blendMode" in root_child_5_child_3_child_1) root_child_5_child_3_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_3_child_1) root_child_5_child_3_child_1.isMask = false;
if ("maskType" in root_child_5_child_3_child_1) root_child_5_child_3_child_1.maskType = "ALPHA";
root_child_5_child_3_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_3_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_3_child_1.strokeWeight = 1;
root_child_5_child_3_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_3_child_1) root_child_5_child_3_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_3_child_1) root_child_5_child_3_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_3_child_1) root_child_5_child_3_child_1.strokeMiterLimit = 4;
root_child_5_child_3_child_1.effects = [];
// Text Properties
root_child_5_child_3_child_1.characters = `UEFA Events`;
root_child_5_child_3_child_1.fontSize = 16;
root_child_5_child_3_child_1.textAlignHorizontal = "LEFT";
root_child_5_child_3_child_1.textAlignVertical = "CENTER";
root_child_5_child_3_child_1.textAutoResize = "HEIGHT";
root_child_5_child_3_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_3_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_3_child_1) root_child_5_child_3_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_3_child_1) root_child_5_child_3_child_1.textDecoration = "NONE";
root_child_5_child_3_child_1.paragraphSpacing = 0;
root_child_5_child_3_child_1.paragraphIndent = 0;
await this.setFont(root_child_5_child_3_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_5_child_3_child_1, 0, 11, {"family":"Open Sans","style":"Regular"});
root_child_5_child_3_child_1.setRangeFills(0, 11, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_3_child_1.setRangeFontSize(0, 11, 16);
root_child_5_child_3.appendChild(root_child_5_child_3_child_1);
// Child Layout Props
root_child_5_child_3_child_1.layoutAlign = "INHERIT";
root_child_5_child_3_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_3_child_1, {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_3);
// Child Layout Props
root_child_5_child_3.layoutAlign = "STRETCH";
root_child_5_child_3.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_3, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,132]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1708
const root_child_5_child_4 = figma.createFrame();
root_child_5_child_4.name = "Frame 1708";
root_child_5_child_4.visible = true;
root_child_5_child_4.opacity = 1;
root_child_5_child_4.locked = false;
if ("blendMode" in root_child_5_child_4) root_child_5_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_4) root_child_5_child_4.isMask = false;
if ("maskType" in root_child_5_child_4) root_child_5_child_4.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_4) root_child_5_child_4.clipsContent = false;
if ("layoutMode" in root_child_5_child_4) {
    root_child_5_child_4.layoutMode = "HORIZONTAL";
    root_child_5_child_4.primaryAxisSizingMode = "FIXED";
    root_child_5_child_4.counterAxisSizingMode = "FIXED";
    root_child_5_child_4.primaryAxisAlignItems = "MIN";
    root_child_5_child_4.counterAxisAlignItems = "CENTER";
    root_child_5_child_4.itemSpacing = 4;
    root_child_5_child_4.paddingTop = 0;
    root_child_5_child_4.paddingRight = 0;
    root_child_5_child_4.paddingBottom = 0;
    root_child_5_child_4.paddingLeft = 8;
    root_child_5_child_4.itemReverseZIndex = false;
    root_child_5_child_4.strokesIncludedInLayout = false;
}
root_child_5_child_4.fills = await this.hydratePaints([]);
root_child_5_child_4.strokes = await this.hydratePaints([]);
root_child_5_child_4.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_4) root_child_5_child_4.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_4) root_child_5_child_4.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_4) root_child_5_child_4.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_4) root_child_5_child_4.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_4) root_child_5_child_4.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_4) root_child_5_child_4.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_4) root_child_5_child_4.strokeLeftWeight = 0;
root_child_5_child_4.effects = [];
if ("cornerRadius" in root_child_5_child_4) root_child_5_child_4.cornerRadius = 0;

// Start Child: Checkbox
const root_child_5_child_4_child_0 = figma.createFrame();
root_child_5_child_4_child_0.name = "Checkbox";
root_child_5_child_4_child_0.visible = true;
root_child_5_child_4_child_0.opacity = 1;
root_child_5_child_4_child_0.locked = false;
if ("blendMode" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.isMask = false;
if ("maskType" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_4_child_0) {
    root_child_5_child_4_child_0.layoutMode = "NONE";
}
root_child_5_child_4_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_4_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_4_child_0.strokeWeight = 1;
root_child_5_child_4_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.strokeLeftWeight = 1;
root_child_5_child_4_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_4_child_0) root_child_5_child_4_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_5_child_4_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_16);
root_child_5_child_4_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_5_child_4_child_0_child_0_child_0 = figma.flatten([root_child_5_child_4_child_0_child_0_child_0_svgContainer]);
root_child_5_child_4_child_0_child_0_child_0.name = "Path";
root_child_5_child_4_child_0_child_0_child_0.visible = true;
root_child_5_child_4_child_0_child_0_child_0.opacity = 1;
root_child_5_child_4_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_4_child_0_child_0_child_0) root_child_5_child_4_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_4_child_0_child_0_child_0) root_child_5_child_4_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_4_child_0_child_0_child_0) root_child_5_child_4_child_0_child_0_child_0.maskType = "ALPHA";
root_child_5_child_4_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_4_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_4_child_0_child_0_child_0.strokeWeight = 0;
root_child_5_child_4_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_4_child_0_child_0_child_0) root_child_5_child_4_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_4_child_0_child_0_child_0) root_child_5_child_4_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_4_child_0_child_0_child_0) root_child_5_child_4_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_4_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_4_child_0_child_0_child_0) root_child_5_child_4_child_0_child_0_child_0.cornerRadius = 0;
root_child_5_child_4_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_5_child_4_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_4_child_0_child_0_child_0.x = 2.5;
root_child_5_child_4_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_5_child_4_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_17);
root_child_5_child_4_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_5_child_4_child_0_child_0_child_1 = figma.flatten([root_child_5_child_4_child_0_child_0_child_1_svgContainer]);
root_child_5_child_4_child_0_child_0_child_1.name = "Path";
root_child_5_child_4_child_0_child_0_child_1.visible = true;
root_child_5_child_4_child_0_child_0_child_1.opacity = 1;
root_child_5_child_4_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_4_child_0_child_0_child_1) root_child_5_child_4_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_4_child_0_child_0_child_1) root_child_5_child_4_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_4_child_0_child_0_child_1) root_child_5_child_4_child_0_child_0_child_1.maskType = "ALPHA";
root_child_5_child_4_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_4_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_4_child_0_child_0_child_1.strokeWeight = 0;
root_child_5_child_4_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_4_child_0_child_0_child_1) root_child_5_child_4_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_4_child_0_child_0_child_1) root_child_5_child_4_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_4_child_0_child_0_child_1) root_child_5_child_4_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_5_child_4_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_4_child_0_child_0_child_1) root_child_5_child_4_child_0_child_0_child_1.cornerRadius = 0;
root_child_5_child_4_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_5_child_4_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_4_child_0_child_0_child_1.x = 4.166666626930237;
root_child_5_child_4_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_5_child_4_child_0_child_0 = figma.exclude([root_child_5_child_4_child_0_child_0_child_0, root_child_5_child_4_child_0_child_0_child_1], figma.currentPage);
root_child_5_child_4_child_0_child_0.name = "Shape";
root_child_5_child_4_child_0_child_0.visible = true;
root_child_5_child_4_child_0_child_0.opacity = 1;
root_child_5_child_4_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_4_child_0_child_0) root_child_5_child_4_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_4_child_0_child_0) root_child_5_child_4_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_4_child_0_child_0) root_child_5_child_4_child_0_child_0.maskType = "ALPHA";
root_child_5_child_4_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_4_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_4_child_0_child_0.strokeWeight = 0;
root_child_5_child_4_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_4_child_0_child_0) root_child_5_child_4_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_4_child_0_child_0) root_child_5_child_4_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_4_child_0_child_0) root_child_5_child_4_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_4_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_4_child_0_child_0) root_child_5_child_4_child_0_child_0.cornerRadius = 0;
root_child_5_child_4_child_0.appendChild(root_child_5_child_4_child_0_child_0);
applySizeAndTransform(root_child_5_child_4_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_4_child_0_child_0.x = 2.5;
root_child_5_child_4_child_0_child_0.y = 2.5;
root_child_5_child_4.appendChild(root_child_5_child_4_child_0);
// Child Layout Props
root_child_5_child_4_child_0.layoutAlign = "INHERIT";
root_child_5_child_4_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_4_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_5_child_4_child_1 = figma.createText();
root_child_5_child_4_child_1.name = "Filter name";
root_child_5_child_4_child_1.visible = true;
root_child_5_child_4_child_1.opacity = 1;
root_child_5_child_4_child_1.locked = false;
if ("blendMode" in root_child_5_child_4_child_1) root_child_5_child_4_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_4_child_1) root_child_5_child_4_child_1.isMask = false;
if ("maskType" in root_child_5_child_4_child_1) root_child_5_child_4_child_1.maskType = "ALPHA";
root_child_5_child_4_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_4_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_4_child_1.strokeWeight = 1;
root_child_5_child_4_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_4_child_1) root_child_5_child_4_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_4_child_1) root_child_5_child_4_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_4_child_1) root_child_5_child_4_child_1.strokeMiterLimit = 4;
root_child_5_child_4_child_1.effects = [];
// Text Properties
root_child_5_child_4_child_1.characters = `UEFA Football Development`;
root_child_5_child_4_child_1.fontSize = 16;
root_child_5_child_4_child_1.textAlignHorizontal = "LEFT";
root_child_5_child_4_child_1.textAlignVertical = "CENTER";
root_child_5_child_4_child_1.textAutoResize = "HEIGHT";
root_child_5_child_4_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_4_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_4_child_1) root_child_5_child_4_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_4_child_1) root_child_5_child_4_child_1.textDecoration = "NONE";
root_child_5_child_4_child_1.paragraphSpacing = 0;
root_child_5_child_4_child_1.paragraphIndent = 0;
await this.setFont(root_child_5_child_4_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_5_child_4_child_1, 0, 25, {"family":"Open Sans","style":"Regular"});
root_child_5_child_4_child_1.setRangeFills(0, 25, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_4_child_1.setRangeFontSize(0, 25, 16);
root_child_5_child_4.appendChild(root_child_5_child_4_child_1);
// Child Layout Props
root_child_5_child_4_child_1.layoutAlign = "INHERIT";
root_child_5_child_4_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_4_child_1, {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_4);
// Child Layout Props
root_child_5_child_4.layoutAlign = "STRETCH";
root_child_5_child_4.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_4, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,176]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1709
const root_child_5_child_5 = figma.createFrame();
root_child_5_child_5.name = "Frame 1709";
root_child_5_child_5.visible = true;
root_child_5_child_5.opacity = 1;
root_child_5_child_5.locked = false;
if ("blendMode" in root_child_5_child_5) root_child_5_child_5.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_5) root_child_5_child_5.isMask = false;
if ("maskType" in root_child_5_child_5) root_child_5_child_5.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_5) root_child_5_child_5.clipsContent = false;
if ("layoutMode" in root_child_5_child_5) {
    root_child_5_child_5.layoutMode = "HORIZONTAL";
    root_child_5_child_5.primaryAxisSizingMode = "FIXED";
    root_child_5_child_5.counterAxisSizingMode = "FIXED";
    root_child_5_child_5.primaryAxisAlignItems = "MIN";
    root_child_5_child_5.counterAxisAlignItems = "CENTER";
    root_child_5_child_5.itemSpacing = 4;
    root_child_5_child_5.paddingTop = 0;
    root_child_5_child_5.paddingRight = 0;
    root_child_5_child_5.paddingBottom = 0;
    root_child_5_child_5.paddingLeft = 8;
    root_child_5_child_5.itemReverseZIndex = false;
    root_child_5_child_5.strokesIncludedInLayout = false;
}
root_child_5_child_5.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"boundVariables":{}}]);
root_child_5_child_5.strokes = await this.hydratePaints([]);
root_child_5_child_5.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_5) root_child_5_child_5.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_5) root_child_5_child_5.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_5) root_child_5_child_5.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_5) root_child_5_child_5.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_5) root_child_5_child_5.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_5) root_child_5_child_5.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_5) root_child_5_child_5.strokeLeftWeight = 0;
root_child_5_child_5.effects = [];
if ("cornerRadius" in root_child_5_child_5) root_child_5_child_5.cornerRadius = 0;

// Start Child: Checkbox
const root_child_5_child_5_child_0 = figma.createFrame();
root_child_5_child_5_child_0.name = "Checkbox";
root_child_5_child_5_child_0.visible = true;
root_child_5_child_5_child_0.opacity = 1;
root_child_5_child_5_child_0.locked = false;
if ("blendMode" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.isMask = false;
if ("maskType" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_5_child_0) {
    root_child_5_child_5_child_0.layoutMode = "NONE";
}
root_child_5_child_5_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_5_child_0.strokeWeight = 1;
root_child_5_child_5_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.strokeLeftWeight = 1;
root_child_5_child_5_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_5_child_0) root_child_5_child_5_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_5_child_5_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_18);
root_child_5_child_5_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_5_child_5_child_0_child_0_child_0 = figma.flatten([root_child_5_child_5_child_0_child_0_child_0_svgContainer]);
root_child_5_child_5_child_0_child_0_child_0.name = "Path";
root_child_5_child_5_child_0_child_0_child_0.visible = true;
root_child_5_child_5_child_0_child_0_child_0.opacity = 1;
root_child_5_child_5_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_5_child_0_child_0_child_0) root_child_5_child_5_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_5_child_0_child_0_child_0) root_child_5_child_5_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_5_child_0_child_0_child_0) root_child_5_child_5_child_0_child_0_child_0.maskType = "ALPHA";
root_child_5_child_5_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_5_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_5_child_0_child_0_child_0.strokeWeight = 0;
root_child_5_child_5_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_5_child_0_child_0_child_0) root_child_5_child_5_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_5_child_0_child_0_child_0) root_child_5_child_5_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_5_child_0_child_0_child_0) root_child_5_child_5_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_5_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_5_child_0_child_0_child_0) root_child_5_child_5_child_0_child_0_child_0.cornerRadius = 0;
root_child_5_child_5_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_5_child_5_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_5_child_0_child_0_child_0.x = 2.5;
root_child_5_child_5_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_5_child_5_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_19);
root_child_5_child_5_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_5_child_5_child_0_child_0_child_1 = figma.flatten([root_child_5_child_5_child_0_child_0_child_1_svgContainer]);
root_child_5_child_5_child_0_child_0_child_1.name = "Path";
root_child_5_child_5_child_0_child_0_child_1.visible = true;
root_child_5_child_5_child_0_child_0_child_1.opacity = 1;
root_child_5_child_5_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_5_child_0_child_0_child_1) root_child_5_child_5_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_5_child_0_child_0_child_1) root_child_5_child_5_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_5_child_0_child_0_child_1) root_child_5_child_5_child_0_child_0_child_1.maskType = "ALPHA";
root_child_5_child_5_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_5_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_5_child_0_child_0_child_1.strokeWeight = 0;
root_child_5_child_5_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_5_child_0_child_0_child_1) root_child_5_child_5_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_5_child_0_child_0_child_1) root_child_5_child_5_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_5_child_0_child_0_child_1) root_child_5_child_5_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_5_child_5_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_5_child_0_child_0_child_1) root_child_5_child_5_child_0_child_0_child_1.cornerRadius = 0;
root_child_5_child_5_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_5_child_5_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_5_child_0_child_0_child_1.x = 4.166666626930237;
root_child_5_child_5_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_5_child_5_child_0_child_0 = figma.exclude([root_child_5_child_5_child_0_child_0_child_0, root_child_5_child_5_child_0_child_0_child_1], figma.currentPage);
root_child_5_child_5_child_0_child_0.name = "Shape";
root_child_5_child_5_child_0_child_0.visible = true;
root_child_5_child_5_child_0_child_0.opacity = 1;
root_child_5_child_5_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_5_child_0_child_0) root_child_5_child_5_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_5_child_0_child_0) root_child_5_child_5_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_5_child_0_child_0) root_child_5_child_5_child_0_child_0.maskType = "ALPHA";
root_child_5_child_5_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_5_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_5_child_0_child_0.strokeWeight = 0;
root_child_5_child_5_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_5_child_0_child_0) root_child_5_child_5_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_5_child_0_child_0) root_child_5_child_5_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_5_child_0_child_0) root_child_5_child_5_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_5_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_5_child_0_child_0) root_child_5_child_5_child_0_child_0.cornerRadius = 0;
root_child_5_child_5_child_0.appendChild(root_child_5_child_5_child_0_child_0);
applySizeAndTransform(root_child_5_child_5_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_5_child_0_child_0.x = 2.5;
root_child_5_child_5_child_0_child_0.y = 2.5;
root_child_5_child_5.appendChild(root_child_5_child_5_child_0);
// Child Layout Props
root_child_5_child_5_child_0.layoutAlign = "INHERIT";
root_child_5_child_5_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_5_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_5_child_5_child_1 = figma.createText();
root_child_5_child_5_child_1.name = "Filter name";
root_child_5_child_5_child_1.visible = true;
root_child_5_child_5_child_1.opacity = 1;
root_child_5_child_5_child_1.locked = false;
if ("blendMode" in root_child_5_child_5_child_1) root_child_5_child_5_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_5_child_1) root_child_5_child_5_child_1.isMask = false;
if ("maskType" in root_child_5_child_5_child_1) root_child_5_child_5_child_1.maskType = "ALPHA";
root_child_5_child_5_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_5_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_5_child_1.strokeWeight = 1;
root_child_5_child_5_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_5_child_1) root_child_5_child_5_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_5_child_1) root_child_5_child_5_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_5_child_1) root_child_5_child_5_child_1.strokeMiterLimit = 4;
root_child_5_child_5_child_1.effects = [];
// Text Properties
root_child_5_child_5_child_1.characters = `UEFA Grow`;
root_child_5_child_5_child_1.fontSize = 16;
root_child_5_child_5_child_1.textAlignHorizontal = "LEFT";
root_child_5_child_5_child_1.textAlignVertical = "CENTER";
root_child_5_child_5_child_1.textAutoResize = "HEIGHT";
root_child_5_child_5_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_5_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_5_child_1) root_child_5_child_5_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_5_child_1) root_child_5_child_5_child_1.textDecoration = "NONE";
root_child_5_child_5_child_1.paragraphSpacing = 0;
root_child_5_child_5_child_1.paragraphIndent = 0;
await this.setFont(root_child_5_child_5_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_5_child_5_child_1, 0, 9, {"family":"Open Sans","style":"Regular"});
root_child_5_child_5_child_1.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_5_child_1.setRangeFontSize(0, 9, 16);
root_child_5_child_5.appendChild(root_child_5_child_5_child_1);
// Child Layout Props
root_child_5_child_5_child_1.layoutAlign = "INHERIT";
root_child_5_child_5_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_5_child_1, {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_5);
// Child Layout Props
root_child_5_child_5.layoutAlign = "STRETCH";
root_child_5_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_5, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,220]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1710
const root_child_5_child_6 = figma.createFrame();
root_child_5_child_6.name = "Frame 1710";
root_child_5_child_6.visible = true;
root_child_5_child_6.opacity = 1;
root_child_5_child_6.locked = false;
if ("blendMode" in root_child_5_child_6) root_child_5_child_6.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_6) root_child_5_child_6.isMask = false;
if ("maskType" in root_child_5_child_6) root_child_5_child_6.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_6) root_child_5_child_6.clipsContent = false;
if ("layoutMode" in root_child_5_child_6) {
    root_child_5_child_6.layoutMode = "HORIZONTAL";
    root_child_5_child_6.primaryAxisSizingMode = "FIXED";
    root_child_5_child_6.counterAxisSizingMode = "FIXED";
    root_child_5_child_6.primaryAxisAlignItems = "MIN";
    root_child_5_child_6.counterAxisAlignItems = "CENTER";
    root_child_5_child_6.itemSpacing = 4;
    root_child_5_child_6.paddingTop = 0;
    root_child_5_child_6.paddingRight = 0;
    root_child_5_child_6.paddingBottom = 0;
    root_child_5_child_6.paddingLeft = 8;
    root_child_5_child_6.itemReverseZIndex = false;
    root_child_5_child_6.strokesIncludedInLayout = false;
}
root_child_5_child_6.fills = await this.hydratePaints([]);
root_child_5_child_6.strokes = await this.hydratePaints([]);
root_child_5_child_6.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_6) root_child_5_child_6.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_6) root_child_5_child_6.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_6) root_child_5_child_6.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_6) root_child_5_child_6.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_6) root_child_5_child_6.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_6) root_child_5_child_6.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_6) root_child_5_child_6.strokeLeftWeight = 0;
root_child_5_child_6.effects = [];
if ("cornerRadius" in root_child_5_child_6) root_child_5_child_6.cornerRadius = 0;

// Start Child: Checkbox
const root_child_5_child_6_child_0 = figma.createFrame();
root_child_5_child_6_child_0.name = "Checkbox";
root_child_5_child_6_child_0.visible = true;
root_child_5_child_6_child_0.opacity = 1;
root_child_5_child_6_child_0.locked = false;
if ("blendMode" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.isMask = false;
if ("maskType" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_6_child_0) {
    root_child_5_child_6_child_0.layoutMode = "NONE";
}
root_child_5_child_6_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_6_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_6_child_0.strokeWeight = 1;
root_child_5_child_6_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.strokeLeftWeight = 1;
root_child_5_child_6_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_6_child_0) root_child_5_child_6_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_5_child_6_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_20);
root_child_5_child_6_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_5_child_6_child_0_child_0_child_0 = figma.flatten([root_child_5_child_6_child_0_child_0_child_0_svgContainer]);
root_child_5_child_6_child_0_child_0_child_0.name = "Path";
root_child_5_child_6_child_0_child_0_child_0.visible = true;
root_child_5_child_6_child_0_child_0_child_0.opacity = 1;
root_child_5_child_6_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_6_child_0_child_0_child_0) root_child_5_child_6_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_6_child_0_child_0_child_0) root_child_5_child_6_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_6_child_0_child_0_child_0) root_child_5_child_6_child_0_child_0_child_0.maskType = "ALPHA";
root_child_5_child_6_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_6_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_6_child_0_child_0_child_0.strokeWeight = 0;
root_child_5_child_6_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_6_child_0_child_0_child_0) root_child_5_child_6_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_6_child_0_child_0_child_0) root_child_5_child_6_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_6_child_0_child_0_child_0) root_child_5_child_6_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_6_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_6_child_0_child_0_child_0) root_child_5_child_6_child_0_child_0_child_0.cornerRadius = 0;
root_child_5_child_6_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_5_child_6_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_6_child_0_child_0_child_0.x = 2.5;
root_child_5_child_6_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_5_child_6_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_21);
root_child_5_child_6_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_5_child_6_child_0_child_0_child_1 = figma.flatten([root_child_5_child_6_child_0_child_0_child_1_svgContainer]);
root_child_5_child_6_child_0_child_0_child_1.name = "Path";
root_child_5_child_6_child_0_child_0_child_1.visible = true;
root_child_5_child_6_child_0_child_0_child_1.opacity = 1;
root_child_5_child_6_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_6_child_0_child_0_child_1) root_child_5_child_6_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_6_child_0_child_0_child_1) root_child_5_child_6_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_6_child_0_child_0_child_1) root_child_5_child_6_child_0_child_0_child_1.maskType = "ALPHA";
root_child_5_child_6_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_6_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_6_child_0_child_0_child_1.strokeWeight = 0;
root_child_5_child_6_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_6_child_0_child_0_child_1) root_child_5_child_6_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_6_child_0_child_0_child_1) root_child_5_child_6_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_6_child_0_child_0_child_1) root_child_5_child_6_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_5_child_6_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_6_child_0_child_0_child_1) root_child_5_child_6_child_0_child_0_child_1.cornerRadius = 0;
root_child_5_child_6_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_5_child_6_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_6_child_0_child_0_child_1.x = 4.166666626930237;
root_child_5_child_6_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_5_child_6_child_0_child_0 = figma.exclude([root_child_5_child_6_child_0_child_0_child_0, root_child_5_child_6_child_0_child_0_child_1], figma.currentPage);
root_child_5_child_6_child_0_child_0.name = "Shape";
root_child_5_child_6_child_0_child_0.visible = true;
root_child_5_child_6_child_0_child_0.opacity = 1;
root_child_5_child_6_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_6_child_0_child_0) root_child_5_child_6_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_6_child_0_child_0) root_child_5_child_6_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_6_child_0_child_0) root_child_5_child_6_child_0_child_0.maskType = "ALPHA";
root_child_5_child_6_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_6_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_6_child_0_child_0.strokeWeight = 0;
root_child_5_child_6_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_6_child_0_child_0) root_child_5_child_6_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_6_child_0_child_0) root_child_5_child_6_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_6_child_0_child_0) root_child_5_child_6_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_6_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_6_child_0_child_0) root_child_5_child_6_child_0_child_0.cornerRadius = 0;
root_child_5_child_6_child_0.appendChild(root_child_5_child_6_child_0_child_0);
applySizeAndTransform(root_child_5_child_6_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_6_child_0_child_0.x = 2.5;
root_child_5_child_6_child_0_child_0.y = 2.5;
root_child_5_child_6.appendChild(root_child_5_child_6_child_0);
// Child Layout Props
root_child_5_child_6_child_0.layoutAlign = "INHERIT";
root_child_5_child_6_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_6_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_5_child_6_child_1 = figma.createText();
root_child_5_child_6_child_1.name = "Filter name";
root_child_5_child_6_child_1.visible = true;
root_child_5_child_6_child_1.opacity = 1;
root_child_5_child_6_child_1.locked = false;
if ("blendMode" in root_child_5_child_6_child_1) root_child_5_child_6_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_6_child_1) root_child_5_child_6_child_1.isMask = false;
if ("maskType" in root_child_5_child_6_child_1) root_child_5_child_6_child_1.maskType = "ALPHA";
root_child_5_child_6_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_6_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_6_child_1.strokeWeight = 1;
root_child_5_child_6_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_6_child_1) root_child_5_child_6_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_6_child_1) root_child_5_child_6_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_6_child_1) root_child_5_child_6_child_1.strokeMiterLimit = 4;
root_child_5_child_6_child_1.effects = [];
// Text Properties
root_child_5_child_6_child_1.characters = `UEFA Hatrick`;
root_child_5_child_6_child_1.fontSize = 16;
root_child_5_child_6_child_1.textAlignHorizontal = "LEFT";
root_child_5_child_6_child_1.textAlignVertical = "CENTER";
root_child_5_child_6_child_1.textAutoResize = "HEIGHT";
root_child_5_child_6_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_6_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_6_child_1) root_child_5_child_6_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_6_child_1) root_child_5_child_6_child_1.textDecoration = "NONE";
root_child_5_child_6_child_1.paragraphSpacing = 0;
root_child_5_child_6_child_1.paragraphIndent = 0;
await this.setFont(root_child_5_child_6_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_5_child_6_child_1, 0, 12, {"family":"Open Sans","style":"Regular"});
root_child_5_child_6_child_1.setRangeFills(0, 12, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_6_child_1.setRangeFontSize(0, 12, 16);
root_child_5_child_6.appendChild(root_child_5_child_6_child_1);
// Child Layout Props
root_child_5_child_6_child_1.layoutAlign = "INHERIT";
root_child_5_child_6_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_6_child_1, {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_6);
// Child Layout Props
root_child_5_child_6.layoutAlign = "STRETCH";
root_child_5_child_6.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_6, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,264]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1711
const root_child_5_child_7 = figma.createFrame();
root_child_5_child_7.name = "Frame 1711";
root_child_5_child_7.visible = true;
root_child_5_child_7.opacity = 1;
root_child_5_child_7.locked = false;
if ("blendMode" in root_child_5_child_7) root_child_5_child_7.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_7) root_child_5_child_7.isMask = false;
if ("maskType" in root_child_5_child_7) root_child_5_child_7.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_7) root_child_5_child_7.clipsContent = false;
if ("layoutMode" in root_child_5_child_7) {
    root_child_5_child_7.layoutMode = "HORIZONTAL";
    root_child_5_child_7.primaryAxisSizingMode = "FIXED";
    root_child_5_child_7.counterAxisSizingMode = "FIXED";
    root_child_5_child_7.primaryAxisAlignItems = "MIN";
    root_child_5_child_7.counterAxisAlignItems = "CENTER";
    root_child_5_child_7.itemSpacing = 4;
    root_child_5_child_7.paddingTop = 0;
    root_child_5_child_7.paddingRight = 0;
    root_child_5_child_7.paddingBottom = 0;
    root_child_5_child_7.paddingLeft = 8;
    root_child_5_child_7.itemReverseZIndex = false;
    root_child_5_child_7.strokesIncludedInLayout = false;
}
root_child_5_child_7.fills = await this.hydratePaints([]);
root_child_5_child_7.strokes = await this.hydratePaints([]);
root_child_5_child_7.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_7) root_child_5_child_7.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_7) root_child_5_child_7.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_7) root_child_5_child_7.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_7) root_child_5_child_7.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_7) root_child_5_child_7.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_7) root_child_5_child_7.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_7) root_child_5_child_7.strokeLeftWeight = 0;
root_child_5_child_7.effects = [];
if ("cornerRadius" in root_child_5_child_7) root_child_5_child_7.cornerRadius = 0;

// Start Child: Checkbox
const root_child_5_child_7_child_0 = figma.createFrame();
root_child_5_child_7_child_0.name = "Checkbox";
root_child_5_child_7_child_0.visible = true;
root_child_5_child_7_child_0.opacity = 1;
root_child_5_child_7_child_0.locked = false;
if ("blendMode" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.isMask = false;
if ("maskType" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_7_child_0) {
    root_child_5_child_7_child_0.layoutMode = "NONE";
}
root_child_5_child_7_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_7_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_7_child_0.strokeWeight = 1;
root_child_5_child_7_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.strokeLeftWeight = 1;
root_child_5_child_7_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_7_child_0) root_child_5_child_7_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_5_child_7_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_22);
root_child_5_child_7_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_5_child_7_child_0_child_0_child_0 = figma.flatten([root_child_5_child_7_child_0_child_0_child_0_svgContainer]);
root_child_5_child_7_child_0_child_0_child_0.name = "Path";
root_child_5_child_7_child_0_child_0_child_0.visible = true;
root_child_5_child_7_child_0_child_0_child_0.opacity = 1;
root_child_5_child_7_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_7_child_0_child_0_child_0) root_child_5_child_7_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_7_child_0_child_0_child_0) root_child_5_child_7_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_7_child_0_child_0_child_0) root_child_5_child_7_child_0_child_0_child_0.maskType = "ALPHA";
root_child_5_child_7_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_7_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_7_child_0_child_0_child_0.strokeWeight = 0;
root_child_5_child_7_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_7_child_0_child_0_child_0) root_child_5_child_7_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_7_child_0_child_0_child_0) root_child_5_child_7_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_7_child_0_child_0_child_0) root_child_5_child_7_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_7_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_7_child_0_child_0_child_0) root_child_5_child_7_child_0_child_0_child_0.cornerRadius = 0;
root_child_5_child_7_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_5_child_7_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_7_child_0_child_0_child_0.x = 2.5;
root_child_5_child_7_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_5_child_7_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_23);
root_child_5_child_7_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_5_child_7_child_0_child_0_child_1 = figma.flatten([root_child_5_child_7_child_0_child_0_child_1_svgContainer]);
root_child_5_child_7_child_0_child_0_child_1.name = "Path";
root_child_5_child_7_child_0_child_0_child_1.visible = true;
root_child_5_child_7_child_0_child_0_child_1.opacity = 1;
root_child_5_child_7_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_7_child_0_child_0_child_1) root_child_5_child_7_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_7_child_0_child_0_child_1) root_child_5_child_7_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_7_child_0_child_0_child_1) root_child_5_child_7_child_0_child_0_child_1.maskType = "ALPHA";
root_child_5_child_7_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_7_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_7_child_0_child_0_child_1.strokeWeight = 0;
root_child_5_child_7_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_7_child_0_child_0_child_1) root_child_5_child_7_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_7_child_0_child_0_child_1) root_child_5_child_7_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_7_child_0_child_0_child_1) root_child_5_child_7_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_5_child_7_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_7_child_0_child_0_child_1) root_child_5_child_7_child_0_child_0_child_1.cornerRadius = 0;
root_child_5_child_7_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_5_child_7_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_7_child_0_child_0_child_1.x = 4.166666626930237;
root_child_5_child_7_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_5_child_7_child_0_child_0 = figma.exclude([root_child_5_child_7_child_0_child_0_child_0, root_child_5_child_7_child_0_child_0_child_1], figma.currentPage);
root_child_5_child_7_child_0_child_0.name = "Shape";
root_child_5_child_7_child_0_child_0.visible = true;
root_child_5_child_7_child_0_child_0.opacity = 1;
root_child_5_child_7_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_7_child_0_child_0) root_child_5_child_7_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_7_child_0_child_0) root_child_5_child_7_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_7_child_0_child_0) root_child_5_child_7_child_0_child_0.maskType = "ALPHA";
root_child_5_child_7_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_7_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_7_child_0_child_0.strokeWeight = 0;
root_child_5_child_7_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_7_child_0_child_0) root_child_5_child_7_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_7_child_0_child_0) root_child_5_child_7_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_7_child_0_child_0) root_child_5_child_7_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_7_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_7_child_0_child_0) root_child_5_child_7_child_0_child_0.cornerRadius = 0;
root_child_5_child_7_child_0.appendChild(root_child_5_child_7_child_0_child_0);
applySizeAndTransform(root_child_5_child_7_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_7_child_0_child_0.x = 2.5;
root_child_5_child_7_child_0_child_0.y = 2.5;
root_child_5_child_7.appendChild(root_child_5_child_7_child_0);
// Child Layout Props
root_child_5_child_7_child_0.layoutAlign = "INHERIT";
root_child_5_child_7_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_7_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_5_child_7_child_1 = figma.createText();
root_child_5_child_7_child_1.name = "Filter name";
root_child_5_child_7_child_1.visible = true;
root_child_5_child_7_child_1.opacity = 1;
root_child_5_child_7_child_1.locked = false;
if ("blendMode" in root_child_5_child_7_child_1) root_child_5_child_7_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_7_child_1) root_child_5_child_7_child_1.isMask = false;
if ("maskType" in root_child_5_child_7_child_1) root_child_5_child_7_child_1.maskType = "ALPHA";
root_child_5_child_7_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_7_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_7_child_1.strokeWeight = 1;
root_child_5_child_7_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_7_child_1) root_child_5_child_7_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_7_child_1) root_child_5_child_7_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_7_child_1) root_child_5_child_7_child_1.strokeMiterLimit = 4;
root_child_5_child_7_child_1.effects = [];
// Text Properties
root_child_5_child_7_child_1.characters = `UEFA Anti-Doping and Medical`;
root_child_5_child_7_child_1.fontSize = 16;
root_child_5_child_7_child_1.textAlignHorizontal = "LEFT";
root_child_5_child_7_child_1.textAlignVertical = "CENTER";
root_child_5_child_7_child_1.textAutoResize = "HEIGHT";
root_child_5_child_7_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_7_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_7_child_1) root_child_5_child_7_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_7_child_1) root_child_5_child_7_child_1.textDecoration = "NONE";
root_child_5_child_7_child_1.paragraphSpacing = 0;
root_child_5_child_7_child_1.paragraphIndent = 0;
await this.setFont(root_child_5_child_7_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_5_child_7_child_1, 0, 28, {"family":"Open Sans","style":"Regular"});
root_child_5_child_7_child_1.setRangeFills(0, 28, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_7_child_1.setRangeFontSize(0, 28, 16);
root_child_5_child_7.appendChild(root_child_5_child_7_child_1);
// Child Layout Props
root_child_5_child_7_child_1.layoutAlign = "INHERIT";
root_child_5_child_7_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_7_child_1, {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_7);
// Child Layout Props
root_child_5_child_7.layoutAlign = "STRETCH";
root_child_5_child_7.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_7, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,308]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1712
const root_child_5_child_8 = figma.createFrame();
root_child_5_child_8.name = "Frame 1712";
root_child_5_child_8.visible = true;
root_child_5_child_8.opacity = 1;
root_child_5_child_8.locked = false;
if ("blendMode" in root_child_5_child_8) root_child_5_child_8.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_8) root_child_5_child_8.isMask = false;
if ("maskType" in root_child_5_child_8) root_child_5_child_8.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_8) root_child_5_child_8.clipsContent = false;
if ("layoutMode" in root_child_5_child_8) {
    root_child_5_child_8.layoutMode = "HORIZONTAL";
    root_child_5_child_8.primaryAxisSizingMode = "FIXED";
    root_child_5_child_8.counterAxisSizingMode = "FIXED";
    root_child_5_child_8.primaryAxisAlignItems = "MIN";
    root_child_5_child_8.counterAxisAlignItems = "CENTER";
    root_child_5_child_8.itemSpacing = 4;
    root_child_5_child_8.paddingTop = 0;
    root_child_5_child_8.paddingRight = 0;
    root_child_5_child_8.paddingBottom = 0;
    root_child_5_child_8.paddingLeft = 8;
    root_child_5_child_8.itemReverseZIndex = false;
    root_child_5_child_8.strokesIncludedInLayout = false;
}
root_child_5_child_8.fills = await this.hydratePaints([]);
root_child_5_child_8.strokes = await this.hydratePaints([]);
root_child_5_child_8.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_8) root_child_5_child_8.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_8) root_child_5_child_8.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_8) root_child_5_child_8.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_8) root_child_5_child_8.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_5_child_8) root_child_5_child_8.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_5_child_8) root_child_5_child_8.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_8) root_child_5_child_8.strokeLeftWeight = 0;
root_child_5_child_8.effects = [];
if ("cornerRadius" in root_child_5_child_8) root_child_5_child_8.cornerRadius = 0;

// Start Child: Checkbox
const root_child_5_child_8_child_0 = figma.createFrame();
root_child_5_child_8_child_0.name = "Checkbox";
root_child_5_child_8_child_0.visible = true;
root_child_5_child_8_child_0.opacity = 1;
root_child_5_child_8_child_0.locked = false;
if ("blendMode" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.isMask = false;
if ("maskType" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.clipsContent = false;
if ("layoutMode" in root_child_5_child_8_child_0) {
    root_child_5_child_8_child_0.layoutMode = "NONE";
}
root_child_5_child_8_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_5_child_8_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_8_child_0.strokeWeight = 1;
root_child_5_child_8_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.strokeLeftWeight = 1;
root_child_5_child_8_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_8_child_0) root_child_5_child_8_child_0.cornerRadius = 0;

// Start Child: Shape

// Boolean Child: Path
const root_child_5_child_8_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_24);
root_child_5_child_8_child_0_child_0_child_0_svgContainer.resize(15, 15);
const root_child_5_child_8_child_0_child_0_child_0 = figma.flatten([root_child_5_child_8_child_0_child_0_child_0_svgContainer]);
root_child_5_child_8_child_0_child_0_child_0.name = "Path";
root_child_5_child_8_child_0_child_0_child_0.visible = true;
root_child_5_child_8_child_0_child_0_child_0.opacity = 1;
root_child_5_child_8_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_8_child_0_child_0_child_0) root_child_5_child_8_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_8_child_0_child_0_child_0) root_child_5_child_8_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_8_child_0_child_0_child_0) root_child_5_child_8_child_0_child_0_child_0.maskType = "ALPHA";
root_child_5_child_8_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_8_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_8_child_0_child_0_child_0.strokeWeight = 0;
root_child_5_child_8_child_0_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_8_child_0_child_0_child_0) root_child_5_child_8_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_8_child_0_child_0_child_0) root_child_5_child_8_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_8_child_0_child_0_child_0) root_child_5_child_8_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_8_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_8_child_0_child_0_child_0) root_child_5_child_8_child_0_child_0_child_0.cornerRadius = 0;
root_child_5_child_8_child_0_child_0_child_0.vectorPaths = [{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}];
applySizeAndTransform(root_child_5_child_8_child_0_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_8_child_0_child_0_child_0.x = 2.5;
root_child_5_child_8_child_0_child_0_child_0.y = 2.5;

// Boolean Child: Path
const root_child_5_child_8_child_0_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_Synth_Path_25);
root_child_5_child_8_child_0_child_0_child_1_svgContainer.resize(11.666666984558105, 11.666666984558105);
const root_child_5_child_8_child_0_child_0_child_1 = figma.flatten([root_child_5_child_8_child_0_child_0_child_1_svgContainer]);
root_child_5_child_8_child_0_child_0_child_1.name = "Path";
root_child_5_child_8_child_0_child_0_child_1.visible = true;
root_child_5_child_8_child_0_child_0_child_1.opacity = 1;
root_child_5_child_8_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_5_child_8_child_0_child_0_child_1) root_child_5_child_8_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_8_child_0_child_0_child_1) root_child_5_child_8_child_0_child_0_child_1.isMask = false;
if ("maskType" in root_child_5_child_8_child_0_child_0_child_1) root_child_5_child_8_child_0_child_0_child_1.maskType = "ALPHA";
root_child_5_child_8_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}]);
root_child_5_child_8_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_8_child_0_child_0_child_1.strokeWeight = 0;
root_child_5_child_8_child_0_child_0_child_1.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_8_child_0_child_0_child_1) root_child_5_child_8_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_8_child_0_child_0_child_1) root_child_5_child_8_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_8_child_0_child_0_child_1) root_child_5_child_8_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_5_child_8_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_5_child_8_child_0_child_0_child_1) root_child_5_child_8_child_0_child_0_child_1.cornerRadius = 0;
root_child_5_child_8_child_0_child_0_child_1.vectorPaths = [{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}];
applySizeAndTransform(root_child_5_child_8_child_0_child_0_child_1, {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_8_child_0_child_0_child_1.x = 4.166666626930237;
root_child_5_child_8_child_0_child_0_child_1.y = 4.166666626930237;
const root_child_5_child_8_child_0_child_0 = figma.exclude([root_child_5_child_8_child_0_child_0_child_0, root_child_5_child_8_child_0_child_0_child_1], figma.currentPage);
root_child_5_child_8_child_0_child_0.name = "Shape";
root_child_5_child_8_child_0_child_0.visible = true;
root_child_5_child_8_child_0_child_0.opacity = 1;
root_child_5_child_8_child_0_child_0.locked = false;
if ("blendMode" in root_child_5_child_8_child_0_child_0) root_child_5_child_8_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_8_child_0_child_0) root_child_5_child_8_child_0_child_0.isMask = false;
if ("maskType" in root_child_5_child_8_child_0_child_0) root_child_5_child_8_child_0_child_0.maskType = "ALPHA";
root_child_5_child_8_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_8_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_5_child_8_child_0_child_0.strokeWeight = 0;
root_child_5_child_8_child_0_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_5_child_8_child_0_child_0) root_child_5_child_8_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_8_child_0_child_0) root_child_5_child_8_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_8_child_0_child_0) root_child_5_child_8_child_0_child_0.strokeMiterLimit = 4;
root_child_5_child_8_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_5_child_8_child_0_child_0) root_child_5_child_8_child_0_child_0.cornerRadius = 0;
root_child_5_child_8_child_0.appendChild(root_child_5_child_8_child_0_child_0);
applySizeAndTransform(root_child_5_child_8_child_0_child_0, {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_5_child_8_child_0_child_0.x = 2.5;
root_child_5_child_8_child_0_child_0.y = 2.5;
root_child_5_child_8.appendChild(root_child_5_child_8_child_0);
// Child Layout Props
root_child_5_child_8_child_0.layoutAlign = "INHERIT";
root_child_5_child_8_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_8_child_0, {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Filter name
const root_child_5_child_8_child_1 = figma.createText();
root_child_5_child_8_child_1.name = "Filter name";
root_child_5_child_8_child_1.visible = true;
root_child_5_child_8_child_1.opacity = 1;
root_child_5_child_8_child_1.locked = false;
if ("blendMode" in root_child_5_child_8_child_1) root_child_5_child_8_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_5_child_8_child_1) root_child_5_child_8_child_1.isMask = false;
if ("maskType" in root_child_5_child_8_child_1) root_child_5_child_8_child_1.maskType = "ALPHA";
root_child_5_child_8_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_8_child_1.strokes = await this.hydratePaints([]);
root_child_5_child_8_child_1.strokeWeight = 1;
root_child_5_child_8_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_5_child_8_child_1) root_child_5_child_8_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_5_child_8_child_1) root_child_5_child_8_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_5_child_8_child_1) root_child_5_child_8_child_1.strokeMiterLimit = 4;
root_child_5_child_8_child_1.effects = [];
// Text Properties
root_child_5_child_8_child_1.characters = `UEFA Intelligence Center`;
root_child_5_child_8_child_1.fontSize = 16;
root_child_5_child_8_child_1.textAlignHorizontal = "LEFT";
root_child_5_child_8_child_1.textAlignVertical = "CENTER";
root_child_5_child_8_child_1.textAutoResize = "HEIGHT";
root_child_5_child_8_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_5_child_8_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_5_child_8_child_1) root_child_5_child_8_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_5_child_8_child_1) root_child_5_child_8_child_1.textDecoration = "NONE";
root_child_5_child_8_child_1.paragraphSpacing = 0;
root_child_5_child_8_child_1.paragraphIndent = 0;
await this.setFont(root_child_5_child_8_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_5_child_8_child_1, 0, 24, {"family":"Open Sans","style":"Regular"});
root_child_5_child_8_child_1.setRangeFills(0, 24, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_5_child_8_child_1.setRangeFontSize(0, 24, 16);
root_child_5_child_8.appendChild(root_child_5_child_8_child_1);
// Child Layout Props
root_child_5_child_8_child_1.layoutAlign = "INHERIT";
root_child_5_child_8_child_1.layoutGrow = 1;
applySizeAndTransform(root_child_5_child_8_child_1, {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_5.appendChild(root_child_5_child_8);
// Child Layout Props
root_child_5_child_8.layoutAlign = "STRETCH";
root_child_5_child_8.layoutGrow = 0;
applySizeAndTransform(root_child_5_child_8, {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,352]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_5);
// Child Layout Props
root_child_5.layoutAlign = "STRETCH";
root_child_5.layoutGrow = 0;
applySizeAndTransform(root_child_5, {"width":307,"height":384,"relativeTransform":[[1,0,16],[0,1,246]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1649
const root_child_6 = figma.createFrame();
root_child_6.name = "Frame 1649";
root_child_6.visible = true;
root_child_6.opacity = 1;
root_child_6.locked = false;
if ("blendMode" in root_child_6) root_child_6.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_6) root_child_6.isMask = false;
if ("maskType" in root_child_6) root_child_6.maskType = "ALPHA";
if ("clipsContent" in root_child_6) root_child_6.clipsContent = false;
if ("layoutMode" in root_child_6) {
    root_child_6.layoutMode = "HORIZONTAL";
    root_child_6.primaryAxisSizingMode = "FIXED";
    root_child_6.counterAxisSizingMode = "FIXED";
    root_child_6.primaryAxisAlignItems = "MIN";
    root_child_6.counterAxisAlignItems = "CENTER";
    root_child_6.itemSpacing = 4;
    root_child_6.paddingTop = 0;
    root_child_6.paddingRight = 0;
    root_child_6.paddingBottom = 0;
    root_child_6.paddingLeft = 0;
    root_child_6.itemReverseZIndex = false;
    root_child_6.strokesIncludedInLayout = false;
}
root_child_6.fills = await this.hydratePaints([]);
root_child_6.strokes = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}]);
root_child_6.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_6) root_child_6.strokeCap = "NONE";
if ("strokeJoin" in root_child_6) root_child_6.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_6) root_child_6.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_6) root_child_6.strokeTopWeight = 0;
if ("strokeRightWeight" in root_child_6) root_child_6.strokeRightWeight = 0;
if ("strokeBottomWeight" in root_child_6) root_child_6.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_6) root_child_6.strokeLeftWeight = 0;
root_child_6.effects = [];
if ("cornerRadius" in root_child_6) root_child_6.cornerRadius = 0;

// Start Child: Text
const root_child_6_child_0 = figma.createText();
root_child_6_child_0.name = "Text";
root_child_6_child_0.visible = true;
root_child_6_child_0.opacity = 1;
root_child_6_child_0.locked = false;
if ("blendMode" in root_child_6_child_0) root_child_6_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_6_child_0) root_child_6_child_0.isMask = false;
if ("maskType" in root_child_6_child_0) root_child_6_child_0.maskType = "ALPHA";
root_child_6_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_6_child_0.strokes = await this.hydratePaints([]);
root_child_6_child_0.strokeWeight = 1;
root_child_6_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_6_child_0) root_child_6_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_6_child_0) root_child_6_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_6_child_0) root_child_6_child_0.strokeMiterLimit = 4;
root_child_6_child_0.effects = [];
// Text Properties
root_child_6_child_0.characters = `ORGANISATION`;
root_child_6_child_0.fontSize = 16;
root_child_6_child_0.textAlignHorizontal = "LEFT";
root_child_6_child_0.textAlignVertical = "CENTER";
root_child_6_child_0.textAutoResize = "HEIGHT";
root_child_6_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_6_child_0.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_6_child_0) root_child_6_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_6_child_0) root_child_6_child_0.textDecoration = "NONE";
root_child_6_child_0.paragraphSpacing = 0;
root_child_6_child_0.paragraphIndent = 0;
await this.setFont(root_child_6_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_6_child_0, 0, 12, {"family":"Open Sans","style":"SemiBold"});
root_child_6_child_0.setRangeFills(0, 12, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_6_child_0.setRangeFontSize(0, 12, 16);
root_child_6.appendChild(root_child_6_child_0);
// Child Layout Props
root_child_6_child_0.layoutAlign = "INHERIT";
root_child_6_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_6_child_0, {"width":291,"height":24,"relativeTransform":[[1,0,0],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Actions / Add / Small
const root_child_6_child_1 = figma.createFrame();
root_child_6_child_1.name = "Actions / Add / Small";
root_child_6_child_1.visible = true;
root_child_6_child_1.opacity = 1;
root_child_6_child_1.locked = false;
if ("blendMode" in root_child_6_child_1) root_child_6_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_6_child_1) root_child_6_child_1.isMask = false;
if ("maskType" in root_child_6_child_1) root_child_6_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_6_child_1) root_child_6_child_1.clipsContent = true;
if ("layoutMode" in root_child_6_child_1) {
    root_child_6_child_1.layoutMode = "NONE";
}
root_child_6_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_6_child_1.strokes = await this.hydratePaints([]);
root_child_6_child_1.strokeWeight = 1;
root_child_6_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_6_child_1) root_child_6_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_6_child_1) root_child_6_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_6_child_1) root_child_6_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_6_child_1) root_child_6_child_1.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_6_child_1) root_child_6_child_1.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_6_child_1) root_child_6_child_1.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_6_child_1) root_child_6_child_1.strokeLeftWeight = 1;
root_child_6_child_1.effects = [];
if ("cornerRadius" in root_child_6_child_1) root_child_6_child_1.cornerRadius = 0;

// Start Child: Union
const root_child_6_child_1_child_0_svgContainer = figma.createNodeFromSvg(SVG_sidebar_standard_code_assets_icon_Union_I1119_8731_5250_18144_svg_8x8);
root_child_6_child_1_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_6_child_1_child_0 = figma.flatten([root_child_6_child_1_child_0_svgContainer]);
root_child_6_child_1_child_0.name = "Union";
root_child_6_child_1_child_0.visible = true;
root_child_6_child_1_child_0.opacity = 1;
root_child_6_child_1_child_0.locked = false;
if ("blendMode" in root_child_6_child_1_child_0) root_child_6_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_6_child_1_child_0) root_child_6_child_1_child_0.isMask = false;
if ("maskType" in root_child_6_child_1_child_0) root_child_6_child_1_child_0.maskType = "ALPHA";
root_child_6_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_6_child_1_child_0.strokeWeight = 0;
root_child_6_child_1_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_6_child_1_child_0) root_child_6_child_1_child_0.strokeCap = "ROUND";
if ("strokeJoin" in root_child_6_child_1_child_0) root_child_6_child_1_child_0.strokeJoin = "ROUND";
if ("strokeMiterLimit" in root_child_6_child_1_child_0) root_child_6_child_1_child_0.strokeMiterLimit = 4;
root_child_6_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_6_child_1_child_0) root_child_6_child_1_child_0.cornerRadius = 0;
root_child_6_child_1.appendChild(root_child_6_child_1_child_0);
applySizeAndTransform(root_child_6_child_1_child_0, {"width":8,"height":8,"relativeTransform":[[1,0,2],[0,1,2]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_6_child_1_child_0.x = 2;
root_child_6_child_1_child_0.y = 2;
root_child_6.appendChild(root_child_6_child_1);
// Child Layout Props
root_child_6_child_1.layoutAlign = "INHERIT";
root_child_6_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_6_child_1, {"width":12,"height":12,"relativeTransform":[[1,0,295],[0,1,10]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_6);
// Child Layout Props
root_child_6.layoutAlign = "STRETCH";
root_child_6.layoutGrow = 0;
applySizeAndTransform(root_child_6, {"width":307,"height":32,"relativeTransform":[[1,0,16],[0,1,646]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1656
const root_child_7 = figma.createFrame();
root_child_7.name = "Frame 1656";
root_child_7.visible = true;
root_child_7.opacity = 1;
root_child_7.locked = false;
if ("blendMode" in root_child_7) root_child_7.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_7) root_child_7.isMask = false;
if ("maskType" in root_child_7) root_child_7.maskType = "ALPHA";
if ("clipsContent" in root_child_7) root_child_7.clipsContent = false;
if ("layoutMode" in root_child_7) {
    root_child_7.layoutMode = "HORIZONTAL";
    root_child_7.primaryAxisSizingMode = "FIXED";
    root_child_7.counterAxisSizingMode = "AUTO";
    root_child_7.primaryAxisAlignItems = "MIN";
    root_child_7.counterAxisAlignItems = "MIN";
    root_child_7.itemSpacing = 8;
    root_child_7.paddingTop = 8;
    root_child_7.paddingRight = 8;
    root_child_7.paddingBottom = 8;
    root_child_7.paddingLeft = 8;
    root_child_7.itemReverseZIndex = false;
    root_child_7.strokesIncludedInLayout = false;
}
root_child_7.fills = await this.hydratePaints([]);
root_child_7.strokes = await this.hydratePaints([]);
root_child_7.strokeWeight = 1;
root_child_7.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_7) root_child_7.strokeCap = "NONE";
if ("strokeJoin" in root_child_7) root_child_7.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_7) root_child_7.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_7) root_child_7.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_7) root_child_7.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_7) root_child_7.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_7) root_child_7.strokeLeftWeight = 1;
root_child_7.effects = [];
if ("cornerRadius" in root_child_7) root_child_7.cornerRadius = 0;
root.appendChild(root_child_7);
// Child Layout Props
root_child_7.layoutAlign = "STRETCH";
root_child_7.layoutGrow = 0;
applySizeAndTransform(root_child_7, {"width":307,"height":0,"relativeTransform":[[1,0,16],[0,1,694]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":339,"height":694,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

import { BaseComponent, ComponentProps, T2x3 } from "../../BaseComponent";

// SVG Imports
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_25341_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_25341_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25344_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25344_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25361_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25361_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25371_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25371_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_25378_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_25378_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25381_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25381_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25385_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25385_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25393_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25393_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25396_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25396_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Euro2028_Prt_Primary_Logo_FC_OnDark_RGB_1587_25406_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Euro2028_Prt_Primary_Logo_FC_OnDark_RGB_1587_25406_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26040_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26040_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26041_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26041_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26042_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26042_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26043_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26043_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26044_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26044_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26045_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26045_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_26048_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_26048_svg_orig.svg";
import SVG_competitions_2026_no_refactor_for_inspect_assets_icon_UNL_portrait_FCcmyk_onLIGHT_1587_26209_svg_orig from "./assets/competitions_2026_no_refactor_for_inspect_assets_icon_UNL_portrait_FCcmyk_onLIGHT_1587_26209_svg_orig.svg";



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

    if (typeof width === "number" && typeof height === "number" && Number.isFinite(width) && Number.isFinite(height)) {
        const safeWidth = Math.max(width, 0.01);
        const safeHeight = node.type === "LINE" ? 0 : Math.max(height, 0.01);
        const isDegenerateVectorTarget = node.type === "VECTOR" && (safeWidth <= 0.01 || safeHeight <= 0.01);
        const hasDegenerateCurrentVectorBounds =
            node.type === "VECTOR" &&
            (!Number.isFinite(node.width) || !Number.isFinite(node.height) || node.width <= 0.01 || node.height <= 0.01);

        // Vector resize can throw when either source or target bounds are effectively zero.
        if (!isDegenerateVectorTarget && !hasDegenerateCurrentVectorBounds) {
            try {
                node.resize(safeWidth, safeHeight);
            } catch (resizeError) {
                console.warn("Failed to resize node", resizeError);
            }
        }
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


export class competitions_2026_no_refactor_for_inspect extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "competitions_2026";
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
    root.counterAxisSizingMode = "FIXED";
    root.primaryAxisAlignItems = "SPACE_BETWEEN";
    root.counterAxisAlignItems = "CENTER";
    root.itemSpacing = 16;
    if ("counterAxisSpacing" in root) root.counterAxisSpacing = 0;
    if ("layoutWrap" in root) root.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root) root.counterAxisAlignContent = "AUTO";
    root.paddingTop = 1;
    root.paddingRight = 24;
    root.paddingBottom = 1;
    root.paddingLeft = 24;
    root.itemReverseZIndex = false;
    root.strokesIncludedInLayout = false;
    if ("gridRowCount" in root) root.gridRowCount = 0;
    if ("gridColumnCount" in root) root.gridColumnCount = 0;
    if ("gridRowGap" in root) root.gridRowGap = 0;
    if ("gridColumnGap" in root) root.gridColumnGap = 0;
}
root.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.0313725508749485,"g":0.10588235408067703,"b":0.2549019753932953},"boundVariables":{}}]);
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
if ("layoutSizingHorizontal" in root) root.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root) root.layoutSizingVertical = "FIXED";

// Start Child: divider1
const root_child_0 = figma.createRectangle();
root_child_0.name = "divider1";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
root_child_0.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0,"g":0.6274510025978088,"b":0.7882353067398071,"a":0},"position":0,"boundVariables":{}},{"color":{"r":0,"g":0.6274510025978088,"b":0.7882353067398071,"a":1},"position":0.515625,"boundVariables":{}},{"color":{"r":0,"g":0.6274510025978088,"b":0.7882353067398071,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[1,-3.66592910541752e-12,2.1998514121435164e-12],[0,0.00006807611498516053,0.49995914101600647]]}]);
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
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "INHERIT";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":980,"height":1,"relativeTransform":[[1,0,230],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: competitions
const root_child_1 = figma.createFrame();
root_child_1.name = "competitions";
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
    root_child_1.primaryAxisAlignItems = "SPACE_BETWEEN";
    root_child_1.counterAxisAlignItems = "CENTER";
    root_child_1.itemSpacing = 0;
    if ("counterAxisSpacing" in root_child_1) root_child_1.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1) root_child_1.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1) root_child_1.counterAxisAlignContent = "AUTO";
    root_child_1.paddingTop = 0;
    root_child_1.paddingRight = 88;
    root_child_1.paddingBottom = 0;
    root_child_1.paddingLeft = 88;
    root_child_1.itemReverseZIndex = false;
    root_child_1.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1) root_child_1.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1) root_child_1.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1) root_child_1.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1) root_child_1.gridColumnGap = 0;
}
root_child_1.fills = await this.hydratePaints([]);
root_child_1.strokes = await this.hydratePaints([]);
root_child_1.strokeWeight = 0.26538461446762085;
root_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1) root_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1) root_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1) root_child_1.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1) root_child_1.strokeTopWeight = 0.26538461446762085;
if ("strokeRightWeight" in root_child_1) root_child_1.strokeRightWeight = 0.26538461446762085;
if ("strokeBottomWeight" in root_child_1) root_child_1.strokeBottomWeight = 0.26538461446762085;
if ("strokeLeftWeight" in root_child_1) root_child_1.strokeLeftWeight = 0.26538461446762085;
root_child_1.effects = [];
if ("cornerRadius" in root_child_1) root_child_1.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1) root_child_1.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1) root_child_1.layoutSizingVertical = "HUG";

// Start Child: Slot
const root_child_1_child_0 = figma.createFrame();
root_child_1_child_0.name = "Slot";
root_child_1_child_0.visible = true;
root_child_1_child_0.opacity = 1;
root_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_0) root_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0) root_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0) {
    root_child_1_child_0.layoutMode = "VERTICAL";
    root_child_1_child_0.primaryAxisSizingMode = "FIXED";
    root_child_1_child_0.counterAxisSizingMode = "FIXED";
    root_child_1_child_0.primaryAxisAlignItems = "CENTER";
    root_child_1_child_0.counterAxisAlignItems = "CENTER";
    root_child_1_child_0.itemSpacing = 8;
    if ("counterAxisSpacing" in root_child_1_child_0) root_child_1_child_0.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1_child_0) root_child_1_child_0.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1_child_0) root_child_1_child_0.counterAxisAlignContent = "AUTO";
    root_child_1_child_0.paddingTop = 8;
    root_child_1_child_0.paddingRight = 8;
    root_child_1_child_0.paddingBottom = 8;
    root_child_1_child_0.paddingLeft = 8;
    root_child_1_child_0.itemReverseZIndex = false;
    root_child_1_child_0.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1_child_0) root_child_1_child_0.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1_child_0) root_child_1_child_0.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1_child_0) root_child_1_child_0.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1_child_0) root_child_1_child_0.gridColumnGap = 0;
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
if ("layoutSizingHorizontal" in root_child_1_child_0) root_child_1_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_0) root_child_1_child_0.layoutSizingVertical = "FIXED";

// Start Child: UCL
const root_child_1_child_0_child_0 = figma.createFrame();
root_child_1_child_0_child_0.name = "UCL";
root_child_1_child_0_child_0.visible = true;
root_child_1_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_0_child_0) {
    root_child_1_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0.strokeWeight = 0.1404775232076645;
root_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeTopWeight = 0.1404775232076645;
if ("strokeRightWeight" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeRightWeight = 0.1404775232076645;
if ("strokeBottomWeight" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeBottomWeight = 0.1404775232076645;
if ("strokeLeftWeight" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeLeftWeight = 0.1404775232076645;
root_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.layoutSizingVertical = "FIXED";

// Start Child: Vector
const root_child_1_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_25341_svg_orig);
root_child_1_child_0_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_0_child_0_child_0 = figma.flatten([root_child_1_child_0_child_0_child_0_svgContainer]);
root_child_1_child_0_child_0_child_0.name = "Vector";
root_child_1_child_0_child_0_child_0.visible = true;
root_child_1_child_0_child_0_child_0.opacity = 1;
root_child_1_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_0_child_0_child_0.strokeWeight = 0.1404775232076645;
root_child_1_child_0_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_0_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.cornerRadius = 0;
root_child_1_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_0_child_0_child_0, {"width":50.0114,"height":47.6218,"relativeTransform":[[1,0,0.0009],[0,1,0.0003]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_0_child_0_child_0.x = 0.0008593749953433871;
root_child_1_child_0_child_0_child_0.y = 0.00032405208912678063;
root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
// Child Layout Props
root_child_1_child_0_child_0.layoutAlign = "INHERIT";
root_child_1_child_0_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_0_child_0, {"width":50.01,"height":47.6205,"relativeTransform":[[1,0,4.185],[0,1,5.3798]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_0);
// Child Layout Props
root_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_0) root_child_1_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_0) root_child_1_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_0, {"width":58.38,"height":58.38,"relativeTransform":[[1,0,88],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Slot
const root_child_1_child_1 = figma.createFrame();
root_child_1_child_1.name = "Slot";
root_child_1_child_1.visible = true;
root_child_1_child_1.opacity = 1;
root_child_1_child_1.locked = false;
if ("blendMode" in root_child_1_child_1) root_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1) root_child_1_child_1.isMask = false;
if ("maskType" in root_child_1_child_1) root_child_1_child_1.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1) root_child_1_child_1.clipsContent = true;
if ("layoutMode" in root_child_1_child_1) {
    root_child_1_child_1.layoutMode = "VERTICAL";
    root_child_1_child_1.primaryAxisSizingMode = "FIXED";
    root_child_1_child_1.counterAxisSizingMode = "FIXED";
    root_child_1_child_1.primaryAxisAlignItems = "CENTER";
    root_child_1_child_1.counterAxisAlignItems = "CENTER";
    root_child_1_child_1.itemSpacing = 8;
    if ("counterAxisSpacing" in root_child_1_child_1) root_child_1_child_1.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1_child_1) root_child_1_child_1.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1_child_1) root_child_1_child_1.counterAxisAlignContent = "AUTO";
    root_child_1_child_1.paddingTop = 8;
    root_child_1_child_1.paddingRight = 8;
    root_child_1_child_1.paddingBottom = 8;
    root_child_1_child_1.paddingLeft = 8;
    root_child_1_child_1.itemReverseZIndex = false;
    root_child_1_child_1.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1_child_1) root_child_1_child_1.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1_child_1) root_child_1_child_1.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1_child_1) root_child_1_child_1.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1_child_1) root_child_1_child_1.gridColumnGap = 0;
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
if ("layoutSizingHorizontal" in root_child_1_child_1) root_child_1_child_1.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_1) root_child_1_child_1.layoutSizingVertical = "FIXED";

// Start Child: UWCL_Logo_White_RGB
const root_child_1_child_1_child_0 = figma.createFrame();
root_child_1_child_1_child_0.name = "UWCL_Logo_White_RGB";
root_child_1_child_1_child_0.visible = true;
root_child_1_child_1_child_0.opacity = 1;
root_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_1_child_0) {
    root_child_1_child_1_child_0.layoutMode = "NONE";
}
root_child_1_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0.strokeWeight = 0.10123000293970108;
root_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeTopWeight = 0.10123000293970108;
if ("strokeRightWeight" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeRightWeight = 0.10123000293970108;
if ("strokeBottomWeight" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeBottomWeight = 0.10123000293970108;
if ("strokeLeftWeight" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeLeftWeight = 0.10123000293970108;
root_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.layoutSizingVertical = "FIXED";

// Start Child: Group
const root_child_1_child_1_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25344_svg_orig);
root_child_1_child_1_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_1_child_0_child_0 = root_child_1_child_1_child_0_child_0_svgContainer;
root_child_1_child_1_child_0_child_0.name = "Group";
root_child_1_child_1_child_0_child_0.visible = true;
root_child_1_child_1_child_0_child_0.opacity = 1;
root_child_1_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_0) root_child_1_child_1_child_0_child_0.maskType = "ALPHA";
root_child_1_child_1_child_0_child_0.effects = [];
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_0);
applySizeAndTransform(root_child_1_child_1_child_0_child_0, {"width":35.2265,"height":32.7924,"relativeTransform":[[1,0,8.1275],[0,1,0.0004]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_0_child_0.x = 8.12753963470459;
root_child_1_child_1_child_0_child_0.y = 0.00042797307833097875;

// Start Child: Group
const root_child_1_child_1_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25361_svg_orig);
root_child_1_child_1_child_0_child_1_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_1_child_0_child_1 = root_child_1_child_1_child_0_child_1_svgContainer;
root_child_1_child_1_child_0_child_1.name = "Group";
root_child_1_child_1_child_0_child_1.visible = true;
root_child_1_child_1_child_0_child_1.opacity = 1;
root_child_1_child_1_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_1) root_child_1_child_1_child_0_child_1.maskType = "ALPHA";
root_child_1_child_1_child_0_child_1.effects = [];
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_1);
applySizeAndTransform(root_child_1_child_1_child_0_child_1, {"width":43.2885,"height":39.3393,"relativeTransform":[[1,0,0.0005],[0,1,34.5907]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_0_child_1.x = 0.0004587890871334821;
root_child_1_child_1_child_0_child_1.y = 34.59074020385742;

// Start Child: Group
const root_child_1_child_1_child_0_child_2_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25371_svg_orig);
root_child_1_child_1_child_0_child_2_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_1_child_0_child_2 = root_child_1_child_1_child_0_child_2_svgContainer;
root_child_1_child_1_child_0_child_2.name = "Group";
root_child_1_child_1_child_0_child_2.visible = true;
root_child_1_child_1_child_0_child_2.opacity = 1;
root_child_1_child_1_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_2) root_child_1_child_1_child_0_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_2) root_child_1_child_1_child_0_child_2.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_2) root_child_1_child_1_child_0_child_2.maskType = "ALPHA";
root_child_1_child_1_child_0_child_2.effects = [];
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_2);
applySizeAndTransform(root_child_1_child_1_child_0_child_2, {"width":34.7585,"height":45.9254,"relativeTransform":[[1,0,8.5957],[0,1,41.1777]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_1_child_0_child_2.x = 8.595669746398926;
root_child_1_child_1_child_0_child_2.y = 41.17770767211914;

// Start Child: Vector
const root_child_1_child_1_child_0_child_3_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_25378_svg_orig);
root_child_1_child_1_child_0_child_3_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_1_child_0_child_3 = figma.flatten([root_child_1_child_1_child_0_child_3_svgContainer]);
root_child_1_child_1_child_0_child_3.name = "Vector";
root_child_1_child_1_child_0_child_3.visible = true;
root_child_1_child_1_child_0_child_3.opacity = 1;
root_child_1_child_1_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_1_child_0_child_3) root_child_1_child_1_child_0_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_1_child_0_child_3) root_child_1_child_1_child_0_child_3.isMask = false;
if ("maskType" in root_child_1_child_1_child_0_child_3) root_child_1_child_1_child_0_child_3.maskType = "ALPHA";
root_child_1_child_1_child_0_child_3.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_1_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_1_child_0_child_3.strokeWeight = 0.10123000293970108;
root_child_1_child_1_child_0_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_1_child_0_child_3) root_child_1_child_1_child_0_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_1_child_0_child_3) root_child_1_child_1_child_0_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_1_child_0_child_3) root_child_1_child_1_child_0_child_3.strokeMiterLimit = 4;
root_child_1_child_1_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_1_child_0_child_3) root_child_1_child_1_child_0_child_3.cornerRadius = 0;
root_child_1_child_1_child_0.appendChild(root_child_1_child_1_child_0_child_3);
applySizeAndTransform(root_child_1_child_1_child_0_child_3, {"width":1.3717,"height":1.3585,"relativeTransform":[[1,0,35.3771],[0,1,41.2122]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_1_child_0_child_3.x = 35.37713623046875;
root_child_1_child_1_child_0_child_3.y = 41.21221160888672;
root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
// Child Layout Props
root_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_1_child_1_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_1_child_0, {"width":43.29,"height":45.925,"relativeTransform":[[1,0,7.545],[0,1,6.2275]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_1);
// Child Layout Props
root_child_1_child_1.layoutAlign = "INHERIT";
root_child_1_child_1.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_1) root_child_1_child_1.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_1) root_child_1_child_1.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_1, {"width":58.38,"height":58.38,"relativeTransform":[[1,0,194.5172],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Slot
const root_child_1_child_2 = figma.createFrame();
root_child_1_child_2.name = "Slot";
root_child_1_child_2.visible = true;
root_child_1_child_2.opacity = 1;
root_child_1_child_2.locked = false;
if ("blendMode" in root_child_1_child_2) root_child_1_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2) root_child_1_child_2.isMask = false;
if ("maskType" in root_child_1_child_2) root_child_1_child_2.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2) root_child_1_child_2.clipsContent = true;
if ("layoutMode" in root_child_1_child_2) {
    root_child_1_child_2.layoutMode = "VERTICAL";
    root_child_1_child_2.primaryAxisSizingMode = "FIXED";
    root_child_1_child_2.counterAxisSizingMode = "FIXED";
    root_child_1_child_2.primaryAxisAlignItems = "CENTER";
    root_child_1_child_2.counterAxisAlignItems = "CENTER";
    root_child_1_child_2.itemSpacing = 8;
    if ("counterAxisSpacing" in root_child_1_child_2) root_child_1_child_2.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1_child_2) root_child_1_child_2.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1_child_2) root_child_1_child_2.counterAxisAlignContent = "AUTO";
    root_child_1_child_2.paddingTop = 8;
    root_child_1_child_2.paddingRight = 8;
    root_child_1_child_2.paddingBottom = 8;
    root_child_1_child_2.paddingLeft = 8;
    root_child_1_child_2.itemReverseZIndex = false;
    root_child_1_child_2.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1_child_2) root_child_1_child_2.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1_child_2) root_child_1_child_2.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1_child_2) root_child_1_child_2.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1_child_2) root_child_1_child_2.gridColumnGap = 0;
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
if ("layoutSizingHorizontal" in root_child_1_child_2) root_child_1_child_2.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_2) root_child_1_child_2.layoutSizingVertical = "FIXED";

// Start Child: UEL
const root_child_1_child_2_child_0 = figma.createFrame();
root_child_1_child_2_child_0.name = "UEL";
root_child_1_child_2_child_0.visible = true;
root_child_1_child_2_child_0.opacity = 1;
root_child_1_child_2_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_2_child_0) {
    root_child_1_child_2_child_0.layoutMode = "NONE";
}
root_child_1_child_2_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_2_child_0.strokeWeight = 0.054927416145801544;
root_child_1_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeTopWeight = 0.054927416145801544;
if ("strokeRightWeight" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeRightWeight = 0.054927416145801544;
if ("strokeBottomWeight" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeBottomWeight = 0.054927416145801544;
if ("strokeLeftWeight" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.strokeLeftWeight = 0.054927416145801544;
root_child_1_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.layoutSizingVertical = "FIXED";

// Start Child: Group
const root_child_1_child_2_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25381_svg_orig);
root_child_1_child_2_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_2_child_0_child_0 = root_child_1_child_2_child_0_child_0_svgContainer;
root_child_1_child_2_child_0_child_0.name = "Group";
root_child_1_child_2_child_0_child_0.visible = true;
root_child_1_child_2_child_0_child_0.opacity = 1;
root_child_1_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_2_child_0_child_0) root_child_1_child_2_child_0_child_0.maskType = "ALPHA";
root_child_1_child_2_child_0_child_0.effects = [];
root_child_1_child_2_child_0.appendChild(root_child_1_child_2_child_0_child_0);
applySizeAndTransform(root_child_1_child_2_child_0_child_0, {"width":25.901,"height":23.5889,"relativeTransform":[[1,0,5.1153],[0,1,0.0002]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0_child_0.x = 5.115259170532227;
root_child_1_child_2_child_0_child_0.y = 0.00016747313202358782;

// Start Child: Group
const root_child_1_child_2_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25385_svg_orig);
root_child_1_child_2_child_0_child_1_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_2_child_0_child_1 = root_child_1_child_2_child_0_child_1_svgContainer;
root_child_1_child_2_child_0_child_1.name = "Group";
root_child_1_child_2_child_0_child_1.visible = true;
root_child_1_child_2_child_0_child_1.opacity = 1;
root_child_1_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_2_child_0_child_1) root_child_1_child_2_child_0_child_1.maskType = "ALPHA";
root_child_1_child_2_child_0_child_1.effects = [];
root_child_1_child_2_child_0.appendChild(root_child_1_child_2_child_0_child_1);
applySizeAndTransform(root_child_1_child_2_child_0_child_1, {"width":31.1409,"height":45.6218,"relativeTransform":[[1,0,0.0014],[0,1,25.6908]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_2_child_0_child_1.x = 0.0014416503254324198;
root_child_1_child_2_child_0_child_1.y = 25.69080352783203;
root_child_1_child_2.appendChild(root_child_1_child_2_child_0);
// Child Layout Props
root_child_1_child_2_child_0.layoutAlign = "INHERIT";
root_child_1_child_2_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_2_child_0) root_child_1_child_2_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_2_child_0, {"width":31.14,"height":45.62,"relativeTransform":[[1,0,13.62],[0,1,6.38]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_2);
// Child Layout Props
root_child_1_child_2.layoutAlign = "INHERIT";
root_child_1_child_2.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_2) root_child_1_child_2.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_2) root_child_1_child_2.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_2, {"width":58.38,"height":58.38,"relativeTransform":[[1,0,301.0343],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Slot
const root_child_1_child_3 = figma.createFrame();
root_child_1_child_3.name = "Slot";
root_child_1_child_3.visible = true;
root_child_1_child_3.opacity = 1;
root_child_1_child_3.locked = false;
if ("blendMode" in root_child_1_child_3) root_child_1_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3) root_child_1_child_3.isMask = false;
if ("maskType" in root_child_1_child_3) root_child_1_child_3.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_3) root_child_1_child_3.clipsContent = true;
if ("layoutMode" in root_child_1_child_3) {
    root_child_1_child_3.layoutMode = "VERTICAL";
    root_child_1_child_3.primaryAxisSizingMode = "FIXED";
    root_child_1_child_3.counterAxisSizingMode = "FIXED";
    root_child_1_child_3.primaryAxisAlignItems = "CENTER";
    root_child_1_child_3.counterAxisAlignItems = "CENTER";
    root_child_1_child_3.itemSpacing = 8;
    if ("counterAxisSpacing" in root_child_1_child_3) root_child_1_child_3.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1_child_3) root_child_1_child_3.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1_child_3) root_child_1_child_3.counterAxisAlignContent = "AUTO";
    root_child_1_child_3.paddingTop = 8;
    root_child_1_child_3.paddingRight = 8;
    root_child_1_child_3.paddingBottom = 8;
    root_child_1_child_3.paddingLeft = 8;
    root_child_1_child_3.itemReverseZIndex = false;
    root_child_1_child_3.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1_child_3) root_child_1_child_3.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1_child_3) root_child_1_child_3.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1_child_3) root_child_1_child_3.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1_child_3) root_child_1_child_3.gridColumnGap = 0;
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
if ("layoutSizingHorizontal" in root_child_1_child_3) root_child_1_child_3.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_3) root_child_1_child_3.layoutSizingVertical = "FIXED";

// Start Child: UECL
const root_child_1_child_3_child_0 = figma.createFrame();
root_child_1_child_3_child_0.name = "UECL";
root_child_1_child_3_child_0.visible = true;
root_child_1_child_3_child_0.opacity = 1;
root_child_1_child_3_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_3_child_0) {
    root_child_1_child_3_child_0.layoutMode = "NONE";
}
root_child_1_child_3_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_3_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_3_child_0.strokeWeight = 0.0559319332242012;
root_child_1_child_3_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeTopWeight = 0.0559319332242012;
if ("strokeRightWeight" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeRightWeight = 0.0559319332242012;
if ("strokeBottomWeight" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeBottomWeight = 0.0559319332242012;
if ("strokeLeftWeight" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.strokeLeftWeight = 0.0559319332242012;
root_child_1_child_3_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.layoutSizingVertical = "FIXED";

// Start Child: Group
const root_child_1_child_3_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25393_svg_orig);
root_child_1_child_3_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_3_child_0_child_0 = root_child_1_child_3_child_0_child_0_svgContainer;
root_child_1_child_3_child_0_child_0.name = "Group";
root_child_1_child_3_child_0_child_0.visible = true;
root_child_1_child_3_child_0_child_0.opacity = 1;
root_child_1_child_3_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_3_child_0_child_0) root_child_1_child_3_child_0_child_0.maskType = "ALPHA";
root_child_1_child_3_child_0_child_0.effects = [];
root_child_1_child_3_child_0.appendChild(root_child_1_child_3_child_0_child_0);
applySizeAndTransform(root_child_1_child_3_child_0_child_0, {"width":33.6435,"height":23.1871,"relativeTransform":[[1,0,12.2393],[0,1,-0.0004]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_3_child_0_child_0.x = 12.23934555053711;
root_child_1_child_3_child_0_child_0.y = -0.00042199372546747327;

// Start Child: Group
const root_child_1_child_3_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_25396_svg_orig);
root_child_1_child_3_child_0_child_1_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_3_child_0_child_1 = root_child_1_child_3_child_0_child_1_svgContainer;
root_child_1_child_3_child_0_child_1.name = "Group";
root_child_1_child_3_child_0_child_1.visible = true;
root_child_1_child_3_child_0_child_1.opacity = 1;
root_child_1_child_3_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_3_child_0_child_1) root_child_1_child_3_child_0_child_1.maskType = "ALPHA";
root_child_1_child_3_child_0_child_1.effects = [];
root_child_1_child_3_child_0.appendChild(root_child_1_child_3_child_0_child_1);
applySizeAndTransform(root_child_1_child_3_child_0_child_1, {"width":45.8194,"height":45.6212,"relativeTransform":[[1,0,-0.0005],[0,1,25.3278]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_3_child_0_child_1.x = -0.0005456543294712901;
root_child_1_child_3_child_0_child_1.y = 25.32778549194336;
root_child_1_child_3.appendChild(root_child_1_child_3_child_0);
// Child Layout Props
root_child_1_child_3_child_0.layoutAlign = "INHERIT";
root_child_1_child_3_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_3_child_0) root_child_1_child_3_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_3_child_0, {"width":45.82,"height":45.622,"relativeTransform":[[1,0,6.28],[0,1,6.379]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_3);
// Child Layout Props
root_child_1_child_3.layoutAlign = "INHERIT";
root_child_1_child_3.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_3) root_child_1_child_3.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_3) root_child_1_child_3.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_3, {"width":58.38,"height":58.38,"relativeTransform":[[1,0,407.5515],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Slot
const root_child_1_child_4 = figma.createFrame();
root_child_1_child_4.name = "Slot";
root_child_1_child_4.visible = true;
root_child_1_child_4.opacity = 1;
root_child_1_child_4.locked = false;
if ("blendMode" in root_child_1_child_4) root_child_1_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4) root_child_1_child_4.isMask = false;
if ("maskType" in root_child_1_child_4) root_child_1_child_4.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_4) root_child_1_child_4.clipsContent = true;
if ("layoutMode" in root_child_1_child_4) {
    root_child_1_child_4.layoutMode = "VERTICAL";
    root_child_1_child_4.primaryAxisSizingMode = "FIXED";
    root_child_1_child_4.counterAxisSizingMode = "FIXED";
    root_child_1_child_4.primaryAxisAlignItems = "CENTER";
    root_child_1_child_4.counterAxisAlignItems = "CENTER";
    root_child_1_child_4.itemSpacing = 8;
    if ("counterAxisSpacing" in root_child_1_child_4) root_child_1_child_4.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1_child_4) root_child_1_child_4.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1_child_4) root_child_1_child_4.counterAxisAlignContent = "AUTO";
    root_child_1_child_4.paddingTop = 8;
    root_child_1_child_4.paddingRight = 8;
    root_child_1_child_4.paddingBottom = 8;
    root_child_1_child_4.paddingLeft = 8;
    root_child_1_child_4.itemReverseZIndex = false;
    root_child_1_child_4.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1_child_4) root_child_1_child_4.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1_child_4) root_child_1_child_4.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1_child_4) root_child_1_child_4.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1_child_4) root_child_1_child_4.gridColumnGap = 0;
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
if ("layoutSizingHorizontal" in root_child_1_child_4) root_child_1_child_4.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_4) root_child_1_child_4.layoutSizingVertical = "FIXED";

// Start Child: Euro2028_Logo
const root_child_1_child_4_child_0 = figma.createFrame();
root_child_1_child_4_child_0.name = "Euro2028_Logo";
root_child_1_child_4_child_0.visible = true;
root_child_1_child_4_child_0.opacity = 1;
root_child_1_child_4_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_4_child_0) {
    root_child_1_child_4_child_0.layoutMode = "NONE";
}
root_child_1_child_4_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_4_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_0.strokeWeight = 0.06324214488267899;
root_child_1_child_4_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeTopWeight = 0.06324214488267899;
if ("strokeRightWeight" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeRightWeight = 0.06324214488267899;
if ("strokeBottomWeight" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeBottomWeight = 0.06324214488267899;
if ("strokeLeftWeight" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.strokeLeftWeight = 0.06324214488267899;
root_child_1_child_4_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.layoutSizingVertical = "FIXED";

// Start Child: Euro2028_Prt_OnDark_Primary_RGB
const root_child_1_child_4_child_0_child_0 = figma.createFrame();
root_child_1_child_4_child_0_child_0.name = "Euro2028_Prt_OnDark_Primary_RGB";
root_child_1_child_4_child_0_child_0.visible = true;
root_child_1_child_4_child_0_child_0.opacity = 1;
root_child_1_child_4_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_4_child_0_child_0) {
    root_child_1_child_4_child_0_child_0.layoutMode = "NONE";
}
root_child_1_child_4_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_4_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_4_child_0_child_0.strokeWeight = 0.06324214488267899;
root_child_1_child_4_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeTopWeight = 0.06324214488267899;
if ("strokeRightWeight" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeRightWeight = 0.06324214488267899;
if ("strokeBottomWeight" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeBottomWeight = 0.06324214488267899;
if ("strokeLeftWeight" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.strokeLeftWeight = 0.06324214488267899;
root_child_1_child_4_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_4_child_0_child_0) root_child_1_child_4_child_0_child_0.layoutSizingVertical = "FIXED";

// Start Child: Euro2028_Prt_Primary Logo_FC_OnDark_RGB
const root_child_1_child_4_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Euro2028_Prt_Primary_Logo_FC_OnDark_RGB_1587_25406_svg_orig);
root_child_1_child_4_child_0_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_4_child_0_child_0_child_0 = root_child_1_child_4_child_0_child_0_child_0_svgContainer;
root_child_1_child_4_child_0_child_0_child_0.name = "Euro2028_Prt_Primary Logo_FC_OnDark_RGB";
root_child_1_child_4_child_0_child_0_child_0.visible = true;
root_child_1_child_4_child_0_child_0_child_0.opacity = 1;
root_child_1_child_4_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_4_child_0_child_0_child_0) root_child_1_child_4_child_0_child_0_child_0.maskType = "ALPHA";
root_child_1_child_4_child_0_child_0_child_0.effects = [];
root_child_1_child_4_child_0_child_0.appendChild(root_child_1_child_4_child_0_child_0_child_0);
applySizeAndTransform(root_child_1_child_4_child_0_child_0_child_0, {"width":28.9204,"height":48.8112,"relativeTransform":[[1,0,-0.0008],[0,1,-0.0005]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_4_child_0_child_0_child_0.x = -0.0007838441524654627;
root_child_1_child_4_child_0_child_0_child_0.y = -0.00046024267794564366;
root_child_1_child_4_child_0.appendChild(root_child_1_child_4_child_0_child_0);
applySizeAndTransform(root_child_1_child_4_child_0_child_0, {"width":28.92,"height":48.8109,"relativeTransform":[[1,0,-0.0005],[0,1,-0.0005]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_4_child_0_child_0.x = -0.0005426025600172579;
root_child_1_child_4_child_0_child_0.y = -0.00046024267794564366;
root_child_1_child_4.appendChild(root_child_1_child_4_child_0);
// Child Layout Props
root_child_1_child_4_child_0.layoutAlign = "INHERIT";
root_child_1_child_4_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_4_child_0) root_child_1_child_4_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_4_child_0, {"width":28.92,"height":48.8109,"relativeTransform":[[1,0,14.73],[0,1,4.7845]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_4);
// Child Layout Props
root_child_1_child_4.layoutAlign = "INHERIT";
root_child_1_child_4.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_4) root_child_1_child_4.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_4) root_child_1_child_4.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_4, {"width":58.38,"height":58.38,"relativeTransform":[[1,0,514.0686],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Slot
const root_child_1_child_5 = figma.createFrame();
root_child_1_child_5.name = "Slot";
root_child_1_child_5.visible = true;
root_child_1_child_5.opacity = 1;
root_child_1_child_5.locked = false;
if ("blendMode" in root_child_1_child_5) root_child_1_child_5.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_5) root_child_1_child_5.isMask = false;
if ("maskType" in root_child_1_child_5) root_child_1_child_5.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_5) root_child_1_child_5.clipsContent = true;
if ("layoutMode" in root_child_1_child_5) {
    root_child_1_child_5.layoutMode = "VERTICAL";
    root_child_1_child_5.primaryAxisSizingMode = "FIXED";
    root_child_1_child_5.counterAxisSizingMode = "FIXED";
    root_child_1_child_5.primaryAxisAlignItems = "CENTER";
    root_child_1_child_5.counterAxisAlignItems = "CENTER";
    root_child_1_child_5.itemSpacing = 8;
    if ("counterAxisSpacing" in root_child_1_child_5) root_child_1_child_5.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1_child_5) root_child_1_child_5.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1_child_5) root_child_1_child_5.counterAxisAlignContent = "AUTO";
    root_child_1_child_5.paddingTop = 8;
    root_child_1_child_5.paddingRight = 8;
    root_child_1_child_5.paddingBottom = 8;
    root_child_1_child_5.paddingLeft = 8;
    root_child_1_child_5.itemReverseZIndex = false;
    root_child_1_child_5.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1_child_5) root_child_1_child_5.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1_child_5) root_child_1_child_5.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1_child_5) root_child_1_child_5.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1_child_5) root_child_1_child_5.gridColumnGap = 0;
}
root_child_1_child_5.fills = await this.hydratePaints([]);
root_child_1_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_5.strokeWeight = 1;
root_child_1_child_5.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_5) root_child_1_child_5.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_5) root_child_1_child_5.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_5) root_child_1_child_5.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_5) root_child_1_child_5.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_5) root_child_1_child_5.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_5) root_child_1_child_5.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_5) root_child_1_child_5.strokeLeftWeight = 1;
root_child_1_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_5) root_child_1_child_5.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_5) root_child_1_child_5.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_5) root_child_1_child_5.layoutSizingVertical = "FIXED";

// Start Child: WEURO
const root_child_1_child_5_child_0 = figma.createFrame();
root_child_1_child_5_child_0.name = "WEURO";
root_child_1_child_5_child_0.visible = true;
root_child_1_child_5_child_0.opacity = 1;
root_child_1_child_5_child_0.locked = false;
if ("blendMode" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.isMask = false;
if ("maskType" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.clipsContent = false;
if ("layoutMode" in root_child_1_child_5_child_0) {
    root_child_1_child_5_child_0.layoutMode = "NONE";
}
root_child_1_child_5_child_0.fills = await this.hydratePaints([]);
root_child_1_child_5_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_5_child_0.strokeWeight = 0.09451522678136826;
root_child_1_child_5_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.strokeTopWeight = 0.09451522678136826;
if ("strokeRightWeight" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.strokeRightWeight = 0.09451522678136826;
if ("strokeBottomWeight" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.strokeBottomWeight = 0.09451522678136826;
if ("strokeLeftWeight" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.strokeLeftWeight = 0.09451522678136826;
root_child_1_child_5_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.layoutSizingVertical = "FIXED";

// Start Child: Vector
const root_child_1_child_5_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26040_svg_orig);
root_child_1_child_5_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_5_child_0_child_0 = figma.flatten([root_child_1_child_5_child_0_child_0_svgContainer]);
root_child_1_child_5_child_0_child_0.name = "Vector";
root_child_1_child_5_child_0_child_0.visible = true;
root_child_1_child_5_child_0_child_0.opacity = 1;
root_child_1_child_5_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_5_child_0_child_0) root_child_1_child_5_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_5_child_0_child_0) root_child_1_child_5_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_5_child_0_child_0) root_child_1_child_5_child_0_child_0.maskType = "ALPHA";
root_child_1_child_5_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9490196108818054,"g":0.21176470816135406,"b":0.3529411852359772},"boundVariables":{}}]);
root_child_1_child_5_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_5_child_0_child_0.strokeWeight = 0.09451522678136826;
root_child_1_child_5_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_5_child_0_child_0) root_child_1_child_5_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_5_child_0_child_0) root_child_1_child_5_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_5_child_0_child_0) root_child_1_child_5_child_0_child_0.strokeMiterLimit = 4;
root_child_1_child_5_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_5_child_0_child_0) root_child_1_child_5_child_0_child_0.cornerRadius = 0;
root_child_1_child_5_child_0.appendChild(root_child_1_child_5_child_0_child_0);
applySizeAndTransform(root_child_1_child_5_child_0_child_0, {"width":15.2245,"height":7.0953,"relativeTransform":[[1,0,12.2585],[0,1,20.897]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_5_child_0_child_0.x = 12.258543968200684;
root_child_1_child_5_child_0_child_0.y = 20.896961212158203;

// Start Child: Vector
const root_child_1_child_5_child_0_child_1_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26041_svg_orig);
root_child_1_child_5_child_0_child_1_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_5_child_0_child_1 = figma.flatten([root_child_1_child_5_child_0_child_1_svgContainer]);
root_child_1_child_5_child_0_child_1.name = "Vector";
root_child_1_child_5_child_0_child_1.visible = true;
root_child_1_child_5_child_0_child_1.opacity = 1;
root_child_1_child_5_child_0_child_1.locked = false;
if ("blendMode" in root_child_1_child_5_child_0_child_1) root_child_1_child_5_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_5_child_0_child_1) root_child_1_child_5_child_0_child_1.isMask = false;
if ("maskType" in root_child_1_child_5_child_0_child_1) root_child_1_child_5_child_0_child_1.maskType = "ALPHA";
root_child_1_child_5_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3686274588108063,"g":0.7686274647712708,"b":0.9058823585510254},"boundVariables":{}}]);
root_child_1_child_5_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_1_child_5_child_0_child_1.strokeWeight = 0.09451522678136826;
root_child_1_child_5_child_0_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_5_child_0_child_1) root_child_1_child_5_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_5_child_0_child_1) root_child_1_child_5_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_5_child_0_child_1) root_child_1_child_5_child_0_child_1.strokeMiterLimit = 4;
root_child_1_child_5_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_1_child_5_child_0_child_1) root_child_1_child_5_child_0_child_1.cornerRadius = 0;
root_child_1_child_5_child_0.appendChild(root_child_1_child_5_child_0_child_1);
applySizeAndTransform(root_child_1_child_5_child_0_child_1, {"width":23.1156,"height":4.2258,"relativeTransform":[[1,0,8.3011],[0,1,27.9582]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_5_child_0_child_1.x = 8.301087379455566;
root_child_1_child_5_child_0_child_1.y = 27.958189010620117;

// Start Child: Vector
const root_child_1_child_5_child_0_child_2_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26042_svg_orig);
root_child_1_child_5_child_0_child_2_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_5_child_0_child_2 = figma.flatten([root_child_1_child_5_child_0_child_2_svgContainer]);
root_child_1_child_5_child_0_child_2.name = "Vector";
root_child_1_child_5_child_0_child_2.visible = true;
root_child_1_child_5_child_0_child_2.opacity = 1;
root_child_1_child_5_child_0_child_2.locked = false;
if ("blendMode" in root_child_1_child_5_child_0_child_2) root_child_1_child_5_child_0_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_5_child_0_child_2) root_child_1_child_5_child_0_child_2.isMask = false;
if ("maskType" in root_child_1_child_5_child_0_child_2) root_child_1_child_5_child_0_child_2.maskType = "ALPHA";
root_child_1_child_5_child_0_child_2.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3686274588108063,"g":0.7686274647712708,"b":0.9058823585510254},"boundVariables":{}}]);
root_child_1_child_5_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_1_child_5_child_0_child_2.strokeWeight = 0.09451522678136826;
root_child_1_child_5_child_0_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_5_child_0_child_2) root_child_1_child_5_child_0_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_5_child_0_child_2) root_child_1_child_5_child_0_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_5_child_0_child_2) root_child_1_child_5_child_0_child_2.strokeMiterLimit = 4;
root_child_1_child_5_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_1_child_5_child_0_child_2) root_child_1_child_5_child_0_child_2.cornerRadius = 0;
root_child_1_child_5_child_0.appendChild(root_child_1_child_5_child_0_child_2);
applySizeAndTransform(root_child_1_child_5_child_0_child_2, {"width":10.322,"height":21.0618,"relativeTransform":[[1,0,15.2991],[0,1,-0.0003]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_5_child_0_child_2.x = 15.299091339111328;
root_child_1_child_5_child_0_child_2.y = -0.00031921357731334865;

// Start Child: Vector
const root_child_1_child_5_child_0_child_3_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26043_svg_orig);
root_child_1_child_5_child_0_child_3_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_5_child_0_child_3 = figma.flatten([root_child_1_child_5_child_0_child_3_svgContainer]);
root_child_1_child_5_child_0_child_3.name = "Vector";
root_child_1_child_5_child_0_child_3.visible = true;
root_child_1_child_5_child_0_child_3.opacity = 1;
root_child_1_child_5_child_0_child_3.locked = false;
if ("blendMode" in root_child_1_child_5_child_0_child_3) root_child_1_child_5_child_0_child_3.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_5_child_0_child_3) root_child_1_child_5_child_0_child_3.isMask = false;
if ("maskType" in root_child_1_child_5_child_0_child_3) root_child_1_child_5_child_0_child_3.maskType = "ALPHA";
root_child_1_child_5_child_0_child_3.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9490196108818054,"g":0.21176470816135406,"b":0.3529411852359772},"boundVariables":{}}]);
root_child_1_child_5_child_0_child_3.strokes = await this.hydratePaints([]);
root_child_1_child_5_child_0_child_3.strokeWeight = 0.09451522678136826;
root_child_1_child_5_child_0_child_3.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_5_child_0_child_3) root_child_1_child_5_child_0_child_3.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_5_child_0_child_3) root_child_1_child_5_child_0_child_3.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_5_child_0_child_3) root_child_1_child_5_child_0_child_3.strokeMiterLimit = 4;
root_child_1_child_5_child_0_child_3.effects = [];
if ("cornerRadius" in root_child_1_child_5_child_0_child_3) root_child_1_child_5_child_0_child_3.cornerRadius = 0;
root_child_1_child_5_child_0.appendChild(root_child_1_child_5_child_0_child_3);
applySizeAndTransform(root_child_1_child_5_child_0_child_3, {"width":22.7404,"height":20.5259,"relativeTransform":[[1,0,8.4997],[0,1,1.3522]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_5_child_0_child_3.x = 8.499717712402344;
root_child_1_child_5_child_0_child_3.y = 1.3521530628204346;

// Start Child: Vector
const root_child_1_child_5_child_0_child_4_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26044_svg_orig);
root_child_1_child_5_child_0_child_4_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_5_child_0_child_4 = figma.flatten([root_child_1_child_5_child_0_child_4_svgContainer]);
root_child_1_child_5_child_0_child_4.name = "Vector";
root_child_1_child_5_child_0_child_4.visible = true;
root_child_1_child_5_child_0_child_4.opacity = 1;
root_child_1_child_5_child_0_child_4.locked = false;
if ("blendMode" in root_child_1_child_5_child_0_child_4) root_child_1_child_5_child_0_child_4.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_5_child_0_child_4) root_child_1_child_5_child_0_child_4.isMask = false;
if ("maskType" in root_child_1_child_5_child_0_child_4) root_child_1_child_5_child_0_child_4.maskType = "ALPHA";
root_child_1_child_5_child_0_child_4.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3686274588108063,"g":0.7686274647712708,"b":0.9058823585510254},"boundVariables":{}}]);
root_child_1_child_5_child_0_child_4.strokes = await this.hydratePaints([]);
root_child_1_child_5_child_0_child_4.strokeWeight = 0.09451522678136826;
root_child_1_child_5_child_0_child_4.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_5_child_0_child_4) root_child_1_child_5_child_0_child_4.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_5_child_0_child_4) root_child_1_child_5_child_0_child_4.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_5_child_0_child_4) root_child_1_child_5_child_0_child_4.strokeMiterLimit = 4;
root_child_1_child_5_child_0_child_4.effects = [];
if ("cornerRadius" in root_child_1_child_5_child_0_child_4) root_child_1_child_5_child_0_child_4.cornerRadius = 0;
root_child_1_child_5_child_0.appendChild(root_child_1_child_5_child_0_child_4);
applySizeAndTransform(root_child_1_child_5_child_0_child_4, {"width":40.25,"height":11.6301,"relativeTransform":[[1,0,0.0009],[0,1,31.9817]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_5_child_0_child_4.x = 0.00091552734375;
root_child_1_child_5_child_0_child_4.y = 31.981733322143555;

// Start Child: Vector
const root_child_1_child_5_child_0_child_5_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Vector_1587_26045_svg_orig);
root_child_1_child_5_child_0_child_5_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_5_child_0_child_5 = figma.flatten([root_child_1_child_5_child_0_child_5_svgContainer]);
root_child_1_child_5_child_0_child_5.name = "Vector";
root_child_1_child_5_child_0_child_5.visible = true;
root_child_1_child_5_child_0_child_5.opacity = 1;
root_child_1_child_5_child_0_child_5.locked = false;
if ("blendMode" in root_child_1_child_5_child_0_child_5) root_child_1_child_5_child_0_child_5.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_5_child_0_child_5) root_child_1_child_5_child_0_child_5.isMask = false;
if ("maskType" in root_child_1_child_5_child_0_child_5) root_child_1_child_5_child_0_child_5.maskType = "ALPHA";
root_child_1_child_5_child_0_child_5.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3686274588108063,"g":0.7686274647712708,"b":0.9058823585510254},"boundVariables":{}}]);
root_child_1_child_5_child_0_child_5.strokes = await this.hydratePaints([]);
root_child_1_child_5_child_0_child_5.strokeWeight = 0.09451522678136826;
root_child_1_child_5_child_0_child_5.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_5_child_0_child_5) root_child_1_child_5_child_0_child_5.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_5_child_0_child_5) root_child_1_child_5_child_0_child_5.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_5_child_0_child_5) root_child_1_child_5_child_0_child_5.strokeMiterLimit = 4;
root_child_1_child_5_child_0_child_5.effects = [];
if ("cornerRadius" in root_child_1_child_5_child_0_child_5) root_child_1_child_5_child_0_child_5.cornerRadius = 0;
root_child_1_child_5_child_0.appendChild(root_child_1_child_5_child_0_child_5);
applySizeAndTransform(root_child_1_child_5_child_0_child_5, {"width":2.1559,"height":1.1937,"relativeTransform":[[1,0,28.1617],[0,1,22.0623]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO","constraints":{"horizontal":"SCALE","vertical":"SCALE"}});
root_child_1_child_5_child_0_child_5.x = 28.161653518676758;
root_child_1_child_5_child_0_child_5.y = 22.062341690063477;
root_child_1_child_5.appendChild(root_child_1_child_5_child_0);
// Child Layout Props
root_child_1_child_5_child_0.layoutAlign = "INHERIT";
root_child_1_child_5_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_5_child_0) root_child_1_child_5_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_5_child_0, {"width":40.25,"height":43.6121,"relativeTransform":[[1,0,9.065],[0,1,7.3839]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_5);
// Child Layout Props
root_child_1_child_5.layoutAlign = "INHERIT";
root_child_1_child_5.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_5) root_child_1_child_5.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_5) root_child_1_child_5.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_5, {"width":58.38,"height":58.38,"relativeTransform":[[1,0,620.5858],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Slot
const root_child_1_child_6 = figma.createFrame();
root_child_1_child_6.name = "Slot";
root_child_1_child_6.visible = true;
root_child_1_child_6.opacity = 1;
root_child_1_child_6.locked = false;
if ("blendMode" in root_child_1_child_6) root_child_1_child_6.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_6) root_child_1_child_6.isMask = false;
if ("maskType" in root_child_1_child_6) root_child_1_child_6.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_6) root_child_1_child_6.clipsContent = true;
if ("layoutMode" in root_child_1_child_6) {
    root_child_1_child_6.layoutMode = "VERTICAL";
    root_child_1_child_6.primaryAxisSizingMode = "FIXED";
    root_child_1_child_6.counterAxisSizingMode = "FIXED";
    root_child_1_child_6.primaryAxisAlignItems = "CENTER";
    root_child_1_child_6.counterAxisAlignItems = "CENTER";
    root_child_1_child_6.itemSpacing = 8;
    if ("counterAxisSpacing" in root_child_1_child_6) root_child_1_child_6.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1_child_6) root_child_1_child_6.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1_child_6) root_child_1_child_6.counterAxisAlignContent = "AUTO";
    root_child_1_child_6.paddingTop = 8;
    root_child_1_child_6.paddingRight = 8;
    root_child_1_child_6.paddingBottom = 8;
    root_child_1_child_6.paddingLeft = 8;
    root_child_1_child_6.itemReverseZIndex = false;
    root_child_1_child_6.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1_child_6) root_child_1_child_6.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1_child_6) root_child_1_child_6.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1_child_6) root_child_1_child_6.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1_child_6) root_child_1_child_6.gridColumnGap = 0;
}
root_child_1_child_6.fills = await this.hydratePaints([]);
root_child_1_child_6.strokes = await this.hydratePaints([]);
root_child_1_child_6.strokeWeight = 1;
root_child_1_child_6.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_6) root_child_1_child_6.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_6) root_child_1_child_6.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_6) root_child_1_child_6.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_6) root_child_1_child_6.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_6) root_child_1_child_6.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_6) root_child_1_child_6.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_6) root_child_1_child_6.strokeLeftWeight = 1;
root_child_1_child_6.effects = [];
if ("cornerRadius" in root_child_1_child_6) root_child_1_child_6.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_6) root_child_1_child_6.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_6) root_child_1_child_6.layoutSizingVertical = "FIXED";

// Start Child: EQ
const root_child_1_child_6_child_0 = figma.createFrame();
root_child_1_child_6_child_0.name = "EQ";
root_child_1_child_6_child_0.visible = true;
root_child_1_child_6_child_0.opacity = 1;
root_child_1_child_6_child_0.locked = false;
if ("blendMode" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.isMask = false;
if ("maskType" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_6_child_0) {
    root_child_1_child_6_child_0.layoutMode = "NONE";
}
root_child_1_child_6_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_6_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_6_child_0.strokeWeight = 0.07352915406227112;
root_child_1_child_6_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.strokeTopWeight = 0.07352915406227112;
if ("strokeRightWeight" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.strokeRightWeight = 0.07352915406227112;
if ("strokeBottomWeight" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.strokeBottomWeight = 0.07352915406227112;
if ("strokeLeftWeight" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.strokeLeftWeight = 0.07352915406227112;
root_child_1_child_6_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.layoutSizingVertical = "FIXED";

// Start Child: Group
const root_child_1_child_6_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_Group_1587_26048_svg_orig);
root_child_1_child_6_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_6_child_0_child_0 = root_child_1_child_6_child_0_child_0_svgContainer;
root_child_1_child_6_child_0_child_0.name = "Group";
root_child_1_child_6_child_0_child_0.visible = true;
root_child_1_child_6_child_0_child_0.opacity = 1;
root_child_1_child_6_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_6_child_0_child_0) root_child_1_child_6_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_6_child_0_child_0) root_child_1_child_6_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_6_child_0_child_0) root_child_1_child_6_child_0_child_0.maskType = "ALPHA";
root_child_1_child_6_child_0_child_0.effects = [];
root_child_1_child_6_child_0.appendChild(root_child_1_child_6_child_0_child_0);
applySizeAndTransform(root_child_1_child_6_child_0_child_0, {"width":42.0334,"height":47.003,"relativeTransform":[[1,0,0.0039],[0,1,2.3636]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_6_child_0_child_0.x = 0.0038598631508648396;
root_child_1_child_6_child_0_child_0.y = 2.3636436462402344;
root_child_1_child_6.appendChild(root_child_1_child_6_child_0);
// Child Layout Props
root_child_1_child_6_child_0.layoutAlign = "INHERIT";
root_child_1_child_6_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_6_child_0) root_child_1_child_6_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_6_child_0, {"width":42.03,"height":47.0028,"relativeTransform":[[1,0,8.175],[0,1,5.6886]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_6);
// Child Layout Props
root_child_1_child_6.layoutAlign = "INHERIT";
root_child_1_child_6.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_6) root_child_1_child_6.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_6) root_child_1_child_6.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_6, {"width":58.38,"height":58.38,"relativeTransform":[[1,0,727.1029],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: Slot
const root_child_1_child_7 = figma.createFrame();
root_child_1_child_7.name = "Slot";
root_child_1_child_7.visible = true;
root_child_1_child_7.opacity = 1;
root_child_1_child_7.locked = false;
if ("blendMode" in root_child_1_child_7) root_child_1_child_7.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_7) root_child_1_child_7.isMask = false;
if ("maskType" in root_child_1_child_7) root_child_1_child_7.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_7) root_child_1_child_7.clipsContent = true;
if ("layoutMode" in root_child_1_child_7) {
    root_child_1_child_7.layoutMode = "VERTICAL";
    root_child_1_child_7.primaryAxisSizingMode = "FIXED";
    root_child_1_child_7.counterAxisSizingMode = "FIXED";
    root_child_1_child_7.primaryAxisAlignItems = "CENTER";
    root_child_1_child_7.counterAxisAlignItems = "CENTER";
    root_child_1_child_7.itemSpacing = 8;
    if ("counterAxisSpacing" in root_child_1_child_7) root_child_1_child_7.counterAxisSpacing = 0;
    if ("layoutWrap" in root_child_1_child_7) root_child_1_child_7.layoutWrap = "NO_WRAP";
    if ("counterAxisAlignContent" in root_child_1_child_7) root_child_1_child_7.counterAxisAlignContent = "AUTO";
    root_child_1_child_7.paddingTop = 8;
    root_child_1_child_7.paddingRight = 8;
    root_child_1_child_7.paddingBottom = 8;
    root_child_1_child_7.paddingLeft = 8;
    root_child_1_child_7.itemReverseZIndex = false;
    root_child_1_child_7.strokesIncludedInLayout = false;
    if ("gridRowCount" in root_child_1_child_7) root_child_1_child_7.gridRowCount = 0;
    if ("gridColumnCount" in root_child_1_child_7) root_child_1_child_7.gridColumnCount = 0;
    if ("gridRowGap" in root_child_1_child_7) root_child_1_child_7.gridRowGap = 0;
    if ("gridColumnGap" in root_child_1_child_7) root_child_1_child_7.gridColumnGap = 0;
}
root_child_1_child_7.fills = await this.hydratePaints([]);
root_child_1_child_7.strokes = await this.hydratePaints([]);
root_child_1_child_7.strokeWeight = 1;
root_child_1_child_7.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_7) root_child_1_child_7.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_7) root_child_1_child_7.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_7) root_child_1_child_7.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_7) root_child_1_child_7.strokeTopWeight = 1;
if ("strokeRightWeight" in root_child_1_child_7) root_child_1_child_7.strokeRightWeight = 1;
if ("strokeBottomWeight" in root_child_1_child_7) root_child_1_child_7.strokeBottomWeight = 1;
if ("strokeLeftWeight" in root_child_1_child_7) root_child_1_child_7.strokeLeftWeight = 1;
root_child_1_child_7.effects = [];
if ("cornerRadius" in root_child_1_child_7) root_child_1_child_7.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_7) root_child_1_child_7.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_7) root_child_1_child_7.layoutSizingVertical = "FIXED";

// Start Child: UNL
const root_child_1_child_7_child_0 = figma.createFrame();
root_child_1_child_7_child_0.name = "UNL";
root_child_1_child_7_child_0.visible = true;
root_child_1_child_7_child_0.opacity = 1;
root_child_1_child_7_child_0.locked = false;
if ("blendMode" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.isMask = false;
if ("maskType" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.maskType = "ALPHA";
if ("clipsContent" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.clipsContent = true;
if ("layoutMode" in root_child_1_child_7_child_0) {
    root_child_1_child_7_child_0.layoutMode = "NONE";
}
root_child_1_child_7_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_1_child_7_child_0.strokes = await this.hydratePaints([]);
root_child_1_child_7_child_0.strokeWeight = 0.05246541276574135;
root_child_1_child_7_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.strokeMiterLimit = 4;
if ("strokeTopWeight" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.strokeTopWeight = 0.05246541276574135;
if ("strokeRightWeight" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.strokeRightWeight = 0.05246541276574135;
if ("strokeBottomWeight" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.strokeBottomWeight = 0.05246541276574135;
if ("strokeLeftWeight" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.strokeLeftWeight = 0.05246541276574135;
root_child_1_child_7_child_0.effects = [];
if ("cornerRadius" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.cornerRadius = 0;
if ("layoutSizingHorizontal" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.layoutSizingVertical = "FIXED";

// Start Child: UNL_portrait_FCcmyk_onLIGHT
const root_child_1_child_7_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_competitions_2026_no_refactor_for_inspect_assets_icon_UNL_portrait_FCcmyk_onLIGHT_1587_26209_svg_orig);
root_child_1_child_7_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_1_child_7_child_0_child_0 = root_child_1_child_7_child_0_child_0_svgContainer;
root_child_1_child_7_child_0_child_0.name = "UNL_portrait_FCcmyk_onLIGHT";
root_child_1_child_7_child_0_child_0.visible = true;
root_child_1_child_7_child_0_child_0.opacity = 1;
root_child_1_child_7_child_0_child_0.locked = false;
if ("blendMode" in root_child_1_child_7_child_0_child_0) root_child_1_child_7_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_1_child_7_child_0_child_0) root_child_1_child_7_child_0_child_0.isMask = false;
if ("maskType" in root_child_1_child_7_child_0_child_0) root_child_1_child_7_child_0_child_0.maskType = "ALPHA";
root_child_1_child_7_child_0_child_0.effects = [];
root_child_1_child_7_child_0.appendChild(root_child_1_child_7_child_0_child_0);
applySizeAndTransform(root_child_1_child_7_child_0_child_0, {"width":31.74,"height":49.6189,"relativeTransform":[[1,0,-0.0005],[0,1,0.0001]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_1_child_7_child_0_child_0.x = -0.0004931640578433871;
root_child_1_child_7_child_0_child_0.y = 0.00012815713125746697;
root_child_1_child_7.appendChild(root_child_1_child_7_child_0);
// Child Layout Props
root_child_1_child_7_child_0.layoutAlign = "INHERIT";
root_child_1_child_7_child_0.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_7_child_0) root_child_1_child_7_child_0.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_7_child_0, {"width":31.74,"height":49.6186,"relativeTransform":[[1,0,13.32],[0,1,4.3807]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root_child_1.appendChild(root_child_1_child_7);
// Child Layout Props
root_child_1_child_7.layoutAlign = "INHERIT";
root_child_1_child_7.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1_child_7) root_child_1_child_7.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1_child_7) root_child_1_child_7.layoutSizingVertical = "FIXED";
applySizeAndTransform(root_child_1_child_7, {"width":58.38,"height":58.38,"relativeTransform":[[1,0,833.6201],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});
root.appendChild(root_child_1);
// Child Layout Props
root_child_1.layoutAlign = "INHERIT";
root_child_1.layoutGrow = 0;
if ("layoutSizingHorizontal" in root_child_1) root_child_1.layoutSizingHorizontal = "FIXED";
if ("layoutSizingVertical" in root_child_1) root_child_1.layoutSizingVertical = "HUG";
applySizeAndTransform(root_child_1, {"width":980,"height":58.38,"relativeTransform":[[1,0,230],[0,1,18.81]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});

// Start Child: divider1
const root_child_2 = figma.createRectangle();
root_child_2.name = "divider1";
root_child_2.visible = true;
root_child_2.opacity = 1;
root_child_2.locked = false;
if ("blendMode" in root_child_2) root_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_2) root_child_2.isMask = false;
if ("maskType" in root_child_2) root_child_2.maskType = "ALPHA";
root_child_2.fills = await this.hydratePaints([{"type":"GRADIENT_LINEAR","visible":true,"opacity":1,"blendMode":"NORMAL","gradientStops":[{"color":{"r":0,"g":0.6274510025978088,"b":0.7882353067398071,"a":0},"position":0,"boundVariables":{}},{"color":{"r":0,"g":0.6274510025978088,"b":0.7882353067398071,"a":1},"position":0.515625,"boundVariables":{}},{"color":{"r":0,"g":0.6274510025978088,"b":0.7882353067398071,"a":0},"position":1,"boundVariables":{}}],"gradientTransform":[[1,-3.66592910541752e-12,2.1998514121435164e-12],[0,0.00006807611498516053,0.49995914101600647]]}]);
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
root.appendChild(root_child_2);
// Child Layout Props
root_child_2.layoutAlign = "INHERIT";
root_child_2.layoutGrow = 0;
applySizeAndTransform(root_child_2, {"width":980,"height":1,"relativeTransform":[[1,0,230],[0,1,94]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO","constraints":{"horizontal":"MIN","vertical":"MIN"}});


        applySizeAndTransform(root, {"width":1440,"height":96,"parentIsAutoLayout":false});

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

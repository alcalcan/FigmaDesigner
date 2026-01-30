import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

// SVG Imports
import SVG_Features___in_the_zone_assets_icon_Vector_I92_670863_6468_29_svg_16_693283081054688x17_70574951171875 from "./assets/Features___in_the_zone_assets_icon_Vector_I92_670863_6468_29_svg_16_693283081054688x17_70574951171875.svg";



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


export class Features___in_the_zone extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "Features / in-the-zone";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("maskType" in root) root.maskType = "ALPHA";
if ("clipsContent" in root) root.clipsContent = true;
if ("layoutMode" in root) {
    root.layoutMode = "NONE";
}
root.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
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

// Start Child: Vector
const root_child_0_svgContainer = figma.createNodeFromSvg(SVG_Features___in_the_zone_assets_icon_Vector_I92_670863_6468_29_svg_16_693283081054688x17_70574951171875);
root_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0 = figma.flatten([root_child_0_svgContainer]);
root_child_0.name = "Vector";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 0.20000000298023224;
root_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0) root_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0) root_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0) root_child_0.strokeMiterLimit = 4;
root_child_0.effects = [];
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 0;
root.appendChild(root_child_0);
applySizeAndTransform(root_child_0, {"width":16.693283081054688,"height":17.70574951171875,"relativeTransform":[[1,0,3.5],[0,1,2.79425048828125]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0.x = 3.5;
root_child_0.y = 2.79425048828125;


        applySizeAndTransform(root, {"width":24,"height":24,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

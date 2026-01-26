import { BaseComponent, ComponentProps } from "../../BaseComponent";


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


export class Page_title extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createText();
root.name = "Page title";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
root.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root.strokes = await this.hydratePaints([]);
root.strokeWeight = 1;
root.strokeAlign = "OUTSIDE";
if ("strokeCap" in root) root.strokeCap = "NONE";
if ("strokeJoin" in root) root.strokeJoin = "MITER";
if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
root.effects = [];
// Text Properties
root.characters = `Resources`;
root.fontSize = 32;
root.textAlignHorizontal = "LEFT";
root.textAlignVertical = "CENTER";
root.textAutoResize = "WIDTH_AND_HEIGHT";
root.letterSpacing = {"unit":"PIXELS","value":0};
root.lineHeight = {"unit":"PIXELS","value":40};
if ("textCase" in root) root.textCase = "ORIGINAL";
if ("textDecoration" in root) root.textDecoration = "NONE";
await this.setFont(root, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root, 0, 9, {"family":"Open Sans","style":"Regular"});
root.setRangeFills(0, 9, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root.setRangeFontSize(0, 9, 32);


        applySizeAndTransform(root, {"width":154,"height":40,"parentIsAutoLayout":false});

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

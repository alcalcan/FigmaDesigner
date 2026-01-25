import { BaseComponent, ComponentProps } from "../../BaseComponent";


// SVG Assets
const SVG_assets_icon_Vector_I92_671462_5086_19_svg_14_999951362609863x19_192251205444336 = `<svg width="14.999951362609863" height="19.192251205444336" viewBox="0 0 14.999951362609863 19.192251205444336" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 16.3846C0.5375 16.3846 0.359375 16.3127 0.215625 16.1689C0.071875 16.0251 0 15.8469 0 15.6343C0 15.4217 0.071875 15.2436 0.215625 15.1C0.359375 14.9564 0.5375 14.8846 0.75 14.8846H1.8077V7.42305C1.8077 6.07818 2.22276 4.88908 3.05287 3.85575C3.88301 2.82242 4.94872 2.16153 6.25 1.87308V1.25C6.25 0.902783 6.37142 0.607651 6.61425 0.364601C6.85708 0.121534 7.15195 0 7.49885 0C7.84575 0 8.14099 0.121534 8.38457 0.364601C8.62816 0.607651 8.74995 0.902783 8.74995 1.25V1.87308C10.0512 2.16153 11.1169 2.82242 11.9471 3.85575C12.7772 4.88908 13.1922 6.07818 13.1922 7.42305V14.8846H14.25C14.4625 14.8846 14.6406 14.9565 14.7843 15.1003C14.9281 15.2441 15 15.4223 15 15.6349C15 15.8475 14.9281 16.0256 14.7843 16.1692C14.6406 16.3128 14.4625 16.3846 14.25 16.3846H0.75ZM7.49828 19.1923C7.00069 19.1923 6.5753 19.0153 6.2221 18.6613C5.8689 18.3073 5.6923 17.8817 5.6923 17.3846H9.30765C9.30765 17.8833 9.13048 18.3093 8.77615 18.6625C8.42182 19.0157 7.99586 19.1923 7.49828 19.1923ZM3.30765 14.8846H11.6923V7.42305C11.6923 6.26535 11.283 5.27721 10.4644 4.45863C9.64582 3.64003 8.65767 3.23073 7.49997 3.23073C6.34228 3.23073 5.35413 3.64003 4.53555 4.45863C3.71695 5.27721 3.30765 6.26535 3.30765 7.42305V14.8846Z" fill="black"/>
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


export class Notifications___notifications_none extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "Notifications / notifications-none";
root.visible = true;
root.opacity = 1;
root.locked = false;
if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
if ("isMask" in root) root.isMask = false;
if ("layoutMode" in root) {
    root.layoutMode = "NONE";
}
root.fills = await this.hydratePaints([]);
root.strokes = await this.hydratePaints([]);
root.strokeWeight = 1;
root.strokeAlign = "INSIDE";
if ("strokeCap" in root) root.strokeCap = "NONE";
if ("strokeJoin" in root) root.strokeJoin = "MITER";
if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
root.effects = [];
if ("cornerRadius" in root) root.cornerRadius = 0;

// Start Child: Vector
const root_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Vector_I92_671462_5086_19_svg_14_999951362609863x19_192251205444336);
root_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0 = figma.flatten([root_child_0_svgContainer]);
root_child_0.name = "Vector";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 1;
root_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0) root_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0) root_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0) root_child_0.strokeMiterLimit = 4;
root_child_0.effects = [];
if ("cornerRadius" in root_child_0) root_child_0.cornerRadius = 0;
root.appendChild(root_child_0);
applySizeAndTransform(root_child_0, {"width":14.999951362609863,"height":19.192251205444336,"relativeTransform":[[1,0,4.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0.x = 4.5;
root_child_0.y = 2.5;


        applySizeAndTransform(root, {"width":24,"height":24,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

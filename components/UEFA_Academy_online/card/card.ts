import { BaseComponent, ComponentProps } from "../../BaseComponent";
import IMG_img_1_png from "./assets/img_1.png";
import IMG_img_2_opt_png from "./assets/img_2_opt.png";


// SVG Assets
const SVG_assets_icon_Vector_I3383_3705_1004_91_svg_53_33333206176758x53_33333206176758 = `<svg width="53.33333206176758" height="53.33333206176758" viewBox="0 0 53.33333206176758 53.33333206176758" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 0C11.9467 0 0 11.9467 0 26.6667C0 41.3867 11.9467 53.3333 26.6667 53.3333C41.3867 53.3333 53.3333 41.3867 53.3333 26.6667C53.3333 11.9467 41.3867 0 26.6667 0ZM26.6667 48C14.9067 48 5.33333 38.4267 5.33333 26.6667C5.33333 14.9067 14.9067 5.33333 26.6667 5.33333C38.4267 5.33333 48 14.9067 48 26.6667C48 38.4267 38.4267 48 26.6667 48ZM22.7797 16.1871L35.9104 25.5392C36.5331 25.9827 36.6784 26.8472 36.2349 27.4699C36.1456 27.5955 36.036 27.7051 35.9104 27.7944L22.78 37.1461C22.1571 37.5899 21.2926 37.4445 20.8491 36.8216C20.682 36.5872 20.5923 36.3064 20.5923 36.0184L20.5921 17.3148C20.592 16.5501 21.2119 15.9303 21.9765 15.9303C22.2645 15.9303 22.5451 16.0201 22.7797 16.1871Z" fill="white"/>
</svg>
`;
const SVG_assets_icon_Vector_I3383_3715_1004_103_svg_6_758216857910156x8_239931106567383 = `<svg width="6.758216857910156" height="8.239931106567383" viewBox="0 0 6.758216857910156 8.239931106567383" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.02459 0.105307C0.580766 -0.17712 0 0.141686 0 0.667746V7.57217C0 8.09824 0.580766 8.41704 1.02459 8.13464L6.44947 4.68237C6.86113 4.42044 6.86113 3.81951 6.44947 3.55751L1.02459 0.105307Z" fill="black"/>
</svg>
`;
const SVG_assets_icon_Vector__Stroke__I3383_3719_3016_7769_svg_22_000059127807617x21_020004272460938 = `<svg width="22.000059127807617" height="21.020004272460938" viewBox="0 0 22.000059127807617 21.020004272460938" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C11.3806 0 11.7283 0.216072 11.8967 0.557376L14.7543 6.34647L21.1447 7.28051C21.5212 7.33555 21.8339 7.59956 21.9513 7.96157C22.0687 8.32358 21.9704 8.72083 21.6978 8.98636L17.0746 13.4894L18.1656 19.851C18.23 20.2261 18.0757 20.6053 17.7678 20.8291C17.4598 21.0528 17.0515 21.0823 16.7146 20.9051L11 17.8998L5.28548 20.9051C4.94856 21.0823 4.54027 21.0528 4.2323 20.8291C3.92432 20.6053 3.77007 20.2261 3.83442 19.851L4.92551 13.4894L0.302296 8.98636C0.0296782 8.72083 -0.0685946 8.32358 0.0487831 7.96157C0.166161 7.59956 0.478841 7.33555 0.855401 7.28051L7.24577 6.34647L10.1033 0.557376C10.2718 0.216072 10.6194 0 11 0ZM11 3.25925L8.80674 7.70262C8.6612 7.99747 8.38001 8.20193 8.05466 8.24949L3.14844 8.9666L6.69776 12.4236C6.93364 12.6534 7.0413 12.9845 6.98564 13.309L6.14821 18.1917L10.5346 15.8849C10.826 15.7317 11.1741 15.7317 11.4655 15.8849L15.8518 18.1917L15.0144 13.309C14.9588 12.9845 15.0664 12.6534 15.3023 12.4236L18.8516 8.9666L13.9454 8.24949C13.62 8.20193 13.3389 7.99747 13.1933 7.70262L11 3.25925Z" fill="#B3C0C5"/>
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


export class card extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        const root = figma.createFrame();
root.name = "card";
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
    root.primaryAxisAlignItems = "MIN";
    root.counterAxisAlignItems = "MIN";
    root.itemSpacing = 24;
    root.paddingTop = 0;
    root.paddingRight = 0;
    root.paddingBottom = 0;
    root.paddingLeft = 0;
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

// Start Child: Frame 1622
const root_child_0 = figma.createFrame();
root_child_0.name = "Frame 1622";
root_child_0.visible = true;
root_child_0.opacity = 1;
root_child_0.locked = false;
if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0) root_child_0.isMask = false;
if ("clipsContent" in root_child_0) root_child_0.clipsContent = false;
if ("layoutMode" in root_child_0) {
    root_child_0.layoutMode = "HORIZONTAL";
    root_child_0.primaryAxisSizingMode = "FIXED";
    root_child_0.counterAxisSizingMode = "AUTO";
    root_child_0.primaryAxisAlignItems = "MIN";
    root_child_0.counterAxisAlignItems = "MIN";
    root_child_0.itemSpacing = 0;
    root_child_0.paddingTop = 0;
    root_child_0.paddingRight = 0;
    root_child_0.paddingBottom = 0;
    root_child_0.paddingLeft = 0;
}
root_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0.strokes = await this.hydratePaints([]);
root_child_0.strokeWeight = 1;
root_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0) root_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0) root_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0) root_child_0.strokeMiterLimit = 4;
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
root_child_0_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"CROP","imageTransform":[[1,0,0],[0,0.9078576564788818,0.046071168035268784]],"scalingFactor":1,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"d68ed38d85752b656704db1b0ecbfbc3ac629eac","assetRef":IMG_img_1_png}]);
root_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_0.strokeWeight = 1;
root_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_0) root_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_0) root_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_0) root_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_0.effects = [];
if ("topLeftRadius" in root_child_0_child_0) root_child_0_child_0.topLeftRadius = 4;
if ("bottomLeftRadius" in root_child_0_child_0) root_child_0_child_0.bottomLeftRadius = 4;
root_child_0.appendChild(root_child_0_child_0);
// Child Layout Props
root_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_0, {"width":464,"height":308,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: AV / play-circle
const root_child_0_child_1 = figma.createFrame();
root_child_0_child_1.name = "AV / play-circle";
root_child_0_child_1.visible = true;
root_child_0_child_1.opacity = 1;
root_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_1) root_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1) root_child_0_child_1.isMask = false;
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
root_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_1) root_child_0_child_1.cornerRadius = 0;

// Start Child: Vector
const root_child_0_child_1_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Vector_I3383_3705_1004_91_svg_53_33333206176758x53_33333206176758);
root_child_0_child_1_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_1_child_0 = figma.flatten([root_child_0_child_1_child_0_svgContainer]);
root_child_0_child_1_child_0.name = "Vector";
root_child_0_child_1_child_0.visible = true;
root_child_0_child_1_child_0.opacity = 1;
root_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.isMask = false;
root_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_1_child_0.strokeWeight = 1;
root_child_0_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_1_child_0) root_child_0_child_1_child_0.cornerRadius = 0;
root_child_0_child_1.appendChild(root_child_0_child_1_child_0);
applySizeAndTransform(root_child_0_child_1_child_0, {"width":53.33333206176758,"height":53.33333206176758,"relativeTransform":[[1,0,5.333333492279053],[0,1,5.333333492279053]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_1_child_0.x = 5.333333492279053;
root_child_0_child_1_child_0.y = 5.333333492279053;
root_child_0.appendChild(root_child_0_child_1);
// Child Layout Props
root_child_0_child_1.layoutPositioning = "ABSOLUTE";
root_child_0_child_1.layoutAlign = "INHERIT";
root_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_1, {"width":64,"height":64,"relativeTransform":[[1,0,488],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"ABSOLUTE"});

// Start Child: Frame 1615
const root_child_0_child_2 = figma.createFrame();
root_child_0_child_2.name = "Frame 1615";
root_child_0_child_2.visible = true;
root_child_0_child_2.opacity = 1;
root_child_0_child_2.locked = false;
if ("blendMode" in root_child_0_child_2) root_child_0_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2) root_child_0_child_2.isMask = false;
if ("clipsContent" in root_child_0_child_2) root_child_0_child_2.clipsContent = true;
if ("layoutMode" in root_child_0_child_2) {
    root_child_0_child_2.layoutMode = "VERTICAL";
    root_child_0_child_2.primaryAxisSizingMode = "FIXED";
    root_child_0_child_2.counterAxisSizingMode = "FIXED";
    root_child_0_child_2.primaryAxisAlignItems = "CENTER";
    root_child_0_child_2.counterAxisAlignItems = "MIN";
    root_child_0_child_2.itemSpacing = 16;
    root_child_0_child_2.paddingTop = 24;
    root_child_0_child_2.paddingRight = 24;
    root_child_0_child_2.paddingBottom = 24;
    root_child_0_child_2.paddingLeft = 24;
}
root_child_0_child_2.fills = await this.hydratePaints([]);
root_child_0_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_2.strokeWeight = 1;
root_child_0_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2) root_child_0_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2) root_child_0_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2) root_child_0_child_2.strokeMiterLimit = 4;
root_child_0_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_2) root_child_0_child_2.cornerRadius = 0;

// Start Child: Frame 1644
const root_child_0_child_2_child_0 = figma.createFrame();
root_child_0_child_2_child_0.name = "Frame 1644";
root_child_0_child_2_child_0.visible = true;
root_child_0_child_2_child_0.opacity = 1;
root_child_0_child_2_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.clipsContent = false;
if ("layoutMode" in root_child_0_child_2_child_0) {
    root_child_0_child_2_child_0.layoutMode = "VERTICAL";
    root_child_0_child_2_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0_child_2_child_0.counterAxisSizingMode = "FIXED";
    root_child_0_child_2_child_0.primaryAxisAlignItems = "CENTER";
    root_child_0_child_2_child_0.counterAxisAlignItems = "MIN";
    root_child_0_child_2_child_0.itemSpacing = 16;
    root_child_0_child_2_child_0.paddingTop = 0;
    root_child_0_child_2_child_0.paddingRight = 0;
    root_child_0_child_2_child_0.paddingBottom = 0;
    root_child_0_child_2_child_0.paddingLeft = 0;
}
root_child_0_child_2_child_0.fills = await this.hydratePaints([]);
root_child_0_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0.strokeWeight = 1;
root_child_0_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_0) root_child_0_child_2_child_0.cornerRadius = 0;

// Start Child: Frame 1713
const root_child_0_child_2_child_0_child_0 = figma.createFrame();
root_child_0_child_2_child_0_child_0.name = "Frame 1713";
root_child_0_child_2_child_0_child_0.visible = true;
root_child_0_child_2_child_0_child_0.opacity = 1;
root_child_0_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.clipsContent = false;
if ("layoutMode" in root_child_0_child_2_child_0_child_0) {
    root_child_0_child_2_child_0_child_0.layoutMode = "HORIZONTAL";
    root_child_0_child_2_child_0_child_0.primaryAxisSizingMode = "FIXED";
    root_child_0_child_2_child_0_child_0.counterAxisSizingMode = "AUTO";
    root_child_0_child_2_child_0_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_2_child_0_child_0.counterAxisAlignItems = "CENTER";
    root_child_0_child_2_child_0_child_0.itemSpacing = 16;
    root_child_0_child_2_child_0_child_0.paddingTop = 0;
    root_child_0_child_2_child_0_child_0.paddingRight = 0;
    root_child_0_child_2_child_0_child_0.paddingBottom = 0;
    root_child_0_child_2_child_0_child_0.paddingLeft = 0;
}
root_child_0_child_2_child_0_child_0.fills = await this.hydratePaints([]);
root_child_0_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0_child_0.strokeWeight = 1;
root_child_0_child_2_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_0_child_0) root_child_0_child_2_child_0_child_0.cornerRadius = 0;

// Start Child: Refereeing in Women’s Football: Motivation.
const root_child_0_child_2_child_0_child_0_child_0 = figma.createText();
root_child_0_child_2_child_0_child_0_child_0.name = "Refereeing in Women’s Football: Motivation.";
root_child_0_child_2_child_0_child_0_child_0.visible = true;
root_child_0_child_2_child_0_child_0_child_0.opacity = 1;
root_child_0_child_2_child_0_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_0_child_0_child_0) root_child_0_child_2_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0_child_0_child_0) root_child_0_child_2_child_0_child_0_child_0.isMask = false;
root_child_0_child_2_child_0_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_2_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0_child_0_child_0.strokeWeight = 1;
root_child_0_child_2_child_0_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_2_child_0_child_0_child_0) root_child_0_child_2_child_0_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0_child_0_child_0) root_child_0_child_2_child_0_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0_child_0_child_0) root_child_0_child_2_child_0_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_0_child_0_child_0.effects = [];
// Text Properties
root_child_0_child_2_child_0_child_0_child_0.characters = `Refereeing in Women’s Football:
Motivation.`;
root_child_0_child_2_child_0_child_0_child_0.fontSize = 20;
root_child_0_child_2_child_0_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_2_child_0_child_0_child_0.textAlignVertical = "CENTER";
root_child_0_child_2_child_0_child_0_child_0.textAutoResize = "HEIGHT";
root_child_0_child_2_child_0_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_2_child_0_child_0_child_0.lineHeight = {"unit":"PIXELS","value":25};
if ("textCase" in root_child_0_child_2_child_0_child_0_child_0) root_child_0_child_2_child_0_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_2_child_0_child_0_child_0) root_child_0_child_2_child_0_child_0_child_0.textDecoration = "NONE";
await this.setFont(root_child_0_child_2_child_0_child_0_child_0, {"family":"Open Sans","style":"SemiBold"});
// Styled Segments
await this.setRangeFont(root_child_0_child_2_child_0_child_0_child_0, 0, 43, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_2_child_0_child_0_child_0.setRangeFills(0, 43, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_2_child_0_child_0_child_0.setRangeFontSize(0, 43, 20);
root_child_0_child_2_child_0_child_0.appendChild(root_child_0_child_2_child_0_child_0_child_0);
// Child Layout Props
root_child_0_child_2_child_0_child_0_child_0.layoutAlign = "INHERIT";
root_child_0_child_2_child_0_child_0_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_2_child_0_child_0_child_0, {"width":501,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Logos / UEFA Roundel
const root_child_0_child_2_child_0_child_0_child_1 = figma.createFrame();
root_child_0_child_2_child_0_child_0_child_1.name = "Logos / UEFA Roundel";
root_child_0_child_2_child_0_child_0_child_1.visible = true;
root_child_0_child_2_child_0_child_0_child_1.opacity = 1;
root_child_0_child_2_child_0_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_2_child_0_child_0_child_1) root_child_0_child_2_child_0_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0_child_0_child_1) root_child_0_child_2_child_0_child_0_child_1.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_0_child_0_child_1) root_child_0_child_2_child_0_child_0_child_1.clipsContent = false;
if ("layoutMode" in root_child_0_child_2_child_0_child_0_child_1) {
    root_child_0_child_2_child_0_child_0_child_1.layoutMode = "NONE";
}
root_child_0_child_2_child_0_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_2_child_0_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0_child_0_child_1.strokeWeight = 1;
root_child_0_child_2_child_0_child_0_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_0_child_0_child_1) root_child_0_child_2_child_0_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0_child_0_child_1) root_child_0_child_2_child_0_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0_child_0_child_1) root_child_0_child_2_child_0_child_0_child_1.strokeMiterLimit = 4;
root_child_0_child_2_child_0_child_0_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_0_child_0_child_1) root_child_0_child_2_child_0_child_0_child_1.cornerRadius = 0;

// Start Child: UEFA_Is_POS_4cp
const root_child_0_child_2_child_0_child_0_child_1_child_0 = figma.createRectangle();
root_child_0_child_2_child_0_child_0_child_1_child_0.name = "UEFA_Is_POS_4cp";
root_child_0_child_2_child_0_child_0_child_1_child_0.visible = true;
root_child_0_child_2_child_0_child_0_child_1_child_0.opacity = 1;
root_child_0_child_2_child_0_child_0_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_0_child_0_child_1_child_0) root_child_0_child_2_child_0_child_0_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0_child_0_child_1_child_0) root_child_0_child_2_child_0_child_0_child_1_child_0.isMask = false;
root_child_0_child_2_child_0_child_0_child_1_child_0.fills = await this.hydratePaints([{"type":"IMAGE","visible":true,"opacity":1,"blendMode":"NORMAL","scaleMode":"CROP","imageTransform":[[1,0,0],[0,1,0]],"scalingFactor":0.5,"filters":{"exposure":0,"contrast":0,"saturation":0,"temperature":0,"tint":0,"highlights":0,"shadows":0},"originalImageHash":"d1a818547948badf457342eb3e3336a71cf59875","assetRef":IMG_img_2_opt_png}]);
root_child_0_child_2_child_0_child_0_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0_child_0_child_1_child_0.strokeWeight = 0;
root_child_0_child_2_child_0_child_0_child_1_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_2_child_0_child_0_child_1_child_0) root_child_0_child_2_child_0_child_0_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0_child_0_child_1_child_0) root_child_0_child_2_child_0_child_0_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0_child_0_child_1_child_0) root_child_0_child_2_child_0_child_0_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_0_child_0_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_0_child_0_child_1_child_0) root_child_0_child_2_child_0_child_0_child_1_child_0.cornerRadius = 0;
root_child_0_child_2_child_0_child_0_child_1.appendChild(root_child_0_child_2_child_0_child_0_child_1_child_0);
applySizeAndTransform(root_child_0_child_2_child_0_child_0_child_1_child_0, {"width":48,"height":48,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_2_child_0_child_0_child_1_child_0.x = 0;
root_child_0_child_2_child_0_child_0_child_1_child_0.y = 0;
root_child_0_child_2_child_0_child_0.appendChild(root_child_0_child_2_child_0_child_0_child_1);
// Child Layout Props
root_child_0_child_2_child_0_child_0_child_1.layoutAlign = "INHERIT";
root_child_0_child_2_child_0_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_0_child_0_child_1, {"width":48,"height":48,"relativeTransform":[[1,0,517],[0,1,1]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_2_child_0.appendChild(root_child_0_child_2_child_0_child_0);
// Child Layout Props
root_child_0_child_2_child_0_child_0.layoutAlign = "STRETCH";
root_child_0_child_2_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_0_child_0, {"width":565,"height":50,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.
const root_child_0_child_2_child_0_child_1 = figma.createText();
root_child_0_child_2_child_0_child_1.name = "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.";
root_child_0_child_2_child_0_child_1.visible = true;
root_child_0_child_2_child_0_child_1.opacity = 1;
root_child_0_child_2_child_0_child_1.locked = false;
if ("blendMode" in root_child_0_child_2_child_0_child_1) root_child_0_child_2_child_0_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_0_child_1) root_child_0_child_2_child_0_child_1.isMask = false;
root_child_0_child_2_child_0_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_2_child_0_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_0_child_1.strokeWeight = 1;
root_child_0_child_2_child_0_child_1.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_2_child_0_child_1) root_child_0_child_2_child_0_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_0_child_1) root_child_0_child_2_child_0_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_0_child_1) root_child_0_child_2_child_0_child_1.strokeMiterLimit = 4;
root_child_0_child_2_child_0_child_1.effects = [];
// Text Properties
root_child_0_child_2_child_0_child_1.characters = `The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future
of our sport.`;
root_child_0_child_2_child_0_child_1.fontSize = 16;
root_child_0_child_2_child_0_child_1.textAlignHorizontal = "LEFT";
root_child_0_child_2_child_0_child_1.textAlignVertical = "CENTER";
root_child_0_child_2_child_0_child_1.textTruncation = "ENDING";
root_child_0_child_2_child_0_child_1.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_2_child_0_child_1.lineHeight = {"unit":"PIXELS","value":24};
if ("textCase" in root_child_0_child_2_child_0_child_1) root_child_0_child_2_child_0_child_1.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_2_child_0_child_1) root_child_0_child_2_child_0_child_1.textDecoration = "NONE";
await this.setFont(root_child_0_child_2_child_0_child_1, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_0_child_2_child_0_child_1, 0, 152, {"family":"Open Sans","style":"Regular"});
root_child_0_child_2_child_0_child_1.setRangeFills(0, 152, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_2_child_0_child_1.setRangeFontSize(0, 152, 16);
root_child_0_child_2_child_0.appendChild(root_child_0_child_2_child_0_child_1);
// Child Layout Props
root_child_0_child_2_child_0_child_1.layoutAlign = "STRETCH";
root_child_0_child_2_child_0_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_0_child_1, {"width":565,"height":95,"relativeTransform":[[1,0,0],[0,1,66]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_2.appendChild(root_child_0_child_2_child_0);
// Child Layout Props
root_child_0_child_2_child_0.layoutAlign = "STRETCH";
root_child_0_child_2_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_0, {"width":565,"height":161,"relativeTransform":[[1,0,24],[0,1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1613
const root_child_0_child_2_child_1 = figma.createFrame();
root_child_0_child_2_child_1.name = "Frame 1613";
root_child_0_child_2_child_1.visible = true;
root_child_0_child_2_child_1.opacity = 1;
root_child_0_child_2_child_1.locked = false;
if ("blendMode" in root_child_0_child_2_child_1) root_child_0_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_1) root_child_0_child_2_child_1.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_1) root_child_0_child_2_child_1.clipsContent = false;
if ("layoutMode" in root_child_0_child_2_child_1) {
    root_child_0_child_2_child_1.layoutMode = "HORIZONTAL";
    root_child_0_child_2_child_1.primaryAxisSizingMode = "AUTO";
    root_child_0_child_2_child_1.counterAxisSizingMode = "AUTO";
    root_child_0_child_2_child_1.primaryAxisAlignItems = "MIN";
    root_child_0_child_2_child_1.counterAxisAlignItems = "CENTER";
    root_child_0_child_2_child_1.itemSpacing = 4;
    root_child_0_child_2_child_1.paddingTop = 0;
    root_child_0_child_2_child_1.paddingRight = 0;
    root_child_0_child_2_child_1.paddingBottom = 0;
    root_child_0_child_2_child_1.paddingLeft = 16;
}
root_child_0_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9125000238418579,"g":0.8250520825386047,"b":0.8669542074203491},"boundVariables":{}}]);
root_child_0_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_1.strokeWeight = 1;
root_child_0_child_2_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_1) root_child_0_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_1) root_child_0_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_1) root_child_0_child_2_child_1.strokeMiterLimit = 4;
root_child_0_child_2_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_1) root_child_0_child_2_child_1.cornerRadius = 8;

// Start Child: Video
const root_child_0_child_2_child_1_child_0 = figma.createText();
root_child_0_child_2_child_1_child_0.name = "Video";
root_child_0_child_2_child_1_child_0.visible = true;
root_child_0_child_2_child_1_child_0.opacity = 1;
root_child_0_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_1_child_0) root_child_0_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_1_child_0) root_child_0_child_2_child_1_child_0.isMask = false;
root_child_0_child_2_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_1_child_0.strokeWeight = 1;
root_child_0_child_2_child_1_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_2_child_1_child_0) root_child_0_child_2_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_1_child_0) root_child_0_child_2_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_1_child_0) root_child_0_child_2_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_1_child_0.effects = [];
// Text Properties
root_child_0_child_2_child_1_child_0.characters = `Video `;
root_child_0_child_2_child_1_child_0.fontSize = 14;
root_child_0_child_2_child_1_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_2_child_1_child_0.textAlignVertical = "CENTER";
root_child_0_child_2_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
root_child_0_child_2_child_1_child_0.letterSpacing = {"unit":"PIXELS","value":0};
root_child_0_child_2_child_1_child_0.lineHeight = {"unit":"PIXELS","value":21};
if ("textCase" in root_child_0_child_2_child_1_child_0) root_child_0_child_2_child_1_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_2_child_1_child_0) root_child_0_child_2_child_1_child_0.textDecoration = "NONE";
await this.setFont(root_child_0_child_2_child_1_child_0, {"family":"Open Sans","style":"Regular"});
// Styled Segments
await this.setRangeFont(root_child_0_child_2_child_1_child_0, 0, 6, {"family":"Open Sans","style":"Regular"});
root_child_0_child_2_child_1_child_0.setRangeFills(0, 6, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}]);
root_child_0_child_2_child_1_child_0.setRangeFontSize(0, 6, 14);
root_child_0_child_2_child_1.appendChild(root_child_0_child_2_child_1_child_0);
// Child Layout Props
root_child_0_child_2_child_1_child_0.layoutAlign = "INHERIT";
root_child_0_child_2_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_1_child_0, {"width":37,"height":21,"relativeTransform":[[1,0,16],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1667
const root_child_0_child_2_child_1_child_1 = figma.createFrame();
root_child_0_child_2_child_1_child_1.name = "Frame 1667";
root_child_0_child_2_child_1_child_1.visible = true;
root_child_0_child_2_child_1_child_1.opacity = 1;
root_child_0_child_2_child_1_child_1.locked = false;
if ("blendMode" in root_child_0_child_2_child_1_child_1) root_child_0_child_2_child_1_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_1_child_1) root_child_0_child_2_child_1_child_1.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_1_child_1) root_child_0_child_2_child_1_child_1.clipsContent = false;
if ("layoutMode" in root_child_0_child_2_child_1_child_1) {
    root_child_0_child_2_child_1_child_1.layoutMode = "HORIZONTAL";
    root_child_0_child_2_child_1_child_1.primaryAxisSizingMode = "AUTO";
    root_child_0_child_2_child_1_child_1.counterAxisSizingMode = "AUTO";
    root_child_0_child_2_child_1_child_1.primaryAxisAlignItems = "MIN";
    root_child_0_child_2_child_1_child_1.counterAxisAlignItems = "CENTER";
    root_child_0_child_2_child_1_child_1.itemSpacing = 8;
    root_child_0_child_2_child_1_child_1.paddingTop = 8;
    root_child_0_child_2_child_1_child_1.paddingRight = 8;
    root_child_0_child_2_child_1_child_1.paddingBottom = 8;
    root_child_0_child_2_child_1_child_1.paddingLeft = 8;
}
root_child_0_child_2_child_1_child_1.fills = await this.hydratePaints([]);
root_child_0_child_2_child_1_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_1_child_1.strokeWeight = 1;
root_child_0_child_2_child_1_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_1_child_1) root_child_0_child_2_child_1_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_1_child_1) root_child_0_child_2_child_1_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_1_child_1) root_child_0_child_2_child_1_child_1.strokeMiterLimit = 4;
root_child_0_child_2_child_1_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_1_child_1) root_child_0_child_2_child_1_child_1.cornerRadius = 0;

// Start Child: AV / play
const root_child_0_child_2_child_1_child_1_child_0 = figma.createFrame();
root_child_0_child_2_child_1_child_1_child_0.name = "AV / play";
root_child_0_child_2_child_1_child_1_child_0.visible = true;
root_child_0_child_2_child_1_child_1_child_0.opacity = 1;
root_child_0_child_2_child_1_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_1_child_1_child_0) root_child_0_child_2_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_1_child_1_child_0) root_child_0_child_2_child_1_child_1_child_0.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_1_child_1_child_0) root_child_0_child_2_child_1_child_1_child_0.clipsContent = true;
if ("layoutMode" in root_child_0_child_2_child_1_child_1_child_0) {
    root_child_0_child_2_child_1_child_1_child_0.layoutMode = "NONE";
}
root_child_0_child_2_child_1_child_1_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_2_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_1_child_1_child_0.strokeWeight = 1;
root_child_0_child_2_child_1_child_1_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_1_child_1_child_0) root_child_0_child_2_child_1_child_1_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_1_child_1_child_0) root_child_0_child_2_child_1_child_1_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_1_child_1_child_0) root_child_0_child_2_child_1_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_1_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_1_child_1_child_0) root_child_0_child_2_child_1_child_1_child_0.cornerRadius = 0;

// Start Child: Vector
const root_child_0_child_2_child_1_child_1_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Vector_I3383_3715_1004_103_svg_6_758216857910156x8_239931106567383);
root_child_0_child_2_child_1_child_1_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_2_child_1_child_1_child_0_child_0 = figma.flatten([root_child_0_child_2_child_1_child_1_child_0_child_0_svgContainer]);
root_child_0_child_2_child_1_child_1_child_0_child_0.name = "Vector";
root_child_0_child_2_child_1_child_1_child_0_child_0.visible = true;
root_child_0_child_2_child_1_child_1_child_0_child_0.opacity = 1;
root_child_0_child_2_child_1_child_1_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_1_child_1_child_0_child_0) root_child_0_child_2_child_1_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_1_child_1_child_0_child_0) root_child_0_child_2_child_1_child_1_child_0_child_0.isMask = false;
root_child_0_child_2_child_1_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_1_child_1_child_0_child_0.strokeWeight = 1;
root_child_0_child_2_child_1_child_1_child_0_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_1_child_1_child_0_child_0) root_child_0_child_2_child_1_child_1_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_1_child_1_child_0_child_0) root_child_0_child_2_child_1_child_1_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_1_child_1_child_0_child_0) root_child_0_child_2_child_1_child_1_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_1_child_1_child_0_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_1_child_1_child_0_child_0) root_child_0_child_2_child_1_child_1_child_0_child_0.cornerRadius = 0;
root_child_0_child_2_child_1_child_1_child_0.appendChild(root_child_0_child_2_child_1_child_1_child_0_child_0);
applySizeAndTransform(root_child_0_child_2_child_1_child_1_child_0_child_0, {"width":6.758216857910156,"height":8.239931106567383,"relativeTransform":[[1,0,5.333333492279053],[0,1,3.8800251483917236]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_2_child_1_child_1_child_0_child_0.x = 5.333333492279053;
root_child_0_child_2_child_1_child_1_child_0_child_0.y = 3.8800251483917236;
root_child_0_child_2_child_1_child_1.appendChild(root_child_0_child_2_child_1_child_1_child_0);
// Child Layout Props
root_child_0_child_2_child_1_child_1_child_0.layoutAlign = "INHERIT";
root_child_0_child_2_child_1_child_1_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_1_child_1_child_0, {"width":16,"height":16,"relativeTransform":[[1,0,8],[0,-1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_2_child_1.appendChild(root_child_0_child_2_child_1_child_1);
// Child Layout Props
root_child_0_child_2_child_1_child_1.layoutAlign = "INHERIT";
root_child_0_child_2_child_1_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_1_child_1, {"width":32,"height":32,"relativeTransform":[[1,0,57],[0,-1,32]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_2.appendChild(root_child_0_child_2_child_1);
// Child Layout Props
root_child_0_child_2_child_1.layoutAlign = "INHERIT";
root_child_0_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_1, {"width":89,"height":32,"relativeTransform":[[1,0,24],[0,1,201]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Frame 1661
const root_child_0_child_2_child_2 = figma.createFrame();
root_child_0_child_2_child_2.name = "Frame 1661";
root_child_0_child_2_child_2.visible = true;
root_child_0_child_2_child_2.opacity = 1;
root_child_0_child_2_child_2.locked = false;
if ("blendMode" in root_child_0_child_2_child_2) root_child_0_child_2_child_2.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_2) root_child_0_child_2_child_2.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_2) root_child_0_child_2_child_2.clipsContent = false;
if ("layoutMode" in root_child_0_child_2_child_2) {
    root_child_0_child_2_child_2.layoutMode = "HORIZONTAL";
    root_child_0_child_2_child_2.primaryAxisSizingMode = "FIXED";
    root_child_0_child_2_child_2.counterAxisSizingMode = "FIXED";
    root_child_0_child_2_child_2.primaryAxisAlignItems = "MIN";
    root_child_0_child_2_child_2.counterAxisAlignItems = "CENTER";
    root_child_0_child_2_child_2.itemSpacing = 16;
    root_child_0_child_2_child_2.paddingTop = 0;
    root_child_0_child_2_child_2.paddingRight = 0;
    root_child_0_child_2_child_2.paddingBottom = 0;
    root_child_0_child_2_child_2.paddingLeft = 0;
}
root_child_0_child_2_child_2.fills = await this.hydratePaints([]);
root_child_0_child_2_child_2.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_2.strokeWeight = 1;
root_child_0_child_2_child_2.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_2) root_child_0_child_2_child_2.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_2) root_child_0_child_2_child_2.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_2) root_child_0_child_2_child_2.strokeMiterLimit = 4;
root_child_0_child_2_child_2.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_2) root_child_0_child_2_child_2.cornerRadius = 0;

// Start Child: Frame 1661
const root_child_0_child_2_child_2_child_0 = figma.createFrame();
root_child_0_child_2_child_2_child_0.name = "Frame 1661";
root_child_0_child_2_child_2_child_0.visible = true;
root_child_0_child_2_child_2_child_0.opacity = 1;
root_child_0_child_2_child_2_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_2_child_0) root_child_0_child_2_child_2_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_2_child_0) root_child_0_child_2_child_2_child_0.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_2_child_0) root_child_0_child_2_child_2_child_0.clipsContent = false;
if ("layoutMode" in root_child_0_child_2_child_2_child_0) {
    root_child_0_child_2_child_2_child_0.layoutMode = "VERTICAL";
    root_child_0_child_2_child_2_child_0.primaryAxisSizingMode = "AUTO";
    root_child_0_child_2_child_2_child_0.counterAxisSizingMode = "FIXED";
    root_child_0_child_2_child_2_child_0.primaryAxisAlignItems = "MIN";
    root_child_0_child_2_child_2_child_0.counterAxisAlignItems = "MIN";
    root_child_0_child_2_child_2_child_0.itemSpacing = 16;
    root_child_0_child_2_child_2_child_0.paddingTop = 0;
    root_child_0_child_2_child_2_child_0.paddingRight = 0;
    root_child_0_child_2_child_2_child_0.paddingBottom = 0;
    root_child_0_child_2_child_2_child_0.paddingLeft = 0;
}
root_child_0_child_2_child_2_child_0.fills = await this.hydratePaints([]);
root_child_0_child_2_child_2_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_2_child_0.strokeWeight = 1;
root_child_0_child_2_child_2_child_0.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_2_child_0) root_child_0_child_2_child_2_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_2_child_0) root_child_0_child_2_child_2_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_2_child_0) root_child_0_child_2_child_2_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_2_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_2_child_0) root_child_0_child_2_child_2_child_0.cornerRadius = 0;

// Start Child: by Author name
const root_child_0_child_2_child_2_child_0_child_0 = figma.createText();
root_child_0_child_2_child_2_child_0_child_0.name = "by Author name";
root_child_0_child_2_child_2_child_0_child_0.visible = true;
root_child_0_child_2_child_2_child_0_child_0.opacity = 1;
root_child_0_child_2_child_2_child_0_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_2_child_0_child_0) root_child_0_child_2_child_2_child_0_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_2_child_0_child_0) root_child_0_child_2_child_2_child_0_child_0.isMask = false;
root_child_0_child_2_child_2_child_0_child_0.fills = await this.hydratePaints([{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38823530077934265,"g":0.47843137383461,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_0_child_2_child_2_child_0_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_2_child_0_child_0.strokeWeight = 1;
root_child_0_child_2_child_2_child_0_child_0.strokeAlign = "OUTSIDE";
if ("strokeCap" in root_child_0_child_2_child_2_child_0_child_0) root_child_0_child_2_child_2_child_0_child_0.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_2_child_0_child_0) root_child_0_child_2_child_2_child_0_child_0.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_2_child_0_child_0) root_child_0_child_2_child_2_child_0_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_2_child_0_child_0.effects = [];
// Text Properties
root_child_0_child_2_child_2_child_0_child_0.characters = `by Author name`;
root_child_0_child_2_child_2_child_0_child_0.textAlignHorizontal = "LEFT";
root_child_0_child_2_child_2_child_0_child_0.textAlignVertical = "CENTER";
root_child_0_child_2_child_2_child_0_child_0.textAutoResize = "HEIGHT";
root_child_0_child_2_child_2_child_0_child_0.letterSpacing = {"unit":"PIXELS","value":0};
if ("textCase" in root_child_0_child_2_child_2_child_0_child_0) root_child_0_child_2_child_2_child_0_child_0.textCase = "ORIGINAL";
if ("textDecoration" in root_child_0_child_2_child_2_child_0_child_0) root_child_0_child_2_child_2_child_0_child_0.textDecoration = "NONE";
// Styled Segments
await this.setRangeFont(root_child_0_child_2_child_2_child_0_child_0, 0, 3, {"family":"Open Sans","style":"Light"});
root_child_0_child_2_child_2_child_0_child_0.setRangeFills(0, 3, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38823530077934265,"g":0.47843137383461,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_0_child_2_child_2_child_0_child_0.setRangeFontSize(0, 3, 14);
await this.setRangeFont(root_child_0_child_2_child_2_child_0_child_0, 3, 14, {"family":"Open Sans","style":"SemiBold"});
root_child_0_child_2_child_2_child_0_child_0.setRangeFills(3, 14, [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.38823530077934265,"g":0.47843137383461,"b":0.5215686559677124},"boundVariables":{}}]);
root_child_0_child_2_child_2_child_0_child_0.setRangeFontSize(3, 14, 16);
root_child_0_child_2_child_2_child_0.appendChild(root_child_0_child_2_child_2_child_0_child_0);
// Child Layout Props
root_child_0_child_2_child_2_child_0_child_0.layoutAlign = "STRETCH";
root_child_0_child_2_child_2_child_0_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_2_child_0_child_0, {"width":525,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_2_child_2.appendChild(root_child_0_child_2_child_2_child_0);
// Child Layout Props
root_child_0_child_2_child_2_child_0.layoutAlign = "INHERIT";
root_child_0_child_2_child_2_child_0.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_2_child_2_child_0, {"width":525,"height":24,"relativeTransform":[[1,0,0],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});

// Start Child: Actions / Star
const root_child_0_child_2_child_2_child_1 = figma.createFrame();
root_child_0_child_2_child_2_child_1.name = "Actions / Star";
root_child_0_child_2_child_2_child_1.visible = true;
root_child_0_child_2_child_2_child_1.opacity = 1;
root_child_0_child_2_child_2_child_1.locked = false;
if ("blendMode" in root_child_0_child_2_child_2_child_1) root_child_0_child_2_child_2_child_1.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_2_child_1) root_child_0_child_2_child_2_child_1.isMask = false;
if ("clipsContent" in root_child_0_child_2_child_2_child_1) root_child_0_child_2_child_2_child_1.clipsContent = true;
if ("layoutMode" in root_child_0_child_2_child_2_child_1) {
    root_child_0_child_2_child_2_child_1.layoutMode = "NONE";
}
root_child_0_child_2_child_2_child_1.fills = await this.hydratePaints([{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}]);
root_child_0_child_2_child_2_child_1.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_2_child_1.strokeWeight = 1;
root_child_0_child_2_child_2_child_1.strokeAlign = "INSIDE";
if ("strokeCap" in root_child_0_child_2_child_2_child_1) root_child_0_child_2_child_2_child_1.strokeCap = "NONE";
if ("strokeJoin" in root_child_0_child_2_child_2_child_1) root_child_0_child_2_child_2_child_1.strokeJoin = "MITER";
if ("strokeMiterLimit" in root_child_0_child_2_child_2_child_1) root_child_0_child_2_child_2_child_1.strokeMiterLimit = 4;
root_child_0_child_2_child_2_child_1.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_2_child_1) root_child_0_child_2_child_2_child_1.cornerRadius = 0;

// Start Child: Vector (Stroke)
const root_child_0_child_2_child_2_child_1_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Vector__Stroke__I3383_3719_3016_7769_svg_22_000059127807617x21_020004272460938);
root_child_0_child_2_child_2_child_1_child_0_svgContainer.fills = []; // Ensure transparent background
const root_child_0_child_2_child_2_child_1_child_0 = figma.flatten([root_child_0_child_2_child_2_child_1_child_0_svgContainer]);
root_child_0_child_2_child_2_child_1_child_0.name = "Vector (Stroke)";
root_child_0_child_2_child_2_child_1_child_0.visible = true;
root_child_0_child_2_child_2_child_1_child_0.opacity = 1;
root_child_0_child_2_child_2_child_1_child_0.locked = false;
if ("blendMode" in root_child_0_child_2_child_2_child_1_child_0) root_child_0_child_2_child_2_child_1_child_0.blendMode = "PASS_THROUGH";
if ("isMask" in root_child_0_child_2_child_2_child_1_child_0) root_child_0_child_2_child_2_child_1_child_0.isMask = false;
root_child_0_child_2_child_2_child_1_child_0.strokes = await this.hydratePaints([]);
root_child_0_child_2_child_2_child_1_child_0.strokeWeight = 2;
root_child_0_child_2_child_2_child_1_child_0.strokeAlign = "CENTER";
if ("strokeCap" in root_child_0_child_2_child_2_child_1_child_0) root_child_0_child_2_child_2_child_1_child_0.strokeCap = "ROUND";
if ("strokeJoin" in root_child_0_child_2_child_2_child_1_child_0) root_child_0_child_2_child_2_child_1_child_0.strokeJoin = "ROUND";
if ("strokeMiterLimit" in root_child_0_child_2_child_2_child_1_child_0) root_child_0_child_2_child_2_child_1_child_0.strokeMiterLimit = 4;
root_child_0_child_2_child_2_child_1_child_0.effects = [];
if ("cornerRadius" in root_child_0_child_2_child_2_child_1_child_0) root_child_0_child_2_child_2_child_1_child_0.cornerRadius = 0;
root_child_0_child_2_child_2_child_1.appendChild(root_child_0_child_2_child_2_child_1_child_0);
applySizeAndTransform(root_child_0_child_2_child_2_child_1_child_0, {"width":22.000059127807617,"height":21.020004272460938,"relativeTransform":[[1,0,0.9999708533287048],[0,1,1]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"});
root_child_0_child_2_child_2_child_1_child_0.x = 0.9999708533287048;
root_child_0_child_2_child_2_child_1_child_0.y = 1;
root_child_0_child_2_child_2.appendChild(root_child_0_child_2_child_2_child_1);
// Child Layout Props
root_child_0_child_2_child_2_child_1.layoutAlign = "INHERIT";
root_child_0_child_2_child_2_child_1.layoutGrow = 0;
applySizeAndTransform(root_child_0_child_2_child_2_child_1, {"width":24,"height":24,"relativeTransform":[[1,0,541],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0_child_2.appendChild(root_child_0_child_2_child_2);
// Child Layout Props
root_child_0_child_2_child_2.layoutAlign = "STRETCH";
root_child_0_child_2_child_2.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_2_child_2, {"width":565,"height":35,"relativeTransform":[[1,0,24],[0,1,249]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root_child_0.appendChild(root_child_0_child_2);
// Child Layout Props
root_child_0_child_2.layoutAlign = "STRETCH";
root_child_0_child_2.layoutGrow = 1;
applySizeAndTransform(root_child_0_child_2, {"width":613,"height":308,"relativeTransform":[[1,0,464],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});
root.appendChild(root_child_0);
// Child Layout Props
root_child_0.layoutAlign = "STRETCH";
root_child_0.layoutGrow = 0;
applySizeAndTransform(root_child_0, {"width":1077,"height":308,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"});


        applySizeAndTransform(root, {"width":1077,"height":308,"parentIsAutoLayout":false});

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

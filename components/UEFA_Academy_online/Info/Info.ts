import { BaseComponent, ComponentProps } from "../../BaseComponent";


// SVG Assets
const SVG_assets_icon_Vector_I3383_3749_1004_374_svg_20x20 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7C9.4477 7 9 6.55228 9 6C9 5.44772 9.4477 5 10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 2C14.4154 2 18 5.58457 18 10C18 14.4154 14.4154 18 10 18C5.58457 18 2 14.4154 2 10C2 5.58457 5.58457 2 10 2Z" fill="black"/>
</svg>
`;
const SVG_assets_icon_Vector_I3384_160_5086_20_svg_18_715295791625977x19_192251205444336 = `<svg width="18.715295791625977" height="19.192251205444336" viewBox="0 0 18.715295791625977 19.192251205444336" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.60767 16.3846C2.39486 16.3846 2.21666 16.3128 2.07307 16.1692C1.92947 16.0256 1.85767 15.8474 1.85767 15.6346C1.85767 15.4218 1.92947 15.2436 2.07307 15.1C2.21666 14.9564 2.39486 14.8846 2.60767 14.8846H3.66537V7.42305C3.66537 6.07818 4.08043 4.88908 4.91055 3.85575C5.74068 2.82242 6.80639 2.16153 8.10767 1.87308V1.25C8.10767 0.90385 8.22946 0.608984 8.47305 0.365401C8.71663 0.121801 9.0115 0 9.35765 0C9.7038 0 9.99866 0.121801 10.2422 0.365401C10.4858 0.608984 10.6076 0.90385 10.6076 1.25V1.87308C11.9089 2.16153 12.9746 2.82242 13.8047 3.85575C14.6349 4.88908 15.0499 6.07818 15.0499 7.42305V14.8846H16.1076C16.3204 14.8846 16.4986 14.9564 16.6422 15.1C16.7858 15.2436 16.8576 15.4218 16.8576 15.6346C16.8576 15.8474 16.7858 16.0256 16.6422 16.1692C16.4986 16.3128 16.3204 16.3846 16.1076 16.3846H2.60767ZM9.35765 19.1923C8.85893 19.1923 8.43297 19.0157 8.07977 18.6625C7.72657 18.3093 7.54997 17.8833 7.54997 17.3846H11.1653C11.1653 17.8833 10.9887 18.3093 10.6355 18.6625C10.2823 19.0157 9.85636 19.1923 9.35765 19.1923ZM0.723048 7.41343C0.510248 7.41343 0.332048 7.33234 0.188448 7.17018C0.0448644 7.00799 -0.016669 6.81729 0.00384765 6.59808C0.111531 5.35448 0.445506 4.19998 1.00577 3.1346C1.56602 2.06922 2.29102 1.14935 3.18077 0.375C3.34616 0.230133 3.53429 0.162826 3.74517 0.173076C3.95607 0.183326 4.12562 0.276276 4.25382 0.451926C4.38202 0.627559 4.42946 0.81665 4.39612 1.0192C4.36279 1.22177 4.26343 1.39741 4.09805 1.54613C3.38395 2.18203 2.80414 2.93395 2.35862 3.8019C1.91311 4.66985 1.6365 5.61088 1.5288 6.62498C1.50188 6.84421 1.41567 7.03043 1.27017 7.18363C1.12466 7.33683 0.942281 7.41343 0.723048 7.41343ZM17.9922 7.41343C17.773 7.41343 17.5906 7.33683 17.4451 7.18363C17.2996 7.03043 17.2134 6.84421 17.1865 6.62498C17.0788 5.61088 16.8022 4.66985 16.3567 3.8019C15.9112 2.93395 15.3313 2.18203 14.6172 1.54613C14.4519 1.39741 14.3525 1.22177 14.3192 1.0192C14.2858 0.81665 14.3333 0.627559 14.4615 0.451926C14.5897 0.276276 14.7592 0.183326 14.9701 0.173076C15.181 0.162826 15.3691 0.230133 15.5345 0.375C16.4243 1.14935 17.1493 2.06922 17.7095 3.1346C18.2698 4.19998 18.6038 5.35448 18.7114 6.59808C18.732 6.81729 18.6704 7.00799 18.5268 7.17018C18.3832 7.33234 18.205 7.41343 17.9922 7.41343Z" fill="black"/>
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


export class Info extends BaseComponent {
    async create(props: ComponentProps & { text?: string }): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }

        const root = figma.createFrame();
        root.name = "Info";
        root.visible = true;
        root.opacity = 1;
        root.locked = false;
        if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
        if ("isMask" in root) root.isMask = false;
        if ("clipsContent" in root) root.clipsContent = false;
        if ("layoutMode" in root) {
            root.layoutMode = "HORIZONTAL";
            root.primaryAxisSizingMode = "FIXED";
            root.counterAxisSizingMode = "AUTO";
            root.primaryAxisAlignItems = "MIN";
            root.counterAxisAlignItems = "MIN";
            root.itemSpacing = 0;
            root.paddingTop = 0;
            root.paddingRight = 120;
            root.paddingBottom = 0;
            root.paddingLeft = 120;
        }
        root.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.7803921699523926, "g": 0.9176470637321472, "b": 0.9843137264251709 }, "boundVariables": {} }]);
        root.strokes = await this.hydratePaints([]);
        root.strokeWeight = 1;
        root.strokeAlign = "INSIDE";
        if ("strokeCap" in root) root.strokeCap = "NONE";
        if ("strokeJoin" in root) root.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
        root.effects = [];
        if ("cornerRadius" in root) root.cornerRadius = 4;

        // Start Child: AV / play-circle
        const root_child_0 = figma.createFrame();
        root_child_0.name = "AV / play-circle";
        root_child_0.visible = true;
        root_child_0.opacity = 1;
        root_child_0.locked = false;
        if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_0) root_child_0.isMask = false;
        if ("clipsContent" in root_child_0) root_child_0.clipsContent = false;
        if ("layoutMode" in root_child_0) {
            root_child_0.layoutMode = "NONE";
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
        root.appendChild(root_child_0);
        // Child Layout Props
        root_child_0.layoutPositioning = "ABSOLUTE";
        root_child_0.layoutAlign = "INHERIT";
        root_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_0, { "width": 64, "height": 64, "relativeTransform": [[1, 0, 488], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "ABSOLUTE" });

        // Start Child: Frame 1615
        const root_child_1 = figma.createFrame();
        root_child_1.name = "Frame 1615";
        root_child_1.visible = true;
        root_child_1.opacity = 1;
        root_child_1.locked = false;
        if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1) root_child_1.isMask = false;
        if ("clipsContent" in root_child_1) root_child_1.clipsContent = true;
        if ("layoutMode" in root_child_1) {
            root_child_1.layoutMode = "HORIZONTAL";
            root_child_1.primaryAxisSizingMode = "FIXED";
            root_child_1.counterAxisSizingMode = "FIXED";
            root_child_1.primaryAxisAlignItems = "MIN";
            root_child_1.counterAxisAlignItems = "MIN";
            root_child_1.itemSpacing = 16;
            root_child_1.paddingTop = 16;
            root_child_1.paddingRight = 0;
            root_child_1.paddingBottom = 16;
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

        // Start Child: Frame 1924
        const root_child_1_child_0 = figma.createFrame();
        root_child_1_child_0.name = "Frame 1924";
        root_child_1_child_0.visible = true;
        root_child_1_child_0.opacity = 1;
        root_child_1_child_0.locked = false;
        if ("blendMode" in root_child_1_child_0) root_child_1_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1_child_0) root_child_1_child_0.isMask = false;
        if ("clipsContent" in root_child_1_child_0) root_child_1_child_0.clipsContent = false;
        if ("layoutMode" in root_child_1_child_0) {
            root_child_1_child_0.layoutMode = "VERTICAL";
            root_child_1_child_0.primaryAxisSizingMode = "AUTO";
            root_child_1_child_0.counterAxisSizingMode = "AUTO";
            root_child_1_child_0.primaryAxisAlignItems = "CENTER";
            root_child_1_child_0.counterAxisAlignItems = "MIN";
            root_child_1_child_0.itemSpacing = 8;
            root_child_1_child_0.paddingTop = 6;
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

        // Start Child: Support / information
        const root_child_1_child_0_child_0 = figma.createFrame();
        root_child_1_child_0_child_0.name = "Support / information";
        root_child_1_child_0_child_0.visible = true;
        root_child_1_child_0_child_0.opacity = 1;
        root_child_1_child_0_child_0.locked = false;
        if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.isMask = false;
        if ("clipsContent" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.clipsContent = false;
        if ("layoutMode" in root_child_1_child_0_child_0) {
            root_child_1_child_0_child_0.layoutMode = "NONE";
        }
        root_child_1_child_0_child_0.fills = await this.hydratePaints([]);
        root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
        root_child_1_child_0_child_0.strokeWeight = 1;
        root_child_1_child_0_child_0.strokeAlign = "INSIDE";
        if ("strokeCap" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeCap = "NONE";
        if ("strokeJoin" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeMiterLimit = 4;
        root_child_1_child_0_child_0.effects = [];
        if ("cornerRadius" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.cornerRadius = 0;

        // Start Child: Vector
        const root_child_1_child_0_child_0_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Vector_I3383_3749_1004_374_svg_20x20);
        root_child_1_child_0_child_0_child_0_svgContainer.fills = []; // Ensure transparent background
        const root_child_1_child_0_child_0_child_0 = figma.flatten([root_child_1_child_0_child_0_child_0_svgContainer]);
        root_child_1_child_0_child_0_child_0.name = "Vector";
        root_child_1_child_0_child_0_child_0.visible = true;
        root_child_1_child_0_child_0_child_0.opacity = 1;
        root_child_1_child_0_child_0_child_0.locked = false;
        if ("blendMode" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.isMask = false;
        root_child_1_child_0_child_0_child_0.strokes = await this.hydratePaints([]);
        root_child_1_child_0_child_0_child_0.strokeWeight = 1;
        root_child_1_child_0_child_0_child_0.strokeAlign = "INSIDE";
        if ("strokeCap" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeCap = "NONE";
        if ("strokeJoin" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.strokeMiterLimit = 4;
        root_child_1_child_0_child_0_child_0.effects = [];
        if ("cornerRadius" in root_child_1_child_0_child_0_child_0) root_child_1_child_0_child_0_child_0.cornerRadius = 0;
        root_child_1_child_0_child_0.appendChild(root_child_1_child_0_child_0_child_0);
        applySizeAndTransform(root_child_1_child_0_child_0_child_0, { "width": 20, "height": 20, "relativeTransform": [[1, 0, 2], [0, 1, 2]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" });
        root_child_1_child_0_child_0_child_0.x = 2;
        root_child_1_child_0_child_0_child_0.y = 2;
        root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
        // Child Layout Props
        root_child_1_child_0_child_0.layoutAlign = "INHERIT";
        root_child_1_child_0_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_1_child_0_child_0, { "width": 24, "height": 24, "relativeTransform": [[1, 0, 0], [0, 1, 6]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
        root_child_1.appendChild(root_child_1_child_0);
        // Child Layout Props
        root_child_1_child_0.layoutAlign = "INHERIT";
        root_child_1_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_1_child_0, { "width": 24, "height": 30, "relativeTransform": [[1, 0, 0], [0, 1, 16]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });

        // Start Child: Frame 1923
        const root_child_1_child_1 = figma.createFrame();
        root_child_1_child_1.name = "Frame 1923";
        root_child_1_child_1.visible = true;
        root_child_1_child_1.opacity = 1;
        root_child_1_child_1.locked = false;
        if ("blendMode" in root_child_1_child_1) root_child_1_child_1.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1_child_1) root_child_1_child_1.isMask = false;
        if ("clipsContent" in root_child_1_child_1) root_child_1_child_1.clipsContent = false;
        if ("layoutMode" in root_child_1_child_1) {
            root_child_1_child_1.layoutMode = "VERTICAL";
            root_child_1_child_1.primaryAxisSizingMode = "AUTO";
            root_child_1_child_1.counterAxisSizingMode = "FIXED";
            root_child_1_child_1.primaryAxisAlignItems = "CENTER";
            root_child_1_child_1.counterAxisAlignItems = "MIN";
            root_child_1_child_1.itemSpacing = 4;
            root_child_1_child_1.paddingTop = 0;
            root_child_1_child_1.paddingRight = 0;
            root_child_1_child_1.paddingBottom = 0;
            root_child_1_child_1.paddingLeft = 0;
        }
        root_child_1_child_1.fills = await this.hydratePaints([]);
        root_child_1_child_1.strokes = await this.hydratePaints([]);
        root_child_1_child_1.strokeWeight = 1;
        root_child_1_child_1.strokeAlign = "INSIDE";
        if ("strokeCap" in root_child_1_child_1) root_child_1_child_1.strokeCap = "NONE";
        if ("strokeJoin" in root_child_1_child_1) root_child_1_child_1.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_1_child_1) root_child_1_child_1.strokeMiterLimit = 4;
        root_child_1_child_1.effects = [];
        if ("cornerRadius" in root_child_1_child_1) root_child_1_child_1.cornerRadius = 0;

        // Start Child: Don’t miss out!
        const root_child_1_child_1_child_0 = figma.createText();
        root_child_1_child_1_child_0.name = "Don’t miss out!";
        root_child_1_child_1_child_0.visible = true;
        root_child_1_child_1_child_0.opacity = 1;
        root_child_1_child_1_child_0.locked = false;
        if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.isMask = false;
        root_child_1_child_1_child_0.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }]);
        root_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
        root_child_1_child_1_child_0.strokeWeight = 1;
        root_child_1_child_1_child_0.strokeAlign = "OUTSIDE";
        if ("strokeCap" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeCap = "NONE";
        if ("strokeJoin" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeMiterLimit = 4;
        root_child_1_child_1_child_0.effects = [];
        // Text Properties
        root_child_1_child_1_child_0.characters = `Don’t miss out!`;
        root_child_1_child_1_child_0.fontSize = 20;
        root_child_1_child_1_child_0.textAlignHorizontal = "LEFT";
        root_child_1_child_1_child_0.textAlignVertical = "TOP";
        root_child_1_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
        root_child_1_child_1_child_0.letterSpacing = { "unit": "PIXELS", "value": -0.10000000149011612 };
        root_child_1_child_1_child_0.lineHeight = { "unit": "PERCENT", "value": 150 };
        if ("textCase" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.textCase = "ORIGINAL";
        if ("textDecoration" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.textDecoration = "NONE";
        await this.setFont(root_child_1_child_1_child_0, { "family": "Manrope", "style": "Bold" });
        // Styled Segments
        await this.setRangeFont(root_child_1_child_1_child_0, 0, 15, { "family": "Manrope", "style": "Bold" });
        root_child_1_child_1_child_0.setRangeFills(0, 15, [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }]);
        root_child_1_child_1_child_0.setRangeFontSize(0, 15, 20);
        root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
        // Child Layout Props
        root_child_1_child_1_child_0.layoutAlign = "INHERIT";
        root_child_1_child_1_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_1_child_1_child_0, { "width": 146, "height": 30, "relativeTransform": [[1, 0, 0], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });

        // Content area logic: If props.text is provided, use it. Otherwise use the default bell icon + segmented text.
        if (props.text) {
            // Remove the defaultsegmented text parts and icon if we have custom text
            // In this specific implementation, we just create a single text node instead of Frame 1925
            const customTextNode = figma.createText();
            customTextNode.name = "Custom Info Text";
            customTextNode.characters = props.text;
            customTextNode.fontSize = 16;
            customTextNode.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 } }]);
            await this.setFont(customTextNode, { "family": "Manrope", "style": "SemiBold" });
            customTextNode.layoutAlign = "STRETCH";
            customTextNode.layoutGrow = 1;

            root_child_1_child_1.appendChild(customTextNode);
        } else {
            // Start Child: Frame 1925
            const root_child_1_child_1_child_1 = figma.createFrame();
            root_child_1_child_1_child_1.name = "Frame 1925";
            root_child_1_child_1_child_1.visible = true;
            root_child_1_child_1_child_1.opacity = 1;
            root_child_1_child_1_child_1.locked = false;
            if ("blendMode" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
            if ("isMask" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.isMask = false;
            if ("clipsContent" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.clipsContent = false;
            if ("layoutMode" in root_child_1_child_1_child_1) {
                root_child_1_child_1_child_1.layoutMode = "HORIZONTAL";
                root_child_1_child_1_child_1.primaryAxisSizingMode = "FIXED";
                root_child_1_child_1_child_1.counterAxisSizingMode = "AUTO";
                root_child_1_child_1_child_1.primaryAxisAlignItems = "MIN";
                root_child_1_child_1_child_1.counterAxisAlignItems = "MIN";
                root_child_1_child_1_child_1.itemSpacing = 4;
                root_child_1_child_1_child_1.paddingTop = 0;
                root_child_1_child_1_child_1.paddingRight = 0;
                root_child_1_child_1_child_1.paddingBottom = 0;
                root_child_1_child_1_child_1.paddingLeft = 0;
            }
            root_child_1_child_1_child_1.fills = await this.hydratePaints([]);
            root_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
            root_child_1_child_1_child_1.strokeWeight = 1;
            root_child_1_child_1_child_1.strokeAlign = "INSIDE";
            if ("strokeCap" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeCap = "NONE";
            if ("strokeJoin" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeJoin = "MITER";
            if ("strokeMiterLimit" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.strokeMiterLimit = 4;
            root_child_1_child_1_child_1.effects = [];
            if ("cornerRadius" in root_child_1_child_1_child_1) root_child_1_child_1_child_1.cornerRadius = 0;

            // Start Child: Click on the bell icon
            const root_child_1_child_1_child_1_child_0 = figma.createText();
            root_child_1_child_1_child_1_child_0.name = "Click on the bell icon";
            root_child_1_child_1_child_1_child_0.visible = true;
            root_child_1_child_1_child_1_child_0.opacity = 1;
            root_child_1_child_1_child_1_child_0.locked = false;
            if ("blendMode" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
            if ("isMask" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.isMask = false;
            root_child_1_child_1_child_1_child_0.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }]);
            root_child_1_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
            root_child_1_child_1_child_1_child_0.strokeWeight = 1;
            root_child_1_child_1_child_1_child_0.strokeAlign = "OUTSIDE";
            if ("strokeCap" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeCap = "NONE";
            if ("strokeJoin" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeJoin = "MITER";
            if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.strokeMiterLimit = 4;
            root_child_1_child_1_child_1_child_0.effects = [];
            // Text Properties
            root_child_1_child_1_child_1_child_0.characters = `Click on the bell icon`;
            root_child_1_child_1_child_1_child_0.fontSize = 16;
            root_child_1_child_1_child_1_child_0.textAlignHorizontal = "LEFT";
            root_child_1_child_1_child_1_child_0.textAlignVertical = "TOP";
            root_child_1_child_1_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
            root_child_1_child_1_child_1_child_0.letterSpacing = { "unit": "PIXELS", "value": 0 };
            root_child_1_child_1_child_1_child_0.lineHeight = { "unit": "PERCENT", "value": 129.99999523162842 };
            if ("textCase" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.textCase = "ORIGINAL";
            if ("textDecoration" in root_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_0.textDecoration = "NONE";
            await this.setFont(root_child_1_child_1_child_1_child_0, { "family": "Manrope", "style": "SemiBold" });
            // Styled Segments
            await this.setRangeFont(root_child_1_child_1_child_1_child_0, 0, 22, { "family": "Manrope", "style": "SemiBold" });
            root_child_1_child_1_child_1_child_0.setRangeFills(0, 22, [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }]);
            root_child_1_child_1_child_1_child_0.setRangeFontSize(0, 22, 16);
            root_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_0);
            // Child Layout Props
            root_child_1_child_1_child_1_child_0.layoutAlign = "INHERIT";
            root_child_1_child_1_child_1_child_0.layoutGrow = 0;
            applySizeAndTransform(root_child_1_child_1_child_1_child_0, { "width": 157, "height": 21, "relativeTransform": [[1, 0, 0], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });

            // Start Child: Notifications / notifications-active
            const root_child_1_child_1_child_1_child_1 = figma.createFrame();
            root_child_1_child_1_child_1_child_1.name = "Notifications / notifications-active";
            root_child_1_child_1_child_1_child_1.visible = true;
            root_child_1_child_1_child_1_child_1.opacity = 1;
            root_child_1_child_1_child_1_child_1.locked = false;
            if ("blendMode" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.blendMode = "PASS_THROUGH";
            if ("isMask" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.isMask = false;
            if ("clipsContent" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.clipsContent = false;
            if ("layoutMode" in root_child_1_child_1_child_1_child_1) {
                root_child_1_child_1_child_1_child_1.layoutMode = "NONE";
            }
            root_child_1_child_1_child_1_child_1.fills = await this.hydratePaints([]);
            root_child_1_child_1_child_1_child_1.strokes = await this.hydratePaints([]);
            root_child_1_child_1_child_1_child_1.strokeWeight = 1;
            root_child_1_child_1_child_1_child_1.strokeAlign = "INSIDE";
            if ("strokeCap" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeCap = "NONE";
            if ("strokeJoin" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeJoin = "MITER";
            if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.strokeMiterLimit = 4;
            root_child_1_child_1_child_1_child_1.effects = [];
            if ("cornerRadius" in root_child_1_child_1_child_1_child_1) root_child_1_child_1_child_1_child_1.cornerRadius = 0;

            // Start Child: Vector
            const root_child_1_child_1_child_1_child_1_child_0_svgContainer = figma.createNodeFromSvg(SVG_assets_icon_Vector_I3384_160_5086_20_svg_18_715295791625977x19_192251205444336);
            root_child_1_child_1_child_1_child_1_child_0_svgContainer.fills = []; // Ensure transparent background
            const root_child_1_child_1_child_1_child_1_child_0 = figma.flatten([root_child_1_child_1_child_1_child_1_child_0_svgContainer]);
            root_child_1_child_1_child_1_child_1_child_0.name = "Vector";
            root_child_1_child_1_child_1_child_1_child_0.visible = true;
            root_child_1_child_1_child_1_child_1_child_0.opacity = 1;
            root_child_1_child_1_child_1_child_1_child_0.locked = false;
            if ("blendMode" in root_child_1_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
            if ("isMask" in root_child_1_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_1_child_0.isMask = false;
            root_child_1_child_1_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
            root_child_1_child_1_child_1_child_1_child_0.strokeWeight = 1;
            root_child_1_child_1_child_1_child_1_child_0.strokeAlign = "INSIDE";
            if ("strokeCap" in root_child_1_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_1_child_0.strokeCap = "NONE";
            if ("strokeJoin" in root_child_1_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_1_child_0.strokeJoin = "MITER";
            if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_1_child_0.strokeMiterLimit = 4;
            root_child_1_child_1_child_1_child_1_child_0.effects = [];
            if ("cornerRadius" in root_child_1_child_1_child_1_child_1_child_0) root_child_1_child_1_child_1_child_1_child_0.cornerRadius = 0;
            root_child_1_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_1_child_0);
            applySizeAndTransform(root_child_1_child_1_child_1_child_1_child_0, { "width": 18.715295791625977, "height": 19.192251205444336, "relativeTransform": [[1, 0, 2.642333984375], [0, 1, 2.5]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" });
            root_child_1_child_1_child_1_child_1_child_0.x = 2.642333984375;
            root_child_1_child_1_child_1_child_1_child_0.y = 2.5;
            root_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_1);
            // Child Layout Props
            root_child_1_child_1_child_1_child_1.layoutAlign = "INHERIT";
            root_child_1_child_1_child_1_child_1.layoutGrow = 0;
            applySizeAndTransform(root_child_1_child_1_child_1_child_1, { "width": 24, "height": 24, "relativeTransform": [[1, 0, 161], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });

            // Start Child: in the top-right corner on the page. Use it to choose what you want to follow and we’ll notify you when new resources are added that match your interests.
            const root_child_1_child_1_child_1_child_2 = figma.createText();
            root_child_1_child_1_child_1_child_2.name = "in the top-right corner on the page. Use it to choose what you want to follow and we’ll notify you when new resources are added that match your interests.";
            root_child_1_child_1_child_1_child_2.visible = true;
            root_child_1_child_1_child_1_child_2.opacity = 1;
            root_child_1_child_1_child_1_child_2.locked = false;
            if ("blendMode" in root_child_1_child_1_child_1_child_2) root_child_1_child_1_child_1_child_2.blendMode = "PASS_THROUGH";
            if ("isMask" in root_child_1_child_1_child_1_child_2) root_child_1_child_1_child_1_child_2.isMask = false;
            root_child_1_child_1_child_1_child_2.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }]);
            root_child_1_child_1_child_1_child_2.strokes = await this.hydratePaints([]);
            root_child_1_child_1_child_1_child_2.strokeWeight = 1;
            root_child_1_child_1_child_1_child_2.strokeAlign = "OUTSIDE";
            if ("strokeCap" in root_child_1_child_1_child_1_child_2) root_child_1_child_1_child_1_child_2.strokeCap = "NONE";
            if ("strokeJoin" in root_child_1_child_1_child_1_child_2) root_child_1_child_1_child_1_child_2.strokeJoin = "MITER";
            if ("strokeMiterLimit" in root_child_1_child_1_child_1_child_2) root_child_1_child_1_child_1_child_2.strokeMiterLimit = 4;
            root_child_1_child_1_child_1_child_2.effects = [];
            // Text Properties
            root_child_1_child_1_child_1_child_2.characters = `in the top-right corner on the page. Use it to choose what you want to follow and we’ll notify you when new resources are added that match your interests.`;
            root_child_1_child_1_child_1_child_2.fontSize = 16;
            root_child_1_child_1_child_1_child_2.textAlignHorizontal = "LEFT";
            root_child_1_child_1_child_1_child_2.textAlignVertical = "TOP";
            root_child_1_child_1_child_1_child_2.textAutoResize = "HEIGHT";
            root_child_1_child_1_child_1_child_2.letterSpacing = { "unit": "PIXELS", "value": 0 };
            root_child_1_child_1_child_1_child_2.lineHeight = { "unit": "PERCENT", "value": 129.99999523162842 };
            if ("textCase" in root_child_1_child_1_child_1_child_2) root_child_1_child_1_child_1_child_2.textCase = "ORIGINAL";
            if ("textDecoration" in root_child_1_child_1_child_1_child_2) root_child_1_child_1_child_1_child_2.textDecoration = "NONE";
            await this.setFont(root_child_1_child_1_child_1_child_2, { "family": "Manrope", "style": "SemiBold" });
            // Styled Segments
            await this.setRangeFont(root_child_1_child_1_child_1_child_2, 0, 154, { "family": "Manrope", "style": "SemiBold" });
            root_child_1_child_1_child_1_child_2.setRangeFills(0, 154, [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }]);
            root_child_1_child_1_child_1_child_2.setRangeFontSize(0, 154, 16);
            root_child_1_child_1_child_1.appendChild(root_child_1_child_1_child_1_child_2);
            // Child Layout Props
            root_child_1_child_1_child_1_child_2.layoutAlign = "INHERIT";
            root_child_1_child_1_child_1_child_2.layoutGrow = 1;
            applySizeAndTransform(root_child_1_child_1_child_1_child_2, { "width": 1211, "height": 21, "relativeTransform": [[1, 0, 189], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
            root_child_1_child_1.appendChild(root_child_1_child_1_child_1);
            // Child Layout Props
            root_child_1_child_1_child_1.layoutAlign = "STRETCH";
            root_child_1_child_1_child_1.layoutGrow = 0;
            applySizeAndTransform(root_child_1_child_1_child_1, { "width": 1400, "height": 24, "relativeTransform": [[1, 0, 0], [0, 1, 34]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
        }
        root_child_1.appendChild(root_child_1_child_1);
        // Child Layout Props
        root_child_1_child_1.layoutAlign = "INHERIT";
        root_child_1_child_1.layoutGrow = 1;
        applySizeAndTransform(root_child_1_child_1, { "width": 1400, "height": 58, "relativeTransform": [[1, 0, 40], [0, 1, 16]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
        root.appendChild(root_child_1);
        // Child Layout Props
        root_child_1.layoutAlign = "STRETCH";
        root_child_1.layoutGrow = 1;
        applySizeAndTransform(root_child_1, { "width": 1440, "height": 90, "relativeTransform": [[1, 0, 120], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });


        applySizeAndTransform(root, { "width": 1680, "height": 90, "parentIsAutoLayout": false });

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

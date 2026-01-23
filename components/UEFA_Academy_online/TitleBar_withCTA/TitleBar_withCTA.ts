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


export class TitleBar_withCTA extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const titleText = props.text || "Notification preferences";
        const subtextContent = props.subtext || "Choose what you want to receive updates about";
        const hideButtons = props.hideButtons === true;

        // Load fonts
        try {
            await Promise.all([
                figma.loadFontAsync({ family: "Open Sans", style: "Regular" }),
                figma.loadFontAsync({ family: "Inter", style: "Medium" }),
                figma.loadFontAsync({ family: "Manrope", style: "SemiBold" })
            ]);
        } catch (e) {
            console.warn("Failed to load fonts", e);
        }

        const root = figma.createFrame();
        root.name = "TitleBar_withCTA";
        root.visible = true;
        root.opacity = 1;
        root.locked = false;
        if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
        if ("isMask" in root) root.isMask = false;
        if ("maskType" in root) root.maskType = "ALPHA";
        if ("clipsContent" in root) root.clipsContent = false;
        if ("layoutMode" in root) {
            root.layoutMode = "HORIZONTAL";
            root.primaryAxisSizingMode = "FIXED"; // Width from parent
            root.counterAxisSizingMode = "AUTO";
            root.primaryAxisAlignItems = "MIN";
            root.counterAxisAlignItems = "MIN";
            root.itemSpacing = 24;
            root.paddingTop = 0;
            root.paddingRight = 0;
            root.paddingBottom = 0;
            root.paddingLeft = 0;
            root.itemReverseZIndex = false;
            root.strokesIncludedInLayout = false;
        }
        (root as any).layoutAlign = "STRETCH";
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
        if ("cornerRadius" in root) root.cornerRadius = 0;

        // Start Child: Frame 1931
        const root_child_0 = figma.createFrame();
        root_child_0.name = "Frame 1931";
        root_child_0.visible = true;
        root_child_0.opacity = 1;
        root_child_0.locked = false;
        if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_0) root_child_0.isMask = false;
        if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
        if ("clipsContent" in root_child_0) root_child_0.clipsContent = false;
        if ("layoutMode" in root_child_0) {
            root_child_0.layoutMode = "VERTICAL";
            root_child_0.primaryAxisSizingMode = "AUTO";
            root_child_0.counterAxisSizingMode = "FIXED"; // Width from parent
            root_child_0.primaryAxisAlignItems = "MIN";
            root_child_0.counterAxisAlignItems = "MIN";
            root_child_0.itemSpacing = 8;
            root_child_0.paddingTop = 0;
            root_child_0.paddingRight = 0;
            root_child_0.paddingBottom = 0;
            root_child_0.paddingLeft = 0;
            root_child_0.itemReverseZIndex = false;
            root_child_0.strokesIncludedInLayout = false;
        }
        root_child_0.layoutAlign = "STRETCH";
        root_child_0.layoutGrow = 1;
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

        // Start Child: Notification preferences
        const root_child_0_child_0 = figma.createText();
        root_child_0_child_0.name = "Notification preferences";
        root_child_0_child_0.visible = true;
        root_child_0_child_0.opacity = 1;
        root_child_0_child_0.locked = false;
        if ("blendMode" in root_child_0_child_0) root_child_0_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_0_child_0) root_child_0_child_0.isMask = false;
        if ("maskType" in root_child_0_child_0) root_child_0_child_0.maskType = "ALPHA";
        root_child_0_child_0.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }]);
        root_child_0_child_0.strokes = await this.hydratePaints([]);
        root_child_0_child_0.strokeWeight = 1;
        root_child_0_child_0.strokeAlign = "OUTSIDE";
        if ("strokeCap" in root_child_0_child_0) root_child_0_child_0.strokeCap = "NONE";
        if ("strokeJoin" in root_child_0_child_0) root_child_0_child_0.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_0_child_0) root_child_0_child_0.strokeMiterLimit = 4;
        root_child_0_child_0.effects = [];
        // Text Properties
        root_child_0_child_0.characters = titleText;
        root_child_0_child_0.fontSize = 32;
        root_child_0_child_0.textAlignHorizontal = "LEFT";
        root_child_0_child_0.textAlignVertical = "CENTER";
        root_child_0_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
        root_child_0_child_0.letterSpacing = { "unit": "PIXELS", "value": 0 };
        root_child_0_child_0.lineHeight = { "unit": "PIXELS", "value": 40 };
        if ("textCase" in root_child_0_child_0) root_child_0_child_0.textCase = "ORIGINAL";
        if ("textDecoration" in root_child_0_child_0) root_child_0_child_0.textDecoration = "NONE";
        root_child_0_child_0.paragraphSpacing = 0;
        root_child_0_child_0.paragraphIndent = 0;
        await this.setFont(root_child_0_child_0, { "family": "Open Sans", "style": "Regular" });
        // Styled Segments
        await this.setRangeFont(root_child_0_child_0, 0, titleText.length, { "family": "Open Sans", "style": "Regular" });
        root_child_0_child_0.setRangeFills(0, titleText.length, [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }]);
        root_child_0_child_0.setRangeFontSize(0, titleText.length, 32);
        root_child_0.appendChild(root_child_0_child_0);
        // Child Layout Props
        root_child_0_child_0.layoutAlign = "STRETCH";
        root_child_0_child_0.layoutGrow = 0;

        // Start Child: Choose what you want to receive updates about
        const root_child_0_child_1 = figma.createText();
        root_child_0_child_1.name = "Choose what you want to receive updates about";
        root_child_0_child_1.visible = true;
        root_child_0_child_1.opacity = 1;
        root_child_0_child_1.locked = false;
        if ("blendMode" in root_child_0_child_1) root_child_0_child_1.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_0_child_1) root_child_0_child_1.isMask = false;
        if ("maskType" in root_child_0_child_1) root_child_0_child_1.maskType = "ALPHA";
        root_child_0_child_1.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.2705882489681244, "g": 0.3607843220233917, "b": 0.40392157435417175 }, "boundVariables": {} }]);
        root_child_0_child_1.strokes = await this.hydratePaints([]);
        root_child_0_child_1.strokeWeight = 1;
        root_child_0_child_1.strokeAlign = "OUTSIDE";
        if ("strokeCap" in root_child_0_child_1) root_child_0_child_1.strokeCap = "NONE";
        if ("strokeJoin" in root_child_0_child_1) root_child_0_child_1.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_0_child_1) root_child_0_child_1.strokeMiterLimit = 4;
        root_child_0_child_1.effects = [];
        // Text Properties
        root_child_0_child_1.characters = subtextContent;
        root_child_0_child_1.fontSize = 16;
        root_child_0_child_1.textAlignHorizontal = "LEFT";
        root_child_0_child_1.textAlignVertical = "CENTER";
        root_child_0_child_1.textAutoResize = "HEIGHT";
        root_child_0_child_1.letterSpacing = { "unit": "PIXELS", "value": -0.3100000023841858 };
        root_child_0_child_1.lineHeight = { "unit": "PERCENT", "value": 150 };
        if ("textCase" in root_child_0_child_1) root_child_0_child_1.textCase = "ORIGINAL";
        if ("textDecoration" in root_child_0_child_1) root_child_0_child_1.textDecoration = "NONE";
        root_child_0_child_1.paragraphSpacing = 0;
        root_child_0_child_1.paragraphIndent = 0;
        await this.setFont(root_child_0_child_1, { "family": "Inter", "style": "Medium" });
        // Styled Segments
        await this.setRangeFont(root_child_0_child_1, 0, subtextContent.length, { "family": "Inter", "style": "Medium" });
        root_child_0_child_1.setRangeFills(0, subtextContent.length, [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.2705882489681244, "g": 0.3607843220233917, "b": 0.40392157435417175 }, "boundVariables": {} }]);
        root_child_0_child_1.setRangeFontSize(0, subtextContent.length, 16);
        root_child_0.appendChild(root_child_0_child_1);
        // Child Layout Props
        root_child_0_child_1.layoutAlign = "STRETCH";
        root_child_0_child_1.layoutGrow = 0;
        root.appendChild(root_child_0);
        // Child Layout Props
        root_child_0.layoutAlign = "STRETCH";
        root_child_0.layoutGrow = 1;

        // Start Child: button_set
        const root_child_1 = figma.createFrame();
        root_child_1.name = "button_set";
        root_child_1.visible = true;
        root_child_1.opacity = 1;
        root_child_1.locked = false;
        if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1) root_child_1.isMask = false;
        if ("maskType" in root_child_1) root_child_1.maskType = "ALPHA";
        if ("clipsContent" in root_child_1) root_child_1.clipsContent = false;
        if ("layoutMode" in root_child_1) {
            root_child_1.layoutMode = "HORIZONTAL";
            root_child_1.primaryAxisSizingMode = "AUTO";
            root_child_1.counterAxisSizingMode = "AUTO";
            root_child_1.primaryAxisAlignItems = "MIN";
            root_child_1.counterAxisAlignItems = "CENTER";
            root_child_1.itemSpacing = 12;
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

        // Start Child: pk-button
        const root_child_1_child_0 = figma.createFrame();
        root_child_1_child_0.name = "pk-button";
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
            root_child_1_child_0.primaryAxisAlignItems = "MIN";
            root_child_1_child_0.counterAxisAlignItems = "CENTER";
            root_child_1_child_0.itemSpacing = 12;
            root_child_1_child_0.paddingTop = 12;
            root_child_1_child_0.paddingRight = 24;
            root_child_1_child_0.paddingBottom = 12;
            root_child_1_child_0.paddingLeft = 24;
            root_child_1_child_0.itemReverseZIndex = false;
            root_child_1_child_0.strokesIncludedInLayout = false;
        }
        root_child_1_child_0.fills = await this.hydratePaints([]);
        root_child_1_child_0.strokes = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 }, "boundVariables": {} }]);
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
        if ("cornerRadius" in root_child_1_child_0) root_child_1_child_0.cornerRadius = 24;

        // Start Child: Label
        const root_child_1_child_0_child_0 = figma.createText();
        root_child_1_child_0_child_0.name = "Label";
        root_child_1_child_0_child_0.visible = true;
        root_child_1_child_0_child_0.opacity = 1;
        root_child_1_child_0_child_0.locked = false;
        if ("blendMode" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.isMask = false;
        if ("maskType" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.maskType = "ALPHA";
        root_child_1_child_0_child_0.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 }, "boundVariables": {} }]);
        root_child_1_child_0_child_0.strokes = await this.hydratePaints([]);
        root_child_1_child_0_child_0.strokeWeight = 0;
        root_child_1_child_0_child_0.strokeAlign = "CENTER";
        if ("strokeCap" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeCap = "NONE";
        if ("strokeJoin" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.strokeMiterLimit = 4;
        root_child_1_child_0_child_0.effects = [];
        // Text Properties
        root_child_1_child_0_child_0.characters = `Cancel`;
        root_child_1_child_0_child_0.fontSize = 16;
        root_child_1_child_0_child_0.textAlignHorizontal = "CENTER";
        root_child_1_child_0_child_0.textAlignVertical = "CENTER";
        root_child_1_child_0_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
        root_child_1_child_0_child_0.letterSpacing = { "unit": "PIXELS", "value": 0 };
        root_child_1_child_0_child_0.lineHeight = { "unit": "PERCENT", "value": 150 };
        if ("textCase" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.textCase = "ORIGINAL";
        if ("textDecoration" in root_child_1_child_0_child_0) root_child_1_child_0_child_0.textDecoration = "NONE";
        root_child_1_child_0_child_0.paragraphSpacing = 16;
        root_child_1_child_0_child_0.paragraphIndent = 0;
        await this.setFont(root_child_1_child_0_child_0, { "family": "Manrope", "style": "SemiBold" });
        // Styled Segments
        await this.setRangeFont(root_child_1_child_0_child_0, 0, 6, { "family": "Manrope", "style": "SemiBold" });
        root_child_1_child_0_child_0.setRangeFills(0, 6, [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 }, "boundVariables": {} }]);
        root_child_1_child_0_child_0.setRangeFontSize(0, 6, 16);
        root_child_1_child_0.appendChild(root_child_1_child_0_child_0);
        // Child Layout Props
        root_child_1_child_0_child_0.layoutAlign = "INHERIT";
        root_child_1_child_0_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_1_child_0_child_0, { "width": 54, "height": 24, "relativeTransform": [[1, 0, 24], [0, 1, 12]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
        root_child_1.appendChild(root_child_1_child_0);
        // Child Layout Props
        root_child_1_child_0.layoutAlign = "INHERIT";
        root_child_1_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_1_child_0, { "width": 102, "height": 48, "relativeTransform": [[1, 0, 0], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });

        // Start Child: pk-button
        const root_child_1_child_1 = figma.createFrame();
        root_child_1_child_1.name = "pk-button";
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
            root_child_1_child_1.counterAxisSizingMode = "FIXED";
            root_child_1_child_1.primaryAxisAlignItems = "MIN";
            root_child_1_child_1.counterAxisAlignItems = "CENTER";
            root_child_1_child_1.itemSpacing = 8;
            root_child_1_child_1.paddingTop = 12;
            root_child_1_child_1.paddingRight = 24;
            root_child_1_child_1.paddingBottom = 12;
            root_child_1_child_1.paddingLeft = 24;
            root_child_1_child_1.itemReverseZIndex = false;
            root_child_1_child_1.strokesIncludedInLayout = false;
        }
        root_child_1_child_1.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 }, "boundVariables": {} }]);
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
        if ("cornerRadius" in root_child_1_child_1) root_child_1_child_1.cornerRadius = 24;

        // Start Child: Label
        const root_child_1_child_1_child_0 = figma.createText();
        root_child_1_child_1_child_0.name = "Label";
        root_child_1_child_1_child_0.visible = true;
        root_child_1_child_1_child_0.opacity = 1;
        root_child_1_child_1_child_0.locked = false;
        if ("blendMode" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.isMask = false;
        if ("maskType" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.maskType = "ALPHA";
        root_child_1_child_1_child_0.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }]);
        root_child_1_child_1_child_0.strokes = await this.hydratePaints([]);
        root_child_1_child_1_child_0.strokeWeight = 0;
        root_child_1_child_1_child_0.strokeAlign = "CENTER";
        if ("strokeCap" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeCap = "NONE";
        if ("strokeJoin" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.strokeMiterLimit = 4;
        root_child_1_child_1_child_0.effects = [];
        // Text Properties
        root_child_1_child_1_child_0.characters = `Save`;
        root_child_1_child_1_child_0.fontSize = 16;
        root_child_1_child_1_child_0.textAlignHorizontal = "CENTER";
        root_child_1_child_1_child_0.textAlignVertical = "CENTER";
        root_child_1_child_1_child_0.textAutoResize = "WIDTH_AND_HEIGHT";
        root_child_1_child_1_child_0.letterSpacing = { "unit": "PIXELS", "value": 0 };
        root_child_1_child_1_child_0.lineHeight = { "unit": "PERCENT", "value": 150 };
        if ("textCase" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.textCase = "ORIGINAL";
        if ("textDecoration" in root_child_1_child_1_child_0) root_child_1_child_1_child_0.textDecoration = "NONE";
        root_child_1_child_1_child_0.paragraphSpacing = 16;
        root_child_1_child_1_child_0.paragraphIndent = 0;
        await this.setFont(root_child_1_child_1_child_0, { "family": "Manrope", "style": "SemiBold" });
        // Styled Segments
        await this.setRangeFont(root_child_1_child_1_child_0, 0, 4, { "family": "Manrope", "style": "SemiBold" });
        root_child_1_child_1_child_0.setRangeFills(0, 4, [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }]);
        root_child_1_child_1_child_0.setRangeFontSize(0, 4, 16);
        root_child_1_child_1.appendChild(root_child_1_child_1_child_0);
        // Child Layout Props
        root_child_1_child_1_child_0.layoutAlign = "INHERIT";
        root_child_1_child_1_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_1_child_1_child_0, { "width": 37, "height": 24, "relativeTransform": [[1, 0, 77.5], [0, 1, 12]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
        root_child_1.appendChild(root_child_1_child_1);
        // Child Layout Props
        root_child_1_child_1.layoutAlign = "INHERIT";
        root_child_1_child_1.layoutGrow = 0;
        applySizeAndTransform(root_child_1_child_1, { "width": 192, "height": 48, "relativeTransform": [[1, 0, 114], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
        if (!hideButtons) {
            root.appendChild(root_child_1);
            // Child Layout Props
            root_child_1.layoutAlign = "INHERIT";
            root_child_1.layoutGrow = 0;
            applySizeAndTransform(root_child_1, { "width": 306, "height": 48, "relativeTransform": [[1, 0, 1134], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
        } else {
            // If buttons are hidden, we might want the title part to grow to fill space
            root_child_0.layoutAlign = "STRETCH";
        }


        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

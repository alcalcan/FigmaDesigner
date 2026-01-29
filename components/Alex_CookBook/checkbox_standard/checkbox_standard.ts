import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

// SVG Imports
import SVG_checkbox_standard_Synth_Path_0 from "./assets/checkbox_standard_Synth_Path_0.svg";
import SVG_checkbox_standard_Synth_Path_1 from "./assets/checkbox_standard_Synth_Path_1.svg";



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


export class checkbox_standard extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }

        const root = figma.createFrame();
        root.name = "checkbox_standard";
        root.visible = true;
        root.opacity = 1;
        root.locked = false;
        if ("blendMode" in root) root.blendMode = "PASS_THROUGH";
        if ("isMask" in root) root.isMask = false;
        if ("maskType" in root) root.maskType = "ALPHA";
        if ("clipsContent" in root) root.clipsContent = false;
        if ("layoutMode" in root) {
            root.layoutMode = "HORIZONTAL";
            root.primaryAxisSizingMode = "FIXED";
            root.counterAxisSizingMode = "FIXED";
            root.primaryAxisAlignItems = "MIN";
            root.counterAxisAlignItems = "CENTER";
            root.itemSpacing = 4;
            root.paddingTop = 0;
            root.paddingRight = 0;
            root.paddingBottom = 0;
            root.paddingLeft = 8;
            root.itemReverseZIndex = false;
            root.strokesIncludedInLayout = false;
        }
        root.fills = await this.hydratePaints([]);
        root.strokes = await this.hydratePaints([]);
        root.strokeAlign = "INSIDE";
        if ("strokeCap" in root) root.strokeCap = "NONE";
        if ("strokeJoin" in root) root.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root) root.strokeMiterLimit = 4;
        if ("strokeTopWeight" in root) root.strokeTopWeight = 0;
        if ("strokeRightWeight" in root) root.strokeRightWeight = 0;
        if ("strokeBottomWeight" in root) root.strokeBottomWeight = 1;
        if ("strokeLeftWeight" in root) root.strokeLeftWeight = 0;
        root.effects = [];
        if ("cornerRadius" in root) root.cornerRadius = 0;

        // Start Child: Checkbox
        const root_child_0 = figma.createFrame();
        root_child_0.name = "Checkbox";
        root_child_0.visible = true;
        root_child_0.opacity = 1;
        root_child_0.locked = false;
        if ("blendMode" in root_child_0) root_child_0.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_0) root_child_0.isMask = false;
        if ("maskType" in root_child_0) root_child_0.maskType = "ALPHA";
        if ("clipsContent" in root_child_0) root_child_0.clipsContent = false;
        if ("layoutMode" in root_child_0) {
            root_child_0.layoutMode = "NONE";
        }
        root_child_0.fills = await this.hydratePaints([]);
        root_child_0.strokes = await this.hydratePaints([]);
        root_child_0.strokeWeight = 0;

        // Inner Box (Rectangle)
        const boxRect = figma.createRectangle();
        boxRect.name = "Box";
        boxRect.cornerRadius = 2;
        boxRect.resize(16, 16);

        // Apply initial state (default unchecked logic)
        boxRect.fills = [];
        boxRect.strokes = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
        boxRect.strokeWeight = 1.5;

        root_child_0.appendChild(boxRect);
        boxRect.x = 2;
        boxRect.y = 2;

        root.appendChild(root_child_0);
        // Child Layout Props
        root_child_0.layoutAlign = "INHERIT";
        root_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_0, { "width": 20, "height": 20, "relativeTransform": [[1, 0, 8], [0, 1, 6]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });
        root.appendChild(root_child_0);
        // Child Layout Props
        root_child_0.layoutAlign = "INHERIT";
        root_child_0.layoutGrow = 0;
        applySizeAndTransform(root_child_0, { "width": 20, "height": 20, "relativeTransform": [[1, 0, 8], [0, 1, 6]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });

        // Start Child: Filter name
        const root_child_1 = figma.createText();
        root_child_1.name = "Filter name";
        root_child_1.visible = true;
        root_child_1.opacity = 1;
        root_child_1.locked = false;
        if ("blendMode" in root_child_1) root_child_1.blendMode = "PASS_THROUGH";
        if ("isMask" in root_child_1) root_child_1.isMask = false;
        if ("maskType" in root_child_1) root_child_1.maskType = "ALPHA";
        root_child_1.fills = await this.hydratePaints([{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }]);
        root_child_1.strokes = await this.hydratePaints([]);
        root_child_1.strokeWeight = 1;
        root_child_1.strokeAlign = "OUTSIDE";
        if ("strokeCap" in root_child_1) root_child_1.strokeCap = "NONE";
        if ("strokeJoin" in root_child_1) root_child_1.strokeJoin = "MITER";
        if ("strokeMiterLimit" in root_child_1) root_child_1.strokeMiterLimit = 4;
        root_child_1.effects = [];
        // Text Properties
        root_child_1.characters = `UEFA Football Development`;
        root_child_1.fontSize = 16;
        root_child_1.textAlignHorizontal = "LEFT";
        root_child_1.textAlignVertical = "CENTER";
        root_child_1.textAutoResize = "NONE";
        root_child_1.letterSpacing = { "unit": "PIXELS", "value": 0 };
        root_child_1.lineHeight = { "unit": "PIXELS", "value": 24 };
        if ("textCase" in root_child_1) root_child_1.textCase = "ORIGINAL";
        if ("textDecoration" in root_child_1) root_child_1.textDecoration = "NONE";
        root_child_1.paragraphSpacing = 0;
        root_child_1.paragraphIndent = 0;
        await this.setFont(root_child_1, { "family": "Open Sans", "style": "Regular" });
        // Styled Segments
        await this.setRangeFont(root_child_1, 0, 25, { "family": "Open Sans", "style": "Regular" });
        root_child_1.setRangeFills(0, 25, [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }]);
        root_child_1.setRangeFontSize(0, 25, 16);
        root.appendChild(root_child_1);
        // Child Layout Props
        root_child_1.layoutAlign = "INHERIT";
        root_child_1.layoutGrow = 0;
        applySizeAndTransform(root_child_1, { "width": 264, "height": 24, "relativeTransform": [[1, 0, 32], [0, 1, 4]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" });


        applySizeAndTransform(root, { "width": 296, "height": 32, "parentIsAutoLayout": false });

        // Update Label if provided
        if (props.characterOverride !== undefined) {
            const text = (root as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
            if (text) {
                await figma.loadFontAsync(text.fontName as FontName);
                text.characters = props.characterOverride;
            }
        }

        // Handle Checked State
        if (props.checked !== undefined) {
            const box = (root as FrameNode).children.find(n => n.name === "Checkbox") as FrameNode;
            const rect = box?.children.find(n => n.name === "Box") as RectangleNode;

            if (rect) {
                if (props.checked) {
                    rect.fills = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
                    rect.strokes = [];
                } else {
                    rect.fills = [];
                    rect.strokes = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
                    rect.strokeWeight = 1.5;
                }
            }

            if (props.checked && box) {
                const checkSvg = `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4L4 6.5L8.5 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
                const checkNode = figma.createNodeFromSvg(checkSvg);
                checkNode.name = "CheckIcon";
                box.appendChild(checkNode);
                checkNode.x = (box.width - checkNode.width) / 2;
                checkNode.y = (box.height - checkNode.height) / 2;
            }
        }

        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

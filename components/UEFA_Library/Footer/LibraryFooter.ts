
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";

// --- Assets ---
import IMG_Proposal_notification_img_10_png from "./assets/Proposal_notification_img_10.png";
import SVG_Proposal_notification_assets_vector_Clip_path_group_I3379_17335_1248_24614_svg_orig from "./assets/Proposal_notification_assets_vector_Clip_path_group_I3379_17335_1248_24614_svg_orig.svg";

// --- Constants & Defaults ---
const COLORS = {
    WHITE: { r: 1, g: 1, b: 1 },
    BLACK: { r: 0, g: 0, b: 0 },
    TRANSPARENT: { r: 0, g: 0, b: 0, a: 0 }
};

const DEFAULT_PROPS = {
    visible: true,
    opacity: 1,
    locked: false,
    blendMode: "PASS_THROUGH",
    isMask: false,
    maskType: "ALPHA",
    strokes: [],
    fills: [],
    effects: [],
    cornerRadius: 0
};

const DEFAULT_LAYOUT_PROPS = {
    width: 100,
    height: 100,
    itemSpacing: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    counterAxisSizingMode: "FIXED",
    primaryAxisSizingMode: "FIXED"
};

const LIST_0_DATA = [
    {
        "text_1whee": "Terms and Conditions",
        "text_fv9d2": "Contact us",
        "text_tu1bq": "Cookies policy",
        "text_r8ark": "UEFA.com",
        "isSelected": false
    },
    {
        "text_1whee": "UEFA Academy catalogue",
        "text_fv9d2": "UEFA Academy Alumni Association",
        "text_tu1bq": "About the UEFA Academy",
        "text_r8ark": "UEFA Academy",
        "isSelected": false
    }
];


export class LibraryFooter extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("Footer", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 1680, height: 491, relativeTransform: [[1, 0, 0], [0, 1, 2248]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "VERTICAL", paddingTop: 88, primaryAxisSizingMode: "AUTO", primaryAxisAlignItems: "CENTER", counterAxisAlignItems: "CENTER", layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 }, boundVariables: {} }], strokeWeight: 1 }, [
            createFrame("Frame 6", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 1680, height: 260, relativeTransform: [[1, 0, 0], [0, 1, 88]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "HORIZONTAL", itemSpacing: 24, paddingTop: 64, paddingRight: 120, paddingBottom: 64, paddingLeft: 120, counterAxisSizingMode: "AUTO", layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.9450980424880981, g: 0.9529411792755127, b: 0.9725490212440491 }, boundVariables: {} }], strokeWeight: 1 }, [
                createFrame("Frame 1", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 1440, height: 132, relativeTransform: [[1, 0, 120], [0, 1, 64]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "HORIZONTAL", itemSpacing: 24, counterAxisSizingMode: "AUTO", layoutAlign: "INHERIT", layoutGrow: 1, strokeWeight: 1 }, [
                    createFrame("Frame 1921", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 342, height: 54, relativeTransform: [[1, 0, 0], [0, 1, 0]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "VERTICAL", itemSpacing: 8, layoutAlign: "INHERIT", strokeWeight: 1 }, [
                        createFrame("Link ⏵ uefa-academy-logo.svg", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 342, height: 54, relativeTransform: [[1, 0, 0], [0, 1, 0]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "HORIZONTAL", counterAxisSizingMode: "AUTO", layoutAlign: "STRETCH", strokeWeight: 1 }, [
                            createFrame("uefa-academy-logo.svg", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 223.7143, height: 54, relativeTransform: [[1, 0, 0], [0, 1, 0]], constraints: { horizontal: "CENTER", vertical: "CENTER" } }, layoutAlign: "INHERIT", strokeWeight: 0.771428644657135 }, [
                                createFrame("Clip path group", { layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 223.7143, height: 52.4571, relativeTransform: [[1, 0, 0.1072], [0, 1, 0.7327]] } }, [
                                    createVector("Clip path group", SVG_Proposal_notification_assets_vector_Clip_path_group_I3379_17335_1248_24614_svg_orig, { layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 223.7143, height: 52.4571, relativeTransform: [[1, 0, 0.1072], [0, 1, 0.7327]] }, strokeWeight: 1 })
                                ]),
                                createRectangle("Rectangle", { layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 39.744, height: 39.3466, relativeTransform: [[1, 0, 6.9424], [0, 1, 6.9426]], constraints: { horizontal: "SCALE", vertical: "SCALE" } }, fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "IMAGE", scaleMode: "CROP", imageTransform: [[1, 0, 0], [0, 1, 0]], scalingFactor: 0.5, filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 }, originalImageHash: "b3524816a719dac8192dcd56fcba25850b4862ec", assetRef: IMG_Proposal_notification_img_10_png }], strokeWeight: 0.3974400460720062 })
                            ])
                        ])
                    ]),
                    ...LIST_0_DATA.map(item => {
                        return createFrame("Frame 3", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 342, height: 132, relativeTransform: [[1, 0, 366], [0, 1, 0]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "HORIZONTAL", itemSpacing: 24, counterAxisSizingMode: "AUTO", layoutAlign: "INHERIT", strokeWeight: 1 }, [
                            createFrame("Frame 23", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 342, height: 132, relativeTransform: [[1, 0, 0], [0, 1, 0]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "VERTICAL", itemSpacing: 24, primaryAxisSizingMode: "AUTO", layoutAlign: "INHERIT", layoutGrow: 1, strokeWeight: 1 }, [
                                createFrame("Text", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 342, height: 132, relativeTransform: [[1, 0, 0], [0, 1, 0]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "VERTICAL", itemSpacing: 16, primaryAxisSizingMode: "AUTO", layoutAlign: "STRETCH", strokeWeight: 1 }, [
                                    createText("Text", item.text_1whee, 14, "Regular", COLORS.BLACK, { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", relativeTransform: [[1, 0, 0], [0, 1, 0]], constraints: { horizontal: "CENTER", vertical: "SCALE" } }, layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, boundVariables: {} }], strokeWeight: 1, strokeAlign: "OUTSIDE", textAutoResize: "HEIGHT", textAlignHorizontal: "LEFT", textAlignVertical: "CENTER", font: { family: "Open Sans", style: "Regular" } }),
                                    createText("Text", item.text_fv9d2, 14, "Regular", COLORS.BLACK, { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", relativeTransform: [[1, 0, 0], [0, 1, 37]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, boundVariables: {} }], strokeWeight: 1, strokeAlign: "OUTSIDE", textAutoResize: "HEIGHT", textAlignHorizontal: "LEFT", textAlignVertical: "CENTER", font: { family: "Open Sans", style: "Regular" } }),
                                    createText("Text", item.text_tu1bq, 14, "Regular", COLORS.BLACK, { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", relativeTransform: [[1, 0, 0], [0, 1, 74]], constraints: { horizontal: "CENTER", vertical: "SCALE" } }, layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, boundVariables: {} }], strokeWeight: 1, strokeAlign: "OUTSIDE", textAutoResize: "HEIGHT", textAlignHorizontal: "LEFT", textAlignVertical: "CENTER", font: { family: "Open Sans", style: "Regular" } }),
                                    createText("Text", item.text_r8ark, 14, "Regular", COLORS.BLACK, { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", relativeTransform: [[1, 0, 0], [0, 1, 111]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, boundVariables: {} }], strokeWeight: 1, strokeAlign: "OUTSIDE", textAutoResize: "HEIGHT", textAlignHorizontal: "LEFT", textAlignVertical: "CENTER", font: { family: "Open Sans", style: "Regular" } })
                                ])
                            ])
                        ]) as unknown as NodeDefinition;
                    }),
                    createFrame("Frame 2", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 342, height: 127.6801, relativeTransform: [[1, 0, 1098], [0, 1, 0]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "VERTICAL", itemSpacing: 48, primaryAxisSizingMode: "AUTO", layoutAlign: "INHERIT", layoutGrow: 1, strokeWeight: 1 }, [
                        createFrame("Frame 1", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 342, height: 127.6801, relativeTransform: [[1, 0, 0], [0, 1, 0]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "VERTICAL", itemSpacing: 16, primaryAxisSizingMode: "AUTO", primaryAxisAlignItems: "CENTER", layoutAlign: "STRETCH", strokeWeight: 1 }, [
                            createText("Text", "Certification", 16, "SemiBold", COLORS.BLACK, { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", relativeTransform: [[1, 0, 0], [0, 1, 0]], constraints: { horizontal: "SCALE", vertical: "SCALE" } }, layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.38823530077934265, g: 0.47843137383461, b: 0.5215686559677124 }, boundVariables: {} }], strokeWeight: 1, strokeAlign: "OUTSIDE", textAutoResize: "HEIGHT", textAlignHorizontal: "LEFT", textAlignVertical: "CENTER", font: { family: "Open Sans", style: "SemiBold" } }),
                            createFrame("Frame 1", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 310.049, height: 91.6801, relativeTransform: [[1, 0, 0], [0, 1, 36]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "HORIZONTAL", itemSpacing: 16, paddingTop: 8, paddingRight: 8, paddingBottom: 8, paddingLeft: 8, primaryAxisSizingMode: "AUTO", counterAxisSizingMode: "AUTO", counterAxisAlignItems: "CENTER", layoutAlign: "INHERIT", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 }, boundVariables: {} }], strokes: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 }, boundVariables: {} }], effects: [{ visible: true, blendMode: "NORMAL", type: "DROP_SHADOW", radius: 6, boundVariables: {}, color: { r: 0, g: 0, b: 0, a: 0.11999999731779099 }, offset: { x: 0, y: 2 }, spread: 0, showShadowBehindNode: true }], strokeTopWeight: 0, strokeRightWeight: 0, strokeBottomWeight: 3, strokeLeftWeight: 0, cornerRadius: 8 }, [
                                createRectangle("image 29", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 105.1554, height: 75.6801, relativeTransform: [[1, 0, 8], [0, 1, 8]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutAlign: "INHERIT", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "IMAGE", scaleMode: "FILL", imageTransform: [[1, 0, 0], [0, 1, 0]], scalingFactor: 0.5, rotation: 0, filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 }, imageHash: "7820a03f26025b2aef61fe5c54fe6621a5991c07" }], strokeWeight: 1 }),
                                createLine("Line 63", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 49.4197, height: 0, relativeTransform: [[0, -1, 129.1554], [1, 0, 21.1302]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutAlign: "INHERIT", strokes: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.6078431606292725, g: 0.658823549747467, b: 0.6784313917160034 }, boundVariables: {} }], strokeWeight: 1, strokeAlign: "CENTER" }),
                                createText("node_29", "Text", 12, "Regular", COLORS.BLACK, { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", relativeTransform: [[1, 0, 145.1554], [0, 1, 21.84]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutAlign: "INHERIT", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, boundVariables: {} }], strokeWeight: 1, strokeAlign: "OUTSIDE", textAutoResize: "HEIGHT", textAlignHorizontal: "LEFT", textAlignVertical: "CENTER", font: { family: "Open Sans", style: "Regular" } })
                            ])
                        ])
                    ])
                ])
            ]),
            createFrame("Frame 1587", { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 1680, height: 143, relativeTransform: [[1, 0, 0], [0, 1, 348]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutMode: "VERTICAL", itemSpacing: 24, paddingTop: 40, paddingRight: 120, paddingBottom: 40, paddingLeft: 120, primaryAxisSizingMode: "AUTO", layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 }, boundVariables: {} }], strokeWeight: 1 }, [
                createText("Text", "© 1998-2022 UEFA. All rights reserved. The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected by trademarks and/or copyright of UEFA. No use for commercial purposes may be made of such trademarks. Use of UEFA.com signifies your agreement to the Terms and Conditions and Privacy Policy.", 14, "Regular", COLORS.BLACK, { layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", relativeTransform: [[1, 0, 120], [0, 1, 40]], constraints: { horizontal: "MIN", vertical: "MIN" } }, layoutAlign: "STRETCH", fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 }, boundVariables: {} }], strokeWeight: 1, strokeAlign: "OUTSIDE", textAutoResize: "HEIGHT", textAlignHorizontal: "CENTER", textAlignVertical: "CENTER", font: { family: "Open Sans", style: "Regular" } })
            ])
        ]);

        const root = await this.renderDefinition(structure);
        this.applyCertificationTexts(root);
        this.applyCurrentCopyrightYear(root);
        root.name = "LibraryFooter";
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;
        normalizeLibraryLayerNames(root);
        return root;
    }

    private applyCurrentCopyrightYear(root: SceneNode): void {
        const currentYear = new Date().getFullYear();
        const pattern = /©\s*1998-\d{4}/g;
        const replacement = `© 1998-${currentYear}`;
        this.visitTextNodes(root, (node) => {
            const currentText = node.characters || "";
            node.characters = currentText.replace(pattern, replacement);
        });
    }

    private applyCertificationTexts(root: SceneNode): void {
        const certificationText = "EFMD's LIFT\n(Learning Impact for Today\nand Tomorrow)";
        const targetByName = this.findTextNodeByName(root, "node_29");
        const target = targetByName ?? this.findTextNodeByPosition(root, 156.8936, 48);
        if (!target) return;
        // Keep the text block width from the source capture and allow height to grow.
        target.resize(156.8936, target.height);
        target.textAutoResize = "HEIGHT";
        target.characters = certificationText;
    }

    private visitTextNodes(root: SceneNode, fn: (node: TextNode) => void): void {
        if (root.type === "TEXT") {
            fn(root);
            return;
        }
        if (!("children" in root)) return;
        for (const child of root.children) {
            this.visitTextNodes(child, fn);
        }
    }

    private findTextNodeByPosition(root: SceneNode, width: number, height: number): TextNode | null {
        let found: TextNode | null = null;
        this.visitTextNodes(root, (node) => {
            if (found) return;
            const isMatch = Math.abs(node.width - width) < 0.01 && Math.abs(node.height - height) < 0.01;
            if (isMatch) found = node;
        });
        return found;
    }

    private findTextNodeByName(root: SceneNode, name: string): TextNode | null {
        let found: TextNode | null = null;
        this.visitTextNodes(root, (node) => {
            if (found) return;
            if (node.name === name) found = node;
        });
        return found;
    }
}


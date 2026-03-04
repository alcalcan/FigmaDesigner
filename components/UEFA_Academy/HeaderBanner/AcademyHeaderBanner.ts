import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// SVG Assets
import IMG_HeaderBanner_img_1_png from "./assets/HeaderBanner_img_1.png";

export class AcademyHeaderBanner extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            type: "FRAME",
            name: "AcademyHeaderBanner",
            props: {
                visible: true,
                layoutMode: "HORIZONTAL",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "FIXED",
                primaryAxisAlignItems: "SPACE_BETWEEN",
                counterAxisAlignItems: "CENTER",
                paddingLeft: 222,
                paddingRight: 222,
                paddingTop: 0,
                paddingBottom: 0,
                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }], // Full white background
                layoutSizingHorizontal: "FIXED",
                layoutSizingVertical: "FIXED"
            },
            layoutProps: { width: 1680, height: 570 },
            children: [
                {
                    type: "FRAME",
                    name: "Content Section",
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "FIXED",
                        itemSpacing: 32,
                        paddingRight: 40, // Breathing room before the image
                        paddingTop: 40,
                        paddingBottom: 40,
                        fills: [],
                        layoutSizingHorizontal: "FIXED",
                        layoutSizingVertical: "HUG"
                    },
                    layoutProps: { width: 456 },
                    children: [
                        {
                            type: "TEXT",
                            name: "Heading",
                            props: {
                                characters: props.title ?? "The knowledge hub of European football",
                                fontSize: 48,
                                font: { family: "Roboto", style: "Medium" },
                                fills: [{ type: "SOLID", color: { r: 0.016, g: 0.043, b: 0.106 } }],
                                lineHeight: { unit: "PIXELS", value: 60 },
                                layoutAlign: "STRETCH",
                                layoutSizingHorizontal: "FILL",
                                textAutoResize: "HEIGHT"
                            }
                        },
                        {
                            type: "TEXT",
                            name: "Description",
                            props: {
                                characters: props.description ?? "We train managers, specialists and players to supply the world’s favourite sport with the best professionals.",
                                fontSize: 18,
                                font: { family: "Roboto", style: "Regular" },
                                fills: [{ type: "SOLID", color: { r: 0.2, g: 0.23, b: 0.3 } }],
                                lineHeight: { unit: "PIXELS", value: 28 },
                                layoutAlign: "STRETCH",
                                layoutSizingHorizontal: "FILL",
                                textAutoResize: "HEIGHT"
                            }
                        },
                        {
                            type: "FRAME",
                            name: "CTA Button",
                            props: {
                                layoutMode: "HORIZONTAL",
                                primaryAxisSizingMode: "FIXED",
                                counterAxisSizingMode: "AUTO",
                                primaryAxisAlignItems: "CENTER",
                                paddingTop: 12,
                                paddingBottom: 12,
                                paddingLeft: 32,
                                paddingRight: 32,
                                cornerRadius: 4,
                                fills: [{ type: "SOLID", color: { r: 0, g: 0.702, b: 0.69 } }],
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "HUG",
                                layoutAlign: "STRETCH"
                            },
                            layoutProps: {},
                            children: [
                                {
                                    type: "TEXT",
                                    name: "Button Text",
                                    props: {
                                        characters: props.buttonLabel ?? "VIEW PROGRAMME CATALOGUE",
                                        fontSize: 16,
                                        font: { family: "Roboto", style: "Bold" },
                                        fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                        textCase: "UPPER"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "FRAME",
                    name: "Image Section",
                    props: {
                        layoutMode: "NONE",
                        fills: [],
                        layoutSizingHorizontal: "FIXED",
                        layoutSizingVertical: "FIXED"
                    },
                    layoutProps: { width: 780, height: 522 },
                    children: [
                        {
                            type: "RECTANGLE",
                            name: "Banner Image",
                            props: {
                                fills: [
                                    {
                                        type: "IMAGE",
                                        scaleMode: "FILL",
                                        assetRef: IMG_HeaderBanner_img_1_png
                                    }
                                ],
                                cornerRadius: 8
                            },
                            layoutProps: { width: 780, height: 522 }
                        }
                    ]
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        this.enforceContentTextFill(root);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private enforceContentTextFill(root: SceneNode): void {
        if (root.type !== "FRAME") return;

        const content = root.findOne((node) => node.type === "FRAME" && node.name === "Content Section");
        if (!content || content.type !== "FRAME") return;

        const innerWidth = Math.max(1, content.width - content.paddingLeft - content.paddingRight);
        const textNames = new Set(["Heading", "Description"]);

        for (const child of content.children) {
            if (child.type !== "TEXT" || !textNames.has(child.name)) continue;
            child.layoutAlign = "STRETCH";
            child.layoutSizingHorizontal = "FILL";
            child.textAutoResize = "HEIGHT";
            child.resize(innerWidth, child.height);
        }
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

import IMG_Mission_img_1_png from "./assets/Mission_img_1.png";

export class AcademyMission extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            type: "FRAME",
            name: "AcademyMission",
            props: {
                layoutMode: "NONE",
                clipsContent: true,
                fills: [],
                layoutSizingHorizontal: "FIXED",
                layoutSizingVertical: "FIXED"
            },
            layoutProps: { width: 1680, height: 292 },
            children: [
                {
                    type: "RECTANGLE",
                    name: "Background",
                    props: {
                        fills: [
                            {
                                type: "IMAGE",
                                scaleMode: "FILL",
                                assetRef: IMG_Mission_img_1_png
                            }
                        ]
                    },
                    layoutProps: { width: 1680, height: 292 }
                },
                {
                    type: "RECTANGLE",
                    name: "Gradient",
                    props: {
                        opacity: 0.85,
                        fills: [
                            {
                                type: "GRADIENT_LINEAR",
                                gradientStops: [
                                    { position: 0, color: { r: 0, g: 0.51, b: 1, a: 0.56 } },
                                    { position: 1, color: { r: 0.18, g: 0.49, b: 0.8, a: 1 } }
                                ],
                                gradientTransform: [
                                    [0, 1, 0],
                                    [-1, 0, 1]
                                ]
                            }
                        ]
                    },
                    layoutProps: { width: 1680, height: 292 }
                },
                {
                    type: "FRAME",
                    name: "Content",
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "FIXED",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "CENTER",
                        itemSpacing: 24,
                        fills: [],
                        layoutSizingHorizontal: "FIXED",
                        layoutSizingVertical: "HUG"
                    },
                    layoutProps: {
                        width: 1584,
                        height: 196,
                        x: 48,
                        y: 48,
                        layoutPositioning: "ABSOLUTE"
                    },
                    children: [
                        {
                            type: "TEXT",
                            name: "Heading",
                            props: {
                                characters: props.title ?? "ABOUT THE UEFA ACADEMY",
                                font: { family: "Roboto", style: "Medium" },
                                fontSize: 36,
                                lineHeight: { unit: "PIXELS", value: 40 },
                                textAlignHorizontal: "CENTER",
                                textAutoResize: "HEIGHT",
                                layoutAlign: "STRETCH",
                                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "HUG"
                            }
                        },
                        {
                            type: "TEXT",
                            name: "Description",
                            props: {
                                characters: props.description ?? "Building on UEFA’s professional excellence, the Academy inspires the education of individuals and organisations to continuously elevate football.",
                                font: { family: "Roboto", style: "Regular" },
                                fontSize: 16,
                                lineHeight: { unit: "PIXELS", value: 24 },
                                textAlignHorizontal: "CENTER",
                                textAutoResize: "HEIGHT",
                                layoutAlign: "STRETCH",
                                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "HUG"
                            }
                        },
                        {
                            type: "FRAME",
                            name: "Link",
                            props: {
                                layoutMode: "HORIZONTAL",
                                primaryAxisSizingMode: "AUTO",
                                counterAxisSizingMode: "AUTO",
                                primaryAxisAlignItems: "CENTER",
                                counterAxisAlignItems: "CENTER",
                                paddingTop: 8,
                                paddingBottom: 8,
                                paddingLeft: 24,
                                paddingRight: 24,
                                cornerRadius: 2,
                                fills: [],
                                strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                strokeWeight: 2,
                                layoutSizingHorizontal: "HUG",
                                layoutSizingVertical: "HUG"
                            },
                            children: [
                                {
                                    type: "TEXT",
                                    name: "Read more",
                                    props: {
                                        characters: props.buttonLabel ?? "READ MORE",
                                        font: { family: "Roboto", style: "Medium" },
                                        fontSize: 14,
                                        lineHeight: { unit: "PIXELS", value: 20 },
                                        textAutoResize: "WIDTH_AND_HEIGHT",
                                        fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

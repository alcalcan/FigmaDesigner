import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// SVG Assets
import IMG_Header_img_1_png from "./assets/Header_img_1.png";
import SVG_Header_Logo_Clip from "./assets/Header_assets_vector_Clip_path_group_761_157589_svg_orig.svg";
import SVG_External_Icon from "./assets/Header_Synth_Vector_2.svg";

export class AcademyHeader extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            type: "FRAME",
            name: "AcademyHeader",
            props: {
                visible: true,
                layoutMode: "VERTICAL",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "FIXED",
                paddingLeft: 210,
                paddingRight: 210,
                paddingTop: 16,
                paddingBottom: 16,
                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                layoutSizingHorizontal: "FIXED",
                layoutSizingVertical: "HUG",
                layoutAlign: "STRETCH"
            },
            layoutProps: { width: 1680 },
            children: [
                {
                    type: "FRAME",
                    name: "Container",
                    props: {
                        layoutMode: "HORIZONTAL",
                        primaryAxisSizingMode: "FIXED",
                        counterAxisSizingMode: "AUTO",
                        primaryAxisAlignItems: "SPACE_BETWEEN",
                        counterAxisAlignItems: "CENTER",
                        paddingLeft: 12,
                        paddingRight: 12,
                        layoutAlign: "STRETCH",
                        fills: [],
                        layoutSizingHorizontal: "FILL",
                        layoutSizingVertical: "HUG"
                    },
                    layoutProps: {},
                    children: [
                        {
                            type: "FRAME",
                            name: "Logo Section",
                            props: {
                                layoutMode: "HORIZONTAL",
                                primaryAxisSizingMode: "AUTO",
                                counterAxisSizingMode: "AUTO",
                                counterAxisAlignItems: "CENTER",
                                fills: [],
                                layoutSizingHorizontal: "HUG",
                                layoutSizingVertical: "HUG"
                            },
                            children: [
                                {
                                    type: "FRAME",
                                    name: "uefa-academy-logo",
                                    props: {
                                        layoutMode: "NONE",
                                        fills: []
                                    },
                                    layoutProps: { width: 290, height: 70 },
                                    children: [
                                        {
                                            type: "GROUP",
                                            name: "Clip path group",
                                            svgContent: SVG_Header_Logo_Clip,
                                            layoutProps: { width: 290, height: 68, relativeTransform: [[1, 0, 0.14], [0, 1, 0.95]] }
                                        },
                                        {
                                            type: "RECTANGLE",
                                            name: "Logo Image",
                                            props: {
                                                fills: [
                                                    {
                                                        type: "IMAGE",
                                                        scaleMode: "FIT",
                                                        assetRef: IMG_Header_img_1_png
                                                    }
                                                ]
                                            },
                                            layoutProps: { width: 51.52, height: 51, relativeTransform: [[1, 0, 9], [0, 1, 9]] }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "FRAME",
                            name: "Actions Section",
                            props: {
                                layoutMode: "HORIZONTAL",
                                primaryAxisSizingMode: "AUTO",
                                counterAxisSizingMode: "AUTO",
                                counterAxisAlignItems: "CENTER",
                                itemSpacing: 40,
                                fills: [],
                                layoutSizingHorizontal: "HUG",
                                layoutSizingVertical: "HUG"
                            },
                            children: [
                                {
                                    type: "FRAME",
                                    name: "External Link Button",
                                    props: {
                                        layoutMode: "HORIZONTAL",
                                        primaryAxisSizingMode: "AUTO",
                                        counterAxisSizingMode: "AUTO",
                                        counterAxisAlignItems: "CENTER",
                                        itemSpacing: 8,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        cornerRadius: 4,
                                        strokes: [{ type: "SOLID", color: { r: 0, g: 0.702, b: 0.69 } }],
                                        strokeWeight: 2,
                                        fills: [],
                                        layoutSizingHorizontal: "HUG",
                                        layoutSizingVertical: "HUG"
                                    },
                                    children: [
                                        {
                                            type: "TEXT",
                                            name: "Link Text",
                                            props: {
                                                characters: "About the UEFA Academy",
                                                fontSize: 16,
                                                font: { family: "Roboto", style: "Medium" },
                                                fills: [{ type: "SOLID", color: { r: 0, g: 0.702, b: 0.69 } }],
                                                textCase: "TITLE"
                                            }
                                        },
                                        {
                                            type: "VECTOR",
                                            name: "External Icon",
                                            svgContent: SVG_External_Icon,
                                            props: {
                                                fills: [{ type: "SOLID", color: { r: 0, g: 0.702, b: 0.69 } }]
                                            },
                                            layoutProps: { width: 17, height: 18 }
                                        }
                                    ]
                                },
                                {
                                    type: "FRAME",
                                    name: "Menu Action",
                                    props: {
                                        layoutMode: "VERTICAL",
                                        primaryAxisSizingMode: "AUTO",
                                        counterAxisSizingMode: "AUTO",
                                        primaryAxisAlignItems: "CENTER",
                                        counterAxisAlignItems: "CENTER",
                                        itemSpacing: 4,
                                        fills: [],
                                        layoutSizingHorizontal: "HUG",
                                        layoutSizingVertical: "HUG"
                                    },
                                    children: [
                                        {
                                            type: "FRAME",
                                            name: "Icon Container",
                                            props: {
                                                layoutMode: "NONE",
                                                fills: []
                                            },
                                            layoutProps: { width: 32, height: 20 },
                                            children: [
                                                {
                                                    type: "RECTANGLE",
                                                    name: "Bar 1",
                                                    props: { fills: [{ type: "SOLID", color: { r: 0, g: 0.702, b: 0.69 } }], cornerRadius: 1 },
                                                    layoutProps: { width: 32, height: 4, relativeTransform: [[1, 0, 0], [0, 1, 0]] }
                                                },
                                                {
                                                    type: "RECTANGLE",
                                                    name: "Bar 2",
                                                    props: { fills: [{ type: "SOLID", color: { r: 0, g: 0.702, b: 0.69 } }], cornerRadius: 1 },
                                                    layoutProps: { width: 32, height: 4, relativeTransform: [[1, 0, 0], [0, 1, 8]] }
                                                },
                                                {
                                                    type: "RECTANGLE",
                                                    name: "Bar 3",
                                                    props: { fills: [{ type: "SOLID", color: { r: 0, g: 0.702, b: 0.69 } }], cornerRadius: 1 },
                                                    layoutProps: { width: 32, height: 4, relativeTransform: [[1, 0, 0], [0, 1, 16]] }
                                                }
                                            ]
                                        },
                                        {
                                            type: "TEXT",
                                            name: "menu",
                                            props: {
                                                characters: "menu",
                                                fontSize: 12,
                                                font: { family: "Roboto", style: "Regular" },
                                                fills: [{ type: "SOLID", color: { r: 0, g: 0.702, b: 0.69 } }],
                                                textAlignHorizontal: "CENTER",
                                                textCase: "UPPER"
                                            }
                                        }
                                    ]
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

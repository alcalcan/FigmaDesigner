import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets



export class SubSection extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "SubSection",
            "props": {
                "layoutMode": "VERTICAL", "itemSpacing": 24,
                "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "layoutAlign": "STRETCH",
                "fills": [
                    {
                        "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 }
                    }
                ],
                "effects": [
                    {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "radius": 6,
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.12 },
                        "offset": { "x": 0, "y": 2 },
                        "spread": 0,
                        "showShadowBehindNode": true
                    }
                ],
                "cornerRadius": 8,
                "clipsContent": true
            },
            "children": [
                {
                    "type": "FRAME",
                    "name": "Header",
                    "props": {
                        "layoutMode": "HORIZONTAL", "itemSpacing": 24,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "counterAxisAlignItems": "CENTER",
                        "layoutAlign": "STRETCH",
                        "fills": []
                    },
                    "children": [
                        {
                            "type": "TEXT",
                            "name": "Subject",
                            "props": {
                                "fontSize": 20,
                                "fills": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 0.1, "g": 0.19, "b": 0.23 }
                                    }
                                ],
                                "font": { "family": "Open Sans", "style": "SemiBold" }
                            }
                        },
                        {
                            "type": "FRAME",
                            "name": "Badge",
                            "props": {
                                "layoutMode": "HORIZONTAL", "itemSpacing": 8,
                                "paddingTop": 4, "paddingRight": 16, "paddingBottom": 4, "paddingLeft": 16,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                "counterAxisAlignItems": "CENTER",
                                "cornerRadius": 100,
                                "strokes": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 0, "g": 0.63, "b": 0.58 }
                                    }
                                ],
                                "fills": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 }
                                    }
                                ]
                            },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "fontSize": 14,
                                        "font": { "family": "Manrope", "style": "Regular" }
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "fontSize": 16,
                                        "font": { "family": "Manrope", "style": "Bold" }
                                    }
                                }
                            ]
                        },
                        {
                            "type": "FRAME",
                            "name": "Chevron Container",
                            "props": {
                                "cornerRadius": 100,
                                "clipsContent": true,
                                "fills": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 0.94, "g": 0.95, "b": 0.97 }
                                    }
                                ]
                            },
                            "children": [
                                {
                                    "type": "VECTOR",
                                    "name": "chevron-up",
                                    "svgContent": "<svg width=\"12\" height=\"7.4\" viewBox=\"0 0 12 7.4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 0L0 6L1.4 7.4L6 2.8L10.6 7.4L12 6L6 0Z\" fill=\"black\"/></svg>"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "FRAME",
                    "name": "Content Area",
                    "props": {
                        "layoutMode": "HORIZONTAL", "itemSpacing": 32,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "layoutAlign": "STRETCH",
                        "layoutWrap": "WRAP",
                        "fills": []
                    },
                    "children": [
                        {
                            "type": "FRAME",
                            "name": "Column ${Math.floor(i / itemsPerColumn) + 1}",
                            "props": {
                                "layoutMode": "VERTICAL", "itemSpacing": 16,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                "layoutGrow": 1,
                                "fills": []
                            }
                        }
                    ]
                }
            ]
        };

        const root = await this.renderDefinition(structure);

        // Final positioning
        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

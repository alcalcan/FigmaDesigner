import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// SVG Assets
import CARET_LEFT from "./assets/caret_left.svg";
import SEARCH_ICON from "./assets/search_icon.svg";

export interface InputFieldProps extends ComponentProps {
    placeholder: string;
    value?: string;
    helperText?: string;
    type?: "simple" | "dropdown";
    frontIcon?: string;
    backIcon?: string;
    showSearchIcon?: boolean;
    searchIconPosition?: "front" | "back";
    helperType?: "info" | "error" | "warning";
}

export class input_field extends BaseComponent {
    async create(props: InputFieldProps): Promise<SceneNode> {
        const displayValue = props.value || props.placeholder;
        const isPlaceholder = !props.value;
        const type = props.type ?? "dropdown";
        const helperType = props.helperType ?? "info";

        const helperColors = {
            info: { r: 0.4, g: 0.4, b: 0.4 },
            error: { r: 0.92, g: 0.26, b: 0.21 }, // Modern red
            warning: { r: 1, g: 0.6, b: 0 }     // Modern amber
        };

        const helperColor = helperColors[helperType];

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Text Field",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
            },
            "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 296, "height": undefined
            },
            "children": [
                {
                    "type": "FRAME",
                    "name": "input_container",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 8, "paddingRight": 12, "paddingBottom": 8, "paddingLeft": 12,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 1, "b": 1 },
                                "boundVariables": {}
                            }
                        ],
                        "strokes": [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                "boundVariables": {}
                            }
                        ],
                        "effects": [],
                        "cornerRadius": 4
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 296, "height": 40
                    },
                    "children": [
                        ...(props.frontIcon || (props.showSearchIcon && props.searchIconPosition !== "back") ? [
                            {
                                "type": "FRAME",
                                "name": "Front Icon",
                                "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "NONE",
                                },
                                "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 24, "height": 24
                                },
                                "children": [
                                    {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Icon",
                                        "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "fills": [
                                                {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 0, "g": 0, "b": 0 },
                                                    "boundVariables": {}
                                                }
                                            ],
                                            "strokes": [],
                                            "effects": [],
                                            "cornerRadius": 0,
                                        },
                                        "layoutProps": {
                                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                            "width": 24, "height": 24,
                                            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                                        },
                                        "svgContent": props.frontIcon || SEARCH_ICON
                                    }
                                ]
                            } as NodeDefinition
                        ] : []),
                        {
                            "type": "FRAME",
                            "name": "Inner",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "INHERIT", "layoutGrow": 1,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 272, "height": 24
                            },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "name": "Text",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 1,
                                        "characters": displayValue, "fontSize": 14,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": isPlaceholder
                                                    ? { "r": 0.3490196168422699, "g": 0.43921568989753723, "b": 0.48235294222831726 }
                                                    : { "r": 0, "g": 0, "b": 0 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 21 },
                                        "font": { "family": "Open Sans", "style": "Regular" }
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 232, "height": 21
                                    }
                                },
                                ...(props.backIcon || (props.showSearchIcon && props.searchIconPosition === "back") ? [
                                    {
                                        "type": "FRAME",
                                        "name": "Back Icon",
                                        "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                            "layoutMode": "NONE",
                                        },
                                        "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 24, "height": 24
                                        },
                                        "children": [
                                            {
                                                "type": "VECTOR",
                                                "shouldFlatten": true,
                                                "name": "Icon",
                                                "props": {
                                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                    "isMask": false, "maskType": "ALPHA",
                                                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                    "fills": [
                                                        {
                                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                            "color": { "r": 0, "g": 0, "b": 0 },
                                                            "boundVariables": {}
                                                        }
                                                    ],
                                                    "strokes": [],
                                                    "effects": [],
                                                    "cornerRadius": 0,
                                                },
                                                "layoutProps": {
                                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                    "width": 24, "height": 24,
                                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                                                },
                                                "svgContent": props.backIcon || SEARCH_ICON
                                            }
                                        ]
                                    } as NodeDefinition
                                ] : []),
                                ...(type === "dropdown" ? [
                                    {
                                        "type": "FRAME",
                                        "name": "Caret",
                                        "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "layoutMode": "NONE",
                                            "fills": [
                                                {
                                                    "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                }
                                            ],
                                            "strokes": [],
                                            "effects": [],
                                            "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 24, "height": 24
                                        },
                                        "children": [
                                            {
                                                "type": "VECTOR",
                                                "shouldFlatten": true,
                                                "name": "Shape",
                                                "props": {
                                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                    "isMask": false, "maskType": "ALPHA",
                                                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                    "x": 7, "y": 16,
                                                    "fills": [
                                                        {
                                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                            "color": { "r": 0, "g": 0, "b": 0 },
                                                            "boundVariables": {}
                                                        }
                                                    ],
                                                    "strokes": [],
                                                    "effects": [],
                                                    "cornerRadius": 0,
                                                    "vectorPaths": [
                                                        { "windingRule": "EVENODD", "data": "M 0 5.161276340484619 L 6 0 L 6 10 L 0 5.161276340484619 Z" }
                                                    ]
                                                },
                                                "layoutProps": {
                                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                    "width": 6, "height": 10,
                                                    "relativeTransform": [[-1.8369701465288538e-16, 1, 7], [-1, -1.8369701465288538e-16, 16]]
                                                },
                                                "svgContent": CARET_LEFT
                                            }
                                        ]
                                    } as NodeDefinition
                                ] : [])
                            ]
                        }
                    ]
                },
                ...(props.helperText ? [
                    {
                        "type": "TEXT",
                        "name": "Helper",
                        "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "characters": props.helperText, "fontSize": 14,
                            "textCase": "ORIGINAL", "textDecoration": "NONE",
                            "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                            "paragraphSpacing": 0, "paragraphIndent": 0,
                            "fills": [
                                {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": helperColor,
                                    "boundVariables": {}
                                }
                            ],
                            "strokes": [],
                            "effects": [],
                            "letterSpacing": { "unit": "PIXELS", "value": 0 },
                            "lineHeight": { "unit": "PIXELS", "value": 21 },
                            "font": { "family": "Open Sans", "style": "Regular" }
                        },
                        "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 296, "height": 21
                        }
                    } as NodeDefinition
                ] : [])
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { Tail } from "./Tail";

export interface StatRowProps extends ComponentProps {
    label: string;
    val1: string;
    val2: string;
    bar1Width: number;
    bar2Width: number;
    showTail1?: boolean;
    showTail2?: boolean;
    leftBarHeight?: number;
}

export class StatRow extends BaseComponent {
    async create(props: StatRowProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": `Row: ${props.label}`,
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": -2.1824135780334473, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "counterAxisSpacing": 0,
                "layoutWrap": "NO_WRAP",
                "counterAxisAlignContent": "AUTO",
                "gridRowCount": 0,
                "gridColumnCount": 0,
                "gridRowGap": 0,
                "gridColumnGap": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "HUG"
            },
            "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 436.8293, "height": 50.8176,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
                {
                    "type": "FRAME",
                    "name": "Text Row",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingVertical": "HUG",
                        "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 18,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                        {
                            "type": "TEXT",
                            "name": "Label",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.5092296600341797, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": props.label, "fontSize": 16,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                                "paragraphSpacing": 0, "paragraphIndent": 0,
                                "fills": [
                                    {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {
                                            "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                        }
                                    }
                                ],
                                "strokes": [],
                                "effects": [],
                                "layoutSizingHorizontal": "HUG",
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "AUTO" },
                                "font": { "family": "Arial", "style": "Bold" },
                                "richTextSpans": [
                                    {
                                        "start": 0,
                                        "end": props.label.length,
                                        "font": { "family": "Arial", "style": "Bold" },
                                        "fills": [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {
                                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                                }
                                            }
                                        ],
                                        "fontSize": 16
                                    }
                                ]
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 35, "height": 18,
                                "relativeTransform": [[1, 0, 200.9146], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                        }
                    ]
                },
                {
                    "type": "FRAME",
                    "name": "Bars Row",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 5.819769859313965, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingVertical": "HUG",
                        "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 35,
                        "relativeTransform": [[1, 0, 0], [0, 1, 15.8176]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                        {
                            "type": "FRAME",
                            "name": `Tooltip - ${props.val1}`,
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingHorizontal": "HUG",
                                "layoutSizingVertical": "HUG"
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 55, "height": 35,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "name": props.val1,
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": props.val1, "fontSize": 32,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [],
                                        "effects": [
                                            {
                                                "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                                "radius": 2,
                                                "boundVariables": {},
                                                "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                                "offset": { "x": 0, "y": 1 },
                                                "spread": 0,
                                                "showShadowBehindNode": true
                                            }
                                        ],
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "AUTO" },
                                        "font": { "family": "Champions", "style": "Regular" },
                                        "richTextSpans": [
                                            {
                                                "start": 0,
                                                "end": props.val1.length,
                                                "font": { "family": "Champions", "style": "Regular" },
                                                "fills": [
                                                    {
                                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                        "color": { "r": 1, "g": 1, "b": 1 },
                                                        "boundVariables": {}
                                                    }
                                                ],
                                                "fontSize": 32
                                            }
                                        ]
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 34, "height": 35,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                },
                                {
                                    "type": "COMPONENT",
                                    "name": "Tail",
                                    "component": Tail,
                                    "props": {
                                        "visible": props.showTail1 ?? false,
                                        "relativeTransform": [[-1, 0, 9], [0, -1, 9]]
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 9, "height": 9,
                                        "relativeTransform": [[-1, 0, 9], [0, -1, 9]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                }
                            ]
                        },
                        {
                            "type": "FRAME",
                            "name": "Bar Container",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                                "layoutAlign": "INHERIT", "layoutGrow": 1,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 315.1897, "height": 3.6374,
                                "relativeTransform": [[1, 0, 60.8198], [0, 1, 15.6813]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "FRAME",
                                    "name": "Right Bar Fill",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                        "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                        "layoutAlign": "INHERIT", "layoutGrow": 1,
                                        "layoutMode": "NONE",
                                        "fills": [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [
                                            {
                                                "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {
                                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                                }
                                            }
                                        ],
                                        "effects": [],
                                        "topLeftRadius": 16,
                                        "bottomLeftRadius": 16,
                                        "layoutSizingVertical": "FIXED",
                                        "layoutSizingHorizontal": "FILL"
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": props.bar1Width, "height": 3.6374,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                },
                                {
                                    "type": "FRAME",
                                    "name": "Left Bar Fill",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                        "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "layoutMode": "NONE",
                                        "fills": [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {
                                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1122ad242774db364a080434b0d547a5a925387f/3505:241" }
                                                }
                                            }
                                        ],
                                        "strokes": [
                                            {
                                                "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {
                                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                                }
                                            }
                                        ],
                                        "effects": [],
                                        "topRightRadius": 16,
                                        "bottomRightRadius": 16,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": props.bar2Width, "height": props.leftBarHeight ?? 3,
                                        "relativeTransform": [[1, 0, 161.1897], [0, 1, 0.3187]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                }
                            ]
                        },
                        {
                            "type": "FRAME",
                            "name": `Tooltip - ${props.val2}`,
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingHorizontal": "HUG",
                                "layoutSizingVertical": "HUG"
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 55, "height": 35,
                                "relativeTransform": [[1, 0, 381.8293], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "COMPONENT",
                                    "name": "Tail",
                                    "component": Tail,
                                    "props": {
                                        "visible": props.showTail2 ?? false
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 9, "height": 9,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "name": props.val2,
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": props.val2, "fontSize": 32,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [],
                                        "effects": [
                                            {
                                                "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                                "radius": 2,
                                                "boundVariables": {},
                                                "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                                "offset": { "x": 0, "y": 1 },
                                                "spread": 0,
                                                "showShadowBehindNode": true
                                            }
                                        ],
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "AUTO" },
                                        "font": { "family": "Champions", "style": "Regular" },
                                        "richTextSpans": [
                                            {
                                                "start": 0,
                                                "end": props.val2.length,
                                                "font": { "family": "Champions", "style": "Regular" },
                                                "fills": [
                                                    {
                                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                        "color": { "r": 1, "g": 1, "b": 1 },
                                                        "boundVariables": {}
                                                    }
                                                ],
                                                "fontSize": 32
                                            }
                                        ]
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 34, "height": 35,
                                        "relativeTransform": [[1, 0, 21], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        return this.renderDefinition(structure);
    }
}

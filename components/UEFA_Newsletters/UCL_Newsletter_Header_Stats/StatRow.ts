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
    variant?: "tail" | "highlight";
    highlight1?: boolean;
    highlight2?: boolean;
}

export class StatRow extends BaseComponent {

    private getValueNode(val: string, showTail: boolean | undefined, isLeft: boolean, variant: "tail" | "highlight" | undefined, isHighlighted: boolean | undefined): NodeDefinition {
        if (variant === "highlight") {
            const isHL = isHighlighted ?? false;
            return {
                "type": "FRAME",
                "name": "Stat_cornered",
                "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 2, "paddingRight": 12, "paddingBottom": 2, "paddingLeft": 12,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                    "fills": isHL ? [
                        {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 1, "g": 1, "b": 1 },
                            "boundVariables": {}
                        }
                    ] : [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 14,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "HUG"
                },
                "layoutProps": {
                    "width": 48, "height": 28
                },
                "children": [
                    {
                        "type": "TEXT",
                        "name": "Value",
                        "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.5092296600341797, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "characters": val, "fontSize": 24,
                            "textCase": "ORIGINAL", "textDecoration": "NONE",
                            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                            "paragraphSpacing": 0, "paragraphIndent": 0,
                            "fills": [
                                {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": isHL ? { "r": 0.029947936534881592, "g": 0.1329687237739563, "b": 0.2874999940395355 } : { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                }
                            ],
                            "strokes": [],
                            "effects": [],
                            "layoutSizingVertical": "HUG",
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "AUTO" },
                            "font": { "family": "Champions", "style": isHL ? "ExtraBold" : "Bold" },
                            "layoutSizingHorizontal": "FILL",
                        }
                    }
                ]
            };
        }

        const textNode: NodeDefinition = {
            "type": "TEXT",
            "name": val,
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "characters": val, "fontSize": 32,
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
            }
        };

        const tailNode: NodeDefinition = {
            "type": "COMPONENT",
            "name": "icon/Tail",
            "component": Tail,
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH"
            },
            "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 9, "height": 9,
                "relativeTransform": isLeft ? [[-1, 0, 9], [0, -1, 9]] : [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            }
        };

        const children = isLeft ? [textNode, tailNode] : [tailNode, textNode];
        if (!showTail) {
            if (isLeft) children.pop(); else children.shift();
        }

        return {
            "type": "FRAME",
            "name": `Tooltip - ${val}`,
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
            "children": children
        };
    }

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
                                        "boundVariables": {}
                                    }
                                ],
                                "strokes": [],
                                "effects": [],
                                "layoutSizingHorizontal": "HUG",
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "AUTO" },
                                "font": { "family": "Arial", "style": "Bold" },
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
                        "width": 436.8293, "height": props.variant === 'highlight' ? 30 : 35,
                        "relativeTransform": [[1, 0, 0], [0, 1, 15.8176]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                        this.getValueNode(props.val1, props.showTail1, true, props.variant, props.highlight1),
                        {
                            "type": "FRAME",
                            "name": "Bar Area wrapper",
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
                                "width": 315, "height": props.leftBarHeight ?? 6,
                                "relativeTransform": [[1, 0, 60.8198], [0, 1, 14.5]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
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
                                                "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [
                                            {
                                                "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "effects": [],
                                        "topLeftRadius": 16,
                                        "bottomLeftRadius": 16,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": props.bar1Width, "height": props.leftBarHeight ?? 6,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                },
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
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "strokes": [
                                            {
                                                "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                            }
                                        ],
                                        "effects": [
                                            {
                                                "visible": false, "type": "GLASS",
                                                "radius": 50.19551086425781,
                                                "boundVariables": {},
                                                "refraction": 0.5899999737739563,
                                                "depth": 33.46367645263672,
                                                "lightAngle": -45,
                                                "lightIntensity": 1,
                                                "dispersion": 0.4000000059604645,
                                                "splay": 0
                                            }
                                        ],
                                        "topRightRadius": 16,
                                        "bottomRightRadius": 16,
                                        "layoutSizingVertical": "FIXED",
                                        "layoutSizingHorizontal": "FILL"
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": props.bar2Width, "height": 4,
                                        "relativeTransform": [[1, 0, props.bar1Width + 6], [0, 1, 1]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                }
                            ]
                        },
                        this.getValueNode(props.val2, props.showTail2, false, props.variant, props.highlight2)
                    ]
                }
            ]
        };

        return this.renderDefinition(structure);
    }
}

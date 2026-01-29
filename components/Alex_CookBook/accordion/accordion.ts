import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// SVG Assets
import PLUS_ICON from "./assets/plus.svg";
import MINUS_ICON from "./assets/minus.svg";

export interface AccordionProps extends ComponentProps {
    title?: string;
    description?: string;
    isExpanded?: boolean;
    titleColor?: { r: number, g: number, b: number };
    children?: NodeDefinition[];
}

export class accordion extends BaseComponent {
    async create(props: AccordionProps): Promise<SceneNode> {
        const isExpanded = props.isExpanded ?? false;
        const titleColor = props.titleColor ?? { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 };
        const title = props.title ?? "Section";
        const description = props.description ?? "Description";

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": isExpanded ? "expanded_section" : "collapsed_section",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": isExpanded ? "VERTICAL" : "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": isExpanded ? "FIXED" : "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": isExpanded ? "MIN" : "CENTER",
                "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": isExpanded ? 8 : 0
            },
            "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 296, "height": undefined
            },
            "children": [
                {
                    "type": "FRAME",
                    "name": "Header",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 },
                                "boundVariables": {}
                            }
                        ],
                        "effects": [],
                        "cornerRadius": 0
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 296, "height": 32
                    },
                    "children": [
                        {
                            "type": "TEXT",
                            "name": "Title",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 1,
                                "characters": title, "fontSize": 16,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                "paragraphSpacing": 0, "paragraphIndent": 0,
                                "fills": [
                                    {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": titleColor,
                                        "boundVariables": {}
                                    }
                                ],
                                "strokes": [],
                                "effects": [],
                                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 24 },
                                "font": { "family": "Open Sans", "style": "SemiBold" }
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 280, "height": 24
                            }
                        },
                        {
                            "type": "FRAME",
                            "name": isExpanded ? "Actions / Minus / Small" : "Actions / Add / Small",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
                                "width": 12, "height": 12
                            },
                            "children": [
                                {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Icon",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": isExpanded ? 2 : 0, "strokeAlign": isExpanded ? "CENTER" : "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                                        "x": isExpanded ? 2.5 : 2, "y": isExpanded ? 6 : 2,
                                        "strokes": isExpanded ? [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": titleColor,
                                                "boundVariables": {}
                                            }
                                        ] : [],
                                        "effects": [],
                                        "cornerRadius": 0
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": isExpanded ? 7 : 8, "height": isExpanded ? 0 : 8
                                    },
                                    "svgContent": isExpanded ? MINUS_ICON : PLUS_ICON
                                }
                            ]
                        }
                    ]
                },
                ...(isExpanded
                    ? (props.children && props.children.length > 0
                        ? props.children
                        : [{
                            "type": "TEXT",
                            "name": "Description",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "characters": description, "fontSize": 14,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                                "paragraphSpacing": 0, "paragraphIndent": 0,
                                "fills": [
                                    {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                        "boundVariables": {}
                                    }
                                ],
                                "strokes": [],
                                "effects": [],
                                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 20 },
                                "font": { "family": "Open Sans", "style": "Regular" }
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 280, "height": 20
                            }
                        } as NodeDefinition])
                    : [])
            ]
        };

        const root = await this.renderDefinition(structure);
        return root;
    }
}

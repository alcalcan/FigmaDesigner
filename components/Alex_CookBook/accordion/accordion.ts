import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { Lucide_plus, Lucide_minus } from "../../index";

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
                    "name": "Accordion Header",
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
                            "type": "COMPONENT",
                            "component": isExpanded ? Lucide_minus : Lucide_plus,
                            "name": "Toggle Icon",
                            "props": {
                                "width": 12,
                                "height": 12,
                                "strokeWeight": 2,
                                "color": titleColor
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 12, "height": 12
                            }
                        }
                    ]
                },
                ...(isExpanded
                    ? (props.children && props.children.length > 0
                        ? props.children
                        : [{
                            "type": "TEXT",
                            "name": "Description Content",
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
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}


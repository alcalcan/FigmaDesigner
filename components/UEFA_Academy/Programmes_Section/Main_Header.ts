import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";


// SVG Assets



export interface MainHeaderProps extends ComponentProps {
    title?: string;
    color?: { r: number, g: number, b: number };
}

export class Main_Header extends BaseComponent {
    async create(props: MainHeaderProps): Promise<SceneNode> {
        const title = props.title || "Explore our programmes";
        const textColor = props.color || { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 };
        const dividerColor = props.color || { "r": 0.800000011920929, "g": 0.800000011920929, "b": 0.800000011920929 };

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Main Header",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 24, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                "layoutSizingHorizontal": "FILL",
                "layoutSizingVertical": "HUG"
            },
            "layoutProps": { "width": 1260, "parentIsAutoLayout": false },
            "children": [
                {
                    "type": "TEXT",
                    "name": title,
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": title, "fontSize": 36,
                        "textCase": "UPPER", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "fills": [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": textColor,
                                "boundVariables": {}
                            }
                        ],
                        "strokes": [],
                        "effects": [],
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG",
                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                        "lineHeight": { "unit": "PIXELS", "value": 40 },
                        "font": { "family": "Roboto", "style": "Medium" },
                        "richTextSpans": [
                            {
                                "start": 0,
                                "end": title.length,
                                "font": { "family": "Roboto", "style": "Medium" },
                                "fills": [
                                    {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": textColor,
                                        "boundVariables": {}
                                    }
                                ],
                                "fontSize": 36
                            }
                        ]
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 488, "height": 40,
                        "relativeTransform": [[1, 0, 386], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                },
                {
                    "type": "RECTANGLE",
                    "name": "Header Divider",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "fills": [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": dividerColor,
                                "boundVariables": {}
                            }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 64, "height": 3,
                        "relativeTransform": [[1, 0, 598], [0, 1, 48]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                }
            ]
        };

        const root = await this.renderDefinition(structure);

        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

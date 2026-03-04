import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
export interface FollowUsProps extends ComponentProps {
    variant?: 'standard' | 'social-only';
}

export class FollowUs extends BaseComponent {
    async create(props: FollowUsProps = {}): Promise<SceneNode> {
        const isSocialOnly = props.variant === 'social-only';
        const darkGreen = { r: 0.05, g: 0.35, b: 0.15 };
        const linkedInColor = isSocialOnly ? darkGreen : { "r": 0, "g": 0.4431372582912445, "b": 0.6941176652908325 };

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Follow us",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": isSocialOnly ? 24 : 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
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
                "width": 200, "height": 36,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
            },
            "children": [
                ...(isSocialOnly ? [] : [{
                    "type": "TEXT" as const,
                    "name": "Follow us",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "Follow us on LinkedIn", "fontSize": 24,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "fills": [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL" as const, "type": "SOLID" as const,
                                "color": { "r": 0.4000000059604645, "g": 0.4000000059604645, "b": 0.4000000059604645 },
                                "boundVariables": {}
                            }
                        ],
                        "strokes": [],
                        "effects": [],
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG",
                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                        "font": { "family": "Roboto", "style": "Medium" },
                        "richTextSpans": [
                            {
                                "start": 0,
                                "end": 21,
                                "font": { "family": "Roboto", "style": "Medium" },
                                "fills": [
                                    {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID" as const,
                                        "color": { "r": 0.4000000059604645, "g": 0.4000000059604645, "b": 0.4000000059604645 },
                                        "boundVariables": {}
                                    }
                                ],
                                "fontSize": 24
                            }
                        ]
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 240, "height": 36,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]] as const,
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                }]),
                {
                    "type": "FRAME" as const,
                    "name": "Social / linkedin",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "NONE", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED"
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 48, "height": 48,
                        "relativeTransform": [[1, 0, isSocialOnly ? 0 : 248], [0, 1, 0]] as T2x3,
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                        {
                            "type": "VECTOR" as const,
                            "name": "Vector",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                    {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL" as const, "type": "SOLID" as const,
                                        "color": linkedInColor,
                                        "boundVariables": {}
                                    }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "vectorPaths": [
                                    {
                                        "windingRule": "EVENODD",
                                        "data": "M 2 0 C 0.8954305648803711 0 0 0.8954310417175293 0 2.000000476837158 L 0 18 C 0 19.104570388793945 0.8954310417175293 20 2.000000476837158 20 L 18 20 C 19.104570388793945 20 20 19.104568481445312 20 18 L 20 2 C 20 0.8954305648803711 19.104568481445312 0 18 0 L 2 0 Z M 5.671711444854736 7.028382301330566 L 5.671711444854736 17.45964813232422 L 2.2044875621795654 17.45964813232422 L 2.2044875621795654 7.028382301330566 L 5.671711444854736 7.028382301330566 Z M 5.9002790451049805 3.802356243133545 C 5.9002790451049805 4.803370952606201 5.1475830078125 5.604433536529541 3.93880033493042 5.604433536529541 L 3.9161171913146973 5.604433536529541 C 2.752349853515625 5.604433536529541 2 4.803370952606201 2 3.802356243133545 C 2 2.7786247730255127 2.7750298976898193 2 3.9618282318115234 2 C 5.147580146789551 2 5.877597332000732 2.7786247730255127 5.9002790451049805 3.802356243133545 Z M 11.057847023010254 17.45964813232422 L 7.590619087219238 17.45964813232422 C 7.590920448303223 17.397199630737305 7.636181831359863 8.004054069519043 7.590968132019043 7.028696537017822 L 11.057847023010254 7.028696537017822 L 11.057847023010254 8.505414009094238 C 11.518806457519531 7.794750213623047 12.343737602233887 6.783904075622559 14.182747840881348 6.783904075622559 C 16.463871002197266 6.783904075622559 18.17409896850586 8.27481746673584 18.17409896850586 11.478719711303711 L 18.17409896850586 17.45964813232422 L 14.707221031188965 17.45964813232422 L 14.707221031188965 11.879843711853027 C 14.707221031188965 10.477425575256348 14.205079078674316 9.520938873291016 12.950932502746582 9.520938873291016 C 11.993048667907715 9.520938873291016 11.422506332397461 10.165947914123535 11.171956062316895 10.789183616638184 C 11.080530166625977 11.011537551879883 11.057847023010254 11.323610305786133 11.057847023010254 11.635053634643555 L 11.057847023010254 17.45964813232422 Z"
                                    }
                                ]
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 40, "height": 40,
                                "relativeTransform": [[1, 0, 4], [0, 1, 4]] as const,
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            }
                        }
                    ]
                },
                ...(isSocialOnly ? [
                    {
                        "type": "FRAME" as const,
                        "name": "Social / instagram",
                        "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "layoutMode": "NONE", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED"
                        },
                        "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 48, "height": 48,
                            "relativeTransform": [[1, 0, 72], [0, 1, 0]] as const,
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                            {
                                "type": "VECTOR" as const,
                                "name": "Vector",
                                "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "fills": [
                                        {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": darkGreen,
                                            "boundVariables": {}
                                        }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "vectorPaths": [
                                        {
                                            "windingRule": "EVENODD",
                                            "data": "M 13.3 10 C 13.3 11.8 11.8 13.3 10 13.3 C 8.2 13.3 6.7 11.8 6.7 10 C 6.7 8.2 8.2 6.7 10 6.7 C 11.8 6.7 13.3 8.2 13.3 10 Z M 0 5.5 C 0 2.5 2.5 0 5.5 0 L 14.5 0 C 17.5 0 20 2.5 20 5.5 L 20 14.5 C 20 17.5 17.5 20 14.5 20 L 5.5 20 C 2.5 20 0 17.5 0 14.5 L 0 5.5 Z M 16.6 4.7 C 16.6 5.3 16 5.9 15.4 5.9 C 14.7 5.9 14.1 5.3 14.1 4.7 C 14.1 4 14.7 3.4 15.4 3.4 C 16 3.4 16.6 4 16.6 4.7 Z M 15.2 10 C 15.2 12.9 12.9 15.2 10 15.2 C 7.1 15.2 4.8 12.9 4.8 10 C 4.8 7.1 7.1 4.8 10 4.8 C 12.9 4.8 15.2 7.1 15.2 10 Z"
                                        }
                                    ]
                                },
                                "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 40, "height": 40,
                                    "relativeTransform": [[1, 0, 4], [0, 1, 4]] as const,
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                }
                            }
                        ]
                    }
                ] : [])
            ]
        };

        const root = await this.renderDefinition(structure);

        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

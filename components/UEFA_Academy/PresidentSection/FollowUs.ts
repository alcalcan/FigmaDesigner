import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export class FollowUs extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Follow us",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                {
                    "type": "TEXT",
                    "name": "Follow us",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "Follow us", "fontSize": 24,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "fills": [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
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
                        "font": { "family": "Roboto", "style": "Regular" },
                        "richTextSpans": [
                            {
                                "start": 0,
                                "end": 9,
                                "font": { "family": "Roboto", "style": "Regular" },
                                "fills": [
                                    {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
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
                        "width": 100, "height": 36,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                },
                {
                    "type": "FRAME",
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
                        "width": 36, "height": 36,
                        "relativeTransform": [[1, 0, 108], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                        {
                            "type": "VECTOR",
                            "name": "Vector",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                    {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 0, "g": 0.4431372582912445, "b": 0.6941176652908325 },
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
                                "width": 30, "height": 30,
                                "relativeTransform": [[1, 0, 3], [0, 1, 3]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            }
                        }
                    ]
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

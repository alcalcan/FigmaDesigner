import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_generic_preview_header_img_1_opt_png from "././assets/generic_preview_header_img_1_opt.png";
import IMG_generic_preview_header_img_2_opt_png from "././assets/generic_preview_header_img_2_opt.png";
import IMG_generic_preview_header_img_3_opt_png from "././assets/generic_preview_header_img_3_opt.png";
import IMG_generic_preview_header_img_4_png from "././assets/generic_preview_header_img_4.png";
import IMG_generic_preview_header_img_5_png from "././assets/generic_preview_header_img_5.png";
import IMG_generic_preview_header_img_6_png from "././assets/generic_preview_header_img_6.png";
import IMG_generic_preview_header_img_7_png from "././assets/generic_preview_header_img_7.png";
import SVG_generic_preview_header_Synth_Ellipse2300_0 from "./assets/generic_preview_header_Synth_Ellipse2300_0.svg";
import SVG_generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig from "./assets/generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig.svg";

export class GenericUpcomingMatchesBanner extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
              "type": "FRAME",
              "name": "UpcomingMatches_Banner",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 0, "y": 253,
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
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 600, "height": 241.612,
                "relativeTransform": [[1, 0, 0], [0, 1, 253]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "BannerMatch",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "layoutMode": "VERTICAL", "itemSpacing": 2.2843689918518066, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 27.41242790222168, "paddingBottom": 0, "paddingLeft": 27.41242790222168,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
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
                    "effects": [
                      {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "radius": 4.568737983703613,
                        "boundVariables": {},
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                        "offset": { "x": 0, "y": 4.568737983703613 },
                        "spread": 0,
                        "showShadowBehindNode": true
                      }
                    ],
                    "cornerRadius": 9.137475967407227,
                    "layoutSizingVertical": "HUG",
                    "layoutSizingHorizontal": "FILL"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 600, "height": 116.806,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Match Details",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "layoutMode": "NONE",
                        "fills": [],
                        "strokes": [],
                        "effects": [
                          {
                            "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                            "radius": 6.053577899932861,
                            "boundVariables": {},
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0.3199999928474426 },
                            "offset": { "x": 0, "y": 6.85310697555542 },
                            "spread": 0,
                            "showShadowBehindNode": true
                          }
                        ],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 529.9736, "height": 82.2373,
                        "relativeTransform": [[1, 0, 35.0132], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "team_name",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "layoutMode": "VERTICAL", "itemSpacing": 9.137475967407227, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 9.137475967407227, "paddingBottom": 0, "paddingLeft": 9.137475967407227,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                            "x": 44.545387268066406, "y": 13.706206321716309,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0, "b": 0.250980406999588 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 4.568737983703613,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 196.4557, "height": 50.5593,
                            "relativeTransform": [[1, 0, 44.5454], [0, 1, 13.7062]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "slit",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.3199999928474426,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.699999988079071,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [[1, 0, 0], [0, 1, 0]]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196.4557, "height": 1.1422,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "REAL MADRID",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.1421844959259033, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "Real Madrid", "fontSize": 22.84368896484375,
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
                                "effects": [],
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 29.696796417236328 },
                                "font": { "family": "Champions Web", "style": "Bold" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 11,
                                    "font": { "family": "Champions Web", "style": "Bold" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 22.84368896484375
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 178.1808, "height": 30,
                                "relativeTransform": [[1, 0, 9.1373], [0, 1, 10.2798]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "RECTANGLE",
                              "name": "slit",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.3199999928474426,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.699999988079071,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [[1, 0, 0], [0, 1, 0]]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196.4557, "height": 1.1422,
                                "relativeTransform": [[1, 0, 0], [0, 1, 49.4171]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "team_name",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "layoutMode": "VERTICAL", "itemSpacing": 9.137475967407227, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 9.137475967407227, "paddingBottom": 0, "paddingLeft": 9.137475967407227,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                            "x": 292.3994140625, "y": 13.706206321716309,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0, "b": 0.250980406999588 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 4.568737983703613,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 196.4557, "height": 50.5593,
                            "relativeTransform": [[1, 0, 292.3994], [0, 1, 13.7062]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "slit",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.3199999928474426,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.699999988079071,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [[1, 0, 0], [0, 1, 0]]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196.4557, "height": 1.1422,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "BARCELONA",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.1421844959259033, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "Barcelona", "fontSize": 22.84368896484375,
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
                                "effects": [],
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 29.696796417236328 },
                                "font": { "family": "Champions Web", "style": "Bold" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 9,
                                    "font": { "family": "Champions Web", "style": "Bold" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 22.84368896484375
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 178.1808, "height": 30,
                                "relativeTransform": [[1, 0, 9.1373], [0, 1, 10.2798]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "RECTANGLE",
                              "name": "slit",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.3199999928474426,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.699999988079071,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [[1, 0, 0], [0, 1, 0]]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196.4557, "height": 1.1422,
                                "relativeTransform": [[1, 0, 0], [0, 1, 49.4171]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "VS Frame",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "layoutMode": "VERTICAL", "itemSpacing": 9.137475967407227, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 13.70621395111084, "paddingRight": 9.137475967407227, "paddingBottom": 13.70621395111084, "paddingLeft": 9.137475967407227,
                            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0, "strokeRightWeight": 0.6853107213973999, "strokeBottomWeight": 0, "strokeLeftWeight": 0.6853107213973999,
                            "x": 228.43707275390625, "y": -0.0000017943216334970202,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.23529411852359772, "g": 0.45490196347236633, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 73.0998, "height": 82.2373,
                            "relativeTransform": [[1, 0, 228.4371], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "TEXT",
                              "name": "VS",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.1421844959259033, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "VS", "fontSize": 27.41242790222168,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
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
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "FIXED",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 35.63615798950195 },
                                "font": { "family": "Champions Web", "style": "Bold" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 2,
                                    "font": { "family": "Champions Web", "style": "Bold" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 27.41242790222168
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 54.8248, "height": 35.4077,
                                "relativeTransform": [[1, 0, 9.1374], [0, 1, 23.4148]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "Madrid",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                            "x": 0, "y": 0,
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
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 82.2373, "height": 82.2373,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "Crest",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "x": 0, "y": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                    "scaleMode": "FIT",
                                    "imageTransform": [[1, 0, 0], [0, 1, 0]],
                                    "scalingFactor": 0.5,
                                    "rotation": 0,
                                    "filters": {
                                      "exposure": 0,
                                      "contrast": 0,
                                      "saturation": 0,
                                      "temperature": 0,
                                      "tint": 0,
                                      "highlights": 0,
                                      "shadows": 0
                                    },
                                    "originalImageHash": "f5ec9b208b0fed168a2b1ad5d4d9bba462ad9cec",
                                    "assetRef": IMG_generic_preview_header_img_4_png
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 82.2373, "height": 82.2373,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "Barcelona",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                            "x": 447.7364501953125, "y": -0.0000017943216334970202,
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
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 82.2373, "height": 82.2373,
                            "relativeTransform": [[1, 0, 447.7365], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "Crest",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "x": 0, "y": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                    "scaleMode": "FIT",
                                    "imageTransform": [[1, 0, 0], [0, 1, 0]],
                                    "scalingFactor": 0.5,
                                    "rotation": 0,
                                    "filters": {
                                      "exposure": 0,
                                      "contrast": 0,
                                      "saturation": 0,
                                      "temperature": 0,
                                      "tint": 0,
                                      "highlights": 0,
                                      "shadows": 0
                                    },
                                    "originalImageHash": "7be5a855ebb9969d571f0f32344ea87d35592f51",
                                    "assetRef": IMG_generic_preview_header_img_5_png
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 82.2373, "height": 82.2373,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "FRAME",
                      "name": "date-time",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "VERTICAL", "itemSpacing": 2.2843689918518066, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 18.274951934814453, "paddingBottom": 2.2843689918518066, "paddingLeft": 18.274951934814453,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0.004000000189989805, "g": 0.11800000071525574, "b": 0.6000000238418579, "a": 0 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.00800000037997961, "g": 0.19599999487400055, "b": 1, "a": 1 },
                                "position": 0.5,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.004999999888241291, "g": 0.11800000071525574, "b": 0.6000000238418579, "a": 0 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [[1, 0, 0], [0, 1, 0.5]]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 4.568737983703613,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "HUG"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 392.9114, "height": 32.2844,
                        "relativeTransform": [[1, 0, 103.5443], [0, 1, 84.5216]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "TEXT",
                          "name": "MON 29 SEP, 20:00 CET",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.1421844959259033, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "characters": "TUE 30 SEP, 20:00 CET", "fontSize": 22.84368896484375,
                            "textCase": "ORIGINAL", "textDecoration": "NONE",
                            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                            "paragraphSpacing": 0, "paragraphIndent": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "layoutSizingVertical": "HUG",
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "PIXELS", "value": 29.696796417236328 },
                            "font": { "family": "Champions Web", "style": "Regular" },
                            "layoutSizingHorizontal": "FILL",
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 21,
                                "font": { "family": "Champions Web", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 22.84368896484375
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 356.3615, "height": 30,
                            "relativeTransform": [[1, 0, 18.2749], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "BannerMatch",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "layoutMode": "VERTICAL", "itemSpacing": 2.2843689918518066, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 27.41242790222168, "paddingBottom": 0, "paddingLeft": 27.41242790222168,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
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
                    "effects": [
                      {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "radius": 4.568737983703613,
                        "boundVariables": {},
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                        "offset": { "x": 0, "y": 4.568737983703613 },
                        "spread": 0,
                        "showShadowBehindNode": true
                      }
                    ],
                    "cornerRadius": 9.137475967407227,
                    "layoutSizingVertical": "HUG",
                    "layoutSizingHorizontal": "FILL"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 600, "height": 116.806,
                    "relativeTransform": [[1, 0, 0], [0, 1, 124.806]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Match Details",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "layoutMode": "NONE",
                        "fills": [],
                        "strokes": [],
                        "effects": [
                          {
                            "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                            "radius": 6.053577899932861,
                            "boundVariables": {},
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0.3199999928474426 },
                            "offset": { "x": 0, "y": 6.85310697555542 },
                            "spread": 0,
                            "showShadowBehindNode": true
                          }
                        ],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 529.9736, "height": 82.2373,
                        "relativeTransform": [[1, 0, 35.0132], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "team_name",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "layoutMode": "VERTICAL", "itemSpacing": 9.137475967407227, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 9.137475967407227, "paddingBottom": 0, "paddingLeft": 9.137475967407227,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                            "x": 44.545387268066406, "y": 13.706206321716309,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0, "b": 0.250980406999588 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 4.568737983703613,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 196.4557, "height": 50.5593,
                            "relativeTransform": [[1, 0, 44.5454], [0, 1, 13.7062]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "slit",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.3199999928474426,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.699999988079071,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [[1, 0, 0], [0, 1, 0]]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196.4557, "height": 1.1422,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "REAL MADRID",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.1421844959259033, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "Man City", "fontSize": 22.84368896484375,
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
                                "effects": [],
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 29.696796417236328 },
                                "font": { "family": "Champions Web", "style": "Bold" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 8,
                                    "font": { "family": "Champions Web", "style": "Bold" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 22.84368896484375
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 178.1808, "height": 30,
                                "relativeTransform": [[1, 0, 9.1373], [0, 1, 10.2798]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "RECTANGLE",
                              "name": "slit",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.3199999928474426,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.699999988079071,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [[1, 0, 0], [0, 1, 0]]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196.4557, "height": 1.1422,
                                "relativeTransform": [[1, 0, 0], [0, 1, 49.4171]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "team_name",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "layoutMode": "VERTICAL", "itemSpacing": 9.137475967407227, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 9.137475967407227, "paddingBottom": 0, "paddingLeft": 9.137475967407227,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                            "x": 292.3994140625, "y": 13.706206321716309,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0, "b": 0.250980406999588 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 4.568737983703613,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 196.4557, "height": 50.5593,
                            "relativeTransform": [[1, 0, 292.3994], [0, 1, 13.7062]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "slit",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.3199999928474426,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.699999988079071,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [[1, 0, 0], [0, 1, 0]]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196.4557, "height": 1.1422,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "BARCELONA",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.1421844959259033, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "Bayern", "fontSize": 22.84368896484375,
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
                                "effects": [],
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 29.696796417236328 },
                                "font": { "family": "Champions Web", "style": "Bold" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 6,
                                    "font": { "family": "Champions Web", "style": "Bold" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 22.84368896484375
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 178.1808, "height": 30,
                                "relativeTransform": [[1, 0, 9.1373], [0, 1, 10.2798]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "RECTANGLE",
                              "name": "slit",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.3199999928474426,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 1 },
                                        "position": 0.699999988079071,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7559999823570251, "g": 0.7599999904632568, "b": 0.8349999785423279, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [[1, 0, 0], [0, 1, 0]]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196.4557, "height": 1.1422,
                                "relativeTransform": [[1, 0, 0], [0, 1, 49.4171]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "VS Frame",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "layoutMode": "VERTICAL", "itemSpacing": 9.137475967407227, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 13.70621395111084, "paddingRight": 9.137475967407227, "paddingBottom": 13.70621395111084, "paddingLeft": 9.137475967407227,
                            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0, "strokeRightWeight": 0.6853107213973999, "strokeBottomWeight": 0, "strokeLeftWeight": 0.6853107213973999,
                            "x": 228.43707275390625, "y": -0.0000017943216334970202,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.23529411852359772, "g": 0.45490196347236633, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 73.0998, "height": 82.2373,
                            "relativeTransform": [[1, 0, 228.4371], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "TEXT",
                              "name": "VS",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.1421844959259033, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "VS", "fontSize": 27.41242790222168,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
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
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "FIXED",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 35.63615798950195 },
                                "font": { "family": "Champions Web", "style": "Bold" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 2,
                                    "font": { "family": "Champions Web", "style": "Bold" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 27.41242790222168
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 54.8248, "height": 35.4077,
                                "relativeTransform": [[1, 0, 9.1374], [0, 1, 23.4148]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "Man City",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "x": 0, "y": 0,
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
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 82.2373, "height": 82.2373,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "Crest",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "x": 0, "y": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                    "scaleMode": "FILL",
                                    "imageTransform": [[1, 0, 0], [0, 1, 0]],
                                    "scalingFactor": 0.5,
                                    "rotation": 0,
                                    "filters": {
                                      "exposure": 0,
                                      "contrast": 0,
                                      "saturation": 0,
                                      "temperature": 0,
                                      "tint": 0,
                                      "highlights": 0,
                                      "shadows": 0
                                    },
                                    "originalImageHash": "82fc4a4a74abe9284bbdb9ae7b7edfe445cad87e",
                                    "assetRef": IMG_generic_preview_header_img_6_png
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 82.2373, "height": 82.2373,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "Bayern",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "x": 447.7364501953125, "y": -0.0000017943216334970202,
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
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 82.2373, "height": 82.2373,
                            "relativeTransform": [[1, 0, 447.7365], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "Crest",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                "x": -0.00000762939453125, "y": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                    "scaleMode": "FILL",
                                    "imageTransform": [[1, 0, 0], [0, 1, 0]],
                                    "scalingFactor": 0.5,
                                    "rotation": 0,
                                    "filters": {
                                      "exposure": 0,
                                      "contrast": 0,
                                      "saturation": 0,
                                      "temperature": 0,
                                      "tint": 0,
                                      "highlights": 0,
                                      "shadows": 0
                                    },
                                    "originalImageHash": "6522b1aa0383c1e2636a69c46d42dbfdfef290b5",
                                    "assetRef": IMG_generic_preview_header_img_7_png
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 82.2373, "height": 82.2373,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "FRAME",
                      "name": "date-time",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "VERTICAL", "itemSpacing": 2.2843689918518066, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 18.274951934814453, "paddingBottom": 2.2843689918518066, "paddingLeft": 18.274951934814453,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 1.1421844959259033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1.1421844959259033, "strokeRightWeight": 1.1421844959259033, "strokeBottomWeight": 1.1421844959259033, "strokeLeftWeight": 1.1421844959259033,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0.004000000189989805, "g": 0.11800000071525574, "b": 0.6000000238418579, "a": 0 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.00800000037997961, "g": 0.19599999487400055, "b": 1, "a": 1 },
                                "position": 0.5,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.004999999888241291, "g": 0.11800000071525574, "b": 0.6000000238418579, "a": 0 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [[1, 0, 0], [0, 1, 0.5]]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 4.568737983703613,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "HUG"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 392.9114, "height": 32.2844,
                        "relativeTransform": [[1, 0, 103.5443], [0, 1, 84.5216]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "TEXT",
                          "name": "MON 29 SEP, 20:00 CET",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.1421844959259033, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "characters": "WED 1 OCT, 21:00 CET", "fontSize": 22.84368896484375,
                            "textCase": "ORIGINAL", "textDecoration": "NONE",
                            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                            "paragraphSpacing": 0, "paragraphIndent": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "layoutSizingVertical": "HUG",
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "PIXELS", "value": 29.696796417236328 },
                            "font": { "family": "Champions Web", "style": "Regular" },
                            "layoutSizingHorizontal": "FILL",
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 20,
                                "font": { "family": "Champions Web", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 22.84368896484375
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 356.3615, "height": 30,
                            "relativeTransform": [[1, 0, 18.2749], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            };
    
    const root = await this.renderDefinition(structure);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}

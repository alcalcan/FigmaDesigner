import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_specific_preview_header_img_1_opt_png from "././assets/specific_preview_header_img_1_opt.png";
import IMG_specific_preview_header_img_2_opt_png from "././assets/specific_preview_header_img_2_opt.png";
import IMG_specific_preview_header_img_6_opt_png from "././assets/specific_preview_header_img_6_opt.png";
import IMG_specific_preview_header_img_5_png from "././assets/specific_preview_header_img_5.png";
import IMG_specific_preview_header_img_3_png from "././assets/specific_preview_header_img_3.png";
import IMG_specific_preview_header_img_4_png from "././assets/specific_preview_header_img_4.png";
import SVG_specific_preview_header_Synth_Ellipse2300_0 from "./assets/specific_preview_header_Synth_Ellipse2300_0.svg";
import SVG_specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig from "./assets/specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig.svg";
import SVG_specific_preview_header_assets_icon_Logo_2077_2769_svg_orig from "./assets/specific_preview_header_assets_icon_Logo_2077_2769_svg_orig.svg";

export class SpecificFrame2609260 extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
              "type": "FRAME",
              "name": "Frame 2609260",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 56, "y": 86,
                "layoutMode": "NONE",
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED"
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 489, "height": 342,
                "relativeTransform": [[1, 0, 56], [0, 1, 86]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "bg",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "x": 0, "y": 172,
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
                    "layoutSizingVertical": "FIXED"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 489, "height": 10,
                    "relativeTransform": [[1, 0, 0], [0, 1, 172]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
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
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
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
                        "width": 489, "height": 2,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "RECTANGLE",
                      "name": "Rectangle 2241",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "STRETCH", "layoutGrow": 1,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.2549019753932953, "a": 0 },
                                "position": 0.20192307233810425,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.2549019753932953, "a": 1 },
                                "position": 0.504807710647583,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.2549019753932953, "a": 0 },
                                "position": 0.7980769276618958,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                1.2479166984558105,
                                2.2287727219350018e-14,
                                -0.12916666269302368
                              ],
                              [
                                -2.1038726316646716e-14,
                                1.2479166984558105,
                                -0.12395833432674408
                              ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 489, "height": 6,
                        "relativeTransform": [[1, 0, 0], [0, 1, 2]],
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
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
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
                        "width": 489, "height": 2,
                        "relativeTransform": [[1, 0, 0], [0, 1, 8]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    }
                  ]
                },
                {
                  "type": "TEXT",
                  "name": "REAL MADRID",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.8044649362564087, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "characters": "REAL MADRID", "fontSize": 144,
                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                    "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                    "paragraphSpacing": 0, "paragraphIndent": 0,
                    "x": -4, "y": 0,
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
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "radius": 22.61751937866211,
                        "boundVariables": {},
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.4000000059604645 },
                        "offset": { "x": 10.519775390625, "y": 22.354524612426758 },
                        "spread": 0,
                        "showShadowBehindNode": false
                      }
                    ],
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "FIXED",
                    "letterSpacing": { "unit": "PIXELS", "value": 0 },
                    "lineHeight": { "unit": "AUTO" },
                    "font": { "family": "Champions", "style": "Display" },
                    "richTextSpans": [
                      {
                        "start": 0,
                        "end": 11,
                        "font": { "family": "Champions", "style": "Display" },
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 1, "g": 1, "b": 1 },
                            "boundVariables": {}
                          }
                        ],
                        "fontSize": 144
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 499, "height": 173,
                    "relativeTransform": [[1, 0, -4], [0, 1, 0]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                  }
                },
                {
                  "type": "TEXT",
                  "name": "BARCELONA",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.9242775440216064, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "characters": "BARCELONA", "fontSize": 144,
                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                    "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                    "paragraphSpacing": 0, "paragraphIndent": 0,
                    "x": 27, "y": 158,
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
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "radius": 25.98604965209961,
                        "boundVariables": {},
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.4000000059604645 },
                        "offset": { "x": 12.08653450012207, "y": 25.683889389038086 },
                        "spread": 0,
                        "showShadowBehindNode": false
                      }
                    ],
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "FIXED",
                    "letterSpacing": { "unit": "PIXELS", "value": 0 },
                    "lineHeight": { "unit": "AUTO" },
                    "font": { "family": "Champions", "style": "Display" },
                    "richTextSpans": [
                      {
                        "start": 0,
                        "end": 9,
                        "font": { "family": "Champions", "style": "Display" },
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 1, "g": 1, "b": 1 },
                            "boundVariables": {}
                          }
                        ],
                        "fontSize": 144
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 435, "height": 173,
                    "relativeTransform": [[1, 0, 27], [0, 1, 158]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  }
                },
                {
                  "type": "TEXT",
                  "name": "VS",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.29084306955337524, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "characters": "VS", "fontSize": 48.27995300292969,
                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                    "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                    "paragraphSpacing": 0, "paragraphIndent": 0,
                    "x": 228, "y": 143,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.8196630477905273, "g": 0.5446940064430237, "b": 1 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [
                      {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "radius": 4.326229572296143,
                        "boundVariables": {},
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.800000011920929 },
                        "offset": { "x": 3.803278684616089, "y": 0.9508196711540222 },
                        "spread": 0,
                        "showShadowBehindNode": false
                      }
                    ],
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "FIXED",
                    "letterSpacing": { "unit": "PIXELS", "value": 0 },
                    "lineHeight": { "unit": "AUTO" },
                    "font": { "family": "Champions", "style": "Display" },
                    "richTextSpans": [
                      {
                        "start": 0,
                        "end": 2,
                        "font": { "family": "Champions", "style": "Display" },
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.8196630477905273, "g": 0.5446940064430237, "b": 1 },
                            "boundVariables": {}
                          }
                        ],
                        "fontSize": 48.27995300292969
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 33, "height": 58,
                    "relativeTransform": [[1, 0, 228], [0, 1, 143]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                  }
                }
              ]
            };
    
    const root = await this.renderDefinition(structure);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}

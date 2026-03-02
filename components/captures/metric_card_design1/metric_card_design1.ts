import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_metric_card_design1_assets_icon_Subtract_1578_10446_svg_orig from "./assets/metric_card_design1_assets_icon_Subtract_1578_10446_svg_orig.svg";
import SVG_metric_card_design1_assets_vector_Area_Fill_1578_10451_svg_orig from "./assets/metric_card_design1_assets_vector_Area_Fill_1578_10451_svg_orig.svg";
import SVG_metric_card_design1_assets_icon_Vector_1578_10461_svg_orig from "./assets/metric_card_design1_assets_icon_Vector_1578_10461_svg_orig.svg";
import SVG_metric_card_design1_assets_icon_Vector_1578_10455_svg_orig from "./assets/metric_card_design1_assets_icon_Vector_1578_10455_svg_orig.svg";


export class metric_card_design1 extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "metric_card_design1",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
            "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
            "strokeWeight": 2, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 2, "strokeRightWeight": 2, "strokeBottomWeight": 2, "strokeLeftWeight": 2,
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
                    "color": { "r": 1, "g": 1, "b": 1, "a": 1 },
                    "position": 0,
                    "boundVariables": {}
                  },
                  {
                    "color": { "r": 0.9800000190734863, "g": 0.9900000095367432, "b": 1, "a": 0.9599999785423279 },
                    "position": 1,
                    "boundVariables": {}
                  }
                ],
                "gradientTransform": [
                  [
                    0.690418004989624,
                    0.38661691546440125,
                    -0.044504158198833466
                  ],
                  [
                    -0.38661691546440125,
                    0.37372609972953796,
                    0.49469995498657227
                  ]
                ]
              }
            ],
            "strokes": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 },
                "boundVariables": {}
              }
            ],
            "effects": [
              {
                "visible": true, "type": "BACKGROUND_BLUR",
                "radius": 24,
                "boundVariables": {},
                "blurType": "NORMAL"
              },
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "radius": 32,
                "boundVariables": {},
                "color": {
                  "r": 0.05000000074505806, "g": 0.10000000149011612, "b": 0.20000000298023224,
                  "a": 0.05999999865889549
                },
                "offset": { "x": 0, "y": 16 },
                "spread": 0,
                "showShadowBehindNode": true
              },
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "radius": 4,
                "boundVariables": {},
                "color": { "r": 0, "g": 0, "b": 0, "a": 0.019999999552965164 },
                "offset": { "x": 0, "y": 4 },
                "spread": 0,
                "showShadowBehindNode": true
              }
            ],
            "cornerRadius": 32,
            "layoutSizingHorizontal": "FIXED",
            "layoutSizingVertical": "HUG"
          },
          "layoutProps": { "width": 490.6667, "height": 308.8761, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "Header",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                "layoutSizingHorizontal": "HUG",
                "layoutSizingVertical": "HUG"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 91, "height": 15.8761,
                "relativeTransform": [[1, 0, 16], [0, 1, 16]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "TEXT",
                  "name": "Period",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "characters": "Global Avg.", "fontSize": 12,
                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                    "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                    "paragraphSpacing": 0, "paragraphIndent": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.5, "g": 0.550000011920929, "b": 0.6499999761581421 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "layoutSizingHorizontal": "HUG",
                    "layoutSizingVertical": "HUG",
                    "letterSpacing": { "unit": "PERCENT", "value": 0 },
                    "lineHeight": { "unit": "AUTO" },
                    "font": { "family": "Inter", "style": "Medium" },
                    "richTextSpans": [
                      {
                        "start": 0,
                        "end": 11,
                        "font": { "family": "Inter", "style": "Medium" },
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.5, "g": 0.550000011920929, "b": 0.6499999761581421 },
                            "boundVariables": {}
                          }
                        ],
                        "fontSize": 12
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 65, "height": 15,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0.438]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  }
                },
                {
                  "type": "FRAME",
                  "name": "Star Icon",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "GRID", "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "gridRowCount": 1,
                    "gridColumnCount": 1,
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
                    "width": 18, "height": 15.8761,
                    "relativeTransform": [[1, 0, 73], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Subtract",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0, "b": 0 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 18, "height": 15.8761,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "svgContent": SVG_metric_card_design1_assets_icon_Subtract_1578_10446_svg_orig
                    }
                  ]
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "Content",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                "width": 458.6667, "height": 197,
                "relativeTransform": [[1, 0, 16], [0, 1, 47.8761]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "TEXT",
                  "name": "Label",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "characters": "Server Latency", "fontSize": 16,
                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                    "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                    "paragraphSpacing": 0, "paragraphIndent": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.44999998807907104, "g": 0.5, "b": 0.6000000238418579 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "layoutSizingHorizontal": "HUG",
                    "layoutSizingVertical": "HUG",
                    "letterSpacing": { "unit": "PERCENT", "value": 0 },
                    "lineHeight": { "unit": "AUTO" },
                    "font": { "family": "Inter", "style": "Regular" },
                    "richTextSpans": [
                      {
                        "start": 0,
                        "end": 14,
                        "font": { "family": "Inter", "style": "Regular" },
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.44999998807907104, "g": 0.5, "b": 0.6000000238418579 },
                            "boundVariables": {}
                          }
                        ],
                        "fontSize": 16
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 115, "height": 19,
                    "relativeTransform": [[1, 0, 171.8333], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  }
                },
                {
                  "type": "TEXT",
                  "name": "Value",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "characters": "24ms", "fontSize": 48,
                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                    "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                    "paragraphSpacing": 0, "paragraphIndent": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.05000000074505806, "g": 0.07999999821186066, "b": 0.15000000596046448 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "layoutSizingHorizontal": "HUG",
                    "layoutSizingVertical": "HUG",
                    "letterSpacing": { "unit": "PIXELS", "value": -1.5 },
                    "lineHeight": { "unit": "AUTO" },
                    "font": { "family": "Inter", "style": "Bold" },
                    "richTextSpans": [
                      {
                        "start": 0,
                        "end": 4,
                        "font": { "family": "Inter", "style": "Bold" },
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.05000000074505806, "g": 0.07999999821186066, "b": 0.15000000596046448 },
                            "boundVariables": {}
                          }
                        ],
                        "fontSize": 48
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 129, "height": 58,
                    "relativeTransform": [[1, 0, 164.8333], [0, 1, 35]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  }
                },
                {
                  "type": "FRAME",
                  "name": "Sparkline Container",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                    "layoutMode": "NONE",
                    "fills": [],
                    "strokes": [],
                    "effects": [
                      {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "radius": 18.899999618530273,
                        "boundVariables": {},
                        "color": {
                          "r": 0.6117647290229797, "g": 0.364705890417099, "b": 0.9372549057006836,
                          "a": 0.800000011920929
                        },
                        "offset": { "x": 0, "y": 1 },
                        "spread": 0,
                        "showShadowBehindNode": false
                      }
                    ],
                    "cornerRadius": 16,
                    "layoutSizingVertical": "FIXED",
                    "layoutSizingHorizontal": "FILL"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 458.6667, "height": 88,
                    "relativeTransform": [[1, 0, 0], [0, 1, 109]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Area Fill",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 0, "y": 9.123046875,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0, "g": 0, "b": 0.39015549421310425, "a": 1 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.6830829381942749, "g": 0.40578049421310425, "b": 1, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [ -4.924708107978404e-8, -1.0000001192092896, 1 ],
                              [
                                33.757572174072266,
                                -6.586059697610835e-8,
                                -15.496234893798828
                              ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 459, "height": 79,
                        "relativeTransform": [[1, 0, 0], [0, 1, 9.123]],
                        "constraints": { "horizontal": "MIN", "vertical": "STRETCH" }
                      },
                      "svgContent": SVG_metric_card_design1_assets_vector_Area_Fill_1578_10451_svg_orig
                    }
                  ]
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "Footer",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 20, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "MAX",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                "width": 458.6667, "height": 32,
                "relativeTransform": [[1, 0, 16], [0, 1, 260.8761]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Platform Name",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                    "width": 92.0034, "height": 22,
                    "relativeTransform": [[1, 0, 0], [0, 1, 10]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Platform Icon",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "GRID", "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "gridRowCount": 1,
                        "gridColumnCount": 1,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
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
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 22.0034, "height": 22,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0, "b": 0 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 22.0034, "height": 22,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "svgContent": SVG_metric_card_design1_assets_icon_Vector_1578_10461_svg_orig
                        }
                      ]
                    },
                    {
                      "type": "TEXT",
                      "name": "Platform Name",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "Cloudfront", "fontSize": 12,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.550000011920929, "g": 0.6000000238418579, "b": 0.699999988079071 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG",
                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                        "lineHeight": { "unit": "AUTO" },
                        "font": { "family": "Inter", "style": "Medium" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 10,
                            "font": { "family": "Inter", "style": "Medium" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.550000011920929, "g": 0.6000000238418579, "b": 0.699999988079071 },
                                "boundVariables": {}
                              }
                            ],
                            "fontSize": 12
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 62, "height": 15,
                        "relativeTransform": [[1, 0, 30.0034], [0, 1, 3.5]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "Trend Pill",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 8, "paddingRight": 12, "paddingBottom": 8, "paddingLeft": 12,
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
                    "fills": [
                      {
                        "visible": true, "opacity": 0.10000000149011612, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.20000000298023224, "g": 0.5, "b": 1 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 8,
                    "layoutSizingHorizontal": "HUG",
                    "layoutSizingVertical": "HUG"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 138, "height": 32,
                    "relativeTransform": [[1, 0, 320.6667], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Lucide / arrow-up",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "strokeWeight": 3.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 3.5, "strokeRightWeight": 3.5, "strokeBottomWeight": 3.5, "strokeLeftWeight": 3.5,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "layoutMode": "NONE",
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 14, "height": 14,
                        "relativeTransform": [[1, 0, 12], [0, 1, 9]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "Icon",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "strokeWeight": 3.5, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 3.5, "strokeRightWeight": 3.5, "strokeBottomWeight": 3.5, "strokeLeftWeight": 3.5,
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
                            "width": 14, "height": 14,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "Vector",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 3.5, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                                "x": 2.9166667461395264, "y": 2.9166667461395264,
                                "fills": [],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0.20000000298023224, "g": 0.5, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 8.1667, "height": 4.0833,
                                "relativeTransform": [[1, 0, 2.9167], [0, 1, 2.9167]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_metric_card_design1_assets_icon_Vector_1578_10455_svg_orig
                            },
                            {
                              "type": "VECTOR",
                              "name": "Vector",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 3.5, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                                "x": 7, "y": 2.9166667461395264,
                                "fills": [],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0.20000000298023224, "g": 0.5, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "effects": [],
                                "cornerRadius": 0,
                                "vectorPaths": [
                                  { "windingRule": "NONZERO", "data": "M 0 8.166666984558105 L 0 0" }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 0, "height": 8.1667,
                                "relativeTransform": [[1, 0, 7], [0, 1, 2.9167]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "TEXT",
                      "name": "Trend %",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "Stable", "fontSize": 13,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.20000000298023224, "g": 0.5, "b": 1 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG",
                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                        "lineHeight": { "unit": "AUTO" },
                        "font": { "family": "Inter", "style": "Bold" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 6,
                            "font": { "family": "Inter", "style": "Bold" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.20000000298023224, "g": 0.5, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "fontSize": 13
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 41, "height": 16,
                        "relativeTransform": [[1, 0, 32], [0, 1, 8]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "TEXT",
                      "name": "Trend Abs",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "((0ms))", "fontSize": 13,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.550000011920929, "g": 0.6000000238418579, "b": 0.699999988079071 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG",
                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                        "lineHeight": { "unit": "AUTO" },
                        "font": { "family": "Inter", "style": "Medium" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 7,
                            "font": { "family": "Inter", "style": "Medium" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.550000011920929, "g": 0.6000000238418579, "b": 0.699999988079071 },
                                "boundVariables": {}
                              }
                            ],
                            "fontSize": 13
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 47, "height": 16,
                        "relativeTransform": [[1, 0, 79], [0, 1, 8]],
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
        
        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

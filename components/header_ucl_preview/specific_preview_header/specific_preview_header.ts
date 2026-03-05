import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_specific_preview_header_img_1_opt_png from "././assets/specific_preview_header_img_1_opt.png";
import IMG_specific_preview_header_img_2_opt_png from "././assets/specific_preview_header_img_2_opt.png";
import IMG_specific_preview_header_img_6_opt_png from "././assets/specific_preview_header_img_6_opt.png";
import IMG_specific_preview_header_img_5_png from "././assets/specific_preview_header_img_5.png";
import IMG_specific_preview_header_img_3_png from "././assets/specific_preview_header_img_3.png";
import IMG_specific_preview_header_img_4_png from "././assets/specific_preview_header_img_4.png";
import SVG_specific_preview_header_Synth_Ellipse2300_0 from "./assets/specific_preview_header_Synth_Ellipse2300_0.svg";
import SVG_specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig from "./assets/specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig.svg";
import SVG_specific_preview_header_assets_icon_Logo_2077_2769_svg_orig from "./assets/specific_preview_header_assets_icon_Logo_2077_2769_svg_orig.svg";


export class specific_preview_header extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "specific_preview_header",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutMode": "NONE",
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
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
          "layoutProps": { "width": 600, "height": 696, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "Image placeholder",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 0, "y": 0,
                "layoutMode": "NONE",
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                    "gradientStops": [
                      {
                        "color": { "r": 0.004227029159665108, "g": 0.24253396689891815, "b": 0.7897573709487915, "a": 1 },
                        "position": 0,
                        "boundVariables": {}
                      },
                      {
                        "color": { "r": 0, "g": 0.09838132560253143, "b": 0.3242938816547394, "a": 1 },
                        "position": 1,
                        "boundVariables": {}
                      }
                    ],
                    "gradientTransform": [
                      [ -0.8690954446792603, 0.8705018162727356, 0.7127553224563599 ],
                      [ -0.8279772400856018, -1.1123262643814087, 1.527748465538025 ]
                    ]
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
                "width": 600, "height": 696,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Frame 626577",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 1.597333312034607, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1.597333312034607, "strokeRightWeight": 1.597333312034607, "strokeBottomWeight": 1.597333312034607, "strokeLeftWeight": 1.597333312034607,
                    "x": -109.00000762939453, "y": 510.45751953125,
                    "layoutMode": "NONE",
                    "fills": [],
                    "strokes": [],
                    "effects": [
                      {
                        "visible": true, "type": "LAYER_BLUR",
                        "radius": 11.399998664855957,
                        "boundVariables": {},
                        "blurType": "NORMAL"
                      }
                    ],
                    "cornerRadius": 0,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "FIXED"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 752.764, "height": 690.6091,
                    "relativeTransform": [[0.4332, 0.9013, -109], [-0.9013, 0.4332, 510.4575]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Ellipse 2300",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": true, "maskType": "ALPHA",
                        "strokeWeight": 1.6522594690322876, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 422.51751708984375, "y": 164.98736572265625,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0, "g": 0, "b": 0, "a": 1 },
                                "position": 0.5208994150161743,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0, "g": 0, "b": 0, "a": 0 },
                                "position": 0.948544979095459,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                5.551115123125783e-17,
                                1.337795376777649,
                                -0.48529431223869324
                              ],
                              [ -1.0066038370132446, 0, 1.0084799528121948 ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [
                          {
                            "visible": true, "type": "LAYER_BLUR",
                            "radius": 49.56778335571289,
                            "boundVariables": {},
                            "blurType": "NORMAL"
                          }
                        ],
                        "cornerRadius": 0,
                        "vectorPaths": [
                          {
                            "windingRule": "NONZERO",
                            "data": "M 482.7797036471215 307.53171061762583 C 449.98666801811993 397.3460780744511 374.10790320005674 426.46600341796875 239.06862487861738 426.46600341796875 C 104.029346557178 426.46600341796875 40.07246428955375 426.46600341796875 8.14223157870865 317.84526595538523 C -23.788001132136454 209.2245284928017 34.511023783087325 0 248.65726551621802 0 C 469.1959343410825 0 515.5727392761231 217.71734316080057 482.7797036471215 307.53171061762583 Z"
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 492.2501, "height": 426.466,
                        "relativeTransform": [[0.9007, -0.4345, 422.5175], [0.4345, 0.9007, 164.9874]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "svgContent": SVG_specific_preview_header_Synth_Ellipse2300_0
                    },
                    {
                      "type": "RECTANGLE",
                      "name": "UCL_2024-27_LightWaveTexture_RGB_Transparent_V3_5k 2",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1.1033473014831543, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1.1033473014831543, "strokeRightWeight": 1.1033473014831543, "strokeBottomWeight": 1.1033473014831543, "strokeLeftWeight": 1.1033473014831543,
                        "x": 1389.421630859375, "y": 288.06134033203125,
                        "fills": [
                          {
                            "visible": false, "opacity": 0.20000000298023224, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0, "b": 0 },
                            "boundVariables": {}
                          },
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
                            "originalImageHash": "c5ba8a8306d03b392fa6a9b23dd51107bc846e40",
                            "assetRef": IMG_specific_preview_header_img_1_opt_png
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1565.1, "height": 1566.2853,
                        "relativeTransform": [[-0.7184, -0.6956, 1389.4216], [-0.6956, 0.7184, 288.0613]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      }
                    },
                    {
                      "type": "RECTANGLE",
                      "name": "UCL_2024-27_LightWaveTexture_RGB_Transparent_V3_5k 2",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1.1033473014831543, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1.1033473014831543, "strokeRightWeight": 1.1033473014831543, "strokeBottomWeight": 1.1033473014831543, "strokeLeftWeight": 1.1033473014831543,
                        "x": 1381.6497802734375, "y": 271.1974792480469,
                        "fills": [
                          {
                            "visible": false, "opacity": 0.20000000298023224, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0, "b": 0 },
                            "boundVariables": {}
                          },
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
                            "originalImageHash": "c5ba8a8306d03b392fa6a9b23dd51107bc846e40",
                            "assetRef": IMG_specific_preview_header_img_2_opt_png
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1565.1, "height": 1566.2853,
                        "relativeTransform": [[-0.7184, -0.6956, 1381.6498], [-0.6956, 0.7184, 271.1975]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
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
                        "x": 320.0232849121094, "y": 470.836669921875,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.002118051052093506, "g": 0.002118051052093506, "b": 0.2541666626930237 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 24
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 144, "height": 144,
                        "relativeTransform": [[0.4332, -0.9013, 320.0233], [0.9013, 0.4332, 470.8367]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "opacity",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "x": 1.1368683772161603e-13, "y": 431,
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
                    "width": 600, "height": 265,
                    "relativeTransform": [[1, 0, 0], [0, 1, 431]],
                    "constraints": { "horizontal": "MIN", "vertical": "MAX" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "opacity",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.8736771941184998, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.8736771941184998, "strokeRightWeight": 0.8736771941184998, "strokeBottomWeight": 0.8736771941184998, "strokeLeftWeight": 0.8736771941184998,
                        "x": 600, "y": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 0.8999999761581421, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0, "g": 0, "b": 0, "a": 0 },
                                "position": 0.06926402449607849,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0, "g": 0, "b": 0, "a": 0.4699999988079071 },
                                "position": 0.507688581943512,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0, "g": 0, "b": 0, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                4.563296851500809e-9,
                                1.4345513582229614,
                                -0.35438522696495056
                              ],
                              [
                                -4.1392741203308105,
                                -3.1086244689504383e-15,
                                2.4483015537261963
                              ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 600, "height": 265,
                        "relativeTransform": [[-1, 0, 600], [0, 1, 0]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      }
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "opacity",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "x": 0, "y": 344,
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
                    "width": 600, "height": 344,
                    "relativeTransform": [[1, 0, 0], [0, -1, 344]],
                    "constraints": { "horizontal": "MIN", "vertical": "MAX" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "opacity",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.8736771941184998, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.8736771941184998, "strokeRightWeight": 0.8736771941184998, "strokeBottomWeight": 0.8736771941184998, "strokeLeftWeight": 0.8736771941184998,
                        "x": 600, "y": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 0.8999999761581421, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0, "g": 0, "b": 0, "a": 0 },
                                "position": 0.06926402449607849,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0, "g": 0, "b": 0, "a": 0.4699999988079071 },
                                "position": 0.507688581943512,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0, "g": 0, "b": 0, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                4.563296851500809e-9,
                                1.4345513582229614,
                                -0.35438522696495056
                              ],
                              [
                                -4.1392741203308105,
                                -3.1086244689504383e-15,
                                2.4483015537261963
                              ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 600, "height": 344,
                        "relativeTransform": [[-1, 0, 600], [0, 1, 0]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "deco_comps",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 1.1368683772161603e-13, "y": 454,
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
                "width": 600, "height": 242,
                "relativeTransform": [[1, 0, 0], [0, 1, 454]],
                "constraints": { "horizontal": "MIN", "vertical": "MAX" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "deco",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "x": 0, "y": 178,
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
                    "width": 600, "height": 64,
                    "relativeTransform": [[1, 0, 0], [0, 1, 178]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MAX" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "glass",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": 606.9140625, "y": 357.62646484375,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                            "scaleMode": "CROP",
                            "imageTransform": [
                              [
                                0.9999999403953552,
                                -1.6957199401893446e-23,
                                7.993605777301127e-15
                              ],
                              [ 0, 0.5457569360733032, 1.0155599028394136e-7 ]
                            ],
                            "scalingFactor": 0.5,
                            "filters": {
                              "exposure": 0,
                              "contrast": 0,
                              "saturation": 0,
                              "temperature": 0,
                              "tint": 0,
                              "highlights": 0,
                              "shadows": 0
                            },
                            "originalImageHash": "d1b5a429f1fc88dd6f5a3f7ab73d0a07c23dd34f",
                            "assetRef": IMG_specific_preview_header_img_6_opt_png
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 670.4823, "height": 364.8927,
                        "relativeTransform": [[-0.9999, 0.0101, 606.9141], [-0.0101, -0.9999, 357.6265]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "RECTANGLE",
                      "name": "image ",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.873677134513855, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.873677134513855, "strokeRightWeight": 0.873677134513855, "strokeBottomWeight": 0.873677134513855, "strokeLeftWeight": 0.873677134513855,
                        "x": 0, "y": 23,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 0 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0, "g": 0, "b": 0.250980406999588, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [ 0.538985550403595, 1.1702684164047241, -0.4097590148448944 ],
                              [
                                -1.308580994606018,
                                0.0028142016381025314,
                                1.0786352157592773
                              ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 600, "height": 40.9999,
                        "relativeTransform": [[1, 0, 0], [0, 1, 23]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "Buttons",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 44, "y": 547,
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
                "width": 512, "height": 48,
                "relativeTransform": [[1, 0, 44], [0, 1, 547]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "pk-button",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 12, "paddingRight": 16, "paddingBottom": 12, "paddingLeft": 16,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 8,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "HUG"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 296, "height": 48,
                    "relativeTransform": [[1, 0, 108], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "AV / play",
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
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 24, "height": 24,
                        "relativeTransform": [[1, 0, 57], [0, 1, 12]],
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
                            "x": 8, "y": 5.820037841796875,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 },
                                "boundVariables": {
                                  "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5ad177f4d325933a231fd45acd9a89c96629eba0/3505:249" }
                                }
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 10.1373, "height": 12.3599,
                            "relativeTransform": [[1, 0, 8], [0, 1, 5.82]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig
                        }
                      ]
                    },
                    {
                      "type": "TEXT",
                      "name": "Label",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "Where to watch", "fontSize": 20,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 16, "paragraphIndent": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 },
                            "boundVariables": {
                              "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5ad177f4d325933a231fd45acd9a89c96629eba0/3505:249" }
                            }
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "layoutSizingHorizontal": "HUG",
                        "layoutSizingVertical": "HUG",
                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                        "lineHeight": { "unit": "PERCENT", "value": 100 },
                        "font": { "family": "Manrope", "style": "SemiBold" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 14,
                            "font": { "family": "Manrope", "style": "SemiBold" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 },
                                "boundVariables": {
                                  "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5ad177f4d325933a231fd45acd9a89c96629eba0/3505:249" }
                                }
                              }
                            ],
                            "fontSize": 20
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 150, "height": 20,
                        "relativeTransform": [[1, 0, 89], [0, 1, 14]],
                        "constraints": { "horizontal": "STRETCH", "vertical": "CENTER" }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "RECTANGLE",
              "name": "Rectangle 2243",
              "props": {
                "visible": true, "opacity": 0.5600000023841858, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1.598246693611145, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1.598246693611145, "strokeRightWeight": 1.598246693611145, "strokeBottomWeight": 1.598246693611145, "strokeLeftWeight": 1.598246693611145,
                "x": -179.484375, "y": -242.19546508789062,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 },
                    "boundVariables": {
                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5ad177f4d325933a231fd45acd9a89c96629eba0/3505:249" }
                    }
                  }
                ],
                "strokes": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.40784314274787903, "g": 0, "b": 0.8039215803146362 },
                    "boundVariables": {}
                  }
                ],
                "effects": [
                  {
                    "visible": true, "type": "BACKGROUND_BLUR",
                    "radius": 12,
                    "boundVariables": {},
                    "blurType": "NORMAL"
                  }
                ],
                "cornerRadius": 51.14389419555664
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 724.2156, "height": 724.2156,
                "relativeTransform": [[0.7071, -0.7071, -179.4844], [0.7071, 0.7071, -242.1955]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "RECTANGLE",
              "name": "Rectangle 2244",
              "props": {
                "visible": true, "opacity": 0.5600000023841858, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1.598246693611145, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1.598246693611145, "strokeRightWeight": 1.598246693611145, "strokeBottomWeight": 1.598246693611145, "strokeLeftWeight": 1.598246693611145,
                "x": 780.431640625, "y": -242.19546508789062,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 },
                    "boundVariables": {
                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5ad177f4d325933a231fd45acd9a89c96629eba0/3505:249" }
                    }
                  }
                ],
                "strokes": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.40784314274787903, "g": 0, "b": 0.8039215803146362 },
                    "boundVariables": {}
                  }
                ],
                "effects": [
                  {
                    "visible": true, "type": "BACKGROUND_BLUR",
                    "radius": 12,
                    "boundVariables": {},
                    "blurType": "NORMAL"
                  }
                ],
                "cornerRadius": 51.14389419555664
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 724.2156, "height": 724.2156,
                "relativeTransform": [[0.7071, -0.7071, 780.4316], [0.7071, 0.7071, -242.1955]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "FRAME",
              "name": "Top bar",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 28, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 16, "paddingRight": 24, "paddingBottom": 16, "paddingLeft": 24,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 0.873677134513855, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.873677134513855, "strokeRightWeight": 0.873677134513855, "strokeBottomWeight": 0.873677134513855, "strokeLeftWeight": 0.873677134513855,
                "x": 0, "y": 0,
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
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.6000000238418579 },
                        "position": 0,
                        "boundVariables": {}
                      },
                      {
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0 },
                        "position": 1,
                        "boundVariables": {}
                      }
                    ],
                    "gradientTransform": [
                      [
                        0.02390393055975437,
                        0.7961031198501587,
                        -7.733614096339103e-16
                      ],
                      [ -18.639245986938477, 0.010453303344547749, 0.5 ]
                    ]
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "HUG"
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 600, "height": 82,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Logos container",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
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
                    "width": 121, "height": 50,
                    "relativeTransform": [[1, 0, 239.5], [0, 1, 16]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "ucl and divider",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                        "width": 63, "height": 50,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "UCL LOGO",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "strokeWeight": 0.9918752908706665, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.9918752908706665, "strokeRightWeight": 0.9918752908706665, "strokeBottomWeight": 0.9918752908706665, "strokeLeftWeight": 0.9918752908706665,
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
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 50, "height": 50,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "Logo",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 5.000552177429199, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 0, "y": 1.041677713394165,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 50, "height": 47.9167,
                                "relativeTransform": [[1, 0, 0], [0, 1, 1.0417]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_specific_preview_header_assets_icon_Logo_2077_2769_svg_orig
                            }
                          ]
                        },
                        {
                          "type": "RECTANGLE",
                          "name": "Divider",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.3885948657989502, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.3885948657989502, "strokeRightWeight": 1.3885948657989502, "strokeBottomWeight": 1.3885948657989502, "strokeLeftWeight": 1.3885948657989502,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                "gradientStops": [
                                  {
                                    "color": { "r": 1, "g": 1, "b": 1, "a": 0 },
                                    "position": 0,
                                    "boundVariables": {}
                                  },
                                  {
                                    "color": { "r": 1, "g": 1, "b": 1, "a": 1 },
                                    "position": 0.515625,
                                    "boundVariables": {}
                                  },
                                  {
                                    "color": { "r": 1, "g": 1, "b": 1, "a": 0 },
                                    "position": 1,
                                    "boundVariables": {}
                                  }
                                ],
                                "gradientTransform": [[6.123234262925839e-17, 1, 0], [-1, 0, 1]]
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 1, "height": 46,
                            "relativeTransform": [[1, 0, 62], [0, 1, 2]],
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
                        "strokeWeight": 0.9918752908706665, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.9918752908706665, "strokeRightWeight": 0.9918752908706665, "strokeBottomWeight": 0.9918752908706665, "strokeLeftWeight": 0.9918752908706665,
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
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 50, "height": 50,
                        "relativeTransform": [[1, 0, 71], [0, 1, 0]],
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
                                "assetRef": IMG_specific_preview_header_img_5_png
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 50, "height": 50,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
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
            },
            {
              "type": "FRAME",
              "name": "DateBox",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "strokeWeight": 1.1785714626312256, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1.1785714626312256, "strokeRightWeight": 1.1785714626312256, "strokeBottomWeight": 1.1785714626312256, "strokeLeftWeight": 1.1785714626312256,
                "x": 163, "y": 441,
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
                "width": 273.4286, "height": 66,
                "relativeTransform": [[1, 0, 163], [0, 1, 441]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "date_hour",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "VERTICAL", "itemSpacing": 4.1198554039001465, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 2.357142925262451, "paddingRight": 14.142857551574707, "paddingBottom": 7.0714287757873535, "paddingLeft": 14.142857551574707,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 0.5149819254875183, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.5149819254875183, "strokeRightWeight": 0.5149819254875183, "strokeBottomWeight": 0.5149819254875183, "strokeLeftWeight": 0.5149819254875183,
                    "x": -66, "y": 3,
                    "counterAxisSpacing": 0,
                    "layoutWrap": "NO_WRAP",
                    "counterAxisAlignContent": "AUTO",
                    "gridRowCount": 0,
                    "gridColumnCount": 0,
                    "gridRowGap": 0,
                    "gridColumnGap": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 0.4000000059604645, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.40784314274787903, "g": 0, "b": 0.8039215803146362 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "HUG"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 406, "height": 60.4286,
                    "relativeTransform": [[1, 0, -66], [0, 1, 3]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "TEXT",
                      "name": "28 AUGUST, 18:00 CET",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.2567676901817322, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "28 AUGUST, 18:00 CET", "fontSize": 42.62343978881836,
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
                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                        "lineHeight": { "unit": "AUTO" },
                        "font": { "family": "Champions", "style": "Display" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 20,
                            "font": { "family": "Champions", "style": "Display" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 1, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "fontSize": 42.62343978881836
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 243, "height": 51,
                        "relativeTransform": [[1, 0, 81.5], [0, 1, 2.3571]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "divider-ball-1-desktop",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "strokeWeight": 0.2700112462043762, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.2700112462043762, "strokeRightWeight": 0.2700112462043762, "strokeBottomWeight": 0.2700112462043762, "strokeLeftWeight": 0.2700112462043762,
                    "x": 24.750558853149414, "y": 0,
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
                    "width": 223.9286, "height": 5.8929,
                    "relativeTransform": [[1, 0, 24.7506], [0, 1, 0]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "Rectangle",
                      "props": {
                        "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                        "x": 1.6210570335388184, "y": 2.693938732147217,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0.7568627595901489, "g": 0.7607843279838562, "b": 0.8352941274642944, "a": 0 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.658823549747467, "g": 0.12156862765550613, "b": 0.8470588326454163, "a": 1 },
                                "position": 0.13810230791568756,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 1, "g": 0.8235294222831726, "b": 0, "a": 1 },
                                "position": 0.3229166567325592,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.8274509906768799, "g": 0.46666666865348816, "b": 0.43529412150382996, "a": 1 },
                                "position": 0.5317864418029785,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.6980392336845398, "g": 0.1921568661928177, "b": 0.7686274647712708, "a": 1 },
                                "position": 0.703125,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.33725491166114807, "g": 0.07450980693101883, "b": 0.9921568632125854, "a": 1 },
                                "position": 0.8570077419281006,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.7568627595901489, "g": 0.7607843279838562, "b": 0.8352941274642944, "a": 0 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                0.9999884963035583,
                                0.00001147754392150091,
                                9.992007221626409e-16
                              ],
                              [ -0.00001147754392150091, 0.000011490817996673286, 0.5 ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 236.1394, "height": 0.7876,
                        "relativeTransform": [[1, 0, 1.6211], [0, 1, 2.6939]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      }
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "divider-ball-1-desktop",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "strokeWeight": 0.2700112462043762, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.2700112462043762, "strokeRightWeight": 0.2700112462043762, "strokeBottomWeight": 0.2700112462043762, "strokeLeftWeight": 0.2700112462043762,
                    "x": 24.750558853149414, "y": 60.10714340209961,
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
                    "width": 223.9286, "height": 5.8929,
                    "relativeTransform": [[1, 0, 24.7506], [0, 1, 60.1071]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "Rectangle",
                      "props": {
                        "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                        "x": 1.6210570335388184, "y": 2.693938732147217,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0.7568627595901489, "g": 0.7607843279838562, "b": 0.8352941274642944, "a": 0 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.658823549747467, "g": 0.12156862765550613, "b": 0.8470588326454163, "a": 1 },
                                "position": 0.13810230791568756,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 1, "g": 0.8235294222831726, "b": 0, "a": 1 },
                                "position": 0.3229166567325592,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.8274509906768799, "g": 0.46666666865348816, "b": 0.43529412150382996, "a": 1 },
                                "position": 0.5317864418029785,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.6980392336845398, "g": 0.1921568661928177, "b": 0.7686274647712708, "a": 1 },
                                "position": 0.703125,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.33725491166114807, "g": 0.07450980693101883, "b": 0.9921568632125854, "a": 1 },
                                "position": 0.8570077419281006,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.7568627595901489, "g": 0.7607843279838562, "b": 0.8352941274642944, "a": 0 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                0.9999884963035583,
                                0.00001147754392150091,
                                9.992007221626409e-16
                              ],
                              [ -0.00001147754392150091, 0.000011490817996673286, 0.5 ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 236.1394, "height": 0.7876,
                        "relativeTransform": [[1, 0, 1.6211], [0, 1, 2.6939]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "Madrid",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "strokeWeight": 2.595874071121216, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 2.595874071121216, "strokeRightWeight": 2.595874071121216, "strokeBottomWeight": 2.595874071121216, "strokeLeftWeight": 2.595874071121216,
                "x": 60, "y": 430,
                "layoutMode": "NONE",
                "fills": [
                  {
                    "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [
                  {
                    "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                    "radius": 4,
                    "boundVariables": {},
                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.4000000059604645 },
                    "offset": { "x": 4, "y": 2 },
                    "spread": 0,
                    "showShadowBehindNode": false
                  }
                ],
                "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED"
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 88, "height": 88,
                "relativeTransform": [[1, 0, 60], [0, 1, 430]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
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
                        "assetRef": IMG_specific_preview_header_img_3_png
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 88, "height": 88,
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
                "strokeWeight": 2.595874071121216, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 2.595874071121216, "strokeRightWeight": 2.595874071121216, "strokeBottomWeight": 2.595874071121216, "strokeLeftWeight": 2.595874071121216,
                "x": 452, "y": 430,
                "layoutMode": "NONE",
                "fills": [
                  {
                    "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [
                  {
                    "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                    "radius": 4,
                    "boundVariables": {},
                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.4000000059604645 },
                    "offset": { "x": -4, "y": 2 },
                    "spread": 0,
                    "showShadowBehindNode": false
                  }
                ],
                "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED"
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 88, "height": 88,
                "relativeTransform": [[1, 0, 452], [0, 1, 430]],
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
                        "assetRef": IMG_specific_preview_header_img_4_png
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 88, "height": 88,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
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

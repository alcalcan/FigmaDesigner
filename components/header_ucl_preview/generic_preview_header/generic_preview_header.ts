import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_generic_preview_header_img_1_opt_png from "././assets/generic_preview_header_img_1_opt.png";
import IMG_generic_preview_header_img_2_opt_png from "././assets/generic_preview_header_img_2_opt.png";
import IMG_generic_preview_header_img_3_opt_png from "././assets/generic_preview_header_img_3_opt.png";
import IMG_generic_preview_header_img_4_png from "././assets/generic_preview_header_img_4.png";
import IMG_generic_preview_header_img_5_png from "././assets/generic_preview_header_img_5.png";
import IMG_generic_preview_header_img_6_png from "././assets/generic_preview_header_img_6.png";
import IMG_generic_preview_header_img_7_png from "././assets/generic_preview_header_img_7.png";
import SVG_generic_preview_header_Synth_Ellipse2300_0 from "./assets/generic_preview_header_Synth_Ellipse2300_0.svg";
import SVG_generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig from "./assets/generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig.svg";


export class generic_preview_header extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "generic_preview_header",
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
                      "svgContent": SVG_generic_preview_header_Synth_Ellipse2300_0
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
                            "assetRef": IMG_generic_preview_header_img_1_opt_png
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
                            "assetRef": IMG_generic_preview_header_img_2_opt_png
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
                            "assetRef": IMG_generic_preview_header_img_3_opt_png
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
              "name": "Top bar",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 16, "paddingRight": 24, "paddingBottom": 16, "paddingLeft": 24,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                    "width": 50, "height": 50,
                    "relativeTransform": [[1, 0, 275], [0, 1, 16]],
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
                        "width": 50, "height": 50,
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
                              "svgContent": SVG_generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
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
            },
            {
              "type": "FRAME",
              "name": "divider-ball-1-desktop",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 0.46245673298835754, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.46245673298835754, "strokeRightWeight": 0.46245673298835754, "strokeBottomWeight": 0.46245673298835754, "strokeLeftWeight": 0.46245673298835754,
                "x": 104.1171875, "y": 519,
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
                "width": 391.1782, "height": 11.3385,
                "relativeTransform": [[1, 0, 104.1172], [0, 1, 519]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "RECTANGLE",
                  "name": "Rectangle",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                    "x": 74.88251495361328, "y": 3.0264127254486084,
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
                    "width": 240.8487, "height": 0.8848,
                    "relativeTransform": [[1, 0, 74.8825], [0, 1, 3.0264]],
                    "constraints": { "horizontal": "CENTER", "vertical": "SCALE" }
                  }
                }
              ]
            },
            {
              "type": "TEXT",
              "name": "UPCOMING MATCHES",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0.6117733716964722, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "characters": "UPCOMING MATCHES", "fontSize": 101.55438232421875,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                "paragraphSpacing": 0, "paragraphIndent": 0,
                "x": 29.833984375, "y": 82,
                "strokes": [],
                "effects": [
                  {
                    "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                    "radius": 32.392616271972656,
                    "boundVariables": {},
                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
                    "offset": { "x": 0, "y": 4.90797233581543 },
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
                    "fontSize": 101.55438232421875
                  },
                  {
                    "start": 9,
                    "end": 16,
                    "font": { "family": "Champions", "style": "Display" },
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.8196630477905273, "g": 0.5446940064430237, "b": 1 },
                        "boundVariables": {}
                      }
                    ],
                    "fontSize": 101.55438232421875
                  }
                ]
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 540, "height": 122,
                "relativeTransform": [[1, 0, 29.834], [0, 1, 82]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "FRAME",
              "name": "divider-ball-1-desktop",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 0.46245673298835754, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.46245673298835754, "strokeRightWeight": 0.46245673298835754, "strokeBottomWeight": 0.46245673298835754, "strokeLeftWeight": 0.46245673298835754,
                "x": 104, "y": 218,
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
                "width": 391.1782, "height": 11.3385,
                "relativeTransform": [[1, 0, 104], [0, 1, 218]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "RECTANGLE",
                  "name": "Rectangle",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                    "x": 34, "y": 3,
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
                    "width": 324, "height": 1,
                    "relativeTransform": [[1, 0, 34], [0, 1, 3]],
                    "constraints": { "horizontal": "CENTER", "vertical": "SCALE" }
                  }
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
                "x": 40, "y": 559,
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
                "relativeTransform": [[1, 0, 40], [0, 1, 559]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "pk-button",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 14, "paddingRight": 16, "paddingBottom": 14, "paddingLeft": 16,
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
                      "type": "TEXT",
                      "name": "Label",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "characters": "See all matches", "fontSize": 20,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
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
                        "layoutSizingVertical": "HUG",
                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                        "lineHeight": { "unit": "PERCENT", "value": 100 },
                        "font": { "family": "Manrope", "style": "SemiBold" },
                        "layoutSizingHorizontal": "FILL",
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 15,
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
                        "width": 264, "height": 20,
                        "relativeTransform": [[1, 0, 16], [0, 1, 14]],
                        "constraints": { "horizontal": "STRETCH", "vertical": "CENTER" }
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

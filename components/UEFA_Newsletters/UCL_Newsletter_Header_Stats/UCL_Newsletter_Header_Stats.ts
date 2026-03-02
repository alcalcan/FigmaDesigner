import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import { StatsTable } from "./StatsTable";
import { TopBar } from "./TopBar";


// SVG Assets
import IMG_UCL_Newsletter_Header_Stats_img_1_opt_png from "././assets/UCL_Newsletter_Header_Stats_img_1_opt.png";
import IMG_UCL_Newsletter_Header_Stats_img_6_opt_png from "././assets/UCL_Newsletter_Header_Stats_img_6_opt.png";
import SVG_UCL_Newsletter_Header_Stats_Synth_Ellipse2300_0 from "./assets/UCL_Newsletter_Header_Stats_Synth_Ellipse2300_0.svg";



export class UCL_Newsletter_Header_Stats extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "UCL_Newsletter_Header_Stats",
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
                  [-0.8690954446792603, 0.8705018162727356, 0.7127553224563599],
                  [-0.8279772400856018, -1.1123262643814087, 1.527748465538025]
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
                          [-1.0066038370132446, 0, 1.0084799528121948]
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
                  "svgContent": SVG_UCL_Newsletter_Header_Stats_Synth_Ellipse2300_0
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
                        "assetRef": IMG_UCL_Newsletter_Header_Stats_img_1_opt_png
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
                    "x": 1381.650390625, "y": 271.19720458984375,
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
                        "assetRef": IMG_UCL_Newsletter_Header_Stats_img_1_opt_png
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1565.1, "height": 1567,
                    "relativeTransform": [[-0.7184, -0.6956, 1381.6504], [-0.6956, 0.7184, 271.1972]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  }
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "opacity",
              "props": {
                "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
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
                "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
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
            },
            {
              "type": "FRAME",
              "name": "deco_comps",
              "props": {
                "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 0, "y": 454,
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
                "constraints": { "horizontal": "CENTER", "vertical": "MAX" }
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
                              [0, 0.5457569360733032, 1.0155599028394136e-7]
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
                            "assetRef": IMG_UCL_Newsletter_Header_Stats_img_6_opt_png
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
                              [0.538985550403595, 1.1702684164047241, -0.4097590148448944],
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
            }
          ]
        },
        {
          "type": "COMPONENT",
          "name": "Top bar",
          "component": TopBar,
          "props": {}
        },
        {
          "type": "TEXT",
          "name": "UCL SEASON COMPARED",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 0.46587955951690674, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "characters": "UCL SEASON COMPARED", "fontSize": 77.33601379394531,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
            "paragraphSpacing": 0, "paragraphIndent": 0,
            "x": 60, "y": 87.7197265625,
            "strokes": [],
            "effects": [
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "radius": 24.667728424072266,
                "boundVariables": {},
                "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
                "offset": { "x": 0, "y": 3.737534999847412 },
                "spread": 0,
                "showShadowBehindNode": false
              }
            ],
            "layoutSizingHorizontal": "FIXED",
            "layoutSizingVertical": "FIXED",
            "letterSpacing": { "unit": "PIXELS", "value": 0.5 },
            "lineHeight": { "unit": "PIXELS", "value": 67.0140380859375 },
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
                "fontSize": 77.33601379394531
              },
              {
                "start": 11,
                "end": 19,
                "font": { "family": "Champions", "style": "Display" },
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.8196630477905273, "g": 0.5446940064430237, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "fontSize": 77.33601379394531
              }
            ]
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 481, "height": 68,
            "relativeTransform": [[1, 0, 60], [0, 1, 87.7197]],
            "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
          }
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
            "x": 44, "y": 580,
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
            "relativeTransform": [[1, 0, 44], [0, 1, 580]],
            "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
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
                    "characters": "See all stats", "fontSize": 20,
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
                        "end": 13,
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
        },
        {
          "type": "COMPONENT",
          "name": "Comparison Stats",
          "component": StatsTable,
          "props": {}
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

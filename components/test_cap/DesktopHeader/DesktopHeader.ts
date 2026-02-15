import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_DesktopHeader_img_1_opt_png from "././assets/DesktopHeader_img_1_opt.png";
import IMG_DesktopHeader_img_2_opt_png from "././assets/DesktopHeader_img_2_opt.png";
import IMG_DesktopHeader_img_5_opt_png from "././assets/DesktopHeader_img_5_opt.png";
import IMG_DesktopHeader_img_4_png from "././assets/DesktopHeader_img_4.png";
import IMG_DesktopHeader_img_3_png from "././assets/DesktopHeader_img_3.png";
import SVG_DesktopHeader_Synth_Ellipse2300_0 from "./assets/DesktopHeader_Synth_Ellipse2300_0.svg";
import SVG_DesktopHeader_assets_icon_Logo_I1541_999_3097_59754_svg_50x47_916656494140625 from "./assets/DesktopHeader_assets_icon_Logo_I1541_999_3097_59754_svg_50x47_916656494140625.svg";
import SVG_DesktopHeader_assets_icon_Tail_1541_1063_svg_20x17 from "./assets/DesktopHeader_assets_icon_Tail_1541_1063_svg_20x17.svg";
import SVG_DesktopHeader_assets_icon_Tail_1541_1076_svg_20x17 from "./assets/DesktopHeader_assets_icon_Tail_1541_1076_svg_20x17.svg";
import SVG_DesktopHeader_assets_icon_Tail_1541_1089_svg_20x17 from "./assets/DesktopHeader_assets_icon_Tail_1541_1089_svg_20x17.svg";


export class DesktopHeader extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "DesktopHeader",
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
      "cornerRadius": 0
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
          "cornerRadius": 0
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
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
              "width": 752.7640380859375, "height": 690.609130859375,
              "relativeTransform": [
                [ 0.4332197606563568, 0.9012883305549622, -109.00000762939453 ],
                [ -0.9012883305549622, 0.4332197606563568, 510.45751953125 ]
              ],
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
                  "width": 492.2501220703125, "height": 426.46600341796875,
                  "relativeTransform": [
                    [
                      0.9006906747817993,
                      -0.43446099758148193,
                      422.51751708984375
                    ],
                    [ 0.43446099758148193, 0.9006906747817993, 164.98736572265625 ]
                  ],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "svgContent": SVG_DesktopHeader_Synth_Ellipse2300_0
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
                      "assetRef": IMG_DesktopHeader_img_1_opt_png
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                  "width": 1565.0999755859375, "height": 1566.2852783203125,
                  "relativeTransform": [
                    [ -0.7183816432952881, -0.6956492066383362, 1389.421630859375 ],
                    [ -0.6956492066383362, 0.7183816432952881, 288.06134033203125 ]
                  ],
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
                      "assetRef": IMG_DesktopHeader_img_2_opt_png
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                  "width": 1565.0999755859375, "height": 1567,
                  "relativeTransform": [
                    [ -0.7183816432952881, -0.6956492066383362, 1381.650390625 ],
                    [ -0.6956492066383362, 0.7183816432952881, 271.19720458984375 ]
                  ],
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
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
              "width": 600, "height": 265,
              "relativeTransform": [[1, 0, 1.1368683772161603e-13], [0, 1, 431]],
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
              "cornerRadius": 0
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
              "cornerRadius": 0
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
                  "cornerRadius": 0
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
                          "assetRef": IMG_DesktopHeader_img_5_opt_png
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                      "width": 670.4822998046875, "height": 364.8926696777344,
                      "relativeTransform": [
                        [ -0.9999493956565857, 0.010058796964585781, 606.9140625 ],
                        [ -0.010058796964585781, -0.9999493956565857, 357.62646484375 ]
                      ],
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
                      "width": 600, "height": 40.99989318847656,
                      "relativeTransform": [[1, -1.7484555314695172e-7, 0], [1.7484555314695172e-7, 1, 23]],
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
          "cornerRadius": 0
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
              "layoutMode": "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
              "layoutAlign": "INHERIT", "layoutGrow": 0,
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 125, "height": 50,
              "relativeTransform": [[1, 0, 237.5], [0, 1, 16]],
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
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
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
                      "cornerRadius": 0
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
                          "width": 50, "height": 47.916656494140625,
                          "relativeTransform": [[1, 0, 0], [0, 1, 1.041677713394165]],
                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                        },
                        "svgContent": SVG_DesktopHeader_assets_icon_Logo_I1541_999_3097_59754_svg_50x47_916656494140625
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
                "name": "Juventus",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
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
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 50, "height": 50,
                  "relativeTransform": [[1, 0, 75], [0, 1, 0]],
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
                          "originalImageHash": "74d8939a352cb19b5453c79b2d0716f0ed5edbe2",
                          "assetRef": IMG_DesktopHeader_img_4_png
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
          "relativeTransform": [[1, 0, 60], [0, 1, 87.7197265625]],
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
          "fills": [],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0
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
              "fills": [
                {
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                  "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                  "boundVariables": {}
                }
              ],
              "strokes": [],
              "effects": [],
              "cornerRadius": 8
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
                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                  "lineHeight": { "unit": "PERCENT", "value": 100 },
                  "font": { "family": "Manrope", "style": "SemiBold" },
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
        "type": "FRAME",
        "name": "Comparison Stats",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 12.221510887145996, "paddingRight": 24, "paddingBottom": 12.221510887145996, "paddingLeft": 24,
          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
          "strokeWeight": 0.9356435537338257, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 0.9356435537338257, "strokeRightWeight": 0.9356435537338257, "strokeBottomWeight": 0.9356435537338257, "strokeLeftWeight": 0.9356435537338257,
          "x": 58, "y": 175,
          "fills": [
            {
              "visible": true, "opacity": 0.004000000189989805, "blendMode": "NORMAL", "type": "SOLID",
              "color": { "r": 0, "g": 0, "b": 0 },
              "boundVariables": {}
            }
          ],
          "strokes": [
            {
              "visible": true, "opacity": 0.20000000298023224, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
              "gradientStops": [
                {
                  "color": { "r": 0.9689236879348755, "g": 0.37847429513931274, "b": 1, "a": 1 },
                  "position": 0,
                  "boundVariables": {}
                },
                {
                  "color": { "r": 0.6000000238418579, "g": 0.6000000238418579, "b": 0.6000000238418579, "a": 0 },
                  "position": 1,
                  "boundVariables": {}
                }
              ],
              "gradientTransform": [
                [ 0.5770711302757263, 0.9289489388465881, -0.2174844741821289 ],
                [ -0.9289488792419434, 0.11133274435997009, 0.853141725063324 ]
              ]
            }
          ],
          "effects": [
            {
              "visible": true, "type": "GLASS",
              "radius": 72.74712371826172,
              "boundVariables": {},
              "refraction": 0.7300000190734863,
              "depth": 21.096664428710938,
              "lightAngle": -45,
              "lightIntensity": 1,
              "dispersion": 1,
              "splay": 0
            }
          ],
          "cornerRadius": 12.221510887145996
        },
        "layoutProps": {
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 484.8292541503906, "height": 385.53094482421875,
          "relativeTransform": [[1, 0, 58], [0, 1, 175]],
          "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
        },
        "children": [
          {
            "type": "FRAME",
            "name": "Frame 2609321",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "HORIZONTAL", "itemSpacing": 8.729654312133789, "itemReverseZIndex": true, "strokesIncludedInLayout": false,
              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
              "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
              "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
              "layoutAlign": "STRETCH", "layoutGrow": 0,
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 436.8292541503906, "height": 67,
              "relativeTransform": [[1, 0, 24], [0, 1, 12.221510887145996]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Galatasaray",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "strokeWeight": 0.40415066480636597, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 0.40415066480636597, "strokeRightWeight": 0.40415066480636597, "strokeBottomWeight": 0.40415066480636597, "strokeLeftWeight": 0.40415066480636597,
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
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 64, "height": 64,
                  "relativeTransform": [[1, 0, 0], [0, 1, 1.5]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "RECTANGLE",
                    "name": "Crest",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 0.40415066480636597, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.40415066480636597, "strokeRightWeight": 0.40415066480636597, "strokeBottomWeight": 0.40415066480636597, "strokeLeftWeight": 0.40415066480636597,
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
                          "originalImageHash": "4649045df7e614eace27124864d2c0190fa0845f",
                          "assetRef": IMG_DesktopHeader_img_3_png
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                      "width": 64, "height": 64,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Time_Match",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 24, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 308.8292541503906, "height": 91.5416488647461,
                  "relativeTransform": [[1, 0, 64], [0, 1, -12.270824432373047]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Game",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": -2.9098849296569824, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 308.8292541503906, "height": 31.663114547729492,
                      "relativeTransform": [[1, 0, 0], [0, 1, 24]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "team",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 2.9098849296569824, "paddingBottom": 0, "paddingLeft": 2.9098849296569824,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 146.41244506835938, "height": 31.45494270324707,
                          "relativeTransform": [[1, 0, 0.00000966893549048109], [0, 1, 0.10409651696681976]],
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
                              "width": 140.59268188476562, "height": 0.7274712324142456,
                              "relativeTransform": [[1, 0, 2.9099044799804688], [0, 1, 0.0000010575397482170956]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "TEXT",
                            "name": "REAL MADRID",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0.511767566204071, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "Galatasaray", "fontSize": 18,
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
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 13.305956840515137 },
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
                                  "fontSize": 18
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 90, "height": 14,
                              "relativeTransform": [[1, 0, 28.206222534179688], [0, 1, 8.727471351623535]],
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
                              "width": 140.59268188476562, "height": 0.7274712324142456,
                              "relativeTransform": [[1, 0, 2.909881591796875], [0, 1, 30.72747039794922]],
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
                          "layoutMode": "VERTICAL", "itemSpacing": 3.7667043209075928, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 5.6500563621521, "paddingRight": 3.7667043209075928, "paddingBottom": 5.6500563621521, "paddingLeft": 3.7667043209075928,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.1454942375421524, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.1454942375421524, "strokeRightWeight": 0.1454942375421524, "strokeBottomWeight": 0.1454942375421524, "strokeLeftWeight": 0.1454942375421524,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [
                            {
                              "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                              "gradientStops": [
                                {
                                  "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 0.23999999463558197 },
                                  "position": 0,
                                  "boundVariables": {}
                                },
                                {
                                  "color": { "r": 0.003921568859368563, "g": 0.11764705926179886, "b": 0.6000000238418579, "a": 1 },
                                  "position": 0.5,
                                  "boundVariables": {}
                                },
                                {
                                  "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 0.23999999463558197 },
                                  "position": 1,
                                  "boundVariables": {}
                                }
                              ],
                              "gradientTransform": [
                                [
                                  0.9979860186576843,
                                  0.005921525880694389,
                                  -0.00825154222548008
                                ],
                                [
                                  -0.00592151889577508,
                                  0.2420455664396286,
                                  0.37071800231933594
                                ]
                              ]
                            },
                            {
                              "visible": true, "opacity": 0.30000001192092896, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [
                            {
                              "visible": true, "opacity": 0.550000011920929, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {
                                "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:fe22fb97bed6eb3cb64eca57408e33df98a4ee44/3505:255" }
                              }
                            }
                          ],
                          "effects": [],
                          "cornerRadius": 1.4549424648284912
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 16.004365921020508, "height": 14.549423217773438,
                          "relativeTransform": [[1, 0, 146.41244506835938], [0, 1, 8.556845664978027]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "VS",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0.4708380401134491, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "VS", "fontSize": 14,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                  }
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 14.690147399902344 },
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
                                      "boundVariables": {
                                        "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                      }
                                    }
                                  ],
                                  "fontSize": 14
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 22.6002197265625, "height": 14.595974922180176,
                              "relativeTransform": [[1, 0, -3.297985792160034], [0, 1, -0.02327539399266243]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "team",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 2.9098849296569824, "paddingBottom": 0, "paddingLeft": 2.9098849296569824,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 146.41244506835938, "height": 31.663114547729492,
                          "relativeTransform": [[1, 0, 162.41680908203125], [0, 1, 0]],
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
                              "width": 140.59268188476562, "height": 0.7274712324142456,
                              "relativeTransform": [[1, 0, 2.9097888469696045], [0, 1, 0.000004456775059225038]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "TEXT",
                            "name": "REAL MADRID",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0.511767566204071, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "Juventus", "fontSize": 18,
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
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 13.305956840515137 },
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
                                  "fontSize": 18
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 67, "height": 14,
                              "relativeTransform": [[1, 0, 39.70622253417969], [0, 1, 8.727471351623535]],
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
                              "width": 140.59268188476562, "height": 0.9356435537338257,
                              "relativeTransform": [[1, 0, 2.909881591796875], [0, 1, 30.72747039794922]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Date",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 1.175707459449768, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1.175707459449768, "strokeRightWeight": 1.175707459449768, "strokeBottomWeight": 1.175707459449768, "strokeLeftWeight": 1.175707459449768,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 9.405659675598145
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 309.2110595703125, "height": 35.878536224365234,
                      "relativeTransform": [[1, 0, -0.1909027099609375], [0, 1, 55.663116455078125]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "divider-ball-1-desktop",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "strokeWeight": 0.19840888679027557, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.19840888679027557, "strokeRightWeight": 0.19840888679027557, "strokeBottomWeight": 0.19840888679027557, "strokeLeftWeight": 0.19840888679027557,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 164.5990447998047, "height": 1.175707459449768,
                          "relativeTransform": [[1, 0, 72.3060073852539], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
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
                              "x": 1.0134838819503784, "y": 0.4571532607078552,
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
                              "width": 147.63418579101562, "height": 0.1336563229560852,
                              "relativeTransform": [[1, 0, 1.0134838819503784], [0, 1, 0.4571532607078552]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "date_hour",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "VERTICAL", "itemSpacing": 2.4449872970581055, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 1.175707459449768, "paddingRight": 7.596343994140625, "paddingBottom": 2.351414918899536, "paddingLeft": 7.596343994140625,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.3056234121322632, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.3056234121322632, "strokeRightWeight": 0.3056234121322632, "strokeBottomWeight": 0.3056234121322632, "strokeLeftWeight": 0.3056234121322632,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                              "gradientStops": [
                                {
                                  "color": { "r": 0.20392157137393951, "g": 0, "b": 0.40392157435417175, "a": 0 },
                                  "position": 0,
                                  "boundVariables": {}
                                },
                                {
                                  "color": { "r": 0.019607843831181526, "g": 0.003921568859368563, "b": 0.3333333432674408, "a": 1 },
                                  "position": 0.5192307829856873,
                                  "boundVariables": {}
                                },
                                {
                                  "color": { "r": 0.204916313290596, "g": 0, "b": 0.40392157435417175, "a": 0 },
                                  "position": 1,
                                  "boundVariables": {}
                                }
                              ],
                              "gradientTransform": [[1, 0, -1.532107773982716e-14], [3.640787825842824e-14, 1, 1.9262369477246466e-14]]
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 309.2110595703125, "height": 33.527122497558594,
                          "relativeTransform": [[1, 0, 0], [0, 1, 1.175707459449768]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "17 FEB, 18:45 CET",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0.152382493019104, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "17 FEB, 18:45 CET", "fontSize": 25.295494079589844,
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
                              "letterSpacing": { "unit": "PIXELS", "value": 1.175707459449768 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "Display" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 17,
                                  "font": { "family": "Champions", "style": "Display" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 25.295494079589844
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 136, "height": 30,
                              "relativeTransform": [[1, 0, 86.60552978515625], [0, 1, 1.175707459449768]],
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
                          "strokeWeight": 0.19840888679027557, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.19840888679027557, "strokeRightWeight": 0.19840888679027557, "strokeBottomWeight": 0.19840888679027557, "strokeLeftWeight": 0.19840888679027557,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "layoutMode": "NONE",
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 164.5990447998047, "height": 1.175707459449768,
                          "relativeTransform": [[1, 0, 72.3060073852539], [0, 1, 34.70283126831055]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
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
                              "x": 1.0134838819503784, "y": 0.4571532607078552,
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
                              "width": 147.63418579101562, "height": 0.1336563229560852,
                              "relativeTransform": [[1, 0, 1.0134838819503784], [0, 1, 0.4571532607078552]],
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
                "name": "Juventus",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "strokeWeight": 0.40415066480636597, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 0.40415066480636597, "strokeRightWeight": 0.40415066480636597, "strokeBottomWeight": 0.40415066480636597, "strokeLeftWeight": 0.40415066480636597,
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
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 64, "height": 64,
                  "relativeTransform": [[1, 0, 372.8292541503906], [0, 1, 1.5]],
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
                          "originalImageHash": "74d8939a352cb19b5453c79b2d0716f0ed5edbe2",
                          "assetRef": IMG_DesktopHeader_img_4_png
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                      "width": 64, "height": 64,
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
            "name": "Frame 2609323",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "VERTICAL", "itemSpacing": 2, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 8, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
              "layoutAlign": "INHERIT", "layoutGrow": 0,
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 436.8292541503906, "height": 270.0879211425781,
              "relativeTransform": [[1, 0, 24], [0, 1, 103.22151184082031]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Row: Matches played",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": -2.1824135780334473, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                  "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 436.8292541503906, "height": 50.81758499145508,
                  "relativeTransform": [[1, 0, 0], [0, 1, 8]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Text Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Label",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 0.5092296600341797, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Won", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {
                                "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                              }
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Arial", "style": "Bold" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 3,
                              "font": { "family": "Arial", "style": "Bold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                  }
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 35, "height": 18,
                          "relativeTransform": [[1, 0, 200.9146270751953], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Bars Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 5.819769859313965, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 35,
                      "relativeTransform": [[1, 0, 0], [0, 1, 15.817586898803711]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 21",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "3",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "3", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 1,
                                  "font": { "family": "Champions", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "POLYGON",
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "pointCount": 3,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.6039215922355652, "g": 0, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:665633e76eaa9007ae938785242d8c6119355add/3505:267" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627451062202454, "b": 1, "a": 0.800000011920929 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123233601181349e-17, -1, 55], [1, 6.123233601181349e-17, 7.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 2609320",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 315.1897277832031, "height": 3.6373558044433594,
                          "relativeTransform": [[1, 0, 60.81977081298828], [0, 1, 15.68132209777832]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Right Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 18.18678092956543,
                                  "boundVariables": {},
                                  "refraction": 1,
                                  "depth": 9.457125663757324,
                                  "lightAngle": -45,
                                  "lightIntensity": 0.800000011920929,
                                  "dispersion": 0.5,
                                  "splay": 0
                                }
                              ],
                              "topLeftRadius": 16,
                              "bottomLeftRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 155.18972778320312, "height": 3.6373558044433594,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Left Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1122ad242774db364a080434b0d547a5a925387f/3505:241" }
                                  }
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 50.19551086425781,
                                  "boundVariables": {},
                                  "refraction": 0.5899999737739563,
                                  "depth": 33.46367645263672,
                                  "lightAngle": -45,
                                  "lightIntensity": 1,
                                  "dispersion": 0.4000000059604645,
                                  "splay": 0
                                }
                              ],
                              "topRightRadius": 16,
                              "bottomRightRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 154, "height": 3,
                              "relativeTransform": [[1, 0, 161.18972778320312], [0, 1, 0.3186779022216797]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 22",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 381.8292541503906], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "POLYGON",
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "pointCount": 3,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.6039215922355652, "g": 0, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:665633e76eaa9007ae938785242d8c6119355add/3505:267" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627451062202454, "b": 1, "a": 0.800000011920929 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123234262925839e-17, 1, 0], [-1, 6.123234262925839e-17, 27.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "TEXT",
                            "name": "3",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "3", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 1,
                                  "font": { "family": "Champions", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 21], [0, 1, 0]],
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
                "name": "Row: Matches played",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": -2.1824135780334473, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                  "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 436.8292541503906, "height": 50.81758499145508,
                  "relativeTransform": [[1, 0, 0], [0, 1, 60.81758499145508]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Text Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Label",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 0.5092296600341797, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Drawn", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {
                                "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                              }
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Arial", "style": "Bold" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 5,
                              "font": { "family": "Arial", "style": "Bold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                  }
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 49, "height": 18,
                          "relativeTransform": [[1, 0, 193.9146270751953], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Bars Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 5.819769859313965, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 35,
                      "relativeTransform": [[1, 0, 0], [0, 1, 15.817586898803711]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 21",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "1",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "1", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 1,
                                  "font": { "family": "Champions", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "POLYGON",
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "pointCount": 3,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.6039215922355652, "g": 0, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:665633e76eaa9007ae938785242d8c6119355add/3505:267" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627451062202454, "b": 1, "a": 0.800000011920929 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123233601181349e-17, -1, 55], [1, 6.123233601181349e-17, 7.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 2609320",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 315.1897277832031, "height": 3.6373558044433594,
                          "relativeTransform": [[1, 0, 60.81977081298828], [0, 1, 15.68132209777832]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Right Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0.1454942375421524, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0.1454942375421524, "strokeRightWeight": 0.1454942375421524, "strokeBottomWeight": 0.1454942375421524, "strokeLeftWeight": 0.1454942375421524,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 18.18678092956543,
                                  "boundVariables": {},
                                  "refraction": 1,
                                  "depth": 9.457125663757324,
                                  "lightAngle": -45,
                                  "lightIntensity": 0.800000011920929,
                                  "dispersion": 0.5,
                                  "splay": 0
                                }
                              ],
                              "topLeftRadius": 16,
                              "bottomLeftRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 89.18972778320312, "height": 3.6373558044433594,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Left Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1122ad242774db364a080434b0d547a5a925387f/3505:241" }
                                  }
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 50.19551086425781,
                                  "boundVariables": {},
                                  "refraction": 0.5899999737739563,
                                  "depth": 33.46367645263672,
                                  "lightAngle": -45,
                                  "lightIntensity": 1,
                                  "dispersion": 0.4000000059604645,
                                  "splay": 0
                                }
                              ],
                              "topRightRadius": 16,
                              "bottomRightRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 220, "height": 3,
                              "relativeTransform": [[1, 0, 95.18972778320312], [0, 1, 0.3186779022216797]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 22",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 381.8292541503906], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "POLYGON",
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "pointCount": 3,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.6039215922355652, "g": 0, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:665633e76eaa9007ae938785242d8c6119355add/3505:267" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627451062202454, "b": 1, "a": 0.800000011920929 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123234262925839e-17, 1, 0], [-1, 6.123234262925839e-17, 27.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "TEXT",
                            "name": "4",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "4", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 1,
                                  "font": { "family": "Champions", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 21], [0, 1, 0]],
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
                "name": "Row: Matches played",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": -2.1824135780334473, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                  "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 436.8292541503906, "height": 50.81758499145508,
                  "relativeTransform": [[1, 0, 0], [0, 1, 113.63516998291016]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Text Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Label",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 0.5092296600341797, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Lost", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {
                                "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                              }
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Arial", "style": "Bold" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 4,
                              "font": { "family": "Arial", "style": "Bold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                  }
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 34, "height": 18,
                          "relativeTransform": [[1, 0, 201.4146270751953], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Bars Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 5.819769859313965, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 35,
                      "relativeTransform": [[1, 0, 0], [0, 1, 15.817586898803711]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 21",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "4",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "4", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 1,
                                  "font": { "family": "Champions", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "POLYGON",
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "pointCount": 3,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.6039215922355652, "g": 0, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:665633e76eaa9007ae938785242d8c6119355add/3505:267" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627451062202454, "b": 1, "a": 0.800000011920929 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123233601181349e-17, -1, 55], [1, 6.123233601181349e-17, 7.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 2609320",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 315.1897277832031, "height": 4,
                          "relativeTransform": [[1, 0, 60.81977081298828], [0, 1, 15.5]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Right Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 18.18678092956543,
                                  "boundVariables": {},
                                  "refraction": 1,
                                  "depth": 9.457125663757324,
                                  "lightAngle": -45,
                                  "lightIntensity": 0.800000011920929,
                                  "dispersion": 0.5,
                                  "splay": 0
                                }
                              ],
                              "topLeftRadius": 16,
                              "bottomLeftRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 223.18972778320312, "height": 3.6373558044433594,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0.1813220977783203]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Left Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1122ad242774db364a080434b0d547a5a925387f/3505:241" }
                                  }
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 50.19551086425781,
                                  "boundVariables": {},
                                  "refraction": 0.5899999737739563,
                                  "depth": 33.46367645263672,
                                  "lightAngle": -45,
                                  "lightIntensity": 1,
                                  "dispersion": 0.4000000059604645,
                                  "splay": 0
                                }
                              ],
                              "topRightRadius": 16,
                              "bottomRightRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 86, "height": 4,
                              "relativeTransform": [[1, 0, 229.18972778320312], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 20",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 381.8292541503906], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5777f4f7711fa0bb602b044c8a6637c746309755/3505:246" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627449870109558, "b": 1, "a": 1 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123234262925839e-17, 1, 0], [-1, 6.123234262925839e-17, 27.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "svgContent": SVG_DesktopHeader_assets_icon_Tail_1541_1063_svg_20x17
                          },
                          {
                            "type": "TEXT",
                            "name": "1",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "1", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "ExtraBold" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 1,
                                  "font": { "family": "Champions", "style": "ExtraBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 21], [0, 1, 0]],
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
                "name": "Row: Matches played",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": -2.1824135780334473, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                  "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 436.8292541503906, "height": 50.81758499145508,
                  "relativeTransform": [[1, 0, 0], [0, 1, 166.4527587890625]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Text Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Label",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 0.5092296600341797, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Goals", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {
                                "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                              }
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Arial", "style": "Bold" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 5,
                              "font": { "family": "Arial", "style": "Bold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                  }
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 45, "height": 18,
                          "relativeTransform": [[1, 0, 195.9146270751953], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Bars Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 5.819769859313965, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 35,
                      "relativeTransform": [[1, 0, 0], [0, 1, 15.817586898803711]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 21",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "9",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "9", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 1,
                                  "font": { "family": "Champions", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "POLYGON",
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "pointCount": 3,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.6039215922355652, "g": 0, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:665633e76eaa9007ae938785242d8c6119355add/3505:267" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627451062202454, "b": 1, "a": 0.800000011920929 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123233601181349e-17, -1, 55], [1, 6.123233601181349e-17, 7.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 2609320",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 315.1897277832031, "height": 4,
                          "relativeTransform": [[1, 0, 60.81977081298828], [0, 1, 15.5]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Right Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 18.18678092956543,
                                  "boundVariables": {},
                                  "refraction": 1,
                                  "depth": 9.457125663757324,
                                  "lightAngle": -45,
                                  "lightIntensity": 0.800000011920929,
                                  "dispersion": 0.5,
                                  "splay": 0
                                }
                              ],
                              "topLeftRadius": 16,
                              "bottomLeftRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 109.18972778320312, "height": 3.6373558044433594,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0.1813220977783203]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Left Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1122ad242774db364a080434b0d547a5a925387f/3505:241" }
                                  }
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 50.19551086425781,
                                  "boundVariables": {},
                                  "refraction": 0.5899999737739563,
                                  "depth": 33.46367645263672,
                                  "lightAngle": -45,
                                  "lightIntensity": 1,
                                  "dispersion": 0.4000000059604645,
                                  "splay": 0
                                }
                              ],
                              "topRightRadius": 16,
                              "bottomRightRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 200, "height": 4,
                              "relativeTransform": [[1, 0, 115.18972778320312], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 20",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 381.8292541503906], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5777f4f7711fa0bb602b044c8a6637c746309755/3505:246" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627449870109558, "b": 1, "a": 1 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123234262925839e-17, 1, 0], [-1, 6.123234262925839e-17, 27.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "svgContent": SVG_DesktopHeader_assets_icon_Tail_1541_1076_svg_20x17
                          },
                          {
                            "type": "TEXT",
                            "name": "14",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "14", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "ExtraBold" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 2,
                                  "font": { "family": "Champions", "style": "ExtraBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 21], [0, 1, 0]],
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
                "name": "Row: Matches played",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": -2.1824135780334473, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                  "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 436.8292541503906, "height": 50.81758499145508,
                  "relativeTransform": [[1, 0, 0], [0, 1, 219.2703399658203]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Text Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Label",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 0.5092296600341797, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Goals conceded", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {
                                "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                              }
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Arial", "style": "Bold" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 14,
                              "font": { "family": "Arial", "style": "Bold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:588505bbabae527c244ae8ca2ffc8c7a88bff05e/3505:275" }
                                  }
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 124, "height": 18,
                          "relativeTransform": [[1, 0, 156.4146270751953], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Bars Row",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 5.819769859313965, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 0.5092296600341797, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0.5092296600341797, "strokeRightWeight": 0.5092296600341797, "strokeBottomWeight": 0.5092296600341797, "strokeLeftWeight": 0.5092296600341797,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 436.8292541503906, "height": 35,
                      "relativeTransform": [[1, 0, 0], [0, 1, 15.817586898803711]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 21",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "11",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "11", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 2,
                                  "font": { "family": "Champions", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "POLYGON",
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "pointCount": 3,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.6039215922355652, "g": 0, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:665633e76eaa9007ae938785242d8c6119355add/3505:267" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627451062202454, "b": 1, "a": 0.800000011920929 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123233601181349e-17, -1, 55], [1, 6.123233601181349e-17, 7.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 2609320",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 315.1897277832031, "height": 4,
                          "relativeTransform": [[1, 0, 60.81977081298828], [0, 1, 15.5]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Right Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 18.18678092956543,
                                  "boundVariables": {},
                                  "refraction": 1,
                                  "depth": 9.457125663757324,
                                  "lightAngle": -45,
                                  "lightIntensity": 0.800000011920929,
                                  "dispersion": 0.5,
                                  "splay": 0
                                }
                              ],
                              "topLeftRadius": 16,
                              "bottomLeftRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 142.18972778320312, "height": 3.6373558044433594,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0.1813220977783203]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Left Bar Fill",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "strokeWeight": 0, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "layoutMode": "NONE",
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1122ad242774db364a080434b0d547a5a925387f/3505:241" }
                                  }
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 0.800000011920929, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                  }
                                }
                              ],
                              "effects": [
                                {
                                  "visible": false, "type": "GLASS",
                                  "radius": 50.19551086425781,
                                  "boundVariables": {},
                                  "refraction": 0.5899999737739563,
                                  "depth": 33.46367645263672,
                                  "lightAngle": -45,
                                  "lightIntensity": 1,
                                  "dispersion": 0.4000000059604645,
                                  "splay": 0
                                }
                              ],
                              "topRightRadius": 16,
                              "bottomRightRadius": 16
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 167, "height": 4,
                              "relativeTransform": [[1, 0, 148.18972778320312], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Tooltip - 20",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 55, "height": 35,
                          "relativeTransform": [[1, 0, 381.8292541503906], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Tail",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {
                                    "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5777f4f7711fa0bb602b044c8a6637c746309755/3505:246" }
                                  }
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
                                  "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                                  "radius": 18,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0.8627449870109558, "b": 1, "a": 1 },
                                  "offset": { "x": 0, "y": 0 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                },
                                {
                                  "visible": true, "type": "BACKGROUND_BLUR",
                                  "radius": 30,
                                  "boundVariables": {},
                                  "blurType": "NORMAL"
                                }
                              ],
                              "cornerRadius": 3
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 20, "height": 17,
                              "relativeTransform": [[6.123234262925839e-17, 1, 0], [-1, 6.123234262925839e-17, 27.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "svgContent": SVG_DesktopHeader_assets_icon_Tail_1541_1089_svg_20x17
                          },
                          {
                            "type": "TEXT",
                            "name": "14",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "14", "fontSize": 32,
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
                              "effects": [
                                {
                                  "visible": false, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                  "radius": 2,
                                  "boundVariables": {},
                                  "color": { "r": 0, "g": 0, "b": 0, "a": 0.5 },
                                  "offset": { "x": 0, "y": 1 },
                                  "spread": 0,
                                  "showShadowBehindNode": true
                                }
                              ],
                              "letterSpacing": { "unit": "PERCENT", "value": 0 },
                              "lineHeight": { "unit": "AUTO" },
                              "font": { "family": "Champions", "style": "ExtraBold" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 2,
                                  "font": { "family": "Champions", "style": "ExtraBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 32
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 34, "height": 35,
                              "relativeTransform": [[1, 0, 21], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
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

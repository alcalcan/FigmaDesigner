import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_UCL_Newsletter_Header_Stats_img_1_opt_png from "././assets/UCL_Newsletter_Header_Stats_img_1_opt.png";
import SVG_UCL_Newsletter_Header_Stats_Synth_Ellipse2300_0 from "./assets/UCL_Newsletter_Header_Stats_Synth_Ellipse2300_0.svg";

export class UCLBackground extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition =
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
        };

    return this.renderDefinition(structure);
  }
}

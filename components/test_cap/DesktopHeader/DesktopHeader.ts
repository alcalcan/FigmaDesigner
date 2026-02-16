import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";


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
                    "color": { "r": 0.0042, "g": 0.2425, "b": 0.7898, "a": 1 },
                    "position": 0,
                    "boundVariables": {}
                  },
                  {
                    "color": { "r": 0, "g": 0.0984, "b": 0.3243, "a": 1 },
                    "position": 1,
                    "boundVariables": {}
                  }
                ],
                "gradientTransform": [
                  [-0.8691, 0.8705, 0.7128],
                  [-0.828, -1.1123, 1.5277]
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
                "strokeWeight": 1.5973, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1.5973, "strokeRightWeight": 1.5973, "strokeBottomWeight": 1.5973, "strokeLeftWeight": 1.5973,
                "x": -109, "y": 510.4575,
                "layoutMode": "NONE",
                "fills": [],
                "strokes": [],
                "effects": [
                  {
                    "visible": true, "type": "LAYER_BLUR",
                    "radius": 11.4,
                    "boundVariables": {},
                    "blurType": "NORMAL"
                  }
                ],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 752.764, "height": 690.6091,
                "relativeTransform": [
                  [0.4332, 0.9013, -109],
                  [-0.9013, 0.4332, 510.4575]
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
                    "strokeWeight": 1.6523, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 422.5175, "y": 164.9874,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                        "gradientStops": [
                          {
                            "color": { "r": 0, "g": 0, "b": 0, "a": 1 },
                            "position": 0.5209,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0 },
                            "position": 0.9485,
                            "boundVariables": {}
                          }
                        ],
                        "gradientTransform": [
                          [
                            5.5511e-17,
                            1.3378,
                            -0.4853
                          ],
                          [-1.0066, 0, 1.0085]
                        ]
                      }
                    ],
                    "strokes": [],
                    "effects": [
                      {
                        "visible": true, "type": "LAYER_BLUR",
                        "radius": 49.5678,
                        "boundVariables": {},
                        "blurType": "NORMAL"
                      }
                    ],
                    "cornerRadius": 0,
                    "vectorPaths": [
                      {
                        "windingRule": "NONZERO",
                        "data": "M 482.7797 307.5317 C 449.9867 397.3461 374.1079 426.466 239.0686 426.466 C 104.0293 426.466 40.0725 426.466 8.1422 317.8453 C -23.788 209.2245 34.511 0 248.6573 0 C 469.1959 0 515.5727 217.7173 482.7797 307.5317 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 492.2501, "height": 426.466,
                    "relativeTransform": [
                      [
                        0.9007,
                        -0.4345,
                        422.5175
                      ],
                      [0.4345, 0.9007, 164.9874]
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
                    "strokeWeight": 1.1033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1.1033, "strokeRightWeight": 1.1033, "strokeBottomWeight": 1.1033, "strokeLeftWeight": 1.1033,
                    "x": 1389.4216, "y": 288.0613,
                    "fills": [
                      {
                        "visible": false, "opacity": 0.2, "blendMode": "NORMAL", "type": "SOLID",
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
                    "width": 1565.1, "height": 1566.2853,
                    "relativeTransform": [
                      [-0.7184, -0.6956, 1389.4216],
                      [-0.6956, 0.7184, 288.0613]
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
                    "strokeWeight": 1.1033, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1.1033, "strokeRightWeight": 1.1033, "strokeBottomWeight": 1.1033, "strokeLeftWeight": 1.1033,
                    "x": 1381.6504, "y": 271.1972,
                    "fills": [
                      {
                        "visible": false, "opacity": 0.2, "blendMode": "NORMAL", "type": "SOLID",
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
                    "width": 1565.1, "height": 1567,
                    "relativeTransform": [
                      [-0.7184, -0.6956, 1381.6504],
                      [-0.6956, 0.7184, 271.1972]
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
                "x": 1.1369e-13, "y": 431,
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
                "relativeTransform": [[1, 0, 1.1369e-13], [0, 1, 431]],
                "constraints": { "horizontal": "MIN", "vertical": "MAX" }
              },
              "children": [
                {
                  "type": "RECTANGLE",
                  "name": "opacity",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.8737, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.8737, "strokeRightWeight": 0.8737, "strokeBottomWeight": 0.8737, "strokeLeftWeight": 0.8737,
                    "x": 600, "y": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 0.9, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                        "gradientStops": [
                          {
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0 },
                            "position": 0.0693,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0.47 },
                            "position": 0.5077,
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
                            4.5633e-9,
                            1.4346,
                            -0.3544
                          ],
                          [
                            -4.1393,
                            -3.1086e-15,
                            2.4483
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
                    "strokeWeight": 0.8737, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.8737, "strokeRightWeight": 0.8737, "strokeBottomWeight": 0.8737, "strokeLeftWeight": 0.8737,
                    "x": 600, "y": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 0.9, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                        "gradientStops": [
                          {
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0 },
                            "position": 0.0693,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0.47 },
                            "position": 0.5077,
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
                            4.5633e-9,
                            1.4346,
                            -0.3544
                          ],
                          [
                            -4.1393,
                            -3.1086e-15,
                            2.4483
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
                        "x": 606.9141, "y": 357.6265,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                            "scaleMode": "CROP",
                            "imageTransform": [
                              [
                                1,
                                -1.6957e-23,
                                7.9936e-15
                              ],
                              [0, 0.5458, 1.0156e-7]
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
                        "width": 670.4823, "height": 364.8927,
                        "relativeTransform": [
                          [-0.9999, 0.0101, 606.9141],
                          [-0.0101, -0.9999, 357.6265]
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
                        "strokeWeight": 0.8737, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.8737, "strokeRightWeight": 0.8737, "strokeBottomWeight": 0.8737, "strokeLeftWeight": 0.8737,
                        "x": 0, "y": 23,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                            "gradientStops": [
                              {
                                "color": { "r": 0.0039, "g": 0, "b": 0.3373, "a": 0 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0, "g": 0, "b": 0.251, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [0.539, 1.1703, -0.4098],
                              [
                                -1.3086,
                                0.0028,
                                1.0786
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
                        "relativeTransform": [[1, -1.7485e-7, 0], [1.7485e-7, 1, 23]],
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
            "strokeWeight": 0.8737, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 0.8737, "strokeRightWeight": 0.8737, "strokeBottomWeight": 0.8737, "strokeLeftWeight": 0.8737,
            "x": 0, "y": 0,
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                "gradientStops": [
                  {
                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.6 },
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
                    0.0239,
                    0.7961,
                    -7.7336e-16
                  ],
                  [-18.6392, 0.0105, 0.5]
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
                        "strokeWeight": 0.9919, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.9919, "strokeRightWeight": 0.9919, "strokeBottomWeight": 0.9919, "strokeLeftWeight": 0.9919,
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
                            "strokeWeight": 5.0006, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0, "y": 1.0417,
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
                        "strokeWeight": 1.3886, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1.3886, "strokeRightWeight": 1.3886, "strokeBottomWeight": 1.3886, "strokeLeftWeight": 1.3886,
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
                                "position": 0.5156,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 1, "g": 1, "b": 1, "a": 0 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [[6.1232e-17, 1, 0], [-1, 0, 1]]
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
            "strokeWeight": 0.4659, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "characters": "UCL SEASON COMPARED", "fontSize": 77.336,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
            "paragraphSpacing": 0, "paragraphIndent": 0,
            "x": 60, "y": 87.7197,
            "strokes": [],
            "effects": [
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "radius": 24.6677,
                "boundVariables": {},
                "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
                "offset": { "x": 0, "y": 3.7375 },
                "spread": 0,
                "showShadowBehindNode": false
              }
            ],
            "letterSpacing": { "unit": "PIXELS", "value": 0.5 },
            "lineHeight": { "unit": "PIXELS", "value": 67.014 },
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
                "fontSize": 77.336
              },
              {
                "start": 11,
                "end": 19,
                "font": { "family": "Champions", "style": "Display" },
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.8197, "g": 0.5447, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "fontSize": 77.336
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
                    "color": { "r": 0, "g": 0.9333, "b": 1 },
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
                        "color": { "r": 0.0039, "g": 0.0039, "b": 0.1961 },
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
                            "color": { "r": 0.0039, "g": 0.0039, "b": 0.1961 },
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
            "paddingTop": 12.2215, "paddingRight": 24, "paddingBottom": 12.2215, "paddingLeft": 24,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 0.9356, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 0.9356, "strokeRightWeight": 0.9356, "strokeBottomWeight": 0.9356, "strokeLeftWeight": 0.9356,
            "x": 58, "y": 175,
            "fills": [
              {
                "visible": true, "opacity": 0.004, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0, "g": 0, "b": 0 },
                "boundVariables": {}
              }
            ],
            "strokes": [
              {
                "visible": true, "opacity": 0.2, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                "gradientStops": [
                  {
                    "color": { "r": 0.9689, "g": 0.3785, "b": 1, "a": 1 },
                    "position": 0,
                    "boundVariables": {}
                  },
                  {
                    "color": { "r": 0.6, "g": 0.6, "b": 0.6, "a": 0 },
                    "position": 1,
                    "boundVariables": {}
                  }
                ],
                "gradientTransform": [
                  [0.5771, 0.9289, -0.2175],
                  [-0.9289, 0.1113, 0.8531]
                ]
              }
            ],
            "effects": [
              {
                "visible": true, "type": "GLASS",
                "radius": 72.7471,
                "boundVariables": {},
                "refraction": 0.73,
                "depth": 21.0967,
                "lightAngle": -45,
                "lightIntensity": 1,
                "dispersion": 1,
                "splay": 0
              }
            ],
            "cornerRadius": 12.2215
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 484.8293, "height": 385.5309,
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
                "layoutMode": "HORIZONTAL", "itemSpacing": 8.7297, "itemReverseZIndex": true, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 436.8293, "height": 67,
                "relativeTransform": [[1, 0, 24], [0, 1, 12.2215]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Galatasaray",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 0.4042, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.4042, "strokeRightWeight": 0.4042, "strokeBottomWeight": 0.4042, "strokeLeftWeight": 0.4042,
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
                        "strokeWeight": 0.4042, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.4042, "strokeRightWeight": 0.4042, "strokeBottomWeight": 0.4042, "strokeLeftWeight": 0.4042,
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
                    "width": 308.8293, "height": 91.5416,
                    "relativeTransform": [[1, 0, 64], [0, 1, -12.2708]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Game",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": -2.9099, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 308.8293, "height": 31.6631,
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
                            "paddingTop": 0, "paddingRight": 2.9099, "paddingBottom": 0, "paddingLeft": 2.9099,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 146.4124, "height": 31.4549,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0.1041]],
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
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 },
                                        "position": 0.32,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 },
                                        "position": 0.7,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 },
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
                                "width": 140.5927, "height": 0.7275,
                                "relativeTransform": [[1, 0, 2.9099], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "REAL MADRID",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.5118, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                                "lineHeight": { "unit": "PIXELS", "value": 13.306 },
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
                                "relativeTransform": [[1, 0, 28.2062], [0, 1, 8.7275]],
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
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 },
                                        "position": 0.32,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 },
                                        "position": 0.7,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 },
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
                                "width": 140.5927, "height": 0.7275,
                                "relativeTransform": [[1, 0, 2.9099], [0, 1, 30.7275]],
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
                            "layoutMode": "VERTICAL", "itemSpacing": 3.7667, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 5.6501, "paddingRight": 3.7667, "paddingBottom": 5.6501, "paddingLeft": 3.7667,
                            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 0.1455, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.1455, "strokeRightWeight": 0.1455, "strokeBottomWeight": 0.1455, "strokeLeftWeight": 0.1455,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "fills": [
                              {
                                "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                "gradientStops": [
                                  {
                                    "color": { "r": 0.0078, "g": 0.1961, "b": 1, "a": 0.24 },
                                    "position": 0,
                                    "boundVariables": {}
                                  },
                                  {
                                    "color": { "r": 0.0039, "g": 0.1176, "b": 0.6, "a": 1 },
                                    "position": 0.5,
                                    "boundVariables": {}
                                  },
                                  {
                                    "color": { "r": 0.0078, "g": 0.1961, "b": 1, "a": 0.24 },
                                    "position": 1,
                                    "boundVariables": {}
                                  }
                                ],
                                "gradientTransform": [
                                  [
                                    0.998,
                                    0.0059,
                                    -0.0083
                                  ],
                                  [
                                    -0.0059,
                                    0.242,
                                    0.3707
                                  ]
                                ]
                              },
                              {
                                "visible": true, "opacity": 0.3, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 1, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [
                              {
                                "visible": true, "opacity": 0.55, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 1, "b": 1 },
                                "boundVariables": {
                                  "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:fe22fb97bed6eb3cb64eca57408e33df98a4ee44/3505:255" }
                                }
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 1.4549
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 16.0044, "height": 14.5494,
                            "relativeTransform": [[1, 0, 146.4124], [0, 1, 8.5568]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "TEXT",
                              "name": "VS",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.4708, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                                "lineHeight": { "unit": "PIXELS", "value": 14.6901 },
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
                                "width": 22.6002, "height": 14.596,
                                "relativeTransform": [[1, 0, -3.298], [0, 1, -0.0233]],
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
                            "paddingTop": 0, "paddingRight": 2.9099, "paddingBottom": 0, "paddingLeft": 2.9099,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 146.4124, "height": 31.6631,
                            "relativeTransform": [[1, 0, 162.4168], [0, 1, 0]],
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
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 },
                                        "position": 0.32,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 },
                                        "position": 0.7,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 },
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
                                "width": 140.5927, "height": 0.7275,
                                "relativeTransform": [[1, 0, 2.9098], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "REAL MADRID",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.5118, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                                "lineHeight": { "unit": "PIXELS", "value": 13.306 },
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
                                "relativeTransform": [[1, 0, 39.7062], [0, 1, 8.7275]],
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
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 },
                                        "position": 0.32,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 },
                                        "position": 0.7,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 },
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
                                "width": 140.5927, "height": 0.9356,
                                "relativeTransform": [[1, 0, 2.9099], [0, 1, 30.7275]],
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
                        "strokeWeight": 1.1757, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1.1757, "strokeRightWeight": 1.1757, "strokeBottomWeight": 1.1757, "strokeLeftWeight": 1.1757,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 9.4057
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 309.2111, "height": 35.8785,
                        "relativeTransform": [[1, 0, -0.1909], [0, 1, 55.6631]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "divider-ball-1-desktop",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "strokeWeight": 0.1984, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.1984, "strokeRightWeight": 0.1984, "strokeBottomWeight": 0.1984, "strokeLeftWeight": 0.1984,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "layoutMode": "NONE",
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 164.599, "height": 1.1757,
                            "relativeTransform": [[1, 0, 72.306], [0, 1, 0]],
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
                                "x": 1.0135, "y": 0.4572,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7569, "g": 0.7608, "b": 0.8353, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.6588, "g": 0.1216, "b": 0.8471, "a": 1 },
                                        "position": 0.1381,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 1, "g": 0.8235, "b": 0, "a": 1 },
                                        "position": 0.3229,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.8275, "g": 0.4667, "b": 0.4353, "a": 1 },
                                        "position": 0.5318,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.698, "g": 0.1922, "b": 0.7686, "a": 1 },
                                        "position": 0.7031,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.3373, "g": 0.0745, "b": 0.9922, "a": 1 },
                                        "position": 0.857,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7569, "g": 0.7608, "b": 0.8353, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [
                                      [
                                        1,
                                        0,
                                        9.992e-16
                                      ],
                                      [-0, 0, 0.5]
                                    ]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 147.6342, "height": 0.1337,
                                "relativeTransform": [[1, 0, 1.0135], [0, 1, 0.4572]],
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
                            "layoutMode": "VERTICAL", "itemSpacing": 2.445, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 1.1757, "paddingRight": 7.5963, "paddingBottom": 2.3514, "paddingLeft": 7.5963,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 0.3056, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.3056, "strokeRightWeight": 0.3056, "strokeBottomWeight": 0.3056, "strokeLeftWeight": 0.3056,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                "gradientStops": [
                                  {
                                    "color": { "r": 0.2039, "g": 0, "b": 0.4039, "a": 0 },
                                    "position": 0,
                                    "boundVariables": {}
                                  },
                                  {
                                    "color": { "r": 0.0196, "g": 0.0039, "b": 0.3333, "a": 1 },
                                    "position": 0.5192,
                                    "boundVariables": {}
                                  },
                                  {
                                    "color": { "r": 0.2049, "g": 0, "b": 0.4039, "a": 0 },
                                    "position": 1,
                                    "boundVariables": {}
                                  }
                                ],
                                "gradientTransform": [[1, 0, -1.5321e-14], [3.6408e-14, 1, 1.9262e-14]]
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 309.2111, "height": 33.5271,
                            "relativeTransform": [[1, 0, 0], [0, 1, 1.1757]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "TEXT",
                              "name": "17 FEB, 18:45 CET",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.1524, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "17 FEB, 18:45 CET", "fontSize": 25.2955,
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
                                "letterSpacing": { "unit": "PIXELS", "value": 1.1757 },
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
                                    "fontSize": 25.2955
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 136, "height": 30,
                                "relativeTransform": [[1, 0, 86.6055], [0, 1, 1.1757]],
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
                            "strokeWeight": 0.1984, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.1984, "strokeRightWeight": 0.1984, "strokeBottomWeight": 0.1984, "strokeLeftWeight": 0.1984,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "layoutMode": "NONE",
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 164.599, "height": 1.1757,
                            "relativeTransform": [[1, 0, 72.306], [0, 1, 34.7028]],
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
                                "x": 1.0135, "y": 0.4572,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7569, "g": 0.7608, "b": 0.8353, "a": 0 },
                                        "position": 0,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.6588, "g": 0.1216, "b": 0.8471, "a": 1 },
                                        "position": 0.1381,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 1, "g": 0.8235, "b": 0, "a": 1 },
                                        "position": 0.3229,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.8275, "g": 0.4667, "b": 0.4353, "a": 1 },
                                        "position": 0.5318,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.698, "g": 0.1922, "b": 0.7686, "a": 1 },
                                        "position": 0.7031,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.3373, "g": 0.0745, "b": 0.9922, "a": 1 },
                                        "position": 0.857,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7569, "g": 0.7608, "b": 0.8353, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [
                                      [
                                        1,
                                        0,
                                        9.992e-16
                                      ],
                                      [-0, 0, 0.5]
                                    ]
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 147.6342, "height": 0.1337,
                                "relativeTransform": [[1, 0, 1.0135], [0, 1, 0.4572]],
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
                    "strokeWeight": 0.4042, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.4042, "strokeRightWeight": 0.4042, "strokeBottomWeight": 0.4042, "strokeLeftWeight": 0.4042,
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
                    "relativeTransform": [[1, 0, 372.8293], [0, 1, 1.5]],
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
                "width": 436.8293, "height": 270.0879,
                "relativeTransform": [[1, 0, 24], [0, 1, 103.2215]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Row: Matches played",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "layoutMode": "VERTICAL", "itemSpacing": -2.1824, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                    "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 436.8293, "height": 50.8176,
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
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 18,
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
                            "strokeWeight": 0.5092, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                            "relativeTransform": [[1, 0, 200.9146], [0, 1, 0]],
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
                        "layoutMode": "HORIZONTAL", "itemSpacing": 5.8198, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 35,
                        "relativeTransform": [[1, 0, 0], [0, 1, 15.8176]],
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
                                    "color": { "r": 0.6039, "g": 0, "b": 1 },
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 0.8 },
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
                                "relativeTransform": [[6.1232e-17, -1, 55], [1, 6.1232e-17, 7.5]],
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
                            "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 315.1897, "height": 3.6374,
                            "relativeTransform": [[1, 0, 60.8198], [0, 1, 15.6813]],
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
                                    "color": { "r": 0, "g": 0.9333, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 18.1868,
                                    "boundVariables": {},
                                    "refraction": 1,
                                    "depth": 9.4571,
                                    "lightAngle": -45,
                                    "lightIntensity": 0.8,
                                    "dispersion": 0.5,
                                    "splay": 0
                                  }
                                ],
                                "topLeftRadius": 16,
                                "bottomLeftRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 155.1897, "height": 3.6374,
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
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 50.1955,
                                    "boundVariables": {},
                                    "refraction": 0.59,
                                    "depth": 33.4637,
                                    "lightAngle": -45,
                                    "lightIntensity": 1,
                                    "dispersion": 0.4,
                                    "splay": 0
                                  }
                                ],
                                "topRightRadius": 16,
                                "bottomRightRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 154, "height": 3,
                                "relativeTransform": [[1, 0, 161.1897], [0, 1, 0.3187]],
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
                            "relativeTransform": [[1, 0, 381.8293], [0, 1, 0]],
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
                                    "color": { "r": 0.6039, "g": 0, "b": 1 },
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 0.8 },
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
                                "relativeTransform": [[6.1232e-17, 1, 0], [-1, 6.1232e-17, 27.5]],
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
                    "layoutMode": "VERTICAL", "itemSpacing": -2.1824, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                    "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 436.8293, "height": 50.8176,
                    "relativeTransform": [[1, 0, 0], [0, 1, 60.8176]],
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
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 18,
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
                            "strokeWeight": 0.5092, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                            "relativeTransform": [[1, 0, 193.9146], [0, 1, 0]],
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
                        "layoutMode": "HORIZONTAL", "itemSpacing": 5.8198, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 35,
                        "relativeTransform": [[1, 0, 0], [0, 1, 15.8176]],
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
                                    "color": { "r": 0.6039, "g": 0, "b": 1 },
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 0.8 },
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
                                "relativeTransform": [[6.1232e-17, -1, 55], [1, 6.1232e-17, 7.5]],
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
                            "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 315.1897, "height": 3.6374,
                            "relativeTransform": [[1, 0, 60.8198], [0, 1, 15.6813]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "Right Bar Fill",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                "strokeWeight": 0.1455, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.1455, "strokeRightWeight": 0.1455, "strokeBottomWeight": 0.1455, "strokeLeftWeight": 0.1455,
                                "layoutAlign": "INHERIT", "layoutGrow": 1,
                                "layoutMode": "NONE",
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0, "g": 0.9333, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 18.1868,
                                    "boundVariables": {},
                                    "refraction": 1,
                                    "depth": 9.4571,
                                    "lightAngle": -45,
                                    "lightIntensity": 0.8,
                                    "dispersion": 0.5,
                                    "splay": 0
                                  }
                                ],
                                "topLeftRadius": 16,
                                "bottomLeftRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 89.1897, "height": 3.6374,
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
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 50.1955,
                                    "boundVariables": {},
                                    "refraction": 0.59,
                                    "depth": 33.4637,
                                    "lightAngle": -45,
                                    "lightIntensity": 1,
                                    "dispersion": 0.4,
                                    "splay": 0
                                  }
                                ],
                                "topRightRadius": 16,
                                "bottomRightRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 220, "height": 3,
                                "relativeTransform": [[1, 0, 95.1897], [0, 1, 0.3187]],
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
                            "relativeTransform": [[1, 0, 381.8293], [0, 1, 0]],
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
                                    "color": { "r": 0.6039, "g": 0, "b": 1 },
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 0.8 },
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
                                "relativeTransform": [[6.1232e-17, 1, 0], [-1, 6.1232e-17, 27.5]],
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
                    "layoutMode": "VERTICAL", "itemSpacing": -2.1824, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                    "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 436.8293, "height": 50.8176,
                    "relativeTransform": [[1, 0, 0], [0, 1, 113.6352]],
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
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 18,
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
                            "strokeWeight": 0.5092, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                            "relativeTransform": [[1, 0, 201.4146], [0, 1, 0]],
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
                        "layoutMode": "HORIZONTAL", "itemSpacing": 5.8198, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 35,
                        "relativeTransform": [[1, 0, 0], [0, 1, 15.8176]],
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
                                    "color": { "r": 0.6039, "g": 0, "b": 1 },
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 0.8 },
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
                                "relativeTransform": [[6.1232e-17, -1, 55], [1, 6.1232e-17, 7.5]],
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
                            "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 315.1897, "height": 4,
                            "relativeTransform": [[1, 0, 60.8198], [0, 1, 15.5]],
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
                                    "color": { "r": 0, "g": 0.9333, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 18.1868,
                                    "boundVariables": {},
                                    "refraction": 1,
                                    "depth": 9.4571,
                                    "lightAngle": -45,
                                    "lightIntensity": 0.8,
                                    "dispersion": 0.5,
                                    "splay": 0
                                  }
                                ],
                                "topLeftRadius": 16,
                                "bottomLeftRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 223.1897, "height": 3.6374,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0.1813]],
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
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 50.1955,
                                    "boundVariables": {},
                                    "refraction": 0.59,
                                    "depth": 33.4637,
                                    "lightAngle": -45,
                                    "lightIntensity": 1,
                                    "dispersion": 0.4,
                                    "splay": 0
                                  }
                                ],
                                "topRightRadius": 16,
                                "bottomRightRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 86, "height": 4,
                                "relativeTransform": [[1, 0, 229.1897], [0, 1, 0]],
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
                            "relativeTransform": [[1, 0, 381.8293], [0, 1, 0]],
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 1 },
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
                                "relativeTransform": [[6.1232e-17, 1, 0], [-1, 6.1232e-17, 27.5]],
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
                    "layoutMode": "VERTICAL", "itemSpacing": -2.1824, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                    "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 436.8293, "height": 50.8176,
                    "relativeTransform": [[1, 0, 0], [0, 1, 166.4528]],
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
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 18,
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
                            "strokeWeight": 0.5092, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                            "relativeTransform": [[1, 0, 195.9146], [0, 1, 0]],
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
                        "layoutMode": "HORIZONTAL", "itemSpacing": 5.8198, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 35,
                        "relativeTransform": [[1, 0, 0], [0, 1, 15.8176]],
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
                                    "color": { "r": 0.6039, "g": 0, "b": 1 },
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 0.8 },
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
                                "relativeTransform": [[6.1232e-17, -1, 55], [1, 6.1232e-17, 7.5]],
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
                            "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 315.1897, "height": 4,
                            "relativeTransform": [[1, 0, 60.8198], [0, 1, 15.5]],
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
                                    "color": { "r": 0, "g": 0.9333, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 18.1868,
                                    "boundVariables": {},
                                    "refraction": 1,
                                    "depth": 9.4571,
                                    "lightAngle": -45,
                                    "lightIntensity": 0.8,
                                    "dispersion": 0.5,
                                    "splay": 0
                                  }
                                ],
                                "topLeftRadius": 16,
                                "bottomLeftRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 109.1897, "height": 3.6374,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0.1813]],
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
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 50.1955,
                                    "boundVariables": {},
                                    "refraction": 0.59,
                                    "depth": 33.4637,
                                    "lightAngle": -45,
                                    "lightIntensity": 1,
                                    "dispersion": 0.4,
                                    "splay": 0
                                  }
                                ],
                                "topRightRadius": 16,
                                "bottomRightRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 200, "height": 4,
                                "relativeTransform": [[1, 0, 115.1897], [0, 1, 0]],
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
                            "relativeTransform": [[1, 0, 381.8293], [0, 1, 0]],
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 1 },
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
                                "relativeTransform": [[6.1232e-17, 1, 0], [-1, 6.1232e-17, 27.5]],
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
                    "layoutMode": "VERTICAL", "itemSpacing": -2.1824, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                    "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 436.8293, "height": 50.8176,
                    "relativeTransform": [[1, 0, 0], [0, 1, 219.2703]],
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
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 18,
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
                            "strokeWeight": 0.5092, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                            "relativeTransform": [[1, 0, 156.4146], [0, 1, 0]],
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
                        "layoutMode": "HORIZONTAL", "itemSpacing": 5.8198, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.5092, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.5092, "strokeRightWeight": 0.5092, "strokeBottomWeight": 0.5092, "strokeLeftWeight": 0.5092,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 436.8293, "height": 35,
                        "relativeTransform": [[1, 0, 0], [0, 1, 15.8176]],
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
                                    "color": { "r": 0.6039, "g": 0, "b": 1 },
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 0.8 },
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
                                "relativeTransform": [[6.1232e-17, -1, 55], [1, 6.1232e-17, 7.5]],
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
                            "strokeWeight": 0.7275, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.7275, "strokeRightWeight": 0.7275, "strokeBottomWeight": 0.7275, "strokeLeftWeight": 0.7275,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 315.1897, "height": 4,
                            "relativeTransform": [[1, 0, 60.8198], [0, 1, 15.5]],
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
                                    "color": { "r": 0, "g": 0.9333, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 18.1868,
                                    "boundVariables": {},
                                    "refraction": 1,
                                    "depth": 9.4571,
                                    "lightAngle": -45,
                                    "lightIntensity": 0.8,
                                    "dispersion": 0.5,
                                    "splay": 0
                                  }
                                ],
                                "topLeftRadius": 16,
                                "bottomLeftRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 142.1897, "height": 3.6374,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0.1813]],
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
                                    "visible": true, "opacity": 0.8, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:1081c88fd4ed8e2b7db72b216fbff28c4451e187/3505:258" }
                                    }
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": false, "type": "GLASS",
                                    "radius": 50.1955,
                                    "boundVariables": {},
                                    "refraction": 0.59,
                                    "depth": 33.4637,
                                    "lightAngle": -45,
                                    "lightIntensity": 1,
                                    "dispersion": 0.4,
                                    "splay": 0
                                  }
                                ],
                                "topRightRadius": 16,
                                "bottomRightRadius": 16
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 167, "height": 4,
                                "relativeTransform": [[1, 0, 148.1897], [0, 1, 0]],
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
                            "relativeTransform": [[1, 0, 381.8293], [0, 1, 0]],
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
                                    "color": { "r": 0, "g": 0.8627, "b": 1, "a": 1 },
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
                                "relativeTransform": [[6.1232e-17, 1, 0], [-1, 6.1232e-17, 27.5]],
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

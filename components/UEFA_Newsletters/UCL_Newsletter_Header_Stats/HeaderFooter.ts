import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_UCL_Newsletter_Footer_Background_opt_png from "././assets/UCL_Newsletter_Footer_Background_opt.png";

export class HeaderFooter extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition =
    {
      "type": "FRAME",
      "name": "Header Footer",
      "props": {
        "fills": [],
        "clipsContent": false
      },
      "layoutProps": {
        "width": 600,
        "height": 696
      },
      "children": [
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
                        "assetRef": IMG_UCL_Newsletter_Footer_Background_opt_png
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
    };

    return this.renderDefinition(structure);
  }
}

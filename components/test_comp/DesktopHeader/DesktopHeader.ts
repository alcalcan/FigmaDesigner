import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_DesktopHeader_img_1_opt_png from "././assets/DesktopHeader_img_1_opt.png";
import IMG_DesktopHeader_img_2_opt_png from "././assets/DesktopHeader_img_2_opt.png";
import IMG_DesktopHeader_img_3_png from "././assets/DesktopHeader_img_3.png";
import IMG_DesktopHeader_img_4_png from "././assets/DesktopHeader_img_4.png";
import IMG_DesktopHeader_img_7_png from "././assets/DesktopHeader_img_7.png";
import IMG_DesktopHeader_img_9_opt_png from "././assets/DesktopHeader_img_9_opt.png";
import SVG_DesktopHeader_Synth_Ellipse2300_0 from "./assets/DesktopHeader_Synth_Ellipse2300_0.svg";
import SVG_DesktopHeader_assets_icon_Logo_I1503_861_3097_59754_svg_50x47_916656494140625 from "./assets/DesktopHeader_assets_icon_Logo_I1503_861_3097_59754_svg_50x47_916656494140625.svg";


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
          ...[
                          { "hasCheckbox": false, "isSelected": false },
                          { "hasCheckbox": false, "isSelected": false }
                        ].map((item: any) => {
            const node = {
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
        } as unknown as NodeDefinition;

            // Apply loop overrides
            if (item.name) {
                const traverse = (n: any) => {
                    if (n.type === 'TEXT') {
                        n.props = n.props || {};
                        n.props.characters = item.name;
                    }
                    if (n.children) n.children.forEach(traverse);
                };
                traverse(node);
            }

            // Checkbox Logic: Bind checkmark visibility to selection
            const findShape = (n: any): any => {
                if (n.name === 'Checkbox' && n.children) {
                    const shape = n.children.find((c: any) => c.name === 'Shape');
                    if (shape && shape.children && shape.children.length > 1) return shape;
                }
                if (n.children) {
                    for (const c of n.children) {
                        const s = findShape(c);
                        if (s) return s;
                    }
                }
                return null;
            };

            const shape = findShape(node);
            
        if (shape) {
            // The second child (index 1) is the inner checkmark path
            // We bind its visibility to the selection state
            if (shape.children && shape.children.length > 1) {
                shape.children[1].props = shape.children[1].props || {};
                // Force checkmark visibility when selected
                shape.children[1].props.visible = !!item.isSelected;

                // Visual State Toggling: Handle Unchecked (Empty) vs Checked (Filled)
                // The template defaults to "Filled" (Checked style).
                shape.props = shape.props || {};
                if (item.isSelected) {
                    // Checked: Ensure Fill, No Stroke
                    // (Template has fill by default, so we just ensure no stroke)
                    shape.props.strokes = [];
                } else {
                    // Unchecked: No Fill, Bold Dark Stroke
                    shape.props.fills = [];
                    shape.props.strokes = [{
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }
                    }];
                    shape.props.strokeWeight = 2;
                    shape.props.strokeAlign = "INSIDE";
                }
            }
        } 

            if (item.isSelected) {
                node.props = node.props || {};
                node.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                    boundVariables: {}
                }];
            } else {
                if (node.props) node.props.fills = [];
            }

            return node;
        }),
          {
            "type": "FRAME",
            "name": "STATS",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
              "x": 111, "y": 253.658203125,
              "layoutMode": "NONE",
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
              "width": 378, "height": 222.68316650390625,
              "relativeTransform": [[1, 0, 111], [0, 1, 253.658203125]],
              "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "hour",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 12.199999809265137, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 132, "paddingRight": 22.4554443359375, "paddingBottom": 11.22772216796875, "paddingLeft": 22.4554443359375,
                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                  "strokeWeight": 0.20000000298023224, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 0.20000000298023224, "strokeRightWeight": 0.20000000298023224, "strokeBottomWeight": 0.20000000298023224, "strokeLeftWeight": 0.20000000298023224,
                  "x": -51, "y": -57.658416748046875,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                      "gradientStops": [
                        {
                          "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 0 },
                          "position": 0,
                          "boundVariables": {}
                        },
                        {
                          "color": { "r": 0.23241831362247467, "g": 0.003921568859368563, "b": 0.6000000238418579, "a": 1 },
                          "position": 0.5,
                          "boundVariables": {}
                        },
                        {
                          "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 0 },
                          "position": 1,
                          "boundVariables": {}
                        }
                      ],
                      "gradientTransform": [
                        [
                          1.0051243305206299,
                          -0.022882483899593353,
                          0.007100528106093407
                        ],
                        [
                          -5.551115123125783e-17,
                          0.24391263723373413,
                          0.36969032883644104
                        ]
                      ]
                    },
                    {
                      "visible": false, "opacity": 0.30000001192092896, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.0666237398982048, "g": 0.1372675597667694, "b": 0.7730618715286255 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.8196630477905273, "g": 0.5446940064430237, "b": 1 },
                      "boundVariables": {}
                    }
                  ],
                  "effects": [],
                  "cornerRadius": 18
                },
                "layoutProps": {
                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                  "width": 481, "height": 519,
                  "relativeTransform": [[1, 0, -51], [0, 1, -57.658416748046875]],
                  "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
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
                              "color": { "r": 1, "g": 0.5664438009262085, "b": 0.8338030576705933, "a": 1 },
                              "position": 0.3199999928474426,
                              "boundVariables": {}
                            },
                            {
                              "color": { "r": 0.9197272658348083, "g": 0.746506929397583, "b": 1, "a": 1 },
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
                      "width": 356, "height": 0.5,
                      "relativeTransform": [[1, 0, 62.5], [0, 1, 290.4361572265625]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  },
                  {
                    "type": "TEXT",
                    "name": "hour",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 0.4708380401134491, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "characters": "17 FEB 18:45 CET", "fontSize": 29.940593719482422,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
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
                      "font": { "family": "Champions Web", "style": "Bold" },
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 16,
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
                          "fontSize": 29.940593719482422
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 214, "height": 33,
                      "relativeTransform": [[1, 0, 133.5], [0, 1, 303.1361389160156]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              ...[
                          { "name": "Juventus", "hasCheckbox": false, "isSelected": false },
                          { "name": "Juventus", "hasCheckbox": false, "isSelected": false },
                          { "name": "Juventus", "hasCheckbox": false, "isSelected": false }
                        ].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "Comparison Stats",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
            "layoutMode": "VERTICAL", "itemSpacing": 7.777156829833984, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 10.888016700744629, "paddingRight": 10.888016700744629, "paddingBottom": 10.888016700744629, "paddingLeft": 10.888016700744629,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
            "strokeWeight": 0.4536673426628113, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 0.4536673426628113, "strokeRightWeight": 0.4536673426628113, "strokeBottomWeight": 0.4536673426628113, "strokeLeftWeight": 0.4536673426628113,
            "x": -9.3564453125, "y": 48.0911865234375,
            "fills": [
              {
                "visible": true, "opacity": 0.1599999964237213, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [
              { "type": "BACKGROUND_BLUR", "visible": true, "radius": 64.80964660644531 }
            ],
            "cornerRadius": 10.888016700744629
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 395.7772216796875, "height": 184.86422729492188,
            "relativeTransform": [[1, 0, -9.3564453125], [0, 1, 48.0911865234375]],
            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
          },
          "children": [
            {
              "type": "FRAME",
              "name": "Frame 2609321",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 7.777156829833984, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 0.64809650182724, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.64809650182724, "strokeRightWeight": 0.64809650182724, "strokeBottomWeight": 0.64809650182724, "strokeLeftWeight": 0.64809650182724,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 374.0011901855469, "height": 25.923858642578125,
                "relativeTransform": [[1, 0, 10.888002395629883], [0, 1, 10.888028144836426]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Juventus",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 0.3600535988807678, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.3600535988807678, "strokeRightWeight": 0.3600535988807678, "strokeBottomWeight": 0.3600535988807678, "strokeLeftWeight": 0.3600535988807678,
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
                    "width": 25.923858642578125, "height": 25.923858642578125,
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
                            "originalImageHash": "74d8939a352cb19b5453c79b2d0716f0ed5edbe2",
                            "assetRef": IMG_DesktopHeader_img_3_png
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 25.923858642578125, "height": 25.923858642578125,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      }
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "Frame 2609322",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "HORIZONTAL", "itemSpacing": -2.59238600730896, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 0.64809650182724, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.64809650182724, "strokeRightWeight": 0.64809650182724, "strokeBottomWeight": 0.64809650182724, "strokeLeftWeight": 0.64809650182724,
                    "layoutAlign": "INHERIT", "layoutGrow": 1,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 322.1534729003906, "height": 19.453109741210938,
                    "relativeTransform": [[1, 0, 25.923858642578125], [0, 1, 3.2353744506835938]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "team",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "VERTICAL", "itemSpacing": 3.2404825687408447, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 2.59238600730896, "paddingBottom": 0, "paddingLeft": 2.59238600730896,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.64809650182724, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.64809650182724, "strokeRightWeight": 0.64809650182724, "strokeBottomWeight": 0.64809650182724, "strokeLeftWeight": 0.64809650182724,
                        "layoutAlign": "INHERIT", "layoutGrow": 1,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 153.9476776123047, "height": 19.453109741210938,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
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
                            "width": 64.80963897705078, "height": 0.3240482211112976,
                            "relativeTransform": [[1, 0, 44.56901931762695], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        },
                        {
                          "type": "TEXT",
                          "name": "REAL MADRID",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.45592835545539856, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "characters": "Juventus", "fontSize": 9.11856746673584,
                            "textCase": "ORIGINAL", "textDecoration": "NONE",
                            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "NONE",
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
                            "lineHeight": { "unit": "PIXELS", "value": 11.854138374328613 },
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
                                "fontSize": 9.11856746673584
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 34, "height": 12,
                            "relativeTransform": [[1, 0, 59.973838806152344], [0, 1, 3.564530849456787]],
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
                        "layoutMode": "VERTICAL", "itemSpacing": 3.3557169437408447, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 5.033576011657715, "paddingRight": 3.3557169437408447, "paddingBottom": 5.033576011657715, "paddingLeft": 3.3557169437408447,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.129619300365448, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.129619300365448, "strokeRightWeight": 0.129619300365448, "strokeBottomWeight": 0.129619300365448, "strokeLeftWeight": 0.129619300365448,
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
                        "cornerRadius": 1.29619300365448
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 14.258121490478516, "height": 12.961929321289062,
                        "relativeTransform": [[1, 0, 153.9476776123047], [0, 1, 3.2455902099609375]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "TEXT",
                          "name": "VS",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.4194646179676056, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "characters": "VS", "fontSize": 10.06715202331543,
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
                            "lineHeight": { "unit": "PIXELS", "value": 13.087298393249512 },
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
                                "fontSize": 10.06715202331543
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 20.13429832458496, "height": 13.003399848937988,
                            "relativeTransform": [[1, 0, -2.93808913230896], [0, 1, -0.020741982385516167]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "Galatasaray",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 0.3600535988807678, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.3600535988807678, "strokeRightWeight": 0.3600535988807678, "strokeBottomWeight": 0.3600535988807678, "strokeLeftWeight": 0.3600535988807678,
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
                    "width": 25.923858642578125, "height": 25.923858642578125,
                    "relativeTransform": [[1, 0, 348.07733154296875], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "Crest",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.3600535988807678, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.3600535988807678, "strokeRightWeight": 0.3600535988807678, "strokeBottomWeight": 0.3600535988807678, "strokeLeftWeight": 0.3600535988807678,
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
                            "assetRef": IMG_DesktopHeader_img_4_png
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 25.923858642578125, "height": 25.923858642578125,
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
              "name": "Row: Matches played",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "layoutMode": "VERTICAL", "itemSpacing": -1.944289207458496, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                "strokeWeight": 0.4536673426628113, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.4536673426628113, "strokeRightWeight": 0.4536673426628113, "strokeBottomWeight": 0.4536673426628113, "strokeLeftWeight": 0.4536673426628113,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 374.0011901855469, "height": 18.055709838867188,
                "relativeTransform": [[1, 0, 10.888016700744629], [0, 1, 44.58903121948242]],
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
                    "strokeWeight": 0.4536673426628113, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.4536673426628113, "strokeRightWeight": 0.4536673426628113, "strokeBottomWeight": 0.4536673426628113, "strokeLeftWeight": 0.4536673426628113,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 374.0011901855469, "height": 7,
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
                        "strokeWeight": 0.4536673426628113, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 1,
                        "characters": "Matches played", "fontSize": 6.4809651374816895,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "NONE",
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
                            "fontSize": 6.4809651374816895
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 49, "height": 7,
                        "relativeTransform": [[1, 0, 162.50059509277344], [0, 1, 0]],
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
                    "layoutMode": "HORIZONTAL", "itemSpacing": 5.18477201461792, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 0.4536673426628113, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.4536673426628113, "strokeRightWeight": 0.4536673426628113, "strokeBottomWeight": 0.4536673426628113, "strokeLeftWeight": 0.4536673426628113,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 374.0011901855469, "height": 13,
                    "relativeTransform": [[1, 0, 0], [0, 1, 5.055710792541504]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "TEXT",
                      "name": "Left Value",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.4536673426628113, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 1,
                        "characters": "8", "fontSize": 12.702686309814453,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "NONE",
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
                        "lineHeight": { "unit": "PIXELS", "value": 12.313833236694336 },
                        "font": { "family": "Champions", "style": "Display" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 1,
                            "font": { "family": "Champions", "style": "Display" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 1, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "fontSize": 12.702686309814453
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 5, "height": 13,
                        "relativeTransform": [[1, 0, 0.0000015107713124962174], [0, 1, 0.000009517858416074887]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "FRAME",
                      "name": "Frame 2609320",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.64809650182724, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.64809650182724, "strokeRightWeight": 0.64809650182724, "strokeBottomWeight": 0.64809650182724, "strokeLeftWeight": 0.64809650182724,
                        "layoutAlign": "INHERIT", "layoutGrow": 1,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 353.63165283203125, "height": 2.592385768890381,
                        "relativeTransform": [[1, 0, 10.184772491455078], [0, 1, 5.2038068771362305]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
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
                                "color": { "r": 0.23529411852359772, "g": 0.45490196347236633, "b": 1 },
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
                              { "type": "BACKGROUND_BLUR", "visible": false, "radius": 44.718658447265625 }
                            ],
                            "topLeftRadius": 14.258122444152832,
                            "bottomLeftRadius": 14.258122444152832
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 124.43452453613281, "height": 2.592385768890381,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        },
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
                              { "type": "BACKGROUND_BLUR", "visible": false, "radius": 16.202411651611328 }
                            ],
                            "topRightRadius": 14.258122444152832,
                            "bottomRightRadius": 14.258122444152832
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 229.19712829589844, "height": 2.592385768890381,
                            "relativeTransform": [[1, 0, 124.43448638916016], [0, 1, 0.00011270352842984721]],
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
        } as unknown as NodeDefinition;

            // Apply loop overrides
            if (item.name) {
                const traverse = (n: any) => {
                    if (n.type === 'TEXT') {
                        n.props = n.props || {};
                        n.props.characters = item.name;
                    }
                    if (n.children) n.children.forEach(traverse);
                };
                traverse(node);
            }

            // Checkbox Logic: Bind checkmark visibility to selection
            const findShape = (n: any): any => {
                if (n.name === 'Checkbox' && n.children) {
                    const shape = n.children.find((c: any) => c.name === 'Shape');
                    if (shape && shape.children && shape.children.length > 1) return shape;
                }
                if (n.children) {
                    for (const c of n.children) {
                        const s = findShape(c);
                        if (s) return s;
                    }
                }
                return null;
            };

            const shape = findShape(node);
            
        if (shape) {
            // The second child (index 1) is the inner checkmark path
            // We bind its visibility to the selection state
            if (shape.children && shape.children.length > 1) {
                shape.children[1].props = shape.children[1].props || {};
                // Force checkmark visibility when selected
                shape.children[1].props.visible = !!item.isSelected;

                // Visual State Toggling: Handle Unchecked (Empty) vs Checked (Filled)
                // The template defaults to "Filled" (Checked style).
                shape.props = shape.props || {};
                if (item.isSelected) {
                    // Checked: Ensure Fill, No Stroke
                    // (Template has fill by default, so we just ensure no stroke)
                    shape.props.strokes = [];
                } else {
                    // Unchecked: No Fill, Bold Dark Stroke
                    shape.props.fills = [];
                    shape.props.strokes = [{
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }
                    }];
                    shape.props.strokeWeight = 2;
                    shape.props.strokeAlign = "INSIDE";
                }
            }
        } 

            if (item.isSelected) {
                node.props = node.props || {};
                node.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                    boundVariables: {}
                }];
            } else {
                if (node.props) node.props.fills = [];
            }

            return node;
        })
            ]
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
          "x": -19, "y": 455,
          "layoutMode": "NONE",
          "fills": [],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0
        },
        "layoutProps": {
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 600, "height": 242,
          "relativeTransform": [[1, 0, -19], [0, 1, 455]],
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
                      "assetRef": IMG_DesktopHeader_img_9_opt_png
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
                        "svgContent": SVG_DesktopHeader_assets_icon_Logo_I1503_861_3097_59754_svg_50x47_916656494140625
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
                          "assetRef": IMG_DesktopHeader_img_7_png
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
          "strokeWeight": 0.538919985294342, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "characters": "UCL SEASON COMPARED", "fontSize": 89.46072387695312,
          "textCase": "ORIGINAL", "textDecoration": "NONE",
          "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
          "paragraphSpacing": 0, "paragraphIndent": 0,
          "x": 27, "y": 95.43359375,
          "strokes": [],
          "effects": [
            {
              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
              "radius": 28.535125732421875,
              "boundVariables": {},
              "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
              "offset": { "x": 0, "y": 4.323504447937012 },
              "spread": 0,
              "showShadowBehindNode": false
            }
          ],
          "letterSpacing": { "unit": "PIXELS", "value": 0 },
          "lineHeight": { "unit": "PIXELS", "value": 77.52047729492188 },
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
              "fontSize": 89.46072387695312
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
              "fontSize": 89.46072387695312
            }
          ]
        },
        "layoutProps": {
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 546, "height": 78,
          "relativeTransform": [[1, 0, 27], [0, 1, 95.43359375]],
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
          "x": 44, "y": 561,
          "fills": [],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0
        },
        "layoutProps": {
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 512, "height": 48,
          "relativeTransform": [[1, 0, 44], [0, 1, 561]],
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
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                  "lineHeight": { "unit": "PERCENT", "value": 100 },
                  "font": { "family": "Manrope", "style": "SemiBold" },
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

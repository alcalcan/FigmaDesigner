import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_DesktopHeader_img_1_opt_png from "././assets/DesktopHeader_img_1_opt.png";
import IMG_DesktopHeader_img_2_opt_png from "././assets/DesktopHeader_img_2_opt.png";
import IMG_DesktopHeader_img_5_png from "././assets/DesktopHeader_img_5.png";
import IMG_DesktopHeader_img_6_png from "././assets/DesktopHeader_img_6.png";
import IMG_DesktopHeader_img_3_opt_png from "././assets/DesktopHeader_img_3_opt.png";
import IMG_DesktopHeader_img_4_png from "././assets/DesktopHeader_img_4.png";
import SVG_DesktopHeader_Synth_Ellipse2300_0 from "./assets/DesktopHeader_Synth_Ellipse2300_0.svg";
import SVG_DesktopHeader_assets_icon_Logo_I1489_61740_3097_59754_svg_50x47_916656494140625 from "./assets/DesktopHeader_assets_icon_Logo_I1489_61740_3097_59754_svg_50x47_916656494140625.svg";


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
              "strokeWeight": 0.7775089144706726, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 0.7775089144706726, "strokeRightWeight": 0.7775089144706726, "strokeBottomWeight": 0.7775089144706726, "strokeLeftWeight": 0.7775089144706726,
              "x": 98, "y": 276,
              "layoutMode": "NONE",
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
              "width": 404, "height": 238,
              "relativeTransform": [[1, 0, 98], [0, 1, 276]],
              "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
            },
            "children": [
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
            "layoutMode": "VERTICAL", "itemSpacing": 8.312093734741211, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 11.636927604675293, "paddingRight": 11.636927604675293, "paddingBottom": 11.636927604675293, "paddingLeft": 11.636927604675293,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
            "strokeWeight": 0.4848719835281372, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 0.4848719835281372, "strokeRightWeight": 0.4848719835281372, "strokeBottomWeight": 0.4848719835281372, "strokeLeftWeight": 0.4848719835281372,
            "x": -10, "y": 67.2138671875,
            "fills": [
              {
                "visible": true, "opacity": 0.1599999964237213, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [
              {
                "visible": true, "type": "GLASS",
                "radius": 69.2674560546875,
                "boundVariables": {},
                "refraction": 0.7300000190734863,
                "depth": 20.087562561035156,
                "lightAngle": -45,
                "lightIntensity": 1,
                "dispersion": 0.3400000035762787,
                "splay": 0
              }
            ],
            "cornerRadius": 11.636927604675293
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 423, "height": 200.15118408203125,
            "relativeTransform": [[1, 0, -10], [0, 1, 67.2138671875]],
            "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
          },
          "children": [
            {
              "type": "FRAME",
              "name": "Frame 2609321",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 8.312093734741211, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 0.6926745772361755, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.6926745772361755, "strokeRightWeight": 0.6926745772361755, "strokeBottomWeight": 0.6926745772361755, "strokeLeftWeight": 0.6926745772361755,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 399.72613525390625, "height": 27.70698356628418,
                "relativeTransform": [[1, 0, 11.636927604675293], [0, 1, 11.636927604675293]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Juventus",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 0.3848192095756531, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.3848192095756531, "strokeRightWeight": 0.3848192095756531, "strokeBottomWeight": 0.3848192095756531, "strokeLeftWeight": 0.3848192095756531,
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
                    "width": 27.70698356628418, "height": 27.70698356628418,
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
                            "assetRef": IMG_DesktopHeader_img_5_png
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 27.70698356628418, "height": 27.70698356628418,
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
                    "layoutMode": "HORIZONTAL", "itemSpacing": -2.770698308944702, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 0.6926745772361755, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.6926745772361755, "strokeRightWeight": 0.6926745772361755, "strokeBottomWeight": 0.6926745772361755, "strokeLeftWeight": 0.6926745772361755,
                    "layoutAlign": "INHERIT", "layoutGrow": 1,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 344.3121643066406, "height": 20.965757369995117,
                    "relativeTransform": [[1, 0, 27.70698356628418], [0, 1, 3.3706130981445312]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "team",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "VERTICAL", "itemSpacing": 3.4633729457855225, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 2.770698308944702, "paddingBottom": 0, "paddingLeft": 2.770698308944702,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.6926745772361755, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.6926745772361755, "strokeRightWeight": 0.6926745772361755, "strokeBottomWeight": 0.6926745772361755, "strokeLeftWeight": 0.6926745772361755,
                        "layoutAlign": "INHERIT", "layoutGrow": 1,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 164.5366668701172, "height": 20.965757369995117,
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
                            "width": 69.26744842529297, "height": 0.3463372588157654,
                            "relativeTransform": [[1, 0, 47.63460922241211], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        },
                        {
                          "type": "TEXT",
                          "name": "REAL MADRID",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.4872885048389435, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "characters": "Juventus", "fontSize": 9.745770454406738,
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
                            "lineHeight": { "unit": "PIXELS", "value": 12.669502258300781 },
                            "font": { "family": "Champions Web", "style": "Bold" }
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 36, "height": 13,
                            "relativeTransform": [[1, 0, 64.2683334350586], [0, 1, 3.8097102642059326]],
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
                            "width": 103.90117645263672, "height": 0.6926745176315308,
                            "relativeTransform": [[1, 0, 30.317745208740234], [0, 1, 20.273082733154297]],
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
                        "layoutMode": "VERTICAL", "itemSpacing": 3.586533546447754, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 5.379800796508789, "paddingRight": 3.586533546447754, "paddingBottom": 5.379800796508789, "paddingLeft": 3.586533546447754,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.13853491842746735, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.13853491842746735, "strokeRightWeight": 0.13853491842746735, "strokeBottomWeight": 0.13853491842746735, "strokeLeftWeight": 0.13853491842746735,
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
                        "cornerRadius": 1.385349154472351
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 15.238839149475098, "height": 13.853490829467773,
                        "relativeTransform": [[1, 0, 164.5366668701172], [0, 1, 3.556133270263672]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "TEXT",
                          "name": "VS",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.44831669330596924, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "characters": "VS", "fontSize": 10.759601593017578,
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
                            "lineHeight": { "unit": "PIXELS", "value": 13.987483024597168 },
                            "font": { "family": "Champions Web", "style": "Bold" }
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 21.519197463989258, "height": 13.89781379699707,
                            "relativeTransform": [[1, 0, -3.14017915725708], [0, 1, -0.022161483764648438]],
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
                        "layoutMode": "VERTICAL", "itemSpacing": 3.4633729457855225, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 2.770698308944702, "paddingBottom": 0, "paddingLeft": 2.770698308944702,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.6926745772361755, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.6926745772361755, "strokeRightWeight": 0.6926745772361755, "strokeBottomWeight": 0.6926745772361755, "strokeLeftWeight": 0.6926745772361755,
                        "layoutAlign": "INHERIT", "layoutGrow": 1,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 164.5366668701172, "height": 20.965757369995117,
                        "relativeTransform": [[1, 0, 179.7755126953125], [0, 1, 0]],
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
                            "width": 69.26744842529297, "height": 0.3463372588157654,
                            "relativeTransform": [[1, 0, 47.63460922241211], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        },
                        {
                          "type": "TEXT",
                          "name": "REAL MADRID",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.4872885048389435, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 1,
                            "characters": "Galatasaray", "fontSize": 9.745770454406738,
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
                            "lineHeight": { "unit": "PIXELS", "value": 12.669502258300781 },
                            "font": { "family": "Champions Web", "style": "Bold" }
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 49, "height": 13,
                            "relativeTransform": [[1, 0, 57.768333435058594], [0, 1, 3.8097102642059326]],
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
                            "width": 103.90117645263672, "height": 0.6926745176315308,
                            "relativeTransform": [[1, 0, 30.317745208740234], [0, 1, 20.273082733154297]],
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
                    "strokeWeight": 0.3848192095756531, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.3848192095756531, "strokeRightWeight": 0.3848192095756531, "strokeBottomWeight": 0.3848192095756531, "strokeLeftWeight": 0.3848192095756531,
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
                    "width": 27.70698356628418, "height": 27.70698356628418,
                    "relativeTransform": [[1, 0, 372.0191345214844], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "Crest",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.3848192095756531, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.3848192095756531, "strokeRightWeight": 0.3848192095756531, "strokeBottomWeight": 0.3848192095756531, "strokeLeftWeight": 0.3848192095756531,
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
                            "assetRef": IMG_DesktopHeader_img_6_png
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 27.70698356628418, "height": 27.70698356628418,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      }
                    }
                  ]
                }
              ]
            },
            ...[
                          { "name": "Matches played", "hasCheckbox": false, "isSelected": false },
                          { "name": "Won", "hasCheckbox": false, "isSelected": false },
                          { "name": "Drawn", "hasCheckbox": false, "isSelected": false },
                          { "name": "Lost", "hasCheckbox": false, "isSelected": false },
                          { "name": "Goals", "hasCheckbox": false, "isSelected": false }
                        ].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "Row: Matches played",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
            "layoutMode": "VERTICAL", "itemSpacing": -2.0780234336853027, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
            "strokeWeight": 0.4848719835281372, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 0.4848719835281372, "strokeRightWeight": 0.4848719835281372, "strokeBottomWeight": 0.4848719835281372, "strokeLeftWeight": 0.4848719835281372,
            "layoutAlign": "STRETCH", "layoutGrow": 0,
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 399.72613525390625, "height": 19.92197608947754,
            "relativeTransform": [[1, 0, 11.636927604675293], [0, 1, 47.656005859375]],
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
                "strokeWeight": 0.4848719835281372, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.4848719835281372, "strokeRightWeight": 0.4848719835281372, "strokeBottomWeight": 0.4848719835281372, "strokeLeftWeight": 0.4848719835281372,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 399.72613525390625, "height": 8,
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
                    "strokeWeight": 0.4848719835281372, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "INHERIT", "layoutGrow": 1,
                    "characters": "Matches played", "fontSize": 6.926745891571045,
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
                    "font": { "family": "Arial", "style": "Bold" }
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 52, "height": 8,
                    "relativeTransform": [[1, 0, 173.86306762695312], [0, 1, 0]],
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
                "layoutMode": "HORIZONTAL", "itemSpacing": 5.541396617889404, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 0.4848719835281372, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.4848719835281372, "strokeRightWeight": 0.4848719835281372, "strokeBottomWeight": 0.4848719835281372, "strokeLeftWeight": 0.4848719835281372,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 399.72613525390625, "height": 14,
                "relativeTransform": [[1, 0, 0], [0, 1, 5.921976566314697]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "TEXT",
                  "name": "Left Value",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.4848719835281372, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "INHERIT", "layoutGrow": 1,
                    "characters": "8", "fontSize": 13.576416015625,
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
                    "lineHeight": { "unit": "PIXELS", "value": 13.160816192626953 },
                    "font": { "family": "Champions", "style": "Display" }
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 5, "height": 14,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
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
                    "strokeWeight": 0.6926745772361755, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.6926745772361755, "strokeRightWeight": 0.6926745772361755, "strokeBottomWeight": 0.6926745772361755, "strokeLeftWeight": 0.6926745772361755,
                    "layoutAlign": "INHERIT", "layoutGrow": 1,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 378.6433410644531, "height": 2.770698070526123,
                    "relativeTransform": [[1, 0, 10.541397094726562], [0, 1, 5.614650726318359]],
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
                          {
                            "visible": false, "type": "GLASS",
                            "radius": 47.7945442199707,
                            "boundVariables": {},
                            "refraction": 0.5899999737739563,
                            "depth": 31.86302947998047,
                            "lightAngle": -45,
                            "lightIntensity": 1,
                            "dispersion": 0.4000000059604645,
                            "splay": 0
                          }
                        ],
                        "topLeftRadius": 15.238840103149414,
                        "bottomLeftRadius": 15.238840103149414
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 132.99351501464844, "height": 2.770698070526123,
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
                          {
                            "visible": false, "type": "GLASS",
                            "radius": 17.316864013671875,
                            "boundVariables": {},
                            "refraction": 1,
                            "depth": 9.004769325256348,
                            "lightAngle": -45,
                            "lightIntensity": 0.800000011920929,
                            "dispersion": 0.5,
                            "splay": 0
                          }
                        ],
                        "topRightRadius": 15.238840103149414,
                        "bottomRightRadius": 15.238840103149414
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 245.6498260498047, "height": 2.770698070526123,
                        "relativeTransform": [[1, 0, 132.99351501464844], [0, 1, 0.00012890493962913752]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    }
                  ]
                },
                {
                  "type": "TEXT",
                  "name": "Left Value",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.4848719835281372, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "INHERIT", "layoutGrow": 1,
                    "characters": "3", "fontSize": 13.576416015625,
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
                    "lineHeight": { "unit": "PIXELS", "value": 13.85349178314209 },
                    "font": { "family": "Champions", "style": "Display" }
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 5, "height": 14,
                    "relativeTransform": [[1, 0, 394.72613525390625], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  }
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
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "x": 1.1368683772161603e-13, "y": 454,
          "layoutMode": "NONE",
          "fills": [],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0
        },
        "layoutProps": {
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 600, "height": 242,
          "relativeTransform": [[1, 0, 1.1368683772161603e-13], [0, 1, 454]],
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
                      "assetRef": IMG_DesktopHeader_img_3_opt_png
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
              "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                        "svgContent": SVG_DesktopHeader_assets_icon_Logo_I1489_61740_3097_59754_svg_50x47_916656494140625
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
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA",
          "strokeWeight": 0.6138756275177002, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "textCase": "ORIGINAL", "textDecoration": "NONE",
          "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
          "paragraphSpacing": 0, "paragraphIndent": 0,
          "x": 154, "y": 58,
          "strokes": [],
          "effects": [
            {
              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
              "radius": 32.503929138183594,
              "boundVariables": {},
              "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
              "offset": { "x": 0, "y": 4.924838066101074 },
              "spread": 0,
              "showShadowBehindNode": false
            }
          ],
          "letterSpacing": { "unit": "PIXELS", "value": 0 },
          "lineHeight": { "unit": "PIXELS", "value": 88.30239868164062 },
          "font": { "family": "Champions", "style": "Display" }
        },
        "layoutProps": {
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 292, "height": 177,
          "relativeTransform": [[1, 0, 154], [0, 1, 58]],
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
          "x": 40, "y": 559,
          "fills": [],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0
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
                  "font": { "family": "Manrope", "style": "SemiBold" }
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

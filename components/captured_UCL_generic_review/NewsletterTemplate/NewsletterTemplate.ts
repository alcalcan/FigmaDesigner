import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_NewsletterTemplate_img_2_png from "././assets/NewsletterTemplate_img_2.png";
import IMG_NewsletterTemplate_img_4_opt_png from "././assets/NewsletterTemplate_img_4_opt.png";
import IMG_NewsletterTemplate_img_14_png from "././assets/NewsletterTemplate_img_14.png";
import IMG_NewsletterTemplate_img_15_png from "././assets/NewsletterTemplate_img_15.png";
import IMG_NewsletterTemplate_img_5_png from "././assets/NewsletterTemplate_img_5.png";
import IMG_NewsletterTemplate_img_7_png from "././assets/NewsletterTemplate_img_7.png";
import IMG_NewsletterTemplate_img_6_png from "././assets/NewsletterTemplate_img_6.png";
import IMG_NewsletterTemplate_img_8_png from "././assets/NewsletterTemplate_img_8.png";
import IMG_NewsletterTemplate_img_3_opt_png from "././assets/NewsletterTemplate_img_3_opt.png";
import IMG_NewsletterTemplate_img_10_png from "././assets/NewsletterTemplate_img_10.png";
import IMG_NewsletterTemplate_img_16_png from "././assets/NewsletterTemplate_img_16.png";
import IMG_NewsletterTemplate_img_9_png from "././assets/NewsletterTemplate_img_9.png";
import IMG_NewsletterTemplate_img_11_png from "././assets/NewsletterTemplate_img_11.png";
import IMG_NewsletterTemplate_img_12_png from "././assets/NewsletterTemplate_img_12.png";
import IMG_NewsletterTemplate_img_13_png from "././assets/NewsletterTemplate_img_13.png";
import IMG_NewsletterTemplate_img_1_png from "././assets/NewsletterTemplate_img_1.png";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27432_2556_11005_1004_90_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27432_2556_11005_1004_90_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_Logo_I2266_103695_2697_27433_861_4531_svg_orig from "./assets/NewsletterTemplate_assets_icon_Logo_I2266_103695_2697_27433_861_4531_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_g18_I2266_103695_2697_27433_3006_47341_403_2979_svg_orig from "./assets/NewsletterTemplate_assets_icon_g18_I2266_103695_2697_27433_3006_47341_403_2979_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_g22_I2266_103695_2697_27433_3006_47341_403_2981_svg_orig from "./assets/NewsletterTemplate_assets_icon_g22_I2266_103695_2697_27433_3006_47341_403_2981_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_g26_I2266_103695_2697_27433_3006_47341_403_2983_svg_orig from "./assets/NewsletterTemplate_assets_icon_g26_I2266_103695_2697_27433_3006_47341_403_2983_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_g30_I2266_103695_2697_27433_3006_47341_403_2985_svg_orig from "./assets/NewsletterTemplate_assets_icon_g30_I2266_103695_2697_27433_3006_47341_403_2985_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27475_2642_16923_4717_22521_1004_103_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27475_2642_16923_4717_22521_1004_103_svg_orig.svg";
import SVG_NewsletterTemplate_assets_vector_Group_1809_I2273_9029_861_250_svg_orig from "./assets/NewsletterTemplate_assets_vector_Group_1809_I2273_9029_861_250_svg_orig.svg";
import SVG_NewsletterTemplate_assets_vector_Group_1809_I2273_9030_861_250_svg_orig from "./assets/NewsletterTemplate_assets_vector_Group_1809_I2273_9030_861_250_svg_orig.svg";
import SVG_NewsletterTemplate_assets_vector_Group_1800_2273_8895_svg_orig from "./assets/NewsletterTemplate_assets_vector_Group_1800_2273_8895_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18292_1238_12105_1004_90_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18292_1238_12105_1004_90_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18293_1238_12105_1004_90_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18293_1238_12105_1004_90_svg_orig.svg";
import SVG_NewsletterTemplate_assets_vector_Competition_logo_I2266_103700_861_834_svg_orig from "./assets/NewsletterTemplate_assets_vector_Competition_logo_I2266_103700_861_834_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58190_1004_406_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58190_1004_406_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_path1009_I2266_103700_2467_59807_2455_58196_4821_19_svg_orig from "./assets/NewsletterTemplate_assets_icon_path1009_I2266_103700_2467_59807_2455_58196_4821_19_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58198_1004_402_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58198_1004_402_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_Union_I2266_103700_2467_59807_2455_58200_3372_10836_svg_orig from "./assets/NewsletterTemplate_assets_icon_Union_I2266_103700_2467_59807_2455_58200_3372_10836_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58202_1004_407_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58202_1004_407_svg_orig.svg";


export class NewsletterTemplate extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "NewsletterTemplate",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
            "cornerRadius": 0,
            "layoutSizingHorizontal": "FIXED",
            "layoutSizingVertical": "HUG"
          },
          "layoutProps": { "width": 600, "height": 2648.8125, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "DesktopHeader",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
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
                "layoutSizingVertical": "FIXED",
                "layoutSizingHorizontal": "FILL"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 600, "height": 696,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
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
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 600, "height": 696,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "GettyImages-2212791115 1",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": -201, "y": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                            "scaleMode": "CROP",
                            "imageTransform": [[0.9999700784683228, 0, 0.000014972251847211737], [0, 1, 0]],
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
                            "originalImageHash": "2ae4b4a624972ce819279dc7df1ff05096bb6167",
                            "assetRef": IMG_NewsletterTemplate_img_2_png
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1137.0341, "height": 696,
                        "relativeTransform": [[1, 0, -201], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "FRAME",
                      "name": "opacity",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": 0, "y": 431,
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
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "play_button",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "x": 240, "y": 272,
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
                    "width": 120, "height": 120,
                    "relativeTransform": [[1, 0, 240], [0, 1, 272]],
                    "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
                  },
                  "children": [
                    {
                      "type": "ELLIPSE",
                      "name": "BG",
                      "props": {
                        "visible": true, "opacity": 0.6000000238418579, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 0, "y": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 0.4000000059604645, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.09019608050584793, "g": 0.15294118225574493, "b": 0.1921568661928177 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 120, "height": 120,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "FRAME",
                      "name": "Play icon",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": 24, "y": 24,
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
                        "width": 72, "height": 72,
                        "relativeTransform": [[1, 0, 24], [0, 1, 24]],
                        "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
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
                            "x": 6, "y": 6,
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
                            "width": 60, "height": 60,
                            "relativeTransform": [[1, 0, 6], [0, 1, 6]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27432_2556_11005_1004_90_svg_orig
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
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0.30000001192092896 },
                            "position": 0,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
                            "position": 0.3471200466156006,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0.20000000298023224 },
                            "position": 0.5935313105583191,
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
                            -1.4511566319257152e-13,
                            1.0571428537368774,
                            -1.0269562977782698e-15
                          ],
                          [ -24.75099754333496, -1.5987211554602254e-13, 0.5 ]
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
                        "relativeTransform": [[1, 0, 24], [0, 1, 16]],
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
                                  "svgContent": SVG_NewsletterTemplate_assets_icon_Logo_I2266_103695_2697_27433_861_4531_svg_orig
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "FRAME",
                      "name": "LOGO MyUEFA",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "strokeWeight": 0.761904776096344, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.761904776096344, "strokeRightWeight": 0.761904776096344, "strokeBottomWeight": 0.761904776096344, "strokeLeftWeight": 0.761904776096344,
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
                        "width": 74.2857, "height": 16,
                        "relativeTransform": [[1, 0, 501.7143], [0, -1, 49]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "GROUP",
                          "name": "g18",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "x": 21, "y": 0.00003475199991953559,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 53.2857, "height": 15.9711,
                            "relativeTransform": [[1, 0, 21], [0, 1, 0]]
                          },
                          "svgContent": SVG_NewsletterTemplate_assets_icon_g18_I2266_103695_2697_27433_3006_47341_403_2979_svg_orig
                        },
                        {
                          "type": "GROUP",
                          "name": "g22",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "x": 9.489757537841797, "y": 3.873318910598755,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.7726, "height": 12.1267,
                            "relativeTransform": [[1, 0, 9.4898], [0, 1, 3.8733]]
                          },
                          "svgContent": SVG_NewsletterTemplate_assets_icon_g22_I2266_103695_2697_27433_3006_47341_403_2981_svg_orig
                        },
                        {
                          "type": "GROUP",
                          "name": "g26",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "x": 5.278332024932775e-13, "y": 3.873318910598755,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.1458, "height": 12.1267,
                            "relativeTransform": [[1, 0, 0], [0, 1, 3.8733]]
                          },
                          "svgContent": SVG_NewsletterTemplate_assets_icon_g26_I2266_103695_2697_27433_3006_47341_403_2983_svg_orig
                        },
                        {
                          "type": "GROUP",
                          "name": "g30",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "x": 6.496390881835512e-13, "y": 0,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 17.2878, "height": 1.8908,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                          },
                          "svgContent": SVG_NewsletterTemplate_assets_icon_g30_I2266_103695_2697_27433_3006_47341_403_2985_svg_orig
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
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
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
                                "assetRef": IMG_NewsletterTemplate_img_4_opt_png
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
                    },
                    {
                      "type": "TEXT",
                      "name": "Other",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.8974401354789734, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "characters": "Highlights", "fontSize": 122.0518569946289,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "x": 43.232421875, "y": -38,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED",
                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                        "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                        "font": { "family": "Champions Display Colour", "style": "Italic Right" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 10,
                            "font": { "family": "Champions Display Colour", "style": "Italic Right" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "fontSize": 122.0518569946289
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 514, "height": 159,
                        "relativeTransform": [[1, 0, 43.2324], [0, 1, -38]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "TEXT",
                      "name": "Other",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.8974401354789734, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "characters": "Highlights", "fontSize": 122.0518569946289,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "x": 43.2320556640625, "y": -38,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 1, "g": 0.8039215803146362, "b": 0.2666666805744171 },
                            "boundVariables": {
                              "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:c446c721d22a89635e92effafe544be72be8b2ea/3505:224" }
                            }
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED",
                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                        "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                        "font": { "family": "Champions Display Colour", "style": "Italic Left" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 10,
                            "font": { "family": "Champions Display Colour", "style": "Italic Left" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 0.8039215803146362, "b": 0.2666666805744171 },
                                "boundVariables": {
                                  "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:c446c721d22a89635e92effafe544be72be8b2ea/3505:224" }
                                }
                              }
                            ],
                            "fontSize": 122.0518569946289
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 514, "height": 159,
                        "relativeTransform": [[1, 0, 43.2321], [0, 1, -38]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "TEXT",
                      "name": "Other",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.8974401354789734, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "characters": "Highlights", "fontSize": 122.0518569946289,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "x": 43.232421875, "y": -39,
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
                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                        "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                        "font": { "family": "Champions Display Colour", "style": "Italic Letter" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 10,
                            "font": { "family": "Champions Display Colour", "style": "Italic Letter" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 1, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "fontSize": 122.0518569946289
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 514, "height": 159,
                        "relativeTransform": [[1, 0, 43.2324], [0, 1, -39]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
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
                    "x": 44, "y": 566,
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
                    "relativeTransform": [[1, 0, 44], [0, 1, 566]],
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
                            "relativeTransform": [[1, 0, 79], [0, 1, 12]],
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
                              "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27475_2642_16923_4717_22521_1004_103_svg_orig
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
                            "characters": "Watch now", "fontSize": 20,
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
                                "end": 9,
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
                            "width": 106, "height": 20,
                            "relativeTransform": [[1, 0, 111], [0, 1, 14]],
                            "constraints": { "horizontal": "STRETCH", "vertical": "CENTER" }
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
              "name": "Body",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 8, "paddingRight": 24, "paddingBottom": 32, "paddingLeft": 24,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                "layoutSizingVertical": "HUG",
                "layoutSizingHorizontal": "FILL"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 600, "height": 1260,
                "relativeTransform": [[1, 0, 0], [0, 1, 696]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "DesktopSections",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
                    "layoutSizingVertical": "HUG",
                    "layoutSizingHorizontal": "FILL"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 552, "height": 344,
                    "relativeTransform": [[1, 0, 24], [0, 1, 8]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Results",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 32, "paddingRight": 20, "paddingBottom": 32, "paddingLeft": 20,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.9990582466125488, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.9990582466125488, "strokeRightWeight": 0.9990582466125488, "strokeBottomWeight": 0.9990582466125488, "strokeLeftWeight": 0.9990582466125488,
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
                            "color": { "r": 0, "g": 0, "b": 0.6078431606292725 },
                            "boundVariables": {}
                          },
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_RADIAL",
                            "gradientStops": [
                              {
                                "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 1 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                -0.2067427635192871,
                                0.20742613077163696,
                                0.7371362447738647
                              ],
                              [
                                -0.33528202772140503,
                                -0.33409741520881653,
                                0.8394749164581299
                              ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 14,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "HUG"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 552, "height": 344,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "Title",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "layoutMode": "NONE",
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingVertical": "FIXED",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 512, "height": 40,
                            "relativeTransform": [[1, 0, 20], [0, 1, 32]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "TEXT",
                              "name": "Title",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.3889460563659668, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "characters": "RESULTS", "fontSize": 50.057289123535156,
                                "textCase": "UPPER", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "NONE",
                                "paragraphSpacing": 0, "paragraphIndent": 0,
                                "x": 0, "y": 0,
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
                                "letterSpacing": { "unit": "PERCENT", "value": 4 },
                                "lineHeight": { "unit": "PERCENT", "value": 100 },
                                "font": { "family": "Champions Display Colour", "style": "Letter" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 7,
                                    "font": { "family": "Champions Display Colour", "style": "Letter" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 50.057289123535156
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 512, "height": 40,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "Title",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.3889460563659668, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "characters": "RESULTS", "fontSize": 50.057289123535156,
                                "textCase": "UPPER", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "NONE",
                                "paragraphSpacing": 0, "paragraphIndent": 0,
                                "x": 0, "y": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 0.8039215803146362, "b": 0.2666666805744171 },
                                    "boundVariables": {
                                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:c446c721d22a89635e92effafe544be72be8b2ea/3505:224" }
                                    }
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "FIXED",
                                "letterSpacing": { "unit": "PERCENT", "value": 4 },
                                "lineHeight": { "unit": "PERCENT", "value": 100 },
                                "font": { "family": "Champions Display Colour", "style": "Left" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 7,
                                    "font": { "family": "Champions Display Colour", "style": "Left" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 0.8039215803146362, "b": 0.2666666805744171 },
                                        "boundVariables": {
                                          "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:c446c721d22a89635e92effafe544be72be8b2ea/3505:224" }
                                        }
                                      }
                                    ],
                                    "fontSize": 50.057289123535156
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 512, "height": 40,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "Title",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1.3889460563659668, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "characters": "Results", "fontSize": 50.057289123535156,
                                "textCase": "UPPER", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "NONE",
                                "paragraphSpacing": 0, "paragraphIndent": 0,
                                "x": 0, "y": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "FIXED",
                                "letterSpacing": { "unit": "PERCENT", "value": 4 },
                                "lineHeight": { "unit": "PERCENT", "value": 100 },
                                "font": { "family": "Champions Display Colour", "style": "Right" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 7,
                                    "font": { "family": "Champions Display Colour", "style": "Right" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 50.057289123535156
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 512, "height": 40,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "MatchAtoms",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "layoutMode": "NONE",
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingVertical": "FIXED",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 512, "height": 60,
                            "relativeTransform": [[1, 0, 20], [0, 1, 96]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "GROUP",
                              "name": "Group 1809",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "x": 24.000900268554688, "y": 16,
                                "effects": []
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 464.0002, "height": 34.968,
                                "relativeTransform": [[1, 0, 24.0009], [0, 1, 16]]
                              },
                              "svgContent": SVG_NewsletterTemplate_assets_vector_Group_1809_I2273_9029_861_250_svg_orig
                            },
                            {
                              "type": "FRAME",
                              "name": "Ajax",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.9990582466125488, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.9990582466125488, "strokeRightWeight": 0.9990582466125488, "strokeBottomWeight": 0.9990582466125488, "strokeLeftWeight": 0.9990582466125488,
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
                                "width": 60, "height": 60,
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
                                        "imageHash": "94cfb293e3425d005ba3774b9a6f2c7b8a31c3a8"
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 60, "height": 60,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Benfica",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.9990582466125488, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.9990582466125488, "strokeRightWeight": 0.9990582466125488, "strokeBottomWeight": 0.9990582466125488, "strokeLeftWeight": 0.9990582466125488,
                                "x": 452, "y": 0,
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
                                "width": 60, "height": 60,
                                "relativeTransform": [[1, 0, 452], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Crest",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.9990582466125488, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.9990582466125488, "strokeRightWeight": 0.9990582466125488, "strokeBottomWeight": 0.9990582466125488, "strokeLeftWeight": 0.9990582466125488,
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
                                        "imageHash": "9a14a664f522cbccc0266f5d1f5a158baae68bb1"
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 60, "height": 60,
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
                          "name": "MatchAtoms",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "layoutMode": "NONE",
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingVertical": "FIXED",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 512, "height": 60,
                            "relativeTransform": [[1, 0, 20], [0, 1, 180]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "GROUP",
                              "name": "Group 1809",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "x": 24.000900268554688, "y": 16,
                                "effects": []
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 464.0002, "height": 34.968,
                                "relativeTransform": [[1, 0, 24.0009], [0, 1, 16]]
                              },
                              "svgContent": SVG_NewsletterTemplate_assets_vector_Group_1809_I2273_9030_861_250_svg_orig
                            },
                            {
                              "type": "FRAME",
                              "name": "Ajax",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.9990582466125488, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.9990582466125488, "strokeRightWeight": 0.9990582466125488, "strokeBottomWeight": 0.9990582466125488, "strokeLeftWeight": 0.9990582466125488,
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
                                "width": 60, "height": 60,
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
                                        "imageHash": "94cfb293e3425d005ba3774b9a6f2c7b8a31c3a8"
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 60, "height": 60,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Benfica",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.9990582466125488, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.9990582466125488, "strokeRightWeight": 0.9990582466125488, "strokeBottomWeight": 0.9990582466125488, "strokeLeftWeight": 0.9990582466125488,
                                "x": 452, "y": 0,
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
                                "width": 60, "height": 60,
                                "relativeTransform": [[1, 0, 452], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Crest",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.9990582466125488, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.9990582466125488, "strokeRightWeight": 0.9990582466125488, "strokeBottomWeight": 0.9990582466125488, "strokeLeftWeight": 0.9990582466125488,
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
                                        "imageHash": "9a14a664f522cbccc0266f5d1f5a158baae68bb1"
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 60, "height": 60,
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
                            "width": 512, "height": 48,
                            "relativeTransform": [[1, 0, 20], [0, 1, 264]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "pk-button",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                                "fills": [],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
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
                                    "characters": "See all results", "fontSize": 20,
                                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                                    "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                    "paragraphSpacing": 16, "paragraphIndent": 0,
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
                                            "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                            "boundVariables": {}
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
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "DesktopSections",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                    "width": 552, "height": 442,
                    "relativeTransform": [[1, 0, 24], [0, 1, 376]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "League standings",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 32, "paddingRight": 20, "paddingBottom": 32, "paddingLeft": 20,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.9990582466125488, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.9990582466125488, "strokeRightWeight": 0.9990582466125488, "strokeBottomWeight": 0.9990582466125488, "strokeLeftWeight": 0.9990582466125488,
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
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0, "b": 0.6078431606292725 },
                            "boundVariables": {}
                          },
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_RADIAL",
                            "gradientStops": [
                              {
                                "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 1 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                -0.2067427635192871,
                                0.20742613077163696,
                                0.7371362447738647
                              ],
                              [
                                -0.33528202772140503,
                                -0.33409741520881653,
                                0.8394749164581299
                              ]
                            ]
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 14,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "HUG"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 552, "height": 442,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "Frame 2609167",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "VERTICAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                            "layoutSizingVertical": "HUG",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 512, "height": 40,
                            "relativeTransform": [[1, 0, 20], [0, 1, 32]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "GROUP",
                              "name": "Group 1800",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "effects": []
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 378, "height": 40,
                                "relativeTransform": [[1, 0, 67], [0, 1, 0]]
                              },
                              "svgContent": SVG_NewsletterTemplate_assets_vector_Group_1800_2273_8895_svg_orig
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "Frame 2609217",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 512, "height": 242,
                            "relativeTransform": [[1, 0, 20], [0, 1, 96]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "table-header",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MAX", "counterAxisAlignItems": "CENTER",
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
                                "width": 512, "height": 26,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Frame 6467",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "FIXED",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 44, "height": 26,
                                    "relativeTransform": [[1, 0, 424], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "P",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "P", "fontSize": 20,
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
                                        "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                        "font": { "family": "Champions", "style": "Bold" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 1,
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 20
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 11, "height": 26,
                                        "relativeTransform": [[1, 0, 16.5], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "FRAME",
                                  "name": "Frame 6468",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "FIXED",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 44, "height": 26,
                                    "relativeTransform": [[1, 0, 468], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "Pts",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "Pts", "fontSize": 20,
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
                                        "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                        "font": { "family": "Champions", "style": "Bold" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 3,
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 1, "g": 1, "b": 1 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 20
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 27, "height": 26,
                                        "relativeTransform": [[1, 0, 8.5], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Table standing row",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                                "layoutSizingVertical": "FIXED"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 512, "height": 54,
                                "relativeTransform": [[1, 0, 0], [0, 1, 26]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Content",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                                        "visible": true, "opacity": 0.10000000149011612, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {
                                          "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272" }
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "FIXED"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 512, "height": 44,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 5]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "FRAME",
                                      "name": "Country",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 423, "height": 44,
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
                                            "characters": "1", "fontSize": 20,
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
                                            "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 1,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 28, "height": 26,
                                            "relativeTransform": [[1, 0, 8], [0, 1, 9]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          }
                                        },
                                        {
                                          "type": "FRAME",
                                          "name": "Team",
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
                                            "width": 120, "height": 32,
                                            "relativeTransform": [[1, 0, 44], [0, 1, 6]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          },
                                          "children": [
                                            {
                                              "type": "FRAME",
                                              "name": "Man City",
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
                                                "cornerRadius": 0,
                                                "layoutSizingHorizontal": "FIXED",
                                                "layoutSizingVertical": "FIXED"
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 32, "height": 32,
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
                                                        "assetRef": IMG_NewsletterTemplate_img_14_png
                                                      }
                                                    ],
                                                    "strokes": [],
                                                    "effects": [],
                                                    "cornerRadius": 0
                                                  },
                                                  "layoutProps": {
                                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                    "width": 32, "height": 32,
                                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "TEXT",
                                              "name": "Team",
                                              "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "characters": "MAN UTD", "fontSize": 20,
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
                                                "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "richTextSpans": [
                                                  {
                                                    "start": 0,
                                                    "end": 7,
                                                    "font": { "family": "Champions", "style": "Bold" },
                                                    "fills": [
                                                      {
                                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                        "color": { "r": 1, "g": 1, "b": 1 },
                                                        "boundVariables": {}
                                                      }
                                                    ],
                                                    "fontSize": 20
                                                  }
                                                ]
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 80, "height": 26,
                                                "relativeTransform": [[1, 0, 40], [0, 1, 3]],
                                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "P",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 44, "height": 44,
                                        "relativeTransform": [[1, 0, 423], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "6",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "6", "fontSize": 20,
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
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 1,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 11, "height": 26,
                                            "relativeTransform": [[1, 0, 16.5], [0, 1, 9]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "RECTANGLE",
                                      "name": "Separator",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
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
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 1, "height": 54,
                                        "relativeTransform": [[1, 0, 467], [0, 1, -5]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "Pts",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 44, "height": 44,
                                        "relativeTransform": [[1, 0, 468], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "14",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "14", "fontSize": 20,
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
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 2,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 22, "height": 26,
                                            "relativeTransform": [[1, 0, 11], [0, 1, 9]],
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
                              "name": "Table standing row",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                                    "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingHorizontal": "HUG",
                                "layoutSizingVertical": "FIXED"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 512, "height": 54,
                                "relativeTransform": [[1, 0, 0], [0, 1, 80]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Content",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                                        "visible": true, "opacity": 0.10000000149011612, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {
                                          "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272" }
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "FIXED"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 512, "height": 44,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 5]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "FRAME",
                                      "name": "Country",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 423, "height": 44,
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
                                            "characters": "2", "fontSize": 20,
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
                                            "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 1,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 28, "height": 26,
                                            "relativeTransform": [[1, 0, 8], [0, 1, 9]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          }
                                        },
                                        {
                                          "type": "FRAME",
                                          "name": "Team",
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
                                            "width": 155, "height": 32,
                                            "relativeTransform": [[1, 0, 44], [0, 1, 6]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          },
                                          "children": [
                                            {
                                              "type": "FRAME",
                                              "name": "Madrid",
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
                                                "cornerRadius": 0,
                                                "layoutSizingHorizontal": "FIXED",
                                                "layoutSizingVertical": "FIXED"
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 32, "height": 32,
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
                                                        "imageHash": "f5ec9b208b0fed168a2b1ad5d4d9bba462ad9cec"
                                                      }
                                                    ],
                                                    "strokes": [],
                                                    "effects": [],
                                                    "cornerRadius": 0
                                                  },
                                                  "layoutProps": {
                                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                    "width": 32, "height": 32,
                                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "TEXT",
                                              "name": "Team",
                                              "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "characters": "REAL MADRID", "fontSize": 20,
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
                                                "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "richTextSpans": [
                                                  {
                                                    "start": 0,
                                                    "end": 11,
                                                    "font": { "family": "Champions", "style": "Bold" },
                                                    "fills": [
                                                      {
                                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                        "color": { "r": 1, "g": 1, "b": 1 },
                                                        "boundVariables": {}
                                                      }
                                                    ],
                                                    "fontSize": 20
                                                  }
                                                ]
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 115, "height": 26,
                                                "relativeTransform": [[1, 0, 40], [0, 1, 3]],
                                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "P",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 44, "height": 44,
                                        "relativeTransform": [[1, 0, 423], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "6",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "6", "fontSize": 20,
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
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 1,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 11, "height": 26,
                                            "relativeTransform": [[1, 0, 16.5], [0, 1, 9]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "RECTANGLE",
                                      "name": "Separator",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
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
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 1, "height": 54,
                                        "relativeTransform": [[1, 0, 467], [0, 1, -5]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "Pts",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 44, "height": 44,
                                        "relativeTransform": [[1, 0, 468], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "14",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "14", "fontSize": 20,
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
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 2,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 22, "height": 26,
                                            "relativeTransform": [[1, 0, 11], [0, 1, 9]],
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
                              "name": "Table standing row",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                                "layoutSizingVertical": "FIXED"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 512, "height": 54,
                                "relativeTransform": [[1, 0, 0], [0, 1, 134]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Content",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                                        "visible": true, "opacity": 0.10000000149011612, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {
                                          "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272" }
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "FIXED"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 512, "height": 44,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 5]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "FRAME",
                                      "name": "Country",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 423, "height": 44,
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
                                            "characters": "3", "fontSize": 20,
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
                                            "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 1,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 28, "height": 26,
                                            "relativeTransform": [[1, 0, 8], [0, 1, 9]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          }
                                        },
                                        {
                                          "type": "FRAME",
                                          "name": "Team",
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
                                            "width": 172, "height": 32,
                                            "relativeTransform": [[1, 0, 44], [0, 1, 6]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          },
                                          "children": [
                                            {
                                              "type": "FRAME",
                                              "name": "Real Sociedad",
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
                                                "cornerRadius": 0,
                                                "layoutSizingHorizontal": "FIXED",
                                                "layoutSizingVertical": "FIXED"
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 32, "height": 32,
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
                                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                                                        "originalImageHash": "874651de601452c171cb442d909cf0e5b2bd5955",
                                                        "assetRef": IMG_NewsletterTemplate_img_15_png
                                                      }
                                                    ],
                                                    "strokes": [],
                                                    "effects": [],
                                                    "cornerRadius": 0
                                                  },
                                                  "layoutProps": {
                                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                    "width": 32, "height": 32,
                                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "TEXT",
                                              "name": "Team",
                                              "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "characters": "REAL SOCIEDAD", "fontSize": 20,
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
                                                "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "richTextSpans": [
                                                  {
                                                    "start": 0,
                                                    "end": 13,
                                                    "font": { "family": "Champions", "style": "Bold" },
                                                    "fills": [
                                                      {
                                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                        "color": { "r": 1, "g": 1, "b": 1 },
                                                        "boundVariables": {}
                                                      }
                                                    ],
                                                    "fontSize": 20
                                                  }
                                                ]
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 132, "height": 26,
                                                "relativeTransform": [[1, 0, 40], [0, 1, 3]],
                                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "P",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 44, "height": 44,
                                        "relativeTransform": [[1, 0, 423], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "6",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "6", "fontSize": 20,
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
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 1,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 11, "height": 26,
                                            "relativeTransform": [[1, 0, 16.5], [0, 1, 9]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "RECTANGLE",
                                      "name": "Separator",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
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
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 1, "height": 54,
                                        "relativeTransform": [[1, 0, 467], [0, 1, -5]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "Pts",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 44, "height": 44,
                                        "relativeTransform": [[1, 0, 468], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "14",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "14", "fontSize": 20,
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
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 2,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 22, "height": 26,
                                            "relativeTransform": [[1, 0, 11], [0, 1, 9]],
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
                              "name": "Table standing row",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                                "layoutSizingVertical": "FIXED"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 512, "height": 54,
                                "relativeTransform": [[1, 0, 0], [0, 1, 188]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Content",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                                        "visible": true, "opacity": 0.10000000149011612, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {
                                          "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:e4272c5b50925900063c785683e2cc7483ed7dcd/3505:272" }
                                        }
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "FIXED"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 512, "height": 44,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 5]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "FRAME",
                                      "name": "Country",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 423, "height": 44,
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
                                            "characters": "4", "fontSize": 20,
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
                                            "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 1,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 28, "height": 26,
                                            "relativeTransform": [[1, 0, 8], [0, 1, 9]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          }
                                        },
                                        {
                                          "type": "FRAME",
                                          "name": "Team",
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
                                            "width": 89, "height": 32,
                                            "relativeTransform": [[1, 0, 44], [0, 1, 6]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          },
                                          "children": [
                                            {
                                              "type": "FRAME",
                                              "name": "Paris",
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
                                                "cornerRadius": 0,
                                                "layoutSizingHorizontal": "FIXED",
                                                "layoutSizingVertical": "FIXED"
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 32, "height": 32,
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
                                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                                                        "imageHash": "903032581aa0dbd443e3137c12ef4614e6f807af"
                                                      }
                                                    ],
                                                    "strokes": [],
                                                    "effects": [],
                                                    "cornerRadius": 0
                                                  },
                                                  "layoutProps": {
                                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                    "width": 32, "height": 32,
                                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                                  }
                                                }
                                              ]
                                            },
                                            {
                                              "type": "TEXT",
                                              "name": "Team",
                                              "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "characters": "PARIS", "fontSize": 20,
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
                                                "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "richTextSpans": [
                                                  {
                                                    "start": 0,
                                                    "end": 5,
                                                    "font": { "family": "Champions", "style": "Bold" },
                                                    "fills": [
                                                      {
                                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                        "color": { "r": 1, "g": 1, "b": 1 },
                                                        "boundVariables": {}
                                                      }
                                                    ],
                                                    "fontSize": 20
                                                  }
                                                ]
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 49, "height": 26,
                                                "relativeTransform": [[1, 0, 40], [0, 1, 3]],
                                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "P",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 44, "height": 44,
                                        "relativeTransform": [[1, 0, 423], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "6",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "6", "fontSize": 20,
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
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 1,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 11, "height": 26,
                                            "relativeTransform": [[1, 0, 16.5], [0, 1, 9]],
                                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "RECTANGLE",
                                      "name": "Separator",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
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
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 1, "height": 54,
                                        "relativeTransform": [[1, 0, 467], [0, 1, -5]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "Pts",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 44, "height": 44,
                                        "relativeTransform": [[1, 0, 468], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "14",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "14", "fontSize": 20,
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
                                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                                            "font": { "family": "Champions", "style": "Bold" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 2,
                                                "font": { "family": "Champions", "style": "Bold" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 1, "g": 1, "b": 1 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 20
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 22, "height": 26,
                                            "relativeTransform": [[1, 0, 11], [0, 1, 9]],
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
                        },
                        {
                          "type": "FRAME",
                          "name": "Buttons row",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 512, "height": 48,
                            "relativeTransform": [[1, 0, 20], [0, 1, 362]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "pk-button",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                                "fills": [],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
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
                                    "characters": "See full table", "fontSize": 20,
                                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                                    "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                    "paragraphSpacing": 16, "paragraphIndent": 0,
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
                                    "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                    "lineHeight": { "unit": "PERCENT", "value": 100 },
                                    "font": { "family": "Manrope", "style": "SemiBold" },
                                    "layoutSizingHorizontal": "FILL",
                                    "richTextSpans": [
                                      {
                                        "start": 0,
                                        "end": 14,
                                        "font": { "family": "Manrope", "style": "SemiBold" },
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0, "g": 0.9333333373069763, "b": 1 },
                                            "boundVariables": {}
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
                          "type": "RECTANGLE",
                          "name": "Rectangle 2235",
                          "props": {
                            "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                "gradientStops": [
                                  {
                                    "color": { "r": 0, "g": 0, "b": 0.6078431606292725, "a": 0 },
                                    "position": 0,
                                    "boundVariables": {}
                                  },
                                  {
                                    "color": { "r": 0, "g": 0, "b": 0.6078431606292725, "a": 1 },
                                    "position": 1,
                                    "boundVariables": {}
                                  }
                                ],
                                "gradientTransform": [
                                  [ 0, 1.3043478727340698, 0 ],
                                  [
                                    -178.89144897460938,
                                    5.968558980384842e-13,
                                    89.94572448730469
                                  ]
                                ]
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutPositioning": "ABSOLUTE"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "ABSOLUTE",
                            "width": 527, "height": 45,
                            "relativeTransform": [[1, 0, 12.5], [0, 1, 293]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "DesktopSections",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                    "width": 544, "height": 386,
                    "relativeTransform": [[1, 0, 28], [0, 1, 842]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "S&E",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 16, "paddingBottom": 0, "paddingLeft": 16,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_RADIAL",
                            "gradientStops": [
                              {
                                "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 1 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                -0.2067427635192871,
                                0.20742613077163696,
                                0.7371362447738647
                              ],
                              [
                                -0.33528202772140503,
                                -0.33409741520881653,
                                0.8394749164581299
                              ]
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
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 264, "height": 386,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "Header",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 264, "height": 239,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "Decoration",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7779240608215332, "g": 0.3468055725097656, "b": 0.9458333253860474, "a": 1 },
                                        "position": 0.171875,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7764706015586853, "g": 0.3450980484485626, "b": 0.9450980424880981, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [
                                      [
                                        1.2872340679168701,
                                        1.0269562977782698e-14,
                                        -0.28723403811454773
                                      ],
                                      [
                                        -1.1102230246251565e-16,
                                        0.0000041047005652217194,
                                        0.4999958872795105
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
                                "width": 264, "height": 3,
                                "relativeTransform": [[1, 0, 0], [0, -1, 3]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "Title",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "PRICELESS MOMENTS", "fontSize": 24,
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
                                "letterSpacing": { "unit": "PIXELS", "value": 1 },
                                "lineHeight": { "unit": "PERCENT", "value": 89.99999761581421 },
                                "font": { "family": "Champions Web", "style": "Regular" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 17,
                                    "font": { "family": "Champions Web", "style": "Regular" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 24
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 232, "height": 71,
                                "relativeTransform": [[1, 0, 16], [0, 1, 3]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "FRAME",
                              "name": "Thumbnail",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "layoutMode": "NONE",
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "FIXED",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 264, "height": 165,
                                "relativeTransform": [[1, 0, 0], [0, 1, 74]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Thumbnail",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "x": -6, "y": 0,
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                        "scaleMode": "CROP",
                                        "imageTransform": [
                                          [ 0.9718309640884399, 0, 0.023415567353367805 ],
                                          [ 0, 0.8714788556098938, 0.013872835785150528 ]
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
                                        "originalImageHash": "1bd5b2055c5ec846dda606f5220e0249ae970b12",
                                        "assetRef": IMG_NewsletterTemplate_img_5_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 276, "height": 165,
                                    "relativeTransform": [[1, 0, -6], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  }
                                },
                                {
                                  "type": "FRAME",
                                  "name": "AV / play-circle-negative",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "x": 108, "y": 58,
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
                                    "width": 48, "height": 48,
                                    "relativeTransform": [[1, 0, 108], [0, 1, 58]],
                                    "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
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
                                        "x": 4, "y": 4,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 1, "g": 1, "b": 1 },
                                            "boundVariables": {
                                              "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5777f4f7711fa0bb602b044c8a6637c746309755/3505:246" }
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 40, "height": 40,
                                        "relativeTransform": [[1, 0, 4], [0, 1, 4]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18292_1238_12105_1004_90_svg_orig
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "pk-button",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "HORIZONTAL", "itemSpacing": 12.023965835571289, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 12, "paddingRight": 18, "paddingBottom": 12, "paddingLeft": 18,
                            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                            "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 1.6078141927719116, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.6078141927719116, "strokeRightWeight": 1.6078141927719116, "strokeBottomWeight": 1.6078141927719116, "strokeLeftWeight": 1.6078141927719116,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [],
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.5493977665901184, "g": 1, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 8,
                            "layoutSizingVertical": "HUG",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 232, "height": 54,
                            "relativeTransform": [[1, 0, 16], [0, 1, 255]],
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
                                "layoutAlign": "INHERIT", "layoutGrow": 1,
                                "characters": "Watch now", "fontSize": 22,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                "paragraphSpacing": 13.98717975616455, "paragraphIndent": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0.5493977665901184, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                "lineHeight": { "unit": "AUTO" },
                                "font": { "family": "Manrope", "style": "SemiBold" },
                                "layoutSizingHorizontal": "FILL",
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 9,
                                    "font": { "family": "Manrope", "style": "SemiBold" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 0.5493977665901184, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 22
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196, "height": 30,
                                "relativeTransform": [[1, 0, 18], [0, 1, 12]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "CENTER" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "Frame 2609219",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "HUG",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 139, "height": 28.8,
                            "relativeTransform": [[1, 0, 62.5], [0, 1, 325]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "TEXT",
                              "name": "Exclusive live match",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "Presented by", "fontSize": 14,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
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
                                "lineHeight": { "unit": "PIXELS", "value": 20 },
                                "font": { "family": "Arial", "style": "Regular" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 12,
                                    "font": { "family": "Arial", "style": "Regular" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 14
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 83, "height": 20,
                                "relativeTransform": [[1, 0, 0], [0, 1, 4.4]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "FRAME",
                              "name": "Mastercard",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                                "width": 48, "height": 28.8,
                                "relativeTransform": [[1, 0, 91], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                                        "originalImageHash": "d7b02def6493da6b45dbb67283663d8939cd9d74",
                                        "assetRef": IMG_NewsletterTemplate_img_7_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 48, "height": 28.8,
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
                      "name": "S&E",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 16, "paddingBottom": 0, "paddingLeft": 16,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_RADIAL",
                            "gradientStops": [
                              {
                                "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 1 },
                                "position": 0,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                -0.2067427635192871,
                                0.20742613077163696,
                                0.7371362447738647
                              ],
                              [
                                -0.33528202772140503,
                                -0.33409741520881653,
                                0.8394749164581299
                              ]
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
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 264, "height": 386,
                        "relativeTransform": [[1, 0, 280], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "Header",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 264, "height": 239,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "RECTANGLE",
                              "name": "Decoration",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                                    "gradientStops": [
                                      {
                                        "color": { "r": 0.7779240608215332, "g": 0.3468055725097656, "b": 0.9458333253860474, "a": 1 },
                                        "position": 0.171875,
                                        "boundVariables": {}
                                      },
                                      {
                                        "color": { "r": 0.7764706015586853, "g": 0.3450980484485626, "b": 0.9450980424880981, "a": 0 },
                                        "position": 1,
                                        "boundVariables": {}
                                      }
                                    ],
                                    "gradientTransform": [
                                      [
                                        1.2872340679168701,
                                        1.0269562977782698e-14,
                                        -0.28723403811454773
                                      ],
                                      [
                                        -1.1102230246251565e-16,
                                        0.0000041047005652217194,
                                        0.4999958872795105
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
                                "width": 264, "height": 3,
                                "relativeTransform": [[1, 0, 0], [0, -1, 3]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "Title",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "PRICELESS MOMENTS", "fontSize": 24,
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
                                "letterSpacing": { "unit": "PIXELS", "value": 1 },
                                "lineHeight": { "unit": "PERCENT", "value": 89.99999761581421 },
                                "font": { "family": "Champions Web", "style": "Regular" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 17,
                                    "font": { "family": "Champions Web", "style": "Regular" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 24
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 232, "height": 71,
                                "relativeTransform": [[1, 0, 16], [0, 1, 3]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "FRAME",
                              "name": "Thumbnail",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "layoutMode": "NONE",
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "FIXED",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 264, "height": 165,
                                "relativeTransform": [[1, 0, 0], [0, 1, 74]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Thumbnail",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "x": -6, "y": 0,
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                        "scaleMode": "CROP",
                                        "imageTransform": [
                                          [ 0.9718309640884399, 0, 0.023415567353367805 ],
                                          [ 0, 0.8714788556098938, 0.013872835785150528 ]
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
                                        "originalImageHash": "1bd5b2055c5ec846dda606f5220e0249ae970b12",
                                        "assetRef": IMG_NewsletterTemplate_img_6_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 276, "height": 165,
                                    "relativeTransform": [[1, 0, -6], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  }
                                },
                                {
                                  "type": "FRAME",
                                  "name": "AV / play-circle-negative",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "x": 108, "y": 58,
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
                                    "width": 48, "height": 48,
                                    "relativeTransform": [[1, 0, 108], [0, 1, 58]],
                                    "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
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
                                        "x": 4, "y": 4,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 1, "g": 1, "b": 1 },
                                            "boundVariables": {
                                              "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5777f4f7711fa0bb602b044c8a6637c746309755/3505:246" }
                                            }
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 40, "height": 40,
                                        "relativeTransform": [[1, 0, 4], [0, 1, 4]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18293_1238_12105_1004_90_svg_orig
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "pk-button",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "HORIZONTAL", "itemSpacing": 12.023965835571289, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 12, "paddingRight": 18, "paddingBottom": 12, "paddingLeft": 18,
                            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                            "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                            "strokeWeight": 1.6078141927719116, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1.6078141927719116, "strokeRightWeight": 1.6078141927719116, "strokeBottomWeight": 1.6078141927719116, "strokeLeftWeight": 1.6078141927719116,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [],
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.5493977665901184, "g": 1, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 8,
                            "layoutSizingVertical": "HUG",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 232, "height": 54,
                            "relativeTransform": [[1, 0, 16], [0, 1, 255]],
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
                                "layoutAlign": "INHERIT", "layoutGrow": 1,
                                "characters": "Watch now", "fontSize": 22,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                "paragraphSpacing": 13.98717975616455, "paragraphIndent": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0.5493977665901184, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                "lineHeight": { "unit": "AUTO" },
                                "font": { "family": "Manrope", "style": "SemiBold" },
                                "layoutSizingHorizontal": "FILL",
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 9,
                                    "font": { "family": "Manrope", "style": "SemiBold" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 0.5493977665901184, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 22
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 196, "height": 30,
                                "relativeTransform": [[1, 0, 18], [0, 1, 12]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "CENTER" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "Frame 2609219",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "HUG",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 139, "height": 28.8,
                            "relativeTransform": [[1, 0, 62.5], [0, 1, 325]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "TEXT",
                              "name": "Exclusive live match",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "characters": "Presented by", "fontSize": 14,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
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
                                "lineHeight": { "unit": "PIXELS", "value": 20 },
                                "font": { "family": "Arial", "style": "Regular" },
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 12,
                                    "font": { "family": "Arial", "style": "Regular" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 14
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 83, "height": 20,
                                "relativeTransform": [[1, 0, 0], [0, 1, 4.4]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            },
                            {
                              "type": "FRAME",
                              "name": "Mastercard",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                                "width": 48, "height": 28.8,
                                "relativeTransform": [[1, 0, 91], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                                        "originalImageHash": "d7b02def6493da6b45dbb67283663d8939cd9d74",
                                        "assetRef": IMG_NewsletterTemplate_img_8_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 48, "height": 28.8,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
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
            },
            {
              "type": "FRAME",
              "name": "Footer",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
                    "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807 },
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
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 600, "height": 692.8124,
                "relativeTransform": [[1, 0, 0], [0, 1, 1956]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Top separator",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                    "layoutMode": "NONE",
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0,
                    "layoutSizingVertical": "FIXED",
                    "layoutSizingHorizontal": "FILL"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 600, "height": 69,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Frame 2609184",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": 0, "y": 6,
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
                        "width": 600, "height": 123,
                        "relativeTransform": [[1, 0, 0], [0, 1, 6]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "RECTANGLE",
                          "name": "UCL_2024-27_Ultimate Stage_DividerLandscape_RGB",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "x": 601.68359375, "y": 357.6748046875,
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
                                "assetRef": IMG_NewsletterTemplate_img_3_opt_png
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 670.4823, "height": 364.8927,
                            "relativeTransform": [[-0.9998, 0.0192, 601.6836], [-0.0192, -0.9998, 357.6748]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        }
                      ]
                    },
                    {
                      "type": "RECTANGLE",
                      "name": "image ",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.873677134513855, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.873677134513855, "strokeRightWeight": 0.873677134513855, "strokeBottomWeight": 0.873677134513855, "strokeLeftWeight": 0.873677134513855,
                        "x": 0, "y": 28,
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
                                "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 0.25999999046325684 },
                                "position": 0.32046592235565186,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 0.75 },
                                "position": 0.649724543094635,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 1 },
                                "position": 1,
                                "boundVariables": {}
                              }
                            ],
                            "gradientTransform": [
                              [
                                0.27413156628608704,
                                0.8363124132156372,
                                0.041881076991558075
                              ],
                              [
                                -0.900881826877594,
                                0.0013838768936693668,
                                0.8989102244377136
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
                        "relativeTransform": [[1, 0, 0], [0, 1, 28]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      }
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "Content",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": true, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 24, "paddingBottom": 0, "paddingLeft": 24,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                    "fills": [
                      {
                        "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0,
                    "layoutSizingVertical": "HUG",
                    "layoutSizingHorizontal": "FILL"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 600, "height": 455.8124,
                    "relativeTransform": [[1, 0, 0], [0, 1, 93]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Competition logo",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 3.2115869522094727, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
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
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 100.5333, "height": 44.3502,
                        "relativeTransform": [[1, 0, 249.7333], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "svgContent": SVG_NewsletterTemplate_assets_vector_Competition_logo_I2266_103700_861_834_svg_orig
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
                        "layoutSizingVertical": "HUG",
                        "layoutSizingHorizontal": "FILL"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 552, "height": 148,
                        "relativeTransform": [[1, 0, 24], [0, 1, 68.3502]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "TEXT",
                          "name": "Text",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "characters": "Official UEFA Champions League sponsors", "fontSize": 18,
                            "textCase": "ORIGINAL", "textDecoration": "NONE",
                            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                            "paragraphSpacing": 16, "paragraphIndent": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 1, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "layoutSizingVertical": "HUG",
                            "letterSpacing": { "unit": "PIXELS", "value": 0 },
                            "lineHeight": { "unit": "PERCENT", "value": 110.00000238418579 },
                            "font": { "family": "Arial", "style": "Bold" },
                            "layoutSizingHorizontal": "FILL",
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 39,
                                "font": { "family": "Arial", "style": "Bold" },
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
                            "width": 552, "height": 20,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        },
                        {
                          "type": "FRAME",
                          "name": "SRP",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                            "strokeWeight": 0.6250000596046448, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 0.6250000596046448, "strokeRightWeight": 0.6250000596046448, "strokeBottomWeight": 0.6250000596046448, "strokeLeftWeight": 0.6250000596046448,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "counterAxisSpacing": 4,
                            "layoutWrap": "WRAP",
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
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 286, "height": 64,
                            "relativeTransform": [[1, 0, 133], [0, 1, 36]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "Heineken",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                    "x": 0, "y": 0,
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                        "scaleMode": "CROP",
                                        "imageTransform": [[1, 0, 0], [0, 1, 0]],
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
                                        "imageHash": "4822bfa1b92b7783215cf8130f455826898d3690"
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 54, "height": 30,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Playstation PS5",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 58], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                        "imageHash": "366a9d63d3d85c85ed7b214f6205054d5683869b"
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 54, "height": 30,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Lays",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 116], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
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
                                        "originalImageHash": "ea5c26d5ea618355b40ada62d5e7bf516a487faa",
                                        "assetRef": IMG_NewsletterTemplate_img_10_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 54, "height": 30,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Fedex",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 174], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Fedex",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
                                    "x": 0, "y": 0,
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
                                    "width": 54, "height": 30,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "children": [
                                    {
                                      "type": "RECTANGLE",
                                      "name": "Sponsor",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                        "x": 0, "y": -4.6974766741356144e-14,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                            "scaleMode": "CROP",
                                            "imageTransform": [[1, 0, 0], [0, 1, 0]],
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
                                            "originalImageHash": "890fe730abc703b902a86464ac56c6f174b916c9",
                                            "assetRef": IMG_NewsletterTemplate_img_16_png
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 54, "height": 30,
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
                              "name": "Mastercard",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 232], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                        "originalImageHash": "d7b02def6493da6b45dbb67283663d8939cd9d74",
                                        "assetRef": IMG_NewsletterTemplate_img_9_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 54, "height": 30,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Crypto.com",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "layoutMode": "NONE",
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 1.8888888359069824,
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "FIXED"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 29], [0, 1, 34]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.2361111044883728, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.2361111044883728, "strokeRightWeight": 0.2361111044883728, "strokeBottomWeight": 0.2361111044883728, "strokeLeftWeight": 0.2361111044883728,
                                    "x": 0, "y": 0,
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                        "scaleMode": "FILL",
                                        "imageTransform": [
                                          [ 0.7902885675430298, 0, 0.10617572069168091 ],
                                          [ 0, 0.7805321216583252, 0.10708149522542953 ]
                                        ],
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
                                        "imageHash": "c836af58bccf776d6924b03d35509d9b7ec9ccae"
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 1.8888888359069824
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 54, "height": 30,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Followscores",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 87], [0, 1, 34]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsors",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                        "originalImageHash": "2423dc611d262fac14e8b9d020e0fbd0ac2de17a",
                                        "assetRef": IMG_NewsletterTemplate_img_11_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 54, "height": 30,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Takeaway",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 145], [0, 1, 34]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                        "originalImageHash": "9f840b218d7c7c5515420858d8538733edc355de",
                                        "assetRef": IMG_NewsletterTemplate_img_12_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 1.8888888359069824
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 54, "height": 30,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Qatar Airways",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "layoutMode": "NONE",
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 1.8888888359069824,
                                "layoutSizingHorizontal": "FIXED",
                                "layoutSizingVertical": "FIXED"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 54, "height": 30,
                                "relativeTransform": [[1, 0, 203], [0, 1, 34]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "RECTANGLE",
                                  "name": "Sponsor",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.2361111044883728, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0.2361111044883728, "strokeRightWeight": 0.2361111044883728, "strokeBottomWeight": 0.2361111044883728, "strokeLeftWeight": 0.2361111044883728,
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
                                        "originalImageHash": "faffb022ef43fbbbf4d4392304ae8b3e5b310094",
                                        "assetRef": IMG_NewsletterTemplate_img_13_png
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 1.8888888359069824
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 54, "height": 30,
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
                          "name": "Social",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                            "width": 224, "height": 32,
                            "relativeTransform": [[1, 0, 164], [0, 1, 116]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "Social / instagram",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 32, "height": 32,
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
                                    "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "x": 2.6666667461395264, "y": 2.6666667461395264,
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
                                    "width": 26.6667, "height": 26.6667,
                                    "relativeTransform": [[1, 0, 2.6667], [0, 1, 2.6667]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58190_1004_406_svg_orig
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Social / twitter-X",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 32, "height": 32,
                                "relativeTransform": [[1, 0, 48], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "VECTOR",
                                  "shouldFlatten": true,
                                  "name": "path1009",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "x": 4, "y": 4,
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
                                    "width": 24, "height": 24,
                                    "relativeTransform": [[1, 0, 4], [0, 1, 4]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "svgContent": SVG_NewsletterTemplate_assets_icon_path1009_I2266_103700_2467_59807_2455_58196_4821_19_svg_orig
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Social / facebook",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 32, "height": 32,
                                "relativeTransform": [[1, 0, 96], [0, 1, 0]],
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
                                    "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "x": 2.6666667461395264, "y": 2.6666667461395264,
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
                                    "width": 26.6667, "height": 26.6667,
                                    "relativeTransform": [[1, 0, 2.6667], [0, 1, 2.6667]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58198_1004_402_svg_orig
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Social / tik-tok-circle",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.4722222089767456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.4722222089767456, "strokeRightWeight": 0.4722222089767456, "strokeBottomWeight": 0.4722222089767456, "strokeLeftWeight": 0.4722222089767456,
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
                                "width": 32, "height": 32,
                                "relativeTransform": [[1, 0, 144], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "VECTOR",
                                  "shouldFlatten": true,
                                  "name": "Union",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.016341395676136017, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "x": 2.6666667461395264, "y": 2.6666667461395264,
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
                                    "width": 26.6667, "height": 26.6667,
                                    "relativeTransform": [[1, 0, 2.6667], [0, 1, 2.6667]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "svgContent": SVG_NewsletterTemplate_assets_icon_Union_I2266_103700_2467_59807_2455_58200_3372_10836_svg_orig
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Social / youtube",
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
                                "width": 32, "height": 32,
                                "relativeTransform": [[1, 0, 192], [0, 1, 0]],
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
                                    "x": 2.6666667461395264, "y": 6.666666507720947,
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
                                    "width": 26.6666, "height": 18.6709,
                                    "relativeTransform": [[1, 0, 2.6667], [0, 1, 6.6667]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58202_1004_407_svg_orig
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "RECTANGLE",
                      "name": "Separator",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
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
                                "color": { "r": 0.7568627595901489, "g": 0.7607843279838562, "b": 0.8352941274642944, "a": 1 },
                                "position": 0.3229166567325592,
                                "boundVariables": {}
                              },
                              {
                                "color": { "r": 0.7568627595901489, "g": 0.7607843279838562, "b": 0.8352941274642944, "a": 1 },
                                "position": 0.703125,
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
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 544.4003, "height": 0.4622,
                        "relativeTransform": [[1, 0, 27.7998], [0, 1, 240.3502]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      }
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
                        "layoutSizingVertical": "HUG",
                        "layoutSizingHorizontal": "FILL"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 552, "height": 191,
                        "relativeTransform": [[1, 0, 24], [0, 1, 264.8124]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "TEXT",
                          "name": "Text",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
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
                            "layoutSizingVertical": "HUG",
                            "fontSize": 14,
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "PERCENT", "value": 150 },
                            "layoutSizingHorizontal": "FILL",
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 29,
                                "font": { "family": "Arial", "style": "Bold" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              },
                              {
                                "start": 29,
                                "end": 102,
                                "font": { "family": "Arial", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 552, "height": 42,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        },
                        {
                          "type": "TEXT",
                          "name": "Text",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
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
                            "layoutSizingVertical": "HUG",
                            "fontSize": 14,
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "PERCENT", "value": 150 },
                            "textCase": "ORIGINAL",
                            "layoutSizingHorizontal": "FILL",
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 41,
                                "font": { "family": "Arial", "style": "Bold" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              },
                              {
                                "start": 41,
                                "end": 49,
                                "font": { "family": "Arial", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              },
                              {
                                "start": 49,
                                "end": 60,
                                "font": { "family": "Arial", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              },
                              {
                                "start": 60,
                                "end": 193,
                                "font": { "family": "Arial", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              },
                              {
                                "start": 193,
                                "end": 207,
                                "font": { "family": "Arial", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              },
                              {
                                "start": 207,
                                "end": 208,
                                "font": { "family": "Arial", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 552, "height": 63,
                            "relativeTransform": [[1, 0, 0], [0, 1, 58]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        },
                        {
                          "type": "TEXT",
                          "name": "Text",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
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
                            "layoutSizingVertical": "HUG",
                            "fontSize": 14,
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                            "font": { "family": "Arial", "style": "Regular" },
                            "layoutSizingHorizontal": "FILL",
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 141,
                                "font": { "family": "Arial", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 552, "height": 54,
                            "relativeTransform": [[1, 0, 0], [0, 1, 137]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "RECTANGLE",
                  "name": "UCL_2024-27_UltimateStage_Aerial_VectorRich_FC_DarkBlueBG_RGB_Reference",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                        "scaleMode": "CROP",
                        "imageTransform": [[1, 0, 0], [0, 0.2002152055501938, 0.14515602588653564]],
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
                        "originalImageHash": "d4beef33e5c9ed97e11d1e3be5399fd8a67e1980",
                        "assetRef": IMG_NewsletterTemplate_img_1_png
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 600, "height": 120,
                    "relativeTransform": [[1, 0, 0], [0, 1, 572.8124]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
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

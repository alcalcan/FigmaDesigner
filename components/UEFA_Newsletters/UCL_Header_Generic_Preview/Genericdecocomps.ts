import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_generic_preview_header_img_1_opt_png from "././assets/generic_preview_header_img_1_opt.png";
import IMG_generic_preview_header_img_2_opt_png from "././assets/generic_preview_header_img_2_opt.png";
import IMG_generic_preview_header_img_3_opt_png from "././assets/generic_preview_header_img_3_opt.png";
import IMG_generic_preview_header_img_4_png from "././assets/generic_preview_header_img_4.png";
import IMG_generic_preview_header_img_5_png from "././assets/generic_preview_header_img_5.png";
import IMG_generic_preview_header_img_6_png from "././assets/generic_preview_header_img_6.png";
import IMG_generic_preview_header_img_7_png from "././assets/generic_preview_header_img_7.png";
import SVG_generic_preview_header_Synth_Ellipse2300_0 from "./assets/generic_preview_header_Synth_Ellipse2300_0.svg";
import SVG_generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig from "./assets/generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig.svg";

export class Genericdecocomps extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
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
            };
    
    const root = await this.renderDefinition(structure);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}

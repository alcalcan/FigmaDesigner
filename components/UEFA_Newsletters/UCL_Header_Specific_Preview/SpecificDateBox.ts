import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_specific_preview_header_img_1_opt_png from "././assets/specific_preview_header_img_1_opt.png";
import IMG_specific_preview_header_img_2_opt_png from "././assets/specific_preview_header_img_2_opt.png";
import IMG_specific_preview_header_img_6_opt_png from "././assets/specific_preview_header_img_6_opt.png";
import IMG_specific_preview_header_img_5_png from "././assets/specific_preview_header_img_5.png";
import IMG_specific_preview_header_img_3_png from "././assets/specific_preview_header_img_3.png";
import IMG_specific_preview_header_img_4_png from "././assets/specific_preview_header_img_4.png";
import SVG_specific_preview_header_Synth_Ellipse2300_0 from "./assets/specific_preview_header_Synth_Ellipse2300_0.svg";
import SVG_specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig from "./assets/specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig.svg";
import SVG_specific_preview_header_assets_icon_Logo_2077_2769_svg_orig from "./assets/specific_preview_header_assets_icon_Logo_2077_2769_svg_orig.svg";

export class SpecificDateBox extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
              "type": "FRAME",
              "name": "DateBox",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "strokeWeight": 1.1785714626312256, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1.1785714626312256, "strokeRightWeight": 1.1785714626312256, "strokeBottomWeight": 1.1785714626312256, "strokeLeftWeight": 1.1785714626312256,
                "x": 163, "y": 441,
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
                "width": 273.4286, "height": 66,
                "relativeTransform": [[1, 0, 163], [0, 1, 441]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "date_hour",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "VERTICAL", "itemSpacing": 4.1198554039001465, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 2.357142925262451, "paddingRight": 14.142857551574707, "paddingBottom": 7.0714287757873535, "paddingLeft": 14.142857551574707,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 0.5149819254875183, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.5149819254875183, "strokeRightWeight": 0.5149819254875183, "strokeBottomWeight": 0.5149819254875183, "strokeLeftWeight": 0.5149819254875183,
                    "x": -66, "y": 3,
                    "counterAxisSpacing": 0,
                    "layoutWrap": "NO_WRAP",
                    "counterAxisAlignContent": "AUTO",
                    "gridRowCount": 0,
                    "gridColumnCount": 0,
                    "gridRowGap": 0,
                    "gridColumnGap": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 0.4000000059604645, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.40784314274787903, "g": 0, "b": 0.8039215803146362 },
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
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 406, "height": 60.4286,
                    "relativeTransform": [[1, 0, -66], [0, 1, 3]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "TEXT",
                      "name": "28 AUGUST, 18:00 CET",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.2567676901817322, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "28 AUGUST, 18:00 CET", "fontSize": 42.62343978881836,
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
                        "lineHeight": { "unit": "AUTO" },
                        "font": { "family": "Champions", "style": "Display" },
                        "richTextSpans": [
                          {
                            "start": 0,
                            "end": 20,
                            "font": { "family": "Champions", "style": "Display" },
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 1, "g": 1, "b": 1 },
                                "boundVariables": {}
                              }
                            ],
                            "fontSize": 42.62343978881836
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 243, "height": 51,
                        "relativeTransform": [[1, 0, 81.5], [0, 1, 2.3571]],
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
                    "strokeWeight": 0.2700112462043762, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.2700112462043762, "strokeRightWeight": 0.2700112462043762, "strokeBottomWeight": 0.2700112462043762, "strokeLeftWeight": 0.2700112462043762,
                    "x": 24.750558853149414, "y": 0,
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
                    "width": 223.9286, "height": 5.8929,
                    "relativeTransform": [[1, 0, 24.7506], [0, 1, 0]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
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
                        "x": 1.6210570335388184, "y": 2.693938732147217,
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
                        "width": 236.1394, "height": 0.7876,
                        "relativeTransform": [[1, 0, 1.6211], [0, 1, 2.6939]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
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
                    "strokeWeight": 0.2700112462043762, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0.2700112462043762, "strokeRightWeight": 0.2700112462043762, "strokeBottomWeight": 0.2700112462043762, "strokeLeftWeight": 0.2700112462043762,
                    "x": 24.750558853149414, "y": 60.10714340209961,
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
                    "width": 223.9286, "height": 5.8929,
                    "relativeTransform": [[1, 0, 24.7506], [0, 1, 60.1071]],
                    "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
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
                        "x": 1.6210570335388184, "y": 2.693938732147217,
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
                        "width": 236.1394, "height": 0.7876,
                        "relativeTransform": [[1, 0, 1.6211], [0, 1, 2.6939]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
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

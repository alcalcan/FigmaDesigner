import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_Proposal_notification_img_1_opt_png from "././assets/Proposal_notification_img_1_opt.png";
import IMG_Proposal_notification_img_8_png from "././assets/Proposal_notification_img_8.png";
import IMG_Proposal_notification_img_9_png from "././assets/Proposal_notification_img_9.png";
import IMG_Proposal_notification_img_7_png from "././assets/Proposal_notification_img_7.png";
import IMG_Proposal_notification_img_2_png from "././assets/Proposal_notification_img_2.png";
import IMG_Proposal_notification_img_3_png from "././assets/Proposal_notification_img_3.png";
import IMG_Proposal_notification_img_4_png from "././assets/Proposal_notification_img_4.png";
import IMG_Proposal_notification_img_5_png from "././assets/Proposal_notification_img_5.png";
import IMG_Proposal_notification_img_6_png from "././assets/Proposal_notification_img_6.png";
import IMG_Proposal_notification_img_10_png from "././assets/Proposal_notification_img_10.png";
import SVG_Proposal_notification_assets_icon_Group_19_3379_17575_svg_orig from "./assets/Proposal_notification_assets_icon_Group_19_3379_17575_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector_3379_18133_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_3379_18133_svg_orig.svg";
import SVG_Proposal_notification_Synth_VectorStroke_2 from "./assets/Proposal_notification_Synth_VectorStroke_2.svg";
import SVG_Proposal_notification_Synth_VectorStroke_3 from "./assets/Proposal_notification_Synth_VectorStroke_3.svg";
import SVG_Proposal_notification_Synth_VectorStroke_4 from "./assets/Proposal_notification_Synth_VectorStroke_4.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3383_3749_1004_374_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3383_3749_1004_374_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3384_160_5086_20_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3384_160_5086_20_svg_orig.svg";
import SVG_Proposal_notification_Synth_Shape_7 from "./assets/Proposal_notification_Synth_Shape_7.svg";
import SVG_Proposal_notification_BOLD_CHEVRON_FIX_10x6 from "./assets/Proposal_notification_BOLD_CHEVRON_FIX_10x6.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3383_3719_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3383_3719_3016_7769_svg_orig.svg";
import SVG_Proposal_notification_Synth_Vector_12 from "./assets/Proposal_notification_Synth_Vector_12.svg";
import SVG_Proposal_notification_Synth_Vector_13 from "./assets/Proposal_notification_Synth_Vector_13.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig.svg";
import SVG_Proposal_notification_Synth_Vector_15 from "./assets/Proposal_notification_Synth_Vector_15.svg";
import SVG_Proposal_notification_Synth_Vector_16 from "./assets/Proposal_notification_Synth_Vector_16.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17212_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3379_17212_3016_7769_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17214_7515_31651_7461_30655_70_441_svg_10x6_override from "./assets/Proposal_notification_assets_icon_Shape_I3379_17214_7515_31651_7461_30655_70_441_svg_10x6_override.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_4_70_475_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17215_214_4_70_475_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_10_70_471_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17215_214_10_70_471_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17219_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3379_17219_3016_7769_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Rectangle_77_Copy_7_I3379_17221_7466_30959_svg_orig from "./assets/Proposal_notification_assets_icon_Rectangle_77_Copy_7_I3379_17221_7466_30959_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Oval_1_Copy_13_I3379_17221_7466_30960_svg_orig from "./assets/Proposal_notification_assets_icon_Oval_1_Copy_13_I3379_17221_7466_30960_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Shape_I3379_17221_7466_30966_svg_orig from "./assets/Proposal_notification_assets_icon_Shape_I3379_17221_7466_30966_svg_orig.svg";
import SVG_Proposal_notification_Synth_Path_25 from "./assets/Proposal_notification_Synth_Path_25.svg";
import SVG_Proposal_notification_Synth_Path_26 from "./assets/Proposal_notification_Synth_Path_26.svg";
import SVG_Proposal_notification_Synth_Path_27 from "./assets/Proposal_notification_Synth_Path_27.svg";
import SVG_Proposal_notification_Synth_Shape_28 from "./assets/Proposal_notification_Synth_Shape_28.svg";
import SVG_Proposal_notification_assets_icon_Union_I3379_17230_5250_18144_svg_orig from "./assets/Proposal_notification_assets_icon_Union_I3379_17230_5250_18144_svg_orig.svg";
import SVG_Proposal_notification_Synth_Path_30 from "./assets/Proposal_notification_Synth_Path_30.svg";
import SVG_Proposal_notification_Synth_Path_31 from "./assets/Proposal_notification_Synth_Path_31.svg";
import SVG_Proposal_notification_Synth_Path_32 from "./assets/Proposal_notification_Synth_Path_32.svg";
import SVG_Proposal_notification_Synth_Path_33 from "./assets/Proposal_notification_Synth_Path_33.svg";
import SVG_Proposal_notification_Synth_Path_34 from "./assets/Proposal_notification_Synth_Path_34.svg";
import SVG_Proposal_notification_Synth_Path_35 from "./assets/Proposal_notification_Synth_Path_35.svg";
import SVG_Proposal_notification_Synth_Path_36 from "./assets/Proposal_notification_Synth_Path_36.svg";
import SVG_Proposal_notification_Synth_Path_37 from "./assets/Proposal_notification_Synth_Path_37.svg";
import SVG_Proposal_notification_Synth_Path_38 from "./assets/Proposal_notification_Synth_Path_38.svg";
import SVG_Proposal_notification_Synth_Path_39 from "./assets/Proposal_notification_Synth_Path_39.svg";
import SVG_Proposal_notification_Synth_Path_40 from "./assets/Proposal_notification_Synth_Path_40.svg";
import SVG_Proposal_notification_Synth_Path_41 from "./assets/Proposal_notification_Synth_Path_41.svg";
import SVG_Proposal_notification_Synth_Path_42 from "./assets/Proposal_notification_Synth_Path_42.svg";
import SVG_Proposal_notification_Synth_Path_43 from "./assets/Proposal_notification_Synth_Path_43.svg";
import SVG_Proposal_notification_Synth_Path_44 from "./assets/Proposal_notification_Synth_Path_44.svg";
import SVG_Proposal_notification_Synth_Path_45 from "./assets/Proposal_notification_Synth_Path_45.svg";
import SVG_Proposal_notification_assets_icon_Union_I3379_17261_5250_18144_svg_orig from "./assets/Proposal_notification_assets_icon_Union_I3379_17261_5250_18144_svg_orig.svg";
import SVG_Proposal_notification_assets_vector_Clip_path_group_I3379_17335_1248_24614_svg_orig from "./assets/Proposal_notification_assets_vector_Clip_path_group_I3379_17335_1248_24614_svg_orig.svg";


export class Proposal_notification extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "Proposal notification",
    "props": {
      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
      "layoutMode": "VERTICAL", "itemSpacing": 53, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
    "layoutProps": { "width": 1680, "height": 2739, "parentIsAutoLayout": false },
    "children": [
      {
        "type": "FRAME",
        "name": "Frame 1859",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
          "layoutSizingVertical": "HUG"
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 1680, "height": 2739,
          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
        },
        "children": [
          {
            "type": "FRAME",
            "name": "Top bar",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "HORIZONTAL", "itemSpacing": 77, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 8, "paddingRight": 40, "paddingBottom": 8, "paddingLeft": 40,
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
              "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
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
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                  "color": { "r": 0.9490196108818054, "g": 0.9529411792755127, "b": 0.95686274766922 },
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
              "width": 1680, "height": 40,
              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Frame 1607",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "HORIZONTAL", "itemSpacing": 23, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                  "width": 160, "height": 21,
                  "relativeTransform": [[1, 0, 40], [0, 1, 9.5]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1837",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                      "layoutSizingHorizontal": "HUG",
                      "layoutSizingVertical": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 160, "height": 21,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "GROUP",
                        "name": "Group 19",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "effects": []
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 54, "height": 16,
                          "relativeTransform": [[1, 0, 0], [0, 1, 2.5]]
                        },
                        "svgContent": SVG_Proposal_notification_assets_icon_Group_19_3379_17575_svg_orig
                      },
                      {
                        "type": "LINE",
                        "name": "Line 39",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "STRETCH", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0, "g": 0, "b": 0 },
                              "boundVariables": {}
                            }
                          ],
                          "effects": []
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 21, "height": 0,
                          "relativeTransform": [[0, -1, 66], [1, 0, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1614",
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
                          "width": 82, "height": 21,
                          "relativeTransform": [[1, 0, 78], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "Resources",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "Resources", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 21 },
                              "font": { "family": "Open Sans", "style": "Bold" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 9,
                                  "font": { "family": "Open Sans", "style": "Bold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 82, "height": 21,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
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
                "name": "Frame 1838",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                  "layoutSizingHorizontal": "FIXED",
                  "layoutSizingVertical": "FILL"
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 950.6206, "height": 24,
                  "relativeTransform": [[1, 0, 689.3794], [0, 1, 8]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1944",
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
                      "width": 24, "height": 24,
                      "relativeTransform": [[1, 0, 750.6206], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Notifications / notifications-none",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
                          "width": 24, "height": 24,
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
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 4.5, "y": 2.5,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0, "b": 0 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 15, "height": 19.1923,
                              "relativeTransform": [[1, 0, 4.5], [0, 1, 2.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "svgContent": SVG_Proposal_notification_assets_icon_Vector_3379_18133_svg_orig
                          }
                        ]
                      },
                      {
                        "type": "ELLIPSE",
                        "name": "Ellipse 1",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "x": 16, "y": 16,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 0.23137255012989044, "b": 0.23137255012989044 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                          "width": 8, "height": 8,
                          "relativeTransform": [[1, 0, 16], [0, 1, 16]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Frame 1612",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                      "layoutSizingHorizontal": "HUG",
                      "layoutSizingVertical": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 104, "height": 24,
                      "relativeTransform": [[1, 0, 798.6206], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Frame 1612",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                          "layoutSizingHorizontal": "HUG",
                          "layoutSizingVertical": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 104, "height": 24,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Frame 1618",
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
                              "width": 88, "height": 24,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "pk-avatar",
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
                                  "width": 24, "height": 24,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "ELLIPSE",
                                    "name": "Ellipse 22",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 0, "y": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 },
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
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                    }
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "FW",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 2.473090410232544, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "characters": "JD", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                                      "paragraphSpacing": 14, "paragraphIndent": 0,
                                      "x": 3.5, "y": 2,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.2705882489681244, "g": 0.3607843220233917, "b": 0.40392157435417175 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingHorizontal": "FIXED",
                                      "layoutSizingVertical": "FIXED",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PERCENT", "value": 150 },
                                      "font": { "family": "Manrope", "style": "Bold" },
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 2,
                                          "font": { "family": "Manrope", "style": "Bold" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.2705882489681244, "g": 0.3607843220233917, "b": 0.40392157435417175 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 17, "height": 21,
                                      "relativeTransform": [[1, 0, 3.5], [0, 1, 2]],
                                      "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "TEXT",
                                "name": "John Doe",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                                  "characters": "John Doe", "fontSize": 14,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 21 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 8,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 14
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 60, "height": 21,
                                  "relativeTransform": [[1, 0, 28], [0, 1, 1.5]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                }
                              }
                            ]
                          },
                          {
                            "type": "LINE",
                            "name": "Line 43",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "STRETCH", "layoutGrow": 0,
                              "fills": [],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 },
                                  "boundVariables": {}
                                }
                              ],
                              "effects": []
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 24, "height": 0,
                              "relativeTransform": [[0, -1, 104], [1, 0, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Navigation / Hamburger",
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
                      "relativeTransform": [[1, 0, 926.6206], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "BOOLEAN_OPERATION",
                        "booleanOperation": "UNION",
                        "name": "Union",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                          "x": 2, "y": 5,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                          "width": 20, "height": 14,
                          "relativeTransform": [[1, 0, 2], [0, 1, 5]]
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Vector (Stroke)",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                              "x": 2, "y": 11,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0,
                              "vectorPaths": [
                                {
                                  "windingRule": "EVENODD",
                                  "data": "M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 20, "height": 2,
                              "relativeTransform": [[1, 0, 2], [0, 1, 11]]
                            },
                            "svgContent": SVG_Proposal_notification_Synth_VectorStroke_2
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Vector (Stroke)",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                              "x": 2, "y": 5,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0,
                              "vectorPaths": [
                                {
                                  "windingRule": "EVENODD",
                                  "data": "M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 20, "height": 2,
                              "relativeTransform": [[1, 0, 2], [0, 1, 5]]
                            },
                            "svgContent": SVG_Proposal_notification_Synth_VectorStroke_3
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Vector (Stroke)",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                              "x": 2, "y": 17,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0,
                              "vectorPaths": [
                                {
                                  "windingRule": "EVENODD",
                                  "data": "M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 20, "height": 2,
                              "relativeTransform": [[1, 0, 2], [0, 1, 17]]
                            },
                            "svgContent": SVG_Proposal_notification_Synth_VectorStroke_4
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
            "name": "Header",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 16, "paddingRight": 120, "paddingBottom": 16, "paddingLeft": 120,
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                  "color": { "r": 0.09666664153337479, "g": 0.6444442868232727, "b": 0.6038684248924255 },
                  "boundVariables": {}
                },
                {
                  "visible": true, "opacity": 1, "blendMode": "OVERLAY", "type": "IMAGE",
                  "scaleMode": "FILL",
                  "imageTransform": [[1, 0, 0], [0, 1, 0]],
                  "scalingFactor": 0.5,
                  "rotation": 0,
                  "filters": {
                    "exposure": 0.17796610295772552,
                    "contrast": 0,
                    "saturation": -1,
                    "temperature": 0,
                    "tint": 0,
                    "highlights": 0,
                    "shadows": 0
                  },
                  "originalImageHash": "4e43f0beb37bf8962bd3b95e3346809e1ad6aa07",
                  "assetRef": IMG_Proposal_notification_img_1_opt_png
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
              "width": 1680, "height": 184,
              "relativeTransform": [[1, 0, 0], [0, 1, 40]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Frame 1612",
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
                  "width": 300, "height": 50,
                  "relativeTransform": [[1, 0, 120], [0, 1, 53]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1613",
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
                      "width": 300, "height": 50,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "UEFA Resources",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "UEFA Resources", "fontSize": 40,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
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
                          "lineHeight": { "unit": "PIXELS", "value": 50 },
                          "font": { "family": "Open Sans", "style": "Regular" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 14,
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 40
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 300, "height": 50,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Frame 1613",
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
                  "width": 241, "height": 20,
                  "relativeTransform": [[1, 0, 120], [0, 1, 111]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1613",
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
                      "width": 241, "height": 20,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Second line for text description",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Second line for text description", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
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
                          "font": { "family": "Open Sans", "style": "SemiBold" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 32,
                              "font": { "family": "Open Sans", "style": "SemiBold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 241, "height": 20,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
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
            "name": "Info",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 0, "paddingRight": 120, "paddingBottom": 0, "paddingLeft": 120,
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                  "color": { "r": 0.7803921699523926, "g": 0.9176470637321472, "b": 0.9843137264251709 },
                  "boundVariables": {}
                }
              ],
              "strokes": [],
              "effects": [],
              "cornerRadius": 4,
              "layoutSizingHorizontal": "FIXED",
              "layoutSizingVertical": "HUG"
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 1680, "height": 90,
              "relativeTransform": [[1, 0, 0], [0, 1, 224]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "AV / play-circle",
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
                  "layoutSizingVertical": "FIXED",
                  "layoutPositioning": "ABSOLUTE"
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "ABSOLUTE",
                  "width": 64, "height": 64,
                  "relativeTransform": [[1, 0, 488], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                }
              },
              {
                "type": "FRAME",
                "name": "Frame 1615",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 16, "paddingRight": 0, "paddingBottom": 16, "paddingLeft": 0,
                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                  "layoutAlign": "STRETCH", "layoutGrow": 1,
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
                  "layoutSizingHorizontal": "FILL",
                  "layoutSizingVertical": "FILL"
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 1440, "height": 90,
                  "relativeTransform": [[1, 0, 120], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1924",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 6, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                      "width": 24, "height": 30,
                      "relativeTransform": [[1, 0, 0], [0, 1, 16]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Support / information",
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
                          "width": 24, "height": 24,
                          "relativeTransform": [[1, 0, 0], [0, 1, 6]],
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
                              "x": 2, "y": 2,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0, "b": 0 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 2], [0, 1, 2]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            },
                            "svgContent": SVG_Proposal_notification_assets_icon_Vector_I3383_3749_1004_374_svg_orig
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Frame 1923",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                      "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                      "width": 1400, "height": 58,
                      "relativeTransform": [[1, 0, 40], [0, 1, 16]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Don’t miss out!",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Don’t miss out!", "fontSize": 20,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 20, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0, "g": 0, "b": 0 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "layoutSizingHorizontal": "HUG",
                          "layoutSizingVertical": "HUG",
                          "letterSpacing": { "unit": "PIXELS", "value": -0.10000000149011612 },
                          "lineHeight": { "unit": "PERCENT", "value": 150 },
                          "font": { "family": "Manrope", "style": "Bold" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 15,
                              "font": { "family": "Manrope", "style": "Bold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0, "b": 0 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 20
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 146, "height": 30,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1925",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0,
                          "layoutSizingVertical": "HUG",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 1400, "height": 24,
                          "relativeTransform": [[1, 0, 0], [0, 1, 34]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "Click on the bell icon",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "Click on the bell icon", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                              "paragraphSpacing": 16, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0, "b": 0 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                              "font": { "family": "Manrope", "style": "SemiBold" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 22,
                                  "font": { "family": "Manrope", "style": "SemiBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0, "g": 0, "b": 0 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 157, "height": 21,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Notifications / notifications-active",
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
                              "width": 24, "height": 24,
                              "relativeTransform": [[1, 0, 161], [0, 1, 0]],
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
                                  "x": 2.642333984375, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0, "g": 0, "b": 0 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 18.7153, "height": 19.1923,
                                  "relativeTransform": [[1, 0, 2.6423], [0, 1, 2.5]],
                                  "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                },
                                "svgContent": SVG_Proposal_notification_assets_icon_Vector_I3384_160_5086_20_svg_orig
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "in the top-right corner on the page. Use it to choose what you want to follow and we’ll notify you when new resources are added that match your interests.",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "in the top-right corner on the page. Use it to choose what you want to follow and we’ll notify you when new resources are added that match your interests.", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 16, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0, "b": 0 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                              "font": { "family": "Manrope", "style": "SemiBold" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 154,
                                  "font": { "family": "Manrope", "style": "SemiBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0, "g": 0, "b": 0 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 1211, "height": 21,
                              "relativeTransform": [[1, 0, 189], [0, 1, 0]],
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
            "name": "Frame 1620",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 32, "paddingRight": 120, "paddingBottom": 8, "paddingLeft": 120,
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
              "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
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
              "width": 1680, "height": 80,
              "relativeTransform": [[1, 0, 0], [0, 1, 314]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Page title",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "characters": "Resources", "fontSize": 32,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "layoutSizingHorizontal": "HUG",
                  "layoutSizingVertical": "HUG",
                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                  "lineHeight": { "unit": "PIXELS", "value": 40 },
                  "font": { "family": "Open Sans", "style": "Regular" },
                  "richTextSpans": [
                    {
                      "start": 0,
                      "end": 9,
                      "font": { "family": "Open Sans", "style": "Regular" },
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                          "boundVariables": {}
                        }
                      ],
                      "fontSize": 32
                    }
                  ]
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 154, "height": 40,
                  "relativeTransform": [[1, 0, 120], [0, 1, 32]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                }
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Frame 1679",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 0, "paddingRight": 120, "paddingBottom": 16, "paddingLeft": 120,
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0,
              "layoutSizingVertical": "HUG",
              "layoutSizingHorizontal": "FILL"
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 1680, "height": 1184,
              "relativeTransform": [[1, 0, 0], [0, 1, 394]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Frame 1680",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                  "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                  "width": 1077, "height": 1168,
                  "relativeTransform": [[1, 0, 120], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "search_bar",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 16, "paddingRight": 0, "paddingBottom": 16, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
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
                      "width": 1077, "height": 72,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Text Field",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                          "width": 586, "height": 40,
                          "relativeTransform": [[1, 0, 0], [0, 1, 16]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Compact",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 8, "paddingRight": 12, "paddingBottom": 8, "paddingLeft": 12,
                              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                  "boundVariables": {}
                                }
                              ],
                              "effects": [],
                              "cornerRadius": 4,
                              "layoutSizingVertical": "HUG",
                              "layoutSizingHorizontal": "FILL"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 586, "height": 40,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Inner",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                  "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                                  "width": 562, "height": 24,
                                  "relativeTransform": [[1, 0, 12], [0, 1, 8]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "Placeh❌older",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 1,
                                      "characters": "Poner algo aquí para la busqueda", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.3490196168422699, "g": 0.43921568989753723, "b": 0.48235294222831726 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 32,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.3490196168422699, "g": 0.43921568989753723, "b": 0.48235294222831726 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 522, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 1.5]],
                                      "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "FRAME",
                                    "name": "Icon",
                                    "props": {
                                      "visible": false, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
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
                                      "width": 24, "height": 24,
                                      "relativeTransform": [[1, 0, 538], [0, 1, 0]],
                                      "constraints": { "horizontal": "MAX", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Shape",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "x": 7, "y": 16,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0,
                                          "vectorPaths": [
                                            { "windingRule": "EVENODD", "data": "M 0 5.161276340484619 L 6 0 L 6 10 L 0 5.161276340484619 Z" }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 6, "height": 10,
                                          "relativeTransform": [[0, 1, 7], [-1, 0, 16]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_Synth_Shape_7
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
                        "name": "Frame 1728",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MAX", "counterAxisAlignItems": "CENTER",
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
                          "width": 491, "height": 32,
                          "relativeTransform": [[1, 0, 586], [0, 1, 20]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "chip_dropdown",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
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
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 8,
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 125, "height": 32,
                              "relativeTransform": [[1, 0, 16], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "TEXT",
                                "name": "Newer first",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                                  "characters": "Newer first", "fontSize": 14,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 21 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 11,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 14
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 73, "height": 21,
                                  "relativeTransform": [[1, 0, 16], [0, 1, 5.5]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                }
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1667",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
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
                                  "width": 32, "height": 32,
                                  "relativeTransform": [[1, 0, 93], [0, -1, 32]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Navigation / Chevron / Down",
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
                                      "width": 16, "height": 16,
                                      "relativeTransform": [[1, 0, 8], [0, -1, 24]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Shape",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "x": 3.3333332538604736, "y": 10.666666984558105,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 10, "height": 6,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_BOLD_CHEVRON_FIX_10x6
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "FRAME",
                            "name": "Frame 1618",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
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
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 8,
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 78, "height": 32,
                              "relativeTransform": [[1, 0, 157], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "TEXT",
                                "name": "PDF",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                                  "characters": "PDF", "fontSize": 14,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 21 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 3,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 14
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 26, "height": 21,
                                  "relativeTransform": [[1, 0, 16], [0, 1, 5.5]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                }
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1667",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
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
                                  "width": 32, "height": 32,
                                  "relativeTransform": [[1, 0, 46], [0, -1, 32]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Navigation / Chevron / Down",
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
                                      "width": 16, "height": 16,
                                      "relativeTransform": [[1, 0, 8], [0, -1, 24]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Shape",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "x": 3.3333332538604736, "y": 10.666666984558105,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 10, "height": 6,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_BOLD_CHEVRON_FIX_10x6
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "FRAME",
                            "name": "Frame 1616",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
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
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 8,
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 98, "height": 32,
                              "relativeTransform": [[1, 0, 251], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "TEXT",
                                "name": "Author",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                                  "characters": "Author", "fontSize": 14,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 21 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 6,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 14
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 46, "height": 21,
                                  "relativeTransform": [[1, 0, 16], [0, 1, 5.5]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                }
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1667",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
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
                                  "width": 32, "height": 32,
                                  "relativeTransform": [[1, 0, 66], [0, -1, 32]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Navigation / Chevron / Down",
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
                                      "width": 16, "height": 16,
                                      "relativeTransform": [[1, 0, 8], [0, -1, 24]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Shape",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "x": 3.3333332538604736, "y": 10.666666984558105,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 10, "height": 6,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_BOLD_CHEVRON_FIX_10x6
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "FRAME",
                            "name": "Frame 1617",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
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
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 8,
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 126, "height": 32,
                              "relativeTransform": [[1, 0, 365], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "TEXT",
                                "name": "Range date",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                                  "characters": "Range date", "fontSize": 14,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 21 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 10,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 14
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 74, "height": 21,
                                  "relativeTransform": [[1, 0, 16], [0, 1, 5.5]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                }
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1667",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
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
                                  "width": 32, "height": 32,
                                  "relativeTransform": [[1, 0, 94], [0, -1, 32]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Navigation / Chevron / Down",
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
                                      "width": 16, "height": 16,
                                      "relativeTransform": [[1, 0, 8], [0, -1, 24]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Shape",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "x": 3.3333332538604736, "y": 10.666666984558105,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 10, "height": 6,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_BOLD_CHEVRON_FIX_10x6
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
                    "name": "card",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0,
                      "layoutSizingVertical": "FIXED",
                      "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 1077, "height": 308,
                      "relativeTransform": [[1, 0, 0], [0, 1, 96]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Frame 1622",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [
                            {
                              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                              "radius": 6,
                              "boundVariables": {},
                              "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                              "offset": { "x": 0, "y": 2 },
                              "spread": 0,
                              "showShadowBehindNode": true
                            }
                          ],
                          "cornerRadius": 4,
                          "layoutSizingVertical": "HUG",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 1077, "height": 308,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "RECTANGLE",
                            "name": "Rectangle 45",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                  "scaleMode": "FILL",
                                  "scalingFactor": 1,
                                  "filters": {
                                    "exposure": 0,
                                    "contrast": 0,
                                    "saturation": 0,
                                    "temperature": 0,
                                    "tint": 0,
                                    "highlights": 0,
                                    "shadows": 0
                                  },
                                  "originalImageHash": "d68ed38d85752b656704db1b0ecbfbc3ac629eac",
                                  "assetRef": IMG_Proposal_notification_img_8_png
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "topLeftRadius": 4,
                              "bottomLeftRadius": 4
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 464, "height": 308,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "AV / play-circle",
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
                              "layoutSizingVertical": "FIXED",
                              "layoutPositioning": "ABSOLUTE"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "ABSOLUTE",
                              "width": 64, "height": 64,
                              "relativeTransform": [[1, 0, 488], [0, 1, 0]],
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
                                  "x": 5.333333492279053, "y": 5.333333492279053,
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
                                  "width": 53.3333, "height": 53.3333,
                                  "relativeTransform": [[1, 0, 5.3333], [0, 1, 5.3333]],
                                  "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                },
                                "svgContent": SVG_Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig
                              }
                            ]
                          },
                          {
                            "type": "FRAME",
                            "name": "Frame 1615",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
                              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "STRETCH", "layoutGrow": 1,
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
                              "layoutSizingHorizontal": "FILL",
                              "layoutSizingVertical": "FILL"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 613, "height": 308,
                              "relativeTransform": [[1, 0, 464], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Frame 1644",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                  "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                                  "width": 565, "height": 161,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 24]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1713",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                                      "width": 565, "height": 50,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "TEXT",
                                        "name": "Refereeing in Women’s Football: Motivation.",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                          "paragraphSpacing": 0, "paragraphIndent": 0,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "layoutSizingVertical": "HUG",
                                          "fontSize": 20,
                                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                          "lineHeight": { "unit": "PIXELS", "value": 25 },
                                          "font": { "family": "Open Sans", "style": "SemiBold" },
                                          "layoutSizingHorizontal": "FILL",
                                          "richTextSpans": [
                                            {
                                              "start": 0,
                                              "end": 43,
                                              "font": { "family": "Open Sans", "style": "SemiBold" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 20
                                            }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                          "width": 501, "height": 50,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        }
                                      },
                                      {
                                        "type": "FRAME",
                                        "name": "Logos / UEFA Roundel",
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
                                          "width": 48, "height": 48,
                                          "relativeTransform": [[1, 0, 517], [0, 1, 1]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        },
                                        "children": [
                                          {
                                            "type": "RECTANGLE",
                                            "name": "UEFA_Is_POS_4cp",
                                            "props": {
                                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
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
                                                  "imageHash": "d1a818547948badf457342eb3e3336a71cf59875"
                                                }
                                              ],
                                              "strokes": [],
                                              "effects": [],
                                              "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                              "width": 48, "height": 48,
                                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "FIXED",
                                      "fontSize": 16,
                                      "textTruncation": "ENDING",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 24 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 152,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 16
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 565, "height": 95,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 66]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1613",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
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
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.9125000238418579, "g": 0.8250520825386047, "b": 0.8669542074203491 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 8,
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 89, "height": 32,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 201]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "Video",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                                      "characters": "Video ", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingHorizontal": "HUG",
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 6,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 37, "height": 21,
                                      "relativeTransform": [[1, 0, 16], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1667",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
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
                                      "width": 32, "height": 32,
                                      "relativeTransform": [[1, 0, 57], [0, -1, 32]],
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
                                          "width": 16, "height": 16,
                                          "relativeTransform": [[1, 0, 8], [0, -1, 24]],
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
                                              "x": 5.333333492279053, "y": 3.8800251483917236,
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0, "g": 0, "b": 0 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "strokes": [],
                                              "effects": [],
                                              "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                              "width": 6.7582, "height": 8.2399,
                                              "relativeTransform": [[1, 0, 5.3333], [0, 1, 3.88]],
                                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                            },
                                            "svgContent": SVG_Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1661",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                  "layoutAlign": "STRETCH", "layoutGrow": 1,
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
                                  "layoutSizingHorizontal": "FILL",
                                  "layoutSizingVertical": "FILL"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 565, "height": 35,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 249]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1661",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                      "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                                      "width": 525, "height": 24,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "TEXT",
                                        "name": "by Author name",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "layoutAlign": "STRETCH", "layoutGrow": 0,
                                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                          "paragraphSpacing": 0, "paragraphIndent": 0,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "layoutSizingVertical": "HUG",
                                          "characters": "by Author name",
                                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                          "layoutSizingHorizontal": "FILL",
                                          "richTextSpans": [
                                            {
                                              "start": 0,
                                              "end": 3,
                                              "font": { "family": "Open Sans", "style": "Light" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 14
                                            },
                                            {
                                              "start": 3,
                                              "end": 14,
                                              "font": { "family": "Open Sans", "style": "SemiBold" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 16
                                            }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                          "width": 525, "height": 24,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "type": "FRAME",
                                    "name": "Actions / Star",
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
                                      "relativeTransform": [[1, 0, 541], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Vector (Stroke)",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                                          "x": 0.9999708533287048, "y": 1,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 22.0001, "height": 21.02,
                                          "relativeTransform": [[1, 0, 1], [0, 1, 1]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_assets_icon_Vector__Stroke__I3383_3719_3016_7769_svg_orig
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
                    "name": "Frame 1635",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0,
                      "layoutSizingVertical": "FIXED",
                      "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 1077, "height": 308,
                      "relativeTransform": [[1, 0, 0], [0, 1, 428]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Frame 1621",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [
                            {
                              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                              "radius": 6,
                              "boundVariables": {},
                              "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                              "offset": { "x": 0, "y": 2 },
                              "spread": 0,
                              "showShadowBehindNode": true
                            }
                          ],
                          "cornerRadius": 4,
                          "layoutSizingVertical": "HUG",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 1077, "height": 308,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "RECTANGLE",
                            "name": "Rectangle 45",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                  "scaleMode": "FILL",
                                  "scalingFactor": 1,
                                  "filters": {
                                    "exposure": 0,
                                    "contrast": 0,
                                    "saturation": 0,
                                    "temperature": 0,
                                    "tint": 0,
                                    "highlights": 0,
                                    "shadows": 0
                                  },
                                  "originalImageHash": "2f6ef3fb06496786e98ae08168b69e05ba58f0b7",
                                  "assetRef": IMG_Proposal_notification_img_9_png
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "topLeftRadius": 4,
                              "bottomLeftRadius": 4
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 464, "height": 308,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Frame 1615",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
                              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "STRETCH", "layoutGrow": 1,
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
                              "layoutSizingHorizontal": "FILL",
                              "layoutSizingVertical": "FILL"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 613, "height": 308,
                              "relativeTransform": [[1, 0, 464], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Frame 1644",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                  "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                                  "width": 565, "height": 161,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 24]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1713",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                                      "width": 565, "height": 50,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "TEXT",
                                        "name": "Refereeing in Women’s Football: Motivation.",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                          "paragraphSpacing": 0, "paragraphIndent": 0,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "layoutSizingVertical": "HUG",
                                          "fontSize": 20,
                                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                          "lineHeight": { "unit": "PIXELS", "value": 25 },
                                          "font": { "family": "Open Sans", "style": "SemiBold" },
                                          "layoutSizingHorizontal": "FILL",
                                          "richTextSpans": [
                                            {
                                              "start": 0,
                                              "end": 43,
                                              "font": { "family": "Open Sans", "style": "SemiBold" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 20
                                            }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                          "width": 501, "height": 50,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        }
                                      },
                                      {
                                        "type": "FRAME",
                                        "name": "Logos / UEFA Roundel",
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
                                          "width": 48, "height": 48,
                                          "relativeTransform": [[1, 0, 517], [0, 1, 1]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        },
                                        "children": [
                                          {
                                            "type": "RECTANGLE",
                                            "name": "UEFA_Is_POS_4cp",
                                            "props": {
                                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
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
                                                  "imageHash": "d1a818547948badf457342eb3e3336a71cf59875"
                                                }
                                              ],
                                              "strokes": [],
                                              "effects": [],
                                              "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                              "width": 48, "height": 48,
                                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "FIXED",
                                      "fontSize": 16,
                                      "textTruncation": "ENDING",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 24 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 152,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 16
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 565, "height": 95,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 66]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1613",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
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
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.9125000238418579, "g": 0.8250520825386047, "b": 0.8669542074203491 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 8,
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 78, "height": 32,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 201]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "PDF",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                                      "characters": "PDF", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingHorizontal": "HUG",
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 3,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 26, "height": 21,
                                      "relativeTransform": [[1, 0, 16], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1667",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
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
                                      "width": 32, "height": 32,
                                      "relativeTransform": [[1, 0, 46], [0, -1, 32]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "FRAME",
                                        "name": "Actions / Download",
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
                                          "width": 16, "height": 16,
                                          "relativeTransform": [[1, 0, 8], [0, -1, 24]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        },
                                        "children": [
                                          {
                                            "type": "BOOLEAN_OPERATION",
                                            "booleanOperation": "UNION",
                                            "name": "Union",
                                            "props": {
                                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                              "isMask": false, "maskType": "ALPHA",
                                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                              "x": 1.3333333730697632, "y": 1.3333333730697632,
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "strokes": [],
                                              "effects": [],
                                              "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                              "width": 13.3333, "height": 13.3333,
                                              "relativeTransform": [[1, 0, 1.3333], [0, 1, 1.3333]]
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
                                                  "x": 1.3333333333333321, "y": 9.330662608146667,
                                                  "fills": [
                                                    {
                                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                      "color": { "r": 0, "g": 0, "b": 0 },
                                                      "boundVariables": {}
                                                    }
                                                  ],
                                                  "strokes": [],
                                                  "effects": [],
                                                  "cornerRadius": 0,
                                                  "vectorPaths": [
                                                    {
                                                      "windingRule": "NONZERO",
                                                      "data": "M 12.6666663646698 0 C 12.266666358311971 0 11.999999713897706 0.2668001969575755 11.999999713897706 0.6670005321502686 L 11.999999713897706 3.3350026607513428 C 11.999999713897706 3.735202995944036 11.73333306948344 4.002003192901611 11.333333063125611 4.002003192901611 L 1.9999999523162844 4.002003192901611 C 1.599999945958456 4.002003192901611 1.3333333015441895 3.735202995944036 1.3333333015441895 3.3350026607513428 L 1.3333333015441895 0.6670005321502686 C 1.3333333015441895 0.2668001969575755 1.066666657129923 0 0.6666666507720947 0 C 0.26666664441426635 0 0 0.2668001969575755 0 0.6670005321502686 L 0 3.3350026607513428 C 0 4.468903597211863 0.8666666142145802 5.336004257202148 1.9999999523162844 5.336004257202148 L 11.333333063125611 5.336004257202148 C 12.466666401227315 5.336004257202148 13.333333015441895 4.468903597211863 13.333333015441895 3.3350026607513428 L 13.333333015441895 0.6670005321502686 C 13.333333015441895 0.2668001969575755 13.066666371027628 0 12.6666663646698 0 Z"
                                                    }
                                                  ]
                                                },
                                                "layoutProps": {
                                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                  "width": 13.3333, "height": 5.336,
                                                  "relativeTransform": [[1, 0, 1.3333], [0, 1, 9.3307]]
                                                },
                                                "svgContent": SVG_Proposal_notification_Synth_Vector_12
                                              },
                                              {
                                                "type": "VECTOR",
                                                "shouldFlatten": true,
                                                "name": "Vector",
                                                "props": {
                                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                  "isMask": false, "maskType": "ALPHA",
                                                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                  "x": 3.9999998807907104, "y": 10.671340346336365,
                                                  "fills": [
                                                    {
                                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                      "color": { "r": 0, "g": 0, "b": 0 },
                                                      "boundVariables": {}
                                                    }
                                                  ],
                                                  "strokes": [],
                                                  "effects": [],
                                                  "cornerRadius": 0,
                                                  "vectorPaths": [
                                                    {
                                                      "windingRule": "NONZERO",
                                                      "data": "M 7.800000818570451 3.52472174096232 L 4.466666716999459 0.18375328669088747 C 4.400000046690287 0.11693391740632159 4.333333252204765 0.05011452820803214 4.266666581895593 0.05011452820803214 C 4.133333241277247 -0.01670484107653375 3.933333751890393 -0.01670484107653375 3.733333735995821 0.05011452820803214 C 3.6666670656866485 0.11693389749259803 3.600000271201128 0.11693391740632159 3.533333600891955 0.18375328669088747 L 0.20000001589457164 3.52472174096232 C -0.06666666534211865 3.7919992181005835 -0.06666666534211865 4.19291516497271 0.20000001589457164 4.460192642110974 C 0.46666669713126196 4.727470119249238 0.8666664110289537 4.727470119249238 1.133333092265644 4.460192642110974 L 3.333333465788089 2.2551538390594787 L 3.333333465788089 8.669813290377803 C 3.333333465788089 9.07072951604206 3.600000127156564 9.338006973266602 4.000000158945707 9.338006973266602 C 4.4000001907348505 9.338006973266602 4.666666852103325 9.07072951604206 4.666666852103325 8.669813290377803 L 4.666666852103325 2.2551538390594787 L 6.8666664308971415 4.460192642110974 C 6.999999771515487 4.593831380680106 7.133333608839224 4.6606508744254445 7.333333624733796 4.6606508744254445 C 7.533333640628368 4.6606508744254445 7.666667477952106 4.593831380680106 7.800000818570451 4.460192642110974 C 8.066667499807142 4.19291516497271 8.066667499807142 3.7919992181005835 7.800000818570451 3.52472174096232 Z"
                                                    }
                                                  ]
                                                },
                                                "layoutProps": {
                                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                  "width": 8, "height": 9.338,
                                                  "relativeTransform": [[1, 0, 4], [0, -1, 10.6713]]
                                                },
                                                "svgContent": SVG_Proposal_notification_Synth_Vector_13
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
                                "name": "Frame 1661",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                  "layoutAlign": "STRETCH", "layoutGrow": 1,
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
                                  "layoutSizingHorizontal": "FILL",
                                  "layoutSizingVertical": "FILL"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 565, "height": 35,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 249]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1661",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                      "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                                      "width": 525, "height": 24,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "TEXT",
                                        "name": "by Author name",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "layoutAlign": "STRETCH", "layoutGrow": 0,
                                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                          "paragraphSpacing": 0, "paragraphIndent": 0,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "layoutSizingVertical": "HUG",
                                          "characters": "by Author name",
                                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                          "layoutSizingHorizontal": "FILL",
                                          "richTextSpans": [
                                            {
                                              "start": 0,
                                              "end": 3,
                                              "font": { "family": "Open Sans", "style": "Light" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 14
                                            },
                                            {
                                              "start": 3,
                                              "end": 14,
                                              "font": { "family": "Open Sans", "style": "SemiBold" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 16
                                            }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                          "width": 525, "height": 24,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "type": "FRAME",
                                    "name": "Actions / Star",
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
                                      "relativeTransform": [[1, 0, 541], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Vector (Stroke)",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                                          "x": 0.9999708533287048, "y": 1,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 22.0001, "height": 21.02,
                                          "relativeTransform": [[1, 0, 1], [0, 1, 1]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig
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
                    "name": "Frame 1636",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0,
                      "layoutSizingVertical": "FIXED",
                      "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 1077, "height": 308,
                      "relativeTransform": [[1, 0, 0], [0, 1, 760]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Frame 1621",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [
                            {
                              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                              "radius": 6,
                              "boundVariables": {},
                              "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                              "offset": { "x": 0, "y": 2 },
                              "spread": 0,
                              "showShadowBehindNode": true
                            }
                          ],
                          "cornerRadius": 4,
                          "layoutSizingVertical": "HUG",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 1077, "height": 308,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "RECTANGLE",
                            "name": "Rectangle 45",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                  "scaleMode": "FILL",
                                  "scalingFactor": 1,
                                  "filters": {
                                    "exposure": 0,
                                    "contrast": 0,
                                    "saturation": 0,
                                    "temperature": 0,
                                    "tint": 0,
                                    "highlights": 0,
                                    "shadows": 0
                                  },
                                  "originalImageHash": "53600b9b753bcf27aa29e70bd45039034c373525",
                                  "assetRef": IMG_Proposal_notification_img_7_png
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "topLeftRadius": 4,
                              "bottomLeftRadius": 4
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 464, "height": 308,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Frame 1615",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
                              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "STRETCH", "layoutGrow": 1,
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
                              "layoutSizingHorizontal": "FILL",
                              "layoutSizingVertical": "FILL"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 613, "height": 308,
                              "relativeTransform": [[1, 0, 464], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Frame 1644",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                  "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                                  "width": 565, "height": 161,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 24]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1713",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                                      "width": 565, "height": 50,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "TEXT",
                                        "name": "Refereeing in Women’s Football: Motivation.",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                          "paragraphSpacing": 0, "paragraphIndent": 0,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "layoutSizingVertical": "HUG",
                                          "fontSize": 20,
                                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                          "lineHeight": { "unit": "PIXELS", "value": 25 },
                                          "font": { "family": "Open Sans", "style": "SemiBold" },
                                          "layoutSizingHorizontal": "FILL",
                                          "richTextSpans": [
                                            {
                                              "start": 0,
                                              "end": 43,
                                              "font": { "family": "Open Sans", "style": "SemiBold" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 20
                                            }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                          "width": 501, "height": 50,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        }
                                      },
                                      {
                                        "type": "FRAME",
                                        "name": "Logos / UEFA Roundel",
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
                                          "width": 48, "height": 48,
                                          "relativeTransform": [[1, 0, 517], [0, 1, 1]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        },
                                        "children": [
                                          {
                                            "type": "RECTANGLE",
                                            "name": "UEFA_Is_POS_4cp",
                                            "props": {
                                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
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
                                                  "imageHash": "d1a818547948badf457342eb3e3336a71cf59875"
                                                }
                                              ],
                                              "strokes": [],
                                              "effects": [],
                                              "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                              "width": 48, "height": 48,
                                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "FIXED",
                                      "fontSize": 16,
                                      "textTruncation": "ENDING",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 24 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 152,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 16
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 565, "height": 95,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 66]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1613",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
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
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.9125000238418579, "g": 0.8250520825386047, "b": 0.8669542074203491 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 8,
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 78, "height": 32,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 201]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "PDF",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                                      "characters": "PDF", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingHorizontal": "HUG",
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 3,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 26, "height": 21,
                                      "relativeTransform": [[1, 0, 16], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1667",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
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
                                      "width": 32, "height": 32,
                                      "relativeTransform": [[1, 0, 46], [0, -1, 32]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "FRAME",
                                        "name": "Actions / Download",
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
                                          "width": 16, "height": 16,
                                          "relativeTransform": [[1, 0, 8], [0, -1, 24]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        },
                                        "children": [
                                          {
                                            "type": "BOOLEAN_OPERATION",
                                            "booleanOperation": "UNION",
                                            "name": "Union",
                                            "props": {
                                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                              "isMask": false, "maskType": "ALPHA",
                                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                              "x": 1.3333333730697632, "y": 1.3333333730697632,
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "strokes": [],
                                              "effects": [],
                                              "cornerRadius": 0
                                            },
                                            "layoutProps": {
                                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                              "width": 13.3333, "height": 13.3333,
                                              "relativeTransform": [[1, 0, 1.3333], [0, 1, 1.3333]]
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
                                                  "x": 1.3333333333333321, "y": 9.330662608146667,
                                                  "fills": [
                                                    {
                                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                      "color": { "r": 0, "g": 0, "b": 0 },
                                                      "boundVariables": {}
                                                    }
                                                  ],
                                                  "strokes": [],
                                                  "effects": [],
                                                  "cornerRadius": 0,
                                                  "vectorPaths": [
                                                    {
                                                      "windingRule": "NONZERO",
                                                      "data": "M 12.6666663646698 0 C 12.266666358311971 0 11.999999713897706 0.2668001969575755 11.999999713897706 0.6670005321502686 L 11.999999713897706 3.3350026607513428 C 11.999999713897706 3.735202995944036 11.73333306948344 4.002003192901611 11.333333063125611 4.002003192901611 L 1.9999999523162844 4.002003192901611 C 1.599999945958456 4.002003192901611 1.3333333015441895 3.735202995944036 1.3333333015441895 3.3350026607513428 L 1.3333333015441895 0.6670005321502686 C 1.3333333015441895 0.2668001969575755 1.066666657129923 0 0.6666666507720947 0 C 0.26666664441426635 0 0 0.2668001969575755 0 0.6670005321502686 L 0 3.3350026607513428 C 0 4.468903597211863 0.8666666142145802 5.336004257202148 1.9999999523162844 5.336004257202148 L 11.333333063125611 5.336004257202148 C 12.466666401227315 5.336004257202148 13.333333015441895 4.468903597211863 13.333333015441895 3.3350026607513428 L 13.333333015441895 0.6670005321502686 C 13.333333015441895 0.2668001969575755 13.066666371027628 0 12.6666663646698 0 Z"
                                                    }
                                                  ]
                                                },
                                                "layoutProps": {
                                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                  "width": 13.3333, "height": 5.336,
                                                  "relativeTransform": [[1, 0, 1.3333], [0, 1, 9.3307]]
                                                },
                                                "svgContent": SVG_Proposal_notification_Synth_Vector_15
                                              },
                                              {
                                                "type": "VECTOR",
                                                "shouldFlatten": true,
                                                "name": "Vector",
                                                "props": {
                                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                  "isMask": false, "maskType": "ALPHA",
                                                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                  "x": 3.9999998807907104, "y": 10.671340346336365,
                                                  "fills": [
                                                    {
                                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                      "color": { "r": 0, "g": 0, "b": 0 },
                                                      "boundVariables": {}
                                                    }
                                                  ],
                                                  "strokes": [],
                                                  "effects": [],
                                                  "cornerRadius": 0,
                                                  "vectorPaths": [
                                                    {
                                                      "windingRule": "NONZERO",
                                                      "data": "M 7.800000818570451 3.52472174096232 L 4.466666716999459 0.18375328669088747 C 4.400000046690287 0.11693391740632159 4.333333252204765 0.05011452820803214 4.266666581895593 0.05011452820803214 C 4.133333241277247 -0.01670484107653375 3.933333751890393 -0.01670484107653375 3.733333735995821 0.05011452820803214 C 3.6666670656866485 0.11693389749259803 3.600000271201128 0.11693391740632159 3.533333600891955 0.18375328669088747 L 0.20000001589457164 3.52472174096232 C -0.06666666534211865 3.7919992181005835 -0.06666666534211865 4.19291516497271 0.20000001589457164 4.460192642110974 C 0.46666669713126196 4.727470119249238 0.8666664110289537 4.727470119249238 1.133333092265644 4.460192642110974 L 3.333333465788089 2.2551538390594787 L 3.333333465788089 8.669813290377803 C 3.333333465788089 9.07072951604206 3.600000127156564 9.338006973266602 4.000000158945707 9.338006973266602 C 4.4000001907348505 9.338006973266602 4.666666852103325 9.07072951604206 4.666666852103325 8.669813290377803 L 4.666666852103325 2.2551538390594787 L 6.8666664308971415 4.460192642110974 C 6.999999771515487 4.593831380680106 7.133333608839224 4.6606508744254445 7.333333624733796 4.6606508744254445 C 7.533333640628368 4.6606508744254445 7.666667477952106 4.593831380680106 7.800000818570451 4.460192642110974 C 8.066667499807142 4.19291516497271 8.066667499807142 3.7919992181005835 7.800000818570451 3.52472174096232 Z"
                                                    }
                                                  ]
                                                },
                                                "layoutProps": {
                                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                                  "width": 8, "height": 9.338,
                                                  "relativeTransform": [[1, 0, 4], [0, -1, 10.6713]]
                                                },
                                                "svgContent": SVG_Proposal_notification_Synth_Vector_16
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
                                "name": "Frame 1661",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                  "layoutAlign": "STRETCH", "layoutGrow": 1,
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
                                  "layoutSizingHorizontal": "FILL",
                                  "layoutSizingVertical": "FILL"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 565, "height": 35,
                                  "relativeTransform": [[1, 0, 24], [0, 1, 249]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "FRAME",
                                    "name": "Frame 1661",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                      "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                      "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                                      "width": 525, "height": 24,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "TEXT",
                                        "name": "by Author name",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "layoutAlign": "STRETCH", "layoutGrow": 0,
                                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                          "paragraphSpacing": 0, "paragraphIndent": 0,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "layoutSizingVertical": "HUG",
                                          "characters": "by Author name",
                                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                          "layoutSizingHorizontal": "FILL",
                                          "richTextSpans": [
                                            {
                                              "start": 0,
                                              "end": 3,
                                              "font": { "family": "Open Sans", "style": "Light" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 14
                                            },
                                            {
                                              "start": 3,
                                              "end": 14,
                                              "font": { "family": "Open Sans", "style": "SemiBold" },
                                              "fills": [
                                                {
                                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                  "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                                  "boundVariables": {}
                                                }
                                              ],
                                              "fontSize": 16
                                            }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                          "width": 525, "height": 24,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "type": "FRAME",
                                    "name": "Actions / Star",
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
                                      "relativeTransform": [[1, 0, 541], [0, 1, 5.5]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Vector (Stroke)",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                                          "x": 0.9999708533287048, "y": 1,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 22.0001, "height": 21.02,
                                          "relativeTransform": [[1, 0, 1], [0, 1, 1]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17212_3016_7769_svg_orig
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
                    "name": "Frame 1922",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 100, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 32, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
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
                      "width": 1077, "height": 76,
                      "relativeTransform": [[1, 0, 0], [0, 1, 1092]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Items per page",
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
                          "width": 264, "height": 44,
                          "relativeTransform": [[1, 0, 0], [0, 1, 32]],
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
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "Items per page", "fontSize": 14,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 21 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 14,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 14
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 98, "height": 21,
                              "relativeTransform": [[1, 0, 0], [0, 1, 11.5]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Default",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 10, "paddingRight": 12, "paddingBottom": 10, "paddingLeft": 12,
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
                                  "color": { "r": 1, "g": 1, "b": 1 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                  "boundVariables": {}
                                }
                              ],
                              "effects": [],
                              "cornerRadius": 4,
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "FIXED"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 77, "height": 44,
                              "relativeTransform": [[1, 0, 106], [0, 1, 0]],
                              "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Inner",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "FIXED"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 53, "height": 24,
                                  "relativeTransform": [[1, 0, 12], [0, 1, 10]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "Placeh❌older",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                                      "characters": "10", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.3490196168422699, "g": 0.43921568989753723, "b": 0.48235294222831726 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingHorizontal": "HUG",
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 2,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.3490196168422699, "g": 0.43921568989753723, "b": 0.48235294222831726 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 17, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 1.5]],
                                      "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "FRAME",
                                    "name": "Icon",
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
                                      "width": 24, "height": 24,
                                      "relativeTransform": [[1, 0, 29], [0, 1, 0]],
                                      "constraints": { "horizontal": "MAX", "vertical": "MIN" }
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Shape",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "x": 7, "y": 16,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 10, "height": 6,
                                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                          "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                        },
                                        "svgContent": SVG_Proposal_notification_assets_icon_Shape_I3379_17214_7515_31651_7461_30655_70_441_svg_10x6_override
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Text",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "1 - 10 of 50", "fontSize": 14,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "RIGHT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 21 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 12,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 14
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 73, "height": 21,
                              "relativeTransform": [[1, 0, 191], [0, 1, 11.5]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Default",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
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
                          "width": 208, "height": 24,
                          "relativeTransform": [[1, 0, 869], [0, 1, 42]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "Link",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "First", "fontSize": 14,
                              "textCase": "ORIGINAL", "textDecoration": "UNDERLINE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.5058823823928833, "g": 0.5960784554481506, "b": 0.6392157077789307 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 21 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 5,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.5058823823928833, "g": 0.5960784554481506, "b": 0.6392157077789307 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 14
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 29, "height": 21,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Icon",
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
                              "width": 24, "height": 24,
                              "relativeTransform": [[1, 0, 37], [0, 1, 0]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            },
                            "children": [
                              {
                                "type": "VECTOR",
                                "shouldFlatten": true,
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 8, "y": 5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 8, "height": 14,
                                  "relativeTransform": [[1, 0, 8], [0, 1, 5]],
                                  "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                },
                                "svgContent": SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_4_70_475_svg_orig
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Text",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "Page 1 of 5", "fontSize": 14,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 21 },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 5,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 14
                                },
                                {
                                  "start": 5,
                                  "end": 6,
                                  "font": { "family": "Open Sans", "style": "SemiBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 14
                                },
                                {
                                  "start": 6,
                                  "end": 10,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 14
                                },
                                {
                                  "start": 10,
                                  "end": 11,
                                  "font": { "family": "Open Sans", "style": "SemiBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 14
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 72, "height": 21,
                              "relativeTransform": [[1, 0, 69], [0, 1, 0]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Icon",
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
                              "width": 24, "height": 24,
                              "relativeTransform": [[1, 0, 149], [0, 1, 0]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            },
                            "children": [
                              {
                                "type": "VECTOR",
                                "shouldFlatten": true,
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 16, "y": 19,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 8, "height": 14,
                                  "relativeTransform": [[-1, 0, 16], [0, -1, 19]],
                                  "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                },
                                "svgContent": SVG_Proposal_notification_assets_icon_Shape_I3379_17215_214_10_70_471_svg_orig
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Link",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "Last", "fontSize": 14,
                              "textCase": "ORIGINAL", "textDecoration": "UNDERLINE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingHorizontal": "HUG",
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 21 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 4,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 14
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 27, "height": 21,
                              "relativeTransform": [[1, 0, 181], [0, 1, 0]],
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
                "name": "sidebar",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 16, "paddingBottom": 0, "paddingLeft": 16,
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
                  "cornerRadius": 14,
                  "layoutSizingHorizontal": "FIXED",
                  "layoutSizingVertical": "HUG"
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 339, "height": 694,
                  "relativeTransform": [[1, 0, 1221], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1714",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                      "width": 307, "height": 25,
                      "relativeTransform": [[1, 0, 16], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Frame 1919",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                          "width": 249, "height": 25,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Actions / Star",
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
                              "relativeTransform": [[1, 0, 0], [0, 1, 0.5]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "VECTOR",
                                "shouldFlatten": true,
                                "name": "Vector (Stroke)",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                                  "x": 0.9999708533287048, "y": 1,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 22.0001, "height": 21.02,
                                  "relativeTransform": [[1, 0, 1], [0, 1, 1]],
                                  "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                },
                                "svgContent": SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17219_3016_7769_svg_orig
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Favourites",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "Favourites", "fontSize": 20,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 25 },
                              "font": { "family": "Open Sans", "style": "SemiBold" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 10,
                                  "font": { "family": "Open Sans", "style": "SemiBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 20
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 221, "height": 25,
                              "relativeTransform": [[1, 0, 28], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Toggle",
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
                          "width": 42, "height": 22,
                          "relativeTransform": [[1, 0, 265], [0, 1, 1.5]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Rectangle 77 Copy 7",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 0, "y": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.6000000238418579, "g": 0.6000000238418579, "b": 0.6000000238418579 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": []
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 42, "height": 22,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            },
                            "svgContent": SVG_Proposal_notification_assets_icon_Rectangle_77_Copy_7_I3379_17221_7466_30959_svg_orig
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Oval 1 Copy 13",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 2, "y": 2,
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
                              "width": 18, "height": 18,
                              "relativeTransform": [[1, 0, 2], [0, 1, 2]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            },
                            "svgContent": SVG_Proposal_notification_assets_icon_Oval_1_Copy_13_I3379_17221_7466_30960_svg_orig
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Shape",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 24, "y": 6,
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
                              "width": 10, "height": 10,
                              "relativeTransform": [[1, 0, 24], [0, 1, 6]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            },
                            "svgContent": SVG_Proposal_notification_assets_icon_Shape_I3379_17221_7466_30966_svg_orig
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "LINE",
                    "name": "Line 62",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 },
                          "boundVariables": {}
                        }
                      ],
                      "effects": []
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 307, "height": 0,
                      "relativeTransform": [[1, 0, 16], [0, 1, 41]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  },
                  {
                    "type": "FRAME",
                    "name": "Frame 1713",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                      "width": 307, "height": 40,
                      "relativeTransform": [[1, 0, 16], [0, 1, 57]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Filters",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "characters": "Filters", "fontSize": 20,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "layoutSizingVertical": "HUG",
                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                          "lineHeight": { "unit": "PIXELS", "value": 25 },
                          "font": { "family": "Open Sans", "style": "SemiBold" },
                          "layoutSizingHorizontal": "FILL",
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 7,
                              "font": { "family": "Open Sans", "style": "SemiBold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 20
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 251, "height": 25,
                          "relativeTransform": [[1, 0, 0], [0, 1, 7.5]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1695",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
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
                              "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 100,
                          "layoutSizingHorizontal": "HUG",
                          "layoutSizingVertical": "HUG"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 40, "height": 40,
                          "relativeTransform": [[1, 0, 267], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Actions / Search",
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
                              "width": 24, "height": 24,
                              "relativeTransform": [[1, 0, 8], [0, 1, 8]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "UNION",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 3, "y": 3,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 18.9984, "height": 19.0004,
                                  "relativeTransform": [[1, 0, 3], [0, 1, 3]]
                                },
                                "children": [
                                  {
                                    "type": "BOOLEAN_OPERATION",
                                    "booleanOperation": "EXCLUDE",
                                    "name": "Oval",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 3, "y": 3,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 16, "height": 16,
                                      "relativeTransform": [[1, 0, 3], [0, 1, 3]]
                                    },
                                    "children": [
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Path",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "x": 3, "y": 3,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0, "g": 0, "b": 0 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0,
                                          "vectorPaths": [
                                            {
                                              "windingRule": "NONZERO",
                                              "data": "M 8 16 C 12.418278217315674 16 16 12.418278217315674 16 8 C 16 3.581721782684326 12.418278217315674 0 8 0 C 3.581721782684326 0 0 3.581721782684326 0 8 C 0 12.418278217315674 3.581721782684326 16 8 16 Z"
                                            }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 16, "height": 16,
                                          "relativeTransform": [[1, 0, 3], [0, 1, 3]]
                                        },
                                        "svgContent": SVG_Proposal_notification_Synth_Path_25
                                      },
                                      {
                                        "type": "VECTOR",
                                        "shouldFlatten": true,
                                        "name": "Path",
                                        "props": {
                                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                          "isMask": false, "maskType": "ALPHA",
                                          "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                          "x": 5, "y": 5,
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0, "g": 0, "b": 0 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "strokes": [],
                                          "effects": [],
                                          "cornerRadius": 0,
                                          "vectorPaths": [
                                            {
                                              "windingRule": "NONZERO",
                                              "data": "M 6 12 C 2.686291456222534 12 0 9.313708543777466 0 6 C 0 2.686291456222534 2.686291456222534 0 6 0 C 9.313708543777466 0 12 2.686291456222534 12 6 C 12 9.313708543777466 9.313708543777466 12 6 12 Z"
                                            }
                                          ]
                                        },
                                        "layoutProps": {
                                          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                          "width": 12, "height": 12,
                                          "relativeTransform": [[1, 0, 5], [0, 1, 5]]
                                        },
                                        "svgContent": SVG_Proposal_notification_Synth_Path_26
                                      }
                                    ]
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 15.6484375, "y": 15.650390625,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "NONZERO",
                                          "data": "M 6.057106971740723 4.642893314361572 L 1.7071068286895752 0.2928932309150696 C 1.3165825307369232 -0.0976310670375824 0.6834175288677216 -0.0976310670375824 0.2928932309150696 0.2928932309150696 C -0.0976310670375824 0.6834175288677216 -0.0976310670375824 1.3165825307369232 0.2928932309150696 1.7071068286895752 L 4.642893314361572 6.057106971740723 C 5.033417612314224 6.447631269693375 5.666582673788071 6.447631269693375 6.057106971740723 6.057106971740723 C 6.447631269693375 5.666582673788071 6.447631269693375 5.033417612314224 6.057106971740723 4.642893314361572 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 6.35, "height": 6.35,
                                      "relativeTransform": [[1, 0, 15.6484], [0, 1, 15.6504]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_27
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
                    "name": "Text Field",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                      "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                      "width": 296, "height": 69,
                      "relativeTransform": [[1, 0, 16], [0, 1, 113]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Compact",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 8, "paddingRight": 12, "paddingBottom": 8, "paddingLeft": 12,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 1, "g": 1, "b": 1 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.7019608020782471, "g": 0.7529411911964417, "b": 0.772549033164978 },
                              "boundVariables": {}
                            }
                          ],
                          "effects": [],
                          "cornerRadius": 4,
                          "layoutSizingVertical": "HUG",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 296, "height": 40,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Inner",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                              "width": 272, "height": 24,
                              "relativeTransform": [[1, 0, 12], [0, 1, 8]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "TEXT",
                                "name": "Placeh❌older",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "INHERIT", "layoutGrow": 1,
                                  "characters": "Grow", "fontSize": 14,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.3490196168422699, "g": 0.43921568989753723, "b": 0.48235294222831726 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingVertical": "HUG",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 21 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "layoutSizingHorizontal": "FILL",
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 4,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.3490196168422699, "g": 0.43921568989753723, "b": 0.48235294222831726 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 14
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 232, "height": 21,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 1.5]],
                                  "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                                }
                              },
                              {
                                "type": "FRAME",
                                "name": "Icon",
                                "props": {
                                  "visible": false, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
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
                                  "width": 24, "height": 24,
                                  "relativeTransform": [[1, 0, 248], [0, 1, 0]],
                                  "constraints": { "horizontal": "MAX", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Shape",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 7, "y": 16,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        { "windingRule": "EVENODD", "data": "M 0 5.161276340484619 L 6 0 L 6 10 L 0 5.161276340484619 Z" }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 6, "height": 10,
                                      "relativeTransform": [[0, 1, 7], [-1, 0, 16]],
                                      "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Shape_28
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "TEXT",
                        "name": "Helper",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "1 result", "fontSize": 14,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.4000000059604645, "g": 0.4000000059604645, "b": 0.4000000059604645 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "layoutSizingHorizontal": "FIXED",
                          "layoutSizingVertical": "HUG",
                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                          "lineHeight": { "unit": "PIXELS", "value": 21 },
                          "font": { "family": "Open Sans", "style": "Regular" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 8,
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.4000000059604645, "g": 0.4000000059604645, "b": 0.4000000059604645 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 14
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 296, "height": 21,
                          "relativeTransform": [[1, 0, 0], [0, 1, 48]],
                          "constraints": { "horizontal": "STRETCH", "vertical": "MAX" }
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Frame 1712",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 },
                          "boundVariables": {}
                        }
                      ],
                      "effects": [],
                      "cornerRadius": 0,
                      "layoutSizingVertical": "FIXED",
                      "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 307, "height": 32,
                      "relativeTransform": [[1, 0, 16], [0, 1, 198]],
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
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "characters": "SUBJECT", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "layoutSizingVertical": "HUG",
                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                          "lineHeight": { "unit": "PIXELS", "value": 24 },
                          "font": { "family": "Open Sans", "style": "SemiBold" },
                          "layoutSizingHorizontal": "FILL",
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 7,
                              "font": { "family": "Open Sans", "style": "SemiBold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 291, "height": 24,
                          "relativeTransform": [[1, 0, 0], [0, 1, 4]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Actions / Add / Small",
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
                          "width": 12, "height": 12,
                          "relativeTransform": [[1, 0, 295], [0, 1, 10]],
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
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                              "x": 2, "y": 2,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 8, "height": 8,
                              "relativeTransform": [[1, 0, 2], [0, 1, 2]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            },
                            "svgContent": SVG_Proposal_notification_assets_icon_Union_I3379_17230_5250_18144_svg_orig
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Frame 1711",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 8,
                      "layoutSizingVertical": "HUG",
                      "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 307, "height": 384,
                      "relativeTransform": [[1, 0, 16], [0, 1, 246]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Frame 1704",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                              "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 },
                              "boundVariables": {}
                            }
                          ],
                          "effects": [],
                          "cornerRadius": 0,
                          "layoutSizingVertical": "FIXED",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "Filter 6",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA INITIATIVE", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "SemiBold" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 15,
                                  "font": { "family": "Open Sans", "style": "SemiBold" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 291, "height": 24,
                              "relativeTransform": [[1, 0, 0], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          },
                          {
                            "type": "FRAME",
                            "name": "Actions / Minus / Small",
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
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 295], [0, 1, 10]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "VECTOR",
                                "name": "Vector",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 6,
                                  "fills": [],
                                  "strokes": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "effects": [],
                                  "cornerRadius": 0,
                                  "vectorPaths": [
                                    { "windingRule": "NONE", "data": "M 0 0 L 7 0" }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 7, "height": 0,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 6]],
                                  "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1705",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "layoutSizingVertical": "FIXED",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 44]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Checkbox",
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
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 8], [0, 1, 6]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "EXCLUDE",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 15, "height": 15,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 2.5, "y": 2.5,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 15, "height": 15,
                                      "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_30
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 4.166666626930237, "y": 4.166666626930237,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 11.6667, "height": 11.6667,
                                      "relativeTransform": [[1, 0, 4.1667], [0, 1, 4.1667]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_31
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Filter name",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA Academy", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 12,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 275, "height": 24,
                              "relativeTransform": [[1, 0, 32], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1706",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "layoutSizingVertical": "FIXED",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 88]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Checkbox",
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
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 8], [0, 1, 6]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "EXCLUDE",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 15, "height": 15,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 2.5, "y": 2.5,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 15, "height": 15,
                                      "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_32
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 4.166666626930237, "y": 4.166666626930237,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 11.6667, "height": 11.6667,
                                      "relativeTransform": [[1, 0, 4.1667], [0, 1, 4.1667]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_33
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Filter name",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA Assist", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 11,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 275, "height": 24,
                              "relativeTransform": [[1, 0, 32], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1707",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "layoutSizingVertical": "FIXED",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 132]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Checkbox",
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
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 8], [0, 1, 6]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "EXCLUDE",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 15, "height": 15,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 2.5, "y": 2.5,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 15, "height": 15,
                                      "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_34
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 4.166666626930237, "y": 4.166666626930237,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 11.6667, "height": 11.6667,
                                      "relativeTransform": [[1, 0, 4.1667], [0, 1, 4.1667]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_35
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Filter name",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA Events", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 11,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 275, "height": 24,
                              "relativeTransform": [[1, 0, 32], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1708",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "layoutSizingVertical": "FIXED",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 176]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Checkbox",
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
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 8], [0, 1, 6]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "EXCLUDE",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 15, "height": 15,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 2.5, "y": 2.5,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 15, "height": 15,
                                      "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_36
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 4.166666626930237, "y": 4.166666626930237,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 11.6667, "height": 11.6667,
                                      "relativeTransform": [[1, 0, 4.1667], [0, 1, 4.1667]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_37
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Filter name",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA Football Development", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 25,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 275, "height": 24,
                              "relativeTransform": [[1, 0, 32], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1709",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
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
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 220]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Checkbox",
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
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 8], [0, 1, 6]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "EXCLUDE",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 15, "height": 15,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 2.5, "y": 2.5,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 15, "height": 15,
                                      "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_38
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 4.166666626930237, "y": 4.166666626930237,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 11.6667, "height": 11.6667,
                                      "relativeTransform": [[1, 0, 4.1667], [0, 1, 4.1667]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_39
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Filter name",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA Grow", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 9,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 275, "height": 24,
                              "relativeTransform": [[1, 0, 32], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1710",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "layoutSizingVertical": "FIXED",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 264]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Checkbox",
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
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 8], [0, 1, 6]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "EXCLUDE",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 15, "height": 15,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 2.5, "y": 2.5,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 15, "height": 15,
                                      "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_40
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 4.166666626930237, "y": 4.166666626930237,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 11.6667, "height": 11.6667,
                                      "relativeTransform": [[1, 0, 4.1667], [0, 1, 4.1667]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_41
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Filter name",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA Hatrick", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 12,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 275, "height": 24,
                              "relativeTransform": [[1, 0, 32], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1711",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "layoutSizingVertical": "FIXED",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 308]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Checkbox",
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
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 8], [0, 1, 6]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "EXCLUDE",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 15, "height": 15,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 2.5, "y": 2.5,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 15, "height": 15,
                                      "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_42
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 4.166666626930237, "y": 4.166666626930237,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 11.6667, "height": 11.6667,
                                      "relativeTransform": [[1, 0, 4.1667], [0, 1, 4.1667]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_43
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Filter name",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA Anti-Doping and Medical", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 28,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 275, "height": 24,
                              "relativeTransform": [[1, 0, 32], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1712",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                          "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "layoutSizingVertical": "FIXED",
                          "layoutSizingHorizontal": "FILL"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 307, "height": 32,
                          "relativeTransform": [[1, 0, 0], [0, 1, 352]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Checkbox",
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
                              "width": 20, "height": 20,
                              "relativeTransform": [[1, 0, 8], [0, 1, 6]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "BOOLEAN_OPERATION",
                                "booleanOperation": "EXCLUDE",
                                "name": "Shape",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "x": 2.5, "y": 2.5,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                  "width": 15, "height": 15,
                                  "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                },
                                "children": [
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 2.5, "y": 2.5,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 15, "height": 15,
                                      "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_44
                                  },
                                  {
                                    "type": "VECTOR",
                                    "shouldFlatten": true,
                                    "name": "Path",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "x": 4.166666626930237, "y": 4.166666626930237,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0, "g": 0, "b": 0 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0,
                                      "vectorPaths": [
                                        {
                                          "windingRule": "EVENODD",
                                          "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 11.6667, "height": 11.6667,
                                      "relativeTransform": [[1, 0, 4.1667], [0, 1, 4.1667]]
                                    },
                                    "svgContent": SVG_Proposal_notification_Synth_Path_45
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "TEXT",
                            "name": "Filter name",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
                              "characters": "UEFA Intelligence Center", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                              "paragraphSpacing": 0, "paragraphIndent": 0,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "layoutSizingVertical": "HUG",
                              "letterSpacing": { "unit": "PIXELS", "value": 0 },
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "layoutSizingHorizontal": "FILL",
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 24,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 275, "height": 24,
                              "relativeTransform": [[1, 0, 32], [0, 1, 4]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Frame 1649",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
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
                          "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 },
                          "boundVariables": {}
                        }
                      ],
                      "effects": [],
                      "cornerRadius": 0,
                      "layoutSizingVertical": "FIXED",
                      "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 307, "height": 32,
                      "relativeTransform": [[1, 0, 16], [0, 1, 646]],
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
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
                          "characters": "ORGANISATION", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "layoutSizingVertical": "HUG",
                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                          "lineHeight": { "unit": "PIXELS", "value": 24 },
                          "font": { "family": "Open Sans", "style": "SemiBold" },
                          "layoutSizingHorizontal": "FILL",
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 12,
                              "font": { "family": "Open Sans", "style": "SemiBold" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 291, "height": 24,
                          "relativeTransform": [[1, 0, 0], [0, 1, 4]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Actions / Add / Small",
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
                          "width": 12, "height": 12,
                          "relativeTransform": [[1, 0, 295], [0, 1, 10]],
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
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                              "x": 2, "y": 2,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 8, "height": 8,
                              "relativeTransform": [[1, 0, 2], [0, 1, 2]],
                              "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                            },
                            "svgContent": SVG_Proposal_notification_assets_icon_Union_I3379_17261_5250_18144_svg_orig
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Frame 1656",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0,
                      "layoutSizingVertical": "HUG",
                      "layoutSizingHorizontal": "FILL"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 307, "height": 0,
                      "relativeTransform": [[1, 0, 16], [0, 1, 694]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Frame 1658",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 32, "paddingRight": 120, "paddingBottom": 32, "paddingLeft": 120,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0,
              "layoutSizingVertical": "HUG",
              "layoutSizingHorizontal": "FILL"
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 1680, "height": 64,
              "relativeTransform": [[1, 0, 0], [0, 1, 1578]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "LINE",
                "name": "Line 39",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "fills": [],
                  "strokes": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.8901960849761963, "g": 0.9098039269447327, "b": 0.9176470637321472 },
                      "boundVariables": {}
                    }
                  ],
                  "effects": []
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 1440, "height": 0,
                  "relativeTransform": [[1, 0, 120], [0, 1, 32]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                }
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Frame 1680",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 0, "paddingRight": 120, "paddingBottom": 8, "paddingLeft": 120,
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
              "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
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
              "width": 1680, "height": 48,
              "relativeTransform": [[1, 0, 0], [0, 1, 1642]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Related resources",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "characters": "Related resources", "fontSize": 32,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "layoutSizingHorizontal": "HUG",
                  "layoutSizingVertical": "HUG",
                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                  "lineHeight": { "unit": "PIXELS", "value": 40 },
                  "font": { "family": "Open Sans", "style": "Regular" },
                  "richTextSpans": [
                    {
                      "start": 0,
                      "end": 17,
                      "font": { "family": "Open Sans", "style": "Regular" },
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                          "boundVariables": {}
                        }
                      ],
                      "fontSize": 32
                    }
                  ]
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 268, "height": 40,
                  "relativeTransform": [[1, 0, 120], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                }
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Frame 1681",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 48, "paddingRight": 120, "paddingBottom": 72, "paddingLeft": 120,
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
              "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "MIN",
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
              "width": 1680, "height": 558,
              "relativeTransform": [[1, 0, 0], [0, 1, 1690]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Frame 1617",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "NORMAL",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 64, "paddingRight": 32, "paddingBottom": 64, "paddingLeft": 32,
                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                  "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                      "color": { "r": 1, "g": 1, "b": 1 },
                      "boundVariables": {}
                    },
                    {
                      "visible": true, "opacity": 1, "blendMode": "MULTIPLY", "type": "IMAGE",
                      "scaleMode": "CROP",
                      "imageTransform": [
                        [ 1.5813429355621338, 0, -0.7785917520523071 ],
                        [ 0, 0.5250946879386902, 0.10719798505306244 ]
                      ],
                      "scalingFactor": 1,
                      "filters": {
                        "exposure": 0,
                        "contrast": 0,
                        "saturation": 0,
                        "temperature": 0,
                        "tint": 0,
                        "highlights": 0,
                        "shadows": 0
                      },
                      "originalImageHash": "150b63fa646ed8a39e228e22e806462134ac57cc",
                      "assetRef": IMG_Proposal_notification_img_2_png
                    }
                  ],
                  "strokes": [],
                  "effects": [
                    {
                      "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                      "radius": 6,
                      "boundVariables": {},
                      "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                      "offset": { "x": 0, "y": 2 },
                      "spread": 0,
                      "showShadowBehindNode": true
                    }
                  ],
                  "cornerRadius": 0,
                  "layoutSizingVertical": "FIXED",
                  "layoutSizingHorizontal": "FILL"
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 1, "height": 320,
                  "relativeTransform": [[1, 0, 120], [0, 1, 48]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1615",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 26, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                      "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                      "width": 1, "height": 202,
                      "relativeTransform": [[1, 0, 0.5], [0, 1, 59]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "UEFA Academy",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "UEFA Academy", "fontSize": 24,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "layoutSizingHorizontal": "FIXED",
                          "layoutSizingVertical": "HUG",
                          "letterSpacing": { "unit": "PIXELS", "value": 0 },
                          "lineHeight": { "unit": "PIXELS", "value": 30 },
                          "font": { "family": "Open Sans", "style": "Regular" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 12,
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 24
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 390, "height": 30,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "TEXT",
                        "name": "The UEFA Academy trains managers, specialists and players to supply the world’s favourite sport with the best professionals.",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "The UEFA Academy trains managers, specialists and players to supply the world’s favourite sport with the best professionals.", "fontSize": 16,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "layoutSizingHorizontal": "FIXED",
                          "layoutSizingVertical": "HUG",
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "PIXELS", "value": 24 },
                          "font": { "family": "Roboto", "style": "Regular" },
                          "richTextSpans": [
                            {
                              "start": 0,
                              "end": 124,
                              "font": { "family": "Roboto", "style": "Regular" },
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                  "boundVariables": {}
                                }
                              ],
                              "fontSize": 16
                            }
                          ]
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 361, "height": 72,
                          "relativeTransform": [[1, 0, 0], [0, 1, 56]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Primary",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 12, "paddingRight": 24, "paddingBottom": 12, "paddingLeft": 24,
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
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 100,
                          "layoutSizingHorizontal": "HUG",
                          "layoutSizingVertical": "HUG"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 135, "height": 48,
                          "relativeTransform": [[1, 0, 0], [0, 1, 154]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "TEXT",
                            "name": "Label",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "characters": "Learn more", "fontSize": 16,
                              "textCase": "ORIGINAL", "textDecoration": "NONE",
                              "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
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
                              "lineHeight": { "unit": "PIXELS", "value": 24 },
                              "font": { "family": "Open Sans", "style": "Regular" },
                              "richTextSpans": [
                                {
                                  "start": 0,
                                  "end": 10,
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "fontSize": 16
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 87, "height": 24,
                              "relativeTransform": [[1, 0, 24], [0, 1, 12]],
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
                "name": "cards_row",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
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
                  "layoutSizingHorizontal": "HUG",
                  "layoutSizingVertical": "HUG"
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 1444, "height": 438,
                  "relativeTransform": [[1, 0, 121], [0, 1, 48]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1635",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 1, "g": 1, "b": 1 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [
                        {
                          "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                          "radius": 6,
                          "boundVariables": {},
                          "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                          "offset": { "x": 0, "y": 2 },
                          "spread": 0,
                          "showShadowBehindNode": true
                        }
                      ],
                      "cornerRadius": 4,
                      "layoutSizingHorizontal": "FIXED",
                      "layoutSizingVertical": "HUG"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 343, "height": 438,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "RECTANGLE",
                        "name": "Rectangle 45",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "STRETCH", "layoutGrow": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                              "scaleMode": "FILL",
                              "imageTransform": [[1, 0, 0], [0, 0.9831932783126831, 0.008403373882174492]],
                              "scalingFactor": 1,
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
                              "originalImageHash": "53600b9b753bcf27aa29e70bd45039034c373525",
                              "assetRef": IMG_Proposal_notification_img_3_png
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "topLeftRadius": 4,
                          "topRightRadius": 4
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 343, "height": 229,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1615",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 24, "paddingRight": 16, "paddingBottom": 24, "paddingLeft": 16,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                          "width": 343, "height": 209,
                          "relativeTransform": [[1, 0, 0], [0, 1, 229]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Frame 1644",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                              "width": 311, "height": 161,
                              "relativeTransform": [[1, 0, 16], [0, 1, 24]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Frame 1713",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                                  "width": 311, "height": 50,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "Refereeing in Women’s Football: Motivation.",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 1,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "fontSize": 20,
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 25 },
                                      "font": { "family": "Open Sans", "style": "SemiBold" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 43,
                                          "font": { "family": "Open Sans", "style": "SemiBold" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 20
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 311, "height": 50,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "TEXT",
                                "name": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingVertical": "FIXED",
                                  "fontSize": 16,
                                  "textTruncation": "ENDING",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 24 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "layoutSizingHorizontal": "FILL",
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 152,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 16
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 311, "height": 95,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 66]],
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
                    "name": "Frame 1636",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 1, "g": 1, "b": 1 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [
                        {
                          "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                          "radius": 6,
                          "boundVariables": {},
                          "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                          "offset": { "x": 0, "y": 2 },
                          "spread": 0,
                          "showShadowBehindNode": true
                        }
                      ],
                      "cornerRadius": 4,
                      "layoutSizingHorizontal": "FIXED",
                      "layoutSizingVertical": "HUG"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 343, "height": 438,
                      "relativeTransform": [[1, 0, 367], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "RECTANGLE",
                        "name": "Rectangle 45",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "STRETCH", "layoutGrow": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                              "scaleMode": "FILL",
                              "imageTransform": [[1, 0, 0], [0, 0.9078576564788818, 0.046071168035268784]],
                              "scalingFactor": 1,
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
                              "originalImageHash": "d6f3b23264dd483546de453eeef7c6782b5d923f",
                              "assetRef": IMG_Proposal_notification_img_4_png
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "topLeftRadius": 4,
                          "topRightRadius": 4
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 343, "height": 229,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1615",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 24, "paddingRight": 16, "paddingBottom": 24, "paddingLeft": 16,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                          "width": 343, "height": 209,
                          "relativeTransform": [[1, 0, 0], [0, 1, 229]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Frame 1644",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                              "width": 311, "height": 161,
                              "relativeTransform": [[1, 0, 16], [0, 1, 24]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Frame 1713",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                                  "width": 311, "height": 50,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "Refereeing in Women’s Football: Motivation.",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 1,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "fontSize": 20,
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 25 },
                                      "font": { "family": "Open Sans", "style": "SemiBold" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 43,
                                          "font": { "family": "Open Sans", "style": "SemiBold" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 20
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 311, "height": 50,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "TEXT",
                                "name": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingVertical": "FIXED",
                                  "fontSize": 16,
                                  "textTruncation": "ENDING",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 24 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "layoutSizingHorizontal": "FILL",
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 152,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 16
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 311, "height": 95,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 66]],
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
                    "name": "Frame 1637",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 1, "g": 1, "b": 1 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [
                        {
                          "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                          "radius": 6,
                          "boundVariables": {},
                          "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                          "offset": { "x": 0, "y": 2 },
                          "spread": 0,
                          "showShadowBehindNode": true
                        }
                      ],
                      "cornerRadius": 4,
                      "layoutSizingHorizontal": "FIXED",
                      "layoutSizingVertical": "HUG"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 343, "height": 438,
                      "relativeTransform": [[1, 0, 734], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "RECTANGLE",
                        "name": "Rectangle 45",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "STRETCH", "layoutGrow": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                              "scaleMode": "FILL",
                              "imageTransform": [[1, 0, 0], [0, 0.4666898846626282, 0.2666550576686859]],
                              "scalingFactor": 1,
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
                              "originalImageHash": "707cbb62af7d9774194feffae7db7284a4719141",
                              "assetRef": IMG_Proposal_notification_img_5_png
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "topLeftRadius": 4,
                          "topRightRadius": 4
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 343, "height": 229,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1615",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 24, "paddingRight": 16, "paddingBottom": 24, "paddingLeft": 16,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                          "width": 343, "height": 209,
                          "relativeTransform": [[1, 0, 0], [0, 1, 229]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Frame 1644",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                              "width": 311, "height": 161,
                              "relativeTransform": [[1, 0, 16], [0, 1, 24]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Frame 1713",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                                  "width": 311, "height": 50,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "Refereeing in Women’s Football: Motivation.",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 1,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "fontSize": 20,
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 25 },
                                      "font": { "family": "Open Sans", "style": "SemiBold" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 43,
                                          "font": { "family": "Open Sans", "style": "SemiBold" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 20
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 311, "height": 50,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "TEXT",
                                "name": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingVertical": "FIXED",
                                  "fontSize": 16,
                                  "textTruncation": "ENDING",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 24 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "layoutSizingHorizontal": "FILL",
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 152,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 16
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 311, "height": 95,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 66]],
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
                    "name": "Frame 1638",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 1, "g": 1, "b": 1 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [
                        {
                          "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                          "radius": 6,
                          "boundVariables": {},
                          "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                          "offset": { "x": 0, "y": 2 },
                          "spread": 0,
                          "showShadowBehindNode": true
                        }
                      ],
                      "cornerRadius": 4,
                      "layoutSizingHorizontal": "FIXED",
                      "layoutSizingVertical": "HUG"
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 343, "height": 438,
                      "relativeTransform": [[1, 0, 1101], [0, 1, 0]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "RECTANGLE",
                        "name": "Rectangle 45",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "STRETCH", "layoutGrow": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                              "scaleMode": "FILL",
                              "imageTransform": [[1, 0, 0], [0, 0.8672073483467102, 0.06639634072780609]],
                              "scalingFactor": 1,
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
                              "originalImageHash": "53d394c4577bd2ad4235d0666feb13b9ca37fd82",
                              "assetRef": IMG_Proposal_notification_img_6_png
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "topLeftRadius": 4,
                          "topRightRadius": 4
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 343, "height": 229,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Frame 1615",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 24, "paddingRight": 16, "paddingBottom": 24, "paddingLeft": 16,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                          "width": 343, "height": 209,
                          "relativeTransform": [[1, 0, 0], [0, 1, 229]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Frame 1644",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                              "width": 311, "height": 161,
                              "relativeTransform": [[1, 0, 16], [0, 1, 24]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Frame 1713",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                                  "width": 311, "height": 50,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "TEXT",
                                    "name": "Refereeing in Women’s Football: Motivation.",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 1,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "fontSize": 20,
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 25 },
                                      "font": { "family": "Open Sans", "style": "SemiBold" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 43,
                                          "font": { "family": "Open Sans", "style": "SemiBold" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 20
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 311, "height": 50,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  }
                                ]
                              },
                              {
                                "type": "TEXT",
                                "name": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA",
                                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingVertical": "FIXED",
                                  "fontSize": 16,
                                  "textTruncation": "ENDING",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 24 },
                                  "font": { "family": "Open Sans", "style": "Regular" },
                                  "layoutSizingHorizontal": "FILL",
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 152,
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 16
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 311, "height": 95,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 66]],
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
          },
          {
            "type": "FRAME",
            "name": "Footer",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 88, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
              "layoutSizingVertical": "HUG",
              "layoutSizingHorizontal": "FILL"
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 1680, "height": 491,
              "relativeTransform": [[1, 0, 0], [0, 1, 2248]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Frame 6",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 64, "paddingRight": 120, "paddingBottom": 64, "paddingLeft": 120,
                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
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
                  "width": 1680, "height": 260,
                  "relativeTransform": [[1, 0, 0], [0, 1, 88]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                      "width": 1440, "height": 132,
                      "relativeTransform": [[1, 0, 120], [0, 1, 64]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Frame 1921",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                          "layoutSizingVertical": "FIXED"
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 342, "height": 54,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Link ⏵ uefa-academy-logo.svg",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                              "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                              "fills": [],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0,
                              "layoutSizingVertical": "HUG",
                              "layoutSizingHorizontal": "FILL"
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 342, "height": 54,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "uefa-academy-logo.svg",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                  "strokeWeight": 0.771428644657135, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "strokeTopWeight": 0.771428644657135, "strokeRightWeight": 0.771428644657135, "strokeBottomWeight": 0.771428644657135, "strokeLeftWeight": 0.771428644657135,
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
                                  "width": 223.7143, "height": 54,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                  "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
                                },
                                "children": [
                                  {
                                    "type": "GROUP",
                                    "name": "Clip path group",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "x": 0.10721588134765625, "y": 0.732666015625,
                                      "effects": []
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 223.7143, "height": 52.4571,
                                      "relativeTransform": [[1, 0, 0.1072], [0, 1, 0.7327]]
                                    },
                                    "svgContent": SVG_Proposal_notification_assets_vector_Clip_path_group_I3379_17335_1248_24614_svg_orig
                                  },
                                  {
                                    "type": "RECTANGLE",
                                    "name": "Rectangle",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 0.3974400460720062, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "strokeTopWeight": 0.3974400460720062, "strokeRightWeight": 0.3974400460720062, "strokeBottomWeight": 0.3974400460720062, "strokeLeftWeight": 0.3974400460720062,
                                      "x": 6.9423828125, "y": 6.942626953125,
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
                                          "originalImageHash": "b3524816a719dac8192dcd56fcba25850b4862ec",
                                          "assetRef": IMG_Proposal_notification_img_10_png
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                      "width": 39.744, "height": 39.3466,
                                      "relativeTransform": [[1, 0, 6.9424], [0, 1, 6.9426]],
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
                        "name": "Frame 3",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                          "width": 342, "height": 132,
                          "relativeTransform": [[1, 0, 366], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Frame 23",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                              "width": 342, "height": 132,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Text",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                                  "fills": [],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0,
                                  "layoutSizingVertical": "HUG",
                                  "layoutSizingHorizontal": "FILL"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 342, "height": 132,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
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
                                      "characters": "Terms and Conditions", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 20,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 342, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "CENTER", "vertical": "SCALE" }
                                    }
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "Text",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "characters": "Contact us", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 10,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 342, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 37]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "Text",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "characters": "Cookies policy", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 14,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 342, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 74]],
                                      "constraints": { "horizontal": "CENTER", "vertical": "SCALE" }
                                    }
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "Text",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "characters": "UEFA.com", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 8,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 342, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 111]],
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
                        "name": "Frame 1",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                          "width": 342, "height": 132,
                          "relativeTransform": [[1, 0, 732], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Frame 23",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                              "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                              "width": 342, "height": 132,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                              {
                                "type": "FRAME",
                                "name": "Text",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                                  "fills": [],
                                  "strokes": [],
                                  "effects": [],
                                  "cornerRadius": 0,
                                  "layoutSizingVertical": "HUG",
                                  "layoutSizingHorizontal": "FILL"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 342, "height": 132,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
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
                                      "characters": "UEFA Academy catalogue", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 22,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 342, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                      "constraints": { "horizontal": "CENTER", "vertical": "SCALE" }
                                    }
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "Text",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "characters": "UEFA Academy Alumni Association", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 31,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 342, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 37]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "Text",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "characters": "About the UEFA Academy", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 22,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 342, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 74]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "TEXT",
                                    "name": "Text",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                                      "characters": "UEFA Academy", "fontSize": 14,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingVertical": "HUG",
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "layoutSizingHorizontal": "FILL",
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 12,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 14
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 342, "height": 21,
                                      "relativeTransform": [[1, 0, 0], [0, 1, 111]],
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
                        "name": "Frame 2",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                          "layoutMode": "VERTICAL", "itemSpacing": 48, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                          "width": 342, "height": 127.6801,
                          "relativeTransform": [[1, 0, 1098], [0, 1, 0]],
                          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                        },
                        "children": [
                          {
                            "type": "FRAME",
                            "name": "Frame 1",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                              "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                              "width": 342, "height": 127.6801,
                              "relativeTransform": [[1, 0, 0], [0, 1, 0]],
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
                                  "characters": "Certification", "fontSize": 16,
                                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                  "paragraphSpacing": 0, "paragraphIndent": 0,
                                  "fills": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [],
                                  "effects": [],
                                  "layoutSizingVertical": "HUG",
                                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                  "lineHeight": { "unit": "PIXELS", "value": 20 },
                                  "font": { "family": "Open Sans", "style": "SemiBold" },
                                  "layoutSizingHorizontal": "FILL",
                                  "richTextSpans": [
                                    {
                                      "start": 0,
                                      "end": 13,
                                      "font": { "family": "Open Sans", "style": "SemiBold" },
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "fontSize": 16
                                    }
                                  ]
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 342, "height": 20,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                  "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                }
                              },
                              {
                                "type": "FRAME",
                                "name": "Frame 1",
                                "props": {
                                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                  "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                  "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                  "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                  "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 3, "strokeLeftWeight": 0,
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
                                      "color": { "r": 1, "g": 1, "b": 1 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "strokes": [
                                    {
                                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                      "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                                      "boundVariables": {}
                                    }
                                  ],
                                  "effects": [
                                    {
                                      "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                      "radius": 6,
                                      "boundVariables": {},
                                      "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
                                      "offset": { "x": 0, "y": 2 },
                                      "spread": 0,
                                      "showShadowBehindNode": true
                                    }
                                  ],
                                  "cornerRadius": 8,
                                  "layoutSizingHorizontal": "HUG",
                                  "layoutSizingVertical": "HUG"
                                },
                                "layoutProps": {
                                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                  "width": 310.049, "height": 91.6801,
                                  "relativeTransform": [[1, 0, 0], [0, 1, 36]],
                                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                },
                                "children": [
                                  {
                                    "type": "RECTANGLE",
                                    "name": "image 29",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                      "layoutAlign": "INHERIT", "layoutGrow": 0,
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
                                          "imageHash": "7820a03f26025b2aef61fe5c54fe6621a5991c07"
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "cornerRadius": 0
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 105.1554, "height": 75.6801,
                                      "relativeTransform": [[1, 0, 8], [0, 1, 8]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "LINE",
                                    "name": "Line 63",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                                      "fills": [],
                                      "strokes": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.6078431606292725, "g": 0.658823549747467, "b": 0.6784313917160034 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "effects": []
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 49.4197, "height": 0,
                                      "relativeTransform": [[0, -1, 129.1554], [1, 0, 21.1302]],
                                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    }
                                  },
                                  {
                                    "type": "TEXT",
                                    "props": {
                                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                      "isMask": false, "maskType": "ALPHA",
                                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                      "paragraphSpacing": 0, "paragraphIndent": 0,
                                      "fills": [
                                        {
                                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                          "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                          "boundVariables": {}
                                        }
                                      ],
                                      "strokes": [],
                                      "effects": [],
                                      "layoutSizingHorizontal": "FIXED",
                                      "layoutSizingVertical": "HUG",
                                      "fontSize": 12,
                                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                      "lineHeight": { "unit": "PIXELS", "value": 16 },
                                      "font": { "family": "Open Sans", "style": "Regular" },
                                      "richTextSpans": [
                                        {
                                          "start": 0,
                                          "end": 52,
                                          "font": { "family": "Open Sans", "style": "Regular" },
                                          "fills": [
                                            {
                                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                              "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                                              "boundVariables": {}
                                            }
                                          ],
                                          "fontSize": 12
                                        }
                                      ]
                                    },
                                    "layoutProps": {
                                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                      "width": 156.8936, "height": 48,
                                      "relativeTransform": [[1, 0, 145.1554], [0, 1, 21.84]],
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
              },
              {
                "type": "FRAME",
                "name": "Frame 1587",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 40, "paddingRight": 120, "paddingBottom": 40, "paddingLeft": 120,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
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
                  "width": 1680, "height": 143,
                  "relativeTransform": [[1, 0, 0], [0, 1, 348]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "© 1998-2022 UEFA. All rights reserved. The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected by trademarks and/or copyright of UEFA. No use for commercial purposes may be made of such trademarks. Use of UEFA.com signifies your agreement to the Terms and Conditions and Privacy Policy.",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "textCase": "ORIGINAL", "textDecoration": "mixed",
                      "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
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
                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 21 },
                      "font": { "family": "Open Sans", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 277,
                          "font": { "family": "Open Sans", "style": "Regular" },
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
                          "start": 277,
                          "end": 317,
                          "font": { "family": "Open Sans", "style": "Regular" },
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
                      "width": 1440, "height": 63,
                      "relativeTransform": [[1, 0, 120], [0, 1, 40]],
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
  };

        const root = await this.renderDefinition(structure);
        
        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

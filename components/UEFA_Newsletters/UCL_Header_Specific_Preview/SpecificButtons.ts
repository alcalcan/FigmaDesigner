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

export class SpecificButtons extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
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
                "x": 44, "y": 547,
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
                "relativeTransform": [[1, 0, 44], [0, 1, 547]],
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
                        "relativeTransform": [[1, 0, 57], [0, 1, 12]],
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
                          "svgContent": SVG_specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig
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
                        "characters": "Where to watch", "fontSize": 20,
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
                            "end": 14,
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
                        "width": 150, "height": 20,
                        "relativeTransform": [[1, 0, 89], [0, 1, 14]],
                        "constraints": { "horizontal": "STRETCH", "vertical": "CENTER" }
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

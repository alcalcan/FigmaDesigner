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

export class GenericButtons extends BaseComponent {
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
                "x": 40, "y": 559,
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
            };
    
    const root = await this.renderDefinition(structure);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}

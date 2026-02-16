import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import SVG_Info_raw_assets_icon_Vector_976_124_svg_20x20 from "./assets/Info_raw_assets_icon_Vector_976_124_svg_20x20.svg";
import SVG_Info_raw_assets_icon_Vector_976_133_svg_18_715295791625977x19_192251205444336 from "./assets/Info_raw_assets_icon_Vector_976_133_svg_18_715295791625977x19_192251205444336.svg";


export class Info_raw extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Info_raw",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 120, "paddingBottom": 0, "paddingLeft": 120,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0.780392, "g": 0.917647, "b": 0.984313 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 4
          },
          "layoutProps": { "width": 1680, "height": 90, "parentIsAutoLayout": false },
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
                "layoutPositioning": "ABSOLUTE"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "ABSOLUTE",
                "width": 64, "height": 64,
                "relativeTransform": [[1, 0, 120], [0, 1, 0]]
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
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 1440, "height": 90,
                "relativeTransform": [[1, 0, 120], [0, 1, 0]]
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
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 24, "height": 30,
                    "relativeTransform": [[1, 0, 0], [0, 1, 16]]
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
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 24, "height": 24,
                        "relativeTransform": [[1, 0, 0], [0, 1, 6]]
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
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 20, "height": 20,
                            "relativeTransform": [[1, 0, 2], [0, 1, 2]]
                          },
                          "svgContent": SVG_Info_raw_assets_icon_Vector_976_124_svg_20x20
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
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "INHERIT", "layoutGrow": 1,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 1400, "height": 58,
                    "relativeTransform": [[1, 0, 40], [0, 1, 16]]
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
                        "letterSpacing": { "unit": "PIXELS", "value": -0.100000 },
                        "lineHeight": { "unit": "PERCENT", "value": 150 },
                        "font": { "family": "Manrope", "style": "Bold" }
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 146, "height": 30,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
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
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 1400, "height": 24,
                        "relativeTransform": [[1, 0, 0], [0, 1, 34]]
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
                            "letterSpacing": { "unit": "PIXELS", "value": 0 },
                            "lineHeight": { "unit": "PERCENT", "value": 129.999995 },
                            "font": { "family": "Manrope", "style": "SemiBold" }
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 157, "height": 21,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
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
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 24, "height": 24,
                            "relativeTransform": [[1, 0, 161], [0, 1, 0]]
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
                                "x": 2.642333, "y": 2.5,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 18.715295, "height": 19.192251,
                                "relativeTransform": [[1, 0, 2.642333], [0, 1, 2.5]]
                              },
                              "svgContent": SVG_Info_raw_assets_icon_Vector_976_133_svg_18_715295791625977x19_192251205444336
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
                            "letterSpacing": { "unit": "PIXELS", "value": 0 },
                            "lineHeight": { "unit": "PERCENT", "value": 129.999995 },
                            "font": { "family": "Manrope", "style": "SemiBold" }
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 1211, "height": 21,
                            "relativeTransform": [[1, 0, 189], [0, 1, 0]]
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

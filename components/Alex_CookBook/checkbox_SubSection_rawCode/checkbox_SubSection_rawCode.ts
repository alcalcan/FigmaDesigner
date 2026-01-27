import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_assets_icon_Vector_1035_289_svg_12x7_400000095367432 from "./assets/assets_icon_Vector_1035_289_svg_12x7_400000095367432.svg";


export class checkbox_SubSection_rawCode extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "checkbox_SubSection_rawCode",
    "props": {
      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
      "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
      "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
      "cornerRadius": 8
    },
    "layoutProps": { "width": 1440, "height": 176, "parentIsAutoLayout": false },
    "children": [
      {
        "type": "FRAME",
        "name": "Header",
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
          "fills": [],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 1392, "height": 40,
          "relativeTransform": [[1, 0, 24], [0, 1, 24]]
        },
        "children": [
          {
            "type": "TEXT",
            "name": "Subject",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA",
              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "layoutAlign": "INHERIT", "layoutGrow": 1,
              "characters": "Subject", "fontSize": 20,
              "textCase": "ORIGINAL", "textDecoration": "NONE",
              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
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
              "letterSpacing": { "unit": "PIXELS", "value": 0 },
              "lineHeight": { "unit": "PIXELS", "value": 25 },
              "font": { "family": "Open Sans", "style": "SemiBold" }
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 1196, "height": 25,
              "relativeTransform": [[1, 0, 0], [0, 1, 7.5]]
            }
          },
          {
            "type": "FRAME",
            "name": "Frame 1695",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 4, "paddingRight": 16, "paddingBottom": 4, "paddingLeft": 16,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
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
              "strokes": [
                {
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                  "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                  "boundVariables": {}
                }
              ],
              "effects": [],
              "cornerRadius": 100
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 108, "height": 29,
              "relativeTransform": [[1, 0, 1220], [0, 1, 5.5]]
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Filter name",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "characters": "Subjects", "fontSize": 14,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                  "paragraphSpacing": 14, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                  "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                  "font": { "family": "Manrope", "style": "Regular" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 58, "height": 18,
                  "relativeTransform": [[1, 0, 16], [0, 1, 5.5]]
                }
              },
              {
                "type": "TEXT",
                "name": "Filter name",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "INHERIT", "layoutGrow": 0,
                  "characters": "2", "fontSize": 16,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                  "paragraphSpacing": 20, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PIXELS", "value": 0 },
                  "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                  "font": { "family": "Manrope", "style": "Bold" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 10, "height": 21,
                  "relativeTransform": [[1, 0, 82], [0, 1, 4]]
                }
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Frame 1696",
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
              "fills": [
                {
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                  "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
                  "boundVariables": {}
                }
              ],
              "strokes": [],
              "effects": [],
              "cornerRadius": 100
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 40, "height": 40,
              "relativeTransform": [[1, 0, 1352], [0, 1, 0]]
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Navigation / chevron-up",
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
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 24, "height": 24,
                  "relativeTransform": [[1, -1.224648970167536e-16, 8], [1.224648970167536e-16, 1, 8]]
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
                      "x": 6, "y": 7.9749755859375,
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                      "width": 12, "height": 7.400000095367432,
                      "relativeTransform": [[1, 1.224648970167536e-16, 6], [-1.224648970167536e-16, 1, 7.9749755859375]]
                    },
                    "svgContent": SVG_assets_icon_Vector_1035_289_svg_12x7_400000095367432
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Frame 1928",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
          "layoutMode": "HORIZONTAL", "itemSpacing": 32, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
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
          "width": 1392, "height": 64,
          "relativeTransform": [[1, 0, 24], [0, 1, 88]]
        },
        "children": [
          {
            "type": "FRAME",
            "name": "Frame 1936",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
              "width": 265, "height": 64,
              "relativeTransform": [[1, 0, 0], [0, 1, 0]]
            },
            "children": [
              ...[
                          { "name": "Anti-Doping, Medical and Health", "hasCheckbox": true, "isSelected": false },
                          { "name": "Communication, PR and Media", "hasCheckbox": true, "isSelected": false }
                        ].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "Frame 1926",
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
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 265, "height": 24,
            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
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
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 20, "height": 20,
                "relativeTransform": [[1, 0, 0], [0, 1, 2]]
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
                            "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 15, "height": 15,
                        "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                      }
                    },
                    {
                      "type": "VECTOR",
                      "name": "Path",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 4.166666507720947, "y": 4.166666507720947,
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
                        "width": 11.666666984558105, "height": 11.666666984558105,
                        "relativeTransform": [[1, 0, 4.166666507720947], [0, 1, 4.166666507720947]]
                      }
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
                "characters": "Anti-Doping, Medical and Health", "fontSize": 16,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
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
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PIXELS", "value": 24 },
                "font": { "family": "Open Sans", "style": "Regular" }
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 241, "height": 24,
                "relativeTransform": [[1, 0, 24], [0, 1, 0]]
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
        })
            ]
          },
          {
            "type": "FRAME",
            "name": "Frame 1937",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": false,
              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
              "width": 279, "height": 64,
              "relativeTransform": [[1, 0, 297], [0, 1, 0]]
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Frame 1928",
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
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 279, "height": 24,
                  "relativeTransform": [[1, 0, 0], [0, 1, 0]]
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
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 20, "height": 20,
                      "relativeTransform": [[1, 0, 0], [0, 1, 2]]
                    },
                    "children": [
                      {
                        "type": "BOOLEAN_OPERATION",
                        "booleanOperation": "SUBTRACT",
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
                            "name": "Shape",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 2.5, "y": 2.5,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.36705881357192993, "b": 0.7058823704719543 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0,
                              "vectorPaths": [
                                {
                                  "windingRule": "EVENODD",
                                  "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 15, "height": 15,
                              "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                            }
                          },
                          {
                            "type": "VECTOR",
                            "name": "Shape",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 5, "y": 6.666666507720947,
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
                                  "data": "M 1.297702431678772 4.40501574866077 C 0.9889980256557465 4.120446377703118 0.5021395832300186 4.133755410274214 0.2102736085653305 4.4347422558302725 C -0.0815923660993576 4.735729101386331 -0.06794212758541107 5.21041655884848 0.24076227843761444 5.494985929806132 L 2.1934242248535156 7.2949852813075555 C 2.489961266517639 7.568338577323822 2.9538275003433228 7.568338577323822 3.2503645420074463 7.2949852813075555 L 9.759237289428711 1.2949865687679651 C 10.067941695451736 1.0104171978103127 10.081592231988907 0.5357301128772172 9.789726257324219 0.23474326732115855 C 9.49786028265953 -0.06624357823490004 9.011001616716385 -0.07955255120134677 8.70229721069336 0.20501681975630567 L 2.7218942642211914 5.717862492743333 L 1.297702431678772 4.40501574866077 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 10, "height": 7.5,
                              "relativeTransform": [[1, 0, 5], [0, 1, 6.666666507720947]]
                            }
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
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "characters": "Event and Volunteer Management", "fontSize": 16,
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
                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 24 },
                      "font": { "family": "Open Sans", "style": "Regular" }
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 255, "height": 24,
                      "relativeTransform": [[1, 0, 24], [0, 1, 0]]
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Frame 1929",
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
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 272, "height": 24,
                  "relativeTransform": [[1, 0, 0], [0, 1, 40]]
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
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 20, "height": 20,
                      "relativeTransform": [[1, 0, 0], [0, 1, 2]]
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
                                  "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 15, "height": 15,
                              "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                            }
                          },
                          {
                            "type": "VECTOR",
                            "name": "Path",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 4.166666507720947, "y": 4.166666507720947,
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
                              "width": 11.666666984558105, "height": 11.666666984558105,
                              "relativeTransform": [[1, 0, 4.166666507720947], [0, 1, 4.166666507720947]]
                            }
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
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "characters": "Football and Social Responsibility", "fontSize": 16,
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
                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 24 },
                      "font": { "family": "Open Sans", "style": "Regular" }
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 248, "height": 24,
                      "relativeTransform": [[1, 0, 24], [0, 1, 0]]
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Frame 1938",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
              "width": 379, "height": 64,
              "relativeTransform": [[1, 0, 608], [0, 1, 0]]
            },
            "children": [
              {
                "type": "FRAME",
                "name": "Frame 1930",
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
                  "fills": [],
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 189, "height": 24,
                  "relativeTransform": [[1, 0, 0], [0, 1, 0]]
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
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 20, "height": 20,
                      "relativeTransform": [[1, 0, 0], [0, 1, 2]]
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
                                  "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 15, "height": 15,
                              "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                            }
                          },
                          {
                            "type": "VECTOR",
                            "name": "Path",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 4.166666507720947, "y": 4.166666507720947,
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
                              "width": 11.666666984558105, "height": 11.666666984558105,
                              "relativeTransform": [[1, 0, 4.166666507720947], [0, 1, 4.166666507720947]]
                            }
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
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "characters": "Football Development", "fontSize": 16,
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
                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 24 },
                      "font": { "family": "Open Sans", "style": "Regular" }
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 165, "height": 24,
                      "relativeTransform": [[1, 0, 24], [0, 1, 0]]
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Frame 1931",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                  "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                  "width": 379, "height": 24,
                  "relativeTransform": [[1, 0, 0], [0, 1, 40]]
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
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 20, "height": 20,
                      "relativeTransform": [[1, 0, 0], [0, 1, 2]]
                    },
                    "children": [
                      {
                        "type": "BOOLEAN_OPERATION",
                        "booleanOperation": "SUBTRACT",
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
                            "name": "Shape",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 2.5, "y": 2.5,
                              "fills": [
                                {
                                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                  "color": { "r": 0, "g": 0.36705881357192993, "b": 0.7058823704719543 },
                                  "boundVariables": {}
                                }
                              ],
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0,
                              "vectorPaths": [
                                {
                                  "windingRule": "EVENODD",
                                  "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 15, "height": 15,
                              "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                            }
                          },
                          {
                            "type": "VECTOR",
                            "name": "Shape",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "x": 5, "y": 6.666666507720947,
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
                                  "data": "M 1.297702431678772 4.40501574866077 C 0.9889980256557465 4.120446377703118 0.5021395832300186 4.133755410274214 0.2102736085653305 4.4347422558302725 C -0.0815923660993576 4.735729101386331 -0.06794212758541107 5.21041655884848 0.24076227843761444 5.494985929806132 L 2.1934242248535156 7.2949852813075555 C 2.489961266517639 7.568338577323822 2.9538275003433228 7.568338577323822 3.2503645420074463 7.2949852813075555 L 9.759237289428711 1.2949865687679651 C 10.067941695451736 1.0104171978103127 10.081592231988907 0.5357301128772172 9.789726257324219 0.23474326732115855 C 9.49786028265953 -0.06624357823490004 9.011001616716385 -0.07955255120134677 8.70229721069336 0.20501681975630567 L 2.7218942642211914 5.717862492743333 L 1.297702431678772 4.40501574866077 Z"
                                }
                              ]
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                              "width": 10, "height": 7.5,
                              "relativeTransform": [[1, 0, 5], [0, 1, 6.666666507720947]]
                            }
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
                      "characters": "Governance, Organisation of Football and Sport", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
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
                      "letterSpacing": { "unit": "PIXELS", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 24 },
                      "font": { "family": "Open Sans", "style": "Regular" }
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 355, "height": 24,
                      "relativeTransform": [[1, 0, 24], [0, 1, 0]]
                    }
                  }
                ]
              }
            ]
          },
          ...[
                          {
                            "innerCode": [
                          { "name": "Innovation", "hasCheckbox": true, "isSelected": false },
                          { "name": "Leadership", "hasCheckbox": true, "isSelected": false }
                        ].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "Frame 1932",
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
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 104, "height": 24,
            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
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
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 20, "height": 20,
                "relativeTransform": [[1, 0, 0], [0, 1, 2]]
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
                            "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 15, "height": 15,
                        "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                      }
                    },
                    {
                      "type": "VECTOR",
                      "name": "Path",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 4.166666507720947, "y": 4.166666507720947,
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
                        "width": 11.666666984558105, "height": 11.666666984558105,
                        "relativeTransform": [[1, 0, 4.166666507720947], [0, 1, 4.166666507720947]]
                      }
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
                "characters": "Innovation", "fontSize": 16,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
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
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PIXELS", "value": 24 },
                "font": { "family": "Open Sans", "style": "Regular" }
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 80, "height": 24,
                "relativeTransform": [[1, 0, 24], [0, 1, 0]]
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
                            "_useSpread": true,
                            "hasCheckbox": false,
                            "isSelected": false
                          },
                          {
                            "innerCode": [
                          { "name": "Marketing Sponsorship", "hasCheckbox": true, "isSelected": false },
                          { "name": "Legal and Integrity", "hasCheckbox": true, "isSelected": false }
                        ].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "Frame 1935",
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
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 197, "height": 24,
            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
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
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 20, "height": 20,
                "relativeTransform": [[1, 0, 0], [0, 1, 2]]
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
                            "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 15, "height": 15,
                        "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                      }
                    },
                    {
                      "type": "VECTOR",
                      "name": "Path",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 4.166666507720947, "y": 4.166666507720947,
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
                        "width": 11.666666984558105, "height": 11.666666984558105,
                        "relativeTransform": [[1, 0, 4.166666507720947], [0, 1, 4.166666507720947]]
                      }
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
                "characters": "Marketing Sponsorship", "fontSize": 16,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
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
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PIXELS", "value": 24 },
                "font": { "family": "Open Sans", "style": "Regular" }
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 173, "height": 24,
                "relativeTransform": [[1, 0, 24], [0, 1, 0]]
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
                            "_useSpread": true,
                            "hasCheckbox": false,
                            "isSelected": false
                          }
                        ].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "Frame 1939",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
            "width": 107, "height": 64,
            "relativeTransform": [[1, 0, 1019], [0, 1, 0]]
          },
          "children": [
            ...item.innerCode
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
  };

        const root = await this.renderDefinition(structure);
        
        // Final positioning
        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

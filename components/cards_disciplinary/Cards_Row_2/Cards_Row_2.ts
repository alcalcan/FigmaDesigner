import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets



export class Cards_Row_2 extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "Cards Row 2",
    "props": {
      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
      "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
      "layoutSizingHorizontal": "FILL",
      "layoutSizingVertical": "FIXED"
    },
    "layoutProps": { "width": 1390, "height": 284, "parentIsAutoLayout": false },
    "children": [
      {
        "type": "FRAME",
        "name": "UEFA Card: UEFA Europa League: Supporter ...",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 25, "paddingRight": 25, "paddingBottom": 25, "paddingLeft": 25,
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
              "color": { "r": 0.878000020980835, "g": 0.878000020980835, "b": 0.878000020980835 },
              "boundVariables": {}
            }
          ],
          "effects": [],
          "cornerRadius": 16,
          "layoutSizingHorizontal": "FIXED",
          "layoutSizingVertical": "FIXED"
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 340, "height": 284,
          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
        },
        "children": [
          {
            "type": "FRAME",
            "name": "UEFA Card Content",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0,
              "layoutSizingVertical": "HUG",
              "layoutSizingHorizontal": "FILL"
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 290, "height": 183,
              "relativeTransform": [[1, 0, 25], [0, 1, 25]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Investigations",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Investigations", "fontSize": 16,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.7960784435272217, "g": 0.20000000298023224, "b": 0.23137255012989044 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "layoutSizingVertical": "HUG",
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Manrope", "style": "Regular" },
                  "layoutSizingHorizontal": "FILL",
                  "richTextSpans": [
                    {
                      "start": 0,
                      "end": 14,
                      "font": { "family": "Manrope", "style": "Regular" },
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.7960784435272217, "g": 0.20000000298023224, "b": 0.23137255012989044 },
                          "boundVariables": {}
                        }
                      ],
                      "fontSize": 16
                    }
                  ]
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 290, "height": 22,
                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                }
              },
              {
                "type": "FRAME",
                "name": "Title Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 12, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 99,
                  "relativeTransform": [[1, 0, 0], [0, 1, 22]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "UEFA Europa League: Supporter misconduct",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "UEFA Europa League: Supporter misconduct", "fontSize": 24,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 26.399999618530273 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 40,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 24
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 53,
                      "relativeTransform": [[1, 0, 0], [0, 1, 12]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  },
                  {
                    "type": "TEXT",
                    "name": "06/12/2024 02:00",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "06/12/2024 02:00", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.41200000047683716, "g": 0.49799999594688416, "b": 0.6549999713897705 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 17.600000381469727 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 16,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.41200000047683716, "g": 0.49799999594688416, "b": 0.6549999713897705 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 16
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 81]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Rectangle Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 16, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 20,
                  "relativeTransform": [[1, 0, 0], [0, 1, 121]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "UEFA Color Rectangle",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "layoutMode": "NONE",
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.7960784435272217, "g": 0.20000000298023224, "b": 0.23137255012989044 },
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
                      "width": 40, "height": 4,
                      "relativeTransform": [[1, 0, 0], [0, 1, 16]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Body Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 24, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 42,
                  "relativeTransform": [[1, 0, 0], [0, 1, 141]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "UEL: Manchester United",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "UEL: Manchester United", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 17.600000381469727 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 22,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 16
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 24]],
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
        "name": "UEFA Card: Proceedings opened following R...",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 25, "paddingRight": 25, "paddingBottom": 25, "paddingLeft": 25,
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
              "color": { "r": 0.878000020980835, "g": 0.878000020980835, "b": 0.878000020980835 },
              "boundVariables": {}
            }
          ],
          "effects": [],
          "cornerRadius": 16,
          "layoutSizingHorizontal": "FIXED",
          "layoutSizingVertical": "FIXED"
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 340, "height": 284,
          "relativeTransform": [[1, 0, 348], [0, 1, 0]],
          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
        },
        "children": [
          {
            "type": "FRAME",
            "name": "UEFA Card Content",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0,
              "layoutSizingVertical": "HUG",
              "layoutSizingHorizontal": "FILL"
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 290, "height": 210,
              "relativeTransform": [[1, 0, 25], [0, 1, 25]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Proceedings",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Proceedings", "fontSize": 16,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.5882353186607361, "g": 0.4000000059604645, "b": 0.6705882549285889 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "layoutSizingVertical": "HUG",
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Manrope", "style": "Regular" },
                  "layoutSizingHorizontal": "FILL",
                  "richTextSpans": [
                    {
                      "start": 0,
                      "end": 11,
                      "font": { "family": "Manrope", "style": "Regular" },
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.5882353186607361, "g": 0.4000000059604645, "b": 0.6705882549285889 },
                          "boundVariables": {}
                        }
                      ],
                      "fontSize": 16
                    }
                  ]
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 290, "height": 22,
                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                }
              },
              {
                "type": "FRAME",
                "name": "Title Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 12, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 126,
                  "relativeTransform": [[1, 0, 0], [0, 1, 22]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "Proceedings opened following Romania vs Kosovo mat...",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "Proceedings opened following Romania vs Kosovo mat...", "fontSize": 24,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 26.399999618530273 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 53,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 24
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 80,
                      "relativeTransform": [[1, 0, 0], [0, 1, 12]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  },
                  {
                    "type": "TEXT",
                    "name": "01/12/2024 02:00",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "01/12/2024 02:00", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.41200000047683716, "g": 0.49799999594688416, "b": 0.6549999713897705 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 17.600000381469727 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 16,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.41200000047683716, "g": 0.49799999594688416, "b": 0.6549999713897705 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 16
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 108]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Rectangle Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 16, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 20,
                  "relativeTransform": [[1, 0, 0], [0, 1, 148]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "UEFA Color Rectangle",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "layoutMode": "NONE",
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.5882353186607361, "g": 0.4000000059604645, "b": 0.6705882549285889 },
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
                      "width": 40, "height": 4,
                      "relativeTransform": [[1, 0, 0], [0, 1, 16]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Body Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 24, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 42,
                  "relativeTransform": [[1, 0, 0], [0, 1, 168]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "UEFA Nations League: Romania, Kosovo",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "UEFA Nations League: Romania, Kosovo", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 17.600000381469727 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 36,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 16
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 24]],
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
        "name": "UEFA Card: UEFA Conference League discipl...",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 25, "paddingRight": 25, "paddingBottom": 25, "paddingLeft": 25,
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
              "color": { "r": 0.878000020980835, "g": 0.878000020980835, "b": 0.878000020980835 },
              "boundVariables": {}
            }
          ],
          "effects": [],
          "cornerRadius": 16,
          "layoutSizingHorizontal": "FIXED",
          "layoutSizingVertical": "FIXED"
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 340, "height": 284,
          "relativeTransform": [[1, 0, 696], [0, 1, 0]],
          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
        },
        "children": [
          {
            "type": "FRAME",
            "name": "UEFA Card Content",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0,
              "layoutSizingVertical": "HUG",
              "layoutSizingHorizontal": "FILL"
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 290, "height": 183,
              "relativeTransform": [[1, 0, 25], [0, 1, 25]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Decisions",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Decisions", "fontSize": 16,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.2823529541492462, "g": 0.7490196228027344, "b": 0.6784313917160034 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "layoutSizingVertical": "HUG",
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Manrope", "style": "Regular" },
                  "layoutSizingHorizontal": "FILL",
                  "richTextSpans": [
                    {
                      "start": 0,
                      "end": 9,
                      "font": { "family": "Manrope", "style": "Regular" },
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.2823529541492462, "g": 0.7490196228027344, "b": 0.6784313917160034 },
                          "boundVariables": {}
                        }
                      ],
                      "fontSize": 16
                    }
                  ]
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 290, "height": 22,
                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                }
              },
              {
                "type": "FRAME",
                "name": "Title Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 12, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 99,
                  "relativeTransform": [[1, 0, 0], [0, 1, 22]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "UEFA Conference League disciplinary decisions",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "UEFA Conference League disciplinary decisions", "fontSize": 24,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 26.399999618530273 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 45,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 24
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 53,
                      "relativeTransform": [[1, 0, 0], [0, 1, 12]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  },
                  {
                    "type": "TEXT",
                    "name": "29/11/2024 02:00",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "29/11/2024 02:00", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.41200000047683716, "g": 0.49799999594688416, "b": 0.6549999713897705 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 17.600000381469727 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 16,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.41200000047683716, "g": 0.49799999594688416, "b": 0.6549999713897705 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 16
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 81]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Rectangle Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 16, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 20,
                  "relativeTransform": [[1, 0, 0], [0, 1, 121]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "UEFA Color Rectangle",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "layoutMode": "NONE",
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.27799999713897705, "g": 0.7490000128746033, "b": 0.6779999732971191 },
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
                      "width": 40, "height": 4,
                      "relativeTransform": [[1, 0, 0], [0, 1, 16]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Body Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 24, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 42,
                  "relativeTransform": [[1, 0, 0], [0, 1, 141]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "UECL: Aston Villa, Lille",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "UECL: Aston Villa, Lille", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 17.600000381469727 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 24,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 16
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 24]],
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
        "name": "UEFA Card: Proceedings opened following E...",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 25, "paddingRight": 25, "paddingBottom": 25, "paddingLeft": 25,
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
              "color": { "r": 0.878000020980835, "g": 0.878000020980835, "b": 0.878000020980835 },
              "boundVariables": {}
            }
          ],
          "effects": [],
          "cornerRadius": 16,
          "layoutSizingHorizontal": "FIXED",
          "layoutSizingVertical": "FIXED"
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 340, "height": 284,
          "relativeTransform": [[1, 0, 1044], [0, 1, 0]],
          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
        },
        "children": [
          {
            "type": "FRAME",
            "name": "UEFA Card Content",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
              "fills": [],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0,
              "layoutSizingVertical": "HUG",
              "layoutSizingHorizontal": "FILL"
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 290, "height": 210,
              "relativeTransform": [[1, 0, 25], [0, 1, 25]],
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Proceedings",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Proceedings", "fontSize": 16,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.5882353186607361, "g": 0.4000000059604645, "b": 0.6705882549285889 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "layoutSizingVertical": "HUG",
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Manrope", "style": "Regular" },
                  "layoutSizingHorizontal": "FILL",
                  "richTextSpans": [
                    {
                      "start": 0,
                      "end": 11,
                      "font": { "family": "Manrope", "style": "Regular" },
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.5882353186607361, "g": 0.4000000059604645, "b": 0.6705882549285889 },
                          "boundVariables": {}
                        }
                      ],
                      "fontSize": 16
                    }
                  ]
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 290, "height": 22,
                  "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                }
              },
              {
                "type": "FRAME",
                "name": "Title Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 12, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 126,
                  "relativeTransform": [[1, 0, 0], [0, 1, 22]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "Proceedings opened following England vs Greece mat...",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "Proceedings opened following England vs Greece mat...", "fontSize": 24,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 26.399999618530273 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 53,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 24
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 80,
                      "relativeTransform": [[1, 0, 0], [0, 1, 12]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  },
                  {
                    "type": "TEXT",
                    "name": "28/11/2024 02:00",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "28/11/2024 02:00", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.41200000047683716, "g": 0.49799999594688416, "b": 0.6549999713897705 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 17.600000381469727 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 16,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.41200000047683716, "g": 0.49799999594688416, "b": 0.6549999713897705 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 16
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 108]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Rectangle Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 16, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 20,
                  "relativeTransform": [[1, 0, 0], [0, 1, 148]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "UEFA Color Rectangle",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "layoutMode": "NONE",
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.5882353186607361, "g": 0.4000000059604645, "b": 0.6705882549285889 },
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
                      "width": 40, "height": 4,
                      "relativeTransform": [[1, 0, 0], [0, 1, 16]],
                      "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    }
                  }
                ]
              },
              {
                "type": "FRAME",
                "name": "Body Section",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 24, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                  "width": 290, "height": 42,
                  "relativeTransform": [[1, 0, 0], [0, 1, 168]],
                  "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                },
                "children": [
                  {
                    "type": "TEXT",
                    "name": "UEFA Nations League: England, Greece",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "layoutAlign": "STRETCH", "layoutGrow": 0,
                      "characters": "UEFA Nations League: England, Greece", "fontSize": 16,
                      "textCase": "ORIGINAL", "textDecoration": "NONE",
                      "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                      "paragraphSpacing": 0, "paragraphIndent": 0,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "layoutSizingVertical": "HUG",
                      "letterSpacing": { "unit": "PERCENT", "value": 0 },
                      "lineHeight": { "unit": "PIXELS", "value": 17.600000381469727 },
                      "font": { "family": "Manrope", "style": "Regular" },
                      "layoutSizingHorizontal": "FILL",
                      "richTextSpans": [
                        {
                          "start": 0,
                          "end": 36,
                          "font": { "family": "Manrope", "style": "Regular" },
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.07058823853731155, "g": 0.2235294133424759, "b": 0.5215686559677124 },
                              "boundVariables": {}
                            }
                          ],
                          "fontSize": 16
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 290, "height": 18,
                      "relativeTransform": [[1, 0, 0], [0, 1, 24]],
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

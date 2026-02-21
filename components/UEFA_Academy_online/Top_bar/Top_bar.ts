import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets



export class Top_bar extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "Top bar",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 77,
        "paddingTop": 8, "paddingRight": 40, "paddingBottom": 8, "paddingLeft": 40,
        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "fills": [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
            "color": { "r": 0.9490196108818054, "g": 0.9529411792755127, "b": 0.95686274766922 },
            "boundVariables": {}
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": 0
      },
      "layoutProps": { "width": 1680, "height": 40, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "FRAME",
          "name": "Frame 1607",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 23,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 160, "height": 21,
            "relativeTransform": [[1, 0, 40], [0, 1, 9.5]]
          },
          "children": [
            {
              "type": "FRAME",
              "name": "Frame 1837",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 12,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 160, "height": 21,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]]
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Group 19",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "strokes": [],
                    "strokeWeight": 0,
                    "isMask": false,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 54, "height": 18.5,
                    "relativeTransform": [[1, 0, 0], [0, 1, 2.5]]
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Logos / Wordmark / UEFA.com Black",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "clipsContent": true,
                        "strokeWeight": 0.5517241358757019, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 0, "y": 2.5,
                        "layoutMode": "NONE",
                        "fills": [
                          {
                            "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0.25775936245918274, "g": 0.25775936245918274, "b": 0.25775936245918274 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 54, "height": 16,
                        "relativeTransform": [[1, 0, 0], [0, 1, 2.5]]
                      },
                      "children": [
                        {
                          "type": "VECTOR",
                          "name": "UEFA.com",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0, "y": 0.0546875,
                            "isMask": false,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 98.46454620361328, "height": 15.945378303527832,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0.0546875]]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "LINE",
                  "name": "Line 39",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                    "isMask": false,
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
                    "relativeTransform": [[-4.3711395392165286e-8, -1, 66], [1, -4.3711395392165286e-8, 0]]
                  }
                },
                {
                  "type": "FRAME",
                  "name": "Frame 1614",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "clipsContent": false,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 4,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 82, "height": 21,
                    "relativeTransform": [[1, 0, 78], [0, 1, 0]]
                  },
                  "children": [
                    {
                      "type": "TEXT",
                      "name": "Resources",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "Resources", "fontSize": 16,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "isMask": false,
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
                        "lineHeight": { "unit": "PIXELS", "value": 21 },
                        "font": { "family": "Open Sans", "style": "Bold" }
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 82, "height": 21,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
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
            "isMask": false, "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 24,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MAX", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "STRETCH", "layoutGrow": 0,
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 950.62060546875, "height": 24,
            "relativeTransform": [[1, 0, 689.37939453125], [0, 1, 8]]
          },
          "children": [
            {
              "type": "FRAME",
              "name": "Notifications / notifications-none",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                "relativeTransform": [[1, 0, 750.62060546875], [0, 1, 0]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.5, "y": 2.5,
                    "isMask": false,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 14.999951362609863, "height": 19.192251205444336,
                    "relativeTransform": [[1, 0, 4.5], [0, 1, 2.5]]
                  }
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "Frame 1612",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 16,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 104, "height": 24,
                "relativeTransform": [[1, 0, 798.62060546875], [0, 1, 0]]
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Frame 1612",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "clipsContent": false,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 16,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
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
                      "name": "Frame 1618",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 4,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 88, "height": 24,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "pk-avatar",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "clipsContent": false,
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                          },
                          "children": [
                            {
                              "type": "ELLIPSE",
                              "name": "Ellipse 22",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 0, "y": 0,
                                "isMask": false,
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
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                              }
                            },
                            {
                              "type": "TEXT",
                              "name": "FW",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "strokeWeight": 2.473090410232544, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "characters": "JD", "fontSize": 14,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                                "x": 3.5, "y": 2,
                                "isMask": false,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0.2705882489681244, "g": 0.3607843220233917, "b": 0.40392157435417175 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                                "lineHeight": { "unit": "PERCENT", "value": 150 },
                                "font": { "family": "Manrope", "style": "Bold" }
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 17, "height": 21,
                                "relativeTransform": [[1, 0, 3.5], [0, 1, 2]]
                              }
                            }
                          ]
                        },
                        {
                          "type": "TEXT",
                          "name": "John Doe",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "characters": "John Doe", "fontSize": 14,
                            "textCase": "ORIGINAL", "textDecoration": "NONE",
                            "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                            "isMask": false,
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
                            "lineHeight": { "unit": "PIXELS", "value": 21 },
                            "font": { "family": "Open Sans", "style": "Regular" }
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 60, "height": 21,
                            "relativeTransform": [[1, 0, 28], [0, 1, 1.5]]
                          }
                        }
                      ]
                    },
                    {
                      "type": "LINE",
                      "name": "Line 43",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                        "isMask": false,
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
                        "relativeTransform": [[-4.3711395392165286e-8, -1, 104], [1, -4.3711395392165286e-8, 0]]
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
                "isMask": false, "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "layoutMode": "VERTICAL",
                "primaryAxisAlignItems": "CENTER",
                "counterAxisAlignItems": "CENTER",
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
                "relativeTransform": [[1, 0, 926.62060546875], [0, 1, 0]]
              },
              "children": [
                {
                  "type": "BOOLEAN_OPERATION",
                  "booleanOperation": "UNION",
                  "name": "Union",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                    "x": 2, "y": 5,
                    "isMask": false,
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
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "name": "Vector (Stroke)",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                        "x": 2, "y": 11,
                        "isMask": false,
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
                      }
                    },
                    {
                      "type": "VECTOR",
                      "name": "Vector (Stroke)",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                        "x": 2, "y": 5,
                        "isMask": false,
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
                      }
                    },
                    {
                      "type": "VECTOR",
                      "name": "Vector (Stroke)",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                        "x": 2, "y": 17,
                        "isMask": false,
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
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;

    return root;
  }
}

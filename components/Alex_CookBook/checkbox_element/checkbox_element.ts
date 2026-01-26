import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets



export class checkbox_element extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "checkbox_element",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 4,
        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "fills": [],
        "strokes": [],
        "effects": [],
        "cornerRadius": 0
      },
      "layoutProps": { "width": 107, "height": 24, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "FRAME",
          "name": "Checkbox",
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
                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 2.5, "y": 2.5,
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
                "width": 15, "height": 15,
                "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "name": "Path",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 2.5, "y": 2.5,
                    "isMask": false,
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
                  }
                },
                {
                  "type": "VECTOR",
                  "name": "Path",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.166666626930237, "y": 4.166666626930237,
                    "isMask": false,
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
                    "relativeTransform": [[1, 0, 4.166666626930237], [0, 1, 4.166666626930237]]
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
            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "characters": "Leadership", "fontSize": 16,
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
            "lineHeight": { "unit": "PIXELS", "value": 24 },
            "font": { "family": "Open Sans", "style": "Regular" }
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 83, "height": 24,
            "relativeTransform": [[1, 0, 24], [0, 1, 0]]
          }
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

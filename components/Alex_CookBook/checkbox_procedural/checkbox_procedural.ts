import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_checkbox_procedural_Synth_Path_0 from "./assets/checkbox_procedural_Synth_Path_0.svg";
import SVG_checkbox_procedural_Synth_Path_1 from "./assets/checkbox_procedural_Synth_Path_1.svg";


export class checkbox_procedural extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "checkbox_procedural",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": { "width": 296, "height": 32, "parentIsAutoLayout": false },
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
                "relativeTransform": [[1, 0, 8], [0, 1, 6]]
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
                            "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z"
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 15, "height": 15,
                        "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                      },
                      "svgContent": SVG_checkbox_procedural_Synth_Path_0
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Path",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 4.166666030883789, "y": 4.166656494140625,
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
                        "relativeTransform": [[1, 0, 4.166666030883789], [0, 1, 4.166656494140625]]
                      },
                      "svgContent": SVG_checkbox_procedural_Synth_Path_1
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
                "characters": "UEFA Football Development", "fontSize": 16,
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
                "width": 264, "height": 24,
                "relativeTransform": [[1, 0, 32], [0, 1, 4]]
              }
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

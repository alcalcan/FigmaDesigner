import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Football___time_end_Synth_Vector_0 from "./assets/Football___time_end_Synth_Vector_0.svg";
import SVG_Football___time_end_assets_icon_Status_I92_671102_160_160_svg_8x6 from "./assets/Football___time_end_assets_icon_Status_I92_671102_160_160_svg_8x6.svg";


export class Football___time_end extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Football / time-end",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
          "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "ELLIPSE",
              "name": "Background",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 6, "y": 7,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.12612880766391754, "g": 0.3565787076950073, "b": 0.78269362449646 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 12, "height": 12,
                "relativeTransform": [[1, 0, 6], [0, 1, 7]]
              }
            },
            {
              "type": "BOOLEAN_OPERATION",
              "booleanOperation": "UNION",
              "name": "Base",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 3, "y": 1,
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
                "width": 18, "height": 21,
                "relativeTransform": [[1, 0, 3], [0, 1, 1]]
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
                    "x": 3, "y": 1,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "vectorPaths": [
                      {
                        "windingRule": "NONZERO",
                        "data": "M 12 0 L 6 0 L 6 2 L 12 2 L 12 0 Z M 16.030000686645508 6.389999866485596 L 17.450000762939453 4.96999979019165 C 17.020000755786896 4.4599997997283936 16.5500009059906 3.979999929666519 16.040000915527344 3.559999942779541 L 14.620000839233398 4.980000019073486 C 13.070000886917114 3.740000009536743 11.119999885559082 3 9 3 C 4.03000020980835 3 0 7.03000020980835 0 12 C 0 16.96999979019165 4.019999980926514 21 9 21 C 13.980000019073486 21 18 16.96999979019165 18 12 C 18 9.880000114440918 17.260000705718994 7.929999828338623 16.030000686645508 6.389999866485596 Z M 9 19 C 5.130000114440918 19 2 15.869999885559082 2 12 C 2 8.130000114440918 5.130000114440918 5 9 5 C 12.869999885559082 5 16 8.130000114440918 16 12 C 16 15.869999885559082 12.869999885559082 19 9 19 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 18, "height": 21,
                    "relativeTransform": [[1, 0, 3], [0, 1, 1]]
                  },
                  "svgContent": SVG_Football___time_end_Synth_Vector_0
                },
                {
                  "type": "RECTANGLE",
                  "name": "Rectangle 285",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "x": 11, "y": 3,
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
                    "width": 2, "height": 2,
                    "relativeTransform": [[1, 0, 11], [0, 1, 3]]
                  }
                }
              ]
            },
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Status",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 8, "y": 10,
                "strokes": [],
                "effects": []
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 8, "height": 6,
                "relativeTransform": [[1, 0, 8], [0, 1, 10]]
              },
              "svgContent": SVG_Football___time_end_assets_icon_Status_I92_671102_160_160_svg_8x6
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

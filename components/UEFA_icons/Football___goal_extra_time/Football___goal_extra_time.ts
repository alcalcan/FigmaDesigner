import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Football___goal_extra_time_assets_icon_Vector_I92_670995_1506_259_svg_18_00242042541504x18_00242042541504 from "./assets/Football___goal_extra_time_assets_icon_Vector_I92_670995_1506_259_svg_18_00242042541504x18_00242042541504.svg";
import SVG_Football___goal_extra_time_assets_icon_background_I92_670995_1506_261_svg_8x8 from "./assets/Football___goal_extra_time_assets_icon_background_I92_670995_1506_261_svg_8x8.svg";
import SVG_Football___goal_extra_time_assets_icon_Extra_time_I92_670995_1506_265_svg_3_200000047683716x4_400000095367432 from "./assets/Football___goal_extra_time_assets_icon_Extra_time_I92_670995_1506_265_svg_3_200000047683716x4_400000095367432.svg";


export class Football___goal_extra_time extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "Football / goal-extra-time",
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
        "type": "FRAME",
        "name": "Goal: Extra time",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "x": 0, "y": 0,
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
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 24, "height": 24,
          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
        },
        "children": [
          {
            "type": "ELLIPSE",
            "name": "Background",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA",
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
              "width": 20, "height": 20,
              "relativeTransform": [[1, 0, 2], [0, 1, 2]]
            }
          },
          {
            "type": "VECTOR",
            "shouldFlatten": true,
            "name": "Vector",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA",
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "x": 2.998779296875, "y": 2.998779296875,
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
              "width": 18.00242042541504, "height": 18.00242042541504,
              "relativeTransform": [[1, 0, 2.998779296875], [0, 1, 2.998779296875]]
            },
            "svgContent": SVG_Football___goal_extra_time_assets_icon_Vector_I92_670995_1506_259_svg_18_00242042541504x18_00242042541504
          },
          {
            "type": "FRAME",
            "name": "Extra info",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA",
              "x": 14, "y": 14,
              "strokes": [],
              "strokeWeight": 0,
              "effects": []
            },
            "layoutProps": {
              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
              "width": 22, "height": 22,
              "relativeTransform": [[1, 0, 14], [0, 1, 14]]
            },
            "children": [
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "background",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "x": 14, "y": 14,
                  "strokes": [
                    {
                      "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.5920000076293945, "g": 0.5920000076293945, "b": 0.5920000076293945 },
                      "boundVariables": {}
                    }
                  ],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                  "width": 8, "height": 8,
                  "relativeTransform": [[1, 0, 14], [0, 1, 14]]
                },
                "svgContent": SVG_Football___goal_extra_time_assets_icon_background_I92_670995_1506_261_svg_8x8
              },
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Extra time",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "x": 16.5, "y": 16,
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                  "width": 3.200000047683716, "height": 4.400000095367432,
                  "relativeTransform": [[1, 0, 16.5], [0, 1, 16]]
                },
                "svgContent": SVG_Football___goal_extra_time_assets_icon_Extra_time_I92_670995_1506_265_svg_3_200000047683716x4_400000095367432
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

import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Action___edit_assets_icon_Rectangle_289_I92_670577_1825_12_svg_4_5x18 from "./assets/Action___edit_assets_icon_Rectangle_289_I92_670577_1825_12_svg_4_5x18.svg";
import SVG_Action___edit_assets_icon_Rectangle_290_I92_670577_1825_13_svg_4_5x3_8125 from "./assets/Action___edit_assets_icon_Rectangle_290_I92_670577_1825_13_svg_4_5x3_8125.svg";


export class Action___edit extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Action / edit",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutMode": "NONE",
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "Group 3",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "x": 18.629077911376953, "y": 2.1888933181762695,
                "strokes": [],
                "strokeWeight": 0,
                "effects": []
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 23.129077911376953, "height": 23.901203855872154,
                "relativeTransform": [
                  [ 0.7071067690849304, -0.7071067690849304, 18.629077911376953 ],
                  [ 0.7071067690849304, 0.7071067690849304, 2.1888933181762695 ]
                ]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Rectangle 289",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 14.916767373681068, "y": 5.901203855872154,
                    "strokes": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0, "g": 0, "b": 0 },
                        "boundVariables": {}
                      }
                    ],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.5, "height": 18,
                    "relativeTransform": [
                      [ 0.7071067690849304, -0.7071067690849304, 14.916767373681068 ],
                      [ 0.7071067690849304, 0.7071067690849304, 5.901203855872154 ]
                    ]
                  },
                  "svgContent": SVG_Action___edit_assets_icon_Rectangle_289_I92_670577_1825_12_svg_4_5x18
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Rectangle 290",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.629077911376953, "y": 2.1888933181762695,
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
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.5, "height": 3.8125,
                    "relativeTransform": [
                      [ 0.7071067690849304, -0.7071067690849304, 18.629077911376953 ],
                      [ 0.7071067690849304, 0.7071067690849304, 2.1888933181762695 ]
                    ]
                  },
                  "svgContent": SVG_Action___edit_assets_icon_Rectangle_290_I92_670577_1825_13_svg_4_5x3_8125
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

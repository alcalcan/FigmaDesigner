import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import SVG_Action___unfollow_Synth_Vector_0 from "./assets/Action___unfollow_Synth_Vector_0.svg";
import SVG_Action___unfollow_Synth_Subtract_1 from "./assets/Action___unfollow_Synth_Subtract_1.svg";


export class Action___unfollow extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Action / unfollow",
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
              "type": "BOOLEAN_OPERATION",
              "booleanOperation": "UNION",
              "name": "Union",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 2.999898, "y": 3,
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
                "width": 18.613483, "height": 18.623046,
                "relativeTransform": [[1, 0, 2.999898], [0, 1, 3]]
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
                    "x": 3.000000, "y": 3,
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
                        "data": "M 17.347352 18.405750 L 0.212601 1.271000 C 0.074101 1.132500 0.003268 0.958500 0.000101 0.749000 C -0.003065 0.539333 0.067768 0.362083 0.212601 0.217250 C 0.357435 0.072416 0.533101 2.842170e-15 0.739601 0 C 0.945934 0 1.121518 0.072416 1.266351 0.217250 L 18.401103 17.351751 C 18.539603 17.490251 18.610436 17.664335 18.613603 17.874002 C 18.616770 18.083502 18.545937 18.260750 18.401103 18.405750 C 18.256270 18.550583 18.080603 18.623001 17.874103 18.623001 C 17.667770 18.623001 17.492186 18.550583 17.347352 18.405750 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 18.613704, "height": 18.623001,
                    "relativeTransform": [[1, 0, 3.000000], [0, 1, 3]]
                  },
                  "svgContent": SVG_Action___unfollow_Synth_Vector_0
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Subtract",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 3.442993, "y": 3.562515,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0, "g": 0, "b": 0 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "vectorPaths": [
                      {
                        "windingRule": "NONZERO",
                        "data": "M 7.085127 6.023435 L 6.856611 6.567380 L 2.476728 6.947263 L 5.797041 9.827145 L 4.797041 14.107419 L 8.556806 11.837887 L 12.327314 14.117184 L 11.457197 10.395504 L 13.590009 12.528317 L 14.197431 15.137692 C 14.397124 15.997447 13.467058 16.677386 12.707197 16.217771 L 8.556806 13.707028 L 4.407392 16.207029 C 3.647503 16.666962 2.717516 15.987749 2.917158 15.127926 L 4.016767 10.407223 L 0.346846 7.227536 C -0.323114 6.647530 0.037171 5.547535 0.917158 5.477536 L 5.747236 5.067380 L 5.860517 4.798825 L 7.085127 6.023435 Z"
                      },
                      {
                        "windingRule": "NONZERO",
                        "data": "M 7.636885 0.607419 C 7.976871 -0.202517 9.136651 -0.202428 9.476728 0.607419 L 11.367353 5.057614 L 16.207197 5.477536 C 17.086944 5.547692 17.436714 6.647582 16.766767 7.227536 L 13.353681 10.184567 L 12.225751 9.056637 L 14.646650 6.957028 L 10.266767 6.577146 L 8.556806 2.537106 L 7.710127 4.541013 L 6.487471 3.318356 L 7.636885 0.607419 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 17.116695, "height": 16.365890,
                    "relativeTransform": [[1, 0, 3.442993], [0, 1, 3.562515]]
                  },
                  "svgContent": SVG_Action___unfollow_Synth_Subtract_1
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

import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Football___goal_penalty_assets_icon_Vector_I92_671017_1506_270_svg_18_00242042541504x18_00242042541504 from "./assets/Football___goal_penalty_assets_icon_Vector_I92_671017_1506_270_svg_18_00242042541504x18_00242042541504.svg";
import SVG_Football___goal_penalty_assets_icon_background_I92_671017_1506_272_svg_8x8 from "./assets/Football___goal_penalty_assets_icon_background_I92_671017_1506_272_svg_8x8.svg";
import SVG_Football___goal_penalty_Synth_Path_2 from "./assets/Football___goal_penalty_Synth_Path_2.svg";
import SVG_Football___goal_penalty_Synth_Path_3 from "./assets/Football___goal_penalty_Synth_Path_3.svg";


export class Football___goal_penalty extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "Football / goal-penalty",
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
        "name": "Goal: Penalty",
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
            "svgContent": SVG_Football___goal_penalty_assets_icon_Vector_I92_671017_1506_270_svg_18_00242042541504x18_00242042541504
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
                "svgContent": SVG_Football___goal_penalty_assets_icon_background_I92_671017_1506_272_svg_8x8
              },
              {
                "type": "BOOLEAN_OPERATION",
                "booleanOperation": "EXCLUDE",
                "name": "Penalty",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "x": 16.60009765625, "y": 16.0003662109375,
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
                  "width": 3.1999995708465576, "height": 4.400001049041748,
                  "relativeTransform": [[1, 0, 16.60009765625], [0, 1, 16.0003662109375]]
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
                      "x": 17.39990234375, "y": 16.7525634765625,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 1, "g": 1, "b": 1 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0,
                      "vectorPaths": [
                        {
                          "windingRule": "EVENODD",
                          "data": "M 0 1.3187679052352905 L 0 0 L 0.7690687779408165 0 C 0.8702995075540978 0 0.9677795378139613 0.008216539763379178 1.0615116880198003 0.024649866649480424 C 1.1552438382256394 0.041083193535581666 1.2377268169589672 0.07292228530494055 1.3089632527843347 0.1201680986123651 C 1.380199688609702 0.16741391191978966 1.437375452836121 0.23417330774179657 1.4804922412155512 0.32044827091359507 C 1.5236090295949816 0.40672323408539357 1.545167088508606 0.5197006800462507 1.545167088508606 0.6593839526176453 C 1.545167088508606 0.7990672251890398 1.5236090295949816 0.9120446473080326 1.4804922412155512 0.9983196104798311 C 1.437375452836121 1.0845945736516296 1.380199688609702 1.151353945631772 1.3089632527843347 1.1985997589391966 C 1.2377268169589672 1.245845572246621 1.1552438382256394 1.2776846655060965 1.0615116880198003 1.2941179923921977 C 0.9677795378139613 1.310551319278299 0.8702995075540978 1.3187679052352905 0.7690687779408165 1.3187679052352905 L 0 1.3187679052352905 Z"
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                      "width": 1.545167088508606, "height": 1.3187679052352905,
                      "relativeTransform": [[1, 0, 17.39990234375], [0, 1, 16.7525634765625]]
                    },
                    "svgContent": SVG_Football___goal_penalty_Synth_Path_2
                  },
                  {
                    "type": "VECTOR",
                    "shouldFlatten": true,
                    "name": "Path",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA",
                      "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "x": 16.60009765625, "y": 16.0003662109375,
                      "fills": [
                        {
                          "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                          "color": { "r": 1, "g": 1, "b": 1 },
                          "boundVariables": {}
                        }
                      ],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0,
                      "vectorPaths": [
                        {
                          "windingRule": "EVENODD",
                          "data": "M 0 0 L 0 4.400001049041748 L 0.7999998927116394 4.400001049041748 L 0.7999998927116394 2.8224097305319447 L 1.810896058409412 2.8224097305319447 C 2.0620982265638332 2.8224097305319447 2.27580426212786 2.7823540526278947 2.452020697769683 2.7022415881731376 C 2.628237133411506 2.6221291237183806 2.7716453173039675 2.516341141781936 2.8822492548786585 2.384874531000605 C 2.9928531924533495 2.2534079202192743 3.0734616330093383 2.1024290448256835 3.1240769964948782 1.9319332914192273 C 3.174692359980418 1.7614375380127711 3.1999995708465576 1.5878631205231528 3.1999995708465576 1.4112048652659723 C 3.1999995708465576 1.2304382754416423 3.174692359980418 1.0558367981521002 3.1240769964948782 0.8873952120292188 C 3.0734616330093383 0.7189536259063374 2.9928531924533495 0.569001714945216 2.8822492548786585 0.4375351041638851 C 2.7716453173039675 0.30606849338255415 2.628237133411506 0.2002805591298369 2.452020697769683 0.12016809467507983 C 2.27580426212786 0.04005563022032277 2.0620982265638332 0 1.810896058409412 0 L 0 0 Z"
                        }
                      ]
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                      "width": 3.1999995708465576, "height": 4.400001049041748,
                      "relativeTransform": [[1, 0, 16.60009765625], [0, 1, 16.0003662109375]]
                    },
                    "svgContent": SVG_Football___goal_penalty_Synth_Path_3
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

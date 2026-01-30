import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


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
                "x": 2.999898910522461, "y": 3,
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
                "width": 18.613483428955078, "height": 18.623046875,
                "relativeTransform": [[1, 0, 2.999898910522461], [0, 1, 3]]
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
                    "x": 3.000000017324055, "y": 3,
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
                        "data": "M 17.347352981567383 18.405750274658203 L 0.2126016765832901 1.271000623703003 C 0.07410165667533875 1.1325006186962128 0.003268300075433217 0.9585006088018417 0.0001016328897094354 0.749000608921051 C -0.003065034296014346 0.5393339544534683 0.06776832044124603 0.36208339035511017 0.2126016765832901 0.2172500491142273 C 0.35743503272533417 0.07241670787334442 0.5331015139818192 2.842170985392048e-15 0.7396015524864197 0 C 0.9459349066019058 0 1.121518462896347 0.07241670787334442 1.2663518190383911 0.2172500491142273 L 18.401103973388672 17.35175132751465 C 18.539603993296623 17.49025133252144 18.61043692473322 17.664335802197456 18.613603591918945 17.87400245666504 C 18.61677025910467 18.08350245654583 18.545937329530716 18.260750263929367 18.401103973388672 18.405750274658203 C 18.256270617246628 18.550583615899086 18.08060358464718 18.623001098632812 17.874103546142578 18.623001098632812 C 17.667770192027092 18.623001098632812 17.492186337709427 18.550583615899086 17.347352981567383 18.405750274658203 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 18.613704681396484, "height": 18.623001098632812,
                    "relativeTransform": [[1, 0, 3.000000017324055], [0, 1, 3]]
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
                    "x": 3.4429931938648224, "y": 3.5625152587890625,
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
                        "data": "M 7.085127353668213 6.023435115814209 L 6.856611728668213 6.567380428314209 L 2.476728916168213 6.947263240814209 L 5.797041416168213 9.82714557647705 L 4.797041416168213 14.10741901397705 L 8.556806564331055 11.83788776397705 L 12.327314376831055 14.11718463897705 L 11.457197189331055 10.39550495147705 L 13.590009689331055 12.52831745147705 L 14.197431564331055 15.13769245147705 C 14.397124603390694 15.997447848320007 13.467058777809143 16.677386105060577 12.707197189331055 16.217771530151367 L 8.556806564331055 13.70702838897705 L 4.407392978668213 16.207029342651367 C 3.647503614425659 16.666962385177612 2.7175165861845016 15.98774927854538 2.917158603668213 15.12792682647705 L 4.016767978668213 10.40722370147705 L 0.3468461036682129 7.227536678314209 C -0.32311487197875977 6.647530138492584 0.03717118501663208 5.547535680234432 0.9171586036682129 5.477536678314209 L 5.747236728668213 5.067380428314209 L 5.860517978668213 4.798825740814209 L 7.085127353668213 6.023435115814209 Z"
                      },
                      {
                        "windingRule": "NONZERO",
                        "data": "M 7.636885166168213 0.6074194312095642 C 7.976871818304062 -0.20251774787902832 9.136651426553726 -0.20242851972579956 9.476728439331055 0.6074194312095642 L 11.367353439331055 5.057614803314209 L 16.207197189331055 5.477536678314209 C 17.086944818496704 5.547692961990833 17.43671488761902 6.647582232952118 16.766767501831055 7.227536678314209 L 13.353681564331055 10.18456745147705 L 12.225751876831055 9.05663776397705 L 14.646650314331055 6.957028865814209 L 10.266767501831055 6.577146053314209 L 8.556806564331055 2.537106990814209 L 7.710127353668213 4.541013240814209 L 6.487471103668213 3.318356990814209 L 7.636885166168213 0.6074194312095642 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 17.116695404052734, "height": 16.365890502929688,
                    "relativeTransform": [[1, 0, 3.4429931938648224], [0, 1, 3.5625152587890625]]
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

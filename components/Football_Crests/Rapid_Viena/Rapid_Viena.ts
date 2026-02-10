import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_340_svg_47_791221618652344x46_1923713684082 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_340_svg_47_791221618652344x46_1923713684082.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_341_svg_46_81440353393555x16_129199981689453 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_341_svg_46_81440353393555x16_129199981689453.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_342_svg_45_821998596191406x15_122407913208008 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_342_svg_45_821998596191406x15_122407913208008.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_343_svg_3_5928032398223877x1_4603843688964844 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_343_svg_3_5928032398223877x1_4603843688964844.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_344_svg_8_631599426269531x11_182788848876953 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_344_svg_8_631599426269531x11_182788848876953.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_345_svg_8_116355895996094x10_248218536376953 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_345_svg_8_116355895996094x10_248218536376953.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_346_svg_2_891998291015625x10_190387725830078 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_346_svg_2_891998291015625x10_190387725830078.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_347_svg_8_248791694641113x10_758007049560547 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_347_svg_8_248791694641113x10_758007049560547.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_348_svg_7_385723114013672x10_12264633178711 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_348_svg_7_385723114013672x10_12264633178711.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_349_svg_7_937999725341797x10_67279052734375 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_349_svg_7_937999725341797x10_67279052734375.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_350_svg_7_667255401611328x9_723979949951172 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_350_svg_7_667255401611328x9_723979949951172.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_351_svg_2_4527969360351562x9_693599700927734 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_351_svg_2_4527969360351562x9_693599700927734.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_352_svg_7_767599105834961x10_233600616455078 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_352_svg_7_767599105834961x10_233600616455078.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_353_svg_6_901309967041016x9_630996704101562 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_353_svg_6_901309967041016x9_630996704101562.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_354_svg_35_7225456237793x5_357975006103516 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_354_svg_35_7225456237793x5_357975006103516.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_355_svg_35_19970703125x4_790382385253906 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_355_svg_35_19970703125x4_790382385253906.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_356_svg_4_5204010009765625x4_592411041259766 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_356_svg_4_5204010009765625x4_592411041259766.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_357_svg_4_932003498077393x6_208806991577148 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_357_svg_4_932003498077393x6_208806991577148.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_358_svg_2_7779836654663086x4_195207595825195 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_358_svg_2_7779836654663086x4_195207595825195.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_359_svg_5_44199275970459x5_441991806030273 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_359_svg_5_44199275970459x5_441991806030273.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_360_svg_4_8192033767700195x4_308002471923828 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_360_svg_4_8192033767700195x4_308002471923828.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_361_svg_3_742102861404419x4_762796401977539 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_361_svg_3_742102861404419x4_762796401977539.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_362_svg_5_129999160766602x4_761592864990234 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_362_svg_5_129999160766602x4_761592864990234.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_363_svg_3_046799659729004x1_6019954681396484 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_363_svg_3_046799659729004x1_6019954681396484.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_364_svg_4_520380020141602x4_592411041259766 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_364_svg_4_520380020141602x4_592411041259766.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_365_svg_4_931995391845703x6_208806991577148 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_365_svg_4_931995391845703x6_208806991577148.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_366_svg_2_778005599975586x4_195207595825195 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_366_svg_2_778005599975586x4_195207595825195.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_367_svg_5_443218231201172x5_441991806030273 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_367_svg_5_443218231201172x5_441991806030273.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_368_svg_4_819194793701172x4_308002471923828 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_368_svg_4_819194793701172x4_308002471923828.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_369_svg_3_7420921325683594x4_762796401977539 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_369_svg_3_7420921325683594x4_762796401977539.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_370_svg_5_129997253417969x4_761592864990234 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_370_svg_5_129997253417969x4_761592864990234.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_371_svg_3_0468177795410156x1_6019954681396484 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_371_svg_3_0468177795410156x1_6019954681396484.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_372_svg_3_9311962127685547x1_5875892639160156 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_372_svg_3_9311962127685547x1_5875892639160156.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_374_svg_3_5927963256835938x1_459197998046875 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_374_svg_3_5927963256835938x1_459197998046875.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_375_svg_3_9312171936035156x1_5876197814941406 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_375_svg_3_9312171936035156x1_5876197814941406.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_376_svg_4_975177764892578x6_4068145751953125 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_376_svg_4_975177764892578x6_4068145751953125.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_377_svg_4_9751996994018555x6_4068145751953125 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_377_svg_4_9751996994018555x6_4068145751953125.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_378_svg_5_445522308349609x5_6267852783203125 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_378_svg_5_445522308349609x5_6267852783203125.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_379_svg_5_446245193481445x5_6267852783203125 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_379_svg_5_446245193481445x5_6267852783203125.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_380_svg_4_606815338134766x5_017200469970703 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_380_svg_4_606815338134766x5_017200469970703.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_381_svg_4_6056060791015625x5_017200469970703 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_381_svg_4_6056060791015625x5_017200469970703.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_382_svg_7_038324356079102x5_059196472167969 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_382_svg_7_038324356079102x5_059196472167969.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_383_svg_7_039144515991211x5_059196472167969 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_383_svg_7_039144515991211x5_059196472167969.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_384_svg_9_921592712402344x5_383209228515625 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_384_svg_9_921592712402344x5_383209228515625.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_385_svg_9_920397758483887x5_383209228515625 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_385_svg_9_920397758483887x5_383209228515625.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_386_svg_6_4775848388671875x3_2807388305664062 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_386_svg_6_4775848388671875x3_2807388305664062.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_387_svg_6_477602958679199x3_2807388305664062 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_387_svg_6_477602958679199x3_2807388305664062.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_388_svg_5_782796859741211x1_6086654663085938 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_388_svg_5_782796859741211x1_6086654663085938.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_389_svg_5_782796859741211x1_6086654663085938 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_389_svg_5_782796859741211x1_6086654663085938.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_390_svg_6_802791595458984x2_004962921142578 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_390_svg_6_802791595458984x2_004962921142578.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_391_svg_6_803999900817871x2_004962921142578 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_391_svg_6_803999900817871x2_004962921142578.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_392_svg_10_417184829711914x9_90719985961914 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_392_svg_10_417184829711914x9_90719985961914.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_393_svg_10_41720199584961x9_90719985961914 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_393_svg_10_41720199584961x9_90719985961914.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_394_svg_10_41719913482666x9_90719985961914 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_394_svg_10_41719913482666x9_90719985961914.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_395_svg_8_347200393676758x7_951200485229492 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_395_svg_8_347200393676758x7_951200485229492.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_396_svg_8_348392486572266x7_936800479888916 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_396_svg_8_348392486572266x7_936800479888916.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_397_svg_8_348398208618164x7_936800479888916 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_397_svg_8_348398208618164x7_936800479888916.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_398_svg_13_776006698608398x17_134784698486328 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_398_svg_13_776006698608398x17_134784698486328.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_399_svg_15_180000305175781x18_466785430908203 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_399_svg_15_180000305175781x18_466785430908203.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_400_svg_3_7140026092529297x3_868807792663574 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_400_svg_3_7140026092529297x3_868807792663574.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_401_svg_13_776006698608398x14_937600135803223 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_401_svg_13_776006698608398x14_937600135803223.svg";
import SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_402_svg_9_637199401855469x11_422792434692383 from "./assets/Rapid_Viena_assets_icon_Vector_I190_21156_635_402_svg_9_637199401855469x11_422792434692383.svg";


export class Rapid_Viena extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Rapid Viena",
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
          "layoutProps": { "width": 60, "height": 60, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "SK_Rapid_Wien_Logo 1",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 6, "y": 0,
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
                "width": 47.7599983215332, "height": 60,
                "relativeTransform": [[1, 0, 6], [0, 1, 0]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Ebene x0020 1",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": -0.015591258183121681, "y": 0.008399142883718014,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 47.791221618652344, "height": 59.991171970032156,
                    "relativeTransform": [[1, 0, -0.015591258183121681], [0, 1, 0.008399142883718014]]
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "2222580534256",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": -0.015591258183121681, "y": 0.008399142883718014,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 47.791221618652344, "height": 59.99118341412395,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                      },
                      "children": [
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": -0.015591258183121681, "y": 13.79881204571575,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 47.791221618652344, "height": 46.1923713684082,
                            "relativeTransform": [[1, 0, 0], [0, 1, 13.790412902832031]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_340_svg_47_791221618652344x46_1923713684082
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0.4511957224458456, "y": 30.141596927307546,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 46.81440353393555, "height": 16.129199981689453,
                            "relativeTransform": [[1, 0, 0.4667869806289673], [0, 1, 30.133197784423828]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_341_svg_46_81440353393555x16_129199981689453
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0.9479826744645834, "y": 30.637196674011648,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 45.821998596191406, "height": 15.122407913208008,
                            "relativeTransform": [[1, 0, 0.9635739326477051], [0, 1, 30.62879753112793]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_342_svg_45_821998596191406x15_122407913208008
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.137981539592147, "y": 46.73762811627239,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.5928032398223877, "height": 1.4603843688964844,
                            "relativeTransform": [[1, 0, 3.1535727977752686], [0, 1, 46.72922897338867]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_343_svg_3_5928032398223877x1_4603843688964844
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 4.235961800441146, "y": 32.38082803692669,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.631599426269531, "height": 11.182788848876953,
                            "relativeTransform": [[1, 0, 4.251553058624268], [0, 1, 32.37242889404297]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_344_svg_8_631599426269531x11_182788848876953
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.70677507482469, "y": 33.11622156109661,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.116355895996094, "height": 10.248218536376953,
                            "relativeTransform": [[1, 0, 36.72236633300781], [0, 1, 33.10782241821289]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_345_svg_8_116355895996094x10_248218536376953
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 32.01477754674852, "y": 33.71279825177044,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.891998291015625, "height": 10.190387725830078,
                            "relativeTransform": [[1, 0, 32.03036880493164], [0, 1, 33.70439910888672]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_346_svg_2_891998291015625x10_190387725830078
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 13.73160875402391, "y": 33.75477136578411,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.248791694641113, "height": 10.758007049560547,
                            "relativeTransform": [[1, 0, 13.747200012207031], [0, 1, 33.74637222290039]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_347_svg_8_248791694641113x10_758007049560547
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 23.695233708247542, "y": 34.51740182843059,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.385723114013672, "height": 10.12264633178711,
                            "relativeTransform": [[1, 0, 23.710824966430664], [0, 1, 34.509002685546875]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_348_svg_7_385723114013672x10_12264633178711
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 4.4903649147599936, "y": 32.63522638287395,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.937999725341797, "height": 10.67279052734375,
                            "relativeTransform": [[1, 0, 4.505956172943115], [0, 1, 32.626827239990234]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_349_svg_7_937999725341797x10_67279052734375
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.90478075109422, "y": 33.34284128155559,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.667255401611328, "height": 9.723979949951172,
                            "relativeTransform": [[1, 0, 36.920372009277344], [0, 1, 33.334442138671875]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_350_svg_7_667255401611328x9_723979949951172
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 32.24160326085985, "y": 33.954001559875906,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.4527969360351562, "height": 9.693599700927734,
                            "relativeTransform": [[1, 0, 32.25719451904297], [0, 1, 33.94560241699219]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_351_svg_2_4527969360351562x9_693599700927734
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 13.972801571711898, "y": 34.01037515606731,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.767599105834961, "height": 10.233600616455078,
                            "relativeTransform": [[1, 0, 13.98839282989502], [0, 1, 34.001976013183594]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_352_svg_7_767599105834961x10_233600616455078
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 23.894391423091292, "y": 34.74020303692669,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.901309967041016, "height": 9.630996704101562,
                            "relativeTransform": [[1, 0, 23.909982681274414], [0, 1, 34.73180389404297]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_353_svg_6_901309967041016x9_630996704101562
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.730835800990462, "y": 35.10119928326458,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 35.7225456237793, "height": 5.357975006103516,
                            "relativeTransform": [[1, 0, 6.746427059173584], [0, 1, 35.09280014038086]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_354_svg_35_7225456237793x5_357975006103516
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.999641781672835, "y": 35.41319955792278,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 35.19970703125, "height": 4.790382385253906,
                            "relativeTransform": [[1, 0, 7.015233039855957], [0, 1, 35.40480041503906]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_355_svg_35_19970703125x4_790382385253906
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 11.379641896113753, "y": 17.639996661804616,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.5204010009765625, "height": 4.592411041259766,
                            "relativeTransform": [[1, 0, 11.395233154296875], [0, 1, 17.6315975189209]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_356_svg_4_5204010009765625x4_592411041259766
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.460832005366683, "y": 20.417985095642507,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.932003498077393, "height": 6.208806991577148,
                            "relativeTransform": [[1, 0, 6.476423263549805], [0, 1, 20.40958595275879]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_357_svg_4_932003498077393x6_208806991577148
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 13.108823185786605, "y": 20.573983325622976,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.7779836654663086, "height": 4.195207595825195,
                            "relativeTransform": [[1, 0, 13.124414443969727], [0, 1, 20.565584182739258]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_358_svg_2_7779836654663086x4_195207595825195
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 9.43798196874559, "y": 21.042025699280202,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.44199275970459, "height": 5.441991806030273,
                            "relativeTransform": [[1, 0, 9.453573226928711], [0, 1, 21.033626556396484]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_359_svg_5_44199275970459x5_441991806030273
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 9.338448887690902, "y": 24.075598849914968,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.8192033767700195, "height": 4.308002471923828,
                            "relativeTransform": [[1, 0, 9.354040145874023], [0, 1, 24.06719970703125]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_360_svg_4_8192033767700195x4_308002471923828
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.0876218136399984, "y": 24.939583911560476,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.742102861404419, "height": 4.762796401977539,
                            "relativeTransform": [[1, 0, 3.10321307182312], [0, 1, 24.931184768676758]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_361_svg_3_742102861404419x4_762796401977539
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 5.228452568873763, "y": 24.968398227356374,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.129999160766602, "height": 4.761592864990234,
                            "relativeTransform": [[1, 0, 5.244043827056885], [0, 1, 24.959999084472656]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_362_svg_5_129999160766602x4_761592864990234
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 8.204409008845687, "y": 28.1279689213261,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.046799659729004, "height": 1.6019954681396484,
                            "relativeTransform": [[1, 0, 8.220000267028809], [0, 1, 28.119569778442383]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_363_svg_3_046799659729004x1_6019954681396484
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 31.84560907445848, "y": 17.639996661804616,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.520380020141602, "height": 4.592411041259766,
                            "relativeTransform": [[1, 0, 31.8612003326416], [0, 1, 17.6315975189209]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_364_svg_4_520380020141602x4_592411041259766
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.35280550085008, "y": 20.417985095642507,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.931995391845703, "height": 6.208806991577148,
                            "relativeTransform": [[1, 0, 36.3683967590332], [0, 1, 20.40958595275879]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_365_svg_4_931995391845703x6_208806991577148
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 31.84560907445848, "y": 20.573983325622976,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.778005599975586, "height": 4.195207595825195,
                            "relativeTransform": [[1, 0, 31.8612003326416], [0, 1, 20.565584182739258]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_366_svg_2_778005599975586x4_195207595825195
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 32.86560381017625, "y": 21.042025699280202,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.443218231201172, "height": 5.441991806030273,
                            "relativeTransform": [[1, 0, 32.881195068359375], [0, 1, 21.033626556396484]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_367_svg_5_443218231201172x5_441991806030273
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 33.5879777725786, "y": 24.075598849914968,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.819194793701172, "height": 4.308002471923828,
                            "relativeTransform": [[1, 0, 33.60356903076172], [0, 1, 24.06719970703125]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_368_svg_4_819194793701172x4_308002471923828
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 40.915904408320785, "y": 24.939583911560476,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.7420921325683594, "height": 4.762796401977539,
                            "relativeTransform": [[1, 0, 40.931495666503906], [0, 1, 24.931184768676758]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_369_svg_3_7420921325683594x4_762796401977539
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 37.38720644079149, "y": 24.968398227356374,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.129997253417969, "height": 4.761592864990234,
                            "relativeTransform": [[1, 0, 37.40279769897461], [0, 1, 24.959999084472656]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_370_svg_5_129997253417969x4_761592864990234
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.494403248652816, "y": 28.1279689213261,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.0468177795410156, "height": 1.6019954681396484,
                            "relativeTransform": [[1, 0, 36.50999450683594], [0, 1, 28.119569778442383]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_371_svg_3_0468177795410156x1_6019954681396484
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.386432534083724, "y": 46.73762811627239,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.9311962127685547, "height": 1.5875892639160156,
                            "relativeTransform": [[1, 0, 6.402023792266846], [0, 1, 46.72922897338867]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_372_svg_3_9311962127685547x1_5875892639160156
                        },
                        {
                          "type": "FRAME",
                          "name": "Group",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "x": 36.99000490270555, "y": 46.76642526593059,
                            "strokes": [],
                            "strokeWeight": 0,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 44.169574623927474, "height": 48.354045047424734,
                            "relativeTransform": [[1, 0, 37.00559616088867], [0, 1, 46.758026123046875]]
                          },
                          "children": [
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "Vector",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 40.57677829824388, "y": 46.76642608642578,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 3.5927963256835938, "height": 1.459197998046875,
                                "relativeTransform": [[1, 0, 3.58677339553833], [0, 1, 8.204951882362366e-7]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_374_svg_3_5927963256835938x1_459197998046875
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "Vector",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 36.99000490270555, "y": 46.76642526593059,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 3.9312171936035156, "height": 1.5876197814941406,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_375_svg_3_9312171936035156x1_5876197814941406
                            }
                          ]
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 35.61477983556688, "y": 47.26202691998333,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.975177764892578, "height": 6.4068145751953125,
                            "relativeTransform": [[1, 0, 35.63037109375], [0, 1, 47.25362777709961]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_376_svg_4_975177764892578x6_4068145751953125
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.7584523018449545, "y": 47.26202691998333,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.9751996994018555, "height": 6.4068145751953125,
                            "relativeTransform": [[1, 0, 6.774043560028076], [0, 1, 47.25362777709961]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_377_svg_4_9751996994018555x6_4068145751953125
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 37.92600572668016, "y": 47.41797174420208,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.445522308349609, "height": 5.6267852783203125,
                            "relativeTransform": [[1, 0, 37.94159698486328], [0, 1, 47.40957260131836]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_378_svg_5_445522308349609x5_6267852783203125
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.9917362984269857, "y": 47.41797174420208,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.446245193481445, "height": 5.6267852783203125,
                            "relativeTransform": [[1, 0, 4.007327556610107], [0, 1, 47.40957260131836]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_379_svg_5_446245193481445x5_6267852783203125
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 32.482806568965316, "y": 48.12719644512981,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.606815338134766, "height": 5.017200469970703,
                            "relativeTransform": [[1, 0, 32.49839782714844], [0, 1, 48.118797302246094]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_380_svg_4_606815338134766x5_017200469970703
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 10.260002499446273, "y": 48.12719644512981,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.6056060791015625, "height": 5.017200469970703,
                            "relativeTransform": [[1, 0, 10.275593757629395], [0, 1, 48.118797302246094]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_381_svg_4_6056060791015625x5_017200469970703
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 29.356496220454574, "y": 51.797968997620046,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.038324356079102, "height": 5.059196472167969,
                            "relativeTransform": [[1, 0, 29.372087478637695], [0, 1, 51.78956985473633]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_382_svg_7_038324356079102x5_059196472167969
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 10.953575497493148, "y": 51.797968997620046,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.039144515991211, "height": 5.059196472167969,
                            "relativeTransform": [[1, 0, 10.96916675567627], [0, 1, 51.78956985473633]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_383_svg_7_039144515991211x5_059196472167969
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 29.42157686315477, "y": 52.20839990582317,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 9.921592712402344, "height": 5.383209228515625,
                            "relativeTransform": [[1, 0, 29.43716812133789], [0, 1, 52.20000076293945]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_384_svg_9_921592712402344x5_383209228515625
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 8.006429081782699, "y": 52.20839990582317,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 9.920397758483887, "height": 5.383209228515625,
                            "relativeTransform": [[1, 0, 8.02202033996582], [0, 1, 52.20000076293945]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_385_svg_9_920397758483887x5_383209228515625
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 25.807193165645003, "y": 52.4076262852177,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.4775848388671875, "height": 3.2807388305664062,
                            "relativeTransform": [[1, 0, 25.822784423828125], [0, 1, 52.399227142333984]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_386_svg_6_4775848388671875x3_2807388305664062
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 15.077981358394027, "y": 52.4076262852177,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.477602958679199, "height": 3.2807388305664062,
                            "relativeTransform": [[1, 0, 15.093572616577148], [0, 1, 52.399227142333984]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_387_svg_6_477602958679199x3_2807388305664062
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 24.78719270788133, "y": 55.774150027893484,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.782796859741211, "height": 1.6086654663085938,
                            "relativeTransform": [[1, 0, 24.802783966064453], [0, 1, 55.765750885009766]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_388_svg_5_782796859741211x1_6086654663085938
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.79279268346727, "y": 55.774150027893484,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.782796859741211, "height": 1.6086654663085938,
                            "relativeTransform": [[1, 0, 16.80838394165039], [0, 1, 55.765750885009766]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_389_svg_5_782796859741211x1_6086654663085938
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 25.638018971309066, "y": 57.63719858136028,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.802791595458984, "height": 2.004962921142578,
                            "relativeTransform": [[1, 0, 25.653610229492188], [0, 1, 57.62879943847656]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_390_svg_6_802791595458984x2_004962921142578
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 14.922021275386214, "y": 57.63719858136028,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.803999900817871, "height": 2.004962921142578,
                            "relativeTransform": [[1, 0, 14.937612533569336], [0, 1, 57.62879943847656]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_391_svg_6_803999900817871x2_004962921142578
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 18.664821034297347, "y": 0.008399142883718014,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 10.417184829711914, "height": 9.90719985961914,
                            "relativeTransform": [[1, 0, 18.68041229248047], [0, 1, 0]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_392_svg_10_417184829711914x9_90719985961914
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 35.27522981725633, "y": 4.671608581207693,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 10.41720199584961, "height": 9.90719985961914,
                            "relativeTransform": [[1, 0, 35.29082107543945], [0, 1, 4.663209438323975]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_393_svg_10_41720199584961x9_90719985961914
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 2.0532168205827475, "y": 4.671608581207693,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 10.41719913482666, "height": 9.90719985961914,
                            "relativeTransform": [[1, 0, 2.068808078765869], [0, 1, 4.663209438323975]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_394_svg_10_41719913482666x9_90719985961914
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 19.69922006689012, "y": 1.0859890123829246,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.347200393676758, "height": 7.951200485229492,
                            "relativeTransform": [[1, 0, 19.714811325073242], [0, 1, 1.0775898694992065]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_395_svg_8_347200393676758x7_951200485229492
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.30963075719774, "y": 5.763605727814138,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.348392486572266, "height": 7.936800479888916,
                            "relativeTransform": [[1, 0, 36.32522201538086], [0, 1, 5.75520658493042]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_396_svg_8_348392486572266x7_936800479888916
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.0876218136399984, "y": 5.763605727814138,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.348398208618164, "height": 7.936800479888916,
                            "relativeTransform": [[1, 0, 3.10321307182312], [0, 1, 5.75520658493042]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_397_svg_8_348398208618164x7_936800479888916
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.977605229243636, "y": 14.834405078552663,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 13.776006698608398, "height": 17.134784698486328,
                            "relativeTransform": [[1, 0, 16.993196487426758], [0, 1, 14.826005935668945]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_398_svg_13_776006698608398x17_134784698486328
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.26839387975633, "y": 14.168391360901296,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 15.180000305175781, "height": 18.466785430908203,
                            "relativeTransform": [[1, 0, 16.283985137939453], [0, 1, 14.159992218017578]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_399_svg_15_180000305175781x18_466785430908203
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.977605229243636, "y": 14.834405078552663,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.7140026092529297, "height": 3.868807792663574,
                            "relativeTransform": [[1, 0, 16.993196487426758], [0, 1, 14.826005935668945]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_400_svg_3_7140026092529297x3_868807792663574
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.977605229243636, "y": 14.834405078552663,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 13.776006698608398, "height": 14.937600135803223,
                            "relativeTransform": [[1, 0, 16.993196487426758], [0, 1, 14.826005935668945]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_401_svg_13_776006698608398x14_937600135803223
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.009999999776482582, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 21.116420155391097, "y": 20.546424045227468,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 9.637199401855469, "height": 11.422792434692383,
                            "relativeTransform": [[1, 0, 21.13201141357422], [0, 1, 20.53802490234375]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Rapid_Viena_assets_icon_Vector_I190_21156_635_402_svg_9_637199401855469x11_422792434692383
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

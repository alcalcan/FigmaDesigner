import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


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
                "width": 47.759998, "height": 60,
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
                    "x": -0.015591, "y": 0.008399,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 47.791221, "height": 59.991171,
                    "relativeTransform": [[1, 0, -0.015591], [0, 1, 0.008399]]
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "2222580534256",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": -0.015591, "y": 0.008399,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 47.791221, "height": 59.991183,
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": -0.015591, "y": 13.798812,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 47.791221, "height": 46.192371,
                            "relativeTransform": [[1, 0, 0], [0, 1, 13.790412]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0.451195, "y": 30.141596,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 46.814403, "height": 16.129199,
                            "relativeTransform": [[1, 0, 0.466786], [0, 1, 30.133197]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0.947982, "y": 30.637196,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 45.821998, "height": 15.122407,
                            "relativeTransform": [[1, 0, 0.963573], [0, 1, 30.628797]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.137981, "y": 46.737628,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.592803, "height": 1.460384,
                            "relativeTransform": [[1, 0, 3.153572], [0, 1, 46.729228]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 4.235961, "y": 32.380828,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.631599, "height": 11.182788,
                            "relativeTransform": [[1, 0, 4.251553], [0, 1, 32.372428]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.706775, "y": 33.116221,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.116355, "height": 10.248218,
                            "relativeTransform": [[1, 0, 36.722366], [0, 1, 33.107822]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 32.014777, "y": 33.712798,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.891998, "height": 10.190387,
                            "relativeTransform": [[1, 0, 32.030368], [0, 1, 33.704399]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 13.731608, "y": 33.754771,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.248791, "height": 10.758007,
                            "relativeTransform": [[1, 0, 13.747200], [0, 1, 33.746372]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 23.695233, "y": 34.517401,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.385723, "height": 10.122646,
                            "relativeTransform": [[1, 0, 23.710824], [0, 1, 34.509002]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 4.490364, "y": 32.635226,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.937999, "height": 10.672790,
                            "relativeTransform": [[1, 0, 4.505956], [0, 1, 32.626827]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.904780, "y": 33.342841,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.667255, "height": 9.723979,
                            "relativeTransform": [[1, 0, 36.920372], [0, 1, 33.334442]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 32.241603, "y": 33.954001,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.452796, "height": 9.693599,
                            "relativeTransform": [[1, 0, 32.257194], [0, 1, 33.945602]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 13.972801, "y": 34.010375,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.767599, "height": 10.233600,
                            "relativeTransform": [[1, 0, 13.988392], [0, 1, 34.001976]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 23.894391, "y": 34.740203,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.901309, "height": 9.630996,
                            "relativeTransform": [[1, 0, 23.909982], [0, 1, 34.731803]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.730835, "y": 35.101199,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 35.722545, "height": 5.357975,
                            "relativeTransform": [[1, 0, 6.746427], [0, 1, 35.092800]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.999641, "y": 35.413199,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 35.199707, "height": 4.790382,
                            "relativeTransform": [[1, 0, 7.015233], [0, 1, 35.404800]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 11.379641, "y": 17.639996,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.520401, "height": 4.592411,
                            "relativeTransform": [[1, 0, 11.395233], [0, 1, 17.631597]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.460832, "y": 20.417985,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.932003, "height": 6.208806,
                            "relativeTransform": [[1, 0, 6.476423], [0, 1, 20.409585]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 13.108823, "y": 20.573983,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.777983, "height": 4.195207,
                            "relativeTransform": [[1, 0, 13.124414], [0, 1, 20.565584]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 9.437981, "y": 21.042025,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.441992, "height": 5.441991,
                            "relativeTransform": [[1, 0, 9.453573], [0, 1, 21.033626]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 9.338448, "y": 24.075598,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.819203, "height": 4.308002,
                            "relativeTransform": [[1, 0, 9.354040], [0, 1, 24.067199]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.087621, "y": 24.939583,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.742102, "height": 4.762796,
                            "relativeTransform": [[1, 0, 3.103213], [0, 1, 24.931184]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 5.228452, "y": 24.968398,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.129999, "height": 4.761592,
                            "relativeTransform": [[1, 0, 5.244043], [0, 1, 24.959999]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 8.204409, "y": 28.127968,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.046799, "height": 1.601995,
                            "relativeTransform": [[1, 0, 8.220000], [0, 1, 28.119569]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 31.845609, "y": 17.639996,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.520380, "height": 4.592411,
                            "relativeTransform": [[1, 0, 31.861200], [0, 1, 17.631597]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.352805, "y": 20.417985,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.931995, "height": 6.208806,
                            "relativeTransform": [[1, 0, 36.368396], [0, 1, 20.409585]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 31.845609, "y": 20.573983,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.778005, "height": 4.195207,
                            "relativeTransform": [[1, 0, 31.861200], [0, 1, 20.565584]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 32.865603, "y": 21.042025,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.443218, "height": 5.441991,
                            "relativeTransform": [[1, 0, 32.881195], [0, 1, 21.033626]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 33.587977, "y": 24.075598,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.819194, "height": 4.308002,
                            "relativeTransform": [[1, 0, 33.603569], [0, 1, 24.067199]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 40.915904, "y": 24.939583,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.742092, "height": 4.762796,
                            "relativeTransform": [[1, 0, 40.931495], [0, 1, 24.931184]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 37.387206, "y": 24.968398,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.129997, "height": 4.761592,
                            "relativeTransform": [[1, 0, 37.402797], [0, 1, 24.959999]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.494403, "y": 28.127968,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.046817, "height": 1.601995,
                            "relativeTransform": [[1, 0, 36.509994], [0, 1, 28.119569]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.386432, "y": 46.737628,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.931196, "height": 1.587589,
                            "relativeTransform": [[1, 0, 6.402023], [0, 1, 46.729228]],
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
                            "x": 36.990004, "y": 46.766425,
                            "strokes": [],
                            "strokeWeight": 0,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 44.169574, "height": 48.354045,
                            "relativeTransform": [[1, 0, 37.005596], [0, 1, 46.758026]]
                          },
                          "children": [
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "Vector",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 40.576778, "y": 46.766426,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 3.592796, "height": 1.459197,
                                "relativeTransform": [[1, 0, 3.586773], [0, 1, 8.204951e-7]],
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
                                "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 36.990004, "y": 46.766425,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 3.931217, "height": 1.587619,
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 35.614779, "y": 47.262026,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.975177, "height": 6.406814,
                            "relativeTransform": [[1, 0, 35.630371], [0, 1, 47.253627]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.758452, "y": 47.262026,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.975199, "height": 6.406814,
                            "relativeTransform": [[1, 0, 6.774043], [0, 1, 47.253627]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 37.926005, "y": 47.417971,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.445522, "height": 5.626785,
                            "relativeTransform": [[1, 0, 37.941596], [0, 1, 47.409572]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.991736, "y": 47.417971,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.446245, "height": 5.626785,
                            "relativeTransform": [[1, 0, 4.007327], [0, 1, 47.409572]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 32.482806, "y": 48.127196,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.606815, "height": 5.017200,
                            "relativeTransform": [[1, 0, 32.498397], [0, 1, 48.118797]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 10.260002, "y": 48.127196,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.605606, "height": 5.017200,
                            "relativeTransform": [[1, 0, 10.275593], [0, 1, 48.118797]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 29.356496, "y": 51.797968,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.038324, "height": 5.059196,
                            "relativeTransform": [[1, 0, 29.372087], [0, 1, 51.789569]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 10.953575, "y": 51.797968,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.039144, "height": 5.059196,
                            "relativeTransform": [[1, 0, 10.969166], [0, 1, 51.789569]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 29.421576, "y": 52.208399,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 9.921592, "height": 5.383209,
                            "relativeTransform": [[1, 0, 29.437168], [0, 1, 52.200000]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 8.006429, "y": 52.208399,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 9.920397, "height": 5.383209,
                            "relativeTransform": [[1, 0, 8.022020], [0, 1, 52.200000]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 25.807193, "y": 52.407626,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.477584, "height": 3.280738,
                            "relativeTransform": [[1, 0, 25.822784], [0, 1, 52.399227]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 15.077981, "y": 52.407626,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.477602, "height": 3.280738,
                            "relativeTransform": [[1, 0, 15.093572], [0, 1, 52.399227]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 24.787192, "y": 55.774150,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.782796, "height": 1.608665,
                            "relativeTransform": [[1, 0, 24.802783], [0, 1, 55.765750]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.792792, "y": 55.774150,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.782796, "height": 1.608665,
                            "relativeTransform": [[1, 0, 16.808383], [0, 1, 55.765750]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 25.638018, "y": 57.637198,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.802791, "height": 2.004962,
                            "relativeTransform": [[1, 0, 25.653610], [0, 1, 57.628799]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 14.922021, "y": 57.637198,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.803999, "height": 2.004962,
                            "relativeTransform": [[1, 0, 14.937612], [0, 1, 57.628799]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 18.664821, "y": 0.008399,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 10.417184, "height": 9.907199,
                            "relativeTransform": [[1, 0, 18.680412], [0, 1, 0]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 35.275229, "y": 4.671608,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 10.417201, "height": 9.907199,
                            "relativeTransform": [[1, 0, 35.290821], [0, 1, 4.663209]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 2.053216, "y": 4.671608,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 10.417199, "height": 9.907199,
                            "relativeTransform": [[1, 0, 2.068808], [0, 1, 4.663209]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 19.699220, "y": 1.085989,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.347200, "height": 7.951200,
                            "relativeTransform": [[1, 0, 19.714811], [0, 1, 1.077589]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 36.309630, "y": 5.763605,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.348392, "height": 7.936800,
                            "relativeTransform": [[1, 0, 36.325222], [0, 1, 5.755206]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.087621, "y": 5.763605,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.348398, "height": 7.936800,
                            "relativeTransform": [[1, 0, 3.103213], [0, 1, 5.755206]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.977605, "y": 14.834405,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 13.776006, "height": 17.134784,
                            "relativeTransform": [[1, 0, 16.993196], [0, 1, 14.826005]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.268393, "y": 14.168391,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 15.180000, "height": 18.466785,
                            "relativeTransform": [[1, 0, 16.283985], [0, 1, 14.159992]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.977605, "y": 14.834405,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.714002, "height": 3.868807,
                            "relativeTransform": [[1, 0, 16.993196], [0, 1, 14.826005]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 16.977605, "y": 14.834405,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 13.776006, "height": 14.937600,
                            "relativeTransform": [[1, 0, 16.993196], [0, 1, 14.826005]],
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
                            "strokeWeight": 0.009999, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 21.116420, "y": 20.546424,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 9.637199, "height": 11.422792,
                            "relativeTransform": [[1, 0, 21.132011], [0, 1, 20.538024]],
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

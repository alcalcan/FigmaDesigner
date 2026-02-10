import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Milan_Synth_backgroundrect_0 from "./assets/Milan_Synth_backgroundrect_0.svg";
import SVG_Milan_assets_icon_svg_2_I190_21141_632_526_svg_38_29971694946289x60 from "./assets/Milan_assets_icon_svg_2_I190_21141_632_526_svg_38_29971694946289x60.svg";
import SVG_Milan_assets_icon_svg_3_I190_21141_632_527_svg_37_0592155456543x58_78643035888672 from "./assets/Milan_assets_icon_svg_3_I190_21141_632_527_svg_37_0592155456543x58_78643035888672.svg";
import SVG_Milan_assets_icon_svg_4_I190_21141_632_528_svg_33_757843017578125x55_41183090209961 from "./assets/Milan_assets_icon_svg_4_I190_21141_632_528_svg_33_757843017578125x55_41183090209961.svg";
import SVG_Milan_assets_icon_svg_5_I190_21141_632_529_svg_29_419187545776367x18_48690414428711 from "./assets/Milan_assets_icon_svg_5_I190_21141_632_529_svg_29_419187545776367x18_48690414428711.svg";
import SVG_Milan_assets_icon_svg_6_I190_21141_632_530_svg_29_381126403808594x18_488296508789062 from "./assets/Milan_assets_icon_svg_6_I190_21141_632_530_svg_29_381126403808594x18_488296508789062.svg";
import SVG_Milan_assets_icon_svg_7_I190_21141_632_531_svg_4_281223297119141x5_086856842041016 from "./assets/Milan_assets_icon_svg_7_I190_21141_632_531_svg_4_281223297119141x5_086856842041016.svg";
import SVG_Milan_assets_icon_svg_8_I190_21141_632_532_svg_6_449257850646973x7_245476722717285 from "./assets/Milan_assets_icon_svg_8_I190_21141_632_532_svg_6_449257850646973x7_245476722717285.svg";
import SVG_Milan_assets_icon_svg_9_I190_21141_632_533_svg_7_105852127075195x9_12722396850586 from "./assets/Milan_assets_icon_svg_9_I190_21141_632_533_svg_7_105852127075195x9_12722396850586.svg";
import SVG_Milan_assets_icon_svg_10_I190_21141_632_534_svg_7_369293212890625x9_333272933959961 from "./assets/Milan_assets_icon_svg_10_I190_21141_632_534_svg_7_369293212890625x9_333272933959961.svg";
import SVG_Milan_assets_icon_svg_11_I190_21141_632_535_svg_3_9492130279541016x5_084869384765625 from "./assets/Milan_assets_icon_svg_11_I190_21141_632_535_svg_3_9492130279541016x5_084869384765625.svg";
import SVG_Milan_assets_icon_svg_12_I190_21141_632_536_svg_4_073712348937988x5_138893127441406 from "./assets/Milan_assets_icon_svg_12_I190_21141_632_536_svg_4_073712348937988x5_138893127441406.svg";
import SVG_Milan_assets_icon_svg_13_I190_21141_632_537_svg_2_9140214920043945x4_945865631103516 from "./assets/Milan_assets_icon_svg_13_I190_21141_632_537_svg_2_9140214920043945x4_945865631103516.svg";
import SVG_Milan_assets_icon_svg_14_I190_21141_632_538_svg_5_025262832641602x9_045372009277344 from "./assets/Milan_assets_icon_svg_14_I190_21141_632_538_svg_5_025262832641602x9_045372009277344.svg";
import SVG_Milan_assets_icon_svg_15_I190_21141_632_539_svg_3_7435340881347656x12_891944885253906 from "./assets/Milan_assets_icon_svg_15_I190_21141_632_539_svg_3_7435340881347656x12_891944885253906.svg";
import SVG_Milan_assets_icon_svg_16_I190_21141_632_540_svg_4_950525283813477x8_524026870727539 from "./assets/Milan_assets_icon_svg_16_I190_21141_632_540_svg_4_950525283813477x8_524026870727539.svg";
import SVG_Milan_assets_icon_svg_17_I190_21141_632_541_svg_3_7435340881347656x12_385321617126465 from "./assets/Milan_assets_icon_svg_17_I190_21141_632_541_svg_3_7435340881347656x12_385321617126465.svg";
import SVG_Milan_assets_icon_svg_18_I190_21141_632_542_svg_0_018024444580078125x0_015781402587890625 from "./assets/Milan_assets_icon_svg_18_I190_21141_632_542_svg_0_018024444580078125x0_015781402587890625.svg";
import SVG_Milan_assets_icon_svg_19_I190_21141_632_543_svg_1_9088726043701172x14_643089294433594 from "./assets/Milan_assets_icon_svg_19_I190_21141_632_543_svg_1_9088726043701172x14_643089294433594.svg";
import SVG_Milan_assets_icon_svg_20_I190_21141_632_544_svg_14_811944961547852x28_581411361694336 from "./assets/Milan_assets_icon_svg_20_I190_21141_632_544_svg_14_811944961547852x28_581411361694336.svg";
import SVG_Milan_assets_icon_svg_21_I190_21141_632_545_svg_2_9290828704833984x30_243179321289062 from "./assets/Milan_assets_icon_svg_21_I190_21141_632_545_svg_2_9290828704833984x30_243179321289062.svg";
import SVG_Milan_assets_icon_svg_22_I190_21141_632_546_svg_2_910006523132324x26_307851791381836 from "./assets/Milan_assets_icon_svg_22_I190_21141_632_546_svg_2_910006523132324x26_307851791381836.svg";


export class Milan extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Milan",
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
              "name": "Logo_of_AC_Milan 1",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 11, "y": 0,
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
                "width": 38.268550872802734, "height": 60,
                "relativeTransform": [[1, 0, 11], [0, 1, 0]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "backgroundrect",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 0, "y": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0,
                    "vectorPaths": [
                      {
                        "windingRule": "NONE",
                        "data": "M 0 0 L 0.10600706189870834 0 L 0.10600706189870834 0.10600706934928894 L 0 0.10600706934928894 L 0 0 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 0.10600706189870834, "height": 0.10600706934928894,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Milan_Synth_backgroundrect_0
                },
                {
                  "type": "FRAME",
                  "name": "Group",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 0, "y": 0,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 38.29971694946289, "height": 60,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "svg 1",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": 0, "y": 0,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 38.29971694946289, "height": 60,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                      },
                      "children": [
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 2",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0, "y": -1.1102230246251565e-16,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 38.29971694946289, "height": 60,
                            "relativeTransform": [[1, 0, 0], [0, 1, -1.1102230246251565e-16]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_2_I190_21141_632_526_svg_38_29971694946289x60
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 3",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0.6201807856559753, "y": 0.6067852973937988,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 37.0592155456543, "height": 58.78643035888672,
                            "relativeTransform": [[1, 0, 0.6201807856559753], [0, 1, 0.6067852973937988]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_3_I190_21141_632_527_svg_37_0592155456543x58_78643035888672
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 4",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 2.270904064178467, "y": 2.303523302078247,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 33.757843017578125, "height": 55.41183090209961,
                            "relativeTransform": [[1, 0, 2.270904064178467], [0, 1, 2.303523302078247]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_4_I190_21141_632_528_svg_33_757843017578125x55_41183090209961
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 5",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 4.440351963043213, "y": 3.7488203048706055,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 29.419187545776367, "height": 18.48690414428711,
                            "relativeTransform": [[1, 0, 4.440351963043213], [0, 1, 3.7488203048706055]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_5_I190_21141_632_529_svg_29_419187545776367x18_48690414428711
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 6",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 4.459368705749512, "y": 37.7824821472168,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 29.381126403808594, "height": 18.488296508789062,
                            "relativeTransform": [[1, 0, 4.459368705749512], [0, 1, 37.7824821472168]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_6_I190_21141_632_530_svg_29_381126403808594x18_488296508789062
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 7",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 23.36467933654785, "y": 46.31474685668945,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.281223297119141, "height": 5.086856842041016,
                            "relativeTransform": [[1, 0, 23.36467933654785], [0, 1, 46.31474685668945]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_7_I190_21141_632_531_svg_4_281223297119141x5_086856842041016
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 8",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 15.731663703918457, "y": 5.256993293762207,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.449257850646973, "height": 7.245476722717285,
                            "relativeTransform": [[1, 0, 15.731663703918457], [0, 1, 5.256993293762207]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_8_I190_21141_632_532_svg_6_449257850646973x7_245476722717285
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 9",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 22.450668334960938, "y": 6.8703179359436035,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.105852127075195, "height": 9.12722396850586,
                            "relativeTransform": [[1, 0, 22.450668334960938], [0, 1, 6.8703179359436035]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_9_I190_21141_632_533_svg_7_105852127075195x9_12722396850586
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 10",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 8.489483833312988, "y": 6.8703179359436035,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.369293212890625, "height": 9.333272933959961,
                            "relativeTransform": [[1, 0, 8.489483833312988], [0, 1, 6.8703179359436035]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_10_I190_21141_632_534_svg_7_369293212890625x9_333272933959961
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 11",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 18.78053855895996, "y": 47.232215881347656,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.9492130279541016, "height": 5.084869384765625,
                            "relativeTransform": [[1, 0, 18.78053855895996], [0, 1, 47.232215881347656]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_11_I190_21141_632_535_svg_3_9492130279541016x5_084869384765625
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 12",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 13.825451850891113, "y": 47.02294158935547,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.073712348937988, "height": 5.138893127441406,
                            "relativeTransform": [[1, 0, 13.825451850891113], [0, 1, 47.02294158935547]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_12_I190_21141_632_536_svg_4_073712348937988x5_138893127441406
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 13",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 10.678618431091309, "y": 46.112545013427734,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.9140214920043945, "height": 4.945865631103516,
                            "relativeTransform": [[1, 0, 10.678618431091309], [0, 1, 46.112545013427734]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_13_I190_21141_632_537_svg_2_9140214920043945x4_945865631103516
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 14",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 29.595796585083008, "y": 32.329715728759766,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 5.025262832641602, "height": 9.045372009277344,
                            "relativeTransform": [[1, 0, 29.595796585083008], [0, 1, 32.329715728759766]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_14_I190_21141_632_538_svg_5_025262832641602x9_045372009277344
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 15",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 20.012779235839844, "y": 32.329715728759766,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.7435340881347656, "height": 12.891944885253906,
                            "relativeTransform": [[1, 0, 20.012779235839844], [0, 1, 32.329715728759766]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_15_I190_21141_632_539_svg_3_7435340881347656x12_891944885253906
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 16",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 29.595796585083008, "y": 18.659605026245117,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.950525283813477, "height": 8.524026870727539,
                            "relativeTransform": [[1, 0, 29.595796585083008], [0, 1, 18.659605026245117]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_16_I190_21141_632_540_svg_4_950525283813477x8_524026870727539
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 17",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 20.012779235839844, "y": 14.7982816696167,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 3.7435340881347656, "height": 12.385321617126465,
                            "relativeTransform": [[1, 0, 20.012779235839844], [0, 1, 14.7982816696167]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_17_I190_21141_632_541_svg_3_7435340881347656x12_385321617126465
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 18",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 29.57779884338379, "y": 18.643795013427734,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 0.018024444580078125, "height": 0.015781402587890625,
                            "relativeTransform": [[1, 0, 29.57779884338379], [0, 1, 18.643795013427734]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_18_I190_21141_632_542_svg_0_018024444580078125x0_015781402587890625
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 19",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 3.494823932647705, "y": 22.68655776977539,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.9088726043701172, "height": 14.643089294433594,
                            "relativeTransform": [[1, 0, 3.494823932647705], [0, 1, 22.68655776977539]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_19_I190_21141_632_543_svg_1_9088726043701172x14_643089294433594
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 20",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 20.011564254760742, "y": 15.718423843383789,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 14.811944961547852, "height": 28.581411361694336,
                            "relativeTransform": [[1, 0, 20.011564254760742], [0, 1, 15.718423843383789]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_20_I190_21141_632_544_svg_14_811944961547852x28_581411361694336
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 21",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 14.172004699707031, "y": 14.887553215026855,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.9290828704833984, "height": 30.243179321289062,
                            "relativeTransform": [[1, 0, 14.172004699707031], [0, 1, 14.887553215026855]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_21_I190_21141_632_545_svg_2_9290828704833984x30_243179321289062
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "svg 22",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 8.332959175109863, "y": 16.855867385864258,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.910006523132324, "height": 26.307851791381836,
                            "relativeTransform": [[1, 0, 8.332959175109863], [0, 1, 16.855867385864258]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Milan_assets_icon_svg_22_I190_21141_632_546_svg_2_910006523132324x26_307851791381836
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

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import SVG_Young_boys_assets_icon_path16_I190_21182_632_435_svg_59_377296447753906x59_37686538696289 from "./assets/Young_boys_assets_icon_path16_I190_21182_632_435_svg_59_377296447753906x59_37686538696289.svg";
import SVG_Young_boys_assets_icon_path18_I190_21182_632_436_svg_59_88698196411133x59_8869743347168 from "./assets/Young_boys_assets_icon_path18_I190_21182_632_436_svg_59_88698196411133x59_8869743347168.svg";
import SVG_Young_boys_assets_icon_path20_I190_21182_632_437_svg_44_957130432128906x44_957115173339844 from "./assets/Young_boys_assets_icon_path20_I190_21182_632_437_svg_44_957130432128906x44_957115173339844.svg";
import SVG_Young_boys_assets_icon_path22_I190_21182_632_438_svg_45_081764221191406x35_955963134765625 from "./assets/Young_boys_assets_icon_path22_I190_21182_632_438_svg_45_081764221191406x35_955963134765625.svg";
import SVG_Young_boys_assets_icon_path24_I190_21182_632_439_svg_44_2333869934082x35_10760498046875 from "./assets/Young_boys_assets_icon_path24_I190_21182_632_439_svg_44_2333869934082x35_10760498046875.svg";
import SVG_Young_boys_assets_icon_path26_I190_21182_632_440_svg_21_929773330688477x23_01749610900879 from "./assets/Young_boys_assets_icon_path26_I190_21182_632_440_svg_21_929773330688477x23_01749610900879.svg";
import SVG_Young_boys_assets_icon_path28_I190_21182_632_441_svg_31_18587875366211x18_213592529296875 from "./assets/Young_boys_assets_icon_path28_I190_21182_632_441_svg_31_18587875366211x18_213592529296875.svg";
import SVG_Young_boys_assets_icon_path30_I190_21182_632_442_svg_6_310352325439453x6_000951766967773 from "./assets/Young_boys_assets_icon_path30_I190_21182_632_442_svg_6_310352325439453x6_000951766967773.svg";
import SVG_Young_boys_assets_icon_path32_I190_21182_632_443_svg_1_5737342834472656x3_1100730895996094 from "./assets/Young_boys_assets_icon_path32_I190_21182_632_443_svg_1_5737342834472656x3_1100730895996094.svg";
import SVG_Young_boys_assets_icon_path34_I190_21182_632_444_svg_2_568920135498047x3_129497528076172 from "./assets/Young_boys_assets_icon_path34_I190_21182_632_444_svg_2_568920135498047x3_129497528076172.svg";
import SVG_Young_boys_assets_icon_path36_I190_21182_632_445_svg_2_5781517028808594x3_1255645751953125 from "./assets/Young_boys_assets_icon_path36_I190_21182_632_445_svg_2_5781517028808594x3_1255645751953125.svg";
import SVG_Young_boys_assets_icon_path38_I190_21182_632_446_svg_2_700115203857422x3_1387176513671875 from "./assets/Young_boys_assets_icon_path38_I190_21182_632_446_svg_2_700115203857422x3_1387176513671875.svg";
import SVG_Young_boys_assets_icon_path40_I190_21182_632_447_svg_4_196856498718262x4_158597946166992 from "./assets/Young_boys_assets_icon_path40_I190_21182_632_447_svg_4_196856498718262x4_158597946166992.svg";
import SVG_Young_boys_assets_icon_path42_I190_21182_632_448_svg_3_747330665588379x3_6956787109375 from "./assets/Young_boys_assets_icon_path42_I190_21182_632_448_svg_3_747330665588379x3_6956787109375.svg";
import SVG_Young_boys_assets_icon_path44_I190_21182_632_449_svg_3_791337013244629x3_649456024169922 from "./assets/Young_boys_assets_icon_path44_I190_21182_632_449_svg_3_791337013244629x3_649456024169922.svg";
import SVG_Young_boys_assets_icon_path46_I190_21182_632_450_svg_3_470701217651367x3_723159074783325 from "./assets/Young_boys_assets_icon_path46_I190_21182_632_450_svg_3_470701217651367x3_723159074783325.svg";
import SVG_Young_boys_assets_icon_path48_I190_21182_632_451_svg_3_849031448364258x3_43847393989563 from "./assets/Young_boys_assets_icon_path48_I190_21182_632_451_svg_3_849031448364258x3_43847393989563.svg";
import SVG_Young_boys_assets_icon_path50_I190_21182_632_452_svg_3_406707763671875x3_407134771347046 from "./assets/Young_boys_assets_icon_path50_I190_21182_632_452_svg_3_406707763671875x3_407134771347046.svg";
import SVG_Young_boys_assets_icon_path52_I190_21182_632_453_svg_3_5779247283935547x3_435105800628662 from "./assets/Young_boys_assets_icon_path52_I190_21182_632_453_svg_3_5779247283935547x3_435105800628662.svg";
import SVG_Young_boys_assets_icon_path54_I190_21182_632_454_svg_3_8004608154296875x3_4489905834198 from "./assets/Young_boys_assets_icon_path54_I190_21182_632_454_svg_3_8004608154296875x3_4489905834198.svg";
import SVG_Young_boys_assets_icon_path56_I190_21182_632_455_svg_3_9831924438476562x4_010124683380127 from "./assets/Young_boys_assets_icon_path56_I190_21182_632_455_svg_3_9831924438476562x4_010124683380127.svg";
import SVG_Young_boys_assets_icon_path58_I190_21182_632_456_svg_3_7928848266601562x3_6406493186950684 from "./assets/Young_boys_assets_icon_path58_I190_21182_632_456_svg_3_7928848266601562x3_6406493186950684.svg";
import SVG_Young_boys_assets_icon_path60_I190_21182_632_457_svg_3_8197174072265625x3_8498239517211914 from "./assets/Young_boys_assets_icon_path60_I190_21182_632_457_svg_3_8197174072265625x3_8498239517211914.svg";
import SVG_Young_boys_assets_icon_path62_I190_21182_632_458_svg_3_6796913146972656x3_7501916885375977 from "./assets/Young_boys_assets_icon_path62_I190_21182_632_458_svg_3_6796913146972656x3_7501916885375977.svg";


export class Young_boys extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Young boys",
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
              "name": "BSC_Young_Boys_logo 1",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
                "width": 60, "height": 60,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "layer1",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 0.056601, "y": 0.056511,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 59.943583, "height": 59.943485,
                    "relativeTransform": [[1, 0, 0.056601], [0, 1, 0.056511]]
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "g12",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": 0.056601, "y": 0.056511,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 59.943583, "height": 59.943485,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "g2493",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "x": 0.056601, "y": 0.056511,
                            "strokes": [],
                            "strokeWeight": 0,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 59.943583, "height": 59.943485,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "g2466",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "x": 0.056601, "y": 0.056511,
                                "strokes": [],
                                "strokeWeight": 0,
                                "effects": []
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 59.943583, "height": 59.943485,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "g2440",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "x": 0.056601, "y": 0.056511,
                                    "strokes": [],
                                    "strokeWeight": 0,
                                    "effects": []
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 59.943583, "height": 59.943485,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                                  },
                                  "children": [
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path16",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 0.311544, "y": 0.311510,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 59.377296, "height": 59.376865,
                                        "relativeTransform": [[1, 0, 0.254943], [0, 1, 0.254999]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path16_I190_21182_632_435_svg_59_377296447753906x59_37686538696289
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path18",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 0.056601, "y": 0.056511,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 59.886981, "height": 59.886974,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path18_I190_21182_632_436_svg_59_88698196411133x59_8869743347168
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path20",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 7.521458, "y": 7.521440,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 44.957130, "height": 44.957115,
                                        "relativeTransform": [[1, 0, 7.464857], [0, 1, 7.464929]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path20_I190_21182_632_437_svg_44_957130432128906x44_957115173339844
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path22",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 5.133220, "y": 17.327623,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 45.081764, "height": 35.955963,
                                        "relativeTransform": [[1, 0, 5.076619], [0, 1, 17.271112]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path22_I190_21182_632_438_svg_45_081764221191406x35_955963134765625
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path24",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 5.557383, "y": 17.751743,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 44.233386, "height": 35.107604,
                                        "relativeTransform": [[1, 0, 5.500782], [0, 1, 17.695232]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path24_I190_21182_632_439_svg_44_2333869934082x35_10760498046875
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path26",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 25.150095, "y": 26.440985,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 21.929773, "height": 23.017496,
                                        "relativeTransform": [[1, 0, 25.093494], [0, 1, 26.384473]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path26_I190_21182_632_440_svg_21_929773330688477x23_01749610900879
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path28",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 5.726600, "y": 17.921829,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 31.185878, "height": 18.213592,
                                        "relativeTransform": [[1, 0, 5.669999], [0, 1, 17.865318]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path28_I190_21182_632_441_svg_31_18587875366211x18_213592529296875
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path30",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 26.844791, "y": 9.312250,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 6.310352, "height": 6.000951,
                                        "relativeTransform": [[1, 0, 26.788190], [0, 1, 9.255739]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path30_I190_21182_632_442_svg_6_310352325439453x6_000951766967773
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path32",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 24.418774, "y": 54.495842,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 1.573734, "height": 3.110073,
                                        "relativeTransform": [[1, 0, 24.362173], [0, 1, 54.439331]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path32_I190_21182_632_443_svg_1_5737342834472656x3_1100730895996094
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path34",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 29.943218, "y": 54.810970,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 2.568920, "height": 3.129497,
                                        "relativeTransform": [[1, 0, 29.886617], [0, 1, 54.754459]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path34_I190_21182_632_444_svg_2_568920135498047x3_129497528076172
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path36",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 26.829002, "y": 54.784160,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 2.578151, "height": 3.125564,
                                        "relativeTransform": [[1, 0, 26.772401], [0, 1, 54.727649]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path36_I190_21182_632_445_svg_2_5781517028808594x3_1255645751953125
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path38",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 33.153944, "y": 54.380379,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 2.700115, "height": 3.138717,
                                        "relativeTransform": [[1, 0, 33.097343], [0, 1, 54.323867]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path38_I190_21182_632_446_svg_2_700115203857422x3_1387176513671875
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path40",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 6.792788, "y": 11.987184,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 4.196856, "height": 4.158597,
                                        "relativeTransform": [[1, 0, 6.736187], [0, 1, 11.930673]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path40_I190_21182_632_447_svg_4_196856498718262x4_158597946166992
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path42",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 10.136462, "y": 9.086637,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.747330, "height": 3.695678,
                                        "relativeTransform": [[1, 0, 10.079861], [0, 1, 9.030126]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path42_I190_21182_632_448_svg_3_747330665588379x3_6956787109375
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path44",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 13.599510, "y": 6.551253,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.791337, "height": 3.649456,
                                        "relativeTransform": [[1, 0, 13.542909], [0, 1, 6.494741]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path44_I190_21182_632_449_svg_3_791337013244629x3_649456024169922
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path46",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 18.703831, "y": 3.711958,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.470701, "height": 3.723159,
                                        "relativeTransform": [[1, 0, 18.647230], [0, 1, 3.655447]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path46_I190_21182_632_450_svg_3_470701217651367x3_723159074783325
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path48",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 22.513401, "y": 3.063976,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.849031, "height": 3.438473,
                                        "relativeTransform": [[1, 0, 22.456800], [0, 1, 3.007464]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path48_I190_21182_632_451_svg_3_849031448364258x3_43847393989563
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path50",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 26.642443, "y": 2.559919,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.406707, "height": 3.407134,
                                        "relativeTransform": [[1, 0, 26.585842], [0, 1, 2.503408]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path50_I190_21182_632_452_svg_3_406707763671875x3_407134771347046
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path52",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 30.371508, "y": 2.534785,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.577924, "height": 3.435105,
                                        "relativeTransform": [[1, 0, 30.314907], [0, 1, 2.478274]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path52_I190_21182_632_453_svg_3_5779247283935547x3_435105800628662
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path54",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 34.123690, "y": 3.213967,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.800460, "height": 3.448990,
                                        "relativeTransform": [[1, 0, 34.067089], [0, 1, 3.157456]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path54_I190_21182_632_454_svg_3_8004608154296875x3_4489905834198
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path56",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 39.273241, "y": 4.710214,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.983192, "height": 4.010124,
                                        "relativeTransform": [[1, 0, 39.216640], [0, 1, 4.653703]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path56_I190_21182_632_455_svg_3_9831924438476562x4_010124683380127
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path58",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 43.155092, "y": 7.169718,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.792884, "height": 3.640649,
                                        "relativeTransform": [[1, 0, 43.098491], [0, 1, 7.113206]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path58_I190_21182_632_456_svg_3_7928848266601562x3_6406493186950684
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path60",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 46.498724, "y": 8.851377,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.819717, "height": 3.849823,
                                        "relativeTransform": [[1, 0, 46.442123], [0, 1, 8.794866]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path60_I190_21182_632_457_svg_3_8197174072265625x3_8498239517211914
                                    },
                                    {
                                      "type": "VECTOR",
                                      "shouldFlatten": true,
                                      "name": "path62",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "x": 48.795626, "y": 12.138449,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.679691, "height": 3.750191,
                                        "relativeTransform": [[1, 0, 48.739025], [0, 1, 12.081937]],
                                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                      },
                                      "svgContent": SVG_Young_boys_assets_icon_path62_I190_21182_632_458_svg_3_6796913146972656x3_7501916885375977
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
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

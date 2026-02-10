import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


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
                    "x": 0.05660108104348183, "y": 0.056511249393224716,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 59.94358304515481, "height": 59.94348558411002,
                    "relativeTransform": [[1, 0, 0.05660108104348183], [0, 1, 0.056511249393224716]]
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "g12",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": 0.05660108104348183, "y": 0.056511249393224716,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 59.94358304515481, "height": 59.94348558411002,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "g2493",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "x": 0.05660108104348183, "y": 0.056511249393224716,
                            "strokes": [],
                            "strokeWeight": 0,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 59.94358304515481, "height": 59.94348558411002,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "g2466",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "x": 0.05660108104348183, "y": 0.056511249393224716,
                                "strokes": [],
                                "strokeWeight": 0,
                                "effects": []
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 59.94358304515481, "height": 59.94348558411002,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "g2440",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "x": 0.05660108104348183, "y": 0.056511249393224716,
                                    "strokes": [],
                                    "strokeWeight": 0,
                                    "effects": []
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 59.94358304515481, "height": 59.94348558411002,
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
                                        "x": 0.3115447200834751, "y": 0.31151043996214867,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 59.377296447753906, "height": 59.37686538696289,
                                        "relativeTransform": [[1, 0, 0.2549436390399933], [0, 1, 0.25499919056892395]],
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
                                        "x": 0.05660108104348183, "y": 0.056511249393224716,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 59.88698196411133, "height": 59.8869743347168,
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
                                        "x": 7.5214581824839115, "y": 7.521440353244543,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 44.957130432128906, "height": 44.957115173339844,
                                        "relativeTransform": [[1, 0, 7.46485710144043], [0, 1, 7.464929103851318]],
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
                                        "x": 5.133220706135035, "y": 17.327623691409826,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 45.081764221191406, "height": 35.955963134765625,
                                        "relativeTransform": [[1, 0, 5.076619625091553], [0, 1, 17.2711124420166]],
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
                                        "x": 5.557383570820093, "y": 17.751743640750647,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 44.2333869934082, "height": 35.10760498046875,
                                        "relativeTransform": [[1, 0, 5.500782489776611], [0, 1, 17.695232391357422]],
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
                                        "x": 25.150095496326685, "y": 26.440985050052404,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 21.929773330688477, "height": 23.01749610900879,
                                        "relativeTransform": [[1, 0, 25.093494415283203], [0, 1, 26.38447380065918]],
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
                                        "x": 5.726600680500269, "y": 17.92182954773307,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 31.18587875366211, "height": 18.213592529296875,
                                        "relativeTransform": [[1, 0, 5.669999599456787], [0, 1, 17.865318298339844]],
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
                                        "x": 26.844791922718287, "y": 9.312250461429358,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 6.310352325439453, "height": 6.000951766967773,
                                        "relativeTransform": [[1, 0, 26.788190841674805], [0, 1, 9.255739212036133]],
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
                                        "x": 24.418774161487818, "y": 54.495842304080725,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 1.5737342834472656, "height": 3.1100730895996094,
                                        "relativeTransform": [[1, 0, 24.362173080444336], [0, 1, 54.4393310546875]],
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
                                        "x": 29.943218741565943, "y": 54.81097063049674,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 2.568920135498047, "height": 3.129497528076172,
                                        "relativeTransform": [[1, 0, 29.88661766052246], [0, 1, 54.754459381103516]],
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
                                        "x": 26.829002890735865, "y": 54.78416093811393,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 2.5781517028808594, "height": 3.1255645751953125,
                                        "relativeTransform": [[1, 0, 26.772401809692383], [0, 1, 54.7276496887207]],
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
                                        "x": 33.1539445258677, "y": 54.38037904724479,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 2.700115203857422, "height": 3.1387176513671875,
                                        "relativeTransform": [[1, 0, 33.09734344482422], [0, 1, 54.32386779785156]],
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
                                        "x": 6.792788539081812, "y": 11.987184848636389,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 4.196856498718262, "height": 4.158597946166992,
                                        "relativeTransform": [[1, 0, 6.73618745803833], [0, 1, 11.930673599243164]],
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
                                        "x": 10.136462721973658, "y": 9.086637821048498,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.747330665588379, "height": 3.6956787109375,
                                        "relativeTransform": [[1, 0, 10.079861640930176], [0, 1, 9.030126571655273]],
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
                                        "x": 13.599510703235865, "y": 6.551253166049719,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.791337013244629, "height": 3.649456024169922,
                                        "relativeTransform": [[1, 0, 13.542909622192383], [0, 1, 6.494741916656494]],
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
                                        "x": 18.70383122935891, "y": 3.711958732455969,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.470701217651367, "height": 3.723159074783325,
                                        "relativeTransform": [[1, 0, 18.64723014831543], [0, 1, 3.655447483062744]],
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
                                        "x": 22.51340154185891, "y": 3.0639761351048946,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.849031448364258, "height": 3.43847393989563,
                                        "relativeTransform": [[1, 0, 22.45680046081543], [0, 1, 3.00746488571167]],
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
                                        "x": 26.64244321361184, "y": 2.5599196814000607,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.406707763671875, "height": 3.407134771347046,
                                        "relativeTransform": [[1, 0, 26.58584213256836], [0, 1, 2.503408432006836]],
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
                                        "x": 30.37150815501809, "y": 2.534785833209753,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.5779247283935547, "height": 3.435105800628662,
                                        "relativeTransform": [[1, 0, 30.31490707397461], [0, 1, 2.4782745838165283]],
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
                                        "x": 34.12369016185403, "y": 3.2139676474034786,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.8004608154296875, "height": 3.4489905834198,
                                        "relativeTransform": [[1, 0, 34.06708908081055], [0, 1, 3.157456398010254]],
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
                                        "x": 39.27324155345559, "y": 4.71021493896842,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.9831924438476562, "height": 4.010124683380127,
                                        "relativeTransform": [[1, 0, 39.21664047241211], [0, 1, 4.653703689575195]],
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
                                        "x": 43.155092749744654, "y": 7.169718112796545,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.7928848266601562, "height": 3.6406493186950684,
                                        "relativeTransform": [[1, 0, 43.09849166870117], [0, 1, 7.11320686340332]],
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
                                        "x": 46.49872449412942, "y": 8.851377811282873,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.8197174072265625, "height": 3.8498239517211914,
                                        "relativeTransform": [[1, 0, 46.44212341308594], [0, 1, 8.794866561889648]],
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
                                        "x": 48.79562619701028, "y": 12.138449039310217,
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                        "width": 3.6796913146972656, "height": 3.7501916885375977,
                                        "relativeTransform": [[1, 0, 48.7390251159668], [0, 1, 12.081937789916992]],
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

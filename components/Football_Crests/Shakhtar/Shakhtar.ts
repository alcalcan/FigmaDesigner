import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Shakhtar_assets_icon_path14_I190_21164_632_578_svg_36_37301254272461x54_093082427978516 from "./assets/Shakhtar_assets_icon_path14_I190_21164_632_578_svg_36_37301254272461x54_093082427978516.svg";
import SVG_Shakhtar_assets_icon_path16_I190_21164_632_579_svg_38_12103271484375x59_911075592041016 from "./assets/Shakhtar_assets_icon_path16_I190_21164_632_579_svg_38_12103271484375x59_911075592041016.svg";
import SVG_Shakhtar_assets_icon_path18_I190_21164_632_580_svg_29_376468658447266x14_109416961669922 from "./assets/Shakhtar_assets_icon_path18_I190_21164_632_580_svg_29_376468658447266x14_109416961669922.svg";
import SVG_Shakhtar_assets_icon_path20_I190_21164_632_581_svg_32_71984100341797x15_532649993896484 from "./assets/Shakhtar_assets_icon_path20_I190_21164_632_581_svg_32_71984100341797x15_532649993896484.svg";
import SVG_Shakhtar_assets_icon_path22_I190_21164_632_582_svg_13_47253704071045x21_417308807373047 from "./assets/Shakhtar_assets_icon_path22_I190_21164_632_582_svg_13_47253704071045x21_417308807373047.svg";
import SVG_Shakhtar_assets_icon_path24_I190_21164_632_583_svg_22_48118019104004x21_92625617980957 from "./assets/Shakhtar_assets_icon_path24_I190_21164_632_583_svg_22_48118019104004x21_92625617980957.svg";
import SVG_Shakhtar_assets_icon_path26_I190_21164_632_584_svg_6_165811538696289x2_2349853515625 from "./assets/Shakhtar_assets_icon_path26_I190_21164_632_584_svg_6_165811538696289x2_2349853515625.svg";
import SVG_Shakhtar_assets_icon_path28_I190_21164_632_585_svg_4_744569778442383x4_334636688232422 from "./assets/Shakhtar_assets_icon_path28_I190_21164_632_585_svg_4_744569778442383x4_334636688232422.svg";
import SVG_Shakhtar_assets_icon_path30_I190_21164_632_586_svg_4_279018402099609x6_00213623046875 from "./assets/Shakhtar_assets_icon_path30_I190_21164_632_586_svg_4_279018402099609x6_00213623046875.svg";
import SVG_Shakhtar_assets_icon_path32_I190_21164_632_587_svg_5_063684463500977x5_957523345947266 from "./assets/Shakhtar_assets_icon_path32_I190_21164_632_587_svg_5_063684463500977x5_957523345947266.svg";
import SVG_Shakhtar_assets_icon_path34_I190_21164_632_588_svg_4_225347518920898x5_539112091064453 from "./assets/Shakhtar_assets_icon_path34_I190_21164_632_588_svg_4_225347518920898x5_539112091064453.svg";
import SVG_Shakhtar_assets_icon_path36_I190_21164_632_589_svg_4_792167663574219x5_409069061279297 from "./assets/Shakhtar_assets_icon_path36_I190_21164_632_589_svg_4_792167663574219x5_409069061279297.svg";
import SVG_Shakhtar_assets_icon_path38_I190_21164_632_590_svg_5_120867729187012x5_896816253662109 from "./assets/Shakhtar_assets_icon_path38_I190_21164_632_590_svg_5_120867729187012x5_896816253662109.svg";
import SVG_Shakhtar_assets_icon_path40_I190_21164_632_591_svg_7_152842998504639x7_066459655761719 from "./assets/Shakhtar_assets_icon_path40_I190_21164_632_591_svg_7_152842998504639x7_066459655761719.svg";


export class Shakhtar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Shakhtar",
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
              "name": "FC_Shakhtar_Donetsk 1",
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
                "width": 38.20995330810547, "height": 60,
                "relativeTransform": [[1, 0, 11], [0, 1, 0]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "layer1",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 0.04450398311018944, "y": 0.04447684809565544,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 38.16553669795394, "height": 119.86662803217769,
                    "relativeTransform": [[1, 0, 0.04450398311018944], [0, 1, 0.04447684809565544]]
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "g10",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": 0.04450398311018944, "y": 59.95555244013667,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 38.16553669795394, "height": 119.86662803217769,
                        "relativeTransform": [[1, 0, 0], [0, -1, 59.911075592041016]]
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "g12",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "x": 0.04450398311018944, "y": 59.95555244013667,
                            "strokes": [],
                            "strokeWeight": 0,
                            "effects": []
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 38.16553669795394, "height": 119.86662803217769,
                            "relativeTransform": [[1, 0, 0], [0, -1, 0]]
                          },
                          "children": [
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path14",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 0.9184848628938198, "y": 57.04623804613948,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 36.37301254272461, "height": 54.093082427978516,
                                "relativeTransform": [[1, 0, 0.8739808797836304], [0, -1, -2.9093143939971924]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path14_I190_21164_632_578_svg_36_37301254272461x54_093082427978516
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path16",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 0.04450398311018944, "y": 59.95555244013667,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 38.12103271484375, "height": 59.911075592041016,
                                "relativeTransform": [[1, 0, 0], [0, -1, 0]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path16_I190_21164_632_579_svg_38_12103271484375x59_911075592041016
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path18",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 4.408913429826498, "y": 53.399505477398634,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 29.376468658447266, "height": 14.109416961669922,
                                "relativeTransform": [[1, 0, 4.364409446716309], [0, -1, -6.556046962738037]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path18_I190_21164_632_580_svg_29_376468658447266x14_109416961669922
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path20",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 2.7453544698655605, "y": 33.553733211010695,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 32.71984100341797, "height": 15.532649993896484,
                                "relativeTransform": [[1, 0, 2.700850486755371], [0, -1, -26.401819229125977]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path20_I190_21164_632_581_svg_32_71984100341797x15_532649993896484
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path22",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 12.369152840226889, "y": 28.270055156201124,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 13.47253704071045, "height": 21.417308807373047,
                                "relativeTransform": [[1, 0, 12.3246488571167], [0, -1, -31.685497283935547]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path22_I190_21164_632_582_svg_13_47253704071045x21_417308807373047
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path24",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 7.864707287400961, "y": 29.850209575146437,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 22.48118019104004, "height": 21.92625617980957,
                                "relativeTransform": [[1, 0, 7.8202033042907715], [0, -1, -30.105342864990234]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path24_I190_21164_632_583_svg_22_48118019104004x21_92625617980957
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path26",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 16.076240357011557, "y": 45.71228824183345,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 6.165811538696289, "height": 2.2349853515625,
                                "relativeTransform": [[1, 0, 16.031736373901367], [0, -1, -14.243264198303223]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path26_I190_21164_632_584_svg_6_165811538696289x2_2349853515625
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path28",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 16.620986755937338, "y": 51.184257846325636,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 4.744569778442383, "height": 4.334636688232422,
                                "relativeTransform": [[1, 0, 16.57648277282715], [0, -1, -8.771294593811035]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path28_I190_21164_632_585_svg_4_744569778442383x4_334636688232422
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path30",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 30.865550812333822, "y": 38.96456466242671,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 4.279018402099609, "height": 6.00213623046875,
                                "relativeTransform": [[1, 0, 30.821046829223633], [0, -1, -20.99098777770996]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path30_I190_21164_632_586_svg_4_279018402099609x6_00213623046875
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path32",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 25.224370773881674, "y": 39.99168334528804,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 5.063684463500977, "height": 5.957523345947266,
                                "relativeTransform": [[1, 0, 25.179866790771484], [0, -1, -19.963869094848633]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path32_I190_21164_632_587_svg_5_063684463500977x5_957523345947266
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path34",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 21.704324539750814, "y": 40.12171111628413,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 4.225347518920898, "height": 5.539112091064453,
                                "relativeTransform": [[1, 0, 21.659820556640625], [0, -1, -19.83384132385254]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path34_I190_21164_632_588_svg_4_225347518920898x5_539112091064453
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path36",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 16.51428585872054, "y": 40.27591262385249,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 4.792167663574219, "height": 5.409069061279297,
                                "relativeTransform": [[1, 0, 16.46978187561035], [0, -1, -19.67963981628418]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path36_I190_21164_632_589_svg_4_792167663574219x5_409069061279297
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path38",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 11.269287880510092, "y": 40.20735488459468,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 5.120867729187012, "height": 5.896816253662109,
                                "relativeTransform": [[1, 0, 11.224783897399902], [0, -1, -19.748197555541992]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path38_I190_21164_632_590_svg_5_120867729187012x5_896816253662109
                            },
                            {
                              "type": "VECTOR",
                              "shouldFlatten": true,
                              "name": "path40",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 0.06737552583217621, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "x": 3.602495726197958, "y": 39.67049727961421,
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                "width": 7.152842998504639, "height": 7.066459655761719,
                                "relativeTransform": [[1, 0, 3.5579917430877686], [0, -1, -20.28505516052246]],
                                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                              },
                              "svgContent": SVG_Shakhtar_assets_icon_path40_I190_21164_632_591_svg_7_152842998504639x7_066459655761719
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

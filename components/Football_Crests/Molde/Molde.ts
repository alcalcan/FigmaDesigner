import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Molde_assets_icon_path16_I190_21142_633_108_svg_60x31_83478355407715 from "./assets/Molde_assets_icon_path16_I190_21142_633_108_svg_60x31_83478355407715.svg";
import SVG_Molde_assets_icon_path18_I190_21142_633_109_svg_21_169288635253906x27_713083267211914 from "./assets/Molde_assets_icon_path18_I190_21142_633_109_svg_21_169288635253906x27_713083267211914.svg";
import SVG_Molde_assets_icon_path20_I190_21142_633_110_svg_1_691556453704834x3_8857784271240234 from "./assets/Molde_assets_icon_path20_I190_21142_633_110_svg_1_691556453704834x3_8857784271240234.svg";
import SVG_Molde_assets_icon_path22_I190_21142_633_111_svg_2_798733711242676x3_9651708602905273 from "./assets/Molde_assets_icon_path22_I190_21142_633_111_svg_2_798733711242676x3_9651708602905273.svg";
import SVG_Molde_assets_icon_path24_I190_21142_633_112_svg_1_5606021881103516x4_401518821716309 from "./assets/Molde_assets_icon_path24_I190_21142_633_112_svg_1_5606021881103516x4_401518821716309.svg";
import SVG_Molde_assets_icon_path26_I190_21142_633_113_svg_2_798731803894043x3_9651708602905273 from "./assets/Molde_assets_icon_path26_I190_21142_633_113_svg_2_798731803894043x3_9651708602905273.svg";
import SVG_Molde_assets_icon_path28_I190_21142_633_114_svg_1_6916084289550781x3_8857717514038086 from "./assets/Molde_assets_icon_path28_I190_21142_633_114_svg_1_6916084289550781x3_8857717514038086.svg";
import SVG_Molde_assets_icon_path30_I190_21142_633_115_svg_2_7987289428710938x3_96517276763916 from "./assets/Molde_assets_icon_path30_I190_21142_633_115_svg_2_7987289428710938x3_96517276763916.svg";
import SVG_Molde_assets_icon_path32_I190_21142_633_116_svg_1_6916046142578125x3_8857717514038086 from "./assets/Molde_assets_icon_path32_I190_21142_633_116_svg_1_6916046142578125x3_8857717514038086.svg";
import SVG_Molde_assets_icon_path34_I190_21142_633_117_svg_1_6916084289550781x3_8857717514038086 from "./assets/Molde_assets_icon_path34_I190_21142_633_117_svg_1_6916084289550781x3_8857717514038086.svg";
import SVG_Molde_assets_icon_path36_I190_21142_633_118_svg_9_947336196899414x14_686793327331543 from "./assets/Molde_assets_icon_path36_I190_21142_633_118_svg_9_947336196899414x14_686793327331543.svg";
import SVG_Molde_assets_icon_path38_I190_21142_633_119_svg_7_2260284423828125x14_28543758392334 from "./assets/Molde_assets_icon_path38_I190_21142_633_119_svg_7_2260284423828125x14_28543758392334.svg";
import SVG_Molde_assets_icon_path40_I190_21142_633_120_svg_25_048095703125x14_572297096252441 from "./assets/Molde_assets_icon_path40_I190_21142_633_120_svg_25_048095703125x14_572297096252441.svg";
import SVG_Molde_assets_icon_path42_I190_21142_633_121_svg_21_169288635253906x27_34433937072754 from "./assets/Molde_assets_icon_path42_I190_21142_633_121_svg_21_169288635253906x27_34433937072754.svg";


export class Molde extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Molde",
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
              "name": "Molde_Fotball_Logo 1",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 0, "y": 14,
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
                "width": 60, "height": 31.83478355407715,
                "relativeTransform": [[1, 0, 0], [0, 1, 14]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "g12",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 0, "y": 31.83478355407715,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 60, "height": 31.83478355407715,
                    "relativeTransform": [[1, 0, 0], [0, -1, 31.83478355407715]]
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "g14",
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
                        "width": 60, "height": 31.83478355407715,
                        "relativeTransform": [[1, 0, 0], [0, 1, -31.83478355407715]]
                      },
                      "children": [
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path16",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 0, "y": 0,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 60, "height": 31.83478355407715,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path16_I190_21142_633_108_svg_60x31_83478355407715
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path18",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 1.4050050973892212, "y": 1.693010687828064,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 21.169288635253906, "height": 27.713083267211914,
                            "relativeTransform": [[1, 0, 1.4050050973892212], [0, 1, 1.693010687828064]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path18_I190_21142_633_109_svg_21_169288635253906x27_713083267211914
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path20",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 6.282626628875732, "y": 13.740741729736328,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.691556453704834, "height": 3.8857784271240234,
                            "relativeTransform": [[1, 0, 6.282626628875732], [0, 1, 13.740741729736328]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path20_I190_21142_633_110_svg_1_691556453704834x3_8857784271240234
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path22",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 8.38144302368164, "y": 13.740593910217285,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.798733711242676, "height": 3.9651708602905273,
                            "relativeTransform": [[1, 0, 8.38144302368164], [0, 1, 13.740593910217285]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path22_I190_21142_633_111_svg_2_798733711242676x3_9651708602905273
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path24",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 11.17771053314209, "y": 13.716586112976074,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.5606021881103516, "height": 4.401518821716309,
                            "relativeTransform": [[1, 0, 11.17771053314209], [0, 1, 13.716586112976074]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path24_I190_21142_633_112_svg_1_5606021881103516x4_401518821716309
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path26",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 12.909278869628906, "y": 13.740593910217285,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.798731803894043, "height": 3.9651708602905273,
                            "relativeTransform": [[1, 0, 12.909278869628906], [0, 1, 13.740593910217285]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path26_I190_21142_633_113_svg_2_798731803894043x3_9651708602905273
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path28",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 44.19778823852539, "y": 13.934952735900879,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.6916084289550781, "height": 3.8857717514038086,
                            "relativeTransform": [[1, 0, 44.19778823852539], [0, 1, 13.934952735900879]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path28_I190_21142_633_114_svg_1_6916084289550781x3_8857717514038086
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path30",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 46.296607971191406, "y": 13.934760093688965,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.7987289428710938, "height": 3.96517276763916,
                            "relativeTransform": [[1, 0, 46.296607971191406], [0, 1, 13.934760093688965]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path30_I190_21142_633_115_svg_2_7987289428710938x3_96517276763916
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path32",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 49.38512420654297, "y": 13.934952735900879,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.6916046142578125, "height": 3.8857717514038086,
                            "relativeTransform": [[1, 0, 49.38512420654297], [0, 1, 13.934952735900879]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path32_I190_21142_633_116_svg_1_6916046142578125x3_8857717514038086
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path34",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 51.41252517700195, "y": 13.934952735900879,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.6916084289550781, "height": 3.8857717514038086,
                            "relativeTransform": [[1, 0, 51.41252517700195], [0, 1, 13.934952735900879]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path34_I190_21142_633_117_svg_1_6916084289550781x3_8857717514038086
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path36",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 30.064783096313477, "y": 15.79369831085205,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 9.947336196899414, "height": 14.686793327331543,
                            "relativeTransform": [[1, 0, 30.064783096313477], [0, 1, 15.79369831085205]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path36_I190_21142_633_118_svg_9_947336196899414x14_686793327331543
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path38",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 21.532241821289062, "y": 15.796542167663574,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.2260284423828125, "height": 14.28543758392334,
                            "relativeTransform": [[1, 0, 21.532241821289062], [0, 1, 15.796542167663574]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path38_I190_21142_633_119_svg_7_2260284423828125x14_28543758392334
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path40",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 17.475948333740234, "y": 1.221423864364624,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 25.048095703125, "height": 14.572297096252441,
                            "relativeTransform": [[1, 0, 17.475948333740234], [0, 1, 1.221423864364624]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path40_I190_21142_633_120_svg_25_048095703125x14_572297096252441
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "path42",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 37.4256591796875, "y": 1.693010687828064,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 21.169288635253906, "height": 27.34433937072754,
                            "relativeTransform": [[1, 0, 37.4256591796875], [0, 1, 1.693010687828064]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Molde_assets_icon_path42_I190_21142_633_121_svg_21_169288635253906x27_34433937072754
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

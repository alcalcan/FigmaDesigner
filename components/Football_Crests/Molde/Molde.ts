import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


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
                "width": 60, "height": 31.834783,
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
                    "x": 0, "y": 31.834783,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 60, "height": 31.834783,
                    "relativeTransform": [[1, 0, 0], [0, -1, 31.834783]]
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
                        "width": 60, "height": 31.834783,
                        "relativeTransform": [[1, 0, 0], [0, 1, -31.834783]]
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
                            "width": 60, "height": 31.834783,
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
                            "x": 1.405005, "y": 1.693010,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 21.169288, "height": 27.713083,
                            "relativeTransform": [[1, 0, 1.405005], [0, 1, 1.693010]],
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
                            "x": 6.282626, "y": 13.740741,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.691556, "height": 3.885778,
                            "relativeTransform": [[1, 0, 6.282626], [0, 1, 13.740741]],
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
                            "x": 8.381443, "y": 13.740593,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.798733, "height": 3.965170,
                            "relativeTransform": [[1, 0, 8.381443], [0, 1, 13.740593]],
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
                            "x": 11.177710, "y": 13.716586,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.560602, "height": 4.401518,
                            "relativeTransform": [[1, 0, 11.177710], [0, 1, 13.716586]],
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
                            "x": 12.909278, "y": 13.740593,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.798731, "height": 3.965170,
                            "relativeTransform": [[1, 0, 12.909278], [0, 1, 13.740593]],
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
                            "x": 44.197788, "y": 13.934952,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.691608, "height": 3.885771,
                            "relativeTransform": [[1, 0, 44.197788], [0, 1, 13.934952]],
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
                            "x": 46.296607, "y": 13.934760,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 2.798728, "height": 3.965172,
                            "relativeTransform": [[1, 0, 46.296607], [0, 1, 13.934760]],
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
                            "x": 49.385124, "y": 13.934952,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.691604, "height": 3.885771,
                            "relativeTransform": [[1, 0, 49.385124], [0, 1, 13.934952]],
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
                            "x": 51.412525, "y": 13.934952,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 1.691608, "height": 3.885771,
                            "relativeTransform": [[1, 0, 51.412525], [0, 1, 13.934952]],
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
                            "x": 30.064783, "y": 15.793698,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 9.947336, "height": 14.686793,
                            "relativeTransform": [[1, 0, 30.064783], [0, 1, 15.793698]],
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
                            "x": 21.532241, "y": 15.796542,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.226028, "height": 14.285437,
                            "relativeTransform": [[1, 0, 21.532241], [0, 1, 15.796542]],
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
                            "x": 17.475948, "y": 1.221423,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 25.048095, "height": 14.572297,
                            "relativeTransform": [[1, 0, 17.475948], [0, 1, 1.221423]],
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
                            "x": 37.425659, "y": 1.693010,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 21.169288, "height": 27.344339,
                            "relativeTransform": [[1, 0, 37.425659], [0, 1, 1.693010]],
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

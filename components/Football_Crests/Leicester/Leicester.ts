import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import SVG_Leicester_assets_icon_ellipse_big_I190_21123_626_110_svg_59_99986267089844x59_99987030029297 from "./assets/Leicester_assets_icon_ellipse_big_I190_21123_626_110_svg_59_99986267089844x59_99987030029297.svg";
import SVG_Leicester_assets_icon_ellipse_small_I190_21123_626_111_svg_56_17654037475586x56_17654037475586 from "./assets/Leicester_assets_icon_ellipse_small_I190_21123_626_111_svg_56_17654037475586x56_17654037475586.svg";
import SVG_Leicester_assets_icon_kinda_ellipse_I190_21123_626_112_svg_37_18292999267578x37_06267547607422 from "./assets/Leicester_assets_icon_kinda_ellipse_I190_21123_626_112_svg_37_18292999267578x37_06267547607422.svg";
import SVG_Leicester_assets_icon_leicester_I190_21123_626_113_svg_39_056785583496094x23_817312240600586 from "./assets/Leicester_assets_icon_leicester_I190_21123_626_113_svg_39_056785583496094x23_817312240600586.svg";
import SVG_Leicester_assets_icon_football_I190_21123_626_114_svg_36_92909622192383x23_774362564086914 from "./assets/Leicester_assets_icon_football_I190_21123_626_114_svg_36_92909622192383x23_774362564086914.svg";
import SVG_Leicester_assets_icon_city_I190_21123_626_115_svg_12_258878707885742x17_078115463256836 from "./assets/Leicester_assets_icon_city_I190_21123_626_115_svg_12_258878707885742x17_078115463256836.svg";
import SVG_Leicester_assets_icon_club_I190_21123_626_116_svg_14_531086921691895x19_195571899414062 from "./assets/Leicester_assets_icon_club_I190_21123_626_116_svg_14_531086921691895x19_195571899414062.svg";
import SVG_Leicester_assets_icon_leaf_top_I190_21123_626_117_svg_12_473387718200684x6_807541370391846 from "./assets/Leicester_assets_icon_leaf_top_I190_21123_626_117_svg_12_473387718200684x6_807541370391846.svg";
import SVG_Leicester_assets_icon_leaf_left_I190_21123_626_118_svg_6_652193069458008x11_595874786376953 from "./assets/Leicester_assets_icon_leaf_left_I190_21123_626_118_svg_6_652193069458008x11_595874786376953.svg";
import SVG_Leicester_assets_icon_leaf_bottom_left_I190_21123_626_119_svg_11_131102561950684x11_030933380126953 from "./assets/Leicester_assets_icon_leaf_bottom_left_I190_21123_626_119_svg_11_131102561950684x11_030933380126953.svg";
import SVG_Leicester_assets_icon_leaf_bottom_right_I190_21123_626_120_svg_11_029579162597656x10_797547340393066 from "./assets/Leicester_assets_icon_leaf_bottom_right_I190_21123_626_120_svg_11_029579162597656x10_797547340393066.svg";
import SVG_Leicester_assets_icon_leaf_right_I190_21123_626_121_svg_5_6681742668151855x11_240299224853516 from "./assets/Leicester_assets_icon_leaf_right_I190_21123_626_121_svg_5_6681742668151855x11_240299224853516.svg";
import SVG_Leicester_assets_icon_fox_outline_I190_21123_626_122_svg_24_43109893798828x27_757322311401367 from "./assets/Leicester_assets_icon_fox_outline_I190_21123_626_122_svg_24_43109893798828x27_757322311401367.svg";
import SVG_Leicester_assets_icon_fox_background_I190_21123_626_123_svg_23_321664810180664x22_709569931030273 from "./assets/Leicester_assets_icon_fox_background_I190_21123_626_123_svg_23_321664810180664x22_709569931030273.svg";


export class Leicester extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Leicester",
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
              "name": "Leicester_City_crest 1",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "x": 59.999992, "y": 0.000007,
                "strokes": [],
                "strokeWeight": 0,
                "effects": []
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 119.999855, "height": 59.999877,
                "relativeTransform": [[-1, 0, 59.999992], [0, 1, 0.000007]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "ellipse big",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1.548385, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 59.999992, "y": 0.000007,
                    "strokes": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0, "g": 0.325490, "b": 0.627451 },
                        "boundVariables": {}
                      }
                    ],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 59.999862, "height": 59.999870,
                    "relativeTransform": [[-1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_ellipse_big_I190_21123_626_110_svg_59_99986267089844x59_99987030029297
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "ellipse small",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 58.089419, "y": 1.915006,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 56.176540, "height": 56.176540,
                    "relativeTransform": [[-1, 0, -1.910572], [0, 1, 1.914998]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_ellipse_small_I190_21123_626_111_svg_56_17654037475586x56_17654037475586
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "kinda ellipse",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 48.739563, "y": 11.564716,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 37.182929, "height": 37.062675,
                    "relativeTransform": [[-1, 0, -11.260428], [0, 1, 11.564708]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_kinda_ellipse_I190_21123_626_112_svg_37_18292999267578x37_06267547607422
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "leicester",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 55.862665, "y": 3.832750,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 39.056785, "height": 23.817312,
                    "relativeTransform": [[-1, 0, -4.137326], [0, 1, 3.832742]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_leicester_I190_21123_626_113_svg_39_056785583496094x23_817312240600586
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "football",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 56.090020, "y": 32.398338,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 36.929096, "height": 23.774362,
                    "relativeTransform": [[-1, 0, -3.909971], [0, 1, 32.398330]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_football_I190_21123_626_114_svg_36_92909622192383x23_774362564086914
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "city",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.105487, "y": 10.611258,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 12.258878, "height": 17.078115,
                    "relativeTransform": [[-1, 0, -43.894504], [0, 1, 10.611250]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_city_I190_21123_626_115_svg_12_258878707885742x17_078115463256836
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "club",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.819946, "y": 32.663288,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 14.531086, "height": 19.195571,
                    "relativeTransform": [[-1, 0, -41.180046], [0, 1, 32.663280]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_club_I190_21123_626_116_svg_14_531086921691895x19_195571899414062
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "leaf top",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 36.135614, "y": 11.728911,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 12.473387, "height": 6.807541,
                    "relativeTransform": [[-1, 0, -23.864377], [0, 1, 11.728903]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_leaf_top_I190_21123_626_117_svg_12_473387718200684x6_807541370391846
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "leaf left",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 47.803276, "y": 20.729013,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.652193, "height": 11.595874,
                    "relativeTransform": [[-1, 0, -12.196716], [0, 1, 20.729005]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_leaf_left_I190_21123_626_118_svg_6_652193069458008x11_595874786376953
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "leaf bottom left",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 42.944377, "y": 34.131881,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 11.131102, "height": 11.030933,
                    "relativeTransform": [[-1, 0, -17.055614], [0, 1, 34.131874]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_leaf_bottom_left_I190_21123_626_119_svg_11_131102561950684x11_030933380126953
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "leaf bottom right",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 27.851966, "y": 34.127407,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 11.029579, "height": 10.797547,
                    "relativeTransform": [[-1, 0, -32.148025], [0, 1, 34.127399]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_leaf_bottom_right_I190_21123_626_120_svg_11_029579162597656x10_797547340393066
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "leaf right",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.260543, "y": 20.683191,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 5.668174, "height": 11.240299,
                    "relativeTransform": [[-1, 0, -41.739448], [0, 1, 20.683183]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_leaf_right_I190_21123_626_121_svg_5_6681742668151855x11_240299224853516
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "fox outline",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 42.079696, "y": 15.400968,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 24.431098, "height": 27.757322,
                    "relativeTransform": [[-1, 0, -17.920295], [0, 1, 15.400960]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_fox_outline_I190_21123_626_122_svg_24_43109893798828x27_757322311401367
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "fox background",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.073289, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 41.664123, "y": 16.626327,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 23.321664, "height": 22.709569,
                    "relativeTransform": [[-1, 0, -18.335868], [0, 1, 16.626319]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Leicester_assets_icon_fox_background_I190_21123_626_123_svg_23_321664810180664x22_709569931030273
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

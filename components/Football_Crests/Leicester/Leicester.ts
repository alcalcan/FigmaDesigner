import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


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
                "x": 59.99999237060547, "y": 0.00000762939453125,
                "strokes": [],
                "strokeWeight": 0,
                "effects": []
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 119.9998550415039, "height": 59.9998779296875,
                "relativeTransform": [[-1, 0, 59.99999237060547], [0, 1, 0.00000762939453125]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "ellipse big",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1.5483859777450562, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 59.99999237060547, "y": 0.00000762939453125,
                    "strokes": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0, "g": 0.32549020648002625, "b": 0.6274510025978088 },
                        "boundVariables": {}
                      }
                    ],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 59.99986267089844, "height": 59.99987030029297,
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 58.08941996097565, "y": 1.9150060415267944,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 56.17654037475586, "height": 56.17654037475586,
                    "relativeTransform": [[-1, 0, -1.9105724096298218], [0, 1, 1.9149984121322632]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 48.739563941955566, "y": 11.564716339111328,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 37.18292999267578, "height": 37.06267547607422,
                    "relativeTransform": [[-1, 0, -11.260428428649902], [0, 1, 11.564708709716797]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 55.86266565322876, "y": 3.8327505588531494,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 39.056785583496094, "height": 23.817312240600586,
                    "relativeTransform": [[-1, 0, -4.137326717376709], [0, 1, 3.832742929458618]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 56.090020418167114, "y": 32.398338317871094,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 36.92909622192383, "height": 23.774362564086914,
                    "relativeTransform": [[-1, 0, -3.9099719524383545], [0, 1, 32.39833068847656]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 16.105487823486328, "y": 10.611258506774902,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 12.258878707885742, "height": 17.078115463256836,
                    "relativeTransform": [[-1, 0, -43.89450454711914], [0, 1, 10.611250877380371]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.8199462890625, "y": 32.66328811645508,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 14.531086921691895, "height": 19.195571899414062,
                    "relativeTransform": [[-1, 0, -41.18004608154297], [0, 1, 32.66328048706055]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 36.1356143951416, "y": 11.728911399841309,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 12.473387718200684, "height": 6.807541370391846,
                    "relativeTransform": [[-1, 0, -23.864377975463867], [0, 1, 11.728903770446777]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 47.80327606201172, "y": 20.729013442993164,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.652193069458008, "height": 11.595874786376953,
                    "relativeTransform": [[-1, 0, -12.19671630859375], [0, 1, 20.729005813598633]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 42.94437789916992, "y": 34.13188171386719,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 11.131102561950684, "height": 11.030933380126953,
                    "relativeTransform": [[-1, 0, -17.055614471435547], [0, 1, 34.131874084472656]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 27.851966857910156, "y": 34.12740707397461,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 11.029579162597656, "height": 10.797547340393066,
                    "relativeTransform": [[-1, 0, -32.14802551269531], [0, 1, 34.12739944458008]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.260543823242188, "y": 20.683191299438477,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 5.6681742668151855, "height": 11.240299224853516,
                    "relativeTransform": [[-1, 0, -41.73944854736328], [0, 1, 20.683183670043945]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 42.07969665527344, "y": 15.400968551635742,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 24.43109893798828, "height": 27.757322311401367,
                    "relativeTransform": [[-1, 0, -17.92029571533203], [0, 1, 15.400960922241211]],
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
                    "strokeWeight": 0.07328943908214569, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 41.66412353515625, "y": 16.626327514648438,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 23.321664810180664, "height": 22.709569931030273,
                    "relativeTransform": [[-1, 0, -18.33586883544922], [0, 1, 16.626319885253906]],
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

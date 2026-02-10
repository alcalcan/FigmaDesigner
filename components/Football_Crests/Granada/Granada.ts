import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Granada_assets_icon_Vector_I190_21112_632_139_svg_25_86170196533203x58 from "./assets/Granada_assets_icon_Vector_I190_21112_632_139_svg_25_86170196533203x58.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_140_svg_3_003410816192627x2_1401548385620117 from "./assets/Granada_assets_icon_Vector_I190_21112_632_140_svg_3_003410816192627x2_1401548385620117.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_141_svg_2_994419574737549x2_131162643432617 from "./assets/Granada_assets_icon_Vector_I190_21112_632_141_svg_2_994419574737549x2_131162643432617.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_142_svg_1_8074407577514648x6_366511344909668 from "./assets/Granada_assets_icon_Vector_I190_21112_632_142_svg_1_8074407577514648x6_366511344909668.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_143_svg_6_4024810791015625x2_275038242340088 from "./assets/Granada_assets_icon_Vector_I190_21112_632_143_svg_6_4024810791015625x2_275038242340088.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_144_svg_6_402478218078613x2_194108724594116 from "./assets/Granada_assets_icon_Vector_I190_21112_632_144_svg_6_402478218078613x2_194108724594116.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_145_svg_3_0124025344848633x2_131162643432617 from "./assets/Granada_assets_icon_Vector_I190_21112_632_145_svg_3_0124025344848633x2_131162643432617.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_146_svg_3_003410816192627x2_1401562690734863 from "./assets/Granada_assets_icon_Vector_I190_21112_632_146_svg_3_003410816192627x2_1401562690734863.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_147_svg_1_816434621810913x6_366510391235352 from "./assets/Granada_assets_icon_Vector_I190_21112_632_147_svg_1_816434621810913x6_366510391235352.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_148_svg_22_948217391967773x48_53116989135742 from "./assets/Granada_assets_icon_Vector_I190_21112_632_148_svg_22_948217391967773x48_53116989135742.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_149_svg_5_251471519470215x6_465427398681641 from "./assets/Granada_assets_icon_Vector_I190_21112_632_149_svg_5_251471519470215x6_465427398681641.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_150_svg_16_869455337524414x33_945743560791016 from "./assets/Granada_assets_icon_Vector_I190_21112_632_150_svg_16_869455337524414x33_945743560791016.svg";
import SVG_Granada_assets_icon_Vector_I190_21112_632_151_svg_17_480928421020508x23_226978302001953 from "./assets/Granada_assets_icon_Vector_I190_21112_632_151_svg_17_480928421020508x23_226978302001953.svg";


export class Granada extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Granada",
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
              "name": "Group",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "x": 17, "y": 1,
                "strokes": [],
                "strokeWeight": 0,
                "effects": []
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 42.86170196533203, "height": 59,
                "relativeTransform": [[1, 0, 17], [0, 1, 1]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 17, "y": 1,
                    "strokes": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 },
                        "boundVariables": {}
                      }
                    ],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 25.86170196533203, "height": 58,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_139_svg_25_86170196533203x58
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.254626274108887, "y": 2.4657561779022217,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.003410816192627, "height": 2.1401548385620117,
                    "relativeTransform": [[1, 0, 13.254626274108887], [0, 1, 1.4657561779022217]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_140_svg_3_003410816192627x2_1401548385620117
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.60370635986328, "y": 2.4657561779022217,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 2.994419574737549, "height": 2.131162643432617,
                    "relativeTransform": [[1, 0, 9.603706359863281], [0, 1, 1.4657561779022217]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_141_svg_2_994419574737549x2_131162643432617
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 33.069196701049805, "y": 4.237215757369995,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.8074407577514648, "height": 6.366511344909668,
                    "relativeTransform": [[1, 0, 16.069196701049805], [0, 1, 3.237215757369995]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_142_svg_1_8074407577514648x6_366511344909668
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.720646858215332, "y": 7.690134048461914,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.4024810791015625, "height": 2.275038242340088,
                    "relativeTransform": [[1, 0, 9.720646858215332], [0, 1, 6.690134048461914]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_143_svg_6_4024810791015625x2_275038242340088
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.729647636413574, "y": 4.848682403564453,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 6.402478218078613, "height": 2.194108724594116,
                    "relativeTransform": [[1, 0, 9.729647636413574], [0, 1, 3.848682403564453]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_144_svg_6_402478218078613x2_194108724594116
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 26.59470558166504, "y": 10.226061820983887,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.0124025344848633, "height": 2.131162643432617,
                    "relativeTransform": [[1, 0, 9.594705581665039], [0, 1, 9.226061820983887]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_145_svg_3_0124025344848633x2_131162643432617
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 30.254626274108887, "y": 10.217001914978027,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 3.003410816192627, "height": 2.1401562690734863,
                    "relativeTransform": [[1, 0, 13.254626274108887], [0, 1, 9.217001914978027]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_146_svg_3_003410816192627x2_1401562690734863
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 24.96706771850586, "y": 4.228155612945557,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 1.816434621810913, "height": 6.366510391235352,
                    "relativeTransform": [[1, 0, 7.967067718505859], [0, 1, 3.2281556129455566]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_147_svg_1_816434621810913x6_366510391235352
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.456696033477783, "y": 8.976128101348877,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 22.948217391967773, "height": 48.53116989135742,
                    "relativeTransform": [[1, 0, 1.4566960334777832], [0, 1, 7.976128101348877]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_148_svg_22_948217391967773x48_53116989135742
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 27.305113792419434, "y": 49.495174407958984,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 5.251471519470215, "height": 6.465427398681641,
                    "relativeTransform": [[1, 0, 10.305113792419434], [0, 1, 48.495174407958984]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_149_svg_5_251471519470215x6_465427398681641
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 22.934905529022217, "y": 13.768980979919434,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 16.869455337524414, "height": 33.945743560791016,
                    "relativeTransform": [[1, 0, 5.934905529022217], [0, 1, 12.768980979919434]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_150_svg_16_869455337524414x33_945743560791016
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.09179431945085526, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 18.456696033477783, "y": 13.804981231689453,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 17.480928421020508, "height": 23.226978302001953,
                    "relativeTransform": [[1, 0, 1.4566960334777832], [0, 1, 12.804981231689453]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Granada_assets_icon_Vector_I190_21112_632_151_svg_17_480928421020508x23_226978302001953
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

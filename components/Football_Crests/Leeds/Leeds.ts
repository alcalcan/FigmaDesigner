import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import SVG_Leeds_Synth_Vector_0 from "./assets/Leeds_Synth_Vector_0.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_53_svg_48_77103805541992x60_03628921508789 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_53_svg_48_77103805541992x60_03628921508789.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_54_svg_45_28301239013672x56_30736541748047 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_54_svg_45_28301239013672x56_30736541748047.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_55_svg_34_237632751464844x13_431924819946289 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_55_svg_34_237632751464844x13_431924819946289.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_56_svg_11_749105453491211x11_259560585021973 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_56_svg_11_749105453491211x11_259560585021973.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_57_svg_10_92300033569336x10_291131973266602 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_57_svg_10_92300033569336x10_291131973266602.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_58_svg_9_056610107421875x8_903619766235352 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_58_svg_9_056610107421875x8_903619766235352.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_59_svg_7_006628036499023x6_394696235656738 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_59_svg_7_006628036499023x6_394696235656738.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_60_svg_1_1440849304199219x0_3566598892211914 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_60_svg_1_1440849304199219x0_3566598892211914.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_61_svg_3_090259552001953x1_591024398803711 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_61_svg_3_090259552001953x1_591024398803711.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_62_svg_3_885772705078125x1_8663959503173828 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_62_svg_3_885772705078125x1_8663959503173828.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_63_svg_3_9163684844970703x1_658151626586914 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_63_svg_3_9163684844970703x1_658151626586914.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_64_svg_9_345575332641602x1_9887828826904297 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_64_svg_9_345575332641602x1_9887828826904297.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_65_svg_1_6828155517578125x1_2238597869873047 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_65_svg_1_6828155517578125x1_2238597869873047.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_66_svg_3_132905960083008x0_8462104797363281 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_66_svg_3_132905960083008x0_8462104797363281.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_67_svg_18_296789169311523x14_166238784790039 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_67_svg_18_296789169311523x14_166238784790039.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_68_svg_7_281999588012695x28_220762252807617 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_68_svg_7_281999588012695x28_220762252807617.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_69_svg_20_254972457885742x9_607339859008789 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_69_svg_20_254972457885742x9_607339859008789.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_70_svg_1_2544631958007812x1_4074459075927734 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_70_svg_1_2544631958007812x1_4074459075927734.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_71_svg_29_005611419677734x12_422237396240234 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_71_svg_29_005611419677734x12_422237396240234.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_72_svg_1_2468128204345703x0_8002452850341797 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_72_svg_1_2468128204345703x0_8002452850341797.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_73_svg_22_94747543334961x18_177799224853516 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_73_svg_22_94747543334961x18_177799224853516.svg";
import SVG_Leeds_assets_icon_Vector_I190_21122_635_74_svg_0_9484958648681641x0_9178962707519531 from "./assets/Leeds_assets_icon_Vector_I190_21122_635_74_svg_0_9484958648681641x0_9178962707519531.svg";


export class Leeds extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Leeds",
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
              "name": "Frame",
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
                "width": 48.709838, "height": 60,
                "relativeTransform": [[1, 0, 6], [0, 1, 0]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Group",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": -0.091756, "y": 0,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 48.771038, "height": 60.066902,
                    "relativeTransform": [[1, 0, -0.091756], [0, 1, 0]]
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 24.086832, "y": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 1, "g": 1, "b": 1 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "vectorPaths": [
                          {
                            "windingRule": "NONZERO",
                            "data": "M 0.053973 0 C 0.176359 0 0.390535 0 0.512921 0 C 0.635307 0 0.512920 0 0.268148 0 C 0.023376 0 -0.068412 0 0.053973 0 Z"
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 0.560934, "height": 0,
                        "relativeTransform": [[1, 0, 24.178588], [0, 1, 0]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_Synth_Vector_0
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": -0.091756, "y": 0.030613,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 48.771038, "height": 60.036289,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0.030613]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_53_svg_48_77103805541992x60_03628921508789
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 1.713428, "y": 1.713428,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 45.283012, "height": 56.307365,
                        "relativeTransform": [[1, 0, 1.805184], [0, 1, 1.713428]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_54_svg_45_28301239013672x56_30736541748047
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 7.190207, "y": 7.404377,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 34.237632, "height": 13.431924,
                        "relativeTransform": [[1, 0, 7.281963], [0, 1, 7.404377]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_55_svg_34_237632751464844x13_431924819946289
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 18.510966, "y": 8.383460,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 11.749105, "height": 11.259560,
                        "relativeTransform": [[1, 0, 18.602722], [0, 1, 8.383460]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_56_svg_11_749105453491211x11_259560585021973
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 18.939383, "y": 8.807085,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 10.923000, "height": 10.291131,
                        "relativeTransform": [[1, 0, 19.031139], [0, 1, 8.807085]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_57_svg_10_92300033569336x10_291131973266602
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 19.765444, "y": 9.852108,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 9.056610, "height": 8.903619,
                        "relativeTransform": [[1, 0, 19.857200], [0, 1, 9.852108]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_58_svg_9_056610107421875x8_903619766235352
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 20.836327, "y": 10.127501,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 7.006628, "height": 6.394696,
                        "relativeTransform": [[1, 0, 20.928083], [0, 1, 10.127501]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_59_svg_7_006628036499023x6_394696235656738
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 23.822815, "y": 12.544620,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.144084, "height": 0.356659,
                        "relativeTransform": [[1, 0, 23.914571], [0, 1, 12.544620]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_60_svg_1_1440849304199219x0_3566598892211914
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 22.886339, "y": 12.636417,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.090259, "height": 1.591024,
                        "relativeTransform": [[1, 0, 22.978096], [0, 1, 12.636417]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_61_svg_3_090259552001953x1_591024398803711
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 22.396771, "y": 13.248350,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.885772, "height": 1.866395,
                        "relativeTransform": [[1, 0, 22.488527], [0, 1, 13.248350]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_62_svg_3_885772705078125x1_8663959503173828
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 22.396771, "y": 14.007310,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.916368, "height": 1.658151,
                        "relativeTransform": [[1, 0, 22.488527], [0, 1, 14.007310]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_63_svg_3_9163684844970703x1_658151626586914
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 19.660090, "y": 14.869979,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 9.345575, "height": 1.988782,
                        "relativeTransform": [[1, 0, 19.751846], [0, 1, 14.869979]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_64_svg_9_345575332641602x1_9887828826904297
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 23.498272, "y": 15.145336,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.682815, "height": 1.223859,
                        "relativeTransform": [[1, 0, 23.590028], [0, 1, 15.145336]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_65_svg_1_6828155517578125x1_2238597869873047
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 22.782471, "y": 15.451299,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.132905, "height": 0.846210,
                        "relativeTransform": [[1, 0, 22.874227], [0, 1, 15.451299]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_66_svg_3_132905960083008x0_8462104797363281
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 7.037224, "y": 18.786317,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 18.296789, "height": 14.166238,
                        "relativeTransform": [[1, 0, 7.128980], [0, 1, 18.786317]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_67_svg_18_296789169311523x14_166238784790039
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 20.713955, "y": 23.345243,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 7.281999, "height": 28.220762,
                        "relativeTransform": [[1, 0, 20.805711], [0, 1, 23.345243]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_68_svg_7_281999588012695x28_220762252807617
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 21.417647, "y": 23.345243,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 20.254972, "height": 9.607339,
                        "relativeTransform": [[1, 0, 21.509403], [0, 1, 23.345243]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_69_svg_20_254972457885742x9_607339859008789
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 25.303450, "y": 24.630289,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.254463, "height": 1.407445,
                        "relativeTransform": [[1, 0, 25.395206], [0, 1, 24.630289]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_70_svg_1_2544631958007812x1_4074459075927734
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 9.852148, "y": 26.251922,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 29.005611, "height": 12.422237,
                        "relativeTransform": [[1, 0, 9.943904], [0, 1, 26.251922]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_71_svg_29_005611419677734x12_422237396240234
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 22.029581, "y": 28.847881,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.246812, "height": 0.800245,
                        "relativeTransform": [[1, 0, 22.121337], [0, 1, 28.847881]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_72_svg_1_2468128204345703x0_8002452850341797
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 12.850584, "y": 31.327529,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 22.947475, "height": 18.177799,
                        "relativeTransform": [[1, 0, 12.942340], [0, 1, 31.327529]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_73_svg_22_94747543334961x18_177799224853516
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 12.667074, "y": 50.943397,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 0.948495, "height": 0.917896,
                        "relativeTransform": [[1, 0, 12.758830], [0, 1, 50.943397]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Leeds_assets_icon_Vector_I190_21122_635_74_svg_0_9484958648681641x0_9178962707519531
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

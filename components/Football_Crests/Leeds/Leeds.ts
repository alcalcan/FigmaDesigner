import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


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
                "width": 48.7098388671875, "height": 60,
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
                    "x": -0.09175602346658707, "y": 0,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 48.77103805541992, "height": 60.06690279953182,
                    "relativeTransform": [[1, 0, -0.09175602346658707], [0, 1, 0]]
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
                        "x": 24.086832843720913, "y": 0,
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
                            "data": "M 0.053973885370559437 0 C 0.17635994475473263 0 0.39053553271971003 0 0.5129215921038832 0 C 0.6353076514880565 0 0.5129206802566973 0 0.268148561488351 0 C 0.02337644272000458 0 -0.06841217401361377 0 0.053973885370559437 0 Z"
                          }
                        ]
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 0.5609340667724609, "height": 0,
                        "relativeTransform": [[1, 0, 24.1785888671875], [0, 1, 0]],
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
                        "x": -0.09175602346658707, "y": 0.03061358444392681,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 48.77103805541992, "height": 60.03628921508789,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0.03061358444392681]],
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
                        "x": 1.7134284600615501, "y": 1.713428258895874,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 45.28301239013672, "height": 56.30736541748047,
                        "relativeTransform": [[1, 0, 1.8051844835281372], [0, 1, 1.713428258895874]],
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
                        "x": 7.190207324922085, "y": 7.404377460479736,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 34.237632751464844, "height": 13.431924819946289,
                        "relativeTransform": [[1, 0, 7.281963348388672], [0, 1, 7.404377460479736]],
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
                        "x": 18.510966144502163, "y": 8.38346004486084,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 11.749105453491211, "height": 11.259560585021973,
                        "relativeTransform": [[1, 0, 18.60272216796875], [0, 1, 8.38346004486084]],
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
                        "x": 18.93938335031271, "y": 8.807085037231445,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 10.92300033569336, "height": 10.291131973266602,
                        "relativeTransform": [[1, 0, 19.031139373779297], [0, 1, 8.807085037231445]],
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
                        "x": 19.765444599092007, "y": 9.852108001708984,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 9.056610107421875, "height": 8.903619766235352,
                        "relativeTransform": [[1, 0, 19.857200622558594], [0, 1, 9.852108001708984]],
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
                        "x": 20.836327396333218, "y": 10.127501487731934,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 7.006628036499023, "height": 6.394696235656738,
                        "relativeTransform": [[1, 0, 20.928083419799805], [0, 1, 10.127501487731934]],
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
                        "x": 23.822815738618374, "y": 12.544620513916016,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.1440849304199219, "height": 0.3566598892211914,
                        "relativeTransform": [[1, 0, 23.91457176208496], [0, 1, 12.544620513916016]],
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
                        "x": 22.886339984834194, "y": 12.636417388916016,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.090259552001953, "height": 1.591024398803711,
                        "relativeTransform": [[1, 0, 22.97809600830078], [0, 1, 12.636417388916016]],
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
                        "x": 22.396771274507046, "y": 13.248350143432617,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.885772705078125, "height": 1.8663959503173828,
                        "relativeTransform": [[1, 0, 22.488527297973633], [0, 1, 13.248350143432617]],
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
                        "x": 22.396771274507046, "y": 14.00731086730957,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.9163684844970703, "height": 1.658151626586914,
                        "relativeTransform": [[1, 0, 22.488527297973633], [0, 1, 14.00731086730957]],
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
                        "x": 19.660090290009975, "y": 14.869979858398438,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 9.345575332641602, "height": 1.9887828826904297,
                        "relativeTransform": [[1, 0, 19.751846313476562], [0, 1, 14.869979858398438]],
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
                        "x": 23.498272739350796, "y": 15.145336151123047,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.6828155517578125, "height": 1.2238597869873047,
                        "relativeTransform": [[1, 0, 23.590028762817383], [0, 1, 15.145336151123047]],
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
                        "x": 22.782471500337124, "y": 15.451299667358398,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.132905960083008, "height": 0.8462104797363281,
                        "relativeTransform": [[1, 0, 22.87422752380371], [0, 1, 15.451299667358398]],
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
                        "x": 7.037224136292934, "y": 18.786317825317383,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 18.296789169311523, "height": 14.166238784790039,
                        "relativeTransform": [[1, 0, 7.1289801597595215], [0, 1, 18.786317825317383]],
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
                        "x": 20.713955722749233, "y": 23.345243453979492,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 7.281999588012695, "height": 28.220762252807617,
                        "relativeTransform": [[1, 0, 20.80571174621582], [0, 1, 23.345243453979492]],
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
                        "x": 21.41764720529318, "y": 23.345243453979492,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 20.254972457885742, "height": 9.607339859008789,
                        "relativeTransform": [[1, 0, 21.509403228759766], [0, 1, 23.345243453979492]],
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
                        "x": 25.30345042794943, "y": 24.63028907775879,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.2544631958007812, "height": 1.4074459075927734,
                        "relativeTransform": [[1, 0, 25.395206451416016], [0, 1, 24.63028907775879]],
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
                        "x": 9.852148853242397, "y": 26.251922607421875,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 29.005611419677734, "height": 12.422237396240234,
                        "relativeTransform": [[1, 0, 9.943904876708984], [0, 1, 26.251922607421875]],
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
                        "x": 22.029581867158413, "y": 28.847881317138672,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.2468128204345703, "height": 0.8002452850341797,
                        "relativeTransform": [[1, 0, 22.121337890625], [0, 1, 28.847881317138672]],
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
                        "x": 12.850584827363491, "y": 31.327529907226562,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 22.94747543334961, "height": 18.177799224853516,
                        "relativeTransform": [[1, 0, 12.942340850830078], [0, 1, 31.327529907226562]],
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
                        "x": 12.667074047029018, "y": 50.943397521972656,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 0.9484958648681641, "height": 0.9178962707519531,
                        "relativeTransform": [[1, 0, 12.758830070495605], [0, 1, 50.943397521972656]],
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

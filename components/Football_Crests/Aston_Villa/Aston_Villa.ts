import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Aston_Villa_assets_icon_claret_shield_I190_21076_635_103_svg_42_21882247924805x59_92955017089844 from "./assets/Aston_Villa_assets_icon_claret_shield_I190_21076_635_103_svg_42_21882247924805x59_92955017089844.svg";
import SVG_Aston_Villa_assets_icon_blue_shield_I190_21076_635_104_svg_39_22737121582031x56_410728454589844 from "./assets/Aston_Villa_assets_icon_blue_shield_I190_21076_635_104_svg_39_22737121582031x56_410728454589844.svg";
import SVG_Aston_Villa_assets_icon_star_I190_21076_635_105_svg_4_249975681304932x4_110105514526367 from "./assets/Aston_Villa_assets_icon_star_I190_21076_635_105_svg_4_249975681304932x4_110105514526367.svg";
import SVG_Aston_Villa_assets_icon_lion_I190_21076_635_106_svg_34_40422058105469x40_46199035644531 from "./assets/Aston_Villa_assets_icon_lion_I190_21076_635_106_svg_34_40422058105469x40_46199035644531.svg";
import SVG_Aston_Villa_assets_icon_AVFC_I190_21076_635_107_svg_35_05956268310547x9_276677131652832 from "./assets/Aston_Villa_assets_icon_AVFC_I190_21076_635_107_svg_35_05956268310547x9_276677131652832.svg";


export class Aston_Villa extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Aston Villa",
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
              "name": "Aston_Villa_FC_crest_(2016) 1",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 9, "y": 0,
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
                "width": 42.35293960571289, "height": 60,
                "relativeTransform": [[1, 0, 9], [0, 1, 0]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "claret shield",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 0.06706743687391281, "y": 0.03529970720410347,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 42.21882247924805, "height": 59.92955017089844,
                    "relativeTransform": [[1, 0, 0.06706743687391281], [0, 1, 0.03529970720410347]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Aston_Villa_assets_icon_claret_shield_I190_21076_635_103_svg_42_21882247924805x59_92955017089844
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "blue shield",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 1.5627495050430298, "y": 1.5631829500198364,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 39.22737121582031, "height": 56.410728454589844,
                    "relativeTransform": [[1, 0, 1.5627495050430298], [0, 1, 1.5631829500198364]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Aston_Villa_assets_icon_blue_shield_I190_21076_635_104_svg_39_22737121582031x56_410728454589844
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "star",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 5.556136608123779, "y": 14.86866569519043,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.249975681304932, "height": 4.110105514526367,
                    "relativeTransform": [[1, 0, 5.556136608123779], [0, 1, 14.86866569519043]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Aston_Villa_assets_icon_star_I190_21076_635_105_svg_4_249975681304932x4_110105514526367
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "lion",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.202200889587402, "y": 14.111787796020508,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 34.40422058105469, "height": 40.46199035644531,
                    "relativeTransform": [[1, 0, 4.202200889587402], [0, 1, 14.111787796020508]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Aston_Villa_assets_icon_lion_I190_21076_635_106_svg_34_40422058105469x40_46199035644531
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "AVFC",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 3.661947727203369, "y": 3.4668285846710205,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 35.05956268310547, "height": 9.276677131652832,
                    "relativeTransform": [[1, 0, 3.661947727203369], [0, 1, 3.4668285846710205]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Aston_Villa_assets_icon_AVFC_I190_21076_635_107_svg_35_05956268310547x9_276677131652832
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

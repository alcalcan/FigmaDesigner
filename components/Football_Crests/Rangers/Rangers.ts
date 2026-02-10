import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Rangers_assets_icon_Vector_I190_21155_632_201_svg_60x60 from "./assets/Rangers_assets_icon_Vector_I190_21155_632_201_svg_60x60.svg";
import SVG_Rangers_assets_icon_Vector_I190_21155_632_203_svg_57_480262756347656x57_480262756347656 from "./assets/Rangers_assets_icon_Vector_I190_21155_632_203_svg_57_480262756347656x57_480262756347656.svg";
import SVG_Rangers_assets_icon_Vector_I190_21155_632_204_svg_29_790115356445312x12_141271591186523 from "./assets/Rangers_assets_icon_Vector_I190_21155_632_204_svg_29_790115356445312x12_141271591186523.svg";
import SVG_Rangers_assets_icon_Vector_I190_21155_632_205_svg_24_098764419555664x25_93314552307129 from "./assets/Rangers_assets_icon_Vector_I190_21155_632_205_svg_24_098764419555664x25_93314552307129.svg";
import SVG_Rangers_assets_icon_Vector_I190_21155_632_206_svg_28_77054214477539x7_842229843139648 from "./assets/Rangers_assets_icon_Vector_I190_21155_632_206_svg_28_77054214477539x7_842229843139648.svg";
import SVG_Rangers_assets_icon_Vector_I190_21155_632_207_svg_18_850088119506836x23_48900032043457 from "./assets/Rangers_assets_icon_Vector_I190_21155_632_207_svg_18_850088119506836x23_48900032043457.svg";
import SVG_Rangers_assets_icon_Vector_I190_21155_632_208_svg_4_264036178588867x2_0333518981933594 from "./assets/Rangers_assets_icon_Vector_I190_21155_632_208_svg_4_264036178588867x2_0333518981933594.svg";
import SVG_Rangers_assets_icon_Vector_I190_21155_632_209_svg_49_19743347167969x51_65920639038086 from "./assets/Rangers_assets_icon_Vector_I190_21155_632_209_svg_49_19743347167969x51_65920639038086.svg";


export class Rangers extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Rangers",
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
              "name": "Rangers_FC 1",
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
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.2656036913394928, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 0, "y": 0,
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
                  "svgContent": SVG_Rangers_assets_icon_Vector_I190_21155_632_201_svg_60x60
                },
                {
                  "type": "FRAME",
                  "name": "Group",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 1.2497925758361816, "y": 1.2749810218811035,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 58.73005533218384, "height": 58.75524377822876,
                    "relativeTransform": [[1, 0, 1.2497925758361816], [0, 1, 1.2749810218811035]]
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.2656036913394928, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 1.2497925758361816, "y": 1.2749810218811035,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 57.480262756347656, "height": 57.480262756347656,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Rangers_assets_icon_Vector_I190_21155_632_203_svg_57_480262756347656x57_480262756347656
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.2656036913394928, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 12.007965564727783, "y": 14.160927295684814,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 29.790115356445312, "height": 12.141271591186523,
                        "relativeTransform": [[1, 0, 10.758172988891602], [0, 1, 12.885946273803711]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Rangers_assets_icon_Vector_I190_21155_632_204_svg_29_790115356445312x12_141271591186523
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.2656036913394928, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 17.94557809829712, "y": 17.083810329437256,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 24.098764419555664, "height": 25.93314552307129,
                        "relativeTransform": [[1, 0, 16.695785522460938], [0, 1, 15.808829307556152]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Rangers_assets_icon_Vector_I190_21155_632_205_svg_24_098764419555664x25_93314552307129
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.2656036913394928, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 15.61155366897583, "y": 11.26825475692749,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 28.77054214477539, "height": 7.842229843139648,
                        "relativeTransform": [[1, 0, 14.361761093139648], [0, 1, 9.993273735046387]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Rangers_assets_icon_Vector_I190_21155_632_206_svg_28_77054214477539x7_842229843139648
                    }
                  ]
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.2656036913394928, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 20.167985916137695, "y": 18.358842849731445,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 18.850088119506836, "height": 23.48900032043457,
                    "relativeTransform": [[1, 0, 20.167985916137695], [0, 1, 18.358842849731445]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Rangers_assets_icon_Vector_I190_21155_632_207_svg_18_850088119506836x23_48900032043457
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.2656036913394928, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 29.838762283325195, "y": 45.04545211791992,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 4.264036178588867, "height": 2.0333518981933594,
                    "relativeTransform": [[1, 0, 29.838762283325195], [0, 1, 45.04545211791992]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Rangers_assets_icon_Vector_I190_21155_632_208_svg_4_264036178588867x2_0333518981933594
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.2656036913394928, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 5.311613082885742, "y": 3.9917385578155518,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 49.19743347167969, "height": 51.65920639038086,
                    "relativeTransform": [[1, 0, 5.311613082885742], [0, 1, 3.9917385578155518]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Rangers_assets_icon_Vector_I190_21155_632_209_svg_49_19743347167969x51_65920639038086
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

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_338_svg_37_1583137512207x11_341266632080078 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_338_svg_37_1583137512207x11_341266632080078.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_339_svg_48_05763244628906x48_0576286315918 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_339_svg_48_05763244628906x48_0576286315918.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_340_svg_46_15319061279297x46_15321731567383 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_340_svg_46_15319061279297x46_15321731567383.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_341_svg_39_84054183959961x45_162269592285156 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_341_svg_39_84054183959961x45_162269592285156.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_343_svg_24_644081115722656x7_4572954177856445 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_343_svg_24_644081115722656x7_4572954177856445.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_345_svg_25_718807220458984x7_593969345092773 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_345_svg_25_718807220458984x7_593969345092773.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_346_svg_24_644081115722656x7_4572954177856445 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_346_svg_24_644081115722656x7_4572954177856445.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_348_svg_38_533599853515625x47_05011749267578 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_348_svg_38_533599853515625x47_05011749267578.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_349_svg_4_339406967163086x18_758543014526367 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_349_svg_4_339406967163086x18_758543014526367.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_350_svg_4_330863952636719x41_77963638305664 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_350_svg_4_330863952636719x41_77963638305664.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_351_svg_4_2625274658203125x18_55353355407715 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_351_svg_4_2625274658203125x18_55353355407715.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_352_svg_4_382120132446289x41_94193649291992 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_352_svg_4_382120132446289x41_94193649291992.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_353_svg_38_533599853515625x47_05011749267578 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_353_svg_38_533599853515625x47_05011749267578.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_354_svg_1_8621864318847656x1_8621888160705566 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_354_svg_1_8621864318847656x1_8621888160705566.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_355_svg_1_8621845245361328x1_8621869087219238 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_355_svg_1_8621845245361328x1_8621869087219238.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_356_svg_1_8621578216552734x1_8621869087219238 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_356_svg_1_8621578216552734x1_8621869087219238.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_357_svg_1_8621864318847656x1_8621864318847656 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_357_svg_1_8621864318847656x1_8621864318847656.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_358_svg_1_8621864318847656x1_8621864318847656 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_358_svg_1_8621864318847656x1_8621864318847656.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_359_svg_4_407743453979492x1_845102310180664 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_359_svg_4_407743453979492x1_845102310180664.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_360_svg_4_125852584838867x1_7255125045776367 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_360_svg_4_125852584838867x1_7255125045776367.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_361_svg_4_1258544921875x1_7255125045776367 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_361_svg_4_1258544921875x1_7255125045776367.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_363_svg_7_337705612182617x12_232343673706055 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_363_svg_7_337705612182617x12_232343673706055.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_364_svg_6_876453399658203x12_044422149658203 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_364_svg_6_876453399658203x12_044422149658203.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_365_svg_28_283031463623047x29_863325119018555 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_365_svg_28_283031463623047x29_863325119018555.svg";
import SVG_Villarreal_assets_icon_Vector_I190_21178_632_366_svg_3_254556655883789x2_861631393432617 from "./assets/Villarreal_assets_icon_Vector_I190_21178_632_366_svg_3_254556655883789x2_861631393432617.svg";


export class Villarreal extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Villarreal",
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
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
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
                "width": 48.075168, "height": 60,
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
                    "x": -9.942763, "y": -0.085872,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 67.963142, "height": 81.953273,
                    "relativeTransform": [[1, 0, -9.942763], [0, 1, -0.085872]]
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.230800, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                        "x": 5.424260, "y": 0.008564,
                        "strokes": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0.227450, "b": 0.411764 },
                            "boundVariables": {}
                          }
                        ],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 37.158313, "height": 11.341266,
                        "relativeTransform": [[1, 0, 15.367023], [0, 1, 0.094437]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_338_svg_37_1583137512207x11_341266632080078
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.230800, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                        "x": -9.942763, "y": 33.895645,
                        "strokes": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0.227450, "b": 0.411764 },
                            "boundVariables": {}
                          }
                        ],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 48.057632, "height": 48.057628,
                        "relativeTransform": [
                          [ 0.707100, 0.707100, 0 ],
                          [ -0.707099, 0.707099, 33.981517 ]
                        ],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_339_svg_48_05763244628906x48_0576286315918
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 0.896924, "y": 10.951035,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 46.153190, "height": 46.153217,
                        "relativeTransform": [[1, 0, 10.839688], [0, 1, 11.036908]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_340_svg_46_15319061279297x46_15321731567383
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 4.074643, "y": 12.232356,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 39.840541, "height": 45.162269,
                        "relativeTransform": [[1, 0, 14.017406], [0, 1, 12.318228]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_341_svg_39_84054183959961x45_162269592285156
                    },
                    {
                      "type": "FRAME",
                      "name": "Group",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": 10.824412, "y": 9.515949,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 36.543219, "height": 17.220965,
                        "relativeTransform": [[1, 0, 20.767175], [0, 1, 9.601821]]
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
                            "x": 11.540341, "y": 9.763670,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 24.644081, "height": 7.457295,
                            "relativeTransform": [[1, 0, 0.715929], [0, 1, 0.247721]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_343_svg_24_644081115722656x7_4572954177856445
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.124099, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                            "x": 10.824412, "y": 9.515949,
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0, "b": 0 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 25.718807, "height": 7.593969,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_345_svg_25_718807220458984x7_593969345092773
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.230800, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                            "x": 11.540341, "y": 9.763670,
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0, "b": 0 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 24.644081, "height": 7.457295,
                            "relativeTransform": [[1, 0, 0.715929], [0, 1, 0.247721]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_346_svg_24_644081115722656x7_4572954177856445
                        }
                      ]
                    },
                    {
                      "type": "FRAME",
                      "name": "Group",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": 4.766472, "y": 12.932825,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 43.300072, "height": 59.982943,
                        "relativeTransform": [[1, 0, 14.709236], [0, 1, 13.018698]]
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
                            "x": 4.766472, "y": 12.932825,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 38.533599, "height": 47.050117,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_348_svg_38_533599853515625x47_05011749267578
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.514599, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                            "x": 8.798409, "y": 24.567220,
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.952941, "g": 0.152941, "b": 0.215686 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.339406, "height": 18.758543,
                            "relativeTransform": [[1, 0, 4.031936], [0, 1, 11.634394]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_349_svg_4_339406967163086x18_758543014526367
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.514599, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                            "x": 17.306295, "y": 13.368475,
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.952941, "g": 0.152941, "b": 0.215686 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.330863, "height": 41.779636,
                            "relativeTransform": [[1, 0, 12.539822], [0, 1, 0.435649]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_350_svg_4_330863952636719x41_77963638305664
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.514599, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                            "x": 34.903122, "y": 24.627042,
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.952941, "g": 0.152941, "b": 0.215686 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.262527, "height": 18.553533,
                            "relativeTransform": [[1, 0, 30.136650], [0, 1, 11.694216]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_351_svg_4_2625274658203125x18_55353355407715
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.514599, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                            "x": 26.378075, "y": 13.248885,
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.952941, "g": 0.152941, "b": 0.215686 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 4.382120, "height": 41.941936,
                            "relativeTransform": [[1, 0, 21.611602], [0, 1, 0.316059]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_352_svg_4_382120132446289x41_94193649291992
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 0.230800, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                            "x": 4.766472, "y": 12.932825,
                            "strokes": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0.227450, "b": 0.411764 },
                                "boundVariables": {}
                              }
                            ],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 38.533599, "height": 47.050117,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_353_svg_38_533599853515625x47_05011749267578
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
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 23.106492, "y": 2.511395,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.862186, "height": 1.862188,
                        "relativeTransform": [[1, 0, 33.049255], [0, 1, 2.597268]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_354_svg_1_8621864318847656x1_8621888160705566
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 15.512444, "y": 3.468131,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.862184, "height": 1.862186,
                        "relativeTransform": [[1, 0, 25.455207], [0, 1, 3.554003]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_355_svg_1_8621845245361328x1_8621869087219238
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 30.768876, "y": 3.468131,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.862157, "height": 1.862186,
                        "relativeTransform": [[1, 0, 40.711639], [0, 1, 3.554003]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_356_svg_1_8621578216552734x1_8621869087219238
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 38.525086, "y": 8.260261,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.862186, "height": 1.862186,
                        "relativeTransform": [[1, 0, 48.467849], [0, 1, 8.346134]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_357_svg_1_8621864318847656x1_8621864318847656
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 7.602505, "y": 8.260261,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.862186, "height": 1.862186,
                        "relativeTransform": [[1, 0, 17.545269], [0, 1, 8.346134]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_358_svg_1_8621864318847656x1_8621864318847656
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 21.774003, "y": 10.335988,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.407743, "height": 1.845102,
                        "relativeTransform": [[1, 0, 31.716766], [0, 1, 10.421860]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_359_svg_4_407743453979492x1_845102310180664
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 12.428814, "y": 12.232356,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.125852, "height": 1.725512,
                        "relativeTransform": [[1, 0, 22.371578], [0, 1, 12.318228]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_360_svg_4_125852584838867x1_7255125045776367
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 31.332516, "y": 12.232356,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.125854, "height": 1.725512,
                        "relativeTransform": [[1, 0, 41.275279], [0, 1, 12.318228]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_361_svg_4_1258544921875x1_7255125045776367
                    },
                    {
                      "type": "FRAME",
                      "name": "Group",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "x": 9.575657, "y": 27.898672,
                        "strokes": [],
                        "strokeWeight": 0,
                        "effects": []
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 38.482346, "height": 40.131015,
                        "relativeTransform": [[1, 0, 19.518421], [0, 1, 27.984544]]
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
                            "x": 9.575657, "y": 27.898672,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 7.337705, "height": 12.232343,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_363_svg_7_337705612182617x12_232343673706055
                        },
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 31.605893, "y": 28.052429,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 6.876453, "height": 12.044422,
                            "relativeTransform": [[1, 0, 22.030235], [0, 1, 0.153757]],
                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                          },
                          "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_364_svg_6_876453399658203x12_044422149658203
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
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 9.772292, "y": 19.561498,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 28.283031, "height": 29.863325,
                        "relativeTransform": [[1, 0, 19.715055], [0, 1, 19.647371]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_365_svg_28_283031463623047x29_863325119018555
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0.211799, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 3.863699,
                        "x": 15.794503, "y": 13.641809,
                        "strokes": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0, "b": 0 },
                            "boundVariables": {}
                          }
                        ],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.254556, "height": 2.861631,
                        "relativeTransform": [[1, 0, 25.737266], [0, 1, 13.727682]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Villarreal_assets_icon_Vector_I190_21178_632_366_svg_3_254556655883789x2_861631393432617
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

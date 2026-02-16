import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import SVG_Livorno_assets_icon_Vector_I190_21129_635_414_svg_60x60 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_414_svg_60x60.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_415_svg_58_27716827392578x58_27688217163086 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_415_svg_58_27716827392578x58_27688217163086.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_417_svg_5_042332649230957x4_524911880493164 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_417_svg_5_042332649230957x4_524911880493164.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_418_svg_1_0276365280151367x1_0469284057617188 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_418_svg_1_0276365280151367x1_0469284057617188.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_419_svg_4_924190044403076x4_093866348266602 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_419_svg_4_924190044403076x4_093866348266602.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_420_svg_1_2996463775634766x1_3112010955810547 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_420_svg_1_2996463775634766x1_3112010955810547.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_421_svg_5_724377632141113x3_5741348266601562 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_421_svg_5_724377632141113x3_5741348266601562.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_422_svg_4_029965400695801x4_032835006713867 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_422_svg_4_029965400695801x4_032835006713867.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_423_svg_4_89530086517334x5_377525806427002 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_423_svg_4_89530086517334x5_377525806427002.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_424_svg_4_700815200805664x4_914623260498047 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_424_svg_4_700815200805664x4_914623260498047.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_425_svg_4_685178756713867x5_020510673522949 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_425_svg_4_685178756713867x5_020510673522949.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_426_svg_4_310857772827148x4_976183891296387 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_426_svg_4_310857772827148x4_976183891296387.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_427_svg_4_6719512939453125x4_913234710693359 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_427_svg_4_6719512939453125x4_913234710693359.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_428_svg_4_768852233886719x4_835580825805664 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_428_svg_4_768852233886719x4_835580825805664.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_429_svg_5_425437927246094x5_074875831604004 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_429_svg_5_425437927246094x5_074875831604004.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_430_svg_4_656494140625x5_003427505493164 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_430_svg_4_656494140625x5_003427505493164.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_431_svg_4_904411315917969x4_465663909912109 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_431_svg_4_904411315917969x4_465663909912109.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_432_svg_4_717842102050781x1_2571372985839844 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_432_svg_4_717842102050781x1_2571372985839844.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_433_svg_4_9007720947265625x4_609891891479492 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_433_svg_4_9007720947265625x4_609891891479492.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_435_svg_2_450777053833008x4_603919982910156 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_435_svg_2_450777053833008x4_603919982910156.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_436_svg_3_4014129638671875x4_756534576416016 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_436_svg_3_4014129638671875x4_756534576416016.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_437_svg_2_4074974060058594x4_647342681884766 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_437_svg_2_4074974060058594x4_647342681884766.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_438_svg_3_602802276611328x4_983543395996094 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_438_svg_3_602802276611328x4_983543395996094.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_439_svg_43_1197509765625x43_119651794433594 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_439_svg_43_1197509765625x43_119651794433594.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_440_svg_41_396820068359375x41_39692306518555 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_440_svg_41_396820068359375x41_39692306518555.svg";
import SVG_Livorno_assets_icon_Vector_I190_21129_635_441_svg_38_29685592651367x38_195091247558594 from "./assets/Livorno_assets_icon_Vector_I190_21129_635_441_svg_38_29685592651367x38_195091247558594.svg";


export class Livorno extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Livorno",
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
              "name": "AS_Livorno 1",
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
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
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
                  "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_414_svg_60x60
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 0.861307, "y": 0.861407,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 58.277168, "height": 58.276882,
                    "relativeTransform": [[1, 0, 0.861307], [0, 1, 0.861407]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_415_svg_58_27716827392578x58_27688217163086
                },
                {
                  "type": "FRAME",
                  "name": "Group",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 2.542464, "y": 2.246614,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 57.676948, "height": 35.716438,
                    "relativeTransform": [[1, 0, 2.542464], [0, 1, 2.246614]]
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
                        "x": 2.542464, "y": 31.191526,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 5.042332, "height": 4.524911,
                        "relativeTransform": [[1, 0, 0], [0, 1, 28.944911]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_417_svg_5_042332649230957x4_524911880493164
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 5.974047, "y": 29.018911,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.027636, "height": 1.046928,
                        "relativeTransform": [[1, 0, 3.431582], [0, 1, 26.772296]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_418_svg_1_0276365280151367x1_0469284057617188
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 2.621610, "y": 23.356624,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.924190, "height": 4.093866,
                        "relativeTransform": [[1, 0, 0.079145], [0, 1, 21.110010]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_419_svg_4_924190044403076x4_093866348266602
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 7.254464, "y": 21.274486,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.299646, "height": 1.311201,
                        "relativeTransform": [[1, 0, 4.711999], [0, 1, 19.027872]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_420_svg_1_2996463775634766x1_3112010955810547
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 6.689468, "y": 14.150169,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 5.724377, "height": 3.574134,
                        "relativeTransform": [[1, 0, 4.147003], [0, 1, 11.903554]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_421_svg_5_724377632141113x3_5741348266601562
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 10.073425, "y": 10.045674,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.029965, "height": 4.032835,
                        "relativeTransform": [[1, 0, 7.530960], [0, 1, 7.799059]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_422_svg_4_029965400695801x4_032835006713867
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 12.200125, "y": 6.230671,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.895300, "height": 5.377525,
                        "relativeTransform": [[1, 0, 9.657660], [0, 1, 3.984056]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_423_svg_4_89530086517334x5_377525806427002
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 17.962938, "y": 4.110742,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.700815, "height": 4.914623,
                        "relativeTransform": [[1, 0, 15.420473], [0, 1, 1.864127]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_424_svg_4_700815200805664x4_914623260498047
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 23.902042, "y": 2.519865,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.685178, "height": 5.020510,
                        "relativeTransform": [[1, 0, 21.359577], [0, 1, 0.273250]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_425_svg_4_685178756713867x5_020510673522949
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 29.915635, "y": 2.246614,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.310857, "height": 4.976183,
                        "relativeTransform": [[1, 0, 27.373170], [0, 1, 0]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_426_svg_4_310857772827148x4_976183891296387
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 35.727035, "y": 3.504733,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.671951, "height": 4.913234,
                        "relativeTransform": [[1, 0, 33.184570], [0, 1, 1.258118]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_427_svg_4_6719512939453125x4_913234710693359
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 43.677711, "y": 7.970565,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.768852, "height": 4.835580,
                        "relativeTransform": [[1, 0, 41.135246], [0, 1, 5.723950]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_428_svg_4_768852233886719x4_835580825805664
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 46.808685, "y": 12.660105,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 5.425437, "height": 5.074875,
                        "relativeTransform": [[1, 0, 44.266220], [0, 1, 10.413491]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_429_svg_5_425437927246094x5_074875831604004
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 50.106323, "y": 16.673223,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.656494, "height": 5.003427,
                        "relativeTransform": [[1, 0, 47.563858], [0, 1, 14.426609]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_430_svg_4_656494140625x5_003427505493164
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 52.263267, "y": 22.034498,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.904411, "height": 4.465663,
                        "relativeTransform": [[1, 0, 49.720802], [0, 1, 19.787883]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_431_svg_4_904411315917969x4_465663909912109
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 52.959106, "y": 28.102241,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.717842, "height": 1.257137,
                        "relativeTransform": [[1, 0, 50.416641], [0, 1, 25.855627]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_432_svg_4_717842102050781x1_2571372985839844
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 52.673629, "y": 31.080370,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.900772, "height": 4.609891,
                        "relativeTransform": [[1, 0, 50.131164], [0, 1, 28.833755]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_433_svg_4_9007720947265625x4_609891891479492
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "Group",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 21.742593, "y": 51.795715,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 38.965065, "height": 57.646888,
                    "relativeTransform": [[1, 0, 21.742593], [0, 1, 51.795715]]
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
                        "x": 21.742593, "y": 52.174160,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 2.450777, "height": 4.603919,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0.378444]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_435_svg_2_450777053833008x4_603919982910156
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 25.841344, "y": 52.890354,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.401412, "height": 4.756534,
                        "relativeTransform": [[1, 0, 4.098751], [0, 1, 1.094638]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_436_svg_3_4014129638671875x4_756534576416016
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 30.885368, "y": 52.939243,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 2.407497, "height": 4.647342,
                        "relativeTransform": [[1, 0, 9.142774], [0, 1, 1.143527]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_437_svg_2_4074974060058594x4_647342681884766
                    },
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 35.362262, "y": 51.795715,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.602802, "height": 4.983543,
                        "relativeTransform": [[1, 0, 13.619668], [0, 1, 0]],
                        "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                      },
                      "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_438_svg_3_602802276611328x4_983543395996094
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
                    "x": 8.440290, "y": 8.440163,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 43.119750, "height": 43.119651,
                    "relativeTransform": [[1, 0, 8.440290], [0, 1, 8.440163]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_439_svg_43_1197509765625x43_119651794433594
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 9.301597, "y": 9.301470,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 41.396820, "height": 41.396923,
                    "relativeTransform": [[1, 0, 9.301597], [0, 1, 9.301470]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_440_svg_41_396820068359375x41_39692306518555
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 10.851744, "y": 10.854832,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 38.296855, "height": 38.195091,
                    "relativeTransform": [[1, 0, 10.851744], [0, 1, 10.854832]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_Livorno_assets_icon_Vector_I190_21129_635_441_svg_38_29685592651367x38_195091247558594
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

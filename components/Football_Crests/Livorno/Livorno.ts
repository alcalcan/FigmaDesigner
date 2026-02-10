import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


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
                    "x": 0.8613074421882629, "y": 0.8614075183868408,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 58.27716827392578, "height": 58.27688217163086,
                    "relativeTransform": [[1, 0, 0.8613074421882629], [0, 1, 0.8614075183868408]],
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
                    "x": 2.5424649715423584, "y": 2.246614694595337,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 57.6769483089447, "height": 35.71643853187561,
                    "relativeTransform": [[1, 0, 2.5424649715423584], [0, 1, 2.246614694595337]]
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
                        "x": 2.5424649715423584, "y": 31.191526651382446,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 5.042332649230957, "height": 4.524911880493164,
                        "relativeTransform": [[1, 0, 0], [0, 1, 28.94491195678711]],
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
                        "x": 5.9740471839904785, "y": 29.018911600112915,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.0276365280151367, "height": 1.0469284057617188,
                        "relativeTransform": [[1, 0, 3.43158221244812], [0, 1, 26.772296905517578]],
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
                        "x": 2.621610164642334, "y": 23.356624841690063,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.924190044403076, "height": 4.093866348266602,
                        "relativeTransform": [[1, 0, 0.07914519309997559], [0, 1, 21.110010147094727]],
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
                        "x": 7.254464864730835, "y": 21.274486780166626,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 1.2996463775634766, "height": 1.3112010955810547,
                        "relativeTransform": [[1, 0, 4.711999893188477], [0, 1, 19.02787208557129]],
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
                        "x": 6.689468145370483, "y": 14.150169610977173,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 5.724377632141113, "height": 3.5741348266601562,
                        "relativeTransform": [[1, 0, 4.147003173828125], [0, 1, 11.903554916381836]],
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
                        "x": 10.073425054550171, "y": 10.045674562454224,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.029965400695801, "height": 4.032835006713867,
                        "relativeTransform": [[1, 0, 7.5309600830078125], [0, 1, 7.799059867858887]],
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
                        "x": 12.200125455856323, "y": 6.230671405792236,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.89530086517334, "height": 5.377525806427002,
                        "relativeTransform": [[1, 0, 9.657660484313965], [0, 1, 3.9840567111968994]],
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
                        "x": 17.96293807029724, "y": 4.110742568969727,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.700815200805664, "height": 4.914623260498047,
                        "relativeTransform": [[1, 0, 15.420473098754883], [0, 1, 1.8641278743743896]],
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
                        "x": 23.902042150497437, "y": 2.5198652744293213,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.685178756713867, "height": 5.020510673522949,
                        "relativeTransform": [[1, 0, 21.359577178955078], [0, 1, 0.2732505798339844]],
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
                        "x": 29.91563582420349, "y": 2.246614694595337,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.310857772827148, "height": 4.976183891296387,
                        "relativeTransform": [[1, 0, 27.373170852661133], [0, 1, 0]],
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
                        "x": 35.72703528404236, "y": 3.504733085632324,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.6719512939453125, "height": 4.913234710693359,
                        "relativeTransform": [[1, 0, 33.1845703125], [0, 1, 1.2581183910369873]],
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
                        "x": 43.67771124839783, "y": 7.9705650806427,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.768852233886719, "height": 4.835580825805664,
                        "relativeTransform": [[1, 0, 41.13524627685547], [0, 1, 5.723950386047363]],
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
                        "x": 46.808685064315796, "y": 12.66010594367981,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 5.425437927246094, "height": 5.074875831604004,
                        "relativeTransform": [[1, 0, 44.26622009277344], [0, 1, 10.413491249084473]],
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
                        "x": 50.10632300376892, "y": 16.673223733901978,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.656494140625, "height": 5.003427505493164,
                        "relativeTransform": [[1, 0, 47.56385803222656], [0, 1, 14.42660903930664]],
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
                        "x": 52.263267278671265, "y": 22.03449845314026,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.904411315917969, "height": 4.465663909912109,
                        "relativeTransform": [[1, 0, 49.720802307128906], [0, 1, 19.787883758544922]],
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
                        "x": 52.95910620689392, "y": 28.10224175453186,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.717842102050781, "height": 1.2571372985839844,
                        "relativeTransform": [[1, 0, 50.41664123535156], [0, 1, 25.855627059936523]],
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
                        "x": 52.67362952232361, "y": 31.0803701877594,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 4.9007720947265625, "height": 4.609891891479492,
                        "relativeTransform": [[1, 0, 50.13116455078125], [0, 1, 28.833755493164062]],
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
                    "x": 21.74259376525879, "y": 51.79571533203125,
                    "strokes": [],
                    "strokeWeight": 0,
                    "effects": []
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 38.965065002441406, "height": 57.646888732910156,
                    "relativeTransform": [[1, 0, 21.74259376525879], [0, 1, 51.79571533203125]]
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
                        "x": 21.74259376525879, "y": 52.17416000366211,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 2.450777053833008, "height": 4.603919982910156,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0.3784446716308594]],
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
                        "x": 25.841344833374023, "y": 52.89035415649414,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.4014129638671875, "height": 4.756534576416016,
                        "relativeTransform": [[1, 0, 4.098751068115234], [0, 1, 1.0946388244628906]],
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
                        "x": 30.88536834716797, "y": 52.93924331665039,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 2.4074974060058594, "height": 4.647342681884766,
                        "relativeTransform": [[1, 0, 9.14277458190918], [0, 1, 1.1435279846191406]],
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
                        "x": 35.36226272583008, "y": 51.79571533203125,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 3.602802276611328, "height": 4.983543395996094,
                        "relativeTransform": [[1, 0, 13.619668960571289], [0, 1, 0]],
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
                    "x": 8.440290451049805, "y": 8.440163612365723,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 43.1197509765625, "height": 43.119651794433594,
                    "relativeTransform": [[1, 0, 8.440290451049805], [0, 1, 8.440163612365723]],
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
                    "x": 9.301597595214844, "y": 9.301470756530762,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 41.396820068359375, "height": 41.39692306518555,
                    "relativeTransform": [[1, 0, 9.301597595214844], [0, 1, 9.301470756530762]],
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
                    "x": 10.851744651794434, "y": 10.854832649230957,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 38.29685592651367, "height": 38.195091247558594,
                    "relativeTransform": [[1, 0, 10.851744651794434], [0, 1, 10.854832649230957]],
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

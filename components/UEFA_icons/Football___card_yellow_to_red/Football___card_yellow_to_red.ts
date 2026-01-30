import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Football___card_yellow_to_red_assets_icon_Yellow_card_I92_670976_836_237_svg_9_599998474121094x14_399999618530273 from "./assets/Football___card_yellow_to_red_assets_icon_Yellow_card_I92_670976_836_237_svg_9_599998474121094x14_399999618530273.svg";
import SVG_Football___card_yellow_to_red_assets_icon_Red_Card_I92_670976_955_142_svg_9_59999942779541x13_440000534057617 from "./assets/Football___card_yellow_to_red_assets_icon_Red_Card_I92_670976_955_142_svg_9_59999942779541x13_440000534057617.svg";


export class Football___card_yellow_to_red extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Football / card-yellow-to-red",
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
          "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Yellow card",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 3.3599853515625, "y": 3.3599853515625,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 9.599998474121094, "height": 14.399999618530273,
                "relativeTransform": [[1, 0, 3.3599853515625], [0, 1, 3.3599853515625]]
              },
              "svgContent": SVG_Football___card_yellow_to_red_assets_icon_Yellow_card_I92_670976_836_237_svg_9_599998474121094x14_399999618530273
            },
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Red Card",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 11.0400390625, "y": 7.20001220703125,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 9.59999942779541, "height": 13.440000534057617,
                "relativeTransform": [[1, 0, 11.0400390625], [0, 1, 7.20001220703125]]
              },
              "svgContent": SVG_Football___card_yellow_to_red_assets_icon_Red_Card_I92_670976_955_142_svg_9_59999942779541x13_440000534057617
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

import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Football___substitution_out_assets_icon_player_IN_I92_671069_955_141_svg_14_457684516906738x11_285822868347168 from "./assets/Football___substitution_out_assets_icon_player_IN_I92_671069_955_141_svg_14_457684516906738x11_285822868347168.svg";


export class Football___substitution_out extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Football / substitution-out",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutMode": "NONE",
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "player IN",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0.8896223902702332, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 4.771142959594727, "y": 6.999987602233887,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0.8896223902702332
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 14.457684516906738, "height": 11.285822868347168,
                "relativeTransform": [[1, 0, 4.771142959594727], [0, 1, 6.999987602233887]]
              },
              "svgContent": SVG_Football___substitution_out_assets_icon_player_IN_I92_671069_955_141_svg_14_457684516906738x11_285822868347168
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

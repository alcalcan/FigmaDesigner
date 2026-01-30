import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Football___substitution_both_assets_icon_player_OUT_I92_671060_955_138_svg_13_519195556640625x10_414121627807617 from "./assets/Football___substitution_both_assets_icon_player_OUT_I92_671060_955_138_svg_13_519195556640625x10_414121627807617.svg";
import SVG_Football___substitution_both_assets_icon_player_IN_I92_671060_955_139_svg_13_519195556640625x10_414121627807617 from "./assets/Football___substitution_both_assets_icon_player_IN_I92_671060_955_139_svg_13_519195556640625x10_414121627807617.svg";


export class Football___substitution_both extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Football / substitution-both",
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
              "name": "player OUT",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0.8896223902702332, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 1.5683423280715942, "y": 2.5486981868743896,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0.8896223902702332
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 13.519195556640625, "height": 10.414121627807617,
                "relativeTransform": [[1, 0, 1.5683423280715942], [0, 1, 2.5486981868743896]]
              },
              "svgContent": SVG_Football___substitution_both_assets_icon_player_OUT_I92_671060_955_138_svg_13_519195556640625x10_414121627807617
            },
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "player IN",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0.8896223902702332, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 9.117009162902832, "y": 9.037184715270996,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0.8896223902702332
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 13.519195556640625, "height": 10.414121627807617,
                "relativeTransform": [[1, 0, 9.117009162902832], [0, 1, 9.037184715270996]]
              },
              "svgContent": SVG_Football___substitution_both_assets_icon_player_IN_I92_671060_955_139_svg_13_519195556640625x10_414121627807617
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

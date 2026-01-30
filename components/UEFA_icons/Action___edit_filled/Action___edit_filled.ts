import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Action___edit_filled_assets_icon_icon_edit_I92_670584_2066_805_svg_17_617008209228516x17_617008209228516 from "./assets/Action___edit_filled_assets_icon_icon_edit_I92_670584_2066_805_svg_17_617008209228516x17_617008209228516.svg";


export class Action___edit_filled extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Action / edit-filled",
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
              "name": "icon-edit",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 3.7798314094543457, "y": 2.603032112121582,
                "strokes": [],
                "effects": []
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 17.617008209228516, "height": 17.617008209228516,
                "relativeTransform": [
                  [ 0.9999999403953552, 0, 3.7798314094543457 ],
                  [ 0, 0.9999999403953552, 2.603032112121582 ]
                ]
              },
              "svgContent": SVG_Action___edit_filled_assets_icon_icon_edit_I92_670584_2066_805_svg_17_617008209228516x17_617008209228516
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

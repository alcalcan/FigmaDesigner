import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import SVG_Action___settings_assets_icon_Vector_I92_670683_1004_28_svg_22_003387451171875x22 from "./assets/Action___settings_assets_icon_Vector_I92_670683_1004_28_svg_22_003387451171875x22.svg";


export class Action___settings extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "Settings Icon",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "layoutMode": "VERTICAL",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
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
          "name": "Vector",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "x": 1.1639404296875, "y": 1,
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 22.003387451171875, "height": 22,
            "relativeTransform": [[1, 0, 1.1639404296875], [0, 1, 1]]
          },
          "svgContent": SVG_Action___settings_assets_icon_Vector_I92_670683_1004_28_svg_22_003387451171875x22
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

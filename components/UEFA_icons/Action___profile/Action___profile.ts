import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import SVG_Action___profile_assets_icon_Vector_I92_670657_1004_31_svg_22x22 from "./assets/Action___profile_assets_icon_Vector_I92_670657_1004_31_svg_22x22.svg";


export class Action___profile extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "Action / profile",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "layoutMode": "HORIZONTAL",
        "primaryAxisAlignItems": "CENTER",
        "counterAxisAlignItems": "CENTER",
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
            "x": 1, "y": 1,
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 22, "height": 22,
            "relativeTransform": [[1, 0, 1], [0, 1, 1]]
          },
          "svgContent": SVG_Action___profile_assets_icon_Vector_I92_670657_1004_31_svg_22x22
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

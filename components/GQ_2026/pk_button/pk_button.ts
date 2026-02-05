import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";


// SVG Assets



export class pk_button extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "pk-button",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 12, "paddingRight": 16, "paddingBottom": 12, "paddingLeft": 16,
        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "fills": [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
            "color": { "r": 0.8078, "g": 0.1647, "b": 0.2863 },
            "boundVariables": {}
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": 6
      },
      "layoutProps": { "width": 288, "height": 52, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "TEXT",
          "name": "Label",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "characters": props.characters || "Let’s go", "fontSize": 20,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
            "paragraphSpacing": 20, "paragraphIndent": 0,
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "letterSpacing": { "unit": "PIXELS", "value": 0 },
            "lineHeight": { "unit": "PERCENT", "value": 130 },
            "font": { "family": "Manrope", "style": "SemiBold" }
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 264, "height": 26,
            "relativeTransform": [[1, 0, 12], [0, 1, 12]],
            "constraints": { "horizontal": "STRETCH", "vertical": "CENTER" }
          }
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

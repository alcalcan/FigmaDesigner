import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27432_2556_11005_1004_90_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27432_2556_11005_1004_90_svg_orig.svg";

export class ReviewHeroPlay extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "play_button",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "x": 240, "y": 272,
        "layoutMode": "NONE",
        "fills": [], "strokes": [], "effects": [], "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
      },
      "layoutProps": {
        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
        "width": 120, "height": 120,
        "relativeTransform": [[1, 0, 240], [0, 1, 272]],
        "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
      },
      "children": [
        {
          "type": "ELLIPSE",
          "name": "BG",
          "props": {
            "visible": true, "opacity": 0.6000000238418579, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "x": 0, "y": 0,
            "fills": [{ "visible": true, "opacity": 0.4000000059604645, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 0.09019608050584793, "g": 0.15294118225574493, "b": 0.1921568661928177 }, "boundVariables": {} }],
            "strokes": [], "effects": [], "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 120, "height": 120,
            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          }
        },
        {
          "type": "FRAME",
          "name": "Play icon",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "x": 24, "y": 24,
            "layoutMode": "NONE",
            "fills": [], "strokes": [], "effects": [], "cornerRadius": 0,
            "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 72, "height": 72,
            "relativeTransform": [[1, 0, 24], [0, 1, 24]],
            "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
          },
          "children": [
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Vector",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "x": 6, "y": 6,
                "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                "strokes": [], "effects": [], "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 60, "height": 60,
                "relativeTransform": [[1, 0, 6], [0, 1, 6]],
                "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
              },
              "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27432_2556_11005_1004_90_svg_orig
            }
          ]
        }
      ]
    };

    return this.renderDefinition(structure);
  }
}

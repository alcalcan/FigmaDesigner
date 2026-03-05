import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_NewsletterTemplate_img_2_png from "./assets/NewsletterTemplate_img_2.png";

export class ReviewBackground extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "Image placeholder",
      "props": {
        "visible": true,
        "opacity": 1,
        "locked": false,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "maskType": "ALPHA",
        "clipsContent": true,
        "x": 0,
        "y": 0,
        "layoutMode": "NONE",
        "fills": [
          {
            "visible": true,
            "opacity": 1,
            "blendMode": "NORMAL",
            "type": "SOLID",
            "color": { "r": 1, "g": 1, "b": 1 },
            "boundVariables": {}
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED",
        "layoutSizingVertical": "FIXED"
      },
      "layoutProps": {
        "parentIsAutoLayout": false,
        "layoutPositioning": "AUTO",
        "width": 600,
        "height": 696,
        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
      },
      "children": [
        {
          "type": "RECTANGLE",
          "name": "GettyImages-2212791115 1",
          "props": {
            "visible": true,
            "opacity": 1,
            "locked": false,
            "blendMode": "PASS_THROUGH",
            "isMask": false,
            "maskType": "ALPHA",
            "x": -201,
            "y": 0,
            "fills": [
              {
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "type": "IMAGE",
                "scaleMode": "CROP",
                "imageTransform": [[0.9999700784683228, 0, 0.000014972251847211737], [0, 1, 0]],
                "scalingFactor": 0.5,
                "filters": {
                  "exposure": 0,
                  "contrast": 0,
                  "saturation": 0,
                  "temperature": 0,
                  "tint": 0,
                  "highlights": 0,
                  "shadows": 0
                },
                "originalImageHash": "2ae4b4a624972ce819279dc7df1ff05096bb6167",
                "assetRef": IMG_NewsletterTemplate_img_2_png
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": false,
            "layoutPositioning": "AUTO",
            "width": 1137.0341,
            "height": 696,
            "relativeTransform": [[1, 0, -201], [0, 1, 0]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          }
        }
      ]
    };

    return this.renderDefinition(structure);
  }
}

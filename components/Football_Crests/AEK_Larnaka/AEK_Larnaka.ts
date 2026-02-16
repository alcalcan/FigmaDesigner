import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent"; 


// SVG Assets
import IMG_AEK_Larnaka_img_1_png from "././assets/AEK_Larnaka_img_1.png";


export class AEK_Larnaka extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "AEK Larnaka",
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
              "type": "RECTANGLE",
              "name": "Crest",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 0, "y": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                    "scaleMode": "FIT",
                    "imageTransform": [[1, 0, 0], [0, 0.722021, 0.138989]],
                    "scalingFactor": 0.5,
                    "rotation": 0,
                    "filters": {
                      "exposure": 0,
                      "contrast": 0,
                      "saturation": 0,
                      "temperature": 0,
                      "tint": 0,
                      "highlights": 0,
                      "shadows": 0
                    },
                    "originalImageHash": "6c1564d3e436f26438321d3c90d0375542219661",
                    "assetRef": IMG_AEK_Larnaka_img_1_png
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

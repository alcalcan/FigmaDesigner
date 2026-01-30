import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_Product___Flat___Trophy_img_1_opt_png from "././assets/Product___Flat___Trophy_img_1_opt.png";


export class Product___Flat___Trophy extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Product / Flat / Trophy",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
          "layoutProps": { "width": 40, "height": 60, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "RECTANGLE",
              "name": "UCL_2024-27_Trophy_BrandColours_FrontBottom_10K_RGB",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0.515487015247345, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.515487015247345, "strokeRightWeight": 0.515487015247345, "strokeBottomWeight": 0.515487015247345, "strokeLeftWeight": 0.515487015247345,
                "x": 2, "y": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                    "scaleMode": "CROP",
                    "imageTransform": [
                      [ 0.7092671394348145, 0, 0.1499359905719757 ],
                      [ 0, 0.7710162997245789, 0.1501893401145935 ]
                    ],
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
                    "originalImageHash": "316f462dd4fb6ca3fbef5afa031f5ee79730d816",
                    "assetRef": IMG_Product___Flat___Trophy_img_1_opt_png
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 36.4383544921875, "height": 60,
                "relativeTransform": [[1, 0, 2], [0, 1, 0]]
              }
            }
          ]
        };

        const root = await this.renderDefinition(structure);
        
        // Final positioning
        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

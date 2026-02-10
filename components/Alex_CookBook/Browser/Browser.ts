import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_Browser_img_1_png from "././assets/Browser_img_1.png";
import IMG_Browser_img_2_png from "././assets/Browser_img_2.png";
import IMG_Browser_img_3_png from "././assets/Browser_img_3.png";
import IMG_Browser_img_4_png from "././assets/Browser_img_4.png";


export class Browser extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Browser",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutMode": "NONE",
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0.8745098114013672, "g": 0.8823529481887817, "b": 0.8980392217636108 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": { "width": 1680, "height": 79, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "RECTANGLE",
              "name": "image 10",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 0, "y": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                    "scaleMode": "CROP",
                    "imageTransform": [[0.9986700415611267, 0, 0], [0, 0.4093264043331146, 0]],
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
                    "originalImageHash": "5ab8d3fd4a2e59ddb1a0f626c30c2c3102635b6b",
                    "assetRef": IMG_Browser_img_1_png
                  }
                ],
                "strokes": [],
                "effects": [],
                "topLeftRadius": 12,
                "topRightRadius": 12
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 1502, "height": 79,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "RECTANGLE",
              "name": "image 11",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 101, "y": 40,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                    "scaleMode": "FILL",
                    "imageTransform": [[1, 0, 0], [0, 1, 0]],
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
                    "originalImageHash": "cca9664b68fdd3e9b4af700d2152f31e2aa2699c",
                    "assetRef": IMG_Browser_img_2_png
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 805, "height": 39,
                "relativeTransform": [[1, 0, 101], [0, 1, 40]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "RECTANGLE",
              "name": "image 12",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 996, "y": 44,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                    "scaleMode": "CROP",
                    "imageTransform": [
                      [ 0.8496894240379333, 0, 0.15031056106090546 ],
                      [ 0, 0.8974359035491943, 0.10256410390138626 ]
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
                    "originalImageHash": "cca9664b68fdd3e9b4af700d2152f31e2aa2699c",
                    "assetRef": IMG_Browser_img_3_png
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 684, "height": 35,
                "relativeTransform": [[1, 0, 996], [0, 1, 44]],
                "constraints": { "horizontal": "MAX", "vertical": "MIN" }
              }
            },
            {
              "type": "RECTANGLE",
              "name": "image 15",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 751, "y": 44,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                    "scaleMode": "CROP",
                    "imageTransform": [
                      [ 0.6310558915138245, 0, 0.15031056106090546 ],
                      [ 0, 0.8974359035491943, 0.10256410390138626 ]
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
                    "originalImageHash": "cca9664b68fdd3e9b4af700d2152f31e2aa2699c",
                    "assetRef": IMG_Browser_img_4_png
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 508, "height": 35,
                "relativeTransform": [[1, 0, 751], [0, 1, 44]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "LINE",
              "name": "Line 4",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 0, "y": 79,
                "fills": [],
                "strokes": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.8745098114013672, "g": 0.8784313797950745, "b": 0.8823529481887817 },
                    "boundVariables": {}
                  }
                ],
                "effects": []
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 1680, "height": 0,
                "relativeTransform": [[1, 0, 0], [0, 1, 79]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "RECTANGLE",
              "name": "Rectangle 1502",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 1452, "y": 8,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.8745098114013672, "g": 0.8823529481887817, "b": 0.8980392217636108 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 228, "height": 26,
                "relativeTransform": [[1, 0, 1452], [0, 1, 8]],
                "constraints": { "horizontal": "SCALE", "vertical": "MIN" }
              }
            },
            {
              "type": "RECTANGLE",
              "name": "Rectangle 1503",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 1452, "y": 42,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 228, "height": 2,
                "relativeTransform": [[1, 0, 1452], [0, 1, 42]],
                "constraints": { "horizontal": "SCALE", "vertical": "MIN" }
              }
            },
            {
              "type": "RECTANGLE",
              "name": "Rectangle 1504",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 133, "y": 49,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.95686274766922 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 1451, "height": 21,
                "relativeTransform": [[1, 0, 133], [0, 1, 49]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "RECTANGLE",
              "name": "Rectangle 1505",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "x": 124, "y": 14,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 177, "height": 21,
                "relativeTransform": [[1, 0, 124], [0, 1, 14]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            },
            {
              "type": "TEXT",
              "name": "www.uefa.com",
              "props": {
                "visible": true, "opacity": 0.800000011920929, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "characters": "www.uefa.com", "fontSize": 14,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
                "paragraphSpacing": 14, "paragraphIndent": 0,
                "x": 141, "y": 52,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                "font": { "family": "Manrope", "style": "SemiBold" }
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 1141, "height": 16,
                "relativeTransform": [[1, 0, 141], [0, 1, 52]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
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

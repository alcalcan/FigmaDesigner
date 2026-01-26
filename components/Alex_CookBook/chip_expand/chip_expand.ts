import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import SVG_assets_icon_Vector_997_10457_svg_12x7_400000095367432 from "./assets/assets_icon_Vector_997_10457_svg_12x7_400000095367432.svg";


export class chip_expand extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "chip_expand",
    "props": {
      "visible": true,
      "opacity": 1,
      "locked": false,
      "blendMode": "PASS_THROUGH",
      "isMask": false,
      "maskType": "ALPHA",
      "clipsContent": false,
      "layoutMode": "HORIZONTAL",
      "primaryAxisSizingMode": "AUTO",
      "counterAxisSizingMode": "AUTO",
      "primaryAxisAlignItems": "MIN",
      "counterAxisAlignItems": "CENTER",
      "itemSpacing": 4,
      "paddingTop": 4,
      "paddingRight": 8,
      "paddingBottom": 4,
      "paddingLeft": 8,
      "itemReverseZIndex": false,
      "strokesIncludedInLayout": false,
      "fills": [
        {
          "type": "SOLID",
          "visible": true,
          "opacity": 1,
          "blendMode": "NORMAL",
          "color": {
            "r": 0.9450980424880981,
            "g": 0.9529411792755127,
            "b": 0.9725490212440491
          },
          "boundVariables": {}
        }
      ],
      "strokes": [],
      "strokeWeight": 1,
      "strokeAlign": "INSIDE",
      "strokeCap": "NONE",
      "strokeJoin": "MITER",
      "strokeMiterLimit": 4,
      "strokeTopWeight": 1,
      "strokeRightWeight": 1,
      "strokeBottomWeight": 1,
      "strokeLeftWeight": 1,
      "effects": [],
      "cornerRadius": 8
    },
    "layoutProps": {
      "width": 117,
      "height": 32,
      "parentIsAutoLayout": false
    },
    "children": [
      {
        "type": "TEXT",
        "name": "Newer first",
        "props": {
          "visible": true,
          "opacity": 1,
          "locked": false,
          "blendMode": "PASS_THROUGH",
          "isMask": false,
          "maskType": "ALPHA",
          "fills": [
            {
              "type": "SOLID",
              "visible": true,
              "opacity": 1,
              "blendMode": "NORMAL",
              "color": {
                "r": 0.10196078568696976,
                "g": 0.1921568661928177,
                "b": 0.23529411852359772
              },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "strokeWeight": 1,
          "strokeAlign": "OUTSIDE",
          "strokeCap": "NONE",
          "strokeJoin": "MITER",
          "strokeMiterLimit": 4,
          "effects": [],
          "characters": "Newer first",
          "fontSize": 14,
          "textAlignHorizontal": "LEFT",
          "textAlignVertical": "CENTER",
          "textAutoResize": "WIDTH_AND_HEIGHT",
          "letterSpacing": {
            "unit": "PIXELS",
            "value": 0
          },
          "lineHeight": {
            "unit": "PIXELS",
            "value": 21
          },
          "textCase": "ORIGINAL",
          "textDecoration": "NONE",
          "paragraphSpacing": 0,
          "paragraphIndent": 0,
          "font": {
            "family": "Open Sans",
            "style": "Regular"
          },
          "layoutAlign": "INHERIT",
          "layoutGrow": 0
        },
        "layoutProps": {
          "width": 73,
          "height": 21,
          "relativeTransform": [
            [
              1,
              0,
              8
            ],
            [
              0,
              1,
              5.5
            ]
          ],
          "parentIsAutoLayout": true,
          "layoutPositioning": "AUTO"
        }
      },
      {
        "type": "FRAME",
        "name": "Navigation / Expand",
        "props": {
          "visible": true,
          "opacity": 1,
          "locked": false,
          "blendMode": "PASS_THROUGH",
          "isMask": false,
          "maskType": "ALPHA",
          "clipsContent": false,
          "layoutMode": "NONE",
          "fills": [],
          "strokes": [],
          "strokeWeight": 1,
          "strokeAlign": "INSIDE",
          "strokeCap": "NONE",
          "strokeJoin": "MITER",
          "strokeMiterLimit": 4,
          "strokeTopWeight": 1,
          "strokeRightWeight": 1,
          "strokeBottomWeight": 1,
          "strokeLeftWeight": 1,
          "effects": [],
          "cornerRadius": 0,
          "layoutAlign": "INHERIT",
          "layoutGrow": 0
        },
        "layoutProps": {
          "width": 24,
          "height": 24,
          "relativeTransform": [
            [
              1,
              0,
              85
            ],
            [
              0,
              1,
              4
            ]
          ],
          "parentIsAutoLayout": true,
          "layoutPositioning": "AUTO"
        },
        "children": [
          {
            "type": "VECTOR",
            "shouldFlatten": true,
            "name": "Vector",
            "props": {
              "visible": true,
              "opacity": 1,
              "locked": false,
              "blendMode": "PASS_THROUGH",
              "isMask": false,
              "maskType": "ALPHA",
              "strokes": [],
              "strokeWeight": 1,
              "strokeAlign": "INSIDE",
              "strokeCap": "NONE",
              "strokeJoin": "MITER",
              "strokeMiterLimit": 4,
              "effects": [],
              "cornerRadius": 0,
              "x": 6,
              "y": 8
            },
            "layoutProps": {
              "width": 12,
              "height": 7.400000095367432,
              "relativeTransform": [
                [
                  1,
                  0,
                  6
                ],
                [
                  0,
                  1,
                  8
                ]
              ],
              "parentIsAutoLayout": false,
              "layoutPositioning": "AUTO"
            },
            "svgContent": SVG_assets_icon_Vector_997_10457_svg_12x7_400000095367432
          }
        ]
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

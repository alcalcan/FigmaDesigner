import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import SVG_assets_icon_Vector_997_10457_svg_12x7_400000095367432 from "./assets/assets_icon_Vector_997_10457_svg_12x7_400000095367432.svg";


export class chip_expand extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "chip_expand",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 4, "paddingRight": 8, "paddingBottom": 4, "paddingLeft": 8,
        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "fills": [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
            "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
            "boundVariables": {}
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": 8
      },
      "layoutProps": { "width": 117, "height": 32, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "TEXT",
          "name": "Newer first",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "characters": "Newer first", "fontSize": 14,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
            "paragraphSpacing": 0, "paragraphIndent": 0,
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
            "lineHeight": { "unit": "PIXELS", "value": 21 },
            "font": { "family": "Open Sans", "style": "Regular" }
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 73, "height": 21,
            "relativeTransform": [[1, 0, 8], [0, 1, 5.5]]
          }
        },
        {
          "type": "FRAME",
          "name": "Navigation / Expand",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "layoutMode": "NONE",
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 24, "height": 24,
            "relativeTransform": [[1, 0, 85], [0, 1, 4]]
          },
          "children": [
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Vector",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 6, "y": 8,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 12, "height": 7.400000095367432,
                "relativeTransform": [[1, 0, 6], [0, 1, 8]]
              },
              "svgContent": SVG_assets_icon_Vector_997_10457_svg_12x7_400000095367432
            }
          ]
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

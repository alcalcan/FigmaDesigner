import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27475_2642_16923_4717_22521_1004_103_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27475_2642_16923_4717_22521_1004_103_svg_orig.svg";

export class ReviewButton extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "Buttons",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 24,
        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
        "x": 44, "y": 566,
        "fills": [], "strokes": [], "effects": [], "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "HUG"
      },
      "layoutProps": {
        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
        "width": 512, "height": 48,
        "relativeTransform": [[1, 0, 44], [0, 1, 566]],
        "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
      },
      "children": [
        {
          "type": "FRAME",
          "name": "pk-button",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 8,
            "paddingTop": 12, "paddingRight": 16, "paddingBottom": 12, "paddingLeft": 16,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 0, "g": 0.9333333373069763, "b": 1 }, "boundVariables": {} }],
            "strokes": [], "effects": [], "cornerRadius": 8,
            "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "HUG"
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 296, "height": 48,
            "relativeTransform": [[1, 0, 108], [0, 1, 0]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          },
          "children": [
            {
              "type": "FRAME",
              "name": "AV / play",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "layoutMode": "NONE",
                "fills": [{ "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                "strokes": [], "effects": [], "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 24, "height": 24,
                "relativeTransform": [[1, 0, 79], [0, 1, 12]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 8, "y": 5.820037841796875,
                    "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 }, "boundVariables": {} }],
                    "strokes": [], "effects": [], "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 10.1373, "height": 12.3599,
                    "relativeTransform": [[1, 0, 8], [0, 1, 5.82]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_NewsletterTemplate_assets_icon_Vector_I2266_103695_2697_27475_2642_16923_4717_22521_1004_103_svg_orig
                }
              ]
            },
            {
              "type": "TEXT",
              "name": "Label",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "characters": "Watch now", "fontSize": 20,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                "paragraphSpacing": 16, "paragraphIndent": 0,
                "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 }, "boundVariables": {} }],
                "strokes": [], "effects": [],
                "layoutSizingHorizontal": "HUG", "layoutSizingVertical": "HUG",
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PERCENT", "value": 100 },
                "font": { "family": "Manrope", "style": "SemiBold" },
                "richTextSpans": [{ "start": 0, "end": 9, "font": { "family": "Manrope", "style": "SemiBold" }, "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 }, "boundVariables": {} }], "fontSize": 20 }]
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 106, "height": 20,
                "relativeTransform": [[1, 0, 111], [0, 1, 14]],
                "constraints": { "horizontal": "STRETCH", "vertical": "CENTER" }
              }
            }
          ]
        }
      ]
    };

    return this.renderDefinition(structure);
  }
}

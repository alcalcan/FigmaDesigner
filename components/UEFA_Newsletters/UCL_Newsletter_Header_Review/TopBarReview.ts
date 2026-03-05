import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import SVG_NewsletterTemplate_assets_icon_Logo_I2266_103695_2697_27433_861_4531_svg_orig from "./assets/NewsletterTemplate_assets_icon_Logo_I2266_103695_2697_27433_861_4531_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_g18_I2266_103695_2697_27433_3006_47341_403_2979_svg_orig from "./assets/NewsletterTemplate_assets_icon_g18_I2266_103695_2697_27433_3006_47341_403_2979_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_g22_I2266_103695_2697_27433_3006_47341_403_2981_svg_orig from "./assets/NewsletterTemplate_assets_icon_g22_I2266_103695_2697_27433_3006_47341_403_2981_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_g26_I2266_103695_2697_27433_3006_47341_403_2983_svg_orig from "./assets/NewsletterTemplate_assets_icon_g26_I2266_103695_2697_27433_3006_47341_403_2983_svg_orig.svg";
import SVG_NewsletterTemplate_assets_icon_g30_I2266_103695_2697_27433_3006_47341_403_2985_svg_orig from "./assets/NewsletterTemplate_assets_icon_g30_I2266_103695_2697_27433_3006_47341_403_2985_svg_orig.svg";

export class TopBarReview extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "Top bar",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 28, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 16, "paddingRight": 24, "paddingBottom": 16, "paddingLeft": 24,
        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 0.873677134513855, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 0.873677134513855, "strokeRightWeight": 0.873677134513855, "strokeBottomWeight": 0.873677134513855, "strokeLeftWeight": 0.873677134513855,
        "x": 0, "y": 0,
        "counterAxisSpacing": 0,
        "layoutWrap": "NO_WRAP",
        "counterAxisAlignContent": "AUTO",
        "gridRowCount": 0,
        "gridColumnCount": 0,
        "gridRowGap": 0,
        "gridColumnGap": 0,
        "fills": [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
            "gradientStops": [
              { "color": { "r": 0, "g": 0, "b": 0, "a": 0.30000001192092896 }, "position": 0, "boundVariables": {} },
              { "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 }, "position": 0.3471200466156006, "boundVariables": {} },
              { "color": { "r": 0, "g": 0, "b": 0, "a": 0.20000000298023224 }, "position": 0.5935313105583191, "boundVariables": {} },
              { "color": { "r": 0, "g": 0, "b": 0, "a": 0 }, "position": 1, "boundVariables": {} }
            ],
            "gradientTransform": [[-1.4511566319257152e-13, 1.0571428537368774, -1.0269562977782698e-15], [-24.75099754333496, -1.5987211554602254e-13, 0.5]]
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED",
        "layoutSizingVertical": "HUG"
      },
      "layoutProps": {
        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
        "width": 600, "height": 82,
        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
      },
      "children": [
        {
          "type": "FRAME",
          "name": "Logos container",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "fills": [], "strokes": [], "effects": [], "cornerRadius": 0,
            "layoutSizingHorizontal": "HUG", "layoutSizingVertical": "HUG"
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 50, "height": 50,
            "relativeTransform": [[1, 0, 24], [0, 1, 16]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          },
          "children": [
            {
              "type": "FRAME",
              "name": "UCL LOGO",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "NONE",
                "fills": [{ "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                "strokes": [], "effects": [], "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 50, "height": 50,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Logo",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "x": 0, "y": 1.041677713394165,
                    "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                    "strokes": [], "effects": [], "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 50, "height": 47.9167,
                    "relativeTransform": [[1, 0, 0], [0, 1, 1.0417]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  },
                  "svgContent": SVG_NewsletterTemplate_assets_icon_Logo_I2266_103695_2697_27433_861_4531_svg_orig
                }
              ]
            }
          ]
        },
        {
          "type": "FRAME",
          "name": "LOGO MyUEFA",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "layoutMode": "NONE",
            "fills": [], "strokes": [], "effects": [], "cornerRadius": 0,
            "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 74.2857, "height": 16,
            "relativeTransform": [[1, 0, 501.7143], [0, -1, 49]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          },
          "children": [
            {
              "type": "GROUP",
              "name": "g18",
              "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "x": 21, "y": 0.00003475199991953559, "effects": [] },
              "layoutProps": { "parentIsAutoLayout": false, "layoutPositioning": "AUTO", "width": 53.2857, "height": 15.9711, "relativeTransform": [[1, 0, 21], [0, 1, 0]] },
              "svgContent": SVG_NewsletterTemplate_assets_icon_g18_I2266_103695_2697_27433_3006_47341_403_2979_svg_orig
            },
            {
              "type": "GROUP",
              "name": "g22",
              "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "x": 9.489757537841797, "y": 3.873318910598755, "effects": [] },
              "layoutProps": { "parentIsAutoLayout": false, "layoutPositioning": "AUTO", "width": 7.7726, "height": 12.1267, "relativeTransform": [[1, 0, 9.4898], [0, 1, 3.8733]] },
              "svgContent": SVG_NewsletterTemplate_assets_icon_g22_I2266_103695_2697_27433_3006_47341_403_2981_svg_orig
            },
            {
              "type": "GROUP",
              "name": "g26",
              "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "x": 5.278332024932775e-13, "y": 3.873318910598755, "effects": [] },
              "layoutProps": { "parentIsAutoLayout": false, "layoutPositioning": "AUTO", "width": 8.1458, "height": 12.1267, "relativeTransform": [[1, 0, 0], [0, 1, 3.8733]] },
              "svgContent": SVG_NewsletterTemplate_assets_icon_g26_I2266_103695_2697_27433_3006_47341_403_2983_svg_orig
            },
            {
              "type": "GROUP",
              "name": "g30",
              "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "x": 6.496390881835512e-13, "y": 0, "effects": [] },
              "layoutProps": { "parentIsAutoLayout": false, "layoutPositioning": "AUTO", "width": 17.2878, "height": 1.8908, "relativeTransform": [[1, 0, 0], [0, 1, 0]] },
              "svgContent": SVG_NewsletterTemplate_assets_icon_g30_I2266_103695_2697_27433_3006_47341_403_2985_svg_orig
            }
          ]
        }
      ]
    };

    return this.renderDefinition(structure);
  }
}

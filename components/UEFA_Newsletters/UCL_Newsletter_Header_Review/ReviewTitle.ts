import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export class ReviewTitle extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const titleBaseProps = {
      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
      "isMask": false, "maskType": "ALPHA",
      "strokeWeight": 0.8974401354789734, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
      "characters": "Highlights", "fontSize": 122.0518569946289,
      "textCase": "ORIGINAL", "textDecoration": "NONE",
      "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
      "paragraphSpacing": 0, "paragraphIndent": 0,
      "strokes": [], "effects": [],
      "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED",
      "letterSpacing": { "unit": "PIXELS", "value": 0 },
      "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 }
    };

    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "Review Title",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "x": 43.2324, "y": 140,
        "layoutMode": "NONE",
        "fills": [], "strokes": [], "effects": [], "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
      },
      "layoutProps": {
        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
        "width": 514, "height": 159,
        "relativeTransform": [[1, 0, 43.2324], [0, 1, 140]],
        "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
      },
      "children": [
        {
          "type": "TEXT",
          "name": "Highlights cyan",
          "props": {
            ...titleBaseProps,
            "x": 0, "y": 1,
            "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 0, "g": 0.9333333373069763, "b": 1 }, "boundVariables": {} }],
            "font": { "family": "Champions Display Colour", "style": "Italic Right" },
            "richTextSpans": [{ "start": 0, "end": 10, "font": { "family": "Champions Display Colour", "style": "Italic Right" }, "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 0, "g": 0.9333333373069763, "b": 1 }, "boundVariables": {} }], "fontSize": 122.0518569946289 }]
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 514, "height": 159,
            "relativeTransform": [[1, 0, 0], [0, 1, 1]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          }
        },
        {
          "type": "TEXT",
          "name": "Highlights yellow",
          "props": {
            ...titleBaseProps,
            "x": 0, "y": 1,
            "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 0.8039215803146362, "b": 0.2666666805744171 }, "boundVariables": {} }],
            "font": { "family": "Champions Display Colour", "style": "Italic Left" },
            "richTextSpans": [{ "start": 0, "end": 10, "font": { "family": "Champions Display Colour", "style": "Italic Left" }, "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 0.8039215803146362, "b": 0.2666666805744171 }, "boundVariables": {} }], "fontSize": 122.0518569946289 }]
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 514, "height": 159,
            "relativeTransform": [[1, 0, 0], [0, 1, 1]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          }
        },
        {
          "type": "TEXT",
          "name": "Highlights white",
          "props": {
            ...titleBaseProps,
            "x": 0, "y": 0,
            "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
            "font": { "family": "Champions Display Colour", "style": "Italic Letter" },
            "richTextSpans": [{ "start": 0, "end": 10, "font": { "family": "Champions Display Colour", "style": "Italic Letter" }, "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }], "fontSize": 122.0518569946289 }]
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 514, "height": 159,
            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          }
        }
      ]
    };

    return this.renderDefinition(structure);
  }
}

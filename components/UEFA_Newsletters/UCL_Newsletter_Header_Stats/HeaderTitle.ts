import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export class HeaderTitle extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = 
        {
          "type": "TEXT",
          "name": "UCL SEASON COMPARED",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 0.46587955951690674, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "characters": "UCL SEASON COMPARED", "fontSize": 77.33601379394531,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
            "paragraphSpacing": 0, "paragraphIndent": 0,
            "x": 60, "y": 87.7197265625,
            "strokes": [],
            "effects": [
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "radius": 24.667728424072266,
                "boundVariables": {},
                "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
                "offset": { "x": 0, "y": 3.737534999847412 },
                "spread": 0,
                "showShadowBehindNode": false
              }
            ],
            "layoutSizingHorizontal": "FIXED",
            "layoutSizingVertical": "FIXED",
            "letterSpacing": { "unit": "PIXELS", "value": 0.5 },
            "lineHeight": { "unit": "PIXELS", "value": 67.0140380859375 },
            "font": { "family": "Champions", "style": "Display" },
            "richTextSpans": [
              {
                "start": 0,
                "end": 11,
                "font": { "family": "Champions", "style": "Display" },
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "fontSize": 77.33601379394531
              },
              {
                "start": 11,
                "end": 19,
                "font": { "family": "Champions", "style": "Display" },
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.8196630477905273, "g": 0.5446940064430237, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "fontSize": 77.33601379394531
              }
            ]
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 481, "height": 68,
            "relativeTransform": [[1, 0, 60], [0, 1, 87.7197]],
            "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
          }
        }
;

        return this.renderDefinition(structure);
    }
}

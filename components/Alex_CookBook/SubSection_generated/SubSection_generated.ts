import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";



export class SubSection_generated extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "SubSection_generated",
      "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "VERTICAL", "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED", "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN", "itemSpacing": 24, "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false, "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [{ "type": "DROP_SHADOW", "visible": true, "radius": 6, "boundVariables": {}, "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 }, "offset": { "x": 0, "y": 2 }, "spread": 0, "blendMode": "NORMAL", "showShadowBehindNode": true }], "cornerRadius": 8 },
      "layoutProps": { "width": 1440, "height": 176, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "FRAME",
          "name": "Header",
          "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "HORIZONTAL", "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER", "itemSpacing": 24, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false, "fills": [], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 0, "layoutAlign": "STRETCH", "layoutGrow": 0 },
          "layoutProps": { "width": 1392, "height": 40, "relativeTransform": [[1, 0, 24], [0, 1, 24]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
          "children": [
            {
              "type": "TEXT",
              "name": "Subject",
              "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "characters": "Subject", "fontSize": 20, "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT", "letterSpacing": { "unit": "PIXELS", "value": 0 }, "lineHeight": { "unit": "PIXELS", "value": 25 }, "textCase": "ORIGINAL", "textDecoration": "NONE", "paragraphSpacing": 0, "paragraphIndent": 0, "font": { "family": "Open Sans", "style": "SemiBold" }, "layoutAlign": "INHERIT", "layoutGrow": 1 },
              "layoutProps": { "width": 1196, "height": 25, "relativeTransform": [[1, 0, 0], [0, 1, 7.5]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" }
            },
            {
              "type": "FRAME",
              "name": "Frame 1695",
              "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "HORIZONTAL", "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO", "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER", "itemSpacing": 8, "paddingTop": 4, "paddingRight": 16, "paddingBottom": 4, "paddingLeft": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false, "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }], "strokes": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 }, "boundVariables": {} }], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 100, "layoutAlign": "INHERIT", "layoutGrow": 0 },
              "layoutProps": { "width": 108, "height": 29, "relativeTransform": [[1, 0, 1220], [0, 1, 5.5]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
              "children": [
                {
                  "type": "TEXT",
                  "name": "Filter name",
                  "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "characters": "Subjects", "fontSize": 14, "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT", "letterSpacing": { "unit": "PIXELS", "value": 0 }, "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 }, "textCase": "ORIGINAL", "textDecoration": "NONE", "paragraphSpacing": 14, "paragraphIndent": 0, "font": { "family": "Manrope", "style": "Regular" }, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                  "layoutProps": { "width": 58, "height": 18, "relativeTransform": [[1, 0, 16], [0, 1, 5.5]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" }
                },
                {
                  "type": "TEXT",
                  "name": "Filter name",
                  "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "characters": "2", "fontSize": 16, "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT", "letterSpacing": { "unit": "PIXELS", "value": 0 }, "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 }, "textCase": "ORIGINAL", "textDecoration": "NONE", "paragraphSpacing": 20, "paragraphIndent": 0, "font": { "family": "Manrope", "style": "Bold" }, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                  "layoutProps": { "width": 10, "height": 21, "relativeTransform": [[1, 0, 82], [0, 1, 4]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" }
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "Frame 1696",
              "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "HORIZONTAL", "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO", "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN", "itemSpacing": 8, "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false, "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 100, "layoutAlign": "INHERIT", "layoutGrow": 0 },
              "layoutProps": { "width": 40, "height": 40, "relativeTransform": [[1, 0, 1352], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Navigation / chevron-up",
                  "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": true, "layoutMode": "NONE", "fills": [{ "type": "SOLID", "visible": false, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 0, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                  "layoutProps": { "width": 24, "height": 24, "relativeTransform": [[1, -1.224648970167536e-16, 8], [1.224648970167536e-16, 1, 8]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector",
                      "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "cornerRadius": 0, "x": 6, "y": 7.9749755859375 },
                      "layoutProps": { "width": 12, "height": 7.400000095367432, "relativeTransform": [[1, 1.224648970167536e-16, 6], [-1.224648970167536e-16, 1, 7.9749755859375]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" },
                      "svgContent": "<svg width=\"12\" height=\"7.400000095367432\" viewBox=\"0 0 12 7.400000095367432\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M1.4 7.4L0 6L6 0L12 6L10.6 7.4L6 2.8L1.4 7.4Z\" fill=\"black\"/>\n</svg>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "FRAME",
          "name": "Frame 1928",
          "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "HORIZONTAL", "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO", "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER", "itemSpacing": 32, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false, "fills": [], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 0, "layoutAlign": "STRETCH", "layoutGrow": 0 },
          "layoutProps": { "width": 1392, "height": 64, "relativeTransform": [[1, 0, 24], [0, 1, 88]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
          "children": [
            ...[{ "name": "Anti-Doping, Medical and Health", "isSelected": false }, { "name": "Event and Volunteer Management", "isSelected": false }, { "name": "Football Development", "isSelected": false }, { "name": "Innovation", "isSelected": false }, { "name": "Marketing Sponsorship", "isSelected": false }].map(item => {
              const node: NodeDefinition = {
                "type": "FRAME",
                "name": "Frame 1936",
                "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "VERTICAL", "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN", "itemSpacing": 16, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false, "fills": [], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 0, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                "layoutProps": { "width": 265, "height": 64, "relativeTransform": [[1, 0, 0], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1926",
                    "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "HORIZONTAL", "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO", "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER", "itemSpacing": 4, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false, "fills": [], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 0, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                    "layoutProps": { "width": 265, "height": 24, "relativeTransform": [[1, 0, 0], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Checkbox",
                        "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "NONE", "fills": [{ "type": "SOLID", "visible": false, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 0, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                        "layoutProps": { "width": 20, "height": 20, "relativeTransform": [[1, 0, 0], [0, 1, 2]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
                        "children": [
                          {
                            "type": "BOOLEAN_OPERATION",
                            "booleanOperation": "EXCLUDE",
                            "name": "Shape",
                            "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "cornerRadius": 0, "x": 2.5, "y": 2.5 },
                            "layoutProps": { "width": 15, "height": 15, "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" },
                            "children": [
                              {
                                "type": "VECTOR",
                                "name": "Path",
                                "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "cornerRadius": 0, "vectorPaths": [{ "windingRule": "EVENODD", "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z" }], "x": 2.5, "y": 2.5 },
                                "layoutProps": { "width": 15, "height": 15, "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" }
                              },
                              {
                                "type": "VECTOR",
                                "name": "Path",
                                "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "cornerRadius": 0, "vectorPaths": [{ "windingRule": "EVENODD", "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z" }], "x": 4.166666507720947, "y": 4.166666507720947 },
                                "layoutProps": { "width": 11.666666984558105, "height": 11.666666984558105, "relativeTransform": [[1, 0, 4.166666507720947], [0, 1, 4.166666507720947]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "TEXT",
                        "name": "Filter name",
                        "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "characters": "Anti-Doping, Medical and Health", "fontSize": 16, "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT", "letterSpacing": { "unit": "PIXELS", "value": 0 }, "lineHeight": { "unit": "PIXELS", "value": 24 }, "textCase": "ORIGINAL", "textDecoration": "NONE", "paragraphSpacing": 0, "paragraphIndent": 0, "font": { "family": "Open Sans", "style": "Regular" }, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                        "layoutProps": { "width": 241, "height": 24, "relativeTransform": [[1, 0, 24], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Frame 1927",
                    "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "HORIZONTAL", "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO", "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER", "itemSpacing": 4, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false, "fills": [], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 0, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                    "layoutProps": { "width": 254, "height": 24, "relativeTransform": [[1, 0, 0], [0, 1, 40]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "Checkbox",
                        "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "clipsContent": false, "layoutMode": "NONE", "fills": [{ "type": "SOLID", "visible": false, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1, "effects": [], "cornerRadius": 0, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                        "layoutProps": { "width": 20, "height": 20, "relativeTransform": [[1, 0, 0], [0, 1, 2]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" },
                        "children": [
                          {
                            "type": "BOOLEAN_OPERATION",
                            "booleanOperation": "EXCLUDE",
                            "name": "Shape",
                            "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "cornerRadius": 0, "x": 2.5, "y": 2.5 },
                            "layoutProps": { "width": 15, "height": 15, "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" },
                            "children": [
                              {
                                "type": "VECTOR",
                                "name": "Path",
                                "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "cornerRadius": 0, "vectorPaths": [{ "windingRule": "EVENODD", "data": "M 1.6666666269302368 0 L 13.333333015441895 0 C 14.253807663917542 0 15 0.7461919784545898 15 1.6666666269302368 L 15 13.333333015441895 C 15 14.253807663917542 14.253807663917542 15 13.333333015441895 15 L 1.6666666269302368 15 C 0.7461919784545898 15 0 14.253807663917542 0 13.333333015441895 L 0 1.6666666269302368 C 0 0.7461919784545898 0.7461919784545898 0 1.6666666269302368 0 Z" }], "x": 2.5, "y": 2.5 },
                                "layoutProps": { "width": 15, "height": 15, "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" }
                              },
                              {
                                "type": "VECTOR",
                                "name": "Path",
                                "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0, "g": 0, "b": 0 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "cornerRadius": 0, "vectorPaths": [{ "windingRule": "EVENODD", "data": "M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z" }], "x": 4.166666507720947, "y": 4.166666507720947 },
                                "layoutProps": { "width": 11.666666984558105, "height": 11.666666984558105, "relativeTransform": [[1, 0, 4.166666507720947], [0, 1, 4.166666507720947]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "TEXT",
                        "name": "Filter name",
                        "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "fills": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }, "boundVariables": {} }], "strokes": [], "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "effects": [], "characters": "Communication, PR and Media", "fontSize": 16, "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT", "letterSpacing": { "unit": "PIXELS", "value": 0 }, "lineHeight": { "unit": "PIXELS", "value": 24 }, "textCase": "ORIGINAL", "textDecoration": "NONE", "paragraphSpacing": 0, "paragraphIndent": 0, "font": { "family": "Open Sans", "style": "Regular" }, "layoutAlign": "INHERIT", "layoutGrow": 0 },
                        "layoutProps": { "width": 230, "height": 24, "relativeTransform": [[1, 0, 24], [0, 1, 0]], "parentIsAutoLayout": true, "layoutPositioning": "AUTO" }
                      }
                    ]
                  }
                ]
              };

              // Apply loop overrides
              if (item.name) {
                const traverse = (n: NodeDefinition) => {
                  if (n.type === 'TEXT' && n.props) {
                    n.props.characters = item.name;
                  }
                  if (n.children) n.children.forEach(traverse);
                };
                traverse(node);
              }

              // Checkbox Logic: Toggle visibility based on geometric roll
              const findCheckbox = (n: NodeDefinition): NodeDefinition | null => {
                if (n.name === 'Checkbox' && n.children) return n;
                if (n.children) {
                  for (const c of n.children) {
                    const res = findCheckbox(c);
                    if (res) return res;
                  }
                }
                return null;
              };

              const checkbox = findCheckbox(node);
              if (checkbox && checkbox.children) {
                const shapeNode = checkbox.children.find(c => c.name === 'Shape');
                if (shapeNode && shapeNode.children && shapeNode.children.length > 1) {
                  // Geometric Role Inference revealed this uses a hole (inverse logic)
                  shapeNode.children[1].props = shapeNode.children[1].props || {};
                  shapeNode.children[1].props.visible = !item.isSelected;
                }

                // Update checkmark visibility (God JSON pattern)
                const checkmark = checkbox.children.find(c => c.name === 'Checkmark');
                if (checkmark) {
                  checkmark.props = checkmark.props || {};
                  checkmark.props.visible = !!item.isSelected;
                }
              }

              if (item.isSelected) {
                // Apply background fill
                node.props = node.props || {};
                node.props.fills = [{
                  type: "SOLID",
                  visible: true,
                  opacity: 1,
                  blendMode: "NORMAL",
                  color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 }, // User-requested appearance
                  boundVariables: {}
                }];
              } else {
                if (node.props) node.props.fills = [];
              }

              return node;
            })
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

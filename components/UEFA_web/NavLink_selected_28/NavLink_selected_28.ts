import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets



export class NavLink_selected_28 extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "NavLink_selected_28",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": true,
            "paddingTop": 11, "paddingRight": 12, "paddingBottom": 11, "paddingLeft": 12,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "fills": [],
            "strokes": [
              {
                "visible": true, "opacity": 0, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0, "g": 0, "b": 0 },
                "boundVariables": {}
              }
            ],
            "effects": [],
            "cornerRadius": 9999
          },
          "layoutProps": { "width": 63.150001525878906, "height": 30, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "RECTANGLE",
              "name": "Background",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.3019607961177826, "g": 0.8745098114013672, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 9999,
                "layoutPositioning": "ABSOLUTE"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "ABSOLUTE",
                "width": 61.150001525878906, "height": 28,
                "relativeTransform": [[1, 0, 1], [0, 1, 1]],
                "constraints": { "horizontal": "STRETCH", "vertical": "STRETCH" }
              }
            },
            {
              "type": "FRAME",
              "name": "Container",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 38, "height": 20.799999237060547,
                "relativeTransform": [[1, 0, 13], [0, 1, 4.600000381469727]],
                "constraints": { "horizontal": "MIN", "vertical": "CENTER" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Container",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 1.5, "paddingRight": 0, "paddingBottom": 0.30000001192092896, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 38, "height": 20.799999237060547,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "TEXT",
                      "name": "Slot → News",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "News", "fontSize": 14,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 0, "paragraphIndent": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0, "b": 0.29019609093666077 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                        "lineHeight": { "unit": "PIXELS", "value": 18.200000762939453 },
                        "font": { "family": "UEFA Euro Pro", "style": "Medium" }
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 38, "height": 19,
                        "relativeTransform": [[1, 0, 0], [0, 1, 1.5]],
                        "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                      }
                    }
                  ]
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

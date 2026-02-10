import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets



export class TitleBar_withCTA extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "TitleBar_withCTA",
    "props": {
      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
      "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
      "counterAxisSizingMode": "AUTO",
      "layoutAlign": "STRETCH",
      "fills": [],
      "strokes": [],
      "effects": [],
      "cornerRadius": 0
    },
    "children": [
      {
        "type": "FRAME",
        "name": "Frame 1931",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
          "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "layoutAlign": "STRETCH", "layoutGrow": 1,
          "primaryAxisSizingMode": "AUTO",
          "fills": [],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0
        },
        "children": [
          {
            "type": "TEXT",
            "name": "Notification preferences",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA",
              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "layoutAlign": "STRETCH", "layoutGrow": 0,
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
              "fontSize": 32,
              "letterSpacing": { "unit": "PIXELS", "value": 0 },
              "lineHeight": { "unit": "PIXELS", "value": 40 },
              "font": { "family": "Open Sans", "style": "Regular" }
            }
          },
          {
            "type": "TEXT",
            "name": "Choose what you want to receive updates about",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA",
              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "layoutAlign": "STRETCH", "layoutGrow": 0,
              "textCase": "ORIGINAL", "textDecoration": "NONE",
              "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
              "paragraphSpacing": 0, "paragraphIndent": 0,
              "fills": [
                {
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                  "color": { "r": 0.2705882489681244, "g": 0.3607843220233917, "b": 0.40392157435417175 },
                  "boundVariables": {}
                }
              ],
              "strokes": [],
              "effects": [],
              "fontSize": 16,
              "letterSpacing": { "unit": "PIXELS", "value": -0.3100000023841858 },
              "lineHeight": { "unit": "PERCENT", "value": 150 },
              "font": { "family": "Inter", "style": "Medium" }
            }
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "button_set",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
          "layoutMode": "HORIZONTAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
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
          "width": 306, "height": 48,
          "relativeTransform": [[1, 0, 1134], [0, 1, 0]]
        },
        "children": [
          ...[
                          { "name": "Cancel", "hasCheckbox": false, "isSelected": false },
                          {
                            "name": "Save",
                            "fillColor": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                            "hasCheckbox": false,
                            "isSelected": true
                          }
                        ].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "pk-button",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "VERTICAL", "itemSpacing": 12, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 12, "paddingRight": 24, "paddingBottom": 12, "paddingLeft": 24,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "fills": [],
            "strokes": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                "boundVariables": {}
              }
            ],
            "effects": [],
            "cornerRadius": 24
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 102, "height": 48,
            "relativeTransform": [[1, 0, 0], [0, 1, 0]]
          },
          "children": [
            {
              "type": "TEXT",
              "name": "Label",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "layoutAlign": "INHERIT", "layoutGrow": 1,
                "characters": "Cancel", "fontSize": 16,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
                "paragraphSpacing": 16, "paragraphIndent": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PERCENT", "value": 150 },
                "font": { "family": "Manrope", "style": "SemiBold" }
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 54, "height": 24,
                "relativeTransform": [[1, 0, 24], [0, 1, 12]]
              }
            }
          ]
        } as unknown as NodeDefinition;

            // Apply loop overrides
            if (item.name) {
                const traverse = (n: any) => {
                    if (n.type === 'TEXT') {
                        n.props = n.props || {};
                        n.props.characters = item.name;
                    }
                    if (n.children) n.children.forEach(traverse);
                };
                traverse(node);
            }

            // Checkbox Logic: Bind checkmark visibility to selection
            const findShape = (n: any): any => {
                if (n.name === 'Checkbox' && n.children) {
                    const shape = n.children.find((c: any) => c.name === 'Shape');
                    if (shape && shape.children && shape.children.length > 1) return shape;
                }
                if (n.children) {
                    for (const c of n.children) {
                        const s = findShape(c);
                        if (s) return s;
                    }
                }
                return null;
            };

            const shape = findShape(node);
            
        if (shape) {
            // The second child (index 1) is the inner checkmark path
            // We bind its visibility to the selection state
            if (shape.children && shape.children.length > 1) {
                shape.children[1].props = shape.children[1].props || {};
                // Force checkmark visibility when selected
                shape.children[1].props.visible = !!item.isSelected;

                // Visual State Toggling: Handle Unchecked (Empty) vs Checked (Filled)
                // The template defaults to "Filled" (Checked style).
                shape.props = shape.props || {};
                if (item.isSelected) {
                    // Checked: Ensure Fill, No Stroke
                    // (Template has fill by default, so we just ensure no stroke)
                    shape.props.strokes = [];
                } else {
                    // Unchecked: No Fill, Bold Dark Stroke
                    shape.props.fills = [];
                    shape.props.strokes = [{
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }
                    }];
                    shape.props.strokeWeight = 2;
                    shape.props.strokeAlign = "INSIDE";
                }
            }
        } 

            if (item.isSelected) {
                node.props = node.props || {};
                node.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
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
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;

        return root;
    }
}

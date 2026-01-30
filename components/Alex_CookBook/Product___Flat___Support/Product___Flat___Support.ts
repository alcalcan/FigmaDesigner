import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Product___Flat___Support_assets_icon_Background_I92_669583_3036_2313_svg_20x24 from "./assets/Product___Flat___Support_assets_icon_Background_I92_669583_3036_2313_svg_20x24.svg";
import SVG_Product___Flat___Support_assets_icon_Corner_I92_669583_3036_2314_svg_6x6 from "./assets/Product___Flat___Support_assets_icon_Corner_I92_669583_3036_2314_svg_6x6.svg";


export class Product___Flat___Support extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "Product / Flat / Support",
    "props": {
      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
      "isMask": false, "maskType": "ALPHA", "clipsContent": false,
      "strokeWeight": 0.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
      "strokeTopWeight": 0.5, "strokeRightWeight": 0.5, "strokeBottomWeight": 0.5, "strokeLeftWeight": 0.5,
      "layoutMode": "NONE",
      "fills": [],
      "strokes": [],
      "effects": [],
      "cornerRadius": 0
    },
    "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": false },
    "children": [
      {
        "type": "VECTOR",
        "shouldFlatten": true,
        "name": "Background",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA",
          "strokeWeight": 0.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "x": 2.000009775161743, "y": 0,
          "strokes": [],
          "effects": []
        },
        "layoutProps": {
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 20, "height": 24,
          "relativeTransform": [[1, 0, 2.000009775161743], [0, 1, 0]]
        },
        "svgContent": SVG_Product___Flat___Support_assets_icon_Background_I92_669583_3036_2313_svg_20x24
      },
      {
        "type": "VECTOR",
        "shouldFlatten": true,
        "name": "Corner",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA",
          "strokeWeight": 0.5, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "x": 15.999982833862305, "y": 0,
          "strokes": [],
          "effects": []
        },
        "layoutProps": {
          "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
          "width": 6, "height": 6,
          "relativeTransform": [[1, 0, 15.999982833862305], [0, 1, 0]]
        },
        "svgContent": SVG_Product___Flat___Support_assets_icon_Corner_I92_669583_3036_2314_svg_6x6
      },
      ...[
                          {
                            "name": "PDF",
                            "fillColor": { "r": 0.8833333253860474, "g": 0.30916666984558105, "b": 0.30916666984558105 },
                            "hasCheckbox": false,
                            "isSelected": true
                          },
                          {
                            "name": "PDF",
                            "fillColor": { "r": 0.8833333253860474, "g": 0.30916666984558105, "b": 0.30916666984558105 },
                            "hasCheckbox": false,
                            "isSelected": true
                          }
                        ].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "OLD Extension File",
          "props": {
            "visible": true, "opacity": 0, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 1, "paddingRight": 3, "paddingBottom": 1, "paddingLeft": 3,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 0.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 0.5, "strokeRightWeight": 0.5, "strokeBottomWeight": 0.5, "strokeLeftWeight": 0.5,
            "x": 1.5, "y": 14.25,
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0.8833333253860474, "g": 0.30916666984558105, "b": 0.30916666984558105 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0.5
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 21, "height": 8,
            "relativeTransform": [[1, 0, 1.5], [0, 1, 14.25]]
          },
          "children": [
            {
              "type": "TEXT",
              "name": "PDF",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0.5, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "layoutAlign": "INHERIT", "layoutGrow": 1,
                "characters": "PDF", "fontSize": 5,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
                "paragraphSpacing": 5, "paragraphIndent": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PERCENT", "value": 129.99999523162842 },
                "font": { "family": "Roboto", "style": "Bold" }
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 10, "height": 6,
                "relativeTransform": [[1, 0, 5.5], [0, 1, 1]]
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
  };

        const root = await this.renderDefinition(structure);
        
        // Final positioning
        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";


// SVG Assets
import SVG_checkbox_Synth_Path_0 from "./assets/checkbox_Synth_Path_0.svg";
import SVG_checkbox_Synth_Path_1 from "./assets/checkbox_Synth_Path_1.svg";
import SVG_Checkmark from "./assets/checkmark.svg";


export class checkbox extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "checkbox",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 8,
        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
        "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
        "fills": [],
        "strokes": [],
        "effects": [],
        "cornerRadius": 0
      },
      "layoutProps": { "width": 296, "height": 32, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "FRAME",
          "name": "Checkbox",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "layoutMode": "NONE",
            "fills": [
              {
                "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 20, "height": 20,
            "relativeTransform": [[1, 0, 8], [0, 1, 6]]
          },
          "children": [
            {
              "type": "BOOLEAN_OPERATION",
              "booleanOperation": "EXCLUDE",
              "name": "Shape",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 2.5, "y": 2.5,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.101960, "g": 0.192156, "b": 0.235294 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 15, "height": 15,
                "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Path",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 2.5, "y": 2.5,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0, "g": 0, "b": 0 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0,
                    "vectorPaths": [
                      {
                        "windingRule": "EVENODD",
                        "data": "M 1.666666 0 L 13.333333 0 C 14.253807 0 15 0.746191 15 1.666666 L 15 13.333333 C 15 14.253807 14.253807 15 13.333333 15 L 1.666666 15 C 0.746191 15 0 14.253807 0 13.333333 L 0 1.666666 C 0 0.746191 0.746191 0 1.666666 0 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 15, "height": 15,
                    "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]]
                  },
                  "svgContent": SVG_checkbox_Synth_Path_0
                },
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Path",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 4.166666, "y": 4.166656,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0, "g": 0, "b": 0 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0,
                    "vectorPaths": [
                      {
                        "windingRule": "EVENODD",
                        "data": "M 0 0 L 0 11.666666 L 11.666666 11.666666 L 11.666666 0 L 0 0 Z"
                      }
                    ]
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 11.666666, "height": 11.666666,
                    "relativeTransform": [[1, 0, 4.166666], [0, 1, 4.166656]]
                  },
                  "svgContent": SVG_checkbox_Synth_Path_1
                }
              ]
            }
          ]
        },
        {
          "type": "TEXT",
          "name": "Filter name",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "characters": "Item 1", "fontSize": 16,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
            "paragraphSpacing": 0, "paragraphIndent": 0,
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0.101960, "g": 0.192156, "b": 0.235294 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "letterSpacing": { "unit": "PIXELS", "value": 0 },
            "lineHeight": { "unit": "PIXELS", "value": 24 },
            "font": { "family": "Open Sans", "style": "Regular" }
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "height": 24,
            "relativeTransform": [[1, 0, 32], [0, 1, 4]]
          }
        }
      ]
    };

    // Apply potential background fill (e.g. for selection rows)
    if (props.hoverState && (!props.fills || (Array.isArray(props.fills) && props.fills.length === 0))) {
      structure.props = {
        ...structure.props,
        fills: [{
          type: "SOLID",
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
          color: { r: 0.945098, g: 0.952941, b: 0.972549 },
          boundVariables: {}
        }]
      };
    } else if (props.fills && Array.isArray(props.fills)) {
      structure.props = { ...structure.props, fills: props.fills };
    }

    // Allow generic prop overrides
    structure.props = { ...structure.props, ...props };

    // Handle Hug Contents
    if (props.hugContents) {
      structure.props.primaryAxisSizingMode = "AUTO";
      structure.props.counterAxisSizingMode = "AUTO";
      if (structure.layoutProps) {
        delete (structure.layoutProps as any).width;
        delete (structure.layoutProps as any).height;
      }
    }

    const root = await this.renderDefinition(structure);

    // Update Label if provided
    if (props.characterOverride !== undefined) {
      const text = (root as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
      if (text) {
        await figma.loadFontAsync(text.fontName as FontName);
        text.characters = props.characterOverride;
      }
    }

    // Handle Checked State
    if (props.checked !== undefined) {
      const wrapper = (root as FrameNode).children.find(n => n.name === "Checkbox") as FrameNode;
      const shape = wrapper?.findOne(n => n.name === "Shape" && n.type === "BOOLEAN_OPERATION") as BooleanOperationNode;

      if (shape && wrapper) {
        if (props.checked) {
          // Solid background for checked state
          shape.fills = [{
            type: "SOLID",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            color: { r: 0, g: 0.635, b: 0.588 }, // Brand green
            boundVariables: {}
          }];
          // Add border to fix "stroke problem"
          shape.strokes = [{
            type: "SOLID",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            color: { r: 0, g: 0.5, b: 0.45 }, // Darker green for stroke
            boundVariables: {}
          }];
          shape.strokeWeight = 1;

          // Hide the inner "hole" path (it's the second child)
          if (shape.children.length > 1) {
            shape.children[1].visible = false;
          }

          // Add Checkmark
          const checkmark = figma.createNodeFromSvg(SVG_Checkmark);
          const flatCheck = figma.flatten([checkmark]);
          flatCheck.name = "Checkmark_Icon";
          wrapper.appendChild(flatCheck);

          // Center in 20x20 wrapper (Icon is 8x7)
          flatCheck.x = (20 - 8) / 2;
          flatCheck.y = (20 - 7) / 2;
        } else {
          // Hollow for unchecked state
          shape.fills = [{
            type: "SOLID",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            color: { r: 0.102, g: 0.192, b: 0.235 }, // Blue
            boundVariables: {}
          }];
          shape.strokes = []; // No stroke for unchecked (it has the hole)
          if (shape.children.length > 1) {
            shape.children[1].visible = true;
          }
        }
      }
    }

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

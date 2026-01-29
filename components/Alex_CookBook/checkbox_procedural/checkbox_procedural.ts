import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import SVG_checkbox_procedural_Synth_Path_0 from "./assets/checkbox_procedural_Synth_Path_0.svg";
import SVG_checkbox_procedural_Synth_Path_1 from "./assets/checkbox_procedural_Synth_Path_1.svg";


export class checkbox_procedural extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "checkbox_procedural",
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
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "layoutMode": "NONE",
            "fills": [],
            "strokes": [],
            "cornerRadius": 4
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 20, "height": 20,
            "relativeTransform": [[1, 0, 8], [0, 1, 6]]
          },
          "children": [
            {
              "type": "RECTANGLE",
              "name": "Box",
              "props": {
                "visible": true,
                "cornerRadius": 2,
                "fills": [],
                "strokes": [
                  {
                    "type": "SOLID",
                    "color": { "r": 0.10196, "g": 0.19216, "b": 0.23529 }
                  }
                ],
                "strokeWeight": 1.5,
                "strokeAlign": "INSIDE"
              },
              "layoutProps": {
                "parentIsAutoLayout": false,
                "layoutPositioning": "AUTO",
                "width": 16, "height": 16,
                "relativeTransform": [[1, 0, 2], [0, 1, 2]]
              }
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
            "characters": "UEFA Football Development", "fontSize": 16,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
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
            "lineHeight": { "unit": "PIXELS", "value": 24 },
            "font": { "family": "Open Sans", "style": "Regular" }
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 264, "height": 24,
            "relativeTransform": [[1, 0, 32], [0, 1, 4]]
          }
        }
      ]
    };

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
      const box = (root as FrameNode).children.find(n => n.name === "Checkbox") as FrameNode;
      const rect = box?.children.find(n => n.name === "Box") as RectangleNode;

      if (rect) {
        if (props.checked) {
          rect.fills = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
          rect.strokes = [];
        } else {
          rect.fills = [];
          rect.strokes = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
          rect.strokeWeight = 1.5;
        }
      }

      if (props.checked && box) {
        const checkSvg = `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4L4 6.5L8.5 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        const checkNode = figma.createNodeFromSvg(checkSvg);
        checkNode.name = "CheckIcon";
        box.appendChild(checkNode);
        checkNode.x = (box.width - checkNode.width) / 2;
        checkNode.y = (box.height - checkNode.height) / 2;
      }
    }

    // Final positioning
    root.x = props.x;
    root.y = props.y;

    return root;
  }
}

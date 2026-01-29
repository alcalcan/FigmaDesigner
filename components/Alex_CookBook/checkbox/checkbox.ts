import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import SVG_checkbox_Synth_Path_0 from "./assets/checkbox_Synth_Path_0.svg";
import SVG_checkbox_Synth_Path_1 from "./assets/checkbox_Synth_Path_1.svg";


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
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "layoutMode": "NONE",
            "fills": [],
            "strokes": [],
            "cornerRadius": 4
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 20, "height": 20
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
            "characters": "UEFA Football Development", "fontSize": 14,
            "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0.10196, "g": 0.19216, "b": 0.23529 }
              }
            ],
            "font": { "family": "Open Sans", "style": "Regular" },
            "layoutGrow": 1
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 264, "height": 24
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
      // Use name-based search with type check
      const box = (root as FrameNode).children.find(n => n.name === "Checkbox") as FrameNode;
      const rect = box?.children.find(n => n.name === "Box" && n.type === "RECTANGLE") as RectangleNode;

      if (rect) {
        if (props.checked) {
          // Solid fill, no stroke
          rect.fills = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
          rect.strokes = [];
        } else {
          // No fill, solid stroke
          rect.fills = [];
          rect.strokes = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
          rect.strokeWeight = 1.5;
        }
      } else {
        console.warn(`[checkbox] Could not find Box rectangle in ${props.characterOverride || 'unnamed'} checkbox`);
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
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;

    return root;
  }
}

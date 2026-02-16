import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { Lucide_check } from "../../index";

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
          "name": "Checkbox Container",
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
          "children": []
        },
        {
          "type": "TEXT",
          "name": "Checkbox Label",
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

    // Inner Shell (the actual square box)
    const wrapper = (root as FrameNode).children.find(n => n.name === "Checkbox Container") as FrameNode;
    if (wrapper) {
      // Create the background box
      const box = figma.createRectangle();
      box.name = "Box";
      box.resize(16, 16);
      box.cornerRadius = 2;

      if (props.checked) {
        box.fills = [{ type: "SOLID", color: { r: 0, g: 0.635, b: 0.588 } }]; // Brand green
        box.strokes = [];
      } else {
        box.fills = [];
        box.strokes = [{ type: "SOLID", color: { r: 0.102, g: 0.192, b: 0.235 } }]; // Blue
        box.strokeWeight = 1.5;
      }
      wrapper.appendChild(box);
      box.x = 2;
      box.y = 2;

      // Add Checkmark if checked
      if (props.checked) {
        const checkIcon = new Lucide_check();
        const checkNode = await checkIcon.create({
          width: 12,
          height: 12,
          strokeWeight: 3,
          color: { r: 1, g: 1, b: 1 }
        });
        checkNode.name = "Checkmark Icon";
        wrapper.appendChild(checkNode);
        checkNode.x = 4;
        checkNode.y = 4;
      }
    }

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}


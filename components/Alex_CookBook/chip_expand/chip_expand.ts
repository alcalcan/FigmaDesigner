import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { dropdown_options } from "../dropdown_options/dropdown_options";


// Lucide Icons
import { Lucide_chevron_down } from "../../index";


export class chip_expand extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "chip_expand",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 4, "paddingRight": 8, "paddingBottom": 4, "paddingLeft": 8,
        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "fills": [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
            "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
            "boundVariables": {}
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": (props as any).cornerRadius ?? 8
      },
      "layoutProps": { "width": 117, "height": 32, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "TEXT",
          "name": "Chip Label",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "characters": "Newer first", "fontSize": 14,
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
            "letterSpacing": { "unit": "PIXELS", "value": 0 },
            "lineHeight": { "unit": "PIXELS", "value": 21 },
            "font": { "family": "Open Sans", "style": "Regular" }
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 73, "height": 21,
            "relativeTransform": [[1, 0, 8], [0, 1, 5.5]]
          }
        },
        {
          "type": "FRAME",
          "name": "Expand Icon Area",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "layoutMode": "NONE",
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 24, "height": 24,
            "relativeTransform": [[1, 0, 85], [0, 1, 4]]
          },
          "children": [
            {
              "type": "COMPONENT",
              "component": Lucide_chevron_down,
              "name": "Expand Chevron",
              "props": {
                "width": 12,
                "height": 12,
                "strokeWeight": 1.5,
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 12, "height": 12,
                "relativeTransform": [[1, 0, 6], [0, 1, 6]]
              },
            }
          ]
        }
      ]
    };

    // Add Dropdown if provided in props AND is expanded
    if (props.dropdownOptions && props.expanded) {
      console.log(`[chip_expand] Adding dropdown for ${props.text || 'anonymous'} with ${props.dropdownOptions.length} options`);
      const dropdownChild: any = {
        type: "COMPONENT",
        component: dropdown_options,
        props: {
          options: props.dropdownOptions,
          selectionType: props.selectionType // Pass selectionType if provided
        },
        layoutProps: {
          layoutPositioning: "ABSOLUTE",
          parentIsAutoLayout: true,
          width: 200,
          relativeTransform: [
            [1, 0, 0],   // X translation = 0 (Align with left edge of chip)
            [0, 1, 40]   // Y translation = 40 (Below chip)
          ]
        }
      };
      structure.children?.push(dropdownChild);
    } else if (props.dropdownOptions) {
      console.log(`[chip_expand] Skipping dropdown for ${props.text || 'anonymous'} (expanded=false)`);
    } else {
      console.log(`[chip_expand] No dropdownOptions for ${props.text || 'anonymous'}`);
    }

    const root = await this.renderDefinition(structure);

    // Update Label if provided
    if (props.text !== undefined) {
      const textNode = (root as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
      if (textNode) {
        await figma.loadFontAsync(textNode.fontName as FontName);
        textNode.characters = props.text;
      }
    }

    // Handle Selected state (Background Color)
    // Handle Hover State (Lighter Slate Blue + White Text)
    if (props.hover) {
      // Updated to a lighter slate blue: approximately #455A64
      (root as FrameNode).fills = [{ type: "SOLID", color: { r: 0.270588, g: 0.352941, b: 0.392157 } }];

      const textNode = (root as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
      if (textNode) {
        textNode.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
      }

      const iconNode = (root as FrameNode).findOne(n => n.name === "Expand Chevron");
      if (iconNode && ("findAll" in iconNode)) {
        // Target all vectors inside the expanding icon and change their strokes to white
        const vectors = (iconNode as FrameNode).findAll(n => n.type === "VECTOR") as VectorNode[];
        for (const v of vectors) {
          v.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        }
      }
    }
    // Handle Selected State (Darker Gray + Dark Text)
    else if (props.selected !== undefined && props.selected) {
      // Darker Gray: #E0E4EB (approx r: 0.88, g: 0.89, b: 0.92)
      (root as FrameNode).fills = [{ type: "SOLID", color: { r: 0.878, g: 0.894, b: 0.922 } }];

      // Ensure Text/Icon are dark (default #1A313C approx { r: 0.102, g: 0.192, b: 0.235 })
      const textNode = (root as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
      if (textNode) {
        textNode.fills = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
      }

      const iconNode = (root as FrameNode).findOne(n => n.name === "Expand Chevron");
      if (iconNode && ("findAll" in iconNode)) {
        // Target all vectors inside the expanding icon and change their strokes to dark
        const vectors = (iconNode as FrameNode).findAll(n => n.type === "VECTOR") as VectorNode[];
        for (const v of vectors) {
          v.strokes = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
        }
      }
    }

    // Handle Expanded State (Chevron Rotation)
    if (props.expanded) {
      const vector = (root as FrameNode).findOne(n => n.name === "Expand Chevron" && n.type === "VECTOR") as VectorNode;
      if (vector) {
        vector.rotation = 180;
        vector.x = 6 + vector.width;
        vector.y = 8 + vector.height;
      }
    }

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

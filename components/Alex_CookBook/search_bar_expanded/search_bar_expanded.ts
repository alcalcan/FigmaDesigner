import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { search_bar } from "../search_bar/search_bar";
import { checkbox } from "../checkbox/checkbox";

// Extended interface to support component composition
interface ExtendedNodeDefinition extends NodeDefinition {
  type: "FRAME" | "TEXT" | "VECTOR" | "COMPONENT" | "BOOLEAN_OPERATION" | "RECTANGLE"; // etc
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any; // Class constructor
  // Function to run after creation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postCreate?: (node: SceneNode, props: any) => void | Promise<void>;
  children?: ExtendedNodeDefinition[];
}

export class search_bar_expanded extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {

    // Define Authors
    const authors = [
      { name: "Jamie Oliver", selected: true },
      { name: "Gordon Ramsay", selected: false },
      { name: "Nigella Lawson", selected: false },
      { name: "Yotam Ottolenghi", selected: true }
    ];

    // Define Structure
    const structure: ExtendedNodeDefinition = {
      "type": "COMPONENT",
      "component": search_bar,
      "name": "search_bar_expanded",
      "props": props,
      "children": [
        {
          "type": "FRAME",
          "name": "Dropdown Menu",
          "props": {
            "visible": true, "opacity": 1, "blendMode": "PASS_THROUGH",
            "layoutMode": "VERTICAL", "itemSpacing": 4,
            "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
            "fills": [
              {
                "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 }
              }
            ],
            "strokes": [
              {
                "type": "SOLID",
                "color": { "r": 0.9, "g": 0.92, "b": 0.94 }
              }
            ],
            "effects": [
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 },
                "offset": { "x": 0, "y": 4 },
                "radius": 12
              }
            ],
            "cornerRadius": 12
          },
          "layoutProps": { "width": 200, "layoutPositioning": "ABSOLUTE", "parentIsAutoLayout": true },
          "children": authors.map(auth => ({
            type: "COMPONENT",
            component: checkbox,
            props: {
              characterOverride: auth.name,
              checked: auth.selected
            },
            postCreate: async (node: SceneNode, _p: any) => {
              const frame = node as FrameNode;
              frame.name = `Option: ${auth.name}`;

              // Important: Set layoutAlign to STRETCH so it fills the 200px width of the menu
              frame.layoutAlign = "STRETCH";
              frame.counterAxisSizingMode = "FIXED"; // Allow stretching along cross-axis

              // Update Text
              const text = frame.findOne(n => n.type === "TEXT") as TextNode;
              if (text) {
                await figma.loadFontAsync(text.fontName as FontName);
                text.characters = auth.name;
                text.fontSize = 14;
                text.layoutGrow = 1; // Allow text to take up remaining space
              }

              // Update Checkbox State
              const shape = frame.findOne(n => n.name === "Shape") as BooleanOperationNode;
              if (shape && shape.children.length >= 2) {
                shape.children[1].visible = !auth.selected;
              }
            }
          }))
        }
      ],
      "postCreate": (node: SceneNode) => {
        (node as FrameNode).fills = [];
        (node as FrameNode).clipsContent = false;
      }
    };

    const root = await this.renderExtendedDefinition(structure);

    // --- Post-Layout Positioning Logic ---
    const menu = (root as FrameNode).findOne(n => n.name === "Dropdown Menu") as FrameNode;
    // Search bar creates "Chips Container" inside
    const chipsContainer = (root as FrameNode).findOne(n => n.name === "Chips Container") as FrameNode;

    if (menu && chipsContainer) {
      const authorChip = chipsContainer.children.find(c => {
        const t = (c as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
        return t && t.characters === "Author";
      });

      // Re-apply absolute positioning properties just in case
      menu.layoutPositioning = "ABSOLUTE";

      if (authorChip) {
        // Calculation matches original
        const chipAbsoluteX = chipsContainer.x + authorChip.x;
        menu.x = chipAbsoluteX + authorChip.width - menu.width;
        // Clamping
        if (menu.x < 0) menu.x = 0;
        if (menu.x + menu.width > root.width) menu.x = root.width - menu.width;
      } else {
        menu.x = root.width - menu.width;
      }
      menu.y = root.height;
    }

    return root;
  }

  async renderExtendedDefinition(def: ExtendedNodeDefinition, parent?: BaseNode): Promise<SceneNode> {
    // BaseComponent now handles COMPONENT and postCreate natively!
    return await super.renderDefinition(def, parent);
  }
}

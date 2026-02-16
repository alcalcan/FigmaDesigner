import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { chip_expand } from "../chip_expand/chip_expand";
import { input_field } from "../input_field/input_field";

// SVG Assets - Removed SVG_search_icon as it's now in input_field

export class search_bar extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    // Create child chips first to use their definitions or just instantiate them
    const chip = new chip_expand();

    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "search_bar",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "layoutMode": "HORIZONTAL", "itemSpacing": 16,
        "paddingTop": 16, "paddingRight": 0, "paddingBottom": 16, "paddingLeft": 0,
        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
        "clipsContent": false,
        "fills": [],
        "strokes": []
      },
      "layoutProps": { "width": 1077, "height": 72, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "COMPONENT",
          "component": input_field,
          "name": "Search Input",
          "props": {
            ...props,
            "placeholder": props.placeholder || "Search recipes...",
            "showSearchIcon": true,
            "searchIconPosition": "front",
            "type": "simple"
          },
          "layoutProps": {
            "width": 586,
            "parentIsAutoLayout": true,
            "layoutGrow": 1
          }
        },
        {
          "type": "FRAME",
          "name": "Chips Container",
          "props": {
            "layoutMode": "HORIZONTAL", "itemSpacing": 16,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MAX", "counterAxisAlignItems": "CENTER",
            "clipsContent": false,
            "itemReverseZIndex": true,
            "fills": []
          },
          "layoutProps": { "width": 491, "height": 32, "parentIsAutoLayout": true },
          "children": []
        }
      ]
    };

    const root = await this.renderDefinition(structure);
    const chipsContainer = (root as FrameNode).findOne(n => n.name === "Chips Container") as FrameNode;

    // Use chips from props or defaults
    const chipsConfig = props.chips || [
      { label: "Newer first" },
      { label: "PDF" },
      { label: "Author" },
      { label: "Range date" }
    ];

    for (const chipData of chipsConfig) {
      const chipNode = await chip.create({
        x: 0,
        y: 0,
        ...chipData, // Relay ALL properties (expanded, dropdownOptions, etc.)
        text: chipData.label // text is used in chip_expand for some cases
      });

      const textNode = (chipNode as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
      if (textNode) {
        await figma.loadFontAsync(textNode.fontName as FontName);
        textNode.characters = chipData.label;
      }
      chipsContainer.appendChild(chipNode);
    }

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

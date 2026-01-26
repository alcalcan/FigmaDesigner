import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { chip_expand } from "../chip_expand/chip_expand";

// SVG Assets
import SVG_search_icon from "./assets/search_icon.svg";

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
          "type": "FRAME",
          "name": "Text Field",
          "props": {
            "layoutMode": "VERTICAL", "itemSpacing": 8,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
            "layoutGrow": 1
          },
          "layoutProps": { "width": 586, "height": 40, "parentIsAutoLayout": true },
          "children": [
            {
              "type": "FRAME",
              "name": "Compact",
              "props": {
                "layoutMode": "HORIZONTAL", "itemSpacing": 12,
                "paddingTop": 8, "paddingRight": 12, "paddingBottom": 8, "paddingLeft": 12,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "fills": [],
                "strokes": [
                  {
                    "opacity": 1, "type": "SOLID",
                    "color": { "r": 0.70196, "g": 0.75294, "b": 0.77255 }
                  }
                ],
                "strokeWeight": 1,
                "cornerRadius": 4,
                "layoutAlign": "STRETCH"
              },
              "layoutProps": { "width": 586, "height": 40, "parentIsAutoLayout": true },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Inner",
                  "props": {
                    "layoutMode": "HORIZONTAL", "itemSpacing": 16,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                    "layoutGrow": 1
                  },
                  "layoutProps": { "width": 562, "height": 24, "parentIsAutoLayout": true },
                  "children": [
                    {
                      "type": "TEXT",
                      "name": "Placeholder",
                      "props": {
                        "characters": "Search recipes...", "fontSize": 14,
                        "fills": [
                          {
                            "type": "SOLID",
                            "color": { "r": 0.349, "g": 0.439, "b": 0.482 }
                          }
                        ],
                        "font": { "family": "Open Sans", "style": "Regular" },
                        "layoutGrow": 1
                      },
                      "layoutProps": { "width": 522, "height": 21, "parentIsAutoLayout": true }
                    },
                    {
                      "type": "VECTOR",
                      "name": "Icon",
                      "props": { "visible": true },
                      "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": true },
                      "svgContent": SVG_search_icon
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "FRAME",
          "name": "Chips Container",
          "props": {
            "layoutMode": "HORIZONTAL", "itemSpacing": 16,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 16,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MAX", "counterAxisAlignItems": "CENTER",
            "fills": []
          },
          "layoutProps": { "width": 491, "height": 32, "parentIsAutoLayout": true },
          "children": []
        }
      ]
    };

    const root = await this.renderDefinition(structure);
    const chipsContainer = (root as FrameNode).findOne(n => n.name === "Chips Container") as FrameNode;

    // Manually add chips using the chip_expand component
    const chipLabels = ["Newer first", "PDF", "Author", "Range date"];
    for (const label of chipLabels) {
      const chipNode = await chip.create({ x: 0, y: 0 });
      const textNode = (chipNode as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
      if (textNode) {
        await figma.loadFontAsync(textNode.fontName as FontName);
        textNode.characters = label;
      }
      chipsContainer.appendChild(chipNode);
    }

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

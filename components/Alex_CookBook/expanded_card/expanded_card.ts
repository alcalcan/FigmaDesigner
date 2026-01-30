import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// SVG Assets
import SVG_Chevron from "./assets/SubSection_assets_icon_Vector_I1174_3092_5698_23_svg_12x7_400000095367432.svg";
import { checkbox } from "../checkbox/checkbox";

export interface ExpandedCardItem {
  name: string;
  isSelected?: boolean;
  isHovered?: boolean;
}

export interface ExpandedCardProps extends ComponentProps {
  headerTitle?: string;
  badgeLabel?: string;
  items?: ExpandedCardItem[];
}

export class expanded_card extends BaseComponent {
  async create(props: ExpandedCardProps): Promise<SceneNode> {
    // Data for the list items
    const defaultItems: ExpandedCardItem[] = [
      { name: "Anti-Doping, Medical and Health", isSelected: true, isHovered: false }, // Selected (Checked, No BG)
      { name: "Communication, PR and Media", isSelected: false, isHovered: true },    // Hovered (Unchecked, Has BG)
      { name: "Event and Volunteer Management", isSelected: false, isHovered: false },
      { name: "Football and Social Responsibility", isSelected: false, isHovered: false },
      { name: "Football Development", isSelected: false, isHovered: false },
      { name: "Governance, Organisation of Football and Sport", isSelected: false, isHovered: false },
      { name: "Innovation", isSelected: false, isHovered: false },
      { name: "Leadership", isSelected: false, isHovered: false },
      { name: "Marketing Sponsorship", isSelected: false, isHovered: false },
      { name: "Legal and Integrity", isSelected: false, isHovered: false }
    ];

    const items = props.items || defaultItems;
    const headerTitle = props.headerTitle || "Subject";
    const badgeLabel = props.badgeLabel || "Subjects";
    const count = items.length;

    // Chunk items into pairs for columns
    const columns: (typeof items)[] = [];
    for (let i = 0; i < items.length; i += 2) {
      columns.push(items.slice(i, i + 2));
    }

    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "expanded_card",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "layoutMode": "VERTICAL", "itemSpacing": 24,
        "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO", // HUG Height & Width (Vertical Frame)
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
        "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
        "effects": [
          {
            "type": "DROP_SHADOW", "visible": true, "blendMode": "NORMAL",
            "color": { "r": 0, "g": 0, "b": 0, "a": 0.12 },
            "offset": { "x": 0, "y": 2 }, "radius": 6, "showShadowBehindNode": true
          }
        ],
        "cornerRadius": 8,
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokes": []
      },
      "layoutProps": { "parentIsAutoLayout": false }, // Removed Fixed Dimensions
      "children": [
        // Header
        {
          "type": "FRAME",
          "name": "Header",
          "props": {
            "layoutMode": "HORIZONTAL", "itemSpacing": 24,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO", // FILL Width, HUG Height
            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
            "layoutAlign": "STRETCH", // FILL Width
            "fills": []
          },
          "layoutProps": { "parentIsAutoLayout": true, "height": 40 },
          "children": [
            {
              "type": "TEXT",
              "name": "Subject",
              "props": {
                "characters": headerTitle, "fontSize": 20,
                "fills": [{ "type": "SOLID", "color": { "r": 0.102, "g": 0.192, "b": 0.235 } }],
                "font": { "family": "Open Sans", "style": "SemiBold" },
                "lineHeight": { "unit": "PIXELS", "value": 25 },
                "layoutGrow": 1
              },
              "layoutProps": { "parentIsAutoLayout": true }
            },
            // Badge
            {
              "type": "FRAME",
              "name": "Badge",
              "layoutProps": { "parentIsAutoLayout": true },
              "props": {
                "layoutMode": "HORIZONTAL", "itemSpacing": 8,
                "paddingTop": 4, "paddingBottom": 4, "paddingLeft": 16, "paddingRight": 16,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
                "strokes": [{ "type": "SOLID", "color": { "r": 0, "g": 0.635, "b": 0.588 } }],
                "cornerRadius": 100
              },
              "children": [
                {
                  "type": "TEXT",
                  "name": "Label",
                  "props": {
                    "characters": badgeLabel, "fontSize": 14,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.102, "g": 0.192, "b": 0.235 } }],
                    "font": { "family": "Open Sans", "style": "Regular" },
                    "lineHeight": { "unit": "PERCENT", "value": 130 }
                  },
                  "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                  "type": "TEXT",
                  "name": "Count",
                  "props": {
                    "characters": count.toString(), "fontSize": 16,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.102, "g": 0.192, "b": 0.235 } }],
                    "font": { "family": "Open Sans", "style": "Bold" },
                    "lineHeight": { "unit": "PERCENT", "value": 130 }
                  },
                  "layoutProps": { "parentIsAutoLayout": true }
                }
              ]
            },
            // Chevron Button
            {
              "type": "FRAME",
              "name": "Expand Button",
              "props": {
                "layoutMode": "HORIZONTAL",
                "paddingTop": 8, "paddingBottom": 8, "paddingLeft": 8, "paddingRight": 8,
                "fills": [{ "type": "SOLID", "color": { "r": 0.945, "g": 0.953, "b": 0.973 } }],
                "cornerRadius": 100
              },
              "layoutProps": { "parentIsAutoLayout": true, "width": 40, "height": 40 },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Icon Wrapper",
                  "props": {
                    "layoutMode": "NONE", "clipsContent": true, "fills": []
                  },
                  "layoutProps": { "parentIsAutoLayout": true, "width": 24, "height": 24 },
                  "children": [
                    {
                      "type": "VECTOR",
                      "name": "Vector",
                      "shouldFlatten": true,
                      "svgContent": SVG_Chevron,
                      "layoutProps": {
                        "parentIsAutoLayout": false,
                        "width": 12, "height": 7.4,
                        "relativeTransform": [[1, 0, 6], [0, 1, 8]]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        // Items Container
        {
          "type": "FRAME",
          "name": "Items Container",
          "props": {
            "layoutMode": "HORIZONTAL", "itemSpacing": 32,
            "layoutAlign": "INHERIT", // Changed from MIN to INHERIT (valid value)
            "primaryAxisSizingMode": "AUTO", // HUG Width
            "counterAxisSizingMode": "AUTO", // HUG Height
            "fills": []
          },
          "layoutProps": { "parentIsAutoLayout": true },
          "children": columns.map((colItems, index) => ({
            "type": "FRAME",
            "name": `Column ${index + 1}`,
            "props": {
              "layoutMode": "VERTICAL", "itemSpacing": 8,
              // Removed layoutGrow: 1
              "primaryAxisSizingMode": "AUTO", // Width Auto
              "counterAxisSizingMode": "AUTO", // Height Auto
              "fills": []
            },
            "layoutProps": { "parentIsAutoLayout": true },
            "children": colItems.map(item => this.createItemNode(item))
          }))
        }
      ]
    };

    const root = await this.renderDefinition(structure);
    // Position
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }

  createItemNode(item: { name: string, isSelected?: boolean, isHovered?: boolean }): NodeDefinition {
    return {
      "type": "COMPONENT",
      "name": "Item Row",
      "component": checkbox,
      "props": {
        "characterOverride": item.name,
        "checked": item.isSelected,
        "hugContents": true,
        "hoverState": item.isHovered
      },
      "layoutProps": {
        "parentIsAutoLayout": true,
        "height": 24,
        "width": undefined, // Auto width
        "layoutAlign": "INHERIT"
      }
    };
  }
}

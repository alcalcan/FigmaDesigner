import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

// SVG Assets
import SVG_Chevron from "./assets/SubSection_assets_icon_Vector_I1174_3092_5698_23_svg_12x7_400000095367432.svg";
import SVG_Checkbox_Box from "./assets/SubSection_Synth_Path_1.svg";
import SVG_Checkbox_Check from "./assets/SubSection_Synth_Path_2.svg";

export class SubSection extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    // Data for the list items
    const items = [
      { name: "Anti-Doping, Medical and Health", isSelected: false },
      { name: "Communication, PR and Media", isSelected: false },
      { name: "Event and Volunteer Management", isSelected: false },
      { name: "Football and Social Responsibility", isSelected: false },
      { name: "Football Development", isSelected: false },
      { name: "Governance, Organisation of Football and Sport", isSelected: false },
      { name: "Innovation", isSelected: false },
      { name: "Leadership", isSelected: false },
      { name: "Marketing Sponsorship", isSelected: false },
      { name: "Legal and Integrity", isSelected: false }
    ];

    // Chunk items into pairs for columns
    const columns: any[][] = [];
    for (let i = 0; i < items.length; i += 2) {
      columns.push(items.slice(i, i + 2));
    }

    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "SubSection",
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
                "characters": "Subject", "fontSize": 20,
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
                    "characters": "Subjects", "fontSize": 14,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.102, "g": 0.192, "b": 0.235 } }],
                    "font": { "family": "Manrope", "style": "Regular" },
                    "lineHeight": { "unit": "PERCENT", "value": 130 }
                  },
                  "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                  "type": "TEXT",
                  "name": "Count",
                  "props": {
                    "characters": "0", "fontSize": 16,
                    "fills": [{ "type": "SOLID", "color": { "r": 0.102, "g": 0.192, "b": 0.235 } }],
                    "font": { "family": "Manrope", "style": "Bold" },
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
            "layoutAlign": "MIN", // Changed/Removed STRETCH. Using MIN or INHERIT.
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

  createItemNode(item: { name: string, isSelected: boolean }): NodeDefinition {
    const textColor = { "r": 0.102, "g": 0.192, "b": 0.235 };
    const selectedFill = { "r": 0.94, "g": 0.95, "b": 0.97 };

    return {
      "type": "FRAME",
      "name": "Item Row",
      "props": {
        "layoutMode": "HORIZONTAL", "itemSpacing": 4,
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
        "fills": item.isSelected ? [{ "type": "SOLID", "color": selectedFill }] : [],
        "paddingTop": 0, "paddingBottom": 0,
        "primaryAxisSizingMode": "AUTO", // Width Auto
        // Removed layoutAlign: STRETCH
      },
      "layoutProps": { "parentIsAutoLayout": true, "height": 24 },
      "children": [
        // Checkbox
        {
          "type": "FRAME",
          "name": "Checkbox",
          "props": {
            "layoutMode": "NONE", "fills": []
          },
          "layoutProps": { "parentIsAutoLayout": true, "width": 20, "height": 20 },
          "children": [
            {
              "type": "BOOLEAN_OPERATION",
              "booleanOperation": "EXCLUDE",
              "name": "Shape",
              "props": {
                "x": 2.5, "y": 2.5,
                "fills": item.isSelected
                  ? [{ "type": "SOLID", "color": textColor }] // Filled when selected
                  : [],
                "strokes": !item.isSelected
                  ? [{ "type": "SOLID", "color": textColor }] // Stroked when not selected
                  : [],
                "strokeWeight": !item.isSelected ? 2 : 0,
                "strokeAlign": "INSIDE"
              },
              "layoutProps": { "parentIsAutoLayout": false, "width": 15, "height": 15 },
              "children": [
                // Box path (Child 0)
                {
                  "type": "VECTOR",
                  "name": "Box",
                  "svgContent": SVG_Checkbox_Box,
                  "props": {
                    "fills": [{ "type": "SOLID", "color": { r: 0, g: 0, b: 0 } }],
                    "strokeWeight": 0
                  },
                  "layoutProps": { "parentIsAutoLayout": false, "width": 15, "height": 15 }
                },
                // Checkmark path (Child 1)
                {
                  "type": "VECTOR",
                  "name": "Checkmark",
                  "svgContent": SVG_Checkbox_Check,
                  "props": {
                    "visible": !!item.isSelected,
                    "fills": [{ "type": "SOLID", "color": { r: 0, g: 0, b: 0 } }],
                    "strokeWeight": 0,
                    "x": 1.66, "y": 1.66
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false,
                    "width": 11.66, "height": 11.66
                  }
                }
              ]
            }
          ]
        },
        // Text
        {
          "type": "TEXT",
          "name": "Label",
          "props": {
            "characters": item.name, "fontSize": 16,
            "fills": [{ "type": "SOLID", "color": textColor }],
            "font": { "family": "Open Sans", "style": "Regular" },
            "lineHeight": { "unit": "PIXELS", "value": 24 }
          },
          "layoutProps": { "parentIsAutoLayout": true }
        }
      ]
    };
  }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// SVG Assets
import SVG_timer_icon from "./assets/timer_icon.svg";
import SVG_star_icon from "./assets/star_icon.svg";

export class recipe_card extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "recipe_card",
          "props": {
            "visible": true, "opacity": 1,
            "layoutMode": "VERTICAL", "itemSpacing": 16,
            "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
            "fills": [
              {
                "opacity": 1, "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 }
              }
            ],
            "cornerRadius": 12,
            "effects": [
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 },
                "offset": { "x": 0, "y": 4 },
                "radius": 12,
                "showShadowBehindNode": true
              }
            ]
          },
          "layoutProps": { "width": 340, "height": 400, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "Image Container",
              "props": {
                "layoutMode": "NONE",
                "fills": [
                  {
                    "opacity": 1, "type": "SOLID",
                    "color": { "r": 0.9, "g": 0.9, "b": 0.9 }
                  }
                ],
                "cornerRadius": 8,
                "layoutAlign": "STRETCH"
              },
              "layoutProps": { "width": 308, "height": 180, "parentIsAutoLayout": true }
            },
            {
              "type": "FRAME",
              "name": "Content Container",
              "props": {
                "layoutMode": "VERTICAL", "itemSpacing": 8,
                "layoutAlign": "STRETCH",
                "fills": []
              },
              "layoutProps": { "width": 308, "height": 100, "parentIsAutoLayout": true },
              "children": [
                {
                  "type": "TEXT",
                  "name": "Category",
                  "props": {
                    "characters": (props.category || "BREAKFAST").toUpperCase(), "fontSize": 12,
                    "fills": [
                      {
                        "type": "SOLID",
                        "color": { "r": 0.36, "g": 0.48, "b": 0.54 }
                      }
                    ],
                    "font": { "family": "Open Sans", "style": "Bold" }
                  },
                  "layoutProps": { "width": 308, "height": 16, "parentIsAutoLayout": true }
                },
                {
                  "type": "TEXT",
                  "name": "Title",
                  "props": {
                    "characters": props.title || "Avocado Toast", "fontSize": 20,
                    "fills": [
                      {
                        "type": "SOLID",
                        "color": { "r": 0.1, "g": 0.19, "b": 0.24 }
                      }
                    ],
                    "font": { "family": "Open Sans", "style": "Bold" }
                  },
                  "layoutProps": { "width": 308, "height": 24, "parentIsAutoLayout": true }
                },
                {
                  "type": "TEXT",
                  "name": "Description",
                  "props": {
                    "characters": props.description || "Freshly smashed avocado on sourdough bread with a touch of sea salt and chili flakes.", "fontSize": 14,
                    "fills": [
                      {
                        "type": "SOLID",
                        "color": { "r": 0.39, "g": 0.48, "b": 0.52 }
                      }
                    ],
                    "font": { "family": "Open Sans", "style": "Regular" }
                  },
                  "layoutProps": { "width": 308, "height": 40, "parentIsAutoLayout": true }
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "Footer",
              "props": {
                "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                "layoutMode": "HORIZONTAL",
                "layoutAlign": "STRETCH",
                "fills": []
              },
              "layoutProps": { "width": 308, "height": 24, "parentIsAutoLayout": true },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Time Info",
                  "props": {
                    "layoutMode": "HORIZONTAL", "itemSpacing": 6,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                    "counterAxisAlignItems": "CENTER",
                    "fills": []
                  },
                  "layoutProps": { "width": 100, "height": 24, "parentIsAutoLayout": true },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Timer Icon",
                      "props": { "visible": true },
                      "layoutProps": { "width": 18, "height": 18, "parentIsAutoLayout": true },
                      "svgContent": SVG_timer_icon
                    },
                    {
                      "type": "TEXT",
                      "name": "Time",
                      "props": {
                        "characters": props.time || "15 mins", "fontSize": 14,
                        "fills": [
                          {
                            "type": "SOLID",
                            "color": { "r": 0.36, "g": 0.48, "b": 0.54 }
                          }
                        ],
                        "font": { "family": "Open Sans", "style": "SemiBold" }
                      },
                      "layoutProps": { "width": 60, "height": 20, "parentIsAutoLayout": true }
                    }
                  ]
                },
                {
                  "type": "FRAME",
                  "name": "Difficulty Info",
                  "props": {
                    "layoutMode": "HORIZONTAL", "itemSpacing": 6,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                    "counterAxisAlignItems": "CENTER",
                    "fills": []
                  },
                  "layoutProps": { "width": 80, "height": 24, "parentIsAutoLayout": true },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Difficulty Icon",
                      "props": { "visible": true },
                      "layoutProps": { "width": 18, "height": 18, "parentIsAutoLayout": true },
                      "svgContent": SVG_star_icon
                    },
                    {
                      "type": "TEXT",
                      "name": "Difficulty",
                      "props": {
                        "characters": props.difficulty || "Easy", "fontSize": 14,
                        "fills": [
                          {
                            "type": "SOLID",
                            "color": { "r": 0.36, "g": 0.48, "b": 0.54 }
                          }
                        ],
                        "font": { "family": "Open Sans", "style": "SemiBold" }
                      },
                      "layoutProps": { "width": 40, "height": 20, "parentIsAutoLayout": true }
                    }
                  ]
                }
              ]
            }
          ]
        };

        const root = await this.renderDefinition(structure);

        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

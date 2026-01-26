import { BaseComponent, NodeDefinition, ComponentProps } from "../../BaseComponent";
import SVG_user_check from "./assets/user_check.svg";

interface UserProfileProps extends ComponentProps {
    name: string;
    role: string;
    avatarUrl?: string; // Assumed to be base64 string or imageHash
    isFollowing: boolean;
}

export class user_profile_card extends BaseComponent {
    async create(props: UserProfileProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "User Profile Card",
          "props": {
            "layoutMode": "VERTICAL", "itemSpacing": 16,
            "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
            "cornerRadius": 16,
            "fills": [
              {
                "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 }
              }
            ],
            "effects": [
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 },
                "offset": { "x": 0, "y": 4 },
                "radius": 12,
                "spread": 0,
                "showShadowBehindNode": true
              }
            ]
          },
          "layoutProps": { "width": 320, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "Header",
              "props": {
                "layoutMode": "HORIZONTAL", "itemSpacing": 12,
                "counterAxisAlignItems": "CENTER",
                "counterAxisSizingMode": "AUTO",
                "fills": []
              },
              "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Avatar",
                  "props": { "cornerRadius": 40, "fills": props.avatarUrl
                                    ? [{ type: "IMAGE", assetRef: props.avatarUrl, scaleMode: "FILL" }]
                                    : [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }] },
                  "layoutProps": { "width": 48, "height": 48, "parentIsAutoLayout": true }
                },
                {
                  "type": "FRAME",
                  "name": "Details",
                  "props": {
                    "layoutMode": "VERTICAL", "itemSpacing": 2,
                    "primaryAxisSizingMode": "AUTO",
                    "fills": []
                  },
                  "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 },
                  "children": [
                    {
                      "type": "TEXT",
                      "name": "Name",
                      "props": {
                        "characters": props.name || "Anonymous User", "fontSize": 16,
                        "font": { "family": "Inter", "style": "Bold" },
                        "textAutoResize": "HEIGHT",
                        "fills": [
                          {
                            "type": "SOLID",
                            "color": { "r": 0.1, "g": 0.1, "b": 0.1 }
                          }
                        ]
                      },
                      "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    },
                    {
                      "type": "TEXT",
                      "name": "Role",
                      "props": {
                        "characters": props.role || "Member", "fontSize": 13,
                        "font": { "family": "Inter", "style": "Regular" },
                        "textAutoResize": "HEIGHT",
                        "fills": [
                          {
                            "type": "SOLID",
                            "color": { "r": 0.5, "g": 0.5, "b": 0.5 }
                          }
                        ]
                      },
                      "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    }
                  ]
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "Follow Button",
              "props": {
                "layoutMode": "HORIZONTAL", "itemSpacing": 8,
                "paddingTop": 10, "paddingRight": 16, "paddingBottom": 10, "paddingLeft": 16,
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                "primaryAxisSizingMode": "AUTO",
                "cornerRadius": 8,
                "fills": !!props.isFollowing
                            ? [{ type: "SOLID", color: { r: 0.95, g: 0.95, b: 0.95 } }]
                            : [{ type: "SOLID", color: { r: 0, g: 0.47, b: 1 } }]
              },
              "layoutProps": { "parentIsAutoLayout": true },
              "children": [
                {
                  "type": "VECTOR",
                  "name": "Icon",
                  "svgContent": SVG_user_check,
                  "shouldFlatten": true,
                  "layoutProps": { "width": 14, "height": 14, "parentIsAutoLayout": true },
                  "props": {
                    "visible": !!props.isFollowing,
                    "fills": [
                      {
                        "type": "SOLID",
                        "color": { "r": 0.2, "g": 0.2, "b": 0.2 }
                      }
                    ]
                  }
                },
                {
                  "type": "TEXT",
                  "name": "Label",
                  "props": {
                    "characters": !!props.isFollowing ? "Following" : "Follow", "fontSize": 14,
                    "font": { "family": "Inter", "style": "Medium" },
                    "fills": !!props.isFollowing
                                    ? [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }]
                                    : [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]
                  },
                  "layoutProps": { "parentIsAutoLayout": true }
                }
              ]
            }
          ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

import { BaseComponent, NodeDefinition, ComponentProps } from "../../BaseComponent";

/**
 * Props for the Social Profile Card
 * @param name - The user's full name
 * @param handle - The @username
 * @param avatarUrl - URL for the profile image
 * @param bio - Short description text
 * @param followerCount - Number of followers
 */
interface ProfileProps extends ComponentProps {
    name: string;
    handle: string;
    avatarUrl: string;
    bio: string;
    followerCount: string;
}

export class social_profile_card extends BaseComponent {
    async create(props: ProfileProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Profile Card",
            "props": {
                "layoutMode": "VERTICAL", "itemSpacing": 16,
                "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "cornerRadius": 20,
                "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
                "effects": [
                    {
                        "type": "DROP_SHADOW",
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.08 },
                        "offset": { "x": 0, "y": 4 },
                        "radius": 20,
                        "spread": 0,
                        "visible": true
                    }
                ]
            },
            "layoutProps": { "width": 340, "parentIsAutoLayout": false },
            "children": [
                {
                    "type": "FRAME",
                    "name": "Header",
                    "props": {
                        "layoutMode": "HORIZONTAL", "itemSpacing": 16,
                        "counterAxisAlignItems": "CENTER",
                        "fills": []
                    },
                    "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true },
                    "children": [
                        {
                            "type": "FRAME",
                            "name": "Avatar",
                            "props": {
                                "cornerRadius": 50,
                                "fills": props.avatarUrl
                                    ? [{ "type": "IMAGE", "assetRef": props.avatarUrl, "scaleMode": "FILL" }]
                                    : [{ "type": "SOLID", "color": { "r": 0.96, "g": 0.96, "b": 0.98 } }],
                                "strokes": [{ "type": "SOLID", "color": { "r": 0, "g": 0, "b": 0 }, "opacity": 0.05 }]
                            },
                            "layoutProps": { "width": 56, "height": 56, "parentIsAutoLayout": true }
                        },
                        {
                            "type": "FRAME",
                            "name": "User Info",
                            "props": {
                                "layoutMode": "VERTICAL", "itemSpacing": 0,
                                "fills": []
                            },
                            "layoutProps": { "layoutGrow": 1, "parentIsAutoLayout": true },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "characters": props.name || "User Name", "fontSize": 18,
                                        "font": { "family": "Inter", "style": "Bold" },
                                        "textAutoResize": "HEIGHT",
                                        "fills": [{ "type": "SOLID", "color": { "r": 0.1, "g": 0.1, "b": 0.15 } }]
                                    },
                                    "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true }
                                },
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "characters": props.handle || "@handle", "fontSize": 14,
                                        "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.5 } }],
                                        "textAutoResize": "HEIGHT"
                                    },
                                    "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "TEXT",
                    "props": {
                        "characters": props.bio || "No bio provided.", "fontSize": 15,
                        "lineHeight": { "value": 150, "unit": "PERCENT" },
                        "textAutoResize": "HEIGHT",
                        "fills": [{ "type": "SOLID", "color": { "r": 0.2, "g": 0.2, "b": 0.25 } }]
                    },
                    "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true }
                },
                {
                    "type": "FRAME",
                    "name": "Footer",
                    "props": {
                        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                        "layoutMode": "HORIZONTAL",
                        "fills": []
                    },
                    "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true },
                    "children": [
                        {
                            "type": "TEXT",
                            "props": {
                                "characters": `${props.followerCount} followers`, "fontSize": 13,
                                "font": { "family": "Inter", "style": "Semi Bold" },
                                "textAutoResize": "WIDTH_AND_HEIGHT",
                                "fills": [{ "type": "SOLID", "color": { "r": 0.1, "g": 0.1, "b": 0.1 } }]
                            },
                            "layoutProps": { "parentIsAutoLayout": true }
                        },
                        {
                            "type": "FRAME",
                            "name": "Button",
                            "props": {
                                "layoutMode": "HORIZONTAL", "paddingLeft": 20, "paddingRight": 20, "paddingTop": 10, "paddingBottom": 10,
                                "cornerRadius": 10,
                                "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.4, "b": 1 } }],
                                "primaryAxisSizingMode": "AUTO",
                                "counterAxisSizingMode": "AUTO"
                            },
                            "layoutProps": { "parentIsAutoLayout": true },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "characters": "Follow", "fontSize": 14,
                                        "font": { "family": "Inter", "style": "Bold" },
                                        "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
                                        "textAutoResize": "WIDTH_AND_HEIGHT"
                                    },
                                    "layoutProps": { "parentIsAutoLayout": true }
                                }
                            ]
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

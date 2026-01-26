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
                "cornerRadius": 14,
                "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
                "effects": [
                    {
                        "type": "DROP_SHADOW",
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.12 },
                        "offset": { "x": 0, "y": 2 },
                        "radius": 6,
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
                        "counterAxisSizingMode": "AUTO",
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
                                    : [{ "type": "SOLID", "color": { "r": 0.945, "g": 0.953, "b": 0.973 } }],
                                "strokes": [{ "type": "SOLID", "color": { "r": 0.816, "g": 0.847, "b": 0.859 } }],
                                "strokeWeight": 1
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
                                        "font": { "family": "Open Sans", "style": "SemiBold" },
                                        "textAutoResize": "HEIGHT",
                                        "fills": [{ "type": "SOLID", "color": { "r": 0.102, "g": 0.192, "b": 0.235 } }]
                                    },
                                    "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true }
                                },
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "characters": props.handle || "@handle", "fontSize": 14,
                                        "font": { "family": "Open Sans", "style": "Regular" },
                                        "fills": [{ "type": "SOLID", "color": { "r": 0.349, "g": 0.439, "b": 0.482 } }],
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
                        "font": { "family": "Open Sans", "style": "Regular" },
                        "lineHeight": { "value": 150, "unit": "PERCENT" },
                        "textAutoResize": "HEIGHT",
                        "fills": [{ "type": "SOLID", "color": { "r": 0.102, "g": 0.192, "b": 0.235 } }]
                    },
                    "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true }
                },
                {
                    "type": "FRAME",
                    "name": "Footer",
                    "props": {
                        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                        "layoutMode": "HORIZONTAL",
                        "primaryAxisSizingMode": "FIXED",
                        "counterAxisSizingMode": "AUTO",
                        "fills": []
                    },
                    "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true },
                    "children": [
                        {
                            "type": "TEXT",
                            "props": {
                                "characters": `${props.followerCount} followers`, "fontSize": 13,
                                "font": { "family": "Open Sans", "style": "SemiBold" },
                                "textAutoResize": "WIDTH_AND_HEIGHT",
                                "fills": [{ "type": "SOLID", "color": { "r": 0.349, "g": 0.439, "b": 0.482 } }]
                            },
                            "layoutProps": { "parentIsAutoLayout": true }
                        },
                        {
                            "type": "FRAME",
                            "name": "Button",
                            "props": {
                                "layoutMode": "HORIZONTAL", "paddingLeft": 20, "paddingRight": 20, "paddingTop": 10, "paddingBottom": 10,
                                "cornerRadius": 8,
                                "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.635, "b": 0.588 } }],
                                "primaryAxisSizingMode": "AUTO",
                                "counterAxisSizingMode": "AUTO"
                            },
                            "layoutProps": { "parentIsAutoLayout": true },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "characters": "Follow", "fontSize": 14,
                                        "font": { "family": "Open Sans", "style": "Bold" },
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

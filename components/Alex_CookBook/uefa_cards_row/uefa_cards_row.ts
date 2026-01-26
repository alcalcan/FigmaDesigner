import { BaseComponent, NodeDefinition, ComponentProps } from "../../BaseComponent";

// SVG Assets
import SVG_PLAY_CIRCLE from "./assets/play_circle.svg";
import SVG_STAR from "./assets/star.svg";

// Image Assets
import IMG_1 from "./assets/img_1.png";
import IMG_2 from "./assets/img_2.png";
import IMG_3 from "./assets/img_3.png";
import IMG_4 from "./assets/img_4.png";

interface CardData {
    imageUrl?: string;
    title: string;
    description: string;
    author: string;
    hasVideo?: boolean;
    rating?: number; // 0-5
}

interface UefaCardsRowProps extends ComponentProps {
    cards?: CardData[];
}

export class uefa_cards_row extends BaseComponent {
    async create(props: UefaCardsRowProps): Promise<SceneNode> {
        const cardsData = props.cards || [
            {
                title: "Refereeing in Women’s Football: Motivation.",
                description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.",
                author: "Alex Calcan",
                imageUrl: IMG_1,
                hasVideo: true,
                rating: 5
            },
            {
                title: "Advanced Coaching Techniques 2026",
                description: "Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.",
                author: "Mihai Popescu",
                imageUrl: IMG_2,
                hasVideo: false,
                rating: 3
            },
            {
                title: "Youth Academy Growth Strategy",
                description: "Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.",
                author: "Elena Ionescu",
                imageUrl: IMG_3,
                hasVideo: true,
                rating: 4
            },
            {
                title: "Sustainable Stadium Operations",
                description: "Reducing carbon footprints and implementing circular economy principles in modern stadium management.",
                author: "David Moore",
                imageUrl: IMG_4,
                hasVideo: false,
                rating: 2
            }
        ];

        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "uefa_cards_row",
          "props": {
            "layoutMode": "HORIZONTAL", "itemSpacing": 24,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
            "fills": []
          },
          "layoutProps": { "parentIsAutoLayout": false },
          "children": cardsData.map((card, index) => ({
                "type": "FRAME",
                "name": `Card ${index + 1}`,
                "props": {
                    "layoutMode": "VERTICAL", "itemSpacing": 0,
                    "primaryAxisSizingMode": "AUTO",
                    "cornerRadius": 12,
                    "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
                    "effects": [
                        {
                            "type": "DROP_SHADOW", "visible": true, "radius": 6,
                            "color": { "r": 0, "g": 0, "b": 0, "a": 0.12 },
                            "offset": { "x": 0, "y": 2 }, "spread": 0, "blendMode": "NORMAL", "showShadowBehindNode": true
                        }
                    ],
                    "clipsContent": true
                },
                "layoutProps": { "width": 343, "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "FRAME",
                        "name": "Image Container",
                        "props": {
                            "layoutMode": "NONE",
                            "fills": card.imageUrl
                                ? [{ "type": "IMAGE", "assetRef": card.imageUrl, "scaleMode": "FILL" }]
                                : [{ "type": "SOLID", "color": { "r": 0.9, "g": 0.9, "b": 0.9 } }]
                        },
                        "layoutProps": { "layoutAlign": "STRETCH", "height": 229, "parentIsAutoLayout": true },
                        "children": card.hasVideo ? [
                            {
                                "type": "VECTOR",
                                "name": "Play Icon",
                                "shouldFlatten": true,
                                "svgContent": SVG_PLAY_CIRCLE,
                                "layoutProps": {
                                    "width": 54, "height": 54,
                                    "parentIsAutoLayout": false
                                },
                                "props": { "x": 144, "y": 87 } // Center reasonably
                            }
                        ] : []
                    },
                    {
                        "type": "FRAME",
                        "name": "Content Padding",
                        "props": {
                            "layoutMode": "VERTICAL", "itemSpacing": 16,
                            "primaryAxisSizingMode": "AUTO",
                            "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16,
                            "fills": []
                        },
                        "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true },
                        "children": [
                            {
                                "type": "TEXT",
                                "props": {
                                    "characters": card.title, "fontSize": 20,
                                    "font": { "family": "Open Sans", "style": "SemiBold" },
                                    "fills": [{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.24 } }],
                                    "textAutoResize": "HEIGHT"
                                },
                                "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true }
                            },
                            {
                                "type": "TEXT",
                                "props": {
                                    "characters": card.description, "fontSize": 14,
                                    "font": { "family": "Open Sans", "style": "Regular" },
                                    "fills": [{ "type": "SOLID", "color": { "r": 0.1, "g": 0.19, "b": 0.24 } }],
                                    "textAutoResize": "HEIGHT"
                                },
                                "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true }
                            },
                            {
                                "type": "FRAME",
                                "name": "Footer",
                                "props": {
                                    "layoutMode": "VERTICAL", "itemSpacing": 4, "primaryAxisSizingMode": "AUTO", "fills": []
                                },
                                "layoutProps": { "layoutAlign": "STRETCH", "parentIsAutoLayout": true },
                                "children": [
                                    {
                                        "type": "FRAME",
                                        "name": "Author Info",
                                        "props": { "layoutMode": "HORIZONTAL", "itemSpacing": 4, "counterAxisSizingMode": "AUTO", "fills": [] },
                                        "layoutProps": { "parentIsAutoLayout": true },
                                        "children": [
                                            {
                                                "type": "TEXT",
                                                "props": {
                                                    "characters": "by ", "fontSize": 12,
                                                    "font": { "family": "Open Sans", "style": "Light" },
                                                    "fills": [{ "type": "SOLID", "color": { "r": 0.39, "g": 0.48, "b": 0.52 } }]
                                                },
                                                "layoutProps": { "parentIsAutoLayout": true }
                                            },
                                            {
                                                "type": "TEXT",
                                                "props": {
                                                    "characters": card.author, "fontSize": 14,
                                                    "font": { "family": "Open Sans", "style": "SemiBold" },
                                                    "fills": [{ "type": "SOLID", "color": { "r": 0.39, "g": 0.48, "b": 0.52 } }]
                                                },
                                                "layoutProps": { "parentIsAutoLayout": true }
                                            }
                                        ]
                                    },
                                    {
                                        "type": "FRAME",
                                        "name": "Rating Block",
                                        "props": { "layoutMode": "HORIZONTAL", "itemSpacing": 6, "counterAxisAlignItems": "CENTER", "counterAxisSizingMode": "AUTO", "fills": [] },
                                        "layoutProps": { "parentIsAutoLayout": true },
                                        "children": [
                                            {
                                                "type": "TEXT",
                                                "props": {
                                                    "characters": "Relevance", "fontSize": 10,
                                                    "font": { "family": "Open Sans", "style": "SemiBold" },
                                                    "fills": [{ "type": "SOLID", "color": { "r": 0.45, "g": 0.55, "b": 0.58 } }]
                                                },
                                                "layoutProps": { "parentIsAutoLayout": true }
                                            },
                                            {
                                                "type": "FRAME",
                                                "name": "Rating Stars",
                                                "props": {
                                                    "layoutMode": "HORIZONTAL", "itemSpacing": 1, "counterAxisSizingMode": "AUTO", "fills": []
                                                },
                                                "layoutProps": { "parentIsAutoLayout": true },
                                                "children": [1, 2, 3, 4, 5].map(i => ({
                                                    "type": "VECTOR",
                                                    "name": `Star ${i}`,
                                                    "shouldFlatten": true,
                                                    "svgContent": SVG_STAR,
                                                    "layoutProps": { "width": 12, "height": 12, "parentIsAutoLayout": true },
                                                    "props": {
                                                        "fills": [{
                                                            "type": "SOLID",
                                                            "color": i <= (card.rating || 0)
                                                                ? { "r": 1, "g": 0.74, "b": 0.04 }
                                                                : { "r": 0.82, "g": 0.85, "b": 0.86 }
                                                        }]
                                                    }
                                                }))
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }))
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

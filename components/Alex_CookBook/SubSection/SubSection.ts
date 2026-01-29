import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { checkbox } from "../checkbox/checkbox";
import SVG_chevron_down from "../chip_expand/assets/chevron_down.svg";

export class SubSection extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "SubSection",
            "props": {
                "layoutMode": "VERTICAL", "itemSpacing": 24,
                "paddingTop": 24, "paddingRight": 24, "paddingBottom": 24, "paddingLeft": 24,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "layoutAlign": "INHERIT",
                "width": 1392,
                "fills": [
                    {
                        "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 }
                    }
                ],
                "effects": [
                    {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "radius": 6,
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.12 },
                        "offset": { "x": 0, "y": 2 },
                        "spread": 0,
                        "showShadowBehindNode": true
                    }
                ],
                "cornerRadius": 8,
                "clipsContent": true
            },
            "children": [
                {
                    "type": "FRAME",
                    "name": "Header",
                    "props": {
                        "layoutMode": "HORIZONTAL", "itemSpacing": 24,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                        "layoutAlign": "INHERIT",
                        "fills": []
                    },
                    "layoutProps": { "width": 1392, "height": 40, "parentIsAutoLayout": false },
                    "children": [
                        {
                            "type": "TEXT",
                            "name": "Subject",
                            "props": {
                                "layoutAlign": "INHERIT", "layoutGrow": 1,
                                "characters": "Subject", "fontSize": 20,
                                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                "fills": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 0.1, "g": 0.19, "b": 0.23 }
                                    }
                                ],
                                "font": { "family": "Open Sans", "style": "SemiBold" }
                            }
                        },
                        {
                            "type": "FRAME",
                            "name": "Frame 1695",
                            "props": {
                                "layoutMode": "HORIZONTAL", "itemSpacing": 8,
                                "paddingTop": 4, "paddingRight": 16, "paddingBottom": 4, "paddingLeft": 16,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                "counterAxisAlignItems": "CENTER",
                                "cornerRadius": 100,
                                "strokes": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 0, "g": 0.63, "b": 0.58 }
                                    }
                                ],
                                "fills": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 1, "g": 1, "b": 1 }
                                    }
                                ]
                            },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "name": "Filter name",
                                    "props": {
                                        "fontSize": 14,
                                        "font": { "family": "Manrope", "style": "Regular" },
                                        "characters": "Subjects"
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "name": "Filter name",
                                    "props": {
                                        "fontSize": 16,
                                        "font": { "family": "Manrope", "style": "Bold" },
                                        "characters": "0"
                                    }
                                }
                            ]
                        },
                        {
                            "type": "FRAME",
                            "name": "Frame 1696",
                            "props": {
                                "layoutMode": "HORIZONTAL", "itemSpacing": 8,
                                "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                "cornerRadius": 100,
                                "fills": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 0.94, "g": 0.95, "b": 0.97 }
                                    }
                                ]
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true,
                                "width": 40, "height": 40
                            },
                            "children": [
                                {
                                    "type": "FRAME",
                                    "name": "Navigation / chevron-up",
                                    "props": {
                                        "clipsContent": true,
                                        "layoutMode": "NONE",
                                        "fills": [],
                                        "width": 24, "height": 24
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true,
                                        "width": 24, "height": 24
                                    },
                                    "children": [
                                        {
                                            "type": "VECTOR",
                                            "name": "chevron-down", // Actually will be rotated
                                            "svgContent": SVG_chevron_down,
                                            "props": {
                                                "x": 6, "y": 8
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "FRAME",
                    "name": "Content Area",
                    "props": {
                        "layoutMode": "VERTICAL", "itemSpacing": 16,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                        "layoutAlign": "STRETCH",
                        "layoutWrap": "NO_WRAP",
                        "fills": []
                    },
                    "children": []
                }
            ]
        };

        const root = await this.renderDefinition(structure) as FrameNode;

        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;

        // Rotate Chevron to be "Up"
        const chevron = root.findOne(n => n.name === "chevron-down" && n.type === "VECTOR") as VectorNode;
        if (chevron) {
            chevron.name = "chevron-up";
            // Rotate 180 degrees around center
            // Simple rotation in Figma puts origin at top-left, so we need to adjust X/Y
            chevron.rotation = 180;
            // Adjust position for rotation based on width/height
            chevron.x = chevron.width + 6; // +6 original x
            chevron.y = chevron.height + 8; // +8 original y
            // Note: SVG_chevron_down is 12x7.4.
            // If centered in AutoLayout frame, setting rotation might affect layout if not careful,
            // but usually AutoLayout respects the bounding box.
            // For a 180 rotation, the bounding box size is same.
            // We need to ensure the position is correct within the Frame's flow or alignment.
            // Since "Chevron Container" is AutoLayout CENTER/CENTER, it should handle it if width/height match.
            // But after rotation, the top-left corner moves.
            // Figma AutoLayout uses the node bounds.
            // Let's rely on AutoLayout finding the new center.
        }

        // Populate Content Area with Checkboxes
        const contentArea = root.findOne(n => n.name === "Content Area") as FrameNode;
        if (contentArea) {
            const checkboxComp = new checkbox();
            const items = [
                "Anti-Doping, Medical and Health", "Event and Volunteer Management", "Football Development",
                "Innovation", "Marketing Sponsorship", "Communication, PR and Media",
                "Football and Social Responsibility", "Governance, Organisation of Football and Sport",
                "Leadership", "Legal and Integrity"
            ];

            // Split into 2 columns conceptually, but render as Rows for layout filling
            // Column 1 Items: 0-4
            // Column 2 Items: 5-9
            const mid = Math.ceil(items.length / 2);
            const col1 = items.slice(0, mid);
            const col2 = items.slice(mid);

            // Create Rows
            for (let i = 0; i < mid; i++) {
                const row = figma.createFrame();
                row.name = `Row ${i + 1}`;
                row.layoutMode = "HORIZONTAL";
                row.itemSpacing = 32; // Spacing between columns
                row.primaryAxisSizingMode = "AUTO"; // Height hugs content
                row.counterAxisSizingMode = "AUTO";
                row.layoutAlign = "STRETCH"; // Fill Content Area width
                row.fills = [];

                const rowItems = [col1[i], col2[i]].filter(Boolean); // Handle uneven case if any

                for (const item of rowItems) {
                    const cb = await checkboxComp.create({
                        characterOverride: item,
                        checked: false,
                        x: 0,
                        y: 0
                    });

                    // Ensure checkbox fills its share of the row
                    if (cb.type === "FRAME") {
                        cb.primaryAxisSizingMode = "AUTO";
                        cb.counterAxisSizingMode = "AUTO"; // Fix height
                        cb.layoutGrow = 1; // Fill available width in the row (1/2 if 2 items)
                        cb.layoutAlign = "STRETCH"; // Ensure it stretches if needed vertically? No, align to center usually.
                        // But for horizontal fill, layoutGrow is key.

                        // Force update text if it didn't take - safeguard
                        const textNode = cb.findOne((n: SceneNode) => n.type === "TEXT") as TextNode;
                        if (textNode) {
                            await figma.loadFontAsync(textNode.fontName as FontName);
                            textNode.characters = item;
                        }
                    }
                    row.appendChild(cb);
                }
                contentArea.appendChild(row);
            }
        }

        return root;
    }
}

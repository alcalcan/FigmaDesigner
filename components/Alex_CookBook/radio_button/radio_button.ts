import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";

export class radio_button extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "radio_button",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 1, "strokeLeftWeight": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 8
            },
            "layoutProps": { "width": 296, "height": 32, "parentIsAutoLayout": false },
            "children": [
                {
                    "type": "FRAME",
                    "name": "RadioButtonWrapper",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "layoutMode": "NONE",
                        "fills": [],
                        "strokes": [],
                        "cornerRadius": 4
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 20, "height": 20
                    },
                    "children": [
                        {
                            "type": "RECTANGLE",
                            "name": "RadioOuter",
                            "props": {
                                "visible": true,
                                "cornerRadius": 8, // Fully rounded for 16x16
                                "fills": [],
                                "strokes": [
                                    {
                                        "type": "SOLID",
                                        "color": { "r": 0.10196, "g": 0.19216, "b": 0.23529 }
                                    }
                                ],
                                "strokeWeight": 1.5,
                                "strokeAlign": "INSIDE"
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": false,
                                "layoutPositioning": "AUTO",
                                "width": 16, "height": 16,
                                "relativeTransform": [[1, 0, 2], [0, 1, 2]]
                            }
                        }
                    ]
                },
                {
                    "type": "TEXT",
                    "name": "Label",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "characters": "Radio Option", "fontSize": 14,
                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                        "fills": [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.10196, "g": 0.19216, "b": 0.23529 }
                            }
                        ],
                        "font": { "family": "Open Sans", "style": "Regular" },
                        "layoutGrow": 1
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 264, "height": 24
                    }
                }
            ]
        };

        // Apply potential background fill (e.g. for selection rows)
        // If hoverState is true and no fills provided, use default selection background
        if (props.hoverState && (!props.fills || (Array.isArray(props.fills) && props.fills.length === 0))) {
            structure.props = {
                ...structure.props,
                fills: [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: { r: 0.9450980424880981, g: 0.9529411792755127, b: 0.9725490212440491 }
                }]
            };
        } else if (props.fills && Array.isArray(props.fills)) {
            structure.props = { ...structure.props, fills: props.fills };
        }

        // Allow generic prop overrides (e.g. padding, spacing)
        structure.props = { ...structure.props, ...props };

        // Handle Hug Contents
        if (props.hugContents) {
            structure.props.primaryAxisSizingMode = "AUTO";
            structure.props.counterAxisSizingMode = "AUTO";
            if (structure.layoutProps) {
                delete structure.layoutProps.width;
                delete structure.layoutProps.height;
            }
        }


        const root = await this.renderDefinition(structure);

        // Update Label if provided
        if (props.characterOverride !== undefined) {
            const text = (root as FrameNode).findOne(n => n.type === "TEXT") as TextNode;
            if (text) {
                await figma.loadFontAsync(text.fontName as FontName);
                text.characters = props.characterOverride;
            }
        }

        // Handle Checked State
        if (props.checked !== undefined) {
            // Use name-based search with type check
            const wrapper = (root as FrameNode).children.find(n => n.name === "RadioButtonWrapper") as FrameNode;
            const outerCircle = wrapper?.children.find(n => n.name === "RadioOuter" && n.type === "RECTANGLE") as RectangleNode;

            if (outerCircle) {
                if (props.checked) {
                    // Solid fill, no stroke
                    outerCircle.fills = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
                    outerCircle.strokes = [];
                } else {
                    // No fill, solid stroke
                    outerCircle.fills = [];
                    outerCircle.strokes = [{ type: "SOLID", color: { r: 0.10196, g: 0.19216, b: 0.23529 } }];
                    outerCircle.strokeWeight = 1.5;
                }
            } else {
                console.warn(`[radio_button] Could not find RadioOuter rectangle in ${props.characterOverride || 'unnamed'} radio button`);
            }

            if (props.checked && wrapper) {
                // Create inner white dot
                // 16x16 outer, let's make the dot 6x6 or 8x8. Let's go with 6x6 for a standard look.

                // Using an ellipse or a rectangle with corner radius. Since we used Rectangle with radius for outer, let's do same for consistency or just Ellipse.
                // Actually BaseComponent definitions often use Frames/Rectangles. I'll stick to Figma API calls here since I'm manipulating the node directly.

                const dot = figma.createEllipse();
                dot.name = "RadioDot";
                dot.resize(6, 6);
                dot.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

                wrapper.appendChild(dot);

                // Center the dot relative to the wrapper (20x20)
                // Wrapper 20x20. Dot 6x6. 
                dot.x = (wrapper.width - dot.width) / 2;
                dot.y = (wrapper.height - dot.height) / 2;
            }
        }

        // Final positioning
        if (props.x !== undefined) root.x = props.x;
        if (props.y !== undefined) root.y = props.y;

        return root;
    }
}

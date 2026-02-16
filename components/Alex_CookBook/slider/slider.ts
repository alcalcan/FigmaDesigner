import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface SliderProps extends ComponentProps {
    min?: number;
    max?: number;
    value?: number;
    rangeValue?: [number, number];
    step?: number;
    type?: "simple" | "range" | "with-input" | "range-with-inputs";
    width?: number | "fill";
}

export class slider extends BaseComponent {
    async create(props: SliderProps): Promise<SceneNode> {
        const min = props.min ?? 0;
        const max = props.max ?? 100;
        const type = props.type ?? "simple";
        const totalWidth = typeof props.width === 'number' ? props.width : 320;

        // Calculate positions
        let handle1Pos = 0;
        let handle2Pos = 0;
        let activeStart = 0;
        let activeEnd = 0;

        const trackWidth = type === "range-with-inputs" ? totalWidth - 160 : (type === "with-input" ? totalWidth - 80 : totalWidth);

        if (type === "range" || type === "range-with-inputs") {
            const val = props.rangeValue ?? [20, 80];
            handle1Pos = ((val[0] - min) / (max - min)) * trackWidth;
            handle2Pos = ((val[1] - min) / (max - min)) * trackWidth;
            activeStart = handle1Pos;
            activeEnd = handle2Pos;
        } else {
            const val = props.value ?? 50;
            handle1Pos = ((val - min) / (max - min)) * trackWidth;
            activeStart = 0;
            activeEnd = handle1Pos;
        }

        const activeColor = { r: 0, g: 0.635, b: 0.588 }; // Alex Cookbook Green
        const trackColor = { r: 0.88, g: 0.91, b: 0.92 };
        const handleColor = { r: 1, g: 1, b: 1 };
        const handleStroke = { r: 0.7, g: 0.75, b: 0.77 };

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": `Slider (${type})`,
            "props": {
                "layoutMode": "HORIZONTAL",
                "counterAxisAlignItems": "CENTER",
                "itemSpacing": 16,
                "fills": [],
                "clipsContent": false
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "width": totalWidth,
                "height": 40
            },
            "children": [
                // Input 1 (Left side for range-with-inputs)
                ...(type === "range-with-inputs" ? [
                    {
                        "type": "FRAME",
                        "name": "Input Mock 1",
                        "props": {
                            "layoutMode": "HORIZONTAL",
                            "primaryAxisAlignItems": "CENTER",
                            "counterAxisAlignItems": "CENTER",
                            "fills": [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                            "strokes": [{ type: "SOLID", color: handleStroke }],
                            "strokeWeight": 1,
                            "cornerRadius": 4,
                            "paddingLeft": 8,
                            "paddingRight": 8
                        },
                        "layoutProps": {
                            "parentIsAutoLayout": true,
                            "width": 64,
                            "height": 32
                        },
                        "children": [
                            {
                                "type": "TEXT",
                                "name": "Value",
                                "props": {
                                    "characters": String(props.rangeValue?.[0] ?? 20),
                                    "fontSize": 14,
                                    "font": { family: "Open Sans", style: "Regular" },
                                    "fills": [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]
                                }
                            }
                        ]
                    } as NodeDefinition
                ] : []),

                {
                    "type": "FRAME",
                    "name": "Track Container",
                    "props": {
                        "layoutMode": "NONE",
                        "fills": [],
                        "clipsContent": false
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                        "width": trackWidth,
                        "height": 20
                    },
                    "children": [
                        // Background Track
                        {
                            "type": "RECTANGLE",
                            "name": "Track BG",
                            "props": {
                                "fills": [{ type: "SOLID", color: trackColor }],
                                "cornerRadius": 2,
                                "x": 0,
                                "y": 8
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": false,
                                "width": trackWidth,
                                "height": 4,
                                "relativeTransform": [[1, 0, 0], [0, 1, 8]]
                            }
                        },
                        // Active Track
                        {
                            "type": "RECTANGLE",
                            "name": "Active Fill",
                            "props": {
                                "fills": [{ type: "SOLID", color: activeColor }],
                                "cornerRadius": 2
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": false,
                                "width": Math.max(0, activeEnd - activeStart),
                                "height": 4,
                                "relativeTransform": [[1, 0, activeStart], [0, 1, 8]]
                            }
                        },
                        // Handle 1
                        {
                            "type": "FRAME",
                            "name": "Handle 1",
                            "props": {
                                "fills": [{ type: "SOLID", color: handleColor }],
                                "strokes": [{ type: "SOLID", color: handleStroke }],
                                "strokeWeight": 1,
                                "cornerRadius": 10,
                                "effects": [{
                                    "type": "DROP_SHADOW",
                                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 },
                                    "offset": { "x": 0, "y": 2 },
                                    "radius": 4,
                                    "spread": 0,
                                    "visible": true,
                                    "blendMode": "NORMAL"
                                }]
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": false,
                                "width": 20,
                                "height": 20,
                                "relativeTransform": [[1, 0, handle1Pos - 10], [0, 1, 0]]
                            }
                        },
                        // Handle 2 (for range or range-with-inputs)
                        ...(type === "range" || type === "range-with-inputs" ? [
                            {
                                "type": "FRAME",
                                "name": "Handle 2",
                                "props": {
                                    "fills": [{ type: "SOLID", color: handleColor }],
                                    "strokes": [{ type: "SOLID", color: handleStroke }],
                                    "strokeWeight": 1,
                                    "cornerRadius": 10,
                                    "effects": [{
                                        "type": "DROP_SHADOW",
                                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 },
                                        "offset": { "x": 0, "y": 2 },
                                        "radius": 4,
                                        "spread": 0,
                                        "visible": true,
                                        "blendMode": "NORMAL"
                                    }]
                                },
                                "layoutProps": {
                                    "parentIsAutoLayout": false,
                                    "width": 20,
                                    "height": 20,
                                    "relativeTransform": [[1, 0, handle2Pos - 10], [0, 1, 0]]
                                }
                            } as NodeDefinition
                        ] : [])
                    ]
                },

                // Input (Right side for with-input or range-with-inputs)
                ...(type === "with-input" || type === "range-with-inputs" ? [
                    {
                        "type": "FRAME",
                        "name": type === "range-with-inputs" ? "Input Mock 2" : "Input Mock",
                        "props": {
                            "layoutMode": "HORIZONTAL",
                            "primaryAxisAlignItems": "CENTER",
                            "counterAxisAlignItems": "CENTER",
                            "fills": [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                            "strokes": [{ type: "SOLID", color: handleStroke }],
                            "strokeWeight": 1,
                            "cornerRadius": 4,
                            "paddingLeft": 8,
                            "paddingRight": 8
                        },
                        "layoutProps": {
                            "parentIsAutoLayout": true,
                            "width": 64,
                            "height": 32
                        },
                        "children": [
                            {
                                "type": "TEXT",
                                "name": "Value",
                                "props": {
                                    "characters": String(type === "range-with-inputs" ? (props.rangeValue?.[1] ?? 80) : (props.value ?? 50)),
                                    "fontSize": 14,
                                    "font": { family: "Open Sans", style: "Regular" },
                                    "fills": [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]
                                }
                            }
                        ]
                    } as NodeDefinition
                ] : [])
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

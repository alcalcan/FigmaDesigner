import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// SVG Assets
import SVG_toggle_knob from "./assets/toggle_knob.svg";

export class toggle extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const isOn = props.isOn === true;

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Toggle",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "layoutMode": "NONE",
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
            },
            "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 42, "height": 22,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]]
            },
            "children": [
                {
                    "type": "RECTANGLE",
                    "name": "Background",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": 0, "y": 0,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 11,
                        "fills": isOn ? [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0.6352941176, "b": 0.5882352941 }, // User specified Green (#00A296)
                                "boundVariables": {}
                            }
                        ] : [
                            {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.6, "g": 0.6, "b": 0.6 }, // Gray color
                                "boundVariables": {}
                            }
                        ]
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 42, "height": 22,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                    }
                },
                {
                    "type": "VECTOR",
                    "shouldFlatten": true,
                    "name": "Knob",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "x": isOn ? 22 : 2, "y": 2,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 18, "height": 18,
                        "relativeTransform": [[1, 0, isOn ? 22 : 2], [0, 1, 2]]
                    },
                    "svgContent": SVG_toggle_knob
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

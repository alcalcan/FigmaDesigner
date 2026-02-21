import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { checkbox } from "../checkbox/checkbox";
import { radio_button } from "../radio_button/radio_button";

export class dropdown_options extends BaseComponent {
    async create(props: ComponentProps & { options?: { name: string, selected: boolean, hoverState?: boolean }[], selectionType?: "checkbox" | "radio", width?: number, bodyPadding?: number }): Promise<SceneNode> {
        // Default dummy options if none provided
        const defaultOptions = [
            { name: "Default Option 1", selected: false },
            { name: "Default Option 2", selected: true },
            { name: "Default Option 3", selected: false },
            { name: "Default Option 4", selected: false }
        ];

        const options: { name: string, selected: boolean, hoverState?: boolean }[] = (props.options && props.options.length > 0) ? props.options : defaultOptions;
        const selectionType = props.selectionType || "checkbox"; // Default to checkbox
        console.log(`[dropdown_options] Creating dropdown with ${options.length} options (${props.options ? 'prop-driven' : 'defaults'}) as ${selectionType}`);

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Dropdown Menu",
            "props": {
                "visible": true, "opacity": 1, "blendMode": "PASS_THROUGH",
                "layoutMode": "VERTICAL", "itemSpacing": 4,
                "paddingTop": props.bodyPadding ?? 8, "paddingRight": props.bodyPadding ?? 8, "paddingBottom": props.bodyPadding ?? 8, "paddingLeft": props.bodyPadding ?? 8,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                "fills": [
                    {
                        "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 }
                    }
                ],
                "strokes": [
                    {
                        "type": "SOLID",
                        "color": { "r": 0.9, "g": 0.92, "b": 0.94 }
                    }
                ],
                "effects": [
                    {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 },
                        "offset": { "x": 0, "y": 4 },
                        "radius": 12
                    }
                ],
                "cornerRadius": 12
            },
            "layoutProps": { "width": props.width ?? 200, "height": 100, "parentIsAutoLayout": false },
            "children": options.map(auth => ({
                "type": "COMPONENT",
                "component": selectionType === "radio" ? radio_button : checkbox,
                "props": {
                    "characterOverride": auth.name,
                    "checked": auth.selected,
                    "hoverState": auth.hoverState
                },
                "postCreate": (node: SceneNode) => {
                    const frame = node as FrameNode;
                    frame.layoutAlign = "STRETCH";
                }
            }))
        };

        const root = await this.renderDefinition(structure);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { input_field } from "../input_field/input_field";
import { dropdown_options } from "../dropdown_options/dropdown_options";

export interface DropdownInputProps extends ComponentProps {
    placeholder?: string;
    value?: string;
    helperText?: string;
    state?: "default" | "error" | "warning" | "success";
    options?: { name: string, selected: boolean }[];
    selectionType?: "checkbox" | "radio";
    width?: number | "fill";
}

export class dropdown_input extends BaseComponent {
    async create(props: DropdownInputProps): Promise<SceneNode> {
        const width = props.width ?? 320;
        const menuWidth = typeof width === "number" ? width : 320;

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Dropdown Input Group",
            "props": {
                "visible": true,
                "layoutMode": "VERTICAL",
                "itemSpacing": 8,
                "fills": [],
                "clipsContent": false,
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "layoutAlign": props.width === "fill" ? "STRETCH" : "INHERIT"
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "width": typeof width === "number" ? width : 320
            },
            "children": [
                {
                    "type": "COMPONENT",
                    "component": input_field,
                    "props": {
                        "placeholder": props.placeholder,
                        "value": props.value,
                        "helperText": props.helperText,
                        "state": props.state,
                        "type": "dropdown",
                        "width": props.width === "fill" ? "fill" : width
                    }
                },
                {
                    "type": "COMPONENT",
                    "component": dropdown_options,
                    "props": {
                        "options": props.options,
                        "selectionType": props.selectionType,
                        "width": menuWidth
                    },
                    "postCreate": (node: SceneNode) => {
                        const frame = node as FrameNode;
                        frame.layoutAlign = "STRETCH";
                        // Ensure it fits the input width if fixed
                        if (typeof width === "number") {
                            frame.resize(width, frame.height);
                        }
                    }
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

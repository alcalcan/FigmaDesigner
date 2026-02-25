import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { input_field } from "../input_field/input_field";
import { dropdown_options } from "../dropdown_options/dropdown_options";
import { Lucide_chevron_down } from "../../lucide_icons/Lucide_chevron_down/Lucide_chevron_down";

export interface DropdownInputProps extends ComponentProps {
    placeholder?: string;
    value?: string;
    helperText?: string;
    state?: "default" | "error" | "warning" | "success";
    options?: { name: string, selected: boolean }[];
    selectionType?: "checkbox" | "radio" | "text-only";
    width?: number | "fill";
    variant?: "standard" | "two-line";
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
                props.variant === "two-line" ? {
                    "type": "FRAME",
                    "name": "Design_Component_Dropdown",
                    "props": {
                        "layoutMode": "VERTICAL",
                        "itemSpacing": 2,
                        "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16,
                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                        "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
                        "strokes": [{ "type": "SOLID", "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 } }],
                        "cornerRadius": 8,
                        "layoutAlign": "STRETCH",
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                    },
                    "children": [
                        {
                            "type": "TEXT",
                            "name": "Description label",
                            "props": {
                                "characters": props.placeholder || "Label",
                                "fontSize": 14,
                                "fills": [{ "type": "SOLID", "color": { "r": 0.38823530077934265, "g": 0.47843137383461, "b": 0.5215686559677124 } }],
                                "font": { "family": "Manrope", "style": "Regular" },
                                "layoutAlign": "STRETCH",
                                "layoutSizingHorizontal": "FILL",
                                "textAutoResize": "TRUNCATE"
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true
                            }
                        },
                        {
                            "type": "FRAME",
                            "name": "Bottom line",
                            "props": {
                                "layoutMode": "HORIZONTAL",
                                "itemSpacing": 16,
                                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                "layoutAlign": "STRETCH", // Stretches horizontally to fill parent
                                "fills": []
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true
                            },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "name": "Main label",
                                    "props": {
                                        "characters": props.value || "Value",
                                        "fontSize": 16,
                                        "fills": [{ "type": "SOLID", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 } }],
                                        "font": { "family": "Manrope", "style": "SemiBold" },
                                        "layoutGrow": 1, // Automatically takes available space
                                        "layoutSizingHorizontal": "FILL",
                                        "textAutoResize": "TRUNCATE"
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true
                                    }
                                },
                                {
                                    "type": "COMPONENT",
                                    "name": "Expand Icon",
                                    "component": Lucide_chevron_down,
                                    "props": {
                                        "width": 20, "height": 20, "strokeWeight": 1.5,
                                        "color": { "r": 0.6078431606292725, "g": 0.658823549747467, "b": 0.6784313917160034 }
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true,
                                        "width": 20, "height": 20
                                    }
                                }
                            ]
                        }
                    ]
                } as NodeDefinition : {
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
                } as NodeDefinition,
                {
                    "type": "COMPONENT",
                    "component": dropdown_options,
                    "props": {
                        "options": props.options,
                        "selectionType": props.selectionType,
                        "variant": props.variant === "two-line" ? "option_space" : "standard",
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

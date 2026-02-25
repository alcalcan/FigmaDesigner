import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { checkbox } from "../checkbox/checkbox";
import { radio_button } from "../radio_button/radio_button";

type OptionType = { name: string, selected: boolean, icon?: new () => BaseComponent, hoverState?: boolean, boxCornerRadius?: number, boxShadow?: boolean, labelMaxWidth?: number, rowCornerRadius?: number, rowShadow?: boolean };

export class dropdown_options extends BaseComponent {
    async create(props: ComponentProps & {
        options?: OptionType[],
        selectionType?: "checkbox" | "radio" | "text-only",
        width?: number,
        bodyPadding?: number,
        bodyPaddingTop?: number,
        bodyPaddingBottom?: number,
        bodyPaddingLeft?: number,
        bodyPaddingRight?: number,
        bodyCornerRadius?: number,
        bodyShadow?: boolean | "PREMIUM",
        optionBottomStroke?: boolean,
        optionPaddingVertical?: number,
        variant?: "standard" | "option_space"
    }): Promise<SceneNode> {
        // Default dummy options if none provided
        const defaultOptions: OptionType[] = [
            { name: "Default Option 1", selected: false },
            { name: "Default Option 2", selected: true },
            { name: "Default Option 3", selected: false },
            { name: "Default Option 4", selected: false }
        ];

        const options: OptionType[] = (props.options && props.options.length > 0) ? props.options : defaultOptions;
        const selectionType = props.selectionType || "checkbox"; // Default to checkbox
        console.log(`[dropdown_options] Creating dropdown with ${options.length} options (${props.options ? 'prop-driven' : 'defaults'}) as ${selectionType}`);

        const isOptionSpace = props.variant === "option_space";

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": isOptionSpace ? "option_space" : "Dropdown Menu",
            "props": {
                "visible": true, "opacity": 1, "blendMode": "PASS_THROUGH",
                "clipsContent": isOptionSpace ? true : false,
                "layoutMode": "VERTICAL", "itemSpacing": isOptionSpace ? 0 : 4,
                "paddingTop": isOptionSpace ? 0 : (props.bodyPaddingTop ?? props.bodyPadding ?? 8),
                "paddingRight": isOptionSpace ? 0 : (props.bodyPaddingRight ?? props.bodyPadding ?? 8),
                "paddingBottom": isOptionSpace ? 0 : (props.bodyPaddingBottom ?? props.bodyPadding ?? 8),
                "paddingLeft": isOptionSpace ? 0 : (props.bodyPaddingLeft ?? props.bodyPadding ?? 8),
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": isOptionSpace ? "CENTER" : "MIN",
                "counterAxisAlignItems": "MIN",
                "fills": [
                    {
                        "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 }
                    }
                ],
                "strokes": isOptionSpace ? [] : [
                    {
                        "type": "SOLID",
                        "color": { "r": 0.9, "g": 0.92, "b": 0.94 }
                    }
                ],
                "effects": isOptionSpace ? [
                    {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
                        "offset": { "x": 0, "y": 4 },
                        "radius": 4
                    }
                ] : (props.bodyShadow === "PREMIUM" ? [
                    {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.15 },
                        "offset": { "x": 0, "y": 8 },
                        "radius": 24
                    }
                ] : (props.bodyShadow === false ? [] : [
                    {
                        "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                        "color": { "r": 0, "g": 0, "b": 0, "a": 0.1 },
                        "offset": { "x": 0, "y": 4 },
                        "radius": 12
                    }
                ])),
                "cornerRadius": isOptionSpace ? 4 : (props.bodyCornerRadius ?? 12)
            },
            "layoutProps": { "width": props.width ?? 200, "height": 100, "parentIsAutoLayout": false },
            "children": options.map(auth => {
                if (selectionType === "text-only") {
                    return {
                        "type": "FRAME",
                        "name": "option",
                        "props": {
                            "layoutMode": "HORIZONTAL",
                            "itemSpacing": 8,
                            "paddingTop": props.optionPaddingVertical ?? 19,
                            "paddingBottom": props.optionPaddingVertical ?? 19,
                            "paddingLeft": 16,
                            "paddingRight": 16,
                            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                            "strokes": props.optionBottomStroke ? [{ "type": "SOLID", "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 } }] : [],
                            "strokeBottomWeight": props.optionBottomStroke ? 1 : 0,
                            "strokeAlign": "OUTSIDE",
                            "fills": auth.hoverState ? [{ "type": "SOLID", "color": { "r": 0.95, "g": 0.95, "b": 0.95 } }] : [],
                            "layoutAlign": "STRETCH",
                        },
                        "layoutProps": { "parentIsAutoLayout": true },
                        "children": [
                            {
                                "type": "TEXT",
                                "name": "Placeholder",
                                "props": {
                                    "characters": auth.name,
                                    "fontSize": 14,
                                    "fills": [{ "type": "SOLID", "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 } }],
                                    "font": { "family": "Manrope", "style": "Regular" },
                                    "layoutGrow": 1
                                }
                            }
                        ]
                    } as NodeDefinition;
                }

                return {
                    "type": "COMPONENT",
                    "component": selectionType === "radio" ? radio_button : checkbox,
                    "props": {
                        "characterOverride": auth.name,
                        "checked": auth.selected,
                        "icon": auth.icon,
                        "hoverState": auth.hoverState,
                        "boxCornerRadius": auth.boxCornerRadius,
                        "boxShadow": auth.boxShadow,
                        "labelMaxWidth": auth.labelMaxWidth,
                        "rowCornerRadius": auth.rowCornerRadius,
                        "rowShadow": auth.rowShadow
                    },
                    "postCreate": (node: SceneNode) => {
                        const frame = node as FrameNode;
                        frame.layoutAlign = "STRETCH";
                    }
                } as NodeDefinition;
            })
        };

        const root = await this.renderDefinition(structure);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

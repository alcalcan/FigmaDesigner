import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

interface ProgressStepperProps extends ComponentProps {
    steps: string[];
    currentStep: number;
    width?: number;
    indicatorSize?: number;
    activeColor?: RGB;
    completedColor?: RGB;
    pendingColor?: RGB;
    fontFamily?: string;
    indicatorShape?: "CIRCLE" | "SQUARE";
    indicatorContent?: "NUMBER" | "CHECK" | "LETTER" | "DOT";
    completedStepContent?: "CHECK" | "NUMBER" | "LETTER" | "DOT";
}

export class progress_stepper extends BaseComponent {
    async create(props: ProgressStepperProps): Promise<SceneNode> {
        const steps = props.steps || ["Step 1", "Step 2", "Step 3"];
        const currentStep = props.currentStep ?? 0;
        const indicatorSize = props.indicatorSize ?? 24;
        const fontFamily = props.fontFamily ?? "Open Sans";
        const indicatorShape = props.indicatorShape ?? "CIRCLE";
        const indicatorContent = props.indicatorContent ?? "NUMBER";
        const completedStepContent = props.completedStepContent ?? "CHECK";

        const activeColor = props.activeColor ?? { r: 0.12, g: 0.53, b: 0.90 }; // Default Blue
        const completedColor = props.completedColor ?? activeColor;
        const pendingColor = props.pendingColor ?? { r: 0.7, g: 0.7, b: 0.7 }; // Default Grey

        // Load fonts
        await figma.loadFontAsync({ family: fontFamily, style: "Regular" });
        await figma.loadFontAsync({ family: fontFamily, style: "Bold" });

        // Other Colors
        const white = { r: 1, g: 1, b: 1 };
        const black = { r: 0, g: 0, b: 0 };
        const greyText = { r: 0.4, g: 0.4, b: 0.4 };

        const children: NodeDefinition[] = [];

        steps.forEach((stepLabel, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            // --- Step Indicator ---
            let bgFill = white;
            let labelFill = greyText;
            let content: NodeDefinition;

            // Determine what content to show
            // If completed, use completedStepContent (defaults to CHECK).
            // If not completed (active or pending), use indicatorContent (defaults to NUMBER).
            const contentType = isCompleted ? completedStepContent : indicatorContent;

            if (isCompleted) {
                bgFill = completedColor;
                labelFill = black;
            } else if (isActive) {
                bgFill = activeColor;
                labelFill = black;
            } else {
                bgFill = pendingColor;
                labelFill = greyText;
            }

            // --- Render Content based on Type ---
            if (contentType === "CHECK") {
                content = {
                    "type": "VECTOR",
                    "name": "CheckIcon",
                    "svgContent": `<svg width="${indicatorSize / 2}" height="${indicatorSize / 2}" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                    "layoutProps": { "width": indicatorSize / 2, "height": indicatorSize / 2, "layoutAlign": "CENTER", "parentIsAutoLayout": true }
                };
            } else if (contentType === "DOT") {
                content = {
                    "type": "ELLIPSE",
                    "name": "Dot",
                    "props": {
                        "fills": [{ type: "SOLID", color: white }]
                    },
                    "layoutProps": { "width": indicatorSize / 4, "height": indicatorSize / 4, "layoutAlign": "CENTER", "parentIsAutoLayout": true }
                };
            } else if (contentType === "LETTER") {
                const letter = String.fromCharCode(65 + index); // A, B, C...
                content = {
                    "type": "TEXT",
                    "name": "StepLetter",
                    "props": {
                        "characters": letter,
                        "fontSize": indicatorSize * 0.5,
                        "fills": [{ type: "SOLID", color: white }],
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER",
                        "font": { "family": fontFamily, "style": isActive || isCompleted ? "Bold" : "Regular" }
                    },
                    "layoutProps": { "layoutAlign": "CENTER", "parentIsAutoLayout": true }
                };
            } else {
                // Default: NUMBER
                content = {
                    "type": "TEXT",
                    "name": "StepNumber",
                    "props": {
                        "characters": (index + 1).toString(),
                        "fontSize": indicatorSize * 0.5,
                        "fills": [{ type: "SOLID", color: white }],
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER",
                        "font": { "family": fontFamily, "style": isActive || isCompleted ? "Bold" : "Regular" }
                    },
                    "layoutProps": { "layoutAlign": "CENTER", "parentIsAutoLayout": true }
                };
            }

            const stepNode: NodeDefinition = {
                "type": "FRAME",
                "name": `Step_${index}`,
                "props": {
                    "layoutMode": "HORIZONTAL",
                    "itemSpacing": 8,
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                    "fills": []
                },
                "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "MIN" }, // Don't grow, take needed space
                "children": [
                    // Circle/Square
                    {
                        "type": "FRAME",
                        "name": "Indicator",
                        "props": {
                            "width": indicatorSize, "height": indicatorSize,
                            "cornerRadius": indicatorShape === "CIRCLE" ? indicatorSize / 2 : 2, // 2px roundness if square
                            "layoutMode": "HORIZONTAL",
                            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                            "fills": [{ type: "SOLID", color: bgFill }],
                        },
                        "layoutProps": { "width": indicatorSize, "height": indicatorSize, "layoutGrow": 0, "parentIsAutoLayout": true },
                        "children": [content]
                    },
                    // Label
                    {
                        "type": "TEXT",
                        "name": "Label",
                        "props": {
                            "characters": stepLabel,
                            "fontSize": 14,
                            "fills": [{ type: "SOLID", color: labelFill }],
                            "font": { "family": fontFamily, "style": isActive ? "Bold" : "Regular" }
                        },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 0 }
                    }
                ]
            };

            children.push(stepNode);

            // --- Connector Line ---
            if (index < steps.length - 1) {
                const isLineActive = index < currentStep;
                const lineColor = isLineActive ? completedColor : pendingColor;

                children.push({
                    "type": "RECTANGLE",
                    "name": "Connector",
                    "props": {
                        "fills": [{ type: "SOLID", color: lineColor }],
                        "cornerRadius": 1
                    },
                    "layoutProps": {
                        "height": 2,
                        "layoutGrow": 1, // FILL SPACE between steps
                        "parentIsAutoLayout": true,
                        "layoutAlign": "CENTER"
                    }
                });
            }
        });

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "progress_stepper",
            "props": {
                "layoutMode": "HORIZONTAL",
                "itemSpacing": 8,
                "primaryAxisSizingMode": "FIXED",
                "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                "fills": []
            },
            "layoutProps": {
                "width": props.width ?? 600,
                "height": 40,
                "x": props.x ?? 0,
                "y": props.y ?? 0,
                "parentIsAutoLayout": false,
                "layoutAlign": "STRETCH"
            },
            "children": children
        };

        structure.props = { ...structure.props, ...props };
        if (props.width) {
            structure.layoutProps!.width = props.width;
        }

        return this.renderDefinition(structure);
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

// Icons
import { Lucide_info } from "../../lucide_icons/Lucide_info/Lucide_info";
import { Lucide_check_circle } from "../../lucide_icons/Lucide_check_circle/Lucide_check_circle";
import { Lucide_alert_triangle } from "../../lucide_icons/Lucide_alert_triangle/Lucide_alert_triangle";
import { Lucide_alert_circle } from "../../lucide_icons/Lucide_alert_circle/Lucide_alert_circle";
import { Lucide_x } from "../../lucide_icons/Lucide_x/Lucide_x";

export type ToastVariant = "default" | "success" | "warning" | "error" | "info";

export interface ToastProps extends ComponentProps {
    variant?: ToastVariant;
    title?: string;
    description?: string;
    actionText?: string;
    showCloseIcon?: boolean;
    customIcon?: any;
}

export class Toast extends BaseComponent {
    private getVariantConfig(variant: ToastVariant) {
        switch (variant) {
            case "success":
                return {
                    iconColor: { r: 0.13, g: 0.77, b: 0.36 }, // Green
                    bgColor: { r: 1, g: 1, b: 1 },
                    iconType: new Lucide_check_circle()
                };
            case "error":
                return {
                    iconColor: { r: 0.93, g: 0.26, b: 0.27 }, // Red
                    bgColor: { r: 1, g: 1, b: 1 },
                    iconType: new Lucide_alert_circle()
                };
            case "warning":
                return {
                    iconColor: { r: 0.96, g: 0.65, b: 0.13 }, // Yellow/Orange
                    bgColor: { r: 1, g: 1, b: 1 },
                    iconType: new Lucide_alert_triangle()
                };
            case "info":
                return {
                    iconColor: { r: 0.23, g: 0.51, b: 0.96 }, // Blue
                    bgColor: { r: 1, g: 1, b: 1 },
                    iconType: new Lucide_info()
                };
            case "default":
            default:
                return {
                    iconColor: { r: 0.4, g: 0.4, b: 0.45 },
                    bgColor: { r: 1, g: 1, b: 1 },
                    iconType: new Lucide_info() // Default generic icon, or none at all if omitted
                };
        }
    }

    async create(props: ToastProps): Promise<SceneNode> {
        const variant = props.variant || "default";
        const config = this.getVariantConfig(variant);

        // Build the icon node
        let iconNode: SceneNode | null = null;
        if (props.customIcon) {
            iconNode = props.customIcon;
        } else if (config.iconType) {
            iconNode = await config.iconType.create({
                color: config.iconColor,
                width: 20,
                height: 20
            });
        }

        // Action Text configuration (optional user interaction inside toast)
        const actionNodes = props.actionText ? [
            createFrame("Action Area", {
                layoutMode: "HORIZONTAL",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                paddingLeft: 12, // Space between body and action
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER"
            }, [
                createText("Action Text", props.actionText, 14, "Semi Bold", config.iconColor, {
                    layoutAlign: "CENTER",
                    textAutoResize: "WIDTH_AND_HEIGHT"
                })
            ])
        ] : [];

        // Determine if we need to show a close button
        const showCloseIcon = props.showCloseIcon !== false; // Default true if unspecified
        let closeIconNode: SceneNode | null = null;
        if (showCloseIcon) {
            const closeClass = new Lucide_x();
            closeIconNode = await closeClass.create({
                color: { r: 0.6, g: 0.6, b: 0.65 },
                width: 16,
                height: 16
            });
        }

        const closeNodes = closeIconNode ? [
            createFrame("Close Button Area", {
                layoutMode: "HORIZONTAL",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                paddingLeft: 8,
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER"
            }, []) // Placeholder for actual icon node injected below
        ] : [];

        // Build the text fields structure
        const textFields: NodeDefinition[] = [];
        if (props.title) {
            textFields.push(createText("Title", props.title, 14, "Semi Bold", { r: 0.1, g: 0.1, b: 0.12 }, {
                layoutAlign: "STRETCH",
                textAutoResize: "HEIGHT"
            }));
        }
        if (props.description) {
            textFields.push(createText("Description", props.description, 13, "Regular", { r: 0.4, g: 0.4, b: 0.45 }, {
                layoutAlign: "STRETCH",
                lineHeight: { unit: "PERCENT", value: 140 },
                textAutoResize: "HEIGHT"
            }));
        }

        // Failsafe text if both omitted
        if (textFields.length === 0) {
            textFields.push(createText("Title", "Notification message.", 14, "Regular", { r: 0.1, g: 0.1, b: 0.12 }, {
                layoutAlign: "STRETCH",
                textAutoResize: "HEIGHT"
            }));
        }

        const structure: NodeDefinition = createFrame("Toast", {
            layoutMode: "HORIZONTAL",
            itemSpacing: 12,
            paddingTop: 12,
            paddingRight: 16,
            paddingBottom: 12,
            paddingLeft: 16,
            primaryAxisSizingMode: "FIXED",
            counterAxisSizingMode: "AUTO",
            primaryAxisAlignItems: "MIN",
            counterAxisAlignItems: "MIN", // Align to top for multi-line description text
            fills: [{ type: "SOLID", color: config.bgColor }],
            cornerRadius: 8,
            strokes: [{ type: "SOLID", color: { r: 0, g: 0, b: 0, a: 0.05 } }], // Subtle border
            strokeWeight: 1,
            effects: [
                {
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.1 },
                    offset: { x: 0, y: 8 },
                    radius: 24,
                    showShadowBehindNode: false,
                    visible: true,
                    blendMode: "NORMAL"
                },
                {
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.04 },
                    offset: { x: 0, y: 2 },
                    radius: 8,
                    showShadowBehindNode: false,
                    visible: true,
                    blendMode: "NORMAL"
                }
            ],
            layoutProps: { width: props.width && props.width !== "fill" ? props.width : 360 }
        }, [
            // Icon container
            createFrame("Icon Container", {
                layoutMode: "VERTICAL",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                paddingTop: 2 // slight offset to align with first line of text
            }, []), // Placeholder for icon

            // Text Body Container
            createFrame("Body", {
                layoutMode: "VERTICAL",
                itemSpacing: 4,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                layoutGrow: 1 // fill remaining width
            }, textFields),

            ...actionNodes,
            ...closeNodes
        ]);

        const root = await this.renderDefinition(structure) as FrameNode;

        // Inject the dynamically created icons into their respective containers
        if (iconNode) {
            const iconContainer = root.findOne(n => n.name === "Icon Container" && n.type === "FRAME") as FrameNode;
            if (iconContainer) {
                iconContainer.appendChild(iconNode);
            }
        } else {
            // Remove empty icon container
            const iconContainer = root.findOne(n => n.name === "Icon Container" && n.type === "FRAME");
            if (iconContainer) {
                iconContainer.remove();
            }
        }

        if (closeIconNode) {
            const closeContainer = root.findOne(n => n.name === "Close Button Area" && n.type === "FRAME") as FrameNode;
            if (closeContainer) {
                closeContainer.appendChild(closeIconNode);
            }
        }

        // Set dimensions and positioning explicitly based on generic ComponentProps
        if (props.width === "fill") {
            root.layoutAlign = "STRETCH";
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

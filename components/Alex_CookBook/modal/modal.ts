import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";
import { button } from "../button/button";
import { Lucide_x } from "../../lucide_icons/Lucide_x/Lucide_x";

export interface ModalProps extends ComponentProps {
    title: string;
    description?: string;
    statusIcon?: string; // Optional SVG string for alert/status icons

    variant?: "unified" | "unified_with_dividers" | "separated";
    showCloseIcon?: boolean;

    // Body
    bodyContent?: NodeDefinition[];
    bodyPadding?: "none" | "standard"; // none = 0px, standard = 24px

    // Footer
    primaryCtaText?: string;
    secondaryCtaText?: string;

    // Width
    width?: number; // default 480

    // Custom Styling & Overrides
    titleColorOverride?: RGB;
    descColorOverride?: RGB;
    rootStrokes?: Paint[];
    rootCornerRadius?: number;
    customFooterContent?: NodeDefinition[];

    // Custom Colors
    headerFill?: RGB;
    bodyFill?: RGB;
    footerFill?: RGB;
}

export class modal extends BaseComponent {
    async create(props: ModalProps): Promise<SceneNode> {
        const variant = props.variant || "unified";
        const width = props.width || 480;
        const bodyPadding = props.bodyPadding === "none" ? 0 : 24;
        const showCloseIcon = props.showCloseIcon ?? true;

        const defaultBg: RGB = { r: 1, g: 1, b: 1 };
        const defaultHeaderSeparated: RGB = { r: 0.98, g: 0.98, b: 0.99 };
        const defaultFooterSeparated: RGB = { r: 0.98, g: 0.98, b: 0.99 };

        const headerFill = props.headerFill || (variant === "separated" ? defaultHeaderSeparated : defaultBg);
        const bodyFill = props.bodyFill || defaultBg;
        const footerFill = props.footerFill || (variant === "separated" ? defaultFooterSeparated : defaultBg);

        const dividerColor: RGB = { r: 0.9, g: 0.9, b: 0.92 };

        // Darkened per user feedback (Audio #1)
        const titleColor: RGB = { r: 0.02, g: 0.04, b: 0.08 }; // Almost black
        const descColor: RGB = { r: 0, g: 0, b: 0 };         // Pure black for maximum readability

        // Wrapper Properties based on variant
        const isUnified = variant === "unified" || variant === "unified_with_dividers";

        const rootProps: NodeDefinition["props"] = {
            layoutMode: "VERTICAL",
            primaryAxisSizingMode: "AUTO", // Hug height
            counterAxisSizingMode: "FIXED", // Fixed width
            itemSpacing: isUnified ? 24 : 0, // Gap between header, body, and footer
            fills: isUnified ? [{ type: "SOLID", color: defaultBg }] : [],
            strokes: props.rootStrokes ?? [{ type: "SOLID", color: dividerColor }],
            strokeWeight: 1,
            cornerRadius: props.rootCornerRadius !== undefined ? props.rootCornerRadius : 16,
            clipsContent: true, // IMPORTANT: Clip children so body/footer background doesn't leak out of the curved corners
            effects: [
                { type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: 0, y: 12 }, radius: 24, showShadowBehindNode: false },
                { type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.05 }, offset: { x: 0, y: 4 }, radius: 8, showShadowBehindNode: false }
            ],
            // For unified, apply padding on the root container so children flow naturally.
            // For separated, the root has 0 padding, and padding lives in the sections.
            paddingTop: isUnified ? 24 : 0,
            paddingRight: isUnified ? 24 : 0,
            paddingBottom: isUnified ? 24 : 0,
            paddingLeft: isUnified ? 24 : 0,
        };

        const children: NodeDefinition[] = [];

        // --- HEADER ---
        const headerContent: NodeDefinition[] = [];
        const headerTitleStack: NodeDefinition[] = [
            createText("Title", props.title, 18, "Semi Bold", props.titleColorOverride || titleColor, { font: { family: "Inter", style: "Semi Bold" } })
        ];

        if (props.description) {
            headerTitleStack.push(
                createText("Description", props.description, 14, "Regular", props.descColorOverride || descColor, { font: { family: "Inter", style: "Regular" } })
            );
        }

        const titleStackContainer = createFrame("Title Stack", {
            layoutMode: "VERTICAL",
            itemSpacing: 4,
            fills: [],
            counterAxisSizingMode: "AUTO", // Ensure HUG
            layoutProps: { layoutGrow: 1, parentIsAutoLayout: true }
        }, headerTitleStack);

        // If statusIcon exists, encapsulate title and icon in a horizontal group
        if (props.statusIcon) {
            const iconContainer = createFrame("Status Icon Wrapper", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "CENTER",
                counterAxisAlignItems: "CENTER",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "FIXED",
                cornerRadius: 24, // Round container
                fills: [{ type: "SOLID", color: { r: 0.98, g: 0.9, b: 0.92 } }], // Soft alert bg (customizable later if needed)
                layoutProps: { width: 48, height: 48, parentIsAutoLayout: true }
            }, [
                {
                    type: "VECTOR",
                    name: "Status Icon",
                    svgContent: props.statusIcon,
                    props: {
                        strokes: [{ type: "SOLID", color: { r: 0.8, g: 0.2, b: 0.2 } }], // Apply red to strokes instead of fills
                        strokeWeight: 2,
                    },
                    layoutProps: { width: 24, height: 24, parentIsAutoLayout: true }
                }
            ]);

            headerContent.push(createFrame("Header Title Section", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "MIN",
                counterAxisAlignItems: "MIN", // Align to top for multi-line descriptions
                itemSpacing: 16,
                fills: [],
                counterAxisSizingMode: "AUTO", // Ensure HUG
                layoutProps: { layoutGrow: 1, parentIsAutoLayout: true }
            }, [iconContainer, titleStackContainer]));
        } else {
            // Standard title stack
            headerContent.push(titleStackContainer);
        }

        if (showCloseIcon) {
            headerContent.push({
                type: "COMPONENT",
                component: button,
                name: "Close Button",
                props: {
                    variant: "ghost",
                    frontIcon: Lucide_x,
                    size: "small",
                    frontIconColor: props.titleColorOverride // Inherit close icon color from title color override if provided
                }
            });
        }

        const showDivider = variant === "separated" || variant === "unified_with_dividers";

        children.push(createFrame("Modal Header", {
            layoutMode: "HORIZONTAL",
            primaryAxisAlignItems: "SPACE_BETWEEN",
            counterAxisAlignItems: props.description ? "MIN" : "CENTER",
            layoutAlign: "STRETCH", // Fill width
            primaryAxisSizingMode: "FIXED",
            counterAxisSizingMode: "AUTO", // Hug height (Ensure this is AUTO for Hug)
            layoutSizingVertical: "HUG",   // Explicitly set for newer Figma API compatibility
            paddingTop: isUnified ? 0 : 24,
            paddingRight: isUnified ? 0 : 24,
            paddingBottom: isUnified ? (showDivider ? 24 : 16) : (showDivider ? 24 : 16),
            paddingLeft: isUnified ? 0 : 24,
            fills: variant === "separated" ? [{ type: "SOLID", color: headerFill }] : [],
            strokes: showDivider ? [{ type: "SOLID", color: dividerColor }] : [],
            strokeBottomWeight: showDivider ? 1 : 0,
            strokeTopWeight: 0, strokeLeftWeight: 0, strokeRightWeight: 0,
        }, headerContent));


        // --- BODY ---
        const bodyContent = props.bodyContent && props.bodyContent.length > 0
            ? props.bodyContent
            : [createText("Empty Body", "Put modal content here.", 16, "Regular", { r: 0, g: 0, b: 0 }, { font: { family: "Inter", style: "Regular" }, textAutoResize: "WIDTH_AND_HEIGHT" })];

        children.push(createFrame("Modal Body", {
            layoutMode: "VERTICAL",
            itemSpacing: 16, // Fixed spacing specifically requested in audio feedback
            layoutAlign: "STRETCH",
            primaryAxisSizingMode: "AUTO", // Hug height
            paddingTop: isUnified ? 0 : bodyPadding,
            paddingRight: isUnified ? 0 : bodyPadding,
            paddingBottom: isUnified ? 0 : bodyPadding,
            paddingLeft: isUnified ? 0 : bodyPadding,
            fills: variant === "separated" ? [{ type: "SOLID", color: bodyFill }] : [],
        }, bodyContent));


        // --- FOOTER ---
        if (props.customFooterContent) {
            children.push(createFrame("Modal Footer", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "MAX",
                counterAxisAlignItems: "CENTER",
                itemSpacing: 12,
                layoutAlign: "STRETCH",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "AUTO",
                paddingTop: isUnified ? (showDivider ? 24 : 16) : (showDivider ? 24 : 16),
                paddingRight: isUnified ? 0 : 24,
                paddingBottom: isUnified ? 0 : 24,
                paddingLeft: isUnified ? 0 : 24,
                fills: variant === "separated" ? [{ type: "SOLID", color: footerFill }] : [],
                strokes: showDivider ? [{ type: "SOLID", color: dividerColor }] : [],
                strokeTopWeight: showDivider ? 1 : 0,
                strokeBottomWeight: 0, strokeLeftWeight: 0, strokeRightWeight: 0,
            }, props.customFooterContent));

        } else if (props.primaryCtaText || props.secondaryCtaText) {
            const footerContent: NodeDefinition[] = [];

            if (props.secondaryCtaText) {
                footerContent.push({
                    type: "COMPONENT",
                    component: button,
                    name: "Secondary CTA",
                    props: {
                        label: props.secondaryCtaText,
                        variant: "outline",
                        size: "medium",
                        width: "fill"
                    },
                    layoutProps: { layoutGrow: 1, parentIsAutoLayout: true }
                });
            }

            if (props.primaryCtaText) {
                footerContent.push({
                    type: "COMPONENT",
                    component: button,
                    name: "Primary CTA",
                    props: {
                        label: props.primaryCtaText,
                        variant: "primary",
                        size: "medium",
                        width: "fill"
                    },
                    layoutProps: { layoutGrow: 1, parentIsAutoLayout: true }
                });
            }

            children.push(createFrame("Modal Footer", {
                layoutMode: "HORIZONTAL",
                primaryAxisAlignItems: "MAX",
                counterAxisAlignItems: "CENTER",
                itemSpacing: 12,
                layoutAlign: "STRETCH",
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "AUTO",
                paddingTop: isUnified ? (showDivider ? 24 : 16) : (showDivider ? 24 : 16),
                paddingRight: isUnified ? 0 : 24,
                paddingBottom: isUnified ? 0 : 24,
                paddingLeft: isUnified ? 0 : 24,
                fills: variant === "separated" ? [{ type: "SOLID", color: footerFill }] : [],
                strokes: showDivider ? [{ type: "SOLID", color: dividerColor }] : [],
                strokeTopWeight: showDivider ? 1 : 0,
                strokeBottomWeight: 0, strokeLeftWeight: 0, strokeRightWeight: 0,
            }, footerContent));
        }


        // Assemble
        const structure: NodeDefinition = {
            type: "FRAME",
            name: "Modal",
            props: rootProps,
            layoutProps: {
                width: width
            },
            children: children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

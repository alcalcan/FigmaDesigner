import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

// SVG Assets - Chevrond Down
const SVG_chevron_down = `<svg width="12" height="7.4" viewBox="0 0 12 7.4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4 0L0 1.4L6 7.4L12 1.4L10.6 0L6 4.6L1.4 0Z" fill="black"/>
</svg>`;

export class SubSection_collapsed extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = createFrame("SubSection (Collapsed)", {
            layoutMode: "VERTICAL",
            itemSpacing: 0,
            paddingTop: 24,
            paddingRight: 24,
            paddingBottom: 24,
            paddingLeft: 24,
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "FIXED",
            layoutAlign: "STRETCH",
            fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            cornerRadius: 8,
            effects: [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.12 },
                offset: { x: 0, y: 2 },
                radius: 6,
                showShadowBehindNode: true
            }]
        }, [
            createFrame("Header", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 24,
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "AUTO",
                counterAxisAlignItems: "CENTER",
                layoutAlign: "STRETCH",
                fills: []
            }, [
                createText("Subject", props.name || "Collapsed Section", 20, "SemiBold", { r: 0.1, g: 0.19, b: 0.23 }, {
                    font: { family: "Open Sans", style: "SemiBold" },
                    layoutGrow: 1
                }),
                createFrame("Badge", {
                    layoutMode: "HORIZONTAL",
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 4,
                    paddingBottom: 4,
                    cornerRadius: 100,
                    primaryAxisSizingMode: "AUTO",
                    counterAxisSizingMode: "AUTO",
                    strokes: [{ type: "SOLID", color: { r: 0, g: 0.63, b: 0.58 } }],
                    fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]
                }, [
                    createText("Badge Text", "Locked", 14, "Regular", { r: 0.1, g: 0.19, b: 0.23 }, {
                        font: { family: "Manrope", style: "Regular" }
                    })
                ]),
                createFrame("Chevron Container", {
                    layoutProps: { width: 40, height: 40 },
                    cornerRadius: 100,
                    fills: [{ type: "SOLID", color: { r: 0.94, g: 0.95, b: 0.97 } }]
                }, [
                    {
                        type: "VECTOR",
                        name: "chevron-down",
                        svgContent: SVG_chevron_down,
                        shouldFlatten: true,
                        layoutProps: {
                            width: 12,
                            height: 7.4,
                            relativeTransform: [[1, 0, 14], [0, 1, 16.3]],
                            parentIsAutoLayout: true
                        }
                    }
                ])
            ])
        ]);

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export interface SpinnerProps extends ComponentProps {
    progress?: number; // 0 to 100
    size?: number; // diameter in pixels
    strokeWeight?: number; // thickness of the donut ring
    showLabel?: boolean; // whether to show text inside
    labelValue?: string; // override for the text inside
    trackColor?: RGB; // color of the background ring
    activeColor?: RGB | RGB[]; // color of the foreground ring (can be a gradient array)
}

export class spinner extends BaseComponent {
    async create(props: SpinnerProps): Promise<SceneNode> {
        const progress = Math.max(0, Math.min(100, props.progress ?? 50));
        const size = props.size ?? 48;
        const strokeWeight = props.strokeWeight ?? 4;
        const showLabel = props.showLabel ?? false;

        const defaultTrack: RGB = { r: 0.9, g: 0.92, b: 0.94 };
        const defaultActive: RGB = { r: 0, g: 0.635, b: 0.588 }; // Alex Cookbook Green

        const trackColor = props.trackColor ?? defaultTrack;
        const activeColorOpt = props.activeColor ?? defaultActive;

        const innerRadiusRatio = 1 - (strokeWeight * 2 / size);

        const startingAngle = -Math.PI / 2;
        const sweepAngle = (progress / 100) * 2 * Math.PI;

        // Determine fills for active progress
        let activeFills: Paint[] = [];
        if (Array.isArray(activeColorOpt) && activeColorOpt.length >= 2) {
            // It's a gradient
            activeFills = [{
                type: "GRADIENT_LINEAR",
                gradientTransform: [[1, 0, 0], [0, 1, 0]],
                gradientStops: [
                    { position: 0, color: { ...activeColorOpt[0], a: 1 } },
                    { position: 1, color: { ...activeColorOpt[1], a: 1 } }
                ]
            }];
        } else {
            // It's a solid tint
            const color = Array.isArray(activeColorOpt) ? activeColorOpt[0] : activeColorOpt;
            activeFills = [{ type: "SOLID", color: color }];
        }

        const ellipses: NodeDefinition[] = [
            {
                type: "ELLIPSE",
                name: "Track",
                props: {
                    fills: [{ type: "SOLID", color: trackColor }],
                    arcData: {
                        startingAngle: 0,
                        endingAngle: 2 * Math.PI,
                        innerRadius: innerRadiusRatio
                    }
                },
                layoutProps: {
                    width: size,
                    height: size,
                    layoutPositioning: "ABSOLUTE",
                    x: 0,
                    y: 0
                }
            }
        ];

        if (progress > 0) {
            ellipses.push({
                type: "ELLIPSE",
                name: "Progress",
                props: {
                    fills: activeFills,
                    cornerRadius: size, // fully rounded caps
                    arcData: {
                        startingAngle: startingAngle,
                        endingAngle: startingAngle + sweepAngle,
                        innerRadius: innerRadiusRatio
                    }
                },
                layoutProps: {
                    width: size,
                    height: size,
                    layoutPositioning: "ABSOLUTE",
                    x: 0,
                    y: 0
                }
            });
        }

        // Add label if requested
        if (showLabel) {
            const labelStr = props.labelValue ?? `${Math.round(progress)}%`;
            // Auto size the text vaguely proportional to the diameter
            const fontSize = Math.max(10, Math.floor(size * 0.25));

            ellipses.push({
                type: "TEXT",
                name: "Percentage",
                props: {
                    characters: labelStr,
                    fontSize: fontSize,
                    font: { family: "Open Sans", style: "Bold" },
                    fills: [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }],
                    textAlignHorizontal: "CENTER",
                    textAlignVertical: "CENTER"
                },
                layoutProps: {
                    layoutPositioning: "ABSOLUTE",
                    parentIsAutoLayout: false,
                    constraints: { horizontal: "CENTER", vertical: "CENTER" },
                    relativeTransform: [[1, 0, 0], [0, 1, 0]],
                    // We rely on standard text node behaviors via ComponentHelpers which is typically fine
                    // A quick centering using constraints. But since it's ABSOLUTE without defined positioning, 
                    // it might snap to 0,0. We need to center it manually via relativeTransform if constraints fail.
                    // Instead, we will center it directly when the node is created inside create() to be safe.
                }
            });
        }

        const structure: NodeDefinition = createFrame(`Spinner (${Math.round(progress)}%)`, {
            layoutMode: "NONE",
            fills: [],
            clipsContent: false
        }, ellipses);

        structure.layoutProps = {
            width: size,
            height: size,
            parentIsAutoLayout: true // Assuming it will be placed inside AutoLayout flows
        };

        const root = await this.renderDefinition(structure) as FrameNode;

        // Manual centering for the absolute text label to avoid standard positioning issues
        if (showLabel) {
            const textNode = root.findOne(n => n.name === "Percentage") as TextNode;
            if (textNode) {
                // Approximate width/height centering without waiting for full text layout reflow
                textNode.x = (size - textNode.width) / 2;
                textNode.y = (size - textNode.height) / 2;
            }
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

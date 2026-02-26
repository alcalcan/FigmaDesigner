import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface ProgressBarProps extends ComponentProps {
    progress?: number; // 0 to 100
    width?: number | "fill";
    size?: "small" | "medium" | "large";
    showLabel?: boolean;
    color?: "default" | "success" | "error" | "warning";
}

export class progress_bar extends BaseComponent {
    async create(props: ProgressBarProps): Promise<SceneNode> {
        const progress = Math.max(0, Math.min(100, props.progress ?? 50));
        const totalWidth = typeof props.width === 'number' ? props.width : 320;
        const size = props.size ?? "medium";
        const showLabel = props.showLabel ?? false;
        const colorType = props.color ?? "default";

        let height = 8;
        if (size === "small") height = 4;
        if (size === "large") height = 12;

        const colors = {
            "default": { r: 0, g: 0.635, b: 0.588 }, // Alex Cookbook Green
            "success": { r: 0.133, g: 0.773, b: 0.369 },
            "error": { r: 0.937, g: 0.267, b: 0.267 },
            "warning": { r: 0.961, g: 0.62, b: 0.043 }
        };

        const activeColor = colors[colorType] || colors["default"];
        const trackColor = { r: 0.88, g: 0.91, b: 0.92 };

        const barWidth = totalWidth * (progress / 100);

        const trackComponent: NodeDefinition = {
            "type": "FRAME",
            "name": "Track Container",
            "props": {
                "layoutMode": "NONE",
                "fills": [],
                "clipsContent": false
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "width": totalWidth,
                "height": height
            },
            "children": [
                // Background Track
                {
                    "type": "RECTANGLE",
                    "name": "Track BG",
                    "props": {
                        "fills": [{ type: "SOLID", color: trackColor }],
                        "cornerRadius": height / 2,
                        "x": 0,
                        "y": 0
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": false,
                        "width": totalWidth,
                        "height": height,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                    }
                },
                // Active Track
                {
                    "type": "RECTANGLE",
                    "name": "Active Fill",
                    "props": {
                        "fills": [{ type: "SOLID", color: activeColor }],
                        "cornerRadius": height / 2
                    },
                    "layoutProps": {
                        "parentIsAutoLayout": false,
                        "width": Math.max(0, barWidth),
                        "height": height,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                    }
                }
            ]
        };

        const children: NodeDefinition[] = [];
        children.push(trackComponent);

        if (showLabel) {
            children.push({
                "type": "TEXT",
                "name": "Percentage",
                "props": {
                    "characters": `${Math.round(progress)}%`,
                    "fontSize": 14,
                    "font": { family: "Open Sans", style: "Bold" },
                    "fills": [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }]
                }
            });
        }

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": `Progress Bar (${Math.round(progress)}%)`,
            "props": {
                "layoutMode": "HORIZONTAL",
                "counterAxisAlignItems": "CENTER",
                "itemSpacing": 12,
                "fills": [],
                "clipsContent": false
            },
            "layoutProps": {
                "parentIsAutoLayout": true,
                "width": showLabel ? totalWidth + 50 : totalWidth,
                "height": height > 24 ? height : 24
            },
            "children": children
        };

        const root = await this.renderDefinition(structure);

        // Handle width="fill" by setting layout properties if it becomes a child of an AutoLayout frame
        if (props.width === "fill") {
            // we could expose sizing, but usually the parent handles its auto layout sizing.
            // for simplicity we use the static totalWidth calculated above.
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

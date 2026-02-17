import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import SVG_CONTENT from "./assets/server.svg";

export class Lucide_server extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const iconSize = props.width || 24;
        const strokeWeight = props.strokeWeight ?? 2;
        const color = props.color || { r: 0, g: 0, b: 0 };

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Lucide / server",
            "props": {
                "visible": true,
                "fills": [],
                "strokes": [],
                "clipsContent": false,
                "layoutMode": "NONE"
            },
            "layoutProps": { "width": iconSize, "height": iconSize },
            "children": [
                {
                    "type": "VECTOR",
                    "name": "Icon",
                    "props": {
                        "visible": true,
                        "strokeWeight": strokeWeight,
                        "strokeAlign": "CENTER",
                        "strokes": [{ "type": "SOLID", "color": color }]
                    },
                    "layoutProps": {
                        "width": iconSize,
                        "height": iconSize,
                        "layoutPositioning": "ABSOLUTE",
                        "constraints": { horizontal: "SCALE", vertical: "SCALE" }
                    },
                    "svgContent": SVG_CONTENT,
                    "postCreate": (node: SceneNode, nodeProps: any) => {
                        if (node.type === "VECTOR" || node.type === "FRAME") {
                            // Propagate styles to children if frame, or self if vector
                            const target = node.type === "FRAME" ? node.children : [node];

                            // Iterate through children (or self) to set strokes explicitly
                            // This is a simplified version of what I saw in Lucide_home, adapted
                            if ('strokes' in node) node.strokes = [{ type: "SOLID", color: color }];
                            if ('strokeWeight' in node) node.strokeWeight = strokeWeight;
                            if ('strokeJoin' in node) node.strokeJoin = "ROUND";
                            if ('strokeCap' in node) node.strokeCap = "ROUND";
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

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import SVG_CONTENT from "./assets/filter.svg";

export class Lucide_filter extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const iconSize = props.width || 24;
        const strokeWeight = props.strokeWeight ?? 2;
        const color = props.color || { r: 0, g: 0, b: 0 };

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Lucide / filter",
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
                        // Apply strokes to the frame temporarily, postCreate will move them to paths
                        "strokeWeight": strokeWeight,
                        "strokeAlign": "CENTER",
                        "strokes": [{ "type": "SOLID", "color": color }]
                    },
                    "layoutProps": {
                        "width": iconSize, 
                        "height": iconSize
                    },
                    "svgContent": SVG_CONTENT,
                    "postCreate": (node: SceneNode, nodeProps: any) => {
                        if (node.type === "FRAME") {
                            // Ensure the SVG wrapper doesn't clip its own strokes
                            node.clipsContent = false;
                            
                            // Propagate styles to all paths and set SCALE constraints
                            for (const child of node.children) {
                                if ("constraints" in child) {
                                    child.constraints = { horizontal: "SCALE", vertical: "SCALE" };
                                }
                                
                                // Apply stroke properties to vector children
                                if ("strokes" in child && nodeProps.strokes) {
                                    child.strokes = nodeProps.strokes;
                                }
                                if ("strokeWeight" in child && nodeProps.strokeWeight) {
                                    child.strokeWeight = nodeProps.strokeWeight;
                                }
                                
                                // Ensure standard Lucide rounded look
                                if ("strokeJoin" in child) (child as any).strokeJoin = "ROUND";
                                if ("strokeCap" in child) (child as any).strokeCap = "ROUND";
                            }
                            
                            // Remove strokes from the wrapper frame itself to avoid "contours"
                            node.strokes = [];
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

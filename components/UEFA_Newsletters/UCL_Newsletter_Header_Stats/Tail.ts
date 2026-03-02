import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import SVG_UCL_Newsletter_Header_Stats_assets_icon_Tail_1566_10404_svg_orig from "./assets/UCL_Newsletter_Header_Stats_assets_icon_Tail_1566_10404_svg_orig.svg";

export class Tail extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "VECTOR",
            "shouldFlatten": true,
            "name": "Tail",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1.5, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "fills": [
                    {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 },
                        "boundVariables": {
                            "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5777f4f7711fa0bb602b044c8a6637c746309755/3505:246" }
                        }
                    }
                ],
                "strokes": [
                    {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 },
                        "boundVariables": {}
                    }
                ],
                "effects": [
                    {
                        "visible": true, "blendMode": "SCREEN", "type": "DROP_SHADOW",
                        "radius": 18,
                        "boundVariables": {},
                        "color": { "r": 0, "g": 0.8627449870109558, "b": 1, "a": 1 },
                        "offset": { "x": 0, "y": 0 },
                        "spread": 0,
                        "showShadowBehindNode": true
                    },
                    {
                        "visible": true, "type": "BACKGROUND_BLUR",
                        "radius": 30,
                        "boundVariables": {},
                        "blurType": "NORMAL"
                    }
                ],
                "cornerRadius": 3
            },
            "layoutProps": {
                "width": 9,
                "height": 9,
                "parentIsAutoLayout": false,
                "relativeTransform": props.relativeTransform ?? [[1, 0, 0], [0, 1, 0]]
            },
            "svgContent": SVG_UCL_Newsletter_Header_Stats_assets_icon_Tail_1566_10404_svg_orig
        };

        const root = await this.renderDefinition(structure);

        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

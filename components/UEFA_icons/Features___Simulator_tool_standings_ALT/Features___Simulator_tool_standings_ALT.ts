import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Features___Simulator_tool_standings_ALT_assets_icon_Vector_I92_670904_6797_14_svg_6_390163898468018x12_085493087768555 from "./assets/Features___Simulator_tool_standings_ALT_assets_icon_Vector_I92_670904_6797_14_svg_6_390163898468018x12_085493087768555.svg";
import SVG_Features___Simulator_tool_standings_ALT_assets_icon_Path__Stroke__I92_670904_6799_29_svg_15x18 from "./assets/Features___Simulator_tool_standings_ALT_assets_icon_Path__Stroke__I92_670904_6799_29_svg_15x18.svg";


export class Features___Simulator_tool_standings_ALT extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Features / Simulator tool standings ALT",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutMode": "NONE",
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Vector",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 17, "y": 6,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 6.390163898468018, "height": 12.085493087768555,
                "relativeTransform": [[1, 0, 17], [0, 1, 6]]
              },
              "svgContent": SVG_Features___Simulator_tool_standings_ALT_assets_icon_Vector_I92_670904_6797_14_svg_6_390163898468018x12_085493087768555
            },
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Path (Stroke)",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1.5, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 1, "y": 3,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 15, "height": 18,
                "relativeTransform": [[1, 0, 1], [0, 1, 3]]
              },
              "svgContent": SVG_Features___Simulator_tool_standings_ALT_assets_icon_Path__Stroke__I92_670904_6799_29_svg_15x18
            }
          ]
        };

        const root = await this.renderDefinition(structure);
        
        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

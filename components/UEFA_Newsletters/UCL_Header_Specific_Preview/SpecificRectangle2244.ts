import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_specific_preview_header_img_1_opt_png from "././assets/specific_preview_header_img_1_opt.png";
import IMG_specific_preview_header_img_2_opt_png from "././assets/specific_preview_header_img_2_opt.png";
import IMG_specific_preview_header_img_6_opt_png from "././assets/specific_preview_header_img_6_opt.png";
import IMG_specific_preview_header_img_5_png from "././assets/specific_preview_header_img_5.png";
import IMG_specific_preview_header_img_3_png from "././assets/specific_preview_header_img_3.png";
import IMG_specific_preview_header_img_4_png from "././assets/specific_preview_header_img_4.png";
import SVG_specific_preview_header_Synth_Ellipse2300_0 from "./assets/specific_preview_header_Synth_Ellipse2300_0.svg";
import SVG_specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig from "./assets/specific_preview_header_assets_icon_Vector_I2077_2762_2642_16923_4717_22521_1004_103_svg_orig.svg";
import SVG_specific_preview_header_assets_icon_Logo_2077_2769_svg_orig from "./assets/specific_preview_header_assets_icon_Logo_2077_2769_svg_orig.svg";

export class SpecificRectangle2244 extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
              "type": "RECTANGLE",
              "name": "Rectangle 2244",
              "props": {
                "visible": true, "opacity": 0.5600000023841858, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1.598246693611145, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1.598246693611145, "strokeRightWeight": 1.598246693611145, "strokeBottomWeight": 1.598246693611145, "strokeLeftWeight": 1.598246693611145,
                "x": 780.431640625, "y": -242.19546508789062,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.003921568859368563, "g": 0.003921568859368563, "b": 0.19607843458652496 },
                    "boundVariables": {
                      "color": { "type": "VARIABLE_ALIAS", "id": "VariableID:5ad177f4d325933a231fd45acd9a89c96629eba0/3505:249" }
                    }
                  }
                ],
                "strokes": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.40784314274787903, "g": 0, "b": 0.8039215803146362 },
                    "boundVariables": {}
                  }
                ],
                "effects": [
                  {
                    "visible": true, "type": "BACKGROUND_BLUR",
                    "radius": 12,
                    "boundVariables": {},
                    "blurType": "NORMAL"
                  }
                ],
                "cornerRadius": 51.14389419555664
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 724.2156, "height": 724.2156,
                "relativeTransform": [[0.7071, -0.7071, 780.4316], [0.7071, 0.7071, -242.1955]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            };
    
    const root = await this.renderDefinition(structure);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}

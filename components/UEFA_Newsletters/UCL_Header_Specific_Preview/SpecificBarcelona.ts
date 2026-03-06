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

export class SpecificBarcelona extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
              "type": "FRAME",
              "name": "Barcelona",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "strokeWeight": 2.595874071121216, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 2.595874071121216, "strokeRightWeight": 2.595874071121216, "strokeBottomWeight": 2.595874071121216, "strokeLeftWeight": 2.595874071121216,
                "x": 452, "y": 430,
                "layoutMode": "NONE",
                "fills": [
                  {
                    "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [
                  {
                    "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                    "radius": 4,
                    "boundVariables": {},
                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.4000000059604645 },
                    "offset": { "x": -4, "y": 2 },
                    "spread": 0,
                    "showShadowBehindNode": false
                  }
                ],
                "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED"
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 88, "height": 88,
                "relativeTransform": [[1, 0, 452], [0, 1, 430]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "RECTANGLE",
                  "name": "Crest",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                    "x": 0, "y": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                        "scaleMode": "FIT",
                        "imageTransform": [[1, 0, 0], [0, 1, 0]],
                        "scalingFactor": 0.5,
                        "rotation": 0,
                        "filters": {
                          "exposure": 0,
                          "contrast": 0,
                          "saturation": 0,
                          "temperature": 0,
                          "tint": 0,
                          "highlights": 0,
                          "shadows": 0
                        },
                        "originalImageHash": "7be5a855ebb9969d571f0f32344ea87d35592f51",
                        "assetRef": IMG_specific_preview_header_img_4_png
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 88, "height": 88,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                  }
                }
              ]
            };
    
    const root = await this.renderDefinition(structure);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}

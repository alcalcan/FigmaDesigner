import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import IMG_generic_preview_header_img_1_opt_png from "././assets/generic_preview_header_img_1_opt.png";
import IMG_generic_preview_header_img_2_opt_png from "././assets/generic_preview_header_img_2_opt.png";
import IMG_generic_preview_header_img_3_opt_png from "././assets/generic_preview_header_img_3_opt.png";
import IMG_generic_preview_header_img_4_png from "././assets/generic_preview_header_img_4.png";
import IMG_generic_preview_header_img_5_png from "././assets/generic_preview_header_img_5.png";
import IMG_generic_preview_header_img_6_png from "././assets/generic_preview_header_img_6.png";
import IMG_generic_preview_header_img_7_png from "././assets/generic_preview_header_img_7.png";
import SVG_generic_preview_header_Synth_Ellipse2300_0 from "./assets/generic_preview_header_Synth_Ellipse2300_0.svg";
import SVG_generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig from "./assets/generic_preview_header_assets_icon_Logo_I2077_2738_2662_14597_svg_orig.svg";

export class Genericdividerball1desktop extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
              "type": "FRAME",
              "name": "divider-ball-1-desktop",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                "strokeWeight": 0.46245673298835754, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.46245673298835754, "strokeRightWeight": 0.46245673298835754, "strokeBottomWeight": 0.46245673298835754, "strokeLeftWeight": 0.46245673298835754,
                "x": 104, "y": 218,
                "layoutMode": "NONE",
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0,
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED"
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 391.1782, "height": 11.3385,
                "relativeTransform": [[1, 0, 104], [0, 1, 218]],
                "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "RECTANGLE",
                  "name": "Rectangle",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                    "x": 34, "y": 3,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
                        "gradientStops": [
                          {
                            "color": { "r": 0.7568627595901489, "g": 0.7607843279838562, "b": 0.8352941274642944, "a": 0 },
                            "position": 0,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0.658823549747467, "g": 0.12156862765550613, "b": 0.8470588326454163, "a": 1 },
                            "position": 0.13810230791568756,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 1, "g": 0.8235294222831726, "b": 0, "a": 1 },
                            "position": 0.3229166567325592,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0.8274509906768799, "g": 0.46666666865348816, "b": 0.43529412150382996, "a": 1 },
                            "position": 0.5317864418029785,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0.6980392336845398, "g": 0.1921568661928177, "b": 0.7686274647712708, "a": 1 },
                            "position": 0.703125,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0.33725491166114807, "g": 0.07450980693101883, "b": 0.9921568632125854, "a": 1 },
                            "position": 0.8570077419281006,
                            "boundVariables": {}
                          },
                          {
                            "color": { "r": 0.7568627595901489, "g": 0.7607843279838562, "b": 0.8352941274642944, "a": 0 },
                            "position": 1,
                            "boundVariables": {}
                          }
                        ],
                        "gradientTransform": [
                          [
                            0.9999884963035583,
                            0.00001147754392150091,
                            9.992007221626409e-16
                          ],
                          [ -0.00001147754392150091, 0.000011490817996673286, 0.5 ]
                        ]
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 324, "height": 1,
                    "relativeTransform": [[1, 0, 34], [0, 1, 3]],
                    "constraints": { "horizontal": "CENTER", "vertical": "SCALE" }
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

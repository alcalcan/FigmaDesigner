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

export class GenericUPCOMINGMATCHES extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
              "type": "TEXT",
              "name": "UPCOMING MATCHES",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0.6117733716964722, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "characters": "UPCOMING MATCHES", "fontSize": 101.55438232421875,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                "paragraphSpacing": 0, "paragraphIndent": 0,
                "x": 29.833984375, "y": 82,
                "strokes": [],
                "effects": [
                  {
                    "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                    "radius": 32.392616271972656,
                    "boundVariables": {},
                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
                    "offset": { "x": 0, "y": 4.90797233581543 },
                    "spread": 0,
                    "showShadowBehindNode": false
                  }
                ],
                "layoutSizingHorizontal": "FIXED",
                "layoutSizingVertical": "FIXED",
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "AUTO" },
                "font": { "family": "Champions", "style": "Display" },
                "richTextSpans": [
                  {
                    "start": 0,
                    "end": 9,
                    "font": { "family": "Champions", "style": "Display" },
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 },
                        "boundVariables": {}
                      }
                    ],
                    "fontSize": 101.55438232421875
                  },
                  {
                    "start": 9,
                    "end": 16,
                    "font": { "family": "Champions", "style": "Display" },
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.8196630477905273, "g": 0.5446940064430237, "b": 1 },
                        "boundVariables": {}
                      }
                    ],
                    "fontSize": 101.55438232421875
                  }
                ]
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 540, "height": 122,
                "relativeTransform": [[1, 0, 29.834], [0, 1, 82]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            };
    
    const root = await this.renderDefinition(structure);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}

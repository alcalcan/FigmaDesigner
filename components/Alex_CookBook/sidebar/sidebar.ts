import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import { checkbox } from "../checkbox/checkbox";
import { toggle } from "../toggle/toggle";
import { accordion } from "../accordion/accordion";
import { input_field } from "../input_field/input_field";


// SVG Assets
import SVG_sidebar_assets_icon_Vector__Stroke__1142_1197_svg_22_000059127807617x21_020004272460938 from "./assets/sidebar_assets_icon_Vector__Stroke__1142_1197_svg_22_000059127807617x21_020004272460938.svg";
import SVG_sidebar_Synth_Path_4 from "./assets/sidebar_Synth_Path_4.svg";
import SVG_sidebar_Synth_Path_5 from "./assets/sidebar_Synth_Path_5.svg";
import SVG_sidebar_Synth_Path_6 from "./assets/sidebar_Synth_Path_6.svg";
import SVG_sidebar_Synth_Shape_7 from "./assets/sidebar_Synth_Shape_7.svg";
import SVG_sidebar_assets_icon_Union_1142_1247_svg_8x8 from "./assets/sidebar_assets_icon_Union_1142_1247_svg_8x8.svg";
import SVG_sidebar_assets_icon_Vector_1142_1255_svg_7x0 from "./assets/sidebar_assets_icon_Vector_1142_1255_svg_7x0.svg";
import SVG_sidebar_Synth_Path_10 from "./assets/sidebar_Synth_Path_10.svg";
import SVG_sidebar_Synth_Path_11 from "./assets/sidebar_Synth_Path_11.svg";
import SVG_sidebar_assets_icon_Union_1142_1358_svg_8x8 from "./assets/sidebar_assets_icon_Union_1142_1358_svg_8x8.svg";
import SEARCH_ICON from "../input_field/assets/search_icon.svg";


export class sidebar extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "sidebar",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 0, "paddingRight": 16, "paddingBottom": 0, "paddingLeft": 16,
        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "fills": [],
        "strokes": [],
        "effects": [],
        "cornerRadius": 14
      },
      "layoutProps": { "width": 328, "height": undefined, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "FRAME",
          "name": "Frame 1714",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutAlign": "STRETCH", "layoutGrow": 0,
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 296, "height": 25,
            "relativeTransform": [[1, 0, 16], [0, 1, 0]]
          },
          "children": [
            {
              "type": "FRAME",
              "name": "Frame 1919",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "INHERIT", "layoutGrow": 1,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 238, "height": 25,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]]
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Actions / Star",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "layoutMode": "NONE",
                    "fills": [
                      {
                        "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 24, "height": 24,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0.5]]
                  },
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Vector (Stroke)",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 2, "strokeAlign": "CENTER", "strokeCap": "ROUND", "strokeJoin": "ROUND", "strokeMiterLimit": 4,
                        "x": 0.9999708533287048, "y": 1,
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 22.000059127807617, "height": 21.020004272460938,
                        "relativeTransform": [[1, 0, 0.9999708533287048], [0, 1, 1]]
                      },
                      "svgContent": SVG_sidebar_assets_icon_Vector__Stroke__1142_1197_svg_22_000059127807617x21_020004272460938
                    }
                  ]
                },
                {
                  "type": "TEXT",
                  "name": "Favourites",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "INHERIT", "layoutGrow": 1,
                    "characters": "Favourites", "fontSize": 20,
                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                    "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
                    "paragraphSpacing": 0, "paragraphIndent": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "letterSpacing": { "unit": "PIXELS", "value": 0 },
                    "lineHeight": { "unit": "PIXELS", "value": 25 },
                    "font": { "family": "Open Sans", "style": "SemiBold" }
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 210, "height": 25,
                    "relativeTransform": [[1, 0, 28], [0, 1, 0]]
                  }
                }
              ]
            },
            {
              "type": "COMPONENT",
              "name": "Toggle",
              "component": toggle,
              "props": {
                "isOn": props.favouriteToggleIsOn ?? true
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 42, "height": 22,
                "relativeTransform": [[1, 0, 254], [0, 1, 1.5]]
              }
            }
          ]
        },
        {
          "type": "LINE",
          "name": "Line 62",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 1, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "STRETCH", "layoutGrow": 0,
            "fills": [],
            "strokes": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0.8156862854957581, "g": 0.8470588326454163, "b": 0.8588235378265381 },
                "boundVariables": {}
              }
            ],
            "effects": []
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 296, "height": 0,
            "relativeTransform": [[1, 0, 16], [0, 1, 41]]
          }
        },
        {
          "type": "FRAME",
          "name": "Frame 1713",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
            "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutAlign": "STRETCH", "layoutGrow": 0,
            "fills": [],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 296, "height": 40,
            "relativeTransform": [[1, 0, 16], [0, 1, 57]]
          },
          "children": [
            {
              "type": "TEXT",
              "name": "Filters",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "layoutAlign": "INHERIT", "layoutGrow": 1,
                "characters": "Filters", "fontSize": 20,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                "paragraphSpacing": 0, "paragraphIndent": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PIXELS", "value": 25 },
                "font": { "family": "Open Sans", "style": "SemiBold" }
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 240, "height": 25,
                "relativeTransform": [[1, 0, 0], [0, 1, 7.5]]
              }
            },
            {
              "type": "FRAME",
              "name": "Frame 1695",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 8, "paddingRight": 8, "paddingBottom": 8, "paddingLeft": 8,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.9450980424880981, "g": 0.9529411792755127, "b": 0.9725490212440491 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 100
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 40, "height": 40,
                "relativeTransform": [[1, 0, 256], [0, 1, 0]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Search Icon",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "layoutAlign": "CENTER", "layoutGrow": 0,
                    "fills": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 },
                        "boundVariables": {}
                      }
                    ],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 18, "height": 18
                  },
                  "svgContent": SEARCH_ICON
                }
              ]
            }
          ]
        },
        {
          "type": "COMPONENT",
          "component": input_field,
          "props": {
            "placeholder": "Grow",
            "value": "",
            "helperText": "1 result",
            "type": "simple",
            "showSearchIcon": true,
            "searchIconPosition": "front",
            "helperType": "info"
          }
        },
        {
          "type": "COMPONENT",
          "component": accordion,
          "props": {
            "title": "SUBJECT",
            "isExpanded": false
          }
        },
        {
          "type": "COMPONENT",
          "component": accordion,
          "props": {
            "title": "UEFA INITIATIVE",
            "isExpanded": true,
            "titleColor": { "r": 0, "g": 0.6352941393852234, "b": 0.5882353186607361 },
            "children": [
              { "name": "UEFA Academy", "isSelected": false },
              { "name": "UEFA Assist", "isSelected": false },
              { "name": "UEFA Events", "isSelected": false },
              { "name": "UEFA Football Development", "isSelected": false },
              { "name": "UEFA Grow", "isSelected": true },
              { "name": "UEFA Hatrick", "isSelected": false },
              { "name": "UEFA Anti-Doping and Medical", "isSelected": false },
              { "name": "UEFA Intelligence Center", "isSelected": false }
            ].map((item: any) => ({
              "type": "COMPONENT",
              "component": checkbox,
              "props": {
                "characterOverride": item.name,
                "checked": item.isSelected
              }
            } as NodeDefinition))
          }
        },
        {
          "type": "COMPONENT",
          "component": accordion,
          "props": {
            "title": "ORGANISATION",
            "isExpanded": false
          }
        }
      ]
    };

    const root = await this.renderDefinition(structure);

    // Final positioning
    root.x = props.x;
    root.y = props.y;

    return root;
  }
}

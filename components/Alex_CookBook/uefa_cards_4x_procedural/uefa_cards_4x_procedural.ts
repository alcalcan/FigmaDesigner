import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_uefa_cards_4x_procedural_img_1_png from "././assets/uefa_cards_4x_procedural_img_1.png";
import IMG_uefa_cards_4x_procedural_img_2_png from "././assets/uefa_cards_4x_procedural_img_2.png";
import IMG_uefa_cards_4x_procedural_img_3_png from "././assets/uefa_cards_4x_procedural_img_3.png";
import IMG_uefa_cards_4x_procedural_img_4_png from "././assets/uefa_cards_4x_procedural_img_4.png";
import SVG_uefa_cards_4x_procedural_assets_icon_Play_Icon_1063_3589_svg_54x54 from "./assets/uefa_cards_4x_procedural_assets_icon_Play_Icon_1063_3589_svg_54x54.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_1_1063_3603_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_1_1063_3603_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_2_1063_3607_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_2_1063_3607_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_3_1063_3611_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_3_1063_3611_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_4_1063_3615_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_4_1063_3615_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_5_1063_3619_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_5_1063_3619_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_1_1063_3635_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_1_1063_3635_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_2_1063_3639_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_2_1063_3639_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_3_1063_3643_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_3_1063_3643_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_4_1063_3647_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_4_1063_3647_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_5_1063_3651_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_5_1063_3651_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Play_Icon_1063_3657_svg_54x54 from "./assets/uefa_cards_4x_procedural_assets_icon_Play_Icon_1063_3657_svg_54x54.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_1_1063_3671_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_1_1063_3671_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_2_1063_3675_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_2_1063_3675_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_3_1063_3679_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_3_1063_3679_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_4_1063_3683_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_4_1063_3683_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_5_1063_3687_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_5_1063_3687_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_1_1063_3703_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_1_1063_3703_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_2_1063_3707_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_2_1063_3707_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_3_1063_3711_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_3_1063_3711_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_4_1063_3715_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_4_1063_3715_svg_12x12.svg";
import SVG_uefa_cards_4x_procedural_assets_icon_Star_5_1063_3719_svg_12x12 from "./assets/uefa_cards_4x_procedural_assets_icon_Star_5_1063_3719_svg_12x12.svg";


export class uefa_cards_4x_procedural extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "uefa_cards_4x_procedural",
    "props": {
      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
      "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
      "fills": [],
      "strokes": [],
      "effects": [],
      "cornerRadius": 0
    },
    "layoutProps": { "width": 1444, "height": 441, "parentIsAutoLayout": false },
    "children": [
      {
        "type": "FRAME",
        "name": "Card 1",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "layoutAlign": "INHERIT", "layoutGrow": 0,
          "fills": [
            {
              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
              "color": { "r": 1, "g": 1, "b": 1 },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "effects": [
            {
              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
              "radius": 6,
              "boundVariables": {},
              "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
              "offset": { "x": 0, "y": 2 },
              "spread": 0,
              "showShadowBehindNode": true
            }
          ],
          "cornerRadius": 12
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 343, "height": 441,
          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
        },
        "children": [
          {
            "type": "FRAME",
            "name": "Image Container",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
              "layoutAlign": "INHERIT", "layoutGrow": 0,
              "layoutMode": "NONE",
              "fills": [
                {
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                  "scaleMode": "FILL",
                  "imageTransform": [[1, 0, 0], [0, 1, 0]],
                  "scalingFactor": 1,
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
                  "originalImageHash": "53600b9b753bcf27aa29e70bd45039034c373525",
                  "assetRef": IMG_uefa_cards_4x_procedural_img_1_png
                }
              ],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 343, "height": 229,
              "relativeTransform": [[1, 0, 0], [0, 1, 0]]
            },
            "children": [
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Play Icon",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "x": 144, "y": 87,
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                  "width": 54, "height": 54,
                  "relativeTransform": [[1, 0, 144], [0, 1, 87]]
                },
                "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Play_Icon_1063_3589_svg_54x54
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Content Padding",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
              "width": 343, "height": 212,
              "relativeTransform": [[1, 0, 0], [0, 1, 229]]
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Refereeing in Women’s Football: Motivation.",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Refereeing in Women’s Football: Motivation.", "fontSize": 20,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10000000149011612, "g": 0.1899999976158142, "b": 0.23999999463558197 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Open Sans", "style": "SemiBold" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 311, "height": 54,
                  "relativeTransform": [[1, 0, 16], [0, 1, 16]]
                }
              },
              {
                "type": "TEXT",
                "name": "Description",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.", "fontSize": 14,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10000000149011612, "g": 0.1899999976158142, "b": 0.23999999463558197 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Open Sans", "style": "Regular" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 311, "height": 57,
                  "relativeTransform": [[1, 0, 16], [0, 1, 86]]
                }
              },
              {
                "type": "FRAME",
                "name": "Footer",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
                  "width": 311, "height": 37,
                  "relativeTransform": [[1, 0, 16], [0, 1, 159]]
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Author Info",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 95, "height": 19,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "by",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "by ", "fontSize": 12,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.38999998569488525, "g": 0.47999998927116394, "b": 0.5199999809265137 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "Light" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 13, "height": 16,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        }
                      },
                      {
                        "type": "TEXT",
                        "name": "Alex Calcan",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Alex Calcan", "fontSize": 14,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.38999998569488525, "g": 0.47999998927116394, "b": 0.5199999809265137 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "SemiBold" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 78, "height": 19,
                          "relativeTransform": [[1, 0, 17], [0, 1, 0]]
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Rating Block",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 118.99999237060547, "height": 14,
                      "relativeTransform": [[1, 0, 0], [0, 1, 23]]
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Relevance",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Relevance", "fontSize": 10,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.44999998807907104, "g": 0.550000011920929, "b": 0.5799999833106995 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "SemiBold" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 49, "height": 14,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Rating Stars",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 1, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 63.99999237060547, "height": 12,
                          "relativeTransform": [[1, 0, 55], [0, 1, 1.0000085830688477]]
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 1",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 2.460467385390075e-10], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_1_1063_3603_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 2",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 13], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_2_1063_3607_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 3",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 26], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_3_1063_3611_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 4",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 39], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_4_1063_3615_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 5",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 52], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_5_1063_3619_svg_12x12
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Card 2",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "layoutAlign": "INHERIT", "layoutGrow": 0,
          "fills": [
            {
              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
              "color": { "r": 1, "g": 1, "b": 1 },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "effects": [
            {
              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
              "radius": 6,
              "boundVariables": {},
              "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
              "offset": { "x": 0, "y": 2 },
              "spread": 0,
              "showShadowBehindNode": true
            }
          ],
          "cornerRadius": 12
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 343, "height": 441,
          "relativeTransform": [[1, 0, 367], [0, 1, 0]]
        },
        "children": [
          {
            "type": "FRAME",
            "name": "Image Container",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
              "layoutAlign": "INHERIT", "layoutGrow": 0,
              "layoutMode": "NONE",
              "fills": [
                {
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                  "scaleMode": "FILL",
                  "imageTransform": [[1, 0, 0], [0, 1, 0]],
                  "scalingFactor": 1,
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
                  "originalImageHash": "d6f3b23264dd483546de453eeef7c6782b5d923f",
                  "assetRef": IMG_uefa_cards_4x_procedural_img_2_png
                }
              ],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 343, "height": 229,
              "relativeTransform": [[1, 0, 0], [0, 1, 0]]
            }
          },
          {
            "type": "FRAME",
            "name": "Content Padding",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
              "width": 343, "height": 212,
              "relativeTransform": [[1, 0, 0], [0, 1, 229]]
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Advanced Coaching Techniques 2026",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Advanced Coaching Techniques 2026", "fontSize": 20,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10000000149011612, "g": 0.1899999976158142, "b": 0.23999999463558197 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Open Sans", "style": "SemiBold" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 311, "height": 54,
                  "relativeTransform": [[1, 0, 16], [0, 1, 16]]
                }
              },
              {
                "type": "TEXT",
                "name": "Description",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.", "fontSize": 14,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10000000149011612, "g": 0.1899999976158142, "b": 0.23999999463558197 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Open Sans", "style": "Regular" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 311, "height": 57,
                  "relativeTransform": [[1, 0, 16], [0, 1, 86]]
                }
              },
              {
                "type": "FRAME",
                "name": "Footer",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
                  "width": 311, "height": 37,
                  "relativeTransform": [[1, 0, 16], [0, 1, 159]]
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Author Info",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 116, "height": 19,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "by",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "by ", "fontSize": 12,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.38999998569488525, "g": 0.47999998927116394, "b": 0.5199999809265137 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "Light" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 13, "height": 16,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        }
                      },
                      {
                        "type": "TEXT",
                        "name": "Mihai Popescu",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Mihai Popescu", "fontSize": 14,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.38999998569488525, "g": 0.47999998927116394, "b": 0.5199999809265137 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "SemiBold" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 99, "height": 19,
                          "relativeTransform": [[1, 0, 17], [0, 1, 0]]
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Rating Block",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 118.99999237060547, "height": 14,
                      "relativeTransform": [[1, 0, 0], [0, 1, 23]]
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Relevance",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Relevance", "fontSize": 10,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.44999998807907104, "g": 0.550000011920929, "b": 0.5799999833106995 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "SemiBold" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 49, "height": 14,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Rating Stars",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 1, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 63.99999237060547, "height": 12,
                          "relativeTransform": [[1, 0, 55], [0, 1, 1.0000085830688477]]
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 1",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 2.460183168295771e-10], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_1_1063_3635_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 2",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 13], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_2_1063_3639_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 3",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 26], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_3_1063_3643_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 4",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 39], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_4_1063_3647_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 5",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 52], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_5_1063_3651_svg_12x12
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Card 3",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "layoutAlign": "INHERIT", "layoutGrow": 0,
          "fills": [
            {
              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
              "color": { "r": 1, "g": 1, "b": 1 },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "effects": [
            {
              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
              "radius": 6,
              "boundVariables": {},
              "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
              "offset": { "x": 0, "y": 2 },
              "spread": 0,
              "showShadowBehindNode": true
            }
          ],
          "cornerRadius": 12
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 343, "height": 441,
          "relativeTransform": [[1, 0, 734], [0, 1, 0]]
        },
        "children": [
          {
            "type": "FRAME",
            "name": "Image Container",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
              "layoutAlign": "INHERIT", "layoutGrow": 0,
              "layoutMode": "NONE",
              "fills": [
                {
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                  "scaleMode": "FILL",
                  "imageTransform": [[1, 0, 0], [0, 1, 0]],
                  "scalingFactor": 1,
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
                  "originalImageHash": "707cbb62af7d9774194feffae7db7284a4719141",
                  "assetRef": IMG_uefa_cards_4x_procedural_img_3_png
                }
              ],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 343, "height": 229,
              "relativeTransform": [[1, 0, 0], [0, 1, 0]]
            },
            "children": [
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Play Icon",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "x": 144, "y": 87,
                  "strokes": [],
                  "effects": [],
                  "cornerRadius": 0
                },
                "layoutProps": {
                  "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                  "width": 54, "height": 54,
                  "relativeTransform": [[1, 0, 144], [0, 1, 87]]
                },
                "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Play_Icon_1063_3657_svg_54x54
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Content Padding",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
              "width": 343, "height": 212,
              "relativeTransform": [[1, 0, 0], [0, 1, 229]]
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Youth Academy Growth Strategy",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Youth Academy Growth Strategy", "fontSize": 20,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10000000149011612, "g": 0.1899999976158142, "b": 0.23999999463558197 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Open Sans", "style": "SemiBold" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 311, "height": 54,
                  "relativeTransform": [[1, 0, 16], [0, 1, 16]]
                }
              },
              {
                "type": "TEXT",
                "name": "Description",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.", "fontSize": 14,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10000000149011612, "g": 0.1899999976158142, "b": 0.23999999463558197 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Open Sans", "style": "Regular" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 311, "height": 57,
                  "relativeTransform": [[1, 0, 16], [0, 1, 86]]
                }
              },
              {
                "type": "FRAME",
                "name": "Footer",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
                  "width": 311, "height": 37,
                  "relativeTransform": [[1, 0, 16], [0, 1, 159]]
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Author Info",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 110, "height": 19,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "by",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "by ", "fontSize": 12,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.38999998569488525, "g": 0.47999998927116394, "b": 0.5199999809265137 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "Light" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 13, "height": 16,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        }
                      },
                      {
                        "type": "TEXT",
                        "name": "Elena Ionescu",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Elena Ionescu", "fontSize": 14,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.38999998569488525, "g": 0.47999998927116394, "b": 0.5199999809265137 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "SemiBold" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 93, "height": 19,
                          "relativeTransform": [[1, 0, 17], [0, 1, 0]]
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Rating Block",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 118.99999237060547, "height": 14,
                      "relativeTransform": [[1, 0, 0], [0, 1, 23]]
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Relevance",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Relevance", "fontSize": 10,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.44999998807907104, "g": 0.550000011920929, "b": 0.5799999833106995 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "SemiBold" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 49, "height": 14,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Rating Stars",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 1, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 63.99999237060547, "height": 12,
                          "relativeTransform": [[1, 0, 55], [0, 1, 1.0000085830688477]]
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 1",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 2.460183168295771e-10], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_1_1063_3671_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 2",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 13], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_2_1063_3675_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 3",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 26], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_3_1063_3679_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 4",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 39], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_4_1063_3683_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 5",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 52], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_5_1063_3687_svg_12x12
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Card 4",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "layoutAlign": "INHERIT", "layoutGrow": 0,
          "fills": [
            {
              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
              "color": { "r": 1, "g": 1, "b": 1 },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "effects": [
            {
              "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
              "radius": 6,
              "boundVariables": {},
              "color": { "r": 0, "g": 0, "b": 0, "a": 0.11999999731779099 },
              "offset": { "x": 0, "y": 2 },
              "spread": 0,
              "showShadowBehindNode": true
            }
          ],
          "cornerRadius": 12
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 343, "height": 441,
          "relativeTransform": [[1, 0, 1101], [0, 1, 0]]
        },
        "children": [
          {
            "type": "FRAME",
            "name": "Image Container",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
              "layoutAlign": "INHERIT", "layoutGrow": 0,
              "layoutMode": "NONE",
              "fills": [
                {
                  "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                  "scaleMode": "FILL",
                  "imageTransform": [[1, 0, 0], [0, 1, 0]],
                  "scalingFactor": 1,
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
                  "originalImageHash": "53d394c4577bd2ad4235d0666feb13b9ca37fd82",
                  "assetRef": IMG_uefa_cards_4x_procedural_img_4_png
                }
              ],
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
              "width": 343, "height": 229,
              "relativeTransform": [[1, 0, 0], [0, 1, 0]]
            }
          },
          {
            "type": "FRAME",
            "name": "Content Padding",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA", "clipsContent": true,
              "layoutMode": "VERTICAL", "itemSpacing": 16, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
              "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16,
              "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
              "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
              "width": 343, "height": 212,
              "relativeTransform": [[1, 0, 0], [0, 1, 229]]
            },
            "children": [
              {
                "type": "TEXT",
                "name": "Sustainable Stadium Operations",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Sustainable Stadium Operations", "fontSize": 20,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10000000149011612, "g": 0.1899999976158142, "b": 0.23999999463558197 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Open Sans", "style": "SemiBold" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 311, "height": 54,
                  "relativeTransform": [[1, 0, 16], [0, 1, 16]]
                }
              },
              {
                "type": "TEXT",
                "name": "Description",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA",
                  "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                  "layoutAlign": "STRETCH", "layoutGrow": 0,
                  "characters": "Reducing carbon footprints and implementing circular economy principles in modern stadium management.", "fontSize": 14,
                  "textCase": "ORIGINAL", "textDecoration": "NONE",
                  "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "HEIGHT",
                  "paragraphSpacing": 0, "paragraphIndent": 0,
                  "fills": [
                    {
                      "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                      "color": { "r": 0.10000000149011612, "g": 0.1899999976158142, "b": 0.23999999463558197 },
                      "boundVariables": {}
                    }
                  ],
                  "strokes": [],
                  "effects": [],
                  "letterSpacing": { "unit": "PERCENT", "value": 0 },
                  "lineHeight": { "unit": "AUTO" },
                  "font": { "family": "Open Sans", "style": "Regular" }
                },
                "layoutProps": {
                  "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                  "width": 311, "height": 57,
                  "relativeTransform": [[1, 0, 16], [0, 1, 86]]
                }
              },
              {
                "type": "FRAME",
                "name": "Footer",
                "props": {
                  "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                  "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                  "layoutMode": "VERTICAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                  "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                  "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                  "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
                  "width": 311, "height": 37,
                  "relativeTransform": [[1, 0, 16], [0, 1, 159]]
                },
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Author Info",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 4, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 104, "height": 19,
                      "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "by",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "by ", "fontSize": 12,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.38999998569488525, "g": 0.47999998927116394, "b": 0.5199999809265137 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "Light" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 13, "height": 16,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        }
                      },
                      {
                        "type": "TEXT",
                        "name": "David Moore",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "David Moore", "fontSize": 14,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.38999998569488525, "g": 0.47999998927116394, "b": 0.5199999809265137 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "SemiBold" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 87, "height": 19,
                          "relativeTransform": [[1, 0, 17], [0, 1, 0]]
                        }
                      }
                    ]
                  },
                  {
                    "type": "FRAME",
                    "name": "Rating Block",
                    "props": {
                      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                      "layoutMode": "HORIZONTAL", "itemSpacing": 6, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                      "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                      "layoutAlign": "INHERIT", "layoutGrow": 0,
                      "fills": [],
                      "strokes": [],
                      "effects": [],
                      "cornerRadius": 0
                    },
                    "layoutProps": {
                      "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                      "width": 118.99999237060547, "height": 14,
                      "relativeTransform": [[1, 0, 0], [0, 1, 23]]
                    },
                    "children": [
                      {
                        "type": "TEXT",
                        "name": "Relevance",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA",
                          "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "characters": "Relevance", "fontSize": 10,
                          "textCase": "ORIGINAL", "textDecoration": "NONE",
                          "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                          "paragraphSpacing": 0, "paragraphIndent": 0,
                          "fills": [
                            {
                              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                              "color": { "r": 0.44999998807907104, "g": 0.550000011920929, "b": 0.5799999833106995 },
                              "boundVariables": {}
                            }
                          ],
                          "strokes": [],
                          "effects": [],
                          "letterSpacing": { "unit": "PERCENT", "value": 0 },
                          "lineHeight": { "unit": "AUTO" },
                          "font": { "family": "Open Sans", "style": "SemiBold" }
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 49, "height": 14,
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        }
                      },
                      {
                        "type": "FRAME",
                        "name": "Rating Stars",
                        "props": {
                          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                          "layoutMode": "HORIZONTAL", "itemSpacing": 1, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                          "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                          "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                          "layoutAlign": "INHERIT", "layoutGrow": 0,
                          "fills": [],
                          "strokes": [],
                          "effects": [],
                          "cornerRadius": 0
                        },
                        "layoutProps": {
                          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                          "width": 63.99999237060547, "height": 12,
                          "relativeTransform": [[1, 0, 55], [0, 1, 1.0000085830688477]]
                        },
                        "children": [
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 1",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 2.460183168295771e-10], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_1_1063_3703_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 2",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 13], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_2_1063_3707_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 3",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 26], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_3_1063_3711_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 4",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 39], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_4_1063_3715_svg_12x12
                          },
                          {
                            "type": "VECTOR",
                            "shouldFlatten": true,
                            "name": "Star 5",
                            "props": {
                              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                              "isMask": false, "maskType": "ALPHA",
                              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                              "layoutAlign": "INHERIT", "layoutGrow": 0,
                              "strokes": [],
                              "effects": [],
                              "cornerRadius": 0
                            },
                            "layoutProps": {
                              "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                              "width": 12, "height": 12,
                              "relativeTransform": [[1, 0, 52], [0, 1, 0.00000858306884765625]]
                            },
                            "svgContent": SVG_uefa_cards_4x_procedural_assets_icon_Star_5_1063_3719_svg_12x12
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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

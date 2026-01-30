import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_Card_1_img_1_png from "././assets/Card_1_img_1.png";
import SVG_Card_1_assets_icon_Play_Icon_1077_152_svg_54x54 from "./assets/Card_1_assets_icon_Play_Icon_1077_152_svg_54x54.svg";
import SVG_Card_1_assets_icon_Star_1_1077_166_svg_12x12 from "./assets/Card_1_assets_icon_Star_1_1077_166_svg_12x12.svg";
import SVG_Card_1_assets_icon_Star_2_1077_170_svg_12x12 from "./assets/Card_1_assets_icon_Star_2_1077_170_svg_12x12.svg";
import SVG_Card_1_assets_icon_Star_3_1077_174_svg_12x12 from "./assets/Card_1_assets_icon_Star_3_1077_174_svg_12x12.svg";
import SVG_Card_1_assets_icon_Star_4_1077_178_svg_12x12 from "./assets/Card_1_assets_icon_Star_4_1077_178_svg_12x12.svg";
import SVG_Card_1_assets_icon_Star_5_1077_182_svg_12x12 from "./assets/Card_1_assets_icon_Star_5_1077_182_svg_12x12.svg";


export class Card_1 extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "Card 1",
    "props": {
      "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
      "isMask": false, "maskType": "ALPHA", "clipsContent": true,
      "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
      "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
      "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
      "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
      "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
      "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
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
    "layoutProps": { "width": 343, "height": 441, "parentIsAutoLayout": false },
    "children": [
      {
        "type": "FRAME",
        "name": "Image Container",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": true,
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "layoutAlign": "STRETCH", "layoutGrow": 0,
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
              "assetRef": IMG_Card_1_img_1_png
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
            "svgContent": SVG_Card_1_assets_icon_Play_Icon_1077_152_svg_54x54
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
          "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
              "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "NONE",
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
            "name": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA",
              "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "layoutAlign": "STRETCH", "layoutGrow": 0,
              "characters": "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.", "fontSize": 14,
              "textCase": "ORIGINAL", "textDecoration": "NONE",
              "textAlignHorizontal": "LEFT", "textAlignVertical": "TOP", "textAutoResize": "NONE",
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
              "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
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
                  "width": 119, "height": 14,
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
                      "width": 64, "height": 12,
                      "relativeTransform": [[1, 0, 55], [0, 1, 1]]
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
                          "relativeTransform": [[1, 0, 0], [0, 1, 0]]
                        },
                        "svgContent": SVG_Card_1_assets_icon_Star_1_1077_166_svg_12x12
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
                          "relativeTransform": [[1, 0, 13], [0, 1, 0]]
                        },
                        "svgContent": SVG_Card_1_assets_icon_Star_2_1077_170_svg_12x12
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
                          "relativeTransform": [[1, 0, 26], [0, 1, 0]]
                        },
                        "svgContent": SVG_Card_1_assets_icon_Star_3_1077_174_svg_12x12
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
                          "relativeTransform": [[1, 0, 39], [0, 1, 0]]
                        },
                        "svgContent": SVG_Card_1_assets_icon_Star_4_1077_178_svg_12x12
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
                          "relativeTransform": [[1, 0, 52], [0, 1, 0]]
                        },
                        "svgContent": SVG_Card_1_assets_icon_Star_5_1077_182_svg_12x12
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
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

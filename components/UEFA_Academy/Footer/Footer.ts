import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_Footer_img_1_png from "././assets/Footer_img_1.png";
import SVG_Footer_assets_vector_Clip_path_group_761_158283_svg_orig from "./assets/Footer_assets_vector_Clip_path_group_761_158283_svg_orig.svg";


export class Footer extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Footer",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": true,
            "paddingTop": 64, "paddingRight": 210, "paddingBottom": 64, "paddingLeft": 210,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
            "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 4, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
            "counterAxisSpacing": 0,
            "layoutWrap": "NO_WRAP",
            "counterAxisAlignContent": "AUTO",
            "gridRowCount": 0,
            "gridColumnCount": 0,
            "gridRowGap": 0,
            "gridColumnGap": 0,
            "fills": [],
            "strokes": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                "boundVariables": {}
              }
            ],
            "effects": [],
            "cornerRadius": 0,
            "layoutSizingHorizontal": "FILL",
            "layoutSizingVertical": "HUG"
          },
          "layoutProps": { "width": 1680, "height": 505, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "Container",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "STRETCH", "layoutGrow": 0,
                "counterAxisSpacing": 0,
                "layoutWrap": "NO_WRAP",
                "counterAxisAlignContent": "AUTO",
                "gridRowCount": 0,
                "gridColumnCount": 0,
                "gridRowGap": 0,
                "gridColumnGap": 0,
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0,
                "layoutSizingVertical": "HUG",
                "layoutSizingHorizontal": "FILL"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 1260, "height": 373,
                "relativeTransform": [[1, 0, 210], [0, 1, 68]],
                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "FRAME",
                  "name": "Container",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "counterAxisSpacing": 0,
                    "layoutWrap": "WRAP",
                    "counterAxisAlignContent": "AUTO",
                    "gridRowCount": 0,
                    "gridColumnCount": 0,
                    "gridRowGap": 0,
                    "gridColumnGap": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0,
                    "layoutSizingHorizontal": "FIXED",
                    "layoutSizingVertical": "HUG"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 1260, "height": 288,
                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                    "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Container",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "STRETCH", "layoutGrow": 1,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FILL",
                        "layoutSizingVertical": "FILL"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 315, "height": 224,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "STRETCH", "vertical": "STRETCH" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "Link",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingHorizontal": "HUG",
                            "layoutSizingVertical": "HUG"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 290, "height": 70,
                            "relativeTransform": [[1, 0, 12], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "uefa-academy-logo.svg",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingHorizontal": "HUG",
                                "layoutSizingVertical": "HUG"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 290, "height": 70,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "uefa-academy-logo.svg fill",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "FIXED",
                                    "layoutSizingVertical": "FIXED"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 290, "height": 70,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "FRAME",
                                      "name": "uefa-academy-logo.svg",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "layoutMode": "NONE",
                                        "fills": [],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 290, "height": 70,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
                                      },
                                      "children": [
                                        {
                                          "type": "GROUP",
                                          "name": "Clip path group",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "x": 0.14000000059604645, "y": 0.949999988079071,
                                            "effects": []
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                            "width": 290, "height": 68,
                                            "relativeTransform": [[1, 0, 0.14], [0, 1, 0.95]]
                                          },
                                          "svgContent": SVG_Footer_assets_vector_Clip_path_group_761_158283_svg_orig
                                        },
                                        {
                                          "type": "RECTANGLE",
                                          "name": "Rectangle",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 0.5152000188827515, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "strokeTopWeight": 0.5152000188827515, "strokeRightWeight": 0.5152000188827515, "strokeBottomWeight": 0.5152000188827515, "strokeLeftWeight": 0.5152000188827515,
                                            "x": 9, "y": 9,
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
                                                "originalImageHash": "b3524816a719dac8192dcd56fcba25850b4862ec",
                                                "assetRef": IMG_Footer_img_1_png
                                              }
                                            ],
                                            "strokes": [],
                                            "effects": [],
                                            "cornerRadius": 0
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                            "width": 51.52, "height": 51.0048,
                                            "relativeTransform": [[1, 0, 9], [0, 1, 9]],
                                            "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                          }
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
                      "name": "Container",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "STRETCH", "layoutGrow": 1,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FILL",
                        "layoutSizingVertical": "FILL"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 315, "height": 224,
                        "relativeTransform": [[1, 0, 315], [0, 1, 0]],
                        "constraints": { "horizontal": "STRETCH", "vertical": "STRETCH" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "List",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingVertical": "HUG",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 291, "height": 224,
                            "relativeTransform": [[1, 0, 12], [0, 1, 0]],
                            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Link",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 155, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "Terms and conditions",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "Terms and conditions", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 20,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 155, "height": 32,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 32]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Link",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 182, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "About the UEFA Academy",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "About the UEFA Academy", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 22,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 182, "height": 32,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 64]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Link",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 105, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "Cookies Policy",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "Cookies Policy", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 14,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 105, "height": 32,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 96]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Link",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 115, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "Privacy Settings",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "Privacy Settings", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 16,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 115, "height": 32,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 128]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Link",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 52, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "Privacy",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "Privacy", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 7,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 52, "height": 32,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 160]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Link",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 74, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "UEFA.com",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "UEFA.com", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 8,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 74, "height": 32,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 192]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Link",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 210, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "UEFA Academy Online Library",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "UEFA Academy Online Library", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 27,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 210, "height": 32,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
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
                      "name": "Container",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "STRETCH", "layoutGrow": 1,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FILL",
                        "layoutSizingVertical": "FILL"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 315, "height": 224,
                        "relativeTransform": [[1, 0, 630], [0, 1, 0]],
                        "constraints": { "horizontal": "STRETCH", "vertical": "STRETCH" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "List",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingVertical": "HUG",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 291, "height": 64,
                            "relativeTransform": [[1, 0, 12], [0, 1, 0]],
                            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "TEXT",
                                  "name": "Contact us",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                                    "characters": "Contact us", "fontSize": 16,
                                    "textCase": "ORIGINAL", "textDecoration": "NONE",
                                    "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                    "paragraphSpacing": 0, "paragraphIndent": 0,
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "strokes": [],
                                    "effects": [],
                                    "layoutSizingVertical": "HUG",
                                    "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                    "lineHeight": { "unit": "PIXELS", "value": 32 },
                                    "font": { "family": "Roboto", "style": "Regular" },
                                    "layoutSizingHorizontal": "FILL",
                                    "richTextSpans": [
                                      {
                                        "start": 0,
                                        "end": 10,
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "fontSize": 16
                                      }
                                    ]
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 291, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Item",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [],
                                "strokes": [],
                                "effects": [],
                                "cornerRadius": 0,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 32,
                                "relativeTransform": [[1, 0, 0], [0, 1, 32]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Link",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 133, "height": 32,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "academy@uefa.ch",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "characters": "academy@uefa.ch", "fontSize": 16,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 32 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 15,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 133, "height": 32,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
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
                      "name": "Container",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "VERTICAL", "itemSpacing": 15, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "STRETCH", "layoutGrow": 1,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FILL",
                        "layoutSizingVertical": "FILL"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 315, "height": 224,
                        "relativeTransform": [[1, 0, 945], [0, 1, 0]],
                        "constraints": { "horizontal": "STRETCH", "vertical": "STRETCH" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "Heading 5",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingVertical": "HUG",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 291, "height": 24,
                            "relativeTransform": [[1, 0, 12], [0, 1, 0]],
                            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "TEXT",
                              "name": "Certification",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA",
                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "characters": "Certification", "fontSize": 16,
                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "HEIGHT",
                                "paragraphSpacing": 0, "paragraphIndent": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [],
                                "effects": [],
                                "layoutSizingVertical": "HUG",
                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                "lineHeight": { "unit": "PIXELS", "value": 24 },
                                "font": { "family": "Roboto", "style": "Regular" },
                                "layoutSizingHorizontal": "FILL",
                                "richTextSpans": [
                                  {
                                    "start": 0,
                                    "end": 13,
                                    "font": { "family": "Roboto", "style": "Regular" },
                                    "fills": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "fontSize": 16
                                  }
                                ]
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 24,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                              }
                            }
                          ]
                        },
                        {
                          "type": "FRAME",
                          "name": "Link",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "layoutAlign": "STRETCH", "layoutGrow": 0,
                            "counterAxisSpacing": 0,
                            "layoutWrap": "NO_WRAP",
                            "counterAxisAlignContent": "AUTO",
                            "gridRowCount": 0,
                            "gridColumnCount": 0,
                            "gridRowGap": 0,
                            "gridColumnGap": 0,
                            "fills": [],
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0,
                            "layoutSizingVertical": "HUG",
                            "layoutSizingHorizontal": "FILL"
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 291, "height": 96,
                            "relativeTransform": [[1, 0, 12], [0, 1, 39]],
                            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "Overlay+HorizontalBorder+Shadow",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": true,
                                "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10,
                                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                                "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 4, "strokeLeftWeight": 0,
                                "layoutAlign": "STRETCH", "layoutGrow": 0,
                                "counterAxisSpacing": 0,
                                "layoutWrap": "NO_WRAP",
                                "counterAxisAlignContent": "AUTO",
                                "gridRowCount": 0,
                                "gridColumnCount": 0,
                                "gridRowGap": 0,
                                "gridColumnGap": 0,
                                "fills": [
                                  {
                                    "visible": true, "opacity": 0.0020000000949949026, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 1, "g": 1, "b": 1 },
                                    "boundVariables": {}
                                  }
                                ],
                                "strokes": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0.007843137718737125, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                                    "boundVariables": {}
                                  }
                                ],
                                "effects": [
                                  {
                                    "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                                    "radius": 12,
                                    "boundVariables": {},
                                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.10000000149011612 },
                                    "offset": { "x": 0, "y": 4 },
                                    "spread": 0,
                                    "showShadowBehindNode": false
                                  }
                                ],
                                "cornerRadius": 5,
                                "layoutSizingVertical": "HUG",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 291, "height": 96,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Img - EFMD's LIFT (Learning Impact for Today and Tomorrow):margin",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "FIXED",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 90, "height": 57.56,
                                    "relativeTransform": [[1, 0, 10], [0, 1, 17.22]],
                                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "FRAME",
                                      "name": "EFMD's LIFT (Learning Impact for Today and Tomorrow)",
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
                                            "scaleMode": "CROP",
                                            "imageTransform": [[1, 0, 0], [0, 0.9997262954711914, 0.00013684210716746747]],
                                            "scalingFactor": 1,
                                            "filters": {
                                              "exposure": 0,
                                              "contrast": 0,
                                              "saturation": 0,
                                              "temperature": 0,
                                              "tint": 0,
                                              "highlights": 0,
                                              "shadows": 0
                                            },
                                            "imageHash": "bc2516ac711fefdaddf0494854af125d0c0c270d"
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingHorizontal": "FIXED",
                                        "layoutSizingVertical": "FIXED"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 80, "height": 57.56,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "FRAME",
                                  "name": "VerticalBorder",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": true,
                                    "paddingTop": 0, "paddingRight": 10.770000457763672, "paddingBottom": 0, "paddingLeft": 10,
                                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                    "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                    "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "counterAxisSpacing": 0,
                                    "layoutWrap": "NO_WRAP",
                                    "counterAxisAlignContent": "AUTO",
                                    "gridRowCount": 0,
                                    "gridColumnCount": 0,
                                    "gridRowGap": 0,
                                    "gridColumnGap": 0,
                                    "fills": [],
                                    "strokes": [
                                      {
                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                        "color": { "r": 0.800000011920929, "g": 0.800000011920929, "b": 0.800000011920929 },
                                        "boundVariables": {}
                                      }
                                    ],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "HUG",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 181.77, "height": 72,
                                    "relativeTransform": [[1, 0, 100], [0, 1, 10]],
                                    "constraints": { "horizontal": "MIN", "vertical": "CENTER" }
                                  },
                                  "children": [
                                    {
                                      "type": "TEXT",
                                      "name": "EFMD's LIFT (Learning Impact for Today and Tomorrow)",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                        "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                            "color": { "r": 0, "g": 0, "b": 0 },
                                            "boundVariables": {}
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG",
                                        "fontSize": 16,
                                        "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                        "lineHeight": { "unit": "PIXELS", "value": 24 },
                                        "font": { "family": "Roboto", "style": "Regular" },
                                        "richTextSpans": [
                                          {
                                            "start": 0,
                                            "end": 52,
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "fills": [
                                              {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                "color": { "r": 0, "g": 0, "b": 0 },
                                                "boundVariables": {}
                                              }
                                            ],
                                            "fontSize": 16
                                          }
                                        ]
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 160, "height": 72,
                                        "relativeTransform": [[1, 0, 11], [0, 1, 0]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                      }
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
                  "name": "HorizontalBorder",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": true,
                    "paddingTop": 24, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
                    "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                    "layoutAlign": "STRETCH", "layoutGrow": 0,
                    "counterAxisSpacing": 0,
                    "layoutWrap": "NO_WRAP",
                    "counterAxisAlignContent": "AUTO",
                    "gridRowCount": 0,
                    "gridColumnCount": 0,
                    "gridRowGap": 0,
                    "gridColumnGap": 0,
                    "fills": [],
                    "strokes": [
                      {
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.9019607901573181, "g": 0.9019607901573181, "b": 0.9019607901573181 },
                        "boundVariables": {}
                      }
                    ],
                    "effects": [],
                    "cornerRadius": 0,
                    "layoutSizingVertical": "HUG",
                    "layoutSizingHorizontal": "FILL"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 1236, "height": 85,
                    "relativeTransform": [[1, 0, 12], [0, 1, 288]],
                    "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Container",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "counterAxisSpacing": 0,
                        "layoutWrap": "NO_WRAP",
                        "counterAxisAlignContent": "AUTO",
                        "gridRowCount": 0,
                        "gridColumnCount": 0,
                        "gridRowGap": 0,
                        "gridColumnGap": 0,
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 820, "height": 60,
                        "relativeTransform": [[1, 0, 208], [0, 1, 25]],
                        "constraints": { "horizontal": "CENTER", "vertical": "STRETCH" }
                      },
                      "children": [
                        {
                          "type": "TEXT",
                          "name": "© 1998-2025 UEFA. All rights reserved. The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected by trademarks and/or copyright of UEFA. No use for commercial purposes may be made of such trademarks. Use of UEFA.com signifies your agreement to the Terms and Conditions and Privacy Policy.",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "textCase": "ORIGINAL", "textDecoration": "NONE",
                            "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                            "paragraphSpacing": 0, "paragraphIndent": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0.4000000059604645, "g": 0.4000000059604645, "b": 0.4000000059604645 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "layoutSizingHorizontal": "HUG",
                            "layoutSizingVertical": "HUG",
                            "fontSize": 14,
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "PIXELS", "value": 20 },
                            "font": { "family": "Roboto", "style": "Regular" },
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 317,
                                "font": { "family": "Roboto", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0.4000000059604645, "g": 0.4000000059604645, "b": 0.4000000059604645 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 14
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 809, "height": 60,
                            "relativeTransform": [[1, 0, 5.5], [0, 1, 0]],
                            "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                          }
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

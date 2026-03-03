import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import IMG_PresidentSection_img_1_png from "././assets/PresidentSection_img_1.png";
import IMG_PresidentSection_img_2_png from "././assets/PresidentSection_img_2.png";
import { Main_Header } from "../Programmes_Section/Main_Header";
import { FollowUs } from "./FollowUs";


export interface PresidentSectionProps extends ComponentProps {
  variant?: 'empty' | 'in-card' | 'outside' | 'stay-connected' | 'stay-connected-social-only';
}

export class PresidentSection extends BaseComponent {
  async create(props: PresidentSectionProps): Promise<SceneNode> {
    const variant = props.variant || 'stay-connected';
    const isSocialOnly = variant === 'stay-connected-social-only';
    const darkGreen = { r: 0.05, g: 0.35, b: 0.15 };

    const followUsNode: NodeDefinition = {
      "type": "COMPONENT",
      "name": "Follow us",
      "component": FollowUs,
      "props": {
        "variant": variant === 'stay-connected-social-only' ? 'social-only' : 'standard'
      },
      "layoutProps": {
        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
        "width": 300, "height": 48,
        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
      }
    };

    const dividerNode: NodeDefinition = {
      "type": "RECTANGLE",
      "name": "Divider",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "layoutAlign": "STRETCH", "layoutGrow": 0,
        "fills": [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
            "color": isSocialOnly ? darkGreen : { "r": 0.800000011920929, "g": 0.800000011920929, "b": 0.800000011920929 },
            "boundVariables": {}
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": 0,
        "layoutSizingHorizontal": "FILL",
        "layoutSizingVertical": "FIXED"
      },
      "layoutProps": {
        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
        "width": 1276, "height": 1,
        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
      }
    };

    // Construct the PresidentWordsCard children
    const presidentWordsCardChildren: any[] = [
      {
        "type": "COMPONENT",
        "name": "PRESIDENT’S MESSAGE",
        "component": Main_Header,
        "props": {
          "title": "PRESIDENT’S MESSAGE",
          "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 }
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 986, "height": 64,
          "relativeTransform": [[1, 0, 145], [0, 1, 64]],
          "constraints": { "horizontal": "MIN", "vertical": "MIN" }
        }
      }
    ];

    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "PresidentSection",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "VERTICAL", "itemSpacing": -340, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 0, "paddingRight": 202, "paddingBottom": 96, "paddingLeft": 202,
        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "counterAxisSpacing": 0,
        "layoutWrap": "NO_WRAP",
        "counterAxisAlignContent": "AUTO",
        "gridRowCount": 0,
        "gridColumnCount": 0,
        "gridRowGap": 0,
        "gridColumnGap": 0,
        "fills": [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
            "color": { "r": 0.9490196108818054, "g": 0.9803921580314636, "b": 0.9764705896377563 },
            "boundVariables": {}
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED",
        "layoutSizingVertical": "HUG"
      },
      "layoutProps": { "width": 1680, "height": 884, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "FRAME",
          "name": "Background",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
            "fills": [
              {
                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                "scaleMode": "FILL",
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
                "originalImageHash": "e1994c76a92326d7ee0b24b05739a53937c8cc41",
                "assetRef": IMG_PresidentSection_img_1_png
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0,
            "layoutSizingHorizontal": "HUG",
            "layoutSizingVertical": "HUG"
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 1680, "height": 480,
            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
          },
          "children": [
            {
              "type": "RECTANGLE",
              "name": "Background",
              "props": {
                "visible": true, "opacity": 0.699999988079071, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 1680, "height": 480,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
              }
            }
          ]
        },
        {
          "type": "FRAME",
          "name": "ContentWrapper",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "VERTICAL", "itemSpacing": 32, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
            "width": 1276, "height": 648,
            "relativeTransform": [[1, 0, 202], [0, 1, 140]],
            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
          },
          "children": [
            {
              "type": "FRAME",
              "name": "PresidentWordsCard",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 64, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 64, "paddingRight": 145, "paddingBottom": 64, "paddingLeft": 145,
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
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0,
                "layoutSizingVertical": "HUG",
                "layoutSizingHorizontal": "FILL"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 1276, "height": 648,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
              },
              "children": [
                {
                  "type": "COMPONENT",
                  "name": "PRESIDENT’S MESSAGE",
                  "component": Main_Header,
                  "props": {
                    "title": "PRESIDENT’S MESSAGE",
                    "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 }
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 986, "height": 64,
                    "relativeTransform": [[1, 0, 145], [0, 1, 64]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                  }
                },
                {
                  "type": "FRAME",
                  "name": "Container",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                    "width": 986, "height": 392,
                    "relativeTransform": [[1, 0, 145], [0, 1, 192]],
                    "constraints": { "horizontal": "MIN", "vertical": "MIN" }
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
                        "width": 986, "height": 392,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
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
                            "primaryAxisAlignItems": "MAX", "counterAxisAlignItems": "MIN",
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
                            "width": 986, "height": 392,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "Margin",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 24, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "MIN",
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
                                "layoutSizingHorizontal": "HUG",
                                "layoutSizingVertical": "HUG"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 628, "height": 392,
                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                "constraints": { "horizontal": "MIN", "vertical": "STRETCH" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Container",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                                    "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "layoutSizingHorizontal": "FIXED",
                                    "layoutSizingVertical": "HUG"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 604, "height": 392,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "MIN", "vertical": "STRETCH" }
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
                                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "x": 0, "y": 0,
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
                                        "width": 604, "height": 272,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                                      },
                                      "children": [
                                        {
                                          "type": "TEXT",
                                          "name": "\"The education programmes run by the UEFA Academy always involve the top professionals in the game with the support of forward-thinking academics. This balance between a theoretical background and professional expertise is a strong feature of our courses. Held at UEFA headquarters and some of the most iconic football facilities in Europe, our programmes will bring you to the heart of European football.\"",
                                          "props": {
                                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                            "isMask": false, "maskType": "ALPHA",
                                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                                            "characters": "\"The education programmes run by the UEFA Academy always involve the top professionals in the game with the support of forward-thinking academics. This balance between a theoretical background and professional expertise is a strong feature of our courses. Held at UEFA headquarters and some of the most iconic football facilities in Europe, our programmes will bring you to the heart of European football.\"",
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
                                            "layoutSizingHorizontal": "FILL",
                                            "layoutSizingVertical": "HUG",
                                            "fontSize": 24,
                                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                            "lineHeight": { "unit": "PIXELS", "value": 34 },
                                            "font": { "family": "Roboto", "style": "Regular" },
                                            "richTextSpans": [
                                              {
                                                "start": 0,
                                                "end": 406,
                                                "font": { "family": "Roboto", "style": "Regular" },
                                                "fills": [
                                                  {
                                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                    "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                    "boundVariables": {}
                                                  }
                                                ],
                                                "fontSize": 24
                                              }
                                            ]
                                          },
                                          "layoutProps": {
                                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                            "width": 603, "height": 272,
                                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "type": "FRAME",
                                      "name": "AuthorGroup",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                                        "width": 604, "height": 56,
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
                                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                                            "width": 604, "height": 24,
                                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                                          },
                                          "children": [
                                            {
                                              "type": "TEXT",
                                              "name": "Aleksander Čeferin",
                                              "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "characters": "Aleksander Čeferin", "fontSize": 18,
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
                                                "lineHeight": { "unit": "PIXELS", "value": 24 },
                                                "font": { "family": "Roboto", "style": "Regular" },
                                                "richTextSpans": [
                                                  {
                                                    "start": 0,
                                                    "end": 18,
                                                    "font": { "family": "Roboto", "style": "Regular" },
                                                    "fills": [
                                                      {
                                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                        "color": { "r": 0.01568627543747425, "g": 0.04313725605607033, "b": 0.10588235408067703 },
                                                        "boundVariables": {}
                                                      }
                                                    ],
                                                    "fontSize": 18
                                                  }
                                                ]
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 152, "height": 24,
                                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                              }
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
                                            "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
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
                                            "width": 604, "height": 24,
                                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                            "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
                                          },
                                          "children": [
                                            {
                                              "type": "TEXT",
                                              "name": "UEFA President",
                                              "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA",
                                                "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "characters": "UEFA President", "fontSize": 16,
                                                "textCase": "ORIGINAL", "textDecoration": "NONE",
                                                "textAlignHorizontal": "LEFT", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
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
                                                "letterSpacing": { "unit": "PERCENT", "value": 0 },
                                                "lineHeight": { "unit": "PIXELS", "value": 24 },
                                                "font": { "family": "Roboto", "style": "Italic" },
                                                "richTextSpans": [
                                                  {
                                                    "start": 0,
                                                    "end": 14,
                                                    "font": { "family": "Roboto", "style": "Italic" },
                                                    "fills": [
                                                      {
                                                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                                        "color": { "r": 0.4000000059604645, "g": 0.4000000059604645, "b": 0.4000000059604645 },
                                                        "boundVariables": {}
                                                      }
                                                    ],
                                                    "fontSize": 16
                                                  }
                                                ]
                                              },
                                              "layoutProps": {
                                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                                "width": 107, "height": 24,
                                                "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "FRAME",
                              "name": "Margin",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 24, "paddingLeft": 68,
                                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MAX",
                                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                "layoutAlign": "INHERIT", "layoutGrow": 1,
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
                                "layoutSizingVertical": "FIXED",
                                "layoutSizingHorizontal": "FILL"
                              },
                              "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 358, "height": 314,
                                "relativeTransform": [[1, 0, 628], [0, 1, 0]],
                                "constraints": { "horizontal": "MAX", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "FRAME",
                                  "name": "Container",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                    "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                    "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                                    "cornerRadius": 145,
                                    "layoutSizingHorizontal": "FIXED",
                                    "layoutSizingVertical": "FIXED"
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                    "width": 290, "height": 290,
                                    "relativeTransform": [[1, 0, 68], [0, 1, 0]],
                                    "constraints": { "horizontal": "MAX", "vertical": "MIN" }
                                  },
                                  "children": [
                                    {
                                      "type": "FRAME",
                                      "name": "Aleksander Čeferin",
                                      "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                                        "fills": [
                                          {
                                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                            "scaleMode": "CROP",
                                            "imageTransform": [[1, 0, 0], [0, 1, 0]],
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
                                            "originalImageHash": "531a8fd886271160e30d1d88497a3db603ae51b6",
                                            "assetRef": IMG_PresidentSection_img_2_png
                                          }
                                        ],
                                        "strokes": [],
                                        "effects": [],
                                        "cornerRadius": 0,
                                        "layoutSizingVertical": "FIXED",
                                        "layoutSizingHorizontal": "FILL"
                                      },
                                      "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 290, "height": 290,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                        "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
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
              ]
            },
          ]
        }
      ]
    };

    if (variant === 'outside') {
      structure.children![1].children!.push(dividerNode);
      structure.children![1].children!.push(followUsNode);
    } else if (variant === 'stay-connected' || variant === 'stay-connected-social-only') {
      const isSocialOnly = variant === 'stay-connected-social-only';
      structure.children![1].children!.push({
        "type": "FRAME",
        "name": "FollowUsCard",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA", "clipsContent": false,
          "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
          "paddingTop": 32, "paddingRight": 145, "paddingBottom": 32, "paddingLeft": 145,
          "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
          "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
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
          "fills": isSocialOnly ? [] : [
            {
              "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
              "color": { "r": 1, "g": 1, "b": 1 },
              "boundVariables": {}
            }
          ],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0,
          "layoutSizingVertical": "HUG",
          "layoutSizingHorizontal": "FILL"
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 1276, "height": 100,
          "relativeTransform": [[1, 0, 0], [0, 1, 0]],
          "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
        },
        "children": [
          {
            "type": "COMPONENT" as const,
            "name": "STAY CONNECTED",
            "component": Main_Header,
            "props": {
              "title": "STAY CONNECTED",
              "color": isSocialOnly ? darkGreen : { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 }
            },
            "layoutProps": {
              "parentIsAutoLayout": true, "layoutPositioning": "AUTO" as const,
              "width": 986, "height": 64,
              "relativeTransform": [[1, 0, 145], [0, 1, 32]] as T2x3,
              "constraints": { "horizontal": "MIN", "vertical": "MIN" }
            }
          } as any,
          followUsNode
        ]
      });
    } else if (variant === 'in-card') {
      structure.children![1].children![0].children!.push(dividerNode);
      structure.children![1].children![0].children!.push(followUsNode);
    }

    const root = await this.renderDefinition(structure);

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

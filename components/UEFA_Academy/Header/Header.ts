import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import IMG_Header_img_1_png from "././assets/Header_img_1.png";
import SVG_Header_assets_vector_Clip_path_group_761_157589_svg_orig from "./assets/Header_assets_vector_Clip_path_group_761_157589_svg_orig.svg";
import SVG_Header_Synth_Vector_1 from "./assets/Header_Synth_Vector_1.svg";
import SVG_Header_Synth_Vector_2 from "./assets/Header_Synth_Vector_2.svg";
import SVG_Header_assets_icon_Vector_761_157604_svg_orig from "./assets/Header_assets_icon_Vector_761_157604_svg_orig.svg";


export class Header extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Header",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 0, "paddingRight": 210, "paddingBottom": 0, "paddingLeft": 210,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
            "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "MIN",
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
                "color": { "r": 1, "g": 1, "b": 1 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0,
            "layoutSizingHorizontal": "FILL",
            "layoutSizingVertical": "HUG"
          },
          "layoutProps": { "width": 1680, "height": 180, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "FRAME",
              "name": "Container",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
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
                "layoutSizingVertical": "FIXED",
                "layoutSizingHorizontal": "FILL"
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 1260, "height": 180,
                "relativeTransform": [[1, 0, 210], [0, 1, 0]],
                "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
              },
              "children": [
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
                    "width": 290, "height": 70,
                    "relativeTransform": [[1, 0, 12], [0, 1, 55]],
                    "constraints": { "horizontal": "MIN", "vertical": "CENTER" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "UEFA Academy",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
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
                        "width": 290, "height": 70,
                        "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                        "constraints": { "horizontal": "STRETCH", "vertical": "MIN" }
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
                                  "svgContent": SVG_Header_assets_vector_Clip_path_group_761_157589_svg_orig
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
                                        "assetRef": IMG_Header_img_1_png
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
                },
                {
                  "type": "FRAME",
                  "name": "Link:margin",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 0, "paddingRight": 46, "paddingBottom": 0, "paddingLeft": 611.8280029296875,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                    "layoutSizingVertical": "HUG",
                    "layoutSizingHorizontal": "FILL"
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 909, "height": 44,
                    "relativeTransform": [[1, 0, 302], [0, 1, 68]],
                    "constraints": { "horizontal": "MAX", "vertical": "MIN" }
                  },
                  "children": [
                    {
                      "type": "FRAME",
                      "name": "Link",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "strokeWeight": 2, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 2, "strokeRightWeight": 2, "strokeBottomWeight": 2, "strokeLeftWeight": 2,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "layoutMode": "NONE",
                        "fills": [],
                        "strokes": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                            "boundVariables": {}
                          }
                        ],
                        "effects": [],
                        "cornerRadius": 4,
                        "layoutSizingHorizontal": "FIXED",
                        "layoutSizingVertical": "FIXED"
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 251.17, "height": 44,
                        "relativeTransform": [[1, 0, 611.83], [0, 1, 0]],
                        "constraints": { "horizontal": "MAX", "vertical": "MIN" }
                      },
                      "children": [
                        {
                          "type": "FRAME",
                          "name": "external.svg fill",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                            "x": 0, "y": 0,
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
                            "width": 251.17, "height": 44,
                            "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                            "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                          },
                          "children": [
                            {
                              "type": "FRAME",
                              "name": "external.svg",
                              "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                "strokeWeight": 0.9090909361839294, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.9090909361839294, "strokeRightWeight": 0.9090909361839294, "strokeBottomWeight": 0.9090909361839294, "strokeLeftWeight": 0.9090909361839294,
                                "x": 204.1699981689453, "y": 2,
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
                                "width": 40, "height": 80,
                                "relativeTransform": [[1, 0, 204.17], [0, 1, 2]],
                                "constraints": { "horizontal": "MAX", "vertical": "MIN" }
                              },
                              "children": [
                                {
                                  "type": "VECTOR",
                                  "shouldFlatten": true,
                                  "name": "Vector",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.9090909361839294, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "x": 0, "y": 0,
                                    "fills": [],
                                    "strokes": [],
                                    "effects": [],
                                    "cornerRadius": 0,
                                    "vectorPaths": [
                                      { "windingRule": "EVENODD", "data": "M 0 0 L 40 0 L 40 80 L 0 80 L 0 0 Z" }
                                    ]
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 40, "height": 80,
                                    "relativeTransform": [[1, 0, 0], [0, 1, 0]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "svgContent": SVG_Header_Synth_Vector_1
                                },
                                {
                                  "type": "VECTOR",
                                  "shouldFlatten": true,
                                  "name": "Vector",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.9090909361839294, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "x": 11.361804962158203, "y": 50.90909194946289,
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
                                    "vectorPaths": [
                                      {
                                        "windingRule": "EVENODD",
                                        "data": "M 16.890922723650718 0.16636241407395574 C 17.009551232480092 0.24845209751738367 17.10630287265249 0.358311706615423 17.17274215108678 0.4863634930090484 C 17.241110073248525 0.6167632959891265 17.276681383936396 0.7618557521382996 17.276378804987143 0.9090909004211426 L 17.276378804987143 6.363636302947998 C 17.276378804987143 6.604742209345934 17.180598815340403 6.835973725907836 17.010111204565625 7.006461336767825 C 16.839623593790847 7.176948947627814 16.608393811297805 7.272727203369141 16.367287905020376 7.272727203369141 C 16.126181998742947 7.272727203369141 15.894950482296617 7.176948947627814 15.724462871521839 7.006461336767825 C 15.55397526074706 6.835973725907836 15.458197005053606 6.604742209345934 15.458197005053606 6.363636302947998 L 15.458197005053606 3.1954539601152647 L 7.5809235245439766 11.533633035425737 C 7.499436789530215 11.622458389100558 7.40109828407868 11.694195348664936 7.2916307584489 11.744662086147583 C 7.18216323281912 11.79512882363023 7.063752409632837 11.82332223858862 6.943287779739585 11.827600539724518 C 6.822823149846332 11.831878840860416 6.702711176248958 11.812156370204171 6.589939311384352 11.76958246277427 C 6.477167446519746 11.72700855534437 6.3739883327692475 11.66243139030782 6.286405586958306 11.579610540757859 C 6.198822841147365 11.496789691207898 6.128584369466478 11.397380266355443 6.079779043732942 11.287161979537633 C 6.030973717999406 11.176943692719822 6.004574590379341 11.058119497720272 6.002118743997469 10.937603932889033 C 5.999662897615598 10.817088368057794 6.0211992743193825 10.69728951520687 6.065473929130422 10.585174459598784 C 6.109748583941462 10.473059403990698 6.175878798749182 10.370868684201191 6.260014817958264 10.284548574681684 L 14.257286969055292 1.8181818008422852 L 11.214559615893505 1.8181818008422852 C 10.973453709616075 1.8181818008422852 10.742223927123032 1.7224035451009585 10.571736316348254 1.5519159342409694 C 10.401248705573476 1.3814283233809803 10.305468715926736 1.150196806819079 10.305468715926736 0.9090909004211426 C 10.305468715926736 0.667984994023206 10.401248705573476 0.4367534774613049 10.571736316348254 0.2662658666013158 C 10.742223927123032 0.09577825574132673 10.973453709616075 0 11.214559615893505 0 L 16.392742339246436 0 C 16.57728778662946 0.005454545449939641 16.749104540329856 0.06636241556949046 16.890922723650718 0.16636241407395574 Z M 2.6272866678976743 4.545454502105713 C 2.52286594199618 4.5466139467364854 2.4197904116347044 4.569153200270319 2.324415313626557 4.611681113911982 C 2.2290402156184093 4.654209027553645 2.1433879558602866 4.715823357485374 2.0727415310295365 4.792726644411959 C 1.9154688117292382 4.9599993704145655 1.8181963217923012 5.197272684643486 1.8181963217923012 5.454545402526856 L 1.8181963217923012 15.454545307159425 C 1.8181963217923012 15.711818025042795 1.9154688117292382 15.949087871365142 2.0727415310295365 16.11636059736775 C 2.1433879558602866 16.193263884294332 2.2290402156184093 16.254885150039208 2.324415313626557 16.29741306368087 C 2.4197904116347044 16.339940977322534 2.52286594199618 16.362476762949793 2.6272866678976743 16.363636207580566 L 12.072741647408156 16.363636207580566 C 12.177171286913257 16.362530464596414 12.280264976371441 16.340013725468115 12.375647680744976 16.29748242181231 C 12.47103038511851 16.25495111815651 12.556675221389131 16.193306400016116 12.627287651252935 16.11636059736775 C 12.784560370553233 15.949087871365142 12.88183199351353 15.711818025042795 12.88183199351353 15.454545307159425 L 12.88183199351353 9.999999904632569 C 12.88183199351353 9.758893998234631 12.97761198316027 9.527662481672731 13.148099593935047 9.357174870812742 C 13.318587204709825 9.186687259952752 13.549816987202869 9.090909004211426 13.790922893480298 9.090909004211426 C 14.032028799757727 9.090909004211426 14.263260316204056 9.186687259952752 14.433747926978834 9.357174870812742 C 14.604235537753611 9.527662481672731 14.700013793447066 9.758893998234631 14.700013793447066 9.999999904632569 L 14.700013793447066 15.454545307159425 C 14.70204972765068 16.16377240718365 14.433118285192162 16.846993838382257 13.948195924350326 17.36454340240307 C 13.70782803193989 17.621442507539342 13.417458751784935 17.826469370589546 13.094936586212228 17.967015875350626 C 12.772414420639521 18.107562380111705 12.424554862687506 18.18066048157574 12.072741647408156 18.18181800842285 L 2.6272866678976743 18.18181800842285 C 2.27533706635524 18.18067732613182 1.927337166559205 18.10758733278321 1.6046650682133732 17.967043618603203 C 1.2819929698675414 17.826499904423194 0.991463326126728 17.621468516838632 0.750923691062002 17.36454340240307 C 0.26633256948367146 16.846853117235888 -0.0022677962810382403 16.163647941849337 0.000014425116639520665 15.454545307159425 L 0.000014425116639520665 5.454545402526856 C 0.000014425116639520665 4.747272684600137 0.2645600357379229 4.0590892751433785 0.750923691062002 3.544543839376638 C 0.9913584219529762 3.2877299146955408 1.2817410318738125 3.0827638483824273 1.6042480524482936 2.9422239543182513 C 1.9267550730227747 2.8016840602540753 2.274581767141435 2.7285371584400853 2.6263780763762536 2.727272701263428 L 7.779105715270641 2.727272701263428 C 8.02021162154807 2.727272701263428 8.251441404041115 2.823050957004755 8.421929014815893 2.9935385678647437 C 8.59241662559067 3.1640261787247326 8.68819661523741 3.395257695286634 8.68819661523741 3.6363636016845704 C 8.68819661523741 3.877469508082507 8.59241662559067 4.108701024644408 8.421929014815893 4.279188635504397 C 8.251441404041115 4.449676246364386 8.02021162154807 4.545454502105713 7.779105715270641 4.545454502105713 L 2.6272866678976743 4.545454502105713 Z"
                                      }
                                    ]
                                  },
                                  "layoutProps": {
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 17.2764, "height": 18.1818,
                                    "relativeTransform": [[1, 0, 11.3618], [0, 1, 50.9091]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "svgContent": SVG_Header_Synth_Vector_2
                                },
                                {
                                  "type": "VECTOR",
                                  "shouldFlatten": true,
                                  "name": "Vector",
                                  "props": {
                                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                    "isMask": false, "maskType": "ALPHA",
                                    "strokeWeight": 0.9090909361839294, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                    "x": 11.361804962158203, "y": 10.909090995788574,
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
                                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                                    "width": 17.2764, "height": 18.1818,
                                    "relativeTransform": [[1, 0, 11.3618], [0, 1, 10.9091]],
                                    "constraints": { "horizontal": "SCALE", "vertical": "SCALE" }
                                  },
                                  "svgContent": SVG_Header_assets_icon_Vector_761_157604_svg_orig
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "TEXT",
                          "name": "About the UEFA Academy",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "characters": "About the UEFA Academy", "fontSize": 16,
                            "textCase": "TITLE", "textDecoration": "NONE",
                            "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "NONE",
                            "paragraphSpacing": 0, "paragraphIndent": 0,
                            "x": 18, "y": 9.5,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "layoutSizingHorizontal": "FIXED",
                            "layoutSizingVertical": "FIXED",
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "PIXELS", "value": 24 },
                            "font": { "family": "Roboto", "style": "Medium" },
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 22,
                                "font": { "family": "Roboto", "style": "Medium" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 16
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 186.5147, "height": 24,
                            "relativeTransform": [[1, 0, 18], [0, 1, 9.5]],
                            "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                          }
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
                    "width": 37, "height": 40,
                    "relativeTransform": [[1, 0, 1211], [0, 1, 70]],
                    "constraints": { "horizontal": "MIN", "vertical": "CENTER" }
                  },
                  "children": [
                    {
                      "type": "RECTANGLE",
                      "name": "Background",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": 2.5, "y": 8,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 1
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 32, "height": 4,
                        "relativeTransform": [[1, 0, 2.5], [0, 1, 8]],
                        "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                      }
                    },
                    {
                      "type": "RECTANGLE",
                      "name": "Background",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": 2.5, "y": 0,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 1
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 32, "height": 4,
                        "relativeTransform": [[1, 0, 2.5], [0, 1, 0]],
                        "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                      }
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
                        "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": 0, "y": 28,
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
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 37, "height": 12,
                        "relativeTransform": [[1, 0, 0], [0, 1, 28]],
                        "constraints": { "horizontal": "SCALE", "vertical": "MAX" }
                      },
                      "children": [
                        {
                          "type": "TEXT",
                          "name": "menu",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "layoutAlign": "INHERIT", "layoutGrow": 0,
                            "characters": "menu", "fontSize": 12,
                            "textCase": "UPPER", "textDecoration": "NONE",
                            "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                            "paragraphSpacing": 0, "paragraphIndent": 0,
                            "fills": [
                              {
                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                                "boundVariables": {}
                              }
                            ],
                            "strokes": [],
                            "effects": [],
                            "layoutSizingHorizontal": "HUG",
                            "layoutSizingVertical": "HUG",
                            "letterSpacing": { "unit": "PERCENT", "value": 0 },
                            "lineHeight": { "unit": "PIXELS", "value": 12 },
                            "font": { "family": "Roboto", "style": "Regular" },
                            "richTextSpans": [
                              {
                                "start": 0,
                                "end": 4,
                                "font": { "family": "Roboto", "style": "Regular" },
                                "fills": [
                                  {
                                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                                    "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                                    "boundVariables": {}
                                  }
                                ],
                                "fontSize": 12
                              }
                            ]
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                            "width": 34, "height": 12,
                            "relativeTransform": [[1, 0, 1.5], [0, 1, 0]],
                            "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                          }
                        }
                      ]
                    },
                    {
                      "type": "RECTANGLE",
                      "name": "Background",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "x": 2.5, "y": 16,
                        "fills": [
                          {
                            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                            "color": { "r": 0, "g": 0.7019608020782471, "b": 0.6901960968971252 },
                            "boundVariables": {}
                          }
                        ],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 1
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                        "width": 32, "height": 4,
                        "relativeTransform": [[1, 0, 2.5], [0, 1, 16]],
                        "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
                      }
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

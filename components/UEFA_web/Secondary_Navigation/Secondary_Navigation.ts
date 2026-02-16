import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import SVG_Secondary_Navigation_assets_vector_Logotype_I14_114603_13611_17298_9157_80883_25_2153_svg_96_66666412353516x42_5994873046875 from "./assets/Secondary_Navigation_assets_vector_Logotype_I14_114603_13611_17298_9157_80883_25_2153_svg_96_66666412353516x42_5994873046875.svg";
import SVG_Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80889_8836_74401_1004_283_svg_6_710267066955566x4_968685150146484 from "./assets/Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80889_8836_74401_1004_283_svg_6_710267066955566x4_968685150146484.svg";
import SVG_Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80892_8836_74401_1004_283_svg_6_710267066955566x4_968685150146484 from "./assets/Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80892_8836_74401_1004_283_svg_6_710267066955566x4_968685150146484.svg";
import SVG_Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80893_2823_14395_1004_283_svg_8_05232048034668x5_9624223709106445 from "./assets/Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80893_2823_14395_1004_283_svg_8_05232048034668x5_9624223709106445.svg";
import SVG_Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80894_2823_14395_1004_12_svg_20x20 from "./assets/Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80894_2823_14395_1004_12_svg_20x20.svg";


export interface ChipItem {
  name: string;
  hasDropdown?: boolean;
  isSelected?: boolean;
}

export interface Secondary_NavigationProps extends ComponentProps {
  chips?: ChipItem[];
}

const DEFAULT_CHIPS: ChipItem[] = [
  { name: "Matches" },
  { name: "Standings" },
  { name: "UEFA.tv" },
  { name: "Gaming", hasDropdown: true },
  { name: "Stats", hasDropdown: true },
  { name: "Teams" },
  { name: "News", hasDropdown: true },
  { name: "History", hasDropdown: true },
];

const PK_CHIP_FILLS = [
  {
    type: "SOLID",
    visible: true,
    opacity: 1,
    blendMode: "NORMAL",
    color: { r: 0.94, g: 0.95, b: 0.97 },
    boundVariables: {}
  }
];

const TEXT_FILL_WHITE = [
  {
    visible: true,
    opacity: 1,
    blendMode: "NORMAL",
    type: "SOLID",
    color: { r: 1, g: 1, b: 1 },
    boundVariables: {}
  }
];

const GRADIENT_FILL = [
  {
    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR",
    "gradientStops": [
      { "color": { "r": 0.003921568859368563, "g": 0, "b": 0.33725491166114807, "a": 1 }, "position": 0, "boundVariables": {} },
      { "color": { "r": 0.007843137718737125, "g": 0.19607843458652496, "b": 1, "a": 1 }, "position": 1, "boundVariables": {} }
    ],
    "gradientTransform": [[-0.9914078712463379, -1.0325795773979962e-10, 0.9914078712463379], [6.661338147750939e-16, -0.24844209849834442, 0.7509265542030334]]
  }
];

export class Secondary_Navigation extends BaseComponent {
  private createChip(item: ChipItem): NodeDefinition {
    const chip: NodeDefinition = {
      "type": "FRAME",
      "name": `pk-chip / ${item.name}`,
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 8, "paddingRight": 12, "paddingBottom": 8, "paddingLeft": 12,
        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "layoutAlign": "INHERIT", "layoutGrow": 0,
        "fills": item.isSelected ? PK_CHIP_FILLS : [],
        "strokes": [],
        "effects": [],
        "cornerRadius": 50
      },
      "layoutProps": {
        "parentIsAutoLayout": true, "layoutPositioning": "AUTO"
      },
      "children": [
        {
          "type": "TEXT",
          "name": "Primary text",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "characters": item.name, "fontSize": 16,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
            "paragraphSpacing": 16, "paragraphIndent": 0,
            "fills": TEXT_FILL_WHITE,
            "strokes": [],
            "effects": [],
            "letterSpacing": { "unit": "PIXELS", "value": 0 },
            "lineHeight": { "unit": "PERCENT", "value": 150 },
            "font": { "family": "Manrope", "style": "Regular" }
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO"
          }
        }
      ]
    };

    if (item.hasDropdown) {
      chip.children?.push({
        "type": "FRAME",
        "name": "Navigation / dropdown-indicator",
        "props": {
          "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
          "isMask": false, "maskType": "ALPHA",
          "clipsContent": false,
          "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
          "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
          "layoutAlign": "INHERIT", "layoutGrow": 0,
          "layoutMode": "NONE",
          "fills": [],
          "strokes": [],
          "effects": [],
          "cornerRadius": 0
        },
        "layoutProps": {
          "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
          "width": 20, "height": 20
        },
        "children": [
          {
            "type": "VECTOR",
            "shouldFlatten": true,
            "name": "Vector",
            "props": {
              "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
              "isMask": false, "maskType": "ALPHA",
              "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
              "x": 6.6448974609375, "y": 8.101704597473145,
              "strokes": [],
              "effects": [],
              "cornerRadius": 0
            },
            "layoutProps": {
              "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
              "width": 6.710267066955566, "height": 4.968685150146484,
              "relativeTransform": [[1, 0, 6.6448974609375], [0, 1, 8.101704597473145]]
            },
            "svgContent": SVG_Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80889_8836_74401_1004_283_svg_6_710267066955566x4_968685150146484
          }
        ]
      });
    }

    return chip;
  }

  async create(props: Secondary_NavigationProps): Promise<SceneNode> {
    const chipItems = props.chips || DEFAULT_CHIPS;

    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "Secondary Navigation",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
        "layoutMode": "HORIZONTAL", "itemSpacing": 25, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
        "paddingTop": 4, "paddingRight": 135, "paddingBottom": 4, "paddingLeft": 135,
        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
        "fills": GRADIENT_FILL,
        "strokes": [],
        "effects": [],
        "cornerRadius": 0
      },
      "layoutProps": { "width": 1680, "height": 80, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "FRAME",
          "name": "Content",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 48, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
            "width": 1120, "height": 73,
            "relativeTransform": [[1, 0, 135], [0, 1, 3.5]]
          },
          "children": [
            {
              "type": "FRAME",
              "name": "Competition Logo",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 10, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
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
                "width": 100, "height": 73,
                "relativeTransform": [[1, 0, 0], [0, 1, 0]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Logotype",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 0.5780856609344482, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 1.6666666269302368, "y": 15.263636589050293,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 96.66666412353516, "height": 42.5994873046875,
                    "relativeTransform": [[1, 0, 1.6666666269302368], [0, 1, 15.263636589050293]]
                  },
                  "svgContent": SVG_Secondary_Navigation_assets_vector_Logotype_I14_114603_13611_17298_9157_80883_25_2153_svg_96_66666412353516x42_5994873046875
                }
              ]
            },
            {
              "type": "FRAME",
              "name": "pk-chips",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "HORIZONTAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
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
                "width": 972, "height": 40,
                "relativeTransform": [[1, 0, 148], [0, 1, 16.5]]
              },
              "children": [
                ...chipItems.map(item => this.createChip(item)),
                {
                  "type": "FRAME",
                  "name": "pk-button - MORE MENU",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                    "layoutMode": "HORIZONTAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                    "paddingTop": 8, "paddingRight": 4, "paddingBottom": 8, "paddingLeft": 4,
                    "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                    "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                    "layoutAlign": "INHERIT", "layoutGrow": 0,
                    "fills": [],
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 8
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                    "width": 70, "height": 40,
                    "relativeTransform": [[1, 0, 902], [0, 1, 0]]
                  },
                  "children": [
                    {
                      "type": "TEXT",
                      "name": "Label",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "strokeWeight": 1, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "characters": "More", "fontSize": 16,
                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                        "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                        "paragraphSpacing": 16, "paragraphIndent": 0,
                        "fills": TEXT_FILL_WHITE,
                        "strokes": [],
                        "effects": [],
                        "letterSpacing": { "unit": "PIXELS", "value": 0 },
                        "lineHeight": { "unit": "PERCENT", "value": 150 },
                        "font": { "family": "Manrope", "style": "Regular" }
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 38, "height": 24,
                        "relativeTransform": [[1, 0, 4], [0, 1, 8]]
                      }
                    },
                    {
                      "type": "FRAME",
                      "name": "Following icon",
                      "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA",
                        "clipsContent": false,
                        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                        "layoutMode": "NONE",
                        "fills": [],
                        "strokes": [],
                        "effects": [],
                        "cornerRadius": 0
                      },
                      "layoutProps": {
                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                        "width": 24, "height": 24,
                        "relativeTransform": [[1, 0, 42], [0, 1, 8]]
                      },
                      "children": [
                        {
                          "type": "VECTOR",
                          "shouldFlatten": true,
                          "name": "Vector",
                          "props": {
                            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                            "isMask": false, "maskType": "ALPHA",
                            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                            "x": 7.973876953125, "y": 9.7220458984375,
                            "strokes": [],
                            "effects": [],
                            "cornerRadius": 0
                          },
                          "layoutProps": {
                            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                            "width": 8.05232048034668, "height": 5.9624223709106445,
                            "relativeTransform": [[1, 0, 7.973876953125], [0, 1, 9.7220458984375]]
                          },
                          "svgContent": SVG_Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80893_2823_14395_1004_283_svg_8_05232048034668x5_9624223709106445
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
          "name": "pk-button / Fav team - DESKTOP ONLY",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "layoutMode": "HORIZONTAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
            "paddingTop": 12, "paddingRight": 16, "paddingBottom": 12, "paddingLeft": 16,
            "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
            "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutAlign": "INHERIT", "layoutGrow": 0,
            "fills": [
              {
                "visible": true, "opacity": 0.10000000149011612, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 12
          },
          "layoutProps": {
            "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
            "width": 168, "height": 48,
            "relativeTransform": [[1, 0, 1377], [0, 1, 16]]
          },
          "children": [
            {
              "type": "TEXT",
              "name": "Label",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "characters": "Favorite team", "fontSize": 16,
                "textCase": "ORIGINAL", "textDecoration": "NONE",
                "textAlignHorizontal": "CENTER", "textAlignVertical": "CENTER", "textAutoResize": "WIDTH_AND_HEIGHT",
                "paragraphSpacing": 16, "paragraphIndent": 0,
                "fills": TEXT_FILL_WHITE,
                "strokes": [],
                "effects": [],
                "letterSpacing": { "unit": "PIXELS", "value": 0 },
                "lineHeight": { "unit": "PERCENT", "value": 150 },
                "font": { "family": "Manrope", "style": "SemiBold" }
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 104, "height": 24,
                "relativeTransform": [[1, 0, 16], [0, 1, 12]]
              }
            },
            {
              "type": "FRAME",
              "name": "Following icon",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "clipsContent": false,
                "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
                "layoutAlign": "INHERIT", "layoutGrow": 0,
                "layoutMode": "NONE",
                "fills": [],
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                "width": 24, "height": 24,
                "relativeTransform": [[1, 0, 128], [0, 1, 12]]
              },
              "children": [
                {
                  "type": "VECTOR",
                  "shouldFlatten": true,
                  "name": "Vector",
                  "props": {
                    "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                    "isMask": false, "maskType": "ALPHA",
                    "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                    "x": 2, "y": 2,
                    "strokes": [],
                    "effects": [],
                    "cornerRadius": 0
                  },
                  "layoutProps": {
                    "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                    "width": 20, "height": 20,
                    "relativeTransform": [[1, 0, 2], [0, 1, 2]]
                  },
                  "svgContent": SVG_Secondary_Navigation_assets_icon_Vector_I14_114603_13611_17298_9157_80894_2823_14395_1004_12_svg_20x20
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

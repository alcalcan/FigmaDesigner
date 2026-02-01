import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// SVG Assets
import SVG_Main_Navigation_assets_vector_UEFA_com_I14_114603_13611_17297_9157_77872_svg_74_09954071044922x12 from "./assets/Main_Navigation_assets_vector_UEFA_com_I14_114603_13611_17297_9157_77872_svg_74_09954071044922x12.svg";
import SVG_Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77873_1004_283_svg_6_710267066955566x4_968685150146484 from "./assets/Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77873_1004_283_svg_6_710267066955566x4_968685150146484.svg";
import SVG_Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77875_2823_14227_1004_31_svg_22x22 from "./assets/Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77875_2823_14227_1004_31_svg_22x22.svg";
import SVG_Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77877_2204_3_1004_18_svg_12_807365417480469x12_807365417480469 from "./assets/Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77877_2204_3_1004_18_svg_12_807365417480469x12_807365417480469.svg";

import { BookingLogo_color } from "../BookingLogo_color/BookingLogo_color";

export interface Main_Navigation_BookingProps extends ComponentProps {
  gradientDirection?: 'left-to-right' | 'right-to-left';
  logoVariant?: 'color' | 'white';
  variant?: 'standard' | 'floating';
}

export class Main_Navigation_Booking extends BaseComponent {
  async create(props: Main_Navigation_BookingProps): Promise<SceneNode> {
    const gradientDirection = props.gradientDirection || 'left-to-right';
    const logoVariant = props.logoVariant || 'color';
    const variant = props.variant || 'standard';

    const mainColor = { "r": 0.0117, "g": 0.0117, "b": 0.1098, "a": 1 }; // Dark background

    const blueColor = logoVariant === 'color'
      ? { "r": 0, "g": 0.212, "b": 0.447, "a": 1 } // Darker blue for color logo
      : { "r": 0, "g": 0.424, "b": 0.894, "a": 1 }; // Original blue for white logo

    const gradientStops = [
      { "color": blueColor, "position": 0 },
      { "color": mainColor, "position": 1 }
    ];

    if (gradientDirection === 'right-to-left') {
      gradientStops[0].position = 1;
      gradientStops[1].position = 0;
    }

    // Left Area Component
    const leftArea: NodeDefinition = {
      "type": "FRAME" as const,
      "name": "Left area",
      "props": { "layoutMode": "HORIZONTAL" as const, "itemSpacing": 16, "counterAxisAlignItems": "CENTER" as const },
      "layoutProps": { "width": 98, "height": 20, "parentIsAutoLayout": true },
      "children": [
        {
          "type": "FRAME" as const,
          "name": "Logo + Dropdown icon",
          "props": { "layoutMode": "HORIZONTAL" as const, "itemSpacing": 4, "counterAxisAlignItems": "CENTER" as const },
          "layoutProps": { "parentIsAutoLayout": true },
          "children": [
            {
              "type": "VECTOR" as const, "shouldFlatten": true, "name": "UEFA.com",
              "layoutProps": { "width": 74, "height": 12, "parentIsAutoLayout": true },
              "svgContent": SVG_Main_Navigation_assets_vector_UEFA_com_I14_114603_13611_17297_9157_77872_svg_74_09954071044922x12
            },
            {
              "type": "FRAME" as const, "name": "Navigation / dropdown-indicator",
              "props": {
                "layoutMode": "HORIZONTAL" as const,
                "primaryAxisAlignItems": "CENTER" as const,
                "counterAxisAlignItems": "CENTER" as const
              },
              "layoutProps": { "width": 20, "height": 20, "parentIsAutoLayout": true },
              "children": [
                {
                  "type": "VECTOR" as const, "shouldFlatten": true, "name": "Vector",
                  "layoutProps": { "width": 6.7, "height": 5, "parentIsAutoLayout": true },
                  "svgContent": SVG_Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77873_1004_283_svg_6_710267066955566x4_968685150146484
                }
              ]
            }
          ]
        }
      ]
    };

    // Right Side Children Logic
    const rightSideChildren: NodeDefinition[] = [];

    if (variant === 'floating') {
      rightSideChildren.push({
        "type": "FRAME" as const,
        "name": "Logo Gradient Wrapper",
        "props": {
          "layoutMode": "HORIZONTAL" as const,
          "itemSpacing": 0,
          "paddingLeft": 16,
          "paddingRight": 16,
          "paddingTop": 4,
          "paddingBottom": 4,
          "cornerRadius": 8,
          "primaryAxisAlignItems": "MIN" as const,
          "counterAxisAlignItems": "CENTER" as const,
          "counterAxisSizingMode": "AUTO" as const,
          "fills": [{
            "type": "GRADIENT_LINEAR" as const,
            "gradientStops": gradientStops,
            "gradientTransform": [[1, 0, 0], [0, 1, 0]]
          }]
        },
        "layoutProps": { "parentIsAutoLayout": true },
        "children": [{
          "type": "COMPONENT" as const, "name": "BookingLogo", "component": BookingLogo_color, "props": { "variant": logoVariant },
          "layoutProps": { "parentIsAutoLayout": true }
        }]
      });
    }

    // Floating Group or Standard Buttons
    const rightAreaChildren: NodeDefinition[] = [];
    if (variant === 'floating') {
      rightAreaChildren.push({
        "type": "FRAME" as const,
        "name": "Floating Group",
        "props": {
          "layoutMode": "HORIZONTAL" as const,
          "itemSpacing": 12,
          "paddingLeft": 12,
          "paddingRight": 12,
          "cornerRadius": 24,
          "primaryAxisAlignItems": "MIN" as const, // Align left
          "counterAxisAlignItems": "CENTER" as const, // Align middle
          "counterAxisSizingMode": "AUTO" as const, // Height: HUG
          "fills": [{ "type": "SOLID" as const, "color": mainColor }],
          "effects": [{ "type": "DROP_SHADOW" as const, "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 }, "offset": { "x": 0, "y": 4 }, "radius": 4, "visible": true, "blendMode": "NORMAL" as const }]
        },
        "layoutProps": { "parentIsAutoLayout": true },
        "children": [
          {
            "type": "FRAME" as const, "name": "pk-button-login",
            "props": { "layoutMode": "HORIZONTAL" as const, "itemSpacing": 8, "paddingTop": 12, "paddingBottom": 12, "cornerRadius": 8, "primaryAxisAlignItems": "CENTER" as const, "counterAxisAlignItems": "CENTER" as const },
            "layoutProps": { "height": 40, "parentIsAutoLayout": true },
            "children": [
              { "type": "FRAME" as const, "name": "Leading icon", "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": true }, "children": [{ "type": "VECTOR" as const, "shouldFlatten": true, "name": "Vector", "props": { "x": 1, "y": 1 }, "layoutProps": { "width": 22, "height": 22, "parentIsAutoLayout": false }, "svgContent": SVG_Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77875_2823_14227_1004_31_svg_22x22 }] },
              { "type": "TEXT" as const, "name": "Label", "props": { "characters": "Login", "fontSize": 16, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": "Manrope", "style": "SemiBold" } }, "layoutProps": { "parentIsAutoLayout": true } }
            ]
          },
          {
            "type": "FRAME" as const, "name": "pk-divider-1",
            "props": { "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 }, "opacity": 0.5 }] },
            "layoutProps": { "width": 1, "height": 24, "parentIsAutoLayout": true }
          },
          {
            "type": "FRAME" as const, "name": "pk-button-search",
            "props": {
              "layoutMode": "HORIZONTAL" as const,
              "primaryAxisAlignItems": "CENTER" as const,
              "counterAxisAlignItems": "CENTER" as const
            },
            "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": true },
            "children": [
              {
                "type": "FRAME" as const, "name": "Icon", "props": { "clipsContent": true, "layoutMode": "HORIZONTAL" as const, "primaryAxisAlignItems": "CENTER" as const, "counterAxisAlignItems": "CENTER" as const },
                "layoutProps": { "width": 18, "height": 18, "parentIsAutoLayout": true },
                "children": [{ "type": "VECTOR" as const, "shouldFlatten": true, "name": "Vector", "layoutProps": { "width": 12.8, "height": 12.8, "parentIsAutoLayout": true }, "svgContent": SVG_Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77877_2204_3_1004_18_svg_12_807365417480469x12_807365417480469 }]
              }
            ]
          }
        ]
      });
    } else {
      rightAreaChildren.push(
        { "type": "COMPONENT" as const, "name": "BookingLogo", "component": BookingLogo_color, "props": { "variant": logoVariant }, "layoutProps": { "parentIsAutoLayout": true } },
        {
          "type": "FRAME" as const, "name": "pk-button",
          "props": { "layoutMode": "HORIZONTAL" as const, "itemSpacing": 8, "paddingTop": 12, "paddingBottom": 12, "cornerRadius": 8, "primaryAxisAlignItems": "CENTER" as const, "counterAxisAlignItems": "CENTER" as const },
          "layoutProps": { "height": 40, "parentIsAutoLayout": true },
          "children": [
            { "type": "FRAME" as const, "name": "Leading icon", "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": true }, "children": [{ "type": "VECTOR" as const, "shouldFlatten": true, "name": "Vector", "props": { "x": 1, "y": 1 }, "layoutProps": { "width": 22, "height": 22, "parentIsAutoLayout": false }, "svgContent": SVG_Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77875_2823_14227_1004_31_svg_22x22 }] },
            { "type": "TEXT" as const, "name": "Label", "props": { "characters": "Login", "fontSize": 16, "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 } }], "font": { "family": "Manrope", "style": "SemiBold" } }, "layoutProps": { "parentIsAutoLayout": true } }
          ]
        },
        {
          "type": "FRAME" as const, "name": "pk-divider",
          "props": { "fills": [{ "type": "SOLID" as const, "color": { "r": 1, "g": 1, "b": 1 }, "opacity": 0.5 }] },
          "layoutProps": { "width": 1, "height": 24, "parentIsAutoLayout": true }
        },
        {
          "type": "FRAME" as const, "name": "pk-button",
          "props": {
            "layoutMode": "HORIZONTAL" as const,
            "primaryAxisAlignItems": "CENTER" as const,
            "counterAxisAlignItems": "CENTER" as const
          },
          "layoutProps": { "width": 24, "height": 24, "parentIsAutoLayout": true },
          "children": [
            {
              "type": "FRAME" as const, "name": "Icon", "props": { "clipsContent": true, "layoutMode": "HORIZONTAL" as const, "primaryAxisAlignItems": "CENTER" as const, "counterAxisAlignItems": "CENTER" as const },
              "layoutProps": { "width": 18, "height": 18, "parentIsAutoLayout": true },
              "children": [{ "type": "VECTOR" as const, "shouldFlatten": true, "name": "Vector", "layoutProps": { "width": 12.8, "height": 12.8, "parentIsAutoLayout": true }, "svgContent": SVG_Main_Navigation_assets_icon_Vector_I14_114603_13611_17297_9157_77877_2204_3_1004_18_svg_12_807365417480469x12_807365417480469 }]
            }
          ]
        }
      );
    }

    rightSideChildren.push({
      "type": "FRAME" as const,
      "name": "Right area",
      "props": {
        "layoutMode": "HORIZONTAL" as const,
        "itemSpacing": 12,
        "counterAxisAlignItems": "CENTER" as const,
        "counterAxisSizingMode": "AUTO" as const, // Height: HUG
        "fills": []
      },
      "layoutProps": { "parentIsAutoLayout": true },
      "children": rightAreaChildren
    });

    const structure: NodeDefinition = {
      "type": "FRAME" as const,
      "name": "Main Navigation",
      "props": {
        "layoutMode": "HORIZONTAL" as const,
        "primaryAxisAlignItems": "SPACE_BETWEEN" as const,
        "counterAxisAlignItems": "CENTER" as const,
        "primaryAxisSizingMode": "FIXED" as const, // Width: FIXED/FILL
        "counterAxisSizingMode": "AUTO" as const, // Height: HUG
        "paddingLeft": 135,
        "paddingRight": 135,
        "fills": variant === 'floating' ? [{ "type": "SOLID" as const, "color": mainColor }] : [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL" as const, "type": "GRADIENT_LINEAR" as const,
            "gradientStops": gradientStops,
            "gradientTransform": [[1, 0, 0], [0, 1, 0]]
          }
        ]
      },
      "layoutProps": {
        "width": props.width ?? 1680,
        "parentIsAutoLayout": props.parentIsAutoLayout ?? false,
        "layoutAlign": props.layoutAlign,
        "layoutGrow": props.layoutGrow
      }, // Reverted height to 40px
      "children": [
        leftArea,
        {
          "type": "FRAME" as const,
          "name": "Right side container",
          "props": {
            "layoutMode": "HORIZONTAL" as const,
            "itemSpacing": 12,
            "counterAxisAlignItems": "CENTER" as const,
            "counterAxisSizingMode": "AUTO" as const, // Height: HUG
            "fills": []
          },
          "layoutProps": { "parentIsAutoLayout": true },
          "children": rightSideChildren
        }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

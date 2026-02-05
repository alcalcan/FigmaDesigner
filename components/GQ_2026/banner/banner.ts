import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// Imports from Hero Assets
import SVG_hero_assets_vector_Vector_1349_11355_svg_1592x805_0513916015625 from "../hero/assets/hero_assets_vector_Vector_1349_11355_svg_1592x805_0513916015625.svg";
import SVG_hero_Synth_Path_1 from "../hero/assets/hero_Synth_Path_1.svg";
import SVG_hero_Synth_Path_2 from "../hero/assets/hero_Synth_Path_2.svg";
import SVG_hero_Synth_Path_3 from "../hero/assets/hero_Synth_Path_3.svg";
import SVG_hero_Synth_Path_4 from "../hero/assets/hero_Synth_Path_4.svg";
import SVG_hero_Synth_Vector_5 from "../hero/assets/hero_Synth_Vector_5.svg";
import SVG_hero_assets_vector_Vector_1349_11366 from "../hero/assets/hero_assets_vector_Vector_1349_11366_svg_1068_5123291015625x134_15765380859375.svg";
import SVG_hero_assets_vector_Vector_1349_11367 from "../hero/assets/hero_assets_vector_Vector_1349_11367_svg_1218_63671875x153_1599578857422.svg";
import SVG_hero_assets_vector_Vector_1349_11371 from "../hero/assets/hero_assets_vector_Vector_1349_11371_svg_1068_5123291015625x134_15765380859375.svg";
import SVG_hero_Synth_Vector_9 from "../hero/assets/hero_Synth_Vector_9.svg";
import SVG_hero_assets_vector_Vector_1349_11373 from "../hero/assets/hero_assets_vector_Vector_1349_11373_svg_600x334.svg";
import SVG_hero_assets_vector_Vector_1349_11375 from "../hero/assets/hero_assets_vector_Vector_1349_11375_svg_2291_601318359375x287_7232666015625.svg";
import SVG_hero_assets_vector_Vector_1349_11376 from "../hero/assets/hero_assets_vector_Vector_1349_11376_svg_2613_569091796875x328_47698974609375.svg";
import SVG_hero_assets_vector_Vector_1349_11377 from "../hero/assets/hero_assets_vector_Vector_1349_11377_svg_2616_570068359375x328_1084899902344.svg";

// T-Shirt Images from Hero
import IMG_hero_img_1_png from "../hero/assets/hero_img_1.png";
import IMG_hero_img_2_png from "../hero/assets/hero_img_2.png";
import IMG_hero_img_3_png from "../hero/assets/hero_img_3.png";
import IMG_hero_img_4_png from "../hero/assets/hero_img_4.png";

import { pk_button } from "../pk_button/pk_button";

export class banner extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const showGradient = props.showGradient === true;
        const showVectors = props.showVectors === true;
        const showStripes = props.showStripes === true;
        const showShirts = props.showShirts === true;
        const shirtsLayout = props.shirtsLayout || 'RIGHT'; // 'RIGHT' | 'CENTER' | 'RIGHT_ALIGNED'
        const shirtsBlur = props.shirtsBlur || 0;

        const headline = props.headline || "Upcoming\nGolden Questions";
        const subline = props.subline || "Test your knowledge. Prove your status.";
        const buttonText = props.buttonText || "Let's go";

        let textAlign: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED" = "CENTER";
        let alignItems: "MIN" | "CENTER" | "MAX" | "BASELINE" = "CENTER";
        let headlineSize = 56;
        let sublineSize = 20;

        if (showShirts) {
            if (shirtsLayout === 'RIGHT') {
                textAlign = "LEFT";
                alignItems = "MIN";
                headlineSize = 32;
                sublineSize = 14;
            } else if (shirtsLayout === 'CENTER') {
                textAlign = "CENTER";
                alignItems = "CENTER";
                headlineSize = 48; // Slightly smaller than standard 56 to fit with shirts
                sublineSize = 16;
            } else if (shirtsLayout === 'RIGHT_ALIGNED') {
                textAlign = "LEFT";
                alignItems = "MIN";
                // Slightly smaller headline to accommodate the shirts taking up more horizontal space on the right
                headlineSize = 32;
                sublineSize = 14;
            }
        }

        const children: NodeDefinition[] = [];
        const backgroundChildren: NodeDefinition[] = [];

        // 1. Hero_Base_Group
        const baseGroupChildren: NodeDefinition[] = [];

        if (showVectors) {
            baseGroupChildren.push({
                "type": "VECTOR", "shouldFlatten": true, "name": "Mesh_Vector",
                "props": {
                    "visible": true, "opacity": 1, "blendMode": "PASS_THROUGH",
                    "strokeWeight": 1, "strokeAlign": "INSIDE",
                    "x": 447, "y": 0, "strokes": []
                },
                "layoutProps": { "width": 1592, "height": 805.0514, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, 447], [0, 1, 0]] },
                "svgContent": SVG_hero_assets_vector_Vector_1349_11355_svg_1592x805_0513916015625
            });
        }

        if (showGradient) {
            baseGroupChildren.push({
                "type": "RECTANGLE", "name": "Background_Gradient",
                "props": {
                    "visible": true, "blendMode": "PASS_THROUGH",
                    "x": 255, "y": 34.5432,
                    "fills": [{
                        "type": "GRADIENT_RADIAL", "visible": true, "opacity": 0.8, "blendMode": "NORMAL",
                        "gradientStops": [
                            { "color": { "r": 0.3294, "g": 0.0863, "b": 0.4314, "a": 1 }, "position": 0 },
                            { "color": { "r": 0.0196, "g": 0.102, "b": 0.2706, "a": 1 }, "position": 1 }
                        ],
                        "gradientTransform": [[0.6884, 0.4069, 0.1164], [-0.5533, 0.6955, 0.646]]
                    }]
                },
                "layoutProps": { "width": 2066, "height": 1788, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, 255], [0, 1, 34.5432]] }
            });
        }

        if (showVectors) {
            // Starball Left
            baseGroupChildren.push({
                "type": "BOOLEAN_OPERATION", "booleanOperation": "EXCLUDE", "name": "Starball_Left",
                "props": {
                    "visible": true, "opacity": 0.6, "blendMode": "PASS_THROUGH", "x": 1620, "y": 4.168,
                    "fills": [{
                        "type": "GRADIENT_LINEAR", "visible": true, "opacity": 1, "blendMode": "NORMAL",
                        "gradientStops": [
                            { "color": { "r": 0.1412, "g": 0.3471, "b": 0.7208, "a": 0.4 }, "position": 0 },
                            { "color": { "r": 0.0745, "g": 0.1804, "b": 0.3725, "a": 1 }, "position": 1 }
                        ],
                        "gradientTransform": [[1, 0, 0], [0, 1, -0.5]]
                    }]
                },
                "layoutProps": { "width": 829.06, "height": 865.65, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, 1620], [0, 1, 4.168]] },
                "children": [
                    { "type": "VECTOR", "name": "Path_1", "svgContent": SVG_hero_Synth_Path_1, "shouldFlatten": true, "props": {}, "layoutProps": { "width": 664.5, "height": 455.4, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, 1072], [0, 1, 72]] } },
                    { "type": "VECTOR", "name": "Path_2", "svgContent": SVG_hero_Synth_Path_2, "shouldFlatten": true, "props": {}, "layoutProps": { "width": 829, "height": 865.6, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, 967], [0, 1, -30.4]] } }
                ]
            });
            // Starball Right/Center
            baseGroupChildren.push({
                "type": "BOOLEAN_OPERATION", "booleanOperation": "EXCLUDE", "name": "Starball_Center",
                "props": {
                    "visible": true, "opacity": 0.6, "blendMode": "PASS_THROUGH", "x": 0, "y": 4.168,
                    "fills": [{
                        "type": "GRADIENT_LINEAR", "visible": true, "opacity": 1, "blendMode": "NORMAL",
                        "gradientStops": [
                            { "color": { "r": 0.1412, "g": 0.3471, "b": 0.7208, "a": 0.4 }, "position": 0 },
                            { "color": { "r": 0.0745, "g": 0.1804, "b": 0.3725, "a": 1 }, "position": 1 }
                        ],
                        "gradientTransform": [[1, 0, 0], [0, 1, -0.5]]
                    }]
                },
                "layoutProps": { "width": 829.06, "height": 865.65, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, 0], [0, 1, 4.168]] },
                "children": [
                    { "type": "VECTOR", "name": "Path_3", "svgContent": SVG_hero_Synth_Path_3, "shouldFlatten": true, "props": {}, "layoutProps": { "width": 664.5, "height": 455.4, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, -548], [0, 1, 72]] } },
                    { "type": "VECTOR", "name": "Path_4", "svgContent": SVG_hero_Synth_Path_4, "shouldFlatten": true, "props": {}, "layoutProps": { "width": 829, "height": 865.6, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, -653], [0, 1, -30.4]] } }
                ]
            });
        }

        if (baseGroupChildren.length > 0) {
            backgroundChildren.push({
                "type": "FRAME", "name": "Hero_Base_Group",
                "props": { "visible": true, "opacity": 1, "blendMode": "PASS_THROUGH", "x": -653, "y": -34.54 },
                "layoutProps": { "width": 2449, "height": 1822, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, -653], [0, 1, -34.54]] },
                "children": baseGroupChildren
            });
        }

        // 3. Hero_Synth_Group_1
        if (showVectors) {
            backgroundChildren.push({
                "type": "FRAME", "name": "Hero_Synth_Group_1",
                "props": { "visible": true, "opacity": 1, "blendMode": "PASS_THROUGH", "x": -455.25, "y": -187.16 },
                "layoutProps": { "width": 2191, "height": 1136, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, -455.25], [0, 1, -187.16]] },
                "children": [
                    {
                        "type": "VECTOR", "name": "Synth_Vector_5", "svgContent": SVG_hero_Synth_Vector_5, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 1120.6, "y": 1001.8, "fills": [{ "type": "SOLID", "color": { "r": 0.239, "g": 0.239, "b": 0.239 } }] },
                        "layoutProps": { "width": 1068.5, "height": 134.1, "parentIsAutoLayout": false, "relativeTransform": [[0.9741, 0.221, 1120.6], [-0.2265, 0.9753, 1001.8]] }
                    },
                    {
                        "type": "VECTOR", "name": "Vector_1366", "svgContent": SVG_hero_assets_vector_Vector_1349_11366, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 78.76, "y": 257.6 },
                        "layoutProps": { "width": 1068.5, "height": 134.1, "parentIsAutoLayout": false, "relativeTransform": [[0.9741, 0.221, 78.76], [-0.2265, 0.9753, 257.6]] }
                    },
                    {
                        "type": "VECTOR", "name": "Vector_1367", "svgContent": SVG_hero_assets_vector_Vector_1349_11367, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 0, "y": 141.1 },
                        "layoutProps": { "width": 1218.6, "height": 153.1, "parentIsAutoLayout": false, "relativeTransform": [[0.9933, 0.1129, 0], [-0.1158, 0.9937, 141.1]] }
                    }
                ]
            });
        }

        // 4. Hero_Synth_Group_2
        if (showVectors) {
            backgroundChildren.push({
                "type": "FRAME", "name": "Hero_Synth_Group_2",
                "props": { "visible": true, "opacity": 1, "blendMode": "PASS_THROUGH", "x": -620.1, "y": -306.1 },
                "layoutProps": { "width": 2489, "height": 639.2, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, -620.1], [0, 1, -306.1]] },
                "children": [
                    {
                        "type": "VECTOR", "name": "Vector_1371", "svgContent": SVG_hero_assets_vector_Vector_1349_11371, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 1147.2, "y": 239.9 },
                        "layoutProps": { "width": 1068.5, "height": 134.1, "parentIsAutoLayout": false, "relativeTransform": [[-0.9741, -0.221, 1147.2], [0.2265, -0.9753, 239.9]] }
                    },
                    {
                        "type": "VECTOR", "name": "Synth_Vector_9", "svgContent": SVG_hero_Synth_Vector_9, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 1227.8, "y": 152.2, "fills": [{ "type": "SOLID", "color": { "r": 0.702, "g": 0.702, "b": 0.702 } }] },
                        "layoutProps": { "width": 1218.6, "height": 153.1, "parentIsAutoLayout": false, "relativeTransform": [[-0.9933, -0.1129, 1227.8], [0.1158, -0.9937, 152.2]] }
                    },
                    {
                        "type": "VECTOR", "name": "Vector_1373", "svgContent": SVG_hero_assets_vector_Vector_1349_11373, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 1269.4, "y": 246.7 },
                        "layoutProps": { "width": 600, "height": 334, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, 0], [0, 1, 0]] }
                    }
                ]
            });
        }

        // 5. Hero_Stripes_Group
        if (showStripes) {
            backgroundChildren.push({
                "type": "FRAME", "name": "Hero_Stripes_Group",
                "props": { "visible": true, "opacity": 0.6, "blendMode": "PASS_THROUGH", "x": -926.2, "y": -426 },
                "layoutProps": { "width": 5339, "height": 1370.9, "parentIsAutoLayout": false, "relativeTransform": [[1, 0, -926.2], [0, 1, -426]] },
                "children": [
                    {
                        "type": "VECTOR", "name": "Vector_1375", "svgContent": SVG_hero_assets_vector_Vector_1349_11375, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 2460.4, "y": 514.5 },
                        "layoutProps": { "width": 2291.6, "height": 287.7, "parentIsAutoLayout": false, "relativeTransform": [[-0.9741, -0.221, 2460.4], [0.2265, -0.9753, 514.5]] }
                    },
                    {
                        "type": "VECTOR", "name": "Vector_1376", "svgContent": SVG_hero_assets_vector_Vector_1349_11376, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 2633.2, "y": 326.4 },
                        "layoutProps": { "width": 2613.6, "height": 328.5, "parentIsAutoLayout": false, "relativeTransform": [[-0.9933, -0.1129, 2633.2], [0.1158, -0.9937, 326.4]] }
                    },
                    {
                        "type": "VECTOR", "name": "Vector_1377", "svgContent": SVG_hero_assets_vector_Vector_1349_11377, "shouldFlatten": true,
                        "props": { "visible": true, "blendMode": "OVERLAY", "x": 2722.5, "y": 529.1 },
                        "layoutProps": { "width": 2616.6, "height": 328.1, "parentIsAutoLayout": false, "relativeTransform": [[-0.9469, -0.3143, 2722.5], [0.3217, -0.9493, 529.1]] }
                    }
                ]
            });
        }


        // Wrap everything in Background_Layers
        if (backgroundChildren.length > 0) {
            children.push({
                "type": "FRAME",
                "name": "Background_Layers",
                "props": { "visible": true, "opacity": 1, "blendMode": "PASS_THROUGH", "strokes": [], "strokeWeight": 0 },
                "layoutProps": {
                    "parentIsAutoLayout": true, "layoutPositioning": "ABSOLUTE",
                    "width": 2449, "height": 1822,
                    "relativeTransform": [[1, 0, -653], [0, 1, -150]]
                },
                "children": backgroundChildren
            });
        }

        // --- SHIRT GROUP MOVED OUT OF Background_Layers FOR INDEPENDENT CONTROL ---
        // This resolves the issue of massive background bounds affecting alignment.
        // We use absolute positioning relative to the banner frame itself.
        if (showShirts) {
            let scale = 0.55;
            let targetX = 325; // Default for RIGHT variant (Visual X)
            let targetY = 60; // Visual Y
            let opacity = 1;

            let groupWidth = 608.4;
            let groupHeight = 308.3;

            if (shirtsLayout === 'CENTER') {
                scale = 0.4;
                targetX = 178; // Visual X for center
                opacity = 0.4;
                targetY = 80;
            } else if (shirtsLayout === 'RIGHT_ALIGNED') {
                scale = 0.5869; // Exact scale derived from user reference
                targetX = 300.29;
                targetY = 63.27; // Exact Y from user reference (updated)
            }

            const groupProps: any = {
                "visible": true, "opacity": opacity, "blendMode": "PASS_THROUGH", "clipsContent": false,
                "layoutMode": "HORIZONTAL",
                "itemSpacing": shirtsLayout === 'RIGHT_ALIGNED' ? -117 : -199.24,
                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                "fills": []
            };

            // Apply blur if requested
            if (shirtsBlur > 0) {
                groupProps.effects = [{
                    "type": "LAYER_BLUR",
                    "visible": true,
                    "radius": shirtsBlur
                }];
            }

            children.push({
                "type": "FRAME", "name": "Hero_Shirts_Group_Independent",
                "props": groupProps,
                "layoutProps": {
                    "width": groupWidth, "height": groupHeight,
                    "parentIsAutoLayout": true,
                    "layoutPositioning": "ABSOLUTE",
                    "relativeTransform": [[scale, 0, targetX], [0, scale, targetY]]
                },
                "children": [
                    {
                        "type": "RECTANGLE", "name": "Shirt_1",
                        "props": { "visible": true, "fills": [{ "type": "IMAGE", "scaleMode": "FILL", "scalingFactor": 0.5, "assetRef": IMG_hero_img_1_png }] },
                        "layoutProps": { "width": 301.5, "height": 308.3, "parentIsAutoLayout": true }
                    },
                    {
                        "type": "RECTANGLE", "name": "Shirt_2",
                        "props": { "visible": true, "fills": [{ "type": "IMAGE", "scaleMode": "FILL", "scalingFactor": 0.5, "assetRef": IMG_hero_img_2_png }] },
                        "layoutProps": { "width": 301.5, "height": 308.3, "parentIsAutoLayout": true }
                    },
                    {
                        "type": "RECTANGLE", "name": "Shirt_3",
                        "props": { "visible": true, "fills": [{ "type": "IMAGE", "scaleMode": "FILL", "scalingFactor": 0.5, "assetRef": IMG_hero_img_3_png }] },
                        "layoutProps": { "width": 301.5, "height": 308.3, "parentIsAutoLayout": true }
                    },
                    {
                        "type": "RECTANGLE", "name": "Shirt_4",
                        "props": { "visible": true, "fills": [{ "type": "IMAGE", "scaleMode": "FILL", "scalingFactor": 0.5, "assetRef": IMG_hero_img_4_png }] },
                        "layoutProps": { "width": 301.5, "height": 308.3, "parentIsAutoLayout": true }
                    }
                ]
            });
        }


        // Banner Content
        children.push({
            "type": "FRAME", "name": "Banner_Content",
            "props": {
                "visible": true, "layoutMode": "VERTICAL", "itemSpacing": 24, // Tighter spacing for refined layout
                "primaryAxisAlignItems": alignItems, "counterAxisAlignItems": alignItems, "fills": []
            },
            "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "constraints": { "horizontal": "CENTER", "vertical": "CENTER" } },
            "children": [
                {
                    "type": "FRAME", "name": "Text_Block",
                    "props": { "layoutMode": "VERTICAL", "itemSpacing": 8, "primaryAxisAlignItems": alignItems, "counterAxisAlignItems": alignItems, "fills": [] },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                    "children": [
                        {
                            "type": "TEXT", "name": "Headline",
                            "props": {
                                "visible": true, "characters": headline, "fontSize": headlineSize, "textAlignHorizontal": textAlign,
                                "font": { "family": "Manrope", "style": "ExtraBold" }, "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
                                "lineHeight": { "unit": "PERCENT", "value": 110 }
                            },
                            "layoutProps": {
                                // Cap width for centered text so it doesn't span too wide if shirts are behind it
                                "width": shirtsLayout === 'CENTER' ? 500 : undefined,
                                "layoutAlign": shirtsLayout === 'CENTER' ? "INHERIT" : "STRETCH",
                                "layoutGrow": 0, "parentIsAutoLayout": true
                            }
                        },
                        {
                            "type": "TEXT", "name": "Subline",
                            "props": {
                                "visible": true, "opacity": 0.9, "characters": subline, "fontSize": sublineSize, "textAlignHorizontal": textAlign,
                                "font": { "family": "Manrope", "style": "Regular" }, "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }]
                            },
                            "layoutProps": { "layoutAlign": "STRETCH", "layoutGrow": 0, "parentIsAutoLayout": true }
                        }
                    ]
                },
                {
                    "type": "COMPONENT", "name": "Banner_Button", "component": pk_button,
                    "props": { "characters": buttonText },
                    "layoutProps": { "layoutAlign": "INHERIT", "layoutGrow": 0, "parentIsAutoLayout": true }
                }
            ]
        });

        const structure: NodeDefinition = {
            "type": "FRAME", "name": "Banner_GQ",
            "props": {
                "visible": true, "clipsContent": true, "layoutMode": "VERTICAL", "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER", "itemSpacing": 32,
                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED", "paddingLeft": 24, "paddingRight": 24, "paddingTop": 24, "paddingBottom": 24,
                "fills": [{ "type": "SOLID", "color": { "r": 0.0314, "g": 0.1059, "b": 0.2549 } }],
                "strokes": [], "effects": [], "cornerRadius": 0
            },
            "layoutProps": { "width": 600, "height": 300, "parentIsAutoLayout": false },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

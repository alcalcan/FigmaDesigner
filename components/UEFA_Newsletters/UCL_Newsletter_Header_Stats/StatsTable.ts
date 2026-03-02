import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { StatRow } from "./StatRow";

// Asset Imports
import IMG_UCL_Newsletter_Header_Stats_img_5_png from "././assets/UCL_Newsletter_Header_Stats_img_5.png";
import IMG_UCL_Newsletter_Header_Stats_img_3_png from "././assets/UCL_Newsletter_Header_Stats_img_3.png";

const statsData: any[] = [
    { label: "Won", val1: "3", val2: "11", bar1Width: 155.1897, bar2Width: 154, variant: "highlight", highlight1: false, highlight2: true },
    { label: "Drawn", val1: "4", val2: "9", bar1Width: 89.1897, bar2Width: 220, variant: "highlight", highlight1: false, highlight2: true },
    { label: "Lost", val1: "4", val2: "1", bar1Width: 223.1897, bar2Width: 86, leftBarHeight: 4, variant: "highlight", highlight1: false, highlight2: true },
    { label: "Goals", val1: "9", val2: "14", bar1Width: 109.1897, bar2Width: 200, leftBarHeight: 4, variant: "highlight", highlight1: false, highlight2: true },
    { label: "Goals conceded", val1: "11", val2: "14", bar1Width: 142.1897, bar2Width: 167, leftBarHeight: 4, variant: "highlight", highlight1: true, highlight2: false },
];

export class StatsTable extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Comparison Stats",
            "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                "layoutMode": "VERTICAL", "itemSpacing": 24, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                "paddingTop": 12.221510887145996, "paddingRight": 24, "paddingBottom": 12.221510887145996, "paddingLeft": 24,
                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                "primaryAxisAlignItems": "MIN", "counterAxisAlignItems": "CENTER",
                "strokeWeight": 0.9356435537338257, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "strokeTopWeight": 0.9356435537338257, "strokeRightWeight": 0.9356435537338257, "strokeBottomWeight": 0.9356435537338257, "strokeLeftWeight": 0.9356435537338257,
                "counterAxisSpacing": 0,
                "layoutWrap": "NO_WRAP",
                "counterAxisAlignContent": "AUTO",
                "gridRowCount": 0,
                "gridColumnCount": 0,
                "gridRowGap": 0,
                "gridColumnGap": 0,
                "fills": [
                    {
                        "visible": true, "opacity": 0.004000000189989805, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0, "g": 0, "b": 0 },
                        "boundVariables": {}
                    }
                ],
                "strokes": [
                    {
                        "visible": true, "opacity": 0.5, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 1, "g": 1, "b": 1 },
                        "boundVariables": {}
                    }
                ],
                "effects": [
                    {
                        "visible": true, "type": "GLASS",
                        "radius": 72.74712371826172,
                        "boundVariables": {},
                        "refraction": 0.7300000190734863,
                        "depth": 21.096664428710938,
                        "lightAngle": -45,
                        "lightIntensity": 1,
                        "dispersion": 1,
                        "splay": 0
                    }
                ],
                "cornerRadius": 12.221510887145996,
                "layoutSizingHorizontal": "HUG",
                "layoutSizingVertical": "HUG"
            },
            "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 484.8293, "height": 385.5309,
                "relativeTransform": [[1, 0, 58], [0, 1, 175]],
                "constraints": { "horizontal": "CENTER", "vertical": "CENTER" }
            },
            "children": [
                {
                    "type": "FRAME",
                    "name": "Frame 2609321",
                    "props": {
                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                        "layoutMode": "HORIZONTAL", "itemSpacing": 8.729654312133789, "itemReverseZIndex": true, "strokesIncludedInLayout": false,
                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                        "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                        "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
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
                        "width": 436.8293, "height": 67,
                        "relativeTransform": [[1, 0, 24], [0, 1, 12.2215]],
                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                    },
                    "children": [
                        {
                            "type": "FRAME",
                            "name": "Galatasaray",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "strokeWeight": 0.40415066480636597, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                "strokeTopWeight": 0.40415066480636597, "strokeRightWeight": 0.40415066480636597, "strokeBottomWeight": 0.40415066480636597, "strokeLeftWeight": 0.40415066480636597,
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
                                "width": 64, "height": 64,
                                "relativeTransform": [[1, 0, 0], [0, 1, 1.5]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "RECTANGLE",
                                    "name": "Crest",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA",
                                        "strokeWeight": 0.40415066480636597, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 0.40415066480636597, "strokeRightWeight": 0.40415066480636597, "strokeBottomWeight": 0.40415066480636597, "strokeLeftWeight": 0.40415066480636597,
                                        "x": 0, "y": 0,
                                        "fills": [
                                            {
                                                "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "IMAGE",
                                                "scaleMode": "FILL",
                                                "imageTransform": [[1, 0, 0], [0, 1, 0]],
                                                "filters": { "exposure": 0, "contrast": 0, "saturation": 0, "temperature": 0, "tint": 0, "highlights": 0, "shadows": 0 },
                                                "originalImageHash": "4649045df7e614eace27124864d2c0190fa0845f",
                                                "assetRef": IMG_UCL_Newsletter_Header_Stats_img_3_png
                                            }
                                        ]
                                    },
                                    "layoutProps": { "parentIsAutoLayout": false, "width": 64, "height": 64 }
                                }
                            ]
                        },
                        {
                            "type": "FRAME",
                            "name": "Time_Match",
                            "props": {
                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                "paddingTop": 24, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
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
                                "layoutSizingVertical": "HUG"
                            },
                            "layoutProps": {
                                "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                "width": 308.8293, "height": 91.5416,
                                "relativeTransform": [[1, 0, 64], [0, 1, -12.2708]],
                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                            },
                            "children": [
                                {
                                    "type": "FRAME",
                                    "name": "Game",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                        "layoutMode": "HORIZONTAL", "itemSpacing": -2.9098849296569824, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                        "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "AUTO",
                                        "primaryAxisAlignItems": "SPACE_BETWEEN", "counterAxisAlignItems": "CENTER",
                                        "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
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
                                        "width": 308.8293, "height": 31.6631,
                                        "relativeTransform": [[1, 0, 0], [0, 1, 24]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                        {
                                            "type": "FRAME",
                                            "name": "team",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                                "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                                "paddingTop": 0, "paddingRight": 2.9098849296569824, "paddingBottom": 0, "paddingLeft": 2.9098849296569824,
                                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                                "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
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
                                                "width": 146.4124, "height": 31.4549,
                                                "relativeTransform": [[1, 0, 0], [0, 1, 0.1041]],
                                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                            },
                                            "children": [
                                                {
                                                    "type": "RECTANGLE",
                                                    "name": "slit",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR", "gradientStops": [{ "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 }, "position": 0 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 }, "position": 0.32 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 }, "position": 0.7 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 }, "position": 1 }], "gradientTransform": [[1, 0, 0], [0, 1, 0]] }],
                                                        "strokes": [], "effects": [], "cornerRadius": 0
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 140.5927, "height": 0.7275, "relativeTransform": [[1, 0, 2.9099], [0, 1, 0]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } }
                                                },
                                                {
                                                    "type": "TEXT",
                                                    "name": "GALATASARAY",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0.511767566204071, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                        "characters": "Galatasaray", "fontSize": 18,
                                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                                                        "strokes": [], "effects": [], "layoutSizingHorizontal": "HUG", "layoutSizingVertical": "HUG", "letterSpacing": { "unit": "PERCENT", "value": 0 }, "lineHeight": { "unit": "PIXELS", "value": 13.305956840515137 }, "font": { "family": "Champions Web", "style": "Bold" }
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 90, "height": 14, "relativeTransform": [[1, 0, 28.2062], [0, 1, 8.7275]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } }
                                                },
                                                {
                                                    "type": "RECTANGLE",
                                                    "name": "slit",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR", "gradientStops": [{ "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 }, "position": 0 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 }, "position": 0.32 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 }, "position": 0.7 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 }, "position": 1 }], "gradientTransform": [[1, 0, 0], [0, 1, 0]] }],
                                                        "strokes": [], "effects": [], "cornerRadius": 0
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 140.5927, "height": 0.7275, "relativeTransform": [[1, 0, 2.9099], [0, 1, 30.7275]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "FRAME",
                                            "name": "VS Frame",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                                "layoutMode": "VERTICAL", "itemSpacing": 3.7667043209075928, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                                "paddingTop": 5.6500563621521, "paddingRight": 3.7667043209075928, "paddingBottom": 5.6500563621521, "paddingLeft": 3.7667043209075928,
                                                "primaryAxisSizingMode": "FIXED", "counterAxisSizingMode": "FIXED",
                                                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                                "strokeWeight": 0.1454942375421524, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "strokeTopWeight": 0.1454942375421524, "strokeRightWeight": 0.1454942375421524, "strokeBottomWeight": 0.1454942375421524, "strokeLeftWeight": 0.1454942375421524,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "counterAxisSpacing": 0,
                                                "layoutWrap": "NO_WRAP",
                                                "counterAxisAlignContent": "AUTO",
                                                "gridRowCount": 0,
                                                "gridColumnCount": 0,
                                                "gridRowGap": 0,
                                                "gridColumnGap": 0,
                                                "fills": [{ "visible": true, "opacity": 0.3, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                                                "strokes": [], "effects": [], "cornerRadius": 1.4549424648284912, "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
                                            },
                                            "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 21.0967, "height": 26, "relativeTransform": [[1, 0, 143.5024], [0, 1, 2.8316]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } },
                                            "children": [
                                                {
                                                    "type": "TEXT", "name": "VS", "props": { "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH", "isMask": false, "maskType": "ALPHA", "strokeWeight": 0.1454942375421524, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4, "layoutAlign": "INHERIT", "layoutGrow": 0, "characters": "VS", "fontSize": 14, "textCase": "ORIGINAL", "textDecoration": "NONE", "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT", "paragraphSpacing": 0, "paragraphIndent": 0, "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }], "strokes": [], "effects": [], "layoutSizingHorizontal": "HUG", "layoutSizingVertical": "HUG", "letterSpacing": { "unit": "PERCENT", "value": 0 }, "lineHeight": { "unit": "AUTO" }, "font": { "family": "Champions Web", "style": "Bold" } }, "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 14, "height": 15, "relativeTransform": [[1, 0, 3.5484], [0, 1, 5.5]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "FRAME",
                                            "name": "team",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                                "layoutMode": "VERTICAL", "itemSpacing": 8, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                                "paddingTop": 0, "paddingRight": 2.9098849296569824, "paddingBottom": 0, "paddingLeft": 2.9098849296569824,
                                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                                "strokeWeight": 0.7274712324142456, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "strokeTopWeight": 0.7274712324142456, "strokeRightWeight": 0.7274712324142456, "strokeBottomWeight": 0.7274712324142456, "strokeLeftWeight": 0.7274712324142456,
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
                                                "width": 146.4124, "height": 31.4549,
                                                "relativeTransform": [[1, 0, 162.4168], [0, 1, 0.1041]],
                                                "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                            },
                                            "children": [
                                                {
                                                    "type": "RECTANGLE",
                                                    "name": "slit",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR", "gradientStops": [{ "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 }, "position": 0 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 }, "position": 0.32 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 }, "position": 0.7 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 }, "position": 1 }], "gradientTransform": [[1, 0, 0], [0, 1, 0]] }],
                                                        "strokes": [], "effects": [], "cornerRadius": 0
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 140.5927, "height": 0.7275, "relativeTransform": [[1, 0, 2.9099], [0, 1, 0]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } }
                                                },
                                                {
                                                    "type": "TEXT",
                                                    "name": "JUVENTUS",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0.511767566204071, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                        "characters": "Juventus", "fontSize": 18,
                                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                                                        "strokes": [], "effects": [], "layoutSizingHorizontal": "HUG", "layoutSizingVertical": "HUG", "letterSpacing": { "unit": "PERCENT", "value": 0 }, "lineHeight": { "unit": "PIXELS", "value": 13.305956840515137 }, "font": { "family": "Champions Web", "style": "Bold" }
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 90, "height": 14, "relativeTransform": [[1, 0, 28.2062], [0, 1, 8.7275]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } }
                                                },
                                                {
                                                    "type": "RECTANGLE",
                                                    "name": "slit",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                                        "layoutAlign": "STRETCH", "layoutGrow": 0,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR", "gradientStops": [{ "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 }, "position": 0 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 }, "position": 0.32 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 1 }, "position": 0.7 }, { "color": { "r": 0.756, "g": 0.76, "b": 0.835, "a": 0 }, "position": 1 }], "gradientTransform": [[1, 0, 0], [0, 1, 0]] }],
                                                        "strokes": [], "effects": [], "cornerRadius": 0
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 140.5927, "height": 0.7275, "relativeTransform": [[1, 0, 2.9099], [0, 1, 30.7275]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "FRAME",
                                    "name": "Date",
                                    "props": {
                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                        "layoutMode": "VERTICAL", "itemSpacing": 0, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                        "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0,
                                        "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "AUTO",
                                        "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                        "strokeWeight": 1.175707459449768, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                        "strokeTopWeight": 1.175707459449768, "strokeRightWeight": 1.175707459449768, "strokeBottomWeight": 1.175707459449768, "strokeLeftWeight": 1.175707459449768,
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
                                        "cornerRadius": 9.405659675598145,
                                        "layoutSizingHorizontal": "HUG",
                                        "layoutSizingVertical": "HUG"
                                    },
                                    "layoutProps": {
                                        "parentIsAutoLayout": true, "layoutPositioning": "AUTO",
                                        "width": 309.2111, "height": 35.8785,
                                        "relativeTransform": [[1, 0, -0.1909], [0, 1, 55.6631]],
                                        "constraints": { "horizontal": "MIN", "vertical": "MIN" }
                                    },
                                    "children": [
                                        {
                                            "type": "FRAME",
                                            "name": "divider-ball-1-desktop",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                                "strokeWeight": 0.19840888679027557, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "strokeTopWeight": 0.19840888679027557, "strokeRightWeight": 0.19840888679027557, "strokeBottomWeight": 0.19840888679027557, "strokeLeftWeight": 0.19840888679027557,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "layoutMode": "NONE", "fills": [], "strokes": [], "effects": [], "cornerRadius": 0, "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
                                            },
                                            "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 164.599, "height": 1.1757, "relativeTransform": [[1, 0, 72.306], [0, 1, 0]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } },
                                            "children": [
                                                {
                                                    "type": "RECTANGLE",
                                                    "name": "Rectangle",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                                        "x": 1.0134838819503784, "y": 0.4571532607078552,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR", "gradientStops": [{ "color": { "r": 0.7568, "g": 0.7607, "b": 0.8352, "a": 0 }, "position": 0 }, { "color": { "r": 0.6588, "g": 0.1215, "b": 0.8470, "a": 1 }, "position": 0.1381 }, { "color": { "r": 1, "g": 0.8235, "b": 0, "a": 1 }, "position": 0.3229 }, { "color": { "r": 0.8274, "g": 0.4666, "b": 0.4352, "a": 1 }, "position": 0.5317 }, { "color": { "r": 0.6980, "g": 0.1921, "b": 0.7686, "a": 1 }, "position": 0.7031 }, { "color": { "r": 0.3372, "g": 0.0745, "b": 0.9921, "a": 1 }, "position": 0.8570 }, { "color": { "r": 0.7568, "g": 0.7607, "b": 0.8352, "a": 0 }, "position": 1 }], "gradientTransform": [[0.999988, 0.000011, 0], [-0.000011, 0.000011, 0.5]] }],
                                                        "strokes": [], "effects": [], "cornerRadius": 0
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": false, "layoutPositioning": "AUTO", "width": 147.6342, "height": 0.1337, "relativeTransform": [[1, 0, 1.0135], [0, 1, 0.4572]], "constraints": { "horizontal": "SCALE", "vertical": "SCALE" } }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "FRAME",
                                            "name": "date_hour",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA", "clipsContent": false,
                                                "layoutMode": "VERTICAL", "itemSpacing": 2.4449872970581055, "itemReverseZIndex": false, "strokesIncludedInLayout": false,
                                                "paddingTop": 1.175707459449768, "paddingRight": 7.596343994140625, "paddingBottom": 2.351414918899536, "paddingLeft": 7.596343994140625,
                                                "primaryAxisSizingMode": "AUTO", "counterAxisSizingMode": "FIXED",
                                                "primaryAxisAlignItems": "CENTER", "counterAxisAlignItems": "CENTER",
                                                "strokeWeight": 0.3056234121322632, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "strokeTopWeight": 0.3056234121322632, "strokeRightWeight": 0.3056234121322632, "strokeBottomWeight": 0.3056234121322632, "strokeLeftWeight": 0.3056234121322632,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "counterAxisSpacing": 0,
                                                "layoutWrap": "NO_WRAP",
                                                "counterAxisAlignContent": "AUTO",
                                                "gridRowCount": 0,
                                                "gridColumnCount": 0,
                                                "gridRowGap": 0,
                                                "gridColumnGap": 0,
                                                "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR", "gradientStops": [{ "color": { "r": 0.2039, "g": 0, "b": 0.4039, "a": 0 }, "position": 0 }, { "color": { "r": 0.0196, "g": 0.0039, "b": 0.3333, "a": 1 }, "position": 0.5192 }, { "color": { "r": 0.2049, "g": 0, "b": 0.4039, "a": 0 }, "position": 1 }], "gradientTransform": [[1, 0, 0], [0, 1, 0]] }],
                                                "strokes": [], "effects": [], "cornerRadius": 0, "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "HUG"
                                            },
                                            "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 309.2111, "height": 33.5271, "relativeTransform": [[1, 0, 0], [0, 1, 1.1757]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } },
                                            "children": [
                                                {
                                                    "type": "TEXT",
                                                    "name": "17 FEB, 18:45 CET",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0.152382493019104, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                        "characters": "17 FEB, 18:45 CET", "fontSize": 25.295494079589844,
                                                        "textCase": "ORIGINAL", "textDecoration": "NONE",
                                                        "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
                                                        "paragraphSpacing": 0, "paragraphIndent": 0,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                                                        "strokes": [], "effects": [], "layoutSizingHorizontal": "HUG", "layoutSizingVertical": "HUG", "letterSpacing": { "unit": "PIXELS", "value": 1.175707459449768 }, "lineHeight": { "unit": "AUTO" }, "font": { "family": "Champions", "style": "Display" }
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 136, "height": 30, "relativeTransform": [[1, 0, 86.6055], [0, 1, 1.1757]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } }
                                                }
                                            ]
                                        },
                                        {
                                            "type": "FRAME",
                                            "name": "divider-ball-1-desktop",
                                            "props": {
                                                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                                                "isMask": false, "maskType": "ALPHA", "clipsContent": true,
                                                "strokeWeight": 0.19840888679027557, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                "strokeTopWeight": 0.19840888679027557, "strokeRightWeight": 0.19840888679027557, "strokeBottomWeight": 0.19840888679027557, "strokeLeftWeight": 0.19840888679027557,
                                                "layoutAlign": "INHERIT", "layoutGrow": 0,
                                                "layoutMode": "NONE", "fills": [], "strokes": [], "effects": [], "cornerRadius": 0, "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
                                            },
                                            "layoutProps": { "parentIsAutoLayout": true, "layoutPositioning": "AUTO", "width": 164.599, "height": 1.1757, "relativeTransform": [[1, 0, 72.306], [0, 1, 34.7028]], "constraints": { "horizontal": "MIN", "vertical": "MIN" } },
                                            "children": [
                                                {
                                                    "type": "RECTANGLE",
                                                    "name": "Rectangle",
                                                    "props": {
                                                        "visible": true, "opacity": 1, "locked": true, "blendMode": "PASS_THROUGH",
                                                        "isMask": false, "maskType": "ALPHA",
                                                        "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                                                        "strokeTopWeight": 0, "strokeRightWeight": 0, "strokeBottomWeight": 0, "strokeLeftWeight": 0,
                                                        "x": 1.0134838819503784, "y": 0.4571532607078552,
                                                        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "GRADIENT_LINEAR", "gradientStops": [{ "color": { "r": 0.7568, "g": 0.7607, "b": 0.8352, "a": 0 }, "position": 0 }, { "color": { "r": 0.6588, "g": 0.1215, "b": 0.8470, "a": 1 }, "position": 0.1381 }, { "color": { "r": 1, "g": 0.8235, "b": 0, "a": 1 }, "position": 0.3229 }, { "color": { "r": 0.8274, "g": 0.4666, "b": 0.4352, "a": 1 }, "position": 0.5317 }, { "color": { "r": 0.6980, "g": 0.1921, "b": 0.7686, "a": 1 }, "position": 0.7031 }, { "color": { "r": 0.3372, "g": 0.0745, "b": 0.9921, "a": 1 }, "position": 0.8570 }, { "color": { "r": 0.7568, "g": 0.7607, "b": 0.8352, "a": 0 }, "position": 1 }], "gradientTransform": [[0.999988, 0.000011, 0], [-0.000011, 0.000011, 0.5]] }],
                                                        "strokes": [], "effects": [], "cornerRadius": 0
                                                    },
                                                    "layoutProps": { "parentIsAutoLayout": false, "layoutPositioning": "AUTO", "width": 147.6342, "height": 0.1337, "relativeTransform": [[1, 0, 1.0135], [0, 1, 0.4572]], "constraints": { "horizontal": "SCALE", "vertical": "SCALE" } }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        ,
                        {
                            "type": "FRAME",
                            "name": "Juventus",
                            "props": { "visible": true, "layoutMode": "NONE", "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED" },
                            "layoutProps": { "width": 64, "height": 64, "relativeTransform": [[1, 0, 372.8293], [0, 1, 1.5]] },
                            "children": [
                                {
                                    "type": "RECTANGLE",
                                    "name": "Crest",
                                    "props": {
                                        "visible": true, "fills": [{ "type": "IMAGE", "scaleMode": "FILL", "originalImageHash": "74d8939a352cb19b5453c79b2d0716f0ed5edbe2", "assetRef": IMG_UCL_Newsletter_Header_Stats_img_5_png }]
                                    },
                                    "layoutProps": { "width": 64, "height": 64 }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "FRAME",
                    "name": "Rows Container",
                    "props": {
                        "visible": true, "layoutMode": "VERTICAL", "itemSpacing": 2, "clipsContent": false,
                        "paddingTop": 8, "layoutSizingHorizontal": "HUG", "layoutSizingVertical": "HUG"
                    },
                    "layoutProps": { "width": 436.8293, "height": 270.0879, "relativeTransform": [[1, 0, 24], [0, 1, 103.2215]] },
                    "children": [
                        ...statsData.map(data => ({
                            "type": "COMPONENT",
                            "name": `Row: ${data.label}`,
                            "component": StatRow,
                            "props": data
                        } as unknown as NodeDefinition))
                    ]
                }
            ]
        };

        return this.renderDefinition(structure);
    }
}

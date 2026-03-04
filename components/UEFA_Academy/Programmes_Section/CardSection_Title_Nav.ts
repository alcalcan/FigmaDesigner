import * as BaseModule from "../../BaseComponent";

// SVG Assets
import SVG_Arrow_Left from "./assets/Programmes_Section_assets_icon_Vector_761_157703_svg_orig.svg";
import SVG_Arrow_Right from "./assets/Programmes_Section_assets_icon_Vector_761_157808_svg_orig.svg";

export interface CardSectionTitleNavProps extends BaseModule.ComponentProps {
    title: string;
    count: number;
}

export class CardSection_Title_Nav extends BaseModule.BaseComponent {
    async create(props: BaseModule.ComponentProps): Promise<SceneNode> {
        const p = props as CardSectionTitleNavProps;
        const structure: BaseModule.NodeDefinition = {
            type: "FRAME",
            name: "CardSection_Title_Nav",
            props: {
                visible: true,
                opacity: 1,
                locked: false,
                blendMode: "PASS_THROUGH",
                isMask: false,
                maskType: "ALPHA",
                clipsContent: false,
                layoutMode: "HORIZONTAL",
                itemSpacing: 24,
                itemReverseZIndex: true,
                strokesIncludedInLayout: false,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                primaryAxisSizingMode: "FIXED",
                counterAxisSizingMode: "AUTO",
                primaryAxisAlignItems: "MIN",
                counterAxisAlignItems: "CENTER",
                fills: [],
                layoutSizingHorizontal: "FILL",
                layoutSizingVertical: "HUG",
            },
            layoutProps: { parentIsAutoLayout: true },
            children: [
                {
                    type: "FRAME",
                    name: "Heading 3:margin",
                    props: {
                        layoutMode: "VERTICAL",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "AUTO",
                        fills: [],
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG",
                    },
                    children: [
                        {
                            type: "TEXT",
                            name: `Heading 3 → ${p.title} (${p.count})`,
                            props: {
                                characters: `${p.title} (${p.count})`,
                                fontSize: 23,
                                textCase: "TITLE",
                                font: { family: "Roboto", style: "Medium" },
                                fills: [
                                    {
                                        type: "SOLID",
                                        color: { r: 0, g: 0.702, b: 0.69 },
                                    },
                                ],
                                layoutSizingHorizontal: "HUG",
                                layoutSizingVertical: "HUG",
                                lineHeight: { unit: "PIXELS", value: 24 },
                            },
                        },
                    ],
                },
                {
                    type: "FRAME",
                    name: "Cards Section Divider Container",
                    props: {
                        layoutMode: "VERTICAL",
                        layoutAlign: "STRETCH",
                        layoutGrow: 1,
                        fills: [],
                        layoutSizingHorizontal: "FILL",
                        layoutSizingVertical: "HUG",
                        primaryAxisAlignItems: "CENTER",
                        counterAxisAlignItems: "MIN",
                    },
                    layoutProps: {
                        layoutSizingHorizontal: "FILL",
                        layoutSizingVertical: "HUG",
                        width: 1
                    },
                    children: [
                        {
                            type: "RECTANGLE",
                            name: "Cards Section Horizontal Divider",
                            props: {
                                fills: [
                                    {
                                        type: "SOLID",
                                        color: { r: 0.9, g: 0.9, b: 0.9 },
                                    },
                                ],
                                layoutAlign: "STRETCH",
                                layoutGrow: 1,
                                layoutSizingHorizontal: "FILL",
                                layoutSizingVertical: "FIXED",
                            },
                            layoutProps: { width: 1, height: 1, layoutSizingHorizontal: "FILL" },
                        },
                    ],
                },
                // Navigation Arrows
                {
                    type: "FRAME",
                    name: "Navigation",
                    props: {
                        layoutMode: "HORIZONTAL",
                        itemSpacing: 16,
                        fills: [],
                        layoutSizingHorizontal: "HUG",
                        layoutSizingVertical: "HUG",
                        primaryAxisSizingMode: "AUTO",
                        counterAxisSizingMode: "AUTO",
                    },
                    children: [
                        {
                            type: "FRAME",
                            name: "Left Arrow Container",
                            props: {
                                layoutMode: "HORIZONTAL",
                                primaryAxisAlignItems: "CENTER",
                                counterAxisAlignItems: "CENTER",
                                fills: [],
                            },
                            layoutProps: { width: 32, height: 19 },
                            children: [
                                {
                                    type: "VECTOR",
                                    name: "Arrow Left",
                                    svgContent: SVG_Arrow_Left,
                                    props: {
                                        fills: [{ type: "SOLID", color: { r: 0.196, g: 0.255, b: 0.537 } }],
                                    },
                                    layoutProps: { width: 31.03, height: 18 },
                                },
                            ],
                        },
                        {
                            type: "FRAME",
                            name: "Right Arrow Container",
                            props: {
                                layoutMode: "HORIZONTAL",
                                primaryAxisAlignItems: "CENTER",
                                counterAxisAlignItems: "CENTER",
                                fills: [],
                            },
                            layoutProps: { width: 32, height: 19 },
                            children: [
                                {
                                    type: "VECTOR",
                                    name: "Arrow Right",
                                    svgContent: SVG_Arrow_Right,
                                    props: {
                                        fills: [{ type: "SOLID", color: { r: 0.196, g: 0.255, b: 0.537 } }],
                                    },
                                    layoutProps: { width: 31.03, height: 18 },
                                },
                            ],
                        },
                    ],
                },
            ],
        };

        return this.renderDefinition(structure);
    }
}

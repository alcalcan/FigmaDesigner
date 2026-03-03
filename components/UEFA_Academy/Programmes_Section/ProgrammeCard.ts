import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export interface ProgrammeCardProps extends ComponentProps {
    image: string;
    title: string;
    category: string;
    deadline?: string;
    deliveryTypes: string[];
    skills: string[];
    hours: string;
}

export class ProgrammeCard extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const p = props as ProgrammeCardProps;
        const structure: NodeDefinition = {
            type: "FRAME",
            name: `Programme Card: ${p.title}`,
            props: {
                visible: true,
                opacity: 1,
                locked: false,
                blendMode: "PASS_THROUGH",
                isMask: false,
                maskType: "ALPHA",
                clipsContent: false,
                layoutMode: "VERTICAL",
                itemSpacing: 16,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 2,
                paddingLeft: 0,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "FIXED",
                primaryAxisAlignItems: "MIN",
                counterAxisAlignItems: "MIN",
                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                layoutSizingHorizontal: "FILL",
                layoutSizingVertical: "HUG",
            },
            layoutProps: { width: 396 },
            children: [
                // Image Container
                {
                    type: "FRAME",
                    name: "Image Area",
                    props: {
                        clipsContent: true,
                        layoutAlign: "STRETCH",
                        layoutMode: "NONE",
                        fills: [],
                        layoutSizingVertical: "FIXED",
                        layoutSizingHorizontal: "FILL",
                    },
                    layoutProps: { height: 221.75 },
                    children: [
                        {
                            type: "FRAME",
                            name: p.title,
                            props: {
                                fills: [
                                    {
                                        type: "IMAGE",
                                        scaleMode: "CROP",
                                        assetRef: p.image,
                                    },
                                ],
                                layoutSizingHorizontal: "FIXED",
                                layoutSizingVertical: "FIXED",
                            },
                            layoutProps: { width: 396, height: 222.55 },
                        },
                        // Hover Overlay (Hidden by default as per reference)
                        {
                            type: "FRAME",
                            name: "Hover Overlay",
                            props: {
                                visible: false,
                                opacity: 0,
                                layoutMode: "VERTICAL",
                                itemSpacing: 12.6,
                                paddingTop: 17,
                                paddingRight: 40,
                                paddingBottom: 17,
                                paddingLeft: 40,
                                primaryAxisAlignItems: "CENTER",
                                counterAxisAlignItems: "CENTER",
                                fills: [
                                    {
                                        type: "SOLID",
                                        color: { r: 0.0078, g: 0.6235, b: 0.8863 },
                                        opacity: 0.9,
                                    },
                                ],
                                layoutSizingHorizontal: "FIXED",
                                layoutSizingVertical: "FIXED",
                            },
                            layoutProps: { width: 396, height: 221.75, x: 0, y: 0 },
                            children: [
                                {
                                    type: "FRAME",
                                    name: "Details Container",
                                    props: {
                                        layoutMode: "VERTICAL",
                                        itemSpacing: 4,
                                        layoutAlign: "STRETCH",
                                        layoutSizingVertical: "HUG",
                                        layoutSizingHorizontal: "FILL",
                                        fills: [],
                                    },
                                    children: [
                                        // Type of learning
                                        {
                                            type: "TEXT",
                                            name: "Type of learning label",
                                            props: {
                                                characters: "Type of learning",
                                                fontSize: 16,
                                                font: { family: "Roboto", style: "Medium" },
                                                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                                layoutSizingHorizontal: "FILL",
                                            },
                                        },
                                        // Divider (White mini line)
                                        {
                                            type: "FRAME",
                                            name: "Divider",
                                            props: {
                                                layoutSizingVertical: "FIXED",
                                                layoutSizingHorizontal: "FILL",
                                                fills: [{ type: "SOLID", color: { r: 0, g: 0.48, b: 0.69 } }],
                                            },
                                            layoutProps: { height: 5 },
                                            children: [
                                                {
                                                    type: "RECTANGLE",
                                                    props: {
                                                        fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                                        layoutSizingHorizontal: "FIXED",
                                                        layoutSizingVertical: "FIXED",
                                                    },
                                                    layoutProps: { width: 66, height: 5, x: 219.8 },
                                                },
                                            ],
                                        },
                                        // Delivery Types list (from props)
                                        {
                                            type: "FRAME",
                                            props: {
                                                layoutMode: "HORIZONTAL",
                                                primaryAxisAlignItems: "SPACE_BETWEEN",
                                                layoutSizingHorizontal: "FILL",
                                                layoutSizingVertical: "HUG",
                                                fills: [],
                                            },
                                            children: p.deliveryTypes.map(type => ({
                                                type: "TEXT",
                                                props: {
                                                    characters: type,
                                                    fontSize: 14,
                                                    font: { family: "Roboto", style: "Regular" },
                                                    fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                                },
                                            }) as NodeDefinition),
                                        },
                                        // Skills Trained
                                        {
                                            type: "TEXT",
                                            props: {
                                                characters: "Skills Trained",
                                                fontSize: 16,
                                                font: { family: "Roboto", style: "Medium" },
                                                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                                layoutSizingHorizontal: "FILL",
                                                paddingTop: 12,
                                            },
                                        },
                                        {
                                            type: "FRAME",
                                            props: {
                                                layoutMode: "HORIZONTAL",
                                                primaryAxisAlignItems: "SPACE_BETWEEN",
                                                layoutSizingHorizontal: "FILL",
                                                layoutSizingVertical: "HUG",
                                                fills: [],
                                            },
                                            children: p.skills.map(skill => ({
                                                type: "TEXT",
                                                props: {
                                                    characters: skill,
                                                    fontSize: 14,
                                                    font: { family: "Roboto", style: "Regular" },
                                                    fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                                },
                                            }) as NodeDefinition),
                                        },
                                        // Hours
                                        {
                                            type: "TEXT",
                                            props: {
                                                characters: "Estimated hours",
                                                fontSize: 16,
                                                font: { family: "Roboto", style: "Medium" },
                                                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                                layoutSizingHorizontal: "FILL",
                                                paddingTop: 12,
                                            },
                                        },
                                        {
                                            type: "TEXT",
                                            props: {
                                                characters: p.hours,
                                                fontSize: 14,
                                                font: { family: "Roboto", style: "Regular" },
                                                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                // Category & Deadline Area
                {
                    type: "FRAME",
                    name: "Meta Information",
                    props: {
                        layoutMode: "HORIZONTAL",
                        counterAxisAlignItems: "CENTER",
                        layoutAlign: "STRETCH",
                        layoutSizingVertical: "HUG",
                        layoutSizingHorizontal: "FILL",
                        fills: [],
                        itemSpacing: 8,
                    },
                    layoutProps: { layoutSizingVertical: "HUG" },
                    children: [
                        {
                            type: "TEXT",
                            props: {
                                characters: p.category,
                                fontSize: 14,
                                textCase: "UPPER",
                                font: { family: "Roboto", style: "Regular" },
                                fills: [{ type: "SOLID", color: { r: 0.2, g: 0.25, b: 0.54 } }],
                                layoutSizingHorizontal: "HUG",
                            },
                        } as NodeDefinition,
                        ...(p.deadline
                            ? [
                                {
                                    type: "RECTANGLE",
                                    props: {
                                        fills: [{ type: "SOLID", color: { r: 0.01, g: 0.62, b: 0.89 } }],
                                        cornerRadius: 2,
                                    },
                                    layoutProps: { width: 4, height: 4 },
                                } as NodeDefinition,
                                {
                                    type: "TEXT",
                                    props: {
                                        characters: `DEADLINE ${p.deadline}`,
                                        fontSize: 14,
                                        textCase: "UPPER",
                                        font: { family: "Roboto", style: "Regular" },
                                        fills: [{ type: "SOLID", color: { r: 0.01, g: 0.62, b: 0.89 } }],
                                    },
                                } as NodeDefinition,
                            ]
                            : []),
                    ],
                },
                // Title Area
                {
                    type: "TEXT",
                    name: "Title",
                    props: {
                        characters: p.title,
                        fontSize: 24,
                        font: { family: "Roboto", style: "Medium" },
                        fills: [{ type: "SOLID", color: { r: 0.015, g: 0.043, b: 0.106 } }],
                        layoutAlign: "STRETCH",
                        layoutSizingVertical: "HUG",
                        lineHeight: { unit: "PIXELS", value: 32 },
                    },
                    layoutProps: { layoutSizingVertical: "HUG" },
                },
            ],
        };

        return this.renderDefinition(structure);
    }
}

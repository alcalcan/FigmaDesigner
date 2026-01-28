import { NodeDefinition } from "./BaseComponent";

const DEFAULT_PROPS = {
    visible: true,
    opacity: 1,
    locked: false,
    blendMode: "PASS_THROUGH",
    isMask: false,
    maskType: "ALPHA",
    strokes: [],
    fills: [],
    effects: [],
    cornerRadius: 0
};

const DEFAULT_LAYOUT_PROPS = {
    width: 100,
    height: 100,
    itemSpacing: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    counterAxisSizingMode: "FIXED",
    primaryAxisSizingMode: "FIXED"
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFrame = (name: string, overrides: any = {}, children: (NodeDefinition | null | undefined)[] = []): NodeDefinition => {
    // Merge nested layoutProps if they exist in overrides
    const { layoutProps: ovrLayoutProps, ...restOverrides } = overrides;

    return {
        type: "FRAME",
        name,
        props: { ...DEFAULT_PROPS, ...restOverrides },
        children: children.filter((c): c is NodeDefinition => c !== null && c !== undefined),
        layoutProps: {
            parentIsAutoLayout: true,
            layoutPositioning: "AUTO",
            ...DEFAULT_LAYOUT_PROPS,
            ...ovrLayoutProps
        }
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createText = (name: string, text: string, fontSize: number, style: string, color: any, overrides: any = {}): NodeDefinition => {
    const { layoutProps: ovrLayoutProps, ...restOverrides } = overrides;

    return {
        type: "TEXT",
        name,
        props: {
            ...DEFAULT_PROPS,
            strokeAlign: "OUTSIDE",
            characters: text,
            fontSize,
            font: { family: "Inter", style },
            fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color }],
            textAlignHorizontal: "LEFT",
            textAlignVertical: "TOP",
            textAutoResize: "WIDTH_AND_HEIGHT",
            ...restOverrides
        },
        layoutProps: {
            parentIsAutoLayout: true,
            layoutPositioning: "AUTO",
            ...DEFAULT_LAYOUT_PROPS,
            ...ovrLayoutProps
        }
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createVector = (name: string, svgContent: string | undefined, overrides: any = {}): NodeDefinition | null => {
    if (!svgContent) return null;
    const { layoutProps: ovrLayoutProps, ...restOverrides } = overrides;

    return {
        type: "VECTOR",
        shouldFlatten: true,
        name,
        props: { ...DEFAULT_PROPS, ...restOverrides },
        layoutProps: {
            parentIsAutoLayout: true,
            layoutPositioning: "AUTO",
            ...DEFAULT_LAYOUT_PROPS,
            ...ovrLayoutProps
        },
        svgContent
    };
};

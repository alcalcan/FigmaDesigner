import { BaseComponent, ComponentProps } from "../../BaseComponent";


// SVG Assets



type T2x3 = [[number, number, number], [number, number, number]];
function applySizeAndTransform(
    node: SceneNode & LayoutMixin & GeometryMixin,
    opts: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        parentIsAutoLayout: boolean;
        layoutPositioning?: "AUTO" | "ABSOLUTE";
    }
) {
    const { width, height, relativeTransform, parentIsAutoLayout } = opts;
    const positioning = opts.layoutPositioning ?? "AUTO";

    if (typeof width === "number" && typeof height === "number") {
        node.resize(width, height);
    }

    if (relativeTransform) {
        const t = relativeTransform;
        const inFlow = parentIsAutoLayout && positioning !== "ABSOLUTE";

        // Strip translation in auto-layout flow; keep axis vectors
        const tx = inFlow ? 0 : t[0][2];
        const ty = inFlow ? 0 : t[1][2];

        try {
            node.relativeTransform = [
                [t[0][0], t[0][1], tx],
                [t[1][0], t[1][1], ty],
            ];
        } catch (e) {
            console.warn("Failed to set relativeTransform", e);
        }
    }
}


export class Page_title extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });

        const root = figma.createFrame();
        root.name = "Page title";
        root.layoutMode = "VERTICAL";
        root.counterAxisSizingMode = "AUTO"; // Width depends on content (or FIXED if needed)
        root.primaryAxisSizingMode = "AUTO"; // Height depends on content
        root.itemSpacing = 8; // Gap between title and subtitle
        root.fills = []; // Transparent background

        // Title
        const titleNode = figma.createText();
        titleNode.name = "Title";
        titleNode.characters = props.title || "Page Title";
        titleNode.fontSize = 32;
        titleNode.fontName = { family: "Inter", style: "Bold" };
        titleNode.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.19, b: 0.24 } }]; // Using previous dark blue-ish color
        root.appendChild(titleNode);

        // Subtitle
        if (props.subtitle) {
            const subtitleNode = figma.createText();
            subtitleNode.name = "Subtitle";
            subtitleNode.characters = props.subtitle;
            subtitleNode.fontSize = 16;
            subtitleNode.fontName = { family: "Inter", style: "Regular" };
            subtitleNode.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }]; // Grey color for subtitle
            root.appendChild(subtitleNode);
        }

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

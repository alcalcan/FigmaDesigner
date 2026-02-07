
export interface PPTElement {
    type: 'text' | 'image' | 'shape';
    x: number;
    y: number;
    w: number;
    h: number;
    text?: string;
    fontSize?: number;
    fontFace?: string;
    color?: string;
    align?: 'left' | 'center' | 'right' | 'justify';
    fill?: string; // hex for shape, base64 for image
    opacity?: number;
}

export interface PPTSlide {
    name: string;
    elements: PPTElement[];
    background?: string; // hex or base64
}

export class PPTExtractor {

    static async extract(slideNode: FrameNode): Promise<PPTSlide> {
        const slideData: PPTSlide = {
            name: slideNode.name,
            elements: []
        };

        // Extract background if possible (simple solid color)
        if (Array.isArray(slideNode.fills) && slideNode.fills.length > 0) {
            const fill = slideNode.fills[0];
            if (fill.type === 'SOLID') {
                slideData.background = this.rgbToHex(fill.color);
            }
        }

        await this.traverse(slideNode, slideData.elements, slideNode.x, slideNode.y);

        return slideData;
    }

    private static async traverse(node: SceneNode, elements: PPTElement[], rootX: number, rootY: number) {
        if (!node.visible) return;

        // Calculate relative position to the slide info
        // node.x/y are relative to parent. We need absolute-ish position relative to Slide Root.
        // Actually, for a simple traverse, we can rely on absoluteTransform? 
        // Or simpler: just recursively add x/y. 
        // BUT: node.absoluteTransform is the most reliable way to get page coordinates.
        // Then we subtract the Slide's page coordinates.

        // Let's use absoluteTransform if available, or just simple relative math if not.
        // Plugin API: node.absoluteTransform is [ [a, b, tx], [c, d, ty] ]

        // Helper to get bounding box relative to Slide Root
        // We can't easily get "absolute" coordinates of the Slide Root efficiently without potentially expensive calls?
        // Actually, we can just pass down the cumulative X/Y offset.

        // HOWEVER: Rotation is tricky. We will ignore rotation for v1.

        const x = node.absoluteTransform[0][2] - rootX;
        const y = node.absoluteTransform[1][2] - rootY;
        const w = node.width;
        const h = node.height;

        if (node.type === 'TEXT') {
            await figma.loadFontAsync(node.fontName as FontName); // Ensure font is loaded to read details if needed? 
            // Actually reading props doesn't always need load, but safer.
            // But we might not need to load if just reading.

            const fill = (Array.isArray(node.fills) && node.fills.length > 0 && node.fills[0].type === 'SOLID') ? node.fills[0] : null;
            const color = fill ? this.rgbToHex(fill.color) : "000000";

            elements.push({
                type: 'text',
                x, y, w, h,
                text: node.characters,
                fontSize: typeof node.fontSize === 'number' ? node.fontSize : 12,
                fontFace: (node.fontName as FontName).family,
                color: color,
                align: node.textAlignHorizontal.toLowerCase() as any,
                opacity: node.opacity
            });
        }

        else if (node.type === 'RECTANGLE' || node.type === 'ELLIPSE') {
            // Treat as shape or image depending on fill
            const fills = node.fills;
            if (fills !== figma.mixed && Array.isArray(fills) && fills.length > 0) {
                const fill = fills[0];
                if (fill.type === 'IMAGE') {
                    // Export as image
                    try {
                        const bytes = await node.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 2 } });
                        const base64 = figma.base64Encode(bytes);
                        elements.push({
                            type: 'image',
                            x, y, w, h,
                            fill: base64, // simplified field reuse
                            opacity: node.opacity
                        });
                    } catch (e) { console.warn("Failed to export image node", e) }
                } else if (fill.type === 'SOLID') {
                    elements.push({
                        type: 'shape',
                        x, y, w, h,
                        fill: this.rgbToHex(fill.color),
                        opacity: node.opacity
                    });
                }
            }
        }

        else if (node.type === 'VECTOR' || node.type === 'STAR' || node.type === 'POLYGON' || node.type === 'BOOLEAN_OPERATION' || node.type === 'LINE') {
            // Export as image to preserve visual fidelity
            try {
                const bytes = await node.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 2 } });
                const base64 = figma.base64Encode(bytes);
                elements.push({
                    type: 'image',
                    x, y, w, h,
                    fill: base64,
                    opacity: node.opacity
                });
            } catch (e) { console.warn("Failed to export vector node", e) }
        }

        // Recursion
        if ("children" in node) {
            for (const child of (node as ChildrenMixin).children) {
                // If it's a Component or Instance, we still verify visibility, which is done at start of traverse
                await this.traverse(child, elements, rootX, rootY);
            }
        }
    }

    private static rgbToHex(rgb: RGB): string {
        const toHex = (n: number) => {
            const hex = Math.round(n * 255).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }
        return `${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
    }
}

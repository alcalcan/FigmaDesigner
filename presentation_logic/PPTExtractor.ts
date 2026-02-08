
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
    width: number;
    height: number;
}

export type PPTFidelity = 'editable' | 'balanced' | 'exact';
export type PPTCompositionFallback = 'none' | 'container';

export interface PPTExtractOptions {
    fidelity?: PPTFidelity;
    rasterScale?: number;
    compositionFallback?: PPTCompositionFallback;
}

interface ExtractContext {
    rootX: number;
    rootY: number;
    fidelity: PPTFidelity;
    rasterScale: number;
    compositionFallback: PPTCompositionFallback;
}

interface Bounds {
    x: number;
    y: number;
    w: number;
    h: number;
}

const VECTOR_TYPES = new Set<SceneNode['type']>([
    'VECTOR',
    'STAR',
    'POLYGON',
    'BOOLEAN_OPERATION',
    'LINE'
]);

const COMPOSITION_CONTAINER_TYPES = new Set<SceneNode['type']>([
    'FRAME',
    'GROUP',
    'INSTANCE',
    'COMPONENT'
]);

export class PPTExtractor {

    static async extract(slideNode: FrameNode, options: PPTExtractOptions = {}): Promise<PPTSlide> {
        const fidelity = options.fidelity ?? 'balanced';
        const rasterScale = typeof options.rasterScale === 'number' && options.rasterScale > 0
            ? options.rasterScale
            : 3;
        const compositionFallback: PPTCompositionFallback =
            options.compositionFallback === 'none'
                ? 'none'
                : (fidelity === 'balanced' ? 'container' : 'none');

        console.log(`[PPTExtractor] Extracting slide: ${slideNode.name} (Type: ${slideNode.type}, Visible: ${slideNode.visible})`);
        const slideData: PPTSlide = {
            name: slideNode.name,
            elements: [],
            width: slideNode.width,
            height: slideNode.height
        };

        // Extract background if possible (simple solid color)
        if (Array.isArray(slideNode.fills) && slideNode.fills.length > 0) {
            const fill = slideNode.fills[0];
            if (fill.type === 'SOLID') {
                slideData.background = this.rgbToHex(fill.color);
            }
        }

        // Use absolute coordinates for the root reference
        const rootX = slideNode.absoluteTransform[0][2];
        const rootY = slideNode.absoluteTransform[1][2];

        console.log(`[PPTExtractor] Slide Absolute Root: (${rootX}, ${rootY})`);

        const context: ExtractContext = {
            rootX,
            rootY,
            fidelity,
            rasterScale,
            compositionFallback
        };

        // Exact mode intentionally flattens the entire slide for max visual fidelity.
        if (fidelity === 'exact') {
            const flattened = await this.tryAddRasterizedNode(slideNode, slideData.elements, context, true);
            if (flattened) {
                console.log(`[PPTExtractor] Exact mode: slide flattened to one image.`);
                return slideData;
            }
        }

        await this.traverse(slideNode, slideData.elements, context, true);

        console.log(`[PPTExtractor] Extracted ${slideData.elements.length} elements from ${slideNode.name}`);

        return slideData;
    }

    private static async traverse(
        node: SceneNode,
        elements: PPTElement[],
        context: ExtractContext,
        isSlideRoot: boolean = false
    ) {
        if (!node.visible) {
            return;
        }

        // Hard clipping safety: always flatten clipped containers in balanced mode.
        if (
            !isSlideRoot &&
            context.fidelity === 'balanced' &&
            this.isContainerWithClipping(node)
        ) {
            const reasons = ['clips-content-with-children'];
            const flattened = await this.tryAddRasterizedNode(node, elements, context, true);
            if (flattened) {
                console.log(
                    `[PPTExtractor] Flattened clipped container id=${node.id} name="${node.name}" reasons=${reasons.join(',')}`
                );
                return;
            }
        }

        // Composition-level flattening for complex inserted content.
        if (
            !isSlideRoot &&
            context.fidelity === 'balanced' &&
            context.compositionFallback === 'container'
        ) {
            const compositionAnalysis = this.isComplexCompositionRoot(node);
            if (compositionAnalysis.shouldFlatten) {
                const flattened = await this.tryAddRasterizedNode(node, elements, context, true);
                if (flattened) {
                    console.log(
                        `[PPTExtractor] Flattened complex composition id=${node.id} name="${node.name}" reasons=${compositionAnalysis.reasons.join(',')}`
                    );
                    return;
                }
            }
        }

        const nodeRasterDecision = this.shouldRasterizeNode(node);
        if (!isSlideRoot && context.fidelity !== 'editable' && nodeRasterDecision.shouldRasterize) {
            const flattened = await this.tryAddRasterizedNode(node, elements, context, true);
            if (flattened) {
                if (COMPOSITION_CONTAINER_TYPES.has(node.type)) {
                    console.log(
                        `[PPTExtractor] Flattened node id=${node.id} name="${node.name}" reasons=${nodeRasterDecision.reasons.join(',')}`
                    );
                }
                return;
            }
        }

        const bounds = this.getRelativeBounds(node, context.rootX, context.rootY, false);
        if (!bounds) {
            return;
        }

        const { x, y, w, h } = bounds;

        // Helper to check for visible fills
        const hasVisibleFills = (node: GeometryMixin) => {
            if (node.fills === figma.mixed) return true;
            return Array.isArray(node.fills) && node.fills.length > 0 && node.fills.some(f => f.visible !== false);
        };

        // --- HANDLERS ---

        if (node.type === 'TEXT') {
            const fill = this.firstVisiblePaint(node.fills);
            const color = fill && fill.type === 'SOLID' ? this.rgbToHex(fill.color) : "000000";

            const textElement: PPTElement = {
                type: 'text',
                x, y, w, h,
                text: node.characters,
                fontSize: typeof node.fontSize === 'number' ? node.fontSize : 12,
                color: color,
                align: this.toPptAlign(node.textAlignHorizontal),
                opacity: node.opacity
            };

            if (node.fontName !== figma.mixed) {
                textElement.fontFace = node.fontName.family;
            }

            elements.push(textElement);
            console.log(`[PPTExtractor] Added Text: "${node.characters}" at (${x},${y})`);
        }

        else if (node.type === 'RECTANGLE' || node.type === 'ELLIPSE' || node.type === 'FRAME' || node.type === 'INSTANCE' || node.type === 'COMPONENT') {
            // Check if this node has fills to render (backgrounds)
            if (hasVisibleFills(node as GeometryMixin)) {
                // If it's a Frame/Instance/Component, we treat it as a shape for its background
                // but we MUST continue to traverse its children later.

                const fills = (node as GeometryMixin).fills;
                if (fills !== figma.mixed && Array.isArray(fills) && fills.length > 0) {
                    // Find the first visible fill
                    const fill = this.firstVisiblePaint(fills);

                    if (fill) {
                        if (fill.type === 'IMAGE') {
                            // If this is a container (e.g. frame with image fill and children),
                            // rasterize once and skip children to avoid duplicate exports.
                            const flattened = await this.tryAddRasterizedNode(node, elements, context, true);
                            if (flattened) {
                                console.log(`[PPTExtractor] Added flattened IMAGE node: ${node.name}`);
                                return;
                            }
                        } else if (fill.type === 'SOLID') {
                            elements.push({
                                type: 'shape',
                                x, y, w, h,
                                fill: this.rgbToHex(fill.color),
                                opacity: node.opacity
                            });
                            console.log(`[PPTExtractor] Added Shape (from ${node.type}): ${node.name}`);
                        }
                    }
                }
            }
        }

        else if (VECTOR_TYPES.has(node.type)) {
            // Export vector-like nodes as raster in PPT payload for consistent rendering.
            const flattened = await this.tryAddRasterizedNode(node, elements, context, true);
            if (flattened) {
                console.log(`[PPTExtractor] Added Vector raster: ${node.name}`);
            }
        }

        // Recursion for Containers
        if ("children" in node) {
            // For Groups, Frames, Instances, Components, etc.
            for (const child of (node as ChildrenMixin).children) {
                // If it's a Component or Instance, we still verify visibility, which is done at start of traverse
                await this.traverse(child, elements, context, false);
            }
        }
    }

    private static shouldRasterizeNode(node: SceneNode): { shouldRasterize: boolean; reasons: string[] } {
        const reasons: string[] = [];

        // Preserve editability while rasterizing unsupported primitive cases.
        if (node.type === 'ELLIPSE') reasons.push('ellipse-unsupported-shape');
        if (VECTOR_TYPES.has(node.type)) reasons.push('vector-type');
        if (this.hasNonZeroRotation(node)) reasons.push('rotation');
        if (this.hasVisibleEffects(node)) reasons.push('effects');
        if (this.hasNonDefaultBlend(node)) reasons.push('blend-mode');
        if (this.isMaskNode(node)) reasons.push('mask');

        if ("strokes" in node && this.hasVisibleStrokes(node.strokes)) {
            reasons.push('visible-strokes');
        }

        if ("fills" in node && this.hasUnsupportedFills(node.fills)) {
            reasons.push('unsupported-fills');
        }

        if (node.type === 'TEXT') {
            if (node.fontName === figma.mixed || node.fontSize === figma.mixed) reasons.push('mixed-font');
            if (node.fills === figma.mixed) reasons.push('mixed-text-fills');
            const textFill = this.firstVisiblePaint(node.fills);
            if (textFill && textFill.type !== 'SOLID') reasons.push('non-solid-text-fill');
        }

        return {
            shouldRasterize: reasons.length > 0,
            reasons
        };
    }

    private static hasVisibleEffects(node: SceneNode): boolean {
        if (!("effects" in node) || !Array.isArray(node.effects)) return false;
        return node.effects.some(effect => effect.visible !== false);
    }

    private static hasNonDefaultBlend(node: SceneNode): boolean {
        if (!("blendMode" in node)) return false;
        return node.blendMode !== 'NORMAL' && node.blendMode !== 'PASS_THROUGH';
    }

    private static hasNonZeroRotation(node: SceneNode): boolean {
        if (!("rotation" in node)) return false;
        return Math.abs(node.rotation) > 0.01;
    }

    private static isMaskNode(node: SceneNode): boolean {
        return "isMask" in node && node.isMask === true;
    }

    private static hasVisibleStrokes(strokes: ReadonlyArray<Paint> | PluginAPI['mixed']): boolean {
        if (strokes === figma.mixed) return true;
        if (!Array.isArray(strokes) || strokes.length === 0) return false;
        return strokes.some(stroke => stroke.visible !== false && (stroke.opacity ?? 1) > 0);
    }

    private static hasUnsupportedFills(fills: ReadonlyArray<Paint> | PluginAPI['mixed']): boolean {
        if (fills === figma.mixed) return true;
        if (!Array.isArray(fills) || fills.length === 0) return false;

        const visible = fills.filter(fill => fill.visible !== false);
        if (visible.length === 0) return false;

        // Multiple visible fills are hard to represent in current PPT shape model.
        if (visible.length > 1) return true;

        const primary = visible[0];
        if (primary.type === 'SOLID' || primary.type === 'IMAGE') {
            return (primary.opacity ?? 1) < 1;
        }

        // Gradients and other fills should be rasterized.
        return true;
    }

    private static isCompositionContainerNode(node: SceneNode): node is SceneNode & ChildrenMixin {
        return COMPOSITION_CONTAINER_TYPES.has(node.type) && "children" in node;
    }

    private static isContainerWithClipping(node: SceneNode): boolean {
        if (!this.isCompositionContainerNode(node)) return false;
        return "clipsContent" in node && node.clipsContent === true && node.children.length > 0;
    }

    private static hasNegativeAutoLayoutSpacing(node: SceneNode): boolean {
        if (!("layoutMode" in node) || node.layoutMode === 'NONE') {
            return false;
        }

        if (typeof node.itemSpacing === 'number' && node.itemSpacing < 0) {
            return true;
        }

        if ("counterAxisSpacing" in node) {
            const spacing = (node as { counterAxisSpacing?: number }).counterAxisSpacing;
            if (typeof spacing === 'number' && spacing < 0) {
                return true;
            }
        }

        return false;
    }

    private static isComplexCompositionRoot(node: SceneNode): { shouldFlatten: boolean; reasons: string[] } {
        if (!this.isCompositionContainerNode(node)) {
            return { shouldFlatten: false, reasons: [] };
        }

        const reasons = new Set<string>();
        let descendantCount = 0;
        const stack: SceneNode[] = [node];

        while (stack.length > 0) {
            const current = stack.pop() as SceneNode;
            if (current !== node) {
                descendantCount += 1;
            }

            if (this.isContainerWithClipping(current)) {
                reasons.add('clips-content-with-children');
            }
            if (this.isMaskNode(current)) {
                reasons.add('mask');
            }
            if (this.hasVisibleEffects(current)) {
                reasons.add('effects');
            }
            if (this.hasNonDefaultBlend(current)) {
                reasons.add('blend-mode');
            }
            if (this.hasNonZeroRotation(current)) {
                reasons.add('rotation');
            }
            if (VECTOR_TYPES.has(current.type)) {
                reasons.add('vector-content');
            }
            if ("fills" in current && this.hasUnsupportedFills(current.fills)) {
                reasons.add('unsupported-fills');
            }
            if (this.hasNegativeAutoLayoutSpacing(current)) {
                reasons.add('negative-auto-layout-spacing');
            }

            if ("children" in current) {
                stack.push(...current.children);
            }
        }

        if (descendantCount >= 12) {
            reasons.add(`descendants>=12(${descendantCount})`);
        }

        return {
            shouldFlatten: reasons.size > 0,
            reasons: Array.from(reasons)
        };
    }

    private static getAbsoluteBounds(node: SceneNode, preferRenderBounds: boolean): Bounds | null {
        const renderBounds = node.absoluteRenderBounds;
        const boxBounds = node.absoluteBoundingBox;

        if (preferRenderBounds && renderBounds) {
            return {
                x: renderBounds.x,
                y: renderBounds.y,
                w: renderBounds.width,
                h: renderBounds.height
            };
        }

        if (boxBounds) {
            return {
                x: boxBounds.x,
                y: boxBounds.y,
                w: boxBounds.width,
                h: boxBounds.height
            };
        }

        if (renderBounds) {
            return {
                x: renderBounds.x,
                y: renderBounds.y,
                w: renderBounds.width,
                h: renderBounds.height
            };
        }

        return {
            x: node.absoluteTransform[0][2],
            y: node.absoluteTransform[1][2],
            w: node.width,
            h: node.height
        };
    }

    private static getRelativeBounds(
        node: SceneNode,
        rootX: number,
        rootY: number,
        preferRenderBounds: boolean
    ): Bounds | null {
        const abs = this.getAbsoluteBounds(node, preferRenderBounds);
        if (!abs) return null;

        return {
            x: abs.x - rootX,
            y: abs.y - rootY,
            w: abs.w,
            h: abs.h
        };
    }

    private static async tryAddRasterizedNode(
        node: SceneNode,
        elements: PPTElement[],
        context: ExtractContext,
        preferRenderBounds: boolean
    ): Promise<boolean> {
        const bounds = this.getRelativeBounds(node, context.rootX, context.rootY, preferRenderBounds);
        if (!bounds) return false;
        if (bounds.w <= 0.01 || bounds.h <= 0.01) return false;

        try {
            const bytes = await node.exportAsync({
                format: 'PNG',
                constraint: { type: 'SCALE', value: context.rasterScale }
            });
            const base64 = figma.base64Encode(bytes);
            elements.push({
                type: 'image',
                x: bounds.x,
                y: bounds.y,
                w: bounds.w,
                h: bounds.h,
                fill: base64,
                opacity: node.opacity
            });
            return true;
        } catch (e) {
            console.warn(`[PPTExtractor] Failed to rasterize node ${node.name}`, e);
            return false;
        }
    }

    private static firstVisiblePaint(
        fills: ReadonlyArray<Paint> | PluginAPI['mixed'] | undefined
    ): Paint | null {
        if (!fills || fills === figma.mixed || !Array.isArray(fills)) {
            return null;
        }
        return fills.find(fill => fill.visible !== false) ?? null;
    }

    private static toPptAlign(value: TextAlignHorizontal): 'left' | 'center' | 'right' | 'justify' {
        if (value === 'CENTER') return 'center';
        if (value === 'RIGHT') return 'right';
        if (value === 'JUSTIFIED') return 'justify';
        return 'left';
    }

    private static rgbToHex(rgb: RGB): string {
        const toHex = (n: number) => {
            const hex = Math.round(n * 255).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }
        return `${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
    }
}

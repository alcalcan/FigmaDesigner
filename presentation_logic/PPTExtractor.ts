
export interface PPTElement {
    type: 'text' | 'image' | 'shape';
    x: number;
    y: number;
    w: number;
    h: number;
    text?: string;
    fontSize?: number;
    fontFace?: string;
    bold?: boolean;
    italic?: boolean;
    color?: string;
    align?: 'left' | 'center' | 'right' | 'justify';
    valign?: 'top' | 'mid' | 'bot';
    fill?: string; // hex for shape, base64 for image
    opacity?: number;
    cornerRadius?: number;
    sourceNodeId?: string;
    sourceNodeName?: string;
    textBoxX?: number;
    textBoxY?: number;
    textBoxW?: number;
    textBoxH?: number;
    fontFamily?: string;
    fontStyle?: string;
    fontWeight?: number;
    letterSpacingPx?: number;
    lineHeightPx?: number;
    lineHeightPercent?: number;
    textAutoResize?: string;
    paragraphSpacing?: number;
    textExportMode?: 'editable' | 'raster';
    rasterReason?: string;
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
export type PPTTextFidelityMode = 'smart_hybrid' | 'always_editable' | 'always_raster';
export type PPTPlatformProfile = 'cross_platform' | 'mac_365' | 'win_365';

export interface PPTExtractOptions {
    fidelity?: PPTFidelity;
    rasterScale?: number;
    compositionFallback?: PPTCompositionFallback;
    textFidelityMode?: PPTTextFidelityMode;
    platformProfile?: PPTPlatformProfile;
}

interface ExtractContext {
    rootX: number;
    rootY: number;
    fidelity: PPTFidelity;
    rasterScale: number;
    compositionFallback: PPTCompositionFallback;
    textFidelityMode: PPTTextFidelityMode;
    platformProfile: PPTPlatformProfile;
    compositionAnalysisCache: WeakMap<SceneNode, CompositionAnalysis>;
}

interface Bounds {
    x: number;
    y: number;
    w: number;
    h: number;
}

interface CompositionAnalysis {
    shouldFlatten: boolean;
    ownReasons: string[];
    inheritedReasons: string[];
    hasComplexChild: boolean;
    descendantCount: number;
    activeClipOverflow: boolean;
}

const HARD_OWN_COMPOSITION_REASONS = new Set([
    'mask',
    'effects',
    'blend-mode',
    'rotation',
    'active-clip-overflow'
]);

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

const CROSS_PLATFORM_SAFE_FONTS = new Set([
    'arial',
    'calibri',
    'cambria',
    'candara',
    'consolas',
    'constantia',
    'corbel',
    'courier new',
    'georgia',
    'helvetica',
    'segoe ui',
    'tahoma',
    'times new roman',
    'trebuchet ms',
    'verdana'
]);

const MAC_365_SAFE_FONTS = new Set([
    ...CROSS_PLATFORM_SAFE_FONTS,
    'avenir',
    'avenir next',
    'menlo',
    'sf pro text'
]);

const WIN_365_SAFE_FONTS = new Set([
    ...CROSS_PLATFORM_SAFE_FONTS,
    'arial narrow',
    'bahnschrift'
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
        const textFidelityMode: PPTTextFidelityMode =
            options.textFidelityMode === 'always_editable' || options.textFidelityMode === 'always_raster'
                ? options.textFidelityMode
                : 'smart_hybrid';
        const platformProfile: PPTPlatformProfile =
            options.platformProfile === 'mac_365' || options.platformProfile === 'win_365'
                ? options.platformProfile
                : 'cross_platform';

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
            compositionFallback,
            textFidelityMode,
            platformProfile,
            compositionAnalysisCache: new WeakMap()
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

        // Hard clipping safety: flatten only when clipping is actively hiding overflow.
        if (
            !isSlideRoot &&
            context.fidelity === 'balanced' &&
            this.hasActiveClipOverflow(node)
        ) {
            const reasons = ['active-clip-overflow'];
            const flattened = await this.tryAddRasterizedNode(node, elements, context, true);
            if (flattened) {
                console.log(
                    `[PPTExtractor] Flattened clipped container id=${node.id} name="${node.name}" activeClipOverflow=true ownReasons=${reasons.join(',')} inheritedReasons=none childCount=${"children" in node ? node.children.length : 0}`
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
            const compositionAnalysis = this.analyzeComplexComposition(node, context);
            if (compositionAnalysis.shouldFlatten) {
                if (this.shouldDeferCompositionFlatten(node, compositionAnalysis, context)) {
                    console.log(
                        `[PPTExtractor] Deferred container flatten id=${node.id} name="${node.name}" ownReasons=${compositionAnalysis.ownReasons.join('|') || 'none'} inheritedReasons=${compositionAnalysis.inheritedReasons.join('|') || 'none'} activeClipOverflow=${compositionAnalysis.activeClipOverflow} childCount=${"children" in node ? node.children.length : 0} descendantCount=${compositionAnalysis.descendantCount}`
                    );
                } else {
                    const flattened = await this.tryAddRasterizedNode(node, elements, context, true);
                    if (flattened) {
                        const flattenReasons = [
                            ...compositionAnalysis.ownReasons,
                            ...compositionAnalysis.inheritedReasons
                        ];
                        console.log(
                            `[PPTExtractor] Flattened complex composition id=${node.id} name="${node.name}" ownReasons=${compositionAnalysis.ownReasons.join('|') || 'none'} inheritedReasons=${compositionAnalysis.inheritedReasons.join('|') || 'none'} activeClipOverflow=${compositionAnalysis.activeClipOverflow} childCount=${"children" in node ? node.children.length : 0} descendantCount=${compositionAnalysis.descendantCount} reasons=${flattenReasons.join(',') || 'none'}`
                        );
                        return;
                    }
                }
            }
        }

        const nodeRasterDecision = this.shouldRasterizeNode(node);
        const preserveEditableText =
            node.type === 'TEXT' && context.textFidelityMode === 'always_editable';
        if (!isSlideRoot && context.fidelity !== 'editable' && nodeRasterDecision.shouldRasterize && !preserveEditableText) {
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
            const textBounds = this.getTextFrameBounds(node, context.rootX, context.rootY) ?? bounds;
            const fontSize = typeof node.fontSize === 'number' ? node.fontSize : 12;
            const letterSpacingPx = this.getLetterSpacingPx(node.letterSpacing, fontSize);
            const lineHeight = this.getLineHeightMetrics(node.lineHeight, fontSize);
            const paragraphSpacing = typeof node.paragraphSpacing === 'number' ? node.paragraphSpacing : undefined;

            const textElement: PPTElement = {
                type: 'text',
                x: textBounds.x,
                y: textBounds.y,
                w: textBounds.w,
                h: textBounds.h,
                text: node.characters,
                textBoxX: textBounds.x,
                textBoxY: textBounds.y,
                textBoxW: textBounds.w,
                textBoxH: textBounds.h,
                sourceNodeId: node.id,
                sourceNodeName: node.name,
                fontSize: fontSize,
                color: color,
                align: this.toPptAlign(node.textAlignHorizontal),
                valign: this.toPptVAlign(node.textAlignVertical),
                opacity: node.opacity,
                textAutoResize: node.textAutoResize,
                textExportMode: 'editable'
            };

            if (node.fontName !== figma.mixed) {
                textElement.fontFace = node.fontName.family;
                textElement.fontFamily = node.fontName.family;
                textElement.fontStyle = node.fontName.style;
                const style = node.fontName.style.toLowerCase();
                const fontWeight = this.fontStyleToWeight(style);
                textElement.fontWeight = fontWeight;
                textElement.bold = fontWeight >= 600;
                textElement.italic = /(italic|oblique)/.test(style);
            }
            if (typeof letterSpacingPx === 'number') {
                textElement.letterSpacingPx = letterSpacingPx;
            }
            if (typeof lineHeight.px === 'number') {
                textElement.lineHeightPx = lineHeight.px;
            }
            if (typeof lineHeight.percent === 'number') {
                textElement.lineHeightPercent = lineHeight.percent;
            }
            if (typeof paragraphSpacing === 'number') {
                textElement.paragraphSpacing = paragraphSpacing;
            }

            const textRasterDecision = this.getTextRasterDecision(node, textElement, context);
            const shouldSmartHybridRaster =
                context.fidelity === 'balanced' &&
                context.textFidelityMode === 'smart_hybrid' &&
                textRasterDecision.shouldRasterize;
            const shouldAlwaysRaster = context.textFidelityMode === 'always_raster';
            const shouldRasterizeText = shouldAlwaysRaster || shouldSmartHybridRaster;

            if (shouldRasterizeText) {
                const reasons = shouldAlwaysRaster
                    ? ['mode-always-raster']
                    : textRasterDecision.reasons;
                const flattened = await this.tryAddRasterizedNode(node, elements, context, true, {
                    sourceNodeId: node.id,
                    sourceNodeName: node.name,
                    textExportMode: 'raster',
                    rasterReason: reasons.join(',')
                });
                if (flattened) {
                    console.log(`[PPTExtractor] Added rasterized text: "${node.name}" reasons=${reasons.join(',')}`);
                    return;
                }
            }

            elements.push(textElement);
            console.log(`[PPTExtractor] Added Text: "${node.characters}" at (${textBounds.x},${textBounds.y})`);
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
                            const shapeElement: PPTElement = {
                                type: 'shape',
                                x, y, w, h,
                                fill: this.rgbToHex(fill.color),
                                opacity: node.opacity
                            };

                            // Keep simple rounded rectangles editable. Fallback to raster only
                            // when corner geometry is asymmetric/smoothed and likely to mismatch.
                            if (node.type === 'RECTANGLE') {
                                const cornerInfo = this.getRectangleCornerInfo(node);
                                if (cornerInfo.shouldRasterize) {
                                    const flattened = await this.tryAddRasterizedNode(node, elements, context, true);
                                    if (flattened) {
                                        console.log(`[PPTExtractor] Added flattened rounded rectangle: ${node.name}`);
                                        return;
                                    }
                                } else if (typeof cornerInfo.cornerRadius === 'number' && cornerInfo.cornerRadius > 0) {
                                    shapeElement.cornerRadius = cornerInfo.cornerRadius;
                                }
                            }

                            elements.push(shapeElement);
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

    private static getTextRasterDecision(
        node: TextNode,
        textElement: PPTElement,
        context: ExtractContext
    ): { shouldRasterize: boolean; reasons: string[] } {
        const reasons: string[] = [];

        if (node.fontName === figma.mixed || node.fontSize === figma.mixed) {
            reasons.push('mixed-font');
        }
        if (node.fills === figma.mixed) {
            reasons.push('mixed-text-fills');
        }
        const textFill = this.firstVisiblePaint(node.fills);
        if (textFill && textFill.type !== 'SOLID') {
            reasons.push('non-solid-text-fill');
        }
        if (this.hasVisibleEffects(node)) {
            reasons.push('effects');
        }
        if (this.hasNonDefaultBlend(node)) {
            reasons.push('blend-mode');
        }
        if (this.hasNonZeroRotation(node)) {
            reasons.push('rotation');
        }
        if (node.textAutoResize === 'NONE' && node.textAlignVertical !== 'TOP') {
            reasons.push('fixed-height-non-top-valign');
        }
        if (typeof node.fontSize === 'number' && node.fontSize >= 96) {
            reasons.push('very-large-font-size');
        }
        if (typeof textElement.paragraphSpacing === 'number' && textElement.paragraphSpacing > 0) {
            reasons.push('paragraph-spacing');
        }

        const fontFamily = textElement.fontFamily ?? textElement.fontFace;
        if (this.hasFontRiskForProfile(fontFamily, context.platformProfile)) {
            reasons.push(`font-${context.platformProfile}-risk`);
        }

        return { shouldRasterize: reasons.length > 0, reasons };
    }

    private static hasFontRiskForProfile(fontFamily: string | undefined, profile: PPTPlatformProfile): boolean {
        if (!fontFamily || fontFamily.trim().length === 0) {
            return false;
        }

        const normalized = this.normalizeFontFamily(fontFamily);
        const safeFonts =
            profile === 'mac_365'
                ? MAC_365_SAFE_FONTS
                : profile === 'win_365'
                    ? WIN_365_SAFE_FONTS
                    : CROSS_PLATFORM_SAFE_FONTS;

        for (const candidate of safeFonts) {
            if (normalized === candidate || normalized.startsWith(`${candidate} `)) {
                return false;
            }
        }

        return true;
    }

    private static normalizeFontFamily(fontFamily: string): string {
        return fontFamily.trim().toLowerCase().replace(/\s+/g, ' ');
    }

    private static fontStyleToWeight(style: string): number {
        const normalized = style.trim().toLowerCase();
        if (/(thin|hairline)/.test(normalized)) return 100;
        if (/(extra[\s-]?light|ultra[\s-]?light)/.test(normalized)) return 200;
        if (/(light)/.test(normalized)) return 300;
        if (/(regular|normal|book|roman)/.test(normalized)) return 400;
        if (/(medium)/.test(normalized)) return 500;
        if (/(semi[\s-]?bold|demi[\s-]?bold)/.test(normalized)) return 600;
        if (/(extra[\s-]?bold|ultra[\s-]?bold|heavy|black)/.test(normalized)) return 800;
        if (/(bold)/.test(normalized)) return 700;
        return 400;
    }

    private static getLetterSpacingPx(
        letterSpacing: LetterSpacing | PluginAPI['mixed'],
        fontSize: number
    ): number | undefined {
        if (!letterSpacing || letterSpacing === figma.mixed) {
            return undefined;
        }

        if (letterSpacing.unit === 'PIXELS') {
            return letterSpacing.value;
        }
        if (letterSpacing.unit === 'PERCENT') {
            return (fontSize * letterSpacing.value) / 100;
        }

        return undefined;
    }

    private static getLineHeightMetrics(
        lineHeight: LineHeight | PluginAPI['mixed'],
        fontSize: number
    ): { px?: number; percent?: number } {
        if (!lineHeight || lineHeight === figma.mixed) {
            return {};
        }

        if (lineHeight.unit === 'PIXELS') {
            return { px: lineHeight.value };
        }
        if (lineHeight.unit === 'PERCENT') {
            return {
                percent: lineHeight.value,
                px: (fontSize * lineHeight.value) / 100
            };
        }

        return {};
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

    private static isContainerWithClipping(
        node: SceneNode
    ): node is (SceneNode & ChildrenMixin & { clipsContent: boolean }) {
        if (!this.isCompositionContainerNode(node)) return false;
        return "clipsContent" in node && node.clipsContent === true && node.children.length > 0;
    }

    private static boundsExceed(container: Bounds, candidate: Bounds, epsilon: number): boolean {
        const containerRight = container.x + container.w;
        const containerBottom = container.y + container.h;
        const candidateRight = candidate.x + candidate.w;
        const candidateBottom = candidate.y + candidate.h;

        return (
            candidate.x < container.x - epsilon ||
            candidate.y < container.y - epsilon ||
            candidateRight > containerRight + epsilon ||
            candidateBottom > containerBottom + epsilon
        );
    }

    private static hasActiveClipOverflow(node: SceneNode, epsilon: number = 2): boolean {
        if (!this.isContainerWithClipping(node)) {
            return false;
        }

        const containerBounds = this.getAbsoluteBounds(node, false);
        if (!containerBounds) {
            return false;
        }

        for (const child of node.children) {
            if (!child.visible) continue;
            const childBounds = this.getAbsoluteBounds(child, false);
            if (!childBounds) continue;
            if (this.boundsExceed(containerBounds, childBounds, epsilon)) {
                return true;
            }
        }

        return false;
    }

    private static isEditableOrSimpleNode(node: SceneNode, context: ExtractContext): boolean {
        if (!node.visible) return false;
        if (node.type === 'TEXT') return true;
        if (VECTOR_TYPES.has(node.type)) return false;
        if (this.shouldRasterizeNode(node).shouldRasterize) return false;

        if (this.isCompositionContainerNode(node)) {
            const analysis = this.analyzeComplexComposition(node, context);
            if (analysis.activeClipOverflow) return false;
            if (analysis.ownReasons.length > 0) return false;
        }

        return true;
    }

    private static hasEditableOrSimpleSiblings(node: SceneNode, context: ExtractContext): boolean {
        if (!this.isCompositionContainerNode(node)) return false;

        for (const child of node.children) {
            if (!child.visible) continue;

            const childIsComplex = this.shouldRasterizeNode(child).shouldRasterize ||
                (this.isCompositionContainerNode(child) && this.analyzeComplexComposition(child, context).shouldFlatten);

            if (childIsComplex) continue;

            if (this.isEditableOrSimpleNode(child, context)) {
                return true;
            }
        }

        return false;
    }

    private static hasDirectVisibleTextChild(node: SceneNode): boolean {
        if (!this.isCompositionContainerNode(node)) return false;
        return node.children.some((child) => child.visible && child.type === 'TEXT');
    }

    private static isContentLikeWrapper(node: SceneNode): boolean {
        if (!this.isCompositionContainerNode(node)) return false;
        const normalized = node.name.trim().toLowerCase();
        if (!normalized.includes('content')) return false;
        return this.hasDirectVisibleTextChild(node);
    }

    private static shouldDeferCompositionFlatten(
        node: SceneNode,
        analysis: CompositionAnalysis,
        context: ExtractContext
    ): boolean {
        if (!this.isCompositionContainerNode(node)) return false;
        if (!analysis.hasComplexChild) return false;

        const hardOwnReasons = analysis.ownReasons.filter((reason) => HARD_OWN_COMPOSITION_REASONS.has(reason));
        if (hardOwnReasons.length > 0) return false;

        // Keep high-level wrappers (especially Content frames) editable and let
        // complex descendants flatten on their own.
        if (this.isContentLikeWrapper(node)) return true;
        return this.hasEditableOrSimpleSiblings(node, context);
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

    private static getOwnCompositionReasons(node: SceneNode): string[] {
        const reasons: string[] = [];
        if (this.isMaskNode(node)) reasons.push('mask');
        if (this.hasVisibleEffects(node)) reasons.push('effects');
        if (this.hasNonDefaultBlend(node)) reasons.push('blend-mode');
        if (this.hasNonZeroRotation(node)) reasons.push('rotation');
        if ("fills" in node && this.hasUnsupportedFills(node.fills)) reasons.push('unsupported-fills');
        if (this.hasNegativeAutoLayoutSpacing(node)) reasons.push('negative-auto-layout-spacing');
        return reasons;
    }

    private static analyzeComplexComposition(node: SceneNode, context: ExtractContext): CompositionAnalysis {
        const cached = context.compositionAnalysisCache.get(node);
        if (cached) {
            return cached;
        }

        if (!this.isCompositionContainerNode(node)) {
            const trivial: CompositionAnalysis = {
                shouldFlatten: false,
                ownReasons: [],
                inheritedReasons: [],
                hasComplexChild: false,
                descendantCount: 0,
                activeClipOverflow: false
            };
            context.compositionAnalysisCache.set(node, trivial);
            return trivial;
        }

        const ownReasonsSet = new Set<string>();
        const inheritedReasonsSet = new Set<string>();
        const ownReasons = this.getOwnCompositionReasons(node);
        ownReasons.forEach((reason) => ownReasonsSet.add(reason));

        const activeClipOverflow = this.hasActiveClipOverflow(node);
        if (activeClipOverflow) {
            ownReasonsSet.add('active-clip-overflow');
        }

        let descendantCount = 0;
        const stack: SceneNode[] = [...node.children];

        while (stack.length > 0) {
            const current = stack.pop() as SceneNode;
            descendantCount += 1;

            if (this.isContainerWithClipping(current)) {
                inheritedReasonsSet.add('descendant-clips-content');
            }
            if (this.hasActiveClipOverflow(current)) {
                inheritedReasonsSet.add('descendant-active-clip-overflow');
            }
            if (this.isMaskNode(current)) {
                inheritedReasonsSet.add('descendant-mask');
            }
            if (this.hasVisibleEffects(current)) {
                inheritedReasonsSet.add('descendant-effects');
            }
            if (this.hasNonDefaultBlend(current)) {
                inheritedReasonsSet.add('descendant-blend-mode');
            }
            if (this.hasNonZeroRotation(current)) {
                inheritedReasonsSet.add('descendant-rotation');
            }
            if (VECTOR_TYPES.has(current.type)) {
                inheritedReasonsSet.add('descendant-vector-content');
            }
            if ("fills" in current && this.hasUnsupportedFills(current.fills)) {
                inheritedReasonsSet.add('descendant-unsupported-fills');
            }
            if (this.hasNegativeAutoLayoutSpacing(current)) {
                inheritedReasonsSet.add('descendant-negative-auto-layout-spacing');
            }

            if ("children" in current) {
                stack.push(...current.children);
            }
        }

        if (descendantCount >= 12) {
            inheritedReasonsSet.add(`descendants>=12(${descendantCount})`);
        }

        const hasComplexChild = node.children.some((child) => {
            if (!child.visible) return false;
            if (this.shouldRasterizeNode(child).shouldRasterize) {
                return true;
            }

            if (!this.isCompositionContainerNode(child)) {
                return false;
            }

            const childAnalysis = this.analyzeComplexComposition(child, context);
            return childAnalysis.shouldFlatten;
        });

        const analysis: CompositionAnalysis = {
            shouldFlatten: ownReasonsSet.size > 0 || inheritedReasonsSet.size > 0,
            ownReasons: Array.from(ownReasonsSet),
            inheritedReasons: Array.from(inheritedReasonsSet),
            hasComplexChild,
            descendantCount,
            activeClipOverflow
        };

        context.compositionAnalysisCache.set(node, analysis);
        return analysis;
    }

    private static getAbsoluteBounds(node: SceneNode, preferRenderBounds: boolean): Bounds | null {
        const renderBounds = "absoluteRenderBounds" in node ? node.absoluteRenderBounds : null;
        const boxBounds = "absoluteBoundingBox" in node ? node.absoluteBoundingBox : null;

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

    private static getTextFrameBounds(node: TextNode, rootX: number, rootY: number): Bounds | null {
        const x = node.absoluteTransform[0][2] - rootX;
        const y = node.absoluteTransform[1][2] - rootY;
        const w = node.width;
        const h = node.height;

        if (
            Number.isFinite(x) &&
            Number.isFinite(y) &&
            Number.isFinite(w) &&
            Number.isFinite(h) &&
            w > 0 &&
            h > 0
        ) {
            return { x, y, w, h };
        }

        return this.getRelativeBounds(node, rootX, rootY, false);
    }

    private static async tryAddRasterizedNode(
        node: SceneNode,
        elements: PPTElement[],
        context: ExtractContext,
        preferRenderBounds: boolean,
        metadata: Partial<PPTElement> = {}
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
            const nodeOpacity = "opacity" in node && typeof node.opacity === 'number'
                ? node.opacity
                : 1;
            elements.push({
                type: 'image',
                x: bounds.x,
                y: bounds.y,
                w: bounds.w,
                h: bounds.h,
                fill: base64,
                opacity: nodeOpacity,
                ...metadata
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

    private static toPptAlign(value: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED'): 'left' | 'center' | 'right' | 'justify' {
        if (value === 'CENTER') return 'center';
        if (value === 'RIGHT') return 'right';
        if (value === 'JUSTIFIED') return 'justify';
        return 'left';
    }

    private static toPptVAlign(value: 'TOP' | 'CENTER' | 'BOTTOM'): 'top' | 'mid' | 'bot' {
        if (value === 'CENTER') return 'mid';
        if (value === 'BOTTOM') return 'bot';
        return 'top';
    }

    private static getRectangleCornerInfo(node: RectangleNode): { cornerRadius?: number; shouldRasterize: boolean } {
        const epsilon = 0.01;
        const hasSmoothing = typeof node.cornerSmoothing === 'number' && node.cornerSmoothing > epsilon;

        if (typeof node.cornerRadius === 'number') {
            if (node.cornerRadius <= epsilon) {
                return { shouldRasterize: false };
            }
            if (hasSmoothing) {
                return { shouldRasterize: true };
            }
            return { cornerRadius: node.cornerRadius, shouldRasterize: false };
        }

        const radii = [node.topLeftRadius, node.topRightRadius, node.bottomRightRadius, node.bottomLeftRadius];
        const maxRadius = Math.max(...radii);
        if (maxRadius <= epsilon) {
            return { shouldRasterize: false };
        }

        const uniformRadius = radii.every((radius) => Math.abs(radius - radii[0]) <= epsilon);
        if (!uniformRadius || hasSmoothing) {
            return { shouldRasterize: true };
        }

        return { cornerRadius: radii[0], shouldRasterize: false };
    }

    private static rgbToHex(rgb: RGB): string {
        const toHex = (n: number) => {
            const hex = Math.round(n * 255).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }
        return `${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
    }
}

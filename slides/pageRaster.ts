export interface SlideTargetBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ContainPlacement extends SlideTargetBox {
    scale: number;
}

export type RasterExportConstraintType = "SCALE" | "WIDTH" | "HEIGHT";

export interface RasterExportConstraint {
    type: RasterExportConstraintType;
    value: number;
}

export interface RasterizePageIntoSlideOptions {
    targetBox: SlideTargetBox;
    quality?: number;
    preferMaxResolution?: boolean;
    minExportScale?: number;
    maxExportScale?: number;
    maxExportPixels?: number;
    maxExportSidePx?: number;
    exportConstraint?: RasterExportConstraint;
    name?: string;
    cornerRadius?: number;
    strokeColor?: RGB;
    strokeWeight?: number;
    showShadow?: boolean;
}

export interface RasterizedPagePlacement {
    imageNode: RectangleNode;
    sourceWidth: number;
    sourceHeight: number;
    fittedX: number;
    fittedY: number;
    fittedWidth: number;
    fittedHeight: number;
    fitScale: number;
    exportScale: number;
    exportConstraintType: RasterExportConstraintType;
    exportedPixelWidth: number;
    exportedPixelHeight: number;
}

const clamp = (value: number, min: number, max: number): number => {
    return Math.min(max, Math.max(min, value));
};

const loadOptionalFont = async (fontName: FontName): Promise<void> => {
    try {
        await figma.loadFontAsync(fontName);
    } catch (_error) {
        // Optional safety net: some generated pages mutate text before setting fontName.
    }
};

interface ResolvedRasterExport {
    constraint: RasterExportConstraint;
    exportScale: number;
    exportedPixelWidth: number;
    exportedPixelHeight: number;
}

const MIN_SCALE_EPSILON = 0.001;
const DEFAULT_MIN_EXPORT_SCALE = 0.1;
const DEFAULT_MAX_EXPORT_SCALE = 32;
const DEFAULT_MAX_EXPORT_PIXELS = 16_000_000;
const DEFAULT_MAX_EXPORT_SIDE_PX = 4096;

interface RasterScaleBounds {
    minScale: number;
    maxScale: number;
}

const computeScaleBounds = (
    sourceWidth: number,
    sourceHeight: number,
    options: RasterizePageIntoSlideOptions
): RasterScaleBounds => {
    const minScale = options.minExportScale ?? DEFAULT_MIN_EXPORT_SCALE;
    const configuredMaxScale = options.maxExportScale ?? DEFAULT_MAX_EXPORT_SCALE;
    const maxExportPixels = options.maxExportPixels ?? DEFAULT_MAX_EXPORT_PIXELS;
    const maxExportSidePx = options.maxExportSidePx ?? DEFAULT_MAX_EXPORT_SIDE_PX;

    const sourcePixels = Math.max(1, sourceWidth * sourceHeight);
    const maxScaleFromPixels = Math.sqrt(Math.max(1, maxExportPixels) / sourcePixels);
    const longestSide = Math.max(sourceWidth, sourceHeight, 1);
    const maxScaleFromSide = Math.max(1, maxExportSidePx) / longestSide;

    const safeMaxScale = Math.max(
        minScale,
        Math.min(configuredMaxScale, maxScaleFromPixels, maxScaleFromSide)
    );

    return { minScale, maxScale: safeMaxScale };
};

const isImageTooLargeError = (error: unknown): boolean => {
    if (!(error instanceof Error)) {
        return false;
    }
    return error.message.toLowerCase().includes("image is too large");
};

const resolveExportFromScale = (
    sourceWidth: number,
    sourceHeight: number,
    exportScale: number
): ResolvedRasterExport => {
    return {
        constraint: { type: "SCALE", value: exportScale },
        exportScale,
        exportedPixelWidth: Math.max(1, Math.round(sourceWidth * exportScale)),
        exportedPixelHeight: Math.max(1, Math.round(sourceHeight * exportScale))
    };
};

const resolveRasterExport = (
    sourceWidth: number,
    sourceHeight: number,
    fittedWidth: number,
    options: RasterizePageIntoSlideOptions,
    scaleBounds: RasterScaleBounds
): ResolvedRasterExport => {
    const minScale = scaleBounds.minScale;
    const maxScale = scaleBounds.maxScale;
    const explicitConstraint = options.exportConstraint;

    if (explicitConstraint) {
        if (explicitConstraint.type === "SCALE") {
            const exportScale = clamp(Math.max(explicitConstraint.value, 0.01), minScale, maxScale);
            return resolveExportFromScale(sourceWidth, sourceHeight, exportScale);
        }

        if (explicitConstraint.type === "WIDTH") {
            const requestedExportScale = Math.max(explicitConstraint.value / sourceWidth, 0.01);
            const exportScale = clamp(requestedExportScale, minScale, maxScale);
            const exportedPixelWidth = Math.max(1, Math.round(sourceWidth * exportScale));
            return {
                constraint: { type: "WIDTH", value: exportedPixelWidth },
                exportScale,
                exportedPixelWidth,
                exportedPixelHeight: Math.max(1, Math.round(sourceHeight * exportScale))
            };
        }

        const requestedExportScale = Math.max(explicitConstraint.value / sourceHeight, 0.01);
        const exportScale = clamp(requestedExportScale, minScale, maxScale);
        const exportedPixelHeight = Math.max(1, Math.round(sourceHeight * exportScale));
        return {
            constraint: { type: "HEIGHT", value: exportedPixelHeight },
            exportScale,
            exportedPixelWidth: Math.max(1, Math.round(sourceWidth * exportScale)),
            exportedPixelHeight
        };
    }

    if (options.preferMaxResolution !== false && typeof options.quality !== "number") {
        const exportScale = clamp(maxScale, minScale, maxScale);
        return resolveExportFromScale(sourceWidth, sourceHeight, exportScale);
    }

    const quality = options.quality ?? 2;
    const requestedScale = (fittedWidth * quality) / sourceWidth;
    const exportScale = clamp(requestedScale, minScale, maxScale);
    return resolveExportFromScale(sourceWidth, sourceHeight, exportScale);
};

const exportPngAtBestScale = async (
    sourceNode: SceneNode,
    sourceWidth: number,
    sourceHeight: number,
    initialExport: ResolvedRasterExport,
    minScale: number,
    maxScale: number
): Promise<{ pngBytes: Uint8Array; exportDetails: ResolvedRasterExport }> => {
    const tryConstraintExport = async (
        constraint: RasterExportConstraint
    ): Promise<{ pngBytes: Uint8Array; exportDetails: ResolvedRasterExport }> => {
        const pngBytes = await sourceNode.exportAsync({
            format: "PNG",
            constraint
        });

        if (constraint.type === "SCALE") {
            const resolved = resolveExportFromScale(sourceWidth, sourceHeight, constraint.value);
            return { pngBytes, exportDetails: resolved };
        }

        if (constraint.type === "WIDTH") {
            const exportScale = constraint.value / sourceWidth;
            return {
                pngBytes,
                exportDetails: {
                    constraint: { type: "WIDTH", value: Math.max(1, Math.round(constraint.value)) },
                    exportScale,
                    exportedPixelWidth: Math.max(1, Math.round(constraint.value)),
                    exportedPixelHeight: Math.max(1, Math.round(sourceHeight * exportScale))
                }
            };
        }

        const exportScale = constraint.value / sourceHeight;
        return {
            pngBytes,
            exportDetails: {
                constraint: { type: "HEIGHT", value: Math.max(1, Math.round(constraint.value)) },
                exportScale,
                exportedPixelWidth: Math.max(1, Math.round(sourceWidth * exportScale)),
                exportedPixelHeight: Math.max(1, Math.round(constraint.value))
            }
        };
    };

    try {
        return await tryConstraintExport(initialExport.constraint);
    } catch (initialError) {
        const desiredScale = clamp(initialExport.exportScale, minScale, maxScale);
        const scaleUpperBound = desiredScale;

        let failingScale = desiredScale;
        let probeScale = desiredScale;
        let bestSuccessScale: number | null = null;
        let bestResult: { pngBytes: Uint8Array; exportDetails: ResolvedRasterExport } | null = null;

        while (probeScale > minScale + MIN_SCALE_EPSILON) {
            probeScale = Math.max(minScale, probeScale / 2);
            const probeConstraint: RasterExportConstraint = { type: "SCALE", value: probeScale };

            try {
                const result = await tryConstraintExport(probeConstraint);
                bestSuccessScale = probeScale;
                bestResult = result;
                break;
            } catch (_probeError) {
                failingScale = probeScale;
            }

            if (probeScale <= minScale + MIN_SCALE_EPSILON) {
                break;
            }
        }

        if (!bestResult || bestSuccessScale === null) {
            throw initialError;
        }

        let low = bestSuccessScale;
        let high = Math.min(scaleUpperBound, failingScale);
        for (let i = 0; i < 6; i++) {
            if (high - low <= MIN_SCALE_EPSILON) {
                break;
            }

            const candidateScale = low + (high - low) / 2;
            const candidateConstraint: RasterExportConstraint = { type: "SCALE", value: candidateScale };
            try {
                const candidateResult = await tryConstraintExport(candidateConstraint);
                low = candidateScale;
                bestResult = candidateResult;
            } catch (_candidateError) {
                high = candidateScale;
            }
        }

        return bestResult;
    }
};

const createImageHashAtBestScale = async (
    sourceNode: SceneNode,
    sourceWidth: number,
    sourceHeight: number,
    initialExport: ResolvedRasterExport,
    minScale: number,
    maxScale: number
): Promise<{ imageHash: string; exportDetails: ResolvedRasterExport }> => {
    let attemptExport = initialExport;
    let attemptMaxScale = maxScale;

    for (let attempt = 0; attempt < 5; attempt++) {
        const { pngBytes, exportDetails } = await exportPngAtBestScale(
            sourceNode,
            sourceWidth,
            sourceHeight,
            attemptExport,
            minScale,
            attemptMaxScale
        );

        try {
            const imageHash = figma.createImage(pngBytes).hash;
            return { imageHash, exportDetails };
        } catch (error) {
            if (!isImageTooLargeError(error)) {
                throw error;
            }

            if (exportDetails.exportScale <= minScale + MIN_SCALE_EPSILON) {
                throw error;
            }

            attemptMaxScale = Math.max(minScale, exportDetails.exportScale * 0.75);
            attemptExport = resolveExportFromScale(
                sourceWidth,
                sourceHeight,
                attemptMaxScale
            );
        }
    }

    throw new Error("Failed to create raster image: image remained too large after retries.");
};

export function computeContainPlacement(
    sourceWidth: number,
    sourceHeight: number,
    targetBox: SlideTargetBox
): ContainPlacement {
    if (sourceWidth <= 0 || sourceHeight <= 0) {
        throw new Error("Source node must have a positive width and height.");
    }
    if (targetBox.width <= 0 || targetBox.height <= 0) {
        throw new Error("Target box must have a positive width and height.");
    }

    const scale = Math.min(targetBox.width / sourceWidth, targetBox.height / sourceHeight);
    const width = sourceWidth * scale;
    const height = sourceHeight * scale;
    const x = targetBox.x + (targetBox.width - width) / 2;
    const y = targetBox.y + (targetBox.height - height) / 2;

    return { x, y, width, height, scale };
}

export async function rasterizeNodeIntoSlide(
    slide: FrameNode,
    sourceNode: SceneNode,
    options: RasterizePageIntoSlideOptions
): Promise<RasterizedPagePlacement> {
    const sourceWidth = sourceNode.width;
    const sourceHeight = sourceNode.height;
    const placement = computeContainPlacement(sourceWidth, sourceHeight, options.targetBox);
    const scaleBounds = computeScaleBounds(sourceWidth, sourceHeight, options);
    const initialExport = resolveRasterExport(
        sourceWidth,
        sourceHeight,
        placement.width,
        options,
        scaleBounds
    );
    const { imageHash, exportDetails } = await createImageHashAtBestScale(
        sourceNode,
        sourceWidth,
        sourceHeight,
        initialExport,
        scaleBounds.minScale,
        scaleBounds.maxScale
    );

    const imageNode = figma.createRectangle();
    imageNode.name = options.name || `${sourceNode.name}_Raster`;
    slide.appendChild(imageNode);
    if (slide.layoutMode !== "NONE") {
        imageNode.layoutPositioning = "ABSOLUTE";
    }
    imageNode.resize(placement.width, placement.height);
    imageNode.x = placement.x;
    imageNode.y = placement.y;
    imageNode.fills = [{ type: "IMAGE", imageHash, scaleMode: "FILL" }];

    if (typeof options.cornerRadius === "number") {
        imageNode.cornerRadius = options.cornerRadius;
    }

    if (typeof options.strokeWeight === "number" && options.strokeWeight > 0) {
        imageNode.strokeWeight = options.strokeWeight;
        imageNode.strokes = [{
            type: "SOLID",
            color: options.strokeColor || { r: 0.76, g: 0.78, b: 0.82 }
        }];
    }

    if (options.showShadow) {
        imageNode.effects = [{
            type: "DROP_SHADOW",
            color: { r: 0, g: 0, b: 0.1, a: 0.15 },
            offset: { x: 0, y: 12 },
            radius: 32,
            visible: true,
            blendMode: "NORMAL"
        }];
    }

    return {
        imageNode,
        sourceWidth,
        sourceHeight,
        fittedX: placement.x,
        fittedY: placement.y,
        fittedWidth: placement.width,
        fittedHeight: placement.height,
        fitScale: placement.scale,
        exportScale: exportDetails.exportScale,
        exportConstraintType: exportDetails.constraint.type,
        exportedPixelWidth: exportDetails.exportedPixelWidth,
        exportedPixelHeight: exportDetails.exportedPixelHeight
    };
}

export async function rasterizePageFactoryIntoSlide(
    slide: FrameNode,
    createPageNode: () => Promise<SceneNode> | SceneNode,
    options: RasterizePageIntoSlideOptions
): Promise<RasterizedPagePlacement> {
    await loadOptionalFont({ family: "Inter", style: "Regular" });

    const exportHost = figma.createFrame();
    exportHost.name = "__page_raster_export_host__";
    exportHost.fills = [];
    exportHost.clipsContent = false;
    exportHost.resize(1, 1);
    exportHost.x = -100000;
    exportHost.y = -100000;
    figma.currentPage.appendChild(exportHost);

    try {
        const pageNode = await createPageNode();
        exportHost.appendChild(pageNode);
        pageNode.x = 0;
        pageNode.y = 0;
        exportHost.resize(Math.max(pageNode.width, 1), Math.max(pageNode.height, 1));

        return await rasterizeNodeIntoSlide(slide, pageNode, options);
    } finally {
        exportHost.remove();
    }
}

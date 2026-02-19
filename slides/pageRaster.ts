export interface SlideTargetBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ContainPlacement extends SlideTargetBox {
    scale: number;
}

export interface RasterizePageIntoSlideOptions {
    targetBox: SlideTargetBox;
    quality?: number;
    minExportScale?: number;
    maxExportScale?: number;
    name?: string;
    cornerRadius?: number;
    strokeColor?: RGB;
    strokeWeight?: number;
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

    const quality = options.quality ?? 2;
    const requestedScale = (placement.width * quality) / sourceWidth;
    const exportScale = clamp(
        requestedScale,
        options.minExportScale ?? 0.1,
        options.maxExportScale ?? 4
    );

    const pngBytes = await sourceNode.exportAsync({
        format: "PNG",
        constraint: { type: "SCALE", value: exportScale }
    });
    const imageHash = figma.createImage(pngBytes).hash;

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

    return {
        imageNode,
        sourceWidth,
        sourceHeight,
        fittedX: placement.x,
        fittedY: placement.y,
        fittedWidth: placement.width,
        fittedHeight: placement.height,
        fitScale: placement.scale,
        exportScale
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

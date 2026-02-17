/// <reference types="@figma/plugin-typings" />
export type T2x3 = [[number, number, number], [number, number, number]];
export type Vec = { x: number; y: number };

export function isAutoLayoutFrame(node: BaseNode | null): node is FrameNode | ComponentNode | InstanceNode {
    return !!node && "layoutMode" in node && (node as FrameNode).layoutMode !== undefined;
}

/**
 * Normalize axis vectors (defensive). For relativeTransform specifically,
 * Figma enforces unit-length axes.
 */
export function normalizeRelativeTransform(t: T2x3): T2x3 {
    const [[a, b, tx], [c, d, ty]] = t;
    const sx = Math.hypot(a, c) || 1;
    const sy = Math.hypot(b, d) || 1;
    return [[a / sx, b / sy, tx], [c / sx, d / sy, ty]];
}

export function applySizeAndTransform(
    node: SceneNode & LayoutMixin,
    data: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        rotation?: number;
        preserveAutoLayoutTranslation?: boolean;
    }
) {
    // 1) size first
    const canResize = typeof node.resize === 'function';
    if (
        canResize &&
        (typeof data.width === 'number' || typeof data.height === 'number') &&
        (data.width === undefined || Number.isFinite(data.width)) &&
        (data.height === undefined || Number.isFinite(data.height))
    ) {
        const newW = typeof data.width === 'number' ? data.width : node.width;
        const newH = typeof data.height === 'number' ? data.height : node.height;
        const safeW = Math.max(newW, 0.01);
        const safeH = node.type === "LINE" ? 0 : Math.max(newH, 0.01);
        const isDegenerateVectorTarget = node.type === "VECTOR" && (safeW <= 0.01 || safeH <= 0.01);
        const hasDegenerateCurrentVectorBounds =
            node.type === "VECTOR" &&
            (!Number.isFinite(node.width) || !Number.isFinite(node.height) || node.width <= 0.01 || node.height <= 0.01);

        if ((safeW !== node.width || safeH !== node.height) && !isDegenerateVectorTarget && !hasDegenerateCurrentVectorBounds) {
            // We use resize() instead of resizeWithoutConstraints to ensure 
            // that children with SCALE constraints (like icons) scale correctly.
            try {
                node.resize(safeW, safeH);
            } catch (resizeError) {
                console.warn("Failed to resize node safely", resizeError);
            }
        }
    }

    if (!data.relativeTransform) {
        // Fallback: if no relativeTransform but rotation is present, apply it
        if (typeof data.rotation === 'number' && data.rotation !== 0) {
            node.rotation = data.rotation;
        }
        return;
    }

    const t = normalizeRelativeTransform(data.relativeTransform);

    // 2) decide whether translation will be respected
    const parent = node.parent;
    const parentIsAutoLayout = isAutoLayoutFrame(parent) && (parent as FrameNode).layoutMode !== "NONE";
    const hasLayoutPositioning = "layoutPositioning" in node;
    const positioning = (hasLayoutPositioning
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? (node as any).layoutPositioning
        : "AUTO") as "AUTO" | "ABSOLUTE";

    if (parentIsAutoLayout && positioning !== "ABSOLUTE" && data.preserveAutoLayoutTranslation !== true) {
        // CRITICAL FIX: If we are in-flow auto-layout, translation is managed by Figma.
        // Forcing X/Y to 0 here causes children to overlap until Figma re-layouts.
        // We ONLY set relativeTransform if there is non-zero rotation.
        const isIdentityRotation = Math.abs(t[0][1]) < 1e-6 && Math.abs(t[1][0]) < 1e-6;
        if (!isIdentityRotation) {
            node.relativeTransform = [[t[0][0], t[0][1], 0], [t[1][0], t[1][1], 0]];
        }
    } else {
        node.relativeTransform = t;
    }

    // 3) Explicit Rotation Override - REMOVED
    // We trust relativeTransform matrix as it handles flips and complex transforms correctly.
}

// --- Linear Algebra Helpers for Gradients ---

const O: number[][] = [
    [0, 1, 0],
    [0.5, 0.5, 1],
    [1, 1, 1],
];

function mul3(a: number[][], b: number[][]): number[][] {
    const out = Array.from({ length: 3 }, () => [0, 0, 0]);
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            out[r][c] = a[r][0] * b[0][c] + a[r][1] * b[1][c] + a[r][2] * b[2][c];
        }
    }
    return out;
}

function inv3(m: number[][]): number[][] {
    const [
        [a, b, c],
        [d, e, f],
        [g, h, i],
    ] = m;

    const A = (e * i - f * h);
    const B = -(d * i - f * g);
    const C = (d * h - e * g);
    const D = -(b * i - c * h);
    const E = (a * i - c * g);
    const F = -(a * h - b * g);
    const G = (b * f - c * e);
    const H = -(a * f - c * d);
    const I = (a * e - b * d);

    const det = a * A + b * B + c * C;
    if (Math.abs(det) < 1e-12) throw new Error("Non-invertible matrix");

    const invDet = 1 / det;
    return [
        [A * invDet, D * invDet, G * invDet],
        [B * invDet, E * invDet, H * invDet],
        [C * invDet, F * invDet, I * invDet],
    ];
}

// Handles -> gradientTransform (Plugin API)
export function gradientHandlesToTransform(handles: [Vec, Vec, Vec]): T2x3 {
    const D = [
        [handles[0].x, handles[1].x, handles[2].x],
        [handles[0].y, handles[1].y, handles[2].y],
        [1, 1, 1],
    ];
    const M = mul3(O, inv3(D));
    return [M[0] as [number, number, number], M[1] as [number, number, number]];
}

// gradientTransform -> handles (normalized object space)
export function transformToGradientHandles(t: T2x3): [Vec, Vec, Vec] {
    const T = [
        [t[0][0], t[0][1], t[0][2]],
        [t[1][0], t[1][1], t[1][2]],
        [0, 0, 1],
    ];
    const invT = inv3(T);
    const P = mul3(invT, O);
    return [
        { x: P[0][0], y: P[1][0] },
        { x: P[0][1], y: P[1][1] },
        { x: P[0][2], y: P[1][2] },
    ];
}
/**
 * Detects if an SVG asset has a baked-in rotation compared to the JSON dimensions.
 * This happens often with icons that were rotated in Figma during export.
 */
export function detectBakedRotation(
    svgW: number,
    svgH: number,
    jsonW: number,
    jsonH: number
): boolean {
    if (svgW === 0 || svgH === 0 || jsonW === 0 || jsonH === 0) return false;

    const svgAR = svgW / svgH;
    const jsonAR = jsonW / jsonH;
    const swappedJsonAR = jsonH / jsonW;

    // Compare original aspect ratio vs swapped aspect ratio
    const diffOriginal = Math.abs(svgAR - jsonAR);
    const diffSwapped = Math.abs(svgAR - swappedJsonAR);

    // Sanity check: Ensure area is roughly similar (within 30%)
    const areaRatio = (svgW * svgH) / (jsonW * jsonH);
    const areaIsSimilar = areaRatio > 0.7 && areaRatio < 1.3;

    // If swapped AR is significantly closer than original AR, it's rotated
    return areaIsSimilar && diffSwapped < diffOriginal * 0.5;
}

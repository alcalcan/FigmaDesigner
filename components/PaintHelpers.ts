import { gradientHandlesToTransform as oldHandlesToTx, transformToGradientHandles as oldTxToHandles, T2x3, Vec } from "./TransformHelpers";

// Re-export or redefine types if needed. Using simple types for portability.
export type GradientHandle = { x: number; y: number };

// JSON-safe paints with extra metadata
export type PortablePaint =
    | (SolidPaint & { /* no extras */ })
    | (ImagePaint & { assetRef?: string; originalImageHash?: string })
    | (GradientPaint & { gradientHandles?: [GradientHandle, GradientHandle, GradientHandle] })
    | (Paint & { [k: string]: any }); // fallback

export type PortablePaints = PortablePaint[] | "mixed";

export type AssetStore = {
    // map original imageHash -> assetRef
    imageHashToAssetRef: Map<string, string>;
    // assetRef -> base64 content
    assets: Record<string, { bytesBase64: string }>;
    nextId: number;
};

export type AssetSource = {
    // assetRef -> base64
    assets: Record<string, { bytesBase64: string }>;
    // cache created image hashes so repeated use is cheap
    createdImagesByAssetRef: Map<string, string>;
};

// --- Helpers ---

export function bytesToBase64(bytes: Uint8Array): string {
    if (typeof figma !== 'undefined' && figma.base64Encode) {
        return figma.base64Encode(bytes);
    }
    // Fallback: Custom Base64 Encoder (since btoa might be missing in Sandbox)
    let binary = "";
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    // If btoa is available (UI context), use it. otherwise we might fail or need full polyfill.
    // Given the error, btoa is missing. But we are in "code.ts" mostly so figma should be there.
    if (typeof btoa === 'function') {
        return btoa(binary);
    }
    // Ultra-simple fallback if needed, but figma.base64Encode should cover us in the plugin scope.
    throw new Error("Environment supports neither figma.base64Encode nor btoa");
}

export function base64ToBytes(b64: string): Uint8Array {
    if (typeof figma !== 'undefined' && figma.base64Decode) {
        return figma.base64Decode(b64);
    }
    if (typeof atob === 'function') {
        const binary = atob(b64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return bytes;
    }
    throw new Error("Environment supports neither figma.base64Decode nor atob");
}

// Simple Gradient Logic (User provided) - robust and compatible with Figma Transform
export function gradientTransformToHandles(t: Transform): [GradientHandle, GradientHandle, GradientHandle] {
    const [[a, b, c], [d, e, f]] = t;
    const p0 = { x: c, y: f };
    const p1 = { x: a + c, y: d + f };
    const p2 = { x: b + c, y: e + f };
    return [p0, p1, p2];
}

export function handlesToGradientTransform(h: [GradientHandle, GradientHandle, GradientHandle]): Transform {
    const [p0, p1, p2] = h;
    return [
        [p1.x - p0.x, p2.x - p0.x, p0.x],
        [p1.y - p0.y, p2.y - p0.y, p0.y],
    ];
}

// --- Main Pipeline Functions ---

export async function processFills(
    fills: ReadonlyArray<Paint> | typeof figma.mixed,
    assetStore: AssetStore
): Promise<PortablePaints> {
    if (fills === figma.mixed) return "mixed";

    const out: PortablePaint[] = [];

    for (const paint of fills) {
        // Clone
        const p: any = JSON.parse(JSON.stringify(paint));

        // 1) IMAGE paints
        if (p.type === "IMAGE") {
            const imageHash: string | undefined = p.imageHash;
            if (imageHash) {
                let assetRef = assetStore.imageHashToAssetRef.get(imageHash);
                if (!assetRef) {
                    const img = figma.getImageByHash(imageHash);
                    if (img) {
                        try {
                            const bytes = await img.getBytesAsync();
                            assetRef = `assets/img_${assetStore.nextId++}.bin`;
                            assetStore.imageHashToAssetRef.set(imageHash, assetRef);
                            assetStore.assets[assetRef] = { bytesBase64: bytesToBase64(bytes) };
                        } catch (err) {
                            console.error(`Failed to get bytes for image hash ${imageHash}`, err);
                        }
                    }
                }

                if (assetRef) {
                    p.originalImageHash = imageHash;
                    p.assetRef = assetRef;
                    delete p.imageHash; // remove unstable hash
                }
            }
            out.push(p);
            continue;
        }

        // 2) GRADIENT paints
        if (typeof p.type === "string" && p.type.startsWith("GRADIENT") && p.gradientTransform) {
            p.gradientHandles = gradientTransformToHandles(p.gradientTransform);
            // We keep gradientTransform for backup if strict mode not enforced, 
            // but user suggested deleting it to enforce handles usage.
            // Let's delete it to be safe and clean.
            delete p.gradientTransform;
            out.push(p);
            continue;
        }

        // Default
        out.push(p);
    }

    return out;
}

export async function hydrateFills(
    fills: PortablePaints | undefined,
    assetSource: AssetSource
): Promise<ReadonlyArray<Paint> | null> {
    if (!fills || fills === "mixed") return null;

    const out: Paint[] = [];

    for (const portable of fills) {
        const p: any = { ...portable };

        // IMAGE
        if (p.type === "IMAGE" && p.assetRef) {
            let imageHash = assetSource.createdImagesByAssetRef.get(p.assetRef);
            if (!imageHash) {
                const asset = assetSource.assets[p.assetRef];
                if (asset) {
                    try {
                        const bytes = base64ToBytes(asset.bytesBase64);
                        const img = figma.createImage(bytes);
                        imageHash = img.hash;
                        assetSource.createdImagesByAssetRef.set(p.assetRef, imageHash);
                    } catch (e) {
                        console.error(`Failed to hydrate image ${p.assetRef}`, e);
                    }
                }
            }
            if (imageHash) p.imageHash = imageHash;

            delete p.assetRef;
            delete p.originalImageHash;

            out.push(p as Paint);
            continue;
        }

        // GRADIENT
        // Support both old 'gradientHandles' array of objects and potentially other variants if exists
        // But here we rely on our generic type
        if (typeof p.type === "string" && p.type.startsWith("GRADIENT") && p.gradientHandles) {
            p.gradientTransform = handlesToGradientTransform(p.gradientHandles);
            delete p.gradientHandles;
            out.push(p as Paint);
            continue;
        }

        // Clean cleanup
        delete p.assetRef;
        delete p.gradientHandles;
        delete p.originalImageHash;

        out.push(p as Paint);
    }

    return out;
}

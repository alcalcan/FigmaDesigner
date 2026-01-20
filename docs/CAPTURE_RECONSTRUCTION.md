# Capture & Reconstruction System

## 1. Overview
The **Capture & Reconstruction** system is the core engine of the FigmaDesigner plugin. It enables the serialization of live Figma nodes into a portable JSON format ("Capture") and the pixel-perfect recreation of those nodes in a new context ("Reconstruction").

This system solves the "Bridge" problem, ensuring that complex assets like images, gradients, and **multi-color text** are preserved accurately across sessions.

---

## 2. Architecture & Data Structures

### 2.1 Portable Paints
Standard Figma `Paint` objects (like Images and Gradients) are often session-dependent. We convert them into **Portable Paints** to ensure stability.

- **Images**: Figma `imageHash` is unique to a session. We extract the raw image bytes and store them in an `AssetStore`.
- **Gradients**: Figma `gradientTransform` can be fragile during resizing. We normalize gradients into robust **Gradient Handles** (3 control points).

**Key Helper**: `components/PaintHelpers.ts`

### 2.2 Asset Store
To prevent bloating the JSON with duplicate image data, we use a deduplicated `AssetStore` during capture.

```typescript
type AssetStore = {
    imageHashToAssetRef: Map<string, string>; // Deduplication index
    assets: Record<string, { bytesBase64: string }>; // Actual data
};
```

---

## 3. The Capture Process (Figma -> JSON)

**Entry Point**: `code.ts` -> `captureNode(...)`

The capture process traverses the Figma node tree recursively.

### 3.1 Step-by-Step Procedure
1.  **Identity & Geometry**: Captures `x`, `y`, `width`, `height`, `rotation`.
2.  **Layout**: Captures Auto Layout properties (Flexbox-like properties).
3.  **Visuals (Fills & Strokes)**: 
    - Instead of saving `node.fills` directly, we call **`processFills(node.fills, assetStore)`**.
    - This creates an `assetRef` for images and calculates `gradientHandles` for gradients.
4.  **Text Nodes (The Complex Part)**:
    - Captures basic properties (`fontName`, `fontSize`).
    - **Segments**: Defines ranges of text with different styles (e.g., "Multi-color words").
    - **Critical Step**: We iterate through `getStyledTextSegments` and run `processFills` on **each segment**.
    - We capture precise `start` and `end` indices to handle emoji/special character offsets correctly.

### 3.2 Key Method: `processFills`
```typescript
// Located in components/PaintHelpers.ts
export async function processFills(fills, assetStore) {
    // 1. If Image: Extract bytes -> base64 -> store in assetStore -> return { assetRef: "..." }
    // 2. If Gradient: Convert transform matrix -> handles -> return { gradientHandles: [...] }
    // 3. Return generic JSON-safe array
}
```

---

## 4. The Reconstruction Process (JSON -> Figma)

**Entry Point**: `components/JsonReconstructor.ts` -> `reconstruct(...)`

The reconstruction process reads the JSON and rebuilds the node tree using the Figma Plugin API.

### 4.1 Step-by-Step Procedure
1.  **Node Creation**: Creates the correct node type (`createFrame`, `createText`, etc.).
2.  **Order of Operations**:
    - Apply **Layout Mode** first (to establish flow).
    - Apply **Size** and **Transform**.
    - Apply **Visuals**.
3.  **Visual Hydration**:
    - We do not assign `node.fills = data.fills` directly.
    - We call **`hydrateFills(data.fills, assetSource)`**.
    - This resurrects images from the provided Base64 assets and recalculates gradient transforms from the stored handles.
4.  **Text Reconstruction (Multi-Color Logic)**:
    - **Base Fills**: Applied first, guarded against the invalid `"mixed"` string.
    - **Segments**: We iterate the captured text segments.
    - **Hydration**: We `hydrateFills` for the segment's paints.
    - **Application**: We use `textNode.setRangeFills(start, end, hydratedFills)` using the precise captured indices.

### 4.2 Key Method: `hydrateFills`
```typescript
// Located in components/PaintHelpers.ts
export async function hydrateFills(portablePills, assetSource) {
    // 1. If Image: Lookup base64 in assetSource -> figma.createImage(bytes) -> link hash
    // 2. If Gradient: Convert handles -> transform matrix
    // 3. Return valid Figma Paint[]
}
```

---

## 5. Summary of Improvements
Recent updates to this system have ensured:
- **Robustness**: No more crashes due to "mixed" fills.
- **Fidelity**: Multi-color text and gradients inside text are preserved perfectly.
- **Portability**: Images are embedded as Base64 assets, making the JSON self-contained.

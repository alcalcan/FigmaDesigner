export interface ComponentProps {
  x: number;
  y: number;
}

export abstract class BaseComponent {
  abstract create(props: ComponentProps): SceneNode | Promise<SceneNode>;

  /**
   * Helper to convert portable paints (with handles/assetRefs) to Figma-ready paints
   */
  async hydratePaints(paints: any[]): Promise<any[]> {
    if (!paints || !Array.isArray(paints)) return paints;

    const hydrated = await Promise.all(paints.map(async (p) => {
      const paint = { ...p };

      // Clean up properties that Figma rejects
      if (paint.originalImageHash) delete paint.originalImageHash;

      // Handle Images
      if (paint.type === "IMAGE") {
        if (paint.assetRef) {
          try {
            if (typeof paint.assetRef === 'string' && paint.assetRef.length > 100) {
              const bytes = figma.base64Decode(paint.assetRef.split(',')[1] || paint.assetRef);
              const img = figma.createImage(bytes);
              paint.imageHash = img.hash;
            }
            delete paint.assetRef;
          } catch (e) {
            console.warn("Failed to hydrate image", e);
          }
        }

        // Validation check: If we don't have an imageHash by now, this paint is invalid for Figma sets
        if (!paint.imageHash) {
          console.warn("Removing image paint without hash:", paint);
          return null;
        }
      }

      return paint;
    }));

    // Filter out nulls (failed/skipped images)
    return hydrated.filter(Boolean);
  }
}

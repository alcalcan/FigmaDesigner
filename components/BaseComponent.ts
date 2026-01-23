export interface ComponentProps {
  x: number;
  y: number;
  text?: string;
  subtext?: string;
  hideButtons?: boolean;
  [key: string]: any;
}

export abstract class BaseComponent {
  abstract create(props: ComponentProps): SceneNode | Promise<SceneNode>;

  /**
   * Helper to convert portable paints (with handles/assetRefs) to Figma-ready paints
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  /**
   * Safe setter for fontName. Falls back to Inter Regular if loading fails.
   */
  async setFont(node: TextNode, font: FontName): Promise<void> {
    try {
      await figma.loadFontAsync(font);
      node.fontName = font;
    } catch (e) {
      console.warn(`Failed to load font ${font.family} ${font.style}, falling back.`);
      // Attempt to load Inter Regular just in case it wasn't loaded
      try {
        const fallback = { family: "Inter", style: "Regular" };
        await figma.loadFontAsync(fallback);
        node.fontName = fallback;
      } catch (e2) {
        console.warn("Retrying Inter Regular failed", e2);
      }
    }
  }

  /**
   * Safe setter for setRangeFontName. Falls back to Inter Regular if loading fails.
   */
  async setRangeFont(node: TextNode, start: number, end: number, font: FontName): Promise<void> {
    try {
      await figma.loadFontAsync(font);
      node.setRangeFontName(start, end, font);
    } catch (e) {
      console.warn(`Failed to load font range ${font.family} ${font.style}, falling back.`);
      try {
        const fallback = { family: "Inter", style: "Regular" };
        await figma.loadFontAsync(fallback);
        node.setRangeFontName(start, end, fallback);
      } catch (e2) { /* ignore */ }
    }
  }
}

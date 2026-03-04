function collectTextNodes(node: SceneNode, bucket: TextNode[]): void {
  if (node.type === "TEXT") {
    bucket.push(node);
    return;
  }

  if ("children" in node) {
    for (const child of node.children) {
      collectTextNodes(child, bucket);
    }
  }
}

async function ensureTextFontLoaded(node: TextNode): Promise<void> {
  if (node.fontName === figma.mixed) return;
  await figma.loadFontAsync(node.fontName as FontName);
}

function isGenericFallbackName(name: string): boolean {
  const normalized = name.trim().toLowerCase();
  if (!normalized) return true;
  if (normalized === "text" || normalized === "label" || normalized === "title" || normalized === "subtitle") return true;
  if (/^frame\s+\d+$/i.test(normalized)) return true;
  return false;
}

export async function hydrateTextFromNodeNames(root: SceneNode): Promise<void> {
  const textNodes: TextNode[] = [];
  collectTextNodes(root, textNodes);

  for (const textNode of textNodes) {
    const current = textNode.characters?.trim() ?? "";
    if (current.length > 0) continue;

    const fallback = textNode.name?.trim() ?? "";
    if (!fallback || fallback.length < 2) continue;
    if (isGenericFallbackName(fallback)) continue;

    try {
      await ensureTextFontLoaded(textNode);
      textNode.characters = fallback;
    } catch {
      // Keep extraction resilient if a font cannot be loaded in current environment.
    }
  }
}

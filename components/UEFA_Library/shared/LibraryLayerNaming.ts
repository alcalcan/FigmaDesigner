function titleCase(input: string): string {
  return input
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function layoutBase(node: SceneNode): string {
  if (node.type !== "FRAME") return "Container";
  if (node.layoutMode === "HORIZONTAL") return "Row";
  if (node.layoutMode === "VERTICAL") return "Section";
  return "Container";
}

function isNumericFrameName(name: string): boolean {
  return /^frame\s+\d+$/i.test(name.trim());
}

function isNumericGroupName(name: string): boolean {
  return /^group\s+\d+$/i.test(name.trim());
}

function isNumericLineName(name: string): boolean {
  return /^line\s+\d+$/i.test(name.trim());
}

function normalizeNodeName(node: SceneNode): string {
  const raw = (node.name || "").trim();
  if (!raw) return node.type === "TEXT" ? "Label" : layoutBase(node);

  if (node.type === "TEXT") return raw;

  if (isNumericFrameName(raw)) return layoutBase(node);
  if (isNumericGroupName(raw)) return "Icon Group";
  if (isNumericLineName(raw)) return "Divider";

  if (/^frame$/i.test(raw)) return layoutBase(node);
  if (/^group$/i.test(raw)) return "Icon Group";
  if (/^line$/i.test(raw)) return "Divider";

  if (/^default$/i.test(raw)) return "Control";
  if (/^inner$/i.test(raw)) return "Control Content";
  if (/^card$/i.test(raw)) return "Card";

  if (/\bframe\b/i.test(raw)) {
    const base = layoutBase(node);
    const cleaned = raw.replace(/\bframe\b/gi, base).replace(/\s+/g, " ").trim();
    return titleCase(cleaned);
  }

  return raw;
}

export function normalizeLibraryLayerNames(root: SceneNode): void {
  const visit = (node: SceneNode): void => {
    node.name = normalizeNodeName(node);
    if ("children" in node) {
      for (const child of node.children) {
        visit(child);
      }
    }
  };

  visit(root);
}

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

const ICON_PREFIXES = [
  "Notifications /",
  "AV /",
  "Logos /",
  "Navigation /",
  "Social /",
  "Arrows /",
  "Layout /",
  "Interface /",
  "Account /",
  "Action /",
  "Communication /",
  "Content /"
];

function isNumericFrameName(name: string): boolean {
  return /^frame[\s_-]*\d+$/i.test(name.trim());
}

function isNumericGroupName(name: string): boolean {
  return /^group[\s_-]*\d+$/i.test(name.trim());
}

function isNumericLineName(name: string): boolean {
  return /^line[\s_-]*\d+$/i.test(name.trim());
}

function getFirstSignificantText(node: SceneNode): string | null {
  if (node.type === "TEXT") return node.characters.trim();
  if ("children" in node) {
    for (const child of node.children) {
      const text = getFirstSignificantText(child);
      if (text && text.length > 1) return text;
    }
  }
  return null;
}

function getAllText(node: SceneNode): string[] {
  if (node.type === "TEXT") {
    const text = node.characters.trim();
    return text ? [text] : [];
  }

  if ("children" in node) {
    const out: string[] = [];
    for (const child of node.children) {
      out.push(...getAllText(child));
    }
    return out;
  }

  return [];
}

function hasDescendantName(node: SceneNode, pattern: RegExp): boolean {
  if (pattern.test((node.name || "").trim())) return true;
  if ("children" in node) {
    for (const child of node.children) {
      if (hasDescendantName(child, pattern)) return true;
    }
  }
  return false;
}

function normalizeAccordionLabel(input: string): string | null {
  const value = input.trim().toLowerCase();
  if (!value) return null;

  const normalized = value.replace(/\s+/g, " ");
  const accordionLabels: Record<string, string> = {
    "subject": "Subject",
    "subjects": "Subjects",
    "efi initiatives": "EFI Initiatives",
    "uefa initiative": "UEFA Initiative",
    "organisation": "Organisation",
    "organisations": "Organisations",
    "uploaded by": "Uploaded By",
    "my programs": "My Programs"
  };

  return accordionLabels[normalized] || null;
}

function deriveAccordionName(node: SceneNode): string | null {
  if (node.type !== "FRAME") return null;

  const nodeText = getAllText(node)
    .map(normalizeAccordionLabel)
    .find((value): value is string => Boolean(value));
  if (!nodeText) return null;

  const isHeaderLayout = node.layoutMode === "HORIZONTAL";
  const hasToggleGlyph = hasDescendantName(node, /(add|plus|minus|chevron|expand|collapse)/i);
  if (isHeaderLayout && hasToggleGlyph) {
    const expanded = hasDescendantName(node, /(minus|collapse)/i);
    return expanded ? `${nodeText} Expanded Accordion Header` : `${nodeText} Accordion Header`;
  }

  const hasOptionRows = hasDescendantName(node, /(option|checkbox)/i);
  if (node.layoutMode === "VERTICAL" && hasOptionRows) {
    return `${nodeText} Accordion Panel`;
  }

  return null;
}

function findIconName(node: SceneNode): string | null {
  const raw = (node.name || "").trim();
  for (const prefix of ICON_PREFIXES) {
    if (raw.startsWith(prefix)) {
      return raw.split("/").pop()?.trim() || null;
    }
  }
  if (/^icon$/i.test(raw)) return "Icon";

  if ("children" in node) {
    for (const child of node.children) {
      const found = findIconName(child);
      if (found) return found;
    }
  }
  return null;
}

function isCardLike(node: SceneNode): boolean {
  if (node.type !== "FRAME") return false;
  const hasShadow = node.effects && node.effects.length > 0 && node.effects.some(e => e.type === "DROP_SHADOW" || e.type === "INNER_SHADOW");
  const hasFill = Array.isArray(node.fills) && node.fills.length > 0;
  const hasPadding = node.paddingTop > 0 || node.paddingLeft > 0;
  const isLargeEnough = node.width > 120 && node.height > 60;
  return isLargeEnough && (hasShadow || (hasFill && hasPadding));
}

function deriveDescriptiveName(node: SceneNode): string | null {
  const accordionName = deriveAccordionName(node);
  if (accordionName) return accordionName;

  // 1. Check for Icons first
  const iconName = findIconName(node);
  if (iconName) {
    return `${titleCase(iconName)} Icon`;
  }

  // 2. Check for Text content
  const text = getFirstSignificantText(node);
  if (text) {
    let cleaned = text.split("\n")[0].trim();
    if (cleaned.length > 30) cleaned = cleaned.substring(0, 27) + "...";

    if (node.type === "FRAME") {
      const hasCornerRadius = "cornerRadius" in node && typeof node.cornerRadius === "number" && node.cornerRadius > 0;
      if (node.paddingTop > 0 && node.paddingLeft > 0 && hasCornerRadius && node.width < 200) {
        return `${titleCase(cleaned)} Tag`;
      }
      const base = layoutBase(node);
      return `${titleCase(cleaned)} ${base}`;
    }
    return titleCase(cleaned);
  }

  // 3. Check for Structural patterns
  if (isCardLike(node)) {
    return "Content Card";
  }

  return null;
}

function normalizeNodeName(node: SceneNode): string {
  const raw = (node.name || "").trim();

  const isGeneric = !raw ||
    isNumericFrameName(raw) ||
    isNumericGroupName(raw) ||
    /^frame$/i.test(raw) ||
    /^group$/i.test(raw);

  if (isGeneric) {
    DERIVE: {
      const derived = deriveDescriptiveName(node);
      if (derived) return derived;

      if (isNumericLineName(raw) || /^line$/i.test(raw)) return "Divider";
      if (isNumericGroupName(raw) || /^group$/i.test(raw)) return "Icon Group";

      return layoutBase(node);
    }
  }

  if (node.type === "TEXT") return raw;

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


// Accessibility Checker Tool
// Checks contrast ratio and determines layer order.

// Helpers for color manipulation
const getRGB = (color: RGB): number[] => [color.r, color.g, color.b];

const getLuminance = (r: number, g: number, b: number): number => {
    const a = [r, g, b].map((v) => {
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const getRate = (l1: number, l2: number): number => {
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
};

const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (color: RGB): string => {
    return "#" + toHex(color.r) + toHex(color.g) + toHex(color.b);
};

// --- Core Logic ---

function getSolidColor(node: SceneNode): RGB | null {
    if ("fills" in node && Array.isArray(node.fills)) {
        for (const fill of (node.fills as ReadonlyArray<Paint>)) {
            if (fill.type === "SOLID" && fill.visible !== false) {
                return fill.color;
            }
        }
    }
    return null;
}

function determineLayerOrder(nodes: SceneNode[]): { fg: SceneNode, bg: SceneNode } {
    // Heuristic: 
    // 1. Text is likely FG.
    // 2. Smaller element is likely FG (if contained within larger).
    // 3. Higher Z-index (in Figma children array) is FG. 

    const [n1, n2] = nodes;

    // Rule 1: Text vs Non-Text
    if (n1.type === "TEXT" && n2.type !== "TEXT") return { fg: n1, bg: n2 };
    if (n2.type === "TEXT" && n1.type !== "TEXT") return { fg: n2, bg: n1 };

    // Rule 2: Containment / Size
    const area1 = n1.width * n1.height;
    const area2 = n2.width * n2.height;

    if (area1 < area2) return { fg: n1, bg: n2 };
    if (area2 < area1) return { fg: n2, bg: n1 };

    // Fallback: visual position check? 
    // Let's assume n1 is FG for now if ambiguous, or maybe check parent index if shared parent.
    if (n1.parent === n2.parent && n1.parent) {
        const parent = n1.parent; // SceneNode & ChildrenMixin
        if ("children" in parent) { // check if it has children
            const idx1 = parent.children.indexOf(n1);
            const idx2 = parent.children.indexOf(n2);
            // In Figma's children array, higher index = higher z-index (on top)
            if (idx1 > idx2) return { fg: n1, bg: n2 };
        }
    }

    // If no other clues, assume selection order [0] is FG? 
    // Or just default.
    return { fg: n1, bg: n2 };
}

export async function runAccessibilityCheck(selection: readonly SceneNode[]) {
    if (selection.length === 0) {
        figma.notify("Select 1 text layer or 2 layers to check contrast.", { error: true });
        return;
    }

    let fgNode: SceneNode = selection[0];
    let bgNode: SceneNode = selection[0]; // dummy init

    // Helper to find first visible text node with fill
    const findTextNode = (node: SceneNode): TextNode | null => {
        if (node.type === "TEXT" && node.visible !== false) {
            if (getSolidColor(node)) return node;
        }
        if ("children" in node) {
            for (const child of node.children) {
                const found = findTextNode(child);
                if (found) return found;
            }
        }
        return null;
    };

    // Helper to check if node2 is visually behind node1 and overlaps it
    const isBehindAndOverlaps = (node1: SceneNode, node2: SceneNode): boolean => {
        // Simple bounding box check
        if (!node1.absoluteBoundingBox || !node2.absoluteBoundingBox) return false;
        const b1 = node1.absoluteBoundingBox;
        const b2 = node2.absoluteBoundingBox;

        const overlaps = !(b1.x + b1.width <= b2.x || b2.x + b2.width <= b1.x || b1.y + b1.height <= b2.y || b2.y + b2.height <= b1.y);
        return overlaps;
    };

    if (selection.length === 1) {
        let node = selection[0];

        // 1. Find Foreground (Text)
        if (node.type === "FRAME" || node.type === "INSTANCE" || node.type === "COMPONENT" || node.type === "GROUP") {
            const textInside = findTextNode(node);
            if (textInside) {
                fgNode = textInside;
                node = textInside; // Update current node to start search from
            } else {
                fgNode = node;
            }
        } else {
            fgNode = node;
        }

        // 2. Find Background
        // Traverse up the hierarchy. For each parent, check:
        // a) Sibling layers behind the current node that overlap
        // b) The parent's own fill

        let currentNode = fgNode;
        // Search limit to prevent infinite loops (though parent chain is finite)
        let foundBg = false;

        while (currentNode.parent && currentNode.parent.type !== "PAGE") {
            const parent = currentNode.parent;

            // Check siblings behind currentNode
            if ("children" in parent) {
                // In Figma, children[0] is top-most. 
                // So siblings "behind" have index > currentNode's index.
                const currentIndex = parent.children.indexOf(currentNode);
                for (let i = currentIndex + 1; i < parent.children.length; i++) {
                    const sibling = parent.children[i];
                    if (sibling.visible !== false) {
                        // Check if it has a solid fill
                        const fill = getSolidColor(sibling);
                        if (fill) {
                            // Check overlap with original FG node (not current node in traversal)
                            if (isBehindAndOverlaps(fgNode, sibling)) {
                                bgNode = sibling;
                                foundBg = true;
                                break;
                            }
                        }
                    }
                }
            }

            if (foundBg) break;

            // Check parent's own fill
            const parentFill = getSolidColor(parent as SceneNode);
            if (parentFill) {
                bgNode = parent as SceneNode;
                foundBg = true;
                break;
            }

            currentNode = parent as SceneNode;
        }

        if (!foundBg) {
            figma.notify("Selected element or its text child has no legible background.", { error: true });
            return;
        }

    } else if (selection.length === 2) {
        const order = determineLayerOrder([...selection]);
        fgNode = order.fg;
        bgNode = order.bg;
    } else {
        figma.notify("Please select max 2 layers.", { error: true });
        return;
    }

    // Calculate
    const fgColor = getSolidColor(fgNode);
    const bgColor = getSolidColor(bgNode);

    if (!fgColor || !bgColor) {
        figma.notify("Could not detect solid fills on selected layers.", { error: true });
        return;
    }

    const l1 = getLuminance(fgColor.r, fgColor.g, fgColor.b);
    const l2 = getLuminance(bgColor.r, bgColor.g, bgColor.b);
    const ratio = getRate(l1, l2);
    const roundedRatio = Math.round(ratio * 100) / 100;

    // Check Compliance
    // WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
    // WCAG 2.1 level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.

    const AA = ratio >= 4.5;
    const AA_Large = ratio >= 3.0;
    const AAA = ratio >= 7.0;
    const AAA_Large = ratio >= 4.5;

    // --- Generate Result Frame ---
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });

    const frame = figma.createFrame();
    frame.name = "Accessibility Report";
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = "AUTO"; // Hug height
    frame.counterAxisSizingMode = "AUTO"; // Hug width
    frame.paddingLeft = 24;
    frame.paddingRight = 24;
    frame.paddingTop = 24;
    frame.paddingBottom = 24;
    frame.itemSpacing = 16;
    frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    frame.effects = [{
        type: "DROP_SHADOW",
        color: { r: 0, g: 0, b: 0, a: 0.15 },
        offset: { x: 0, y: 4 },
        radius: 12,
        visible: true,
        blendMode: "NORMAL"
    }];
    frame.cornerRadius = 16;
    frame.strokeWeight = 1;
    frame.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }]; // Light grey border

    // Position near selection
    // Try to place it to the right of the foreground node
    if ("absoluteTransform" in fgNode) {
        frame.x = fgNode.absoluteTransform[0][2] + fgNode.width + 50;
        frame.y = fgNode.absoluteTransform[1][2];
    } else {
        frame.x = figma.viewport.center.x;
        frame.y = figma.viewport.center.y;
    }

    // Title
    const title = figma.createText();
    title.name = "Title";
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    title.characters = "Accessibility Result";
    title.fontSize = 16;
    title.fontName = { family: "Inter", style: "Bold" };
    title.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frame.appendChild(title);

    // Ratio Big Display
    const ratioRow = figma.createFrame();
    ratioRow.name = "Ratio Row";
    ratioRow.layoutMode = "HORIZONTAL";
    ratioRow.primaryAxisSizingMode = "AUTO"; // Hug
    ratioRow.counterAxisSizingMode = "AUTO"; // Hug
    ratioRow.counterAxisAlignItems = "CENTER";
    ratioRow.itemSpacing = 12;
    ratioRow.fills = []; // transparent

    const ratioText = figma.createText();
    ratioText.name = "Ratio Text";
    ratioText.characters = `${roundedRatio}:1`;
    ratioText.fontSize = 48;
    ratioText.fontName = { family: "Inter", style: "Bold" };
    // Red if fail AA (basic), Black if pass
    ratioText.fills = [{ type: "SOLID", color: roundedRatio < 3 ? { r: 0.8, g: 0.2, b: 0.2 } : { r: 0, g: 0, b: 0 } }];
    ratioRow.appendChild(ratioText);
    frame.appendChild(ratioRow);

    // Status List Container
    const statusContainer = figma.createFrame();
    statusContainer.name = "Status List";
    statusContainer.layoutMode = "VERTICAL";
    statusContainer.primaryAxisSizingMode = "AUTO"; // Hug
    statusContainer.counterAxisSizingMode = "AUTO"; // Hug
    statusContainer.itemSpacing = 8;
    statusContainer.fills = [];

    const addStatusRow = (label: string, pass: boolean, subLabel: string = "") => {
        const row = figma.createFrame();
        row.name = `Status Row: ${label}`;
        row.layoutMode = "HORIZONTAL";
        row.primaryAxisSizingMode = "AUTO"; // Hug
        row.counterAxisSizingMode = "AUTO"; // Hug
        row.counterAxisAlignItems = "CENTER";
        row.itemSpacing = 8;
        row.fills = [];

        const badge = figma.createEllipse();
        badge.name = "Badge";
        badge.resize(10, 10);
        badge.fills = [{ type: "SOLID", color: pass ? { r: 0.1, g: 0.7, b: 0.3 } : { r: 0.9, g: 0.2, b: 0.2 } }]; // Green / Red

        const text = figma.createText();
        text.name = "Label";
        text.characters = `${label} ${pass ? "PASS" : "FAIL"}`;
        text.fontSize = 12;
        text.fontName = { family: "Inter", style: pass ? "Bold" : "Regular" }; // Bold on pass
        text.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

        row.appendChild(badge);
        row.appendChild(text);

        if (subLabel) {
            const sub = figma.createText();
            sub.name = "Sub Label";
            sub.characters = subLabel;
            sub.fontSize = 10;
            sub.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
            row.appendChild(sub);
        }

        statusContainer.appendChild(row);
    };

    addStatusRow("AA Normal", AA, "(4.5+)");
    addStatusRow("AA Large", AA_Large, "(3.0+)");
    addStatusRow("AAA Normal", AAA, "(7.0+)");
    addStatusRow("AAA Large", AAA_Large, "(4.5+)");

    frame.appendChild(statusContainer);

    // Info Divider
    const divider = figma.createRectangle();
    divider.name = "Divider";
    divider.resize(10, 1); // small default width, rely on stretch
    divider.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
    divider.layoutAlign = "STRETCH";
    frame.appendChild(divider);

    // Color Swatches Breakdown
    const addSwatch = (label: string, color: RGB, name: string) => {
        const row = figma.createFrame();
        row.name = `Swatch: ${label}`;
        row.layoutMode = "HORIZONTAL";
        row.primaryAxisSizingMode = "AUTO"; // Hug
        row.counterAxisSizingMode = "AUTO"; // Hug
        row.counterAxisAlignItems = "CENTER";
        row.itemSpacing = 8;
        row.fills = [];

        // Color Box
        const swatch = figma.createRectangle();
        swatch.name = "Color Sample";
        swatch.resize(16, 16);
        swatch.cornerRadius = 4;
        swatch.fills = [{ type: "SOLID", color: color }];
        swatch.strokes = [{ type: "SOLID", color: { r: 0.8, g: 0.8, b: 0.8 } }]; // slight border for light colors
        swatch.strokeWeight = 1;

        // Label
        const info = figma.createText();
        info.name = "Info";
        info.characters = `${label}:`;
        info.fontSize = 11;
        info.fontName = { family: "Inter", style: "Bold" };
        info.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];

        // Hex
        const hex = figma.createText();
        hex.name = "Hex Value";
        hex.characters = rgbToHex(color).toUpperCase();
        hex.fontSize = 11;
        hex.fontName = { family: "Inter", style: "Regular" };
        hex.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];

        // Node Name
        const nodeName = figma.createText();
        nodeName.name = "Node Name";
        nodeName.characters = `(${name})`;
        nodeName.fontSize = 10;
        nodeName.fills = [{ type: "SOLID", color: { r: 0.6, g: 0.6, b: 0.6 } }];

        row.appendChild(swatch);
        row.appendChild(info);
        row.appendChild(hex);
        row.appendChild(nodeName);
        frame.appendChild(row);
    };

    addSwatch("FG", fgColor, fgNode.name);
    addSwatch("BG", bgColor, bgNode.name);

    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);
    figma.notify(`Accessibility Check: ${roundedRatio}:1`);
}

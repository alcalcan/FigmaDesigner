
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

    // Helper to find ALL visible text nodes with fill
    const findAllTextNodes = (node: SceneNode): TextNode[] => {
        let results: TextNode[] = [];
        if (node.type === "TEXT" && node.visible !== false) {
            if (getSolidColor(node)) results.push(node);
        }
        if ("children" in node) {
            for (const child of node.children) {
                results = results.concat(findAllTextNodes(child));
            }
        }
        return results;
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

    // Helper: Find effective background for a specific text node
    const findBackgroundFor = (textNode: SceneNode): SceneNode | null => {
        let currentNode: SceneNode = textNode;
        let foundBg = false;
        let bgNode: SceneNode | null = null;

        while (currentNode.parent && currentNode.parent.type !== "PAGE") {
            const parent = currentNode.parent;

            // Check siblings behind currentNode
            if ("children" in parent) {
                const currentIndex = parent.children.indexOf(currentNode);
                for (let i = currentIndex + 1; i < parent.children.length; i++) {
                    const sibling = parent.children[i];
                    if (sibling.visible !== false) {
                        const fill = getSolidColor(sibling);
                        if (fill) {
                            if (isBehindAndOverlaps(textNode, sibling)) {
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
        return bgNode;
    };

    // --- Execution ---

    let itemsToCheck: { fg: SceneNode, bg: SceneNode }[] = [];

    if (selection.length === 1) {
        const node = selection[0];

        // Strategy: Scan for all text nodes
        if (node.type === "FRAME" || node.type === "INSTANCE" || node.type === "COMPONENT" || node.type === "GROUP") {
            const allText = findAllTextNodes(node);

            if (allText.length === 0) {
                // Fallback: Check the node itself (maybe it's a shape)
                // Cast hack, finding logic works for any node, but findBackgroundFor expects TextNode
                const bg = findBackgroundFor(node);
                if (bg) itemsToCheck.push({ fg: node, bg });
            } else {
                // Check each found text node
                for (const text of allText) {
                    const bg = findBackgroundFor(text);
                    if (bg) {
                        itemsToCheck.push({ fg: text, bg });
                    } else {
                        // warning?
                    }
                }
            }
        } else {
            // Single leaf node (Text or Shape)
            const bg = findBackgroundFor(node);
            if (bg) itemsToCheck.push({ fg: node, bg });
        }

        if (itemsToCheck.length === 0) {
            figma.notify("No valid foreground/background pairs found to check.", { error: true });
            return;
        }

    } else if (selection.length === 2) {
        const order = determineLayerOrder([...selection]);
        itemsToCheck.push({ fg: order.fg, bg: order.bg });
    } else {
        figma.notify("Please select 1 component/frame to scan, or 2 explicit layers.", { error: true });
        return;
    }

    // --- Generate Report ---
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
    frame.itemSpacing = 24; // Increased spacing between sections
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
    frame.strokes = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];

    // Position
    const mainRef = selection[0];
    if ("absoluteTransform" in mainRef) {
        frame.x = mainRef.absoluteTransform[0][2] + mainRef.width + 50;
        frame.y = mainRef.absoluteTransform[1][2];
    } else {
        frame.x = figma.viewport.center.x;
        frame.y = figma.viewport.center.y;
    }

    // Main Title
    const mainTitle = figma.createText();
    mainTitle.name = "Report Title";
    mainTitle.characters = "Accessibility Report";
    mainTitle.fontSize = 20;
    mainTitle.fontName = { family: "Inter", style: "Bold" };
    mainTitle.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frame.appendChild(mainTitle);

    // Iterate Results
    for (const item of itemsToCheck) {
        const fgColor = getSolidColor(item.fg);
        const bgColor = getSolidColor(item.bg);

        if (!fgColor || !bgColor) continue;

        const l1 = getLuminance(fgColor.r, fgColor.g, fgColor.b);
        const l2 = getLuminance(bgColor.r, bgColor.g, bgColor.b);
        const ratio = getRate(l1, l2);
        const roundedRatio = Math.round(ratio * 100) / 100;

        const AA = ratio >= 4.5;
        const AA_Large = ratio >= 3.0;
        const AAA = ratio >= 7.0;
        const AAA_Large = ratio >= 4.5; // AAA for large text is 4.5:1

        // --- Item Container (Card Style) ---
        const itemFrame = figma.createFrame();
        itemFrame.name = `Report: ${item.fg.name}`;
        itemFrame.layoutMode = "VERTICAL";
        itemFrame.primaryAxisSizingMode = "AUTO"; // Hug
        itemFrame.counterAxisSizingMode = "AUTO"; // Hug
        itemFrame.itemSpacing = 16;
        itemFrame.fills = [];

        // 1. Element Name (Header)
        const nameHeader = figma.createText();
        nameHeader.name = "Element Name";
        nameHeader.characters = item.fg.type === "TEXT" ? `Text: "${(item.fg as TextNode).characters.substring(0, 15)}${(item.fg as TextNode).characters.length > 15 ? "..." : ""}"` : item.fg.name;
        nameHeader.fontSize = 12;
        nameHeader.fontName = { family: "Inter", style: "Bold" };
        nameHeader.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
        itemFrame.appendChild(nameHeader);

        // 2. Big Ratio Display
        const ratioRow = figma.createFrame();
        ratioRow.name = "Ratio Row";
        ratioRow.layoutMode = "HORIZONTAL";
        ratioRow.primaryAxisSizingMode = "AUTO"; // Hug
        ratioRow.counterAxisSizingMode = "AUTO"; // Hug
        ratioRow.counterAxisAlignItems = "CENTER";
        ratioRow.itemSpacing = 12;
        ratioRow.fills = [];

        const ratioText = figma.createText();
        ratioText.name = "Ratio Text";
        ratioText.characters = `${roundedRatio}:1`;
        ratioText.fontSize = 48;
        ratioText.fontName = { family: "Inter", style: "Bold" };
        // Red if fail AA (basic), Black if pass
        ratioText.fills = [{ type: "SOLID", color: roundedRatio < 3 ? { r: 0.8, g: 0.2, b: 0.2 } : { r: 0, g: 0, b: 0 } }];
        ratioRow.appendChild(ratioText);
        itemFrame.appendChild(ratioRow);

        // 3. Status List (Vertical)
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
            badge.fills = [{ type: "SOLID", color: pass ? { r: 0.1, g: 0.7, b: 0.3 } : { r: 0.9, g: 0.2, b: 0.2 } }];

            const text = figma.createText();
            text.name = "Label";
            text.characters = `${label} ${pass ? "PASS" : "FAIL"}`;
            text.fontSize = 12;
            text.fontName = { family: "Inter", style: pass ? "Bold" : "Regular" };
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

        itemFrame.appendChild(statusContainer);

        // 4. Separator Line (Thin)
        const line = figma.createRectangle();
        line.name = "Line";
        line.resize(100, 1); // Width will be hugged by parent if we set parent to Hug? No, Divider needs specific width or Stretch. 
        // We will set layoutAlign STRETCH on the Report Frame later if needed, but for now let's use a fixed small width or just allow it to sit there.
        // Actually, let's make it match the content width or just be a visual separator.
        // Since we are forcing "Hug" on everything, a fixed width line might force the container width. 
        // Let's use a standard width of 200 for the line to ensure the card has some minimum width.
        line.resize(240, 1);
        line.layoutAlign = "INHERIT";
        line.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }];
        itemFrame.appendChild(line);

        // 5. Swatches (Detailed)
        const addSwatch = (label: string, color: RGB, name: string) => {
            const row = figma.createFrame();
            row.name = `Swatch: ${label}`;
            row.layoutMode = "HORIZONTAL";
            row.primaryAxisSizingMode = "AUTO"; // Hug
            row.counterAxisSizingMode = "AUTO"; // Hug
            row.counterAxisAlignItems = "CENTER";
            row.itemSpacing = 8;
            row.fills = [];

            const swatch = figma.createRectangle();
            swatch.resize(16, 16);
            swatch.cornerRadius = 4;
            swatch.fills = [{ type: "SOLID", color: color }];
            swatch.strokes = [{ type: "SOLID", color: { r: 0.8, g: 0.8, b: 0.8 } }];
            swatch.strokeWeight = 1;

            const info = figma.createText();
            info.characters = `${label}:`;
            info.fontSize = 11;
            info.fontName = { family: "Inter", style: "Bold" };
            info.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];

            const hex = figma.createText();
            hex.characters = rgbToHex(color).toUpperCase();
            hex.fontSize = 11;
            hex.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];

            const nodeName = figma.createText();
            nodeName.characters = `(${name})`;
            nodeName.fontSize = 10;
            nodeName.fills = [{ type: "SOLID", color: { r: 0.6, g: 0.6, b: 0.6 } }];

            row.appendChild(swatch);
            row.appendChild(info);
            row.appendChild(hex);
            row.appendChild(nodeName);
            itemFrame.appendChild(row);
        };

        addSwatch("FG", fgColor, item.fg.name);
        addSwatch("BG", bgColor, item.bg.name);

        frame.appendChild(itemFrame);

        // Main Divider (if not last)
        if (itemsToCheck.indexOf(item) !== itemsToCheck.length - 1) {
            const mainDiv = figma.createRectangle();
            mainDiv.name = "Item Divider";
            mainDiv.resize(280, 2); // Thicker divider between distinct items
            mainDiv.fills = [{ type: "SOLID", color: { r: 0.95, g: 0.95, b: 0.95 } }];
            frame.appendChild(mainDiv);
        }
    }

    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);
    figma.notify(`Analyzed ${itemsToCheck.length} element(s).`);
}

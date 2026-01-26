import * as fs from 'fs';
import * as path from 'path';

// --- Serializer Logic ---

export class CompactSerializer {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static serialize(obj: any, indentLevel: number): string {
        if (obj === null || obj === undefined) return 'null';

        // Handle Code Marker
        if (obj.__code) {
            return obj.__code;
        }

        if (typeof obj !== 'object') return JSON.stringify(obj);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const indent = "  ".repeat(indentLevel);
        const nextIndent = "  ".repeat(indentLevel + 1);

        // --- Aggressive Inline Handlers ---

        // 1. Primitive Arrays were handled, but let's handle Matrix (Array of Arrays)
        // e.g. relativeTransform: [[1,0,0],[0,1,0]]
        if (Array.isArray(obj)) {
            const isMatrix = obj.every(row => Array.isArray(row) && row.every((x: any) => typeof x === 'number'));
            if (isMatrix && obj.length <= 4) {
                const flatStr = JSON.stringify(obj);
                if (flatStr.length < 80) return flatStr.split(',').join(', ');
            }
            // Fallback for previous primitive array logic
            const isPrimitiveArray = obj.every(x => typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean');
            if (isPrimitiveArray && obj.length <= 6 && JSON.stringify(obj).length < 60) {
                return `[ ${obj.map((x: any) => JSON.stringify(x)).join(', ')} ]`;
            }

            if (obj.length === 0) return '[]';

            // Standard Array Multiline
            const items = obj.map(item => CompactSerializer.serialize(item, indentLevel + 1));
            const joined = items.join(`,\n${nextIndent}`);
            return `[\n${nextIndent}${joined}\n${indent}]`;
        }

        // 2. Small Objects (Color, Font, LetterSpacing, etc.)
        // Heuristic: Few keys, all primitive values
        const values = Object.values(obj);
        const isSimpleObject = values.every(v => typeof v !== 'object' || v === null);

        // Define groups to compact
        const compactGroups = [
            // Visual State
            ["visible", "opacity", "locked", "blendMode", "type"],
            // Masking
            ["isMask", "maskType", "clipsContent"],

            // Auto Layout Base
            ["layoutMode", "itemSpacing", "itemReverseZIndex", "strokesIncludedInLayout"],
            // Padding
            ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
            // Sizing
            ["primaryAxisSizingMode", "counterAxisSizingMode"],
            // Alignment
            ["primaryAxisAlignItems", "counterAxisAlignItems"],

            // Strokes
            ["strokeWeight", "strokeAlign", "strokeCap", "strokeJoin", "strokeMiterLimit"],
            ["strokeTopWeight", "strokeRightWeight", "strokeBottomWeight", "strokeLeftWeight"],

            // Constraints & Layout Props
            ["layoutAlign", "layoutGrow"],
            ["parentIsAutoLayout", "layoutPositioning"],

            // Text Props
            ["characters", "fontSize"],
            ["textCase", "textDecoration"],
            ["textAlignHorizontal", "textAlignVertical", "textAutoResize"],
            ["paragraphSpacing", "paragraphIndent"],

            // Dimensions / Pos
            ["width", "height"],
            ["x", "y"],
            // Font
            ["family", "style"],
            // Unit Value
            ["unit", "value"],
            // RGB
            ["r", "g", "b"]
        ];

        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';

        if (isSimpleObject && keys.length <= 4) {
            const inlineStr = `{ ${keys.map(k => `"${k}": ${JSON.stringify(obj[k])}`).join(', ')} }`;
            if (inlineStr.length < 100) return inlineStr; // Allow slightly longer for inline objects
        }

        const lines: string[] = [];
        const processedKeys = new Set<string>();

        // 1. Process Compact Groups
        for (const group of compactGroups) {
            const keysInGroup = group.filter(k => keys.includes(k));
            if (keysInGroup.length > 1) { // Only group if we have at least 2
                const groupParts = keysInGroup.map(k => {
                    processedKeys.add(k);
                    return `"${k}": ${CompactSerializer.serialize(obj[k], 0)}`; // 0 indent because inline
                });
                lines.push(`${nextIndent}${groupParts.join(', ')}`);
            }
        }

        // 2. Process Remaining Keys
        for (const key of keys) {
            if (processedKeys.has(key)) continue;

            const val = obj[key];
            lines.push(`${nextIndent}"${key}": ${CompactSerializer.serialize(val, indentLevel + 1)}`);
        }

        return `{\n${lines.join(',\n')}\n${indent}}`;
    }
}

// --- Compactor Tool ---

// Minimal NodeDefinition interface not strictly needed as we handle via regex/parsing


export class CompactStructure {
    public compact(filePath: string) {
        console.log(`🚀 [Compactor] Processing: ${path.basename(filePath)}`);
        if (!fs.existsSync(filePath)) {
            console.error(`❌ File not found: ${filePath}`);
            return;
        }

        const content = fs.readFileSync(filePath, 'utf8');

        // Find the structure definition
        // const structure: NodeDefinition = { ...
        const startRegex = /const\s+(\w+)\s*:\s*NodeDefinition\s*=\s*\{/;
        const match = content.match(startRegex);

        if (!match || match.index === undefined) {
            console.error("❌ Could not find 'const structure: NodeDefinition = {'");
            return;
        }

        const startIndex = match.index + match[0].length - 1; // Point to the '{'

        // Find end using brace counting
        let braceCount = 0;
        let endIndex = -1;
        let inString = false;
        let stringChar = '';

        for (let i = startIndex; i < content.length; i++) {
            const char = content[i];
            const prevChar = i > 0 ? content[i - 1] : '';

            if (inString) {
                if (char === stringChar && prevChar !== '\\') {
                    inString = false;
                }
                continue;
            }

            if (char === '"' || char === "'" || char === '`') {
                inString = true;
                stringChar = char;
                continue;
            }

            if (char === '{') {
                braceCount++;
            } else if (char === '}') {
                braceCount--;
                if (braceCount === 0) {
                    endIndex = i + 1; // Include the closing brace
                    break;
                }
            }
        }

        if (endIndex === -1) {
            console.error("❌ Could not find end of structure object.");
            return;
        }

        const objectString = content.substring(startIndex, endIndex);

        // Prepare for evaluation
        // We need to handle identifiers like SVG_assets_... that are variable references.
        // Strategy: Replace identifier-looking tokens that are NOT property keys with a string placeholder.
        // But doing that robustly is hard without a parser.

        // Alternative: Mock the context.
        // Find all used identifiers in the string?
        // Let's try to mock the specific SVG vars if possible, or use a Proxy?
        // `eval` is dangerous and hard if vars are missing.

        // Better Strategy: RegExp replacement to quote identifiers?
        // `svgContent: SVG_...` -> `svgContent: "###VAR###SVG_..."`

        // Regex to find values that are variables:
        // Key: Value
        // Value can be Identifier.
        // We can look for `SVG_[\w_]+` and quote it temporarily.

        const svgVarRegex = /(SVG_[\w_]+)/g;
        // We need to match it when it is a VALUE, not part of a string.
        // But since standard JSON doesn't have bare identifiers, and our structure only has them for assets...
        // We can blindly replace `SVG...` with `"__VAR__SVG..."` IF it's not already in quotes?
        // Wait, if I replace `SVG_foo` with `"SVG_foo"`, then I parse it, I get a string.
        // Then I serialize it, I get `"SVG_foo"`.
        // Then I need to unquote it.

        // Let's try: Replace all `SVG_...` occurrences that are NOT preceded by a quote.
        // (Assuming no variables in strings for now, or rare).

        const placeholderPrefix = "__VAR__";
        // Negative lookbehind for quote? JS supports it now.
        // `(?<!["'])SVG_`

        let evalStr = objectString.replace(/(?<!["'])(SVG_[\w_]+)/g, `"${placeholderPrefix}$1"`);

        // Also handle `ComponentProps` or other types? 
        // Usually structure is JSON + variables.

        let structObj: any;
        try {
            // Use Function constructor to evaluate object literal
            // We wrap it in parens to ensure it evaluates as expression
            const func = new Function(`return (${evalStr});`);
            structObj = func();
        } catch (e) {
            console.error("❌ Failed to parse structure object.", e);
            console.log("Context:", evalStr);
            return;
        }

        // Serialize
        let newString = CompactSerializer.serialize(structObj, 2); // Start at indent 2 (inside function body usually)

        // Restore Variables
        // Replace `"__VAR__SVG..."` with `SVG...`
        const restoreRegex = new RegExp(`"${placeholderPrefix}(SVG_[\\w_]+)"`, 'g');
        newString = newString.replace(restoreRegex, '$1');

        // Adjust Indentation
        // The file usually has `const structure...` at indentation 8 or something.
        // We want the Start of the string to match? 
        // `CompactSerializer` returns block starting with `{`.
        // We put it where the old `{` was.
        // But the first line of `newString` is `{`.
        // Subsequent lines use `  ` indent.
        // We might want to respect file indentation.
        // For now, let's assume standard 4-space or 2-space project indent.

        // Project seems to use 2 or 4 spaces?
        // chip_expand.ts uses 4 spaces (or 2?)
        // Let's check original content indent of the line with `const structure`
        const lineStart = content.lastIndexOf('\n', startIndex) + 1;
        const linePrefix = content.substring(lineStart, startIndex);
        const indentMatch = linePrefix.match(/^\s*/);
        const baseIndent = indentMatch ? indentMatch[0] : '';

        // CompactSerializer uses 2-space indent levels.
        // If we want deeper indent, we should pass higher indent level?
        // Level 2 = 4 spaces.
        // If baseIndent is 8 spaces (inside class inside method), that is Level 4?

        // Let's guess:
        // `    async create...` -> indent 4
        // `        const structure...` -> indent 8
        // So indentLevel should be 4? (4 * 2 = 8 spaces).

        // Let's re-serialize with correct level if we can detect it.
        const indentLevel = Math.floor(baseIndent.length / 2);

        newString = CompactSerializer.serialize(structObj, indentLevel);

        // Restore vars again since we re-serialized
        newString = newString.replace(restoreRegex, '$1');

        // Replace in content
        const newContent = content.substring(0, startIndex) + newString + content.substring(endIndex);

        fs.writeFileSync(filePath, newContent);
        console.log(`✅ Compacted ${path.basename(filePath)}`);
    }
}

if (require.main === module) {
    const filePath = process.argv[2];
    if (filePath) {
        new CompactStructure().compact(filePath);
    } else {
        console.log("Usage: ts-node CompactStructure.ts <file>");
    }
}

import * as fs from 'fs';
import * as path from 'path';

// --- Serializer Logic ---

export class CompactSerializer {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static serialize(obj: any, indentLevel: number): string {
        if (obj === null || obj === undefined) return 'null';

        if (typeof obj !== 'object') return JSON.stringify(obj);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const indent = "  ".repeat(indentLevel);
        const nextIndent = "  ".repeat(indentLevel + 1);

        // --- Aggressive Inline Handlers ---

        if (Array.isArray(obj)) {
            const isMatrix = obj.every(row => Array.isArray(row) && row.every((x: any) => typeof x === 'number'));
            if (isMatrix && obj.length <= 4) {
                const flatStr = JSON.stringify(obj);
                if (flatStr.length < 80) return flatStr.split(',').join(', ');
            }
            const isPrimitiveArray = obj.every(x => typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean');
            if (isPrimitiveArray && obj.length <= 6 && JSON.stringify(obj).length < 60) {
                return `[ ${obj.map((x: any) => JSON.stringify(x)).join(', ')} ]`;
            }

            if (obj.length === 0) return '[]';

            const items = obj.map(item => CompactSerializer.serialize(item, indentLevel + 1));
            const joined = items.join(`,\n${nextIndent}`);
            return `[\n${nextIndent}${joined}\n${indent}]`;
        }

        const values = Object.values(obj);
        const isSimpleObject = values.every(v => typeof v !== 'object' || v === null);

        const compactGroups = [
            ["visible", "opacity", "locked", "blendMode", "type"],
            ["isMask", "maskType", "clipsContent"],
            ["layoutMode", "itemSpacing", "itemReverseZIndex", "strokesIncludedInLayout"],
            ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
            ["primaryAxisSizingMode", "counterAxisSizingMode"],
            ["primaryAxisAlignItems", "counterAxisAlignItems"],
            ["strokeWeight", "strokeAlign", "strokeCap", "strokeJoin", "strokeMiterLimit"],
            ["strokeTopWeight", "strokeRightWeight", "strokeBottomWeight", "strokeLeftWeight"],
            ["layoutAlign", "layoutGrow"],
            ["parentIsAutoLayout", "layoutPositioning"],
            ["characters", "fontSize"],
            ["textCase", "textDecoration"],
            ["textAlignHorizontal", "textAlignVertical", "textAutoResize"],
            ["paragraphSpacing", "paragraphIndent"],
            ["width", "height"],
            ["x", "y"],
            ["family", "style"],
            ["unit", "value"],
            ["r", "g", "b"]
        ];

        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';

        if (isSimpleObject && keys.length <= 4) {
            const inlineStr = `{ ${keys.map(k => `"${k}": ${JSON.stringify(obj[k])}`).join(', ')} }`;
            if (inlineStr.length < 100) return inlineStr;
        }

        const lines: string[] = [];
        const processedKeys = new Set<string>();

        for (const group of compactGroups) {
            const keysInGroup = group.filter(k => keys.includes(k));
            if (keysInGroup.length > 1) {
                const groupParts = keysInGroup.map(k => {
                    processedKeys.add(k);
                    return `"${k}": ${CompactSerializer.serialize(obj[k], 0)}`;
                });
                lines.push(`${nextIndent}${groupParts.join(', ')}`);
            }
        }

        for (const key of keys) {
            if (processedKeys.has(key)) continue;
            const val = obj[key];
            lines.push(`${nextIndent}"${key}": ${CompactSerializer.serialize(val, indentLevel + 1)}`);
        }

        return `{\n${lines.join(',\n')}\n${indent}}`;
    }
}

// --- Compactor Tool ---

export class CompactStructure {
    public compact(filePath: string) {
        console.log(`🚀 [Compactor] Processing: ${path.basename(filePath)}`);
        if (!fs.existsSync(filePath)) {
            console.error(`❌ File not found: ${filePath}`);
            return;
        }

        const content = fs.readFileSync(filePath, 'utf8');

        // Find the structure definition
        const startRegex = /const\s+(\w+)\s*:\s*\w*NodeDefinition\s*=\s*\{/;
        const match = content.match(startRegex);

        if (!match || match.index === undefined) {
            console.error("❌ Could not find structure definition (NodeDefinition)");
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
                if (char === stringChar && prevChar !== '\\') inString = false;
                continue;
            }
            if (char === '"' || char === "'" || char === '`') {
                inString = true;
                stringChar = char;
                continue;
            }

            if (char === '{') braceCount++;
            else if (char === '}') {
                braceCount--;
                if (braceCount === 0) {
                    endIndex = i + 1;
                    break;
                }
            }
        }

        if (endIndex === -1) {
            console.error("❌ Could not find end of structure object.");
            return;
        }

        const objectString = content.substring(startIndex, endIndex);

        // --- Robust Expression Protection ---
        const expressions: string[] = [];
        const placeholderPrefix = "__VAR__";
        const exprPlaceholderPrefix = "__EXPR_VAR__";

        // 1. Protect SVG Variables
        let evalStr = objectString.replace(/(?<!["'])(SVG_[\w_]+)/g, `"${placeholderPrefix}$1"`);

        // 2. Protect Complex Expressions
        const outputParts: string[] = [];
        let lastPos = 0;
        let pos = 0;

        while (pos < evalStr.length) {
            const colonMatch = evalStr.indexOf(': ', pos);
            if (colonMatch === -1) break;

            outputParts.push(evalStr.substring(lastPos, colonMatch + 2));
            pos = colonMatch + 2;

            // Check if what follows is a JSON primitive or a nested structure
            const firstChar = evalStr[pos];
            if (firstChar === '{' || firstChar === '[' || firstChar === '"' || (firstChar >= '0' && firstChar <= '9') || firstChar === '-') {
                lastPos = pos;
                continue;
            }

            // It's likely an expression - capture until next delimiter
            let bCount = 0; // Brace count
            let pCount = 0; // Paren count
            let sqCount = 0; // Square bracket count
            let exprPos = pos;
            let capturedExpr = '';

            while (exprPos < evalStr.length) {
                const char = evalStr[exprPos];
                if (char === '{') bCount++;
                else if (char === '}') {
                    if (bCount === 0) break;
                    bCount--;
                }
                else if (char === '(') pCount++;
                else if (char === ')') pCount--;
                else if (char === '[') sqCount++;
                else if (char === ']') sqCount--;
                else if (char === ',' && bCount === 0 && pCount === 0 && sqCount === 0) break;

                capturedExpr += char;
                exprPos++;
            }

            const trimmedExpr = capturedExpr.trim();
            if (trimmedExpr === 'true' || trimmedExpr === 'false' || trimmedExpr === 'null') {
                outputParts.push(capturedExpr);
            } else {
                const index = expressions.length;
                expressions.push(trimmedExpr);
                outputParts.push(`"${exprPlaceholderPrefix}${index}"`);
            }

            lastPos = exprPos;
            pos = exprPos;
        }
        outputParts.push(evalStr.substring(lastPos));
        evalStr = outputParts.join('');

        // 3. Evaluate the (now temporary JSON) object
        let structObj: any;
        try {
            const func = new Function(`return (${evalStr});`);
            structObj = func();
        } catch (e) {
            console.error("❌ Failed to parse structure object.", e);
            console.log("Context:", evalStr);
            return;
        }

        // Detect Indentation
        const lineStart = content.lastIndexOf('\n', startIndex) + 1;
        const linePrefix = content.substring(lineStart, startIndex);
        const indentMatch = linePrefix.match(/^\s*/);
        const baseIndent = indentMatch ? indentMatch[0] : '';
        const indentLevel = Math.floor(baseIndent.length / 2);

        // 4. Serialize back
        let newString = CompactSerializer.serialize(structObj, indentLevel);

        // 5. Restore Protected Expressions and SVG Variables
        newString = newString.replace(new RegExp(`"${placeholderPrefix}(SVG_[\\w_]+)"`, 'g'), '$1');

        const restoreExprRegex = new RegExp(`"${exprPlaceholderPrefix}(\\d+)"`, 'g');
        newString = newString.replace(restoreExprRegex, (match, index) => {
            return expressions[parseInt(index)];
        });

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

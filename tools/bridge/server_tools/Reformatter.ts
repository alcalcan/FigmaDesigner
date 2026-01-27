import * as fs from 'fs';
import * as path from 'path';

export class Reformatter {
    public reformat(filePath: string) {
        console.log(`Formatting: ${filePath}`);
        const content = fs.readFileSync(filePath, 'utf8');

        // Extract the JSON object
        const regex = /const structure: NodeDefinition = (\{[\s\S]*?\});/;
        const match = content.match(regex);

        if (!match) {
            console.error("Could not find structure definition");
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let jsonStr = match[1];

        // --- PROACTIVE FIX: Handle variable references like SVG_... ---
        // Replace unquoted variables (e.g., SVG_search_icon) with a placeholder string
        // so new Function() doesn't throw ReferenceError
        const varPlaceholderRegex = /:\s*([A-Za-z_][A-Za-z0-9_]*)(?=[,}\s])/g;
        jsonStr = jsonStr.replace(varPlaceholderRegex, (match, p1) => {
            if (['true', 'false', 'null'].includes(p1)) return match;
            return `: "__REF__${p1}"`;
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let def: any;
        try {
            def = new Function("return " + jsonStr)();
        } catch (e) {
            console.error("Failed to parse definition object", e);
            return;
        }

        let newJson = this.serialize(def, 2);

        // Restore variable references
        newJson = newJson.replace(/"__REF__([A-Za-z_][A-Za-z0-9_]*)"/g, '$1');

        const newContent = content.replace(regex, `const structure: NodeDefinition = ${newJson};`);
        fs.writeFileSync(filePath, newContent);
        console.log("Done.");
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private serialize(obj: any, indentLevel: number): string {
        if (obj === null || obj === undefined) return 'null';
        if (typeof obj !== 'object') return JSON.stringify(obj);

        const indent = "  ".repeat(indentLevel);
        const nextIndent = "  ".repeat(indentLevel + 1);

        if (Array.isArray(obj)) {
            if (obj.length === 0) return '[]';

            // Check if it's a "simple" array (e.g. number array or very short string array)
            const allSimple = obj.every(item => typeof item !== 'object' || item === null);
            if (allSimple && JSON.stringify(obj).length < 80) {
                return JSON.stringify(obj);
            }

            const items = obj.map(item => this.serialize(item, indentLevel + 1)).join(`,\n${nextIndent}`);
            return `[\n${nextIndent}${items}\n${indent}]`;
        }

        // Object
        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';

        // COMPACTION LOGIC: Check if this entire object should be on one line
        const compactKeys = ['props', 'layoutProps', 'fills', 'strokes', 'effects', 'color', 'offset', 'vectorPaths', 'font', 'relativeTransform'];

        // If the object is "simple" (small total length) or contains mostly simple values, compact it
        const jsonLine = JSON.stringify(obj);
        if (jsonLine.length < 100) {
            return jsonLine;
        }

        const lines = keys.map(key => {
            const val = obj[key];

            // Special treatment for svgContent: Always keep it on one line if it's a string or ref
            if (key === 'svgContent') {
                return `${nextIndent}"${key}": ${JSON.stringify(val)}`;
            }

            // If the key is in our compact list, force it to one line
            if (compactKeys.includes(key)) {
                return `${nextIndent}"${key}": ${JSON.stringify(val)}`;
            }

            // Recursive serialization
            return `${nextIndent}"${key}": ${this.serialize(val, indentLevel + 1)}`;
        });

        return `{\n${lines.join(',\n')}\n${indent}}`;
    }
}

if (require.main === module) {
    const filePath = process.argv[2];
    if (filePath) {
        new Reformatter().reformat(filePath);
    }
}

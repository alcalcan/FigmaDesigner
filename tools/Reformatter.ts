import * as fs from 'fs';
// import * as path from 'path';

// Types (mocked for parsing)
// import { NodeDefinition } from '../components/BaseComponent';
// interface NodeDefinition { [key: string]: any } // Commented out as per instruction's implied change

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
        const jsonStr = match[1];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let def: any;
        try {
            // Use Function to parse loose JSON if needed, or just eval it
            // recursive descent parser is safer but eval is quick for this task
            def = new Function("return " + jsonStr)();
        } catch (e) {
            console.error("Failed to parse definition object", e);
            return;
        }

        const newJson = this.serialize(def, 2); // Indent 2 chars start

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
            const items = obj.map(item => this.serialize(item, indentLevel + 1)).join(`,\n${nextIndent}`);
            return `[\n${nextIndent}${items}\n${indent}]`;
        }

        // Object
        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';

        const lines = keys.map(key => {
            const val = obj[key];
            // Compact specific keys
            if (key === 'props' || key === 'layoutProps') {
                // Force single line
                return `${nextIndent}"${key}": ${JSON.stringify(val)}`;
            }

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

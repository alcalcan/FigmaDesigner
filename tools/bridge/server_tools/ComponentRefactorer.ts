import * as fs from 'fs';
import * as path from 'path';
import { CompactSerializer } from './CompactStructure';

interface RefactorerNode {
    id: string; // variable name, e.g. "root", "v10"
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    layoutProps: Record<string, any> | null;
    children: string[]; // IDs of children
    parent: string | null;
    svgContentVar?: string; // If created from SVG, which variable holds the SVG string
    isFlattened?: boolean; // If this node was flattened into another
    flattenedInto?: string; // The ID this was flattened into
    dynamicProps?: Record<string, string>; // Props that are assigned from variables, e.g. "props.x"
    booleanOperation?: "UNION" | "INTERSECT" | "SUBTRACT" | "EXCLUDE";
    shouldFlatten?: boolean; // If this node should be flattened after creation
    richTextSpans?: { start: number; end: number; font?: any; fills?: any; fontSize?: number }[];
}

interface RefactorerOptions {
    skipLoopDetection?: boolean;
    fidelityStrict?: boolean;
}

export class ComponentRefactorer {

    private isAlreadyDeclarative(content: string): boolean {
        // Refactoring this format again is destructive because there are no figma.create*/appendChild
        // statements left for graph reconstruction.
        return content.includes('const structure: NodeDefinition') &&
            content.includes('await this.renderDefinition(structure)');
    }

    public refactor(filePath: string, options: RefactorerOptions = {}) {
        console.log(`🚀 [Refactorer] Starting conversion for: ${path.basename(filePath)}`);
        if (!fs.existsSync(filePath)) {
            console.error(`❌ File not found: ${filePath}`);
            return;
        }

        const content = fs.readFileSync(filePath, 'utf8');
        const newContent = this.refactorCode(content, path.basename(filePath, '.ts'), options);

        fs.writeFileSync(filePath, newContent);
        console.log(`🏁 [Refactorer] Conversion complete.`);
    }

    public refactorCode(content: string, fileName: string = 'Component', options: RefactorerOptions = {}): string {
        try {
            console.log(`[Refactorer] options received:`, options);

            if (this.isAlreadyDeclarative(content)) {
                console.log(`[Refactorer] Skipping: ${fileName} is already declarative.`);
                return content;
            }

            // Extract 'create' method body using brace counting
            let bodyContent = content;
            const createStartRegex = /async create\s*\([^)]*\)\s*:\s*Promise<SceneNode>\s*\{/;
            const match = content.match(createStartRegex);

            if (match && match.index !== undefined) {
                const startIndex = match.index! + match[0].length;
                let braceCount = 1;
                let endIndex = startIndex;

                let inString = false;
                let stringChar = '';
                let inCommentSingle = false;
                let inCommentMulti = false;

                for (let i = startIndex; i < content.length; i++) {
                    const char = content[i];
                    const nextChar = i + 1 < content.length ? content[i + 1] : '';
                    const prevChar = i > 0 ? content[i - 1] : '';

                    if (inCommentSingle) {
                        if (char === '\n') inCommentSingle = false;
                        continue;
                    }

                    if (inCommentMulti) {
                        if (char === '*' && nextChar === '/') {
                            inCommentMulti = false;
                            i++; // skip /
                        }
                        continue;
                    }

                    if (inString) {
                        if (char === stringChar && prevChar !== '\\') {
                            inString = false;
                        }
                        continue;
                    }

                    // Normal Mode
                    if (char === '/' && nextChar === '/') {
                        inCommentSingle = true;
                        i++;
                        continue;
                    }
                    if (char === '/' && nextChar === '*') {
                        inCommentMulti = true;
                        i++;
                        continue;
                    }

                    if (char === '"' || char === "'" || char === '`') {
                        inString = true;
                        stringChar = char;
                        continue;
                    }

                    if (char === '{') {
                        braceCount++;
                    }
                    else if (char === '}') {
                        braceCount--;
                    }

                    if (braceCount === 0) {
                        endIndex = i;
                        console.log(`[Refactorer Debug] Parsing finished at index ${endIndex}. Brace count matched.`);
                        break;
                    }
                }

                bodyContent = content.substring(startIndex, endIndex);
                console.log(`[Refactorer Debug] Extracted body length: ${bodyContent.length}`);
                console.log(`[Refactorer Debug] First 500 chars of body: ${bodyContent.substring(0, 500)}...`);
            } else {
                console.warn("⚠️ Could not find 'create' method start, parsing entire file.");
            }

            const lines = bodyContent.split('\n');

            // 1. Extract SVG Assets (globally)
            const assets = this.extractAssets(content);

            // 2. Build Node Graph
            const nodes = this.buildNodeGraph(lines);

            // 3. Find Root
            const rootId = 'root'; // Convention in generated code
            if (!nodes.has(rootId)) {
                console.error("❌ Could not find 'root' node.");
                return content; // Return original on failure
            }

            // 4. Generate Definition JSON
            let definition = this.generateDefinition(nodes, rootId, assets, options);

            // 5. Post-process (Optimization: Loops, Conditionals)
            if (!options.skipLoopDetection && !options.fidelityStrict) {
                definition = this.postProcessDefinition(definition);
            }

            // 6. Generate New File Content
            return this.generateFileContent(fileName, definition, assets, content, nodes);
        } catch (e) {
            console.error("❌ [Refactorer] Critical Error in refactorCode:", e);
            throw e; // Re-throw to be caught by pipeline
        }
    }

    private knownAssets: Set<string> = new Set();

    private extractAssets(content: string): Map<string, string> {
        const assets = new Map<string, string>();
        this.knownAssets.clear();

        // 1. Match inlined SVG constants: const SVG_... = `<svg...`
        const inlineRegex = /const ([\w_]+) = `(<svg[\s\S]*?<\/svg>)`;/g;
        let match;
        while ((match = inlineRegex.exec(content)) !== null) {
            assets.set(match[1], match[2]);
            this.knownAssets.add(match[1]);
        }

        // 2. Match SVG/Image imports: import VAR from "..." or '...'
        // We look for variables starting with SVG_ or IMG_
        const importRegex = /import (SVG_[\w_]+|IMG_[\w_]+) from ["']([^"']+)["'];/g;
        while ((match = importRegex.exec(content)) !== null) {
            // We store the variable name as the content to signal it's an external reference
            const varName = match[1];
            assets.set(varName, `__EXTERNAL_REF__${varName}`);
            this.knownAssets.add(varName); // Add to known assets for sandbox parsing
        }

        return assets;
    }

    private buildNodeGraph(lines: string[]): Map<string, RefactorerNode> {
        const nodes = new Map<string, RefactorerNode>();

        const getNode = (id: string): RefactorerNode => {
            if (!nodes.has(id)) {
                nodes.set(id, {
                    id,
                    type: 'FRAME', // Default
                    props: {},
                    layoutProps: null,
                    children: [],
                    parent: null
                });
            }
            return nodes.get(id)!;
        };



        // Property regexes
        // simple: v1.name = "Prop"
        // setFont/setRangeFont/fills/strokes helper calls are tricky.
        // await this.setFont(v12, {"family":"Open Sans","style":"SemiBold"});
        const setFontRegex = /await this\.setFont\((\w+), (\{.*\})\);/;

        const appendRegex = /(\w+)\.appendChild\((\w+)\);/;
        const applyLayoutRegex = /applySizeAndTransform\((\w+), (\{.*\})\);/;

        const rangeFontRegex = /await this\.setRangeFont\((\w+), (\d+|[\w\.]+), (\d+|[\w\.]+), (\{.*\})\);/;
        const rangeFillsRegex = /(\w+)\.setRangeFills\((\w+), (\w+), (.*)\);/; // broader capture for args
        // Actually generated code uses numeric literals for start/end mostly.
        // ComponentGenerator: code += `${varName}.setRangeFills(${start}, ${end}, ...);`
        // So (\d+) is safer, but (\w+) allows variables.
        // Let's use strict regex for fills to avoid capturing too much.
        const rangeFillsRegexStrict = /(\w+)\.setRangeFills\((\d+), (\d+), (.*)\);/;
        const rangeFontSizeRegexStrict = /(\w+)\.setRangeFontSize\((\d+), (\d+), (.*)\);/;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line || line.startsWith('//')) continue;


            // Creation
            // Robust regex: Handle const v = figma.createX(), with optional spaces
            let match = line.match(/const\s+(\w+)\s*=\s*figma\.create(\w+)\(\);/);
            if (match) {
                const node = getNode(match[1]);
                node.type = match[2].toUpperCase();
                continue;
            }

            // SVG Creation
            match = line.match(/const\s+(\w+)\s*=\s*figma\.createNodeFromSvg\((\w+)\);/);
            if (match) {
                const node = getNode(match[1]);
                node.type = 'VECTOR';
                node.svgContentVar = match[2];
                continue;
            }

            // Boolean Operations
            // const v3 = figma.exclude([v1, v2], figma.currentPage);
            const booleanOpRegex = /const\s+(\w+)\s*=\s*figma\.(union|subtract|intersect|exclude)\(\s*\[(.*?)\],\s*.*\);/;
            match = line.match(booleanOpRegex);
            if (match) {
                const id = match[1];
                const op = match[2].toUpperCase(); // UNION, EXCLUDE...
                const childrenStr = match[3];
                const childIds = childrenStr.split(',').map(s => s.trim()).filter(s => s);

                const node = getNode(id);
                node.type = 'BOOLEAN_OPERATION';
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                node.booleanOperation = op as any;

                // Set children
                node.children = childIds;

                // Update parents of children
                childIds.forEach(cid => {
                    const c = getNode(cid);
                    // If the child was already in a parent, we might need to handle the removal from previous parent?
                    // But in generated code usually it's just created and then added to a boolean op.
                    c.parent = id;
                });
                continue;
            }

            match = line.match(/const\s+(\w+)\s*=\s*figma\.flatten\(\s*\[(\w+)\]\s*\);/);
            if (match) {
                const newNodeId = match[1];
                const oldNodeId = match[2];

                const newNode = getNode(newNodeId);
                newNode.type = 'VECTOR'; // Flattened usually becomes vector/frame-like

                // Link old node
                const oldNode = getNode(oldNodeId);
                oldNode.isFlattened = true;
                oldNode.flattenedInto = newNodeId;

                // Propagate specific properties to the new flattened vector (like the SVG content source)
                if (oldNode.svgContentVar) {
                    newNode.svgContentVar = oldNode.svgContentVar;
                }

                // Inherit SVG content source if applicable (so we can inline it later if we want, 
                // though usually flatten burns it in. For our renderDefinition, we might prefer 
                // keeping the SVG source if possible, but flatten implies we want the result).
                // Actually, if we use NodeFromSvg in renderDefinition, we don't need to flatten.
                // We can maybe skip the flatten step and just use the original SVG node?
                // Let's assume the flattened node is the "real" one for now, but if it came from SVG,
                // we might want to attach the SVG to it.
                if (oldNode.svgContentVar) {
                    newNode.svgContentVar = oldNode.svgContentVar;
                }

                // Mark for flattening
                newNode.shouldFlatten = true;

                continue;
            }

            // Simple Prop Assignment
            // Improved regex to handle optional spaces around '=', optional semicolon, and optional 'if' guard
            const assignMatch = line.match(/^(?:if \(.*\) )?(\w+)\.(\w+)\s*=\s*(.*?);?$/);
            if (assignMatch) {
                const id = assignMatch[1];
                const prop = assignMatch[2];
                const valStr = assignMatch[3];

                if (prop === 'parent' || prop === 'removed') continue; // Skip read-only/internal

                // Detect dynamic props assignment (e.g. root.x = props.x)
                if (valStr.startsWith('props.')) {
                    const node = getNode(id);
                    // Store dynamic assignments to be applied after creation
                    if (!node.dynamicProps) node.dynamicProps = {};
                    node.dynamicProps[prop] = valStr;
                    continue;
                }

                // Parse value
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                let val: any;
                try {
                    // Handle template literals loosely
                    if (valStr.startsWith('`') && valStr.endsWith('`')) {
                        val = valStr.slice(1, -1);
                    } else {
                        try {
                            val = JSON.parse(valStr);
                        } catch (e) { /* ignore */ }
                    }
                } catch (e) {
                    // Outer catch unused if inner catches
                }

                if (val === undefined && valStr.includes('hydratePaints')) {
                    const jsonMatch = valStr.match(/hydratePaints\((.*)\)/);
                    if (jsonMatch) {
                        try {
                            // Try strict JSON first
                            val = JSON.parse(jsonMatch[1]);
                        } catch (e2) {
                            try {
                                // Create a Sandbox of known assets to resolve variables
                                // We map each known asset variable to a special object marked as code
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const sandbox: any = {};
                                Array.from(this.knownAssets).forEach(k => {
                                    sandbox[k] = { __code: k };
                                });

                                // Use Function with 'with' block to resolve variables against sandbox
                                // eslint-disable-next-line @typescript-eslint/no-implied-eval
                                const fn = new Function("sandbox", `with(sandbox) { return ${jsonMatch[1]}; }`);
                                val = fn(sandbox);
                            } catch (e3) {
                                console.warn(`Failed to parse hydratePaints for ${id}.${prop}. Missing asset var?`, e3);
                            }
                        }
                    }
                }

                if (val !== undefined) {
                    const node = getNode(id);
                    node.props[prop] = val;
                } else {
                    // Fallback: if we couldn't parse it but it looks like a string (e.g. "HORIZONTAL"), 
                    // maybe quotes were stripped or it's a constant?
                    // If it's a known string-enum like HORIZONTAL/VERTICAL/NONE, preserve it.
                    if (['"HORIZONTAL"', '"VERTICAL"', '"NONE"', "'HORIZONTAL'", "'VERTICAL'", "'NONE'"].includes(valStr) ||
                        ['HORIZONTAL', 'VERTICAL', 'NONE'].includes(valStr)) { // If raw enum
                        // If quoting failed, we might want to capture it.
                        // But usually JSON.parse handles quotes.
                        // If valStr is just HORIZONTAL (no quotes), it's a variable or enum.
                        // In generated code: "HORIZONTAL".
                        // So JSON.parse should have worked.
                        // If it failed, maybe it was something else.
                        console.warn(`⚠️ Failed to parse property ${prop} value: ${valStr}`);
                    }
                }
                continue;
            }


            // Append
            match = line.match(appendRegex);
            if (match) {
                const parentId = match[1];
                const childId = match[2];
                const parent = getNode(parentId);
                const child = getNode(childId);

                // If child is already linked (re-parenting?), just overwrite?
                // In generated code, usually tree is static.
                // Check if child was flattened; if so, its replacement is what we care about... 
                // BUT usually we append the RESULT (e.g. v11), not the source (v10).
                // So this should be fine.

                parent.children.push(childId);
                child.parent = parentId;
                continue;
            }

            // Layout
            match = line.match(applyLayoutRegex);
            if (match) {
                const id = match[1];
                const jsonStr = match[2];
                try {
                    // loose parse
                    // eslint-disable-next-line @typescript-eslint/no-implied-eval
                    getNode(id).layoutProps = new Function("return " + jsonStr)();
                } catch (e) { /* ignore */ }
                continue;
            }

            // setFont
            match = line.match(setFontRegex);
            if (match) {
                const id = match[1];
                try {
                    // eslint-disable-next-line @typescript-eslint/no-implied-eval
                    const fontDef = new Function("return " + match[2])();
                    getNode(id).props['font'] = fontDef;
                } catch (e) { /* ignore */ }
                continue;
            }

            // setRangeFont
            match = line.match(rangeFontRegex);
            if (match) {
                const id = match[1];
                const start = parseInt(match[2]);
                const end = parseInt(match[3]);
                try {
                    const fontDef = new Function("return " + match[4])();
                    const node = getNode(id);
                    if (!node.richTextSpans) node.richTextSpans = [];
                    // Check if span exists for this range
                    let span = node.richTextSpans.find(s => s.start === start && s.end === end);
                    if (!span) {
                        span = { start, end };
                        node.richTextSpans.push(span);
                    }
                    span.font = fontDef;
                } catch (e) { /* ignore */ }
                continue;
            }

            // setRangeFills
            match = line.match(rangeFillsRegexStrict);
            if (match) {
                const id = match[1];
                const start = parseInt(match[2]);
                const end = parseInt(match[3]);
                const fillsStr = match[4]; // might be hydratePaints call

                try {
                    let fillsVal: any;
                    if (fillsStr.includes('hydratePaints')) {
                        const jsonMatch = fillsStr.match(/hydratePaints\((.*)\)/);
                        if (jsonMatch) {
                            fillsVal = JSON.parse(jsonMatch[1]); // Assume JSON for strict simplicity in ranges
                        }
                    } else {
                        fillsVal = JSON.parse(fillsStr);
                    }

                    if (fillsVal) {
                        const node = getNode(id);
                        if (!node.richTextSpans) node.richTextSpans = [];
                        let span = node.richTextSpans.find(s => s.start === start && s.end === end);
                        if (!span) {
                            span = { start, end };
                            node.richTextSpans.push(span);
                        }
                        span.fills = fillsVal;
                    }
                } catch (e) { console.warn("Failed to parse setRangeFills", e); }
                continue;
            }

            // setRangeFontSize
            match = line.match(rangeFontSizeRegexStrict);
            if (match) {
                const id = match[1];
                const start = parseInt(match[2]);
                const end = parseInt(match[3]);
                const fsVal = parseFloat(match[4]);

                const node = getNode(id);
                if (!node.richTextSpans) node.richTextSpans = [];
                let span = node.richTextSpans.find(s => s.start === start && s.end === end);
                if (!span) {
                    span = { start, end };
                    node.richTextSpans.push(span);
                }
                span.fontSize = fsVal;
                continue;
            }
        }

        return nodes;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private generateDefinition(
        nodes: Map<string, RefactorerNode>,
        currentId: string,
        assets: Map<string, string>,
        options: RefactorerOptions,
        visited = new Set<string>()
    ): any {
        if (visited.has(currentId)) {
            console.warn(`⚠️ Cycle detected for node ${currentId}, skipping.`);
            return null;
        }
        visited.add(currentId);

        const node = nodes.get(currentId);
        if (!node) return null;

        // If this node was flattened into another, we essentially skip it or merge it?
        // Typically the 'flatten' output node (e.g. v11) is the one in the parent's children list.
        // So we shouldn't traverse INTO a node that is just a source for flatten.
        // BUT if we are traversing from root down, we will encounter the 'flattened result' node (v11).
        // v11 is "VECTOR", has no children usually (it's flat).
        // It might have `svgContentVar` copied from v10.

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const def: any = {
            type: node.type,
        };

        if (node.booleanOperation) {
            def.booleanOperation = node.booleanOperation;
        }

        if (node.shouldFlatten) {
            def.shouldFlatten = true;
        }

        if (node.props.name) def.name = node.props.name;

        // Props cleanup
        const cleanProps = { ...node.props };
        delete cleanProps.name; // moved to top level
        // layoutMode is vital for Frame, must be preserved.

        // Enforce visibility rule for opacity 0
        const hasEffects = cleanProps.effects && cleanProps.effects.length > 0;
        if (cleanProps.opacity === 0 && !hasEffects) {
            cleanProps.visible = false;
        }

        if (Object.keys(cleanProps).length > 0) {
            def.props = cleanProps;
        }

        // Merge layoutPositioning into layoutProps if present in props
        // This is required for BaseComponent to correctly handle relativeTransform for absolute nodes
        if (node.props.layoutPositioning) {
            if (!node.layoutProps) node.layoutProps = {};
            node.layoutProps.layoutPositioning = node.props.layoutPositioning;
        }

        if (node.layoutProps) {
            def.layoutProps = node.layoutProps;
        }

        // --- FIDELITY FIX: "Comparison Stats" Layout ---
        // Force responsive constraints for this specific card which is often captured fixed/centered
        if (!options.fidelityStrict && def.name === "Comparison Stats") {
            if (!def.layoutProps) def.layoutProps = {};
            // Ensure constraints are SCALE to allow resizing
            def.layoutProps.constraints = { horizontal: "SCALE", vertical: "SCALE" };
            // Also ensuring width isn't excessively small if possible, but constraints should handle behavior
            console.log(`[Refactorer] 🔧 Enforcing SCALE constraints for ${def.name}`);

            // Fix Text Truncation: Recursively force textAutoResize to WIDTH_AND_HEIGHT for all text nodes
            const fixTextTruncation = (node: any) => {
                if (node.type === 'TEXT' && node.props) {
                    // Only apply if currently NONE or truncated-prone
                    // But generally for stats we want full visibility
                    if (node.props.textAutoResize === 'NONE' || node.props.textAutoResize === 'HEIGHT') {
                        console.log(`[Refactorer] 🔧 Fixing Text Truncation for ${node.name} (Force WIDTH_AND_HEIGHT)`);
                        node.props.textAutoResize = 'WIDTH_AND_HEIGHT';
                        // Ensure text alignment is reasonable? 
                        // Usually CENTER/CENTER for stats
                    }
                }
                if (node.children) {
                    node.children.forEach(fixTextTruncation);
                }
            };
            fixTextTruncation(def);
        }

        if (node.richTextSpans && node.richTextSpans.length > 0) {
            if (!def.props) def.props = {};
            def.props.richTextSpans = node.richTextSpans;
        }

        if (node.svgContentVar) {
            const assetContent = assets.get(node.svgContentVar);

            // --- BOLD CHEVRON FIX START (Refactorer) ---
            // Check if this node is using the problematic "thin" chevron asset
            const isChevronAsset = node.svgContentVar.includes('assets_icon_Shape_I977_492_70_461_svg_10x6');

            if (!options.fidelityStrict && isChevronAsset) {
                console.log(`[Refactorer] Injecting BOLD CHEVRON FIX for node ${currentId}`);
                const boldContent = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.6 0L5 4.4L9.4 0L10 0.6L5 5.6L0 0.6L0.6 0Z" fill="#1A313C"/></svg>`;
                def.svgContent = boldContent;
            }
            else if (assetContent?.startsWith('__EXTERNAL_REF__')) {
                // Use the variable reference directly via __code marker
                def.svgContent = { __code: node.svgContentVar };
            } else if (assetContent) {
                def.svgContent = assetContent;
            } else {
                console.warn(`⚠️ [Refactorer] Asset not found for var: ${node.svgContentVar}`);
            }
        }

        // Safety: If we expect to flatten an SVG node, we MUST have content.
        // Otherwise figma.flatten() on an empty vector fails.
        if (def.shouldFlatten && !def.svgContent && (node.type === 'VECTOR' || node.type === 'STAR' || node.type === 'POLYGON')) {
            console.warn(`⚠️ [Refactorer] Missing SVG content for ${currentId} (${def.name}). Disabling flatten to prevent crash.`);
            delete def.shouldFlatten;
        }

        if (node.children.length > 0) {
            const uniqueChildrenIds: string[] = [];
            if (options.fidelityStrict) {
                uniqueChildrenIds.push(...node.children);
            } else {
                // --- DEDUPLICATION LOGIC ---
                // Filter out identical siblings (same name, position, size) to prevent stacking artifacts.
                const seenSignatures = new Set<string>();
                let seenComparisonStats = false;

                for (const childId of node.children) {
                    const childNode = nodes.get(childId);
                    if (childNode) {
                        const p = childNode.props;

                        if (p.name === "Comparison Stats") {
                            if (seenComparisonStats) {
                                console.log(`[Refactorer] ✂️ Aggressively dedoping duplicate Comparison Stats: ${childId}`);
                                continue;
                            }
                            seenComparisonStats = true;
                        }

                        const sig = `${p.name}|${Math.round(p.x || 0)}|${Math.round(p.y || 0)}|${Math.round(p.width || 0)}|${Math.round(p.height || 0)}`;
                        const isStructural = childNode.type === 'FRAME' || childNode.type === 'INSTANCE' || childNode.type === 'COMPONENT' || childNode.type === 'GROUP';

                        if (!isStructural && seenSignatures.has(sig)) {
                            console.log(`[Refactorer] ✂️ Deduping sibling: ${p.name} (${childId})`);
                            continue;
                        }
                        seenSignatures.add(sig);
                        uniqueChildrenIds.push(childId);
                    }
                }
            }

            def.children = uniqueChildrenIds
                .map(cid => this.generateDefinition(nodes, cid, assets, options, new Set(visited)))
                .filter(Boolean);
        }

        return def;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private generateDynamicAssignments(nodes: Map<string, RefactorerNode>, rootId: string): string[] {
        const assignments: string[] = [];

        // Helper to find path to node from root?
        // Since we return 'root', we can just use 'root' variable. 
        // But for children? generated code currently structure is monolithic in definition.
        // `renderDefinition` returns the root node.
        // We only support dynamic props on the ROOT node easily for now (e.g. x/y).
        // If children have dynamic props, we'd need to find them.
        // `Info_generated` only has dynamic props on ROOT.

        const root = nodes.get(rootId);
        if (root && root.dynamicProps) {
            for (const [prop, val] of Object.entries(root.dynamicProps)) {
                assignments.push(`root.${prop} = ${val};`);
            }
        }

        return assignments;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private postProcessDefinition(def: any): any {
        if (!def) return def;

        // Depth-first traversal
        if (def.children && Array.isArray(def.children)) {
            // Process children first
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            def.children = def.children.map((c: any) => this.postProcessDefinition(c));

            // Try to find loops in this node's children
            const newChildren = this.analyzeChildrenForLoops(def.children);
            if (newChildren) {
                def.children = newChildren;
            }
        }

        return def;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private analyzeChildrenForLoops(children: any[]): any[] | null {
        if (children.length < 2) return null; // Need at least 2 items to be worth looping
        // Simple heuristic: Look for sequences of "FRAME" with similar structure
        // Specifically targeting the Sidebar Filter rows for now
        // Pattern: Frame -> [Checkbox, Text]
        // Varying: Name, Parent Fill (sometimes), Text Chars

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const loops: any[] = [];
        let i = 0;


        while (i < children.length) {
            const template = children[i];
            // We require the template to have a name that looks like a list item or strict equality logic
            // For this specific task, let's be somewhat generic but safe.
            // Check if current node can be a template
            if (template.type !== 'FRAME' || !template.children) {
                loops.push(template);
                i++;
                continue;
            }

            // Look ahead
            const group = [template];
            let j = i + 1;
            while (j < children.length) {
                const candidate = children[j];
                if (this.areNodesSimilar(template, candidate)) {
                    group.push(candidate);
                    j++;
                } else {
                    break;
                }
            }

            if (group.length >= 2) {
                // We found a loop group!
                const loopCode = this.generateLoopCode(group);
                loops.push({ __code: loopCode }); // Special marker
                i = j;
            } else {
                // Not enough for a loop, just push the original
                loops.push(template);
                i++;
            }
        }
        // If no loops found, return null to signify no change
        if (loops.length === children.length && loops.every(l => !l.__code)) {
            console.log(`[Refactorer] No loops found in children.`);
            return null;
        }

        console.log(`[Refactorer] Applying loop optimization.Found ${loops.filter(l => l.__code).length} loop(s).`);
        return loops;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private areNodesSimilar(a: any, b: any): boolean {
        if (a.type !== b.type) return false;

        // Check geometry for Vectors/Boolean Ops
        // We want to prevent merging vectors that look different (e.g. checkmark vs cross vs empty)
        if (a.type === 'VECTOR' || a.type === 'STAR' || a.type === 'POLYGON' || a.type === 'BOOLEAN_OPERATION') {
            if (!this.isSizeSimilar(a, b)) return false;
            if (!this.arePathsEqual(a, b)) return false;
            if (a.svgContentVar !== b.svgContentVar) return false;
            if (a.props?.pointCount !== b.props?.pointCount) return false;
            if (a.props?.innerRadius !== b.props?.innerRadius) return false;
        }

        // Check children recursively
        if (a.children || b.children) {
            if (!a.children || !b.children || a.children.length !== b.children.length) return false;
            for (let i = 0; i < a.children.length; i++) {
                if (!this.areNodesSimilar(a.children[i], b.children[i])) return false;
            }
        }

        return true;
    }

    private isSizeSimilar(a: any, b: any): boolean {
        const wa = a.layoutProps?.width;
        const ha = a.layoutProps?.height;
        const wb = b.layoutProps?.width;
        const hb = b.layoutProps?.height;

        // Tolerance for floating point
        const eq = (v1: number, v2: number) => Math.abs(v1 - v2) < 0.01;

        if (wa !== undefined && wb !== undefined && !eq(wa, wb)) return false;
        if (ha !== undefined && hb !== undefined && !eq(ha, hb)) return false;

        return true;
    }

    private arePathsEqual(a: any, b: any): boolean {
        const pa = a.props?.vectorPaths;
        const pb = b.props?.vectorPaths;

        if (!pa && !pb) return true;
        if (!pa || !pb) return false;
        if (pa.length !== pb.length) return false;

        for (let i = 0; i < pa.length; i++) {
            if (pa[i].data !== pb[i].data) return false;
        }
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private generateLoopCode(group: any[]): string {
        const template = this.mergeNodeTrees(group);
        const isHoleCheckbox = this.isHoleInCode(template);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const variations: any[] = [];
        let shouldBindCheckbox = true;

        // Normalize Template: Ensure all checkboxes start with an "open" border look (inner hole visible)
        // This avoids the "blob" look when the first item in the group is unselected.
        const normalizeCheckbox = (n: any) => {
            if (n.name === 'Checkbox' && n.children) {
                const shape = n.children.find((c: any) => c.name === 'Shape');
                if (shape && shape.children && shape.children.length > 1) {
                    shape.children[1].props = shape.children[1].props || {};
                    shape.children[1].props.visible = true; // Always show border/hole by default
                }
            }
            if (n.children) n.children.forEach(normalizeCheckbox);
        };
        normalizeCheckbox(template);

        // Normalize Layout: Ensure text inputs take up space (Fill Container)
        const normalizeLayout = (n: any) => {
            if (n.type === 'TEXT') {
                n.props = n.props || {};
                n.props.textAutoResize = "NONE";
                n.props.layoutGrow = 1;
                // n.layoutProps.width = ... // Let Figma or layout engine handle width based on grow
            }
            if (n.children) n.children.forEach(normalizeLayout);
        };
        normalizeLayout(template);

        group.forEach(node => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const variation: any = {};

            const findText = (n: any): string | null => {
                if (n.type === 'TEXT' && n.props?.characters) return n.props.characters;
                if (n.children) {
                    for (const c of n.children) {
                        const res = findText(c);
                        if (res) return res;
                    }
                }
                return null;
            };

            const text = findText(node);
            if (text) variation.name = text;

            // Extract inner code variation (e.g. for nested loops)
            const findInnerCode = (n: any): string | null => {
                if (n.children && n.children.length === 1 && n.children[0].__code) {
                    return n.children[0].__code;
                }
                if (n.children) {
                    for (const c of n.children) {
                        const res = findInnerCode(c);
                        if (res) return res;
                    }
                }
                return null;
            };
            let innerCode = findInnerCode(node);
            let useSpread = false;

            if (innerCode) {
                const trimmed = innerCode.trim();
                if (trimmed.startsWith('...')) {
                    innerCode = trimmed.substring(3).trim();
                    useSpread = true;
                }
                variation.innerCode = { __code: innerCode };
                // Using hidden property to pass spread info to the template generator?
                // No, we collect variations. We need to deduce this later or store it.
                variation._useSpread = useSpread;
            }

            // Check if selected
            let isSelected = false;

            // Heuristic for selection: 
            // 1. Check item background fill (if it matches a "selected" color like gray/blue)
            if (node.props?.fills && node.props.fills.length > 0) {
                const fill = node.props.fills[0];
                if (fill.visible !== false) {
                    // Check if it's not white (usually unselected is white or transparent)
                    const c = fill.color;
                    if (c && (c.r < 0.99 || c.g < 0.99 || c.b < 0.99)) {
                        isSelected = true;
                        variation.fillColor = fill.color;
                    }
                }
            }

            let isCheckboxActive = false;
            // Also check checkbox children for selection
            const findCheckboxInNode = (n: any): any => {
                if (n.name === 'Checkbox') return n;
                if (n.children) {
                    for (const c of n.children) {
                        const res = findCheckboxInNode(c);
                        if (res) return res;
                    }
                }
                return null;
            };

            const checkboxNode = findCheckboxInNode(node);
            if (checkboxNode) {
                variation.hasCheckbox = true;
                if (checkboxNode.children) {
                    const shape = checkboxNode.children.find((c: any) => c.name === 'Shape');
                    if (shape && shape.children && shape.children.length > 1) {
                        const base = shape.children[0];
                        const hole = shape.children[1];
                        const isHole = this.isContained(hole, base);

                        if (isHole) {
                            // If it's a hole, isSelected if visible is false (subtractive logic)
                            if (hole.props?.visible === false || hole.props?.visible === 'false') {
                                isCheckboxActive = true;
                            }
                        } else {
                            // If it's not a hole (e.g. checkmark icon), isSelected if visible is true
                            if (hole.props?.visible === true || hole.props?.visible === 'true' || hole.props?.visible === undefined) {
                                isCheckboxActive = true;
                            }
                        }
                    }
                    if (checkboxNode.children.find((c: any) => c.name === 'Checkmark')) {
                        isCheckboxActive = true;
                    }
                }
            } else {
                variation.hasCheckbox = false;
            }

            if (isCheckboxActive) isSelected = true;

            // Consistency check: If the row is selected but checkbox is NOT, or vice versa, logic is flawed.
            // Specifically, if we are going to bind check=selected, then isCheckboxActive MUST equal isSelected.
            // If they differ (e.g. Row Selected, Checkbox Empty), then binding them will force Checkbox Checked, which is wrong.
            if (variation.hasCheckbox && isCheckboxActive !== isSelected) {
                shouldBindCheckbox = false;
            }

            variation.isSelected = isSelected;
            variations.push(variation);
        });

        const dataStr = this.serialize(variations, 12);

        // Handle inner code replacement in template
        const hasInnerCode = variations.some(v => v.innerCode);
        if (hasInnerCode) {
            const replaceCodeWithPlaceholder = (n: any) => {
                if (n.children && n.children.length === 1 && n.children[0].__code) {
                    n.children[0].__code = "%%INNER_CODE%%";
                }
                if (n.children) n.children.forEach(replaceCodeWithPlaceholder);
            };
            replaceCodeWithPlaceholder(template);
        }

        let templateStr = this.serialize(template, 4);

        if (hasInnerCode) {
            // "serialize" already unwraps __code blocks, so %%INNER_CODE%% appears raw in templateStr, not quoted.
            const useSpread = variations.some(v => v._useSpread);
            const replacement = useSpread ? '...item.innerCode' : 'item.innerCode';
            templateStr = templateStr.replace(/%%INNER_CODE%%/g, replacement);
        }

        let checkboxLogic = '';
        if (shouldBindCheckbox) {
            checkboxLogic = `
        if (shape) {
            // The second child (index 1) is the inner checkmark path
            // We bind its visibility to the selection state
            if (shape.children && shape.children.length > 1) {
                shape.children[1].props = shape.children[1].props || {};
                // Force checkmark visibility when selected
                shape.children[1].props.visible = !!item.isSelected;

                // Visual State Toggling: Handle Unchecked (Empty) vs Checked (Filled)
                // The template defaults to "Filled" (Checked style).
                shape.props = shape.props || {};
                if (item.isSelected) {
                    // Checked: Ensure Fill, No Stroke
                    // (Template has fill by default, so we just ensure no stroke)
                    shape.props.strokes = [];
                } else {
                    // Unchecked: No Fill, Bold Dark Stroke
                    shape.props.fills = [];
                    shape.props.strokes = [{
                        "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                        "color": { "r": 0.10196078568696976, "g": 0.1921568661928177, "b": 0.23529411852359772 }
                    }];
                    shape.props.strokeWeight = 2;
                    shape.props.strokeAlign = "INSIDE";
                }
            }
        } `;
        }

        const code = `...${dataStr}.map((item: any) => {
            const node = ${templateStr} as unknown as NodeDefinition;

            // Apply loop overrides
            if (item.name) {
                const traverse = (n: any) => {
                    if (n.type === 'TEXT') {
                        n.props = n.props || {};
                        n.props.characters = item.name;
                    }
                    if (n.children) n.children.forEach(traverse);
                };
                traverse(node);
            }

            // Checkbox Logic: Bind checkmark visibility to selection
            const findShape = (n: any): any => {
                if (n.name === 'Checkbox' && n.children) {
                    const shape = n.children.find((c: any) => c.name === 'Shape');
                    if (shape && shape.children && shape.children.length > 1) return shape;
                }
                if (n.children) {
                    for (const c of n.children) {
                        const s = findShape(c);
                        if (s) return s;
                    }
                }
                return null;
            };

            const shape = findShape(node);
            ${checkboxLogic}

            if (item.isSelected) {
                node.props = node.props || {};
                node.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                    boundVariables: {}
                }];
            } else {
                if (node.props) node.props.fills = [];
            }

            return node;
        })`;

        return code;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private generateFileContent(className: string, definition: any, assets: Map<string, string>, originalContent: string, nodes: Map<string, RefactorerNode>): string {
        const imports = `import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; `;

        // Run post-processing to inject loops
        // FIX: postProcessDefinition is already called in refactorCode respecting options.
        // We should not call it again here unconditionally.
        const processedDef = definition;
        const defString = this.serialize(processedDef, 1);

        // Extract SVG assets selectively from original content based on what's used in the defString
        const svgLines: string[] = [];

        // 1. Check for inlined SVG constants
        const svgMatchRegex = /const (SVG_[\w_]+) = `(<svg[\s\S]*? <\/svg>)`;/g;
        let svgMatch;
        while ((svgMatch = svgMatchRegex.exec(originalContent)) !== null) {
            const assetName = svgMatch[1];
            // If the name is used in the definition, include it
            if (defString.includes(assetName)) {
                svgLines.push(svgMatch[0]);
            }
        }

        // 2. Check for SVG/Image imports
        const importRegex = /import (SVG_[\w_]+|IMG_[\w_]+) from "([^"]+)";/g;
        while ((svgMatch = importRegex.exec(originalContent)) !== null) {
            const assetName = svgMatch[1];
            // Include if used in definition OR if it's an IMG (since fills might be deep in objects not string-matched easily?)
            // Actually, if we use {__code: "IMG..."}, `defString` (serialized) contains "IMG..."
            if (defString.includes(assetName)) {
                svgLines.push(svgMatch[0]);
            }
        }

        return `${imports}


// SVG Assets
${svgLines.join('\n')}


export class ${className} extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = ${defString};

        const root = await this.renderDefinition(structure);
        
        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}
`;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private serialize(obj: any, indentLevel: number): string {
        let str = CompactSerializer.serialize(obj, indentLevel);

        // Unwrap { "__code": "..." } blocks to inject raw code
        str = str.replace(/\{\s*"__code"\s*:\s*("(?:[^"\\]|\\.)*")\s*\}/g, (match, jsonString) => {
            try {
                return JSON.parse(jsonString);
            } catch (e) {
                return match;
            }
        });

        return str;
    }

    // --- Geometric Utilities ---

    private isContained(inner: any, outer: any): boolean {
        // Strategy: Use Ray Casting (Precise) if vector paths are available.
        // Fallback to AABB (Approximate) for Frames/Rectangles.

        if (this.hasVectorPaths(inner) && this.hasVectorPaths(outer)) {
            return this.isPreciseHole(inner, outer);
        }

        return this.isAABBContained(inner, outer);
    }

    private hasVectorPaths(node: any): boolean {
        return node.props && node.props.vectorPaths && node.props.vectorPaths.length > 0 && node.props.vectorPaths[0].data;
    }

    private isPreciseHole(inner: any, outer: any): boolean {
        const innerPoints = this.getGlobalVertices(inner);
        const outerPoints = this.getGlobalVertices(outer);

        if (innerPoints.length === 0 || outerPoints.length === 0) return false;

        // Check if ALL inner vertices are inside outer polygon
        return innerPoints.every(p => this.isPointInPolygon(p, outerPoints));
    }

    private getGlobalVertices(node: any): { x: number, y: number }[] {
        const transform = node.layoutProps?.relativeTransform || [[1, 0, 0], [0, 1, 0]];
        const path = node.props.vectorPaths?.[0]?.data || "";

        const vertices: { x: number, y: number }[] = [];

        // Split by commands - naive parsing sufficient for simple flattened paths
        const parts = path.split(/([MLCZ])/).filter((p: string) => p.trim());

        let currentCommand = "";

        for (const part of parts) {
            if ("MLCZ".includes(part)) {
                currentCommand = part;
                continue;
            }

            // Parse numbers
            const nums = part.trim().split(/[\s,]+/).map(parseFloat);

            if (currentCommand === "M" || currentCommand === "L") {
                // Pairs of x,y
                for (let i = 0; i < nums.length; i += 2) {
                    if (!isNaN(nums[i]) && !isNaN(nums[i + 1])) {
                        vertices.push(this.transformPoint(nums[i], nums[i + 1], transform));
                    }
                }
            }
            if (currentCommand === "C") {
                // Groups of 6 (cp1, cp2, dest) - we only take dest
                for (let i = 0; i < nums.length; i += 6) {
                    if (!isNaN(nums[i + 4]) && !isNaN(nums[i + 5])) {
                        vertices.push(this.transformPoint(nums[i + 4], nums[i + 5], transform));
                    }
                }
            }
        }

        return vertices;
    }

    private transformPoint(x: number, y: number, t: any): { x: number, y: number } {
        // t is [[a, b, tx], [c, d, ty]]
        return {
            x: t[0][0] * x + t[0][1] * y + t[0][2],
            y: t[1][0] * x + t[1][1] * y + t[1][2]
        };
    }

    private isPointInPolygon(p: { x: number, y: number }, polygon: { x: number, y: number }[]): boolean {
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i].x, yi = polygon[i].y;
            const xj = polygon[j].x, yj = polygon[j].y;

            const intersect = ((yi > p.y) !== (yj > p.y))
                && (p.x < (xj - xi) * (p.y - yi) / (yj - yi) + xi);

            if (intersect) inside = !inside;
        }
        return inside;
    }

    private isAABBContained(inner: any, outer: any): boolean {
        if (!inner.layoutProps || !outer.layoutProps) return false;

        const b1 = this.getAbsoluteBounds(inner);
        const b2 = this.getAbsoluteBounds(outer);

        // Figma often has sub-pixel offsets, use a small epsilon
        const epsilon = 0.5;

        return (
            b1.x >= b2.x - epsilon &&
            b1.y >= b2.y - epsilon &&
            (b1.x + b1.width) <= (b2.x + b2.width) + epsilon &&
            (b1.y + b1.height) <= (b2.y + b2.height) + epsilon
        );
    }

    private getAbsoluteBounds(node: any): { x: number, y: number, width: number, height: number } {
        const lp = node.layoutProps;
        const t = lp.relativeTransform; // [[1, 0, x], [0, 1, y]]

        return {
            x: t ? t[0][2] : 0,
            y: t ? t[1][2] : 0,
            width: lp.width || 0,
            height: lp.height || 0
        };
    }

    private isHoleInCode(template: any): boolean {
        // Pre-calculate if the checkbox in this template uses a hole
        const findShape = (n: any): any => {
            if (n.name === 'Checkbox' && n.children) {
                return n.children.find((c: any) => c.name === 'Shape');
            }
            if (n.children) {
                for (const c of n.children) {
                    const res = findShape(c);
                    if (res) return res;
                }
            }
            return null;
        };
        const shape = findShape(template);
        if (shape && shape.children && shape.children.length > 1) {
            // Force true for consistent subtractive logic if structure matches
            // We assume if it has 2 children (base + mark), it uses the hole/mask technique by default in this design system.
            return true;
        }
        return false;
    }

    // --- Tree Merging (God JSON) ---

    private mergeNodeTrees(nodes: any[]): any {
        if (!nodes || nodes.length === 0) return null;
        const base = JSON.parse(JSON.stringify(nodes[0]));
        for (let i = 1; i < nodes.length; i++) {
            this.mergeTwoTrees(base, nodes[i]);
        }
        return base;
    }

    private mergeTwoTrees(target: any, source: any) {
        if (!target || !source) return;
        if (target.type !== source.type) return;

        if (source.children && target.children) {
            for (const sChild of source.children) {
                // Find matching child in target by Name + Type
                const tChild = target.children.find((t: any) => t.name === sChild.name && t.type === sChild.type);
                if (tChild) {
                    this.mergeTwoTrees(tChild, sChild);
                } else {
                    // New node discovered in this instance! Add it to the superset template.
                    target.children.push(JSON.parse(JSON.stringify(sChild)));
                }
            }
        }
    }
}

if (require.main === module) {
    const filePath = process.argv[2];
    if (filePath) {
        new ComponentRefactorer().refactor(filePath);
    }
}

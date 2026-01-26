import * as fs from 'fs';
import * as path from 'path';

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
}

export class ComponentRefactorer {

    public refactor(filePath: string) {
        console.log(`🚀 [Refactorer] Starting conversion for: ${path.basename(filePath)}`);
        if (!fs.existsSync(filePath)) {
            console.error(`❌ File not found: ${filePath}`);
            return;
        }

        const content = fs.readFileSync(filePath, 'utf8');

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
                    break;
                }
            }

            bodyContent = content.substring(startIndex, endIndex);
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
            return;
        }

        // 4. Generate Definition JSON
        const definition = this.generateDefinition(nodes, rootId, assets);

        // 5. Generate New File Content
        const newContent = this.generateFileContent(path.basename(filePath, '.ts'), definition, assets, content, nodes);

        fs.writeFileSync(filePath, newContent);
        console.log(`🏁 [Refactorer] Conversion complete.`);
    }

    private extractAssets(content: string): Map<string, string> {
        const assets = new Map<string, string>();

        // 1. Match inlined SVG constants: const SVG_... = `<svg...`
        const inlineRegex = /const ([\w_]+) = `(<svg[\s\S]*?<\/svg>)`;/g;
        let match;
        while ((match = inlineRegex.exec(content)) !== null) {
            assets.set(match[1], match[2]);
        }

        // 2. Match SVG imports: import SVG_... from "./assets/...svg"
        const importRegex = /import (SVG_[\w_]+) from "([^"]+\.svg)";/g;
        while ((match = importRegex.exec(content)) !== null) {
            // We store the variable name as the content to signal it's an external reference
            assets.set(match[1], `__EXTERNAL_REF__${match[1]}`);
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
                            val = JSON.parse(jsonMatch[1]);
                        } catch (e2) {
                            try {
                                // eslint-disable-next-line @typescript-eslint/no-implied-eval
                                val = new Function("return " + jsonMatch[1])();
                            } catch (e3) {
                                // console.log(`Failed to parse hydratePaints for ${id}.${prop}:`, e2);
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
        }

        return nodes;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private generateDefinition(nodes: Map<string, RefactorerNode>, currentId: string, assets: Map<string, string>, visited = new Set<string>()): any {
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

        if (node.svgContentVar) {
            const assetContent = assets.get(node.svgContentVar);

            // --- BOLD CHEVRON FIX START (Refactorer) ---
            // Check if this node is using the problematic "thin" chevron asset
            // We check if the asset key (var name) or content matches known signatures
            // e.g. "SVG_assets_icon_Shape_..."
            const isChevronAsset = node.svgContentVar.includes('assets_icon_Shape_I977_492_70_461_svg_10x6');

            if (isChevronAsset) {
                console.log(`[Refactorer] Injecting BOLD CHEVRON FIX for node ${currentId}`);
                // Inject the Custom Bold Path (Solution A) directly into the definition
                const boldContent = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.6 0L5 4.4L9.4 0L10 0.6L5 5.6L0 0.6L0.6 0Z" fill="#1A313C"/></svg>`;
                def.svgContent = boldContent;

                // Also reset transforms in the definition if layoutProps exist
                if (def.layoutProps && def.layoutProps.relativeTransform) {
                    def.layoutProps.relativeTransform = [[1, 0, 0], [0, 1, 0]];
                    def.layoutProps.width = 10;
                    def.layoutProps.height = 6;
                }
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
        if (def.shouldFlatten && !def.svgContent && node.type === 'VECTOR') {
            console.warn(`⚠️ [Refactorer] Missing SVG content for ${currentId} (${def.name}). Disabling flatten to prevent crash.`);
            delete def.shouldFlatten;
        }

        if (node.children.length > 0) {
            def.children = node.children
                .map(cid => this.generateDefinition(nodes, cid, assets, new Set(visited)))
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
        if (children.length < 3) return null; // Need at least 3 items to be worth looping

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

            if (group.length >= 3) {
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
        if (loops.length === children.length && loops.every(l => !l.__code)) return null;

        return loops;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private areNodesSimilar(a: any, b: any): boolean {
        if (a.type !== b.type) return false;

        // If they have distinct names and they match, that's a strong signal
        if (a.name && b.name && a.name === b.name && a.type === 'FRAME') return true;

        // Check if child types match partially (structural similarity)
        const getSig = (n: any) => (n.children || []).map((c: any) => c.type).join(',');
        const sigA = getSig(a);
        const sigB = getSig(b);

        if (sigA === sigB) return true;

        // Allow one to be a subset of another (e.g. absent checkmark)
        if (sigA.includes(sigB) || sigB.includes(sigA)) return true;

        return false;
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

        const dataStr = JSON.stringify(variations);
        const templateStr = this.serialize(template, 4);

        let checkboxLogic = '';
        if (shouldBindCheckbox) {
            checkboxLogic = `
            if (shape) {
                // The second child (index 1) is the inner checkmark path
                // We bind its visibility to the selection state
                if (shape.children && shape.children.length > 1) {
                    shape.children[1].props = shape.children[1].props || {};
                    const isHole = ${isHoleCheckbox};
                    shape.children[1].props.visible = isHole ? !item.isSelected : !!item.isSelected;
                }
            }`;
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
        const imports = `import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";`;

        // Run post-processing to inject loops
        const processedDef = this.postProcessDefinition(definition);
        const defString = this.serialize(processedDef, 1);

        // Extract SVG assets selectively from original content based on what's used in the defString
        const svgLines: string[] = [];

        // 1. Check for inlined SVG constants
        const svgMatchRegex = /const (SVG_[\w_]+) = `(<svg[\s\S]*?<\/svg>)`;/g;
        let svgMatch;
        while ((svgMatch = svgMatchRegex.exec(originalContent)) !== null) {
            const assetName = svgMatch[1];
            // If the name is used in the definition, include it
            if (defString.includes(assetName)) {
                svgLines.push(svgMatch[0]);
            }
        }

        // 2. Check for SVG imports
        const svgImportRegex = /import (SVG_[\w_]+) from "([^"]+\.svg)";/g;
        while ((svgMatch = svgImportRegex.exec(originalContent)) !== null) {
            const assetName = svgMatch[1];
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
        root.x = props.x;
        root.y = props.y;

        return root;
    }
}
`;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private serialize(obj: any, indentLevel: number): string {
        if (obj === null || obj === undefined) return 'null';

        // Handle Code Marker
        if (obj.__code) {
            return obj.__code;
        }

        if (typeof obj !== 'object') return JSON.stringify(obj);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const indent = "  ".repeat(indentLevel);
        const nextIndent = "  ".repeat(indentLevel + 1);

        if (Array.isArray(obj)) {
            if (obj.length === 0) return '[]';

            const items = obj.map(item => this.serialize(item, indentLevel + 1));
            const joined = items.join(`,\n${nextIndent}`);
            return `[\n${nextIndent}${joined}\n${indent}]`;
        }

        // Object
        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';

        const lines = keys.map(key => {
            const val = obj[key];
            return `${nextIndent}"${key}": ${this.serialize(val, indentLevel + 1)}`;
        });

        return `{\n${lines.join(',\n')}\n${indent}}`;
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
            return this.isContained(shape.children[1], shape.children[0]);
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

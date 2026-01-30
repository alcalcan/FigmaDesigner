// Standardized Intermediate Representation (SIR) Node
export interface SIRNode {
    id: string;
    type: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: Record<string, any>;
    booleanOperation?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    layoutProps: Record<string, any>;
    children: string[];
    parent: string | null;
    svgContentVar?: string; // If it's a vector/icon
    isFlattened?: boolean;
    flattenedInto?: string;
}

export class ProceduralConverter {

    private nodes: Map<string, SIRNode> = new Map();
    private assets: Map<string, string> = new Map();
    private rootId: string | null = null;
    private componentName: string = "Component";

    /**
     * Phase 1: Input Analysis & Normalization
     * constant input -> SIR (Standardized Intermediate Representation)
     */
    /**
     * Phase 1: Input Analysis & Normalization
     * Declarative NodeDefinition JSON -> SIR (Standardized Intermediate Representation)
     */
    public analyze(content: string): Map<string, SIRNode> {
        this.nodes.clear();
        this.assets.clear();
        this.rootId = null;

        console.log(`[ProceduralConverter] Analyzing content (length: ${content.length})`);

        // 1. Extract Assets
        this.extractAssets(content);
        console.log(`[ProceduralConverter] Extracted ${this.assets.size} assets`);

        // 2. Extract Structure
        // Find the "const structure: NodeDefinition = ..." or similar
        // We match either a POJO { ... } or a helper call like createFrame(...)
        const structureRegex = /(?:const|let|var)\s+structure\s*(?::\s*[A-Z]\w*)?\s*=\s*/;
        const structureMatch = content.match(structureRegex);
        if (structureMatch && structureMatch.index !== undefined) {
            const varName = 'structure';
            console.log(`[ProceduralConverter] Found structure variable: ${varName}`);

            // Find the start of the object or function call
            const startIndex = structureMatch.index + structureMatch[0].length;
            const jsonStr = this.extractBalancedBlock(content, startIndex);

            if (jsonStr) {
                console.log(`[ProceduralConverter] Extracted balanced block (length: ${jsonStr.length})`);
                console.log(`[ProceduralConverter] Start: ${jsonStr.substring(0, 200)}`);
                console.log(`[ProceduralConverter] End: ${jsonStr.substring(jsonStr.length - 200)}`);
                try {
                    // Safe-ish evaluation to parse the JSON object
                    // We need to provide context for variables like IMG_..., SVG_..., COLORS...
                    // We create a sandbox with known assets.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const sandbox: any = {
                        COLORS: { WHITE: { r: 1, g: 1, b: 1 }, BLACK: { r: 0, g: 0, b: 0 } },
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        createFrame: (name: string, props: any = {}, children: any[] = []) => {
                            const { layoutProps, ...rest } = props;
                            return { type: 'FRAME', name, props: rest, layoutProps, children };
                        },
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        createText: (name: string, text: string, fontSize: number, style: string, color: any, props: any = {}) => {
                            const { layoutProps, ...rest } = props;
                            // Ensure font family is captured if present in rest, otherwise default to Inter
                            const font = rest.font || { family: 'Inter', style };
                            return { type: 'TEXT', name, props: { ...rest, characters: text, fontSize, font, fills: [{ type: 'SOLID', color }] }, layoutProps, children: [] };
                        },
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        createVector: (name: string, svgContent: string, props: any = {}) => {
                            const { layoutProps, ...rest } = props;
                            return { type: 'VECTOR', name, props: rest, layoutProps, children: [], svgContent };
                        },
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        createBooleanOperation: (name: string, booleanOperation: string, props: any = {}, children: any[] = []) => {
                            const { layoutProps, ...rest } = props;
                            return { type: 'BOOLEAN_OPERATION', name, booleanOperation, props: rest, layoutProps, children };
                        },
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        createLine: (name: string, props: any = {}) => {
                            const { layoutProps, ...rest } = props;
                            return { type: 'LINE', name, props: rest, layoutProps, children: [] };
                        },
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        createRectangle: (name: string, props: any = {}) => {
                            const { layoutProps, ...rest } = props;
                            return { type: 'RECTANGLE', name, props: rest, layoutProps, children: [] };
                        },
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        createEllipse: (name: string, props: any = {}) => {
                            const { layoutProps, ...rest } = props;
                            return { type: 'ELLIPSE', name, props: rest, layoutProps, children: [] };
                        }
                    };
                    this.assets.forEach((val, key) => sandbox[key] = key); // Map var to its name

                    // Also find all variables USED in the jsonStr that are NOT in assets or sandbox
                    const varUsage = jsonStr.match(/[A-Z_]{3,}/g);
                    if (varUsage) {
                        varUsage.forEach(v => {
                            if (!sandbox[v]) sandbox[v] = v;
                        });
                    }

                    // eslint-disable-next-line @typescript-eslint/no-implied-eval
                    const fn = new Function("sandbox", `with(sandbox) { return ${jsonStr}; }`);
                    const rootDef = fn(sandbox);
                    if (rootDef) {
                        this.importFromJSON(rootDef);
                        console.log(`[ProceduralConverter] Imported ${this.nodes.size} nodes from structured JSON`);
                    } else {
                        console.error("[ProceduralConverter] Evaluate returned null rootDef");
                    }
                } catch (e) {
                    console.error("[ProceduralConverter] Failed to evaluate structure JSON:", e);
                    // Fallback: If we can't evaluate as code (maybe because of complex expressions),
                    // try to parse as strict JSON after stripping possible code markers.
                    try {
                        const strictJson = jsonStr.replace(/__VAR__/g, '').replace(/__EXPR_VAR__\d+/g, 'null');
                        const rootDef = JSON.parse(strictJson);
                        this.importFromJSON(rootDef);
                        console.log("[ProceduralConverter] Fallback JSON parse successful.");
                    } catch (e2) {
                        console.error("[ProceduralConverter] Fallback JSON parse also failed.");
                    }
                }
            }
        } else {
            console.error("[ProceduralConverter] Could not find 'structure' constant.");
        }

        console.log(`[ProceduralConverter] analyze FINISHED. Total nodes in map: ${this.nodes.size}`);
        return this.nodes;
    }

    private extractBalancedBlock(content: string, startIndex: number): string | null {
        let braceCount = 0;
        let inString = false;
        let stringChar = '';

        for (let i = startIndex; i < content.length; i++) {
            const char = content[i];
            const prev = content[i - 1] || '';

            if (inString) {
                if (char === stringChar && prev !== '\\') inString = false;
                continue;
            }

            if (char === '"' || char === "'" || char === '`') {
                inString = true;
                stringChar = char;
                continue;
            }

            if (char === '{') braceCount++;
            else if (char === '}') braceCount--;

            if (braceCount === 0) {
                return content.substring(startIndex, i + 1);
            }
        }
        return null;
    }

    private extractAssets(content: string) {
        // Match inlined SVG/IMG/ICON constants
        const inlineRegex = /const (SVG_[\w_]+|IMG_[\w_]+|ICON_[\w_]+) = [`"']([\s\S]*?)[`"'];/g;
        let match;
        const contentToVar = new Map<string, string>();

        while ((match = inlineRegex.exec(content)) !== null) {
            const varName = match[1];
            // Strip newlines and excess whitespace from asset content (especially for large base64)
            const rawContent = match[2];
            const svgContent = rawContent.replace(/\r?\n|\r/g, "").trim();

            // Asset Consolidation: Check if we already have this content
            if (contentToVar.has(svgContent)) {
                console.log(`[ProceduralConverter] Consolidating asset ${varName} into ${contentToVar.get(svgContent)}`);
                // Use the existing variable name for this content
                this.assets.set(varName, `__ALIAS__${contentToVar.get(svgContent)}`);
            } else {
                this.assets.set(varName, svgContent);
                contentToVar.set(svgContent, varName);
            }
        }

        // Match external imports
        const importRegex = /import (SVG_[\w_]+|IMG_[\w_]+|ICON_[\w_]+) from ["']([^"']+)["'];/g;
        while ((match = importRegex.exec(content)) !== null) {
            // Store original path
            this.assets.set(match[1], `__EXTERNAL_REF__${match[2]}`);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private importFromJSON(def: any, parentId: string | null = null): string {
        // Generate a new ID
        const id = `node_${this.nodes.size + 1}`;

        const node: SIRNode = {
            id,
            type: def.type || 'FRAME',
            booleanOperation: def.booleanOperation,
            name: def.name || id,
            props: def.props || {},
            layoutProps: def.layoutProps || {},
            children: [],
            parent: parentId,
            svgContentVar: def.svgContent
        };

        if (def.booleanOperation) {
            console.log(`[ProceduralConverter] Imported BooleanOp for ${id} (${node.name}): ${def.booleanOperation}`);
        }

        // Handle svgContent being a var reference from our sandbox
        // In the sandbox above, we mapped keys to keys. 
        // If def.svgContent is a string and starts with SVG_, it's a ref.
        // If it was an object/code marker, we'd handle it.
        // If it comes from the initial JS parse, it might be the string literal if the var wasn't defined?
        // Actually, if we passed `sandbox[key] = key`, then `assetRef: IMG_...` becomes `assetRef: "IMG_..."`.

        // Clean up props that might have become string literals of variable names
        if (node.props.fills) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            node.props.fills.forEach((fill: any) => {
                if (fill.type === 'IMAGE' && typeof fill.assetRef === 'string') {
                    // Check if it looks like one of our assets
                    if (this.assets.has(fill.assetRef)) {
                        // It is a valid ref, keep it.
                    }
                }
            });
        }

        // Resolve aliases
        if (node.svgContentVar && this.assets.get(node.svgContentVar)?.startsWith('__ALIAS__')) {
            node.svgContentVar = this.assets.get(node.svgContentVar)!.replace('__ALIAS__', '');
        }

        this.nodes.set(id, node);

        if (def.children && Array.isArray(def.children)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            def.children.forEach((childDef: any) => {
                const childId = this.importFromJSON(childDef, id);
                node.children.push(childId);
            });
        }

        if (!this.rootId && !parentId) {
            this.rootId = id;
        }

        return id;
    }

    public getSIR(): { rootId: string | null, nodes: Map<string, SIRNode>, assets: Map<string, string> } {
        return {
            rootId: this.rootId,
            nodes: this.nodes,
            assets: this.assets
        };
    }

    /**
     * Phase 2: Pattern Recognition & Data Extraction
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public detectPatterns(): { lists: any[], composites: any[] } {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const lists: any[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const composites: any[] = [];

        if (!this.rootId) {
            console.warn("[ProceduralConverter] detectPatterns: No rootId found.");
            return { lists, composites };
        }

        console.log(`[ProceduralConverter] Detecting patterns among ${this.nodes.size} nodes...`);

        // 1. Detect Lists (Top-Down)
        this.nodes.forEach(node => {
            if (node.children.length >= 2) {
                const groups = this.groupChildrenBySimilarity(node.children);
                groups.forEach(group => {
                    // Require at least 2 items to form a list
                    if (group.length >= 2) {
                        const schema = this.extractSchema(group);
                        console.log(`[ProceduralConverter] Found list at node ${node.id} (${node.name}) with ${group.length} items.`);
                        lists.push({
                            parentId: node.id,
                            itemIds: group,
                            schema: schema
                        });
                    }
                });
            }
        });

        // 2. Detect Composites (Bottom-Up) -- Simplified for now
        this.nodes.forEach(node => {
            if (this.isToggle(node)) {
                console.log(`[ProceduralConverter] Found TOGGLE at node ${node.id} (${node.name})`);
                composites.push({ type: 'TOGGLE', nodeId: node.id });
            } else if (this.isCheckbox(node)) {
                console.log(`[ProceduralConverter] Found CHECKBOX at node ${node.id} (${node.name})`);
                composites.push({ type: 'CHECKBOX', nodeId: node.id });
            }
        });

        // 3. Post-process lists to create "Super-Templates" (Merging similar nodes)
        lists.forEach(list => {
            const itemNodes = list.itemIds.map((id: string) => this.getGodJSON(id));
            list.template = this.mergeNodeTrees(itemNodes);
            list.isHoleCheckbox = this.isHoleInCode(list.template);
        });

        return { lists, composites };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getGodJSON(id: string): any {
        const node = this.nodes.get(id);
        if (!node) return null;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const json: any = {
            type: node.type,
            name: node.name,
            props: JSON.parse(JSON.stringify(node.props)),
            layoutProps: JSON.parse(JSON.stringify(node.layoutProps)),
            svgContent: node.svgContentVar,
            children: node.children.map(cid => this.getGodJSON(cid))
        };

        return json;
    }

    // --- Tree Merging (God JSON) ---

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private mergeNodeTrees(nodes: any[]): any {
        if (!nodes || nodes.length === 0) return null;
        const base = JSON.parse(JSON.stringify(nodes[0]));
        for (let i = 1; i < nodes.length; i++) {
            this.mergeTwoTrees(base, nodes[i]);
        }
        return base;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private mergeTwoTrees(target: any, source: any) {
        if (!target || !source) return;
        if (target.type !== source.type) return;

        if (source.children && target.children) {
            // Updated to use index-based alignment.
            // This ensures that structurally similar nodes (like auto-named Text layers) 
            // are merged correctly instead of being duplicated.
            // This aligns with extractSchema which uses index-based paths.

            const len = Math.max(target.children.length, source.children.length);

            for (let i = 0; i < len; i++) {
                if (i < source.children.length) {
                    const sChild = source.children[i];

                    if (i < target.children.length) {
                        const tChild = target.children[i];
                        // If types match, we assume they are the same node in the sequence
                        if (tChild.type === sChild.type) {
                            this.mergeTwoTrees(tChild, sChild);
                        } else {
                            // Type mismatch at this specific index. 
                            // This implies the lists are not strictly structurally identical.
                            // We choose NOT to merge mismatched types to avoid corrupting the template properties.
                            // (e.g. merging a Frame into a Text node would be bad)
                            // We implicitly leave tChild as is (from the first card).
                            // sChild's unique data at this index might be lost to the schema if tChild doesn't support it,
                            // but extractSchema handles variable extraction based on Item 1's structure.
                        }
                    } else {
                        // Source has more items than Target (Template). Append.
                        target.children.push(JSON.parse(JSON.stringify(sChild)));
                    }
                }
                // If i >= source.length, we define that target has extra items. 
                // We leave them alone (they remain in the template).
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private isHoleInCode(template: any): boolean {
        // Pre-calculate if the checkbox in this template uses a hole
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const findShape = (n: any): any => {
            if (n.name === 'Checkbox' && n.children) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            return true;
        }
        return false;
    }

    // --- Pattern Heuristics ---

    private isToggle(node: SIRNode): boolean {
        // Simple heuristic: Frame named "Toggle" or contains "Knob" and "Track"
        // Or strictly 2 children: one circle (knob), one rect (track)
        if (node.name.toLowerCase().includes('toggle')) return true;

        // Structure check
        if (node.children.length === 2) {
            const child1 = this.nodes.get(node.children[0]);
            const child2 = this.nodes.get(node.children[1]);
            if (!child1 || !child2) return false;

            const names = [child1.name.toLowerCase(), child2.name.toLowerCase()];
            if (names.some(n => n.includes('knob')) && names.some(n => n.includes('track'))) {
                return true;
            }
        }
        return false;
    }

    private isCheckbox(node: SIRNode): boolean {
        const name = node.name.toLowerCase();
        if (name.includes('checkbox')) return true;
        if (name.includes('check_box')) return true;

        // 2. Contains a node named "Shape" with exactly 2 children (Box, Checkmark)
        const shapeNode = this.findCheckboxInNode(node);
        if (shapeNode) return true;

        return false;
    }

    private findCheckboxInNode(node: SIRNode): SIRNode | null {
        if (node.name === 'Shape' && node.children.length === 2) return node;
        for (const childId of node.children) {
            const child = this.nodes.get(childId);
            if (child) {
                const found = this.findCheckboxInNode(child);
                if (found) return found;
            }
        }
        return null;
    }

    // --- Geometric Utilities (Ported) ---

    private isContained(inner: SIRNode, outer: SIRNode): boolean {
        // Simplified AABB check
        if (!inner.layoutProps || !outer.layoutProps) return false;
        const b1 = this.getAbsoluteBounds(inner);
        const b2 = this.getAbsoluteBounds(outer);
        const epsilon = 0.5;
        return (
            b1.x >= b2.x - epsilon &&
            b1.y >= b2.y - epsilon &&
            (b1.x + b1.width) <= (b2.x + b2.width) + epsilon &&
            (b1.y + b1.height) <= (b2.y + b2.height) + epsilon
        );
    }

    private getAbsoluteBounds(node: SIRNode): { x: number, y: number, width: number, height: number } {
        const lp = node.layoutProps || {};
        const t = lp.relativeTransform;
        return {
            x: t ? t[0][2] : 0,
            y: t ? t[1][2] : 0,
            width: lp.width || 0,
            height: lp.height || 0
        };
    }

    private groupChildrenBySimilarity(childIds: string[]): string[][] {
        console.log(`[ProceduralConverter] groupChildrenBySimilarity for ${childIds.length} children`);
        const groups: string[][] = [];
        let i = 0;

        while (i < childIds.length) {
            const currentGroup = [childIds[i]];
            let j = i + 1;

            // Look ahead for CONTIGUOUS similar items
            while (j < childIds.length) {
                const nodeA = this.nodes.get(childIds[i]); // Compare with leader
                const nodeB = this.nodes.get(childIds[j]);

                if (nodeA && nodeB && this.areNodesDeeplyStructurallySimilar(nodeA, nodeB)) {
                    currentGroup.push(childIds[j]);
                    j++;
                } else {
                    break; // similarity chain broken
                }
            }

            // Only add if it's actually a multiple-item pattern (or single if needed? Logic below says ">= 2 to form a list")
            // We push all groups, let the caller decide if it's a list.
            groups.push(currentGroup);

            // Advance i
            i = j;
        }

        console.log(`[ProceduralConverter] Created ${groups.length} groups (contiguous)`);
        return groups;
    }

    /**
     * Recursive structural check.
     * Nodes match if:
     * 1. Same Type
     * 2. Same Child Count
     * 3. Children match structure recursively
     */
    private areNodesDeeplyStructurallySimilar(a: SIRNode, b: SIRNode): boolean {
        if (a.type !== b.type) return false;
        if (a.children.length !== b.children.length) return false; // Strict check

        // Optimization: Check layout mode first as a quick filter
        if (a.props.layoutMode !== b.props.layoutMode) return false;

        const count = a.children.length;
        for (let i = 0; i < count; i++) {
            const childA = this.nodes.get(a.children[i])!;
            const childB = this.nodes.get(b.children[i])!;
            if (!this.areNodesDeeplyStructurallySimilar(childA, childB)) return false;
        }
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private extractSchema(itemIds: string[]): { variablePaths: string[], data: any[] } {
        // Identify which properties vary across items
        const firstId = itemIds[0];
        const first = this.nodes.get(firstId)!;

        // Traverse first item to find ALL potential variable points
        // Returns map: "children[0].props.characters" -> "Some Text"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const extractValueMap = (node: SIRNode, prefix = ""): Map<string, any> => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const map = new Map<string, any>();
            const p = prefix ? prefix + "." : "";

            // 1. Text Characters
            if (node.type === 'TEXT' && node.props.characters) {
                map.set(`${p}props.characters`, node.props.characters);
            }

            // 2. Visibility
            if (node.props.visible !== undefined) {
                map.set(`${p}props.visible`, node.props.visible);
            }

            // 3. Fills (Image Asset Refs)
            if (node.props.fills && Array.isArray(node.props.fills)) {
                // Simplified: Check first fill's assetRef
                // We map specific fills by index if needed
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                node.props.fills.forEach((fill: any, i: number) => {
                    if (fill.type === 'IMAGE' && fill.assetRef) {
                        map.set(`${p}props.fills[${i}].assetRef`, fill.assetRef);
                    }
                });
            }

            // 4. Vector/Icon Content
            if (node.type === 'VECTOR' && node.svgContentVar) {
                map.set(`${p}svgContentVar`, node.svgContentVar);
            }

            // Recurse children
            node.children.forEach((c, i) => {
                const child = this.nodes.get(c)!;
                const childMap = extractValueMap(child, `${p}children[${i}]`);
                childMap.forEach((v, k) => map.set(k, v));
            });
            return map;
        };

        const referenceMap = extractValueMap(first);
        const variablePaths: string[] = [];

        console.log(`[ProceduralConverter] extractSchema: Node ${first.id} has ${referenceMap.size} potential paths.`);
        referenceMap.forEach((v, k) => console.log(`  Path: ${k} = ${v}`));

        // Check if these paths vary in ANY other item
        referenceMap.forEach((baseVal, path) => {
            let isVarying = false;
            for (let i = 1; i < itemIds.length; i++) {
                const item = this.nodes.get(itemIds[i])!;
                const val = this.getValueAtPath(item, path);

                // Debug characters check
                if (path.includes('characters')) {
                    console.log(`[ProceduralConverter] Check path ${path}: Item 0='${baseVal}', Item ${i}='${val}'`);
                }

                if (val !== baseVal) {
                    isVarying = true;
                    console.log(`[ProceduralConverter] Found variation at ${path}. Base: ${baseVal} != ${val}`);
                    break;
                }
            }
            if (isVarying) variablePaths.push(path);
        });

        // Generate consistent names for variable paths (schema-wide)
        const keyMap = new Map<string, string>();
        variablePaths.forEach(p => {
            keyMap.set(p, this.pathToName(p, referenceMap.get(p), first));
        });

        console.log(`[ProceduralConverter] extractSchema for list parent ${itemIds[0]}: Found ${variablePaths.length} variables. Keys: ${Array.from(keyMap.values()).join(', ')}`);

        // Build data objects for each item based on variable paths
        const data = itemIds.map(id => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const obj: any = {};
            const item = this.nodes.get(id)!;
            variablePaths.forEach(p => {
                const key = keyMap.get(p)!;
                obj[key] = this.getValueAtPath(item, p);
            });

            // --- Logic Ported from Refactorer ---
            // 1. Detect Selection State
            let isSelected = false;
            if (item.props?.fills && item.props.fills.length > 0) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const fill = item.props.fills[0] as any;
                if (fill.visible !== false && (fill.type === 'SOLID' || fill.type === 'IMAGE')) {
                    const c = fill.color;
                    // Heuristic: Not white = Selected (assuming white is default background)
                    if (c && (c.r < 0.99 || c.g < 0.99 || c.b < 0.99)) {
                        isSelected = true;
                        // Store fill color for dynamic injection if needed
                        obj.fillColor = fill.color;
                    }
                }
            }
            obj.isSelected = isSelected;

            // 2. Detect Checkbox State
            const checkboxNode = this.findCheckboxInNode(item);
            if (checkboxNode) {
                let isCheckboxActive = false;
                if (checkboxNode.children) {
                    // Look for Shape (Hole/Checkmark)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const shapeId = checkboxNode.children.find((cid: string) => {
                        const c = this.nodes.get(cid);
                        return c && c.name === 'Shape';
                    });

                    if (shapeId) {
                        const shape = this.nodes.get(shapeId)!;
                        if (shape.children && shape.children.length > 1) {
                            const holeId = shape.children[1];
                            const baseId = shape.children[0];
                            const hole = this.nodes.get(holeId)!;
                            const base = this.nodes.get(baseId)!;

                            const isHole = this.isContained(hole, base);

                            if (isHole) {
                                // If hole is HIDDEN, it means the check is ACTIVE (filled)
                                if (hole.props?.visible === false) isCheckboxActive = true;
                            } else {
                                // If checkmark is VISIBLE, it's ACTIVE
                                if (hole.props?.visible !== false) isCheckboxActive = true;
                            }
                        }
                    }
                    // Also check for explicit "Checkmark" node name
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const checkmarkId = checkboxNode.children.find((cid: string) => {
                        const c = this.nodes.get(cid);
                        return c && (c.name === 'Checkmark' || c.name === 'check');
                    });
                    if (checkmarkId) isCheckboxActive = true;
                }

                // Consistency Check: If Row is selected, Checkbox MUST be active
                //(assuming row selection implies checked state in this design system)
                if (isSelected && !isCheckboxActive) {
                    // Logic mismatch? Trust selection?
                    // Refactorer says: "If they differ, binding them will force Checkbox Checked, which is wrong."
                    // But here we set data. We just record what we see.
                }
                obj.isCheckboxActive = isCheckboxActive;
            }

            return obj;

        });

        // If no variables found, data is just empty objects, but we still have a list structure.
        return { variablePaths, data };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getValueAtPath(node: SIRNode, pathStr: string): any {
        // pathStr: children[0].children[1].props.characters
        // Parse parts: children[0], props.characters
        // We need to navigate the SIR tree for children[x]
        // Then access the final property on the node struct

        const parts = pathStr.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let current: any = node;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];

            if (part.startsWith('children[')) {
                const match = part.match(/\[(\d+)\]/);
                if (!match) return undefined;
                const idx = parseInt(match[1]);
                if (!current.children || !current.children[idx]) return undefined;
                // Swapping SIRNode ref
                current = this.nodes.get(current.children[idx]);
                if (!current) return undefined;
            } else {
                // It's a property access on the SIRNode (props, svgContentVar, etc)
                // We consume the rest of the path as a standard JS object access
                const remainingPath = parts.slice(i).join('.');
                // Safe access helper
                return this.safeAccess(current, remainingPath);
            }
        }
        return current;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private safeAccess(obj: any, path: string): any {
        return path.split('.').reduce((o, k) => {
            if (o && k.includes('[')) {
                // handle array access props[0]
                const [prop, index] = k.split('[');
                const idx = parseInt(index.replace(']', ''));
                return o[prop] ? o[prop][idx] : undefined;
            }
            return (o || {})[k];
        }, obj);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    private pathToName(pathStr: string, _sampleValue: any, _nodeContext: SIRNode): string {
        // Heuristics for naming data fields

        const p = pathStr.trim();
        const lastPart = p.split('.').pop() || '';

        // Use a simple hash of the path string to ensure determinism across schema generation and template rendering
        // We use the full path to avoid collisions between 'children[0].characters' and 'children[1].characters'
        const hash = this.simpleHash(p);
        const suffix = hash.toString(36).substr(0, 5);

        if (lastPart === 'characters') {
            return "text_" + suffix;
        }

        if (lastPart === 'assetRef') return "image_" + suffix;
        if (lastPart === 'visible') return "show_" + suffix;

        // Better heuristic: use the property name + simplified path
        // e.g. children[0]_characters
        // return pathStr.replace(/children\[(\d+)\]/g, 'n$1').replace(/\./g, '_').replace(/\[|\]/g, '');
        // Using concise hashed name is safer for variable names
        return "var_" + lastPart.replace(/[^a-zA-Z0-9]/g, '') + "_" + suffix;
    }

    private simpleHash(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Coerce to 32bit int
        }
        return Math.abs(hash);
    }

    /**
     * Phase 3: Abstraction (Factory Logic)
     */
    /**
     * Phase 3: Abstraction (Factory Logic)
     * (Deprecated: functionality moved to shared ComponentHelpers.ts)
     */
    // public generateHelperFunctions(): string { ... }


    public convert(sourceCode: string, className: string): string {
        this.componentName = className;
        console.log(`[ProceduralConverter] Starting conversion for ${className}`);
        // Run Phase 1
        this.analyze(sourceCode);
        console.log(`[ProceduralConverter] Nodes analyzed: ${this.nodes.size}`);

        // Run Phase 2: Detect Patterns
        const { lists, composites } = this.detectPatterns();
        console.log(`[ProceduralConverter] Detection complete. Lists found: ${lists.length}, Composites: ${composites.length}`);

        // Phase 3: Get Helpers (Replaced by relative import)
        // const helpers = this.generateHelperFunctions();

        // Phase 4: Reconstruction
        const treeCode = this.generateTreeCode(this.rootId, lists);

        // Generate Data Arrays
        let dataDefs = '';
        lists.forEach((list, i) => {
            const varName = `LIST_${i}_DATA`;

            // FILTER: Only generate this list if it's used in the treeCode
            if (!treeCode.includes(varName)) {
                return;
            }

            // Clean up data keys and prepare for output
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const cleanedData = list.schema.data.map((d: any) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const newObj: any = {};
                for (const k in d) {
                    newObj[k.replace(/[^a-zA-Z0-9_]/g, '')] = d[k];
                }
                return newObj;
            });

            // Serialize with variable references instead of strings for assets
            let jsonString = JSON.stringify(cleanedData, null, 2);

            // Replace quoted asset references with variable names
            // matches "key": "IMG_..." or "SVG_..." -> "key": IMG_...
            this.assets.forEach((val, key) => {
                // Be careful not to replace partial matches if names are substrings
                // We look for "ANY_KEY": "KEY_NAME"
                // escape key for regex
                const safeKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`: "${safeKey}"`, 'g');
                jsonString = jsonString.replace(regex, `: ${key}`);
            });

            dataDefs += `const ${varName} = ${jsonString};\n`;
        });

        // Asset imports - Only include those that are actually used in the generated code
        // and also check if they are used in the dataDefs (since we unquoted them)
        const allGeneratedCode = treeCode + dataDefs;
        const assetImports = Array.from(this.assets.entries())
            .filter(([k, v]) => {
                if (v.startsWith('__ALIAS__')) return false;
                // Heuristic: check if the variable name is used in the code
                // Now that dataDefs uses variables, this check works for both direct usage and data usage
                return allGeneratedCode.includes(k);
            })
            .map(([k, v]) => {
                if (v.startsWith('__EXTERNAL_REF__')) {
                    const originalPath = v.replace('__EXTERNAL_REF__', '');
                    return `import ${k} from "${originalPath}";`;
                }
                return `const ${k} = \`${v}\`;`;
            }).join('\n');

        return `
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createBooleanOperation, createLine, createRectangle, createEllipse } from "../../ComponentHelpers";

// --- Assets ---
${assetImports}

// --- Constants & Defaults ---
const COLORS = {
    WHITE: { r: 1, g: 1, b: 1 },
    BLACK: { r: 0, g: 0, b: 0 },
    TRANSPARENT: { r: 0, g: 0, b: 0, a: 0 }
};

const DEFAULT_PROPS = {
    visible: true, 
    opacity: 1, 
    locked: false, 
    blendMode: "PASS_THROUGH",
    isMask: false, 
    maskType: "ALPHA",
    strokes: [], 
    fills: [], 
    effects: [], 
    cornerRadius: 0
};

const DEFAULT_LAYOUT_PROPS = {
    width: 100,
    height: 100,
    itemSpacing: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    counterAxisSizingMode: "FIXED",
    primaryAxisSizingMode: "FIXED"
};

${dataDefs}

export class ${className} extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        ${treeCode}
        
        const root = await this.renderDefinition(structure);
        root.x = props.x;
        root.y = props.y;
        return root; 
    }
}
        `;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private generateTreeCode(nodeId: string | null, lists: any[]): string {
        if (!nodeId) {
            console.warn("[ProceduralConverter] No rootId found during tree code generation.");
            return 'const structure: NodeDefinition = createFrame("Empty (Conversion Failed)", {}, []);';
        }

        const traverseRoot = (id: string): string => {
            const node = this.nodes.get(id);
            if (!node) return 'null';

            // Check if any list starts at this node's children
            const childGroups: string[] = [];
            const processedChildren = new Set<string>();

            for (let i = 0; i < node.children.length; i++) {
                const childId = node.children[i];
                if (processedChildren.has(childId)) continue;

                // Find a list that starts with THIS childId and belongs to THIS parent
                const listMatch = lists.find(l => l.parentId === id && l.itemIds[0] === childId);

                if (listMatch) {
                    // It's a list!
                    const listVar = `LIST_${lists.indexOf(listMatch)}_DATA`;
                    const allKeys = new Set<string>();
                    listMatch.schema.data.forEach((d: any) => Object.keys(d).forEach(k => allKeys.add(k)));
                    const availableKeys = Array.from(allKeys);
                    const itemExpr = this.generateTemplateItem(listMatch.template, listMatch.schema.variablePaths, "item", availableKeys);

                    const mapExpr = `${listVar}.map(item => {\n            return ${itemExpr} as unknown as NodeDefinition;\n        })`;
                    childGroups.push(`...${mapExpr}`);

                    // Mark all items in this list as processed
                    listMatch.itemIds.forEach((iid: string) => processedChildren.add(iid));
                } else {
                    // Regular child
                    childGroups.push(traverseRoot(childId));
                    processedChildren.add(childId);
                }
            }

            const childrenCode = `[\n${childGroups.join(',\n')}\n]`;

            // Clean props to overrides
            const overrides = this.serializeProps(node);
            const cleanName = node.name.replace(/"/g, '\\"');

            if (node.type === 'TEXT') {
                const text = node.props.characters ? JSON.stringify(node.props.characters) : '"Text"';
                return `createText("${cleanName}", ${text}, ${node.props.fontSize || 12}, "${node.props.font?.style || "Regular"}", COLORS.BLACK, ${overrides})`;
            }
            if (node.type === 'VECTOR') {
                const svgVar = node.svgContentVar || '""';
                return `createVector("${cleanName}", ${svgVar}, ${overrides})`;
            }
            if (node.type === 'BOOLEAN_OPERATION') {
                const op = node.booleanOperation || node.props?.booleanOperation || "UNION";
                console.log(`[ProceduralConverter] Generating code for ${node.id} (${node.name}): ${op}`);
                return `createBooleanOperation("${cleanName}", "${op}", ${overrides}, ${childrenCode})`;
            }
            if (node.type === 'LINE') {
                return `createLine("${cleanName}", ${overrides})`;
            }
            if (node.type === 'RECTANGLE') {
                return `createRectangle("${cleanName}", ${overrides})`;
            }
            if (node.type === 'ELLIPSE') {
                return `createEllipse("${cleanName}", ${overrides})`;
            }
            return `createFrame("${cleanName}", ${overrides}, ${childrenCode})`;
        };

        const rootExpr = traverseRoot(nodeId);
        return `const structure: NodeDefinition = ${rootExpr};`;
    }



    // Generates code from a God JSON template
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private generateTemplateItem(template: any, variablePaths: string[], prefix = "item", availableDataKeys: string[] = []): string {
        return this.traverseTemplateJSON(template, variablePaths, "", prefix, availableDataKeys);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private traverseTemplateJSON(node: any, variablePaths: string[], pathContext: string, prefix: string, availableDataKeys: string[]): string {
        // Check children
        let childrenCode = '[]';
        if (node.children && node.children.length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            childrenCode = `[\n${node.children.map((c: any, i: number) => {
                const newContext = pathContext ? `${pathContext}.children[${i}]` : `children[${i}]`;
                return this.traverseTemplateJSON(c, variablePaths, newContext, prefix, availableDataKeys);
            }).join(',\n')}\n]`;
        }

        const overrides = this.serializePropsFromJSON(node);
        let finalOverridesStr = this.stringifyOverrides(overrides);

        // --- Logic Injection: Selection State (Fills) ---
        // Only apply to the ROOT node of the template item, and if we have selection data
        if (!pathContext && availableDataKeys.includes('isSelected') && availableDataKeys.includes('fillColor')) {
            // We want to switch fills based on isSelected
            // Logic: item.isSelected ? [{ type: 'SOLID', color: item.fillColor }] : originalFills
            const originalFills = overrides.fills || node.props.fills || [];
            const originalFillsStr = JSON.stringify(originalFills); // This should be safe as it's static JSON data

            // Override the fills property with a raw code string
            const dynamicFill = `${prefix}.isSelected ? [{ type: "SOLID", color: ${prefix}.fillColor }] : ${originalFillsStr}`;

            // Inject into overrides string
            // We temporarily delete fills from overrides so it doesn't get stringified normally
            delete overrides.fills;

            let overStr = this.stringifyOverrides(overrides);
            // Manually inject the fills property
            if (overStr.trim() === "{}") {
                overStr = `{ fills: ${dynamicFill} }`;
            } else {
                overStr = overStr.replace(/\}$/, `, "fills": ${dynamicFill} }`);
            }
            finalOverridesStr = overStr;
        }

        // Generate Text
        if (node.type === 'TEXT') {
            const charPath = pathContext ? `${pathContext}.props.characters` : `props.characters`;
            let textArg = node.props.characters ? JSON.stringify(node.props.characters) : '"Text"';

            if (variablePaths.includes(charPath)) {
                const key = this.pathToName(charPath, null, node).replace(/[^a-zA-Z0-9_]/g, '');
                textArg = `${prefix}.${key}`;
            }

            return `createText("${node.name}", ${textArg}, ${node.props.fontSize || 12}, "${node.props.font?.style || "Regular"}", COLORS.BLACK, ${finalOverridesStr})`;
        }

        // Generate Vector
        if (node.type === 'VECTOR') {
            const contentPath = pathContext ? `${pathContext}.svgContentVar` : `svgContentVar`;
            let svgArg = node.svgContent || '""';
            if (variablePaths.includes(contentPath)) {
                const key = this.pathToName(contentPath, null, node).replace(/[^a-zA-Z0-9_]/g, '');
                svgArg = `${prefix}.${key}`;
            }
            return `createVector("${node.name}", ${svgArg}, ${finalOverridesStr})`;
        }

        // Generate Boolean Operation
        if (node.type === 'BOOLEAN_OPERATION') {
            // Robust check: look in top-level or props
            const op = node.booleanOperation || node.props?.booleanOperation || "UNION";
            return `createBooleanOperation("${node.name}", "${op}", ${finalOverridesStr}, ${childrenCode})`;
        }

        if (node.type === 'LINE') {
            return `createLine("${node.name}", ${finalOverridesStr})`;
        }
        if (node.type === 'RECTANGLE') {
            return `createRectangle("${node.name}", ${finalOverridesStr})`;
        }
        if (node.type === 'ELLIPSE') {
            return `createEllipse("${node.name}", ${finalOverridesStr})`;
        }

        // Generate Frame (Image Fill Check)
        if (node.type === 'FRAME') {
            const fillPath = pathContext ? `${pathContext}.props.fills[0].assetRef` : `props.fills[0].assetRef`;
            if (variablePaths.includes(fillPath)) {
                const key = this.pathToName(fillPath, null, node).replace(/[^a-zA-Z0-9_]/g, '');
                const fillObj = `{ visible: true, opacity: 1, blendMode: "NORMAL", type: "IMAGE", scaleMode: "FILL", assetRef: ${prefix}.${key} }`;

                // Handle dynamic fill: Replace static fills with dynamic one
                // Similar injection logic for Image
                delete overrides.fills;
                let overStr = this.stringifyOverrides(overrides);

                if (overStr.trim() === "{}") {
                    overStr = `{ fills: [${fillObj}] }`;
                } else {
                    overStr = overStr.replace(/\}$/, `, "fills": [${fillObj}] }`);
                }
                finalOverridesStr = overStr;
            }
        }

        return `createFrame("${node.name}", ${finalOverridesStr}, ${childrenCode})`;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private serializePropsFromJSON(node: any): any {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const overrides: any = {};
        if (node.layoutProps && Object.keys(node.layoutProps).length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const layoutOverrides: any = {};
            const standardLayout = {
                width: 100, height: 100, itemSpacing: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0,
                counterAxisSizingMode: "FIXED", primaryAxisSizingMode: "FIXED"
            };

            for (const key in node.layoutProps) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (node.layoutProps[key] !== (standardLayout as any)[key]) {
                    layoutOverrides[key] = node.layoutProps[key];
                }
            }
            if (Object.keys(layoutOverrides).length > 0) {
                // CROPPING FIX: If textAutoResize dictates usage of content size, we should NOT enforce fixed width/height
                const p = node.props;
                if (node.type === 'TEXT' && (p.textAutoResize === 'WIDTH_AND_HEIGHT' || p.textAutoResize === 'HEIGHT')) {
                    delete layoutOverrides.width;
                    delete layoutOverrides.height;
                }
                overrides.layoutProps = layoutOverrides;
            }
        }

        const p = node.props;
        if (p.layoutMode && p.layoutMode !== 'NONE') overrides.layoutMode = p.layoutMode;
        if (p.itemSpacing) overrides.itemSpacing = p.itemSpacing;
        if (p.paddingTop) overrides.paddingTop = p.paddingTop;
        if (p.paddingRight) overrides.paddingRight = p.paddingRight;
        if (p.paddingBottom) overrides.paddingBottom = p.paddingBottom;
        if (p.paddingLeft) overrides.paddingLeft = p.paddingLeft;

        // AutoLayout Advanced
        if (p.primaryAxisSizingMode && p.primaryAxisSizingMode !== 'FIXED') overrides.primaryAxisSizingMode = p.primaryAxisSizingMode;
        if (p.counterAxisSizingMode && p.counterAxisSizingMode !== 'FIXED') overrides.counterAxisSizingMode = p.counterAxisSizingMode;
        if (p.primaryAxisAlignItems && p.primaryAxisAlignItems !== 'MIN') overrides.primaryAxisAlignItems = p.primaryAxisAlignItems;
        if (p.counterAxisAlignItems && p.counterAxisAlignItems !== 'MIN') overrides.counterAxisAlignItems = p.counterAxisAlignItems;
        if (p.layoutAlign) overrides.layoutAlign = p.layoutAlign;
        if (p.layoutGrow) overrides.layoutGrow = p.layoutGrow;

        // Visuals
        if (p.fills && p.fills.length > 0) overrides.fills = p.fills;
        if (p.strokes && p.strokes.length > 0) overrides.strokes = p.strokes;
        if (p.effects && p.effects.length > 0) overrides.effects = p.effects;
        if (p.visible === false) overrides.visible = false;

        // Stroke Properties
        if (p.strokeWeight && p.strokeWeight !== 0) overrides.strokeWeight = p.strokeWeight;
        if (p.strokeAlign && p.strokeAlign !== 'INSIDE') overrides.strokeAlign = p.strokeAlign;
        if (p.strokeCap && p.strokeCap !== 'NONE') overrides.strokeCap = p.strokeCap;
        if (p.strokeJoin && p.strokeJoin !== 'MITER') overrides.strokeJoin = p.strokeJoin;
        if (p.dashPattern && p.dashPattern.length > 0) overrides.dashPattern = p.dashPattern;

        // Individual Strokes
        if (p.strokeTopWeight !== undefined && p.strokeTopWeight !== p.strokeWeight) overrides.strokeTopWeight = p.strokeTopWeight;
        if (p.strokeRightWeight !== undefined && p.strokeRightWeight !== p.strokeWeight) overrides.strokeRightWeight = p.strokeRightWeight;
        if (p.strokeBottomWeight !== undefined && p.strokeBottomWeight !== p.strokeWeight) overrides.strokeBottomWeight = p.strokeBottomWeight;
        if (p.strokeLeftWeight !== undefined && p.strokeLeftWeight !== p.strokeWeight) overrides.strokeLeftWeight = p.strokeLeftWeight;

        // Corner Radius
        if (p.cornerRadius !== undefined && p.cornerRadius !== 0) overrides.cornerRadius = p.cornerRadius;
        if (p.topLeftRadius !== undefined) overrides.topLeftRadius = p.topLeftRadius;
        if (p.topRightRadius !== undefined) overrides.topRightRadius = p.topRightRadius;
        if (p.bottomRightRadius !== undefined) overrides.bottomRightRadius = p.bottomRightRadius;
        if (p.bottomLeftRadius !== undefined) overrides.bottomLeftRadius = p.bottomLeftRadius;

        // Text Layout Props
        if (p.textAutoResize) overrides.textAutoResize = p.textAutoResize;
        if (p.textAlignHorizontal) overrides.textAlignHorizontal = p.textAlignHorizontal;
        if (p.textAlignVertical) overrides.textAlignVertical = p.textAlignVertical;

        // Font Props
        if (p.font) overrides.font = p.font;
        else if (p.fontName) overrides.font = { family: p.fontName.family, style: p.fontName.style };

        return overrides;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private stringifyOverrides(overrides: any): string {
        return JSON.stringify(overrides).replace(/"([^"]+)":/g, '$1:');
    }

    private serializeProps(node: SIRNode): string {
        // Filter out default props
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const overrides: any = {};

        // Layout props
        if (node.layoutProps && Object.keys(node.layoutProps).length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const layoutOverrides: any = {};
            const standardLayout = {
                width: 100, height: 100, itemSpacing: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0,
                counterAxisSizingMode: "FIXED", primaryAxisSizingMode: "FIXED"
            };

            for (const key in node.layoutProps) {
                // @ts-expect-error standardLayout allows indexing
                if (node.layoutProps[key] !== standardLayout[key]) {
                    layoutOverrides[key] = node.layoutProps[key];
                }
            }

            if (Object.keys(layoutOverrides).length > 0) {
                // CROPPING FIX: If textAutoResize dictates usage of content size, we should NOT enforce fixed width/height
                const p = node.props;
                if (node.type === 'TEXT' && (p.textAutoResize === 'WIDTH_AND_HEIGHT' || p.textAutoResize === 'HEIGHT')) {
                    delete layoutOverrides.width;
                    delete layoutOverrides.height;
                }
                overrides.layoutProps = layoutOverrides;
            }
        }

        // Core props (simplified for now)
        const p = node.props;
        if (p.layoutMode && p.layoutMode !== 'NONE') overrides.layoutMode = p.layoutMode;
        if (p.itemSpacing) overrides.itemSpacing = p.itemSpacing;
        if (p.paddingTop) overrides.paddingTop = p.paddingTop;
        if (p.paddingRight) overrides.paddingRight = p.paddingRight;
        if (p.paddingBottom) overrides.paddingBottom = p.paddingBottom;
        if (p.paddingLeft) overrides.paddingLeft = p.paddingLeft;

        // AutoLayout Advanced
        if (p.primaryAxisSizingMode && p.primaryAxisSizingMode !== 'FIXED') overrides.primaryAxisSizingMode = p.primaryAxisSizingMode;
        if (p.counterAxisSizingMode && p.counterAxisSizingMode !== 'FIXED') overrides.counterAxisSizingMode = p.counterAxisSizingMode;
        if (p.primaryAxisAlignItems && p.primaryAxisAlignItems !== 'MIN') overrides.primaryAxisAlignItems = p.primaryAxisAlignItems;
        if (p.counterAxisAlignItems && p.counterAxisAlignItems !== 'MIN') overrides.counterAxisAlignItems = p.counterAxisAlignItems;
        if (p.layoutAlign) overrides.layoutAlign = p.layoutAlign;
        if (p.layoutGrow) overrides.layoutGrow = p.layoutGrow;

        // Visuals
        if (p.fills && p.fills.length > 0) overrides.fills = p.fills;
        if (p.strokes && p.strokes.length > 0) overrides.strokes = p.strokes;
        if (p.effects && p.effects.length > 0) overrides.effects = p.effects;
        if (p.visible === false) overrides.visible = false;

        // Stroke Properties
        if (p.strokeWeight && p.strokeWeight !== 0) overrides.strokeWeight = p.strokeWeight;
        if (p.strokeAlign && p.strokeAlign !== 'INSIDE') overrides.strokeAlign = p.strokeAlign;
        if (p.strokeCap && p.strokeCap !== 'NONE') overrides.strokeCap = p.strokeCap;
        if (p.strokeJoin && p.strokeJoin !== 'MITER') overrides.strokeJoin = p.strokeJoin;
        if (p.dashPattern && p.dashPattern.length > 0) overrides.dashPattern = p.dashPattern;

        // Individual Strokes
        if (p.strokeTopWeight !== undefined && p.strokeTopWeight !== p.strokeWeight) overrides.strokeTopWeight = p.strokeTopWeight;
        if (p.strokeRightWeight !== undefined && p.strokeRightWeight !== p.strokeWeight) overrides.strokeRightWeight = p.strokeRightWeight;
        if (p.strokeBottomWeight !== undefined && p.strokeBottomWeight !== p.strokeWeight) overrides.strokeBottomWeight = p.strokeBottomWeight;
        if (p.strokeLeftWeight !== undefined && p.strokeLeftWeight !== p.strokeWeight) overrides.strokeLeftWeight = p.strokeLeftWeight;

        // Fills (only if not a simple SOLID white/black, handled by helpers usually)
        if (p.fills && p.fills.length > 0) {
            overrides.fills = p.fills;
        }

        // Corner Radius
        if (p.cornerRadius !== undefined && p.cornerRadius !== 0) overrides.cornerRadius = p.cornerRadius;
        if (p.topLeftRadius !== undefined) overrides.topLeftRadius = p.topLeftRadius;
        if (p.topRightRadius !== undefined) overrides.topRightRadius = p.topRightRadius;
        if (p.bottomRightRadius !== undefined) overrides.bottomRightRadius = p.bottomRightRadius;
        if (p.bottomLeftRadius !== undefined) overrides.bottomLeftRadius = p.bottomLeftRadius;

        // Text Layout Props
        if (p.textAutoResize) overrides.textAutoResize = p.textAutoResize;
        if (p.textAlignHorizontal) overrides.textAlignHorizontal = p.textAlignHorizontal;
        if (p.textAlignVertical) overrides.textAlignVertical = p.textAlignVertical;

        // Font Props
        if (p.font) overrides.font = p.font;
        else if (p.fontName) overrides.font = { family: p.fontName.family, style: p.fontName.style };

        // Serialize to string
        return JSON.stringify(overrides).replace(/"([^"]+)":/g, '$1:');
    }
}

import * as fs from 'fs';
import * as path from 'path';

// Standardized Intermediate Representation (SIR) Node
export interface SIRNode {
    id: string;
    type: string;
    name: string;
    props: Record<string, any>;
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

    /**
     * Phase 1: Input Analysis & Normalization
     * constant input -> SIR (Standardized Intermediate Representation)
     */
    public analyze(content: string): Map<string, SIRNode> {
        this.nodes.clear();
        this.assets.clear();
        this.rootId = null;

        // 1. Extract Assets
        this.extractAssets(content);

        // 2. Parse Nodes (Regex-based similar to ComponentRefactorer but simplified for SIR)
        const lines = content.split('\n');
        this.buildNodeGraph(lines);

        return this.nodes;
    }

    private extractAssets(content: string) {
        // Match inlined SVG constants
        const inlineRegex = /const ([\w_]+) = `(<svg[\s\S]*?<\/svg>)`;/g;
        let match;
        while ((match = inlineRegex.exec(content)) !== null) {
            this.assets.set(match[1], match[2]);
        }

        // Match external imports
        const importRegex = /import (SVG_[\w_]+|IMG_[\w_]+) from ["']([^"']+)["'];/g;
        while ((match = importRegex.exec(content)) !== null) {
            this.assets.set(match[1], `__EXTERNAL_REF__${match[1]}`);
        }
    }

    private buildNodeGraph(lines: string[]) {
        const getNode = (id: string): SIRNode => {
            if (!this.nodes.has(id)) {
                this.nodes.set(id, {
                    id,
                    type: 'FRAME', // Default, updated on creation
                    name: id,      // Default to ID
                    props: {},
                    layoutProps: {},
                    children: [],
                    parent: null
                });
            }
            return this.nodes.get(id)!;
        };

        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('//')) continue;

            // 1. Node Creation
            // const v1 = figma.createFrame();
            let match = trimmed.match(/const\s+(\w+)\s*=\s*figma\.create(\w+)\(\);/);
            if (match) {
                const node = getNode(match[1]);
                node.type = match[2].toUpperCase();
                // Special case for root usually? No, root is just the one that isn't a child of anyone else at the end
                if (match[1] === 'root' || !this.rootId) this.rootId = match[1];
                continue;
            }

            // 2. SVG Creation
            match = trimmed.match(/const\s+(\w+)\s*=\s*figma\.createNodeFromSvg\((\w+)\);/);
            if (match) {
                const node = getNode(match[1]);
                node.type = 'VECTOR';
                node.svgContentVar = match[2];
                continue;
            }

            // 3. Name Assignment
            // v1.name = "Card 1";
            match = trimmed.match(/(\w+)\.name\s*=\s*["'](.*)["'];/);
            if (match) {
                const node = getNode(match[1]);
                node.name = match[2];
                continue;
            }

            // 4. Props Assignment
            // v1.visible = true;
            // if (...) v1.visible = ...
            // We ignore conditional blocks for Phase 1 SIR generation, assuming static structural analysis first
            // Or we blindly capture the assignment.
            // Simplified regex for property assignment
            match = trimmed.match(/^(\w+)\.(\w+)\s*=\s*(.*)$/);
            if (match) {
                const id = match[1];
                const prop = match[2];
                let valStr = match[3].trim();
                if (valStr.endsWith(';')) valStr = valStr.slice(0, -1);

                if (prop === 'name' || prop === 'parent' || prop === 'removed') continue;

                try {
                    // Basic value parsing
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    let val: any;
                    if (valStr === 'true') val = true;
                    else if (valStr === 'false') val = false;
                    else if (!isNaN(Number(valStr))) val = Number(valStr);
                    else if ((valStr.startsWith('"') && valStr.endsWith('"')) || (valStr.startsWith("'") && valStr.endsWith("'"))) {
                        val = valStr.slice(1, -1);
                    }
                    else if (valStr.startsWith('COLORS.')) val = { __ref: valStr }; // Keep ref
                    else {
                        // Try JSON parse for objects
                        try { val = JSON.parse(valStr); } catch { val = valStr; }
                    }

                    getNode(id).props[prop] = val;
                } catch (e) {
                    // Ignore parsing errors
                }
                continue;
            }

            // 5. Layout Props (applySizeAndTransform)
            match = trimmed.match(/applySizeAndTransform\((\w+), (\{.*\})\);/);
            if (match) {
                const id = match[1];
                try {
                    // eslint-disable-next-line @typescript-eslint/no-implied-eval
                    const layout = new Function("return " + match[2])();
                    getNode(id).layoutProps = layout;
                } catch (e) { /* ignore */ }
                continue;
            }

            // 6. Appending (Tree Structure)
            // v1.appendChild(v2);
            match = trimmed.match(/(\w+)\.appendChild\((\w+)\);/);
            if (match) {
                const parentId = match[1];
                const childId = match[2];
                const parent = getNode(parentId);
                const child = getNode(childId);

                // Avoid duplicates if parsed multiple times
                if (!parent.children.includes(childId)) {
                    parent.children.push(childId);
                }
                child.parent = parentId;
                continue;
            }
        }
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
    public detectPatterns(): { lists: any[], composites: any[] } {
        const lists: any[] = [];
        const composites: any[] = [];
        const visited = new Set<string>();

        if (!this.rootId) return { lists, composites };

        // 1. Detect Composites (Bottom-Up)
        this.nodes.forEach(node => {
            if (this.isToggle(node)) {
                // transforms SIRNode into a virtual "Toggle" component logic
                composites.push({ type: 'TOGGLE', nodeId: node.id });
            } else if (this.isCheckbox(node)) {
                composites.push({ type: 'CHECKBOX', nodeId: node.id });
            }
        });

        // 2. Detect Lists (Top-Down)
        this.nodes.forEach(node => {
            if (node.children.length >= 2) {
                const groups = this.groupChildrenBySimilarity(node.children);
                groups.forEach(group => {
                    if (group.length >= 2) {
                        lists.push({
                            parentId: node.id,
                            itemIds: group,
                            schema: this.extractSchema(group)
                        });
                    }
                });
            }
        });

        return { lists, composites };
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
        if (node.name.toLowerCase().includes('checkbox')) return true;
        // Check content: Box (Rect/Frame) + Icon (Vector)
        if (node.children.length > 0) {
            const children = node.children.map(c => this.nodes.get(c)!);
            const hasVector = children.some(c => c.type === 'VECTOR');
            const hasFrame = children.some(c => c.type === 'FRAME' || c.type === 'RECTANGLE');
            if (hasVector && hasFrame && node.children.length <= 3) return true;
        }
        return false;
    }

    private groupChildrenBySimilarity(childIds: string[]): string[][] {
        const groups: string[][] = [];
        if (childIds.length === 0) return groups;

        let currentGroup: string[] = [childIds[0]];

        for (let i = 1; i < childIds.length; i++) {
            const prevId = childIds[i - 1];
            const currId = childIds[i];
            const prev = this.nodes.get(prevId)!;
            const curr = this.nodes.get(currId)!;

            if (this.areNodesStructurallySimilar(prev, curr)) {
                currentGroup.push(currId);
            } else {
                if (currentGroup.length >= 2) groups.push(currentGroup);
                currentGroup = [currId];
            }
        }
        if (currentGroup.length >= 2) groups.push(currentGroup);

        return groups;
    }

    private areNodesStructurallySimilar(a: SIRNode, b: SIRNode): boolean {
        if (a.type !== b.type) return false;
        if (a.children.length !== b.children.length) return false;

        // Deep check children types matching
        for (let i = 0; i < a.children.length; i++) {
            const childA = this.nodes.get(a.children[i])!;
            const childB = this.nodes.get(b.children[i])!;
            if (childA.type !== childB.type) return false;
        }
        return true;
    }

    private extractSchema(itemIds: string[]): any {
        // Identify which properties vary across items
        const schema: any = {};
        const firstId = itemIds[0];
        const first = this.nodes.get(firstId)!;

        // Traverse first item to find potential variable points (Text, Visible, Color)
        // For simplicity v1: Find all text nodes and extract their characters

        // Helper to find text descendants paths
        // Returns map: "children[0].children[1]" -> "Some Text"
        const extractTextMap = (node: SIRNode, prefix = ""): Map<string, string> => {
            const map = new Map<string, string>();
            if (node.type === 'TEXT' && node.props.characters) {
                map.set(prefix, node.props.characters);
            }
            node.children.forEach((c, i) => {
                const child = this.nodes.get(c)!;
                const childMap = extractTextMap(child, prefix ? `${prefix}.children[${i}]` : `children[${i}]`);
                childMap.forEach((v, k) => map.set(k, v));
            });
            return map;
        };

        const referenceMap = extractTextMap(first);

        // Check if these paths vary in other items
        const variablePaths: string[] = [];

        referenceMap.forEach((baseVal, path) => {
            let isVarying = false;
            for (let i = 1; i < itemIds.length; i++) {
                const item = this.nodes.get(itemIds[i])!;
                const val = this.getValueAtPath(item, path);
                if (val !== baseVal) {
                    isVarying = true;
                    break;
                }
            }
            if (isVarying) variablePaths.push(path);
        });

        // Build data objects for each item based on variable paths
        const data = itemIds.map(id => {
            const obj: any = {};
            const item = this.nodes.get(id)!;
            variablePaths.forEach(p => {
                // Name property based on node name ideally, simplified here
                const key = this.pathToName(p, referenceMap.get(p)!);
                obj[key] = this.getValueAtPath(item, p);
            });
            return obj;
        });

        return { variablePaths, data };
    }

    private getValueAtPath(node: SIRNode, pathStr: string): any {
        // pathStr: children[0].children[1]
        // Simplified traversal
        const parts = pathStr.split('.'); // ['children[0]', 'children[1]']
        let current: any = node;

        for (const part of parts) {
            if (part.startsWith('children[')) {
                const idx = parseInt(part.match(/\[(\d+)\]/)![1]);
                if (!current.children || !current.children[idx]) return undefined;
                current = this.nodes.get(current.children[idx]);
            }
        }

        if (current && current.type === 'TEXT') return current.props.characters;
        return undefined;
    }

    private pathToName(pathStr: string, sampleValue: string): string {
        // Heuristic: If sample is "Submit", name it "label". 
        // Or if path includes a named node, use that.
        // For now simple generic unique keys
        return "text_" + pathStr.replace(/[^a-zA-Z0-9]/g, '_');
    }

    /**
     * Phase 3: Abstraction (Factory Logic)
     */
    public generateHelperFunctions(): string {
        return `
// --- Helper Functions ---

const createFrame = (name: string, overrides: any = {}, children: any[] = []) => ({
    type: "FRAME" as const,
    name,
    props: { ...DEFAULT_PROPS, ...overrides },
    children,
    layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps }
});

const createText = (name: string, text: string, fontSize: number, style: string, color: any, overrides: any = {}) => ({
    type: "TEXT" as const,
    name,
    props: {
        ...DEFAULT_PROPS,
        strokeAlign: "OUTSIDE",
        characters: text,
        fontSize,
        font: { family: "Open Sans", style },
        fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color }],
        textAlignHorizontal: "LEFT", textAlignVertical: "TOP", textAutoResize: "WIDTH_AND_HEIGHT",
        paragraphSpacing: 0, paragraphIndent: 0,
        ...overrides
    },
    layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps }
});

const createVector = (name: string, svgContent: string, overrides: any = {}) => ({
    type: "VECTOR" as const,
    shouldFlatten: true,
    name,
    props: { ...DEFAULT_PROPS, ...overrides },
    layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps },
    svgContent
});

const createToggle = (name: string, isActive: boolean, overrides: any = {}) => {
    // Placeholder implementation - logic would be extracted from analysis
    const KNOB_COLOR = isActive ? COLORS.WHITE : COLORS.GREY_TEXT;
    const TRACK_COLOR = isActive ? COLORS.DARK_BLUE : COLORS.RATING_LABEL;
    /* ... toggle construction logic ... */
    return createFrame(name, { ...overrides }, []);
};

const createCheckbox = (name: string, isChecked: boolean, overrides: any = {}) => {
    /* ... checkbox construction logic ... */
    return createFrame(name, { ...overrides }, []);
};
`;
    }

    public convert(sourceCode: string, className: string): string {
        // Run Phase 1
        this.analyze(sourceCode);

        // Run Phase 2 (Pattern detection and data extraction would happen here)
        // const patterns = this.detectPatterns();

        // Run Phase 3: Get Helpers
        const helpers = this.generateHelperFunctions();

        // Phase 4: Reconstruction
        const treeCode = this.generateTreeCode(this.rootId);

        return `
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
// Assets
${Array.from(this.assets.entries()).map(([k, v]) => {
            if (v.startsWith('__EXTERNAL_REF__')) return `// External: ${k}`;
            return `const ${k} = \`${v}\`;`;
        }).join('\n')}

// --- Constants & Defaults ---
const COLORS = {
    // Extracted colors would go here
    WHITE: { r: 1, g: 1, b: 1 },
    BLACK: { r: 0, g: 0, b: 0 }
};

const DEFAULT_PROPS = {
    visible: true, opacity: 1, locked: false, blendMode: "PASS_THROUGH",
    isMask: false, maskType: "ALPHA",
    strokes: [], fills: [], effects: [], cornerRadius: 0
};

${helpers}

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

    private generateTreeCode(nodeId: string | null): string {
        if (!nodeId) return 'const structure: NodeDefinition = createFrame("Empty", {}, []);';

        const traverse = (id: string): string => {
            const node = this.nodes.get(id);
            if (!node) return 'null';

            let childrenCode = '[]';
            if (node.children.length > 0) {
                childrenCode = `[\n${node.children.map(c => traverse(c)).join(',\n')}\n]`;
            }

            // Clean props to overrides
            const overrides = this.serializeProps(node);

            if (node.type === 'TEXT') {
                const text = node.props.characters ? `"${node.props.characters}"` : '"Text"';
                const fontSize = node.props.fontSize || 12;
                const fontFamily = node.props.font?.family || "Open Sans";
                const fontStyle = node.props.font?.style || "Regular";
                const fills = node.props.fills;
                let colorStr = 'COLORS.BLACK';
                if (fills && fills.length > 0 && fills[0].type === 'SOLID') {
                    // Ideally we map this to COLORS constant
                    const c = fills[0].color;
                    colorStr = `{ r: ${c.r}, g: ${c.g}, b: ${c.b} }`;
                }

                return `createText("${node.name}", ${text}, ${fontSize}, "${fontStyle}", ${colorStr}, ${overrides})`;
            }

            if (node.type === 'VECTOR') {
                const svgVar = node.svgContentVar || '""';
                // If it was external ref, we need the variable name
                return `createVector("${node.name}", ${svgVar}, ${overrides})`;
            }

            // Default Frame
            return `createFrame("${node.name}", ${overrides}, ${childrenCode})`;
        };

        const rootExpr = traverse(nodeId);
        return `const structure: NodeDefinition = ${rootExpr};`;
    }

    private serializeProps(node: SIRNode): string {
        // Filter out default props
        const overrides: any = {};

        // Layout props
        if (node.layoutProps && Object.keys(node.layoutProps).length > 0) {
            overrides.layoutProps = { ...node.layoutProps };
            delete overrides.layoutProps.parentIsAutoLayout; // implied by helper
        }

        // Core props (simplified for now)
        if (node.props.layoutMode && node.props.layoutMode !== 'NONE') overrides.layoutMode = node.props.layoutMode;
        if (node.props.itemSpacing) overrides.itemSpacing = node.props.itemSpacing;
        if (node.props.paddingTop) overrides.paddingTop = node.props.paddingTop;

        // Serialize to string
        return JSON.stringify(overrides).replace(/"([^"]+)":/g, '$1:');
    }
}

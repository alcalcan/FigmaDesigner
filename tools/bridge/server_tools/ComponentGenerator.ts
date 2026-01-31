import * as fs from 'fs';
import * as path from 'path';
import { SerializedNode } from '../../../components/JsonReconstructor';
import { detectBakedRotation } from '../../../components/TransformHelpers';


export class ComponentGenerator {
    private assetsToCopy: Set<string> = new Set();
    private assetsToImport: Map<string, string> = new Map(); // assetPath -> varName
    private svgAssets: Map<string, string> = new Map();
    private componentName: string = '';
    private projectName: string = '';
    private sourceDir: string = '';
    private targetDir: string = '';
    private inMemoryAssets: Map<string, string> | null = null;

    /**
     * Main entry point to generate a component from a JSON file
     */
    public generate(jsonPath: string, projectName: string, previewMode: boolean = false, componentNameOverride?: string) {
        console.log(`[Generator] Generate called for ${jsonPath}`);
        console.log(`[Generator] Args: projectName=${projectName}, previewMode=${previewMode}, override=${componentNameOverride}`);

        const fullJsonPath = path.resolve(jsonPath);
        if (!fs.existsSync(fullJsonPath)) {
            throw new Error(`JSON file not found: ${fullJsonPath}`);
        }

        const data: SerializedNode = JSON.parse(fs.readFileSync(fullJsonPath, 'utf8'));
        // Sanitize project name to ensure consistent folder naming (e.g. "Alex_CookBook" instead of "Alex CookBook")
        this.projectName = (projectName || 'Default').replace(/[^a-z0-9]/gi, '_');

        this.componentName = (componentNameOverride || path.basename(jsonPath, path.extname(jsonPath))).replace(/[^a-z0-9]/gi, '_');
        this.sourceDir = path.dirname(fullJsonPath);

        this.targetDir = path.join(process.cwd(), 'components', this.projectName, this.componentName);
        // Change to LOCAL assets folder (inside component folder)
        const assetsTargetDir = path.join(this.targetDir, 'assets');

        if (!fs.existsSync(this.targetDir)) {
            fs.mkdirSync(this.targetDir, { recursive: true });
        }
        if (!fs.existsSync(assetsTargetDir)) {
            fs.mkdirSync(assetsTargetDir, { recursive: true });
        }

        this.assetsToCopy.clear();
        this.assetsToImport.clear();
        this.svgAssets.clear();

        // 1. Generate the Code
        const code = this.generateComponentCode(data);

        // 2. Write the .ts file
        const tsPath = path.join(this.targetDir, `${this.componentName}.ts`);
        fs.writeFileSync(tsPath, code);

        // 3. Copy Assets (Images) - Now to shared folder
        this.copyAssets(assetsTargetDir);

        // 4. Update Registry skipped here (Managed by build pipeline or explicit registerComponents calls)

        return {
            tsPath,
        };
    }

    /**
     * Generate code from memory without filesystem access
     */
    public generateFromMemory(data: SerializedNode, assets: { name: string, data: string }[], projectName: string): string {
        this.inMemoryAssets = new Map();
        assets.forEach(a => this.inMemoryAssets!.set(a.name, a.data));

        this.projectName = (projectName || 'Default').replace(/[^a-z0-9]/gi, '_');
        this.componentName = (data.name || 'Component').replace(/[^a-z0-9]/gi, '_');
        this.sourceDir = ''; // No source dir
        this.targetDir = ''; // No target dir

        this.assetsToCopy.clear();
        this.assetsToImport.clear();
        this.svgAssets.clear();

        return this.generateComponentCode(data);
    }

    private generateComponentCode(data: SerializedNode): string {
        const variableName = 'root';
        const bodyContent = this.generateNodeCode(data, variableName, false, '');

        // SVG Assets (written to disk and imported)
        let svgImports = '// SVG Imports\n';
        this.svgAssets.forEach((content, distinctKey) => {
            const safeRef = this.getSvgVariableName(distinctKey);
            const fileName = `${safeRef}.svg`;

            // Rel Path from Component File -> Assets Folder
            // Component is in components/Project/Component/Comp.ts
            // Assets are in components/Project/Component/assets/
            // So relative path is ./assets/
            const assetRelPath = `./assets/${fileName}`;

            // Target Dir is passed in copyAssets, but for SVGs we calculate it here based on assumption?
            // Wait, we defined assetsTargetDir in generate(), but generateComponentCode doesn't know it.
            // We need to construct the absolute path relative to this.targetDir (which is component folder)
            const fullAssetPath = path.join(this.targetDir, 'assets', fileName);
            if (this.targetDir) {
                fs.writeFileSync(fullAssetPath, content);
            }
            svgImports += `import SVG_${safeRef} from "${assetRelPath}";\n`;
        });

        const importPrefix = '../../';

        // Include Image Imports
        let imageImports = '';
        this.assetsToImport.forEach((varName, relPath) => {
            imageImports += `import ${varName} from "./${relPath}";\n`;
        });

        const applySizeAndTransformHelper = `
function applySizeAndTransform(
    node: SceneNode & LayoutMixin & GeometryMixin,
    opts: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        parentIsAutoLayout: boolean;
        layoutPositioning?: "AUTO" | "ABSOLUTE";
        constraints?: Constraints;
    }
) {
    const { width, height, relativeTransform, parentIsAutoLayout, constraints } = opts;
    const positioning = opts.layoutPositioning ?? "AUTO";

    if (typeof width === "number" && typeof height === "number") {
        node.resize(width, height);
    }

    if (constraints && "constraints" in node) {
        try {
            node.constraints = constraints;
        } catch (e) {
            console.warn("Failed to set constraints", e);
        }
    }

    if (relativeTransform) {
        const t = relativeTransform;
        const inFlow = parentIsAutoLayout && positioning !== "ABSOLUTE";

        // Strip translation in auto-layout flow; keep axis vectors
        const tx = inFlow ? 0 : t[0][2];
        const ty = inFlow ? 0 : t[1][2];

        try {
            node.relativeTransform = [
                [t[0][0], t[0][1], tx],
                [t[1][0], t[1][1], ty],
            ];
        } catch (e) {
            console.warn("Failed to set relativeTransform", e);
        }
    }
}
`;

        const rootOpts = {
            width: data.width,
            height: data.height,
            parentIsAutoLayout: false
            // Root behaves like absolute for inner contents, but external props control its x/y
        };
        const rootTransformCode = (data.width !== undefined && data.height !== undefined)
            ? `applySizeAndTransform(${variableName}, ${JSON.stringify(rootOpts)});\n`
            : '';

        return `import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "${importPrefix}BaseComponent";
${imageImports}
${svgImports}

${applySizeAndTransformHelper}

export class ${this.componentName} extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        ${bodyContent}

        ${rootTransformCode}
        ${variableName}.x = props.x ?? 0;
        ${variableName}.y = props.y ?? 0;

        return ${variableName};
    }
}
`;
    }

    private generateNodeCode(data: SerializedNode, varName: string, _parentIsAutoLayout: boolean = false, parentName: string = ''): string {
        const type = data.type;
        const safeType = (type || '').trim();
        let code = '';

        // --- Phase 0: Fix Group Sizing (Dynamic Calculation) ---
        // Groups in Figma have bounds determined by children. JSON sometimes reports stale or mismatching bounds
        // (e.g. height=16 but child at y=2.5 with height=16 -> real height 18.5).
        // This causes misalignment when the Group is placed in an AutoLayout frame.
        // We recalculate the bounds here to ensure the converted Frame is sized correctly.
        if (safeType === 'GROUP' && data.children && data.children.length > 0) {
            let minX = Infinity;
            let minY = Infinity;
            let maxX = -Infinity;
            let maxY = -Infinity;
            let hasValidChildren = false;

            data.children.forEach(child => {
                if (child.visible !== false) {
                    hasValidChildren = true;
                    // Children are now normalized relative to the group top-left (0,0) in captureNode (code.ts)
                    const cx = child.x || 0;
                    const cy = child.y || 0;
                    const cw = child.width || 0;
                    const ch = child.height || 0;

                    if (cx < minX) minX = cx;
                    if (cy < minY) minY = cy;
                    if (cx + cw > maxX) maxX = cx + cw;
                    if (cy + ch > maxY) maxY = cy + ch;
                }
            });

            if (hasValidChildren) {
                // Since children are now normalized relative to the Group top-left, 
                // the Group's width/height must be at least the max extent of its children.
                const calculatedWidth = Math.max(maxX, 0);
                const calculatedHeight = Math.max(maxY, 0);

                if (calculatedWidth > (data.width || 0)) data.width = calculatedWidth;
                if (calculatedHeight > (data.height || 0)) data.height = calculatedHeight;
            }
        }

        // --- Phase A: Create Node & Set Static Props ---
        if (safeType === 'BOOLEAN_OPERATION') {
            if (data.children && data.children.length > 0) {
                const childVars: string[] = [];
                data.children.forEach((child, index) => {
                    const childVar = `${varName}_child_${index}`;
                    code += `\n// Boolean Child: ${child.name}\n`;
                    code += this.generateNodeCode(child, childVar, false, data.name || '');

                    // Critical: Apply Transform/Size to children BEFORE they are merged into the Boolean Operation
                    // because figma.union/subtract consumes them as-is.
                    const childOpts = {
                        width: child.width,
                        height: child.height,
                        relativeTransform: child.relativeTransform,
                        parentIsAutoLayout: false, // Boolean ops are never auto-layout
                        layoutPositioning: child.layoutPositioning
                    };
                    if (childOpts.width !== undefined || childOpts.relativeTransform) {
                        code += `applySizeAndTransform(${childVar}, ${JSON.stringify(childOpts)});\n`;
                    }
                    if (child.x !== undefined) code += `${childVar}.x = ${child.x};\n`;
                    if (child.y !== undefined) code += `${childVar}.y = ${child.y};\n`;

                    childVars.push(childVar);
                });

                const opMap: Record<string, string> = { "UNION": "union", "SUBTRACT": "subtract", "INTERSECT": "intersect", "EXCLUDE": "exclude" };
                const method = opMap[data.booleanOperation || "UNION"] || "union";
                code += `const ${varName} = figma.${method}([${childVars.join(', ')}], figma.currentPage);\n`;
            } else {
                code += `const ${varName} = figma.createFrame(); // Empty Boolean Op\n`;
            }
        } else if (safeType === 'FRAME' || safeType === 'INSTANCE' || safeType === 'COMPONENT') {
            code += `const ${varName} = figma.createFrame();\n`;
        } else if (safeType === 'TEXT') {
            code += `const ${varName} = figma.createText();\n`;
        } else if (safeType === 'RECTANGLE') {
            code += `const ${varName} = figma.createRectangle();\n`;
        } else if (safeType === 'ELLIPSE') {
            code += `const ${varName} = figma.createEllipse();\n`;
        } else if (safeType === 'LINE') {
            code += `const ${varName} = figma.createLine();\n`;
        } else if (safeType === 'STAR' && !data.svgPath) {
            code += `const ${varName} = figma.createStar();\n`;
            if (data.pointCount !== undefined) code += `${varName}.pointCount = ${data.pointCount};\n`;
            if (data.innerRadius !== undefined) code += `${varName}.innerRadius = ${data.innerRadius};\n`;
        } else if (safeType === 'POLYGON' && !data.svgPath) {
            code += `const ${varName} = figma.createPolygon();\n`;
            if (data.pointCount !== undefined) code += `${varName}.pointCount = ${data.pointCount};\n`;
        } else if (safeType === 'VECTOR' || (data.svgPath && (safeType === 'STAR' || safeType === 'POLYGON'))) {
            if (data.svgPath) {
                const fullSvgPath = path.join(this.sourceDir, data.svgPath);
                console.log(`[Generator] Checking SVG: ${data.name} -> ${fullSvgPath}`);

                // --- BOLD CHEVRON FIX START ---
                // Detect the specific "Chevron" component using Parent Name (robust) or legacy SVG path match
                const isChevronDown = (data.name === 'Shape' && parentName && parentName.includes('Navigation / Chevron / Down')) ||
                    (data.svgPath && data.svgPath.includes('assets_icon_Shape_I977_492_70_461_svg_10x6'));

                if (isChevronDown) {
                    console.log(`[Generator] Applying BOLD CHEVRON FIX for ${data.name}`);
                    // Inject the Custom Bold Path (Solution A)
                    // We use the same variable name strategy but force the content
                    const distinctKey = `BOLD_CHEVRON_FIX_10x6`;
                    // Option A: Stroke-based chevron (M1 1 L5 5 L9 1)
                    // Note: We use a slightly larger viewbox or specific path to match 10x6 perfectly with 2px stroke
                    const boldContent = `<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1 L5 5 L9 1" stroke="#1A313C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
                    this.svgAssets.set(distinctKey, boldContent);

                    const safeRef = this.getSvgVariableName(distinctKey);
                    code += `const ${varName}_svgContainer = figma.createNodeFromSvg(SVG_${safeRef});\n`;
                    code += `${varName}_svgContainer.fills = [];\n`;
                    // Force the stroke color and weight on the container's children (paths) or just rely on SVG?
                    // The SVG has hardcoded stroke color. If we want it to match component props we might need to override.
                    // But for now, let's trust the SVG injection.
                    code += `const ${varName} = figma.flatten([${varName}_svgContainer]);\n`;
                    // Ensure the resulting vector has the correct properties (mirroring Option A manual fix)
                    code += `${varName}.fills = [];\n`;
                    code += `${varName}.strokes = [{type: 'SOLID', color: {r: 0.10196, g: 0.19216, b: 0.23529}}];\n`;
                    code += `${varName}.strokeWeight = 2;\n`;
                    code += `${varName}.strokeCap = "ROUND";\n`;
                    code += `${varName}.strokeJoin = "ROUND";\n`;

                    // Force Identity Transform to fix Double Rotation
                    data.relativeTransform = [[1, 0, 0], [0, 1, 0]];
                    data.width = 10;
                    data.height = 6;

                } else if ((this.inMemoryAssets && this.inMemoryAssets.has(data.svgPath || '')) || fs.existsSync(fullSvgPath)) {
                    let content = '';
                    if (this.inMemoryAssets && data.svgPath && this.inMemoryAssets.has(data.svgPath)) {
                        // Decode base64 if needed, or assume utf8? Packet usually sends base64 for 'data'
                        // If it's pure SVG text, it might be raw.
                        // But standardized packet usually base64 encodes binary. 
                        // Let's assume input is base64 for consistency with packet structure.
                        const b64 = this.inMemoryAssets.get(data.svgPath)!;
                        content = Buffer.from(b64, 'base64').toString('utf8');
                    } else if (this.targetDir && fs.existsSync(fullSvgPath)) {
                        content = fs.readFileSync(fullSvgPath, 'utf8');
                    } else {
                        console.warn(`[Generator] SVG not found in memory (and disk fallback disabled): ${data.svgPath}`);
                        code += `const ${varName} = figma.createVector(); // Asset missing\n`;
                        return code;
                    }

                    // Parse SVG dimensions to detect orientation mismatch (Baked rotation)
                    let svgW = 0, svgH = 0;
                    const wMatch = content.match(/width=["']([\d.]+)["']/);
                    const hMatch = content.match(/height=["']([\d.]+)["']/);
                    if (wMatch) svgW = parseFloat(wMatch[1]);
                    if (hMatch) svgH = parseFloat(hMatch[1]);

                    let useWidth = data.width;
                    let useHeight = data.height;
                    let overrideTransform = false;

                    // Mismatch detection: If SVG is Landscape and JSON is Portrait (or vice versa)
                    // AND they were roughly similar in area (sanity check), implies 90deg rotation was baked into path.
                    if (detectBakedRotation(svgW, svgH, useWidth || 0, useHeight || 0)) {
                        // Orientation swap detected.
                        // The SVG path is likely already "unrotated" relative to the visual expectation, 
                        // but the JSON still carries the rotation metadata.
                        // Fix: Use dimensions from SVG asset and IDENTITY transform (no rotation).
                        console.log(`[Generator] Fixing baked rotation for ${data.name || 'Vector'} (${data.svgPath})`);

                        useWidth = svgW;
                        useHeight = svgH;
                        overrideTransform = true;
                    }

                    // Patch SVG Header to match target dimensions (Fix clipping)
                    if (useWidth && useHeight) {
                        // Replace the opening <svg ...> tag entirely
                        content = content.replace(/<svg[^>]*>/i,
                            `<svg width="${useWidth}" height="${useHeight}" viewBox="0 0 ${useWidth} ${useHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">`
                        );
                    }

                    // Use unique key for dimensions to avoid conflicts
                    const distinctKey = `${data.svgPath}_${useWidth}x${useHeight}`;
                    this.svgAssets.set(distinctKey, content);

                    const safeRef = this.getSvgVariableName(distinctKey);
                    code += `const ${varName}_svgContainer = figma.createNodeFromSvg(SVG_${safeRef});\n`;
                    code += `${varName}_svgContainer.fills = []; // Ensure transparent background\n`;
                    code += `const ${varName} = figma.flatten([${varName}_svgContainer]);\n`;

                    if (overrideTransform) {
                        data.width = useWidth;
                        data.height = useHeight;
                        data.relativeTransform = [[1, 0, 0], [0, 1, 0]]; // Identity
                    }
                } else {
                    console.warn(`[Generator] SVG file NOT found: ${fullSvgPath}`);
                }
            } else if (data.vectorPaths && data.vectorPaths.length > 0) {
                // Synthesize SVG from vectorPaths to ensure Procedural Converter compatibility
                let svgContent = `<svg width="${data.width || 100}" height="${data.height || 100}" viewBox="0 0 ${data.width || 100} ${data.height || 100}" fill="none" xmlns="http://www.w3.org/2000/svg">`;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (data.vectorPaths as any[]).forEach((vp: any) => {
                    const rule = vp.windingRule === "NONZERO" ? "nonzero" : "evenodd";
                    svgContent += `<path d="${vp.data}" fill="black" fill-rule="${rule}" clip-rule="${rule}" stroke="none" />`;
                });
                svgContent += `</svg>`;

                const distinctKey = `Synth_${(data.name || 'Vec').replace(/[^a-zA-Z0-9]/g, '')}_${this.svgAssets.size}`;
                this.svgAssets.set(distinctKey, svgContent);
                const safeRef = this.getSvgVariableName(distinctKey);

                code += `const ${varName}_svgContainer = figma.createNodeFromSvg(SVG_${safeRef});\n`;
                // Resize container to frame size before flattening to ensure correct bounds
                code += `${varName}_svgContainer.resize(${data.width || 1}, ${data.height || 1});\n`;
                code += `const ${varName} = figma.flatten([${varName}_svgContainer]);\n`;
            } else {
                code += `const ${varName} = figma.createVector();\n`;
            }
        } else if (safeType === 'GROUP') {
            code += `const ${varName} = figma.createFrame(); // Group handled as Frame\n`;
            code += `${varName}.fills = []; // Groups normally have no fills, but Frame defaults to white\n`;
            code += `${varName}.clipsContent = false; // Groups never clip content\n`;
            code += `${varName}.strokes = [];\n`;
            code += `${varName}.strokeWeight = 0;\n`;
        } else {
            code += `const ${varName} = figma.createFrame(); // Fallback for ${safeType}\n`;
        }

        // Basic Properties
        code += `${varName}.name = "${(data.name || 'Unnamed').replace(/"/g, '\\"')}";\n`;
        if (data.visible !== undefined) code += `${varName}.visible = ${data.visible};\n`;
        if (data.opacity !== undefined) code += `${varName}.opacity = ${data.opacity};\n`;
        if (data.locked !== undefined) code += `${varName}.locked = ${data.locked};\n`;
        if (data.blendMode) code += `if ("blendMode" in ${varName}) ${varName}.blendMode = "${data.blendMode}";\n`;
        if (data.isMask !== undefined) code += `if ("isMask" in ${varName}) ${varName}.isMask = ${data.isMask};\n`;
        if (data.maskType) code += `if ("maskType" in ${varName}) ${varName}.maskType = "${data.maskType}";\n`;
        if (data.clipsContent !== undefined) code += `if ("clipsContent" in ${varName}) ${varName}.clipsContent = ${data.clipsContent};\n`;

        // 1. Container Layout Props (Must be set BEFORE appending children to avoid reflow spikes)
        let isCurrentNodeAutoLayout = false;
        if (data.layout && (safeType === 'FRAME' || safeType === 'INSTANCE' || safeType === 'COMPONENT' || safeType === 'GROUP')) {
            code += `if ("layoutMode" in ${varName}) {\n`;
            if (data.layout.mode && data.layout.mode !== "NONE") {
                code += `    ${varName}.layoutMode = "${data.layout.mode}";\n`;
                isCurrentNodeAutoLayout = true;

                if (data.layout.sizing) {
                    const isHorizontal = data.layout.mode === "HORIZONTAL";
                    const primarySizing = isHorizontal ? data.layout.sizing.horizontal : data.layout.sizing.vertical;
                    const counterSizing = isHorizontal ? data.layout.sizing.vertical : data.layout.sizing.horizontal;

                    if (primarySizing) code += `    ${varName}.primaryAxisSizingMode = "${primarySizing === 'AUTO' ? 'AUTO' : 'FIXED'}";\n`;
                    if (counterSizing) code += `    ${varName}.counterAxisSizingMode = "${counterSizing === 'AUTO' ? 'AUTO' : 'FIXED'}";\n`;
                }
                if (data.layout.alignment) {
                    if (data.layout.alignment.primary) {
                        const align = data.layout.alignment.primary === 'SPACE_BETWEEN' ? 'SPACE_BETWEEN' : data.layout.alignment.primary;
                        code += `    ${varName}.primaryAxisAlignItems = "${align}";\n`;
                    }
                    if (data.layout.alignment.counter) code += `    ${varName}.counterAxisAlignItems = "${data.layout.alignment.counter}";\n`;
                }
                if (data.layout.spacing !== undefined) code += `    ${varName}.itemSpacing = ${data.layout.spacing};\n`;
                if (data.layout.padding) {
                    // Check against undefined simply
                    if (data.layout.padding.top !== undefined) code += `    ${varName}.paddingTop = ${data.layout.padding.top};\n`;
                    if (data.layout.padding.right !== undefined) code += `    ${varName}.paddingRight = ${data.layout.padding.right};\n`;
                    if (data.layout.padding.bottom !== undefined) code += `    ${varName}.paddingBottom = ${data.layout.padding.bottom};\n`;
                    if (data.layout.padding.left !== undefined) code += `    ${varName}.paddingLeft = ${data.layout.padding.left};\n`;
                }
                if (data.layout.itemReverseZIndex !== undefined) code += `    ${varName}.itemReverseZIndex = ${data.layout.itemReverseZIndex};\n`;
                if (data.layout.strokesIncludedInLayout !== undefined) code += `    ${varName}.strokesIncludedInLayout = ${data.layout.strokesIncludedInLayout};\n`;
            } else {
                code += `    ${varName}.layoutMode = "NONE";\n`;
            }
            code += `}\n`;
        }

        // 2. Visual Properties (Fills, Strokes, Effects) - Safe to apply here
        if (Array.isArray(data.fills) && (safeType !== 'VECTOR' || !data.svgPath)) {
            code += `${varName}.fills = await this.hydratePaints(${this.stringifyPaints(data.fills)});\n`;
        }
        if (data.strokes && Array.isArray(data.strokes)) {
            code += `${varName}.strokes = await this.hydratePaints(${this.stringifyPaints(data.strokes)});\n`;
        } else if (data.strokes) {
            // fallback
        }
        if (data.strokeWeight !== undefined && typeof data.strokeWeight === 'number') code += `${varName}.strokeWeight = ${data.strokeWeight};\n`;
        if (data.strokeAlign) code += `${varName}.strokeAlign = "${data.strokeAlign}";\n`;
        if (data.strokeCap) code += `if ("strokeCap" in ${varName}) ${varName}.strokeCap = "${data.strokeCap}";\n`;
        if (data.strokeJoin) code += `if ("strokeJoin" in ${varName}) ${varName}.strokeJoin = "${data.strokeJoin}";\n`;
        if (data.dashPattern && data.dashPattern.length > 0) code += `if ("dashPattern" in ${varName}) ${varName}.dashPattern = ${JSON.stringify(data.dashPattern)};\n`;
        if (data.strokeMiterLimit !== undefined && typeof data.strokeMiterLimit === 'number') code += `if ("strokeMiterLimit" in ${varName}) ${varName}.strokeMiterLimit = ${data.strokeMiterLimit};\n`;

        // Always generate individual weights if they exist (even if 0) to override uniform strokeWeight
        if (data.strokeTopWeight !== undefined) code += `if ("strokeTopWeight" in ${varName}) ${varName}.strokeTopWeight = ${data.strokeTopWeight};\n`;
        if (data.strokeRightWeight !== undefined) code += `if ("strokeRightWeight" in ${varName}) ${varName}.strokeRightWeight = ${data.strokeRightWeight};\n`;
        if (data.strokeBottomWeight !== undefined) code += `if ("strokeBottomWeight" in ${varName}) ${varName}.strokeBottomWeight = ${data.strokeBottomWeight};\n`;
        if (data.strokeLeftWeight !== undefined) code += `if ("strokeLeftWeight" in ${varName}) ${varName}.strokeLeftWeight = ${data.strokeLeftWeight};\n`;

        if (data.effects) code += `${varName}.effects = ${JSON.stringify(data.effects)};\n`;
        if (data.cornerRadius !== undefined) {
            if (data.cornerRadius === "mixed") {
                if (data.corners) {
                    if (data.corners.topLeft) code += `if ("topLeftRadius" in ${varName}) ${varName}.topLeftRadius = ${data.corners.topLeft};\n`;
                    if (data.corners.topRight) code += `if ("topRightRadius" in ${varName}) ${varName}.topRightRadius = ${data.corners.topRight};\n`;
                    if (data.corners.bottomRight) code += `if ("bottomRightRadius" in ${varName}) ${varName}.bottomRightRadius = ${data.corners.bottomRight};\n`;
                    if (data.corners.bottomLeft) code += `if ("bottomLeftRadius" in ${varName}) ${varName}.bottomLeftRadius = ${data.corners.bottomLeft};\n`;
                }
            } else {
                code += `if ("cornerRadius" in ${varName}) ${varName}.cornerRadius = ${typeof data.cornerRadius === 'number' ? data.cornerRadius : JSON.stringify(data.cornerRadius)};\n`;
            }
        }


        // 3. Text Properties
        if (safeType === 'TEXT' && data.text) {
            code += `// Text Properties\n`;
            code += `${varName}.characters = \`${(data.text.characters || '').replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`;\n`;
            if (typeof data.text.fontSize === 'number') code += `${varName}.fontSize = ${data.text.fontSize};\n`;
            if (data.text.textAlignHorizontal) code += `${varName}.textAlignHorizontal = "${data.text.textAlignHorizontal}";\n`;
            if (data.text.textAlignVertical) code += `${varName}.textAlignVertical = "${data.text.textAlignVertical}";\n`;
            if (data.text.textAutoResize === "TRUNCATE") {
                code += `${varName}.textTruncation = "ENDING";\n`;
            } else {
                if (data.text.textAutoResize) code += `${varName}.textAutoResize = "${data.text.textAutoResize}";\n`;
            }

            if (data.text.letterSpacing) {
                const ls = data.text.letterSpacing;
                if (typeof ls === 'number') {
                    code += `${varName}.letterSpacing = { value: ${ls}, unit: "PIXELS" };\n`;
                } else if (ls && typeof ls === 'object') {
                    code += `${varName}.letterSpacing = ${JSON.stringify(ls)};\n`;
                }
            }

            if (data.text.lineHeight) {
                const lh = data.text.lineHeight;
                if (typeof lh === 'number') {
                    code += `${varName}.lineHeight = { value: ${lh}, unit: "PIXELS" };\n`;
                } else if (lh && typeof lh === 'object') {
                    code += `${varName}.lineHeight = ${JSON.stringify(lh)};\n`;
                }
            }

            if (data.text.textCase) code += `if ("textCase" in ${varName}) ${varName}.textCase = "${data.text.textCase}";\n`;
            if (data.text.textDecoration) code += `if ("textDecoration" in ${varName}) ${varName}.textDecoration = "${data.text.textDecoration}";\n`;

            if (data.text.paragraphSpacing !== undefined && typeof data.text.paragraphSpacing === 'number') code += `${varName}.paragraphSpacing = ${data.text.paragraphSpacing};\n`;
            if (data.text.paragraphIndent !== undefined && typeof data.text.paragraphIndent === 'number') code += `${varName}.paragraphIndent = ${data.text.paragraphIndent};\n`;

            if (data.text.fontName && data.text.fontName !== "mixed") {
                code += `await this.setFont(${varName}, ${JSON.stringify(data.text.fontName)});\n`;
            }

            if (data.text.segments) {
                code += `// Styled Segments\n`;
                for (let i = 0; i < data.text.segments.length; i++) {
                    const seg = data.text.segments[i];
                    const start = seg.start || 0;
                    const end = seg.end || 0;
                    if (seg.fontName) code += `await this.setRangeFont(${varName}, ${start}, ${end}, ${JSON.stringify(seg.fontName)});\n`;
                    if (seg.fills) code += `${varName}.setRangeFills(${start}, ${end}, ${JSON.stringify(seg.fills)});\n`;
                    if (seg.fontSize) code += `${varName}.setRangeFontSize(${start}, ${end}, ${seg.fontSize});\n`;
                }
            }
        }

        // 4. Vector Paths
        if (safeType === 'VECTOR' && data.vectorPaths && !data.svgPath) {
            code += `${varName}.vectorPaths = ${JSON.stringify(data.vectorPaths)};\n`;
        }

        // 5. Recursion (Children) using Phase B (Append) logic inside the loop
        if (safeType !== 'BOOLEAN_OPERATION' && data.children && data.children.length > 0) {
            data.children.forEach((child, index) => {
                const childVar = `${varName}_child_${index}`;
                code += `\n// Start Child: ${child.name}\n`;

                // Recursively generate child (Phase A inside child)
                code += this.generateNodeCode(child, childVar, isCurrentNodeAutoLayout, data.name || '');

                // Phase B: Append (Now happens BEFORE Layout Props & Transform)
                code += `${varName}.appendChild(${childVar});\n`;

                // --- Phase C: Child Layout Props (Apply AFTER append) ---
                if (isCurrentNodeAutoLayout) {
                    code += `// Child Layout Props\n`;
                    if (child.layoutPositioning && child.layoutPositioning !== "AUTO") {
                        code += `${childVar}.layoutPositioning = "${child.layoutPositioning}";\n`;
                    }
                    if (child.layoutAlign) code += `${childVar}.layoutAlign = "${child.layoutAlign}";\n`;
                    if (child.layoutGrow !== undefined) code += `${childVar}.layoutGrow = ${child.layoutGrow};\n`;
                }

                // --- Phase D: Size & Transform (Atomic with context, AFTER append) ---
                const childOpts = {
                    width: child.width,
                    height: child.height,
                    relativeTransform: child.relativeTransform,
                    parentIsAutoLayout: isCurrentNodeAutoLayout,
                    layoutPositioning: child.layoutPositioning,
                    constraints: child.constraints
                };

                if (childOpts.width !== undefined || childOpts.relativeTransform) {
                    code += `applySizeAndTransform(${childVar}, ${JSON.stringify(childOpts)});\n`;
                }

                // Explicit Position Override (Reliable fallback if relativeTransform specific translation is tricky)
                if (!isCurrentNodeAutoLayout && child.layoutPositioning !== 'ABSOLUTE') {
                    if (child.x !== undefined) code += `${childVar}.x = ${child.x};\n`;
                    if (child.y !== undefined) code += `${childVar}.y = ${child.y};\n`;
                }
            });
        }

        return code;
    }

    private copyAssets(targetDir: string) {
        this.assetsToCopy.forEach(entry => {
            // Entry format: "path/to/source.png|unique_dest_name.png"
            // Or legacy: "path/to/source.png" (if no pipe)
            const parts = entry.split('|');
            const assetPath = parts[0];
            const destName = parts.length > 1 ? parts[1] : path.basename(assetPath);

            const sourcePath = path.join(this.sourceDir, assetPath);
            const targetPath = path.join(targetDir, destName);

            if (fs.existsSync(sourcePath)) {
                // Check if file exists to avoid unnecessary overwrite? 
                // Creating unique names means we likely don't overwrite unless same generation.
                fs.copyFileSync(sourcePath, targetPath);
                console.log(`Copied asset: ${path.relative(process.cwd(), targetPath)}`);
            }
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private stringifyPaints(paints: any[]): string {
        // Create a deep copy to avoid mutating the original data
        const processedPaints = JSON.parse(JSON.stringify(paints));

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        processedPaints.forEach((p: any) => {
            // 1. Bake Gradients (Handles -> Transform)
            if (p.type && p.type.startsWith("GRADIENT") && p.gradientHandles) {
                const [p0, p1, p2] = p.gradientHandles;
                p.gradientTransform = [
                    [p1.x - p0.x, p2.x - p0.x, p0.x],
                    [p1.y - p0.y, p2.y - p0.y, p0.y],
                ];
                delete p.gradientHandles;
            }

            // 2. Asset handling with optimization (2MB limit)
            if (p.assetRef) {
                const sourcePath = path.join(this.sourceDir, p.assetRef);
                let finalAssetRef = p.assetRef;
                let skipBundling = false;

                if (this.targetDir && ((this.inMemoryAssets && this.inMemoryAssets.has(path.basename(p.assetRef))) || fs.existsSync(sourcePath))) {
                    let sizeMB = 0;
                    if (this.inMemoryAssets) {
                        // In memory assets are base64, estimate size
                        const b64 = this.inMemoryAssets.get(path.basename(p.assetRef)) || '';
                        sizeMB = (b64.length * 0.75) / (1024 * 1024);
                    } else if (fs.existsSync(sourcePath)) {
                        const stats = fs.statSync(sourcePath);
                        sizeMB = stats.size / (1024 * 1024);
                    }

                    if (sizeMB > 2 && !this.inMemoryAssets) { // Only optimize if on disk
                        // Optimize using sips
                        console.log(`Optimizing large asset: ${p.assetRef} (${sizeMB.toFixed(2)}MB)`);
                        const ext = path.extname(p.assetRef);
                        const base = path.basename(p.assetRef, ext);
                        const optimizedName = `${base}_opt${ext}`;
                        const optimizedRelPath = path.join(path.dirname(p.assetRef), optimizedName);
                        const optimizedPath = path.join(this.sourceDir, optimizedRelPath);

                        try {
                            // eslint-disable-next-line @typescript-eslint/no-var-requires
                            const { execSync } = require('child_process');
                            // Resample to max 1024px dimension
                            execSync(`sips -Z 1024 "${sourcePath}" --out "${optimizedPath}"`);

                            if (fs.existsSync(optimizedPath)) {
                                const newStats = fs.statSync(optimizedPath);
                                console.log(`  -> Optimized to: ${optimizedName} (${(newStats.size / (1024 * 1024)).toFixed(2)}MB)`);
                                finalAssetRef = optimizedRelPath;
                                // If it's still somehow > 5MB, maybe skip or just warn?
                            } else {
                                console.warn("  -> Optimization failed, output not found.");
                                // Fallback to original, let it fail build or skip? 
                                // Reset to skipping to be safe
                                skipBundling = true;
                            }
                        } catch (err) {
                            console.error("  -> sips optimization error:", err);
                            skipBundling = true;
                        }
                    }
                }

                if (!skipBundling) {
                    const fileName = path.basename(finalAssetRef);
                    const safeName = fileName.replace(/[^a-z0-9]/gi, '_');

                    // --- ASSET NAMING SAFETY ---
                    // Prepend component name for uniqueness in shared folder
                    const safeCompName = this.componentName.replace(/[^a-z0-9]/gi, '_');
                    const uniqueFileName = `${safeCompName}_${fileName}`;
                    const uniqueSafeName = uniqueFileName.replace(/[^a-z0-9]/gi, '_');

                    const varName = `IMG_${uniqueSafeName}`;

                    // We store the SOURCE path in assetsToCopy map key, but we need to track the DESTINATION name too?
                    // assetsToCopy is Set<string> of source paths.
                    // If we just store source path, copyAssets won't know the new name.
                    // We need to change assetsToCopy to Map<source, destName> or handle it here.

                    // Actually, let's just hack it: 
                    // We will piggyback on assetsToImport logic.
                    // assetsToImport: Map<string, string> (relPath -> varName)
                    // The 'relPath' in the map is what is written to the import statement.
                    // So we should set the relPath to `./assets/${uniqueFileName}`

                    this.assetsToImport.set(`./assets/${uniqueFileName}`, varName);

                    // For copying, we need a map: Source -> DestFilename
                    // I will change assetsToCopy to a Map.
                    // Since I can't change the Class property type easily without reading top of file again (I viewed it),
                    // I will check if I can safely change it.
                    // Line 8: private assetsToCopy: Set<string> = new Set();
                    // I can use `any` cast or just use a new map if I could, but I can't add local field easily.
                    // I will use a separate map on the instance? No, `assetsToCopy` is a field.
                    // I will cast it to `inputs` or something?
                    // Let's rely on `copyAssets` taking the map.
                    // Wait, `copyAssets` iterates `this.assetsToCopy`.
                    // I will REWRITE `copyAssets` and the field definition in a moment.
                    // For now, I will store: "SOURCE_PATH|DEST_NAME" in the Set.
                    this.assetsToCopy.add(`${finalAssetRef}|${uniqueFileName}`);

                    // placeholder for string replacement below
                    p.assetRef = `__VAR_REF__${varName}__`;
                    p.visible = true; // Ensure visible
                } else {
                    delete p.assetRef;
                    p.visible = false;
                }
            }
        });

        let json = JSON.stringify(processedPaints);

        // Final replacement of placeholders with unquoted variable names
        this.assetsToImport.forEach((varName) => {
            const search = `"__VAR_REF__${varName}__"`;
            json = json.replace(new RegExp(search, 'g'), varName);
        });

        return json;
    }


    private getSvgVariableName(distinctKey: string): string {
        const safeCompName = this.componentName.replace(/[^a-z0-9]/gi, '_');
        let safeKey = distinctKey.replace(/[^a-z0-9]/gi, '_');
        if (!safeKey.startsWith(safeCompName)) {
            safeKey = `${safeCompName}_${safeKey}`;
        }
        return safeKey;
    }
}

import * as fs from 'fs';
import * as path from 'path';
import { SerializedNode } from '../components/JsonReconstructor';

export class ComponentGenerator {
    private assetsToCopy: Set<string> = new Set();
    private assetsToImport: Map<string, string> = new Map(); // assetPath -> varName
    private svgAssets: Map<string, string> = new Map();
    private componentName: string = '';
    private projectName: string = '';
    private sourceDir: string = '';

    /**
     * Main entry point to generate a component from a JSON file
     */
    public generate(jsonPath: string, projectName: string) {
        const fullJsonPath = path.resolve(jsonPath);
        if (!fs.existsSync(fullJsonPath)) {
            throw new Error(`JSON file not found: ${fullJsonPath}`);
        }

        const data: SerializedNode = JSON.parse(fs.readFileSync(fullJsonPath, 'utf8'));
        this.projectName = projectName;
        this.componentName = (data.name || 'GeneratedComponent').replace(/[^a-z0-9]/gi, '_');
        this.sourceDir = path.dirname(fullJsonPath);

        const targetDir = path.join(process.cwd(), 'components', projectName, this.componentName);
        const assetsTargetDir = path.join(targetDir, 'assets');

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
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
        const tsPath = path.join(targetDir, `${this.componentName}.ts`);
        fs.writeFileSync(tsPath, code);

        // 3. Copy Assets (Images)
        this.copyAssets(assetsTargetDir);

        // 4. Update Registry
        this.updateRegistry();

        return {
            tsPath,
            componentName: this.componentName,
            projectName: this.projectName
        };
    }

    private generateComponentCode(data: SerializedNode): string {
        const variableName = 'root';
        const bodyContent = this.generateNodeCode(data, variableName);

        // Include SVG strings
        let svgCode = '// SVG Assets\n';
        this.svgAssets.forEach((content, ref) => {
            const safeRef = ref.replace(/[^a-z0-9]/gi, '_');
            const safeContent = content.replace(/`/g, '\\`').replace(/\$/g, '\\$');
            svgCode += `const SVG_${safeRef} = \`${safeContent}\`;\n`;
        });

        const importPrefix = '../../';

        // Include Image Imports
        let imageImports = '';
        this.assetsToImport.forEach((varName, relPath) => {
            imageImports += `import ${varName} from "./${relPath}";\n`;
        });

        const applySizeAndTransformHelper = `
type T2x3 = [[number, number, number], [number, number, number]];
function applySizeAndTransform(
    node: SceneNode & LayoutMixin & GeometryMixin,
    opts: {
        width?: number;
        height?: number;
        relativeTransform?: T2x3;
        parentIsAutoLayout: boolean;
        layoutPositioning?: "AUTO" | "ABSOLUTE";
    }
) {
    const { width, height, relativeTransform, parentIsAutoLayout } = opts;
    const positioning = opts.layoutPositioning ?? "AUTO";

    if (typeof width === "number" && typeof height === "number") {
        node.resize(width, height);
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

        return `import { BaseComponent, ComponentProps } from "${importPrefix}BaseComponent";
${imageImports}

${svgCode}

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
        ${variableName}.x = props.x;
        ${variableName}.y = props.y;

        return ${variableName};
    }
}
`;
    }

    private generateNodeCode(data: SerializedNode, varName: string, _parentIsAutoLayout: boolean = false): string {
        const type = data.type;
        const safeType = (type || '').trim();
        let code = '';

        // --- Phase 0: Fix Group Sizing (Dynamic Calculation) ---
        // Groups in Figma have bounds determined by children. JSON sometimes reports stale or mismatching bounds
        // (e.g. height=16 but child at y=2.5 with height=16 -> real height 18.5).
        // This causes misalignment when the Group is placed in an AutoLayout frame.
        // We recalculate the bounds here to ensure the converted Frame is sized correctly.
        if (safeType === 'GROUP' && data.children && data.children.length > 0) {
            let maxX = 0;
            let maxY = 0;
            let hasValidChildren = false;

            data.children.forEach(child => {
                if (child.visible !== false) {
                    hasValidChildren = true;
                    // Simple bounding box addition (ignoring rotation for now as typical groups are axis-aligned)
                    const cx = child.x || 0;
                    const cy = child.y || 0;
                    const cw = child.width || 0;
                    const ch = child.height || 0;

                    const right = cx + cw;
                    const bottom = cy + ch;

                    if (right > maxX) maxX = right;
                    if (bottom > maxY) maxY = bottom;
                }
            });

            if (hasValidChildren) {
                // If calculated bounds are larger than reported, trust the calculation (content expands group)
                // We typically don't shrink because there might be invisible spacers or reasons, 
                // but expanding is necessary to prevent clipping/misalignment.
                if (maxX > (data.width || 0)) data.width = maxX;
                if (maxY > (data.height || 0)) data.height = maxY;
            }
        }

        // --- Phase A: Create Node & Set Static Props ---
        if (safeType === 'BOOLEAN_OPERATION') {
            if (data.children && data.children.length > 0) {
                const childVars: string[] = [];
                data.children.forEach((child, index) => {
                    const childVar = `${varName}_child_${index}`;
                    code += `\n// Boolean Child: ${child.name}\n`;
                    code += this.generateNodeCode(child, childVar, false);

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
        } else if (safeType === 'VECTOR') {
            if (data.svgPath) {
                const fullSvgPath = path.join(this.sourceDir, data.svgPath);
                if (fs.existsSync(fullSvgPath)) {
                    let content = fs.readFileSync(fullSvgPath, 'utf8');

                    // Patch SVG Header to match JSON dimensions (Fix clipping)
                    if (data.width && data.height) {
                        const w = data.width;
                        const h = data.height;
                        // Replace the opening <svg ...> tag entirely
                        content = content.replace(/<svg[^>]*>/i,
                            `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">`
                        );
                    }

                    // Use unique key for dimensions to avoid conflicts
                    const distinctKey = `${data.svgPath}_${data.width}x${data.height}`;
                    this.svgAssets.set(distinctKey, content);

                    const safeRef = distinctKey.replace(/[^a-z0-9]/gi, '_');
                    code += `const ${varName}_svgContainer = figma.createNodeFromSvg(SVG_${safeRef});\n`;
                    code += `${varName}_svgContainer.fills = []; // Ensure transparent background\n`;
                    code += `const ${varName} = figma.flatten([${varName}_svgContainer]);\n`;
                } else {
                    code += `const ${varName} = figma.createVector();\n`;
                }
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
                    if (data.layout.sizing.horizontal) code += `    ${varName}.primaryAxisSizingMode = "${data.layout.sizing.horizontal === 'AUTO' ? 'AUTO' : 'FIXED'}";\n`;
                    if (data.layout.sizing.vertical) code += `    ${varName}.counterAxisSizingMode = "${data.layout.sizing.vertical === 'AUTO' ? 'AUTO' : 'FIXED'}";\n`;
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

        if (data.strokeTopWeight !== undefined && typeof data.strokeTopWeight === 'number') code += `if ("strokeTopWeight" in ${varName}) ${varName}.strokeTopWeight = ${data.strokeTopWeight};\n`;
        if (data.strokeRightWeight !== undefined && typeof data.strokeRightWeight === 'number') code += `if ("strokeRightWeight" in ${varName}) ${varName}.strokeRightWeight = ${data.strokeRightWeight};\n`;
        if (data.strokeBottomWeight !== undefined && typeof data.strokeBottomWeight === 'number') code += `if ("strokeBottomWeight" in ${varName}) ${varName}.strokeBottomWeight = ${data.strokeBottomWeight};\n`;
        if (data.strokeLeftWeight !== undefined && typeof data.strokeLeftWeight === 'number') code += `if ("strokeLeftWeight" in ${varName}) ${varName}.strokeLeftWeight = ${data.strokeLeftWeight};\n`;

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
                code += this.generateNodeCode(child, childVar, isCurrentNodeAutoLayout);

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
                    layoutPositioning: child.layoutPositioning
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
        this.assetsToCopy.forEach(assetPath => {
            const sourcePath = path.join(this.sourceDir, assetPath);
            const fileName = path.basename(assetPath);
            const targetPath = path.join(targetDir, fileName);

            if (fs.existsSync(sourcePath)) {
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

                if (fs.existsSync(sourcePath)) {
                    const stats = fs.statSync(sourcePath);
                    const sizeMB = stats.size / (1024 * 1024);

                    if (sizeMB > 2) {
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
                    const varName = `IMG_${safeName}`;

                    this.assetsToImport.set(finalAssetRef, varName);
                    this.assetsToCopy.add(finalAssetRef);
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

    private updateRegistry() {
        const registryPath = path.join(process.cwd(), 'components', 'index.ts');
        const relativePath = `./${this.projectName}/${this.componentName}/${this.componentName}`;
        const exportLine = `export { ${this.componentName} } from "${relativePath}";`;

        if (!fs.existsSync(registryPath)) {
            fs.writeFileSync(registryPath, exportLine + '\n');
            return;
        }

        let content = fs.readFileSync(registryPath, 'utf8');
        if (!content.includes(`${this.componentName} } from "${relativePath}"`)) {
            content = content.trim() + '\n' + exportLine + '\n';
            fs.writeFileSync(registryPath, content);
        }
    }
}

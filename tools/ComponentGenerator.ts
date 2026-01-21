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

        return `import { BaseComponent, ComponentProps } from "${importPrefix}BaseComponent";
${imageImports}

${svgCode}

export class ${this.componentName} extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // Load default font
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        } catch (e) {
            console.warn("Failed to load Inter Regular", e);
        }
        
        ${bodyContent}

        ${variableName}.x = props.x;
        ${variableName}.y = props.y;

        return ${variableName};
    }
}
`;
    }

    private generateNodeCode(data: SerializedNode, varName: string): string {
        const type = data.type;
        let code = '';

        // 1. Create Node
        if (type === 'FRAME' || type === 'INSTANCE' || type === 'COMPONENT') {
            code += `const ${varName} = figma.createFrame();\n`;
        } else if (type === 'TEXT') {
            code += `const ${varName} = figma.createText();\n`;
        } else if (type === 'RECTANGLE') {
            code += `const ${varName} = figma.createRectangle();\n`;
        } else if (type === 'ELLIPSE') {
            code += `const ${varName} = figma.createEllipse();\n`;
        } else if (type === 'VECTOR') {
            if (data.svgPath) {
                const fullSvgPath = path.join(this.sourceDir, data.svgPath);
                if (fs.existsSync(fullSvgPath)) {
                    const content = fs.readFileSync(fullSvgPath, 'utf8');
                    this.svgAssets.set(data.svgPath, content);
                    const safeRef = data.svgPath.replace(/[^a-z0-9]/gi, '_');
                    code += `const ${varName}_svgContainer = figma.createNodeFromSvg(SVG_${safeRef});\n`;
                    code += `const ${varName} = figma.flatten([${varName}_svgContainer]);\n`;
                } else {
                    code += `const ${varName} = figma.createVector();\n`;
                }
            } else {
                code += `const ${varName} = figma.createVector();\n`;
            }
        } else if (type === 'GROUP') {
            code += `const ${varName} = figma.createFrame(); // Group handled as Frame\n`;
        } else {
            code += `const ${varName} = figma.createFrame(); // Fallback for ${type}\n`;
        }

        // 2. Basic properties
        code += `${varName}.name = "${data.name || 'Unnamed'}";\n`;
        if (data.visible !== undefined) code += `${varName}.visible = ${data.visible};\n`;
        if (data.opacity !== undefined) code += `${varName}.opacity = ${data.opacity};\n`;
        if (data.locked !== undefined) code += `${varName}.locked = ${data.locked};\n`;

        if (data.width !== undefined && data.height !== undefined && !code.includes('figma.flatten')) {
            code += `${varName}.resize(${data.width}, ${data.height});\n`;
        }


        // 3. Layout Properties
        if (data.layout && (type === 'FRAME' || type === 'INSTANCE' || type === 'COMPONENT')) {
            code += `if ("layoutMode" in ${varName}) {\n`;

            if (data.layout.mode) code += `    ${varName}.layoutMode = "${data.layout.mode}";\n`;
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
                if (data.layout.padding.top !== undefined) code += `    ${varName}.paddingTop = ${data.layout.padding.top};\n`;
                if (data.layout.padding.right !== undefined) code += `    ${varName}.paddingRight = ${data.layout.padding.right};\n`;
                if (data.layout.padding.bottom !== undefined) code += `    ${varName}.paddingBottom = ${data.layout.padding.bottom};\n`;
                if (data.layout.padding.left !== undefined) code += `    ${varName}.paddingLeft = ${data.layout.padding.left};\n`;
            }
            code += `}\n`;
        }


        // 3.5 Child Layout Properties
        if (data.layoutAlign) code += `${varName}.layoutAlign = "${data.layoutAlign}";\n`;
        if (data.layoutGrow !== undefined) code += `${varName}.layoutGrow = ${data.layoutGrow};\n`;

        // 4. Visual properties
        if (Array.isArray(data.fills) && (type !== 'VECTOR' || !data.svgPath)) {
            code += `${varName}.fills = await this.hydratePaints(${this.stringifyPaints(data.fills)});\n`;
        }
        if (data.strokes && Array.isArray(data.strokes)) {
            code += `${varName}.strokes = await this.hydratePaints(${this.stringifyPaints(data.strokes)});\n`;
        } else if (data.strokes) {
            code += `${varName}.strokes = ${JSON.stringify(data.strokes)};\n`;
        }
        if (data.strokeWeight !== undefined) code += `${varName}.strokeWeight = ${data.strokeWeight};\n`;
        if (data.strokeAlign) code += `${varName}.strokeAlign = "${data.strokeAlign}";\n`;
        if (data.effects) code += `${varName}.effects = ${JSON.stringify(data.effects)};\n`;
        if (data.cornerRadius !== undefined) code += `if ("cornerRadius" in ${varName}) ${varName}.cornerRadius = ${typeof data.cornerRadius === 'number' ? data.cornerRadius : JSON.stringify(data.cornerRadius)};\n`;

        // 5. Text specific
        if (type === 'TEXT' && data.text) {
            code += `// Text Properties\n`;
            code += `${varName}.characters = "${(data.text.characters || '').replace(/"/g, '\\"')}";\n`;
            if (typeof data.text.fontSize === 'number') code += `${varName}.fontSize = ${data.text.fontSize};\n`;

            if (data.text.fontName) {
                code += `await figma.loadFontAsync(${JSON.stringify(data.text.fontName)});\n`;
                code += `${varName}.fontName = ${JSON.stringify(data.text.fontName)};\n`;
            }

            if (data.text.segments) {
                code += `// Styled Segments\n`;
                for (let i = 0; i < data.text.segments.length; i++) {
                    const seg = data.text.segments[i];
                    const start = seg.start || 0;
                    const end = seg.end || 0;
                    if (seg.fontName) code += `await figma.loadFontAsync(${JSON.stringify(seg.fontName)});\n`;
                    if (seg.fontName) code += `${varName}.setRangeFontName(${start}, ${end}, ${JSON.stringify(seg.fontName)});\n`;
                    if (seg.fills) code += `${varName}.setRangeFills(${start}, ${end}, ${JSON.stringify(seg.fills)});\n`;
                    if (seg.fontSize) code += `${varName}.setRangeFontSize(${start}, ${end}, ${seg.fontSize});\n`;
                }
            }
        }

        // 6. Vector specific
        if (type === 'VECTOR' && data.vectorPaths && !data.svgPath) {
            code += `${varName}.vectorPaths = ${JSON.stringify(data.vectorPaths)};\n`;
        }

        // 7. Children
        if (data.children && data.children.length > 0) {
            data.children.forEach((child, index) => {
                const childVar = `${varName}_child_${index}`;
                code += `\n// Start Child: ${child.name}\n`;
                code += this.generateNodeCode(child, childVar);
                code += `${varName}.appendChild(${childVar});\n`;
                if (child.relativeTransform) {
                    code += `${childVar}.relativeTransform = ${JSON.stringify(child.relativeTransform)};\n`;
                }
                if (child.layoutPositioning === "ABSOLUTE") {
                    code += `${childVar}.layoutPositioning = "ABSOLUTE";\n`;
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

    private stringifyPaints(paints: any[]): string {
        // Create a deep copy to avoid mutating the original data
        const processedPaints = JSON.parse(JSON.stringify(paints));

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

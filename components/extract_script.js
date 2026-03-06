const fs = require('fs');
const path = require('path');

function extractObjectString(str, startIdx) {
    let braceCount = 0;
    let inString = false;
    let escape = false;
    for (let i = startIdx; i < str.length; i++) {
        let char = str[i];
        if (escape) { escape = false; continue; }
        if (char === '\\') { escape = true; continue; }
        if (char === '"' || char === "'") {
            // Simplified string handling
            if (!inString) {
                inString = char;
            } else if (inString === char) {
                inString = false;
            }
        }
        if (!inString) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
            if (braceCount === 0 && char === '}') {
                return str.substring(startIdx, i + 1);
            }
        }
    }
    return null;
}

function processFile(inputFile, outputDir, prefix, rootName) {
    const content = fs.readFileSync(inputFile, 'utf-8');

    // Extract imports
    const importRegex = /^import\s+.*?;$/gm;
    let imports = [];
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        imports.push(match[0]);
    }

    // Fix import paths: they are currently like "./assets/..."
    // The new components will be in outputDir. The assets are in inputFile's dir/assets.
    // So we need to copy the assets folder or fix the paths.
    // The user wants subcomponents in `UEFA_Newsletters/UCL_Header_Generic_Preview/`
    // Wait, the assets are in `captured_UCL_generic_preview/NewsletterTemplate/assets`.
    // We should copy the `assets` folder!

    const assetsSource = path.join(path.dirname(inputFile), 'assets');
    const assetsDest = path.join(outputDir, 'assets');
    if (fs.existsSync(assetsSource)) {
        fs.cpSync(assetsSource, assetsDest, { recursive: true });
    }

    // Adjust BaseComponent import
    const adjustedImports = imports.map(imp => {
        if (imp.includes('BaseComponent')) {
            return `import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";`;
        }
        return imp;
    });

    const importsStr = adjustedImports.join('\n');

    // Find root element
    const bannerIdx = content.indexOf('"name": "' + rootName + '"');
    if (bannerIdx === -1) {
        console.log("Root element not found in", inputFile);
        return;
    }

    // Find children array of DesktopBanner
    const childrenStrIdx = content.indexOf('"children": [', bannerIdx);
    if (childrenStrIdx === -1) return;

    // Parse the children object strings
    let searchIdx = childrenStrIdx + '"children": ['.length;
    let childObjects = [];

    while (true) {
        // Find next '{'
        let nextOpen = content.indexOf('{', searchIdx);
        let nextCloseArray = content.indexOf(']', searchIdx);

        // If the ']' closing the array is before the next '{', we are done
        // Need a robust way: let's just use the brace matching to find the boundary of the `children` array
        let bracketCount = 0;
        let inString = false;
        let escape = false;
        let childrenArrayEnd = -1;

        for (let i = childrenStrIdx + '"children":'.length; i < content.length; i++) {
            let char = content[i];
            if (escape) { escape = false; continue; }
            if (char === '\\') { escape = true; continue; }
            if (char === '"' || char === "'") {
                if (!inString) inString = char;
                else if (inString === char) inString = false;
            }
            if (!inString) {
                if (char === '[') bracketCount++;
                if (char === ']') bracketCount--;
                if (bracketCount === 0 && char === ']') {
                    childrenArrayEnd = i;
                    break;
                }
            }
        }

        // Extract array content
        let arrayContent = content.substring(childrenStrIdx + '"children": ['.length, childrenArrayEnd);

        // Find each '{' and extract the object
        let currentIdx = 0;
        while (currentIdx < arrayContent.length) {
            let start = arrayContent.indexOf('{', currentIdx);
            if (start === -1) break;
            let objStr = extractObjectString(arrayContent, start);
            if (objStr) {
                childObjects.push(objStr);
                currentIdx = start + objStr.length;
            } else {
                break;
            }
        }
        break;
    }

    const componentNames = [];

    childObjects.forEach((childStr, index) => {
        // Extract name
        let nameMatch = childStr.match(/"name":\s*"([^"]+)"/);
        let rawName = nameMatch ? nameMatch[1] : `Child${index}`;

        // Sanitize name for class
        let cleanName = rawName.replace(/[^a-zA-Z0-9]/g, '');
        let className = `${prefix}${cleanName}`;
        let fileName = `${className}.ts`;

        componentNames.push({ name: className, file: className, rawName: rawName });

        let fileContent = `import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
${importsStr}

export class ${className} extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = ${childStr};
    
    const root = await this.renderDefinition(structure);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}
`;
        fs.writeFileSync(path.join(outputDir, fileName), fileContent);
        console.log(`Created ${fileName} in ${outputDir}`);
    });

    // Now create the main index file (the replacement for UCL_Header_Generic_Preview.ts)
    let mainClassName = prefix === 'Generic' ? 'UCL_Newsletter_Header_Generic_Preview' : 'UCL_Newsletter_Header_Specific_Preview';
    let mainFile = prefix === 'Generic' ? 'UCL_Header_Generic_Preview.ts' : 'UCL_Header_Specific_Preview.ts';

    let mainImports = `import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";\n`;
    let uniqueNames = new Set();
    componentNames.forEach(c => {
        if (!uniqueNames.has(c.name)) {
            mainImports += `import { ${c.name} } from "./${c.file}";\n`;
            uniqueNames.add(c.name);
        }
    });

    let childInstantiations = componentNames.map(c => `        { "type": "COMPONENT", "name": "${c.rawName}", "component": ${c.name}, "props": {} }`).join(',\n');

    let mainContent = `${mainImports}

export class ${mainClassName} extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "${mainClassName}",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
        "layoutMode": "NONE",
        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
        "strokes": [], "effects": [], "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
      },
      "layoutProps": { "width": 600, "height": 696, "parentIsAutoLayout": false },
      "children": [
${childInstantiations}
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}
`;
    fs.writeFileSync(path.join(outputDir, mainFile), mainContent);
    console.log(`Created main file ${mainFile} in ${outputDir}`);
}

const baseDir = '/Users/alexcalcan/Documents/Apps/FigmaDesigner/components';

processFile(
    path.join(baseDir, 'header_ucl_preview/generic_preview_header/generic_preview_header.ts'),
    path.join(baseDir, 'UEFA_Newsletters/UCL_Header_Generic_Preview'),
    'Generic',
    'generic_preview_header'
);

processFile(
    path.join(baseDir, 'header_ucl_preview/specific_preview_header/specific_preview_header.ts'),
    path.join(baseDir, 'UEFA_Newsletters/UCL_Header_Specific_Preview'),
    'Specific',
    'specific_preview_header'
);

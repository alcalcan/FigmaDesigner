import {
    ParsedSlide,
    SlideElement,
    TextSlideElement,
    ShapeSlideElement,
    ImageSlideElement,
    SlideBackground
} from './PptImportTypes';

export class SlideEmitter {
    static emit(className: string, slide: ParsedSlide): string {
        const imageImports = collectImageImports(slide);
        const fontList = collectFonts(slide.elements);

        const importLines: string[] = [
            'import { BaseComponent, ComponentProps } from "../../components/BaseComponent";'
        ];

        for (const imageImport of imageImports) {
            importLines.push(`import ${imageImport.variableName} from "./assets/${imageImport.fileName}";`);
        }

        const fontLoaderBlock = fontList.length > 0
            ? [
                '        const fontsToLoad: FontName[] = [',
                ...fontList.map((font) => `            { family: ${toQuoted(font.family)}, style: ${toQuoted(font.style)} },`),
                '        ];',
                '        for (const font of fontsToLoad) {',
                '            try {',
                '                await figma.loadFontAsync(font);',
                '            } catch (_fontErr) {',
                '                // Keep going with fallback fonts when unavailable.',
                '            }',
                '        }',
                ''
            ].join('\n')
            : '';

        const elementBlocks = slide.elements
            .map((element, index) => emitElementCode(element, index + 1))
            .filter((code) => code.length > 0)
            .join('\n\n');

        const backgroundBlocks = emitBackgroundCode(slide.background);
        const backgroundFills = backgroundBlocks.fillsExpression;
        const backgroundSetup = backgroundBlocks.setupCode;

        return `${importLines.join('\n')}

export class ${className} extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = ${toQuoted(slide.name)};
        slide.resize(${formatNumber(slide.width)}, ${formatNumber(slide.height)});
        slide.x = props.x ?? 0;
        slide.y = props.y ?? 0;

${indentBlock(backgroundSetup, 8)}
        slide.fills = ${backgroundFills};

${fontLoaderBlock}${indentBlock(elementBlocks, 8)}

        return slide;
    }
}

function base64ToUint8Array(base64: string): Uint8Array {
    if (!base64) return new Uint8Array(0);
    
    // Strip data URI prefix if present
    let raw = base64;
    if (raw.includes(',')) {
        raw = raw.split(',')[1];
    }
    
    // Check for "default" wrapper again just in case stringification kept it
    if (raw.includes('[object Object]')) {
        console.error("PPT Import: Received [object Object] instead of base64 string.");
        return new Uint8Array(0);
    }
    
    // Aggressive cleanup: Remove anything that is NOT a valid base64 character
    // This handles whitespace, newlines, quotes, and hidden control characters.
    // We also allow URL-safe chars (- and _) and replace them later.
    raw = raw.replace(/[^A-Za-z0-9+/=\-_]/g, '');
    
    // Normalize URL-safe base64 to standard
    raw = raw.replace(/-/g, '+').replace(/_/g, '/');

    // Add padding if missing
    while (raw.length % 4 !== 0) {
        raw += '=';
    }

    try {
        return figma.base64Decode(raw);
    } catch (e) {
        console.warn("PPT Import: figma.base64Decode failed, trying legacy cleanup and atob...", e);
        try {
             // Fallback: manual decoding similar to polyfill
            const binaryString = atob(raw);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        } catch (e2) {
            console.error("PPT Import: Failed to decode base64 image data (both methods).", e2);
            console.error("PPT Import: Invalid Raw String (first 100 chars):", raw.substring(0, 100));
            return new Uint8Array(0);
        }
    }
}
`;
    }
}

function emitElementCode(element: SlideElement, index: number): string {
    if (element.kind === 'shape') {
        return emitShapeCode(element, index);
    }

    if (element.kind === 'text') {
        return emitTextCode(element, index);
    }

    if (element.kind === 'image') {
        return emitImageCode(element, index);
    }

    return '';
}

function emitShapeCode(element: ShapeSlideElement, index: number): string {
    const varName = `shape_${index}`;
    const createExpression = element.shapeType === 'ellipse'
        ? 'figma.createEllipse()'
        : element.shapeType === 'line'
            ? 'figma.createLine()'
            : 'figma.createRectangle()';

    const lines: string[] = [
        `const ${varName} = ${createExpression};`,
        `${varName}.name = ${toQuoted(`Shape_${index}`)};`,
        `${varName}.resize(${formatNumber(element.w)}, ${formatNumber(element.h)});`,
        `${varName}.x = ${formatNumber(element.x)};`,
        `${varName}.y = ${formatNumber(element.y)};`
    ];

    if (element.shapeType !== 'line') {
        if (element.fill) {
            const backgroundBlocks = emitBackgroundCode(element.fill);
            // We use the same helper as backgrounds, but we might arguably rename it to emitFillCode
            if (backgroundBlocks.setupCode) {
                // Setup code needs to be hoisted? 
                // emitShapeCode currently returns a single string block so we can just prepend setupCode
                lines.splice(0, 0, backgroundBlocks.setupCode);
            }
            lines.push(`${varName}.fills = ${backgroundBlocks.fillsExpression};`);
        } else {
            lines.push(`${varName}.fills = [];`);
        }
    } else {
        lines.push(`${varName}.fills = [];`);
    }

    if (element.strokeColor) {
        lines.push(`${varName}.strokes = [{ type: "SOLID", color: ${hexToRgbLiteral(element.strokeColor)} }];`);
    } else {
        lines.push(`${varName}.strokes = [];`);
    }

    if (typeof element.strokeWeight === 'number') {
        lines.push(`${varName}.strokeWeight = ${formatNumber(Math.max(0.5, element.strokeWeight))};`);
    }

    if (typeof element.cornerRadius === 'number' && element.shapeType === 'rect') {
        lines.push(`${varName}.cornerRadius = ${formatNumber(element.cornerRadius)};`);
    }

    if (typeof element.opacity === 'number') {
        lines.push(`${varName}.opacity = ${formatNumber(clampOpacity(element.opacity))};`);
    }

    lines.push(`slide.appendChild(${varName});`);

    return lines.join('\n');
}

function normalizeFont(family: string, style: string, bold?: boolean, italic?: boolean): { family: string, style: string } {
    const finalFamily = family;
    let finalStyle = style;

    const isAlreadyBold = /Bold|Heavy|Black|ExtraBold/i.test(family);
    const isAlreadyItalic = /Italic|Oblique/i.test(family);

    if (isAlreadyBold && (finalStyle === 'Bold' || bold)) {
        finalStyle = 'Regular';
    }

    if (isAlreadyItalic && (finalStyle === 'Italic' || italic)) {
        finalStyle = 'Regular';
    }

    // Special case for Europa Nuova Bold which is known to use "Regular" style in this environment
    if (family === 'Europa Nuova Bold' || family === 'Europa Nuova Extra Bold') {
        finalStyle = 'Regular';
    }

    return { family: finalFamily, style: finalStyle };
}

function collectFonts(elements: SlideElement[]): Array<{ family: string; style: string }> {
    const fonts = new Map<string, { family: string; style: string }>();

    fonts.set('Inter|Regular', { family: 'Inter', style: 'Regular' });

    for (const element of elements) {
        if (element.kind !== 'text') {
            continue;
        }

        const family = element.fontFamily || 'Inter';
        const initialStyle = element.fontStyle || (element.bold ? 'Bold' : element.italic ? 'Italic' : 'Regular');

        const normalized = normalizeFont(family, initialStyle, element.bold, element.italic);
        fonts.set(`${normalized.family}|${normalized.style}`, normalized);

        // Collect fonts from runs
        if (element.runs) {
            for (const run of element.runs) {
                const runFamily = run.fontFamily || family;
                const runStyle = run.fontStyle || (run.bold ? 'Bold' : run.italic ? 'Italic' : 'Regular');
                const runNorm = normalizeFont(runFamily, runStyle, run.bold, run.italic);
                fonts.set(`${runNorm.family}|${runNorm.style}`, runNorm);
            }
        }
    }

    return Array.from(fonts.values());
}

function emitTextCode(element: TextSlideElement, index: number): string {
    const varName = `text_${index}`;
    const family = element.fontFamily || 'Inter';
    const initialStyle = element.fontStyle || (element.bold ? 'Bold' : element.italic ? 'Italic' : 'Regular');

    const normalized = normalizeFont(family, initialStyle, element.bold, element.italic);

    const lines: string[] = [
        `const ${varName} = figma.createText();`,
        `${varName}.name = ${toQuoted(`Text_${index}`)};`,
        `const ${varName}_font: FontName = { family: ${toQuoted(normalized.family)}, style: ${toQuoted(normalized.style)} };`,
        'try {',
        `    ${varName}.fontName = ${varName}_font;`,
        '} catch (_fontApplyErr) {',
        '    // Keep fallback font when requested font style is unavailable.',
        '}',
        `${varName}.characters = ${toQuoted(element.text)};`,
        `${varName}.x = ${formatNumber(element.x)};`,
        `${varName}.y = ${formatNumber(element.y)};`,
        `${varName}.resize(${formatNumber(element.w)}, ${formatNumber(element.h)});`,
        `${varName}.textAutoResize = "NONE";`
    ];

    // Rich Text Support
    if (element.runs && element.runs.length > 0) {
        let currentOffset = 0;
        for (const run of element.runs) {
            const runLength = run.text.length;
            if (runLength === 0) continue;

            const start = currentOffset;
            const end = currentOffset + runLength;

            if (run.color) {
                lines.push(`${varName}.setRangeFills(${start}, ${end}, [{ type: "SOLID", color: ${hexToRgbLiteral(run.color)} }]);`);
            }

            if (run.bold !== undefined || run.italic !== undefined || run.fontFamily || run.fontSize) {
                const runFamily = run.fontFamily || family;
                const runStyle = run.fontStyle || (run.bold ? 'Bold' : run.italic ? 'Italic' : 'Regular');
                const runNorm = normalizeFont(runFamily, runStyle, run.bold, run.italic);

                lines.push(`try {`);
                lines.push(`    ${varName}.setRangeFontName(${start}, ${end}, { family: ${toQuoted(runNorm.family)}, style: ${toQuoted(runNorm.style)} });`);
                if (run.fontSize) {
                    lines.push(`    ${varName}.setRangeFontSize(${start}, ${end}, ${formatNumber(Math.max(1, run.fontSize))});`);
                }
                lines.push(`} catch (_runFontErr) {}`);
            }

            currentOffset = end;
        }
    } else {
        if (typeof element.fontSize === 'number') {
            lines.push(`${varName}.fontSize = ${formatNumber(Math.max(1, element.fontSize))};`);
        }

        if (element.color) {
            lines.push(`${varName}.fills = [{ type: "SOLID", color: ${hexToRgbLiteral(element.color)} }];`);
        }
    }

    if (element.align) {
        const figmaAlign = mapHorizontalAlign(element.align);
        if (figmaAlign) {
            lines.push(`${varName}.textAlignHorizontal = ${toQuoted(figmaAlign)};`);
        }
    }

    if (element.valign) {
        const figmaValign = mapVerticalAlign(element.valign);
        if (figmaValign) {
            lines.push(`${varName}.textAlignVertical = ${toQuoted(figmaValign)};`);
        }
    }

    if (typeof element.opacity === 'number') {
        lines.push(`${varName}.opacity = ${formatNumber(clampOpacity(element.opacity))};`);
    }

    if (element.lineHeight) {
        if (element.lineHeight.unit === 'PIXELS') {
            lines.push(`${varName}.lineHeight = { value: ${formatNumber(element.lineHeight.value)}, unit: "PIXELS" };`);
        } else {
            lines.push(`${varName}.lineHeight = { value: ${formatNumber(element.lineHeight.value)}, unit: "PERCENT" };`);
        }
    }

    if (typeof element.paragraphSpacing === 'number') {
        lines.push(`${varName}.paragraphSpacing = ${formatNumber(element.paragraphSpacing)};`);
    }

    lines.push(`slide.appendChild(${varName});`);
    return lines.join('\n');
}

function emitImageCode(element: ImageSlideElement, index: number): string {
    const varName = `image_${index}`;
    const importVariable = imageVariableName(element.assetFileName);

    const lines: string[] = [
        `// Detect image type and create corresponding Figma node`,
        `const ${varName}_raw = ${importVariable};`,
        `const ${varName}_str = (typeof ${varName}_raw === 'string') ? ${varName}_raw : (${varName}_raw as any).default;`,
        `let ${varName};`,
        ``,
        `if (${varName}_str && ${varName}_str.trim().startsWith('<svg')) {`,
        `    // SVG Vector Asset`,
        `    ${varName} = figma.createNodeFromSvg(${varName}_str);`,
        `    ${varName}.name = ${toQuoted(`Image_${index}`)};`,
        `    ${varName}.resize(${formatNumber(element.w)}, ${formatNumber(element.h)});`,
        `    ${varName}.x = ${formatNumber(element.x)};`,
        `    ${varName}.y = ${formatNumber(element.y)};`,
        `} else {`,
        `    // Raster Image Asset`,
        `    ${varName} = figma.createRectangle();`,
        `    ${varName}.name = ${toQuoted(`Image_${index}`)};`,
        `    ${varName}.resize(${formatNumber(element.w)}, ${formatNumber(element.h)});`,
        `    ${varName}.x = ${formatNumber(element.x)};`,
        `    ${varName}.y = ${formatNumber(element.y)};`,
        `    const ${varName}_data = base64ToUint8Array(${varName}_str);`,
        `    if (${varName}_data.length > 0) {`,
        `        const ${varName}_hash = figma.createImage(${varName}_data).hash;`,
        `        ${varName}.fills = [{ type: "IMAGE", imageHash: ${varName}_hash, scaleMode: "FILL" }];`,
        `    }`,
        `}`
    ];

    if (typeof element.opacity === 'number') {
        lines.push(`${varName}.opacity = ${formatNumber(clampOpacity(element.opacity))};`);
    }

    lines.push(`slide.appendChild(${varName});`);


    return lines.join('\n');
}



function collectImageImports(slide: ParsedSlide): Array<{ fileName: string; variableName: string }> {
    const seen = new Set<string>();
    const imports: Array<{ fileName: string; variableName: string }> = [];

    const addImport = (fileName: string) => {
        if (seen.has(fileName)) return;
        seen.add(fileName);
        imports.push({
            fileName,
            variableName: imageVariableName(fileName)
        });
    };

    if (slide.background?.kind === 'image') {
        addImport(slide.background.assetFileName);
    }

    for (const element of slide.elements) {
        if (element.kind !== 'image') {
            continue;
        }
        addImport(element.assetFileName);
    }

    return imports;
}

function emitBackgroundCode(background?: SlideBackground): { setupCode: string, fillsExpression: string } {
    if (!background) {
        return { setupCode: '', fillsExpression: '[]' };
    }

    if (background.kind === 'solid') {
        const opacity = background.opacity ?? 1;
        return {
            setupCode: '',
            fillsExpression: `[{ type: "SOLID", color: ${hexToRgbLiteral(background.color)}, opacity: ${formatNumber(opacity)} }]`
        };
    }

    if (background.kind === 'image') {
        const varName = 'bgImage';
        const importVar = imageVariableName(background.assetFileName);
        const setupCode = `
let bgFills: Paint[] = [];
try {
    const ${varName}_raw = ${importVar};
    const ${varName}_str = (typeof ${varName}_raw === 'string') ? ${varName}_raw : (${varName}_raw as any).default;
    const ${varName}_data = base64ToUint8Array(${varName}_str);
    if (${varName}_data.length > 0) {
            const ${varName}_hash = figma.createImage(${varName}_data).hash;
            bgFills = [{ type: "IMAGE", imageHash: ${varName}_hash, scaleMode: "FILL" }];
    }
} catch (e) {
    console.error("Failed to load background image", e);
}`;
        return {
            setupCode,
            fillsExpression: 'bgFills'
        };
    }

    if (background.kind === 'gradient') {
        const gradientType = background.type === 'linear' ? 'GRADIENT_LINEAR' : 'GRADIENT_RADIAL';
        const stops = background.stops.map(stop =>
            `{ position: ${formatNumber(stop.position)}, color: { ...${hexToRgbLiteral(stop.color)}, a: 1 } }`
        ).join(', ');

        // Calculate transform based on angle (simplified)
        // Figma gradients use a transform matrix. This is complex to map perfectly from PPT angle.
        // For now, we will use a default transform or try a simple mapping.
        // A full implementation would require calculating the matrix sine/cosine.
        const angleRad = (background.angle || 0) * (Math.PI / 180);
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);
        // This is still a placeholder for the transform matrix.
        // Using identity for now to avoid breaking.
        const transform = `[[1, 0, 0], [0, 1, 0]]`;

        return {
            setupCode: '',
            fillsExpression: `[{ type: "${gradientType}", gradientStops: [${stops}], gradientTransform: ${transform} }]`
        };
    }

    return { setupCode: '', fillsExpression: '[]' };
}


function imageVariableName(fileName: string): string {
    return `IMG_${fileName.replace(/[^a-zA-Z0-9]/g, '_')}`;
}

function hexToRgbLiteral(hex: string): string {
    const normalized = normalizeHex(hex);
    const r = parseInt(normalized.slice(0, 2), 16) / 255;
    const g = parseInt(normalized.slice(2, 4), 16) / 255;
    const b = parseInt(normalized.slice(4, 6), 16) / 255;

    return `{ r: ${formatNumber(r)}, g: ${formatNumber(g)}, b: ${formatNumber(b)} }`;
}

function normalizeHex(value: string): string {
    const compact = value.replace(/[^0-9A-Fa-f]/g, '').toUpperCase();
    if (compact.length === 6) {
        return compact;
    }
    if (compact.length === 3) {
        return compact.split('').map((char) => `${char}${char}`).join('');
    }
    return '000000';
}

function toQuoted(value: string): string {
    return JSON.stringify(value);
}

function formatNumber(value: number): string {
    if (!Number.isFinite(value)) {
        return '0';
    }

    if (Math.abs(value - Math.round(value)) < 0.0001) {
        return String(Math.round(value));
    }

    return value.toFixed(3).replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1');
}

function clampOpacity(value: number): number {
    return Math.max(0, Math.min(1, value));
}

function mapHorizontalAlign(value: string): 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED' | undefined {
    if (value === 'left') {
        return 'LEFT';
    }
    if (value === 'center') {
        return 'CENTER';
    }
    if (value === 'right') {
        return 'RIGHT';
    }
    if (value === 'justify') {
        return 'JUSTIFIED';
    }
    return undefined;
}

function mapVerticalAlign(value: string): 'TOP' | 'CENTER' | 'BOTTOM' | undefined {
    if (value === 'top') {
        return 'TOP';
    }
    if (value === 'middle') {
        return 'CENTER';
    }
    if (value === 'bottom') {
        return 'BOTTOM';
    }
    return undefined;
}

function indentBlock(text: string, spaces: number): string {
    if (!text.trim()) {
        return '';
    }

    const indent = ' '.repeat(spaces);
    return text
        .split('\n')
        .map((line) => `${indent}${line}`)
        .join('\n');
}

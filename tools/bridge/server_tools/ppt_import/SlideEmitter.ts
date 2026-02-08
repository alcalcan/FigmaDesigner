import {
    ParsedSlide,
    SlideElement,
    TextSlideElement,
    ShapeSlideElement,
    ImageSlideElement
} from './PptImportTypes';

export class SlideEmitter {
    static emit(className: string, slide: ParsedSlide): string {
        const imageImports = collectImageImports(slide.elements);
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

        const backgroundFills = slide.background
            ? `[{ type: "SOLID", color: ${hexToRgbLiteral(slide.background)} }]`
            : '[]';

        return `${importLines.join('\n')}

export class ${className} extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = ${toQuoted(slide.name)};
        slide.resize(${formatNumber(slide.width)}, ${formatNumber(slide.height)});
        slide.x = props.x ?? 0;
        slide.y = props.y ?? 0;
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
        if (element.fillColor) {
            lines.push(`${varName}.fills = [{ type: "SOLID", color: ${hexToRgbLiteral(element.fillColor)} }];`);
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

function emitTextCode(element: TextSlideElement, index: number): string {
    const varName = `text_${index}`;
    const requestedFontFamily = element.fontFamily || 'Inter';
    const requestedFontStyle = element.fontStyle || (element.bold ? 'Bold' : 'Regular');

    const lines: string[] = [
        `const ${varName} = figma.createText();`,
        `${varName}.name = ${toQuoted(`Text_${index}`)};`,
        `const ${varName}_font: FontName = { family: ${toQuoted(requestedFontFamily)}, style: ${toQuoted(requestedFontStyle)} };`,
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

    if (typeof element.fontSize === 'number') {
        lines.push(`${varName}.fontSize = ${formatNumber(Math.max(1, element.fontSize))};`);
    }

    if (element.bold) {
        lines.push(`${varName}.fontName = { family: ${toQuoted(requestedFontFamily)}, style: "Bold" };`);
    }

    if (element.italic) {
        lines.push(`${varName}.fontName = { family: ${toQuoted(requestedFontFamily)}, style: "Italic" };`);
    }

    if (element.color) {
        lines.push(`${varName}.fills = [{ type: "SOLID", color: ${hexToRgbLiteral(element.color)} }];`);
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

    lines.push(`slide.appendChild(${varName});`);
    return lines.join('\n');
}

function emitImageCode(element: ImageSlideElement, index: number): string {
    const varName = `image_${index}`;
    const importVariable = imageVariableName(element.assetFileName);

    const lines: string[] = [
        `const ${varName} = figma.createRectangle();`,
        `${varName}.name = ${toQuoted(`Image_${index}`)};`,
        `${varName}.resize(${formatNumber(element.w)}, ${formatNumber(element.h)});`,
        `${varName}.x = ${formatNumber(element.x)};`,
        `${varName}.y = ${formatNumber(element.y)};`,
        `// Debug: Check import type`,
        `console.log("PPT Import Image:", typeof ${importVariable}, ${importVariable} ? ${importVariable}.toString().substring(0, 50) : "null");`,
        `const ${varName}_raw = ${importVariable};`,
        `// Handle esmodule default export if necessary`,
        `const ${varName}_str = (typeof ${varName}_raw === 'string') ? ${varName}_raw : (${varName}_raw as any).default;`,
        `const ${varName}_data = base64ToUint8Array(${varName}_str);`,
        `if (${varName}_data.length > 0) {`,
        `    const ${varName}_hash = figma.createImage(${varName}_data).hash;`,
        `    ${varName}.fills = [{ type: "IMAGE", imageHash: ${varName}_hash, scaleMode: "FILL" }];`,
        `}`
    ];

    if (typeof element.opacity === 'number') {
        lines.push(`${varName}.opacity = ${formatNumber(clampOpacity(element.opacity))};`);
    }

    lines.push(`slide.appendChild(${varName});`);

    return lines.join('\n');
}



function collectImageImports(elements: SlideElement[]): Array<{ fileName: string; variableName: string }> {
    const seen = new Set<string>();
    const imports: Array<{ fileName: string; variableName: string }> = [];

    for (const element of elements) {
        if (element.kind !== 'image') {
            continue;
        }

        if (seen.has(element.assetFileName)) {
            continue;
        }

        seen.add(element.assetFileName);
        imports.push({
            fileName: element.assetFileName,
            variableName: imageVariableName(element.assetFileName)
        });
    }

    return imports;
}

function collectFonts(elements: SlideElement[]): Array<{ family: string; style: string }> {
    const fonts = new Map<string, { family: string; style: string }>();

    fonts.set('Inter|Regular', { family: 'Inter', style: 'Regular' });

    for (const element of elements) {
        if (element.kind !== 'text') {
            continue;
        }

        const family = element.fontFamily || 'Inter';
        const style = element.fontStyle || (element.bold ? 'Bold' : element.italic ? 'Italic' : 'Regular');
        fonts.set(`${family}|${style}`, { family, style });
    }

    return Array.from(fonts.values());
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

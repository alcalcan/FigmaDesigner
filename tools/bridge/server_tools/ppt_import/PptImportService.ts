import * as fs from 'fs';
import * as path from 'path';
import { registerComponents } from '../RegisterComponents';
import { PptxParser } from './PptxParser';
import { SlideEmitter } from './SlideEmitter';
import { PresentationEmitter } from './PresentationEmitter';
import {
    ImportPptRequest,
    ImportPptResponse,
    ParsedSlide,
    SlideClassInfo
} from './PptImportTypes';

export class PptImportService {
    static async importPowerPoint(request: ImportPptRequest): Promise<ImportPptResponse> {
        if (!request.fileName || !request.fileName.trim()) {
            throw new Error('Missing fileName for PPT import.');
        }

        if (!request.data || !request.data.trim()) {
            throw new Error('Missing base64 data for PPT import.');
        }

        if (!request.fileName.toLowerCase().endsWith('.pptx')) {
            throw new Error('Only .pptx files are supported.');
        }

        const parsedDeck = await PptxParser.parse(request.data, request.fileName);
        if (parsedDeck.slides.length === 0) {
            throw new Error('No slides were detected in the PPTX file.');
        }

        if (request.options?.fidelity === 'pixel_strict') {
            parsedDeck.warnings.push('pixel_strict mode is not fully available yet. Used editable_fallback mapping.');
        }

        const deckSlug = sanitizePathToken(parsedDeck.deckName);
        const importKey = createUniqueImportKey(deckSlug);

        const slidesDir = path.join(process.cwd(), 'slides', importKey);
        const slideElementsDir = path.join(slidesDir, 'elements');
        const slideAssetsDir = path.join(slidesDir, 'assets');
        const presentationsDir = path.join(process.cwd(), 'presentations', importKey);

        fs.mkdirSync(slideElementsDir, { recursive: true });
        fs.mkdirSync(slideAssetsDir, { recursive: true });
        fs.mkdirSync(presentationsDir, { recursive: true });

        const deckPascalName = toPascalCase(parsedDeck.deckName);
        const slideClassInfos: SlideClassInfo[] = [];

        for (const slide of parsedDeck.slides) {
            this.writeSlideJson(slideElementsDir, slide);

            const slideClassName = `PPT_${deckPascalName}_Slide_${String(slide.index).padStart(3, '0')}`;
            const slideFileName = `${slideClassName}.ts`;
            const slideFilePath = path.join(slidesDir, slideFileName);
            const slideCode = SlideEmitter.emit(slideClassName, slide);
            fs.writeFileSync(slideFilePath, slideCode);

            slideClassInfos.push({
                className: slideClassName,
                fileName: slideFileName,
                relativePath: path.join('slides', importKey, slideFileName)
            });
        }

        for (const asset of parsedDeck.assets) {
            const assetPath = path.join(slideAssetsDir, asset.fileName);
            fs.writeFileSync(assetPath, asset.bytes);
        }

        const presentationClassName = `PPT_${deckPascalName}_Presentation`;
        const presentationFileName = `${presentationClassName}.ts`;
        const presentationFilePath = path.join(presentationsDir, presentationFileName);
        const presentationComponentName = `${parsedDeck.deckName}_presentation`;

        const presentationCode = PresentationEmitter.emit(
            presentationClassName,
            presentationComponentName,
            importKey,
            slideClassInfos
        );
        fs.writeFileSync(presentationFilePath, presentationCode);

        registerComponents();

        return {
            status: 'ok',
            importKey,
            deckName: parsedDeck.deckName,
            slideCount: parsedDeck.slides.length,
            generated: {
                slidesDir,
                presentationPath: presentationFilePath,
                presentationClassName
            },
            warnings: parsedDeck.warnings
        };
    }

    private static writeSlideJson(targetDir: string, slide: ParsedSlide): void {
        const fileName = `slide_${String(slide.index).padStart(3, '0')}.json`;
        const filePath = path.join(targetDir, fileName);
        fs.writeFileSync(filePath, JSON.stringify(slide, null, 2));
    }
}

function createUniqueImportKey(deckSlug: string): string {
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}_${pad2(now.getHours())}-${pad2(now.getMinutes())}-${pad2(now.getSeconds())}`;

    let candidate = `${deckSlug}_${timestamp}`;
    let suffix = 1;

    while (existsForImportKey(candidate)) {
        candidate = `${deckSlug}_${timestamp}_${suffix}`;
        suffix += 1;
    }

    return candidate;
}

function existsForImportKey(importKey: string): boolean {
    const slideFolder = path.join(process.cwd(), 'slides', importKey);
    const presentationFolder = path.join(process.cwd(), 'presentations', importKey);
    return fs.existsSync(slideFolder) || fs.existsSync(presentationFolder);
}

function sanitizePathToken(value: string): string {
    const cleaned = value
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');

    return cleaned.length > 0 ? cleaned : 'Imported_Presentation';
}

function toPascalCase(value: string): string {
    const parts = value
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (parts.length === 0) {
        return 'ImportedPresentation';
    }

    return parts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('');
}

function pad2(value: number): string {
    return String(value).padStart(2, '0');
}

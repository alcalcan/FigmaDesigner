import * as fs from 'fs';
import * as path from 'path';
import { PptxParser } from './PptxParser';

async function analyze() {
    const inputPath = '/Users/alexandrucalcan/Library/CloudStorage/OneDrive-ENDAVA/About ME/PERSONAL/APPS/FigmaDesigner/presentations/study_Euro28/study.pptx';
    const outputPath = '/Users/alexandrucalcan/Library/CloudStorage/OneDrive-ENDAVA/About ME/PERSONAL/APPS/FigmaDesigner/presentations/study_Euro28/parsed_deck.json';

    console.log(`Reading PPTX from: ${inputPath}`);

    if (!fs.existsSync(inputPath)) {
        console.error('Input file not found!');
        process.exit(1);
    }

    const fileBuffer = fs.readFileSync(inputPath);
    const base64Data = fileBuffer.toString('base64');

    try {
        console.log('Parsing PPTX...');
        const parsedDeck = await PptxParser.parse(base64Data, 'study.pptx');

        console.log(`Parsing complete. Slides found: ${parsedDeck.slides.length}`);
        console.log(`Warnings: ${parsedDeck.warnings.length}`);

        // Remove raw bytes from assets to keep JSON readable/small
        const cleanDeck = {
            ...parsedDeck,
            assets: parsedDeck.assets.map(a => ({
                ...a,
                bytes: `[${a.bytes.length} bytes]`
            }))
        };

        fs.writeFileSync(outputPath, JSON.stringify(cleanDeck, null, 2));
        console.log(`Output written to: ${outputPath}`);

    } catch (error) {
        console.error('Error during parsing:', error);
        process.exit(1);
    }
}

analyze();

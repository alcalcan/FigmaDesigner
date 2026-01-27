
import { ComponentGenerator } from './ComponentGenerator';
import { ComponentRefactorer } from './ComponentRefactorer';
import * as path from 'path';
import * as fs from 'fs';

async function run() {
    console.log("🚀 Starting Repro...");

    const generator = new ComponentGenerator();
    const refactorer = new ComponentRefactorer();

    // 1. Path to JSON
    // /Users/alexandrucalcan/Library/CloudStorage/OneDrive-ENDAVA/About ME/PERSONAL/APPS/FigmaDesigner/tools/extraction/Alex_CookBook/checkbox_SubSection_2026-01-27_09-38-32/checkbox_SubSection.json
    const extractionPath = path.join(process.cwd(), 'tools/extraction/Alex_CookBook/checkbox_SubSection_2026-01-27_09-38-32/checkbox_SubSection.json');

    // 2. Generate (Imperative)
    console.log("Generating Imperative Code...");
    const result = generator.generate(extractionPath, 'Alex_CookBook');
    console.log(`Generated: ${result.tsPath}`);

    // Check content for Frame 1928 children count
    const imperativeContent = fs.readFileSync(result.tsPath, 'utf8');
    const frame1928Matches = imperativeContent.match(/Frame 1928/g) || [];
    console.log(`'Frame 1928' string count in imperative: ${frame1928Matches.length}`);

    // Check for appended children to Frame 1928 (assuming var name)
    // We'd need to parse or guess the var name. Usually recursive.
    // Let's just output the file size for now.

    // 3. Refactor (Declarative)
    console.log("Refactoring...");
    refactorer.refactor(result.tsPath);

    // 4. Check result
    // const declarativeContent = fs.readFileSync(result.tsPath, 'utf8');
    console.log("Done.");
}

run().catch(e => console.error(e));

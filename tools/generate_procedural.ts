
import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from './bridge/server_tools/ComponentGenerator';
import { ProceduralConverter } from './bridge/server_tools/ProceduralConverter';

async function run() {
    // 1. Find the latest capture
    const extractionDir = path.join(process.cwd(), 'tools/extraction/Alex_CookBook');
    // Look for sidebar_procedural folders
    if (!fs.existsSync(extractionDir)) {
        console.error("Extraction dir not found");
        return;
    }

    const folders = fs.readdirSync(extractionDir).filter(f => f.startsWith('sidebar_procedural_'));
    if (folders.length === 0) {
        console.error("No sidebar_procedural capture found");
        return;
    }

    // Sort by name (timestamp) desc
    folders.sort().reverse();
    const latestFolder = folders[0];
    const jsonPath = path.join(extractionDir, latestFolder, 'sidebar_procedural.json');

    console.log(`Using capture: ${jsonPath}`);

    // 2. Load JSON
    const content = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(content);
    const componentName = 'sidebar_procedural_repro';

    // 3. Generate Base Code
    // We need to simulate how the server handles it.
    // The server uses ComponentGenerator.

    const generator = new ComponentGenerator();
    console.log("Generating base code...");

    // We use generateFromMemory to get the string, but we pass empty assets for now to see if that's the issue.
    // In real flow, we might need to extract assets. 
    // Let's try to verify if ComponentGenerator.generate is better.
    // For this script, let's stick to the memory one to replicate current 'generation.ts' logic.

    const baseCode = generator.generateFromMemory(data, [], 'Alex_CookBook');

    // 4. Procedural Convert
    console.log("Converting to procedural...");
    const converter = new ProceduralConverter();
    const proceduralCode = converter.convert(baseCode, componentName);

    // 5. Write to file
    const outPath = path.join(process.cwd(), 'components/Alex_CookBook/sidebar_procedural', 'sidebar_procedural_repro.ts');
    fs.writeFileSync(outPath, proceduralCode);

    console.log(`Written to: ${outPath}`);
}

run().catch(e => console.error(e));

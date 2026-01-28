
import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from './bridge/server_tools/ComponentGenerator';
import { ComponentRefactorer } from './bridge/server_tools/ComponentRefactorer';
import { CompactStructure } from './bridge/server_tools/CompactStructure';
import { ProceduralConverter } from './bridge/server_tools/ProceduralConverter';

async function run() {
    const jsonPath = '/Users/alexandrucalcan/Library/CloudStorage/OneDrive-ENDAVA/About ME/PERSONAL/APPS/FigmaDesigner/tools/extraction/Alex_CookBook/Card_3_2026-01-28_11-25-32/Card_3.json';
    const projectName = 'Alex_CookBook';
    const componentName = 'Card_3_Test';
    const testDir = path.join(process.cwd(), 'components', projectName, componentName);

    if (!fs.existsSync(testDir)) fs.mkdirSync(testDir, { recursive: true });

    const tsPath = path.join(testDir, `${componentName}.ts`);
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    data.name = componentName;

    console.log("1. Generating Base Code...");
    const generator = new ComponentGenerator();
    const code = generator.generateFromMemory(data, [], projectName);
    fs.writeFileSync(tsPath, code);

    console.log("2. Refactoring...");
    const refactorer = new ComponentRefactorer();
    refactorer.refactor(tsPath);

    console.log("3. Compacting...");
    const compactor = new CompactStructure();
    compactor.compact(tsPath);

    console.log("4. Converting to Procedural...");
    const converter = new ProceduralConverter();
    const finalContent = fs.readFileSync(tsPath, 'utf8');
    const finalCode = converter.convert(finalContent, componentName);
    fs.writeFileSync(tsPath, finalCode);

    console.log("✅ DONE. Check " + tsPath);
    console.log("Final Code Sample (first 20 lines):");
    console.log(finalCode.split('\n').slice(0, 20).join('\n'));

    if (finalCode.includes('createFrame("Empty"')) {
        console.error("❌ FAILURE: Output is EMPTY!");

        // Let's see the compacted code to see why ProceduralConverter failed
        const compacted = finalContent; // This was read before convert()
        console.log("Compacted Code Sample (around structure):");
        const match = compacted.match(/const\s+structure\s*:/);
        if (match) {
            console.log(compacted.substring(match.index, match.index + 200));
        } else {
            console.log("Structure NOT FOUND in compacted code!");
        }
    } else {
        console.log("✅ SUCCESS: Output is NOT empty.");
    }
}

run().catch(console.error);

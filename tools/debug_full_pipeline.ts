
import { ComponentGenerator } from './bridge/server_tools/ComponentGenerator';
import { ComponentRefactorer } from './bridge/server_tools/ComponentRefactorer';
import { CompactStructure } from './bridge/server_tools/CompactStructure';
import { ProceduralConverter } from './bridge/server_tools/ProceduralConverter';
import * as fs from 'fs';
import * as path from 'path';

async function verifyPipeline(jsonPath: string, projectName: string) {
    const generator = new ComponentGenerator();
    const refactorer = new ComponentRefactorer();
    const compactor = new CompactStructure();
    const converter = new ProceduralConverter();

    console.log(`\n--- Verification Start: ${path.basename(jsonPath)} ---`);

    // 1. Generate Raw
    const result = generator.generate(jsonPath, projectName, true, path.basename(jsonPath, '.json') + "_verify");
    const tsPath = result.tsPath;
    console.log(`1. Raw generated at: ${tsPath}`);

    // 2. Refactor
    refactorer.refactor(tsPath);
    console.log(`2. Refactored.`);

    // 3. Compact
    compactor.compact(tsPath);
    console.log(`3. Compacted.`);

    // 4. Procedural
    const content = fs.readFileSync(tsPath, 'utf8');
    const className = path.basename(tsPath, '.ts');
    const proceduralCode = converter.convert(content, className);
    fs.writeFileSync(tsPath, proceduralCode);
    console.log(`4. Procedural conversion done.`);

    console.log(`Verification file: ${tsPath}`);
}

const card1 = 'tools/extraction/Alex_CookBook/Card_1_2026-01-28_11-40-43/Card_1.json';
const card3 = 'tools/extraction/Alex_CookBook/Card_3_2026-01-28_11-25-32/Card_3.json';

async function run() {
    await verifyPipeline(card1, 'Alex_CookBook');
    await verifyPipeline(card3, 'Alex_CookBook');
}

run().catch(console.error);

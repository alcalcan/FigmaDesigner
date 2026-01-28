import { ComponentRefactorer } from './ComponentRefactorer';
import { CompactStructure } from './CompactStructure';
import { ProceduralConverter } from './ProceduralConverter';
import * as fs from 'fs';
import * as path from 'path';

const filePath = '/Users/alexcalcan/Documents/Apps/FigmaDesigner/tools/extraction/reproduce_issue.ts';
const componentName = 'checkbox_standard';

async function run() {
    console.log(`Running pipeline on ${filePath}`);
    let code = fs.readFileSync(filePath, 'utf8');

    // 1. Refactor
    console.log('[Refactorer] Starting...');
    const refactorer = new ComponentRefactorer();
    code = refactorer.refactorCode(code, componentName);
    console.log('[Refactorer] Length:', code.length);
    fs.writeFileSync(filePath.replace('.ts', '_refactored.ts'), code);


    // 2. Compact
    console.log('[Compactor] Starting...');
    const compactor = new CompactStructure();
    code = compactor.compactCode(code);
    console.log('[Compactor] Length:', code.length);
    console.log('[Compactor] Start of code:', code.substring(0, 200));

    // 3. Procedural
    console.log('[Converter] Starting...');
    const converter = new ProceduralConverter();
    code = converter.convert(code, componentName);
    console.log('[Converter] Length:', code.length);
    console.log('[Converter] Start of code:', code.substring(0, 200));

    // Write output
    fs.writeFileSync(filePath.replace('.ts', '_output.ts'), code);
    console.log('Done.');
}

run();

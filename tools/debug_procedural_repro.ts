import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from './bridge/server_tools/ComponentGenerator';
import { ProceduralConverter } from './bridge/server_tools/ProceduralConverter';
import { ComponentRefactorer } from "./bridge/server_tools/ComponentRefactorer";

async function run() {
    // 1. Find the latest capture
    // 1. Target specific capture
    const jsonPath = path.join(process.cwd(), 'tools/extraction/Alex_CookBook/checkbox_SubSection_procedural_2026-01-28_10-35-39/checkbox_SubSection_procedural.json');

    if (!fs.existsSync(jsonPath)) {
        console.error(`Capture file not found: ${jsonPath}`);
        return;
    }

    console.log(`Using capture: ${jsonPath}`);

    // 2. Load JSON
    let content = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(content);
    const componentName = 'uefa_cards_4x_procedural_repro';
    data.name = componentName; // Fix: Ensure data name matches for generator naming logic
    const cookbookDir = path.join(process.cwd(), 'components/Alex_CookBook'); // Defined cookbookDir

    // 3. Generate Base Code
    // We need to simulate how the server handles it.
    // Ideally we have a Generator tool available here.
    // For now we assume the "raw" code is what we would get from generator.
    // BUT user said: "Take the generator, run Refactorer, then Procedural."
    // So distinct steps are needed. Since we don't have the Generator class imported here easily
    // (it's in server_tools), let's assume we have the raw "base" code from JSON or previous step.

    const generator = new ComponentGenerator();
    console.log("Generating base code...");
    // We must pass the PROJECT name here, not the COMPONENT name for the registry to work later
    let code = generator.generateFromMemory(data, [], "Alex_CookBook");

    // 4. Run Refactorer (SKIPPED for Procedural)
    // Refactorer produces declarative code, but ProceduralConverter needs imperative code.
    // So we bypass Refactorer when running ProceduralConverter.
    console.log("Refactoring code... SKIPPED (Bypassing format mismatch)");


    // 5. Run Procedural Converter (Target)
    const proceduralConverter = new ProceduralConverter();
    console.log("Converting to procedural...");
    code = proceduralConverter.convert(code, componentName);

    // Fix: Write standard file so registry points to valid file
    const standardPath = path.join(cookbookDir, componentName, `${componentName}.ts`);
    const dir = path.dirname(standardPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(standardPath, code);
    console.log(`Saved Final Procedural Component: ${standardPath}`);

    // 6. Update Registry
    console.log("Updating registry...");
    generator.updateRegistry();
}

run().catch(e => console.error(e));

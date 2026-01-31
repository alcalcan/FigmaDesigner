
import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from './ComponentGenerator';
import { ComponentRefactorer } from './ComponentRefactorer';
import { CompactStructure } from './CompactStructure';
import { ProceduralConverter } from './ProceduralConverter';
import { registerComponents } from './RegisterComponents';

export class FullProceduralPipeline {
    /**
     * Runs the full procedural generation sequence:
     * Generator -> Refactorer -> Compacter -> ProceduralConverter
     */
    public static async run(jsonPath: string, projectName: string, componentNameOverride?: string): Promise<string> {
        console.log(`[Pipeline] Running full procedural sequence for: ${path.basename(jsonPath)}`);

        // 1. Generate Raw Code
        const generator = new ComponentGenerator();
        const result = generator.generate(jsonPath, projectName, false, componentNameOverride);
        const tsPath = result.tsPath;
        const className = componentNameOverride || path.basename(tsPath, '.ts');

        // 2. Refactor (Skip loop detection because ProceduralConverter needs static JSON)
        console.log(`[Pipeline] Step 1 / 3: Refactoring...`);
        try {
            new ComponentRefactorer().refactor(tsPath, { skipLoopDetection: true });
        } catch (e) {
            console.error(`❌ [Pipeline] Refactoring FAILED:`, e);
            // We do NOT return here, because sometimes partial refactoring might still be useful?
            // tailored decision: If refactor fails, compact/procedure will definitely fail/produce garbage. 
            // Better to stop or ensure we don't proceed blindly.
            throw new Error(`Refactoring failed for ${tsPath}`);
        }

        // 3. Compact (Declarative -> Compact Declarative)
        console.log(`[Pipeline] Step 2 / 3: Compacting...`);
        try {
            new CompactStructure().compact(tsPath);
        } catch (e) {
            console.error(`❌ [Pipeline] Compacting FAILED:`, e);
            throw new Error(`Compacting failed for ${tsPath}`);
        }

        // 4. Procedural (Compact Declarative -> Procedural)
        console.log(`[Pipeline] Step 3 / 3: Converting to Procedural...`);
        try {
            const content = fs.readFileSync(tsPath, 'utf8');
            const converter = new ProceduralConverter();
            console.log(`[Pipeline] Calling converter.convert for ${className}. Content length: ${content.length}`);
            const finalCode = converter.convert(content, className);
            console.log(`[Pipeline] Converter result length: ${finalCode.length}`);

            // 5. Final Write
            fs.writeFileSync(tsPath, finalCode);
            console.log(`✅[Pipeline] Full procedural conversion complete: ${tsPath}`);
        } catch (e) {
            console.error(`❌ [Pipeline] Procedural Conversion FAILED:`, e);
            throw new Error(`Procedural Conversion failed for ${tsPath}`);
        }

        // 6. Update Registry (Explicit)
        registerComponents();

        return tsPath;
    }
}

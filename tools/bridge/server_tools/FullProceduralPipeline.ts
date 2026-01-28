
import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from './ComponentGenerator';
import { ComponentRefactorer } from './ComponentRefactorer';
import { CompactStructure } from './CompactStructure';
import { ProceduralConverter } from './ProceduralConverter';

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
        new ComponentRefactorer().refactor(tsPath, { skipLoopDetection: true });

        // 3. Compact (Declarative -> Compact Declarative)
        console.log(`[Pipeline] Step 2 / 3: Compacting...`);
        new CompactStructure().compact(tsPath);

        // 4. Procedural (Compact Declarative -> Procedural)
        console.log(`[Pipeline] Step 3 / 3: Converting to Procedural...`);
        const content = fs.readFileSync(tsPath, 'utf8');
        const converter = new ProceduralConverter();
        console.log(`[Pipeline] Calling converter.convert for ${className}. Content length: ${content.length}`);
        const finalCode = converter.convert(content, className);
        console.log(`[Pipeline] Converter result length: ${finalCode.length}`);

        // 5. Final Write
        fs.writeFileSync(tsPath, finalCode);
        console.log(`✅[Pipeline] Full procedural conversion complete: ${tsPath}`);

        return tsPath;
    }
}

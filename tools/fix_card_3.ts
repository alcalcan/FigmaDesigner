
import { FullProceduralPipeline } from './bridge/server_tools/FullProceduralPipeline';
import * as path from 'path';

async function run() {
    const jsonPath = '/Users/alexandrucalcan/Library/CloudStorage/OneDrive-ENDAVA/About ME/PERSONAL/APPS/FigmaDesigner/tools/extraction/Alex_CookBook/Card_3_2026-01-28_11-25-32/Card_3.json';
    const projectName = 'Alex_CookBook';
    const componentName = 'Card_3';

    console.log("🚀 Regenerating Card_3 with FullProceduralPipeline...");
    await FullProceduralPipeline.run(jsonPath, projectName, componentName);
    console.log("✅ Card_3 regenerated successfully.");
}

run().catch(console.error);

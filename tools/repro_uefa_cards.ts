
import * as path from 'path';
import { FullProceduralPipeline } from './bridge/server_tools/FullProceduralPipeline';

const JSON_PATH = '/Users/alexandrucalcan/Library/CloudStorage/OneDrive-ENDAVA/About ME/PERSONAL/APPS/FigmaDesigner/tools/extraction/Alex_CookBook/uefa_cards_4x_standard_2026-01-28_13-49-46/uefa_cards_4x_standard.json';
const PROJECT_NAME = 'Alex_CookBook';

async function run() {
    try {
        console.log("Starting reproduction of uefa_cards_4x_standard...");
        const resultPath = await FullProceduralPipeline.run(JSON_PATH, PROJECT_NAME, 'uefa_cards_4x_standard');
        console.log(`Success! Generated file at: ${resultPath}`);
    } catch (e) {
        console.error("Failed to run pipeline:", e);
    }
}

run();

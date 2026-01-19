import { JsonReconstructor } from "./components/JsonReconstructor";
// import { fullJsonData } from "./tools/full_json_data"; // Not loading here anymore

export class Pipeline {
    async run() {
        console.log("Pipeline starting...");

        // Pass the path to the JSON data
        const reconstructor = new JsonReconstructor("tools/extraction/Competition_newsletters/Frame_2609217_2026-01-19_14-19-05.json");

        // Note: We don't have 'data' here anymore to calculate width/height for centering.
        // We'll trust defaults or let JsonReconstructor handle positioning relative to (0,0) or passed coords.

        // Centering the reconstruction in the viewport
        const { x, y } = figma.viewport.center;

        // Since we don't not have access to the raw data here, we use default dimensions for centering.
        const width = 512;
        const height = 216;

        const targetX = x - (width / 2);
        const targetY = y - (height / 2);

        console.log(`Starting reconstruction of TableStat at (${targetX}, ${targetY})`);

        const result = await reconstructor.create({ x: targetX, y: targetY });

        if (result) {
            figma.currentPage.appendChild(result);
            figma.viewport.scrollAndZoomIntoView([result]);
            console.log("Pipeline run complete: TableStat reconstructed.");
        } else {
            console.error("Pipeline failed: Reconstruction returned no node.");
        }
    }
}


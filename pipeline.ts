import { JsonReconstructor } from "./components/JsonReconstructor";
import { fullJsonData } from "./tools/full_json_data";

export class Pipeline {
    async run() {
        console.log("Pipeline starting...");
        const reconstructor = new JsonReconstructor();

        // Use the full JSON data for reconstruction
        // Note: Casting as any because the JSON might be literal and TS might complain about complex types
        const data = fullJsonData as any;

        // Centering the reconstruction in the viewport
        const { x, y } = figma.viewport.center;

        // If the data has width/height, use them to center. 
        // Otherwise use defaults.
        const width = data.width || 512;
        const height = data.height || 216;

        data.x = x - (width / 2);
        data.y = y - (height / 2);

        console.log(`Starting reconstruction of ${data.name} at (${data.x}, ${data.y})`);

        const result = await reconstructor.reconstruct(data);

        if (result) {
            figma.viewport.scrollAndZoomIntoView([result]);
            console.log("Pipeline run complete: Full Figma structure reconstructed.");
        } else {
            console.error("Pipeline failed: Reconstruction returned no node.");
        }
    }
}

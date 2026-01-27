import * as fs from 'fs';
import * as path from 'path';

export interface PngPacket {
    name: string;
    data: string; // base64
}

export class PngExporter {
    /**
     * Saves a list of PNG packets to the captures directory.
     * @param projectName The name of the Figma project.
     * @param packets The PNG packets to save.
     * @returns A list of absolute paths to the saved files.
     */
    public savePackets(projectName: string, packets: PngPacket[]): string[] {
        const sanitaryProjectName = projectName.replace(/[^a-z0-9]/gi, '_');
        const now = new Date();
        const pad = (n: number) => n.toString().padStart(2, '0');
        const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;

        const results: string[] = [];

        packets.forEach((packet) => {
            const sanitaryName = packet.name.replace(/[^a-z0-9]/gi, '_');
            const captureDir = path.join(process.cwd(), 'captures', sanitaryProjectName, `${sanitaryName}_${timestamp}`);

            if (!fs.existsSync(captureDir)) {
                fs.mkdirSync(captureDir, { recursive: true });
            }

            const filePath = path.join(captureDir, `${sanitaryName}.png`);
            const buffer = Buffer.from(packet.data, 'base64');
            fs.writeFileSync(filePath, buffer);
            results.push(filePath);

            console.log(`   ✅ PNG Saved: captures/${sanitaryProjectName}/${sanitaryName}_${timestamp}/${sanitaryName}.png (${buffer.length} bytes)`);
        });

        return results;
    }

    /**
     * Static helper for specific CLI usage or quick API calls.
     */
    public static save(projectName: string, nodeName: string, base64Data: string): string {
        const exporter = new PngExporter();
        const results = exporter.savePackets(projectName, [{ name: nodeName, data: base64Data }]);
        return results[0];
    }
}

// CLI Support
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length < 3) {
        console.log("Usage: npx ts-node tools/PngExporter.ts [projectName] [nodeName] [base64]");
        process.exit(1);
    }

    const [projectName, nodeName, base64] = args;
    try {
        const savedPath = PngExporter.save(projectName, nodeName, base64);
        console.log(`Successfully saved to: ${savedPath}`);
    } catch (e) {
        console.error("Failed to save PNG:", e);
        process.exit(1);
    }
}

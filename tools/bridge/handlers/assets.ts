import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { saveItem, stopSpinner } from '../utils';
import { PngExporter } from '../server_tools/PngExporter';
import { setPendingCommand } from '../state';

export function handleSave(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const payload = JSON.parse(body);
            const data = payload.data; // Array of items

            // Process each item in the payload
            if (Array.isArray(data)) {
                data.forEach(item => {
                    saveItem(item, payload.projectName || "Unknown_Project");
                });
            }

            console.log("✅ Capture saved successfully.");
            stopSpinner();
            setPendingCommand(null); // Ready for next command
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok' }));
        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error saving data:", error.message);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

export function handleSaveAsset(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const { projectName, fileName, content, componentName } = JSON.parse(body);
            if (!projectName || !fileName || !content) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Missing required fields" }));
                return;
            }

            const sanitaryProjectName = projectName.replace(/[^a-z0-9]/gi, '_');
            let assetDir = path.join(process.cwd(), 'tools', 'extraction', sanitaryProjectName, 'assets');

            if (componentName) {
                console.log(`[Bridge] Saving asset for ${componentName} to shared extraction assets.`);
            }

            if (!fs.existsSync(assetDir)) {
                fs.mkdirSync(assetDir, { recursive: true });
            }

            const filePath = path.join(assetDir, fileName);
            const buffer = Buffer.from(content, 'base64');
            fs.writeFileSync(filePath, buffer);

            console.log(`   Asset Saved: tools/extraction/${sanitaryProjectName}/assets/${fileName}`);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', path: `assets/${fileName}` }));
        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error saving asset:", error.message);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

export function handleReadAsset(req: http.IncomingMessage, res: http.ServerResponse) {
    const url = new URL(req.url!, `http://${req.headers.host}`);
    const projectName = url.searchParams.get('project');
    const assetPath = url.searchParams.get('path');

    if (projectName === null || !assetPath) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Missing project or path parameter" }));
        return;
    }

    const fullPath = path.join(process.cwd(), 'tools', 'extraction', projectName, assetPath);
    if (!fs.existsSync(fullPath)) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Asset not found" }));
        return;
    }

    try {
        const content = fs.readFileSync(fullPath);
        const base64 = content.toString('base64');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ content: base64 }));
    } catch (e: unknown) {
        const error = e as Error;
        res.writeHead(500);
        res.end(JSON.stringify({ error: error.message }));
    }
}

export function handleSavePng(req: http.IncomingMessage, res: http.ServerResponse) {
    const chunks: Buffer[] = [];
    req.on('data', chunk => { chunks.push(chunk); });
    req.on('end', () => {
        try {
            const body = Buffer.concat(chunks).toString('utf8');
            if (!body) throw new Error("Empty request body");

            const { projectName, packets } = JSON.parse(body);
            if (!projectName || !packets) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: "Missing projectName or packets" }));
                return;
            }

            console.log(`[Bridge] Using PngExporter for ${packets.length} PNGs...`);
            const exporter = new PngExporter();
            const files = exporter.savePackets(projectName, packets);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', files }));
        } catch (e: unknown) {
            const error = e as Error;
            console.error("❌ Error saving PNG via Exporter:", error.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'error', error: error.message }));
        }
    });
}

export function handleSavePacket(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const { projectName, name, data, assets } = JSON.parse(body);

            // 1. Prepare Directory: tools/extraction/[Project]/[Name]_[Timestamp]
            const sanitaryProjectName = (projectName || "Default").replace(/[^a-z0-9]/gi, '_');
            const sanitaryName = (name || "Untitled").replace(/[^a-z0-9]/gi, '_');

            const now = new Date();
            const pad = (n: number) => n.toString().padStart(2, '0');
            const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;

            const folderName = `${sanitaryName}_${timestamp}`;
            const projectRoot = path.join(process.cwd(), 'tools', 'extraction', sanitaryProjectName);
            const targetDir = path.join(projectRoot, folderName);

            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
            }

            // 2. Save JSON
            const jsonPath = path.join(targetDir, `${sanitaryName}.json`);
            fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

            // 3. Save Assets
            if (assets && Array.isArray(assets) && assets.length > 0) {
                const assetsDir = path.join(targetDir, 'assets');
                if (!fs.existsSync(assetsDir)) {
                    fs.mkdirSync(assetsDir);
                }

                assets.forEach((asset: { fileName: string, content: string }) => {
                    const assetPath = path.join(assetsDir, asset.fileName);
                    const buffer = Buffer.from(asset.content, 'base64');
                    fs.writeFileSync(assetPath, buffer);
                });
            }

            console.log(`   Saved Packet: ${folderName}`);
            res.writeHead(200, { 'Content-Type': 'application/json' });

            // Return relative path to the JSON file so UI can trigger generation
            const relativeJsonPath = path.join(sanitaryProjectName, folderName, `${sanitaryName}.json`);
            res.end(JSON.stringify({ status: 'ok', savedPath: relativeJsonPath }));

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error saving packet:", error.message);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

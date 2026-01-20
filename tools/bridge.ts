import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const PORT = 3001;
let pendingCommand: string | null = null;
// let lastCapturedData: unknown = null;
let spinnerInterval: NodeJS.Timeout | null = null;

function stopSpinner() {
    if (spinnerInterval) {
        clearInterval(spinnerInterval);
        spinnerInterval = null;
        process.stdout.write("\r                                         \r"); // Clear line
    }
}

const server = http.createServer((req, res) => {
    // Enable CORS for Figma Plugin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Total request logger for debugging (ignore poll noise)
    if (req.url !== '/poll') {
        console.log(`[${req.method}] ${req.url} (Origin: ${req.headers.origin || 'none'})`);
    }

    // LOG ENDPOINT (POST)
    if (req.method === 'POST' && req.url === '/log') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            console.log("Plugin Log:", body);
            res.writeHead(200);
            res.end();
        });
        return;
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // POLL ENDPOINT (GET)
    if (req.method === 'GET' && req.url === '/poll') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ command: pendingCommand || 'idle' }));

        if (pendingCommand === 'capture') {
            pendingCommand = 'processing';
        }
        return;
    }

    // LIST ENDPOINT (GET)
    if (req.method === 'GET' && req.url === '/list') {
        try {
            const extractionDir = path.join(process.cwd(), 'tools', 'extraction');
            const files: { name: string, path: string, project: string }[] = [];

            if (!fs.existsSync(extractionDir)) {
                console.log("⚠️ Extraction directory not found:", extractionDir);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ files: [] }));
                return;
            }

            walkFiles(extractionDir, "", (name, project, relPath) => {
                files.push({ name, project, path: relPath });
            });
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ files }));
        } catch (e) {
            console.error("Error in /list:", e);
            res.writeHead(500);
            res.end(JSON.stringify({ error: "Failed to list files" }));
        }
        return;
    }

    // READ ENDPOINT (GET)
    if (req.method === 'GET' && req.url?.startsWith('/read')) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const filePath = url.searchParams.get('path');

        if (!filePath) {
            res.writeHead(400);
            res.end(JSON.stringify({ error: "Missing path parameter" }));
            return;
        }

        const fullPath = path.join(process.cwd(), 'tools', 'extraction', filePath);
        if (!fs.existsSync(fullPath) || !fullPath.startsWith(path.join(process.cwd(), 'tools', 'extraction'))) {
            res.writeHead(404);
            res.end(JSON.stringify({ error: "File not found or access denied" }));
            return;
        }

        try {
            const content = fs.readFileSync(fullPath, 'utf8');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(content);
        } catch (e) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: "Failed to read file" }));
        }
        return;
    }

    // SAVE ENDPOINT (POST)
    // Plugin sends data here to be saved
    if (req.method === 'POST' && req.url === '/save') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const payload = JSON.parse(body);
                const data = payload.data; // Array of items

                // Process each item in the payload
                // In bridge mode, we usually select one item, but support array
                if (Array.isArray(data)) {
                    data.forEach(item => {
                        saveItem(item, payload.projectName || "Unknown_Project");
                    });
                }

                console.log("✅ Capture saved successfully.");
                stopSpinner();
                pendingCommand = null; // Ready for next command
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok' }));
            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error saving data:", error.message);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
        });
        return;
    }

    // SAVE ASSET ENDPOINT (POST)
    if (req.method === 'POST' && req.url === '/save-asset') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { projectName, fileName, content } = JSON.parse(body);
                if (!projectName || !fileName || !content) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing required fields" }));
                    return;
                }

                const sanitaryProjectName = projectName.replace(/[^a-z0-9]/gi, '_');
                const assetDir = path.join(process.cwd(), 'tools', 'extraction', sanitaryProjectName, 'assets');

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
        return;
    }

    // READ ASSET ENDPOINT (GET)
    if (req.method === 'GET' && req.url?.startsWith('/read-asset')) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const projectName = url.searchParams.get('project');
        const assetPath = url.searchParams.get('path');

        if (!projectName || !assetPath) {
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
        return;
    }

    // DELETE ENDPOINT (POST)
    if (req.method === 'POST' && req.url === '/delete') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { path: relativePath } = JSON.parse(body);
                if (!relativePath) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing path" }));
                    return;
                }

                const fullPath = path.join(process.cwd(), 'tools', 'extraction', relativePath);

                // Security check
                if (!fullPath.startsWith(path.join(process.cwd(), 'tools', 'extraction'))) {
                    res.writeHead(403);
                    res.end(JSON.stringify({ error: "Invalid path" }));
                    return;
                }

                if (!fs.existsSync(fullPath)) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: "File not found" }));
                    return;
                }

                // 1. Read file to identify linked assets
                let assetsToDelete = new Set<string>();
                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    const json = JSON.parse(content);
                    assetsToDelete = getAllAssetRefs(json);
                } catch (e) {
                    console.warn("Could not parse file before deleting, skipping asset cleanup.", e);
                }

                // 2. Delete the JSON file
                fs.unlinkSync(fullPath);
                console.log(`Deleted file: ${relativePath}`);

                // 3. Clean up orphaned assets
                // Only if we found assets to delete and they are in a project folder
                const projectDir = path.dirname(fullPath);
                if (assetsToDelete.size > 0 && fs.existsSync(projectDir)) {
                    // Check other JSON files in the same directory
                    const siblingFiles = fs.readdirSync(projectDir).filter(f => f.endsWith('.json') && f !== path.basename(fullPath));
                    const preservedAssets = new Set<string>();

                    for (const sibling of siblingFiles) {
                        try {
                            const siblingContent = fs.readFileSync(path.join(projectDir, sibling), 'utf8');
                            const siblingJson = JSON.parse(siblingContent);
                            const siblingRefs = getAllAssetRefs(siblingJson);
                            siblingRefs.forEach(ref => preservedAssets.add(ref));
                        } catch (e) {
                            // ignore read errors on siblings
                        }
                    }

                    // Delete assets that are not preserved
                    assetsToDelete.forEach(assetRef => {
                        if (!preservedAssets.has(assetRef)) {
                            const assetFullPath = path.join(projectDir, assetRef);
                            if (fs.existsSync(assetFullPath)) {
                                try {
                                    fs.unlinkSync(assetFullPath);
                                    console.log(`   Deleted orphaned asset: ${assetRef}`);
                                } catch (e) {
                                    console.error(`   Failed to delete asset ${assetRef}`, e);
                                }
                            }
                        }
                    });
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok' }));

            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error deleting file:", error.message);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
        });
        return;
    }

    res.writeHead(404);
    res.end();
});

function saveItem(item: Record<string, unknown>, projectName: string) {
    const sanitaryProjectName = projectName.replace(/[^a-z0-9]/gi, '_');
    const projectDir = path.join(process.cwd(), 'tools', 'extraction', sanitaryProjectName);

    if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir, { recursive: true });
    }

    // Use local time for filename (YYYY-MM-DD_HH-mm-ss)
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
    const name = (item.name as string) || "Untitled";
    const sanitaryName = name.replace(/[^a-z0-9]/gi, '_');

    // We save as JSON because the data is now expanded and complex object
    const filename = `${sanitaryName}_${timestamp}.json`;
    const filePath = path.join(projectDir, filename);

    fs.writeFileSync(filePath, JSON.stringify(item, null, 2));
    console.log(`   Saved: tools/extraction/${sanitaryProjectName}/${filename}`);
}

function walkFiles(dir: string, project: string, callback: (name: string, project: string, relPath: string) => void) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            walkFiles(fullPath, project === "" ? item : `${project}/${item}`, callback);
        } else if (item.endsWith('.json')) {
            callback(item, project, path.relative(extractionRoot, fullPath));
        }
    });
}

function getAllAssetRefs(data: any): Set<string> {
    const refs = new Set<string>();
    function traverse(obj: any) {
        if (!obj || typeof obj !== 'object') return;
        if (obj.assetRef && typeof obj.assetRef === 'string') {
            refs.add(obj.assetRef);
        }
        if (obj.svgPath && typeof obj.svgPath === 'string') {
            refs.add(obj.svgPath);
        }
        Object.values(obj).forEach(traverse);
    }
    traverse(data);
    return refs;
}

server.listen(PORT, '127.0.0.1', async () => {
    console.log(`Bridge Server running at http://127.0.0.1:${PORT}`);
    console.log("👉 Press ENTER in this terminal to trigger a capture in Figma.");
    console.log("   (Make sure 'Auto-Connect Terminal' is checked in the Figma Plugin UI)");

    const stdin = process.stdin;
    stdin.setEncoding('utf-8');

    let spinnerInterval: NodeJS.Timeout | null = null;
    stdin.on('data', (_key) => {
        // Simple enter key detection
        if (pendingCommand === null || pendingCommand === 'idle') {
            console.log("Command: CAPTURE sent to Figma...");
            pendingCommand = 'capture';

            // Start Spinner
            let frameIndex = 0;
            const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
            process.stdout.write("   Waiting for Figma... ");

            if (spinnerInterval) clearInterval(spinnerInterval);
            spinnerInterval = setInterval(() => {
                process.stdout.write(`\r   Waiting for Figma... ${frames[frameIndex]}`);
                frameIndex = (frameIndex + 1) % frames.length;
            }, 80) as unknown as NodeJS.Timeout;

        } else {
            console.log("⚠️  Busy or waiting for plugin... (Press Ctrl+C to force quit)");
        }
    });


    // Keep process alive
    await new Promise(() => { });
});

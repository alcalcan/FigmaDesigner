import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from './ComponentGenerator';

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

    // LIST COMPONENTS (GET)
    if (req.method === 'GET' && req.url === '/list-components') {
        try {
            const componentsDir = path.join(process.cwd(), 'components');
            const components: string[] = [];

            if (fs.existsSync(componentsDir)) {
                // Recursive walker
                const walkComponents = (dir: string, baseDir: string) => {
                    const items = fs.readdirSync(dir);
                    items.forEach(item => {
                        const fullPath = path.join(dir, item);
                        const stat = fs.statSync(fullPath);

                        if (stat.isDirectory()) {
                            walkComponents(fullPath, baseDir);
                        } else {
                            // Filter logic
                            if (item.endsWith('.ts') &&
                                /^[A-Za-z]/.test(item) &&
                                !item.includes('BaseComponent') &&
                                !item.includes('Helpers') &&
                                !item.includes('JsonReconstructor')) {

                                // Get path relative to componentsDir
                                const relativePath = path.relative(baseDir, fullPath);
                                // Strip extension
                                const name = relativePath.replace(/\.ts$/, '');
                                components.push(name);
                            }
                        }
                    });
                };

                walkComponents(componentsDir, componentsDir);
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ components }));
        } catch (e) {
            console.error("Error in /list-components:", e);
            res.writeHead(500);
            res.end(JSON.stringify({ error: "Failed to list components" }));
        }
        return;
    }

    // READ ENDPOINT (GET)
    if (req.method === 'GET' && (req.url === '/read' || req.url?.startsWith('/read?'))) {
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
        return;
    }

    // SAVE PACKET ENDPOINT (POST)
    // New endpoint for atomic save of data + assets in a folder
    if (req.method === 'POST' && req.url === '/save-packet') {
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
                // data is a single node object (or whatever stricture captureNode returns)
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
                res.end(JSON.stringify({ status: 'ok' }));

            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error saving packet:", error.message);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
        });
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

                // 2. Delete the JSON file
                fs.unlinkSync(fullPath);
                console.log(`Deleted file: ${relativePath}`);

                // 3. New Cleanup Logic for Folder Structure
                // If the parent directory is a specific capture folder (not the project root), try to delete it
                const parentDir = path.dirname(fullPath);


                // Check if parent looks like a capture folder (has assets dir or empty)
                // And ensure we are at least 2 levels deep from extraction root (Project/CaptureFolder/File.json)
                const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
                const relParent = path.relative(extractionRoot, parentDir);

                // If relParent has at least one separator, it means it's Project/Folder
                if (relParent.includes(path.sep)) {
                    const assetsDir = path.join(parentDir, 'assets');

                    // Delete assets dir if exists
                    if (fs.existsSync(assetsDir)) {
                        fs.rmSync(assetsDir, { recursive: true, force: true });
                    }

                    // Check if parent dir is empty
                    const remaining = fs.readdirSync(parentDir);
                    if (remaining.length === 0) {
                        fs.rmdirSync(parentDir);
                        console.log(`   Deleted empty capture folder: ${path.basename(parentDir)}`);
                    }
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

    // GENERATE TO CODE ENDPOINT (POST)
    if (req.method === 'POST' && req.url === '/generate-to-code') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { path: relativePath, project: projectName } = JSON.parse(body);
                if (!relativePath || !projectName) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing path or project" }));
                    return;
                }

                const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
                const fullPath = path.join(extractionRoot, relativePath);

                if (!fs.existsSync(fullPath)) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: "JSON file not found" }));
                    return;
                }

                const generator = new ComponentGenerator();
                const result = generator.generate(fullPath, projectName);

                console.log(`✅ Component Generated: ${result.tsPath}`);

                // Trigger Rebuild
                console.log("🔨 Rebuilding Plugin Bundle...");
                require('child_process').execSync('npm run build', { stdio: 'inherit' });
                console.log("✅ Build Complete.");

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', ...result }));

            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error generating component code:", error.message, error.stack);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: error.message, stack: error.stack }));
            }
        });
        return;
    }

    // DELETE COMPONENT ENDPOINT (POST)
    if (req.method === 'POST' && req.url === '/delete-component') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { name } = JSON.parse(body); // e.g. "Competition_newsletters/DesktopBanner/DesktopBanner"
                if (!name) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing component name" }));
                    return;
                }

                // name is path relative to 'components/' without extension
                const fullPath = path.join(process.cwd(), 'components', `${name}.ts`);
                const componentDir = path.dirname(fullPath);

                if (!fs.existsSync(componentDir)) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: "Component directory not found" }));
                    return;
                }

                // 1. Remove from registry FIRST to prevent build errors
                const registryPath = path.join(process.cwd(), 'components', 'index.ts');
                if (fs.existsSync(registryPath)) {
                    let content = fs.readFileSync(registryPath, 'utf8');
                    const componentClassName = path.basename(name);
                    const lines = content.split('\n');
                    const filteredLines = lines.filter(line => !line.includes(`{ ${componentClassName} }`));
                    fs.writeFileSync(registryPath, filteredLines.join('\n'));
                    console.log(`   Removed ${componentClassName} from registry.`);
                }

                // 2. Delete the directory
                // Small delay to ensure fs file watchers pick up the index.ts change first might be needed,
                // but usually synchronous write is enough.
                if (fs.existsSync(componentDir)) {
                    fs.rmSync(componentDir, { recursive: true, force: true });
                    console.log(`Deleted component: ${name}`);
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok' }));

            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error deleting component:", error.message);
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



server.listen(PORT, '127.0.0.1', async () => {
    console.log(`Bridge Server running at http://127.0.0.1:${PORT}`);
    console.log("👉 Press ENTER in this terminal to trigger a capture in Figma.");
    console.log("   (Make sure 'Auto-Connect Terminal' is checked in the Figma Plugin UI)");

    const stdin = process.stdin;
    stdin.setEncoding('utf-8');


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

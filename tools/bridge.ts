import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { ComponentGenerator } from './ComponentGenerator';
import { CleaningService } from './CleaningService';
import { ComponentRefactorer } from './ComponentRefactorer';

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

    function findLatestExtraction(componentName: string): { path: string, mtime: number, project: string } | null {
        const extractionDir = path.join(process.cwd(), 'tools', 'extraction');
        if (!fs.existsSync(extractionDir)) return null;

        let bestMatch: { path: string, mtime: number, project: string } | null = null;

        const projects = fs.readdirSync(extractionDir);
        projects.forEach(project => {
            const projectPath = path.join(extractionDir, project);
            if (!fs.statSync(projectPath).isDirectory()) return;

            const folders = fs.readdirSync(projectPath);
            folders.forEach(folder => {
                // Folder name is like ComponentName_YYYY-MM-DD_HH-mm-ss
                // We check if it starts with componentName
                if (folder.toLowerCase().startsWith(componentName.toLowerCase())) {
                    // Or look for any .json in that folder that matches
                    const folderPath = path.join(projectPath, folder);
                    if (!fs.existsSync(folderPath)) return;

                    const files = fs.readdirSync(folderPath);
                    const jsonFile = files.find(f => f.endsWith('.json') && f.toLowerCase().includes(componentName.toLowerCase()));

                    if (jsonFile) {
                        const fullJsonPath = path.join(folderPath, jsonFile);
                        const stats = fs.statSync(fullJsonPath);
                        if (!bestMatch || stats.mtimeMs > bestMatch.mtime) {
                            bestMatch = { path: fullJsonPath, mtime: stats.mtimeMs, project };
                        }
                    }
                }
            });
        });

        return bestMatch;
    }

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
    if (req.method === 'GET' && (req.url === '/list' || req.url?.startsWith('/list?'))) {
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
            console.log(`[Bridge] Listing ${files.length} files. Found Info? ${files.some(f => f.name === 'Info.json')}`);
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
    if (req.method === 'GET' && (req.url === '/list-components' || req.url?.startsWith('/list-components?'))) {
        try {
            const componentsDir = path.join(process.cwd(), 'components');
            const pagesDir = path.join(process.cwd(), 'pages');
            const components: string[] = [];
            const pages: string[] = [];

            const walk = (dir: string, baseDir: string, list: string[]) => {
                if (!fs.existsSync(dir)) return;
                const items = fs.readdirSync(dir);
                items.forEach(item => {
                    const fullPath = path.join(dir, item);
                    const stat = fs.statSync(fullPath);

                    if (stat.isDirectory()) {
                        walk(fullPath, baseDir, list);
                    } else if (item.endsWith('.ts') &&
                        /^[A-Za-z]/.test(item) &&
                        !item.includes('BaseComponent') &&
                        !item.includes('Helpers') &&
                        !item.includes('JsonReconstructor')) {

                        const relativePath = path.relative(baseDir, fullPath);
                        const name = relativePath.replace(/\.ts$/, '');
                        list.push(name);
                    }
                });
            };

            walk(componentsDir, componentsDir, components);
            walk(pagesDir, pagesDir, pages);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ components, pages }));
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

                // Check if directory
                if (fs.statSync(fullPath).isDirectory()) {
                    fs.rmSync(fullPath, { recursive: true, force: true });
                    console.log(`Deleted directory: ${relativePath}`);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'ok' }));
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
                const { path: relativePath, project: projectName, simplified } = JSON.parse(body);
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

                // Refactoring (Simplified Code) Logic
                // If flag is true or undefined (default), run refactorer
                if (simplified !== false) {
                    // We need to import ComponentRefactorer at the top of file or here
                    // It is already imported at top on line 5 (in original read)? No, I need to check import.
                    // It is imported as ComponentGenerator. ComponentRefactorer might need import.
                    // Checking file content: line 5 is ComponentGenerator. line 6 CleaningService.
                    // I need to add import. But I can't add import easily with block replace.
                    // I will assume I can instantiate or require it. 
                    // Since I am already using ComponentGenerator via import, I should check if Refactorer is exported.
                    // Wait, ComponentGenerator CALLS refactorer internally? 
                    // Let's check ComponentGenerator.ts again.
                    // Yes, ComponentGenerator lines 50-52:
                    // console.log(`Refactoring ${tsPath}...`);
                    // const refactorer = new ComponentRefactorer();
                    // refactorer.refactor(tsPath);

                    // ComponentGenerator DOES IT AUTOMATICALLY.
                    // So I need to modify ComponentGenerator to accept a flag OR modify bridge to tell it?
                    // ComponentGenerator.generate() takes (jsonPath, projectName).
                    // I should probably modify ComponentGenerator to NOT auto-refactor, and let Bridge control it.
                    // OR, I modify ComponentGenerator to take an optional 'refactor' boolean.
                    // Modifying ComponentGenerator is cleaner.
                    // BUT, for now, let's look at the plan. Plan said "Update bridge.ts... call refactorer immediately after generator".
                    // If Generator ALREADY calls it, I'm double calling or I need to disable it in Generator.
                    // I will disable it in Generator first, then control it here.
                }

                // Oops, I need to check ComponentGenerator code again.
                // It unconditionally refactors.
                // I will modify ComponentGenerator.ts to REMOVE unconditional refactoring.
                // THEN I will add logic here in bridge.ts to call it conditionally.

                // For this step, I will add the logic here, assuming I will fix Generator next.
                // AND I need to add /refactor-code.

                if (simplified !== false) {
                    // Dynamic Iport with cache busting for hot-reloading tool changes
                    const refactorerPath = require.resolve('./ComponentRefactorer');
                    delete require.cache[refactorerPath];
                    const { ComponentRefactorer } = require('./ComponentRefactorer');

                    new ComponentRefactorer().refactor(result.tsPath);
                }

                // Trigger Rebuild
                // console.log("🔨 Rebuilding Plugin Bundle...");
                // execSync('npm run build', { stdio: 'inherit' });
                // console.log("✅ Build Complete.");

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

    // REFACTOR CODE ENDPOINT (POST) - Manual Trigger
    if (req.method === 'POST' && req.url === '/refactor-code') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { path: filePath } = JSON.parse(body);
                if (!filePath) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing path" }));
                    return;
                }

                // Allow relative paths from project root or absolute paths
                let targetPath = filePath;
                if (!path.isAbsolute(filePath)) {
                    targetPath = path.join(process.cwd(), filePath);
                }

                if (!fs.existsSync(targetPath)) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: "File not found" }));
                    return;
                }

                console.log(`🚀 Manually triggering refactor for: ${targetPath}`);

                const refactorerPath = require.resolve('./ComponentRefactorer');
                delete require.cache[refactorerPath];
                const { ComponentRefactorer } = require('./ComponentRefactorer');

                new ComponentRefactorer().refactor(targetPath);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', message: "Refactoring complete" }));
            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error refactoring:", error.message);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
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
                const { name } = JSON.parse(body); // e.g. "Project/Folder/Component"
                if (!name) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing component name" }));
                    return;
                }

                const componentClassName = path.basename(name);
                const fullPath = path.join(process.cwd(), 'components', `${name}.ts`);
                const componentDir = path.dirname(fullPath);

                // --- SMART REGENERATION LOGIC ---
                // user: "maybe we should look at extraction folder... automatically regenerate"
                // const latestExtraction = findLatestExtraction(componentClassName);
                // if (latestExtraction) {
                //     console.log(`♻️ Found extraction for ${componentClassName}. Automatically regenerating instead of deleting...`);
                //     try {
                //         const generator = new ComponentGenerator();
                //         generator.generate(latestExtraction.path, latestExtraction.project);
                //
                //         // Rebuild plugin
                //         // console.log("🔨 Rebuilding Plugin Bundle (Post-Regen)...");
                //         // execSync('npm run build', { stdio: 'inherit' });
                //
                //         res.writeHead(200, { 'Content-Type': 'application/json' });
                //         res.end(JSON.stringify({ status: 'regenerated', message: `Component ${componentClassName} was found in extractions and automatically regenerated/fixed.` }));
                //         return;
                //     } catch (regenError) {
                //         console.error(`Failed to automatically regenerate ${componentClassName}:`, regenError);
                //         // Fall through to normal deletion if regeneration fails
                //     }
                // }

                if (!fs.existsSync(componentDir)) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: "Component directory not found" }));
                    return;
                }

                // --- NORMAL DELETION + CLEANUP ---

                // 1. Remove from registry
                const registryPath = path.join(process.cwd(), 'components', 'index.ts');
                if (fs.existsSync(registryPath)) {
                    const content = fs.readFileSync(registryPath, 'utf8');
                    const lines = content.split('\n');
                    // Filter out lines that export the component, either as { Name } or { Name as Alias }
                    // We check if the line contains " { componentClassName " or " { componentClassName as "
                    const filteredLines = lines.filter(line => {
                        const isStandardExport = line.includes(`{ ${componentClassName} }`);
                        const isAliasedExport = line.includes(`{ ${componentClassName} as `);
                        return !isStandardExport && !isAliasedExport;
                    });
                    fs.writeFileSync(registryPath, filteredLines.join('\n'));
                }

                // 2. Cleanup Pages using CleaningService
                console.log(`🧹 Cleaning up pages usage for ${componentClassName}...`);
                const cleaner = new CleaningService();
                const { updatedFiles } = cleaner.cleanup(componentClassName, name);
                if (updatedFiles.length > 0) {
                    console.log(`   Updated ${updatedFiles.length} pages: ${updatedFiles.join(', ')}`);
                }

                // 3. Delete the directory
                if (fs.existsSync(componentDir)) {
                    fs.rmSync(componentDir, { recursive: true, force: true });
                    console.log(`Deleted component: ${name}`);
                }

                // 4. Cleanup Empty Parent Directories
                // Try to delete parent folder if empty (e.g. Project folder)
                try {
                    const parentDir = path.dirname(componentDir);
                    const componentsRoot = path.join(process.cwd(), 'components');

                    // Ensure we don't delete the components root itself and stay within it
                    if (parentDir !== componentsRoot && parentDir.startsWith(componentsRoot)) {
                        if (fs.existsSync(parentDir)) {
                            const remaining = fs.readdirSync(parentDir);
                            if (remaining.length === 0) {
                                fs.rmdirSync(parentDir);
                                console.log(`Deleted empty parent folder: ${path.basename(parentDir)}`);
                            }
                        }
                    }
                } catch (cleanupErr) {
                    console.warn("Could not cleanup parent folder:", cleanupErr);
                }

                // Rebuild plugin after deletion/cleanup
                // console.log("🔨 Rebuilding Plugin Bundle (Post-Delete)...");
                // execSync('npm run build', { stdio: 'inherit' });

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', cleanup: updatedFiles.length }));

            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error deleting/cleaning component:", error.message);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
        });
        return;
    }

    // DELETE COMPONENT FOLDER ENDPOINT (POST)
    if (req.method === 'POST' && req.url === '/delete-component-folder') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { folder } = JSON.parse(body); // e.g. "ProjectName"
                if (!folder) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing folder name" }));
                    return;
                }

                // Security: simple folder name or path relative to components
                const componentsRoot = path.join(process.cwd(), 'components');
                const fullPath = path.join(componentsRoot, folder);

                if (!fullPath.startsWith(componentsRoot)) {
                    res.writeHead(403);
                    res.end(JSON.stringify({ error: "Invalid path" }));
                    return;
                }

                if (!fs.existsSync(fullPath)) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: "Folder not found" }));
                    return;
                }

                // 1. Cleanup Registry (index.ts)
                const registryPath = path.join(componentsRoot, 'index.ts');
                if (fs.existsSync(registryPath)) {
                    const content = fs.readFileSync(registryPath, 'utf8');
                    const lines = content.split('\n');
                    // Remove lines that import from "./folder/..."
                    // folder might be "Alex_CookBook"
                    // imports look like: from "./Alex_CookBook/..."
                    const folderPrefix = `./${folder}/`;
                    const folderPrefixWin = `.\\${folder}\\`; // Just in case, though standard imports are /

                    const forwardedContent = lines.filter(line => {
                        return !line.includes(`"${folderPrefix}`) && !line.includes(`'${folderPrefix}`);
                    });

                    if (lines.length !== forwardedContent.length) {
                        fs.writeFileSync(registryPath, forwardedContent.join('\n'));
                        console.log(`Updated registry: removed ${lines.length - forwardedContent.length} exports for folder ${folder}`);
                    }
                }

                // 2. Delete Directory
                fs.rmSync(fullPath, { recursive: true, force: true });
                console.log(`Deleted component folder: ${folder}`);

                // Rebuild? (Optional, watcher usually handles it, but explicit build ensures sync)
                // execSync('npm run build', { stdio: 'inherit' });

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok' }));

            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error deleting component folder:", error.message);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
        });
        return;
    }

    // MOVE ENDPOINT (POST)
    if (req.method === 'POST' && req.url === '/move') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { type, sourcePath, destinationFolder } = JSON.parse(body);
                if (!type || !sourcePath || !destinationFolder) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing required parameters: type, sourcePath, destinationFolder" }));
                    return;
                }

                if (type === 'file') {
                    // Move extraction
                    const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
                    const fullSourcePath = path.join(extractionRoot, sourcePath);

                    if (!fs.existsSync(fullSourcePath)) {
                        res.writeHead(404);
                        res.end(JSON.stringify({ error: "Source file not found" }));
                        return;
                    }

                    // Check if it's in a session folder (Project/SessionFolder/File.json)
                    const relPath = path.relative(extractionRoot, fullSourcePath);
                    const parts = relPath.split(path.sep);

                    let sourceToMove: string;
                    let targetBaseName: string;

                    if (parts.length >= 3) {
                        // It's in a folder (Project/SessionFolder/File.json) -> move the SessionFolder
                        // parts: [Project, SessionFolder, File.json]
                        sourceToMove = path.join(extractionRoot, parts[0], parts[1]);
                        targetBaseName = parts[1];
                    } else if (parts.length === 2) {
                        // It's a loose file in Project/File.json -> move just the file
                        sourceToMove = fullSourcePath;
                        targetBaseName = parts[1];
                    } else {
                        res.writeHead(400);
                        res.end(JSON.stringify({ error: "Invalid source path structure" }));
                        return;
                    }

                    const destinationRoot = path.join(extractionRoot, destinationFolder);
                    if (!fs.existsSync(destinationRoot)) {
                        fs.mkdirSync(destinationRoot, { recursive: true });
                    }

                    const fullTargetPath = path.join(destinationRoot, targetBaseName);

                    if (fs.existsSync(fullTargetPath)) {
                        res.writeHead(409);
                        res.end(JSON.stringify({ error: "Target already exists" }));
                        return;
                    }

                    fs.renameSync(sourceToMove, fullTargetPath);
                    console.log(`✅ Moved extraction: ${sourceToMove} -> ${fullTargetPath}`);

                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'ok', newPath: path.relative(extractionRoot, fullTargetPath) }));

                } else if (type === 'component') {
                    // Move component
                    const componentsRoot = path.join(process.cwd(), 'components');
                    const fullSourceDir = path.join(componentsRoot, sourcePath); // sourcePath is e.g. "Project/Component"
                    const componentName = path.basename(sourcePath);

                    if (!fs.existsSync(fullSourceDir)) {
                        res.writeHead(404);
                        res.end(JSON.stringify({ error: "Source component directory not found" }));
                        return;
                    }

                    const targetDir = path.join(componentsRoot, destinationFolder, componentName);
                    if (!fs.existsSync(path.join(componentsRoot, destinationFolder))) {
                        fs.mkdirSync(path.join(componentsRoot, destinationFolder), { recursive: true });
                    }

                    if (fs.existsSync(targetDir)) {
                        res.writeHead(409);
                        res.end(JSON.stringify({ error: "Target component directory already exists" }));
                        return;
                    }

                    // Perform move
                    fs.renameSync(fullSourceDir, targetDir);

                    // Update components/index.ts
                    const registryPath = path.join(componentsRoot, 'index.ts');
                    if (fs.existsSync(registryPath)) {
                        let content = fs.readFileSync(registryPath, 'utf8');
                        const newImportPath = `./${destinationFolder}/${componentName}/${componentName}`;

                        // regex to find: export { ComponentName } from "./OldPath/Component";
                        // Standard structure is ./Folder/Component/Component
                        const regex = new RegExp(`export { (\\w+) } from "\\.\\/${sourcePath.replace(/\//g, '\\/')}\\/\\w+";`, 'g');
                        content = content.replace(regex, `export { $1 } from "${newImportPath}";`);

                        fs.writeFileSync(registryPath, content);
                        console.log(`✅ Updated registry for ${componentName}`);
                    }

                    console.log(`✅ Moved component: ${fullSourceDir} -> ${targetDir}`);

                    // Trigger Rebuild
                    // console.log("🔨 Rebuilding Plugin Bundle...");
                    // execSync('npm run build', { stdio: 'inherit' });
                    // console.log("✅ Build Complete.");

                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ status: 'ok', newPath: path.join(destinationFolder, componentName) }));
                } else {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Invalid type: must be 'file' or 'component'" }));
                }
            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error in /move:", error.message);
                res.writeHead(500);
                res.end(JSON.stringify({ error: error.message }));
            }
        });
        return;
    }

    // GENERATE FOLDER TO CODE ENDPOINT (POST)
    if (req.method === 'POST' && req.url === '/generate-folder-to-code') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const { folder: relativeFolder, project: projectName, simplified } = JSON.parse(body);
                if (!relativeFolder || !projectName) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: "Missing folder or project" }));
                    return;
                }

                // ... check folders ...
                const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
                const fullFolderPath = path.join(extractionRoot, relativeFolder);

                if (!fs.existsSync(fullFolderPath)) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: "Folder not found" }));
                    return;
                }

                const results: { file: string, status: string, error?: string }[] = [];

                // Recursively find all .json files in subfolders
                const getAllJsonFiles = (dir: string): string[] => {
                    let results: string[] = [];
                    const list = fs.readdirSync(dir);
                    list.forEach(file => {
                        const filePath = path.join(dir, file);
                        const stat = fs.statSync(filePath);
                        if (stat && stat.isDirectory()) {
                            results = results.concat(getAllJsonFiles(filePath));
                        } else if (file.endsWith('.json') && !file.includes('vector') && !file.includes('icon')) {
                            // Basic filter to avoid random assets if any
                            results.push(filePath);
                        }
                    });
                    return results;
                }

                const files = getAllJsonFiles(fullFolderPath);
                console.log(`Found ${files.length} matching files in ${relativeFolder}`);

                const generator = new ComponentGenerator();
                // Dynamic Import for Refactorer
                const refactorerPath = require.resolve('./ComponentRefactorer');
                delete require.cache[refactorerPath];
                const { ComponentRefactorer } = require('./ComponentRefactorer');
                const refactorer = new ComponentRefactorer();

                for (const fullPath of files) {
                    const file = path.basename(fullPath);
                    try {
                        // const fullPath is already absolute from getAllJsonFiles
                        const result = generator.generate(fullPath, projectName);

                        if (simplified !== false) {
                            refactorer.refactor(result.tsPath);
                        }

                        results.push({ file, status: 'ok', ...result });
                    } catch (err: any) {
                        results.push({ file, status: 'error', error: err.message });
                    }
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', results }));


            } catch (e: unknown) {
                const error = e as Error;
                console.error("Error in batch generation:", error.message);
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

import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { FullProceduralPipeline } from '../server_tools/FullProceduralPipeline';
import { ComponentGenerator } from '../server_tools/ComponentGenerator';
import { ComponentRefactorer } from '../server_tools/ComponentRefactorer';
import { CompactStructure } from '../server_tools/CompactStructure';

export async function handleReadAsset(req: http.IncomingMessage, res: http.ServerResponse) {
    const url = new URL(req.url!, `http://${req.headers.host}`);
    const filePath = url.searchParams.get('path');

    if (!filePath) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Missing path parameter" }));
        return;
    }

    // Try to find the asset in extraction or components
    const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
    const componentsRoot = path.join(process.cwd(), 'components');

    // Potentially the path comes in as 'Project/Component/assets/img.png'
    // or just 'Component/assets/img.png' relative to some root.

    let fullPath = path.join(extractionRoot, filePath);

    if (!fs.existsSync(fullPath)) {
        // Try components root
        fullPath = path.join(componentsRoot, filePath);
    }

    if (!fs.existsSync(fullPath)) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Asset not found" }));
        return;
    }

    try {
        const content = fs.readFileSync(fullPath);
        // We'll return it as a JSON with base64 content to match what the UI expects
        // The UI expects: const assetData = await listRes.json(); if (assetData.content) ...
        const base64Content = content.toString('base64');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ content: base64Content }));
    } catch (e: any) {
        console.error("Error reading asset:", e);
        res.writeHead(500);
        res.end(JSON.stringify({ error: "Failed to read asset" }));
    }
}

export async function handleSave(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const parsed = JSON.parse(body);
            const { path: relativePath, project, procedural, simplified, refactor } = parsed;
            const fullPath = path.join(process.cwd(), 'tools', 'extraction', relativePath);
            if (!fs.existsSync(fullPath)) {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "File not found" }));
                return;
            }

            const projectName = project || "Default";
            const componentName = path.basename(fullPath, '.json');
            const savedPath = fullPath;

            const isProcedural = procedural === true;
            const isRefactor = refactor !== false;
            const isCompact = simplified !== false || parsed.options?.compact === true;

            if (isProcedural) {
                console.log(`[Bridge] Triggering Full Procedural Pipeline for: ${componentName}`);
                await FullProceduralPipeline.run(savedPath, projectName, componentName);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', savedPath: relativePath }));
                return;
            }

            // Standard Code Generation (Non-procedural)
            if (isRefactor || isCompact) {
                console.log(`[Bridge] Simplification requested for ${savedPath}: Refactor=${isRefactor}, Compact=${isCompact}`);

                // If the .ts file doesn't exist, we might need to generate it first?
                // Usually /save is called after generation, but let's be safe.
                const tsPath = savedPath.replace('.json', '.ts');
                if (!fs.existsSync(tsPath)) {
                    const generator = new ComponentGenerator();
                    generator.generate(savedPath, projectName, false, componentName);
                }

                if (isRefactor) {
                    new ComponentRefactorer().refactor(tsPath);
                }

                if (isCompact) {
                    new CompactStructure().compact(tsPath);
                }
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', savedPath: relativePath }));

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error saving/generating:", error.message);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

export function handleSavePacket(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const parsed = JSON.parse(body);
            const { projectName, name, data, assets, procedural, simplified } = parsed;

            // Check for options or direct procedural flag. 
            const isProcedural = procedural === true || parsed.options?.procedural === true;
            const isSimplified = simplified === true || parsed.options?.simplified === true;
            const skipGeneration = parsed.options?.skipGeneration === true;

            console.log(`[Bridge Debug] batchFolder: '${parsed.batchFolder}'`);
            console.log(`[Bridge] handling SavePacket. Procedural? ${isProcedural}, Simplified? ${isSimplified}`);

            // 1. Prepare Directory: tools/extraction/[Project or batchFolder]/[Name]_[Timestamp]
            const sanitaryProjectName = (projectName || "Default").replace(/[^a-z0-9]/gi, '_');
            const sanitaryName = (name || "Untitled").replace(/[^a-z0-9]/gi, '_');

            const now = new Date();
            const pad = (n: number) => n.toString().padStart(2, '0');
            const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;

            const folderName = parsed.batchFolder === "captures" ? sanitaryName : `${sanitaryName}_${timestamp}`;

            // If batchFolder is provided, use it as the project root (e.g. "captures")
            const projectFolderName = parsed.batchFolder ? parsed.batchFolder.replace(/[^a-z0-9_-]/gi, '_') : sanitaryProjectName;
            const projectRoot = path.join(process.cwd(), 'tools', 'extraction', projectFolderName);
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

            // 4. GENERATION
            // Determine generation project name. 
            // If parsed.batchFolder is "captures" (default), we use sanitaryProjectName (saving to component library or similar?).
            // Actually, "captures" usually implies the temp holding area. 
            // If the user specified a CUSTOM folder (e.g. "MyFolder"), parsed.batchFolder will be "MyFolder".
            // We want the generator to output to `components/MyFolder/Component...` instead of `components/ProjectName/Component...`
            // Current Logic: sanitaryProjectName is derived from msg.projectName (Figma page/file name).
            // Fix: If batchFolder is provided and NOT "captures", use IT as the project name for generation.

            const generationProjectName = (parsed.batchFolder && parsed.batchFolder !== "captures")
                ? parsed.batchFolder.replace(/[^a-z0-9_-]/gi, '_')
                : sanitaryProjectName;

            // If the user requested procedural or simplified generation, we do it NOW and AWAIT it.
            if (skipGeneration) {
                console.log(`[Bridge] skipGeneration=true. Skipping auto-gen for ${sanitaryName}.`);
            } else if (isProcedural) {
                console.log(`[Bridge] Auto-generating Procedural Code for ${sanitaryName} in ${generationProjectName}...`);
                await FullProceduralPipeline.run(jsonPath, generationProjectName, sanitaryName);
            } else {
                // Always generate code if not procedural (Generator Only, Simplified, or Standard)
                console.log(`[Bridge] Auto-generating Code for ${sanitaryName} (Simplified=${isSimplified}, Refactor=${parsed.options?.refactor !== false}) in ${generationProjectName}...`);

                const generator = new ComponentGenerator();
                const result = generator.generate(jsonPath, generationProjectName, false, sanitaryName);

                if (parsed.options?.refactor !== false) {
                    new ComponentRefactorer().refactor(result.tsPath);
                }

                if (isSimplified) {
                    new CompactStructure().compact(result.tsPath);
                }
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
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

export function handleSavePng(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const parsed = JSON.parse(body);
            const { projectName, packets } = parsed;

            if (!packets || !Array.isArray(packets)) {
                throw new Error("Invalid packets data");
            }

            const sanitaryProjectName = (projectName || "Default").replace(/[^a-z0-9]/gi, '_');
            const capturesDir = path.join(process.cwd(), 'captures');
            const projectDir = path.join(capturesDir, sanitaryProjectName);

            if (!fs.existsSync(projectDir)) {
                fs.mkdirSync(projectDir, { recursive: true });
            }

            let savedCount = 0;
            packets.forEach((packet: { name: string, data: string }) => {
                const sanitaryName = (packet.name || "Untitled").replace(/[^a-z0-9]/gi, '_');
                // Avoid overwriting if possible or just overwrite? Overwrite is fine for capture.
                // Maybe add timestamp? UI doesn't imply history.
                const filePath = path.join(projectDir, `${sanitaryName}.png`);
                const buffer = Buffer.from(packet.data, 'base64');
                fs.writeFileSync(filePath, buffer);
                savedCount++;
            });

            console.log(`[Bridge] Saved ${savedCount} PNGs to ${projectDir}`);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', count: savedCount, path: projectDir }));

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error saving PNG:", error.message);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

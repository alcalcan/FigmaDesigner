import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { FullProceduralPipeline } from '../server_tools/FullProceduralPipeline';
import { ComponentGenerator } from '../server_tools/ComponentGenerator';
import { ComponentRefactorer } from '../server_tools/ComponentRefactorer';
import { CompactStructure } from '../server_tools/CompactStructure';

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

            console.log(`[Bridge] handling SavePacket. Procedural? ${isProcedural}, Simplified? ${isSimplified}`);

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

            // 4. GENERATION
            // If the user requested procedural or simplified generation, we do it NOW and AWAIT it.
            if (isProcedural) {
                console.log(`[Bridge] Auto-generating Procedural Code for ${sanitaryName}...`);
                await FullProceduralPipeline.run(jsonPath, sanitaryProjectName, sanitaryName);
            } else {
                // Always generate code if not procedural (Generator Only, Simplified, or Standard)
                console.log(`[Bridge] Auto-generating Code for ${sanitaryName} (Simplified=${isSimplified}, Refactor=${parsed.options?.refactor !== false})...`);

                const generator = new ComponentGenerator();
                const result = generator.generate(jsonPath, sanitaryProjectName, false, sanitaryName);

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

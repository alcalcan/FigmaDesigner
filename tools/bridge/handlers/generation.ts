import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from '../server_tools/ComponentGenerator';
import { ComponentRefactorer } from '../server_tools/ComponentRefactorer';
import { CompactStructure } from '../server_tools/CompactStructure';
import { ProceduralConverter } from '../server_tools/ProceduralConverter';
import { FullProceduralPipeline } from '../server_tools/FullProceduralPipeline';
import { registerComponents } from '../server_tools/RegisterComponents';

export function handleGenerateCodePreview(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const { packet, options } = JSON.parse(body);
            // options: { compact: boolean, refactor: boolean } (defaults: compact=true, refactor=true)

            if (!packet || !packet.name || !packet.data) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Missing packet data" }));
                return;
            }

            // 1. Setup Temporary Location
            const tempDir = path.join(process.cwd(), 'tools', 'extraction', 'temp_preview');
            if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

            const sanitaryName = (packet.name || "Preview").replace(/[^a-z0-9]/gi, '_');
            const uniqueId = Date.now().toString();
            const folderName = `${sanitaryName}_${uniqueId}`;
            const targetDir = path.join(tempDir, folderName);

            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

            // 2. Write JSON
            const jsonPath = path.join(targetDir, `${sanitaryName}.json`);
            fs.writeFileSync(jsonPath, JSON.stringify(packet.data, null, 2));

            // 3. Write Assets (Required for generator to resolve paths)
            if (packet.assets && Array.isArray(packet.assets)) {
                const assetsDir = path.join(targetDir, 'assets');
                if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

                packet.assets.forEach((asset: { fileName: string, content: string }) => {
                    const assetPath = path.join(assetsDir, asset.fileName);
                    const buffer = Buffer.from(asset.content, 'base64');
                    fs.writeFileSync(assetPath, buffer);
                });
            }

            // 4. Run Generator
            // NOTE: Dynamic reloading removed to fix linting/stability. Using imported classes directly.
            const generator = new ComponentGenerator();
            // We use 'temp_preview' as project name to verify isolation
            const result = generator.generate(jsonPath, 'temp_preview');

            const tsPath = result.tsPath;
            console.log(`[Preview] Generated at: ${tsPath}`);

            // 5. Apply Refactor (Default true)
            if (options?.refactor !== false) {
                console.log(`[Preview] Refactoring...`);
                new ComponentRefactorer().refactor(tsPath);
            }

            // 6. Apply Refactor & Compact (Prerequisites for Procedural)
            if (options?.procedural === true || options?.compact === true) {
                console.log(`[Preview] Simplifying & Compacting...`);
                // CompactStructure tool internally ensures basic refactor/compacting if needed
                // But for preview, we usually run CompactStructure which handles NodeDefinition conversion
                new CompactStructure().compact(tsPath);
            }

            // 6.5 Apply Procedural (New)
            if (options?.procedural === true) {
                console.log(`[Preview] Procedural converting...`);
                const content = fs.readFileSync(tsPath, 'utf8');
                const converter = new ProceduralConverter();
                const className = path.basename(tsPath, '.ts');
                const newCode = converter.convert(content, className);
                fs.writeFileSync(tsPath, newCode);
            }

            // 7. Read Result
            const code = fs.readFileSync(tsPath, 'utf8');

            // 8. Cleanup
            try {
                const cleanupPath = targetDir;
                const cleanupCompDir = path.dirname(tsPath);

                const performCleanup = (retries = 3) => {
                    setTimeout(() => {
                        try {
                            if (fs.existsSync(cleanupPath)) fs.rmSync(cleanupPath, { recursive: true, force: true });
                            if (fs.existsSync(cleanupCompDir)) fs.rmSync(cleanupCompDir, { recursive: true, force: true });
                        } catch (err) {
                            if (retries > 0) {
                                performCleanup(retries - 1);
                            } else {
                                console.warn(`[Cleanup] Failed to delete temp files after retries:`, err);
                            }
                        }
                    }, 500);
                };

                performCleanup();
            } catch (cleanupErr) {
                console.warn("Cleanup warning:", cleanupErr);
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', code: code }));

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error generating preview:", error.message, error.stack);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

export async function handleGenerateToCode(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const requestData = JSON.parse(body);
            console.log(`[Bridge] /generate-to-code payload:`, JSON.stringify(requestData, null, 2));

            const { path: relativePath, project: projectName, simplified, refactor, compact, procedural } = requestData;

            const shouldSimplify = (simplified !== false) && (refactor !== false);
            const shouldCompact = (compact !== false);
            const shouldProcedural = (procedural === true);

            console.log(`[Bridge] Simplification Decision for ${relativePath}: Simplify=${shouldSimplify}, Compact=${shouldCompact}, Procedural=${shouldProcedural}`);

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

            const basename = path.basename(relativePath, '.json');
            const componentName = basename; // Simplified for now, or use logic from Generator

            // If procedural is requested, we run the FullProceduralPipeline
            // This pipeline handles Generator -> Refactorer -> Compacter -> ProceduralConverter
            // So we don't need to do standard generation first.
            if (shouldProcedural) {
                console.log(`[Bridge] Procedural flag TRUE. Calling FullProceduralPipeline for component: ${componentName}`);
                const tsPath = await FullProceduralPipeline.run(fullPath, projectName, componentName);
                console.log(`[Bridge] FullProceduralPipeline complete. Result path: ${tsPath}`);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', tsPath }));
                return;
            }

            // Standard Code Generation (Non-procedural)
            const generator = new ComponentGenerator();
            // Pass previewMode = false so it UPDATES the registry
            const result = generator.generate(fullPath, projectName, false, componentName);
            console.log(`✅ Component Generated: ${result.tsPath}`);

            if (shouldSimplify) {
                console.log(`[Bridge] Simplification (Refactor) requested for ${result.tsPath}`);
                new ComponentRefactorer().refactor(result.tsPath);
            }
            if (shouldCompact) {
                console.log(`[Bridge] Compacting ${result.tsPath}...`);
                new CompactStructure().compact(result.tsPath);
            }

            registerComponents();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', ...result }));

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error generating component code:", error.message, error.stack);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message, stack: error.stack }));
        }
    });
}

export function handleGenerateFolderToCode(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const { folder, project, simplified, procedural, refactor, compact, cleanup } = JSON.parse(body);
            // If folder is empty, we'll scan the entire extraction root
            const targetFolder = folder || "";

            // ... Logic to iterate folder files ...
            // Simplified reuse of logic:
            // We can't reuse handleGenerateToCode easily because of response/req structure.
            // Inline iteration:

            // Assume folder is project name for now or relative path
            // In current app logic, folder is the project name usually.
            const extractionRoot = path.join(process.cwd(), 'tools/extraction'); // Assuming
            const projectPath = path.join(extractionRoot, targetFolder);

            if (!fs.existsSync(projectPath)) {
                // Try absolute
                // ...
            }

            // For now, let's just update the internal looper logic if possible or assume user uses single file conversion mostly.
            // But let's support it since we added the param.

            const results: { file: string, status: string, error?: string }[] = [];

            // Recursively find json files
            const getFiles = async (dir: string) => {
                const subdirs = fs.readdirSync(dir);
                for (const file of subdirs) {
                    const full = path.join(dir, file);
                    if (fs.statSync(full).isDirectory()) {
                        await getFiles(full);
                    } else if (file.endsWith('.json') && !file.includes('vector') && !file.includes('icon')) {
                        try {
                            const componentName = path.basename(full, '.json');
                            const currentProject = project || targetFolder || "Default";

                            console.log(`[Batch] ➡️ Processing ${componentName}...`);
                            if (procedural) {
                                await FullProceduralPipeline.run(full, currentProject, componentName);
                            } else {
                                const generator = new ComponentGenerator();
                                const result = generator.generate(full, currentProject, false, componentName);

                                const shouldRefactor = (simplified !== false) && (refactor !== false);
                                const shouldCompact = (compact !== false) && (simplified !== false);

                                if (shouldRefactor) {
                                    new ComponentRefactorer().refactor(result.tsPath);
                                }
                                if (shouldCompact) {
                                    new CompactStructure().compact(result.tsPath);
                                }
                            }
                            results.push({ file: componentName, status: 'ok' });
                        } catch (e: unknown) {
                            const error = e as Error;
                            console.error(`[Batch] ❌ Error processing ${file}:`, error.message);
                            results.push({ file, status: 'error', error: error.message });
                        }
                    }
                }
            };

            if (fs.existsSync(projectPath)) {
                await getFiles(projectPath);
                console.log(`[Batch] ✅ Processed ${results.length} files. Success: ${results.filter(r => r.status === 'ok').length}, Fail: ${results.filter(r => r.status !== 'ok').length}`);

                // Cleanup logic: If cleanup requested
                if (cleanup === true) {
                    console.log(`[Batch] 🧹 Cleaning up target folder: ${projectPath}`);
                    try {
                        // For captures folder, we might want to preserve the folder itself but clear contents
                        // but rmSync with recursive: true handles it. 
                        // If it's the "captures" project folder, let's just delete it entirely.
                        fs.rmSync(projectPath, { recursive: true, force: true });
                    } catch (cleanupErr) {
                        console.error(`[Batch] ❌ Failed to cleanup folder: ${projectPath}`, cleanupErr);
                    }
                }

                registerComponents();

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', results }));
            } else {
                console.error(`[Batch] ❌ Target folder not found: ${projectPath}`);
                res.writeHead(404);
                res.end(JSON.stringify({ error: "Target folder not found" }));
            }
            return;

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error in batch generation:", error.message);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

export function handleRefactorCode(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const { path: filePath, project, simplified, procedural } = JSON.parse(body);
            if (!filePath) throw new Error("Missing path");

            let targetPath = filePath;
            if (!path.isAbsolute(filePath)) {
                targetPath = path.join(process.cwd(), filePath);
            }

            // Check if it is a JSON file we are converting
            if (targetPath.endsWith('.json')) {
                const componentName = path.basename(targetPath, '.json');
                const currentProject = project || "Default";

                let resultPath = "";
                if (procedural) {
                    resultPath = await FullProceduralPipeline.run(targetPath, currentProject, componentName);
                } else {
                    const generator = new ComponentGenerator();
                    const result = generator.generate(targetPath, currentProject, false, componentName);
                    resultPath = result.tsPath;

                    if (simplified) {
                        new ComponentRefactorer().refactor(resultPath);
                        new CompactStructure().compact(resultPath);
                    }
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', tsPath: resultPath }));
                return;
            }

            // Original refactor logic for .ts files
            if (!fs.existsSync(targetPath)) {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "File not found" }));
                return;
            }

            console.log(`🚀 Manually triggering refactor for: ${targetPath}`);

            // NOTE: Dynamic reloading removed to fix linting/stability. Using imported classes directly.
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
}

export function handleGenerateClipboard(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const { packet, options } = JSON.parse(body);
            if (!packet) throw new Error("Missing packet");

            // For preview, we treat it as single file content for now
            // But ComponentGenerator works on JSON.
            // Let's generate raw code first.

            const generator = new ComponentGenerator();
            // generateFromMemory(data, assets, projectName)
            const unformattedCode = generator.generateFromMemory(packet.data, packet.assets || [], 'Clipboard');
            let code = unformattedCode;

            // 2. Refactor or Procedural Convert
            if (options?.procedural) {
                console.log(`[Clipboard] Applying Refactor & Compact prerequisites for Procedural`);
                const refactorer = new ComponentRefactorer();
                code = refactorer.refactorCode(unformattedCode, packet.name || 'Component');

                const compactor = new CompactStructure();
                code = compactor.compactCode(code);

                const converter = new ProceduralConverter();
                code = converter.convert(code, packet.name);
            } else if (options?.refactor !== false) {
                const refactorer = new ComponentRefactorer();
                code = refactorer.refactorCode(unformattedCode, packet.name || 'Component');
            }

            // 3. Apply Compact (Default true)
            if (options?.compact === true && !options?.procedural) {
                const compactor = new CompactStructure();
                code = compactor.compactCode(code);
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', code }));
        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error generating clipboard code:", error.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

export async function handleProceduralConvert(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const { path: filePath } = JSON.parse(body); // Removed unused 'project' destructuring
            if (!filePath) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Missing path" }));
                return;
            }

            let targetPath = filePath;
            if (!path.isAbsolute(filePath)) {
                targetPath = path.join(process.cwd(), filePath);
            }

            if (!fs.existsSync(targetPath)) {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "File not found" }));
                return;
            }

            console.log(`🚀 Triggering Procedural Convert for: ${targetPath}`);

            const className = path.basename(targetPath, '.ts');
            // We need to find the project name. Assuming it's the parent of the folder in extraction.
            const parts = targetPath.split(path.sep);
            const extractionIndex = parts.indexOf('extraction');
            const projectName = (extractionIndex !== -1 && extractionIndex + 1 < parts.length) ? parts[extractionIndex + 1] : "Default";

            await FullProceduralPipeline.run(targetPath.replace('.ts', '.json'), projectName, className);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', message: "Procedural conversion complete" }));
        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error converting:", error.message);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

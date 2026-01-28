import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from '../server_tools/ComponentGenerator';
import { ComponentRefactorer } from '../server_tools/ComponentRefactorer';
import { CompactStructure } from '../server_tools/CompactStructure';
import { ProceduralConverter } from '../server_tools/ProceduralConverter';

export function handleGenerateCodePreview(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', () => {
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

            // 6. Apply Compact (Default true)
            if (options?.compact === true) {
                console.log(`[Preview] Compacting...`);
                new CompactStructure().compact(tsPath);
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

export function handleGenerateToCode(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const requestData = JSON.parse(body);
            console.log(`[Bridge] /generate-to-code payload:`, JSON.stringify(requestData, null, 2));

            const { path: relativePath, project: projectName, simplified, refactor, compact } = requestData;

            const shouldSimplify = (simplified !== false) && (refactor !== false);
            const shouldCompact = (compact !== false);

            console.log(`[Bridge] Simplification Decision for ${relativePath}: Simplify=${shouldSimplify}, Compact=${shouldCompact}`);

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

            // NOTE: Dynamic reloading removed to fix linting/stability. Using imported classes directly.
            const generator = new ComponentGenerator();
            // Pass previewMode = false so it UPDATES the registry
            const result = generator.generate(fullPath, projectName, false);
            console.log(`✅ Component Generated: ${result.tsPath}`);

            if (shouldSimplify) {
                console.log(`[Bridge] Simplification (Refactor) requested for ${result.tsPath}`);
                new ComponentRefactorer().refactor(result.tsPath);
            } else {
                console.log(`[Bridge] Simplification skipped for ${result.tsPath}`);
            }

            if (shouldCompact) {
                console.log(`[Bridge] Compacting ${result.tsPath}...`);
                new CompactStructure().compact(result.tsPath);
            }

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
    req.on('end', () => {
        try {
            const { folder, project, simplified, procedural } = JSON.parse(body);
            if (!folder) throw new Error("Missing folder");

            // ... Logic to iterate folder files ...
            // Simplified reuse of logic:
            // We can't reuse handleGenerateToCode easily because of response/req structure.
            // Inline iteration:

            // Assume folder is project name for now or relative path
            // In current app logic, folder is the project name usually.
            const extractionRoot = path.join(process.cwd(), 'tools/extraction'); // Assuming
            const projectPath = path.join(extractionRoot, folder); // folder is project name

            if (!fs.existsSync(projectPath)) {
                // Try absolute
                // ...
            }

            // For now, let's just update the internal looper logic if possible or assume user uses single file conversion mostly.
            // But let's support it since we added the param.

            const results: { file: string, status: string, error?: string }[] = [];

            // Recursively find json files
            const getFiles = (dir: string) => {
                const subdirs = fs.readdirSync(dir);
                subdirs.forEach((file: string) => {
                    const full = path.join(dir, file);
                    if (fs.statSync(full).isDirectory()) {
                        getFiles(full);
                    } else if (file.endsWith('.json') && !file.includes('vector') && !file.includes('icon')) { // Avoid asset manifests
                        try {
                            const content = fs.readFileSync(full, 'utf8');
                            const data = JSON.parse(content);
                            const componentName = path.basename(full, '.json');

                            const generator = new ComponentGenerator();
                            let code = generator.generateFromMemory(data, [], project || folder);

                            if (procedural) {
                                const converter = new ProceduralConverter();
                                code = converter.convert(code, componentName);
                            } else if (simplified) {
                                const refactorer = new ComponentRefactorer();
                                code = refactorer.refactorCode(code, componentName);
                            }

                            const tsPath = full.replace('.json', '.ts');
                            fs.writeFileSync(tsPath, code);
                            results.push({ file, status: 'ok' });
                        } catch (e: unknown) {
                            const error = e as Error;
                            results.push({ file, status: 'error', error: error.message });
                        }
                    }
                });
            };

            if (fs.existsSync(projectPath)) {
                getFiles(projectPath);
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
}

export function handleRefactorCode(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const { path: filePath, project, simplified, procedural } = JSON.parse(body);
            if (!filePath) throw new Error("Missing path");

            let targetPath = filePath;
            if (!path.isAbsolute(filePath)) {
                targetPath = path.join(process.cwd(), filePath);
            }

            // Check if it is a JSON file we are converting
            if (targetPath.endsWith('.json')) {
                // Generate from JSON
                const content = fs.readFileSync(targetPath, 'utf8');
                const data = JSON.parse(content);
                const componentName = path.basename(targetPath, '.json');

                // 1. Generate
                const generator = new ComponentGenerator();
                let code = generator.generateFromMemory(data, [], project || "Default");

                // 2. Refactor/Procedural
                if (procedural) {
                    const converter = new ProceduralConverter();
                    code = converter.convert(code, componentName);
                } else if (simplified) {
                    const refactorer = new ComponentRefactorer();
                    code = refactorer.refactorCode(code, componentName);
                }

                // Save to .ts file next to json
                const tsPath = targetPath.replace('.json', '.ts');
                fs.writeFileSync(tsPath, code);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', tsPath }));
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
                const converter = new ProceduralConverter();
                code = converter.convert(unformattedCode, packet.name);
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

export function handleProceduralConvert(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', () => {
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

            // NOTE: Dynamic reloading removed to fix linting/stability. Using imported classes directly.
            const content = fs.readFileSync(targetPath, 'utf8');
            const converter = new ProceduralConverter();
            const className = path.basename(targetPath, '.ts');

            const newCode = converter.convert(content, className);

            // Overwrite file
            fs.writeFileSync(targetPath, newCode);

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

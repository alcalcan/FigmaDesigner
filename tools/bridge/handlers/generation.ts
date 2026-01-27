import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from '../../ComponentGenerator';
import { ComponentRefactorer } from '../../ComponentRefactorer';
import { CompactStructure } from '../../CompactStructure';

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
            const generatorPath = require.resolve('../../ComponentGenerator');
            const refactorerPath = require.resolve('../../ComponentRefactorer');
            delete require.cache[generatorPath];
            delete require.cache[refactorerPath];

            const { ComponentGenerator } = require('../../ComponentGenerator');
            const { ComponentRefactorer } = require('../../ComponentRefactorer');
            const { CompactStructure } = require('../../CompactStructure');

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

            const generatorPath = require.resolve('../../ComponentGenerator');
            const refactorerPath = require.resolve('../../ComponentRefactorer');
            const compactorPath = require.resolve('../../CompactStructure');
            delete require.cache[generatorPath];
            delete require.cache[refactorerPath];
            delete require.cache[compactorPath];

            const { ComponentGenerator } = require('../../ComponentGenerator');
            const { ComponentRefactorer } = require('../../ComponentRefactorer');
            const { CompactStructure } = require('../../CompactStructure');

            const generator = new ComponentGenerator();
            // Pass previewMode = false so it UPDATES the registry
            const result = generator.generate(fullPath, projectName, false);
            const tsPath = result.tsPath;
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
            const { folder: relativeFolder, project: projectName, simplified } = JSON.parse(body);
            if (!relativeFolder || !projectName) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Missing folder or project" }));
                return;
            }

            const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
            const fullFolderPath = path.join(extractionRoot, relativeFolder);

            if (!fs.existsSync(fullFolderPath)) {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "Folder not found" }));
                return;
            }

            const results: { file: string, status: string, error?: string }[] = [];

            const getAllJsonFiles = (dir: string): string[] => {
                let results: string[] = [];
                const list = fs.readdirSync(dir);
                list.forEach(file => {
                    const filePath = path.join(dir, file);
                    const stat = fs.statSync(filePath);
                    if (stat && stat.isDirectory()) {
                        results = results.concat(getAllJsonFiles(filePath));
                    } else if (file.endsWith('.json') && !file.includes('vector') && !file.includes('icon')) {
                        results.push(filePath);
                    }
                });
                return results;
            }

            const files = getAllJsonFiles(fullFolderPath);
            console.log(`Found ${files.length} matching files in ${relativeFolder}`);

            const generator = new ComponentGenerator();
            const refactorerPath = require.resolve('../../ComponentRefactorer');
            delete require.cache[refactorerPath];
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { ComponentRefactorer: FreshRefactorer } = require('../../ComponentRefactorer');
            const refactorer = new FreshRefactorer();

            for (const fullPath of files) {
                const file = path.basename(fullPath);
                try {
                    const result = generator.generate(fullPath, projectName);

                    if (simplified !== false) {
                        refactorer.refactor(result.tsPath);
                    }

                    results.push({ file, status: 'ok', ...result });
                } catch (err: unknown) {
                    const error = err as Error;
                    results.push({ file, status: 'error', error: error.message });
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
}

export function handleRefactorCode(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const { path: filePath } = JSON.parse(body);
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

            console.log(`🚀 Manually triggering refactor for: ${targetPath}`);

            const refactorerPath = require.resolve('../../ComponentRefactorer');
            delete require.cache[refactorerPath];
            const { ComponentRefactorer } = require('../../ComponentRefactorer');

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

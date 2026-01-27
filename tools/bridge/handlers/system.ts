import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { BridgeState, setPendingCommand, setSpinnerInterval } from '../state';
import { stopSpinner } from '../utils';

export function handlePoll(req: http.IncomingMessage, res: http.ServerResponse) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ command: BridgeState.pendingCommand || 'idle' }));

    if (BridgeState.pendingCommand === 'capture') {
        setPendingCommand('processing');
    }
}

export function handleLog(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        console.log("Plugin Log:", body);
        res.writeHead(200);
        res.end();
    });
}

export function handleDelete(req: http.IncomingMessage, res: http.ServerResponse) {
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
            const parentDir = path.dirname(fullPath);
            const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
            const relParent = path.relative(extractionRoot, parentDir);

            if (relParent.includes(path.sep)) {
                const assetsDir = path.join(parentDir, 'assets');

                if (fs.existsSync(assetsDir)) {
                    fs.rmSync(assetsDir, { recursive: true, force: true });
                }

                const remaining = fs.readdirSync(parentDir);
                if (remaining.length === 0) {
                    fs.rmdirSync(parentDir);
                    console.log(`   Deleted empty capture folder: ${path.basename(parentDir)}`);
                }
            }

            // 4. Cleanup Generated Component & Registry
            const parts = relativePath.split('/');
            if (parts.length >= 3) {
                const projectName = parts[0];
                const componentName = path.basename(relativePath, '.json');

                // A. Delete Generated Directory
                const generatedDir = path.join(process.cwd(), 'components', projectName, componentName);
                if (fs.existsSync(generatedDir)) {
                    try {
                        fs.rmSync(generatedDir, { recursive: true, force: true });
                        console.log(`deleted generated component: ${generatedDir}`);
                    } catch (err) {
                        console.warn(`Failed to delete generated dir ${generatedDir}:`, err);
                    }
                }

                // B. Update Registry (components/index.ts)
                const registryPath = path.join(process.cwd(), 'components', 'index.ts');
                if (fs.existsSync(registryPath)) {
                    let originalMode: number | null = null;
                    try {
                        const stats = fs.statSync(registryPath);
                        if ((stats.mode & fs.constants.S_IWUSR) === 0) {
                            console.log(`[Delete] Registry is read-only. Unlocking...`);
                            originalMode = stats.mode;
                            fs.chmodSync(registryPath, 0o644);
                        }
                    } catch (e) { console.warn("Registry perm check failed", e); }

                    try {
                        let content = fs.readFileSync(registryPath, 'utf8');
                        const lines = content.split('\n');
                        const alias = `${componentName}_${projectName}`;
                        const newLines = lines.filter(line => !line.includes(`as ${alias}`));

                        if (newLines.length !== lines.length) {
                            fs.writeFileSync(registryPath, newLines.join('\n'));
                            console.log(`[Delete] Removed ${alias} from registry.`);
                        }
                    } catch (err) {
                        console.error(`[Delete] Failed to update registry:`, err);
                    } finally {
                        if (originalMode !== null) {
                            try { fs.chmodSync(registryPath, originalMode); }
                            catch (e) { console.warn("Failed to restore registry perms", e); }
                        }
                    }
                }

                // C. Run CleaningService to update pages
                try {
                    const servicePath = require.resolve('../server_tools/CleaningService');
                    delete require.cache[servicePath];
                    const { CleaningService } = require('../server_tools/CleaningService');
                    const cleaningService = new CleaningService();
                    const fullRelativePath = `${projectName}/${componentName}/${componentName}`;

                    console.log(`[Delete] Running cleaning service for ${componentName}...`);
                    const cleanResult = cleaningService.cleanup(componentName, fullRelativePath);
                    if (cleanResult.updatedFiles.length > 0) {
                        console.log(`[Delete] Updated ${cleanResult.updatedFiles.length} pages:`, cleanResult.updatedFiles);
                    } else {
                        console.log(`[Delete] No pages needed update.`);
                    }
                } catch (cleanErr) {
                    console.warn(`[Delete] CleaningService failed:`, cleanErr);
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
}

export function handleMove(req: http.IncomingMessage, res: http.ServerResponse) {
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
                const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
                const fullSourcePath = path.join(extractionRoot, sourcePath);

                if (!fs.existsSync(fullSourcePath)) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: "Source file not found" }));
                    return;
                }

                const relPath = path.relative(extractionRoot, fullSourcePath);
                const parts = relPath.split(path.sep);

                let sourceToMove: string;
                let targetBaseName: string;

                if (parts.length >= 3) {
                    sourceToMove = path.join(extractionRoot, parts[0], parts[1]);
                    targetBaseName = parts[1];
                } else if (parts.length === 2) {
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
                const componentsRoot = path.join(process.cwd(), 'components');
                const fullSourceDir = path.join(componentsRoot, sourcePath);
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

                fs.renameSync(fullSourceDir, targetDir);

                const registryPath = path.join(componentsRoot, 'index.ts');
                if (fs.existsSync(registryPath)) {
                    let content = fs.readFileSync(registryPath, 'utf8');
                    const newImportPath = `./${destinationFolder}/${componentName}/${componentName}`;
                    const regex = new RegExp(`export { (\\w+) } from "\\.\\/${sourcePath.replace(/\//g, '\\/')}\\/\\w+";`, 'g');
                    content = content.replace(regex, `export { $1 } from "${newImportPath}";`);

                    fs.writeFileSync(registryPath, content);
                    console.log(`✅ Updated registry for ${componentName}`);
                }

                console.log(`✅ Moved component: ${fullSourceDir} -> ${targetDir}`);

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
}

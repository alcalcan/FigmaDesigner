import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { walkFiles } from '../utils';

export function handleList(req: http.IncomingMessage, res: http.ServerResponse) {
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
}

export function handleRead(req: http.IncomingMessage, res: http.ServerResponse) {
    const url = new URL(req.url!, `http://${req.headers.host}`);
    const filePath = url.searchParams.get('path');

    if (!filePath) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Missing path parameter" }));
        return;
    }

    const fullPath = path.join(process.cwd(), 'tools', 'extraction', filePath);
    const componentsPath = path.join(process.cwd(), 'components', filePath);

    let targetPath = fullPath;
    let allowed = false;

    // Check if it is in extraction
    if (fullPath.startsWith(path.join(process.cwd(), 'tools', 'extraction')) && fs.existsSync(fullPath)) {
        targetPath = fullPath;
        allowed = true;
    }
    // Check if it is in components (UI might request components/Project/Name.ts or similar)
    // The UI likely sends the relative path from "extraction" root for extraction files,
    // but for components it might send "Project/Component/Comp.ts".
    // Let's verify if the filePath passed is purely relative.

    // Attempt to resolve in components dir if not found in extraction
    if (!allowed && fs.existsSync(componentsPath)) {
        if (componentsPath.startsWith(path.join(process.cwd(), 'components'))) {
            targetPath = componentsPath;
            allowed = true;
            console.log(`[Bridge] Reading component file: ${filePath}`);
        }
    }

    if (!allowed) {
        // One more fallback: maybe the UI sends "components/Project/..." explicitly?
        const explicitPath = path.join(process.cwd(), filePath);
        if (explicitPath.startsWith(path.join(process.cwd(), 'components')) && fs.existsSync(explicitPath)) {
            targetPath = explicitPath;
            allowed = true;
        }
    }

    if (!allowed) {
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
}

export function handleDelete(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const { path: relPath } = JSON.parse(body);
            if (!relPath) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Missing path" }));
                return;
            }

            const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
            const targetPath = path.join(extractionRoot, relPath);

            // Security: Ensure path is within extraction root
            if (!targetPath.startsWith(extractionRoot)) {
                res.writeHead(403);
                res.end(JSON.stringify({ error: "Invalid path" }));
                return;
            }

            if (!fs.existsSync(targetPath)) {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "File or directory not found" }));
                return;
            }

            const stat = fs.statSync(targetPath);
            if (stat.isDirectory()) {
                fs.rmSync(targetPath, { recursive: true, force: true });
                console.log(`[Bridge] Deleted folder: ${relPath}`);
            } else {
                // If it's a JSON file in extraction, we usually want to delete the whole session folder
                const parentDir = path.dirname(targetPath);
                const basename = path.basename(targetPath);

                if (basename.endsWith('.json') && parentDir !== extractionRoot) {
                    fs.rmSync(parentDir, { recursive: true, force: true });
                    console.log(`[Bridge] Deleted session folder for: ${relPath}`);
                } else {
                    fs.unlinkSync(targetPath);
                    console.log(`[Bridge] Deleted file: ${relPath}`);

                    // Simple cleanup check for empty session folder
                    if (parentDir !== extractionRoot && fs.existsSync(parentDir)) {
                        const remaining = fs.readdirSync(parentDir);
                        if (remaining.length === 0) {
                            fs.rmdirSync(parentDir);
                            console.log(`[Bridge] Cleaned up empty session folder: ${path.relative(extractionRoot, parentDir)}`);
                        }
                    }
                }
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok' }));
        } catch (e: any) {
            console.error("Error in /delete:", e);
            res.writeHead(500);
            res.end(JSON.stringify({ error: e.message }));
        }
    });
}

export function handleBatchDelete(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        try {
            const { paths } = JSON.parse(body);
            if (!Array.isArray(paths)) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Invalid paths array" }));
                return;
            }

            const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
            const results: any[] = [];

            for (const relPath of paths) {
                const targetPath = path.join(extractionRoot, relPath);

                // Security check
                if (!targetPath.startsWith(extractionRoot)) {
                    results.push({ path: relPath, status: "error", error: "Invalid path" });
                    continue;
                }

                if (!fs.existsSync(targetPath)) {
                    results.push({ path: relPath, status: "error", error: "Not found" });
                    continue;
                }

                try {
                    const stat = fs.statSync(targetPath);
                    if (stat.isDirectory()) {
                        fs.rmSync(targetPath, { recursive: true, force: true });
                        console.log(`[Bridge] Batch Deleted folder: ${relPath}`);
                    } else {
                        const parentDir = path.dirname(targetPath);
                        const basename = path.basename(targetPath);

                        if (basename.endsWith('.json') && parentDir !== extractionRoot) {
                            fs.rmSync(parentDir, { recursive: true, force: true });
                            console.log(`[Bridge] Batch Deleted session folder for: ${relPath}`);
                        } else {
                            fs.unlinkSync(targetPath);
                            console.log(`[Bridge] Batch Deleted file: ${relPath}`);
                            if (parentDir !== extractionRoot && fs.existsSync(parentDir)) {
                                const remaining = fs.readdirSync(parentDir);
                                if (remaining.length === 0) {
                                    fs.rmdirSync(parentDir);
                                }
                            }
                        }
                    }
                    results.push({ path: relPath, status: "ok" });
                } catch (e: any) {
                    results.push({ path: relPath, status: "error", error: e.message });
                }
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', results }));
        } catch (e: any) {
            console.error("Error in /batch-delete:", e);
            res.writeHead(500);
            res.end(JSON.stringify({ error: e.message }));
        }
    });
}

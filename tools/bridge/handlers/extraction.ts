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

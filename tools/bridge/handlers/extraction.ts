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
}

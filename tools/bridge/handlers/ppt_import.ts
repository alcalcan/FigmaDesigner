import * as http from 'http';
import { PptImportService } from '../server_tools/ppt_import/PptImportService';
import { ImportPptRequest } from '../server_tools/ppt_import/PptImportTypes';

export function handleImportPpt(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', (chunk: Buffer) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const parsed = JSON.parse(body || '{}') as ImportPptRequest;
            const result = await PptImportService.importPowerPoint(parsed);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error('[PPT Import] Failed:', message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: message }));
        }
    });
}

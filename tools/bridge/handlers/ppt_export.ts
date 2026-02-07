
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import * as os from 'os';

export function handleSavePpt(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const parsed = JSON.parse(body);
            const { fileName, data, customPath, absolutePath } = parsed;

            if (!data) {
                throw new Error("No data provided");
            }

            let filePath = '';

            if (absolutePath) {
                // If absolute path provided, use it directly (fileName is ignored/implied)
                filePath = absolutePath;
                // Ensure directory exists
                const dir = path.dirname(filePath);
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
            } else {
                let targetDir = path.join(process.cwd(), 'exports');

                // If user provided a custom path, try to use it
                if (customPath && typeof customPath === 'string') {
                    if (path.isAbsolute(customPath)) {
                        targetDir = customPath;
                    } else {
                        // Treat relative to project root
                        targetDir = path.join(process.cwd(), customPath);
                    }
                }

                if (!fs.existsSync(targetDir)) {
                    fs.mkdirSync(targetDir, { recursive: true });
                }

                // Sanitization
                const safeFileName = (fileName || `Presentation_${Date.now()}.pptx`).replace(/[^a-z0-9\._-]/gi, '_');
                filePath = path.join(targetDir, safeFileName);
            }

            const buffer = Buffer.from(data, 'base64');
            fs.writeFileSync(filePath, buffer);

            console.log(`[Bridge] Saved PPT to ${filePath}`);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', path: filePath }));

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error saving PPT:", error.message);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

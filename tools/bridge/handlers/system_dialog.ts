
import * as http from 'http';
import { exec } from 'child_process';

export function handleSelectSavePath(req: http.IncomingMessage, res: http.ServerResponse) {
    if (process.platform !== 'darwin') {
        res.writeHead(501);
        res.end(JSON.stringify({ error: "System dialog only supported on macOS for now" }));
        return;
    }

    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const { defaultName } = JSON.parse(body || '{}');
            const filename = defaultName || "Presentation.pptx";

            // AppleScript to open a save dialog. 
            // We use 'choose file name' which allows selecting a destination (even if file doesn't exist).
            const script = `osascript -e 'POSIX path of (choose file name default name "${filename}" with prompt "Save Presentation")'`;

            exec(script, (error, stdout, stderr) => {
                if (error) {
                    // User cancelled usually sends error code 1 and "User canceled" in stderr
                    if (stderr.includes('User canceled')) {
                        res.writeHead(200);
                        res.end(JSON.stringify({ cancelled: true }));
                        return;
                    }
                    console.error("OSAScript error:", stderr);
                    res.writeHead(500);
                    res.end(JSON.stringify({ error: stderr || "Unknown OSAScript error" }));
                    return;
                }
                const path = stdout.trim();
                res.writeHead(200);
                res.end(JSON.stringify({ path: path }));
            });

        } catch (e) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: (e as Error).message }));
        }
    });
}

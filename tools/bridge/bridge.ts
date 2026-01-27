import * as http from 'http';
import { BridgeState, setPendingCommand, setSpinnerInterval } from './state';
import { handleList, handleRead } from './handlers/extraction';
import { handleListComponents, handleDeleteComponent, handleDeleteComponentFolder } from './handlers/components';
import { handleSave, handleSaveAsset, handleReadAsset, handleSavePng, handleSavePacket } from './handlers/assets';
import { handleGenerateCodePreview, handleGenerateToCode, handleGenerateFolderToCode, handleRefactorCode } from './handlers/generation';
import { handlePoll, handleLog, handleDelete, handleMove } from './handlers/system';

const PORT = 3001;

const server = http.createServer((req, res) => {
    // Enable CORS for Figma Plugin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Total request logger for debugging (ignore poll noise)
    if (req.url !== '/poll') {
        console.log(`[${req.method}] ${req.url} (Origin: ${req.headers.origin || 'none'})`);
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method === 'GET' && req.url === '/poll') return handlePoll(req, res);
    if (req.method === 'POST' && req.url === '/log') return handleLog(req, res);

    if (req.method === 'GET' && (req.url === '/list' || req.url?.startsWith('/list?'))) return handleList(req, res);
    if (req.method === 'GET' && (req.url === '/read' || req.url?.startsWith('/read?'))) return handleRead(req, res);

    if (req.method === 'GET' && (req.url === '/list-components' || req.url?.startsWith('/list-components?'))) return handleListComponents(req, res);
    if (req.method === 'POST' && req.url === '/delete-component') return handleDeleteComponent(req, res);
    if (req.method === 'POST' && req.url === '/delete-component-folder') return handleDeleteComponentFolder(req, res);

    if (req.method === 'POST' && req.url === '/save') return handleSave(req, res);
    if (req.method === 'POST' && req.url === '/save-asset') return handleSaveAsset(req, res);
    if (req.method === 'POST' && req.url === '/save-png') return handleSavePng(req, res);
    if (req.method === 'POST' && req.url === '/save-packet') return handleSavePacket(req, res);
    if (req.method === 'GET' && req.url?.startsWith('/read-asset')) return handleReadAsset(req, res);

    if (req.method === 'POST' && req.url === '/generate-code-preview') return handleGenerateCodePreview(req, res);
    if (req.method === 'POST' && req.url === '/generate-to-code') return handleGenerateToCode(req, res);
    if (req.method === 'POST' && req.url === '/generate-folder-to-code') return handleGenerateFolderToCode(req, res);
    if (req.method === 'POST' && req.url === '/refactor-code') return handleRefactorCode(req, res);

    if (req.method === 'POST' && req.url === '/delete') return handleDelete(req, res);
    if (req.method === 'POST' && req.url === '/move') return handleMove(req, res);

    res.writeHead(404);
    res.end();
});

server.listen(PORT, '127.0.0.1', async () => {
    console.log(`Bridge Server running at http://127.0.0.1:${PORT}`);
    console.log("👉 Press ENTER in this terminal to trigger a capture in Figma.");
    console.log("   (Make sure 'Auto-Connect Terminal' is checked in the Figma Plugin UI)");

    const stdin = process.stdin;
    stdin.setEncoding('utf-8');

    stdin.on('data', (_key) => {
        // Simple enter key detection
        if (BridgeState.pendingCommand === null || BridgeState.pendingCommand === 'idle') {
            console.log("Command: CAPTURE sent to Figma...");
            setPendingCommand('capture');

            // Start Spinner
            let frameIndex = 0;
            const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
            process.stdout.write("   Waiting for Figma... ");

            if (BridgeState.spinnerInterval) clearInterval(BridgeState.spinnerInterval);
            const interval = setInterval(() => {
                process.stdout.write(`\r   Waiting for Figma... ${frames[frameIndex]}`);
                frameIndex = (frameIndex + 1) % frames.length;
            }, 80) as unknown as NodeJS.Timeout;
            setSpinnerInterval(interval);

        } else {
            console.log("⚠️  Busy or waiting for plugin... (Press Ctrl+C to force quit)");
        }
    });

    // Keep process alive
    await new Promise(() => { });
});

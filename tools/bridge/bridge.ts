import * as http from 'http';
import { BridgeState, setPendingCommand, setSpinnerInterval } from './state';
import { handleList, handleRead, handleDelete, handleBatchDelete } from './handlers/extraction';
import { handleListComponents, handleDeleteComponent, handleDeleteComponentFolder, handleBatchDeleteComponents, handleBatchDeletePages } from './handlers/components';
import { handleSave, handleSavePacket, handleSavePng, handleReadAsset } from './handlers/assets';
import { handleGenerateCodePreview, handleGenerateToCode, handleGenerateFolderToCode, handleRefactorCode, handleGenerateClipboard, handleProceduralConvert } from './handlers/generation';
import { handlePoll, handleLog } from './handlers/system';
import { handleSavePpt } from './handlers/ppt_export';
import { handleImportPpt } from './handlers/ppt_import';
import { handleSelectSavePath } from './handlers/system_dialog';
import { handleResolveFont, handleFontFile } from './handlers/fonts';
import { handleParityCompare, handleParityLatest } from './handlers/parity';
import {
    handleActivePluginSession,
    handleSessionCommand,
    handleSessionEvent,
    handleSessionEvents,
    handleSessionHeartbeat,
    handleSessionOpen,
    handleSessionPoll,
    handleSessionStatus
} from './handlers/session';

// Build watcher is now managed by the parent process in npm run dev
// startBuild({ watch: true }).catch(err => console.error("[Bridge] Build Watcher Error:", err));


const PORT = 4000;

const server = http.createServer((req, res) => {
    // Enable CORS for Figma Plugin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const parsedUrl = new URL(req.url || '/', 'http://127.0.0.1');
    const pathname = parsedUrl.pathname;

    // Total request logger for debugging (ignore poll noise)
    if (pathname !== '/poll') {
        console.log(`[${req.method}] ${req.url} (Origin: ${req.headers.origin || 'none'})`);
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method === 'GET' && pathname === '/poll') return handlePoll(req, res);
    if (req.method === 'POST' && pathname === '/log') return handleLog(req, res);

    if (req.method === 'POST' && pathname === '/session/open') return void handleSessionOpen(req, res);
    if (req.method === 'GET' && pathname === '/session/active-plugin') return handleActivePluginSession(res);

    const sessionMatch = pathname.match(/^\/session\/([^/]+)\/(poll|command|event|events|status|heartbeat)$/);
    if (sessionMatch) {
        const [, sessionId, action] = sessionMatch;
        if (req.method === 'GET' && action === 'poll') return handleSessionPoll(res, sessionId);
        if (req.method === 'POST' && action === 'command') return void handleSessionCommand(req, res, sessionId);
        if (req.method === 'POST' && action === 'event') return void handleSessionEvent(req, res, sessionId);
        if (req.method === 'GET' && action === 'events') return handleSessionEvents(req, res, sessionId);
        if (req.method === 'GET' && action === 'status') return handleSessionStatus(res, sessionId);
        if (req.method === 'POST' && action === 'heartbeat') {
            const actor = parsedUrl.searchParams.get('actor') === 'plugin' ? 'plugin' : 'web';
            return handleSessionHeartbeat(res, sessionId, actor);
        }
    }

    if (req.method === 'GET' && pathname === '/list') return handleList(req, res);
    if (req.method === 'GET' && pathname === '/read') return handleRead(req, res);
    if (req.method === 'GET' && pathname === '/read-asset') return handleReadAsset(req, res);
    if (req.method === 'POST' && pathname === '/delete') return handleDelete(req, res);
    if (req.method === 'POST' && pathname === '/batch-delete') return handleBatchDelete(req, res);

    if (req.method === 'GET' && pathname === '/list-components') return handleListComponents(req, res);
    if (req.method === 'POST' && pathname === '/delete-component') return handleDeleteComponent(req, res);
    if (req.method === 'POST' && pathname === '/delete-component-folder') return handleDeleteComponentFolder(req, res);
    if (req.method === 'POST' && pathname === '/batch-delete-components') return handleBatchDeleteComponents(req, res);
    if (req.method === 'POST' && pathname === '/batch-delete-pages') return handleBatchDeletePages(req, res);

    if (req.method === 'POST' && pathname === '/save') return handleSave(req, res);
    if (req.method === 'POST' && pathname === '/save-packet') return handleSavePacket(req, res);
    if (req.method === 'POST' && pathname === '/save-png') return handleSavePng(req, res);
    if (req.method === 'POST' && pathname === '/save-ppt') return handleSavePpt(req, res);
    if (req.method === 'POST' && pathname === '/import-ppt') return handleImportPpt(req, res);
    if (req.method === 'POST' && pathname === '/select-save-path') return handleSelectSavePath(req, res);
    if (req.method === 'GET' && pathname === '/font/resolve') return void handleResolveFont(req, res);
    if (req.method === 'GET' && pathname === '/font/file') return handleFontFile(req, res);

    if (req.method === 'POST' && pathname === '/generate-code-preview') return handleGenerateCodePreview(req, res);
    if (req.method === 'POST' && pathname === '/generate-clipboard') return handleGenerateClipboard(req, res);
    if (req.method === 'POST' && pathname === '/generate-to-code') return handleGenerateToCode(req, res);
    if (req.method === 'POST' && pathname === '/generate-folder-to-code') return handleGenerateFolderToCode(req, res);
    if (req.method === 'POST' && pathname === '/refactor-code') return handleRefactorCode(req, res);
    if (req.method === 'POST' && pathname === '/procedural-convert') return handleProceduralConvert(req, res);
    if (req.method === 'POST' && pathname === '/parity/compare') return void handleParityCompare(req, res);
    if (req.method === 'GET' && pathname === '/parity/latest') return handleParityLatest(req, res);

    if (req.method === 'GET' && pathname === '/') {
        res.writeHead(200);
        res.end("Bridge Server Online");
        return;
    }

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

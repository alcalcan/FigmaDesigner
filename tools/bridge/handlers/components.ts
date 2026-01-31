import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

export function handleListComponents(req: http.IncomingMessage, res: http.ServerResponse) {
    try {
        const componentsDir = path.join(process.cwd(), 'components');
        const pagesDir = path.join(process.cwd(), 'pages');
        const components: string[] = [];
        const pages: string[] = [];

        const walk = (dir: string, baseDir: string, list: string[]) => {
            if (!fs.existsSync(dir)) return;
            const items = fs.readdirSync(dir);
            items.forEach(item => {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    walk(fullPath, baseDir, list);
                } else if (item.endsWith('.ts') &&
                    /^[A-Za-z]/.test(item) &&
                    !item.includes('BaseComponent') &&
                    !item.includes('Helpers') &&
                    !item.includes('JsonReconstructor')) {

                    const relativePath = path.relative(baseDir, fullPath);
                    const name = relativePath.replace(/\.ts$/, '');
                    list.push(name);
                }
            });
        };

        walk(componentsDir, componentsDir, components);
        walk(pagesDir, pagesDir, pages);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ components, pages }));
    } catch (e) {
        console.error("Error in /list-components:", e);
        res.writeHead(500);
        res.end(JSON.stringify({ error: "Failed to list components" }));
    }
}

export function handleDeleteComponent(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const { name } = JSON.parse(body); // e.g. "Project/Folder/Component"
            if (!name) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Missing component name" }));
                return;
            }

            const componentClassName = path.basename(name);
            const fullPath = path.join(process.cwd(), 'components', `${name}.ts`);
            const componentDir = path.dirname(fullPath);

            if (!fs.existsSync(componentDir)) {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "Component directory not found" }));
                return;
            }

            // 1. Remove from registry (Robust)
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
                    const content = fs.readFileSync(registryPath, 'utf8');
                    const lines = content.split('\n');
                    const filteredLines = lines.filter(line => {
                        const isStandardExport = line.includes(`{ ${componentClassName} }`);
                        const isAliasedExport = line.includes(`{ ${componentClassName} as `);
                        return !isStandardExport && !isAliasedExport;
                    });

                    if (filteredLines.length !== lines.length) {
                        fs.writeFileSync(registryPath, filteredLines.join('\n'));
                        console.log(`[Delete] Removed ${componentClassName} from registry.`);
                    }
                } catch (regErr) {
                    console.error(`[Delete] Failed to update registry:`, regErr);
                } finally {
                    if (originalMode !== null) {
                        try { fs.chmodSync(registryPath, originalMode); }
                        catch (e) { console.warn("Failed to restore registry perms", e); }
                    }
                }
            }

            // 2. Cleanup Pages using CleaningService
            console.log(`🧹 Cleaning up pages usage for ${componentClassName}...`);
            try {
                // Dynamic import for hot-reload
                const servicePath = require.resolve('../server_tools/CleaningService');
                delete require.cache[servicePath];
                const { CleaningService } = require('../server_tools/CleaningService');
                const cleaner = new CleaningService();
                const { updatedFiles } = cleaner.cleanup(componentClassName, name);
                if (updatedFiles.length > 0) {
                    console.log(`   Updated ${updatedFiles.length} pages: ${updatedFiles.join(', ')}`);
                }
            } catch (cleanErr) {
                console.warn(`[Delete] CleaningService execution failed:`, cleanErr);
            }

            // 3. Delete the directory
            if (fs.existsSync(componentDir)) {
                fs.rmSync(componentDir, { recursive: true, force: true });
                console.log(`Deleted component: ${name}`);
            }

            // 4. Cleanup Empty Parent Directories
            try {
                const parentDir = path.dirname(componentDir);
                const componentsRoot = path.join(process.cwd(), 'components');

                // Ensure we don't delete the components root itself and stay within it
                if (parentDir !== componentsRoot && parentDir.startsWith(componentsRoot)) {
                    if (fs.existsSync(parentDir)) {
                        const remaining = fs.readdirSync(parentDir);
                        if (remaining.length === 0) {
                            fs.rmdirSync(parentDir);
                            console.log(`Deleted empty parent folder: ${path.basename(parentDir)}`);
                        }
                    }
                }
            } catch (dirErr) {
                console.warn("Folder cleanup warning:", dirErr);
            }

            // 5. Cascade Delete: Cleanup source extraction data
            try {
                const extractionProjectDir = path.join(process.cwd(), 'tools', 'extraction', path.dirname(name));
                if (fs.existsSync(extractionProjectDir)) {
                    const sessionFolders = fs.readdirSync(extractionProjectDir);
                    const componentPrefix = `${componentClassName}_`;
                    sessionFolders.forEach(folder => {
                        if (folder.startsWith(componentPrefix)) {
                            const fullSessionPath = path.join(extractionProjectDir, folder);
                            fs.rmSync(fullSessionPath, { recursive: true, force: true });
                            console.log(`[Delete] Cascade: Removed extraction session ${folder}`);
                        }
                    });
                }
            } catch (extractErr) {
                console.warn("[Delete] Cascade extraction cleanup failed:", extractErr);
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok', deleted: name }));

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error deleting component:", error);
            if (error.stack) console.error(error.stack);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

export function handleDeleteComponentFolder(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const { folder } = JSON.parse(body); // e.g. "ProjectName"
            if (!folder) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Missing folder name" }));
                return;
            }

            // Security: simple folder name or path relative to components
            const componentsRoot = path.join(process.cwd(), 'components');
            const fullPath = path.join(componentsRoot, folder);
            const registryPath = path.join(componentsRoot, 'index.ts');

            if (!fullPath.startsWith(componentsRoot)) {
                res.writeHead(403);
                res.end(JSON.stringify({ error: "Invalid path" }));
                return;
            }

            if (!fs.existsSync(fullPath)) {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "Folder not found" }));
                return;
            }

            // 1. Cleanup Registry (index.ts)
            if (fs.existsSync(registryPath)) {
                let originalMode: number | null = null;
                try {
                    const stats = fs.statSync(registryPath);
                    if ((stats.mode & fs.constants.S_IWUSR) === 0) {
                        console.log(`[Delete Folder] Registry is read-only. Unlocking...`);
                        originalMode = stats.mode;
                        fs.chmodSync(registryPath, 0o644);
                    }
                } catch (e) { console.warn("Registry perm check failed", e); }

                try {
                    const content = fs.readFileSync(registryPath, 'utf8');
                    const lines = content.split('\n');
                    const folderPrefix = `./${folder}/`;

                    const forwardedContent = lines.filter(line => {
                        return !line.includes(`"${folderPrefix}`) && !line.includes(`'${folderPrefix}`);
                    });

                    if (lines.length !== forwardedContent.length) {
                        fs.writeFileSync(registryPath, forwardedContent.join('\n'));
                        console.log(`Updated registry: removed ${lines.length - forwardedContent.length} exports for folder ${folder}`);
                    }
                } catch (regErr) {
                    console.error(`[Delete Folder] Failed to update registry:`, regErr);
                } finally {
                    if (originalMode !== null) {
                        try { fs.chmodSync(registryPath, originalMode); }
                        catch (e) { console.warn("Failed to restore registry perms", e); }
                    }
                }
            }

            // 2. Cascade Delete: Cleanup source extraction project folder
            try {
                const extractionFolder = path.join(process.cwd(), 'tools', 'extraction', folder);
                if (fs.existsSync(extractionFolder)) {
                    fs.rmSync(extractionFolder, { recursive: true, force: true });
                    console.log(`[Delete Folder] Cascade: Removed extraction folder: ${folder}`);
                }
            } catch (extractErr) {
                console.warn("[Delete Folder] Cascade extraction cleanup failed:", extractErr);
            }

            // 3. Delete Directory
            fs.rmSync(fullPath, { recursive: true, force: true });
            console.log(`Deleted component folder: ${folder}`);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok' }));

        } catch (e: unknown) {
            const error = e as Error;
            console.error("Error deleting component folder:", error);
            if (error.stack) console.error(error.stack);
            res.writeHead(500);
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

export function handleBatchDeleteComponents(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const { names } = JSON.parse(body);
            if (!Array.isArray(names) || names.length === 0) {
                res.writeHead(400); res.end(JSON.stringify({ error: "Invalid components names array" }));
                return;
            }
            const componentsRoot = path.join(process.cwd(), 'components');
            const registryPath = path.join(componentsRoot, 'index.ts');
            const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');
            if (fs.existsSync(registryPath)) {
                let originalMode: number | null = null;
                try {
                    const stats = fs.statSync(registryPath);
                    if ((stats.mode & fs.constants.S_IWUSR) === 0) {
                        originalMode = stats.mode;
                        fs.chmodSync(registryPath, 0o644);
                    }
                    const content = fs.readFileSync(registryPath, 'utf8');
                    const lines = content.split('\n');
                    const classNamesToRemove = names.map(n => path.basename(n));
                    const filteredLines = lines.filter(line => !classNamesToRemove.some(cls => line.includes(`{ ${cls} }`) || line.includes(`{ ${cls} as `)));
                    if (filteredLines.length !== lines.length) fs.writeFileSync(registryPath, filteredLines.join('\n'));
                } catch (e) { } finally {
                    if (originalMode !== null) { try { fs.chmodSync(registryPath, originalMode); } catch (e) { } }
                }
            }
            for (const name of names) {
                const componentClassName = path.basename(name);
                const fullPath = path.join(componentsRoot, `${name}.ts`);
                const componentDir = path.dirname(fullPath);
                try {
                    const { CleaningService } = require('../server_tools/CleaningService');
                    const cleaner = new CleaningService();
                    cleaner.cleanup(componentClassName, name);
                } catch (e: any) { }
                if (fs.existsSync(componentDir)) fs.rmSync(componentDir, { recursive: true, force: true });
                try {
                    const extractionProjectDir = path.join(extractionRoot, path.dirname(name));
                    if (fs.existsSync(extractionProjectDir)) {
                        const sessions = fs.readdirSync(extractionProjectDir);
                        const prefix = `${componentClassName}_`;
                        sessions.forEach(s => { if (s.startsWith(prefix)) fs.rmSync(path.join(extractionProjectDir, s), { recursive: true, force: true }); });
                    }
                } catch (e) { }
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok' }));
        } catch (e: any) {
            res.writeHead(500); res.end(JSON.stringify({ error: e.message }));
        }
    });
}

export function handleBatchDeletePages(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
        try {
            const { names } = JSON.parse(body);
            if (!Array.isArray(names) || names.length === 0) {
                res.writeHead(400); res.end(JSON.stringify({ error: "Invalid pages names array" }));
                return;
            }
            const pagesRoot = path.join(process.cwd(), 'pages');
            for (const name of names) {
                const fullPath = path.join(pagesRoot, `${name}.ts`);
                const pageDir = path.dirname(fullPath);
                if (fs.existsSync(pageDir)) fs.rmSync(pageDir, { recursive: true, force: true });
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok' }));
        } catch (e: any) {
            res.writeHead(500); res.end(JSON.stringify({ error: e.message }));
        }
    });
}

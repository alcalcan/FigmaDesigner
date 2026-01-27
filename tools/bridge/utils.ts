import * as fs from 'fs';
import * as path from 'path';
import { BridgeState, setSpinnerInterval } from './state';

export function stopSpinner() {
    if (BridgeState.spinnerInterval) {
        clearInterval(BridgeState.spinnerInterval);
        setSpinnerInterval(null);
        process.stdout.write("\r                                         \r"); // Clear line
    }
}

export function walkFiles(dir: string, project: string, callback: (name: string, project: string, relPath: string) => void) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    const extractionRoot = path.join(process.cwd(), 'tools', 'extraction');

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            walkFiles(fullPath, project === "" ? item : `${project}/${item}`, callback);
        } else if (item.endsWith('.json')) {
            callback(item, project, path.relative(extractionRoot, fullPath));
        }
    });
}

export function findLatestExtraction(componentName: string): { path: string, mtime: number, project: string } | null {
    const extractionDir = path.join(process.cwd(), 'tools', 'extraction');
    if (!fs.existsSync(extractionDir)) return null;

    let bestMatch: { path: string, mtime: number, project: string } | null = null;

    const projects = fs.readdirSync(extractionDir);
    projects.forEach(project => {
        const projectPath = path.join(extractionDir, project);
        if (!fs.statSync(projectPath).isDirectory()) return;

        const folders = fs.readdirSync(projectPath);
        folders.forEach(folder => {
            // Folder name is like ComponentName_YYYY-MM-DD_HH-mm-ss
            // We check if it starts with componentName
            if (folder.toLowerCase().startsWith(componentName.toLowerCase())) {
                // Or look for any .json in that folder that matches
                const folderPath = path.join(projectPath, folder);
                if (!fs.existsSync(folderPath)) return;

                const files = fs.readdirSync(folderPath);
                const jsonFile = files.find(f => f.endsWith('.json') && f.toLowerCase().includes(componentName.toLowerCase()));

                if (jsonFile) {
                    const fullJsonPath = path.join(folderPath, jsonFile);
                    const stats = fs.statSync(fullJsonPath);
                    if (!bestMatch || stats.mtimeMs > bestMatch.mtime) {
                        bestMatch = { path: fullJsonPath, mtime: stats.mtimeMs, project };
                    }
                }
            }
        });
    });

    return bestMatch;
}

export function saveItem(item: Record<string, unknown>, projectName: string) {
    const sanitaryProjectName = projectName.replace(/[^a-z0-9]/gi, '_');
    const projectDir = path.join(process.cwd(), 'tools', 'extraction', sanitaryProjectName);

    if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir, { recursive: true });
    }

    // Use local time for filename (YYYY-MM-DD_HH-mm-ss)
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
    const name = (item.name as string) || "Untitled";
    const sanitaryName = name.replace(/[^a-z0-9]/gi, '_');

    // We save as JSON because the data is now expanded and complex object
    const filename = `${sanitaryName}_${timestamp}.json`;
    const filePath = path.join(projectDir, filename);

    fs.writeFileSync(filePath, JSON.stringify(item, null, 2));
    console.log(`   Saved: tools/extraction/${sanitaryProjectName}/${filename}`);
}

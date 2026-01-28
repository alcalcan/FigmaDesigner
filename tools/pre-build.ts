import * as fs from 'fs';
import * as path from 'path';
import { ComponentGenerator } from './bridge/server_tools/ComponentGenerator';
import { CleaningService } from './bridge/server_tools/CleaningService';

export async function checkAndRecover() {
    console.log("🚀 Running Pre-build Cleaning & Regeneration Service...");

    const rootDir = process.cwd();
    const extractionDir = path.join(rootDir, 'tools', 'extraction');

    const generator = new ComponentGenerator();
    const cleaner = new CleaningService();

    let recoveredAny = false;
    let totalFilesScanned = 0;

    const sourceDirs = [
        path.join(rootDir, 'pages'),
        path.join(rootDir, 'components')
    ];

    const seenFiles = new Set<string>();

    for (const dir of sourceDirs) {
        if (!fs.existsSync(dir)) continue;

        walkFiles(dir, (filePath) => {
            if (seenFiles.has(filePath)) return;
            seenFiles.add(filePath);
            totalFilesScanned++;

            const content = fs.readFileSync(filePath, 'utf8');

            // Grep-like search for components/ patterns
            // Match 1: import ... from '../../components/Project/Folder/Component'
            // Match 2: export ... from './Folder/Component' (inside components subfolders)

            // Use a single regex that looks for strings containing 'components/' 
            // or relative paths if inside 'components' directory
            const importRegex = /from\s+['"]([^'"]+)['"]/g;
            let match;
            while ((match = importRegex.exec(content)) !== null) {
                const relPath = match[1];
                let componentSubPath: string | null = null;

                if (relPath.includes('components/')) {
                    componentSubPath = relPath.split('components/')[1];
                } else if (filePath.includes('/components/') && relPath.startsWith('./')) {
                    // It's a local import within the components tree
                    // We need to reconstruct the "Project/Folder/Component" subpath
                    const relativeToComponents = path.relative(path.join(rootDir, 'components'), path.dirname(filePath));
                    componentSubPath = path.join(relativeToComponents, relPath.substring(2));
                }

                if (componentSubPath && componentSubPath.includes('/')) {
                    if (handleMatch(relPath, componentSubPath, filePath, generator, cleaner, extractionDir)) {
                        recoveredAny = true;
                    }
                }
            }
        });
    }

    // Also check code.ts directly
    const codeTsPath = path.join(rootDir, 'code.ts');
    if (fs.existsSync(codeTsPath)) {
        const content = fs.readFileSync(codeTsPath, 'utf8');
        const importRegex = /from\s+['"]([^'"]+)['"]/g;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
            const relPath = match[1];
            if (relPath.includes('components/')) {
                const subPath = relPath.split('components/')[1];
                if (subPath.includes('/') && handleMatch(relPath, subPath, codeTsPath, generator, cleaner, extractionDir)) {
                    recoveredAny = true;
                }
            }
        }
    }

    console.log(`✅ Pre-build check complete. Scanned ${totalFilesScanned + 1} files.\n`);
    return recoveredAny;
}

function handleMatch(
    relPath: string,
    subPath: string,
    sourceFile: string,
    generator: ComponentGenerator,
    cleaner: CleaningService,
    extractionDir: string
): boolean {
    const pageDir = path.dirname(sourceFile);
    const componentFilePath = path.resolve(pageDir, relPath.replace(/\.ts$/, '') + '.ts');

    if (relPath.match(/\.(png|jpg|jpeg|svg|gif|webp|bin)$/i)) return false;

    if (!fs.existsSync(componentFilePath)) {
        console.log(`\n🔍 Found missing component reference: ${subPath}`);
        console.log(`   📄 Referenced in: ${path.relative(process.cwd(), sourceFile)}`);

        const className = path.basename(subPath).replace(/\.ts$/, '');

        if (className === 'BaseComponent' || className === 'Placeholder') return false;

        const latest = findLatestExtraction(extractionDir, className);

        if (latest) {
            console.log(`   ♻️ Found extraction. Regenerating ${className}...`);
            try {
                generator.generate(latest.path, latest.project);
                console.log(`   ✅ Successfully regenerated ${className}.`);
                return true;
            } catch (err) {
                console.error(`   ❌ Failed to regenerate: ${err}`);
                cleaner.cleanup(className, subPath);
                return true;
            }
        } else {
            console.log(`   ⚠️ No extraction found for ${className}. Using Placeholder...`);
            cleaner.cleanup(className, subPath);
            return true;
        }
    }
    return false;
}

function findLatestExtraction(extractionDir: string, componentName: string): { path: string, project: string, mtime: number } | null {
    if (!fs.existsSync(extractionDir)) return null;
    let bestMatch: { path: string, project: string, mtime: number } | null = null;
    const projects = fs.readdirSync(extractionDir);
    projects.forEach(project => {
        const projectPath = path.join(extractionDir, project);
        if (!fs.statSync(projectPath).isDirectory()) return;
        const folders = fs.readdirSync(projectPath);
        folders.forEach(folder => {
            if (folder.toLowerCase().startsWith(componentName.toLowerCase())) {
                const folderPath = path.join(projectPath, folder);
                if (!fs.statSync(folderPath).isDirectory()) return;
                const files = fs.readdirSync(folderPath);
                const jsonFile = files.find(f => f.endsWith('.json') && f.toLowerCase().includes(componentName.toLowerCase()));
                if (jsonFile) {
                    const fullJsonPath = path.join(folderPath, jsonFile);
                    const stats = fs.statSync(fullJsonPath);
                    if (!bestMatch || stats.mtimeMs > bestMatch.mtime) {
                        bestMatch = { path: fullJsonPath, project, mtime: stats.mtimeMs };
                    }
                }
            }
        });
    });
    return bestMatch;
}

function walkFiles(dir: string, callback: (filePath: string) => void) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                if (['node_modules', '.git', 'dist', '.gemini', 'tools'].includes(item)) return;
                walkFiles(fullPath, callback);
            } else if (item.endsWith('.ts')) {
                callback(fullPath);
            }
        } catch (e) {
            // Silently fail if file stat fails or other read errors during pre-build
        }
    });
}

if (require.main === module) {
    checkAndRecover().catch(err => {
        console.error("Fatal error in pre-build script:", err);
        process.exit(1);
    });
}

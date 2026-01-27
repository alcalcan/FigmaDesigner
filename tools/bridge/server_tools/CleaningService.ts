import * as fs from 'fs';
import * as path from 'path';

export class CleaningService {
    private pagesDir: string;

    constructor() {
        this.pagesDir = path.join(process.cwd(), 'pages');
    }

    /**
     * Cleans up all pages that use the deleted component.
     * @param componentName The class name of the component (e.g. "sidebar")
     * @param fullRelativePath The path relative to components/ (e.g. "UEFA_Academy_online/sidebar/sidebar")
     */
    public cleanup(componentName: string, fullRelativePath: string): { updatedFiles: string[] } {
        const updatedFiles: string[] = [];

        // Extract Project Name from "Project/Folder/Component"
        // We assume the first segment is the project name
        const parts = fullRelativePath.split('/');
        const projectName = parts.length > 0 ? parts[0] : null;

        if (!projectName) {
            console.warn(`[CleaningService] Could not determine project name from ${fullRelativePath}. Skipping page cleanup.`);
            return { updatedFiles };
        }

        const projectPagesDir = path.join(this.pagesDir, projectName);

        if (!fs.existsSync(projectPagesDir)) {
            console.log(`[CleaningService] No pages folder found for project ${projectName} (${projectPagesDir}). Skipping cleanup.`);
            return { updatedFiles };
        }

        this.walkPages(projectPagesDir, (filePath) => {
            if (this.processFile(filePath, componentName, fullRelativePath)) {
                updatedFiles.push(filePath);
            }
        });
        return { updatedFiles };
    }

    private walkPages(dir: string, callback: (filePath: string) => void) {
        if (!fs.existsSync(dir)) return;
        const items = fs.readdirSync(dir);
        items.forEach(item => {
            const fullPath = path.join(dir, item);
            if (fs.statSync(fullPath).isDirectory()) {
                this.walkPages(fullPath, callback);
            } else if (item.endsWith('.ts')) {
                callback(fullPath);
            }
        });
    }

    private processFile(filePath: string, componentName: string, fullRelativePath: string): boolean {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // 1. Remove specific import of the deleted component
        // Matches: import { ComponentName } from "../../components/path/to/Component";
        const importRegex = new RegExp(`import\\s+\\{\\s*${componentName}\\s*\\}\\s+from\\s+['"].*?components/${fullRelativePath}['"];?\\r?\\n?`, 'g');
        if (importRegex.test(content)) {
            content = content.replace(importRegex, '');
            modified = true;
        }

        // 2. Replace instantiation: new ComponentName() -> new Placeholder("ComponentName")
        const instanceRegex = new RegExp(`new\\s+${componentName}\\(\\s*\\)`, 'g');
        if (instanceRegex.test(content)) {
            content = content.replace(instanceRegex, `new Placeholder("${componentName}")`);
            modified = true;
        }

        if (modified) {
            // 3. Ensure Placeholder is imported from components index or directly
            // We'll prefer importing from the base components directory/index for simplicity in this system
            if (!content.includes('import { Placeholder }')) {
                // Determine relative path to components
                const pageRelToRoot = path.relative(process.cwd(), filePath);
                const depth = pageRelToRoot.split(path.sep).length - 1;
                const relPrefix = '../'.repeat(depth) + 'components/Placeholder';

                // Add import at the top
                content = `import { Placeholder } from "${relPrefix}";\n` + content;
            }

            fs.writeFileSync(filePath, content);
        }

        return modified;
    }
}

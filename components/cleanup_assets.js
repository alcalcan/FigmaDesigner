const fs = require('fs');
const path = require('path');

function cleanupAssets(dir) {
    const assetsDir = path.join(dir, 'assets');
    if (!fs.existsSync(assetsDir)) return;

    const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
    let globallyUsedAssets = new Set();

    // Pass 1: Remove unused imports from each TS file
    files.forEach(f => {
        let filePath = path.join(dir, f);
        let content = fs.readFileSync(filePath, 'utf-8');
        let lines = content.split('\n');

        let newLines = [];
        let usedAssetsInThisFile = new Set();

        for (let line of lines) {
            if (line.startsWith('import ') && line.includes(' from ') && line.includes('assets/')) {
                // Extract variable name and asset filename
                let match = line.match(/import\s+([A-Za-z0-9_]+)\s+from\s+['"](?:\.\/)*assets\/([^'"]+)['"]/);
                if (match) {
                    let varName = match[1];
                    let assetFile = match[2];

                    // Count how many times varName appears in the ENTIRE file
                    // We split by varName. If it's more than 2 (1 for the import, at least 1 for the usage), it's used.
                    let regex = new RegExp('\\b' + varName + '\\b', 'g');
                    let usages = (content.match(regex) || []).length;

                    if (usages > 1) {
                        newLines.push(line);
                        usedAssetsInThisFile.add(assetFile);
                        globallyUsedAssets.add(assetFile);
                    }
                    continue; // Skip the import line if not used
                }
            }
            newLines.push(line);
        }

        fs.writeFileSync(filePath, newLines.join('\n'));
    });

    // Pass 2: Delete assets that are not in globallyUsedAssets
    const assetFiles = fs.readdirSync(assetsDir);
    let deletedCount = 0;
    assetFiles.forEach(file => {
        if (!globallyUsedAssets.has(file)) {
            const filePath = path.join(assetsDir, file);
            fs.unlinkSync(filePath);
            deletedCount++;
        }
    });

    console.log(`Cleaned up ${deletedCount} unused assets in ${dir}`);
}

const baseDir = '/Users/alexcalcan/Documents/Apps/FigmaDesigner/components/UEFA_Newsletters';

cleanupAssets(path.join(baseDir, 'UCL_Header_Generic_Preview'));
cleanupAssets(path.join(baseDir, 'UCL_Header_Specific_Preview'));


import * as fs from 'fs';
import * as path from 'path';

const ICONS_DIR = path.join(__dirname, '../components/lucide_icons');

function toTitleCase(str: string): string {
    return str
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function processFile(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Extract slug
    // Try to find "name": "Lucide / activity"
    const nameMatch = content.match(/"name":\s*"Lucide\s*\/\s*([^"]+)"/);
    if (!nameMatch) {
        // If already refactored or doesn't match pattern, skip or try alternative
        if (content.includes('"layoutMode": "VERTICAL"') && content.includes('"primaryAxisAlignItems": "CENTER"')) {
            console.log(`Skipping already refactored file: ${filePath}`);
            return;
        }
        console.warn(`Could not find Lucide name pattern in: ${filePath}`);
        return;
    }

    const slug = nameMatch[1];
    const titleName = toTitleCase(slug);
    const iconName = `${titleName} Icon`;
    const svgName = `${titleName} SVG`;

    console.log(`Refactoring ${slug} -> ${titleName}`);

    // 2. Replace name
    content = content.replace(/"name":\s*"Lucide\s*\/\s*[^"]+"/, `"name": "${iconName}"`);

    // 3. Update layout props
    // find "layoutMode": "NONE"
    // We want to replace it with:
    // "layoutMode": "VERTICAL",
    // "primaryAxisAlignItems": "CENTER",
    // "counterAxisAlignItems": "CENTER"
    content = content.replace(/"layoutMode":\s*"NONE"/,
        `"layoutMode": "VERTICAL",\n                "primaryAxisAlignItems": "CENTER",\n                "counterAxisAlignItems": "CENTER"`);

    // 4. Update Icon Wrapper name
    content = content.replace(/"name":\s*"Icon Wrapper"/, `"name": "${svgName}"`);

    fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.ts') && !file.includes('IconShowcase')) {
            processFile(fullPath);
        }
    }
}

console.log('Starting icon refactor...');
walk(ICONS_DIR);
console.log('Refactor complete!');

import * as fs from 'fs';
import * as path from 'path';

const CATEGORIES: Record<string, string[]> = {
    "Navigation": [
        "arrow-up", "arrow-down", "arrow-left", "arrow-right",
        "chevron-up", "chevron-down", "chevron-left", "chevron-right",
        "chevrons-up", "chevrons-down", "chevrons-left", "chevrons-right",
        "menu", "more-horizontal", "more-vertical",
        "external-link", "move", "maximize", "minimize"
    ],
    "Action": [
        "plus", "minus", "x", "check", "search",
        "trash-2", "edit-2", "copy", "download", "upload",
        "refresh-cw", "save", "filter"
    ],
    "Files & Folders": [
        "file", "file-text", "file-plus", "file-minus",
        "folder", "folder-plus", "folder-minus", "folder-open",
        "archive", "hard-drive"
    ],
    "Communication": [
        "user", "user-plus", "users", "mail", "phone",
        "message-square", "message-circle", "bell", "bell-off",
        "share-2", "send", "at-sign"
    ],
    "Indicators": [
        "alert-circle", "alert-triangle", "info", "help-circle",
        "check-circle", "clock", "calendar", "shield", "flag"
    ],
    "Devices & System": [
        "settings", "home", "image", "camera", "video",
        "monitor", "smartphone", "laptop", "mouse", "keyboard",
        "battery", "wifi", "bluetooth"
    ]
};

async function generate() {
    console.log("🚀 Starting Refined Lucide Icon Generation...");

    const rootDir = process.cwd();
    const iconSource = path.join(rootDir, 'node_modules', 'lucide-static', 'icons');
    const targetDir = path.join(rootDir, 'components', 'lucide_icons');

    if (!fs.existsSync(iconSource)) {
        console.error(`❌ Lucide icons not found at ${iconSource}. Did you run npm install lucide-static?`);
        return;
    }

    // Clean up existing directory to ensure only selected icons remain
    if (fs.existsSync(targetDir)) {
        console.log("🧹 Cleaning up existing Lucide icons...");
        fs.rmSync(targetDir, { recursive: true, force: true });
    }
    fs.mkdirSync(targetDir, { recursive: true });

    const allSelectedIcons = Object.values(CATEGORIES).flat();
    console.log(`📦 Processing ${allSelectedIcons.length} essential icons.`);

    let count = 0;
    for (const iconName of allSelectedIcons) {
        const file = `${iconName}.svg`;
        const sourcePath = path.join(iconSource, file);

        if (!fs.existsSync(sourcePath)) {
            console.warn(`⚠️ Icon not found: ${iconName}`);
            continue;
        }

        const className = `Lucide_${iconName.replace(/-/g, '_')}`;
        const componentDir = path.join(targetDir, className);
        const assetsDir = path.join(componentDir, 'assets');

        fs.mkdirSync(assetsDir, { recursive: true });

        // Read SVG and fix stroke to black
        let svgContent = fs.readFileSync(sourcePath, 'utf8');
        svgContent = svgContent.replace(/stroke="currentColor"/g, 'stroke="#000000"');

        fs.writeFileSync(path.join(assetsDir, `${iconName}.svg`), svgContent);

        // Generate TS Component
        const tsContent = `import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import SVG_CONTENT from "./assets/${iconName}.svg";

export class ${className} extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const iconSize = props.width || 24;
        const strokeWeight = props.strokeWeight ?? 2;
        const color = props.color || { r: 0, g: 0, b: 0 };

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Lucide / ${iconName}",
            "props": {
                "visible": true,
                "fills": [],
                "strokes": [],
                "clipsContent": false,
                "layoutMode": "NONE"
            },
            "layoutProps": { "width": iconSize, "height": iconSize },
            "children": [
                {
                    "type": "VECTOR",
                    "name": "Icon",
                    "props": {
                        "visible": true,
                        // Apply strokes to the frame temporarily, postCreate will move them to paths
                        "strokeWeight": strokeWeight,
                        "strokeAlign": "CENTER",
                        "strokes": [{ "type": "SOLID", "color": color }]
                    },
                    "layoutProps": {
                        "width": iconSize, 
                        "height": iconSize
                    },
                    "svgContent": SVG_CONTENT,
                    "postCreate": (node: SceneNode, nodeProps: any) => {
                        if (node.type === "FRAME") {
                            // Ensure the SVG wrapper doesn't clip its own strokes
                            node.clipsContent = false;
                            
                            // Propagate styles to all paths and set SCALE constraints
                            for (const child of node.children) {
                                if ("constraints" in child) {
                                    child.constraints = { horizontal: "SCALE", vertical: "SCALE" };
                                }
                                
                                // Apply stroke properties to vector children
                                if ("strokes" in child && nodeProps.strokes) {
                                    child.strokes = nodeProps.strokes;
                                }
                                if ("strokeWeight" in child && nodeProps.strokeWeight) {
                                    child.strokeWeight = nodeProps.strokeWeight;
                                }
                                
                                // Ensure standard Lucide rounded look
                                if ("strokeJoin" in child) (child as any).strokeJoin = "ROUND";
                                if ("strokeCap" in child) (child as any).strokeCap = "ROUND";
                            }
                            
                            // Remove strokes from the wrapper frame itself to avoid "contours"
                            node.strokes = [];
                        }
                    }
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}
`;
        fs.writeFileSync(path.join(componentDir, `${className}.ts`), tsContent);
        count++;
    }

    // Save categories metadata for the showcase page
    fs.writeFileSync(path.join(targetDir, 'categories.json'), JSON.stringify(CATEGORIES, null, 2));

    console.log(`✨ Successfully generated ${count} Lucide icon components in ${targetDir}`);
}

generate().catch(console.error);

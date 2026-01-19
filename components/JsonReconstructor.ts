import { BaseComponent, ComponentProps } from "./BaseComponent";

export class JsonReconstructor extends BaseComponent {
    create(props: ComponentProps): SceneNode {
        const frame = figma.createFrame();
        frame.x = props.x;
        frame.y = props.y;
        return frame;
    }

    async reconstruct(data: any, parent?: FrameNode | GroupNode | SectionNode): Promise<SceneNode | null> {
        console.log(`Reconstructing node: ${data.name} (${data.type})`);
        let node: SceneNode | null = null;

        try {
            // 1. Create Node based on type
            if (data.type === "FRAME" || data.type === "INSTANCE" || data.type === "COMPONENT") {
                node = figma.createFrame();
            } else if (data.type === "TEXT") {
                node = figma.createText();
            } else if (data.type === "RECTANGLE") {
                node = figma.createRectangle();
            } else if (data.type === "VECTOR") {
                node = figma.createVector();
            } else if (data.type === "ELLIPSE") {
                node = figma.createEllipse();
            }

            if (!node) {
                console.warn(`Unsupported node type: ${data.type}`);
                return null;
            }

            // 2. Apply Basic Properties
            node.name = data.name || node.name;

            // Set position and size
            // For children, x/y are relative to parent
            node.x = data.x !== undefined ? data.x : 0;
            node.y = data.y !== undefined ? data.y : 0;

            if (data.width !== undefined && data.height !== undefined) {
                node.resize(data.width || 1, data.height || 1);
            }

            node.rotation = data.rotation || 0;
            node.visible = data.visible !== undefined ? data.visible : true;
            node.opacity = data.opacity !== undefined ? data.opacity : 1;

            if ("blendMode" in node) {
                node.blendMode = data.blendMode || "PASS_THROUGH";
            }
            if ("locked" in node) {
                node.locked = data.locked || false;
            }

            // 3. Apply Constraints
            if ("constraints" in node && data.constraints) {
                node.constraints = data.constraints;
            }

            // 4. Apply Visual Properties
            // Important: Apply fills carefully. Sometimes boundVariables cause issues if missing.
            if ("fills" in node && data.fills) {
                try {
                    node.fills = data.fills;
                } catch (e) {
                    console.warn(`Failed to apply fills to ${node.name}, falling back to basic colors`);
                    node.fills = data.fills.map((f: any) => {
                        const { boundVariables: _, ...rest } = f;
                        return rest;
                    });
                }
            }
            if ("strokes" in node && data.strokes) {
                node.strokes = data.strokes;
                if ("strokeWeight" in node && data.strokeWeight !== undefined) node.strokeWeight = data.strokeWeight;
                if ("strokeAlign" in node && data.strokeAlign) node.strokeAlign = data.strokeAlign;
            }
            if ("effects" in node && data.effects) {
                node.effects = data.effects;
            }
            if ("cornerRadius" in node && data.cornerRadius !== undefined && data.cornerRadius !== "mixed") {
                node.cornerRadius = data.cornerRadius;
            }

            // 5. Apply Layout Properties (Auto Layout)
            if ("layoutMode" in node && data.layout) {
                const frame = node as FrameNode;
                frame.layoutMode = data.layout.mode || "NONE";

                if (frame.layoutMode !== "NONE") {
                    if (data.layout.sizing) {
                        frame.primaryAxisSizingMode = data.layout.sizing.horizontal === "AUTO" ? "AUTO" : "FIXED";
                        frame.counterAxisSizingMode = data.layout.sizing.vertical === "AUTO" ? "AUTO" : "FIXED";
                    }
                    if (data.layout.alignment) {
                        frame.primaryAxisAlignItems = data.layout.alignment.primary || "MIN";
                        frame.counterAxisAlignItems = data.layout.alignment.counter || "MIN";
                    }
                    frame.itemSpacing = data.layout.spacing || 0;
                    if (data.layout.padding) {
                        frame.paddingTop = data.layout.padding.top || 0;
                        frame.paddingRight = data.layout.padding.right || 0;
                        frame.paddingBottom = data.layout.padding.bottom || 0;
                        frame.paddingLeft = data.layout.padding.left || 0;
                    }
                }
            }

            // 6. Apply Text Properties
            if (node.type === "TEXT" && data.text) {
                const textNode = node as TextNode;

                // Determine target font, handling "mixed" or missing data
                let font: FontName = { family: "Inter", style: "Regular" };
                if (data.text.fontName && data.text.fontName !== "mixed") {
                    font = data.text.fontName;
                }

                try {
                    // Figma requires the CURRENT font of the node to be loaded before any write operation.
                    // New text nodes default to Inter Regular.
                    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

                    // Only load and set target font if it's different from default/already loaded
                    if (font.family !== "Inter" || font.style !== "Regular") {
                        await figma.loadFontAsync(font);
                        textNode.fontName = font;
                    } else {
                        textNode.fontName = { family: "Inter", style: "Regular" };
                    }
                } catch (e) {
                    console.warn(`Failed to load/apply font ${font.family} ${font.style}, falling back to Inter Regular`);
                    textNode.fontName = { family: "Inter", style: "Regular" };
                }

                if (data.text.fontSize !== undefined && data.text.fontSize !== "mixed") {
                    textNode.fontSize = data.text.fontSize;
                }
                if (data.text.textAlignHorizontal) textNode.textAlignHorizontal = data.text.textAlignHorizontal;
                if (data.text.textAlignVertical) textNode.textAlignVertical = data.text.textAlignVertical;
                if (data.text.textAutoResize) textNode.textAutoResize = data.text.textAutoResize;
                if (data.text.letterSpacing && data.text.letterSpacing !== "mixed") textNode.letterSpacing = data.text.letterSpacing;
                if (data.text.lineHeight && data.text.lineHeight !== "mixed") textNode.lineHeight = data.text.lineHeight;

                // Characters MUST be set after font load and other properties
                textNode.characters = data.text.characters || "";
            }

            // 7. Handle Children (Recursion)
            if ("children" in node && data.children && data.children.length > 0) {
                const container = node as FrameNode;
                for (const childData of data.children) {
                    await this.reconstruct(childData, container);
                }
            }

            // 8. Add to parent
            if (parent) {
                parent.appendChild(node);
            } else {
                // If it's the root call and no parent provided, ensure it's on the page
                figma.currentPage.appendChild(node);
            }

            return node;
        } catch (error) {
            console.error(`Error reconstructing node ${data.name}:`, error);
            return null;
        }
    }
}

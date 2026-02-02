import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

export type BriefNoteBlock =
    | { type: "header"; text: string; level: 1 | 2 | 3 }
    | { type: "paragraph"; text: string }
    | { type: "bulletList"; items: string[] }
    | { type: "metadata"; label: string; value: string }
    | { type: "divider" };

export interface BriefNoteProps extends ComponentProps {
    text?: string;
    blocks?: BriefNoteBlock[];
}

export class BriefNote extends BaseComponent {
    async create(props: BriefNoteProps): Promise<SceneNode> {
        const blocks = props.blocks || (props.text ? this.parseText(props.text) : []);

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Brief Note",
            "props": {
                "layoutMode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "paddingTop": 40,
                "paddingRight": 40,
                "paddingBottom": 40,
                "paddingLeft": 40,
                "itemSpacing": 12,
                "cornerRadius": 1,
                "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 } }],
                "effects": [{
                    "type": "DROP_SHADOW",
                    "color": { "r": 0, "g": 0, "b": 0, "a": 0.08 },
                    "offset": { "x": 0, "y": 4 },
                    "radius": 12,
                    "visible": true,
                    "blendMode": "NORMAL"
                }]
            },
            "layoutProps": { "parentIsAutoLayout": true, "width": 640, "layoutAlign": "INHERIT" },
            "children": [
                {
                    "type": "TEXT",
                    "name": "Note Meta Header",
                    "props": {
                        "characters": "BRIEF NOTE",
                        "fontSize": 12,
                        "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.4 } }],
                        "font": { "family": "Manrope", "style": "ExtraBold" },
                        "letterSpacing": 1.2
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                },
                {
                    "type": "FRAME",
                    "name": "Static Divider",
                    "props": {
                        "counterAxisSizingMode": "FIXED",
                        "primaryAxisSizingMode": "FIXED",
                        "fills": [{ "type": "SOLID", "color": { "r": 0.9, "g": 0.9, "b": 0.9 } }]
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "height": 1 }
                },
                ...blocks.map((block, index) => this.renderBlock(block, index))
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }

    private renderBlock(block: BriefNoteBlock, index: number): NodeDefinition {
        const bodyFont: FontName = { family: "Inter", style: "Regular" };
        const boldFont: FontName = { family: "Inter", style: "Bold" };

        switch (block.type) {
            case "header":
                return {
                    "type": "FRAME",
                    "name": `Header Section ${block.level}`,
                    "props": {
                        "layoutMode": "VERTICAL",
                        "primaryAxisSizingMode": "AUTO",
                        "counterAxisSizingMode": "FIXED",
                        "paddingTop": index === 0 ? 0 : 32,
                        "paddingBottom": 0
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                    "children": [{
                        "type": "TEXT",
                        "name": `Header Text`,
                        "props": {
                            "characters": block.text.toUpperCase(),
                            "fontSize": block.level === 1 ? 20 : block.level === 2 ? 16 : 14,
                            "fills": [{ "type": "SOLID", "color": { "r": 0.1, "g": 0.1, "b": 0.1 } }],
                            "font": { "family": "Manrope", "style": "ExtraBold" }
                        },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    }]
                };
            case "bulletList":
                return {
                    "type": "FRAME",
                    "name": "Bullet List",
                    "props": {
                        "layoutMode": "VERTICAL",
                        "primaryAxisSizingMode": "AUTO",
                        "counterAxisSizingMode": "FIXED",
                        "itemSpacing": 6
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                    "children": block.items.map((item, i) => {
                        const rich = this.parseRichText(item, bodyFont, boldFont);
                        return {
                            "type": "FRAME",
                            "name": `Bullet Item ${i}`,
                            "props": {
                                "layoutMode": "HORIZONTAL",
                                "primaryAxisSizingMode": "FIXED",
                                "counterAxisSizingMode": "AUTO",
                                "itemSpacing": 12,
                                "paddingLeft": 12
                            },
                            "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                            "children": [
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "characters": "•",
                                        "fontSize": 14,
                                        "fills": [{ "type": "SOLID", "color": { "r": 0.3, "g": 0.3, "b": 0.3 } }]
                                    }
                                },
                                {
                                    "type": "TEXT",
                                    "props": {
                                        "characters": rich.characters,
                                        "richTextSpans": rich.spans,
                                        "fontSize": 14,
                                        "fills": [{ "type": "SOLID", "color": { "r": 0.2, "g": 0.2, "b": 0.2 } }],
                                        "font": bodyFont,
                                        "textAutoResize": "HEIGHT"
                                    },
                                    "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 }
                                }
                            ]
                        };
                    })
                };
            case "metadata":
                const valueRich = this.parseRichText(block.value, bodyFont, boldFont);
                return {
                    "type": "FRAME",
                    "name": "Metadata Entry",
                    "props": {
                        "layoutMode": "HORIZONTAL",
                        "primaryAxisSizingMode": "FIXED",
                        "counterAxisSizingMode": "AUTO",
                        "itemSpacing": 8
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" },
                    "children": [
                        {
                            "type": "TEXT",
                            "props": {
                                "characters": block.label + ":",
                                "fontSize": 13,
                                "fills": [{ "type": "SOLID", "color": { "r": 0.4, "g": 0.4, "b": 0.4 } }],
                                "font": boldFont
                            }
                        },
                        {
                            "type": "TEXT",
                            "props": {
                                "characters": valueRich.characters,
                                "richTextSpans": valueRich.spans,
                                "fontSize": 13,
                                "fills": [{ "type": "SOLID", "color": { "r": 0.2, "g": 0.2, "b": 0.2 } }],
                                "font": bodyFont,
                                "textAutoResize": "HEIGHT"
                            },
                            "layoutProps": { "parentIsAutoLayout": true, "layoutGrow": 1 }
                        }
                    ]
                };
            case "divider":
                return {
                    "type": "FRAME",
                    "name": "Divider",
                    "props": {
                        "fills": [{ "type": "SOLID", "color": { "r": 0.95, "g": 0.95, "b": 0.95 } }]
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "height": 1 }
                };
            case "paragraph":
            default:
                const paraRich = this.parseRichText(block.text, bodyFont, boldFont);
                return {
                    "type": "TEXT",
                    "name": "Paragraph",
                    "props": {
                        "characters": paraRich.characters,
                        "richTextSpans": paraRich.spans,
                        "fontSize": 14,
                        "fills": [{ "type": "SOLID", "color": { "r": 0.2, "g": 0.2, "b": 0.2 } }],
                        "font": bodyFont,
                        "textAutoResize": "HEIGHT",
                        "lineHeight": { "unit": "PERCENT", "value": 150 }
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                };
        }
    }

    /**
     * Extracts markdown-style bolding and returns plain text with spans
     */
    private parseRichText(text: string, defaultFont: FontName, boldFont: FontName): { characters: string, spans: any[] } {
        const spans: any[] = [];
        let plainText = "";
        const parts = text.split(/\*\*/);

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (i % 2 === 1) {
                // Bold segment
                spans.push({
                    start: plainText.length,
                    end: plainText.length + part.length,
                    font: boldFont
                });
            }
            plainText += part;
        }

        return { characters: plainText, spans };
    }

    private stripFormatting(text: string): string {
        return text.replace(/\*\*/g, "").trim();
    }

    private parseText(text: string): BriefNoteBlock[] {
        const lines = text.split("\n");
        const blocks: BriefNoteBlock[] = [];
        let i = 0;

        while (i < lines.length) {
            let line = lines[i].trim();
            if (!line) {
                i++;
                continue;
            }

            // Bullet List: Collector
            if (line.startsWith("* ") || line.startsWith("- ")) {
                const bulletItems: string[] = [];
                while (i < lines.length && (lines[i].trim().startsWith("* ") || lines[i].trim().startsWith("- "))) {
                    bulletItems.push(lines[i].trim().substring(2));
                    i++;
                }
                blocks.push({ type: "bulletList", items: bulletItems });
                continue;
            }

            // Header: ### Title
            if (line.startsWith("###")) {
                blocks.push({ type: "header", text: this.stripFormatting(line.replace(/^###\s*/, "")), level: 3 });
            } else if (line.startsWith("##")) {
                blocks.push({ type: "header", text: this.stripFormatting(line.replace(/^##\s*/, "")), level: 2 });
            } else if (line.startsWith("#")) {
                blocks.push({ type: "header", text: this.stripFormatting(line.replace(/^#\s*/, "")), level: 1 });
            }
            // Divider: ---
            else if (line === "---") {
                blocks.push({ type: "divider" });
            }
            // Metadata: **Label:** Value
            else if (line.startsWith("**") && line.includes(":**")) {
                const parts = line.split(":**");
                const label = this.stripFormatting(parts[0]);
                const value = parts[1].trim();
                blocks.push({ type: "metadata", label, value });
            }
            // Bold header simulation: **Text** (alone on line)
            else if (line.startsWith("**") && line.endsWith("**") && line.length > 4 && !line.includes(" ")) {
                blocks.push({ type: "header", text: this.stripFormatting(line), level: 3 });
            }
            // Regular paragraph
            else {
                blocks.push({ type: "paragraph", text: line });
            }
            i++;
        }

        return blocks;
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

interface RowData {
    label: string;
    leftValue: number;
    rightValue: number;
    maxValue: number;
}

export class ComparisonStats extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // 1. Data Setup
        const stats: RowData[] = props.stats || [
            { label: "Matches played", leftValue: 8, rightValue: 8, maxValue: 16 },
            { label: "Won", leftValue: 3, rightValue: 3, maxValue: 8 },
            { label: "Drawn", leftValue: 1, rightValue: 4, maxValue: 8 },
            { label: "Lost", leftValue: 4, rightValue: 1, maxValue: 8 },
            { label: "Goals", leftValue: 9, rightValue: 14, maxValue: 25 }
        ];

        const containerWidth = props.width || 600;
        const transparency = props.transparency ?? 0.48;
        const isGlass = props.isGlass ?? true; // Enable by default as requested
        // 1.5 Load Font
        // 1.5 Load Font Dynamically
        let mainFont: FontName = { family: "Inter", style: "Regular" };
        let loaded = false;

        // Try to find "Champions" font dynamically
        try {
            console.log("Searching for Champions font...");
            const availableFonts = await figma.listAvailableFontsAsync();

            // Filter for Champions
            const championsFonts = availableFonts.filter(font =>
                font.fontName.family.toLowerCase().includes("champions")
            );

            if (championsFonts.length > 0) {
                // Priority:
                // 1. Family "Champions Display" && Style "Regular" (Matches ChampionsDisplay-Regular.otf)
                // 2. Family contains "Display"
                // 3. Style "Display"
                // 4. Style "Bold" (for Champions Bold)
                // 5. Any match

                let bestMatch = championsFonts.find(f => f.fontName.family === "Champions Display" && f.fontName.style === "Regular")
                    || championsFonts.find(f => f.fontName.family.includes("Display")) // Prefer "Champions Display" family
                    || championsFonts.find(f => f.fontName.family === "Champions" && f.fontName.style === "Display")
                    || championsFonts.find(f => f.fontName.style === "Display")
                    || championsFonts.find(f => f.fontName.style === "Bold")
                    || championsFonts[0];

                if (bestMatch) {
                    await figma.loadFontAsync(bestMatch.fontName);
                    mainFont = bestMatch.fontName;
                    loaded = true;
                }
            } else {
                console.warn("No 'Champions' fonts found available to plugin.");
            }
        } catch (e) {
            console.warn("Error searching/loading dynamic fonts:", e);
        }

        // Fallback if dynamic search failed
        if (!loaded) {
            console.warn("Could not find/load Champions. Falling back to Inter.");
            try {
                await figma.loadFontAsync(mainFont);
            } catch (e) {
                console.error("Critical: Failed to load fallback Inter font", e);
            }
        }

        // 2. Describe the structure (Declarative Style)
        const structure: NodeDefinition = {
            type: "FRAME",
            name: "Comparison Stats Container",
            props: {
                layoutMode: "VERTICAL",
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "FIXED",
                itemSpacing: 24,
                paddingTop: 24,
                paddingRight: 24,
                paddingBottom: 24,
                paddingLeft: 24,
                cornerRadius: 24,
                fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: transparency }],
                effects: isGlass ? [{ type: "BACKGROUND_BLUR", radius: 20 }] : [],
                strokes: isGlass ? [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.1 }] : [],
                strokeWeight: isGlass ? 1 : 0
            },
            layoutProps: {
                width: containerWidth,
                height: 1, // Will hug content
                parentIsAutoLayout: false
            },
            children: await Promise.all(stats.map(data => this.createRowDefinition(data, containerWidth, mainFont)))
        };

        // 3. Render the blueprint
        const root = await this.renderDefinition(structure);

        // Final positioning
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }

    private async createRowDefinition(data: RowData, containerWidth: number, font: FontName): Promise<NodeDefinition> {
        // Logic for "head to head" bars
        const totalValue = data.leftValue + data.rightValue;
        const totalWidth = containerWidth - 48; // width - horizontal padding
        const leftWidth = (data.leftValue / totalValue) * totalWidth;
        const rightWidth = (data.rightValue / totalValue) * totalWidth;

        return {
            type: "FRAME",
            name: `Row: ${data.label}`,
            props: {
                layoutMode: "VERTICAL",
                layoutAlign: "STRETCH",
                primaryAxisSizingMode: "AUTO",
                itemSpacing: 12,
                fills: []
            },
            layoutProps: { parentIsAutoLayout: true },
            children: [
                {
                    type: "FRAME",
                    name: "Text Row",
                    props: {
                        layoutMode: "HORIZONTAL",
                        layoutAlign: "STRETCH",
                        primaryAxisSizingMode: "FIXED", // MUST be FIXED to allow STRETCH + SPACE_BETWEEN
                        counterAxisSizingMode: "AUTO",
                        primaryAxisAlignItems: "SPACE_BETWEEN",
                        counterAxisAlignItems: "CENTER",
                        fills: []
                    },
                    layoutProps: { parentIsAutoLayout: true },
                    children: [
                        {
                            type: "TEXT",
                            name: "Left Value",
                            props: {
                                characters: data.leftValue.toString(),
                                fontSize: 28,
                                font: font,
                                textAlignHorizontal: "LEFT",
                                textAutoResize: "WIDTH_AND_HEIGHT",
                                fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]
                            },
                            layoutProps: { parentIsAutoLayout: true }
                        },
                        {
                            type: "TEXT",
                            name: "Label",
                            props: {
                                characters: data.label,
                                fontSize: 14,
                                font: font,
                                textAlignHorizontal: "CENTER",
                                textAutoResize: "WIDTH_AND_HEIGHT",
                                fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0.5 } }]
                            },
                            layoutProps: { parentIsAutoLayout: true }
                        },
                        {
                            type: "TEXT",
                            name: "Right Value",
                            props: {
                                characters: data.rightValue.toString(),
                                fontSize: 28,
                                font: font,
                                textAlignHorizontal: "RIGHT",
                                textAutoResize: "WIDTH_AND_HEIGHT",
                                fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]
                            },
                            layoutProps: { parentIsAutoLayout: true }
                        }
                    ]
                },
                {
                    type: "FRAME",
                    name: "Bars Row",
                    props: {
                        layoutMode: "HORIZONTAL",
                        layoutAlign: "STRETCH",
                        primaryAxisSizingMode: "FIXED", // Consistency with Text Row
                        counterAxisSizingMode: "AUTO",
                        itemSpacing: 2,
                        fills: []
                    },
                    layoutProps: { parentIsAutoLayout: true },
                    children: [
                        {
                            type: "FRAME",
                            name: "Left Bar Fill",
                            props: { fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0.9 } }] },
                            layoutProps: {
                                width: Math.max(1, leftWidth - 1),
                                height: 3,
                                parentIsAutoLayout: true
                            }
                        },
                        {
                            type: "FRAME",
                            name: "Right Bar Fill",
                            props: { fills: [{ type: "SOLID", color: { r: 0, g: 0.85, b: 0.85 } }] },
                            layoutProps: {
                                width: Math.max(1, rightWidth - 1),
                                height: 3,
                                parentIsAutoLayout: true
                            }
                        }
                    ]
                }
            ]
        };
    }
}

import { BaseComponent, ComponentProps } from "./BaseComponent";

interface RowData {
    rank: string;
    team: string; // "Paris", "Chelsea", "Real Madrid", "Barcelona"
    p: string; // "6"
    pts: string; // "14", "11", "11", "9"
    isFirst?: boolean;
    isLast?: boolean;
    blurred?: boolean;
}

export class TableStat extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        // 1. Load Fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        try {
            await figma.loadFontAsync({ family: "Champions", style: "Bold" });
        } catch (e) {
            console.warn("Font 'Champions Bold' not found, falling back to Inter");
        }

        // 2. Create Main Frame
        const frame = figma.createFrame();
        frame.name = "Frame 2609217"; // From JSON
        frame.x = props.x;
        frame.y = props.y;
        frame.resize(512, 324);
        frame.layoutMode = "VERTICAL";
        frame.primaryAxisSizingMode = "AUTO"; // Sizing: Horizontal AUTO (actually fixed in JSON but children adapt) - JSON says V:FIXED, H:AUTO
        frame.counterAxisSizingMode = "FIXED"; // Vertical FIXED
        frame.itemSpacing = 0;
        frame.paddingTop = 0;
        frame.paddingRight = 0;
        frame.paddingBottom = 0;
        frame.paddingLeft = 0;
        frame.fills = []; // No fills

        // 3. Define Data
        const rows: RowData[] = [
            { rank: "1", team: "Arsenal", p: "6", pts: "14", isFirst: true },
            { rank: "2", team: "Bayern", p: "6", pts: "14", blurred: true },
            { rank: "3", team: "Paris", p: "6", pts: "14", blurred: true },
            { rank: "9", team: "Liverpool", p: "6", pts: "14" },
            { rank: "10", team: "Inter", p: "6", pts: "13", blurred: true },
            { rank: "11", team: "Milan", p: "6", pts: "13", blurred: true, isLast: true }
        ];

        // 4. Create Rows
        for (const rowData of rows) {
            const rowNode = await this.createRow(rowData);
            frame.appendChild(rowNode);
        }

        return frame;
    }

    private async createRow(data: RowData): Promise<FrameNode> {
        // Data derived from "Table standing row" in JSON

        const row = figma.createFrame();
        row.name = "Table standing row";
        row.layoutMode = "HORIZONTAL";
        row.resize(512, 54);
        row.primaryAxisSizingMode = "AUTO";
        row.counterAxisSizingMode = "FIXED";
        row.primaryAxisAlignItems = "MIN";
        row.counterAxisAlignItems = "CENTER";
        row.itemSpacing = 0;
        row.paddingTop = 0;
        row.paddingBottom = 0;
        row.paddingLeft = 0;
        row.paddingRight = 0;
        // Background fill is invisible in JSON (visible: false) but let's keep it clear
        row.fills = [];

        if (data.blurred) {
            // Only subsequent rows have the blur effect in the JSON? 
            // Actually JSON Id 4710:25209 (row 2) has Fill opacity 1 (invisible) and Effects: Layer Blur 12.6
            // The content inside has fills.
            // Wait, let's look at the "Effects" in JSON.
            // Row 1 (Paris) id 4710:25196: Fills visible:false.
            // Row 2 (Chelsea) id 4710:25209: Effects: Layer Blur 12.6.
            row.effects = [{
                type: "LAYER_BLUR",
                radius: 12.6,
                visible: true
            } as Effect];
        }

        // --- Content Frame ---
        const content = figma.createFrame();
        content.name = "Content";
        content.layoutMode = "HORIZONTAL";
        content.resize(512, 44);
        content.y = 5; // The JSON has y=5 inside the 54px high row.
        // Wait, if parent is Auto Layout (Horizontal, Center), y is determined by alignment.
        // Parent Row alignment is Counter: CENTER. 54 height, 44 content. (54-44)/2 = 5. Correct.
        content.primaryAxisSizingMode = "AUTO";
        content.counterAxisSizingMode = "FIXED";
        content.primaryAxisAlignItems = "MIN";
        content.counterAxisAlignItems = "CENTER";
        content.itemSpacing = 0;
        content.paddingLeft = 0;
        content.paddingRight = 0;

        // Content Fill: White 10%
        content.fills = [{
            type: "SOLID",
            color: { r: 1, g: 1, b: 1 },
            opacity: 0.1
        }];

        // --- Country Group ---
        const country = figma.createFrame();
        country.name = "Country";
        country.layoutMode = "HORIZONTAL";
        country.resize(423, 44);
        country.primaryAxisSizingMode = "FIXED"; // Width 423
        country.counterAxisSizingMode = "FIXED";
        country.primaryAxisAlignItems = "MIN";
        country.counterAxisAlignItems = "CENTER";
        country.itemSpacing = 8;
        country.paddingTop = 8;
        country.paddingBottom = 8;
        country.paddingLeft = 8;
        country.paddingRight = 8;
        country.fills = [];

        // Rank
        const rank = await this.createText(data.rank, 20, "CENTER", 28);
        country.appendChild(rank);

        // Image Placeholder (Rectangle)
        // JSON: Group "Image" (Frame) -> Image (Rectangle with Image fill)
        const imageGroup = figma.createFrame();
        imageGroup.name = "Image";
        imageGroup.resize(53, 34); // From JSON
        imageGroup.layoutMode = "HORIZONTAL"; // No setup in JSON for this group layout? 
        // Checking JSON id 4710:25201 "Image" (Frame). No layout prop? 
        // "layout": { "mode": "VERTICAL", ... } wait, let me re-read "Image"
        // JSON Id 4710:25201 is FRAME "Image", layout mode VERTICAL, aligns CENTER/CENTER.
        // Child: "Image" (Rectangle)
        imageGroup.layoutMode = "VERTICAL";
        imageGroup.primaryAxisAlignItems = "CENTER";
        imageGroup.counterAxisAlignItems = "CENTER";
        imageGroup.primaryAxisSizingMode = "FIXED";
        imageGroup.counterAxisSizingMode = "FIXED";
        imageGroup.itemSpacing = 8;
        imageGroup.fills = [];

        const imageRect = figma.createRectangle();
        imageRect.name = "Image";
        imageRect.resize(36, 36); // JSON id 4710:25222 width 36 height 36 (actually checking one example)
        // Paris row: Image rect is 36x36.
        imageRect.fills = [{
            type: "SOLID",
            color: { r: 0.8, g: 0.8, b: 0.8 } // Placeholder gray
        }];
        imageGroup.appendChild(imageRect);

        country.appendChild(imageGroup);

        // Team Name
        const team = await this.createText(data.team, 20, "LEFT");
        team.layoutGrow = 1;
        team.textAutoResize = "HEIGHT";
        country.appendChild(team);

        content.appendChild(country);

        // --- P (Played) ---
        const pFrame = figma.createFrame();
        pFrame.name = "P";
        pFrame.resize(44, 44);
        pFrame.layoutMode = "VERTICAL";
        pFrame.primaryAxisAlignItems = "CENTER";
        pFrame.counterAxisAlignItems = "CENTER";
        pFrame.paddingTop = 8; pFrame.paddingBottom = 8; pFrame.paddingLeft = 8; pFrame.paddingRight = 8;
        pFrame.fills = [];

        const pText = await this.createText(data.p, 20, "CENTER", 11);
        pFrame.appendChild(pText);
        content.appendChild(pFrame);

        // --- Separator ---
        const separator = figma.createRectangle();
        separator.name = "Separator";
        separator.resize(1, 54); // Height 54? JSON says 54.
        separator.y = -5; // The JSON has y=-5 relative to Content? 
        // In Auto Layout "Content", direct children are placed by layout.
        // Wait, "Separator" is a child of "Content" in JSON? 
        // JSON structure: Row -> Content -> [Country, P, Separator, Pts].
        // Content height is 44. Separator height 54. 
        // If Content is AutoLayout, can a child exceed height? Yes.
        // But y position is ignored in AutoLayout unless absolute positioning is ON.
        // The JSON id 4710:25203 "Separator" does NOT say "layoutPositioning": "ABSOLUTE".
        // It says "y": -5. 
        // Maybe the frame height logic is complex.
        // Let's just create it as part of the flow.
        separator.resize(1, 54);
        separator.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        content.appendChild(separator);

        // --- Pts (Points) ---
        const ptsFrame = figma.createFrame();
        ptsFrame.name = "Pts";
        ptsFrame.resize(44, 44);
        ptsFrame.layoutMode = "VERTICAL";
        ptsFrame.primaryAxisAlignItems = "CENTER";
        ptsFrame.counterAxisAlignItems = "CENTER";
        ptsFrame.paddingTop = 8; ptsFrame.paddingBottom = 8; ptsFrame.paddingLeft = 8; ptsFrame.paddingRight = 8;
        ptsFrame.fills = [];

        const ptsText = await this.createText(data.pts, 20, "CENTER", 22);
        ptsFrame.appendChild(ptsText);
        content.appendChild(ptsFrame);

        // Add Content to Row
        row.appendChild(content);

        return row;
    }

    private async createText(chars: string, fontSize: number, alignH: "LEFT" | "CENTER" | "RIGHT", width?: number): Promise<TextNode> {
        const text = figma.createText();
        text.characters = chars;
        text.fontSize = fontSize;
        try {
            text.fontName = { family: "Champions", style: "Bold" };
        } catch {
            text.fontName = { family: "Inter", style: "Regular" };
        }

        text.textAlignHorizontal = alignH;
        text.textAlignVertical = "TOP"; // JSON says TOP

        // Fills: White
        text.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

        if (width) {
            text.resize(width, text.height); // Auto height
        } else {
            text.textAutoResize = "WIDTH_AND_HEIGHT";
        }

        return text;
    }
}

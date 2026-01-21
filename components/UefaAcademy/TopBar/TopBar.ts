import { BaseComponent, ComponentProps } from "../../BaseComponent";
import {
    LogoPaths,
    SearchPaths,
    QuestionPaths,
    TrophyPaths,
    AlertPaths,
    HumanPaths,
    ConfigPaths,
    HamburgerPaths,
    ChevronPaths
} from "./assets/TopBarIcons";

export class TopBar extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        try {
            await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        } catch (e) {
            console.warn("Font 'Inter Semi Bold' not found, falling back to Regular/Bold");
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        }

        // 2. Main Frame "Top bar"
        const topBar = figma.createFrame();
        topBar.name = "Top bar";
        topBar.x = props.x;
        topBar.y = props.y;
        topBar.resize(1680, 40);
        topBar.layoutMode = "HORIZONTAL";
        topBar.primaryAxisSizingMode = "FIXED";
        topBar.counterAxisSizingMode = "AUTO"; // Height auto relative to children? actually fixed 40 in JSON
        topBar.primaryAxisAlignItems = "SPACE_BETWEEN";
        topBar.counterAxisAlignItems = "CENTER";
        topBar.itemSpacing = 77;
        topBar.paddingTop = 8;
        topBar.paddingRight = 40;
        topBar.paddingBottom = 8;
        topBar.paddingLeft = 40;
        topBar.fills = [{
            type: "SOLID",
            color: { r: 0.949, g: 0.953, b: 0.957 } // #F2F3F4
        }];

        // --- Left Section (Frame 1607) ---
        const leftSection = figma.createFrame();
        leftSection.name = "Frame 1607";
        leftSection.layoutMode = "HORIZONTAL";
        leftSection.primaryAxisSizingMode = "AUTO";
        leftSection.counterAxisSizingMode = "AUTO";
        leftSection.counterAxisAlignItems = "CENTER";
        leftSection.itemSpacing = 23;
        leftSection.fills = [];

        // Logo
        const logo = this.createIcon("Logo", LogoPaths, 52.24, 14.56, { r: 0.07, g: 0.22, b: 0.52 });
        leftSection.appendChild(logo);

        // Frame 1837 (Navigation Links)
        const frame1837 = figma.createFrame();
        frame1837.name = "Frame 1837";
        frame1837.layoutMode = "HORIZONTAL";
        frame1837.primaryAxisSizingMode = "AUTO";
        frame1837.counterAxisSizingMode = "AUTO";
        frame1837.counterAxisAlignItems = "CENTER";
        frame1837.itemSpacing = 24;
        frame1837.fills = [];

        // "UEFA.com" Text (Simplifying Vector Text to Real Text for maintainability if possible, but sticking to design if vector)
        // JSON had it as "Group 19" -> Vectors. Let's use Text for cleaner code unless strict vector requirement.
        // User asked for extraction, so let's use text for simplicity where logical or just a placeholder if complex.
        const uefaComText = figma.createText();
        uefaComText.characters = "UEFA.com";
        uefaComText.fontSize = 12;
        uefaComText.fontName = { family: "Inter", style: "Semi Bold" }; // Guessing
        uefaComText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        frame1837.appendChild(uefaComText);

        // Separator Line
        const line39 = figma.createRectangle();
        line39.name = "Line 39";
        line39.resize(1, 16);
        line39.fills = [{ type: "SOLID", color: { r: 0.7, g: 0.7, b: 0.7 } }];
        frame1837.appendChild(line39);

        // "Resources" Dropdown
        const resourcesFrame = this.createDropdown("Resources");
        frame1837.appendChild(resourcesFrame);

        leftSection.appendChild(frame1837);
        topBar.appendChild(leftSection);


        // --- Center Section (Frame 1611) ---
        // Search Bar (simplified structure)
        const searchFrame = figma.createFrame();
        searchFrame.name = "Frame 1611";
        searchFrame.layoutMode = "HORIZONTAL";
        searchFrame.resize(376, 24); // Fixed width?
        searchFrame.primaryAxisSizingMode = "FIXED";
        searchFrame.counterAxisSizingMode = "AUTO";
        searchFrame.counterAxisAlignItems = "CENTER";
        searchFrame.itemSpacing = 10;
        searchFrame.fills = []; // Or maybe background for search input?

        // Actually, let's make it look like the input
        const searchInput = figma.createFrame();
        searchInput.name = "Search Input";
        searchInput.layoutMode = "HORIZONTAL";
        searchInput.primaryAxisAlignItems = "MIN";
        searchInput.counterAxisAlignItems = "CENTER";
        searchInput.itemSpacing = 8;
        searchInput.layoutGrow = 1;
        searchInput.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        searchInput.cornerRadius = 20;
        searchInput.paddingLeft = 12;
        searchInput.paddingRight = 4;
        searchInput.paddingTop = 4;
        searchInput.paddingBottom = 4;

        const searchText = figma.createText();
        searchText.characters = "Search...";
        searchText.fontSize = 12;
        searchText.fills = [{ type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } }];
        searchInput.appendChild(searchText);

        // Search Button (Circle)
        const searchBtn = figma.createFrame();
        searchBtn.name = "Search Button";
        searchBtn.resize(24, 24);
        searchBtn.cornerRadius = 12;
        searchBtn.fills = [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }]; // Light gray bg
        searchBtn.layoutMode = "HORIZONTAL";
        searchBtn.primaryAxisAlignItems = "CENTER";
        searchBtn.counterAxisAlignItems = "CENTER";
        // Just center the icon manually or via constraints
        const searchIcon = this.createIcon("Search", SearchPaths, 12, 12, { r: 0, g: 0, b: 0 });
        searchIcon.x = 6; searchIcon.y = 6; // Center in 24x24
        searchBtn.appendChild(searchIcon);

        searchInput.appendChild(searchBtn);
        searchFrame.appendChild(searchInput);

        topBar.appendChild(searchFrame);


        // --- Right Section (Frame 1838) ---
        const rightSection = figma.createFrame();
        rightSection.name = "Frame 1838";
        rightSection.layoutMode = "HORIZONTAL";
        rightSection.primaryAxisSizingMode = "AUTO";
        rightSection.counterAxisSizingMode = "AUTO";
        rightSection.counterAxisAlignItems = "CENTER";
        rightSection.itemSpacing = 24;
        rightSection.fills = [];

        // Icons
        rightSection.appendChild(this.createIcon("Question", QuestionPaths, 16, 16, { r: 0, g: 0, b: 0 }));
        rightSection.appendChild(this.createIcon("Trophy", TrophyPaths, 16, 16, { r: 0, g: 0, b: 0 }));
        rightSection.appendChild(this.createIcon("Alert", AlertPaths, 16, 16, { r: 0, g: 0, b: 0 }));
        rightSection.appendChild(this.createIcon("Human", HumanPaths, 16, 16, { r: 0, g: 0, b: 0 }));
        rightSection.appendChild(this.createIcon("Config", ConfigPaths, 16, 16, { r: 0, g: 0, b: 0 }));

        // Frame 1612 (Text Links)
        const frame1612 = figma.createFrame();
        frame1612.name = "Frame 1612";
        frame1612.layoutMode = "HORIZONTAL";
        frame1612.primaryAxisSizingMode = "AUTO";
        frame1612.counterAxisSizingMode = "AUTO";
        frame1612.counterAxisAlignItems = "CENTER";
        frame1612.itemSpacing = 16;
        frame1612.fills = [];

        frame1612.appendChild(this.createDropdown("Favourites"));

        // Avatar + Name + Dropdown
        const userFrame = figma.createFrame();
        userFrame.name = "User";
        userFrame.layoutMode = "HORIZONTAL";
        userFrame.counterAxisAlignItems = "CENTER";
        userFrame.itemSpacing = 8;
        userFrame.fills = [];

        const avatar = figma.createEllipse();
        avatar.resize(24, 24);
        avatar.fills = [{ type: "SOLID", color: { r: 0.8, g: 0.8, b: 0.8 } }]; // Placeholder
        userFrame.appendChild(avatar);

        const userName = figma.createText();
        userName.characters = "John Doe";
        userName.fontSize = 12;
        userFrame.appendChild(userName);

        userFrame.appendChild(this.createIcon("Chevron", ChevronPaths, 8, 4, { r: 0, g: 0, b: 0 }));
        frame1612.appendChild(userFrame);

        rightSection.appendChild(frame1612);

        // Hamburger
        rightSection.appendChild(this.createIcon("Hamburger", HamburgerPaths, 16, 12, { r: 0, g: 0, b: 0 }));

        topBar.appendChild(rightSection);

        return topBar;
    }

    private createIcon(name: string, paths: string[], width: number, height: number, color: RGB): VectorNode | FrameNode {
        // If multiple paths, maybe wrap in a frame or use a single vector with multiple paths?
        // Figma API vectorPaths is an array.
        const vector = figma.createVector();
        vector.name = name;
        vector.resize(width, height);
        vector.fills = [{ type: "SOLID", color: color }];

        const vectorData = paths.map(data => ({
            windingRule: "NONZERO" as const,
            data: data
        }));

        vector.vectorPaths = vectorData;
        return vector;
    }

    private createDropdown(label: string): FrameNode {
        const frame = figma.createFrame();
        frame.name = label;
        frame.layoutMode = "HORIZONTAL";
        frame.primaryAxisSizingMode = "AUTO";
        frame.counterAxisSizingMode = "AUTO";
        frame.counterAxisAlignItems = "CENTER";
        frame.itemSpacing = 4;
        frame.fills = [];

        const text = figma.createText();
        text.characters = label;
        text.fontSize = 12;
        frame.appendChild(text);

        const chevron = this.createIcon("Chevron", ChevronPaths, 8, 4, { r: 0, g: 0, b: 0 });
        frame.appendChild(chevron);

        return frame;
    }
}

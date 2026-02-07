import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";

export class Slide_3Body extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_3Body";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: 'SOLID', color: Colors.BACKGROUND }];

        // Load Fonts
        await figma.loadFontAsync(Fonts.PRIMARY);
        await figma.loadFontAsync(Fonts.BOLD);

        const fullContentWidth = Layout.SLIDE_WIDTH - Layout.MARGIN_LEFT - (Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT);

        // Title
        const titleText = figma.createText();
        slide.appendChild(titleText);
        titleText.name = "Title";
        titleText.fontName = Fonts.BOLD;
        titleText.fontSize = Fonts.SIZE_TITLE;
        titleText.characters = props.title || "Three Column Slide";
        titleText.x = Layout.MARGIN_LEFT;
        titleText.y = Layout.MARGIN_TOP_TITLE;
        titleText.resize(fullContentWidth, titleText.height);

        // Content Position
        const bodyY = titleText.y + titleText.height + Layout.CONTENT_GAP;

        // Split into 3 equal columns with a fixed gap (using CONTENT_GAP as a proxy for column spacing)
        const totalGap = Layout.CONTENT_GAP * 2;
        const colWidth = (fullContentWidth - totalGap) / 3;

        for (let i = 0; i < 3; i++) {
            const col = figma.createText();
            slide.appendChild(col);
            col.name = `Col ${i + 1}`;
            col.fontName = Fonts.PRIMARY;
            col.fontSize = Fonts.SIZE_BODY;
            col.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
            col.characters = (props as any)[`body${i + 1}`] || `Column ${i + 1} content sample. Distribution is even across the available width.`;

            col.x = Layout.MARGIN_LEFT + (i * (colWidth + Layout.CONTENT_GAP));
            col.y = bodyY;
            col.resize(colWidth, col.height);
        }

        return slide;
    }
}

import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

export class Slide_3Body extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_3Body";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: 'SOLID', color: Colors.WHITE }];

        // Load Fonts
        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.EXTRA_BOLD)
        ]);

        // 1. Auto Layout Setup for Slide
        slide.layoutMode = "VERTICAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";
        slide.paddingLeft = Layout.MARGIN_LEFT;
        slide.paddingRight = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;
        slide.paddingTop = Layout.MARGIN_TOP_TITLE;
        slide.paddingBottom = Layout.MARGIN_FOOTER;
        slide.itemSpacing = Layout.CONTENT_GAP;

        // 2. Title
        const titleText = figma.createText();
        slide.appendChild(titleText);
        titleText.name = "Title";
        titleText.fontName = Fonts.BOLD;
        titleText.fontSize = Fonts.SIZE_TITLE;
        titleText.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        titleText.characters = props.title || "Slide Title";
        titleText.textAlignHorizontal = "LEFT";
        titleText.layoutAlign = "STRETCH";
        titleText.textAutoResize = "HEIGHT";

        // Chapter Number (Absolute)
        const chapterInfo = addChapterNumber(slide, props.number || "01");
        const titleCenterY = slide.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        // 3. Content Frame (Full Width Interior)
        const contentFrame = figma.createFrame();
        contentFrame.name = "Content";
        contentFrame.fills = [];
        contentFrame.layoutMode = "HORIZONTAL";

        // FIX: Set primaryAxisSizingMode to FIXED to allow STRETCH width to work correctly
        contentFrame.layoutAlign = "STRETCH";
        contentFrame.primaryAxisSizingMode = "FIXED";

        contentFrame.layoutGrow = 1;
        contentFrame.itemSpacing = Layout.CONTENT_GAP;
        slide.appendChild(contentFrame);

        for (let i = 0; i < 3; i++) {
            const col = figma.createText();
            contentFrame.appendChild(col);
            col.name = `Col ${i + 1}`;
            col.fontName = Fonts.PRIMARY;
            col.fontSize = Fonts.SIZE_BODY;
            col.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
            col.characters = (props as any)[`body${i + 1}`] || `Column ${i + 1} content sample.`;

            col.layoutGrow = 1;
            col.layoutAlign = "STRETCH";
            col.textAutoResize = "HEIGHT";
        }

        return slide;
    }
}

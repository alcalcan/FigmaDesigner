import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const createImagePlaceholder = (name: string, width: number): FrameNode => {
    const frame = figma.createFrame();
    frame.name = name;
    frame.resize(width, 190);
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = "FIXED";
    frame.counterAxisSizingMode = "FIXED";
    frame.primaryAxisAlignItems = "CENTER";
    frame.counterAxisAlignItems = "CENTER";
    frame.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
    frame.strokes = [{ type: "SOLID", color: Colors.ACCENT, opacity: 0.6 }];
    frame.strokeWeight = 2;
    frame.dashPattern = [10, 8];
    frame.layoutAlign = "STRETCH";
    return frame;
};

const createColumn = (title: string, body: string, placeholderName: string, width: number): FrameNode => {
    const col = figma.createFrame();
    col.name = title;
    col.layoutMode = "VERTICAL";
    col.primaryAxisSizingMode = "FIXED";
    col.counterAxisSizingMode = "FIXED";
    col.layoutGrow = 1;
    col.layoutAlign = "STRETCH";
    col.itemSpacing = 12;
    col.fills = [];
    col.resize(width, 10);

    col.appendChild(createImagePlaceholder(placeholderName, width));

    const text = figma.createText();
    text.name = "Body";
    text.fontName = Fonts.PRIMARY;
    text.fontSize = Fonts.SIZE_BODY;
    text.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
    text.characters = body;
    text.layoutAlign = "STRETCH";
    text.textAutoResize = "HEIGHT";
    col.appendChild(text);

    return col;
};

export class Slide_Content_2Column_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Content_2Column_extra";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: "SOLID", color: Colors.WHITE }];

        slide.layoutMode = "VERTICAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";
        slide.paddingLeft = Layout.MARGIN_LEFT;
        slide.paddingRight = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;
        slide.paddingTop = Layout.MARGIN_TOP_TITLE;
        slide.paddingBottom = Layout.MARGIN_FOOTER;
        slide.itemSpacing = Layout.CONTENT_GAP / 2;
        const innerWidth = Layout.SLIDE_WIDTH - slide.paddingLeft - slide.paddingRight;

        const bgRect = figma.createRectangle();
        slide.appendChild(bgRect);
        bgRect.name = "divider_background";
        bgRect.resize(Layout.SLIDE_WIDTH - Layout.DIVIDER_X, Layout.SLIDE_HEIGHT);
        bgRect.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
        bgRect.locked = true;
        bgRect.layoutPositioning = "ABSOLUTE";
        bgRect.x = Layout.DIVIDER_X;
        bgRect.y = 0;

        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.EXTRA_BOLD)
        ]);

        const titleText = figma.createText();
        slide.appendChild(titleText);
        titleText.name = "Title";
        titleText.fontName = Fonts.BOLD;
        titleText.fontSize = Fonts.SIZE_TITLE;
        titleText.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        titleText.characters = props.title || "Two-Column Content";
        titleText.layoutAlign = "STRETCH";
        titleText.textAutoResize = "HEIGHT";

        const chapterInfo = addChapterNumber(slide, props.number || "01");
        const titleCenterY = slide.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const contentFrame = figma.createFrame();
        contentFrame.name = "Content";
        contentFrame.fills = [];
        contentFrame.layoutMode = "HORIZONTAL";
        contentFrame.layoutAlign = "STRETCH";
        contentFrame.primaryAxisSizingMode = "FIXED";
        contentFrame.resize(innerWidth, 10);
        contentFrame.layoutGrow = 1;
        contentFrame.itemSpacing = Layout.MARGIN_RIGHT_DIVIDED + Layout.MARGIN_LEFT_DIVIDED_RIGHT;
        slide.appendChild(contentFrame);

        const columnGap = contentFrame.itemSpacing;
        const colWidth = (innerWidth - columnGap) / 2;
        contentFrame.appendChild(createColumn(
            "Column_1",
            props.body1 || "Highlight the first storyline with supporting context, metrics, or outcomes that connect directly to the image above.",
            "Image_Placeholder_1",
            colWidth
        ));
        contentFrame.appendChild(createColumn(
            "Column_2",
            props.body2 || "Use the second column for contrast, comparison, or a secondary insight that complements the primary narrative.",
            "Image_Placeholder_2",
            colWidth
        ));

        return slide;
    }
}

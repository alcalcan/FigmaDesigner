import { Colors, Fonts, Layout } from "./theme";

export function addChapterNumber(slide: FrameNode, number: string, centerY?: number) {
    // 1. Blue Ribbon (Rounded Rectangle)
    const ribbon = figma.createRectangle();
    slide.appendChild(ribbon);
    ribbon.name = "Chapter Ribbon";
    ribbon.resize(Layout.CHAPTER_NUMBER.RECT_WIDTH, Layout.CHAPTER_NUMBER.RECT_HEIGHT);
    ribbon.x = Layout.CHAPTER_NUMBER.RECT_X;

    // Middle-align if centerY is provided
    if (centerY !== undefined) {
        ribbon.y = centerY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
    } else {
        ribbon.y = Layout.CHAPTER_NUMBER.RECT_Y;
    }

    ribbon.fills = [{ type: 'SOLID', color: Colors.ACCENT }];
    ribbon.cornerRadius = Layout.CHAPTER_NUMBER.RECT_CORNER_RADIUS;

    // 2. Number Text
    const text = figma.createText();
    slide.appendChild(text);
    text.name = "Chapter Number";
    text.fontName = Fonts.EXTRA_BOLD;
    text.fontSize = Fonts.SIZE_NUMBER;
    text.fills = [{ type: 'SOLID', color: Colors.WHITE }];
    text.characters = number;
    text.textAlignHorizontal = "RIGHT";
    text.textAlignVertical = "CENTER";

    text.x = Layout.CHAPTER_NUMBER.TEXT_X;

    // Middle-align relative to ribbon
    if (centerY !== undefined) {
        text.y = centerY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);
    } else {
        text.y = Layout.CHAPTER_NUMBER.TEXT_Y;
    }

    text.resize(Layout.CHAPTER_NUMBER.TEXT_WIDTH, Layout.CHAPTER_NUMBER.TEXT_HEIGHT);

    return { ribbon, text };
}

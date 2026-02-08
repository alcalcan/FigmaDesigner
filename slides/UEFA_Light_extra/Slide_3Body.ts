import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const createImagePlaceholder = (name: string, width: number): FrameNode => {
    const frame = figma.createFrame();
    frame.name = name;
    frame.resize(width, 150);
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

export class Slide_Content_3Column_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Content_3Column_extra";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: "SOLID", color: Colors.WHITE }];

        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.EXTRA_BOLD)
        ]);

        slide.layoutMode = "VERTICAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";
        slide.paddingLeft = Layout.MARGIN_LEFT;
        slide.paddingRight = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;
        slide.paddingTop = Layout.MARGIN_TOP_TITLE;
        slide.paddingBottom = Layout.MARGIN_FOOTER;
        slide.itemSpacing = Layout.CONTENT_GAP / 2;
        const innerWidth = Layout.SLIDE_WIDTH - slide.paddingLeft - slide.paddingRight;

        const titleText = figma.createText();
        slide.appendChild(titleText);
        titleText.name = "Title";
        titleText.fontName = Fonts.BOLD;
        titleText.fontSize = Fonts.SIZE_TITLE;
        titleText.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        titleText.characters = props.title || "Three-Column Content";
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
        contentFrame.itemSpacing = Layout.CONTENT_GAP / 2;
        slide.appendChild(contentFrame);
        const columnGap = contentFrame.itemSpacing;
        const colWidth = (innerWidth - (2 * columnGap)) / 3;

        const propsRecord = props as Record<string, unknown>;
        for (let i = 0; i < 3; i++) {
            const col = figma.createFrame();
            col.name = `Column_${i + 1}`;
            col.layoutMode = "VERTICAL";
            col.primaryAxisSizingMode = "FIXED";
            col.counterAxisSizingMode = "FIXED";
            col.layoutGrow = 1;
            col.layoutAlign = "STRETCH";
            col.itemSpacing = 10;
            col.fills = [];
            col.resize(colWidth, 10);
            contentFrame.appendChild(col);

            col.appendChild(createImagePlaceholder(`Image_Placeholder_${i + 1}`, colWidth));

            const body = figma.createText();
            body.name = "Body";
            body.fontName = Fonts.PRIMARY;
            body.fontSize = Fonts.SIZE_BODY;
            body.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
            const key = `body${i + 1}`;
            const defaultBodies = [
                "Introduce the first angle with a clear statement and one supporting detail.",
                "Use this middle column for the main point or strongest evidence in the story.",
                "Close with the final takeaway and an action-oriented conclusion."
            ];
            const bodyValue = typeof propsRecord[key] === "string" ? (propsRecord[key] as string) : defaultBodies[i];
            body.characters = bodyValue;
            body.layoutAlign = "STRETCH";
            body.textAutoResize = "HEIGHT";
            col.appendChild(body);
        }

        return slide;
    }
}

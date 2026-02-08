import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const createImagePlaceholder = (name: string, width: number, height: number): FrameNode => {
    const frame = figma.createFrame();
    frame.name = name;
    frame.resize(width, height);
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = "FIXED";
    frame.counterAxisSizingMode = "FIXED";
    frame.primaryAxisAlignItems = "CENTER";
    frame.counterAxisAlignItems = "CENTER";
    frame.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
    frame.strokes = [{ type: "SOLID", color: Colors.ACCENT, opacity: 0.6 }];
    frame.strokeWeight = 2;
    frame.dashPattern = [10, 8];
    return frame;
};

export class Slide_Content_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Content_extra";
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
        titleText.characters = props.title || "Content Slide";
        titleText.layoutAlign = "STRETCH";
        titleText.textAutoResize = "HEIGHT";

        const chapterInfo = addChapterNumber(slide, props.number || "01");
        const titleCenterY = slide.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const contentFrame = figma.createFrame();
        contentFrame.name = "Content";
        contentFrame.fills = [];
        contentFrame.layoutMode = "VERTICAL";
        contentFrame.layoutAlign = "STRETCH";
        contentFrame.counterAxisSizingMode = "FIXED";
        contentFrame.resize(innerWidth, 10);
        contentFrame.layoutGrow = 1;
        contentFrame.itemSpacing = Layout.CONTENT_GAP / 2;
        slide.appendChild(contentFrame);

        const imagePlaceholder = createImagePlaceholder("Image_Placeholder", innerWidth, 280);
        imagePlaceholder.layoutAlign = "STRETCH";
        contentFrame.appendChild(imagePlaceholder);

        const bodyText = figma.createText();
        contentFrame.appendChild(bodyText);
        bodyText.name = "Body";
        bodyText.fontName = Fonts.PRIMARY;
        bodyText.fontSize = Fonts.SIZE_BODY;
        bodyText.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        bodyText.characters = props.body || "Use this area for a short narrative that explains the key message of the image above. Keep it to two or three concise sentences so the slide remains scannable.";
        bodyText.layoutAlign = "STRETCH";
        bodyText.textAutoResize = "HEIGHT";

        return slide;
    }
}

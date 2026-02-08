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

export class Slide_Content_Bullets_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Content_Bullets_extra";
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
        titleText.characters = props.title || "Content + Bullets";
        titleText.layoutAlign = "STRETCH";
        titleText.textAutoResize = "HEIGHT";

        const chapterInfo = addChapterNumber(slide, props.number || "01");
        const titleCenterY = slide.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const contentStack = figma.createFrame();
        contentStack.name = "Content";
        contentStack.fills = [];
        contentStack.layoutMode = "VERTICAL";
        contentStack.layoutAlign = "STRETCH";
        contentStack.counterAxisSizingMode = "FIXED";
        contentStack.resize(innerWidth, 10);
        contentStack.layoutGrow = 1;
        contentStack.itemSpacing = Layout.CONTENT_GAP / 2;
        slide.appendChild(contentStack);

        const imageColumn = createImagePlaceholder("Image_Placeholder", innerWidth, 250);
        imageColumn.layoutAlign = "STRETCH";
        contentStack.appendChild(imageColumn);

        const textColumn = figma.createFrame();
        textColumn.name = "Text_Column";
        textColumn.fills = [];
        textColumn.layoutMode = "VERTICAL";
        textColumn.layoutGrow = 1;
        textColumn.layoutAlign = "STRETCH";
        textColumn.counterAxisSizingMode = "FIXED";
        textColumn.itemSpacing = Layout.CONTENT_GAP / 3;
        contentStack.appendChild(textColumn);

        const bodyText = figma.createText();
        textColumn.appendChild(bodyText);
        bodyText.name = "Body";
        bodyText.fontName = Fonts.PRIMARY;
        bodyText.fontSize = Fonts.SIZE_BODY;
        bodyText.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        bodyText.characters = props.body || "Start with a short setup paragraph that introduces the topic and explains why the bullets matter for this section.";
        bodyText.layoutAlign = "STRETCH";
        bodyText.textAutoResize = "HEIGHT";

        const bulletsText = figma.createText();
        textColumn.appendChild(bulletsText);
        bulletsText.name = "Bullets";
        bulletsText.fontName = Fonts.PRIMARY;
        bulletsText.fontSize = Fonts.SIZE_BODY;
        bulletsText.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        const bulletPoints = Array.isArray(props.bullets)
            ? props.bullets
            : [
                "Summarize the first key point with one concrete detail.",
                "Add a second point that builds on evidence or observed impact.",
                "End with a practical takeaway or recommended next action."
            ];
        bulletsText.characters = bulletPoints.map((b) => `•  ${b}`).join("\n");
        bulletsText.layoutAlign = "STRETCH";
        bulletsText.textAutoResize = "HEIGHT";

        return slide;
    }
}

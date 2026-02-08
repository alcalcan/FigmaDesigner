import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const makePlaceholder = (name: string, width: number, height: number): FrameNode => {
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

export class Slide_Picture_Layouts_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Picture_Layouts_extra";
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

        const title = figma.createText();
        title.name = "Title";
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        title.characters = props.title || "Picture Placement Ideas";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        slide.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "13");
        const titleCenterY = slide.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const subtitle = figma.createText();
        subtitle.name = "Subtitle";
        subtitle.fontName = Fonts.PRIMARY;
        subtitle.fontSize = Fonts.SIZE_BODY;
        subtitle.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        subtitle.characters = "Hero image left, stacked supporting images right. Replace placeholders with real photography.";
        subtitle.layoutAlign = "STRETCH";
        subtitle.textAutoResize = "HEIGHT";
        slide.appendChild(subtitle);

        const imageArea = figma.createFrame();
        imageArea.name = "Image_Area";
        imageArea.layoutMode = "HORIZONTAL";
        imageArea.layoutAlign = "STRETCH";
        imageArea.layoutGrow = 1;
        imageArea.primaryAxisSizingMode = "FIXED";
        imageArea.counterAxisSizingMode = "FIXED";
        imageArea.counterAxisAlignItems = "CENTER";
        imageArea.itemSpacing = Layout.CONTENT_GAP / 2;
        imageArea.fills = [];
        imageArea.resize(innerWidth, 360);
        slide.appendChild(imageArea);

        const gap = imageArea.itemSpacing;
        const rightWidth = Math.round(innerWidth * 0.28);
        const leftWidth = innerWidth - rightWidth - gap;

        const leftHero = makePlaceholder("Hero_Image", leftWidth, 360);
        imageArea.appendChild(leftHero);

        const leftLabel = figma.createText();
        leftLabel.name = "Hero_Label";
        leftLabel.fontName = Fonts.BOLD;
        leftLabel.fontSize = Fonts.SIZE_BODY;
        leftLabel.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        leftLabel.characters = "Primary match/event photo";
        leftLabel.textAlignHorizontal = "CENTER";
        leftLabel.textAutoResize = "HEIGHT";
        leftLabel.resize(leftWidth - 36, 10);
        leftHero.appendChild(leftLabel);

        const leftDescription = figma.createText();
        leftDescription.name = "Hero_Description";
        leftDescription.fontName = Fonts.PRIMARY;
        leftDescription.fontSize = 12;
        leftDescription.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        leftDescription.characters = "Use this hero slot for the strongest visual to anchor the story.";
        leftDescription.textAlignHorizontal = "CENTER";
        leftDescription.textAutoResize = "HEIGHT";
        leftDescription.resize(leftWidth - 36, 10);
        leftHero.appendChild(leftDescription);

        const rightStack = figma.createFrame();
        rightStack.name = "Supporting_Images";
        rightStack.layoutMode = "VERTICAL";
        rightStack.primaryAxisSizingMode = "FIXED";
        rightStack.counterAxisSizingMode = "FIXED";
        rightStack.resize(rightWidth, 360);
        rightStack.itemSpacing = Layout.CONTENT_GAP / 2;
        rightStack.fills = [];
        imageArea.appendChild(rightStack);

        const topSupporting = makePlaceholder("Supporting_Image_1", rightWidth, 170);
        const bottomSupporting = makePlaceholder("Supporting_Image_2", rightWidth, 170);
        rightStack.appendChild(topSupporting);
        rightStack.appendChild(bottomSupporting);

        const topLabel = figma.createText();
        topLabel.fontName = Fonts.PRIMARY;
        topLabel.fontSize = Fonts.SIZE_BODY;
        topLabel.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        topLabel.characters = "Venue / fan shot";
        topLabel.textAlignHorizontal = "CENTER";
        topLabel.textAutoResize = "HEIGHT";
        topLabel.resize(rightWidth - 24, 10);
        topSupporting.appendChild(topLabel);

        const topDescription = figma.createText();
        topDescription.fontName = Fonts.PRIMARY;
        topDescription.fontSize = 12;
        topDescription.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        topDescription.characters = "Support the main narrative with crowd or venue context.";
        topDescription.textAlignHorizontal = "CENTER";
        topDescription.textAutoResize = "HEIGHT";
        topDescription.resize(rightWidth - 24, 10);
        topSupporting.appendChild(topDescription);

        const bottomLabel = figma.createText();
        bottomLabel.fontName = Fonts.PRIMARY;
        bottomLabel.fontSize = Fonts.SIZE_BODY;
        bottomLabel.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        bottomLabel.characters = "Player / detail shot";
        bottomLabel.textAlignHorizontal = "CENTER";
        bottomLabel.textAutoResize = "HEIGHT";
        bottomLabel.resize(rightWidth - 24, 10);
        bottomSupporting.appendChild(bottomLabel);

        const bottomDescription = figma.createText();
        bottomDescription.fontName = Fonts.PRIMARY;
        bottomDescription.fontSize = 12;
        bottomDescription.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        bottomDescription.characters = "Use close detail imagery to reinforce a specific point.";
        bottomDescription.textAlignHorizontal = "CENTER";
        bottomDescription.textAutoResize = "HEIGHT";
        bottomDescription.resize(rightWidth - 24, 10);
        bottomSupporting.appendChild(bottomDescription);

        return slide;
    }
}

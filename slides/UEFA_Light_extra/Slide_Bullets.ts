import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

export class Slide_Bullets_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Bullets_extra";
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
        contentFrame.layoutMode = "VERTICAL";

        // FIX: Set counterAxisSizingMode to FIXED for full interior width
        contentFrame.layoutAlign = "STRETCH";
        contentFrame.counterAxisSizingMode = "FIXED";

        contentFrame.layoutGrow = 1;
        contentFrame.itemSpacing = Layout.CONTENT_GAP / 2;
        slide.appendChild(contentFrame);

        const introText = figma.createText();
        contentFrame.appendChild(introText);
        introText.name = "Intro";
        introText.fontName = Fonts.PRIMARY;
        introText.fontSize = Fonts.SIZE_BODY;
        introText.fills = [{ type: 'SOLID', color: Colors.TEXT_SECONDARY }];
        introText.characters = props.body || "Use this paragraph to frame the list below and give the audience quick context before they scan the bullets.";
        introText.layoutAlign = "STRETCH";
        introText.textAutoResize = "HEIGHT";

        // Bullets
        const bulletsText = figma.createText();
        contentFrame.appendChild(bulletsText);
        bulletsText.name = "Bullets";
        bulletsText.fontName = Fonts.PRIMARY;
        bulletsText.fontSize = Fonts.SIZE_BODY;
        bulletsText.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        const bulletPoints = Array.isArray(props.bullets)
            ? props.bullets
            : [
                "State the core update in one clear sentence.",
                "Add supporting detail, metric, or evidence.",
                "Close with implication, recommendation, or next step."
            ];
        bulletsText.characters = bulletPoints.map(b => `•  ${b}`).join('\n');
        bulletsText.layoutAlign = "STRETCH";
        bulletsText.textAutoResize = "HEIGHT";

        return slide;
    }
}

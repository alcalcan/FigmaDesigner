import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";

export class Slide_Divider_Blue_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Divider_Blue_extra";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }]; // Dark Blue Background

        // Load Fonts
        await Promise.all([
            figma.loadFontAsync(Fonts.EXTRA_BOLD),
            figma.loadFontAsync(Fonts.PRIMARY)
        ]);

        // Faded Large Number
        const fadedNumber = figma.createText();
        slide.appendChild(fadedNumber);
        fadedNumber.name = "Faded Number";
        fadedNumber.fontName = Fonts.EXTRA_BOLD;
        fadedNumber.fontSize = Layout.DIVIDER.NUMBER_SIZE;
        // Lighter blue for dark background: #1F1F6E -> (31, 31, 110)
        fadedNumber.fills = [{ type: 'SOLID', color: { r: 31 / 255, g: 31 / 255, b: 110 / 255 } }];
        fadedNumber.characters = props.number || "01";
        fadedNumber.textAlignHorizontal = "CENTER";
        fadedNumber.textAlignVertical = "CENTER";

        fadedNumber.x = Layout.DIVIDER.NUMBER_X;
        fadedNumber.y = Layout.DIVIDER.NUMBER_Y;
        fadedNumber.resize(Layout.DIVIDER.NUMBER_WIDTH, Layout.DIVIDER.NUMBER_HEIGHT);

        // Chapter Title
        const titleText = figma.createText();
        slide.appendChild(titleText);
        titleText.name = "Chapter Title";
        titleText.fontName = Fonts.EXTRA_BOLD;
        titleText.fontSize = Layout.DIVIDER.TITLE_SIZE;
        titleText.fills = [{ type: 'SOLID', color: Colors.WHITE }];
        titleText.characters = props.title || "Chapter Title";
        titleText.textAlignHorizontal = "LEFT";
        titleText.textAlignVertical = "CENTER";

        titleText.x = Layout.DIVIDER.TITLE_X;
        titleText.y = Layout.DIVIDER.TITLE_Y;
        titleText.resize(Layout.DIVIDER.TITLE_WIDTH, Layout.DIVIDER.TITLE_HEIGHT);

        const subtitleText = figma.createText();
        slide.appendChild(subtitleText);
        subtitleText.name = "Chapter Subtitle";
        subtitleText.fontName = Fonts.PRIMARY;
        subtitleText.fontSize = 18;
        subtitleText.fills = [{ type: 'SOLID', color: Colors.WHITE, opacity: 0.9 }];
        subtitleText.characters = props.body || "Section intro: key context and expected outcomes for this chapter.";
        subtitleText.textAutoResize = "HEIGHT";
        subtitleText.resize(Layout.DIVIDER.TITLE_WIDTH, 10);
        subtitleText.x = Layout.DIVIDER.TITLE_X;
        subtitleText.y = Layout.DIVIDER.TITLE_Y + Layout.DIVIDER.TITLE_HEIGHT - 24;

        return slide;
    }
}

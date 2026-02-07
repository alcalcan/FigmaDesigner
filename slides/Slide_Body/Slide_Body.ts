import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";

export class Slide_Body extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Body";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: 'SOLID', color: Colors.BACKGROUND }];

        // Load Fonts
        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD)
        ]);

        // Title
        const titleText = figma.createText();
        slide.appendChild(titleText);
        titleText.name = "Title";
        titleText.fontName = Fonts.BOLD;
        titleText.fontSize = Fonts.SIZE_TITLE;
        titleText.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        titleText.characters = props.title || "Slide Title";

        // Layout Title
        titleText.x = Layout.MARGIN_LEFT;
        titleText.y = Layout.MARGIN_TOP_TITLE;
        // Width is Slide Width - Left Margin - Right Margin
        // Assuming Right Margin is same as Left for standard slides unless specified
        // theme.ts has MARGIN_RIGHT_SIMPLE, let's use that if it exists or default to LEFT
        const rightMargin = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;
        titleText.resize(Layout.SLIDE_WIDTH - Layout.MARGIN_LEFT - rightMargin, titleText.height);

        // Body
        const bodyText = figma.createText();
        slide.appendChild(bodyText);
        bodyText.name = "Body";
        bodyText.fontName = Fonts.PRIMARY;
        bodyText.fontSize = Fonts.SIZE_BODY;
        bodyText.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        bodyText.characters = props.body || "Body text goes here. This is a standard Slide_Body layout.";

        // Layout Body
        bodyText.x = Layout.MARGIN_LEFT;
        // Y position: Title Y + Title Height + Gap
        bodyText.y = titleText.y + titleText.height + Layout.CONTENT_GAP;

        // Width
        bodyText.resize(Layout.SLIDE_WIDTH - Layout.MARGIN_LEFT - rightMargin, bodyText.height);

        return slide;
    }
}

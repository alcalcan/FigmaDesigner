import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

export class Slide_2Body extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_2Body";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: 'SOLID', color: Colors.WHITE }];

        // Background (Gray Area on the right)
        const bgRect = figma.createRectangle();
        slide.appendChild(bgRect);
        bgRect.name = "divider_background";
        bgRect.x = Layout.DIVIDER_X;
        bgRect.y = 0;
        bgRect.resize(Layout.SLIDE_WIDTH - Layout.DIVIDER_X, Layout.SLIDE_HEIGHT);
        bgRect.fills = [{ type: 'SOLID', color: Colors.BACKGROUND }];
        bgRect.locked = true;

        // Load Fonts
        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.EXTRA_BOLD)
        ]);

        // Title
        const titleText = figma.createText();
        slide.appendChild(titleText);
        titleText.name = "Title";
        titleText.fontName = Fonts.BOLD;
        titleText.fontSize = Fonts.SIZE_TITLE;
        titleText.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        titleText.characters = props.title || "Slide Title";
        titleText.textAlignHorizontal = "LEFT";
        titleText.textAlignVertical = "TOP";

        titleText.x = Layout.MARGIN_LEFT;
        titleText.y = Layout.MARGIN_TOP_TITLE;
        titleText.resize(Layout.SLIDE_WIDTH - Layout.MARGIN_LEFT - Layout.MARGIN_RIGHT_SIMPLE, Fonts.SIZE_TITLE * 1.2);

        // Chapter Number (Middle-aligned with title)
        const titleCenterY = titleText.y + (titleText.height / 2);
        addChapterNumber(slide, props.number || "01", titleCenterY);

        // Calculate Column Layouts
        const dividerX = Layout.DIVIDER_X;
        const leftColX = Layout.MARGIN_LEFT;
        const leftColWidth = dividerX - leftColX - Layout.MARGIN_RIGHT_DIVIDED;

        const rightColX = dividerX + Layout.MARGIN_LEFT_DIVIDED_RIGHT;
        const rightColWidth = Layout.SLIDE_WIDTH - rightColX - (Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT);

        const bodyY = titleText.y + titleText.height + Layout.CONTENT_GAP;

        // Column 1
        const col1 = figma.createText();
        slide.appendChild(col1);
        col1.name = "Col 1";
        col1.fontName = Fonts.PRIMARY;
        col1.fontSize = Fonts.SIZE_BODY;
        col1.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        col1.characters = props.body1 || "Left column body text. This column is bounded by the divider.";
        col1.x = leftColX;
        col1.y = bodyY;
        col1.resize(leftColWidth, col1.height);

        // Column 2
        const col2 = figma.createText();
        slide.appendChild(col2);
        col2.name = "Col 2";
        col2.fontName = Fonts.PRIMARY;
        col2.fontSize = Fonts.SIZE_BODY;
        col2.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        col2.characters = props.body2 || "Right column body text. Positioned following the shared divider.";
        col2.x = rightColX;
        col2.y = bodyY;
        col2.resize(rightColWidth, col2.height);

        return slide;
    }
}

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

        // 1. Auto Layout Setup (With Slide-Level Padding)
        slide.layoutMode = "VERTICAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";
        slide.paddingLeft = Layout.MARGIN_LEFT;
        slide.paddingRight = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;
        slide.paddingTop = Layout.MARGIN_TOP_TITLE;
        slide.paddingBottom = Layout.MARGIN_FOOTER;
        slide.itemSpacing = Layout.CONTENT_GAP;

        // 2. Background Rect (Right Tint)
        // Note: Absolute elements are relative to slide origin (0,0), ignoring padding.
        const bgRect = figma.createRectangle();
        slide.appendChild(bgRect);
        bgRect.name = "divider_background";
        bgRect.resize(Layout.SLIDE_WIDTH - Layout.DIVIDER_X, Layout.SLIDE_HEIGHT);
        bgRect.fills = [{ type: 'SOLID', color: Colors.BACKGROUND }];
        bgRect.locked = true;
        bgRect.layoutPositioning = "ABSOLUTE";
        bgRect.x = Layout.DIVIDER_X;
        bgRect.y = 0;

        // 3. Load Fonts
        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.EXTRA_BOLD)
        ]);

        // 4. Title
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

        // 5. Content Frame (Horizontal + STRETCH)
        const contentFrame = figma.createFrame();
        contentFrame.name = "Content";
        contentFrame.fills = [];
        contentFrame.layoutMode = "HORIZONTAL";

        // FIX: Ensure it stretches to full interior width by setting primaryAxisSizingMode to FIXED
        contentFrame.layoutAlign = "STRETCH";
        contentFrame.primaryAxisSizingMode = "FIXED";

        contentFrame.layoutGrow = 1;
        contentFrame.itemSpacing = Layout.MARGIN_RIGHT_DIVIDED + Layout.MARGIN_LEFT_DIVIDED_RIGHT;
        slide.appendChild(contentFrame);

        // Calculate Column widths to align with the divider transition
        const leftColWidth = Layout.DIVIDER_X - Layout.MARGIN_LEFT - Layout.MARGIN_RIGHT_DIVIDED;
        const rightColWidth = (Layout.SLIDE_WIDTH - slide.paddingRight) - (Layout.DIVIDER_X + Layout.MARGIN_LEFT_DIVIDED_RIGHT);

        // Column 1
        const col1 = figma.createText();
        contentFrame.appendChild(col1);
        col1.name = "Col 1";
        col1.fontName = Fonts.PRIMARY;
        col1.fontSize = Fonts.SIZE_BODY;
        col1.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        col1.characters = props.body1 || "Left column body text.";
        col1.resize(leftColWidth, col1.height);
        col1.layoutGrow = 1;
        col1.layoutAlign = "STRETCH";
        col1.textAutoResize = "HEIGHT";

        // Column 2
        const col2 = figma.createText();
        contentFrame.appendChild(col2);
        col2.name = "Col 2";
        col2.fontName = Fonts.PRIMARY;
        col2.fontSize = Fonts.SIZE_BODY;
        col2.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        col2.characters = props.body2 || "Right column body text.";
        col2.resize(rightColWidth, col2.height);
        col2.layoutGrow = 1;
        col2.layoutAlign = "STRETCH";
        col2.textAutoResize = "HEIGHT";

        return slide;
    }
}

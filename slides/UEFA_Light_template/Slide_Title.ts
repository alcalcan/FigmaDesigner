import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";

export class Slide_Title extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        // 1. Create Main Slide Frame
        const slide = figma.createFrame();
        slide.name = "Slide_Title";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: 'SOLID', color: Colors.WHITE }];

        // 2. Auto Layout Setup - Restore Original Vertical Position
        slide.layoutMode = "VERTICAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";

        // Use TITLE_TOP to position the content area exactly as in the original design
        slide.paddingTop = Layout.TITLE_SLIDE.TITLE_TOP;
        slide.paddingLeft = Layout.TITLE_SLIDE.TITLE_LEFT;
        slide.paddingRight = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;

        // 3. Background Image (Absolute)
        const bgRect = figma.createRectangle();
        bgRect.name = "Background Image";
        bgRect.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        bgRect.fills = [{ type: 'SOLID', color: Colors.WHITE, opacity: 0.1 }];
        slide.appendChild(bgRect);
        bgRect.locked = true;
        bgRect.layoutPositioning = "ABSOLUTE";
        bgRect.x = 0;
        bgRect.y = 0;

        // 4. Load Fonts
        await figma.loadFontAsync(Fonts.EXTRA_BOLD);

        // 5. Content Frame (Title Box)
        const contentFrame = figma.createFrame();
        contentFrame.name = "Content";
        contentFrame.fills = [];
        contentFrame.layoutMode = "VERTICAL";
        contentFrame.layoutAlign = "STRETCH";

        // Restore fixed height for the title box to allow vertical centering within it
        contentFrame.resize(contentFrame.width, Layout.TITLE_SLIDE.TITLE_HEIGHT);
        contentFrame.primaryAxisAlignItems = "CENTER";
        slide.appendChild(contentFrame);

        // 6. Title Text
        const titleText = figma.createText();
        contentFrame.appendChild(titleText);
        titleText.name = "Title";
        titleText.fontName = Fonts.EXTRA_BOLD;
        titleText.characters = props.title || "Presentation Title";
        titleText.fontSize = Fonts.SIZE_TITLE_MAIN;
        titleText.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];
        titleText.layoutAlign = "STRETCH";
        titleText.textAutoResize = "HEIGHT";

        return slide;
    }
}

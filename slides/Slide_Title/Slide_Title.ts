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

        // Background Color
        slide.fills = [{ type: 'SOLID', color: Colors.BACKGROUND }];

        // 2. Background Image (Placeholder simulation)
        // In Python version: "assets/title_background.png" filling the slide.
        // For now, we'll create a rectangle placeholder or just leave it as background color if no asset.
        // We can add a rectangle to represent the image layer.
        const bgRect = figma.createRectangle();
        bgRect.name = "Background Image";
        bgRect.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        bgRect.fills = [{ type: 'SOLID', color: Colors.WHITE, opacity: 0.1 }]; // Placeholder visual
        slide.appendChild(bgRect);
        // Lock it so it acts like a background
        bgRect.locked = true;

        // 3. Title Text
        // Coordinates from theme.ts (derived from title_slide.py)
        const titleText = figma.createText();
        slide.appendChild(titleText);

        // Content
        const titleContent = props.title || "Presentation Title";
        await figma.loadFontAsync(Fonts.EXTRA_BOLD);
        titleText.fontName = Fonts.EXTRA_BOLD;
        titleText.characters = titleContent;
        titleText.fontSize = Fonts.SIZE_TITLE_MAIN;
        titleText.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];

        // Layout
        titleText.textAutoResize = "HEIGHT";
        titleText.resize(Layout.TITLE_SLIDE.TITLE_WIDTH, titleText.height);
        titleText.x = Layout.TITLE_SLIDE.TITLE_LEFT;

        // Vertical alignment is tricky with textAutoResize, but we place it at TOP of the text box area defined in Python
        // Python: Top=3810000 Emu. Height=2203368 Emu. Vertical Anchor Middle.
        // In Figma, we can simulate "Middle" by calculating offset.
        const boxTop = Layout.TITLE_SLIDE.TITLE_TOP;
        const boxHeight = Layout.TITLE_SLIDE.TITLE_HEIGHT;

        // Calculate vertical center
        const centerY = boxTop + (boxHeight / 2);
        titleText.y = centerY - (titleText.height / 2);

        titleText.name = "Title";

        // 4. Cleanup / Extras
        // Python script cleans up placeholders. We just didn't create them.

        return slide;
    }
}

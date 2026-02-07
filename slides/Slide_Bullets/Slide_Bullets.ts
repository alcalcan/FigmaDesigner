import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";

export class Slide_Bullets extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Bullets";
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
        const rightMargin = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;
        titleText.resize(Layout.SLIDE_WIDTH - Layout.MARGIN_LEFT - rightMargin, titleText.height);

        // Bullets
        const bulletsText = figma.createText();
        slide.appendChild(bulletsText);
        bulletsText.name = "Bullets";
        bulletsText.fontName = Fonts.PRIMARY;
        bulletsText.fontSize = Fonts.SIZE_BODY;
        bulletsText.fills = [{ type: 'SOLID', color: Colors.TEXT_MAIN }];

        // Handle input as array or string
        const bulletPoints = Array.isArray(props.bullets) ? props.bullets : ["Bullet 1", "Bullet 2", "Bullet 3"];
        bulletsText.characters = bulletPoints.map(b => `•  ${b}`).join('\n');

        // Layout Bullets
        bulletsText.x = Layout.MARGIN_LEFT;
        bulletsText.y = titleText.y + titleText.height + Layout.CONTENT_GAP;
        bulletsText.resize(Layout.SLIDE_WIDTH - Layout.MARGIN_LEFT - rightMargin, bulletsText.height);

        return slide;
    }
}

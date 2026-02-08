import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";

export class Slide_Picture_FullBleed_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Picture_FullBleed_extra";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: "SOLID", color: Colors.WHITE }];

        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.EXTRA_BOLD)
        ]);

        const hero = figma.createRectangle();
        hero.name = "FullBleed_Image";
        hero.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        hero.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
        hero.strokes = [{ type: "SOLID", color: Colors.ACCENT, opacity: 0.55 }];
        hero.strokeWeight = 3;
        hero.dashPattern = [12, 8];
        slide.appendChild(hero);

        const overlay = figma.createRectangle();
        overlay.name = "Bottom_Overlay";
        overlay.resize(Layout.SLIDE_WIDTH, 180);
        overlay.x = 0;
        overlay.y = Layout.SLIDE_HEIGHT - 180;
        overlay.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN, opacity: 0.8 }];
        slide.appendChild(overlay);

        const title = figma.createText();
        title.name = "Title";
        title.fontName = Fonts.EXTRA_BOLD;
        title.fontSize = 44;
        title.fills = [{ type: "SOLID", color: Colors.WHITE }];
        title.characters = props.title || "Full-Bleed Match Moment";
        title.textAutoResize = "WIDTH_AND_HEIGHT";
        title.x = Layout.MARGIN_LEFT;
        title.y = Layout.SLIDE_HEIGHT - 150;
        slide.appendChild(title);

        const subtitle = figma.createText();
        subtitle.name = "Subtitle";
        subtitle.fontName = Fonts.PRIMARY;
        subtitle.fontSize = Fonts.SIZE_BODY;
        subtitle.fills = [{ type: "SOLID", color: Colors.WHITE }];
        subtitle.characters = "Use one emotional hero picture, text anchored in safe lower overlay.";
        subtitle.textAutoResize = "WIDTH_AND_HEIGHT";
        subtitle.x = Layout.MARGIN_LEFT;
        subtitle.y = Layout.SLIDE_HEIGHT - 98;
        slide.appendChild(subtitle);

        return slide;
    }
}

import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

export class Slide_TextLeft_ImageRight_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_TextLeft_ImageRight_extra";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: "SOLID", color: Colors.WHITE }];

        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.EXTRA_BOLD)
        ]);

        slide.layoutMode = "HORIZONTAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";
        slide.itemSpacing = 0;

        const leftWidth = Math.round(Layout.SLIDE_WIDTH * 0.44);
        const rightWidth = Layout.SLIDE_WIDTH - leftWidth;

        const leftContent = figma.createFrame();
        leftContent.name = "Text_Column";
        leftContent.layoutMode = "VERTICAL";
        leftContent.primaryAxisSizingMode = "FIXED";
        leftContent.counterAxisSizingMode = "FIXED";
        leftContent.resize(leftWidth, Layout.SLIDE_HEIGHT);
        leftContent.paddingLeft = Layout.MARGIN_LEFT;
        leftContent.paddingRight = 56;
        leftContent.paddingTop = Layout.MARGIN_TOP_TITLE;
        leftContent.paddingBottom = Layout.MARGIN_FOOTER;
        leftContent.itemSpacing = 18;
        leftContent.fills = [{ type: "SOLID", color: Colors.WHITE }];
        slide.appendChild(leftContent);

        const title = figma.createText();
        title.name = "Title";
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        title.characters = props.title || "Text + Full-Height Visual";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        leftContent.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "17");
        const titleCenterY = Layout.MARGIN_TOP_TITLE + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const intro = figma.createText();
        intro.name = "Intro";
        intro.fontName = Fonts.PRIMARY;
        intro.fontSize = Fonts.SIZE_BODY;
        intro.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        intro.characters =
            props.body ||
            "Use this split when narrative context is important, but you still want a dominant visual anchor on the right side.";
        intro.layoutAlign = "STRETCH";
        intro.textAutoResize = "HEIGHT";
        leftContent.appendChild(intro);

        const body = figma.createText();
        body.name = "Body";
        body.fontName = Fonts.PRIMARY;
        body.fontSize = Fonts.SIZE_BODY;
        body.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        body.characters =
            props.body2 ||
            "Keep this copy concise: one framing paragraph and one action-oriented takeaway. The image panel should carry mood and context.";
        body.layoutAlign = "STRETCH";
        body.textAutoResize = "HEIGHT";
        leftContent.appendChild(body);

        const image = figma.createRectangle();
        image.name = "Image_Right_FullHeight";
        image.resize(rightWidth, Layout.SLIDE_HEIGHT);
        image.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
        image.strokes = [{ type: "SOLID", color: Colors.ACCENT, opacity: 0.55 }];
        image.strokeWeight = 2;
        image.dashPattern = [10, 8];
        slide.appendChild(image);

        return slide;
    }
}

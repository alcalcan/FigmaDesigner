import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

export class Slide_TextLeft_ImageRight_Padded_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_TextLeft_ImageRight_Padded_extra";
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
        slide.paddingTop = Layout.MARGIN_TOP_TITLE;
        slide.paddingBottom = Layout.MARGIN_FOOTER;
        slide.paddingRight = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;
        slide.paddingLeft = 0;
        slide.itemSpacing = 24;

        const innerHeight = Layout.SLIDE_HEIGHT - slide.paddingTop - slide.paddingBottom;
        const innerWidth = Layout.SLIDE_WIDTH - slide.paddingLeft - slide.paddingRight;
        const leftWidth = Math.round(innerWidth * 0.44);
        const rightWidth = innerWidth - leftWidth - slide.itemSpacing;

        const leftContent = figma.createFrame();
        leftContent.name = "Text_Column";
        leftContent.layoutMode = "VERTICAL";
        leftContent.primaryAxisSizingMode = "FIXED";
        leftContent.counterAxisSizingMode = "FIXED";
        leftContent.resize(leftWidth, innerHeight);
        leftContent.paddingLeft = Layout.MARGIN_LEFT;
        leftContent.paddingRight = 56;
        leftContent.paddingTop = 0;
        leftContent.paddingBottom = 0;
        leftContent.itemSpacing = 18;
        leftContent.fills = [{ type: "SOLID", color: Colors.WHITE }];
        slide.appendChild(leftContent);

        const title = figma.createText();
        title.name = "Title";
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        title.characters = props.title || "Text + Image (Padded)";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        leftContent.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "18");
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
            "This variant keeps the right image inside the slide safe area while preserving the text-first narrative on the left.";
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
            "Use this when visuals must align to top and bottom rhythm guides, without touching the right edge of the slide.";
        body.layoutAlign = "STRETCH";
        body.textAutoResize = "HEIGHT";
        leftContent.appendChild(body);

        const image = figma.createRectangle();
        image.name = "Image_Right_Padded";
        image.resize(rightWidth, innerHeight);
        image.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
        image.strokes = [{ type: "SOLID", color: Colors.ACCENT, opacity: 0.55 }];
        image.strokeWeight = 2;
        image.dashPattern = [10, 8];
        slide.appendChild(image);

        return slide;
    }
}

import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const createImageCard = async (title: string, description: string, width: number): Promise<FrameNode> => {
    const card = figma.createFrame();
    card.layoutMode = "VERTICAL";
    card.primaryAxisSizingMode = "FIXED";
    card.counterAxisSizingMode = "FIXED";
    card.resize(width, 360);
    card.layoutAlign = "STRETCH";
    card.itemSpacing = 10;
    card.fills = [];

    const image = figma.createRectangle();
    image.name = `${title}_Image`;
    image.resize(width, 300);
    image.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
    image.strokes = [{ type: "SOLID", color: Colors.ACCENT, opacity: 0.55 }];
    image.strokeWeight = 2;
    image.dashPattern = [10, 8];
    card.appendChild(image);

    const label = figma.createText();
    label.fontName = Fonts.BOLD;
    label.fontSize = 16;
    label.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
    label.characters = title;
    label.layoutAlign = "STRETCH";
    label.textAutoResize = "HEIGHT";
    card.appendChild(label);

    const paragraph = figma.createText();
    paragraph.fontName = Fonts.PRIMARY;
    paragraph.fontSize = Fonts.SIZE_FOOTER;
    paragraph.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
    paragraph.characters = description;
    paragraph.layoutAlign = "STRETCH";
    paragraph.textAutoResize = "HEIGHT";
    card.appendChild(paragraph);

    return card;
};

export class Slide_Picture_ThreeColumn_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Picture_ThreeColumn_extra";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: "SOLID", color: Colors.WHITE }];

        await Promise.all([
            figma.loadFontAsync(Fonts.PRIMARY),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.EXTRA_BOLD)
        ]);

        slide.layoutMode = "VERTICAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";
        slide.paddingLeft = Layout.MARGIN_LEFT;
        slide.paddingRight = Layout.MARGIN_RIGHT_SIMPLE || Layout.MARGIN_LEFT;
        slide.paddingTop = Layout.MARGIN_TOP_TITLE;
        slide.paddingBottom = Layout.MARGIN_FOOTER;
        slide.itemSpacing = 18;
        const innerWidth = Layout.SLIDE_WIDTH - slide.paddingLeft - slide.paddingRight;

        const title = figma.createText();
        title.name = "Title";
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        title.characters = props.title || "Three-Column Gallery";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        slide.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "15");
        const titleCenterY = slide.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const row = figma.createFrame();
        row.name = "Three_Column_Row";
        row.layoutMode = "HORIZONTAL";
        row.primaryAxisSizingMode = "FIXED";
        row.counterAxisSizingMode = "FIXED";
        row.layoutAlign = "STRETCH";
        row.itemSpacing = 16;
        row.fills = [];
        row.resize(innerWidth, 360);
        slide.appendChild(row);

        const cardWidth = (innerWidth - (2 * row.itemSpacing)) / 3;
        row.appendChild(await createImageCard(
            "Stadium atmosphere",
            "Wide crowd scene with lighting, flags, and venue details to set the match context.",
            cardWidth
        ));
        row.appendChild(await createImageCard(
            "Match action",
            "Key in-game moment: challenge, shot, or celebration that captures intensity on the pitch.",
            cardWidth
        ));
        row.appendChild(await createImageCard(
            "Fan reaction",
            "Supporter close-up showing emotion, chants, or celebration to reinforce story and energy.",
            cardWidth
        ));

        return slide;
    }
}

import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { SLIDE_OBJECT_CARD_SIZE, SLIDE_OBJECT_DEFINITIONS } from "../../components/Slide_Objects";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const GRID_GAP = 16;

const createObjectCard = async (index: number): Promise<FrameNode> => {
    const definition = SLIDE_OBJECT_DEFINITIONS[index];
    const component = new definition.component();
    const card = await component.create({
        width: SLIDE_OBJECT_CARD_SIZE.width,
        height: SLIDE_OBJECT_CARD_SIZE.height
    });

    card.name = `Object_${definition.key}`;
    card.setPluginData("presstyle_object", definition.key);
    card.setPluginData("presstyle_description", definition.description);

    return card;
};

export class Slide_Object_System_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Object_System_extra";
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
        slide.itemSpacing = Layout.CONTENT_GAP / 2;

        const innerWidth = Layout.SLIDE_WIDTH - slide.paddingLeft - slide.paddingRight;

        const title = figma.createText();
        title.name = "Title";
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        title.characters = props.title || "PresStyle Objects Imported";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        slide.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "14");
        const titleCenterY = slide.paddingTop + ((Fonts.SIZE_TITLE * 1.2) / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const subtitle = figma.createText();
        subtitle.name = "Subtitle";
        subtitle.fontName = Fonts.PRIMARY;
        subtitle.fontSize = Fonts.SIZE_BODY;
        subtitle.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        subtitle.characters = "Objects from /PresStyle/styles/UEFA/objects rendered as reusable slide components.";
        subtitle.layoutAlign = "STRETCH";
        subtitle.textAutoResize = "HEIGHT";
        slide.appendChild(subtitle);

        const grid = figma.createFrame();
        grid.name = "Object_Grid";
        grid.layoutMode = "HORIZONTAL";
        grid.layoutWrap = "WRAP";
        grid.primaryAxisSizingMode = "FIXED";
        grid.counterAxisSizingMode = "FIXED";
        grid.layoutAlign = "STRETCH";
        grid.itemSpacing = GRID_GAP;
        grid.counterAxisSpacing = GRID_GAP;
        grid.fills = [];

        const cardsPerRow = Math.max(
            1,
            Math.floor((innerWidth + GRID_GAP) / (SLIDE_OBJECT_CARD_SIZE.width + GRID_GAP))
        );
        const rows = Math.ceil(SLIDE_OBJECT_DEFINITIONS.length / cardsPerRow);
        const gridHeight = (rows * SLIDE_OBJECT_CARD_SIZE.height) + ((rows - 1) * GRID_GAP);

        grid.resize(innerWidth, gridHeight);
        slide.appendChild(grid);

        for (let index = 0; index < SLIDE_OBJECT_DEFINITIONS.length; index += 1) {
            const card = await createObjectCard(index);
            grid.appendChild(card);
        }

        return slide;
    }
}

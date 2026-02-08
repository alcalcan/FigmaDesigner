import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const objectNames = [
    "bar_chart",
    "line_chart",
    "area_chart",
    "pie_chart",
    "donut_chart",
    "radar_chart",
    "stat_card",
    "timeline",
    "stacked_timeline",
    "image",
    "text"
];

const objectDescriptions: Record<string, string> = {
    bar_chart: "Compare category performance over time windows or groups.",
    line_chart: "Track trend direction and momentum across matchdays.",
    area_chart: "Show cumulative growth and relative contribution patterns.",
    pie_chart: "Communicate proportional split of a fixed total quickly.",
    donut_chart: "Highlight share breakdown with optional center KPI value.",
    radar_chart: "Compare multi-metric profiles in a compact visual.",
    stat_card: "Feature one key KPI with a short interpretation line.",
    timeline: "Sequence milestones, events, and delivery checkpoints.",
    stacked_timeline: "Layer parallel tracks such as teams, markets, or phases.",
    image: "Reserve media slot for photography, artwork, or screenshots.",
    text: "Use narrative copy block for context, caveats, and insights."
};

const createObjectCard = async (name: string): Promise<FrameNode> => {
    const card = figma.createFrame();
    card.name = `Object_${name}`;
    card.layoutMode = "VERTICAL";
    card.primaryAxisSizingMode = "FIXED";
    card.counterAxisSizingMode = "FIXED";
    card.primaryAxisAlignItems = "CENTER";
    card.counterAxisAlignItems = "CENTER";
    card.resize(240, 120);
    card.cornerRadius = 10;
    card.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
    card.strokes = [{ type: "SOLID", color: Colors.TEXT_SECONDARY, opacity: 0.35 }];
    card.strokeWeight = 1;

    const label = figma.createText();
    label.name = "Object_Name";
    label.fontName = Fonts.BOLD;
    label.fontSize = 16;
    label.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
    label.characters = name;
    label.textAutoResize = "WIDTH_AND_HEIGHT";
    card.appendChild(label);

    const description = figma.createText();
    description.name = "Object_Description";
    description.fontName = Fonts.PRIMARY;
    description.fontSize = 12;
    description.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
    description.characters = objectDescriptions[name] || "Placeholder object description.";
    description.textAlignHorizontal = "CENTER";
    description.textAutoResize = "HEIGHT";
    description.resize(208, 10);
    card.appendChild(description);

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
        const titleCenterY = slide.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const subtitle = figma.createText();
        subtitle.name = "Subtitle";
        subtitle.fontName = Fonts.PRIMARY;
        subtitle.fontSize = Fonts.SIZE_BODY;
        subtitle.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        subtitle.characters = "Object types from PresStyle README and styles/UEFA/objects mapped as slide-ready placeholders.";
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
        grid.itemSpacing = 16;
        grid.counterAxisSpacing = 16;
        grid.fills = [];
        const cardWidth = 240;
        const cardHeight = 120;
        const cardsPerRow = Math.max(1, Math.floor((innerWidth + grid.itemSpacing) / (cardWidth + grid.itemSpacing)));
        const rows = Math.ceil(objectNames.length / cardsPerRow);
        const gridHeight = (rows * cardHeight) + ((rows - 1) * grid.counterAxisSpacing);
        grid.resize(innerWidth, gridHeight);
        slide.appendChild(grid);

        for (const objectName of objectNames) {
            const card = await createObjectCard(objectName);
            grid.appendChild(card);
        }

        return slide;
    }
}

import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { BarChartObject, LineChartObject, StatCardObject } from "../../components/Slide_Objects";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const solid = (color: RGB, opacity = 1): SolidPaint => ({ type: "SOLID", color, opacity });

const createLayoutLabel = (text: string): TextNode => {
    const label = figma.createText();
    label.name = "Layout_Label";
    label.fontName = Fonts.PRIMARY;
    label.fontSize = Fonts.SIZE_FOOTER;
    label.fills = [solid(Colors.TEXT_MAIN, 0.78)];
    label.characters = text;
    label.layoutAlign = "STRETCH";
    label.textAutoResize = "HEIGHT";
    return label;
};

const polishObjectCard = (card: FrameNode): void => {
    card.fills = [solid(Colors.WHITE)];
    card.strokes = [solid(Colors.ACCENT, 0.4)];
    card.strokeWeight = 1.25;

    const headerDivider = card.findOne((node) => node.type === "RECTANGLE" && node.name === "Object_Header_Divider") as RectangleNode | null;
    if (headerDivider) {
        headerDivider.fills = [solid(Colors.ACCENT, 0.14)];
    }
};

export class Slide_TextLeft_ObjectsRight_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_TextLeft_ObjectsRight_extra";
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
        slide.paddingLeft = Layout.MARGIN_LEFT;
        slide.itemSpacing = 24;

        const innerHeight = Layout.SLIDE_HEIGHT - slide.paddingTop - slide.paddingBottom;
        const innerWidth = Layout.SLIDE_WIDTH - slide.paddingLeft - slide.paddingRight;
        const leftWidth = Math.round(innerWidth * 0.42);
        const rightWidth = innerWidth - leftWidth - slide.itemSpacing;

        const leftColumn = figma.createFrame();
        leftColumn.name = "Text_Column";
        leftColumn.layoutMode = "VERTICAL";
        leftColumn.primaryAxisSizingMode = "FIXED";
        leftColumn.counterAxisSizingMode = "FIXED";
        leftColumn.resize(leftWidth, innerHeight);
        leftColumn.paddingLeft = 0;
        leftColumn.paddingRight = 44;
        leftColumn.paddingTop = 0;
        leftColumn.paddingBottom = 0;
        leftColumn.itemSpacing = 14;
        leftColumn.fills = [];
        slide.appendChild(leftColumn);

        const title = figma.createText();
        title.name = "Title";
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        title.characters = props.title || "Objects on the Right: Layout Options";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        leftColumn.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "19");
        const titleCenterY = Layout.MARGIN_TOP_TITLE + ((Fonts.SIZE_TITLE * 1.2) / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const intro = figma.createText();
        intro.name = "Intro";
        intro.fontName = Fonts.PRIMARY;
        intro.fontSize = Fonts.SIZE_BODY;
        intro.fills = [solid(Colors.TEXT_MAIN, 0.75)];
        intro.characters =
            props.body ||
            "Use this structure when the story lives in the left narrative while analytical objects carry evidence on the right.";
        intro.layoutAlign = "STRETCH";
        intro.textAutoResize = "HEIGHT";
        leftColumn.appendChild(intro);

        const body = figma.createText();
        body.name = "Body";
        body.fontName = Fonts.PRIMARY;
        body.fontSize = Fonts.SIZE_BODY;
        body.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        body.characters =
            props.body2 ||
            "Compose the right side in tiers: hero chart for headline trend, a supporting trend card for direction, and one KPI card for the final decision metric.";
        body.layoutAlign = "STRETCH";
        body.textAutoResize = "HEIGHT";
        leftColumn.appendChild(body);

        const checklist = figma.createText();
        checklist.name = "Checklist";
        checklist.fontName = Fonts.PRIMARY;
        checklist.fontSize = Fonts.SIZE_FOOTER;
        checklist.fills = [solid(Colors.TEXT_MAIN, 0.74)];
        checklist.characters = "Layout checklist:\n- one clear hero\n- max two supporting cards\n- one KPI with decision impact";
        checklist.layoutAlign = "STRETCH";
        checklist.textAutoResize = "HEIGHT";
        leftColumn.appendChild(checklist);

        const rightColumn = figma.createFrame();
        rightColumn.name = "Objects_Right_Column";
        rightColumn.layoutMode = "VERTICAL";
        rightColumn.primaryAxisSizingMode = "FIXED";
        rightColumn.counterAxisSizingMode = "FIXED";
        rightColumn.resize(rightWidth, innerHeight);
        rightColumn.itemSpacing = 10;
        rightColumn.fills = [];
        slide.appendChild(rightColumn);

        const heroChart = await new BarChartObject().create({ width: rightWidth, height: 238 });
        heroChart.name = "Hero_BarChart";
        polishObjectCard(heroChart);
        rightColumn.appendChild(heroChart);
        rightColumn.appendChild(createLayoutLabel("Layout A: Hero chart for the headline statistic."));

        const supportRow = figma.createFrame();
        supportRow.name = "Support_Row";
        supportRow.layoutMode = "HORIZONTAL";
        supportRow.primaryAxisSizingMode = "FIXED";
        supportRow.counterAxisSizingMode = "FIXED";
        supportRow.itemSpacing = 12;
        supportRow.fills = [];
        supportRow.resize(rightWidth, 168);
        rightColumn.appendChild(supportRow);

        const supportWidth = Math.floor((rightWidth - supportRow.itemSpacing) / 2);
        const trendCard = await new LineChartObject().create({ width: supportWidth, height: 168 });
        trendCard.name = "Support_Trend_Card";
        polishObjectCard(trendCard);
        supportRow.appendChild(trendCard);

        const kpiCard = await new StatCardObject().create({ width: supportWidth, height: 168 });
        kpiCard.name = "Support_KPI_Card";
        polishObjectCard(kpiCard);
        const kpiValue = kpiCard.findOne((node) => node.type === "TEXT" && node.name === "Value") as TextNode | null;
        const kpiLabel = kpiCard.findOne((node) => node.type === "TEXT" && node.name === "Label") as TextNode | null;
        const kpiTrend = kpiCard.findOne((node) => node.type === "TEXT" && node.name === "Trend") as TextNode | null;
        if (kpiValue) {
            kpiValue.characters = "2.48M";
        }
        if (kpiLabel) {
            kpiLabel.characters = "Live Reach";
        }
        if (kpiTrend) {
            kpiTrend.characters = "+8.4% vs baseline";
        }
        supportRow.appendChild(kpiCard);

        rightColumn.appendChild(createLayoutLabel("Layout B: Split support cards for trend + KPI signal."));

        return slide;
    }
}

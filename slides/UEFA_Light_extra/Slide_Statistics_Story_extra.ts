import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { DonutChartObject, LineChartObject } from "../../components/Slide_Objects";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

type TrendTone = "positive" | "negative" | "neutral";

const solid = (color: RGB, opacity = 1): SolidPaint => ({ type: "SOLID", color, opacity });

const trendColor = (tone: TrendTone): RGB => {
    if (tone === "positive") {
        return Colors.SUCCESS;
    }
    if (tone === "negative") {
        return Colors.DANGER;
    }
    return Colors.TEXT_MAIN;
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

const createKpiStripCard = (
    label: string,
    value: string,
    trend: string,
    tone: TrendTone,
    width: number,
    height: number
): FrameNode => {
    const card = figma.createFrame();
    card.name = `KPI_${label.replace(/[^a-z0-9]/gi, "_")}`;
    card.layoutMode = "VERTICAL";
    card.primaryAxisSizingMode = "FIXED";
    card.counterAxisSizingMode = "FIXED";
    card.resize(width, height);
    card.paddingLeft = 12;
    card.paddingRight = 12;
    card.paddingTop = 7;
    card.paddingBottom = 7;
    card.itemSpacing = 1;
    card.cornerRadius = 10;
    card.fills = [solid(Colors.BLUE_PALE, 0.28)];
    card.strokes = [solid(Colors.ACCENT, 0.34)];
    card.strokeWeight = 1;

    const labelNode = figma.createText();
    labelNode.fontName = Fonts.PRIMARY;
    labelNode.fontSize = 9;
    labelNode.fills = [solid(Colors.TEXT_MAIN, 0.74)];
    labelNode.characters = label;
    labelNode.layoutAlign = "STRETCH";
    labelNode.textAutoResize = "HEIGHT";
    card.appendChild(labelNode);

    const valueNode = figma.createText();
    valueNode.fontName = Fonts.EXTRA_BOLD;
    valueNode.fontSize = 20;
    valueNode.fills = [solid(Colors.TEXT_MAIN)];
    valueNode.characters = value;
    valueNode.layoutAlign = "STRETCH";
    valueNode.textAutoResize = "HEIGHT";
    card.appendChild(valueNode);

    const trendNode = figma.createText();
    trendNode.fontName = Fonts.PRIMARY;
    trendNode.fontSize = 9;
    trendNode.fills = [solid(trendColor(tone))];
    trendNode.characters = trend;
    trendNode.layoutAlign = "STRETCH";
    trendNode.textAutoResize = "HEIGHT";
    card.appendChild(trendNode);

    return card;
};

const createInsightCard = (title: string, body: string, width: number, height: number): FrameNode => {
    const card = figma.createFrame();
    card.name = `Insight_${title.replace(/[^a-z0-9]/gi, "_")}`;
    card.layoutMode = "VERTICAL";
    card.primaryAxisSizingMode = "FIXED";
    card.counterAxisSizingMode = "FIXED";
    card.resize(width, height);
    card.paddingLeft = 14;
    card.paddingRight = 14;
    card.paddingTop = 12;
    card.paddingBottom = 12;
    card.itemSpacing = 8;
    card.cornerRadius = 10;
    card.fills = [solid(Colors.BLUE_PALE, 0.22)];
    card.strokes = [solid(Colors.ACCENT, 0.32)];
    card.strokeWeight = 1;

    const accent = figma.createRectangle();
    accent.name = "Accent";
    accent.resize(width - 28, 4);
    accent.cornerRadius = 2;
    accent.fills = [solid(Colors.ACCENT)];
    accent.strokes = [];
    card.appendChild(accent);

    const titleNode = figma.createText();
    titleNode.fontName = Fonts.BOLD;
    titleNode.fontSize = 12;
    titleNode.fills = [solid(Colors.TEXT_MAIN)];
    titleNode.characters = title;
    titleNode.layoutAlign = "STRETCH";
    titleNode.textAutoResize = "HEIGHT";
    card.appendChild(titleNode);

    const bodyNode = figma.createText();
    bodyNode.fontName = Fonts.PRIMARY;
    bodyNode.fontSize = 11;
    bodyNode.fills = [solid(Colors.TEXT_MAIN, 0.76)];
    bodyNode.characters = body;
    bodyNode.layoutAlign = "STRETCH";
    bodyNode.textAutoResize = "HEIGHT";
    card.appendChild(bodyNode);

    return card;
};

export class Slide_Statistics_Story_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Statistics_Story_extra";
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
        slide.itemSpacing = 14;

        const innerWidth = Layout.SLIDE_WIDTH - slide.paddingLeft - slide.paddingRight;

        const title = figma.createText();
        title.name = "Title";
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [solid(Colors.TEXT_MAIN)];
        title.characters = props.title || "Statistics Storyboard Layout";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        slide.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "20");
        const titleCenterY = slide.paddingTop + ((Fonts.SIZE_TITLE * 1.2) / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const subtitle = figma.createText();
        subtitle.name = "Subtitle";
        subtitle.fontName = Fonts.PRIMARY;
        subtitle.fontSize = Fonts.SIZE_BODY;
        subtitle.fills = [solid(Colors.TEXT_MAIN, 0.78)];
        subtitle.characters =
            props.body ||
            "Lead with trend context, support with compact KPIs, then close with three practical insights.";
        subtitle.layoutAlign = "STRETCH";
        subtitle.textAutoResize = "HEIGHT";
        slide.appendChild(subtitle);

        const mainRow = figma.createFrame();
        mainRow.name = "Main_Row";
        mainRow.layoutMode = "HORIZONTAL";
        mainRow.primaryAxisSizingMode = "FIXED";
        mainRow.counterAxisSizingMode = "FIXED";
        mainRow.layoutAlign = "STRETCH";
        mainRow.itemSpacing = 14;
        mainRow.fills = [];
        mainRow.resize(innerWidth, 318);
        slide.appendChild(mainRow);

        const leftWidth = Math.round((innerWidth - mainRow.itemSpacing) * 0.66);
        const rightWidth = innerWidth - leftWidth - mainRow.itemSpacing;

        const leftPanel = figma.createFrame();
        leftPanel.name = "Trend_Panel";
        leftPanel.layoutMode = "VERTICAL";
        leftPanel.primaryAxisSizingMode = "FIXED";
        leftPanel.counterAxisSizingMode = "FIXED";
        leftPanel.resize(leftWidth, 318);
        leftPanel.itemSpacing = 8;
        leftPanel.fills = [];
        mainRow.appendChild(leftPanel);

        const trendChart = await new LineChartObject().create({ width: leftWidth, height: 268 });
        trendChart.name = "Trend_Chart";
        polishObjectCard(trendChart);
        leftPanel.appendChild(trendChart);

        const takeaway = figma.createFrame();
        takeaway.name = "Takeaway";
        takeaway.layoutMode = "VERTICAL";
        takeaway.primaryAxisSizingMode = "FIXED";
        takeaway.counterAxisSizingMode = "FIXED";
        takeaway.resize(leftWidth, 42);
        takeaway.paddingLeft = 12;
        takeaway.paddingRight = 12;
        takeaway.paddingTop = 8;
        takeaway.paddingBottom = 8;
        takeaway.cornerRadius = 10;
        takeaway.fills = [solid(Colors.BLUE_PALE, 0.9)];
        takeaway.strokes = [solid(Colors.ACCENT, 0.24)];
        takeaway.strokeWeight = 1;
        leftPanel.appendChild(takeaway);

        const takeawayText = figma.createText();
        takeawayText.fontName = Fonts.PRIMARY;
        takeawayText.fontSize = 11;
        takeawayText.fills = [solid(Colors.TEXT_MAIN)];
        takeawayText.characters = "Takeaway: peak engagement appears in the final campaign third.";
        takeawayText.layoutAlign = "STRETCH";
        takeawayText.textAutoResize = "HEIGHT";
        takeaway.appendChild(takeawayText);

        const rightPanel = figma.createFrame();
        rightPanel.name = "KPI_Panel";
        rightPanel.layoutMode = "VERTICAL";
        rightPanel.primaryAxisSizingMode = "FIXED";
        rightPanel.counterAxisSizingMode = "FIXED";
        rightPanel.resize(rightWidth, 318);
        rightPanel.itemSpacing = 8;
        rightPanel.fills = [];
        mainRow.appendChild(rightPanel);

        const kpiStack = figma.createFrame();
        kpiStack.name = "KPI_Stack";
        kpiStack.layoutMode = "VERTICAL";
        kpiStack.primaryAxisSizingMode = "FIXED";
        kpiStack.counterAxisSizingMode = "FIXED";
        kpiStack.resize(rightWidth, 201);
        kpiStack.itemSpacing = 6;
        kpiStack.fills = [];
        rightPanel.appendChild(kpiStack);

        kpiStack.appendChild(createKpiStripCard("Total Reach", "82.4M", "+18.9% period over period", "positive", rightWidth, 63));
        kpiStack.appendChild(createKpiStripCard("Cost per Result", "EUR 0.41", "-6.2% efficiency gain", "positive", rightWidth, 63));
        kpiStack.appendChild(createKpiStripCard("Drop-off Rate", "12.8%", "+1.1 pts alert", "negative", rightWidth, 63));

        const mixChart = await new DonutChartObject().create({ width: rightWidth, height: 103 });
        mixChart.name = "Channel_Mix";
        polishObjectCard(mixChart);
        rightPanel.appendChild(mixChart);

        const insightRow = figma.createFrame();
        insightRow.name = "Insight_Row";
        insightRow.layoutMode = "HORIZONTAL";
        insightRow.primaryAxisSizingMode = "FIXED";
        insightRow.counterAxisSizingMode = "FIXED";
        insightRow.layoutAlign = "STRETCH";
        insightRow.itemSpacing = 14;
        insightRow.fills = [];
        insightRow.resize(innerWidth, 122);
        slide.appendChild(insightRow);

        const insightWidth = (innerWidth - (2 * insightRow.itemSpacing)) / 3;
        insightRow.appendChild(createInsightCard("Audience", "Prime-time inventory drives highest retention among returning viewers.", insightWidth, 122));
        insightRow.appendChild(createInsightCard("Creative", "Short caption overlays outperform long explanatory treatments.", insightWidth, 122));
        insightRow.appendChild(createInsightCard("Action", "Shift 12% budget to high-performing slots for the final phase.", insightWidth, 122));

        return slide;
    }
}

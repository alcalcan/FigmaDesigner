import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

type TrendTone = "positive" | "negative" | "neutral";

interface MetricCardConfig {
    label: string;
    value: string;
    trend: string;
    trendTone: TrendTone;
    context: string;
}

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

const toneLabel = (tone: TrendTone): string => {
    if (tone === "positive") {
        return "UP";
    }
    if (tone === "negative") {
        return "DOWN";
    }
    return "FLAT";
};

const createMetricCard = (metric: MetricCardConfig, width: number, height: number): FrameNode => {
    const card = figma.createFrame();
    card.name = `Metric_${metric.label.replace(/[^a-z0-9]/gi, "_")}`;
    card.layoutMode = "VERTICAL";
    card.primaryAxisSizingMode = "FIXED";
    card.counterAxisSizingMode = "FIXED";
    card.resize(width, height);
    card.paddingLeft = 20;
    card.paddingRight = 20;
    card.paddingTop = 18;
    card.paddingBottom = 18;
    card.itemSpacing = 10;
    card.cornerRadius = 12;
    card.fills = [solid(Colors.WHITE)];
    card.strokes = [solid(Colors.ACCENT, 0.36)];
    card.strokeWeight = 1;
    card.effects = [
        {
            type: "DROP_SHADOW",
            color: { r: 0, g: 0, b: 0, a: 0.08 },
            offset: { x: 0, y: 2 },
            radius: 6,
            spread: 0,
            visible: true,
            blendMode: "NORMAL"
        }
    ];

    const topRow = figma.createFrame();
    topRow.name = "Top_Row";
    topRow.layoutMode = "HORIZONTAL";
    topRow.primaryAxisSizingMode = "FIXED";
    topRow.counterAxisSizingMode = "AUTO";
    topRow.primaryAxisAlignItems = "SPACE_BETWEEN";
    topRow.counterAxisAlignItems = "CENTER";
    topRow.fills = [];
    topRow.resize(width - 40, 20);
    card.appendChild(topRow);

    const labelNode = figma.createText();
    labelNode.fontName = Fonts.PRIMARY;
    labelNode.fontSize = 12;
    labelNode.fills = [solid(Colors.TEXT_MAIN, 0.76)];
    labelNode.characters = metric.label;
    labelNode.textAutoResize = "WIDTH_AND_HEIGHT";
    topRow.appendChild(labelNode);

    const badge = figma.createFrame();
    badge.name = "Trend_Badge";
    badge.layoutMode = "HORIZONTAL";
    badge.primaryAxisSizingMode = "AUTO";
    badge.counterAxisSizingMode = "AUTO";
    badge.paddingLeft = 8;
    badge.paddingRight = 8;
    badge.paddingTop = 3;
    badge.paddingBottom = 3;
    badge.cornerRadius = 100;
    badge.fills = [solid(Colors.BLUE_PALE, 0.95)];
    badge.strokes = [solid(Colors.ACCENT, 0.3)];
    badge.strokeWeight = 1;
    topRow.appendChild(badge);

    const badgeText = figma.createText();
    badgeText.fontName = Fonts.BOLD;
    badgeText.fontSize = 10;
    badgeText.fills = [solid(Colors.ACCENT)];
    badgeText.characters = toneLabel(metric.trendTone);
    badgeText.textAutoResize = "WIDTH_AND_HEIGHT";
    badge.appendChild(badgeText);

    const valueNode = figma.createText();
    valueNode.fontName = Fonts.EXTRA_BOLD;
    valueNode.fontSize = 42;
    valueNode.fills = [solid(Colors.TEXT_MAIN)];
    valueNode.characters = metric.value;
    valueNode.layoutAlign = "STRETCH";
    valueNode.textAutoResize = "HEIGHT";
    card.appendChild(valueNode);

    const trendNode = figma.createText();
    trendNode.fontName = Fonts.BOLD;
    trendNode.fontSize = 13;
    trendNode.fills = [solid(trendColor(metric.trendTone))];
    trendNode.characters = metric.trend;
    trendNode.layoutAlign = "STRETCH";
    trendNode.textAutoResize = "HEIGHT";
    card.appendChild(trendNode);

    const divider = figma.createRectangle();
    divider.name = "Divider";
    divider.resize(width - 40, 1);
    divider.fills = [solid(Colors.ACCENT, 0.18)];
    divider.strokes = [];
    card.appendChild(divider);

    const contextNode = figma.createText();
    contextNode.fontName = Fonts.PRIMARY;
    contextNode.fontSize = 11;
    contextNode.fills = [solid(Colors.TEXT_MAIN, 0.75)];
    contextNode.characters = metric.context;
    contextNode.layoutAlign = "STRETCH";
    contextNode.textAutoResize = "HEIGHT";
    card.appendChild(contextNode);

    return card;
};

export class Slide_MetricCards_4up_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_MetricCards_4up_extra";
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
        title.characters = props.title || "Four Metric Cards";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        slide.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "21");
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
            "Use this slide when leadership needs a single-screen KPI scan with immediate trend context.";
        subtitle.layoutAlign = "STRETCH";
        subtitle.textAutoResize = "HEIGHT";
        slide.appendChild(subtitle);

        const grid = figma.createFrame();
        grid.name = "Metric_Grid_4up";
        grid.layoutMode = "HORIZONTAL";
        grid.layoutWrap = "WRAP";
        grid.primaryAxisSizingMode = "FIXED";
        grid.counterAxisSizingMode = "FIXED";
        grid.layoutAlign = "STRETCH";
        grid.itemSpacing = 16;
        grid.counterAxisSpacing = 16;
        grid.fills = [];
        grid.resize(innerWidth, 374);
        slide.appendChild(grid);

        const cardWidth = (innerWidth - grid.itemSpacing) / 2;
        const cardHeight = 179;
        const metrics: MetricCardConfig[] = [
            {
                label: "Ticket Revenue",
                value: "EUR 24.8M",
                trend: "+11.2% vs target",
                trendTone: "positive",
                context: "Driven by premium hospitality sell-through in the final two rounds."
            },
            {
                label: "Avg Attendance",
                value: "48,320",
                trend: "+6.1% year over year",
                trendTone: "positive",
                context: "Higher seat utilization in weekday fixtures after schedule refinements."
            },
            {
                label: "Digital Reach",
                value: "82.4M",
                trend: "+18.9% campaign lift",
                trendTone: "positive",
                context: "Organic short-form highlights produced the strongest net-new audience."
            },
            {
                label: "Conversion Rate",
                value: "5.8%",
                trend: "-0.4 pts last 14 days",
                trendTone: "negative",
                context: "Landing-page friction emerged on mobile flows in late-funnel steps."
            }
        ];

        for (const metric of metrics) {
            grid.appendChild(createMetricCard(metric, cardWidth, cardHeight));
        }

        const footer = figma.createText();
        footer.name = "Footer_Note";
        footer.fontName = Fonts.PRIMARY;
        footer.fontSize = Fonts.SIZE_FOOTER;
        footer.fills = [solid(Colors.TEXT_MAIN, 0.74)];
        footer.characters = "Design note: keep 2 positive + 2 risk-balanced indicators for fast executive scanning.";
        footer.layoutAlign = "STRETCH";
        footer.textAutoResize = "HEIGHT";
        slide.appendChild(footer);

        return slide;
    }
}

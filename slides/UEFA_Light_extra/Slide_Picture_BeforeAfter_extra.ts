import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

const createComparisonPanel = async (titleText: string, descriptionText: string, width: number): Promise<FrameNode> => {
    const panel = figma.createFrame();
    panel.layoutMode = "VERTICAL";
    panel.primaryAxisSizingMode = "FIXED";
    panel.counterAxisSizingMode = "FIXED";
    panel.resize(width, 390);
    panel.itemSpacing = 10;
    panel.fills = [];

    const title = figma.createText();
    title.fontName = Fonts.BOLD;
    title.fontSize = 18;
    title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
    title.characters = titleText;
    title.layoutAlign = "STRETCH";
    title.textAutoResize = "HEIGHT";
    panel.appendChild(title);

    const description = figma.createText();
    description.fontName = Fonts.PRIMARY;
    description.fontSize = 12;
    description.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
    description.characters = descriptionText;
    description.layoutAlign = "STRETCH";
    description.textAutoResize = "HEIGHT";
    panel.appendChild(description);

    const image = figma.createRectangle();
    image.name = `${titleText}_Image`;
    image.resize(width, 300);
    image.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];
    image.strokes = [{ type: "SOLID", color: Colors.ACCENT, opacity: 0.55 }];
    image.strokeWeight = 2;
    image.dashPattern = [10, 8];
    panel.appendChild(image);

    return panel;
};

export class Slide_Picture_BeforeAfter_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Picture_BeforeAfter_extra";
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
        title.characters = props.title || "Before / After Comparison";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";
        slide.appendChild(title);

        const chapterInfo = addChapterNumber(slide, props.number || "16");
        const titleCenterY = slide.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const subtitle = figma.createText();
        subtitle.name = "Subtitle";
        subtitle.fontName = Fonts.PRIMARY;
        subtitle.fontSize = Fonts.SIZE_BODY;
        subtitle.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        subtitle.characters = "Use for visual comparisons: old/new branding, before/after venue prep, or tactical snapshots.";
        subtitle.layoutAlign = "STRETCH";
        subtitle.textAutoResize = "HEIGHT";
        slide.appendChild(subtitle);

        const row = figma.createFrame();
        row.name = "Comparison_Row";
        row.layoutMode = "HORIZONTAL";
        row.primaryAxisSizingMode = "AUTO";
        row.counterAxisSizingMode = "AUTO";
        row.layoutAlign = "STRETCH";
        row.primaryAxisSizingMode = "FIXED";
        row.counterAxisSizingMode = "FIXED";
        row.itemSpacing = 16;
        row.fills = [];
        row.resize(innerWidth, 390);
        slide.appendChild(row);

        const panelWidth = (innerWidth - row.itemSpacing) / 2;
        row.appendChild(await createComparisonPanel(
            "Before",
            "Current state baseline image showing the starting point or existing condition.",
            panelWidth
        ));
        row.appendChild(await createComparisonPanel(
            "After",
            "Target state image that demonstrates improvement, redesign, or final outcome.",
            panelWidth
        ));

        return slide;
    }
}

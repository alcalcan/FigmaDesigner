import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { UEFA_Academy_online_Summary } from "../../pages/UEFA_Academy_online/UEFA_Academy_online_Summary";
import { rasterizePageFactoryIntoSlide } from "../pageRaster";
import { Colors, Fonts, Layout } from "../theme";
import { addChapterNumber } from "../utils";

type PageComponentCtor = new () => {
    create: (props: ComponentProps) => SceneNode | Promise<SceneNode>;
};

export class Slide_Page_Raster_Demo_extra extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const slide = figma.createFrame();
        slide.name = "Slide_Page_Raster_Demo_extra";
        slide.resize(Layout.SLIDE_WIDTH, Layout.SLIDE_HEIGHT);
        slide.x = props.x || 0;
        slide.y = props.y || 0;
        slide.fills = [{ type: "SOLID", color: Colors.WHITE }];
        slide.layoutMode = "HORIZONTAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";
        slide.itemSpacing = 0;

        await Promise.all([
            figma.loadFontAsync(Fonts.EXTRA_BOLD),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.PRIMARY)
        ]);

        // Left Column (Text)
        const leftWidth = Math.round(Layout.SLIDE_WIDTH * 0.44);
        const leftColumn = figma.createFrame();
        leftColumn.name = "Text_Column";
        leftColumn.layoutMode = "VERTICAL";
        leftColumn.primaryAxisSizingMode = "FIXED";
        leftColumn.counterAxisSizingMode = "FIXED";
        leftColumn.resize(leftWidth, Layout.SLIDE_HEIGHT);
        leftColumn.paddingLeft = Layout.MARGIN_LEFT;
        leftColumn.paddingRight = 64;
        leftColumn.paddingTop = Layout.MARGIN_TOP_TITLE;
        leftColumn.paddingBottom = Layout.MARGIN_FOOTER;
        leftColumn.itemSpacing = 24;
        leftColumn.fills = [{ type: "SOLID", color: Colors.WHITE }];
        slide.appendChild(leftColumn);

        const title = figma.createText();
        title.name = "Title";
        leftColumn.appendChild(title);
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        title.characters = props.title || "Any Page -> Rasterized -> Fit Into Slide";
        title.layoutAlign = "STRETCH";
        title.textAutoResize = "HEIGHT";

        const chapterInfo = addChapterNumber(slide, props.number || "1.16");
        // Chapter ribbon remains absolute/floating as per standard
        const titleCenterY = leftColumn.paddingTop + (Fonts.SIZE_TITLE * 1.2 / 2);
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const subtitle = figma.createText();
        subtitle.name = "Subtitle";
        leftColumn.appendChild(subtitle);
        subtitle.fontName = Fonts.PRIMARY;
        subtitle.fontSize = Fonts.SIZE_BODY;
        subtitle.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        subtitle.characters = props.body ||
            "Source page can be 1680, 1920, or 4K. We raster once, preserve aspect ratio, then contain-fit into the slide viewport.";
        subtitle.layoutAlign = "STRETCH";
        subtitle.textAutoResize = "HEIGHT";

        // Spacer to push metadata to bottom
        const spacer = figma.createFrame();
        spacer.name = "Spacer";
        spacer.fills = [];
        spacer.layoutAlign = "STRETCH";
        spacer.layoutGrow = 1;
        leftColumn.appendChild(spacer);

        const footer = figma.createText();
        footer.name = "Fit metadata";
        leftColumn.appendChild(footer);
        footer.fontName = Fonts.PRIMARY;
        footer.fontSize = 10;
        footer.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];

        // Right Column (Visual Viewport)
        const rightWidth = Layout.SLIDE_WIDTH - leftWidth;
        const rightColumn = figma.createFrame();
        rightColumn.name = "Visual_Column";
        rightColumn.layoutMode = "NONE"; // Use NONE so raster utility can place absolute/centered image
        rightColumn.primaryAxisSizingMode = "FIXED";
        rightColumn.counterAxisSizingMode = "FIXED";
        rightColumn.resize(rightWidth, Layout.SLIDE_HEIGHT);
        rightColumn.fills = [{ type: "SOLID", color: Colors.BACKGROUND, opacity: 0.5 }];
        slide.appendChild(rightColumn);

        const PageClass = (props.pageComponentClass as PageComponentCtor | undefined) || UEFA_Academy_online_Summary;
        const pageProps = (props.pageProps as ComponentProps | undefined) || { x: 0, y: 0 };
        const quality = typeof props.rasterQuality === "number" ? props.rasterQuality : undefined;

        const margin = 64;
        const rasterResult = await rasterizePageFactoryIntoSlide(
            rightColumn,
            async () => {
                const page = new PageClass();
                return await page.create(pageProps);
            },
            {
                targetBox: {
                    x: margin,
                    y: margin,
                    width: rightWidth - margin * 2,
                    height: Layout.SLIDE_HEIGHT - margin * 2
                },
                ...(typeof quality === "number" ? { quality } : {}),
                preferMaxResolution: true,
                maxExportPixels: 12_000_000,
                maxExportSidePx: 3072,
                cornerRadius: 12,
                strokeWeight: 0,
                showShadow: true
            }
        );

        footer.characters =
            `Source ${Math.round(rasterResult.sourceWidth)}x${Math.round(rasterResult.sourceHeight)} px | ` +
            `Export ${rasterResult.exportedPixelWidth}x${rasterResult.exportedPixelHeight} px | ` +
            `Fit ${rasterResult.fitScale.toFixed(3)}x`;

        return slide;
    }
}

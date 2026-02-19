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
        slide.layoutMode = "VERTICAL";
        slide.primaryAxisSizingMode = "FIXED";
        slide.counterAxisSizingMode = "FIXED";

        await Promise.all([
            figma.loadFontAsync(Fonts.EXTRA_BOLD),
            figma.loadFontAsync(Fonts.BOLD),
            figma.loadFontAsync(Fonts.PRIMARY)
        ]);

        const title = figma.createText();
        title.name = "Title";
        slide.appendChild(title);
        title.layoutPositioning = "ABSOLUTE";
        title.fontName = Fonts.BOLD;
        title.fontSize = Fonts.SIZE_TITLE;
        title.fills = [{ type: "SOLID", color: Colors.TEXT_MAIN }];
        title.characters = props.title || "Any Page -> Rasterized -> Fit Into Slide";
        title.x = 120;
        title.y = 48;
        title.resize(Layout.SLIDE_WIDTH - 160, 48);
        title.textAutoResize = "HEIGHT";

        const chapterInfo = addChapterNumber(slide, props.number || "1.16");
        const titleCenterY = title.y + title.height / 2;
        chapterInfo.ribbon.y = titleCenterY - (Layout.CHAPTER_NUMBER.RECT_HEIGHT / 2);
        chapterInfo.text.y = titleCenterY - (Layout.CHAPTER_NUMBER.TEXT_HEIGHT / 2);

        const subtitle = figma.createText();
        subtitle.name = "Subtitle";
        slide.appendChild(subtitle);
        subtitle.layoutPositioning = "ABSOLUTE";
        subtitle.fontName = Fonts.PRIMARY;
        subtitle.fontSize = Fonts.SIZE_BODY;
        subtitle.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        subtitle.characters = props.body ||
            "Source page can be 1680, 1920, or 4K. We raster once, preserve aspect ratio, then contain-fit into the slide viewport.";
        subtitle.x = 120;
        subtitle.y = title.y + title.height + 8;
        subtitle.resize(Layout.SLIDE_WIDTH - 180, 40);
        subtitle.textAutoResize = "HEIGHT";

        const viewportMarginX = 72;
        const viewportY = 156;
        const viewportWidth = Layout.SLIDE_WIDTH - viewportMarginX * 2;
        const viewportHeight = Layout.SLIDE_HEIGHT - viewportY - 48;

        const viewport = figma.createRectangle();
        viewport.name = "Viewport";
        slide.appendChild(viewport);
        viewport.layoutPositioning = "ABSOLUTE";
        viewport.resize(viewportWidth, viewportHeight);
        viewport.x = viewportMarginX;
        viewport.y = viewportY;
        viewport.cornerRadius = 18;
        viewport.fills = [{ type: "SOLID", color: Colors.BACKGROUND }];

        const PageClass = (props.pageComponentClass as PageComponentCtor | undefined) || UEFA_Academy_online_Summary;
        const pageProps = (props.pageProps as ComponentProps | undefined) || { x: 0, y: 0 };
        const quality = typeof props.rasterQuality === "number" ? props.rasterQuality : 2;

        const rasterResult = await rasterizePageFactoryIntoSlide(
            slide,
            async () => {
                const page = new PageClass();
                return await page.create(pageProps);
            },
            {
                targetBox: {
                    x: viewport.x + 24,
                    y: viewport.y + 24,
                    width: viewport.width - 48,
                    height: viewport.height - 48
                },
                quality,
                cornerRadius: 12,
                strokeWeight: 1
            }
        );

        const footer = figma.createText();
        footer.name = "Fit metadata";
        slide.appendChild(footer);
        footer.layoutPositioning = "ABSOLUTE";
        footer.x = viewportMarginX;
        footer.y = Layout.SLIDE_HEIGHT - 28;
        footer.resize(Layout.SLIDE_WIDTH - viewportMarginX * 2, 20);
        footer.fontName = Fonts.PRIMARY;
        footer.fontSize = 11;
        footer.fills = [{ type: "SOLID", color: Colors.TEXT_SECONDARY }];
        footer.characters =
            `Source ${Math.round(rasterResult.sourceWidth)}x${Math.round(rasterResult.sourceHeight)} px | ` +
            `Placed ${Math.round(rasterResult.fittedWidth)}x${Math.round(rasterResult.fittedHeight)} px | ` +
            `Fit ${rasterResult.fitScale.toFixed(3)}x | Export ${rasterResult.exportScale.toFixed(2)}x`;

        return slide;
    }
}

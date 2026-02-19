import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Slide_Page_Raster_Demo_extra } from "../../slides/UEFA_Light_extra/Slide_Page_Raster_Demo_extra";
import { Slide_Title_extra } from "../../slides/UEFA_Light_extra/Slide_Title";
import { Layout } from "../../slides/theme";
import { MetricCardsDesign1Demo } from "../../pages/Alex_CookBook/MetricCardsDesign1Demo";

export class UEFA_Page_Raster_Demo_Presentation extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const presentation = figma.createFrame();
        presentation.name = "UEFA_Page_Raster_Demo_Presentation";
        presentation.x = props.x || 0;
        presentation.y = props.y || 0;
        presentation.fills = [];

        presentation.resize(Layout.SLIDE_WIDTH * 1.5, Layout.SLIDE_HEIGHT + 400);
        presentation.layoutMode = "HORIZONTAL";
        presentation.primaryAxisSizingMode = "AUTO";
        presentation.counterAxisSizingMode = "AUTO";
        presentation.paddingLeft = 200;
        presentation.paddingRight = 200;
        presentation.paddingTop = 200;
        presentation.paddingBottom = 200;
        presentation.itemSpacing = Layout.CONTENT_GAP * 4;
        presentation.counterAxisAlignItems = "CENTER";

        const titleSlide = new Slide_Title_extra();
        const pageRasterSlide = new Slide_Page_Raster_Demo_extra();

        const slideNodes = [
            await titleSlide.create({
                x: 0,
                y: 0,
                title: props.title || "Page-To-Slide Raster Fit",
                body: props.body || "Demo: render any existing page, rasterize it, then fit it proportionally into a presentation slide."
            }),
            await pageRasterSlide.create({
                x: 0,
                y: 0,
                title: "Existing Page Embedded Into Slide",
                body: "This slide uses a reusable utility: page creation -> PNG raster export -> contain fit inside viewport.",
                number: "1.1",
                pageComponentClass: props.pageComponentClass,
                pageProps: props.pageProps,
                rasterQuality: props.rasterQuality
            }),
            await pageRasterSlide.create({
                x: 0,
                y: 0,
                title: "Metric Cards Showcase",
                body: "Showing the Modern Glassmorphic (Design 1) metric cards with various customizations.",
                number: "1.2",
                pageComponentClass: MetricCardsDesign1Demo,
                rasterQuality: props.rasterQuality
            })
        ];

        for (const slideNode of slideNodes) {
            presentation.appendChild(slideNode);
        }

        return presentation;
    }
}

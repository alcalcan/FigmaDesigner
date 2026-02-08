import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Layout } from "../../slides/theme";
import { Slide_Content_2Column_extra } from "../../slides/UEFA_Light_extra/Slide_2Body";
import { Slide_Content_3Column_extra } from "../../slides/UEFA_Light_extra/Slide_3Body";
import { Slide_Content_extra } from "../../slides/UEFA_Light_extra/Slide_Body";
import { Slide_Content_Bullets_extra } from "../../slides/UEFA_Light_extra/Slide_Body_Bullets";
import { Slide_Bullets_extra } from "../../slides/UEFA_Light_extra/Slide_Bullets";
import { Slide_Divider_extra } from "../../slides/UEFA_Light_extra/Slide_Divider";
import { Slide_Divider_Blue_extra } from "../../slides/UEFA_Light_extra/Slide_Divider_Blue";
import { Slide_Divider_Gray_extra } from "../../slides/UEFA_Light_extra/Slide_Divider_Gray";
import { Slide_Divider_Subtle_extra } from "../../slides/UEFA_Light_extra/Slide_Divider_Subtle";
import { Slide_Divider_Subtle_Blue_extra } from "../../slides/UEFA_Light_extra/Slide_Divider_Subtle_Blue";
import { Slide_Divider_Subtle_Gray_extra } from "../../slides/UEFA_Light_extra/Slide_Divider_Subtle_Gray";
import { Slide_MetricCards_4up_extra } from "../../slides/UEFA_Light_extra/Slide_MetricCards_4up_extra";
import { Slide_Object_System_extra } from "../../slides/UEFA_Light_extra/Slide_Object_System_extra";
import { Slide_Picture_BeforeAfter_extra } from "../../slides/UEFA_Light_extra/Slide_Picture_BeforeAfter_extra";
import { Slide_Picture_FullBleed_extra } from "../../slides/UEFA_Light_extra/Slide_Picture_FullBleed_extra";
import { Slide_Picture_Layouts_extra } from "../../slides/UEFA_Light_extra/Slide_Picture_Layouts_extra";
import { Slide_Picture_ThreeColumn_extra } from "../../slides/UEFA_Light_extra/Slide_Picture_ThreeColumn_extra";
import { Slide_Statistics_Story_extra } from "../../slides/UEFA_Light_extra/Slide_Statistics_Story_extra";
import { Slide_TextLeft_ImageRight_extra } from "../../slides/UEFA_Light_extra/Slide_TextLeft_ImageRight_extra";
import { Slide_TextLeft_ImageRight_Padded_extra } from "../../slides/UEFA_Light_extra/Slide_TextLeft_ImageRight_Padded_extra";
import { Slide_TextLeft_ObjectsRight_extra } from "../../slides/UEFA_Light_extra/Slide_TextLeft_ObjectsRight_extra";
import { Slide_Title_extra } from "../../slides/UEFA_Light_extra/Slide_Title";

export class UEFA_Light_Extra_Presentation extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const presentation = figma.createFrame();
        presentation.name = "UEFA_Light_extra_presentation";

        presentation.resize(Layout.SLIDE_WIDTH * 1.5, Layout.SLIDE_HEIGHT + 400);
        presentation.fills = [];

        presentation.layoutMode = "HORIZONTAL";
        presentation.primaryAxisSizingMode = "AUTO";
        presentation.counterAxisSizingMode = "AUTO";

        presentation.paddingLeft = 200;
        presentation.paddingRight = 200;
        presentation.paddingTop = 200;
        presentation.paddingBottom = 200;

        presentation.itemSpacing = Layout.CONTENT_GAP * 4;
        presentation.counterAxisAlignItems = "CENTER";

        presentation.x = props.x || 0;
        presentation.y = props.y || 0;

        const titleSlides = [{ slide: new Slide_Title_extra(), number: undefined }];

        const dividerSlides = [
            { slide: new Slide_Divider_extra(), number: "01" },
            { slide: new Slide_Divider_Blue_extra(), number: "01" },
            { slide: new Slide_Divider_Gray_extra(), number: "01" },
            { slide: new Slide_Divider_Subtle_extra(), number: "01" },
            { slide: new Slide_Divider_Subtle_Blue_extra(), number: "01" },
            { slide: new Slide_Divider_Subtle_Gray_extra(), number: "01" }
        ];

        const contentSlides = [
            { slide: new Slide_Content_extra(), number: "1.1" },
            { slide: new Slide_Content_2Column_extra(), number: "1.2" },
            { slide: new Slide_Content_3Column_extra(), number: "1.3" },
            { slide: new Slide_Bullets_extra(), number: "1.4" },
            { slide: new Slide_Content_Bullets_extra(), number: "1.5" },
            { slide: new Slide_TextLeft_ImageRight_extra(), number: "1.6" },
            { slide: new Slide_TextLeft_ImageRight_Padded_extra(), number: "1.7" },
            { slide: new Slide_Picture_FullBleed_extra(), number: "1.8" },
            { slide: new Slide_Picture_Layouts_extra(), number: "1.9" },
            { slide: new Slide_Picture_ThreeColumn_extra(), number: "1.10" },
            { slide: new Slide_Picture_BeforeAfter_extra(), number: "1.11" },
            { slide: new Slide_Object_System_extra(), number: "1.12" },
            { slide: new Slide_TextLeft_ObjectsRight_extra(), number: "1.13" },
            { slide: new Slide_Statistics_Story_extra(), number: "1.14" },
            { slide: new Slide_MetricCards_4up_extra(), number: "1.15" }
        ];

        const slides = [...titleSlides, ...dividerSlides, ...contentSlides];

        for (const slideConfig of slides) {
            const slideNode = await slideConfig.slide.create({
                x: 0,
                y: 0,
                number: slideConfig.number
            });
            presentation.appendChild(slideNode);
        }

        return presentation;
    }
}

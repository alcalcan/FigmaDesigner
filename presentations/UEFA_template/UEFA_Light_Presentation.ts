import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Layout } from "../../slides/theme";
import { Slide_2Body } from "../../slides/UEFA_Light_template/Slide_2Body";
import { Slide_3Body } from "../../slides/UEFA_Light_template/Slide_3Body";
import { Slide_Body } from "../../slides/UEFA_Light_template/Slide_Body";
import { Slide_Body_Bullets } from "../../slides/UEFA_Light_template/Slide_Body_Bullets";
import { Slide_Bullets } from "../../slides/UEFA_Light_template/Slide_Bullets";
import { Slide_Divider } from "../../slides/UEFA_Light_template/Slide_Divider";
import { Slide_Divider_Blue } from "../../slides/UEFA_Light_template/Slide_Divider_Blue";
import { Slide_Divider_Gray } from "../../slides/UEFA_Light_template/Slide_Divider_Gray";
import { Slide_Divider_Subtle } from "../../slides/UEFA_Light_template/Slide_Divider_Subtle";
import { Slide_Divider_Subtle_Blue } from "../../slides/UEFA_Light_template/Slide_Divider_Subtle_Blue";
import { Slide_Divider_Subtle_Gray } from "../../slides/UEFA_Light_template/Slide_Divider_Subtle_Gray";
import { Slide_Title } from "../../slides/UEFA_Light_template/Slide_Title";

export class UEFA_Light_Presentation extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        const presentation = figma.createFrame();
        // Use the requested naming convention
        presentation.name = "UEFA_Light_template_presentation";

        // Setup Frame properties
        presentation.resize(Layout.SLIDE_WIDTH * 1.5, Layout.SLIDE_HEIGHT + 400); // Dynamic height, fixed width
        presentation.fills = []; // Transparent frame container

        // Auto Layout Setup
        presentation.layoutMode = "HORIZONTAL";
        presentation.primaryAxisSizingMode = "AUTO"; // Hug contents horizontally
        presentation.counterAxisSizingMode = "AUTO"; // Hug contents vertically

        // Generous padding as requested
        presentation.paddingLeft = 200;
        presentation.paddingRight = 200;
        presentation.paddingTop = 200;
        presentation.paddingBottom = 200;

        presentation.itemSpacing = Layout.CONTENT_GAP * 4; // Double the generous gap
        presentation.counterAxisAlignItems = "CENTER";

        // Position
        presentation.x = props.x || 0;
        presentation.y = props.y || 0;

        // --- Slide Injection ---
        // Automatically add all slides from UEFA_Light_template to the presentation
        const slides = [
            new Slide_Title(),
            new Slide_Divider(),
            new Slide_Divider_Blue(),
            new Slide_Divider_Gray(),
            new Slide_Divider_Subtle(),
            new Slide_Divider_Subtle_Blue(),
            new Slide_Divider_Subtle_Gray(),
            new Slide_Body(),
            new Slide_2Body(),
            new Slide_3Body(),
            new Slide_Bullets(),
            new Slide_Body_Bullets()
        ];

        for (const slide of slides) {
            const slideNode = await slide.create({ x: 0, y: 0 });
            presentation.appendChild(slideNode);
        }

        return presentation;
    }
}

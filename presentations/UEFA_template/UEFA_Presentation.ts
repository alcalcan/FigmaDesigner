import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { Colors, Layout } from "../../slides/theme";
import { Slide_Title } from "../../slides/UEFA_Light_template/Slide_Title";
import { Slide_Body } from "../../slides/UEFA_Light_template/Slide_Body";
import { Slide_Divider } from "../../slides/UEFA_Light_template/Slide_Divider";

export class UEFA_Presentation extends BaseComponent {
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
        // Automatically add a sequence of slides to the presentation
        const titleSlide = await new Slide_Title().create({ x: 0, y: 0 });
        presentation.appendChild(titleSlide);

        const dividerSlide = await new Slide_Divider().create({ x: 0, y: 0 });
        presentation.appendChild(dividerSlide);

        const bodySlide = await new Slide_Body().create({ x: 0, y: 0 });
        presentation.appendChild(bodySlide);

        return presentation;
    }
}

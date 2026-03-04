import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { AcademyWelcomeSection } from "./AcademyWelcomeSection";

export class Welcome_Section extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const modern = new AcademyWelcomeSection();
        return modern.create(props);
    }
}

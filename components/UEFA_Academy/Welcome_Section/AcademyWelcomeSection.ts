import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Welcome_Section } from "./Welcome_Section";

export class AcademyWelcomeSection extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const original = new Welcome_Section();
        return original.create(props);
    }
}

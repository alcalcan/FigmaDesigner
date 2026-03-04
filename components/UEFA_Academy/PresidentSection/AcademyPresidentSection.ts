import { BaseComponent } from "../../BaseComponent";
import { PresidentSection, PresidentSectionProps } from "./PresidentSection";

export class AcademyPresidentSection extends BaseComponent {
    async create(props: PresidentSectionProps): Promise<SceneNode> {
        const original = new PresidentSection();
        return original.create(props);
    }
}

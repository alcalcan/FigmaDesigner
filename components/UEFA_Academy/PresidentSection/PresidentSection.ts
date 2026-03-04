import { BaseComponent } from "../../BaseComponent";
import { AcademyPresidentSection, PresidentSectionProps } from "./AcademyPresidentSection";

export type { PresidentSectionProps };

export class PresidentSection extends BaseComponent {
    async create(props: PresidentSectionProps): Promise<SceneNode> {
        const modern = new AcademyPresidentSection();
        return modern.create(props);
    }
}

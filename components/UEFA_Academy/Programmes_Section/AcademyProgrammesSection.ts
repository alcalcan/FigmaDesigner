import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { ProgrammesSection } from "./ProgrammesSection";

export class AcademyProgrammesSection extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const original = new ProgrammesSection();
        return original.create(props);
    }
}

import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { AcademyProgrammesSection } from "./AcademyProgrammesSection";

export class Programmes_Section extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const modern = new AcademyProgrammesSection();
    return modern.create(props);
  }
}

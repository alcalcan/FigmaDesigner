import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { AcademyFooter } from "../../UEFA_Academy/Footer/AcademyFooter";

export class LibraryFooter extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await new AcademyFooter().create(props);
    node.name = "LibraryFooter";
    return node;
  }
}

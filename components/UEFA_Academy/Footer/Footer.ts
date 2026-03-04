import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { AcademyFooter } from "./AcademyFooter";

export class Footer extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const modern = new AcademyFooter();
        return modern.create(props);
    }
}

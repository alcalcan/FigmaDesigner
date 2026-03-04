import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { AcademyHeader } from "./AcademyHeader";

export class Header extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const modern = new AcademyHeader();
        return modern.create(props);
    }
}

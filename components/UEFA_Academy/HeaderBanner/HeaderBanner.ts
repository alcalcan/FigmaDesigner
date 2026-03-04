import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { AcademyHeaderBanner } from "./AcademyHeaderBanner";

export class HeaderBanner extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const modern = new AcademyHeaderBanner();
        return modern.create(props);
    }
}

import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { AcademyMission } from "./AcademyMission";

export class Mission extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const modern = new AcademyMission();
        return modern.create(props);
    }
}

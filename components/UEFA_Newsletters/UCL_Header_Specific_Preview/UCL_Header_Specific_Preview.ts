import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { UCL_Newsletter_Header } from "../UCL_Newsletter_Header/UCL_Newsletter_Header";

export class UCL_Newsletter_Header_Specific_Preview extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const header = await new UCL_Newsletter_Header().create({});
    header.name = "UCL_Newsletter_Header_Specific_Preview";
    header.x = props.x ?? 0;
    header.y = props.y ?? 0;
    return header;
  }
}

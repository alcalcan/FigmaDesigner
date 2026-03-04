import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneNotificationSubSection } from "../shared/LibraryNotificationSourceHelpers";

export class LibraryNotificationSection extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const sectionIndex = Number.isInteger(props.sectionIndex) ? props.sectionIndex : 0;
    const node = await cloneNotificationSubSection(sectionIndex, props);
    node.name = `LibraryNotificationSection-${sectionIndex + 1}`;
    return node;
  }
}

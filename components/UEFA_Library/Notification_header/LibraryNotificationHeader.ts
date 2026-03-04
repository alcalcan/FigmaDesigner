import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneNotificationSection, LIBRARY_NOTIFICATION_SECTION_PATHS } from "../shared/LibraryNotificationSourceHelpers";

export class LibraryNotificationHeader extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneNotificationSection(LIBRARY_NOTIFICATION_SECTION_PATHS.HEADER, props);
    node.name = "LibraryNotificationHeader";
    return node;
  }
}

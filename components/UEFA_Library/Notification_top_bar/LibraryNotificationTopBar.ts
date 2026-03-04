import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneNotificationSection, LIBRARY_NOTIFICATION_SECTION_PATHS } from "../shared/LibraryNotificationSourceHelpers";

export class LibraryNotificationTopBar extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneNotificationSection(LIBRARY_NOTIFICATION_SECTION_PATHS.TOP_BAR, props);
    node.name = "LibraryNotificationTopBar";
    return node;
  }
}

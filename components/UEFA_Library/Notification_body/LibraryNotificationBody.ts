import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneNotificationSection, LIBRARY_NOTIFICATION_SECTION_PATHS } from "../shared/LibraryNotificationSourceHelpers";

export class LibraryNotificationBody extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneNotificationSection(LIBRARY_NOTIFICATION_SECTION_PATHS.BODY, props);
    node.name = "LibraryNotificationBody";
    return node;
  }
}

import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneNotificationSection, LIBRARY_NOTIFICATION_SECTION_PATHS } from "../shared/LibraryNotificationSourceHelpers";

export class LibraryNotificationFooter extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneNotificationSection(LIBRARY_NOTIFICATION_SECTION_PATHS.FOOTER, props);
    node.name = "LibraryNotificationFooter";
    return node;
  }
}

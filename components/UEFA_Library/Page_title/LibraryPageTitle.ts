import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";
import { cloneNotificationSection, LIBRARY_NOTIFICATION_SECTION_PATHS } from "../shared/LibraryNotificationSourceHelpers";

export class LibraryPageTitle extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const variant = String(props.variant ?? "landing");
    const node = variant === "notification"
      ? await cloneNotificationSection(LIBRARY_NOTIFICATION_SECTION_PATHS.TITLE_BAR_WITH_CTA, props)
      : await cloneProposalSection(LIBRARY_SECTION_PATHS.PAGE_TITLE, props);
    node.name = "LibraryPageTitle";

    if ("layoutMode" in node && node.layoutMode === "HORIZONTAL") {
      node.primaryAxisAlignItems = "CENTER";
    }

    return node;
  }
}

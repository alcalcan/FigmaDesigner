import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";

export class LibraryPageTitle extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.PAGE_TITLE, props);
    node.name = "LibraryPageTitle";

    if ("layoutMode" in node && node.layoutMode === "HORIZONTAL") {
      node.primaryAxisAlignItems = "CENTER";
    }

    return node;
  }
}

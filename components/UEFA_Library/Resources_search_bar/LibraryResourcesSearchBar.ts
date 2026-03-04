import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";

export class LibraryResourcesSearchBar extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.RESOURCE_SEARCH_BAR, props);
    node.name = "LibraryResourcesSearchBar";
    return node;
  }
}

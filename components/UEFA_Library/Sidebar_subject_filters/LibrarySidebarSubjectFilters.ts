import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";

export class LibrarySidebarSubjectFilters extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.SIDEBAR_SUBJECT_FILTERS, props);
    node.name = "LibrarySidebarSubjectFilters";
    return node;
  }
}

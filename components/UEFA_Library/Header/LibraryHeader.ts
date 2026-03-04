import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";

export class LibraryHeader extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.HEADER, props);
    node.name = "LibraryHeader";
    return node;
  }
}

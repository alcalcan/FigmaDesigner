import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";
import { hydrateTextFromNodeNames } from "../shared/LibraryTextHydration";

export class LibraryArticlesSection extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.RELATED_SECTION, props);
    node.name = "LibraryArticlesSection";
    await hydrateTextFromNodeNames(node);
    return node;
  }
}

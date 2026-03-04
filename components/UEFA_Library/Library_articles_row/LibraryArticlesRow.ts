import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";
import { hydrateTextFromNodeNames } from "../shared/LibraryTextHydration";

export class LibraryArticlesRow extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.RELATED_CARDS_ROW, props);
    node.name = "LibraryArticlesRow";
    await hydrateTextFromNodeNames(node);
    return node;
  }
}

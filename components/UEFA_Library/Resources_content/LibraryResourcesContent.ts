import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";
import { hydrateTextFromNodeNames } from "../shared/LibraryTextHydration";

export class LibraryResourcesContent extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.MAIN_CONTENT, props);
    node.name = "LibraryResourcesContent";
    await hydrateTextFromNodeNames(node);
    return node;
  }
}

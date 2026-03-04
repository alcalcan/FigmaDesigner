import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";
import { hydrateTextFromNodeNames } from "../shared/LibraryTextHydration";

const FEATURE_CARD_PATHS = [
  LIBRARY_SECTION_PATHS.RESOURCE_CARD_1,
  LIBRARY_SECTION_PATHS.RESOURCE_CARD_2,
  LIBRARY_SECTION_PATHS.RESOURCE_CARD_3
] as const;

export class LibraryFeatureCard extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const rawIndex = typeof props.cardIndex === "number" ? props.cardIndex : 0;
    const safeIndex = Math.max(0, Math.min(FEATURE_CARD_PATHS.length - 1, rawIndex));

    const node = await cloneProposalSection(FEATURE_CARD_PATHS[safeIndex], props);
    node.name = `LibraryFeatureCard_${safeIndex + 1}`;
    await hydrateTextFromNodeNames(node);
    return node;
  }
}

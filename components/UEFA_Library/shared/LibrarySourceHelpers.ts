import { ComponentProps } from "../../BaseComponent";
import { Proposal_notification } from "../Proposal_notification/Proposal_notification";
import { normalizeLibraryLayerNames } from "./LibraryLayerNaming";

type SceneNodeWithPosition = SceneNode & {
  x: number;
  y: number;
};

export const LIBRARY_SECTION_PATHS = {
  TOP_BAR: [0, 0],
  HEADER: [0, 1],
  INFO_BANNER: [0, 2],
  PAGE_TITLE: [0, 3],
  MAIN_CONTENT: [0, 4],
  MAIN_CONTENT_LEFT: [0, 4, 0],
  MAIN_CONTENT_SIDEBAR: [0, 4, 1],
  SIDEBAR_SUBJECT_FILTERS: [0, 4, 1, 5],
  RESOURCE_SEARCH_BAR: [0, 4, 0, 0],
  RESOURCE_PAGINATION: [0, 4, 0, 4],
  DIVIDER: [0, 5],
  RELATED_TITLE: [0, 6],
  RELATED_SECTION: [0, 7],
  RELATED_INTRO: [0, 7, 0],
  RELATED_CARDS_ROW: [0, 7, 1],
  FOOTER: [0, 8],
  RESOURCE_CARD_1: [0, 4, 0, 1],
  RESOURCE_CARD_2: [0, 4, 0, 2],
  RESOURCE_CARD_3: [0, 4, 0, 3],
  RELATED_CARD_1: [0, 7, 1, 0],
  RELATED_CARD_2: [0, 7, 1, 1],
  RELATED_CARD_3: [0, 7, 1, 2],
  RELATED_CARD_4: [0, 7, 1, 3]
} as const;

function getChildAtPath(root: SceneNode, path: readonly number[]): SceneNode {
  let current: SceneNode = root;

  for (const index of path) {
    if (!("children" in current)) {
      throw new Error(`Node "${current.name}" has no children at path index ${index}.`);
    }

    const child = current.children[index];
    if (!child) {
      throw new Error(`Missing child index ${index} on node "${current.name}".`);
    }

    current = child;
  }

  return current;
}

let cachedSource: SceneNode | null = null;

export async function cloneProposalSection(path: readonly number[], props: ComponentProps): Promise<SceneNodeWithPosition> {
  if (!cachedSource) {
    cachedSource = await new Proposal_notification().create({ x: 0, y: 0 });
    // Keep it hidden to avoid accidentally ending up visible anywhere if mistakenly parented
    cachedSource.visible = false;
  }

  const section = getChildAtPath(cachedSource, path);
  if (!("clone" in (section as unknown as { clone?: () => SceneNode }))) {
    throw new Error(`Node "${(section as SceneNode).name}" cannot be cloned.`);
  }

  const clone = section.clone() as SceneNodeWithPosition;
  normalizeLibraryLayerNames(clone);

  clone.x = props.x ?? 0;
  clone.y = props.y ?? 0;
  clone.visible = true; // Ensure the clone is visible

  return clone;
}

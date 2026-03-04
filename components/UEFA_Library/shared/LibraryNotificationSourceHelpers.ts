import { ComponentProps } from "../../BaseComponent";
import { Notification_Page } from "../../capture_NotificationPage/Notification_Page/Notification_Page";
import { normalizeLibraryLayerNames } from "./LibraryLayerNaming";

type SceneNodeWithPosition = SceneNode & {
  x: number;
  y: number;
};

export const LIBRARY_NOTIFICATION_SECTION_PATHS = {
  TOP_SPACER: [0, 2],
  BODY: [0, 3],
  BODY_CONTENT: [0, 3, 0],
  PREFERENCES_CARD: [0, 3, 0, 0],
  PREFERENCES_CONTENT: [0, 3, 0, 0, 0],
  TITLE_BAR_WITH_CTA: [0, 3, 0, 0, 0, 0],
  DIVIDER: [0, 3, 0, 0, 0, 1],
  SECTION_1: [0, 3, 0, 0, 0, 2],
  SECTION_2: [0, 3, 0, 0, 0, 3],
  SECTION_3: [0, 3, 0, 0, 0, 4],
  SECTION_4: [0, 3, 0, 0, 0, 5],
  FOOTER_DIVIDER: [0, 3, 0, 0, 0, 6],
  BOTTOM_BAR: [0, 3, 0, 0, 0, 7]
} as const;

const NOTIFICATION_SUBSECTION_PATHS = [
  LIBRARY_NOTIFICATION_SECTION_PATHS.SECTION_1,
  LIBRARY_NOTIFICATION_SECTION_PATHS.SECTION_2,
  LIBRARY_NOTIFICATION_SECTION_PATHS.SECTION_3,
  LIBRARY_NOTIFICATION_SECTION_PATHS.SECTION_4
] as const;

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

async function getSourceRoot(): Promise<SceneNode> {
  if (!cachedSource) {
    cachedSource = await new Notification_Page().create({ x: 0, y: 0 });
    cachedSource.visible = false;
  }

  return cachedSource;
}

export async function cloneNotificationSection(path: readonly number[], props: ComponentProps): Promise<SceneNodeWithPosition> {
  const source = await getSourceRoot();
  const section = getChildAtPath(source, path);

  if (!("clone" in (section as unknown as { clone?: () => SceneNode }))) {
    throw new Error(`Node "${section.name}" cannot be cloned.`);
  }

  const clone = section.clone() as SceneNodeWithPosition;
  normalizeLibraryLayerNames(clone);

  clone.x = props.x ?? 0;
  clone.y = props.y ?? 0;
  clone.visible = true;

  return clone;
}

export async function cloneNotificationSubSection(sectionIndex: number, props: ComponentProps): Promise<SceneNodeWithPosition> {
  if (!Number.isInteger(sectionIndex) || sectionIndex < 0 || sectionIndex >= NOTIFICATION_SUBSECTION_PATHS.length) {
    throw new Error(`sectionIndex must be in range 0..${NOTIFICATION_SUBSECTION_PATHS.length - 1}. Received: ${sectionIndex}`);
  }

  return cloneNotificationSection(NOTIFICATION_SUBSECTION_PATHS[sectionIndex], props);
}

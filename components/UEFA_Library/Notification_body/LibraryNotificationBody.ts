import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { LibraryPageTitle } from "../Page_title/LibraryPageTitle";
import { LibraryNotificationSection } from "../Notification_section/LibraryNotificationSection";
import { cloneNotificationSection, LIBRARY_NOTIFICATION_SECTION_PATHS } from "../shared/LibraryNotificationSourceHelpers";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";

type ChildContainerNode = SceneNode & ChildrenMixin;

const TITLE_BAR_RELATIVE_PATH = [0, 0, 0, 0] as const;
const SUBJECT_SECTION_RELATIVE_PATH = [0, 0, 0, 2] as const;
const ORGANISATIONS_SECTION_RELATIVE_PATH = [0, 0, 0, 3] as const;
const UPLOADED_BY_SECTION_RELATIVE_PATH = [0, 0, 0, 4] as const;
const PROGRAMS_SECTION_RELATIVE_PATH = [0, 0, 0, 5] as const;
const SUBJECT_OPTIONS = [
  { label: "Anti-Doping, Medical and Health", checked: false },
  { label: "Communities", checked: false },
  { label: "Financial Sustainability", checked: false },
  { label: "Football Leadership and Management", checked: false },
  { label: "Innovation, Data and AI", checked: false },
  { label: "Institutional Affairs", checked: false },
  { label: "Legal and Compliance", checked: false },
  { label: "Marketing and Sponsorship", checked: false },
  { label: "PI", checked: false },
  { label: "Technical and Performance", checked: false }
];

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

export class LibraryNotificationBody extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneNotificationSection(LIBRARY_NOTIFICATION_SECTION_PATHS.BODY, props);
    const titleBarParent = getChildAtPath(node, TITLE_BAR_RELATIVE_PATH.slice(0, -1)) as ChildContainerNode;
    const titleBarIndex = TITLE_BAR_RELATIVE_PATH[TITLE_BAR_RELATIVE_PATH.length - 1];
    const oldTitleBar = titleBarParent.children[titleBarIndex];
    const rebuiltTitleBar = await new LibraryPageTitle().create({
      variant: "notification",
      title: "Notification preferences",
      subtitle: "Choose what you want to receive updates about",
      width: 1392,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0
    });
    rebuiltTitleBar.name = "NotificationTitleBar";
    titleBarParent.insertChild(titleBarIndex, rebuiltTitleBar);
    oldTitleBar.remove();

    const sectionParent = getChildAtPath(node, SUBJECT_SECTION_RELATIVE_PATH.slice(0, -1)) as ChildContainerNode;
    const sectionIndex = SUBJECT_SECTION_RELATIVE_PATH[SUBJECT_SECTION_RELATIVE_PATH.length - 1];
    const oldSubjectSection = sectionParent.children[sectionIndex];
    const subjectSection = await new LibraryNotificationSection().create({
      title: "Subject",
      expanded: true,
      selectedLabel: "Subjects",
      selectedCount: 0,
      showChevronButton: true,
      options: SUBJECT_OPTIONS
    });
    subjectSection.name = "SubjectNotificationSection";
    sectionParent.insertChild(sectionIndex, subjectSection);
    oldSubjectSection.remove();

    await this.replaceSection(node, ORGANISATIONS_SECTION_RELATIVE_PATH, {
      title: "Organisations",
      expanded: false,
      selectedLabel: "Organisations",
      selectedCount: 0,
      showChevronButton: true
    }, "OrganisationsNotificationSection");

    await this.replaceSection(node, UPLOADED_BY_SECTION_RELATIVE_PATH, {
      title: "Uploaded by",
      expanded: false,
      selectedLabel: "Uploaders",
      selectedCount: 0,
      showChevronButton: true
    }, "UploadedByNotificationSection");

    await this.replaceSection(node, PROGRAMS_SECTION_RELATIVE_PATH, {
      title: "My programs",
      expanded: false,
      selectedLabel: "Programs",
      selectedCount: 0,
      showChevronButton: true
    }, "ProgramsNotificationSection");

    node.name = "LibraryNotificationBody";
    normalizeLibraryLayerNames(node);
    return node;
  }

  private async replaceSection(
    root: SceneNode,
    relativePath: readonly number[],
    sectionProps: Parameters<LibraryNotificationSection["create"]>[0],
    replacementName: string
  ): Promise<void> {
    const parent = getChildAtPath(root, relativePath.slice(0, -1)) as ChildContainerNode;
    const index = relativePath[relativePath.length - 1];
    const oldSection = parent.children[index];
    const replacement = await new LibraryNotificationSection().create(sectionProps);
    replacement.name = replacementName;
    parent.insertChild(index, replacement);
    oldSection.remove();
  }
}

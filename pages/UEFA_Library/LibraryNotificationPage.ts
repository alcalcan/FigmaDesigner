import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { LibraryFooter } from "../../components/UEFA_Library/Footer/LibraryFooter";
import { LibraryHeader } from "../../components/UEFA_Library/Header/LibraryHeader";
import { LibraryNotificationBody } from "../../components/UEFA_Library/Notification_body/LibraryNotificationBody";
import { LibraryNotificationBodySpacer } from "../../components/UEFA_Library/Notification_body_spacer/LibraryNotificationBodySpacer";
import { LibraryNotificationBottomBar } from "../../components/UEFA_Library/Notification_bottom_bar/LibraryNotificationBottomBar";
import { LibraryNotificationSection } from "../../components/UEFA_Library/Notification_section/LibraryNotificationSection";
import { LibraryPageTitle } from "../../components/UEFA_Library/Page_title/LibraryPageTitle";
import { LibraryTopBar } from "../../components/UEFA_Library/Top_bar/LibraryTopBar";

export class LibraryNotificationPage extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const root = figma.createFrame();
    root.name = "Library notification page";
    root.layoutMode = "VERTICAL";
    root.itemSpacing = 0;
    root.primaryAxisSizingMode = "AUTO";
    root.counterAxisSizingMode = "FIXED";
    root.resize(1680, 100);
    root.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    root.clipsContent = false;

    const topBar = await new LibraryTopBar().create({ x: 0, y: 0 });
    const header = await new LibraryHeader().create({ x: 0, y: 0 });
    const spacer = await new LibraryNotificationBodySpacer().create({ x: 0, y: 0 });
    const body = await new LibraryNotificationBody().create({ x: 0, y: 0 });
    await this.replaceBodySections(body);
    const footer = await new LibraryFooter().create({ x: 0, y: 0 });

    const sections: SceneNode[] = [topBar, header, spacer, body, footer];
    for (const section of sections) {
      this.enforceWidth(section, 1680);
      root.appendChild(section);
    }

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }

  private async replaceBodySections(body: SceneNode): Promise<void> {
    const content = this.getChildAtPath(body, [0, 0, 0]) as FrameNode;

    const titleBar = await new LibraryPageTitle().create({ x: 0, y: 0, variant: "notification" });
    this.replaceAt(content, 0, titleBar);

    for (let sectionIndex = 0; sectionIndex < 4; sectionIndex += 1) {
      const section = await new LibraryNotificationSection().create({ x: 0, y: 0, sectionIndex });
      this.replaceAt(content, 2 + sectionIndex, section);
    }

    const bottomBar = await new LibraryNotificationBottomBar().create({ x: 0, y: 0 });
    this.replaceAt(content, 7, bottomBar);
  }

  private replaceAt(parent: FrameNode, index: number, replacement: SceneNode): void {
    const current = parent.children[index];
    if (!current) {
      throw new Error(`Cannot replace missing child at index ${index} in ${parent.name}.`);
    }

    parent.insertChild(index, replacement);
    current.remove();
  }

  private getChildAtPath(root: SceneNode, path: readonly number[]): SceneNode {
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

  private enforceWidth(node: SceneNode, width: number): void {
    if ("resize" in node) {
      node.resize(width, node.height);
    }
    if ("layoutAlign" in node) {
      node.layoutAlign = "STRETCH";
    }
  }
}

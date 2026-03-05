import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { LibraryFooter } from "../../components/UEFA_Library/Footer/LibraryFooter";
import { LibraryHeader } from "../../components/UEFA_Library/Header/LibraryHeader";
import { LibraryNotificationBody } from "../../components/UEFA_Library/Notification_body/LibraryNotificationBody";
import { LibraryNotificationBodySpacer } from "../../components/UEFA_Library/Notification_body_spacer/LibraryNotificationBodySpacer";
import { LibraryTopBar } from "../../components/UEFA_Library/Top_bar/LibraryTopBar";
import { normalizeLibraryLayerNames } from "../../components/UEFA_Library/shared/LibraryLayerNaming";

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
    const header = await new LibraryHeader().create({
      x: 0,
      y: 0,
      title: "Notifications",
      subtitle: "Second line for text description"
    });
    const spacer = await new LibraryNotificationBodySpacer().create({ x: 0, y: 0 });
    const body = await new LibraryNotificationBody().create({ x: 0, y: 0 });
    const footer = await new LibraryFooter().create({ x: 0, y: 0 });

    for (const section of [topBar, header, spacer, body, footer]) {
      this.enforceWidth(section, 1680);
      root.appendChild(section);
    }

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);
    return root;
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

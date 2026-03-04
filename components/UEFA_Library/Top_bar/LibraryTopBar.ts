import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { Top_bar } from "../../UEFA_Academy_online/Top_bar/Top_bar";

export interface LibraryTopBarProps extends ComponentProps {
  sectionLabel?: string;
  userName?: string;
  showNotificationDot?: boolean;
}

export class LibraryTopBar extends BaseComponent {
  async create(props: LibraryTopBarProps): Promise<SceneNode> {
    const node = await new Top_bar().create(props);
    node.name = "LibraryTopBar";

    this.updateTextNode(node, "Resources", props.sectionLabel ?? "Resources");
    this.updateTextNode(node, "John Doe", props.userName ?? "John Doe");
    this.setNodeVisibility(node, "Ellipse 1", props.showNotificationDot ?? true);

    return node;
  }

  private updateTextNode(root: SceneNode, nodeName: string, value: string): void {
    const node = this.findNodeByName(root, nodeName);
    if (node && node.type === "TEXT") {
      node.characters = value;
    }
  }

  private setNodeVisibility(root: SceneNode, nodeName: string, visible: boolean): void {
    const node = this.findNodeByName(root, nodeName);
    if (node) {
      node.visible = visible;
    }
  }

  private findNodeByName(root: SceneNode, name: string): SceneNode | null {
    if (root.name === name) {
      return root;
    }
    if (!("children" in root)) {
      return null;
    }
    for (const child of root.children) {
      const match = this.findNodeByName(child, name);
      if (match) {
        return match;
      }
    }
    return null;
  }
}

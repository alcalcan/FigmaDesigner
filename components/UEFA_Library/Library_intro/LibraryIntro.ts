import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";

export class LibraryIntro extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.RELATED_INTRO, props);
    node.name = "LibraryIntro";
    this.repairCollapsedWidths(node);
    if (props.fullWidth) {
      this.enforceFullWidthLayout(node, Number(props.fullWidthWidth) || 1680);
    } else {
      this.enforceNaturalHugWidth(node);
    }
    return node;
  }

  private repairCollapsedWidths(node: SceneNode): void {
    if (!("layoutMode" in node)) return;
    if ("width" in node && node.width <= 1) {
      node.counterAxisSizingMode = "AUTO";
    }

    if (!("children" in node)) return;
    const content = node.children[0];
    if (!content || !("layoutMode" in content) || !("width" in content)) return;
    if (content.width <= 1) {
      content.counterAxisSizingMode = "AUTO";
    }
  }

  private enforceNaturalHugWidth(node: SceneNode): void {
    if (!("layoutMode" in node)) return;
    node.primaryAxisSizingMode = "AUTO";
    node.layoutAlign = "INHERIT";
    node.layoutGrow = 0;
  }

  private enforceFullWidthLayout(node: SceneNode, width: number): void {
    if (!("layoutMode" in node)) return;
    node.layoutAlign = "STRETCH";
    node.layoutGrow = 0;
    node.primaryAxisSizingMode = "AUTO";
    node.counterAxisSizingMode = "FIXED";
    if ("resize" in node) {
      node.resize(width, node.height);
    }

    if (!("children" in node)) return;
    const content = node.children[0];
    if (!content || !("layoutMode" in content)) return;
    content.layoutAlign = "STRETCH";
    content.layoutGrow = 0;
    content.counterAxisSizingMode = "FIXED";
    content.primaryAxisSizingMode = "AUTO";
    if ("resize" in content) {
      content.resize(width, content.height);
    }
  }
}

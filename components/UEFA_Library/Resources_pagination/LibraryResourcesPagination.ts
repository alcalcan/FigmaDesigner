import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";

export class LibraryResourcesPagination extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.RESOURCE_PAGINATION, props);
    node.name = "LibraryResourcesPagination";
    this.centerItemsPerPageCaret(node);
    return node;
  }

  private centerItemsPerPageCaret(node: SceneNode): void {
    if (!("children" in node)) return;

    const row = node.children.find((child) => child.name === "Items per page");
    if (!row || !("layoutMode" in row) || row.layoutMode !== "HORIZONTAL") return;
    row.counterAxisAlignItems = "CENTER";

    const dropdown = "children" in row ? row.children.find((child) => child.name === "Default") : undefined;
    if (!dropdown || !("layoutMode" in dropdown) || dropdown.layoutMode !== "HORIZONTAL") return;
    dropdown.counterAxisAlignItems = "CENTER";

    const inner = "children" in dropdown ? dropdown.children.find((child) => child.name === "Inner") : undefined;
    if (!inner || !("layoutMode" in inner) || inner.layoutMode !== "HORIZONTAL") return;
    inner.counterAxisAlignItems = "CENTER";

    const icon = "children" in inner ? inner.children.find((child) => child.name === "Icon") : undefined;
    if (!icon || !("children" in icon) || icon.children.length === 0) return;

    const glyph = icon.children[0];
    if (!("height" in icon) || !("height" in glyph) || !("y" in glyph)) return;
    glyph.y = Math.max(0, (icon.height - glyph.height) / 2);
  }
}

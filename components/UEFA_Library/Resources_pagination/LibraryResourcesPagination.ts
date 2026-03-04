import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { cloneProposalSection, LIBRARY_SECTION_PATHS } from "../shared/LibrarySourceHelpers";

export class LibraryResourcesPagination extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const node = await cloneProposalSection(LIBRARY_SECTION_PATHS.RESOURCE_PAGINATION, props);
    node.name = "LibraryResourcesPagination";
    this.fixPaginationAlignmentAndIcons(node);
    return node;
  }

  private fixPaginationAlignmentAndIcons(node: SceneNode): void {
    if (!("children" in node)) return;

    // 1. Center align everything vertically that is laid out horizontally
    const centerAlign = (n: any) => {
      if (n.layoutMode === "HORIZONTAL") {
        n.counterAxisAlignItems = "CENTER";
      }
      if ("children" in n && Array.isArray(n.children)) {
        n.children.forEach(centerAlign);
      }
    };
    centerAlign(node);

    // 2. Fix the Items per page dropdown caret specifically
    const row = node.children.find((child) => child.name === "Items per page");
    if (row && "children" in row) {
      const dropdown = row.children.find((child) => child.name === "Default");
      if (dropdown && "children" in dropdown) {
        const inner = dropdown.children.find((child) => child.name === "Inner");
        if (inner && "children" in inner) {
          const icon = inner.children.find((child) => child.name === "Icon");
          if (icon && "layoutMode" in icon && icon.layoutMode !== "NONE") {
            icon.primaryAxisAlignItems = "CENTER";
          }
          if (icon && "children" in icon && icon.children.length > 0) {
            const glyph = icon.children[0] as any;
            if ("constraints" in glyph) {
              glyph.constraints = { horizontal: "CENTER", vertical: "CENTER" };
            }
            if ("layoutAlign" in glyph) {
              glyph.layoutAlign = "INHERIT";
            }
            if ("height" in icon && "height" in glyph && "y" in glyph) {
              glyph.y = Math.max(0, (icon.height - glyph.height) / 2);
            }
          }
        }
      }
    }

    // 3. Fix the pagination chevrons (make them point in opposite directions)
    const rightNav = node.children.find((child) => child.name === "Default" && "children" in child && child.children.length === 5);
    if (rightNav && "children" in rightNav) {
      const leftChevron = rightNav.children[1];
      const rightChevron = rightNav.children[3];

      // Both are pointing the same way. We rotate the right one 180 degrees.
      if (rightChevron && "children" in rightChevron && rightChevron.children.length > 0) {
        const glyph = rightChevron.children[0] as any;
        if ("rotation" in glyph) {
          glyph.rotation = 180;
          if ("x" in glyph && "width" in glyph) {
            glyph.x += glyph.width;
          }
          if ("y" in glyph && "height" in glyph) {
            glyph.y += glyph.height;
          }
        }
      }
    }
  }
}

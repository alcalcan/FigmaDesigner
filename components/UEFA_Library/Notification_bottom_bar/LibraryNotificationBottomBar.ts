import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createText } from "../../ComponentHelpers";

export class LibraryNotificationBottomBar extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("Notification Bottom Bar", {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "SPACE_BETWEEN",
      counterAxisAlignItems: "CENTER",
      paddingTop: 24,
      fills: [],
      layoutSizingHorizontal: "FILL",
      layoutSizingVertical: "HUG",
      layoutProps: { width: 1440 }
    }, [
      createFrame("Compact Search", {
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        itemSpacing: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        cornerRadius: 20,
        strokes: [{ type: "SOLID", color: { r: 0.808, g: 0.847, b: 0.859 } }],
        fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
        layoutProps: { width: 220 }
      }, [
        createText("Compact Placeholder", "Placeh❌older", 14, "Regular", { r: 0.388, g: 0.478, b: 0.522 }, {
          font: { family: "Open Sans", style: "Regular" }
        })
      ]),
      createFrame("Grow Toggle", {
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        itemSpacing: 8,
        fills: []
      }, [
        createText("Checkbox", "▢", 16, "Regular", { r: 0.102, g: 0.192, b: 0.235 }, { font: { family: "Open Sans", style: "Regular" } }),
        createText("Toggle Label", "Grow", 14, "Regular", { r: 0.102, g: 0.192, b: 0.235 }, { font: { family: "Open Sans", style: "Regular" } })
      ])
    ]);

    const root = await this.renderDefinition(structure);
    root.name = "LibraryNotificationBottomBar";
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);
    return root;
  }
}

import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame } from "../../ComponentHelpers";

export class LibraryNotificationBodySpacer extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("Notification Body Spacer", {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      paddingTop: 32,
      paddingRight: 120,
      paddingBottom: 8,
      paddingLeft: 120,
      fills: [],
      layoutSizingHorizontal: "FILL",
      layoutSizingVertical: "HUG",
      layoutProps: { width: 1680, height: 80 }
    }, []);

    const root = await this.renderDefinition(structure);
    root.name = "LibraryNotificationBodySpacer";
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);
    return root;
  }
}

import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createText } from "../../ComponentHelpers";

export interface LibraryResourcesTitleProps extends ComponentProps {
  title?: string;
}

export class LibraryResourcesTitle extends BaseComponent {
  async create(props: LibraryResourcesTitleProps): Promise<SceneNode> {
    const title = props.title ?? "Related resources";

    const structure: NodeDefinition = createFrame("Library Resources Title", {
      layoutMode: "HORIZONTAL",
      itemSpacing: 8,
      paddingRight: 120,
      paddingBottom: 8,
      paddingLeft: 120,
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      layoutAlign: "STRETCH",
      layoutProps: {
        parentIsAutoLayout: true,
        layoutPositioning: "AUTO",
        width: 1680,
        height: 48,
        relativeTransform: [[1, 0, 0], [0, 1, 1642]],
        constraints: { horizontal: "MIN", vertical: "MIN" }
      }
    }, [
      createText("Title", title, 32, "Regular", { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, {
        font: { family: "Open Sans", style: "Regular" },
        textAlignHorizontal: "LEFT",
        textAlignVertical: "CENTER",
        textAutoResize: "WIDTH_AND_HEIGHT"
      })
    ]);

    const root = await this.renderDefinition(structure);
    root.name = "LibraryResourcesTitle";
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);
    return root;
  }
}

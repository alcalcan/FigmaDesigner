import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export interface LibraryPageTitleProps extends ComponentProps {
  title?: string;
  variant?: "resources" | "notification";
}

export class LibraryPageTitle extends BaseComponent {
  async create(props: LibraryPageTitleProps): Promise<SceneNode> {
    const variant = props.variant ?? "resources";
    const title = props.title ?? (variant === "notification" ? "Notification preferences" : "Resources");

    const structure: NodeDefinition = createFrame("Library Page Title", {
      layoutMode: "HORIZONTAL",
      itemSpacing: 8,
      paddingTop: 32,
      paddingRight: 120,
      paddingBottom: 8,
      paddingLeft: 120,
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "SPACE_BETWEEN",
      counterAxisAlignItems: "CENTER",
      layoutAlign: "STRETCH",
      layoutProps: {
        parentIsAutoLayout: true,
        layoutPositioning: "AUTO",
        width: 1680,
        height: 80,
        relativeTransform: [[1, 0, 0], [0, 1, 314]],
        constraints: { horizontal: "MIN", vertical: "MIN" }
      }
    }, [
      createText("Title", title, 32, "Regular", { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, {
        font: { family: "Open Sans", style: "Regular" },
        lineHeight: { unit: "PIXELS", value: 40 },
        textAlignHorizontal: "LEFT",
        textAlignVertical: "CENTER",
        textAutoResize: "WIDTH_AND_HEIGHT"
      })
    ]);

    const root = await this.renderDefinition(structure);
    root.name = "LibraryPageTitle";
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

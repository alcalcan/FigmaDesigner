import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createLine } from "../../ComponentHelpers";

export class LibraryDivider extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("Library Divider", {
      layoutMode: "VERTICAL",
      itemSpacing: 8,
      paddingTop: 32,
      paddingRight: 120,
      paddingBottom: 32,
      paddingLeft: 120,
      primaryAxisSizingMode: "AUTO",
      layoutAlign: "STRETCH",
      layoutProps: {
        parentIsAutoLayout: true,
        layoutPositioning: "AUTO",
        width: 1680,
        height: 64,
        relativeTransform: [[1, 0, 0], [0, 1, 1578]],
        constraints: { horizontal: "MIN", vertical: "MIN" }
      }
    }, [
      createLine("Divider Line", {
        layoutAlign: "STRETCH",
        strokeAlign: "CENTER",
        strokeWeight: 1,
        strokes: [
          {
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            type: "SOLID",
            color: { r: 0.8901960849761963, g: 0.9098039269447327, b: 0.9176470637321472 },
            boundVariables: {}
          }
        ],
        layoutProps: {
          parentIsAutoLayout: true,
          layoutPositioning: "AUTO",
          width: 1440,
          height: 0,
          relativeTransform: [[1, 0, 120], [0, 1, 32]],
          constraints: { horizontal: "MIN", vertical: "MIN" }
        }
      })
    ]);

    const root = await this.renderDefinition(structure);
    root.name = "LibraryDivider";
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export class LeagueStandingsCta extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const label = String(props.text ?? "See full table");

    const structure: NodeDefinition = createFrame(
      "League CTA",
      {
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "CENTER",
        counterAxisAlignItems: "CENTER",
        fills: [],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 512, height: 48 }
      },
      [
        createFrame(
          "pk-button",
          {
            layoutMode: "VERTICAL",
            itemSpacing: 8,
            paddingTop: 14,
            paddingRight: 16,
            paddingBottom: 14,
            paddingLeft: 16,
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "FIXED",
            primaryAxisAlignItems: "MIN",
            counterAxisAlignItems: "CENTER",
            fills: [],
            strokes: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0, g: 0.9333333373069763, b: 1 } }],
            cornerRadius: 8,
            layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 296, height: 48 }
          },
          [
            createText("Label", label, 20, "SemiBold", { r: 0, g: 0.9333333373069763, b: 1 }, {
              font: { family: "Manrope", style: "SemiBold" },
              textAlignHorizontal: "CENTER",
              textAutoResize: "HEIGHT",
              lineHeight: { unit: "PERCENT", value: 100 },
              layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 264, height: 20 }
            })
          ]
        )
      ]
    );

    return this.renderDefinition(structure);
  }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export class ResultsCta extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const label = String(props.text ?? "See all results");
    const filled = Boolean(props.filled ?? false);

    const structure: NodeDefinition = createFrame(
      "Results CTA",
      {
        layoutMode: "HORIZONTAL",
        itemSpacing: 0,
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
            fills: filled ? [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0, g: 0.9333333373069763, b: 1 } }] : [],
            strokes: filled ? [] : [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0, g: 0.9333333373069763, b: 1 } }],
            cornerRadius: 8,
            layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 296, height: 48 }
          },
          [
            createText("CTA Label", label, 20, "SemiBold", filled ? { r: 0.003921568859368563, g: 0.003921568859368563, b: 0.19607843458652496 } : { r: 0, g: 0.9333333373069763, b: 1 }, {
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

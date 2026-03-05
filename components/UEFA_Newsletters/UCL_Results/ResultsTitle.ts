import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export class ResultsTitle extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const text = String(props.text ?? "RESULTS");

    const structure: NodeDefinition = createFrame(
      "Results Title",
      {
        layoutMode: "NONE",
        fills: [],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 512, height: 44 }
      },
      [
        createText("Title Left", text, 52, "Regular", { r: 1, g: 0.8039215803146362, b: 0.2666666805744171 }, {
          font: { family: "Champions Display Colour", style: "Left" },
          textCase: "UPPER",
          letterSpacing: { unit: "PERCENT", value: 2 },
          lineHeight: { unit: "PERCENT", value: 100 },
          textAlignHorizontal: "CENTER",
          textAutoResize: "NONE",
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 512, height: 44, relativeTransform: [[1, 0, 0], [0, 1, 0]] }
        }),
        createText("Title Right", text, 52, "Regular", { r: 0, g: 0.9333333373069763, b: 1 }, {
          font: { family: "Champions Display Colour", style: "Right" },
          textCase: "UPPER",
          letterSpacing: { unit: "PERCENT", value: 2 },
          lineHeight: { unit: "PERCENT", value: 100 },
          textAlignHorizontal: "CENTER",
          textAutoResize: "NONE",
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 512, height: 44, relativeTransform: [[1, 0, 0], [0, 1, 0]] }
        }),
        createText("Title Letter", text, 52, "Regular", { r: 1, g: 1, b: 1 }, {
          font: { family: "Champions Display Colour", style: "Letter" },
          textCase: "UPPER",
          letterSpacing: { unit: "PERCENT", value: 2 },
          lineHeight: { unit: "PERCENT", value: 100 },
          textAlignHorizontal: "CENTER",
          textAutoResize: "NONE",
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 512, height: 44, relativeTransform: [[1, 0, 0], [0, 1, 0]] }
        })
      ]
    );

    return this.renderDefinition(structure);
  }
}

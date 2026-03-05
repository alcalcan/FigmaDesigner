import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createRectangle } from "../../ComponentHelpers";
import IMG_Separator_png from "./assets/NewsletterTemplate_img_3_opt.png";

export class FooterTopSeparator extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame(
      "Top separator",
      {
        layoutMode: "NONE",
        clipsContent: true,
        fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.003921568859368563, g: 0, b: 0.33725491166114807 } }],
        layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 600, height: 69 }
      },
      [
        createFrame(
          "Frame 2609184",
          {
            layoutMode: "NONE",
            clipsContent: true,
            fills: [],
            layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 600, height: 123, relativeTransform: [[1, 0, 0], [0, 1, 6]] }
          },
          [
            createRectangle("UCL_2024-27_Ultimate Stage_DividerLandscape_RGB", {
              fills: [{
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                type: "IMAGE",
                scaleMode: "CROP",
                imageTransform: [[0.9999999403953552, -1.6957199401893446e-23, 7.993605777301127e-15], [0, 0.5457569360733032, 1.0155599028394136e-7]],
                scalingFactor: 0.5,
                filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
                assetRef: IMG_Separator_png
              }],
              layoutProps: {
                parentIsAutoLayout: false,
                layoutPositioning: "AUTO",
                width: 670.4823,
                height: 364.8927,
                relativeTransform: [[-0.9998, 0.0192, 601.6836], [-0.0192, -0.9998, 357.6748]]
              }
            })
          ]
        ),
        createRectangle("image", {
          fills: [{
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            type: "GRADIENT_LINEAR",
            gradientStops: [
              { color: { r: 0.003921568859368563, g: 0, b: 0.33725491166114807, a: 0 }, position: 0 },
              { color: { r: 0.003921568859368563, g: 0, b: 0.33725491166114807, a: 0.26 }, position: 0.32046592235565186 },
              { color: { r: 0.003921568859368563, g: 0, b: 0.33725491166114807, a: 0.75 }, position: 0.649724543094635 },
              { color: { r: 0.003921568859368563, g: 0, b: 0.33725491166114807, a: 1 }, position: 1 }
            ],
            gradientTransform: [[0.27413156628608704, 0.8363124132156372, 0.041881076991558075], [-0.900881826877594, 0.0013838768936693668, 0.8989102244377136]]
          }],
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 600, height: 41, relativeTransform: [[1, 0, 0], [0, 1, 28]] }
        })
      ]
    );

    return this.renderDefinition(structure);
  }
}

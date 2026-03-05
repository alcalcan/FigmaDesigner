import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createRectangle } from "../../ComponentHelpers";
import IMG_Bottom_png from "./assets/NewsletterTemplate_img_1.png";

export class FooterBottomGraphic extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("Bottom graphic", {
      layoutMode: "NONE",
      fills: [],
      layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 600, height: 120 }
    }, [
      createRectangle("UCL bottom image", {
        fills: [{
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
          type: "IMAGE",
          scaleMode: "CROP",
          imageTransform: [[1, 0, 0], [0, 0.2002152055501938, 0.14515602588653564]],
          scalingFactor: 0.5,
          filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
          assetRef: IMG_Bottom_png
        }],
        layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 600, height: 120 }
      })
    ]);

    return this.renderDefinition(structure);
  }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createVector } from "../../ComponentHelpers";
import SVG_Instagram from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58190_1004_406_svg_orig.svg";
import SVG_X from "./assets/NewsletterTemplate_assets_icon_path1009_I2266_103700_2467_59807_2455_58196_4821_19_svg_orig.svg";
import SVG_Facebook from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58198_1004_402_svg_orig.svg";
import SVG_Tiktok from "./assets/NewsletterTemplate_assets_icon_Union_I2266_103700_2467_59807_2455_58200_3372_10836_svg_orig.svg";
import SVG_YouTube from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103700_2467_59807_2455_58202_1004_407_svg_orig.svg";

const socialIcon = (name: string, svg: string): NodeDefinition =>
  createFrame(name, {
    layoutMode: "NONE",
    fills: [],
    layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 32, height: 32 }
  }, [
    createVector("Icon", svg, {
      fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 26.6667, height: 26.6667, relativeTransform: [[1, 0, 2.6667], [0, 1, 2.6667]] }
    })
  ]);

export class FooterSocial extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("Social", {
      layoutMode: "HORIZONTAL",
      itemSpacing: 16,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "CENTER",
      counterAxisAlignItems: "CENTER",
      fills: [],
      layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 224, height: 32 }
    }, [
      socialIcon("Social / instagram", SVG_Instagram),
      socialIcon("Social / twitter-X", SVG_X),
      socialIcon("Social / facebook", SVG_Facebook),
      socialIcon("Social / tik-tok-circle", SVG_Tiktok),
      socialIcon("Social / youtube", SVG_YouTube)
    ]);

    return this.renderDefinition(structure);
  }
}

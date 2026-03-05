import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createRectangle, createText, createVector } from "../../ComponentHelpers";
import IMG_Lays_png from "./assets/NewsletterTemplate_img_10.png";
import IMG_Fedex_png from "./assets/NewsletterTemplate_img_16.png";
import IMG_Mastercard_png from "./assets/NewsletterTemplate_img_9.png";
import IMG_Follow_png from "./assets/NewsletterTemplate_img_11.png";
import IMG_JustEat_png from "./assets/NewsletterTemplate_img_12.png";
import IMG_Qatar_png from "./assets/NewsletterTemplate_img_13.png";
import SVG_Competition_logo from "./assets/NewsletterTemplate_assets_vector_Competition_logo_I2266_103700_861_834_svg_orig.svg";

const logoTile = (name: string, assetRef: string): NodeDefinition =>
  createFrame(name, {
    layoutMode: "NONE",
    fills: [],
    layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 54, height: 30 }
  }, [
    createRectangle("Sponsor", {
      fills: [{
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        type: "IMAGE",
        scaleMode: "FILL",
        imageTransform: [[1, 0, 0], [0, 1, 0]],
        scalingFactor: 0.5,
        rotation: 0,
        filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
        assetRef
      }],
      layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 54, height: 30 }
    })
  ]);

const textTile = (name: string, bg: RGB, label: string): NodeDefinition =>
  createFrame(name, {
    layoutMode: "VERTICAL",
    primaryAxisSizingMode: "FIXED",
    counterAxisSizingMode: "FIXED",
    primaryAxisAlignItems: "CENTER",
    counterAxisAlignItems: "CENTER",
    fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: bg }],
    cornerRadius: 2,
    layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 54, height: 30 }
  }, [
    createText("Label", label, 10, "Bold", { r: 1, g: 1, b: 1 }, {
      font: { family: "Arial", style: "Bold" },
      textAlignHorizontal: "CENTER",
      textAutoResize: "WIDTH_AND_HEIGHT"
    })
  ]);

export class FooterSponsors extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const row1 = createFrame("Sponsors row 1", {
      layoutMode: "HORIZONTAL",
      itemSpacing: 4,
      fills: [],
      layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 286, height: 30 }
    }, [
      textTile("Heineken", { r: 0.078, g: 0.545, b: 0.27 }, "Heineken"),
      textTile("PS5", { r: 0.086, g: 0.243, b: 0.639 }, "PS5"),
      logoTile("Lays", IMG_Lays_png),
      logoTile("FedEx", IMG_Fedex_png),
      logoTile("Mastercard", IMG_Mastercard_png)
    ]);

    const row2 = createFrame("Sponsors row 2", {
      layoutMode: "HORIZONTAL",
      itemSpacing: 4,
      fills: [],
      layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 228, height: 30 }
    }, [
      textTile("Crypto", { r: 0.086, g: 0.149, b: 0.42 }, "crypto.com"),
      logoTile("Follow", IMG_Follow_png),
      logoTile("JustEat", IMG_JustEat_png),
      logoTile("Qatar", IMG_Qatar_png)
    ]);

    const structure: NodeDefinition = createFrame("Footer Sponsors", {
      layoutMode: "VERTICAL",
      itemSpacing: 16,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "CENTER",
      fills: [],
      layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 552, height: 148 }
    }, [
      createVector("Competition logo", SVG_Competition_logo, {
        fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 100.5333, height: 44.3502 }
      }),
      createText("Sponsors title", "Official UEFA Champions League sponsors", 18, "Bold", { r: 1, g: 1, b: 1 }, {
        font: { family: "Arial", style: "Bold" },
        textAlignHorizontal: "CENTER",
        textAutoResize: "HEIGHT",
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 552, height: 21 }
      }),
      createFrame("Sponsors", {
        layoutMode: "VERTICAL",
        itemSpacing: 4,
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        fills: [],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 286, height: 64 }
      }, [row1, row2])
    ]);

    return this.renderDefinition(structure);
  }
}

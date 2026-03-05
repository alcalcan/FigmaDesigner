import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createEllipse, createFrame, createRectangle, createText, createVector } from "../../ComponentHelpers";
import IMG_NewsletterTemplate_img_5_png from "./assets/NewsletterTemplate_img_5.png";
import IMG_NewsletterTemplate_img_6_png from "./assets/NewsletterTemplate_img_6.png";
import SVG_NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18292_1238_12105_1004_90_svg_orig from "./assets/NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18292_1238_12105_1004_90_svg_orig.svg";

export class S_and_ECard extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const title = String(props.title ?? "PRICELESS MOMENTS");
    const ctaText = String(props.ctaText ?? "Watch now");
    const imageVariant = Number(props.imageVariant ?? 1);
    const imageAsset = imageVariant === 2 ? IMG_NewsletterTemplate_img_6_png : IMG_NewsletterTemplate_img_5_png;

    const structure: NodeDefinition = createFrame(
      "S&E Card",
      {
        layoutMode: "VERTICAL",
        itemSpacing: 16,
        paddingTop: 0,
        paddingRight: 16,
        paddingBottom: 0,
        paddingLeft: 16,
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        fills: [
          {
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            type: "GRADIENT_RADIAL",
            gradientStops: [
              { color: { r: 0.007843137718737125, g: 0.19607843458652496, b: 1, a: 1 }, position: 0, boundVariables: {} },
              { color: { r: 0.003921568859368563, g: 0, b: 0.33725491166114807, a: 1 }, position: 1, boundVariables: {} }
            ],
            gradientTransform: [[-0.2067427635192871, 0.20742613077163696, 0.7371362447738647], [-0.33528202772140503, -0.33409741520881653, 0.8394749164581299]]
          }
        ],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 264, height: 386 }
      },
      [
        createFrame("Header", { layoutMode: "VERTICAL", itemSpacing: 8, fills: [], layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 232, height: 66 } }, [
          createRectangle("Decoration", {
            fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.7779240608215332, g: 0.3468055725097656, b: 0.9458333253860474 } }],
            layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 232, height: 3 }
          }),
          createText("Title", title, 24, "Regular", { r: 1, g: 1, b: 1 }, {
            font: { family: "Champions Web", style: "Regular" },
            textAlignHorizontal: "CENTER",
            textAutoResize: "NONE",
            letterSpacing: { unit: "PIXELS", value: 1 },
            lineHeight: { unit: "PERCENT", value: 90 },
            layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 232, height: 55 }
          })
        ]),
        createFrame("Thumbnail", { layoutMode: "NONE", fills: [], layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 232, height: 165 } }, [
          createRectangle("Thumbnail", {
            fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "IMAGE", scaleMode: "CROP", assetRef: imageAsset }],
            layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 232, height: 165, relativeTransform: [[1, 0, 0], [0, 1, 0]] }
          }),
          createEllipse("Play Circle", {
            fills: [{ visible: true, opacity: 0.9, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 48, height: 48, relativeTransform: [[1, 0, 92], [0, 1, 58]] }
          }),
          createVector("Play Icon", SVG_NewsletterTemplate_assets_icon_Vector_I2266_103699_2666_18292_1238_12105_1004_90_svg_orig, {
            fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
            layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 40, height: 40, relativeTransform: [[1, 0, 96], [0, 1, 62]] }
          })
        ]),
        createFrame("CTA", {
          layoutMode: "HORIZONTAL",
          paddingTop: 12,
          paddingRight: 18,
          paddingBottom: 12,
          paddingLeft: 18,
          primaryAxisSizingMode: "FIXED",
          counterAxisSizingMode: "AUTO",
          primaryAxisAlignItems: "CENTER",
          counterAxisAlignItems: "CENTER",
          fills: [],
          strokes: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.5493977665901184, g: 1, b: 1 } }],
          cornerRadius: 8,
          layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 232, height: 54 }
        }, [
          createText("CTA Label", ctaText, 22, "SemiBold", { r: 0.5493977665901184, g: 1, b: 1 }, {
            font: { family: "Manrope", style: "SemiBold" },
            textAlignHorizontal: "CENTER",
            textAutoResize: "HEIGHT",
            layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 196, height: 30 }
          })
        ])
      ]
    );

    return this.renderDefinition(structure);
  }
}

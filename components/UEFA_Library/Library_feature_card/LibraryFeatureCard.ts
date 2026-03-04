import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createBooleanOperation, createFrame, createRectangle, createText, createVector } from "../../ComponentHelpers";

import IMG_Proposal_notification_img_7_png from "./assets/Proposal_notification_img_7.png";
import IMG_Proposal_notification_img_8_png from "./assets/Proposal_notification_img_8.png";
import IMG_Proposal_notification_img_9_png from "./assets/Proposal_notification_img_9.png";
import SVG_Proposal_notification_Synth_Vector_12 from "./assets/Proposal_notification_Synth_Vector_12.svg";
import SVG_Proposal_notification_Synth_Vector_13 from "./assets/Proposal_notification_Synth_Vector_13.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig from "./assets/Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig.svg";
import SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig from "./assets/Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig.svg";

type FeatureCardFormat = "PDF" | "Video";

export interface LibraryFeatureCardProps extends ComponentProps {
  cardIndex?: number;
}

interface FeatureCardData {
  imageAsset: string;
  imageHash: string;
  title: string;
  description: string;
  format: FeatureCardFormat;
  author: string;
}

const FEATURE_CARDS: FeatureCardData[] = [
  {
    imageAsset: IMG_Proposal_notification_img_8_png,
    imageHash: "d68ed38d85752b656704db1b0ecbfbc3ac629eac",
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
    format: "Video",
    author: "by Author name"
  },
  {
    imageAsset: IMG_Proposal_notification_img_9_png,
    imageHash: "2f6ef3fb06496786e98ae08168b69e05ba58f0b7",
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
    format: "PDF",
    author: "by Author name"
  },
  {
    imageAsset: IMG_Proposal_notification_img_7_png,
    imageHash: "a8e2f804f384eb2ce5c0e56c2f1176ace24d5c0d",
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport.",
    format: "PDF",
    author: "by Author name"
  }
];

export class LibraryFeatureCard extends BaseComponent {
  async create(props: LibraryFeatureCardProps): Promise<SceneNode> {
    const rawIndex = typeof props.cardIndex === "number" ? props.cardIndex : 0;
    const safeIndex = Math.max(0, Math.min(FEATURE_CARDS.length - 1, rawIndex));
    const card = FEATURE_CARDS[safeIndex];

    const tagFill = card.format === "Video"
      ? { r: 0.9125000238418579, g: 0.8250520825386047, b: 0.8669542074203491 }
      : { r: 0.8705882430076599, g: 0.9254902005195618, b: 0.9607843160629272 };

    const structure: NodeDefinition = createFrame("Library Feature Card", {
      layoutMode: "HORIZONTAL",
      counterAxisSizingMode: "AUTO",
      fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      effects: [{ visible: true, blendMode: "NORMAL", type: "DROP_SHADOW", radius: 6, color: { r: 0, g: 0, b: 0, a: 0.12 }, offset: { x: 0, y: 2 }, spread: 0, showShadowBehindNode: true }],
      cornerRadius: 4,
      layoutSizingHorizontal: "FIXED",
      layoutSizingVertical: "HUG",
      layoutProps: { width: 1077, height: 308, parentIsAutoLayout: true, layoutPositioning: "AUTO" }
    }, [
      createRectangle("Media", {
        layoutAlign: "INHERIT",
        topLeftRadius: 4,
        bottomLeftRadius: 4,
        layoutSizingHorizontal: "FIXED",
        layoutSizingVertical: "FIXED",
        layoutProps: { width: 464, height: 308 },
        fills: [{
          type: "IMAGE",
          scaleMode: "FILL",
          scalingFactor: 1,
          filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
          originalImageHash: card.imageHash,
          assetRef: card.imageAsset
        }]
      }),
      createFrame("Play Overlay", {
        layoutPositioning: "ABSOLUTE",
        layoutSizingHorizontal: "FIXED",
        layoutSizingVertical: "FIXED",
        visible: card.format === "Video",
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "ABSOLUTE", width: 64, height: 64, relativeTransform: [[1, 0, 488], [0, 1, 0]] }
      }, [
        createVector("Play Circle", SVG_Proposal_notification_assets_icon_Vector_I3383_3705_1004_91_svg_orig, {
          layoutPositioning: "ABSOLUTE",
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 53.3333, height: 53.3333, relativeTransform: [[1, 0, 5.3333], [0, 1, 5.3333]] },
          fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]
        })
      ]),
      createFrame("Content", {
        layoutMode: "VERTICAL",
        itemSpacing: 16,
        paddingTop: 24,
        paddingRight: 24,
        paddingBottom: 24,
        paddingLeft: 24,
        primaryAxisAlignItems: "CENTER",
        layoutAlign: "STRETCH",
        layoutGrow: 1,
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "FIXED",
        layoutProps: { width: 613, height: 308 }
      }, [
        createFrame("Top", {
          layoutMode: "VERTICAL",
          itemSpacing: 16,
          primaryAxisSizingMode: "AUTO",
          primaryAxisAlignItems: "CENTER",
          layoutAlign: "STRETCH",
          layoutProps: { width: 565 }
        }, [
          createFrame("Title Row", {
            layoutMode: "HORIZONTAL",
            itemSpacing: 16,
            counterAxisSizingMode: "AUTO",
            counterAxisAlignItems: "CENTER",
            layoutAlign: "STRETCH",
            layoutProps: { width: 565, height: 50 }
          }, [
            createText("Title", card.title, 20, "SemiBold", { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, {
              font: { family: "Open Sans", style: "SemiBold" },
              textAutoResize: "HEIGHT",
              textAlignVertical: "CENTER",
              layoutGrow: 1
            })
          ]),
          createText("Description", card.description, 16, "Regular", { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, {
            font: { family: "Open Sans", style: "Regular" },
            textAlignVertical: "CENTER",
            textAlignHorizontal: "LEFT",
            layoutSizingHorizontal: "FILL"
          })
        ]),
        createFrame("Meta Row", {
          layoutMode: "HORIZONTAL",
          itemSpacing: 16,
          counterAxisAlignItems: "CENTER",
          layoutAlign: "STRETCH",
          layoutGrow: 1,
          layoutProps: { width: 565, height: 35 }
        }, [
          createFrame("Tag", {
            layoutMode: "HORIZONTAL",
            itemSpacing: 4,
            paddingLeft: 16,
            counterAxisSizingMode: "AUTO",
            counterAxisAlignItems: "CENTER",
            primaryAxisSizingMode: "AUTO",
            fills: [{ type: "SOLID", color: tagFill }],
            cornerRadius: 8,
            layoutProps: { width: card.format === "Video" ? 89 : 78, height: 32 }
          }, [
            createText("Tag Label", card.format === "Video" ? "Video " : "PDF", 14, "Regular", { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, {
              font: { family: "Open Sans", style: "Regular" },
              textAutoResize: "WIDTH_AND_HEIGHT",
              textAlignVertical: "CENTER"
            }),
            createFrame("Tag Icon Wrap", {
              layoutMode: "HORIZONTAL",
              itemSpacing: 8,
              paddingTop: 8,
              paddingRight: 8,
              paddingBottom: 8,
              paddingLeft: 8,
              primaryAxisSizingMode: "AUTO",
              counterAxisSizingMode: "AUTO",
              counterAxisAlignItems: "CENTER",
              layoutProps: { width: 32, height: 32 }
            }, [
              card.format === "Video"
                ? createVector("Play", SVG_Proposal_notification_assets_icon_Vector_I3383_3715_1004_103_svg_orig, {
                    layoutPositioning: "ABSOLUTE",
                    layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 6.7582, height: 8.2399, relativeTransform: [[1, 0, 13.3333], [0, 1, 11.88]] },
                    fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]
                  })
                : createBooleanOperation("Download", "UNION", {
                    layoutPositioning: "ABSOLUTE",
                    layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 13.3333, height: 13.3333, relativeTransform: [[1, 0, 9.3333], [0, 1, 9.3333]] },
                    fills: [{ type: "SOLID", color: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 } }]
                  }, [
                    createVector("V1", SVG_Proposal_notification_Synth_Vector_12, {
                      layoutPositioning: "ABSOLUTE",
                      layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 13.3333, height: 5.336, relativeTransform: [[1, 0, 9.3333], [0, 1, 17.3307]] },
                      fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]
                    }),
                    createVector("V2", SVG_Proposal_notification_Synth_Vector_13, {
                      layoutPositioning: "ABSOLUTE",
                      layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 8, height: 9.338, relativeTransform: [[1, 0, 12], [0, 1, 9.6713]] },
                      fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }]
                    })
                  ])
            ])
          ]),
          createFrame("Author and Save", {
            layoutMode: "HORIZONTAL",
            itemSpacing: 16,
            counterAxisAlignItems: "CENTER",
            layoutAlign: "STRETCH",
            layoutGrow: 1,
            layoutProps: { width: 525, height: 24 }
          }, [
            createText("Author", card.author, 12, "Regular", { r: 0.38823530077934265, g: 0.47843137383461, b: 0.5215686559677124 }, {
              font: { family: "Open Sans", style: "Regular" },
              textAutoResize: "HEIGHT",
              layoutSizingHorizontal: "FILL"
            }),
            createFrame("Save", {
              layoutSizingHorizontal: "FIXED",
              layoutSizingVertical: "FIXED",
              layoutProps: { width: 24, height: 24 }
            }, [
              createVector("Star", SVG_Proposal_notification_assets_icon_Vector__Stroke__I3379_17195_3016_7769_svg_orig, {
                layoutPositioning: "ABSOLUTE",
                layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 22.0001, height: 21.02, relativeTransform: [[1, 0, 1], [0, 1, 1]] },
                fills: [{ type: "SOLID", color: { r: 0.7019608020782471, g: 0.7529411911964417, b: 0.772549033164978 } }],
                strokeWeight: 2,
                strokeAlign: "CENTER",
                strokeCap: "ROUND",
                strokeJoin: "ROUND"
              })
            ])
          ])
        ])
      ])
    ]);

    const root = await this.renderDefinition(structure);
    root.name = `LibraryFeatureCard_${safeIndex + 1}`;
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

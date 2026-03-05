import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createRectangle, createText } from "../../ComponentHelpers";

import IMG_Proposal_notification_img_3_png from "./assets/Proposal_notification_img_3.png";
import IMG_Proposal_notification_img_4_png from "./assets/Proposal_notification_img_4.png";
import IMG_Proposal_notification_img_5_png from "./assets/Proposal_notification_img_5.png";
import IMG_Proposal_notification_img_6_png from "./assets/Proposal_notification_img_6.png";

export interface LibraryArticleCardProps extends ComponentProps {
  cardIndex?: number;
}

interface ArticleCardData {
  imageAsset: string;
  imageHash: string;
  title: string;
  description: string;
}

const ARTICLE_CARDS: ArticleCardData[] = [
  {
    imageAsset: IMG_Proposal_notification_img_3_png,
    imageHash: "53600b9b753bcf27aa29e70bd45039034c373525",
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport."
  },
  {
    imageAsset: IMG_Proposal_notification_img_4_png,
    imageHash: "2fd7f24d3818ea174f1f4c2deab3bbcbf0fa283e",
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport."
  },
  {
    imageAsset: IMG_Proposal_notification_img_5_png,
    imageHash: "1370f2fb6027d20db360f8f2f630f7f48619b705",
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport."
  },
  {
    imageAsset: IMG_Proposal_notification_img_6_png,
    imageHash: "086bc6ab8f2ad4fa5828f8936ae8eb6efa4f6340",
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends to shape the future of our sport."
  }
];

export class LibraryArticleCard extends BaseComponent {
  async create(props: LibraryArticleCardProps): Promise<SceneNode> {
    const rawIndex = typeof props.cardIndex === "number" ? props.cardIndex : 0;
    const safeIndex = Math.max(0, Math.min(ARTICLE_CARDS.length - 1, rawIndex));
    const card = ARTICLE_CARDS[safeIndex];

    const structure: NodeDefinition = createFrame("Library Article Card", {
      layoutMode: "VERTICAL",
      primaryAxisSizingMode: "AUTO",
      fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      effects: [{ visible: true, blendMode: "NORMAL", type: "DROP_SHADOW", radius: 6, color: { r: 0, g: 0, b: 0, a: 0.12 }, offset: { x: 0, y: 2 }, spread: 0, showShadowBehindNode: true }],
      cornerRadius: 4,
      layoutSizingHorizontal: "FIXED",
      layoutSizingVertical: "HUG",
      layoutProps: { width: 343, height: 438, parentIsAutoLayout: true, layoutPositioning: "AUTO" }
    }, [
      createRectangle("Cover", {
        topLeftRadius: 4,
        topRightRadius: 4,
        layoutAlign: "STRETCH",
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "FIXED",
        layoutProps: { width: 343, height: 229 },
        fills: [{
          type: "IMAGE",
          scaleMode: "FILL",
          imageTransform: [[1, 0, 0], [0, 0.9831932783126831, 0.008403373882174492]],
          scalingFactor: 1,
          rotation: 0,
          filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
          originalImageHash: card.imageHash,
          assetRef: card.imageAsset
        }]
      }),
      createFrame("Body", {
        layoutMode: "VERTICAL",
        itemSpacing: 24,
        paddingTop: 24,
        paddingRight: 16,
        paddingBottom: 24,
        paddingLeft: 16,
        primaryAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "CENTER",
        layoutAlign: "STRETCH",
        layoutProps: { width: 343, height: 209 }
      }, [
        createFrame("Content", {
          layoutMode: "VERTICAL",
          itemSpacing: 16,
          primaryAxisSizingMode: "AUTO",
          primaryAxisAlignItems: "CENTER",
          layoutAlign: "STRETCH",
          layoutProps: { width: 311, height: 161 }
        }, [
          createFrame("Title Row", {
            layoutMode: "HORIZONTAL",
            itemSpacing: 16,
            counterAxisSizingMode: "AUTO",
            counterAxisAlignItems: "CENTER",
            layoutAlign: "STRETCH",
            layoutProps: { width: 311, height: 50 }
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
            textAlignHorizontal: "LEFT",
            textAlignVertical: "CENTER",
            layoutSizingHorizontal: "FILL"
          })
        ])
      ])
    ]);

    const root = await this.renderDefinition(structure);
    root.name = `LibraryArticleCard_${safeIndex + 1}`;
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);
    return root;
  }
}

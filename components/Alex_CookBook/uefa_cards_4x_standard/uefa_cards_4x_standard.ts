
import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector } from "../../ComponentHelpers";

// --- Assets ---
import IMG_Card1 from "./assets/uefa_cards_4x_standard_img_1.png";
import IMG_Card2 from "./assets/uefa_cards_4x_standard_img_2.png";
import IMG_Card3 from "./assets/uefa_cards_4x_standard_img_3.png";
import IMG_Card4 from "./assets/uefa_cards_4x_standard_img_4.png";

import SVG_PlayIcon_1 from "./assets/uefa_cards_4x_standard_assets_icon_Play_Icon_1077_152_svg_54x54.svg";
import SVG_PlayIcon_2 from "./assets/uefa_cards_4x_standard_assets_icon_Play_Icon_1077_220_svg_54x54.svg";

// Stars for Card 1
import SVG_Star1_1 from "./assets/uefa_cards_4x_standard_assets_icon_Star_1_1077_166_svg_12x12.svg";
import SVG_Star1_2 from "./assets/uefa_cards_4x_standard_assets_icon_Star_2_1077_170_svg_12x12.svg";
import SVG_Star1_3 from "./assets/uefa_cards_4x_standard_assets_icon_Star_3_1077_174_svg_12x12.svg";
import SVG_Star1_4 from "./assets/uefa_cards_4x_standard_assets_icon_Star_4_1077_178_svg_12x12.svg";
import SVG_Star1_5 from "./assets/uefa_cards_4x_standard_assets_icon_Star_5_1077_182_svg_12x12.svg";

// Stars for Card 2
import SVG_Star2_1 from "./assets/uefa_cards_4x_standard_assets_icon_Star_1_1077_198_svg_12x12.svg";
import SVG_Star2_2 from "./assets/uefa_cards_4x_standard_assets_icon_Star_2_1077_202_svg_12x12.svg";
import SVG_Star2_3 from "./assets/uefa_cards_4x_standard_assets_icon_Star_3_1077_206_svg_12x12.svg";
import SVG_Star2_4 from "./assets/uefa_cards_4x_standard_assets_icon_Star_4_1077_210_svg_12x12.svg";
import SVG_Star2_5 from "./assets/uefa_cards_4x_standard_assets_icon_Star_5_1077_214_svg_12x12.svg";

// Stars for Card 3
import SVG_Star3_1 from "./assets/uefa_cards_4x_standard_assets_icon_Star_1_1077_234_svg_12x12.svg";
import SVG_Star3_2 from "./assets/uefa_cards_4x_standard_assets_icon_Star_2_1077_238_svg_12x12.svg";
import SVG_Star3_3 from "./assets/uefa_cards_4x_standard_assets_icon_Star_3_1077_242_svg_12x12.svg";
import SVG_Star3_4 from "./assets/uefa_cards_4x_standard_assets_icon_Star_4_1077_246_svg_12x12.svg";
import SVG_Star3_5 from "./assets/uefa_cards_4x_standard_assets_icon_Star_5_1077_250_svg_12x12.svg";

// Stars for Card 4
import SVG_Star4_1 from "./assets/uefa_cards_4x_standard_assets_icon_Star_1_1077_266_svg_12x12.svg";
import SVG_Star4_2 from "./assets/uefa_cards_4x_standard_assets_icon_Star_2_1077_270_svg_12x12.svg";
import SVG_Star4_3 from "./assets/uefa_cards_4x_standard_assets_icon_Star_3_1077_274_svg_12x12.svg";
import SVG_Star4_4 from "./assets/uefa_cards_4x_standard_assets_icon_Star_4_1077_278_svg_12x12.svg";
import SVG_Star4_5 from "./assets/uefa_cards_4x_standard_assets_icon_Star_5_1077_282_svg_12x12.svg";


// --- Constants ---
const COLORS = {
  WHITE: { r: 1, g: 1, b: 1 },
  BLACK: { r: 0, g: 0, b: 0 },
  DARK: { r: 0.1, g: 0.19, b: 0.24 }, // Extracted from usage
  GREY_TEXT: { r: 0.39, g: 0.48, b: 0.52 }, // Extracted from usage
  RATING_TEXT: { r: 0.45, g: 0.55, b: 0.58 }, // Extracted from usage
  SELECTED_BG: { r: 0.94, g: 0.95, b: 0.97 }
};

interface CardData {
  image: string;
  showPlayIcon: boolean;
  playIcon?: string;
  title: string;
  description: string;
  author: string;
  stars: string[];
  isSelected: boolean;
}

const CARDS: CardData[] = [
  {
    image: IMG_Card1,
    showPlayIcon: true,
    playIcon: SVG_PlayIcon_1,
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.",
    author: "Alex Calcan",
    stars: [SVG_Star1_1, SVG_Star1_2, SVG_Star1_3, SVG_Star1_4, SVG_Star1_5],
    isSelected: false
  },
  {
    image: IMG_Card2,
    showPlayIcon: false,
    title: "Advanced Coaching Techniques 2026",
    description: "Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.",
    author: "Mihai Popescu",
    stars: [SVG_Star2_1, SVG_Star2_2, SVG_Star2_3, SVG_Star2_4, SVG_Star2_5],
    isSelected: false
  },
  {
    image: IMG_Card3,
    showPlayIcon: true,
    playIcon: SVG_PlayIcon_2,
    title: "Youth Academy Growth Strategy",
    description: "Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.",
    author: "Elena Ionescu",
    stars: [SVG_Star3_1, SVG_Star3_2, SVG_Star3_3, SVG_Star3_4, SVG_Star3_5],
    isSelected: false
  },
  {
    image: IMG_Card4,
    showPlayIcon: false,
    title: "Sustainable Stadium Operations",
    description: "Reducing carbon footprints and implementing circular economy principles in modern stadium management.",
    author: "David Moore",
    stars: [SVG_Star4_1, SVG_Star4_2, SVG_Star4_3, SVG_Star4_4, SVG_Star4_5],
    isSelected: false
  }
];

export class uefa_cards_4x_standard extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("uefa_cards_4x_standard", {
      layoutProps: { width: 1444, height: 441, parentIsAutoLayout: false },
      layoutMode: "HORIZONTAL",
      itemSpacing: 24
    }, CARDS.map(item => {
      return createFrame("Card 1", {
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 343, height: 441 },
        layoutMode: "VERTICAL",
        fills: [{
          visible: true,
          opacity: 1,
          blendMode: "NORMAL",
          type: "SOLID",
          color: item.isSelected ? COLORS.SELECTED_BG : COLORS.WHITE
        }]
      }, [
        createFrame("Image Container", {
          layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 343, height: 229 },
          fills: [{
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            type: "IMAGE",
            scaleMode: "FILL",
            assetRef: item.image
          }]
        }, [
          item.showPlayIcon && item.playIcon ? createVector("Play Icon", item.playIcon, {
            layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 54, height: 54, relativeTransform: [[1, 0, 144], [0, 1, 87]] }
          }) : null
        ] as NodeDefinition[]), // Type assertion helper for partial optional arrays

        createFrame("Content Padding", {
          layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 343, height: 212 },
          layoutMode: "VERTICAL",
          itemSpacing: 16,
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16
        }, [
          createText(item.title, item.title, 20, "SemiBold", COLORS.DARK, {
            layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 311, height: 54 }
          }),
          createText(item.description, item.description, 14, "Regular", COLORS.DARK, {
            layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 311, height: 57 }
          }),
          createFrame("Footer", {
            layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 311, height: 37 },
            layoutMode: "VERTICAL",
            itemSpacing: 4
          }, [
            createFrame("Author Info", {
              layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 95, height: 19 },
              layoutMode: "HORIZONTAL",
              itemSpacing: 4
            }, [
              createText("by", "by ", 12, "Light", COLORS.GREY_TEXT, {
                layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 13, height: 16 }
              }),
              createText(item.author, item.author, 14, "SemiBold", COLORS.GREY_TEXT, {
                layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 78, height: 19 }
              })
            ]),
            createFrame("Rating Block", {
              layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 119, height: 14 },
              layoutMode: "HORIZONTAL",
              itemSpacing: 6
            }, [
              createText("Relevance", "Relevance", 10, "SemiBold", COLORS.RATING_TEXT, {
                layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 49, height: 14 }
              }),
              createFrame("Rating Stars", {
                layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 64, height: 12 },
                layoutMode: "HORIZONTAL",
                itemSpacing: 1
              }, item.stars.map((star, i) =>
                createVector(`Star ${i + 1}`, star, {
                  layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 12, height: 12 }
                })
              ) as NodeDefinition[])
            ])
          ])
        ])
      ]);
    }));

    const root = await this.renderDefinition(structure);
    root.x = props.x;
    root.y = props.y;
    return root;
  }
}
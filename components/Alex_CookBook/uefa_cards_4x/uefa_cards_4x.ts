// DO NOT TOUCH THIS FILE EVER! IT IS AUTO-GENERATED!

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";

// Assets
import IMG_uefa_cards_4x_img_1_png from "././assets/uefa_cards_4x_img_1.png";
import IMG_uefa_cards_4x_img_2_png from "././assets/uefa_cards_4x_img_2.png";
import IMG_uefa_cards_4x_img_3_png from "././assets/uefa_cards_4x_img_3.png";
import IMG_uefa_cards_4x_img_4_png from "././assets/uefa_cards_4x_img_4.png";
import SVG_Play_Icon from "./assets/uefa_cards_4x_assets_icon_Play_Icon_1058_3036_svg_54x54.svg";
import SVG_Star from "./assets/uefa_cards_4x_assets_icon_Star_1_1058_3050_svg_11_999994277954102x11_999982833862305.svg";

// --- Constants & Defaults ---
const COLORS = {
  DARK_BLUE: { r: 0.1, g: 0.19, b: 0.24 },
  GREY_TEXT: { r: 0.39, g: 0.48, b: 0.52 },
  RATING_LABEL: { r: 0.45, g: 0.55, b: 0.58 },
  WHITE: { r: 1, g: 1, b: 1 },
  SHADOW: { r: 0, g: 0, b: 0, a: 0.12 }
};

const DEFAULT_PROPS = {
  visible: true, opacity: 1, locked: false, blendMode: "PASS_THROUGH",
  isMask: false, maskType: "ALPHA",
  strokeWeight: 1, strokeAlign: "INSIDE", strokeCap: "NONE", strokeJoin: "MITER", strokeMiterLimit: 4,
  strokeTopWeight: 1, strokeRightWeight: 1, strokeBottomWeight: 1, strokeLeftWeight: 1,
  strokes: [], fills: [], effects: [], cornerRadius: 0
};

// --- Helper Functions ---

const createFrame = (name: string, overrides: any = {}, children: any[] = []) => ({
  type: "FRAME" as const,
  name,
  props: { ...DEFAULT_PROPS, ...overrides },
  children,
  layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps }
});

const createText = (name: string, text: string, fontSize: number, style: string, color: any, overrides: any = {}) => ({
  type: "TEXT" as const,
  name,
  props: {
    ...DEFAULT_PROPS,
    strokeAlign: "OUTSIDE",
    characters: text,
    fontSize,
    font: { family: "Open Sans", style },
    fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color }],
    textAlignHorizontal: "LEFT", textAlignVertical: "TOP", textAutoResize: "WIDTH_AND_HEIGHT",
    paragraphSpacing: 0, paragraphIndent: 0,
    ...overrides
  },
  layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps }
});

const createVector = (name: string, svgContent: string, overrides: any = {}) => ({
  type: "VECTOR" as const,
  shouldFlatten: true,
  name,
  props: { ...DEFAULT_PROPS, ...overrides },
  layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", ...overrides.layoutProps },
  svgContent
});

const CARD_DATA = [
  {
    name: "Card 1",
    title: "Refereeing in Women’s Football: Motivation.",
    description: "The UEFA innovation hub is a vehicle for future-proofing UEFA and ensuring we stay one step ahead of the latest trends.",
    author: "Alex Calcan",
    image: IMG_uefa_cards_4x_img_1_png,
    showPlayIcon: true
  },
  {
    name: "Card 2",
    title: "Advanced Coaching Techniques 2026",
    description: "Deep dive into the latest tactical innovations from the world's most successful coaches and analysts.",
    author: "Mihai Popescu",
    image: IMG_uefa_cards_4x_img_2_png,
    showPlayIcon: false
  },
  {
    name: "Card 3",
    title: "Youth Academy Growth Strategy",
    description: "Exploring sustainable ways to develop young talent and integrate them into first-team squads effectively.",
    author: "Elena Ionescu",
    image: IMG_uefa_cards_4x_img_3_png,
    showPlayIcon: true
  },
  {
    name: "Card 4",
    title: "Sustainable Stadium Operations",
    description: "Reducing carbon footprints and implementing circular economy principles in modern stadium management.",
    author: "David Moore",
    image: IMG_uefa_cards_4x_img_4_png,
    showPlayIcon: false
  }
];

export class uefa_cards_4x extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {

    const stars = Array.from({ length: 5 }).map((_, i) =>
      createVector(`Star ${i + 1}`, SVG_Star, {
        layoutProps: { width: 12, height: 12 }
      })
    );

    const cards = CARD_DATA.map(data =>
      createFrame(data.name, {
        cornerRadius: 12,
        clipsContent: true,
        layoutMode: "VERTICAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: COLORS.WHITE }],
        effects: [{
          visible: true, blendMode: "NORMAL", type: "DROP_SHADOW",
          radius: 6, color: COLORS.SHADOW, offset: { x: 0, y: 2 }, spread: 0, showShadowBehindNode: true
        }],
        layoutProps: { parentIsAutoLayout: true } // Removed fixed width/height
      }, [
        // Image container
        createFrame("Image Container", {
          clipsContent: true,
          fills: [{
            visible: true, opacity: 1, blendMode: "NORMAL", type: "IMAGE",
            scaleMode: "FILL", assetRef: data.image
          }],
          layoutProps: { width: 343, height: 229 } // Image usually stays fixed or STRETCH
        }, data.showPlayIcon ? [
          createVector("Play Icon", SVG_Play_Icon, {
            x: 144, y: 87,
            layoutProps: { width: 54, height: 54, parentIsAutoLayout: false }
          })
        ] : []),

        // Content
        createFrame("Content Padding", {
          layoutMode: "VERTICAL", itemSpacing: 16,
          paddingTop: 16, paddingRight: 16, paddingBottom: 16, paddingLeft: 16,
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          layoutProps: { layoutAlign: "STRETCH" }
        }, [
          createText(data.title, data.title, 20, "SemiBold", COLORS.DARK_BLUE, {
            textAutoResize: "WIDTH_AND_HEIGHT",
            layoutProps: { layoutAlign: "STRETCH" }
          }),
          createText("Description", data.description, 14, "Regular", COLORS.DARK_BLUE, {
            textAutoResize: "WIDTH_AND_HEIGHT",
            layoutProps: { layoutAlign: "STRETCH" }
          }),
          createFrame("Footer", {
            layoutMode: "VERTICAL", itemSpacing: 4,
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "AUTO",
            layoutProps: { layoutAlign: "STRETCH" }
          }, [
            createFrame("Author Info", {
              layoutMode: "HORIZONTAL", itemSpacing: 4,
              primaryAxisSizingMode: "AUTO",
              counterAxisSizingMode: "AUTO"
            }, [
              createText("by", "by ", 12, "Light", COLORS.GREY_TEXT),
              createText(data.author, data.author, 14, "SemiBold", COLORS.GREY_TEXT)
            ]),
            createFrame("Rating Block", {
              layoutMode: "HORIZONTAL", itemSpacing: 6,
              counterAxisAlignItems: "CENTER",
              primaryAxisSizingMode: "AUTO",
              counterAxisSizingMode: "AUTO"
            }, [
              createText("Relevance", "Relevance", 10, "SemiBold", COLORS.RATING_LABEL),
              createFrame("Rating Stars", {
                layoutMode: "HORIZONTAL", itemSpacing: 1,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO"
              }, stars)
            ])
          ])
        ])
      ])
    );

    const structure: NodeDefinition = createFrame("uefa_cards_4x", {
      layoutMode: "HORIZONTAL",
      itemSpacing: 24,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      layoutProps: { parentIsAutoLayout: false } // Root should usually have no absolute size if hugging
    }, cards);

    const root = await this.renderDefinition(structure);
    root.x = props.x;
    root.y = props.y;

    return root;
  }
}

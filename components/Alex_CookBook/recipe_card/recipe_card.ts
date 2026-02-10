import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector } from "../../ComponentHelpers";

// SVG Assets
import SVG_timer_icon from "./assets/timer_icon.svg";
import SVG_star_icon from "./assets/star_icon.svg";

export interface RecipeCardProps extends ComponentProps {
  category?: string;
  title?: string;
  description?: string;
  time?: string;
  difficulty?: string;
}

export class recipe_card extends BaseComponent {
  async create(props: RecipeCardProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("recipe_card", {
      layoutMode: "VERTICAL",
      itemSpacing: 16,
      paddingTop: 16,
      paddingRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "FIXED",
      fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      cornerRadius: 12,
      effects: [{
        type: "DROP_SHADOW",
        color: { r: 0, g: 0, b: 0, a: 0.1 },
        offset: { x: 0, y: 4 },
        radius: 12,
        showShadowBehindNode: true
      }],
      layoutProps: { width: 360 }
    }, [
      createFrame("Image Container", {
        fills: [{ type: "SOLID", color: { r: 0.9, g: 0.9, b: 0.9 } }],
        cornerRadius: 8,
        layoutAlign: "STRETCH",
        layoutProps: { height: 200 }
      }),
      createFrame("Content Container", {
        layoutMode: "VERTICAL",
        itemSpacing: 8,
        layoutAlign: "STRETCH",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO"
      }, [
        createText("Category", (props.category || "BREAKFAST").toUpperCase(), 12, "Bold", { r: 0.36, g: 0.48, b: 0.54 }, {
          font: { family: "Open Sans", style: "Bold" },
          textAutoResize: "HEIGHT",
          layoutAlign: "STRETCH"
        }),
        createText("Title", props.title || "Avocado Toast", 20, "Bold", { r: 0.1, g: 0.19, b: 0.24 }, {
          font: { family: "Open Sans", style: "Bold" },
          textAutoResize: "HEIGHT",
          layoutAlign: "STRETCH"
        }),
        createText("Description", props.description || "Freshly smashed avocado on sourdough bread with a touch of sea salt and chili flakes.", 14, "Regular", { r: 0.39, g: 0.48, b: 0.52 }, {
          font: { family: "Open Sans", style: "Regular" },
          textAutoResize: "HEIGHT",
          layoutAlign: "STRETCH"
        })
      ]),
      createFrame("Footer", {
        layoutMode: "HORIZONTAL",
        primaryAxisAlignItems: "SPACE_BETWEEN",
        counterAxisAlignItems: "CENTER",
        layoutAlign: "STRETCH",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO"
      }, [
        createFrame("Time Info", {
          layoutMode: "HORIZONTAL",
          itemSpacing: 6,
          counterAxisAlignItems: "CENTER",
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO"
        }, [
          createVector("Timer Icon", SVG_timer_icon, {
            layoutProps: { width: 18, height: 18 }
          }),
          createText("Time", props.time || "15 mins", 14, "SemiBold", { r: 0.36, g: 0.48, b: 0.54 }, {
            font: { family: "Open Sans", style: "SemiBold" },
            textAutoResize: "WIDTH_AND_HEIGHT"
          })
        ]),
        createFrame("Difficulty Info", {
          layoutMode: "HORIZONTAL",
          itemSpacing: 6,
          counterAxisAlignItems: "CENTER",
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO"
        }, [
          createVector("Difficulty Icon", SVG_star_icon, {
            layoutProps: { width: 18, height: 18 }
          }),
          createText("Difficulty", props.difficulty || "Easy", 14, "SemiBold", { r: 0.36, g: 0.48, b: 0.54 }, {
            font: { family: "Open Sans", style: "SemiBold" },
            textAutoResize: "WIDTH_AND_HEIGHT"
          })
        ])
      ])
    ]);

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

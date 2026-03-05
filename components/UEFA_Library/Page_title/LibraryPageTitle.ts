import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createText } from "../../ComponentHelpers";
import { button } from "../../Alex_CookBook/button/button";

export interface LibraryPageTitleProps extends ComponentProps {
  title?: string;
  subtitle?: string;
  variant?: "resources" | "notification";
  width?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  showActions?: boolean;
}

export class LibraryPageTitle extends BaseComponent {
  async create(props: LibraryPageTitleProps): Promise<SceneNode> {
    const variant = props.variant ?? "resources";
    const title = props.title ?? (variant === "notification" ? "Notification preferences" : "Resources");
    const subtitle = props.subtitle ?? (variant === "notification" ? "Choose what you want to receive updates about" : undefined);
    const width = props.width ?? 1680;
    const paddingTop = props.paddingTop ?? 32;
    const paddingRight = props.paddingRight ?? 120;
    const paddingBottom = props.paddingBottom ?? 8;
    const paddingLeft = props.paddingLeft ?? 120;
    const showActions = props.showActions ?? (variant === "notification");

    const titleStack = createFrame("Title Stack", {
      layoutMode: "VERTICAL",
      itemSpacing: 8,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      fills: [],
      layoutGrow: variant === "notification" ? 1 : 0,
      layoutSizingHorizontal: variant === "notification" ? "FILL" : "HUG"
    }, [
      createText("Title", title, 32, "Regular", { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }, {
        font: { family: "Open Sans", style: "Regular" },
        lineHeight: { unit: "PIXELS", value: 40 },
        textAlignHorizontal: "LEFT",
        textAlignVertical: "CENTER",
        textAutoResize: "WIDTH_AND_HEIGHT"
      }),
      subtitle ? createText("Subtitle", subtitle, 16, "Medium", { r: 0.2705882489681244, g: 0.3607843220233917, b: 0.40392157435417175 }, {
        font: { family: "Inter", style: "Medium" },
        lineHeight: { unit: "PERCENT", value: 150 },
        letterSpacing: { unit: "PIXELS", value: -0.31 },
        textAlignHorizontal: "LEFT",
        textAlignVertical: "CENTER",
        textAutoResize: "WIDTH_AND_HEIGHT"
      }) : null
    ]);

    const structure: NodeDefinition = createFrame("Library Page Title", {
      layoutMode: variant === "notification" ? "HORIZONTAL" : "VERTICAL",
      itemSpacing: variant === "notification" ? 12 : 8,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      primaryAxisSizingMode: variant === "notification" ? "FIXED" : "AUTO",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: variant === "notification" ? "SPACE_BETWEEN" : "MIN",
      counterAxisAlignItems: variant === "notification" ? "CENTER" : "MIN",
      layoutAlign: "STRETCH",
      layoutProps: {
        parentIsAutoLayout: true,
        layoutPositioning: "AUTO",
        width,
        relativeTransform: [[1, 0, 0], [0, 1, 314]],
        constraints: { horizontal: "MIN", vertical: "MIN" }
      }
    }, [
      titleStack,
      (variant === "notification" && showActions) ? createFrame("Button Set", {
        layoutMode: "HORIZONTAL",
        itemSpacing: 12,
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        counterAxisAlignItems: "CENTER",
        fills: []
      }, [
        {
          type: "COMPONENT",
          component: button,
          name: "Cancel Button",
          props: {
            variant: "outline",
            label: "Cancel",
            size: "medium",
            cornerRadius: 24,
            baseColor: { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 },
            textColor: { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 },
            padding: { v: 12, h: 24 }
          },
          layoutProps: { parentIsAutoLayout: true }
        } as NodeDefinition,
        {
          type: "COMPONENT",
          component: button,
          name: "Save Button",
          props: {
            variant: "primary",
            label: "Save",
            size: "medium",
            width: 192,
            cornerRadius: 24,
            baseColor: { r: 0.7019608020782471, g: 0.7529411911964417, b: 0.772549033164978 },
            textColor: { r: 1, g: 1, b: 1 },
            padding: { v: 12, h: 24 }
          },
          layoutProps: { parentIsAutoLayout: true, width: 192 }
        } as NodeDefinition
      ]) : null
    ]);

    const root = await this.renderDefinition(structure);
    root.name = "LibraryPageTitle";
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);
    return root;
  }
}

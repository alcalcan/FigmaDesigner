import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

// Icons
import { Lucide_info } from "../../lucide_icons/Lucide_info/Lucide_info";
import { Lucide_alert_triangle } from "../../lucide_icons/Lucide_alert_triangle/Lucide_alert_triangle";
import { Lucide_alert_circle } from "../../lucide_icons/Lucide_alert_circle/Lucide_alert_circle";
import { Lucide_x } from "../../lucide_icons/Lucide_x/Lucide_x";

export type InfoVariant = "simple" | "complex" | "slim";
export type InfoColorTheme = "blue" | "red" | "yellow";

export interface InfoProps extends ComponentProps {
  variant?: InfoVariant;
  colorTheme?: InfoColorTheme;
  title?: string;
  description?: string;
  showDismiss?: boolean;
}

export class Info_generated extends BaseComponent {
  private getThemeConfig(theme: InfoColorTheme) {
    switch (theme) {
      case "red":
        return {
          iconColor: { r: 0.8, g: 0.1, b: 0.1 },
          bgColor: { r: 0.99, g: 0.9, b: 0.9 }, // Light Red bg
          iconClass: new Lucide_alert_circle()
        };
      case "yellow":
        return {
          iconColor: { r: 0.8, g: 0.5, b: 0.1 },
          bgColor: { r: 0.99, g: 0.95, b: 0.8 }, // Light Yellow bg
          iconClass: new Lucide_alert_triangle()
        };
      case "blue":
      default:
        return {
          iconColor: { r: 0.1, g: 0.4, b: 0.8 },
          bgColor: { r: 0.9, g: 0.95, b: 0.99 }, // Light Blue bg
          iconClass: new Lucide_info()
        };
    }
  }

  async create(props: InfoProps): Promise<SceneNode> {
    const variant = props.variant || "simple";
    const theme = props.colorTheme || "blue";
    const config = this.getThemeConfig(theme);

    // --- ICON ---
    const iconNode = await config.iconClass.create({
      color: config.iconColor,
      width: 20,
      height: 20
    });

    // --- DISMISS (X) ICON ---
    let dismissNode: SceneNode | null = null;
    if (props.showDismiss !== false) { // Default true
      const closeClass = new Lucide_x();
      dismissNode = await closeClass.create({
        color: { r: 0.4, g: 0.4, b: 0.45 },
        width: 16,
        height: 16
      });
    }

    // --- CONTENT LAYOUT ---
    let contentDefinition: NodeDefinition[];
    const titleText = props.title || "Information";
    const descText = props.description || "This is some information text that provides context.";

    if (variant === "complex") {
      // Complex: Icon on title row, body text below filling the width
      contentDefinition = [
        createFrame("Header Row", {
          layoutMode: "HORIZONTAL",
          itemSpacing: 8,
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          primaryAxisAlignItems: "MIN",
          counterAxisAlignItems: "CENTER",
          layoutAlign: "STRETCH"
        }, [
          // Icon Placeholder
          createFrame("Icon Container", {
            layoutMode: "HORIZONTAL",
            fills: [],
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "AUTO",
            primaryAxisAlignItems: "CENTER",
            counterAxisAlignItems: "CENTER"
          }, []),
          createText("Title", titleText, 16, "Semi Bold", { r: 0.1, g: 0.1, b: 0.12 }, {
            textAutoResize: "HEIGHT",
            layoutGrow: 1
          })
        ]),
        createText("Body", descText, 14, "Regular", { r: 0.2, g: 0.2, b: 0.25 }, {
          layoutAlign: "STRETCH",
          textAutoResize: "HEIGHT",
          lineHeight: { unit: "PERCENT", value: 140 }
        })
      ];
    } else if (variant === "slim") {
      // Slim variant: Icon, inline text, centered
      contentDefinition = [
        createFrame("Icon Container", {
          layoutMode: "HORIZONTAL",
          fills: [],
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          primaryAxisAlignItems: "CENTER",
          counterAxisAlignItems: "CENTER",
        }, []),
        createText("Inline Text", descText, 14, "Medium", { r: 0.1, g: 0.1, b: 0.2 }, {
          layoutGrow: 1,
          textAutoResize: "HEIGHT"
        })
      ];
    } else {
      // Simple variant: Icon, inline text
      contentDefinition = [
        createFrame("Icon Container", {
          layoutMode: "HORIZONTAL",
          fills: [],
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          primaryAxisAlignItems: "CENTER",
          counterAxisAlignItems: "CENTER",
          paddingTop: 2 // visual alignment tweak
        }, []),
        createText("Inline Text", descText, 14, "Medium", { r: 0.1, g: 0.1, b: 0.15 }, {
          layoutGrow: 1, // Fill remaining width
          textAutoResize: "HEIGHT",
          lineHeight: { unit: "PERCENT", value: 140 }
        })
      ];
    }

    // --- ROOT STRUCTURE ---
    const structure: NodeDefinition = createFrame("Info Block", {
      layoutMode: variant === "complex" ? "VERTICAL" : "HORIZONTAL",
      itemSpacing: variant === "complex" ? 8 : 12,
      paddingTop: variant === "slim" ? 6 : 16,
      paddingRight: variant === "slim" ? 12 : 16,
      paddingBottom: variant === "slim" ? 6 : 16,
      paddingLeft: variant === "slim" ? 12 : 16,
      primaryAxisSizingMode: variant === "complex" ? "AUTO" : "FIXED", // For VERTICAL, primary is HEIGHT (hug). For HORIZONTAL, primary is WIDTH (fixed/stretch).
      counterAxisSizingMode: variant === "complex" ? "FIXED" : "AUTO", // For VERTICAL, counter is WIDTH (fixed/stretch). For HORIZONTAL, counter is HEIGHT (hug).
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: variant === "slim" ? "CENTER" : "MIN",
      fills: [{ type: "SOLID", color: config.bgColor }],
      cornerRadius: variant === "slim" ? 6 : 8,
      layoutProps: { width: props.width && props.width !== "fill" ? props.width : undefined }
    }, [
      // Embedded structure based on variant
      ...(variant === "complex" ? contentDefinition : [
        ...contentDefinition,
        // Add Dismiss placeholder natively to the horizontal root layout if Simple/Slim
        ...(dismissNode ? [
          createFrame("Dismiss Container", {
            layoutMode: "HORIZONTAL",
            fills: [],
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "AUTO",
            paddingTop: variant === "slim" ? 0 : 2,
            primaryAxisAlignItems: "CENTER",
            counterAxisAlignItems: "CENTER"
          }, [])
        ] : [])
      ])
    ]);

    const root = await this.renderDefinition(structure) as FrameNode;

    // INJECTION: Complex variant needs its dismiss injected differently if wanted, 
    // usually top right. For now, if complex we inject dismiss to Header Row
    if (variant === "complex" && dismissNode) {
      const headerRow = root.findOne(n => n.name === "Header Row") as FrameNode;
      if (headerRow) {
        const dismissWrapper = figma.createFrame();
        dismissWrapper.name = "Dismiss Container";
        dismissWrapper.layoutMode = "HORIZONTAL";
        dismissWrapper.primaryAxisSizingMode = "AUTO";
        dismissWrapper.counterAxisSizingMode = "AUTO";
        dismissWrapper.primaryAxisAlignItems = "CENTER";
        dismissWrapper.counterAxisAlignItems = "CENTER";
        dismissWrapper.fills = [];
        dismissWrapper.appendChild(dismissNode);
        headerRow.appendChild(dismissWrapper);
      }
    }

    // INJECTION: Icons
    const iconContainer = root.findOne(n => n.name === "Icon Container" && n.type === "FRAME") as FrameNode;
    if (iconContainer) iconContainer.appendChild(iconNode);

    const dismissContainer = root.findOne(n => n.name === "Dismiss Container" && n.type === "FRAME") as FrameNode;
    if (dismissContainer && dismissNode && (variant === "simple" || variant === "slim")) dismissContainer.appendChild(dismissNode);

    // Apply fill
    if (props.width === "fill") {
      root.layoutAlign = "STRETCH";
    }

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

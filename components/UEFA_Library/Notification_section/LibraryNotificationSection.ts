import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

export interface LibraryNotificationSectionProps extends ComponentProps {
  sectionIndex?: number;
  title?: string;
  expanded?: boolean;
}

const DEFAULT_TITLES = ["Subject", "Organisations", "Uploaded by", "My programs"];

export class LibraryNotificationSection extends BaseComponent {
  async create(props: LibraryNotificationSectionProps): Promise<SceneNode> {
    const index = Math.max(0, Math.min(DEFAULT_TITLES.length - 1, props.sectionIndex ?? 0));
    const title = props.title ?? DEFAULT_TITLES[index];
    const expanded = props.expanded ?? index === 0;

    const structure: NodeDefinition = createFrame(`Notification Section ${index + 1}`, {
      layoutMode: "VERTICAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "FIXED",
      itemSpacing: 24,
      paddingTop: 24,
      paddingRight: 24,
      paddingBottom: 24,
      paddingLeft: 24,
      fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      effects: [{ type: "DROP_SHADOW", visible: true, color: { r: 0, g: 0, b: 0, a: 0.12 }, radius: 6, offset: { x: 0, y: 2 }, spread: 0, blendMode: "NORMAL", showShadowBehindNode: true }],
      cornerRadius: 8,
      layoutSizingHorizontal: "FILL",
      layoutSizingVertical: "HUG",
      layoutProps: { width: 1440 }
    }, [
      createFrame("Section Header", {
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "SPACE_BETWEEN",
        counterAxisAlignItems: "CENTER",
        fills: [],
        layoutSizingHorizontal: "FILL",
        layoutProps: { width: 1392 }
      }, [
        createText("Section Title", title, 20, "SemiBold", { r: 0.102, g: 0.192, b: 0.235 }, {
          font: { family: "Open Sans", style: "SemiBold" },
          lineHeight: { unit: "PIXELS", value: 25 }
        }),
        createText("Expand Icon", expanded ? "▴" : "▾", 16, "Regular", { r: 0.102, g: 0.192, b: 0.235 }, {
          font: { family: "Open Sans", style: "Regular" }
        })
      ]),
      ...(expanded ? [this.buildOptionsBlock()] : [])
    ]);

    const root = await this.renderDefinition(structure);
    root.name = `LibraryNotificationSection-${index + 1}`;
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }

  private buildOptionsBlock(): NodeDefinition {
    const options = ["Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name"];
    return createFrame("Section Options", {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      itemSpacing: 32,
      layoutWrap: "WRAP",
      fills: [],
      layoutSizingHorizontal: "FILL",
      layoutProps: { width: 1392 }
    }, options.map((label, idx) => createFrame(`Option ${idx + 1}`, {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      itemSpacing: 8,
      fills: []
    }, [
      createText("Checkbox", "▢", 16, "Regular", { r: 0.102, g: 0.192, b: 0.235 }, { font: { family: "Open Sans", style: "Regular" } }),
      createText("Label", label, 14, "Regular", { r: 0.102, g: 0.192, b: 0.235 }, { font: { family: "Open Sans", style: "Regular" } })
    ])));
  }
}

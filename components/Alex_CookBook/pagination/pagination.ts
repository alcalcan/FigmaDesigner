import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";
import { Lucide_chevron_down, Lucide_chevron_left, Lucide_chevron_right } from "../../index";

export interface PaginationProps extends ComponentProps {
  width?: number | "fill";
  itemsPerPageLabel?: string;
  itemsPerPageValue?: string | number;
  rangeLabel?: string;
  pageLabel?: string;
  firstLabel?: string;
  lastLabel?: string;
  showFirstLast?: boolean;
  firstDisabled?: boolean;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  lastDisabled?: boolean;
  accentColor?: RGB;
  textColor?: RGB;
  mutedColor?: RGB;
  borderColor?: RGB;
}

export class pagination extends BaseComponent {
  async create(props: PaginationProps): Promise<SceneNode> {
    const width = props.width === "fill" || props.width === undefined ? 1077 : props.width;

    const textColor = props.textColor ?? { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 };
    const mutedColor = props.mutedColor ?? { r: 0.5058823823928833, g: 0.5960784554481506, b: 0.6392157077789307 };
    const accentColor = props.accentColor ?? { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 };
    const borderColor = props.borderColor ?? { r: 0.7019608020782471, g: 0.7529411911964417, b: 0.772549033164978 };

    const itemsPerPageLabel = props.itemsPerPageLabel ?? "Items per page";
    const itemsPerPageValue = String(props.itemsPerPageValue ?? 10);
    const rangeLabel = props.rangeLabel ?? "1 - 10 of 50";
    const pageLabel = props.pageLabel ?? "Page 1 of 5";
    const firstLabel = props.firstLabel ?? "First";
    const lastLabel = props.lastLabel ?? "Last";

    const showFirstLast = props.showFirstLast ?? true;
    const firstDisabled = props.firstDisabled ?? true;
    const prevDisabled = props.prevDisabled ?? true;
    const nextDisabled = props.nextDisabled ?? false;
    const lastDisabled = props.lastDisabled ?? false;

    const structure: NodeDefinition = createFrame("Pagination", {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "SPACE_BETWEEN",
      counterAxisAlignItems: "CENTER",
      itemSpacing: 100,
      layoutAlign: props.width === "fill" ? "STRETCH" : "INHERIT",
      layoutSizingHorizontal: props.width === "fill" ? "FILL" : "FIXED",
      layoutSizingVertical: "HUG",
      fills: [],
      layoutProps: { width }
    }, [
      createFrame("Pagination Summary", {
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        counterAxisAlignItems: "CENTER",
        itemSpacing: 8,
        fills: []
      }, [
        createText("Items Per Page Label", itemsPerPageLabel, 14, "Regular", textColor, {
          font: { family: "Open Sans", style: "Regular" },
          textAlignVertical: "CENTER",
          textAutoResize: "WIDTH_AND_HEIGHT"
        }),
        createFrame("Items Select", {
          layoutMode: "HORIZONTAL",
          primaryAxisSizingMode: "AUTO",
          counterAxisSizingMode: "AUTO",
          counterAxisAlignItems: "CENTER",
          itemSpacing: 12,
          paddingTop: 10,
          paddingRight: 12,
          paddingBottom: 10,
          paddingLeft: 12,
          cornerRadius: 4,
          fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
          strokes: [{ type: "SOLID", color: borderColor }]
        }, [
          createText("Items Per Page Value", itemsPerPageValue, 14, "Regular", mutedColor, {
            font: { family: "Open Sans", style: "Regular" },
            textAlignVertical: "CENTER",
            textAutoResize: "WIDTH_AND_HEIGHT"
          }),
          {
            type: "COMPONENT",
            name: "Items Per Page Chevron",
            component: Lucide_chevron_down,
            props: { width: 16, height: 16, strokeWeight: 2, color: borderColor },
            layoutProps: { parentIsAutoLayout: true, width: 16, height: 16 }
          } as NodeDefinition
        ]),
        createText("Range Label", rangeLabel, 14, "Regular", textColor, {
          font: { family: "Open Sans", style: "Regular" },
          textAlignVertical: "CENTER",
          textAutoResize: "WIDTH_AND_HEIGHT"
        })
      ]),
      createFrame("Pagination Controls", {
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        counterAxisAlignItems: "CENTER",
        itemSpacing: 8,
        fills: []
      }, [
        ...(showFirstLast
          ? [createText("First Link", firstLabel, 14, "Regular", firstDisabled ? mutedColor : accentColor, {
            font: { family: "Open Sans", style: "Regular" },
            textAlignVertical: "CENTER",
            textAutoResize: "WIDTH_AND_HEIGHT"
          })]
          : []),
        {
          type: "COMPONENT",
          name: "Previous Page",
          component: Lucide_chevron_left,
          props: { width: 24, height: 24, strokeWeight: 2, color: prevDisabled ? mutedColor : accentColor },
          layoutProps: { parentIsAutoLayout: true, width: 24, height: 24 }
        } as NodeDefinition,
        createText("Page Label", pageLabel, 14, "Regular", textColor, {
          font: { family: "Open Sans", style: "Regular" },
          textAlignVertical: "CENTER",
          textAutoResize: "WIDTH_AND_HEIGHT"
        }),
        {
          type: "COMPONENT",
          name: "Next Page",
          component: Lucide_chevron_right,
          props: { width: 24, height: 24, strokeWeight: 2, color: nextDisabled ? mutedColor : accentColor },
          layoutProps: { parentIsAutoLayout: true, width: 24, height: 24 }
        } as NodeDefinition,
        ...(showFirstLast
          ? [createText("Last Link", lastLabel, 14, "Regular", lastDisabled ? mutedColor : accentColor, {
            font: { family: "Open Sans", style: "Regular" },
            textAlignVertical: "CENTER",
            textAutoResize: "WIDTH_AND_HEIGHT"
          })]
          : [])
      ])
    ]);

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

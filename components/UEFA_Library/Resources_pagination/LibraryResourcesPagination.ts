import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";
import { Lucide_chevron_down, Lucide_chevron_left, Lucide_chevron_right } from "../../index";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";

const COLOR_PRIMARY = { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 };
const COLOR_MUTED = { r: 0.5058823823928833, g: 0.5960784554481506, b: 0.6392157077789307 };
const COLOR_ACCENT = { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 };
const COLOR_BORDER = { r: 0.7019608020782471, g: 0.7529411911964417, b: 0.772549033164978 };

export class LibraryResourcesPagination extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("Resources Pagination", {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      primaryAxisAlignItems: "SPACE_BETWEEN",
      counterAxisAlignItems: "CENTER",
      itemSpacing: 100,
      paddingTop: 0,
      paddingBottom: 0,
      layoutAlign: "STRETCH",
      layoutSizingHorizontal: "FILL",
      layoutSizingVertical: "HUG",
      layoutProps: { width: 1077 }
    }, [
      createFrame("Pagination Summary", {
        layoutMode: "HORIZONTAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        counterAxisAlignItems: "CENTER",
        itemSpacing: 8,
        fills: []
      }, [
        createText("Items Label", "Items per page", 14, "Regular", COLOR_PRIMARY, {
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
          strokes: [{ type: "SOLID", color: COLOR_BORDER }]
        }, [
          createText("Items Value", "10", 14, "Regular", { r: 0.3490196168422699, g: 0.43921568989753723, b: 0.48235294222831726 }, {
            font: { family: "Open Sans", style: "Regular" },
            textAlignVertical: "CENTER",
            textAutoResize: "WIDTH_AND_HEIGHT"
          }),
          {
            type: "COMPONENT",
            name: "Items Chevron",
            component: Lucide_chevron_down,
            props: { width: 16, height: 16, strokeWeight: 2, color: COLOR_BORDER },
            layoutProps: { parentIsAutoLayout: true, width: 16, height: 16 }
          }
        ]),
        createText("Item Range", "1 - 10 of 50", 14, "Regular", COLOR_PRIMARY, {
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
        createText("First Link", "First", 14, "Regular", COLOR_MUTED, {
          font: { family: "Open Sans", style: "Regular" },
          textAlignVertical: "CENTER",
          textAutoResize: "WIDTH_AND_HEIGHT"
        }),
        {
          type: "COMPONENT",
          name: "Prev Icon",
          component: Lucide_chevron_left,
          props: { width: 24, height: 24, strokeWeight: 2, color: COLOR_MUTED },
          layoutProps: { parentIsAutoLayout: true, width: 24, height: 24 }
        },
        createText("Page Label", "Page 1 of 5", 14, "Regular", COLOR_PRIMARY, {
          font: { family: "Open Sans", style: "Regular" },
          textAlignVertical: "CENTER",
          textAutoResize: "WIDTH_AND_HEIGHT"
        }),
        {
          type: "COMPONENT",
          name: "Next Icon",
          component: Lucide_chevron_right,
          props: { width: 24, height: 24, strokeWeight: 2, color: COLOR_ACCENT },
          layoutProps: { parentIsAutoLayout: true, width: 24, height: 24 }
        },
        createText("Last Link", "Last", 14, "Regular", COLOR_ACCENT, {
          font: { family: "Open Sans", style: "Regular" },
          textAlignVertical: "CENTER",
          textAutoResize: "WIDTH_AND_HEIGHT"
        })
      ])
    ]);

    const root = await this.renderDefinition(structure);
    normalizeLibraryLayerNames(root);
    if (props.x !== undefined) root.x = props.x;
    if (props.y !== undefined) root.y = props.y;
    return root;
  }
}

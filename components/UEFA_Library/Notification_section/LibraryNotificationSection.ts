import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";
import { Lucide_chevron_down } from "../../index";
import { button } from "../../Alex_CookBook/button/button";
import { chip_expand } from "../../Alex_CookBook/chip_expand/chip_expand";
import { checkbox } from "../../Alex_CookBook/checkbox/checkbox";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";

interface NotificationSectionOption {
  label: string;
  checked?: boolean;
}

export interface LibraryNotificationSectionProps extends ComponentProps {
  sectionIndex?: number;
  title?: string;
  expanded?: boolean;
  options?: Array<string | NotificationSectionOption>;
  actionLabel?: string;
  selectedLabel?: string;
  selectedCount?: number;
  showChevronButton?: boolean;
}

const DEFAULT_TITLES = ["Subject", "Organisations", "Uploaded by", "My programs"];

export class LibraryNotificationSection extends BaseComponent {
  async create(props: LibraryNotificationSectionProps): Promise<SceneNode> {
    const index = Math.max(0, Math.min(DEFAULT_TITLES.length - 1, props.sectionIndex ?? 0));
    const title = props.title ?? DEFAULT_TITLES[index];
    const expanded = props.expanded ?? index === 0;
    const options = (props.options ?? ["Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name", "Filter name"])
      .map((option): NotificationSectionOption => (typeof option === "string" ? { label: option } : option));
    const actionLabel = props.actionLabel;
    const selectedLabel = props.selectedLabel;
    const selectedCount = props.selectedCount ?? 0;
    const showChevronButton = props.showChevronButton ?? false;

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
        this.buildHeaderControls({ actionLabel, selectedLabel, selectedCount, showChevronButton, expanded })
      ]),
      ...(expanded ? [this.buildOptionsBlock(options)] : [])
    ]);

    const root = await this.renderDefinition(structure);
    root.name = `LibraryNotificationSection-${index + 1}`;
    normalizeLibraryLayerNames(root);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }

  private buildHeaderControls(args: {
    actionLabel?: string;
    selectedLabel?: string;
    selectedCount: number;
    showChevronButton: boolean;
    expanded: boolean;
  }): NodeDefinition {
    const hasChip = Boolean(args.selectedLabel || args.actionLabel);
    const chipLabel = args.selectedLabel ?? args.actionLabel ?? "";

    if (!hasChip && !args.showChevronButton) {
      return createText("Expand Icon", args.expanded ? "▴" : "▾", 16, "Regular", { r: 0.102, g: 0.192, b: 0.235 }, {
        font: { family: "Open Sans", style: "Regular" }
      });
    }

    return createFrame("Header Controls", {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      itemSpacing: 16,
      counterAxisAlignItems: "CENTER",
      fills: []
    }, [
      hasChip
        ? {
          type: "COMPONENT",
          component: chip_expand,
          name: "Selection Chip",
          props: {
            text: chipLabel,
            count: args.selectedCount,
            showChevron: false,
            outlined: true,
            cornerRadius: 100,
            fillColor: { r: 1, g: 1, b: 1 },
            borderColor: { r: 0, g: 0.6352941393852234, b: 0.5882353186607361 },
            textColor: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 },
            countColor: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }
          },
          layoutProps: {
            parentIsAutoLayout: true
          }
        } as NodeDefinition
        : null,
      args.showChevronButton
        ? {
          type: "COMPONENT",
          component: button,
          name: "Chevron Button",
          props: {
            variant: "icon",
            size: "medium",
            frontIcon: Lucide_chevron_down,
            iconSize: 24,
            cornerRadius: 100,
            baseColor: { r: 0.9450980424880981, g: 0.9529411792755127, b: 0.9725490212440491 },
            textColor: { r: 0.10196078568696976, g: 0.1921568661928177, b: 0.23529411852359772 }
          },
          layoutProps: {
            parentIsAutoLayout: true
          }
        } as NodeDefinition
        : null
    ]);
  }

  private buildOptionsBlock(options: NotificationSectionOption[]): NodeDefinition {
    const pairStartIndex = Math.ceil(options.length / 2);
    const optionGroups: NodeDefinition[] = [];

    for (let index = 0; index < pairStartIndex; index += 1) {
      const left = options[index];
      const right = options[index + pairStartIndex];

      optionGroups.push(createFrame(`Option Pair ${index + 1}`, {
        layoutMode: "VERTICAL",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        itemSpacing: 12,
        fills: []
      }, [
        this.buildCheckboxOption(left, `Option ${index + 1}A`),
        right ? this.buildCheckboxOption(right, `Option ${index + 1}B`) : null
      ]));
    }

    return createFrame("Section Options", {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "AUTO",
      itemSpacing: 32,
      layoutWrap: "NO_WRAP",
      fills: [],
      layoutSizingHorizontal: "FILL",
      layoutProps: { width: 1392 }
    }, optionGroups);
  }

  private buildCheckboxOption(option: NotificationSectionOption, name: string): NodeDefinition {
    return createFrame(name, {
      layoutMode: "HORIZONTAL",
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      itemSpacing: 8,
      fills: []
    }, [
      {
        type: "COMPONENT",
        component: checkbox,
        name: "Filter Checkbox",
        props: {
          characterOverride: option.label,
          checked: option.checked ?? false,
          boxCornerRadius: 4,
          hugContents: true,
          paddingLeft: 0,
          strokeTopWeight: 0,
          strokeRightWeight: 0,
          strokeBottomWeight: 0,
          strokeLeftWeight: 0
        },
        layoutProps: {
          parentIsAutoLayout: true
        }
      } as NodeDefinition
    ]);
  }
}

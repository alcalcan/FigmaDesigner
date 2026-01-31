import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText, createVector, createLine } from "../../ComponentHelpers";
import { checkbox } from "../checkbox/checkbox";
import { toggle } from "../toggle/toggle";
import { accordion } from "../accordion/accordion";
import { input_field } from "../input_field/input_field";

export interface SidebarFilteringProps extends ComponentProps {
  favouritesTitle?: string;
  filtersTitle?: string;
  searchPlaceholder?: string;
  subjectsTitle?: string;
  initiativeTitle?: string;
  initiativeItems?: { name: string, isSelected: boolean }[];
  organisationTitle?: string;
  favouriteToggleIsOn?: boolean;
}

// SVG Assets
import SVG_Star_Stroke from "./assets/sidebar_assets_icon_Vector__Stroke__1142_1197_svg_22_000059127807617x21_020004272460938.svg";
import SEARCH_ICON from "../input_field/assets/search_icon.svg";

export class sidebar_filtering extends BaseComponent {
  async create(props: SidebarFilteringProps): Promise<SceneNode> {
    const favouritesTitle = props.favouritesTitle ?? "Favourites";
    const filtersTitle = props.filtersTitle ?? "Filters";
    const searchPlaceholder = props.searchPlaceholder ?? "Grow";
    const initiativeItems = props.initiativeItems ?? [
      { name: "UEFA Academy", isSelected: false },
      { name: "UEFA Assist", isSelected: false },
      { name: "UEFA Events", isSelected: false },
      { name: "UEFA Football Development", isSelected: false },
      { name: "UEFA Grow", isSelected: true },
      { name: "UEFA Hatrick", isSelected: false },
      { name: "UEFA Anti-Doping and Medical", isSelected: false },
      { name: "UEFA Intelligence Center", isSelected: false }
    ];

    const structure: NodeDefinition = createFrame("sidebar_filtering", {
      layoutMode: "VERTICAL",
      itemSpacing: 16,
      paddingRight: 16,
      paddingLeft: 16,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "AUTO",
      layoutProps: { width: 328 }
    }, [
      // Favourites Header
      createFrame("Favourites Row", {
        layoutMode: "HORIZONTAL",
        itemSpacing: 16,
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        counterAxisAlignItems: "CENTER",
        layoutAlign: "STRETCH",
        layoutProps: { height: 25 }
      }, [
        createFrame("Title Group", {
          layoutMode: "HORIZONTAL",
          itemSpacing: 4,
          primaryAxisSizingMode: "FIXED",
          counterAxisSizingMode: "AUTO",
          counterAxisAlignItems: "CENTER",
          layoutGrow: 1
        }, [
          createFrame("Star Icon Wrapper", {
            layoutMode: "NONE",
            clipsContent: true,
            layoutProps: { width: 24, height: 24 }
          }, [
            createVector("Star Icon", SVG_Star_Stroke, {
              layoutProps: {
                parentIsAutoLayout: false,
                width: 22,
                height: 21,
                relativeTransform: [[1, 0, 1], [0, 1, 1]]
              },
              strokes: [{ type: "SOLID", color: { r: 0.1, g: 0.19, b: 0.24 } }],
              strokeWeight: 2
            })
          ]),
          createText("Favourites Label", favouritesTitle, 20, "SemiBold", { r: 0.1, g: 0.19, b: 0.24 }, {
            font: { family: "Open Sans", style: "SemiBold" },
            lineHeight: { unit: "PIXELS", value: 25 },
            layoutGrow: 1
          })
        ]),
        {
          type: "COMPONENT",
          name: "Toggle",
          component: toggle,
          props: {
            isOn: props.favouriteToggleIsOn ?? true
          },
          layoutProps: {
            parentIsAutoLayout: true,
            width: 42,
            height: 22
          }
        }
      ]),
      // Separator
      createLine("Line", {
        strokes: [{ type: "SOLID", color: { r: 0.816, g: 0.847, b: 0.859 } }],
        layoutAlign: "STRETCH"
      }),
      // Filters Header
      createFrame("Filters Row", {
        layoutMode: "HORIZONTAL",
        itemSpacing: 16,
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        counterAxisAlignItems: "CENTER",
        layoutAlign: "STRETCH",
        layoutProps: { height: 40 }
      }, [
        createText("Filters Label", filtersTitle, 20, "SemiBold", { r: 0.1, g: 0.19, b: 0.24 }, {
          font: { family: "Open Sans", style: "SemiBold" },
          lineHeight: { unit: "PIXELS", value: 25 },
          layoutGrow: 1
        }),
        createFrame("Search Toggle Button", {
          layoutMode: "HORIZONTAL",
          paddingTop: 8,
          paddingRight: 8,
          paddingBottom: 8,
          paddingLeft: 8,
          fills: [{ type: "SOLID", color: { r: 0.945, g: 0.953, b: 0.973 } }],
          cornerRadius: 100,
          layoutProps: { width: 40, height: 40 }
        }, [
          createVector("Search Icon", SEARCH_ICON, {
            fills: [{ type: "SOLID", color: { r: 0.1, g: 0.19, b: 0.24 } }],
            layoutProps: { width: 18, height: 18 }
          })
        ])
      ]),
      // Search Input
      {
        type: "COMPONENT",
        component: input_field,
        props: {
          placeholder: searchPlaceholder,
          value: "",
          helperText: "1 result",
          type: "simple",
          showSearchIcon: true,
          searchIconPosition: "front",
          helperType: "info"
        }
      },
      // Accordions
      {
        type: "COMPONENT",
        component: accordion,
        props: {
          title: props.subjectsTitle ?? "SUBJECT",
          isExpanded: false
        }
      },
      {
        type: "COMPONENT",
        component: accordion,
        props: {
          title: props.initiativeTitle ?? "UEFA INITIATIVE",
          isExpanded: true,
          titleColor: { r: 0, g: 0.635, b: 0.588 },
          children: initiativeItems.map(item => ({
            type: "COMPONENT",
            component: checkbox,
            props: {
              characterOverride: item.name,
              checked: item.isSelected
            }
          }))
        }
      },
      {
        type: "COMPONENT",
        component: accordion,
        props: {
          title: props.organisationTitle ?? "ORGANISATION",
          isExpanded: false
        }
      }
    ]);

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

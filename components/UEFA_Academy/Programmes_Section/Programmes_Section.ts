import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { ProgrammesCategorySection } from "./ProgrammesCategorySection";
import { Main_Header } from "./Main_Header";

// SVG Assets
import SVG_Programmes_Section_assets_vector_Vector_761_157647_svg_873x838_override from "./assets/Programmes_Section_assets_vector_Vector_761_157647_svg_873x838_override.svg";

// PNG Assets
import IMG_Programmes_Section_img_2_png from "./assets/Programmes_Section_img_2.png";
import IMG_Programmes_Section_img_4_png from "./assets/Programmes_Section_img_4.png";
import IMG_Programmes_Section_img_5_png from "./assets/Programmes_Section_img_5.png";
import IMG_Programmes_Section_img_6_png from "./assets/Programmes_Section_img_6.png";
import IMG_Programmes_Section_img_11_png from "./assets/Programmes_Section_img_11.png";

export class Programmes_Section extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      type: "FRAME",
      name: "Programmes Section",
      props: {
        layoutMode: "VERTICAL",
        itemSpacing: 64,
        paddingLeft: 210,
        paddingRight: 210,
        paddingTop: 64,
        paddingBottom: 64,
        layoutSizingHorizontal: "FIXED",
        layoutSizingVertical: "HUG",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        fills: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
      },
      layoutProps: { width: 1680 },
      children: [
        {
          type: "FRAME",
          name: "homebg.svg",
          props: {
            fills: [],
          },
          layoutProps: { width: 873, height: 899, x: 119.5, y: -61, layoutPositioning: "ABSOLUTE" },
          children: [
            {
              type: "VECTOR",
              name: "Background Vector",
              svgContent: SVG_Programmes_Section_assets_vector_Vector_761_157647_svg_873x838_override,
              props: {
                fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, opacity: 0.02 }],
              },
              layoutProps: { width: 873, height: 838 },
            },
          ],
        },
        {
          type: "COMPONENT",
          name: "Main Header",
          component: Main_Header,
          props: { title: "Explore our programmes" },
          layoutProps: { layoutSizingHorizontal: "FILL", layoutSizingVertical: "HUG" },
        },
        {
          type: "COMPONENT",
          name: "Category: Apply Soon",
          component: ProgrammesCategorySection,
          props: {
            title: "Apply Soon",
            count: 1,
            cards: [
              {
                title: "UEFA Team Management Programme (UEFA TMP)",
                image: IMG_Programmes_Section_img_2_png,
                category: "Team and player management programmes",
                deadline: "30.11",
                deliveryTypes: ["E-learning", "Face-to-Face"],
                skills: ["Soft skills", "Hard skills"],
                hours: "30h +",
              },
            ],
          },
          layoutProps: { layoutSizingHorizontal: "FILL", layoutSizingVertical: "HUG" },
        },
        {
          type: "COMPONENT",
          name: "Category: Open for applications",
          component: ProgrammesCategorySection,
          props: {
            title: "Open for applications",
            count: 3,
            cards: [
              {
                title: "UEFA Diploma in Football Management (UEFA DFM)",
                image: IMG_Programmes_Section_img_4_png,
                category: "Management and leadership programmes",
                deliveryTypes: ["Blended"],
                skills: ["Strategic mgmt", "Operational mgmt"],
                hours: "250h",
              },
              {
                title: "UEFA Certificate in Football Management (UEFA CFM)",
                image: IMG_Programmes_Section_img_5_png,
                category: "Management and leadership programmes",
                deliveryTypes: ["Blended"],
                skills: ["Marketing", "HR", "Strategic"],
                hours: "150h",
              },
              {
                title: "UEFA Women in Football Leadership Programme",
                image: IMG_Programmes_Section_img_6_png,
                category: "Management and leadership programmes",
                deliveryTypes: ["Face-to-Face"],
                skills: ["Leadership", "Empowerment"],
                hours: "40h",
              },
            ],
          },
          layoutProps: { layoutSizingHorizontal: "FILL", layoutSizingVertical: "HUG" },
        },
        {
          type: "COMPONENT",
          name: "Category: Upcoming",
          component: ProgrammesCategorySection,
          props: {
            title: "Upcoming",
            count: 1,
            cards: [
              {
                title: "UEFA Executive Master in European Sport Governance",
                image: IMG_Programmes_Section_img_11_png,
                category: "Governance programmes",
                deliveryTypes: ["Face-to-Face"],
                skills: ["Governance", "Policy"],
                hours: "300h",
              },
            ],
          },
          layoutProps: { layoutSizingHorizontal: "FILL", layoutSizingVertical: "HUG" },
        },
      ],
    };

    return this.renderDefinition(structure);
  }
}

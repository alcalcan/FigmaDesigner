import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { S_and_ECard } from "./S_and_ECard";

export class S_and_ESection extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const cards = (props.cards as Array<Record<string, string>> | undefined) ?? [
      { title: "PRICELESS MOMENTS", ctaText: "Watch now", imageVariant: "1" },
      { title: "PRICELESS MOMENTS", ctaText: "Watch now", imageVariant: "2" }
    ];

    const structure: NodeDefinition = {
      type: "FRAME",
      name: "S&E",
      props: {
        visible: true,
        opacity: 1,
        locked: false,
        blendMode: "PASS_THROUGH",
        isMask: false,
        maskType: "ALPHA",
        clipsContent: false,
        layoutMode: "HORIZONTAL",
        itemSpacing: 16,
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "AUTO",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        fills: [],
        strokes: [],
        effects: [],
        cornerRadius: 0,
        layoutSizingHorizontal: "HUG",
        layoutSizingVertical: "HUG"
      },
      layoutProps: {
        parentIsAutoLayout: false,
        layoutPositioning: "AUTO",
        width: 544,
        height: 386,
        constraints: { horizontal: "MIN", vertical: "MIN" }
      },
      children: cards.map((c, i) => ({
        type: "COMPONENT",
        name: `S&E Card ${i + 1}`,
        component: S_and_ECard,
        props: { title: c.title, ctaText: c.ctaText, imageVariant: c.imageVariant }
      }))
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

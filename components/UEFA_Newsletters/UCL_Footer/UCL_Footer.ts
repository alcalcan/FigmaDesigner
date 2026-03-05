import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { FooterSection } from "./FooterSection";

export class UCL_Footer extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      type: "FRAME",
      name: "UCL_Footer",
      props: {
        visible: true,
        opacity: 1,
        locked: false,
        blendMode: "PASS_THROUGH",
        isMask: false,
        maskType: "ALPHA",
        clipsContent: false,
        layoutMode: "NONE",
        fills: [],
        strokes: [],
        effects: [],
        cornerRadius: 0,
        layoutSizingHorizontal: "FIXED",
        layoutSizingVertical: "FIXED"
      },
      layoutProps: { width: 600, height: 693, parentIsAutoLayout: false },
      children: [
        { type: "COMPONENT", name: "Footer", component: FooterSection, props: {} }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

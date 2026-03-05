import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { S_and_ESection } from "./S_and_ESection";

export class UCL_S_and_E extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      type: "FRAME",
      name: "UCL_S_and_E",
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
      layoutProps: { width: 544, height: 386, parentIsAutoLayout: false },
      children: [
        { type: "COMPONENT", name: "S&E", component: S_and_ESection, props: {} }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { ResultsSection } from "./ResultsSection";

export class UCL_Results extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      type: "FRAME",
      name: "UCL_Results",
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
      layoutProps: { width: 552, height: 344, parentIsAutoLayout: false },
      children: [
        {
          type: "COMPONENT",
          name: "Results",
          component: ResultsSection,
          props: {
            title: props.title,
            matches: props.matches,
            ctaText: props.ctaText
          }
        }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

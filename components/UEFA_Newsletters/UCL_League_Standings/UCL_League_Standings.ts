import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { LeagueStandingsSection } from "./LeagueStandingsSection";

export class UCL_League_Standings extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      type: "FRAME",
      name: "UCL_League_Standings",
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
      layoutProps: { width: 552, height: 442, parentIsAutoLayout: false },
      children: [
        { type: "COMPONENT", name: "League standings", component: LeagueStandingsSection, props: { title: props.title, rows: props.rows, ctaText: props.ctaText } }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

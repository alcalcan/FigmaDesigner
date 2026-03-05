import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { ResultsSection } from "./ResultsSection";

export class UCL_Upcoming_Matches extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const defaultMatches = [
      {
        homeTeam: "Ajax",
        homeCrest: "Ajax",
        awayTeam: "Benfica",
        awayCrest: "Benfica",
        centerText: "VS",
        matchTime: "TUE 14 MAR, 18:55 CET"
      },
      {
        homeTeam: "Ajax",
        homeCrest: "Ajax",
        awayTeam: "Benfica",
        awayCrest: "Benfica",
        centerText: "VS",
        matchTime: "TUE 14 MAR, 18:55 CET"
      }
    ];

    const structure: NodeDefinition = {
      type: "FRAME",
      name: "UCL_Upcoming_Matches",
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
      layoutProps: { width: 552, height: 404, parentIsAutoLayout: false },
      children: [
        {
          type: "COMPONENT",
          name: "Upcoming matches",
          component: ResultsSection,
          props: {
            variant: "upcoming",
            title: props.title ?? "UPCOMING MATCHES",
            matches: props.matches ?? defaultMatches,
            ctaText: props.ctaText ?? "See all matches",
            rowSpacing: props.rowSpacing ?? 4
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

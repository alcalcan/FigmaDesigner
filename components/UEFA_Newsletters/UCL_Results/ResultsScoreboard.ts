import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame } from "../../ComponentHelpers";
import { ScoreRow } from "./ScoreRow";

export class ResultsScoreboard extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const variant = String(props.variant ?? "results").toLowerCase();
    const isUpcoming = variant === "upcoming";
    const matches = (props.matches as Array<Record<string, string | number>> | undefined) ?? [
      { homeTeam: "Ajax", homeCrest: "Ajax", homeScore: 5, awayScore: 2, awayTeam: "Benfica", awayCrest: "Benfica" },
      { homeTeam: "Ajax", homeCrest: "Ajax", homeScore: 5, awayScore: 2, awayTeam: "Benfica", awayCrest: "Benfica" }
    ];

    const rows: NodeDefinition[] = matches.slice(0, 2).map((m, idx) => ({
      type: "COMPONENT",
      name: `Score Row ${idx + 1}`,
      component: ScoreRow,
      props: {
        variant,
        homeTeam: m.homeTeam,
        homeCrest: m.homeCrest,
        homeScore: m.homeScore,
        awayScore: m.awayScore,
        awayTeam: m.awayTeam,
        awayCrest: m.awayCrest,
        centerText: m.centerText,
        matchTime: m.matchTime
      }
    }));

    const structure: NodeDefinition = createFrame(
      "Results Scoreboard",
      {
        layoutMode: "VERTICAL",
        itemSpacing: Number(props.rowSpacing ?? (isUpcoming ? 4 : 12)),
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "MIN",
        fills: [],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 512, height: isUpcoming ? 184 : 132 }
      },
      rows
    );

    return this.renderDefinition(structure);
  }
}

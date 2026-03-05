import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";
import { LeagueStandingRow } from "./LeagueStandingRow";

export class LeagueStandingsTable extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const rows = (props.rows as Array<Record<string, string | number | boolean>> | undefined) ?? [
      { position: 1, crest: "Manchester_City", team: "MAN UTD", played: 6, points: 14 },
      { position: 2, crest: "Madrid", team: "REAL MADRID", played: 6, points: 14 },
      { position: 3, crest: "Real_Sociedad", team: "REAL SOCIEDAD", played: 6, points: 14 },
      { position: 4, crest: "PSG_Paris", team: "PARIS", played: 6, points: 14, faded: true }
    ];

    const rowNodes: NodeDefinition[] = rows.slice(0, 4).map((row, idx) => ({
      type: "COMPONENT",
      name: `Standing Row ${idx + 1}`,
      component: LeagueStandingRow,
      props: {
        position: row.position,
        crest: row.crest,
        team: row.team,
        played: row.played,
        points: row.points,
        faded: row.faded ?? idx === 3
      },
      layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 512, height: 54, relativeTransform: [[1, 0, 0], [0, 1, 26 + idx * 54]] }
    }));

    const structure: NodeDefinition = createFrame(
      "League Standings Table",
      {
        layoutMode: "NONE",
        fills: [],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 512, height: 242 }
      },
      [
        createText("Header P", "P", 20, "Bold", { r: 1, g: 1, b: 1 }, {
          font: { family: "Champions", style: "Bold" },
          textAlignHorizontal: "CENTER",
          textAutoResize: "NONE",
          lineHeight: { unit: "PERCENT", value: 130 },
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 44, height: 26, relativeTransform: [[1, 0, 423], [0, 1, 0]] }
        }),
        createText("Header Pts", "Pts", 20, "Bold", { r: 1, g: 1, b: 1 }, {
          font: { family: "Champions", style: "Bold" },
          textAlignHorizontal: "CENTER",
          textAutoResize: "NONE",
          lineHeight: { unit: "PERCENT", value: 130 },
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 44, height: 26, relativeTransform: [[1, 0, 468], [0, 1, 0]] }
        }),
        ...rowNodes
      ]
    );

    return this.renderDefinition(structure);
  }
}

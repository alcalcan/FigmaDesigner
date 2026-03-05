import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createRectangle, createText, createVector } from "../../ComponentHelpers";
import { Ajax } from "../../Football_Crests/Ajax/Ajax";
import { Benfica } from "../../Football_Crests/Benfica/Benfica";
import { Madrid } from "../../Football_Crests/Madrid/Madrid";
import { Manchester_City } from "../../Football_Crests/Manchester_City/Manchester_City";
import { PSG_Paris } from "../../Football_Crests/PSG_Paris/PSG_Paris";
import { Real_Sociedad } from "../../Football_Crests/Real_Sociedad/Real_Sociedad";

const CREST_COMPONENTS: Record<string, new () => BaseComponent> = {
  ajax: Ajax,
  benfica: Benfica,
  madrid: Madrid,
  real_madrid: Madrid,
  manchester_city: Manchester_City,
  man_city: Manchester_City,
  psg: PSG_Paris,
  psg_paris: PSG_Paris,
  real_sociedad: Real_Sociedad
};

const resolveCrest = (value: unknown, fallback: new () => BaseComponent): new () => BaseComponent => {
  if (typeof value !== "string") return fallback;
  const key = value.trim().toLowerCase().replace(/\s+/g, "_");
  return CREST_COMPONENTS[key] ?? fallback;
};

export class ScoreRow extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const variant = String(props.variant ?? "results").toLowerCase();
    const isUpcoming = variant === "upcoming";
    const homeTeam = String(props.homeTeam ?? "Ajax");
    const awayTeam = String(props.awayTeam ?? "Benfica");
    const homeScore = String(props.homeScore ?? "5");
    const awayScore = String(props.awayScore ?? "2");
    const centerText = String(props.centerText ?? (isUpcoming ? "VS" : `${homeScore} - ${awayScore}`));
    const matchTime = typeof props.matchTime === "string" ? props.matchTime : undefined;
    const homeCrest = resolveCrest(props.homeCrest ?? homeTeam, Ajax);
    const awayCrest = resolveCrest(props.awayCrest ?? awayTeam, Benfica);

    const leftStrip = `<svg width="232" height="34" viewBox="0 0 232 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H220L232 17L220 34H0V0Z" fill="#1A3DFF"/></svg>`;
    const rightStrip = `<svg width="232" height="34" viewBox="0 0 232 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0H232V34H12L0 17L12 0Z" fill="#1A3DFF"/></svg>`;
    const scorePolygon = `<svg width="96" height="35" viewBox="0 0 96 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0H84L96 17.5L84 35H12L0 17.5L12 0Z" fill="#191B56"/></svg>`;

    const structure: NodeDefinition = createFrame(
      "Score Row",
      {
        layoutMode: "NONE",
        fills: [],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 512, height: matchTime ? 90 : 60 }
      },
      [
        createFrame(
          "Score Strip",
          {
            layoutMode: "NONE",
            fills: [],
            layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 464, height: 35, relativeTransform: [[1, 0, 24], [0, 1, 16]] }
          },
          [
            createRectangle("Top Accent", {
              fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.2549019753932953, g: 0.9764705896377563, b: 0.8470588326454163 } }],
              layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 464, height: 1, relativeTransform: [[1, 0, 0], [0, 1, 0]] }
            }),
            createVector("Left Strip", leftStrip, {
              layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 232, height: 34, relativeTransform: [[1, 0, 0], [0, 1, 1]] }
            }),
            createVector("Right Strip", rightStrip, {
              layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 232, height: 34, relativeTransform: [[1, 0, 232], [0, 1, 1]] }
            }),
            createVector("Score Polygon", scorePolygon, {
              layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 96, height: 35, relativeTransform: [[1, 0, 184], [0, 1, 0]] }
            }),
            createText("Home Team Text", homeTeam.toUpperCase(), 20, "Bold", { r: 1, g: 1, b: 1 }, {
              font: { family: "Champions", style: "Bold" },
              textAlignHorizontal: "CENTER",
              textAutoResize: "NONE",
              lineHeight: { unit: "PERCENT", value: 130 },
              layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 124, height: 26, relativeTransform: [[1, 0, 70], [0, 1, 5]] }
            }),
            createText("Score Text", centerText, 20, "Bold", { r: 1, g: 1, b: 1 }, {
              font: { family: "Champions", style: "Bold" },
              textAlignHorizontal: "CENTER",
              textAutoResize: "NONE",
              lineHeight: { unit: "PERCENT", value: 130 },
              layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 96, height: 26, relativeTransform: [[1, 0, 184], [0, 1, 5]] }
            }),
            createText("Away Team Text", awayTeam.toUpperCase(), 20, "Bold", { r: 1, g: 1, b: 1 }, {
              font: { family: "Champions", style: "Bold" },
              textAlignHorizontal: "CENTER",
              textAutoResize: "NONE",
              lineHeight: { unit: "PERCENT", value: 130 },
              layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 150, height: 26, relativeTransform: [[1, 0, 286], [0, 1, 5]] }
            })
          ]
        ),
        {
          type: "COMPONENT",
          name: "Home Crest",
          component: homeCrest,
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 60, height: 60, relativeTransform: [[1, 0, 0], [0, 1, 0]] }
        },
        {
          type: "COMPONENT",
          name: "Away Crest",
          component: awayCrest,
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 60, height: 60, relativeTransform: [[1, 0, 452], [0, 1, 0]] }
        },
        ...(matchTime
          ? [
              createText("Match Time", matchTime, 20, "Regular", { r: 0.5493977665901184, g: 1, b: 1 }, {
                font: { family: "Champions", style: "Regular" },
                textAlignHorizontal: "CENTER",
                textAutoResize: "NONE",
                lineHeight: { unit: "PERCENT", value: 130 },
                layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 512, height: 26, relativeTransform: [[1, 0, 0], [0, 1, 64]] }
              })
            ]
          : [])
      ]
    );

    return this.renderDefinition(structure);
  }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createRectangle, createText } from "../../ComponentHelpers";
import IMG_Ajax_png from "../../Football_Crests/Ajax/assets/Ajax_img_1.png";
import IMG_Benfica_png from "../../Football_Crests/Benfica/assets/Benfica_img_1.png";
import IMG_Madrid_png from "../../Football_Crests/Madrid/assets/Madrid_img_1.png";
import IMG_Manchester_City_png from "../../Football_Crests/Manchester_City/assets/Manchester_City_img_1.png";
import IMG_PSG_Paris_png from "../../Football_Crests/PSG_Paris/assets/PSG_Paris_img_1.png";
import IMG_Real_Sociedad_png from "../../Football_Crests/Real_Sociedad/assets/Real_Sociedad_img_1.png";

const CREST_IMAGES: Record<string, string> = {
  ajax: IMG_Ajax_png,
  benfica: IMG_Benfica_png,
  madrid: IMG_Madrid_png,
  real_madrid: IMG_Madrid_png,
  manchester_city: IMG_Manchester_City_png,
  man_city: IMG_Manchester_City_png,
  psg: IMG_PSG_Paris_png,
  psg_paris: IMG_PSG_Paris_png,
  paris: IMG_PSG_Paris_png,
  real_sociedad: IMG_Real_Sociedad_png
};

const resolveCrest = (value: unknown, fallbackKey: string): { key: string; assetRef: string } => {
  const fallbackAsset = CREST_IMAGES[fallbackKey] ?? IMG_Manchester_City_png;
  if (typeof value !== "string") return { key: fallbackKey, assetRef: fallbackAsset };
  const key = value.trim().toLowerCase().replace(/\s+/g, "_");
  return { key, assetRef: CREST_IMAGES[key] ?? fallbackAsset };
};

export class LeagueStandingRow extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const pos = String(props.position ?? "1");
    const team = String(props.team ?? "MAN UTD").toUpperCase();
    const played = String(props.played ?? "6");
    const points = String(props.points ?? "14");
    const faded = Boolean(props.faded ?? false);
    const crest = resolveCrest(props.crest ?? team, "manchester_city");
    const isMadrid = crest.key === "madrid" || crest.key === "real_madrid";
    const crestSize = isMadrid ? 32 : 32;
    const crestY = isMadrid ? 11 : 11;

    const textOpacity = faded ? 0.45 : 1;

    const structure: NodeDefinition = createFrame(
      "League Standing Row",
      {
        layoutMode: "NONE",
        fills: [],
        layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 512, height: 54 }
      },
      [
        createRectangle("Row Background", {
          fills: [{ visible: true, opacity: faded ? 0.05 : 0.1, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 512, height: 44, relativeTransform: [[1, 0, 0], [0, 1, 5]] }
        }),
        createText("Position", pos, 20, "Bold", { r: 1, g: 1, b: 1 }, {
          font: { family: "Champions", style: "Bold" },
          opacity: textOpacity,
          textAlignHorizontal: "CENTER",
          textAutoResize: "NONE",
          lineHeight: { unit: "PERCENT", value: 130 },
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 28, height: 26, relativeTransform: [[1, 0, 8], [0, 1, 14]] }
        }),
        createRectangle("Team Crest", {
          opacity: textOpacity,
          fills: [{
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            type: "IMAGE",
            scaleMode: isMadrid ? "FIT" : "FILL",
            imageTransform: [[1, 0, 0], [0, 1, 0]],
            scalingFactor: 0.5,
            rotation: 0,
            filters: { exposure: 0, contrast: 0, saturation: 0, temperature: 0, tint: 0, highlights: 0, shadows: 0 },
            assetRef: crest.assetRef
          }],
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: crestSize, height: crestSize, relativeTransform: [[1, 0, 44], [0, 1, crestY]] }
        }),
        createText("Team", team, 20, "Bold", { r: 1, g: 1, b: 1 }, {
          font: { family: "Champions", style: "Bold" },
          opacity: textOpacity,
          textAlignHorizontal: "LEFT",
          textAutoResize: "NONE",
          lineHeight: { unit: "PERCENT", value: 130 },
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 330, height: 26, relativeTransform: [[1, 0, 84], [0, 1, 14]] }
        }),
        createText("Played", played, 20, "Bold", { r: 1, g: 1, b: 1 }, {
          font: { family: "Champions", style: "Bold" },
          opacity: textOpacity,
          textAlignHorizontal: "CENTER",
          textAutoResize: "NONE",
          lineHeight: { unit: "PERCENT", value: 130 },
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 44, height: 26, relativeTransform: [[1, 0, 423], [0, 1, 14]] }
        }),
        createRectangle("Separator", {
          fills: [{ visible: true, opacity: faded ? 0.45 : 1, blendMode: "NORMAL", type: "SOLID", color: { r: 1, g: 1, b: 1 } }],
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 1, height: 54, relativeTransform: [[1, 0, 467], [0, 1, 0]] }
        }),
        createText("Points", points, 20, "Bold", { r: 1, g: 1, b: 1 }, {
          font: { family: "Champions", style: "Bold" },
          opacity: textOpacity,
          textAlignHorizontal: "CENTER",
          textAutoResize: "NONE",
          lineHeight: { unit: "PERCENT", value: 130 },
          layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 44, height: 26, relativeTransform: [[1, 0, 468], [0, 1, 14]] }
        })
      ]
    );

    return this.renderDefinition(structure);
  }
}

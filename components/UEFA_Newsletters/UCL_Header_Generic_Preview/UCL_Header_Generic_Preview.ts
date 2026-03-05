import { BaseComponent, ComponentProps } from "../../BaseComponent";
import { UCLBackground } from "../UCL_Newsletter_Header_Stats/UCLBackground";
import { HeaderFooter } from "../UCL_Newsletter_Header_Stats/HeaderFooter";
import { TopBarReview } from "../UCL_Newsletter_Header_Review/TopBarReview";
import { ResultsTitle } from "../UCL_Results/ResultsTitle";
import { ResultsScoreboard } from "../UCL_Results/ResultsScoreboard";
import { ResultsCta } from "../UCL_Results/ResultsCta";

export class UCL_Newsletter_Header_Generic_Preview extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const root = figma.createFrame();
    root.name = "UCL_Newsletter_Header_Generic_Preview";
    root.resize(600, 696);
    root.fills = [];
    root.clipsContent = true;

    const background = await new UCLBackground().create({});
    background.x = 0;
    background.y = 0;
    root.appendChild(background);

    const footer = await new HeaderFooter().create({});
    footer.x = 0;
    footer.y = 0;
    root.appendChild(footer);

    const topBar = await new TopBarReview().create({});
    const myUefa = topBar.findChild((n) => n.name === "LOGO MyUEFA");
    if (myUefa) myUefa.remove();
    if (topBar.type === "FRAME") {
      topBar.fills = [];
    }
    topBar.x = 0;
    topBar.y = 22;
    const logosContainer = topBar.findChild((n) => n.name === "Logos container");
    if (logosContainer && "x" in logosContainer) {
      logosContainer.x = 275;
    }
    root.appendChild(topBar);

    const title = await new ResultsTitle().create({ text: "UPCOMING MATCHES" });
    title.x = 44;
    title.y = 170;
    root.appendChild(title);

    const scoreboard = await new ResultsScoreboard().create({
      variant: "upcoming",
      rowSpacing: 8,
      matches: [
        { homeTeam: "Real Madrid", homeCrest: "madrid", awayTeam: "Barcelona", awayCrest: "barcelona", centerText: "VS", matchTime: "TUE 30 SEP, 20:00 CET" },
        { homeTeam: "Man City", homeCrest: "manchester_city", awayTeam: "Bayern", awayCrest: "bayern", centerText: "VS", matchTime: "WED 1 OCT, 21:00 CET" }
      ]
    });
    scoreboard.x = 44;
    scoreboard.y = 236;
    root.appendChild(scoreboard);

    const cta = await new ResultsCta().create({ text: "See all matches", filled: true });
    cta.x = 44;
    cta.y = 560;
    root.appendChild(cta);

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "../Alex_CookBook/BaseDemoPage";

import { UCL_Newsletter_Header_Stats } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Stats/UCL_Newsletter_Header_Stats";
import { UCL_Newsletter_Header_Review } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Review/UCL_Newsletter_Header_Review";
import { UCL_Newsletter_Header_Generic_Preview } from "../../components/UEFA_Newsletters/UCL_Header_Generic_Preview/UCL_Header_Generic_Preview";
import { UCL_Newsletter_Header_Specific_Preview } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/UCL_Header_Specific_Preview";
import { UCL_Results } from "../../components/UEFA_Newsletters/UCL_Results/UCL_Results";
import { UCL_Upcoming_Matches } from "../../components/UEFA_Newsletters/UCL_Results/UCL_Upcoming_Matches";
import { UCL_League_Standings } from "../../components/UEFA_Newsletters/UCL_League_Standings/UCL_League_Standings";
import { UCL_S_and_E } from "../../components/UEFA_Newsletters/UCL_S_and_E/UCL_S_and_E";
import { UCL_Footer } from "../../components/UEFA_Newsletters/UCL_Footer/UCL_Footer";

import { ReviewBackground } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Review/ReviewBackground";
import { ReviewFooter } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Review/ReviewFooter";
import { TopBarReview } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Review/TopBarReview";
import { ReviewHeroPlay } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Review/ReviewHeroPlay";
import { ReviewHeaderTitle } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Review/ReviewHeaderTitle";
import { ReviewButton } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Review/ReviewButton";
import { ReviewTitle } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Review/ReviewTitle";

import { UCLBackground } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Stats/UCLBackground";
import { HeaderFooter } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Stats/HeaderFooter";
import { TopBar } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Stats/TopBar";
import { HeaderTitle } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Stats/HeaderTitle";
import { StatsButton } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Stats/StatsButton";
import { StatsTable } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Stats/StatsTable";
import { Tail } from "../../components/UEFA_Newsletters/UCL_Newsletter_Header_Stats/Tail";

import { ResultsSection } from "../../components/UEFA_Newsletters/UCL_Results/ResultsSection";
import { ResultsTitle } from "../../components/UEFA_Newsletters/UCL_Results/ResultsTitle";
import { ResultsScoreboard } from "../../components/UEFA_Newsletters/UCL_Results/ResultsScoreboard";
import { ScoreRow } from "../../components/UEFA_Newsletters/UCL_Results/ScoreRow";
import { ResultsCta } from "../../components/UEFA_Newsletters/UCL_Results/ResultsCta";

import { LeagueStandingsSection } from "../../components/UEFA_Newsletters/UCL_League_Standings/LeagueStandingsSection";
import { LeagueStandingsTitle } from "../../components/UEFA_Newsletters/UCL_League_Standings/LeagueStandingsTitle";
import { LeagueStandingsTable } from "../../components/UEFA_Newsletters/UCL_League_Standings/LeagueStandingsTable";
import { LeagueStandingRow } from "../../components/UEFA_Newsletters/UCL_League_Standings/LeagueStandingRow";
import { LeagueStandingsCta } from "../../components/UEFA_Newsletters/UCL_League_Standings/LeagueStandingsCta";

import { S_and_ESection } from "../../components/UEFA_Newsletters/UCL_S_and_E/S_and_ESection";
import { S_and_ECard } from "../../components/UEFA_Newsletters/UCL_S_and_E/S_and_ECard";

import { FooterSection } from "../../components/UEFA_Newsletters/UCL_Footer/FooterSection";
import { FooterTopSeparator } from "../../components/UEFA_Newsletters/UCL_Footer/FooterTopSeparator";
import { FooterSponsors } from "../../components/UEFA_Newsletters/UCL_Footer/FooterSponsors";
import { FooterSocial } from "../../components/UEFA_Newsletters/UCL_Footer/FooterSocial";
import { FooterLegal } from "../../components/UEFA_Newsletters/UCL_Footer/FooterLegal";
import { FooterBottomGraphic } from "../../components/UEFA_Newsletters/UCL_Footer/FooterBottomGraphic";

import { GenericImageplaceholder } from "../../components/UEFA_Newsletters/UCL_Header_Generic_Preview/GenericImageplaceholder";
import { Genericdecocomps } from "../../components/UEFA_Newsletters/UCL_Header_Generic_Preview/Genericdecocomps";
import { GenericTopbar } from "../../components/UEFA_Newsletters/UCL_Header_Generic_Preview/GenericTopbar";
import { GenericUpcomingMatchesBanner } from "../../components/UEFA_Newsletters/UCL_Header_Generic_Preview/GenericUpcomingMatchesBanner";
import { Genericdividerball1desktop } from "../../components/UEFA_Newsletters/UCL_Header_Generic_Preview/Genericdividerball1desktop";
import { GenericUPCOMINGMATCHES } from "../../components/UEFA_Newsletters/UCL_Header_Generic_Preview/GenericUPCOMINGMATCHES";
import { GenericButtons } from "../../components/UEFA_Newsletters/UCL_Header_Generic_Preview/GenericButtons";

import { SpecificImageplaceholder } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificImageplaceholder";
import { Specificdecocomps } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/Specificdecocomps";
import { SpecificButtons } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificButtons";
import { SpecificRectangle2243 } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificRectangle2243";
import { SpecificRectangle2244 } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificRectangle2244";
import { SpecificTopbar } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificTopbar";
import { SpecificFrame2609260 } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificFrame2609260";
import { SpecificDateBox } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificDateBox";
import { SpecificMadrid } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificMadrid";
import { SpecificBarcelona } from "../../components/UEFA_Newsletters/UCL_Header_Specific_Preview/SpecificBarcelona";

export class UCL_Newsletters_Demo extends BaseDemoPage {
  async create(props: ComponentProps): Promise<SceneNode> {
    const root = await this.initPage("UEFA Newsletters - UCL Demo", 1680, true);
    await this.addHeader(
      root,
      "UCL Newsletters Demo",
      "All UCL newsletter compositions and building blocks with numbered captions for quick inspection."
    );

    let captionIndex = 1;
    const caption = (text: string): string => `${captionIndex++}. ${text}`;

    const createWrapRow = (container: FrameNode): FrameNode => {
      const row = figma.createFrame();
      row.name = "Showcase Row";
      row.layoutMode = "HORIZONTAL";
      row.layoutWrap = "WRAP";
      row.itemSpacing = 24;
      row.counterAxisSpacing = 24;
      row.primaryAxisSizingMode = "AUTO";
      row.counterAxisSizingMode = "AUTO";
      row.primaryAxisAlignItems = "MIN";
      row.counterAxisAlignItems = "MIN";
      row.fills = [];
      row.clipsContent = false;
      container.appendChild(row);
      return row;
    };

    const addItem = async (row: FrameNode, node: SceneNode, label: string): Promise<void> => {
      const wrapped = await this.wrapWithCaption(node, caption(label), "Component Wrapper");
      row.appendChild(wrapped);
    };

    await this.addSection(
      root,
      "Full Compositions",
      "Main reusable UCL newsletter sections and assembled modules.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new UCL_Newsletter_Header_Stats().create({}), "UCL_Newsletter_Header_Stats");
        await addItem(row, await new UCL_Newsletter_Header_Review().create({}), "UCL_Newsletter_Header_Review");
        await addItem(row, await new UCL_Newsletter_Header_Generic_Preview().create({}), "UCL_Newsletter_Header_Generic_Preview");
        await addItem(row, await new UCL_Newsletter_Header_Specific_Preview().create({}), "UCL_Newsletter_Header_Specific_Preview");
        await addItem(row, await new UCL_Results().create({}), "UCL_Results");
        await addItem(row, await new UCL_Upcoming_Matches().create({}), "UCL_Upcoming_Matches");
        await addItem(row, await new UCL_League_Standings().create({}), "UCL_League_Standings");
        await addItem(row, await new UCL_S_and_E().create({}), "UCL_S_and_E");
        await addItem(row, await new UCL_Footer().create({}), "UCL_Footer");
      },
      { itemSpacing: 24, padding: 24 }
    );

    await this.addSection(
      root,
      "Preview Header Variants",
      "Captured-accurate generic and specific preview header variants exposed as reusable components.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new UCL_Newsletter_Header_Generic_Preview().create({}), "UCL_Newsletter_Header_Generic_Preview");
        await addItem(row, await new UCL_Newsletter_Header_Specific_Preview().create({}), "UCL_Newsletter_Header_Specific_Preview");
      }
    );

    await this.addSection(
      root,
      "Generic Header Building Blocks",
      "Atomic and section-level parts for the generic preview header variant.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new GenericImageplaceholder().create({}), "GenericImageplaceholder");
        await addItem(row, await new Genericdecocomps().create({}), "Genericdecocomps");
        await addItem(row, await new GenericTopbar().create({}), "GenericTopbar");
        await addItem(row, await new GenericUpcomingMatchesBanner().create({}), "GenericUpcomingMatchesBanner");
        await addItem(row, await new Genericdividerball1desktop().create({}), "Genericdividerball1desktop");
        await addItem(row, await new GenericUPCOMINGMATCHES().create({}), "GenericUPCOMINGMATCHES");
        await addItem(row, await new GenericButtons().create({}), "GenericButtons");
      }
    );

    await this.addSection(
      root,
      "Specific Header Building Blocks",
      "Atomic and section-level parts for the specific preview header variant.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new SpecificImageplaceholder().create({}), "SpecificImageplaceholder");
        await addItem(row, await new Specificdecocomps().create({}), "Specificdecocomps");
        await addItem(row, await new SpecificButtons().create({}), "SpecificButtons");
        await addItem(row, await new SpecificRectangle2243().create({}), "SpecificRectangle2243");
        await addItem(row, await new SpecificRectangle2244().create({}), "SpecificRectangle2244");
        await addItem(row, await new SpecificTopbar().create({}), "SpecificTopbar");
        await addItem(row, await new SpecificFrame2609260().create({}), "SpecificFrame2609260");
        await addItem(row, await new SpecificDateBox().create({}), "SpecificDateBox");
        await addItem(row, await new SpecificMadrid().create({}), "SpecificMadrid");
        await addItem(row, await new SpecificBarcelona().create({}), "SpecificBarcelona");
      }
    );

    await this.addSection(
      root,
      "Header Review Building Blocks",
      "Atomic and section-level parts for the review header variant.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new ReviewBackground().create({}), "ReviewBackground");
        await addItem(row, await new ReviewFooter().create({}), "ReviewFooter");
        await addItem(row, await new TopBarReview().create({}), "TopBarReview");
        await addItem(row, await new ReviewHeroPlay().create({}), "ReviewHeroPlay");
        await addItem(row, await new ReviewHeaderTitle().create({}), "ReviewHeaderTitle");
        await addItem(row, await new ReviewButton().create({}), "ReviewButton");
        await addItem(row, await new ReviewTitle().create({}), "ReviewTitle");
      }
    );

    await this.addSection(
      root,
      "Header Stats Building Blocks",
      "Atomic and section-level parts for the stats header variant.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new UCLBackground().create({}), "UCLBackground");
        await addItem(row, await new HeaderFooter().create({}), "HeaderFooter");
        await addItem(row, await new TopBar().create({}), "TopBar");
        await addItem(row, await new HeaderTitle().create({}), "HeaderTitle");
        await addItem(row, await new StatsButton().create({}), "StatsButton");
        await addItem(row, await new StatsTable().create({}), "StatsTable");
        await addItem(row, await new Tail().create({}), "Tail");
      }
    );

    await this.addSection(
      root,
      "Results Building Blocks",
      "Standalone components used by the UCL Results section.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new ResultsSection().create({}), "ResultsSection");
        await addItem(
          row,
          await new ResultsSection().create({
            variant: "upcoming",
            title: "UPCOMING MATCHES",
            ctaText: "See all matches",
            matches: [
              { homeTeam: "Ajax", homeCrest: "Ajax", awayTeam: "Benfica", awayCrest: "Benfica", centerText: "VS", matchTime: "TUE 14 MAR, 18:55 CET" },
              { homeTeam: "Ajax", homeCrest: "Ajax", awayTeam: "Benfica", awayCrest: "Benfica", centerText: "VS", matchTime: "TUE 14 MAR, 18:55 CET" }
            ]
          }),
          "ResultsSection (Upcoming Variant)"
        );
        await addItem(row, await new ResultsTitle().create({}), "ResultsTitle");
        await addItem(row, await new ResultsScoreboard().create({}), "ResultsScoreboard");
        await addItem(
          row,
          await new ResultsScoreboard().create({
            variant: "upcoming",
            matches: [
              { homeTeam: "Ajax", homeCrest: "Ajax", awayTeam: "Benfica", awayCrest: "Benfica", centerText: "VS", matchTime: "TUE 14 MAR, 18:55 CET" },
              { homeTeam: "Ajax", homeCrest: "Ajax", awayTeam: "Benfica", awayCrest: "Benfica", centerText: "VS", matchTime: "TUE 14 MAR, 18:55 CET" }
            ]
          }),
          "ResultsScoreboard (Upcoming Variant)"
        );
        await addItem(row, await new ScoreRow().create({}), "ScoreRow");
        await addItem(row, await new ScoreRow().create({ variant: "upcoming", centerText: "VS", matchTime: "TUE 14 MAR, 18:55 CET" }), "ScoreRow (Upcoming Variant)");
        await addItem(row, await new ResultsCta().create({}), "ResultsCta");
      }
    );

    await this.addSection(
      root,
      "League Standings Building Blocks",
      "Standalone components used by the UCL League Standings section.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new LeagueStandingsSection().create({}), "LeagueStandingsSection");
        await addItem(row, await new LeagueStandingsTitle().create({}), "LeagueStandingsTitle");
        await addItem(row, await new LeagueStandingsTable().create({}), "LeagueStandingsTable");
        await addItem(row, await new LeagueStandingRow().create({}), "LeagueStandingRow");
        await addItem(row, await new LeagueStandingsCta().create({}), "LeagueStandingsCta");
      }
    );

    await this.addSection(
      root,
      "S_and_E Building Blocks",
      "Standalone components used by the UCL S_and_E section.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new S_and_ESection().create({}), "S_and_ESection");
        await addItem(row, await new S_and_ECard().create({}), "S_and_ECard");
      }
    );

    await this.addSection(
      root,
      "Footer Building Blocks",
      "Standalone components used by the UCL footer section.",
      async (container) => {
        const row = createWrapRow(container);

        await addItem(row, await new FooterSection().create({}), "FooterSection");
        await addItem(row, await new FooterTopSeparator().create({}), "FooterTopSeparator");
        await addItem(row, await new FooterSponsors().create({}), "FooterSponsors");
        await addItem(row, await new FooterSocial().create({}), "FooterSocial");
        await addItem(row, await new FooterLegal().create({}), "FooterLegal");
        await addItem(row, await new FooterBottomGraphic().create({}), "FooterBottomGraphic");
      }
    );

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

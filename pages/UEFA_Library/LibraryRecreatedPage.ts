import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { LibraryDivider } from "../../components/UEFA_Library/Divider/LibraryDivider";
import { LibraryFooter } from "../../components/UEFA_Library/Footer/LibraryFooter";
import { LibraryHeader } from "../../components/UEFA_Library/Header/LibraryHeader";
import { LibraryInfoBanner } from "../../components/UEFA_Library/Info_banner/LibraryInfoBanner";
import { LibraryArticleCard } from "../../components/UEFA_Library/Library_article_card/LibraryArticleCard";
import { LibraryIntro } from "../../components/UEFA_Library/Library_intro/LibraryIntro";
import { LibraryFeatureCard } from "../../components/UEFA_Library/Library_feature_card/LibraryFeatureCard";
import { LibraryResourcesTitle } from "../../components/UEFA_Library/Library_resources_title/LibraryResourcesTitle";
import { LibraryPageTitle } from "../../components/UEFA_Library/Page_title/LibraryPageTitle";
import { LibraryResourcesPagination } from "../../components/UEFA_Library/Resources_pagination/LibraryResourcesPagination";
import { LibraryResourcesSearchBar } from "../../components/UEFA_Library/Resources_search_bar/LibraryResourcesSearchBar";
import { LibraryResourcesSidebar } from "../../components/UEFA_Library/Resources_sidebar/LibraryResourcesSidebar";
import { LibraryTopBar } from "../../components/UEFA_Library/Top_bar/LibraryTopBar";

export class LibraryRecreatedPage extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const root = figma.createFrame();
    root.name = "UEFA Library - Recreated Page";
    root.layoutMode = "VERTICAL";
    root.itemSpacing = 0;
    root.primaryAxisSizingMode = "AUTO";
    root.counterAxisSizingMode = "FIXED";
    root.resize(1680, 100);
    root.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    root.clipsContent = false;

    const topBar = await new LibraryTopBar().create({ x: 0, y: 0 });
    const header = await new LibraryHeader().create({ x: 0, y: 0 });
    const infoBanner = await new LibraryInfoBanner().create({ x: 0, y: 0 });
    const pageTitle = await new LibraryPageTitle().create({ x: 0, y: 0 });
    const mainContent = await this.buildMainContentArea();
    const divider = await new LibraryDivider().create({ x: 0, y: 0 });
    const relatedTitle = await new LibraryResourcesTitle().create({ x: 0, y: 0 });
    const relatedSection = await this.buildRelatedResourcesArea();
    const footer = await new LibraryFooter().create({ x: 0, y: 0 });

    const sections: SceneNode[] = [
      topBar,
      header,
      infoBanner,
      pageTitle,
      mainContent,
      divider,
      relatedTitle,
      relatedSection,
      footer
    ];

    for (const section of sections) {
      this.enforceWidth(section, 1680);
      root.appendChild(section);
    }

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }

  private async buildMainContentArea(): Promise<FrameNode> {
    const row = figma.createFrame();
    row.name = "LibraryMainContentArea";
    row.layoutMode = "HORIZONTAL";
    row.itemSpacing = 24;
    row.paddingTop = 0;
    row.paddingRight = 120;
    row.paddingBottom = 16;
    row.paddingLeft = 120;
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "FIXED";
    row.resize(1680, 100);
    row.fills = [];
    row.clipsContent = false;

    const leftColumn = figma.createFrame();
    leftColumn.name = "LibraryMainContentLeft";
    leftColumn.layoutMode = "VERTICAL";
    leftColumn.itemSpacing = 24;
    leftColumn.primaryAxisSizingMode = "AUTO";
    leftColumn.counterAxisSizingMode = "AUTO";
    leftColumn.fills = [];
    leftColumn.clipsContent = false;

    const searchBar = await new LibraryResourcesSearchBar().create({ x: 0, y: 0 });
    leftColumn.appendChild(searchBar);

    const cardFactory = new LibraryFeatureCard();
    for (let i = 0; i < 3; i += 1) {
      const card = await cardFactory.create({ x: 0, y: 0, cardIndex: i });
      leftColumn.appendChild(card);
    }

    const pagination = await new LibraryResourcesPagination().create({ x: 0, y: 0 });
    leftColumn.appendChild(pagination);

    const sidebar = await new LibraryResourcesSidebar().create({ x: 0, y: 0 });

    row.appendChild(leftColumn);
    row.appendChild(sidebar);

    return row;
  }

  private async buildRelatedResourcesArea(): Promise<FrameNode> {
    const section = figma.createFrame();
    section.name = "LibraryResourcesArea";
    section.layoutMode = "HORIZONTAL";
    section.itemSpacing = 24;
    section.paddingTop = 48;
    section.paddingRight = 120;
    section.paddingBottom = 72;
    section.paddingLeft = 120;
    section.primaryAxisSizingMode = "AUTO";
    section.counterAxisSizingMode = "FIXED";
    section.resize(1680, 100);
    section.fills = [];
    section.clipsContent = false;

    const intro = await new LibraryIntro().create({ x: 0, y: 0 });

    const cardsRow = figma.createFrame();
    cardsRow.name = "LibraryArticlesCardsRow";
    cardsRow.layoutMode = "HORIZONTAL";
    cardsRow.itemSpacing = 24;
    cardsRow.primaryAxisSizingMode = "AUTO";
    cardsRow.counterAxisSizingMode = "AUTO";
    cardsRow.fills = [];
    cardsRow.clipsContent = false;

    const relatedCardFactory = new LibraryArticleCard();
    for (let i = 0; i < 4; i += 1) {
      const card = await relatedCardFactory.create({ x: 0, y: 0, cardIndex: i });
      cardsRow.appendChild(card);
    }

    section.appendChild(intro);
    section.appendChild(cardsRow);
    return section;
  }

  private enforceWidth(node: SceneNode, width: number): void {
    if ("resize" in node) {
      node.resize(width, node.height);
    }
    if ("layoutAlign" in node) {
      node.layoutAlign = "STRETCH";
    }
  }
}

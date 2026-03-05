import { Placeholder } from "../../components/Placeholder";
import { ComponentProps } from "../../components/BaseComponent";
import { LibraryDivider } from "../../components/UEFA_Library/Divider/LibraryDivider";
import { LibraryFooter } from "../../components/UEFA_Library/Footer/LibraryFooter";
import { LibraryHeader } from "../../components/UEFA_Library/Header/LibraryHeader";
import { LibraryInfoBanner } from "../../components/UEFA_Library/Info_banner/LibraryInfoBanner";
import { LibraryFeatureCard } from "../../components/UEFA_Library/Library_feature_card/LibraryFeatureCard";
import { LibraryIntro } from "../../components/UEFA_Library/Library_intro/LibraryIntro";
import { LibraryArticlesRow } from "../../components/UEFA_Library/Library_articles_row/LibraryArticlesRow";
import { LibraryArticlesSection } from "../../components/UEFA_Library/Library_articles_section/LibraryArticlesSection";
import { LibraryResourcesTitle } from "../../components/UEFA_Library/Library_resources_title/LibraryResourcesTitle";
import { LibraryPageTitle } from "../../components/UEFA_Library/Page_title/LibraryPageTitle";
import { LibraryResourcesContent } from "../../components/UEFA_Library/Resources_content/LibraryResourcesContent";
import { LibraryResourcesSearchBar } from "../../components/UEFA_Library/Resources_search_bar/LibraryResourcesSearchBar";
import { LibraryResourcesSidebar } from "../../components/UEFA_Library/Resources_sidebar/LibraryResourcesSidebar";
import { LibrarySidebarSubjectFilters } from "../../components/UEFA_Library/Sidebar_subject_filters/LibrarySidebarSubjectFilters";
import { LibraryTopBar } from "../../components/UEFA_Library/Top_bar/LibraryTopBar";
import { normalizeLibraryLayerNames } from "../../components/UEFA_Library/shared/LibraryLayerNaming";
import { BaseDemoPage } from "../Alex_CookBook/BaseDemoPage";

export class LibraryDemoPage extends BaseDemoPage {
  async create(props: ComponentProps): Promise<SceneNode> {
    const root = await this.initPage("UEFA Library - Demo Page", 1680, true);
    await this.addHeader(
      root,
      "Library Demo Page",
      "Academy-style split of the UEFA Library screen into reusable section and card components."
    );

    const topBar = await new LibraryTopBar().create({ x: 0, y: 0 });
    this.enforceComponentWidth(topBar, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryTopBar",
      "1. Library Top Bar",
      "Exact extracted top navigation strip from the original captured screen.",
      topBar
    );

    const header = await new LibraryHeader().create({ x: 0, y: 0 });
    this.enforceComponentWidth(header, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryHeader",
      "2. Library Header",
      "Main navigation/header area recreated as an independent component.",
      header
    );

    const infoBanner = await new LibraryInfoBanner().create({ x: 0, y: 0 });
    this.enforceComponentWidth(infoBanner, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryInfoBanner",
      "3. Library Notification Banner",
      "Notification/information banner split into its own reusable component.",
      infoBanner
    );

    const pageTitle = await new LibraryPageTitle().create({ x: 0, y: 0 });
    this.enforceComponentWidth(pageTitle, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryPageTitle",
      "4. Library Page Title",
      "Page heading section (Resources) extracted as a standalone component.",
      pageTitle
    );

    const resourcesContent = await new LibraryResourcesContent().create({ x: 0, y: 0 });
    this.enforceComponentWidth(resourcesContent, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryResourcesContent",
      "5. Main Resources Content",
      "Combined search, filters, and content region preserved exactly from the source capture.",
      resourcesContent
    );

    const searchBar = await new LibraryResourcesSearchBar().create({ x: 0, y: 0 });
    this.enforceComponentWidth(searchBar, 980);
    await this.appendHugSection(
      root,
      "Section: LibraryResourcesSearchBar",
      "6. Resources Search + Sort Bar",
      "Search input and sorting/filter chip row extracted as a standalone reusable component.",
      searchBar
    );

    const sidebar = await new LibraryResourcesSidebar().create({ x: 0, y: 0 });
    await this.appendHugSection(
      root,
      "Section: LibraryResourcesSidebar",
      "7. Resources Sidebar Filters",
      "Filters panel extracted as an independent component from the right side of the layout.",
      sidebar
    );

    const subjectFilters = await new LibrarySidebarSubjectFilters().create({ x: 0, y: 0 });
    await this.appendHugSection(
      root,
      "Section: LibrarySidebarSubjectFilters",
      "8. Sidebar Subject Filters",
      "Standalone subject filter block with UEFA Initiative checkboxes (UEFA Academy, Assist, Events, and more).",
      subjectFilters
    );

    const pagination = await new Placeholder("LibraryResourcesPagination").create({ x: 0, y: 0 });
    this.enforceComponentWidth(pagination, 980);
    await this.appendHugSection(
      root,
      "Section: LibraryResourcesPagination",
      "9. Resources Pagination",
      "Pagination controls section split out as its own component.",
      pagination
    );

    const mainCardsShowcase = await this.buildMainCardsShowcase();
    await this.appendHugSection(
      root,
      "Section: LibraryFeatureCards",
      "10. Library Feature Cards (3)",
      "Wide card variant with left image + content, stacked vertically to avoid overflow in demo.",
      mainCardsShowcase
    );

    const divider = await new LibraryDivider().create({ x: 0, y: 0 });
    this.enforceComponentWidth(divider, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryDivider",
      "11. Section Divider",
      "Horizontal divider between main resources and related resources.",
      divider
    );

    const relatedTitle = await new LibraryResourcesTitle().create({ x: 0, y: 0 });
    this.enforceComponentWidth(relatedTitle, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryResourcesTitle",
      "12. Related Resources Title",
      "Standalone heading block for the related resources section.",
      relatedTitle
    );

    const relatedIntro = await new LibraryIntro().create({ x: 0, y: 0, fullWidth: true, fullWidthWidth: 1680 });
    await this.appendHugSection(
      root,
      "Section: LibraryIntro",
      "13. Related Resources Intro",
      "Introductory card for UEFA Academy at the start of related resources.",
      relatedIntro
    );

    const relatedRow = await new LibraryArticlesRow().create({ x: 0, y: 0 });
    this.enforceComponentWidth(relatedRow, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryArticlesRow",
      "14. Related Resources Row",
      "Full 4-card related resources row extracted as a reusable container.",
      relatedRow
    );

    const relatedSection = await new LibraryArticlesSection().create({ x: 0, y: 0 });
    this.enforceComponentWidth(relatedSection, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryArticlesSection",
      "15. Related Resources Section",
      "Complete related resources block (intro + cards row) preserved as a standalone component.",
      relatedSection
    );

    const footer = await new LibraryFooter().create({ x: 0, y: 0 });
    this.enforceComponentWidth(footer, 1680);
    await this.appendHugSection(
      root,
      "Section: LibraryFooter",
      "16. Library Footer",
      "Exact extracted footer section from the original library screen.",
      footer
    );

    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);

    return root;
  }

  private async buildMainCardsShowcase(): Promise<FrameNode> {
    const cardsFrame = this.createCardsColumn("FeatureCards", 24);
    cardsFrame.counterAxisSizingMode = "FIXED";
    cardsFrame.primaryAxisSizingMode = "AUTO";
    cardsFrame.resize(1077, 100);
    const cardComponent = new LibraryFeatureCard();

    for (let i = 0; i < 3; i += 1) {
      const card = await cardComponent.create({ x: 0, y: 0, cardIndex: i });
      this.enforceComponentWidth(card, 1077);
      cardsFrame.appendChild(card);
    }

    return cardsFrame;
  }

  private createCardsColumn(name: string, itemSpacing: number): FrameNode {
    const col = figma.createFrame();
    col.name = name;
    col.layoutMode = "VERTICAL";
    col.itemSpacing = itemSpacing;
    col.fills = [];
    col.primaryAxisSizingMode = "AUTO";
    col.counterAxisSizingMode = "AUTO";
    col.primaryAxisAlignItems = "MIN";
    col.counterAxisAlignItems = "MIN";
    col.layoutAlign = "INHERIT";
    col.clipsContent = false;
    return col;
  }

  private async appendHugSection(
    root: FrameNode,
    name: string,
    title: string,
    description: string,
    component: SceneNode
  ): Promise<void> {
    const section = figma.createFrame();
    section.name = name;
    section.layoutMode = "VERTICAL";
    section.fills = [];
    section.itemSpacing = 20;
    section.primaryAxisSizingMode = "AUTO";
    section.counterAxisSizingMode = "AUTO";
    section.layoutAlign = "INHERIT";
    section.clipsContent = false;

    const info = figma.createFrame();
    info.name = "Section Info";
    info.layoutMode = "VERTICAL";
    info.fills = [];
    info.itemSpacing = 8;
    info.resize(1680, 100);
    info.primaryAxisSizingMode = "AUTO";
    info.counterAxisSizingMode = "FIXED";
    info.layoutAlign = "INHERIT";
    info.clipsContent = false;

    const titleNode = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    titleNode.fontName = { family: "Inter", style: "Semi Bold" };
    titleNode.characters = title;
    titleNode.fontSize = 24;
    titleNode.layoutAlign = "STRETCH";
    titleNode.textAutoResize = "HEIGHT";
    titleNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    info.appendChild(titleNode);

    const descNode = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    descNode.fontName = { family: "Inter", style: "Regular" };
    descNode.characters = description;
    descNode.fontSize = 16;
    descNode.layoutAlign = "STRETCH";
    descNode.textAutoResize = "HEIGHT";
    descNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    info.appendChild(descNode);

    section.appendChild(info);
    section.appendChild(component);
    root.appendChild(section);
  }

  private enforceComponentWidth(node: SceneNode, width: number): void {
    if ("resize" in node) {
      node.resize(width, node.height);
    }
    if ("layoutAlign" in node) {
      node.layoutAlign = "INHERIT";
    }
  }
}

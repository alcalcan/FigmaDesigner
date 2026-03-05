import { BaseComponent, ComponentProps } from "../../components/BaseComponent";
import { LibraryDivider } from "../../components/UEFA_Library/Divider/LibraryDivider";
import { LibraryFooter } from "../../components/UEFA_Library/Footer/LibraryFooter";
import { LibraryHeader } from "../../components/UEFA_Library/Header/LibraryHeader";
import { LibraryInfoBanner } from "../../components/UEFA_Library/Info_banner/LibraryInfoBanner";
import { LibraryResourcesContent } from "../../components/UEFA_Library/Resources_content/LibraryResourcesContent";
import { LibraryArticlesSection } from "../../components/UEFA_Library/Library_articles_section/LibraryArticlesSection";
import { LibraryResourcesTitle } from "../../components/UEFA_Library/Library_resources_title/LibraryResourcesTitle";
import { LibraryPageTitle } from "../../components/UEFA_Library/Page_title/LibraryPageTitle";
import { LibraryTopBar } from "../../components/UEFA_Library/Top_bar/LibraryTopBar";
import { normalizeLibraryLayerNames } from "../../components/UEFA_Library/shared/LibraryLayerNaming";

export class LibraryLandingPage extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const root = figma.createFrame();
    root.name = "Library landing page";
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
    const pageTitle = await new LibraryPageTitle().create({ x: 0, y: 0, title: "Resources" });
    const mainContent = await new LibraryResourcesContent().create({ x: 0, y: 0 });
    const divider = await new LibraryDivider().create({ x: 0, y: 0 });
    const relatedTitle = await new LibraryResourcesTitle().create({ x: 0, y: 0, title: "Related resources" });
    const relatedSection = await new LibraryArticlesSection().create({ x: 0, y: 0 });
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
    normalizeLibraryLayerNames(root);
    return root;
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

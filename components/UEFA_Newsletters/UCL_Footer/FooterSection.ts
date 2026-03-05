import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame } from "../../ComponentHelpers";
import { FooterTopSeparator } from "./FooterTopSeparator";
import { FooterSponsors } from "./FooterSponsors";
import { FooterSocial } from "./FooterSocial";
import { FooterLegal } from "./FooterLegal";
import { FooterBottomGraphic } from "./FooterBottomGraphic";

export class FooterSection extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = createFrame("Footer", {
      layoutMode: "NONE",
      clipsContent: true,
      fills: [{ visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0.003921568859368563, g: 0, b: 0.33725491166114807 } }],
      layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 600, height: 693 }
    }, [
      { type: "COMPONENT", name: "Top separator", component: FooterTopSeparator, layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 600, height: 69, relativeTransform: [[1, 0, 0], [0, 1, 0]] } },
      createFrame("Content", {
        layoutMode: "VERTICAL",
        itemSpacing: 24,
        paddingTop: 0,
        paddingRight: 24,
        paddingBottom: 0,
        paddingLeft: 24,
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        fills: [],
        layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 600, height: 456, relativeTransform: [[1, 0, 0], [0, 1, 93]] }
      }, [
        { type: "COMPONENT", name: "Sponsors", component: FooterSponsors },
        { type: "COMPONENT", name: "Social", component: FooterSocial },
        { type: "COMPONENT", name: "Legal", component: FooterLegal }
      ]),
      { type: "COMPONENT", name: "Bottom graphic", component: FooterBottomGraphic, layoutProps: { parentIsAutoLayout: false, layoutPositioning: "AUTO", width: 600, height: 120, relativeTransform: [[1, 0, 0], [0, 1, 573]] } }
    ]);

    return this.renderDefinition(structure);
  }
}

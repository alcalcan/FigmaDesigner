import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { ResultsTitle } from "./ResultsTitle";
import { ResultsScoreboard } from "./ResultsScoreboard";
import { ResultsCta } from "./ResultsCta";

export class ResultsSection extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const variant = String(props.variant ?? "results").toLowerCase();
    const isUpcoming = variant === "upcoming";
    const defaultTitle = isUpcoming ? "UPCOMING MATCHES" : "RESULTS";
    const defaultCta = isUpcoming ? "See all matches" : "See all results";

    const structure: NodeDefinition = {
      type: "FRAME",
      name: isUpcoming ? "Upcoming matches" : "Results",
      props: {
        visible: true,
        opacity: 1,
        locked: false,
        blendMode: "PASS_THROUGH",
        isMask: false,
        maskType: "ALPHA",
        clipsContent: false,
        layoutMode: "VERTICAL",
        itemSpacing: isUpcoming ? 16 : 22,
        paddingTop: 32,
        paddingRight: 20,
        paddingBottom: 32,
        paddingLeft: 20,
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        fills: [
          { visible: true, opacity: 1, blendMode: "NORMAL", type: "SOLID", color: { r: 0, g: 0, b: 0.6078431606292725 } },
          {
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            type: "GRADIENT_RADIAL",
            gradientStops: [
              { color: { r: 0.007843137718737125, g: 0.19607843458652496, b: 1, a: 1 }, position: 0, boundVariables: {} },
              { color: { r: 0.003921568859368563, g: 0, b: 0.33725491166114807, a: 1 }, position: 1, boundVariables: {} }
            ],
            gradientTransform: [[-0.2067427635192871, 0.20742613077163696, 0.7371362447738647], [-0.33528202772140503, -0.33409741520881653, 0.8394749164581299]]
          }
        ],
        strokes: [],
        effects: [],
        cornerRadius: 14,
        layoutSizingHorizontal: "FIXED",
        layoutSizingVertical: "HUG"
      },
      layoutProps: {
        parentIsAutoLayout: false,
        layoutPositioning: "AUTO",
        width: 552,
        height: 344,
        constraints: { horizontal: "MIN", vertical: "MIN" }
      },
      children: [
        { type: "COMPONENT", name: "Results Title", component: ResultsTitle, props: { text: props.title ?? defaultTitle } },
        {
          type: "COMPONENT",
          name: "Results Scoreboard",
          component: ResultsScoreboard,
          props: { variant, matches: props.matches, rowSpacing: props.rowSpacing }
        },
        { type: "COMPONENT", name: "Results CTA", component: ResultsCta, props: { text: props.ctaText ?? defaultCta } }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

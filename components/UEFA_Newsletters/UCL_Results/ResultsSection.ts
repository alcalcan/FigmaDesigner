import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { ResultsTitle } from "./ResultsTitle";
import { ResultsScoreboard } from "./ResultsScoreboard";
import { ResultsCta } from "./ResultsCta";

export class ResultsSection extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      type: "FRAME",
      name: "Results",
      props: {
        visible: true,
        opacity: 1,
        locked: false,
        blendMode: "PASS_THROUGH",
        isMask: false,
        maskType: "ALPHA",
        clipsContent: false,
        layoutMode: "VERTICAL",
        itemSpacing: 22,
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
        { type: "COMPONENT", name: "Results Title", component: ResultsTitle, props: { text: props.title ?? "RESULTS" } },
        { type: "COMPONENT", name: "Results Scoreboard", component: ResultsScoreboard, props: { matches: props.matches } },
        { type: "COMPONENT", name: "Results CTA", component: ResultsCta, props: { text: props.ctaText ?? "See all results" } }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

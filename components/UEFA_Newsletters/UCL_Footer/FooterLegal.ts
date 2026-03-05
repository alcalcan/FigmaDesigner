import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createRectangle, createText } from "../../ComponentHelpers";

export class FooterLegal extends BaseComponent {
  async create(_props: ComponentProps): Promise<SceneNode> {
    const separator: NodeDefinition = createRectangle("Separator", {
      fills: [{
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        type: "GRADIENT_LINEAR",
        gradientStops: [
          { color: { r: 0.7568627595901489, g: 0.7607843279838562, b: 0.8352941274642944, a: 0 }, position: 0 },
          { color: { r: 0.7568627595901489, g: 0.7607843279838562, b: 0.8352941274642944, a: 1 }, position: 0.3229 },
          { color: { r: 0.7568627595901489, g: 0.7607843279838562, b: 0.8352941274642944, a: 1 }, position: 0.7031 },
          { color: { r: 0.7568627595901489, g: 0.7607843279838562, b: 0.8352941274642944, a: 0 }, position: 1 }
        ],
        gradientTransform: [[0.9999884963035583, 0.00001147754392150091, 0], [-0.00001147754392150091, 0.000011490817996673286, 0.5]]
      }],
      layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 544.4, height: 0.4622 }
    });

    const t1 = "Why am I getting this email?\nYou recently engaged with UEFA and gave us permission to send you emails.";
    const t2 = "How can I stop getting emails like this?\nYou can unsubscribe from the UEFA Champions League newsletter at any time. For more information about the use of your personal data, have a look at our Privacy Policy.";
    const t3 = "Copyright © 2025 UEFA, All rights reserved.\nUnion des Associations Européennes de Football (UEFA), Route de Genève 46,\n1260 Nyon, Switzerland";

    const block = (name: string, text: string): NodeDefinition => createText(name, text, 14, "Regular", { r: 1, g: 1, b: 1 }, {
      font: { family: "Arial", style: "Regular" },
      textAlignHorizontal: "CENTER",
      textAutoResize: "HEIGHT",
      lineHeight: { unit: "PERCENT", value: 150 },
      layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 552 }
    });

    const structure: NodeDefinition = createFrame("Footer Legal", {
      layoutMode: "VERTICAL",
      itemSpacing: 24,
      primaryAxisSizingMode: "AUTO",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "CENTER",
      fills: [],
      layoutProps: { parentIsAutoLayout: true, layoutPositioning: "AUTO", width: 552, height: 216 }
    }, [
      separator,
      block("Why text", t1),
      block("Stop text", t2),
      block("Copyright text", t3)
    ]);

    return this.renderDefinition(structure);
  }
}

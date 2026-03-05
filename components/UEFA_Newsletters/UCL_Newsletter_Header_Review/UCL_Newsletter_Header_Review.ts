import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { ReviewBackground } from "./ReviewBackground";
import { ReviewFooter } from "./ReviewFooter";
import { TopBarReview } from "./TopBarReview";
import { ReviewHeroPlay } from "./ReviewHeroPlay";
import { ReviewHeaderTitle } from "./ReviewHeaderTitle";
import { ReviewButton } from "./ReviewButton";

export class UCL_Newsletter_Header_Review extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "UCL_Newsletter_Header_Review",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
        "layoutMode": "NONE",
        "fills": [{ "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
        "strokes": [], "effects": [], "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED", "layoutSizingVertical": "FIXED"
      },
      "layoutProps": { "width": 600, "height": 696, "parentIsAutoLayout": false },
      "children": [
        { "type": "COMPONENT", "name": "Review Background", "component": ReviewBackground, "props": {} },
        { "type": "COMPONENT", "name": "Review Footer", "component": ReviewFooter, "props": {} },
        { "type": "COMPONENT", "name": "Top bar", "component": TopBarReview, "props": {} },
        { "type": "COMPONENT", "name": "Hero Play", "component": ReviewHeroPlay, "props": {} },
        { "type": "COMPONENT", "name": "Review Header Title", "component": ReviewHeaderTitle, "props": { "x": 43.2324, "y": 415 } },
        { "type": "COMPONENT", "name": "Buttons", "component": ReviewButton, "props": {} }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

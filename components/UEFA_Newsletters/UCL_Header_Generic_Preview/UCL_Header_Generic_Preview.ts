import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { GenericImageplaceholder } from "./GenericImageplaceholder";
import { Genericdecocomps } from "./Genericdecocomps";
import { GenericTopbar } from "./GenericTopbar";
import { GenericUpcomingMatchesBanner } from "./GenericUpcomingMatchesBanner";
import { Genericdividerball1desktop } from "./Genericdividerball1desktop";
import { GenericUPCOMINGMATCHES } from "./GenericUPCOMINGMATCHES";
import { GenericButtons } from "./GenericButtons";


export class UCL_Newsletter_Header_Generic_Preview extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "UCL_Newsletter_Header_Generic_Preview",
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
        { "type": "COMPONENT", "name": "Image placeholder", "component": GenericImageplaceholder, "props": {} },
        { "type": "COMPONENT", "name": "deco_comps", "component": Genericdecocomps, "props": {} },
        { "type": "COMPONENT", "name": "Top bar", "component": GenericTopbar, "props": {} },
        { "type": "COMPONENT", "name": "UpcomingMatches_Banner", "component": GenericUpcomingMatchesBanner, "props": {} },
        { "type": "COMPONENT", "name": "divider-ball-1-desktop", "component": Genericdividerball1desktop, "props": {} },
        { "type": "COMPONENT", "name": "UPCOMING MATCHES", "component": GenericUPCOMINGMATCHES, "props": {} },
        { "type": "COMPONENT", "name": "divider-ball-1-desktop", "component": Genericdividerball1desktop, "props": {} },
        { "type": "COMPONENT", "name": "Buttons", "component": GenericButtons, "props": {} }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

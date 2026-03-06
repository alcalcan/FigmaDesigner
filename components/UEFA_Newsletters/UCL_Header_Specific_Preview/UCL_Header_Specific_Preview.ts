import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { SpecificImageplaceholder } from "./SpecificImageplaceholder";
import { Specificdecocomps } from "./Specificdecocomps";
import { SpecificButtons } from "./SpecificButtons";
import { SpecificRectangle2243 } from "./SpecificRectangle2243";
import { SpecificRectangle2244 } from "./SpecificRectangle2244";
import { SpecificTopbar } from "./SpecificTopbar";
import { SpecificFrame2609260 } from "./SpecificFrame2609260";
import { SpecificDateBox } from "./SpecificDateBox";
import { SpecificMadrid } from "./SpecificMadrid";
import { SpecificBarcelona } from "./SpecificBarcelona";


export class UCL_Newsletter_Header_Specific_Preview extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "UCL_Newsletter_Header_Specific_Preview",
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
        { "type": "COMPONENT", "name": "Image placeholder", "component": SpecificImageplaceholder, "props": {} },
        { "type": "COMPONENT", "name": "deco_comps", "component": Specificdecocomps, "props": {} },
        { "type": "COMPONENT", "name": "Buttons", "component": SpecificButtons, "props": {} },
        { "type": "COMPONENT", "name": "Rectangle 2243", "component": SpecificRectangle2243, "props": {} },
        { "type": "COMPONENT", "name": "Rectangle 2244", "component": SpecificRectangle2244, "props": {} },
        { "type": "COMPONENT", "name": "Top bar", "component": SpecificTopbar, "props": {} },
        { "type": "COMPONENT", "name": "Frame 2609260", "component": SpecificFrame2609260, "props": {} },
        { "type": "COMPONENT", "name": "DateBox", "component": SpecificDateBox, "props": {} },
        { "type": "COMPONENT", "name": "Madrid", "component": SpecificMadrid, "props": {} },
        { "type": "COMPONENT", "name": "Barcelona", "component": SpecificBarcelona, "props": {} }
      ]
    };

    const root = await this.renderDefinition(structure);
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    return root;
  }
}

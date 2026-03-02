import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import { StatsTable } from "./StatsTable";
import { TopBar } from "./TopBar";
import { StatsButton } from "./StatsButton";
import { HeaderFooter } from "./HeaderFooter";
import { HeaderTitle } from "./HeaderTitle";
import { UCLBackground } from "./UCLBackground";


// SVG Assets



export class UCL_Newsletter_Header_Stats extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "UCL_Newsletter_Header_Stats",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA", "clipsContent": true,
        "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
        "layoutMode": "NONE",
        "fills": [
          {
            "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
            "color": { "r": 1, "g": 1, "b": 1 },
            "boundVariables": {}
          }
        ],
        "strokes": [],
        "effects": [],
        "cornerRadius": 0,
        "layoutSizingHorizontal": "FIXED",
        "layoutSizingVertical": "FIXED"
      },
      "layoutProps": { "width": 600, "height": 696, "parentIsAutoLayout": false },
      "children": [
        {
          "type": "COMPONENT",
          "name": "Stats Background",
          "component": UCLBackground,
          "props": {}
        },
        {
          "type": "COMPONENT",
          "name": "Header Footer",
          "component": HeaderFooter,
          "props": {}
        },
        {
          "type": "COMPONENT",
          "name": "Top bar",
          "component": TopBar,
          "props": {}
        },
        {
          "type": "COMPONENT",
          "name": "Stats Title",
          "component": HeaderTitle,
          "props": {}
        },
        {
          "type": "COMPONENT",
          "name": "Buttons",
          "component": StatsButton,
          "props": {}
        },
        {
          "type": "COMPONENT",
          "name": "Comparison Stats",
          "component": StatsTable,
          "props": {}
        }
      ]
    };

    const root = await this.renderDefinition(structure);

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";
import { StatsTable } from "./StatsTable";
import { TopBar } from "./TopBar";
import { StatsButton } from "./StatsButton";
import { HeaderFooter } from "./HeaderFooter";
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
          "type": "TEXT",
          "name": "UCL SEASON COMPARED",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA",
            "strokeWeight": 0.46587955951690674, "strokeAlign": "OUTSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "characters": "UCL SEASON COMPARED", "fontSize": 77.33601379394531,
            "textCase": "ORIGINAL", "textDecoration": "NONE",
            "textAlignHorizontal": "CENTER", "textAlignVertical": "TOP", "textAutoResize": "WIDTH_AND_HEIGHT",
            "paragraphSpacing": 0, "paragraphIndent": 0,
            "x": 60, "y": 87.7197265625,
            "strokes": [],
            "effects": [
              {
                "visible": true, "blendMode": "NORMAL", "type": "DROP_SHADOW",
                "radius": 24.667728424072266,
                "boundVariables": {},
                "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
                "offset": { "x": 0, "y": 3.737534999847412 },
                "spread": 0,
                "showShadowBehindNode": false
              }
            ],
            "layoutSizingHorizontal": "FIXED",
            "layoutSizingVertical": "FIXED",
            "letterSpacing": { "unit": "PIXELS", "value": 0.5 },
            "lineHeight": { "unit": "PIXELS", "value": 67.0140380859375 },
            "font": { "family": "Champions", "style": "Display" },
            "richTextSpans": [
              {
                "start": 0,
                "end": 11,
                "font": { "family": "Champions", "style": "Display" },
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 1, "g": 1, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "fontSize": 77.33601379394531
              },
              {
                "start": 11,
                "end": 19,
                "font": { "family": "Champions", "style": "Display" },
                "fills": [
                  {
                    "visible": true, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                    "color": { "r": 0.8196630477905273, "g": 0.5446940064430237, "b": 1 },
                    "boundVariables": {}
                  }
                ],
                "fontSize": 77.33601379394531
              }
            ]
          },
          "layoutProps": {
            "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
            "width": 481, "height": 68,
            "relativeTransform": [[1, 0, 60], [0, 1, 87.7197]],
            "constraints": { "horizontal": "CENTER", "vertical": "MIN" }
          }
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

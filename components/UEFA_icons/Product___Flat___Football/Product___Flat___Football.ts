import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 


// SVG Assets
import SVG_Product___Flat___Football_assets_icon_Subtract_I92_669561_1595_668_svg_24_882408142089844x26_550939559936523 from "./assets/Product___Flat___Football_assets_icon_Subtract_I92_669561_1595_668_svg_24_882408142089844x26_550939559936523.svg";
import SVG_Product___Flat___Football_assets_icon_Accent_I92_669561_1595_632_svg_10_475932121276855x13_84919548034668 from "./assets/Product___Flat___Football_assets_icon_Accent_I92_669561_1595_632_svg_10_475932121276855x13_84919548034668.svg";


export class Product___Flat___Football extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
          "type": "FRAME",
          "name": "Product / Flat / Football",
          "props": {
            "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
            "isMask": false, "maskType": "ALPHA", "clipsContent": false,
            "strokeWeight": 1, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
            "strokeTopWeight": 1, "strokeRightWeight": 1, "strokeBottomWeight": 1, "strokeLeftWeight": 1,
            "layoutMode": "NONE",
            "fills": [
              {
                "visible": false, "opacity": 1, "blendMode": "NORMAL", "type": "SOLID",
                "color": { "r": 1, "g": 1, "b": 1 },
                "boundVariables": {}
              }
            ],
            "strokes": [],
            "effects": [],
            "cornerRadius": 0
          },
          "layoutProps": { "width": 32, "height": 32, "parentIsAutoLayout": false },
          "children": [
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Subtract",
              "props": {
                "visible": true, "opacity": 0.15000000596046448, "locked": false, "blendMode": "NORMAL",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 3.555084228515625, "y": 3.2080078125,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 24.882408142089844, "height": 26.550939559936523,
                "relativeTransform": [[1, 0, 3.555084228515625], [0, 1, 3.2080078125]]
              },
              "svgContent": SVG_Product___Flat___Football_assets_icon_Subtract_I92_669561_1595_668_svg_24_882408142089844x26_550939559936523
            },
            {
              "type": "VECTOR",
              "shouldFlatten": true,
              "name": "Accent",
              "props": {
                "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
                "isMask": false, "maskType": "ALPHA",
                "strokeWeight": 0, "strokeAlign": "CENTER", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
                "x": 16.57745361328125, "y": 1.013671875,
                "strokes": [],
                "effects": [],
                "cornerRadius": 0
              },
              "layoutProps": {
                "parentIsAutoLayout": false, "layoutPositioning": "AUTO",
                "width": 10.475932121276855, "height": 13.84919548034668,
                "relativeTransform": [[1, 0, 16.57745361328125], [0, 1, 1.013671875]]
              },
              "svgContent": SVG_Product___Flat___Football_assets_icon_Accent_I92_669561_1595_632_svg_10_475932121276855x13_84919548034668
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

import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets
import SVG_BookingLogo_color_assets_vector_BookingLogo_color_1248_21813_svg_118_09945678710938x19_648025512695312 from "./assets/BookingLogo_color_assets_vector_BookingLogo_color_1248_21813_svg_118_09945678710938x19_648025512695312.svg";


export interface BookingLogoProps extends ComponentProps {
  variant?: 'color' | 'white';
}

export class BookingLogo_color extends BaseComponent {
  async create(props: BookingLogoProps): Promise<SceneNode> {
    const isWhite = props.variant === 'white';

    const structure: NodeDefinition = {
      "type": "VECTOR",
      "shouldFlatten": true,
      "name": "BookingLogo_color",
      "props": {
        "visible": true, "opacity": 1, "locked": false, "blendMode": "PASS_THROUGH",
        "isMask": false, "maskType": "ALPHA",
        "strokeWeight": 1.25, "strokeAlign": "INSIDE", "strokeCap": "NONE", "strokeJoin": "MITER", "strokeMiterLimit": 4,
        "strokes": [],
        "effects": [],
        "cornerRadius": 0,
        ...(isWhite ? {
          "fills": [{ "type": "SOLID", "color": { "r": 1, "g": 1, "b": 1 }, "opacity": 1, "visible": true, "blendMode": "NORMAL" }]
        } : {})
      },
      "layoutProps": { "width": 118.09945678710938, "height": 19.648025512695312, "parentIsAutoLayout": false },
      "svgContent": SVG_BookingLogo_color_assets_vector_BookingLogo_color_1248_21813_svg_118_09945678710938x19_648025512695312
    };

    const root = await this.renderDefinition(structure);

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

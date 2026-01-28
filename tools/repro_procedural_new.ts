import * as fs from 'fs';
import * as path from 'path';
import { ProceduralConverter } from './bridge/server_tools/ProceduralConverter';

const TEST_INPUT = `
import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent"; 

// SVG Assets
import IMG_uefa_cards_4x_refactorer_img_1_png from "././assets/uefa_cards_4x_refactorer_img_1.png";
import SVG_uefa_cards_4x_refactorer_assets_icon_Star_1_1077_166_svg_12x12 from "./assets/uefa_cards_4x_refactorer_assets_icon_Star_1_1077_166_svg_12x12.svg";

export class uefa_cards_4x_refactorer extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "uefa_cards_4x_refactorer",
    "props": {
      "visible": true,
      "layoutMode": "HORIZONTAL",
      "fills": [],
      "strokes": []
    },
    "layoutProps": { "width": 1444, "height": 441, "parentIsAutoLayout": false },
    "children": [
      {
        "type": "FRAME",
        "name": "Item A 1",
        "props": { "layoutMode": "HORIZONTAL", "fills": [] },
        "layoutProps": { "width": 100 },
        "children": [ { "type": "TEXT", "name": "T1", "props": { "characters": "A1" }, "layoutProps": {} } ]
      },
      {
        "type": "FRAME",
        "name": "Item B 1",
        "props": { "layoutMode": "HORIZONTAL", "fills": [] },
        "layoutProps": { "width": 100 },
        "children": [ { "type": "TEXT", "name": "T2", "props": { "characters": "B1" }, "layoutProps": {} } ]
      },
      {
        "type": "FRAME",
        "name": "Item A 2",
        "props": { "layoutMode": "HORIZONTAL", "fills": [] },
        "layoutProps": { "width": 100 },
        "children": [ { "type": "TEXT", "name": "T1", "props": { "characters": "A2" }, "layoutProps": {} } ]
      },
      {
        "type": "FRAME",
        "name": "Item B 2",
        "props": { "layoutMode": "HORIZONTAL", "fills": [] },
        "layoutProps": { "width": 100 },
        "children": [ { "type": "TEXT", "name": "T2", "props": { "characters": "B2" }, "layoutProps": {} } ]
      }
    ]
  };

        const root = await this.renderDefinition(structure);
        return root;
    }
}
`;

const converter = new ProceduralConverter();
const output = converter.convert(TEST_INPUT, "TestComponent");

console.log("--- GENERATED OUTPUT ---");
console.log(output);
console.log("------------------------");

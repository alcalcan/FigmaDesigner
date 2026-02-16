import { BaseComponent, ComponentProps, NodeDefinition } from "../components/BaseComponent";


// SVG Assets



export class checkbox_test_case extends BaseComponent {
  async create(props: ComponentProps): Promise<SceneNode> {
    const structure: NodeDefinition = {
      "type": "FRAME",
      "name": "root",
      "props": { "layoutMode": "VERTICAL", "itemSpacing": 10 },
      "children": [
        ...[{ "name": "Option 1", "isSelected": false }, { "name": "Option 2", "isSelected": false }, { "name": "Option 3", "isSelected": false }].map((item: any) => {
          const node: NodeDefinition = {
            "type": "FRAME",
            "name": "Item 1",
            "props": { "layoutMode": "HORIZONTAL" },
            "children": [
              {
                "type": "FRAME",
                "name": "Checkbox",
                "children": [
                  {
                    "type": "BOOLEAN_OPERATION",
                    "booleanOperation": "EXCLUDE",
                    "name": "Shape",
                    "children": [
                      {
                        "type": "VECTOR",
                        "name": "Path",
                        "layoutProps": { "width": 15, "height": 15, "relativeTransform": [[1, 0, 0], [0, 1, 0]], "parentIsAutoLayout": false }
                      },
                      {
                        "type": "VECTOR",
                        "name": "Path",
                        "layoutProps": { "width": 10, "height": 10, "relativeTransform": [[1, 0, 2.5], [0, 1, 2.5]], "parentIsAutoLayout": false },
                        "props": { "visible": true }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "TEXT",
                "props": { "characters": "Option 1" }
              }
            ]
          };

          // Apply loop overrides
          if (item.name) {
            const traverse = (n: NodeDefinition) => {
              if (n.type === 'TEXT' && n.props) {
                n.props.characters = item.name;
              }
              if (n.children) n.children.forEach(traverse);
            };
            traverse(node);
          }

          // Checkbox Logic: Inject checkmark and toggle visibility
          const findCheckbox = (n: NodeDefinition): NodeDefinition | null => {
            if (n.name === 'Checkbox' && n.children) return n;
            if (n.children) {
              for (const c of n.children) {
                const res = findCheckbox(c);
                if (res) return res;
              }
            }
            return null;
          };

          const checkbox = findCheckbox(node);
          if (checkbox && checkbox.children) {
            const shapeNode = checkbox.children.find(c => c.name === 'Shape');

            if (shapeNode && shapeNode.children && shapeNode.children.length > 1) {
              // const base = shapeNode.children[0];
              const hole = shapeNode.children[1];

              // Geometric Role Inference
              const isHole = true;

              if (isHole) {
                // HOLE BINDING: Inverse visibility
                hole.props = hole.props || {};
                hole.props.visible = !item.isSelected;
              } else {
                // ICON BINDING: Direct visibility
                hole.props = hole.props || {};
                hole.props.visible = !!item.isSelected;
              }
            }

            // Inject checkmark if not present
            if (!checkbox.children.find(c => c.name === 'Checkmark')) {
              checkbox.children.push({
                "type": "VECTOR",
                "name": "Checkmark",
                "props": {
                  "visible": !!item.isSelected,
                  "opacity": 1,
                  "strokes": [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": { "r": 1, "g": 1, "b": 1 }, "boundVariables": {} }],
                  "strokeWeight": 2,
                  "strokeCap": "ROUND",
                  "strokeJoin": "ROUND",
                  "vectorPaths": [{ "windingRule": "NONZERO", "data": "M 0 4 L 3 7 L 8 0" }],
                },
                "layoutProps": { "width": 8, "height": 7, "relativeTransform": [[1, 0, 6], [0, 1, 6]], "parentIsAutoLayout": false, "layoutPositioning": "AUTO" }
              });
            } else {
              // Update visibility of existing checkmark
              const checkmark = checkbox.children.find((c: any) => c.name === 'Checkmark');
              if (checkmark && checkmark.props) checkmark.props.visible = !!item.isSelected;
            }
          }

          if (item.isSelected) {
            // Apply background fill
            node.props = node.props || {};
            node.props.fills = [{
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 }, // User-requested appearance
              boundVariables: {}
            }];
          } else {
            if (node.props) node.props.fills = [];
          }

          return node;
        })
      ]
    };

    const root = await this.renderDefinition(structure);

    // Final positioning
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;

    return root;
  }
}

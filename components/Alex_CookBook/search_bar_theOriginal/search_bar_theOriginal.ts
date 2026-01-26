import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets



export class search_bar_theOriginal extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "search_bar_theOriginal",
    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"SPACE_BETWEEN","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":16,"paddingRight":0,"paddingBottom":16,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0},
    "layoutProps": {"width":1077,"height":72,"parentIsAutoLayout":false},
    "children": [
      {
        "type": "FRAME",
        "name": "Text Field",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"MIN","itemSpacing":8,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":1},
        "layoutProps": {"width":586,"height":40,"relativeTransform":[[1,0,0],[0,1,16]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "FRAME",
            "name": "Compact",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":12,"paddingTop":8,"paddingRight":12,"paddingBottom":8,"paddingLeft":12,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7019608020782471,"g":0.7529411911964417,"b":0.772549033164978},"boundVariables":{}}],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":4,"layoutAlign":"STRETCH","layoutGrow":0},
            "layoutProps": {"width":586,"height":40,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "FRAME",
                "name": "Inner",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":1},
                "layoutProps": {"width":562,"height":24,"relativeTransform":[[1,0,12],[0,1,8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "TEXT",
                    "name": "Placeholder",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3490196168422699,"g":0.43921568989753723,"b":0.48235294222831726},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"Poner algo aquí para la busqueda","fontSize":14,"textAlignHorizontal":"LEFT","textAlignVertical":"TOP","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":1},
                    "layoutProps": {"width":522,"height":21,"relativeTransform":[[1,0,0],[0,1,1.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
                  },
                  {
                    "type": "FRAME",
                    "name": "Icon",
                    "props": {"visible":true,"opacity":0,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                    "layoutProps": {"width":24,"height":24,"relativeTransform":[[1,0,538],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                    "children": [
                      {
                        "type": "VECTOR",
                        "name": "Shape",
                        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.36705881357192993,"b":0.7058823704719543},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"EVENODD","data":"M 0 5.161276340484619 L 6 0 L 6 10 L 0 5.161276340484619 Z"}],"x":7,"y":16},
                        "layoutProps": {"width":6,"height":10,"relativeTransform":[[-1.8369701465288538e-16,1,7],[-1,-1.8369701465288538e-16,16]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Frame 1728",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MAX","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":16,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
        "layoutProps": {"width":491,"height":32,"relativeTransform":[[1,0,586],[0,1,20]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          ...[{"name":"Newer first","fillColor":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"hasCheckbox":false,"isSelected":true},{"name":"PDF","fillColor":{"r":0.7019608020782471,"g":0.7529411911964417,"b":0.772549033164978},"hasCheckbox":false,"isSelected":true},{"name":"Author","fillColor":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"hasCheckbox":false,"isSelected":true},{"name":"Range date","fillColor":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"hasCheckbox":false,"isSelected":true}].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "chip_dropdown",
          "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":16,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":8,"layoutAlign":"INHERIT","layoutGrow":0},
          "layoutProps": {"width":125,"height":32,"relativeTransform":[[1,0,16],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
          "children": [
            {
              "type": "TEXT",
              "name": "Newer first",
              "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"Newer first","fontSize":14,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"WIDTH_AND_HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":0},
              "layoutProps": {"width":73,"height":21,"relativeTransform":[[1,0,16],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
            },
            {
              "type": "FRAME",
              "name": "Frame 1667",
              "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":8,"paddingTop":8,"paddingRight":8,"paddingBottom":8,"paddingLeft":8,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
              "layoutProps": {"width":32,"height":32,"relativeTransform":[[1,0,93],[0,-1,32]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
              "children": [
                {
                  "type": "FRAME",
                  "name": "Navigation / Chevron / Down",
                  "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                  "layoutProps": {"width":16,"height":16,"relativeTransform":[[1,0,8],[0,-1,24]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                  "children": [
                    {
                      "type": "VECTOR",
                      "shouldFlatten": true,
                      "name": "Shape",
                      "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":3.3333332538604736,"y":10.666666984558105},
                      "layoutProps": {"width":5.333333492279053,"height":9.333333015441895,"relativeTransform":[[-1.8369701465288538e-16,1,3.3333332538604736],[-1,-1.8369701465288538e-16,10.666666984558105]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                      "svgContent": "<svg width=\"5.333333492279053\" height=\"9.333333015441895\" viewBox=\"0 0 5.333333492279053 9.333333015441895\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.13807 0.195913C0.877722 -0.0644364 0.455612 -0.0644364 0.195262 0.195913C-0.0650874 0.456263 -0.0650874 0.878372 0.195262 1.13872L4.19526 5.13872C4.45561 5.39907 4.87772 5.39907 5.13807 5.13872L9.13807 1.13872C9.39842 0.878372 9.39842 0.456263 9.13807 0.195913C8.87772 -0.0644364 8.45561 -0.0644364 8.19526 0.195913L4.66667 3.72451L1.13807 0.195913Z\" fill=\"#1A313C\"/>\n</svg>"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TEXT",
              "name": "PDF",
              "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"PDF","fontSize":14,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"WIDTH_AND_HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":0},
              "layoutProps": {"width":26,"height":21,"relativeTransform":[[1,0,16],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
            },
            {
              "type": "TEXT",
              "name": "Author",
              "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"Author","fontSize":14,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"WIDTH_AND_HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":0},
              "layoutProps": {"width":46,"height":21,"relativeTransform":[[1,0,16],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
            },
            {
              "type": "TEXT",
              "name": "Range date",
              "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"Range date","fontSize":14,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"WIDTH_AND_HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":0},
              "layoutProps": {"width":74,"height":21,"relativeTransform":[[1,0,16],[0,1,5.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
            }
          ]
        } as unknown as NodeDefinition;
            
            // Apply loop overrides
            if (item.name) {
                 const traverse = (n: any) => {
                    if (n.type === 'TEXT') {
                         n.props = n.props || {};
                         n.props.characters = item.name;
                    }
                    if (n.children) n.children.forEach(traverse);
                 };
                 traverse(node);
            }

            // Checkbox Logic: Bind checkmark visibility to selection
            const findShape = (n: any): any => {
                if (n.name === 'Checkbox' && n.children) {
                     const shape = n.children.find((c: any) => c.name === 'Shape');
                     if (shape && shape.children && shape.children.length > 1) return shape;
                }
                if (n.children) {
                    for (const c of n.children) {
                        const s = findShape(c);
                        if (s) return s;
                    }
                }
                return null;
            };

            const shape = findShape(node);
            
            if (shape) {
                // The second child (index 1) is the inner checkmark path
                // We bind its visibility to the selection state
                if (shape.children && shape.children.length > 1) {
                    shape.children[1].props = shape.children[1].props || {};
                    const isHole = false;
                    shape.children[1].props.visible = isHole ? !item.isSelected : !!item.isSelected;
                }
            }

            if (item.isSelected) {
                node.props = node.props || {};
                node.props.fills = [{
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    blendMode: "NORMAL",
                    color: item.fillColor || { r: 0.94, g: 0.95, b: 0.97 },
                    boundVariables: {}
                }];
            } else {
                if (node.props) node.props.fills = [];
            }

            return node;
        })
        ]
      }
    ]
  };

        const root = await this.renderDefinition(structure);
        
        // Final positioning
        root.x = props.x;
        root.y = props.y;

        return root;
    }
}

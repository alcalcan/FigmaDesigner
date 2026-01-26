import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets



export class chip_dropdown_goodChevron extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "chip_dropdown_goodChevron",
    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":16,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":8},
    "layoutProps": {"width":125,"height":32,"parentIsAutoLayout":false},
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

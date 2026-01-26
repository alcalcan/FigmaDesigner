import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets



export class Top_bar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "Top bar",
    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"SPACE_BETWEEN","counterAxisAlignItems":"CENTER","itemSpacing":77,"paddingTop":8,"paddingRight":40,"paddingBottom":8,"paddingLeft":40,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9490196108818054,"g":0.9529411792755127,"b":0.95686274766922},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0},
    "layoutProps": {"width":1680,"height":40,"parentIsAutoLayout":false},
    "children": [
      {
        "type": "FRAME",
        "name": "Frame 1607",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":23,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
        "layoutProps": {"width":161,"height":21,"relativeTransform":[[1,0,40],[0,1,9.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "FRAME",
            "name": "Frame 1837",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":12,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
            "layoutProps": {"width":161,"height":21,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "FRAME",
                "name": "Group 19",
                "props": {"strokes":[],"strokeWeight":0,"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"effects":[],"layoutAlign":"INHERIT","layoutGrow":0},
                "layoutProps": {"width":54,"height":18.5,"relativeTransform":[[1,0,0],[0,1,2.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Logos / Wordmark / UEFA.com Black",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":true,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":0.25775936245918274,"g":0.25775936245918274,"b":0.25775936245918274},"boundVariables":{}}],"strokes":[],"strokeWeight":0.5517241358757019,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":0,"y":2.5},
                    "layoutProps": {"width":54,"height":16,"relativeTransform":[[1,0,0],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                    "children": [
                      {
                        "type": "VECTOR",
                        "shouldFlatten": true,
                        "name": "UEFA.com",
                        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":0,"y":0.0546875},
                        "layoutProps": {"width":98.46454620361328,"height":15.945378303527832,"relativeTransform":[[1,0,0],[0,1,0.0546875]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                        "svgContent": "<svg width=\"98.46454620361328\" height=\"15.945378303527832\" viewBox=\"0 0 98.46454620361328 15.945378303527832\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M82.4734 4.0364H83.7738V5.98785H83.8417C84.5821 4.59696 85.7931 3.69986 87.6314 3.69986C89.1564 3.69986 90.5252 4.44027 90.9517 5.96578C91.6469 4.44027 93.1046 3.69986 94.6295 3.69986C97.1641 3.69986 98.4645 5.02344 98.4645 7.75944V15.6094H97.0521V7.8273C97.0521 5.92054 96.3343 4.88827 94.315 4.88827C91.8709 4.88827 91.1757 6.90758 91.1757 9.0604V15.6094H89.7622V7.75944C89.7848 6.18978 89.1349 4.88827 87.3407 4.88827C84.896 4.88827 83.9084 6.72716 83.8858 9.15033V15.6094H82.4734V4.0364ZM55.3484 15.5509V13.5801H56.9109V15.5509H55.3484ZM66.9357 7.67006C66.5539 5.94316 65.5001 4.88827 63.6607 4.88827C60.9473 4.88827 59.6017 7.35558 59.6017 9.82233C59.6017 12.2902 60.9473 14.757 63.6607 14.757C65.4108 14.757 66.8463 13.3892 67.0251 11.4604H68.4375C68.0574 14.2417 66.2406 15.9454 63.6607 15.9454C60.1175 15.9454 58.1887 13.1426 58.1887 9.82233C58.1887 6.50371 60.1175 3.69986 63.6607 3.69986C66.1286 3.69986 68.0348 5.02344 68.3481 7.67006H66.9357ZM71.2414 9.82233C71.2414 12.2902 72.5876 14.757 75.3021 14.757C78.0154 14.757 79.3611 12.2902 79.3611 9.82233C79.3611 7.35558 78.0154 4.88827 75.3021 4.88827C72.5876 4.88827 71.2414 7.35558 71.2414 9.82233ZM80.7741 9.82233C80.7741 13.1426 78.8452 15.9454 75.3021 15.9454C71.7578 15.9454 69.829 13.1426 69.829 9.82233C69.829 6.50371 71.7578 3.69986 75.3021 3.69986C78.8452 3.69986 80.7741 6.50371 80.7741 9.82233ZM4.04414 11.6276C4.67034 12.2742 5.65959 12.6284 6.71228 12.6273C7.76441 12.6295 8.75421 12.2742 9.37986 11.6276C10.1468 10.8463 10.3923 10.0651 10.389 8.41544L10.3906 0H13.4234V9.20275C13.4207 11.1266 12.8557 12.6146 11.6943 13.7495C10.3846 15.0328 8.77793 15.6331 6.71228 15.6381C4.64552 15.6331 3.04 15.0328 1.73021 13.7495C0.568828 12.6146 0.00331034 11.1266 0 9.20385V0H3.03338L3.03559 8.41544C3.03228 10.0651 3.27779 10.8463 4.04414 11.6276ZM26.7349 2.86179H19.0516V6.36523H26.0828V9.18454H19.0516V10.6621C19.0516 12.2891 19.6188 12.6891 21.0786 12.6891H26.7349V15.5509H20.9081C18.2074 15.5509 16.0182 14.3399 16.0182 10.9876V1.13986C16.0182 0.417102 16.4966 0 17.1592 0H26.7349V2.86179ZM31.8698 9.18454L31.8748 15.5509H29.9774C29.3142 15.5509 28.837 15.1338 28.837 14.4099V4.56385C28.837 1.21159 31.0257 0 33.7258 0H39.5525V2.86179H33.8968C32.4364 2.86179 31.8698 3.26179 31.8698 4.88937L31.8692 6.36523H38.9015V9.18454H31.8698ZM45.9454 0.00441378C46.8386 0.00441378 47.1349 0.472827 47.3269 1.01517L53.0251 15.5531L49.7694 15.5542L48.6477 12.6941H44.9379L45.952 9.83116H47.5261L45.5305 4.74151L41.7015 15.5542L38.6654 15.5531L43.8146 1.01517C44.0061 0.473378 44.3018 0.00441378 45.1961 0.00441378H45.9454Z\" fill=\"black\"/>\n</svg>"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "LINE",
                "name": "Line 39",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[],"strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}],"strokeWeight":1,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"layoutAlign":"STRETCH","layoutGrow":0},
                "layoutProps": {"width":21,"height":1,"relativeTransform":[[-4.3711395392165286e-8,-1,67],[1,-4.3711395392165286e-8,2.1855697696082643e-8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
              },
              {
                "type": "FRAME",
                "name": "Frame 1614",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                "layoutProps": {"width":82,"height":21,"relativeTransform":[[1,0,79],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "TEXT",
                    "name": "Resources",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"Resources","fontSize":16,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"WIDTH_AND_HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","font":{"family":"Open Sans","style":"Bold"},"layoutAlign":"INHERIT","layoutGrow":0},
                    "layoutProps": {"width":82,"height":21,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Frame 1838",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MAX","counterAxisAlignItems":"CENTER","itemSpacing":24,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
        "layoutProps": {"width":950.62060546875,"height":24,"relativeTransform":[[1,0,689.37939453125],[0,1,8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "FRAME",
            "name": "Notifications / notifications-none",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":true,"layoutMode":"NONE","fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
            "layoutProps": {"width":24,"height":24,"relativeTransform":[[1,0,749.62060546875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Vector",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":4.5,"y":2.5},
                "layoutProps": {"width":14.999951362609863,"height":19.192251205444336,"relativeTransform":[[1,0,4.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                "svgContent": "<svg width=\"14.999951362609863\" height=\"19.192251205444336\" viewBox=\"0 0 14.999951362609863 19.192251205444336\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.749996 16.3846C0.537496 16.3846 0.359373 16.3127 0.215623 16.1689C0.0718746 16.0251 0 15.8469 0 15.6343C0 15.4217 0.0718746 15.2436 0.215623 15.1C0.359373 14.9564 0.537496 14.8846 0.749996 14.8846H1.80768V7.42301C1.80768 6.07814 2.22274 4.88906 3.05285 3.85573C3.88299 2.8224 4.94868 2.16151 6.24996 1.87308V1.25C6.24996 0.902779 6.37138 0.607647 6.61421 0.364599C6.85704 0.121534 7.15191 0 7.49881 0C7.84569 0 8.14093 0.121534 8.38451 0.364599C8.6281 0.607647 8.74989 0.902779 8.74989 1.25V1.87308C10.0512 2.16151 11.1169 2.8224 11.9471 3.85573C12.7772 4.88906 13.1922 6.07814 13.1922 7.42301V14.8846H14.25C14.4625 14.8846 14.6406 14.9565 14.7843 15.1003C14.9281 15.2441 15 15.4223 15 15.6349C15 15.8475 14.9281 16.0256 14.7843 16.1692C14.6406 16.3128 14.4625 16.3846 14.25 16.3846H0.749996ZM7.49824 19.1923C7.00065 19.1923 6.57526 19.0153 6.22206 18.6613C5.86886 18.3073 5.69226 17.8817 5.69226 17.3846H9.30759C9.30759 17.8833 9.13042 18.3093 8.77609 18.6625C8.42176 19.0157 7.9958 19.1923 7.49824 19.1923ZM3.30763 14.8846H11.6923V7.42301C11.6923 6.26531 11.283 5.27719 10.4644 4.45861C9.64576 3.64001 8.65761 3.23071 7.49993 3.23071C6.34224 3.23071 5.35409 3.64001 4.53553 4.45861C3.71693 5.27719 3.30763 6.26531 3.30763 7.42301V14.8846Z\" fill=\"black\"/>\n</svg>"
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Frame 1612",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
            "layoutProps": {"width":105,"height":24,"relativeTransform":[[1,0,797.62060546875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "FRAME",
                "name": "Frame 1612",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
                "layoutProps": {"width":105,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "FRAME",
                    "name": "Frame 1618",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                    "layoutProps": {"width":88,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                    "children": [
                      {
                        "type": "FRAME",
                        "name": "pk-avatar",
                        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":false,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                        "layoutProps": {"width":24,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                        "children": [
                          {
                            "type": "ELLIPSE",
                            "name": "Ellipse 22",
                            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":0,"y":0},
                            "layoutProps": {"width":24,"height":24,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                          },
                          {
                            "type": "TEXT",
                            "name": "FW",
                            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.2705882489681244,"g":0.3607843220233917,"b":0.40392157435417175},"boundVariables":{}}],"strokes":[],"strokeWeight":2.473090410232544,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"JD","fontSize":14,"textAlignHorizontal":"CENTER","textAlignVertical":"TOP","textAutoResize":"WIDTH_AND_HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PERCENT","value":150},"textCase":"ORIGINAL","textDecoration":"NONE","font":{"family":"Manrope","style":"Bold"},"x":3.5,"y":2},
                            "layoutProps": {"width":17,"height":21,"relativeTransform":[[1,0,3.5],[0,1,2]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                          }
                        ]
                      },
                      {
                        "type": "TEXT",
                        "name": "John Doe",
                        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"John Doe","fontSize":14,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"WIDTH_AND_HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":0},
                        "layoutProps": {"width":60,"height":21,"relativeTransform":[[1,0,28],[0,1,1.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
                      }
                    ]
                  },
                  {
                    "type": "LINE",
                    "name": "Line 43",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[],"strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}],"strokeWeight":1,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"layoutAlign":"STRETCH","layoutGrow":0},
                    "layoutProps": {"width":24,"height":1,"relativeTransform":[[-4.3711395392165286e-8,-1,105],[1,-4.3711395392165286e-8,2.1855697696082643e-8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
                  }
                ]
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Navigation / Hamburger",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"clipsContent":true,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
            "layoutProps": {"width":24,"height":24,"relativeTransform":[[1,0,926.62060546875],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "BOOLEAN_OPERATION",
                "booleanOperation": "UNION",
                "name": "Union",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":2,"strokeAlign":"CENTER","strokeCap":"ROUND","strokeJoin":"ROUND","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":2,"y":5},
                "layoutProps": {"width":20,"height":14,"relativeTransform":[[1,0,2],[0,1,5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "VECTOR",
                    "name": "Vector (Stroke)",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}],"strokes":[],"strokeWeight":2,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}],"x":2,"y":11},
                    "layoutProps": {"width":20,"height":2,"relativeTransform":[[1,0,2],[0,1,11]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                  },
                  {
                    "type": "VECTOR",
                    "name": "Vector (Stroke)",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}],"strokes":[],"strokeWeight":2,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}],"x":2,"y":5},
                    "layoutProps": {"width":20,"height":2,"relativeTransform":[[1,0,2],[0,1,5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                  },
                  {
                    "type": "VECTOR",
                    "name": "Vector (Stroke)",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.07058823853731155,"g":0.2235294133424759,"b":0.5215686559677124},"boundVariables":{}}],"strokes":[],"strokeWeight":2,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"EVENODD","data":"M 0 1 C 0 0.44771522283554077 0.44771522283554077 0 1 0 L 19 0 C 19.552284240722656 0 20 0.44771522283554077 20 1 C 20 1.5522847771644592 19.552284240722656 2 19 2 L 1 2 C 0.44771522283554077 2 0 1.5522847771644592 0 1 Z"}],"x":2,"y":17},
                    "layoutProps": {"width":20,"height":2,"relativeTransform":[[1,0,2],[0,1,17]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                  }
                ]
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

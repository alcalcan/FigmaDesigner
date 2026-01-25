import { BaseComponent, ComponentProps, NodeDefinition, T2x3 } from "../../BaseComponent";


// SVG Assets



export class sidebar extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
    "type": "FRAME",
    "name": "sidebar",
    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":16,"paddingTop":0,"paddingRight":16,"paddingBottom":0,"paddingLeft":16,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":14},
    "layoutProps": {"width":339,"height":694,"parentIsAutoLayout":false},
    "children": [
      {
        "type": "FRAME",
        "name": "Frame 1714",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
        "layoutProps": {"width":307,"height":25,"relativeTransform":[[1,0,16],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "FRAME",
            "name": "Frame 1919",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":1},
            "layoutProps": {"width":249,"height":25,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "FRAME",
                "name": "Actions / Star",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":true,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                "layoutProps": {"width":24,"height":24,"relativeTransform":[[1,0,0],[0,1,0.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "VECTOR",
                    "shouldFlatten": true,
                    "name": "Vector (Stroke)",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","strokes":[],"strokeWeight":2,"strokeAlign":"CENTER","strokeCap":"ROUND","strokeJoin":"ROUND","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":0.9999708533287048,"y":1},
                    "layoutProps": {"width":22.000059127807617,"height":21.020004272460938,"relativeTransform":[[1,0,0.9999708533287048],[0,1,1]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                    "svgContent": "<svg width=\"22.000059127807617\" height=\"21.020004272460938\" viewBox=\"0 0 22.000059127807617 21.020004272460938\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 0C11.3806 0 11.7283 0.216072 11.8967 0.557376L14.7543 6.34647L21.1447 7.28051C21.5212 7.33555 21.8339 7.59956 21.9513 7.96157C22.0687 8.32358 21.9704 8.72083 21.6978 8.98636L17.0746 13.4894L18.1656 19.851C18.23 20.2261 18.0757 20.6053 17.7678 20.8291C17.4598 21.0528 17.0515 21.0823 16.7146 20.9051L11 17.8998L5.28548 20.9051C4.94856 21.0823 4.54027 21.0528 4.2323 20.8291C3.92432 20.6053 3.77007 20.2261 3.83442 19.851L4.92551 13.4894L0.302296 8.98636C0.0296782 8.72083 -0.0685946 8.32358 0.0487831 7.96157C0.166161 7.59956 0.478841 7.33555 0.855401 7.28051L7.24577 6.34647L10.1033 0.557376C10.2718 0.216072 10.6194 0 11 0ZM11 3.25925L8.80674 7.70262C8.6612 7.99747 8.38001 8.20193 8.05466 8.24949L3.14844 8.9666L6.69776 12.4236C6.93364 12.6534 7.0413 12.9845 6.98564 13.309L6.14821 18.1917L10.5346 15.8849C10.826 15.7317 11.1741 15.7317 11.4655 15.8849L15.8518 18.1917L15.0144 13.309C14.9588 12.9845 15.0664 12.6534 15.3023 12.4236L18.8516 8.9666L13.9454 8.24949C13.62 8.20193 13.3389 7.99747 13.1933 7.70262L11 3.25925Z\" fill=\"#1A313C\"/>\n</svg>"
                  }
                ]
              },
              {
                "type": "TEXT",
                "name": "Favourites",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"Favourites","fontSize":20,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":25},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"SemiBold"},"layoutAlign":"INHERIT","layoutGrow":1},
                "layoutProps": {"width":221,"height":25,"relativeTransform":[[1,0,28],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
              }
            ]
          },
          {
            "type": "FRAME",
            "name": "Toggle",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"NONE","fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
            "layoutProps": {"width":42,"height":22,"relativeTransform":[[1,0,265],[0,1,1.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Rectangle 77 Copy 7",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"x":0,"y":0},
                "layoutProps": {"width":42,"height":22,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                "svgContent": "<svg width=\"42\" height=\"22\" viewBox=\"0 0 42 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 11C0 4.92487 4.92487 0 11 0H31C37.0751 0 42 4.92487 42 11C42 17.0751 37.0751 22 31 22H11C4.92487 22 0 17.0751 0 11Z\" fill=\"#9BA8AD\"/>\n</svg>"
              },
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Oval 1 Copy 13",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":2,"y":2},
                "layoutProps": {"width":18,"height":18,"relativeTransform":[[1,0,2],[0,1,2]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                "svgContent": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z\" fill=\"white\"/>\n</svg>"
              },
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Shape",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":24,"y":6},
                "layoutProps": {"width":10,"height":10,"relativeTransform":[[1,0,24],[0,1,6]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                "svgContent": "<svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.86477 5.00039L9.82068 1.04482C10.0598 0.805562 10.0598 0.418706 9.82068 0.180999C9.58159 -0.0582615 9.195 -0.0582615 8.95746 0.180999L5 4.13501L1.04254 0.179445C0.803447 -0.0598151 0.416861 -0.0598151 0.17932 0.179445C-0.0597733 0.418706 -0.0597733 0.805562 0.17932 1.04327L4.13523 4.99883L0.17932 8.95595C-0.0597733 9.19522 -0.0597733 9.58207 0.17932 9.81978C0.298867 9.93941 0.455675 9.99845 0.61093 9.99845C0.767738 9.99845 0.922993 9.93941 1.04254 9.81978L5 5.86421L8.95746 9.82133C9.07701 9.94096 9.23226 10 9.38907 10C9.54588 10 9.70113 9.94096 9.82068 9.82133C10.0598 9.58207 10.0598 9.19522 9.82068 8.95751L5.86477 5.00039Z\" fill=\"white\"/>\n</svg>"
              }
            ]
          }
        ]
      },
      {
        "type": "LINE",
        "name": "Line 62",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[],"strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}],"strokeWeight":1,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"layoutAlign":"STRETCH","layoutGrow":0},
        "layoutProps": {"width":307,"height":0,"relativeTransform":[[1,0,16],[0,1,41]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
      },
      {
        "type": "FRAME",
        "name": "Frame 1713",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
        "layoutProps": {"width":307,"height":40,"relativeTransform":[[1,0,16],[0,1,57]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "TEXT",
            "name": "Filters",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"Filters","fontSize":20,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":25},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"SemiBold"},"layoutAlign":"INHERIT","layoutGrow":1},
            "layoutProps": {"width":251,"height":25,"relativeTransform":[[1,0,0],[0,1,7.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
          },
          {
            "type": "FRAME",
            "name": "Frame 1695",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":8,"paddingTop":8,"paddingRight":8,"paddingBottom":8,"paddingLeft":8,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":100,"layoutAlign":"INHERIT","layoutGrow":0},
            "layoutProps": {"width":40,"height":40,"relativeTransform":[[1,0,267],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "FRAME",
                "name": "Actions / Search",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                "layoutProps": {"width":24,"height":24,"relativeTransform":[[1,0,8],[0,1,8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "BOOLEAN_OPERATION",
                    "booleanOperation": "UNION",
                    "name": "Shape",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":3,"y":3},
                    "layoutProps": {"width":18.997970581054688,"height":18.999923706054688,"relativeTransform":[[1,0,3],[0,1,3]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                    "children": [
                      {
                        "type": "BOOLEAN_OPERATION",
                        "booleanOperation": "EXCLUDE",
                        "name": "Oval",
                        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":3,"y":3},
                        "layoutProps": {"width":16,"height":16,"relativeTransform":[[1,0,3],[0,1,3]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                        "children": [
                          {
                            "type": "VECTOR",
                            "name": "Path",
                            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"NONZERO","data":"M 8 16 C 12.418278217315674 16 16 12.418278217315674 16 8 C 16 3.581721782684326 12.418278217315674 0 8 0 C 3.581721782684326 0 0 3.581721782684326 0 8 C 0 12.418278217315674 3.581721782684326 16 8 16 Z"}],"x":3,"y":3},
                            "layoutProps": {"width":16,"height":16,"relativeTransform":[[1,0,3],[0,1,3]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                          },
                          {
                            "type": "VECTOR",
                            "name": "Path",
                            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"NONZERO","data":"M 6 12 C 2.686291456222534 12 0 9.313708543777466 0 6 C 0 2.686291456222534 2.686291456222534 0 6 0 C 9.313708543777466 0 12 2.686291456222534 12 6 C 12 9.313708543777466 9.313708543777466 12 6 12 Z"}],"x":5,"y":5},
                            "layoutProps": {"width":12,"height":12,"relativeTransform":[[1,0,5],[0,1,5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                          }
                        ]
                      },
                      {
                        "type": "VECTOR",
                        "name": "Path",
                        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"NONZERO","data":"M 6.057106971740723 4.642893314361572 L 1.7071068286895752 0.2928932309150696 C 1.3165825307369232 -0.0976310670375824 0.6834175288677216 -0.0976310670375824 0.2928932309150696 0.2928932309150696 C -0.0976310670375824 0.6834175288677216 -0.0976310670375824 1.3165825307369232 0.2928932309150696 1.7071068286895752 L 4.642893314361572 6.057106971740723 C 5.033417612314224 6.447631269693375 5.666582673788071 6.447631269693375 6.057106971740723 6.057106971740723 C 6.447631269693375 5.666582673788071 6.447631269693375 5.033417612314224 6.057106971740723 4.642893314361572 Z"}],"x":15.6484375,"y":15.650390625},
                        "layoutProps": {"width":6.349999904632568,"height":6.349999904632568,"relativeTransform":[[1,0,15.6484375],[0,1,15.650390625]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
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
        "name": "Text Field",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"CENTER","counterAxisAlignItems":"MIN","itemSpacing":8,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
        "layoutProps": {"width":296,"height":69,"relativeTransform":[[1,0,16],[0,1,113]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "FRAME",
            "name": "Compact",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":12,"paddingTop":8,"paddingRight":12,"paddingBottom":8,"paddingLeft":12,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.7019608020782471,"g":0.7529411911964417,"b":0.772549033164978},"boundVariables":{}}],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":4,"layoutAlign":"STRETCH","layoutGrow":0},
            "layoutProps": {"width":296,"height":40,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "FRAME",
                "name": "Inner",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":16,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":1},
                "layoutProps": {"width":272,"height":24,"relativeTransform":[[1,0,12],[0,1,8]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "TEXT",
                    "name": "Placeholder",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3490196168422699,"g":0.43921568989753723,"b":0.48235294222831726},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"Grow","fontSize":14,"textAlignHorizontal":"LEFT","textAlignVertical":"TOP","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":1},
                    "layoutProps": {"width":232,"height":21,"relativeTransform":[[1,0,0],[0,1,1.5]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
                  },
                  {
                    "type": "FRAME",
                    "name": "Icon",
                    "props": {"visible":true,"opacity":0,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                    "layoutProps": {"width":24,"height":24,"relativeTransform":[[1,0,248],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
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
          },
          {
            "type": "TEXT",
            "name": "Helper",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3490196168422699,"g":0.43921568989753723,"b":0.48235294222831726},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"1 result","fontSize":14,"textAlignHorizontal":"LEFT","textAlignVertical":"TOP","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":21},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":0},
            "layoutProps": {"width":296,"height":21,"relativeTransform":[[1,0,0],[0,1,48]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Frame 1712",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}],"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":0,"strokeRightWeight":0,"strokeBottomWeight":1,"strokeLeftWeight":0,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
        "layoutProps": {"width":307,"height":32,"relativeTransform":[[1,0,16],[0,1,198]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "TEXT",
            "name": "Text",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"SUBJECT","fontSize":16,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":24},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"SemiBold"},"layoutAlign":"INHERIT","layoutGrow":1},
            "layoutProps": {"width":291,"height":24,"relativeTransform":[[1,0,0],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
          },
          {
            "type": "FRAME",
            "name": "Actions / Add / Small",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":true,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
            "layoutProps": {"width":12,"height":12,"relativeTransform":[[1,0,295],[0,1,10]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Union",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"ROUND","strokeJoin":"ROUND","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":2,"y":2},
                "layoutProps": {"width":8,"height":8,"relativeTransform":[[1,0,2],[0,1,2]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                "svgContent": "<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 0.5C4.5 0.223858 4.27614 0 4 0C3.72386 0 3.5 0.223858 3.5 0.5V3.5H0.5C0.223858 3.5 0 3.72386 0 4C0 4.27614 0.223858 4.5 0.5 4.5H3.5V7.5C3.5 7.77614 3.72386 8 4 8C4.27614 8 4.5 7.77614 4.5 7.5V4.5H7.5C7.77614 4.5 8 4.27614 8 4C8 3.72386 7.77614 3.5 7.5 3.5H4.5V0.5Z\" fill=\"#1A313C\"/>\n</svg>"
              }
            ]
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Frame 1711",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"VERTICAL","primaryAxisSizingMode":"AUTO","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":12,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":8,"layoutAlign":"STRETCH","layoutGrow":0},
        "layoutProps": {"width":307,"height":384,"relativeTransform":[[1,0,16],[0,1,246]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "FRAME",
            "name": "Frame 1704",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}],"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":0,"strokeRightWeight":0,"strokeBottomWeight":1,"strokeLeftWeight":0,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
            "layoutProps": {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,0]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "TEXT",
                "name": "Filter 6",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.6352941393852234,"b":0.5882353186607361},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"UEFA INITIATIVE","fontSize":16,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":24},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"SemiBold"},"layoutAlign":"INHERIT","layoutGrow":1},
                "layoutProps": {"width":291,"height":24,"relativeTransform":[[1,0,0],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
              },
              {
                "type": "FRAME",
                "name": "Actions / Minus / Small",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":true,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
                "layoutProps": {"width":12,"height":12,"relativeTransform":[[1,0,295],[0,1,10]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
                "children": [
                  {
                    "type": "VECTOR",
                    "shouldFlatten": true,
                    "name": "Vector",
                    "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0.6352941393852234,"b":0.5882353186607361},"boundVariables":{}}],"strokeWeight":2,"strokeAlign":"CENTER","strokeCap":"ROUND","strokeJoin":"ROUND","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":2.5,"y":6},
                    "layoutProps": {"width":7,"height":0,"relativeTransform":[[1,0,2.5],[0,1,6]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                    "svgContent": "<svg width=\"9\" height=\"2\" viewBox=\"0 0 9 2\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M1 1H8\" stroke=\"#00A296\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"
                  }
                ]
              }
            ]
          },
          ...[{"name":"UEFA Academy","hasCheckbox":true,"isSelected":false},{"name":"UEFA Assist","hasCheckbox":true,"isSelected":false},{"name":"UEFA Events","hasCheckbox":true,"isSelected":false},{"name":"UEFA Football Development","hasCheckbox":true,"isSelected":false},{"name":"UEFA Grow","fillColor":{"r":0.9450980424880981,"g":0.9529411792755127,"b":0.9725490212440491},"hasCheckbox":true,"isSelected":true},{"name":"UEFA Hatrick","hasCheckbox":true,"isSelected":false},{"name":"UEFA Anti-Doping and Medical","hasCheckbox":true,"isSelected":false},{"name":"UEFA Intelligence Center","hasCheckbox":true,"isSelected":false}].map((item: any) => {
            const node = {
          "type": "FRAME",
          "name": "Frame 1705",
          "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":8,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":0,"strokeRightWeight":0,"strokeBottomWeight":1,"strokeLeftWeight":0,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
          "layoutProps": {"width":307,"height":32,"relativeTransform":[[1,0,0],[0,1,44]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
          "children": [
            {
              "type": "FRAME",
              "name": "Checkbox",
              "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
              "layoutProps": {"width":20,"height":20,"relativeTransform":[[1,0,8],[0,1,6]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
              "children": [
                {
                  "type": "BOOLEAN_OPERATION",
                  "booleanOperation": "EXCLUDE",
                  "name": "Shape",
                  "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":2.5,"y":2.5},
                  "layoutProps": {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                  "children": [
                    {
                      "type": "VECTOR",
                      "name": "Path",
                      "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"EVENODD","data":"M 1.6666666666666667 0 L 13.333333333333334 0 C 14.253807961940765 0 15 0.7461920380592346 15 1.6666666666666667 L 15 13.333333333333334 C 15 14.253807961940765 14.253807961940765 15 13.333333333333334 15 L 1.6666666666666667 15 C 0.7461920380592346 15 0 14.253807961940765 0 13.333333333333334 L 0 1.6666666666666667 C 0 0.7461920380592346 0.7461920380592346 0 1.6666666666666667 0 Z"}],"x":2.5,"y":2.5},
                      "layoutProps": {"width":15,"height":15,"relativeTransform":[[1,0,2.5],[0,1,2.5]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                    },
                    {
                      "type": "VECTOR",
                      "name": "Path",
                      "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0},"boundVariables":{}}],"strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"vectorPaths":[{"windingRule":"EVENODD","data":"M 0 0 L 0 11.666666984558105 L 11.666666984558105 11.666666984558105 L 11.666666984558105 0 L 0 0 Z"}],"x":4.166666626930237,"y":4.166666626930237},
                      "layoutProps": {"width":11.666666984558105,"height":11.666666984558105,"relativeTransform":[[1,0,4.166666626930237],[0,1,4.166666626930237]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"}
                    }
                  ]
                }
              ]
            },
            {
              "type": "TEXT",
              "name": "Filter name",
              "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"UEFA Academy","fontSize":16,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":24},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"Regular"},"layoutAlign":"INHERIT","layoutGrow":1},
              "layoutProps": {"width":275,"height":24,"relativeTransform":[[1,0,32],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
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
                    const isHole = true;
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
      },
      {
        "type": "FRAME",
        "name": "Frame 1649",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"FIXED","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"CENTER","itemSpacing":4,"paddingTop":0,"paddingRight":0,"paddingBottom":0,"paddingLeft":0,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8156862854957581,"g":0.8470588326454163,"b":0.8588235378265381},"boundVariables":{}}],"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":0,"strokeRightWeight":0,"strokeBottomWeight":1,"strokeLeftWeight":0,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
        "layoutProps": {"width":307,"height":32,"relativeTransform":[[1,0,16],[0,1,646]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
        "children": [
          {
            "type": "TEXT",
            "name": "Text",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","fills":[{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.10196078568696976,"g":0.1921568661928177,"b":0.23529411852359772},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"OUTSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"effects":[],"characters":"ORGANISATION","fontSize":16,"textAlignHorizontal":"LEFT","textAlignVertical":"CENTER","textAutoResize":"HEIGHT","letterSpacing":{"unit":"PIXELS","value":0},"lineHeight":{"unit":"PIXELS","value":24},"textCase":"ORIGINAL","textDecoration":"NONE","paragraphSpacing":0,"paragraphIndent":0,"font":{"family":"Open Sans","style":"SemiBold"},"layoutAlign":"INHERIT","layoutGrow":1},
            "layoutProps": {"width":291,"height":24,"relativeTransform":[[1,0,0],[0,1,4]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
          },
          {
            "type": "FRAME",
            "name": "Actions / Add / Small",
            "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":true,"layoutMode":"NONE","fills":[{"type":"SOLID","visible":false,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1},"boundVariables":{}}],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"INHERIT","layoutGrow":0},
            "layoutProps": {"width":12,"height":12,"relativeTransform":[[1,0,295],[0,1,10]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"},
            "children": [
              {
                "type": "VECTOR",
                "shouldFlatten": true,
                "name": "Union",
                "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","strokes":[],"strokeWeight":0,"strokeAlign":"CENTER","strokeCap":"ROUND","strokeJoin":"ROUND","strokeMiterLimit":4,"effects":[],"cornerRadius":0,"x":2,"y":2},
                "layoutProps": {"width":8,"height":8,"relativeTransform":[[1,0,2],[0,1,2]],"parentIsAutoLayout":false,"layoutPositioning":"AUTO"},
                "svgContent": "<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 0.5C4.5 0.223858 4.27614 0 4 0C3.72386 0 3.5 0.223858 3.5 0.5V3.5H0.5C0.223858 3.5 0 3.72386 0 4C0 4.27614 0.223858 4.5 0.5 4.5H3.5V7.5C3.5 7.77614 3.72386 8 4 8C4.27614 8 4.5 7.77614 4.5 7.5V4.5H7.5C7.77614 4.5 8 4.27614 8 4C8 3.72386 7.77614 3.5 7.5 3.5H4.5V0.5Z\" fill=\"#1A313C\"/>\n</svg>"
              }
            ]
          }
        ]
      },
      {
        "type": "FRAME",
        "name": "Frame 1656",
        "props": {"visible":true,"opacity":1,"locked":false,"blendMode":"PASS_THROUGH","isMask":false,"maskType":"ALPHA","clipsContent":false,"layoutMode":"HORIZONTAL","primaryAxisSizingMode":"FIXED","counterAxisSizingMode":"AUTO","primaryAxisAlignItems":"MIN","counterAxisAlignItems":"MIN","itemSpacing":8,"paddingTop":8,"paddingRight":8,"paddingBottom":8,"paddingLeft":8,"itemReverseZIndex":false,"strokesIncludedInLayout":false,"fills":[],"strokes":[],"strokeWeight":1,"strokeAlign":"INSIDE","strokeCap":"NONE","strokeJoin":"MITER","strokeMiterLimit":4,"strokeTopWeight":1,"strokeRightWeight":1,"strokeBottomWeight":1,"strokeLeftWeight":1,"effects":[],"cornerRadius":0,"layoutAlign":"STRETCH","layoutGrow":0},
        "layoutProps": {"width":307,"height":0,"relativeTransform":[[1,0,16],[0,1,694]],"parentIsAutoLayout":true,"layoutPositioning":"AUTO"}
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

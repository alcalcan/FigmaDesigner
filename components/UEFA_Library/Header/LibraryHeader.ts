import { BaseComponent, ComponentProps, NodeDefinition  } from "../../BaseComponent";
import { normalizeLibraryLayerNames } from "../shared/LibraryLayerNaming";
import { createFrame, createText } from "../../ComponentHelpers";

import IMG_Proposal_notification_img_1_opt_png from "./assets/Proposal_notification_img_1_opt.png";

export interface LibraryHeaderProps extends ComponentProps {
  title?: string;
  subtitle?: string;
}

export class LibraryHeader extends BaseComponent {
  async create(props: LibraryHeaderProps): Promise<SceneNode> {
    const title = props.title ?? "UEFA Resources";
    const subtitle = props.subtitle ?? "Second line for text description";

    const structure: NodeDefinition = createFrame(
      "Header",
      {
        layoutProps: {
          parentIsAutoLayout: true,
          layoutPositioning: "AUTO",
          width: 1680,
          height: 184,
          relativeTransform: [[1, 0, 0], [0, 1, 40]],
          constraints: { horizontal: "MIN", vertical: "MIN" }
        },
        layoutMode: "VERTICAL",
        itemSpacing: 8,
        paddingTop: 16,
        paddingRight: 120,
        paddingBottom: 16,
        paddingLeft: 120,
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "FIXED",
        primaryAxisAlignItems: "CENTER",
        counterAxisAlignItems: "MIN",
        layoutAlign: "STRETCH",
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "FIXED",
        clipsContent: false,
        fills: [
          {
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            type: "SOLID",
            color: { r: 0.09666664153337479, g: 0.6444442868232727, b: 0.6038684248924255 },
            boundVariables: {}
          },
          {
            visible: true,
            opacity: 1,
            blendMode: "OVERLAY",
            type: "IMAGE",
            scaleMode: "FILL",
            imageTransform: [[1, 0, 0], [0, 1, 0]],
            scalingFactor: 0.5,
            rotation: 0,
            filters: {
              exposure: 0.17796610295772552,
              contrast: 0,
              saturation: -1,
              temperature: 0,
              tint: 0,
              highlights: 0,
              shadows: 0
            },
            originalImageHash: "4e43f0beb37bf8962bd3b95e3346809e1ad6aa07",
            assetRef: IMG_Proposal_notification_img_1_opt_png
          }
        ],
        strokeWeight: 1
      },
      [
        createFrame(
          "Header Title Row",
          {
            layoutMode: "HORIZONTAL",
            itemSpacing: 16,
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "AUTO",
            counterAxisAlignItems: "CENTER",
            layoutProps: {
              parentIsAutoLayout: true,
              layoutPositioning: "AUTO",
              width: 300,
              height: 50,
              relativeTransform: [[1, 0, 120], [0, 1, 53]],
              constraints: { horizontal: "MIN", vertical: "MIN" }
            }
          },
          [
            createFrame(
              "Header Title Content",
              {
                layoutMode: "HORIZONTAL",
                itemSpacing: 4,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                counterAxisAlignItems: "CENTER",
                layoutProps: {
                  parentIsAutoLayout: true,
                  layoutPositioning: "AUTO",
                  width: 300,
                  height: 50,
                  relativeTransform: [[1, 0, 0], [0, 1, 0]],
                  constraints: { horizontal: "MIN", vertical: "MIN" }
                }
              },
              [
                createText("Header Title", title, 40, "Regular", { r: 1, g: 1, b: 1 }, {
                  font: { family: "Open Sans", style: "Regular" },
                  lineHeight: { unit: "PIXELS", value: 50 },
                  textAlignHorizontal: "LEFT",
                  textAlignVertical: "CENTER"
                })
              ]
            )
          ]
        ),
        createFrame(
          "Header Subtitle Row",
          {
            layoutMode: "HORIZONTAL",
            itemSpacing: 16,
            primaryAxisSizingMode: "AUTO",
            counterAxisSizingMode: "AUTO",
            counterAxisAlignItems: "CENTER",
            layoutProps: {
              parentIsAutoLayout: true,
              layoutPositioning: "AUTO",
              width: 241,
              height: 20,
              relativeTransform: [[1, 0, 120], [0, 1, 111]],
              constraints: { horizontal: "MIN", vertical: "MIN" }
            }
          },
          [
            createFrame(
              "Header Subtitle Content",
              {
                layoutMode: "HORIZONTAL",
                itemSpacing: 4,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                counterAxisAlignItems: "CENTER",
                layoutProps: {
                  parentIsAutoLayout: true,
                  layoutPositioning: "AUTO",
                  width: 241,
                  height: 20,
                  relativeTransform: [[1, 0, 0], [0, 1, 0]],
                  constraints: { horizontal: "MIN", vertical: "MIN" }
                }
              },
              [
                createText("Header Subtitle", subtitle, 16, "SemiBold", { r: 1, g: 1, b: 1 }, {
                  font: { family: "Open Sans", style: "SemiBold" },
                  lineHeight: { unit: "PIXELS", value: 20 },
                  textAlignHorizontal: "LEFT",
                  textAlignVertical: "CENTER"
                })
              ]
            )
          ]
        )
      ]
    );

    const root = await this.renderDefinition(structure);
    root.name = "LibraryHeader";
    root.x = props.x ?? 0;
    root.y = props.y ?? 0;
    normalizeLibraryLayerNames(root);
    return root;
  }
}

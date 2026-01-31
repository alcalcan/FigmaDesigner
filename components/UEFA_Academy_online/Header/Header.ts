import { BaseComponent, ComponentProps, NodeDefinition } from "../../BaseComponent";
import { createFrame, createText } from "../../ComponentHelpers";

import IMG_Header_Overlay from "./assets/img_1_opt.png";

export interface HeaderProps extends ComponentProps {
    title?: string;
    subtitle?: string;
}

export class Header extends BaseComponent {
    async create(props: HeaderProps): Promise<SceneNode> {
        const title = props.title || "UEFA Resources";
        const subtitle = props.subtitle || "Second line for text description";

        const structure: NodeDefinition = createFrame("Header", {
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
            fills: [
                {
                    type: "SOLID",
                    visible: true,
                    opacity: 1,
                    color: { r: 0.097, g: 0.644, b: 0.604 }
                },
                {
                    type: "IMAGE",
                    visible: true,
                    opacity: 1,
                    blendMode: "OVERLAY",
                    scaleMode: "FILL",
                    assetRef: IMG_Header_Overlay
                }
            ],
            layoutProps: { width: 1680, height: 184 }
        }, [
            createFrame("Title Row", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 16,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                counterAxisAlignItems: "CENTER"
            }, [
                createText("Title", title, 40, "Regular", { r: 1, g: 1, b: 1 }, {
                    font: { family: "Open Sans", style: "Regular" },
                    lineHeight: { unit: "PIXELS", value: 50 }
                })
            ]),
            createFrame("Subtitle Row", {
                layoutMode: "HORIZONTAL",
                itemSpacing: 16,
                primaryAxisSizingMode: "AUTO",
                counterAxisSizingMode: "AUTO",
                counterAxisAlignItems: "CENTER"
            }, [
                createText("Subtitle", subtitle, 16, "SemiBold", { r: 1, g: 1, b: 1 }, {
                    font: { family: "Open Sans", style: "SemiBold" },
                    lineHeight: { unit: "PIXELS", value: 20 }
                })
            ])
        ]);

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

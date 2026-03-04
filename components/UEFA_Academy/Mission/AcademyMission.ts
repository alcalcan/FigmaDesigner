import { BaseComponent, ComponentProps } from "../../BaseComponent";

import IMG_Mission_img_1_png from "./assets/Mission_img_1.png";

export class AcademyMission extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        await figma.loadFontAsync({ family: "Roboto", style: "Medium" });
        await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

        const root = figma.createFrame();
        root.name = "AcademyMission";
        root.layoutMode = "NONE";
        root.fills = [];
        root.clipsContent = true;
        root.resize(1680, 292);

        const background = figma.createRectangle();
        background.name = "Background";
        background.resize(1680, 292);
        background.fills = [
            {
                type: "IMAGE",
                scaleMode: "FILL",
                imageHash: await this.loadImageHash(IMG_Mission_img_1_png)
            }
        ];
        root.appendChild(background);

        // Gradient is part of the same component bounds, not an auto-layout absolute child.
        const gradient = figma.createRectangle();
        gradient.name = "Gradient";
        gradient.resize(1680, 292);
        gradient.opacity = 0.85;
        gradient.fills = [
            {
                type: "GRADIENT_LINEAR",
                gradientStops: [
                    { position: 0, color: { r: 0, g: 0.51, b: 1, a: 0.56 } },
                    { position: 1, color: { r: 0.18, g: 0.49, b: 0.8, a: 1 } }
                ],
                gradientTransform: [
                    [0, 1, 0],
                    [-1, 0, 1]
                ]
            }
        ];
        root.appendChild(gradient);

        const content = figma.createFrame();
        content.name = "Content";
        content.layoutMode = "VERTICAL";
        content.primaryAxisSizingMode = "AUTO";
        content.counterAxisSizingMode = "FIXED";
        content.primaryAxisAlignItems = "CENTER";
        content.counterAxisAlignItems = "CENTER";
        content.itemSpacing = 24;
        content.fills = [];
        content.resize(1584, 196);
        content.x = 48;
        content.y = 48;
        root.appendChild(content);

        const heading = figma.createText();
        heading.name = "Heading";
        heading.fontName = { family: "Roboto", style: "Medium" };
        heading.characters = props.title ?? "ABOUT THE UEFA ACADEMY";
        heading.fontSize = 36;
        heading.lineHeight = { unit: "PIXELS", value: 40 };
        heading.textAlignHorizontal = "CENTER";
        heading.textAutoResize = "HEIGHT";
        heading.layoutAlign = "STRETCH";
        heading.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        content.appendChild(heading);

        const description = figma.createText();
        description.name = "Description";
        description.fontName = { family: "Roboto", style: "Regular" };
        description.characters = props.description ?? "Building on UEFA’s professional excellence, the Academy inspires the education of individuals and organisations to continuously elevate football.";
        description.fontSize = 16;
        description.lineHeight = { unit: "PIXELS", value: 24 };
        description.textAlignHorizontal = "CENTER";
        description.textAutoResize = "HEIGHT";
        description.layoutAlign = "STRETCH";
        description.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        content.appendChild(description);

        const cta = figma.createFrame();
        cta.name = "Link";
        cta.layoutMode = "HORIZONTAL";
        cta.primaryAxisSizingMode = "AUTO";
        cta.counterAxisSizingMode = "AUTO";
        cta.primaryAxisAlignItems = "CENTER";
        cta.counterAxisAlignItems = "CENTER";
        cta.paddingTop = 8;
        cta.paddingBottom = 8;
        cta.paddingLeft = 24;
        cta.paddingRight = 24;
        cta.cornerRadius = 2;
        cta.fills = [];
        cta.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        cta.strokeWeight = 2;
        content.appendChild(cta);

        const ctaText = figma.createText();
        ctaText.name = "Read more";
        ctaText.fontName = { family: "Roboto", style: "Medium" };
        ctaText.characters = props.buttonLabel ?? "READ MORE";
        ctaText.fontSize = 14;
        ctaText.lineHeight = { unit: "PIXELS", value: 20 };
        ctaText.textAutoResize = "WIDTH_AND_HEIGHT";
        ctaText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        cta.appendChild(ctaText);

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }

    private async loadImageHash(assetRef: string): Promise<string> {
        const isDataUrl = assetRef.startsWith("data:");
        const isLikelyUrl = /^(https?:)?\/\//.test(assetRef);

        if (isDataUrl) {
            const encoded = assetRef.split(",")[1] ?? "";
            return figma.createImage(figma.base64Decode(encoded)).hash;
        }

        if (!isLikelyUrl) {
            // Bundler provides raw base64 (without data URL prefix) for local image imports.
            return figma.createImage(figma.base64Decode(assetRef)).hash;
        }

        const response = await fetch(assetRef);
        const bytes = await response.arrayBuffer();
        return figma.createImage(new Uint8Array(bytes)).hash;
    }
}

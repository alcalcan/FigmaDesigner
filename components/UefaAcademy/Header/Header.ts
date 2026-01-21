import { BaseComponent } from "../../BaseComponent";
import { ComponentProps } from "../../BaseComponent";
import headerImage from "./header_bg.png";

export class Header extends BaseComponent {
    async create(props: ComponentProps): Promise<FrameNode> {
        // 1. Load Fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
        await figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });

        // 2. Main Frame "Header"
        const header = figma.createFrame();
        header.name = "Header";
        header.x = props.x;
        header.y = props.y;
        header.resize(1680, 184);
        header.layoutMode = "VERTICAL";
        header.primaryAxisSizingMode = "FIXED"; // JSON: H:FIXED / V:FIXED
        header.counterAxisSizingMode = "FIXED";
        header.primaryAxisAlignItems = "CENTER";
        header.counterAxisAlignItems = "MIN";
        header.itemSpacing = 8;
        header.paddingTop = 16;
        header.paddingRight = 120;
        header.paddingBottom = 16;
        header.paddingLeft = 120;

        // Fills
        // 1. Solid Color
        const solidFill: SolidPaint = {
            type: "SOLID",
            color: { r: 0.09666664153337479, g: 0.6444442868232727, b: 0.6038684248924255 }
        };

        // 2. Image Fill (Overlay)
        let imageFill: ImagePaint | null = null;
        if (headerImage) {
            try {
                // Decode base64 
                const imageBytes = figma.base64Decode(headerImage);
                const image = figma.createImage(imageBytes);

                imageFill = {
                    type: "IMAGE",
                    scaleMode: "FILL",
                    imageHash: image.hash,
                    opacity: 1,
                    blendMode: "OVERLAY",
                    scalingFactor: 0.5,
                    filters: {
                        exposure: 0.17796610295772552,
                        contrast: 0,
                        saturation: -1,
                        temperature: 0,
                        tint: 0,
                        highlights: 0,
                        shadows: 0
                    }
                };
            } catch (e) {
                console.error("Failed to create header image", e);
            }
        }

        header.fills = imageFill ? [solidFill, imageFill] : [solidFill];

        // Frame 1931
        const frame1931 = figma.createFrame();
        frame1931.name = "Frame 1931";
        frame1931.layoutMode = "VERTICAL";
        frame1931.primaryAxisSizingMode = "AUTO";
        frame1931.counterAxisSizingMode = "AUTO";
        frame1931.itemSpacing = 8;
        frame1931.fills = []; // Transparent

        // -- Frame 1612 (Top Text Row)
        const frame1612 = figma.createFrame();
        frame1612.name = "Frame 1612";
        frame1612.layoutMode = "HORIZONTAL";
        frame1612.primaryAxisSizingMode = "AUTO";
        frame1612.counterAxisSizingMode = "AUTO";
        frame1612.counterAxisAlignItems = "CENTER";
        frame1612.itemSpacing = 16;
        frame1612.fills = [];

        // ---- Frame 1613 (Wrapper for text 1)
        const frame1613_1 = figma.createFrame();
        frame1613_1.name = "Frame 1613";
        frame1613_1.layoutMode = "HORIZONTAL";
        frame1613_1.counterAxisAlignItems = "CENTER";
        frame1613_1.primaryAxisSizingMode = "AUTO";
        frame1613_1.counterAxisSizingMode = "AUTO";
        frame1613_1.itemSpacing = 4;
        frame1613_1.fills = [];

        // ------ Text: UEFA Resources
        const text1 = figma.createText();
        text1.characters = "UEFA Resources";
        text1.fontName = { family: "Open Sans", style: "Regular" };
        text1.fontSize = 40;
        text1.lineHeight = { value: 50, unit: "PIXELS" };
        text1.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        frame1613_1.appendChild(text1);
        frame1612.appendChild(frame1613_1);
        frame1931.appendChild(frame1612);

        // -- Frame 1613 (Bottom Text Row) - Note: JSON uses same name Frame 1613 for the wrapper row?
        // JSON: Frame 1931 -> [Frame 1612, Frame 1613]
        const frame1613_2 = figma.createFrame();
        frame1613_2.name = "Frame 1613";
        frame1613_2.layoutMode = "HORIZONTAL";
        frame1613_2.counterAxisAlignItems = "CENTER";
        frame1613_2.primaryAxisSizingMode = "AUTO";
        frame1613_2.counterAxisSizingMode = "AUTO";
        frame1613_2.itemSpacing = 16;
        frame1613_2.fills = [];

        // ---- Frame 1613 (Wrapper for text 2)
        const frame1613_3 = figma.createFrame();
        frame1613_3.name = "Frame 1613";
        frame1613_3.layoutMode = "HORIZONTAL";
        frame1613_3.counterAxisAlignItems = "CENTER";
        frame1613_3.primaryAxisSizingMode = "AUTO";
        frame1613_3.counterAxisSizingMode = "AUTO";
        frame1613_3.itemSpacing = 4;
        frame1613_3.fills = [];

        // ------ Text: Second line...
        const text2 = figma.createText();
        text2.characters = "Second line for text description";
        text2.fontName = { family: "Open Sans", style: "SemiBold" };
        text2.fontSize = 16;
        text2.lineHeight = { value: 20, unit: "PIXELS" };
        text2.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
        frame1613_3.appendChild(text2);
        frame1613_2.appendChild(frame1613_3);
        frame1931.appendChild(frame1613_2);

        header.appendChild(frame1931);

        return header;
    }
}

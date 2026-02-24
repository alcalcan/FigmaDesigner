import { ComponentProps, BaseComponent } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { Card } from "../../components/Alex_CookBook/Card/Card";
import { Colors } from "../../slides/theme";

export class CardsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Cards Demo", 1200);

        await this.addHeader(
            root,
            "Card Component Variants",
            "Showcasing versatile card structures, padding variations, and layout modes."
        );

        // Helper to create text nodes
        const createText = async (text: string, size: number, weight: "Regular" | "Semi Bold" | "Bold" = "Regular", color: RGB = Colors.TEXT_MAIN, fillWidth: boolean = true) => {
            const node = figma.createText();
            node.characters = text;
            node.fontSize = size;
            node.fills = [{ type: "SOLID", color }];
            await this.setFont(node, { family: "Inter", style: weight });
            if (fillWidth) {
                node.layoutAlign = "STRETCH";
                node.textAutoResize = "HEIGHT";
            }
            return node;
        };

        const createPlaceholderImage = async (width: number, height: number, layoutAlign: "INHERIT" | "STRETCH" = "STRETCH", name: string = "Image Placeholder") => {
            const rect = figma.createRectangle();
            rect.name = name;
            rect.resize(width, height);
            rect.fills = [{ type: "SOLID", color: { r: 0.8, g: 0.85, b: 0.9 } }];
            rect.layoutAlign = layoutAlign;
            return rect;
        };

        // --- SECTION 1: Standard Layouts ---
        await this.addSection(root, "Standard Layouts", "Vertical cards with different content block arrangements.", async (container) => {
            const card = new Card();
            const row = this.createRow(container);

            // Card 1: Standard layout (all-in-one padding)
            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 320,
                    paddingMode: "all-in-one",
                    variant: "elevated",
                    imageNode: await createPlaceholderImage(320, 180, "STRETCH", "Image Placeholder"),
                    headerNode: await createText("Standard Layout", 20, "Bold"),
                    bodyNode: await createText("Image is full width at the top. Content wrapper underneath has consistent padding.", 14, "Regular", Colors.TEXT_SECONDARY)
                }),
                "1. Standard Layout"
            ));

            // Card 2: Outer-padding layout (all padding)
            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 320,
                    paddingMode: "all",
                    variant: "outlined",
                    gap: 20,
                    imageNode: await createPlaceholderImage(272, 180, "STRETCH", "Image Placeholder"),
                    headerNode: await createText("Padded Card Content", 20, "Bold"),
                    bodyNode: await createText("Root card has padding. The image inside is rounded automatically.", 14, "Regular", Colors.TEXT_SECONDARY)
                }),
                "2. Padded Layout"
            ));

            // Card 3: Overlay layout (Image + Overlaid content at the bottom)
            const overlayContainer = figma.createFrame();
            overlayContainer.name = "Overlay Container";
            overlayContainer.fills = [];
            overlayContainer.layoutMode = "VERTICAL";
            overlayContainer.primaryAxisSizingMode = "AUTO"; // Height: Hug
            overlayContainer.counterAxisSizingMode = "FIXED"; // Width: Fixed (will be stretched in Card.ts)
            overlayContainer.paddingTop = 24; overlayContainer.paddingBottom = 24; overlayContainer.paddingLeft = 24; overlayContainer.paddingRight = 24;

            // Text inside overlay
            overlayContainer.appendChild(await createText("Overlaid Card", 20, "Bold", Colors.WHITE, true));
            overlayContainer.appendChild(await createText("Text is absolutely positioned at the bottom.", 14, "Regular", { r: 0.9, g: 0.9, b: 0.9 }, true));

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 320,
                    height: 320,
                    paddingMode: "none",
                    variant: "elevated",
                    imageNode: await createPlaceholderImage(320, 320, "STRETCH", "Image Placeholder"),
                    overlayNode: overlayContainer
                }),
                "3. Overlay Layout"
            ));

            container.appendChild(row);
        });

        // --- SECTION 2: Horizontal Layouts ---
        await this.addSection(root, "Horizontal Layouts", "Cards with images on the left.", async (container) => {
            const card = new Card();
            const row = this.createRow(container);

            const horizontalCard = await card.create({
                fillWidth: true,
                imagePosition: "left",
                paddingMode: "all-in-one",
                variant: "elevated",
                imageNode: await createPlaceholderImage(240, 200, "INHERIT", "Image Placeholder"),
                headerNode: await createText("Horizontal Highlight", 20, "Bold"),
                bodyNode: await createText("In horizontal mode, the content area fills the available space.", 14, "Regular", Colors.TEXT_SECONDARY)
            });

            const wrapped = await this.wrapWithCaption(horizontalCard, "4. Horizontal Highlight", "Wrapper", true);
            row.appendChild(wrapped);

            container.appendChild(row);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

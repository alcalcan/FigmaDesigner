import { ComponentProps, BaseComponent } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { Card } from "../../components/Alex_CookBook/Card/Card";
import { button } from "../../components/Alex_CookBook/button/button";
import { badge } from "../../components/Alex_CookBook/badge/badge";
import { Colors } from "../../slides/theme";
import { Lucide_clock } from "../../components/lucide_icons/Lucide_clock/Lucide_clock";
import { Lucide_user } from "../../components/lucide_icons/Lucide_user/Lucide_user";
import { Lucide_star } from "../../components/lucide_icons/Lucide_star/Lucide_star";
import { Lucide_activity } from "../../components/lucide_icons/Lucide_activity/Lucide_activity";
import { Lucide_image } from "../../components/lucide_icons/Lucide_image/Lucide_image";
import { Lucide_home } from "../../components/lucide_icons/Lucide_home/Lucide_home";
import { Lucide_heart } from "../../components/lucide_icons/Lucide_heart/Lucide_heart";

export class CardsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Cards Demo", 1300);

        await this.addHeader(
            root,
            "Card Component Variants",
            "Showcasing versatile card structures, padding variations, and layout modes."
        );

        // Helper to create text nodes
        const createText = async (text: string, size: number, weight: "Regular" | "Semi Bold" | "Bold" = "Regular", color: RGB = { r: 0, g: 0, b: 0 }, fillWidth: boolean = true) => {
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

        const createPlaceholderImage = async (width: number, height: number, layoutAlign: "INHERIT" | "STRETCH" = "STRETCH", name: string = "Image Placeholder", bgHex: string = "#CCD8E5", emoji: string = "") => {
            const rect = figma.createFrame();
            rect.name = name;
            rect.resize(width, height);

            // Convert Hex to RGB
            const r = parseInt(bgHex.slice(1, 3), 16) / 255;
            const g = parseInt(bgHex.slice(3, 5), 16) / 255;
            const b = parseInt(bgHex.slice(5, 7), 16) / 255;
            rect.fills = [{ type: "SOLID", color: { r, g, b } }];

            rect.layoutAlign = layoutAlign;
            rect.layoutMode = "VERTICAL";
            rect.primaryAxisAlignItems = "CENTER";
            rect.counterAxisAlignItems = "CENTER";

            if (emoji) {
                const text = figma.createText();
                text.characters = emoji;
                text.fontSize = Math.min(width, height) * 0.4;
                await figma.loadFontAsync({ family: "Inter", style: "Regular" });
                text.fontName = { family: "Inter", style: "Regular" };
                rect.appendChild(text);
            }

            return rect;
        };

        const createHorizontalRow = (spacing: number = 8, justifyContent: "MIN" | "MAX" | "CENTER" | "SPACE_BETWEEN" = "SPACE_BETWEEN") => {
            const row = figma.createFrame();
            row.name = "Horizontal Row";
            row.layoutMode = "HORIZONTAL";
            row.itemSpacing = spacing;
            row.primaryAxisAlignItems = justifyContent;
            row.counterAxisAlignItems = "CENTER";
            row.primaryAxisSizingMode = "AUTO"; // Or FIXED if stretched
            row.counterAxisSizingMode = "AUTO";
            row.fills = [];
            row.layoutAlign = "STRETCH"; // Fill width of parent container
            return row;
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
                    gap: 0, // No gap between image and content
                    contentGap: 16, // Spacing within content restored to 16px
                    imageNode: await createPlaceholderImage(320, 180, "STRETCH", "Image Placeholder"),
                    headerNode: await createText("Standard Layout", 20, "Bold"),
                    bodyNode: await createText("Image is full width at the top. Content wrapper underneath has consistent padding.", 14, "Regular")
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
                    bodyNode: await createText("Root card has padding. The image inside is rounded automatically.", 14, "Regular")
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
            overlayContainer.appendChild(await createText("Overlaid Card", 20, "Bold", { r: 0, g: 0, b: 0 }, true));
            overlayContainer.appendChild(await createText("Text is absolutely positioned at the bottom.", 14, "Regular", { r: 0, g: 0, b: 0 }, true));

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
                gap: 0,
                contentGap: 16,
                imageNode: await createPlaceholderImage(240, 200, "INHERIT", "Image Placeholder"),
                headerNode: await createText("Horizontal Highlight", 20, "Bold"),
                bodyNode: await createText("In horizontal mode, the content area fills the available space.", 14, "Regular")
            });

            const wrapped = await this.wrapWithCaption(horizontalCard, "4. Horizontal Highlight", "Wrapper", true);
            row.appendChild(wrapped);

            container.appendChild(row);
        });

        // --- SECTION 3: Complex Content Cards ---
        await this.addSection(root, "Complex Content Cards", "Combining the Card component with buttons, badges, and complex layouts.", async (container) => {
            const card = new Card();
            const btn = new button();
            const bdg = new badge();
            const row = this.createRow(container, 32); // Increased spacing between complex cards

            // Card 5: Recipe Card (Redesigned)
            const recipeHeaderStack = figma.createFrame();
            recipeHeaderStack.name = "Recipe Header Stack";
            recipeHeaderStack.layoutMode = "VERTICAL";
            recipeHeaderStack.itemSpacing = 8;
            recipeHeaderStack.fills = [];
            recipeHeaderStack.layoutAlign = "STRETCH";
            recipeHeaderStack.counterAxisSizingMode = "AUTO"; // Height: Hug

            recipeHeaderStack.appendChild(await bdg.create({ variant: "success", type: "solid", label: "VEGETARIAN" }));
            recipeHeaderStack.appendChild(await createText("Avocado Toast", 22, "Bold", { r: 0, g: 0, b: 0 }));

            const recipeMeta = createHorizontalRow(6, "MIN");
            const clockIcon = await new Lucide_clock().create({ width: 14, color: { r: 0.4, g: 0.4, b: 0.4 } });
            recipeMeta.appendChild(clockIcon);
            recipeMeta.appendChild(await createText("15 min", 12, "Regular", { r: 0.4, g: 0.4, b: 0.4 }, false));
            recipeMeta.appendChild(await createText("•", 12, "Regular", { r: 0.8, g: 0.8, b: 0.8 }, false));

            const chefIcon = await new Lucide_user().create({ width: 14, color: { r: 0.4, g: 0.4, b: 0.4 } });
            recipeMeta.appendChild(chefIcon);
            recipeMeta.appendChild(await createText("Chef Alex", 12, "Regular", { r: 0.4, g: 0.4, b: 0.4 }, false));
            recipeMeta.appendChild(await createText("•", 12, "Regular", { r: 0.8, g: 0.8, b: 0.8 }, false));

            const starIcon = await new Lucide_star().create({ width: 14, color: { r: 0.9, g: 0.6, b: 0 }, strokeWeight: 2 });
            recipeMeta.appendChild(starIcon);
            recipeMeta.appendChild(await createText("4.9", 12, "Regular", { r: 0.4, g: 0.4, b: 0.4 }, false));

            const recipeBody = figma.createFrame();
            recipeBody.layoutMode = "VERTICAL";
            recipeBody.itemSpacing = 8;
            recipeBody.fills = [];
            recipeBody.layoutAlign = "STRETCH";
            recipeBody.appendChild(recipeMeta);
            recipeBody.appendChild(await createText("A simple, healthy, and delicious breakfast option packed with essential healthy fats.", 14, "Regular"));

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 380,
                    paddingMode: "all-in-one",
                    variant: "elevated",
                    gap: 0,
                    contentGap: 16,
                    imageNode: await createPlaceholderImage(380, 320, "STRETCH", "Recipe Image", "#D1E7DD", "🥑"),
                    overlayNode: undefined, // Badge moved to header
                    headerNode: recipeHeaderStack,
                    bodyNode: recipeBody,
                    footerNode: await btn.create({ label: "View Recipe", variant: "primary", width: "fill" })
                }),
                "5. Recipe Card"
            ));

            // Card 6: Shopping Card (Redesigned)
            const saleBadgeOverlay = figma.createFrame();
            saleBadgeOverlay.name = "Sale Overlay";
            saleBadgeOverlay.fills = [];
            // layoutPositioning is handled by Card.ts
            saleBadgeOverlay.x = 16;
            saleBadgeOverlay.y = 16;
            saleBadgeOverlay.appendChild(await bdg.create({ variant: "error", type: "solid", label: "-20% OFF" }));

            const shopBody = figma.createFrame();
            shopBody.name = "Shop Body";
            shopBody.layoutMode = "VERTICAL";
            shopBody.itemSpacing = 8;
            shopBody.fills = [];
            shopBody.layoutAlign = "STRETCH";
            const priceWrapper = createHorizontalRow(8, "MIN");
            priceWrapper.appendChild(await createText("$129.99", 20, "Bold", { r: 0.8, g: 0.2, b: 0.2 }, false)); // Red discount price

            const originalPrice = await createText("$149.99", 14, "Regular", { r: 0.6, g: 0.6, b: 0.6 }, false);
            originalPrice.textDecoration = "STRIKETHROUGH";
            priceWrapper.appendChild(originalPrice);

            shopBody.appendChild(priceWrapper);

            const ratingWrapper = createHorizontalRow(2, "MIN");
            for (let i = 0; i < 4; i++) {
                ratingWrapper.appendChild(await new Lucide_star().create({ width: 16, color: { r: 0.9, g: 0.6, b: 0 }, strokeWeight: 2 }));
            }
            ratingWrapper.appendChild(await new Lucide_star().create({ width: 16, color: { r: 0.7, g: 0.7, b: 0.7 }, strokeWeight: 1.5 })); // Last star outlined/grey
            ratingWrapper.appendChild(await createText("(128)", 14, "Regular", { r: 0.4, g: 0.4, b: 0.4 }, false));

            shopBody.appendChild(ratingWrapper);

            const shopFooter = createHorizontalRow(12, "SPACE_BETWEEN");
            shopFooter.layoutAlign = "STRETCH";
            shopFooter.primaryAxisSizingMode = "FIXED"; // Fill parent width
            shopFooter.appendChild(await btn.create({ label: "Add to Cart", variant: "primary", width: "fill" })); // Prominent CTA

            const heartBtn = await btn.create({
                variant: "ghost",
                frontIcon: Lucide_heart,
                padding: 4
            });
            shopFooter.appendChild(heartBtn);

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 360,
                    paddingMode: "all-in-one",
                    variant: "outlined",
                    gap: 0,
                    contentGap: 16,
                    imageNode: await createPlaceholderImage(360, 360, "STRETCH", "Product Image", "#E2E3E5", "🎧"),
                    overlayNode: saleBadgeOverlay,
                    overlayPosition: "custom", // Prevent Card.ts from forcing bottom-stretch
                    headerNode: await createText("Wireless Noise-Canceling Headphones", 18, "Semi Bold"),
                    bodyNode: shopBody,
                    footerNode: shopFooter
                }),
                "6. Product/Shopping Card"
            ));

            container.appendChild(row);

            // --- Card 7: Event Ticket Card (Own Row) ---
            const eventRow = this.createRow(container, 32);

            // Ticket Stub Graphic (Replaces Image)
            const ticketStub = figma.createFrame();
            ticketStub.name = "Ticket Stub Graphic";
            ticketStub.layoutMode = "VERTICAL";
            ticketStub.primaryAxisAlignItems = "CENTER";
            ticketStub.counterAxisAlignItems = "CENTER";
            ticketStub.itemSpacing = 16;
            ticketStub.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.15 } }]; // Dark navy/black stub
            ticketStub.resize(160, 200); // Height will be stretched by Card.ts
            ticketStub.layoutAlign = "STRETCH";

            // ... (rest of ticketStub children)
            ticketStub.appendChild(await createText("OCT", 24, "Bold", { r: 1, g: 0.4, b: 0.4 }, false)); // Red month
            ticketStub.appendChild(await createText("24", 48, "Bold", { r: 1, g: 1, b: 1 }, false)); // White large day

            // Tiny barcode graphic (Moved to stub)
            const barcode = figma.createFrame();
            barcode.resize(80, 24);
            barcode.fills = [];
            barcode.layoutMode = "HORIZONTAL";
            barcode.itemSpacing = 2;
            for (let i = 0; i < 16; i++) {
                const bar = figma.createRectangle();
                bar.resize(Math.random() > 0.5 ? 2 : 4, 24);
                bar.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // white bars for dark stub
                barcode.appendChild(bar);
            }
            ticketStub.appendChild(barcode);

            // Perforated line effect (subtle dashed border on the right)
            ticketStub.strokes = [{ type: "SOLID", color: { r: 0.3, g: 0.3, b: 0.35 } }];
            ticketStub.strokeWeight = 2;
            ticketStub.dashPattern = [4, 4];
            ticketStub.strokeLeftWeight = 0; ticketStub.strokeTopWeight = 0; ticketStub.strokeBottomWeight = 0;

            // Event Details (Right Side)
            const eventHeader = createHorizontalRow(8, "MIN");
            eventHeader.appendChild(await bdg.create({ variant: "info", type: "solid", label: "UPCOMING" }));
            eventHeader.appendChild(await createText("• Valid for 1 Person", 12, "Regular", { r: 0.5, g: 0.5, b: 0.5 }, false));

            const eventInfo = figma.createFrame();
            eventInfo.layoutMode = "VERTICAL";
            eventInfo.itemSpacing = 16; // Increased spacing back to 16
            eventInfo.fills = [];
            eventInfo.layoutAlign = "STRETCH";
            eventInfo.appendChild(await createText("Design Systems Conference 2024", 20, "Bold", { r: 0, g: 0, b: 0 }));
            const locationIcon = await new Lucide_home().create({ width: 14, color: { r: 0.3, g: 0.3, b: 0.3 } });
            const locRow = createHorizontalRow(6, "MIN");
            locRow.appendChild(locationIcon);
            locRow.appendChild(await createText("Moscone Center, San Francisco, CA", 14, "Regular", { r: 0.3, g: 0.3, b: 0.3 }));
            eventInfo.appendChild(locRow);

            const timeIcon = await new Lucide_clock().create({ width: 14, color: { r: 0.3, g: 0.3, b: 0.3 } });
            const timeRow = createHorizontalRow(6, "MIN");
            timeRow.appendChild(timeIcon);
            timeRow.appendChild(await createText("09:00 AM - 05:00 PM PST", 14, "Regular", { r: 0.3, g: 0.3, b: 0.3 }));
            eventInfo.appendChild(timeRow);

            // Footer with Button
            const eventFooter = createHorizontalRow(16, "MIN");
            eventFooter.appendChild(await btn.create({ label: "Buy Tickets", variant: "primary", width: 140 }));

            eventRow.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 600,
                    imagePosition: "left",
                    paddingMode: "all-in-one", // Padding around the whole content area
                    variant: "elevated",
                    gap: 0, // No gap (0px) between stub and content
                    contentGap: 16, // Internal content spacing restored to 16px
                    imageNode: ticketStub,
                    headerNode: eventHeader,
                    bodyNode: eventInfo,
                    footerNode: eventFooter
                }),
                "7. Event Ticket (Horizontal)",
                "Wrapper",
                false
            ));

            container.appendChild(eventRow);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

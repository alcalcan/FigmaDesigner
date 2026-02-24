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
import { Lucide_message_circle } from "../../components/lucide_icons/Lucide_message_circle/Lucide_message_circle";
import { Lucide_share_2 } from "../../components/lucide_icons/Lucide_share_2/Lucide_share_2";
import { Lucide_save } from "../../components/lucide_icons/Lucide_save/Lucide_save";
import { Lucide_more_horizontal } from "../../components/lucide_icons/Lucide_more_horizontal/Lucide_more_horizontal";

export class CardsDemo extends BaseDemoPage {
    async create(props: ComponentProps): Promise<SceneNode> {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        const root = await this.initPage("Cards Demo", 1920);

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

            // Card 7: Casual Shirt Card (No Background, Split Price)
            const shirtHeader = createHorizontalRow(0, "SPACE_BETWEEN");
            shirtHeader.layoutAlign = "STRETCH";
            shirtHeader.primaryAxisSizingMode = "FIXED";
            shirtHeader.appendChild(await createText("Casual Shirt", 20, "Semi Bold", { r: 0.2, g: 0.25, b: 0.3 }, false));
            shirtHeader.appendChild(await createText("$29", 28, "Bold", { r: 0.2, g: 0.25, b: 0.3 }, false));

            const shirtMetaRow = createHorizontalRow(0, "SPACE_BETWEEN");
            shirtMetaRow.layoutAlign = "STRETCH";
            shirtMetaRow.primaryAxisSizingMode = "FIXED";
            shirtMetaRow.appendChild(await createText("7 Colors", 16, "Regular", { r: 0.6, g: 0.6, b: 0.65 }, false));
            const oldPriceNode = await createText("$35", 16, "Regular", { r: 0.6, g: 0.6, b: 0.65 }, false);
            oldPriceNode.textDecoration = "STRIKETHROUGH";
            shirtMetaRow.appendChild(oldPriceNode);

            const shirtContent = figma.createFrame();
            shirtContent.name = "Shirt Content";
            shirtContent.layoutMode = "VERTICAL";
            shirtContent.itemSpacing = 8;
            shirtContent.fills = [];
            shirtContent.layoutAlign = "STRETCH";
            shirtContent.counterAxisSizingMode = "FIXED";
            shirtContent.appendChild(shirtHeader);
            shirtContent.appendChild(shirtMetaRow);

            const shirtCardWidth = 320;
            const shirtImageHeight = 320;
            const shirtImage = await createPlaceholderImage(shirtCardWidth, shirtImageHeight, "STRETCH", "Casual Shirt", "#66707D");
            shirtImage.cornerRadius = 24;

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: shirtCardWidth,
                    variant: "none",
                    paddingMode: "all-in-one",
                    padding: 16, // Use 16px padding as per image
                    gap: 0, // No structural gap on card
                    imageNode: shirtImage,
                    chipCell: { label: "SALE", inset: 12 },
                    bodyNode: shirtContent
                }),
                "7. Casual Shirt (No Fill)",
                "Transparent",
                false
            ));

            // Card 8: Casual Shirt Card (Centered Text)
            const shirtCenteredImage = await createPlaceholderImage(shirtCardWidth, shirtImageHeight, "STRETCH", "Casual Shirt Centered", "#66707D");
            shirtCenteredImage.cornerRadius = 24;

            const shirtCenteredContent = figma.createFrame();
            shirtCenteredContent.name = "Shirt Centered Content";
            shirtCenteredContent.layoutMode = "VERTICAL";
            shirtCenteredContent.itemSpacing = 10;
            shirtCenteredContent.fills = [];
            shirtCenteredContent.layoutAlign = "STRETCH";
            shirtCenteredContent.counterAxisSizingMode = "FIXED";
            shirtCenteredContent.counterAxisAlignItems = "CENTER";

            shirtCenteredContent.appendChild(await createText("Casual Shirt", 20, "Semi Bold", { r: 0.2, g: 0.25, b: 0.3 }, false));
            shirtCenteredContent.appendChild(await createText("$29", 28, "Bold", { r: 0.2, g: 0.25, b: 0.3 }, false));
            const centeredMeta = createHorizontalRow(12, "CENTER");
            centeredMeta.primaryAxisSizingMode = "AUTO";
            centeredMeta.layoutAlign = "INHERIT";
            centeredMeta.counterAxisAlignItems = "CENTER";
            centeredMeta.appendChild(await createText("7 Colors", 16, "Regular", { r: 0.6, g: 0.6, b: 0.65 }, false));
            const centeredOldPrice = await createText("$35", 16, "Regular", { r: 0.6, g: 0.6, b: 0.65 }, false);
            centeredOldPrice.textDecoration = "STRIKETHROUGH";
            centeredMeta.appendChild(centeredOldPrice);
            shirtCenteredContent.appendChild(centeredMeta);

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: shirtCardWidth,
                    variant: "none",
                    paddingMode: "all-in-one",
                    padding: 16,
                    gap: 0,
                    imageNode: shirtCenteredImage,
                    chipCell: { label: "SALE", inset: 12 },
                    bodyNode: shirtCenteredContent
                }),
                "8. Casual Shirt (Centered Text)",
                "Transparent",
                false
            ));

            // Card 9: Social/Game Card (Avatar + Rating Chip)
            const socialContent = figma.createFrame();
            socialContent.name = "Social Game Content";
            socialContent.layoutMode = "VERTICAL";
            socialContent.itemSpacing = 16;
            socialContent.fills = [];
            socialContent.layoutAlign = "STRETCH";
            socialContent.counterAxisSizingMode = "FIXED";

            const authorRow = createHorizontalRow(12, "MIN");
            authorRow.layoutAlign = "STRETCH";
            authorRow.primaryAxisSizingMode = "FIXED";

            const avatar = figma.createEllipse();
            avatar.name = "User Avatar";
            avatar.resize(32, 32);
            avatar.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.75, b: 0.20 } }];
            avatar.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.7 }];
            avatar.strokeWeight = 1;
            authorRow.appendChild(avatar);
            authorRow.appendChild(await createText("Ralph Edwards", 16, "Semi Bold", { r: 0.12, g: 0.12, b: 0.13 }, false));
            socialContent.appendChild(authorRow);

            const gameImage = figma.createFrame();
            gameImage.name = "Game Image";
            gameImage.resize(288, 300);
            gameImage.layoutAlign = "STRETCH";
            gameImage.layoutMode = "VERTICAL";
            gameImage.primaryAxisSizingMode = "FIXED";
            gameImage.counterAxisSizingMode = "FIXED";
            gameImage.primaryAxisAlignItems = "CENTER";
            gameImage.counterAxisAlignItems = "CENTER";
            gameImage.cornerRadius = 36;
            gameImage.fills = [{ type: "SOLID", color: { r: 0.40, g: 0.44, b: 0.49 } }];

            const ratingChip = figma.createFrame();
            ratingChip.name = "Chip Container";
            ratingChip.layoutMode = "HORIZONTAL";
            ratingChip.itemSpacing = 6;
            ratingChip.primaryAxisSizingMode = "AUTO";
            ratingChip.counterAxisSizingMode = "AUTO";
            ratingChip.primaryAxisAlignItems = "CENTER";
            ratingChip.counterAxisAlignItems = "CENTER";
            ratingChip.paddingLeft = 10;
            ratingChip.paddingRight = 10;
            ratingChip.paddingTop = 5;
            ratingChip.paddingBottom = 5;
            ratingChip.cornerRadius = 999;
            ratingChip.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            ratingChip.effects = [{
                type: "DROP_SHADOW",
                color: { r: 0, g: 0, b: 0, a: 0.06 },
                offset: { x: 0, y: 2 },
                radius: 6,
                spread: 0,
                visible: true,
                blendMode: "NORMAL"
            }];
            ratingChip.appendChild(await new Lucide_star().create({ width: 11, color: { r: 0.43, g: 0.26, b: 0.90 }, strokeWeight: 2 }));
            ratingChip.appendChild(await createText("3.7", 11, "Bold", { r: 0.43, g: 0.26, b: 0.90 }, false));
            gameImage.appendChild(ratingChip);
            ratingChip.layoutPositioning = "ABSOLUTE";
            ratingChip.constraints = { horizontal: "MAX", vertical: "MIN" };
            ratingChip.x = gameImage.width - ratingChip.width - 16;
            ratingChip.y = 14;
            socialContent.appendChild(gameImage);

            socialContent.appendChild(await createText("Candy Crush Friends Saga", 19, "Semi Bold", { r: 0.08, g: 0.08, b: 0.09 }, true));

            const actionsRow = createHorizontalRow(0, "SPACE_BETWEEN");
            actionsRow.layoutAlign = "STRETCH";
            actionsRow.primaryAxisSizingMode = "FIXED";

            const leftActions = createHorizontalRow(14, "MIN");
            leftActions.appendChild(await new Lucide_heart().create({ width: 18, color: { r: 0.55, g: 0.55, b: 0.57 }, strokeWeight: 2 }));
            leftActions.appendChild(await new Lucide_message_circle().create({ width: 18, color: { r: 0.55, g: 0.55, b: 0.57 }, strokeWeight: 2 }));
            leftActions.appendChild(await new Lucide_share_2().create({ width: 18, color: { r: 0.55, g: 0.55, b: 0.57 }, strokeWeight: 2 }));

            actionsRow.appendChild(leftActions);
            actionsRow.appendChild(await new Lucide_save().create({ width: 18, color: { r: 0.55, g: 0.55, b: 0.57 }, strokeWeight: 2 }));
            socialContent.appendChild(actionsRow);

            const socialCard = await card.create({
                width: 320,
                variant: "none",
                cornerRadius: 24,
                paddingMode: "all-in-one",
                padding: 16,
                gap: 0,
                bodyNode: socialContent
            });
            socialCard.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            socialCard.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 }];
            socialCard.strokeWeight = 1;
            socialCard.effects = [
                { type: "DROP_SHADOW", color: { r: 0.05, g: 0.1, b: 0.2, a: 0.06 }, offset: { x: 0, y: 16 }, radius: 32, spread: 0, visible: true, blendMode: "NORMAL" },
                { type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.02 }, offset: { x: 0, y: 4 }, radius: 4, spread: 0, visible: true, blendMode: "NORMAL" }
            ];

            row.appendChild(await this.wrapWithCaption(
                socialCard,
                "9. Social/Game Profile Card",
                "Padded Layout",
                false
            ));

            // Card 10 + 11: Absolute Overlay Actions Card (With and Without Gradient)
            // IMPORTANT: Keep image and card corner radius in sync for overlay variants.
            // If you adjust one, adjust the other to avoid visible corner mismatches.
            const overlayCardCornerRadius = 24;

            const createOverlayImage = async () => {
                const image = await createPlaceholderImage(320, 420, "STRETCH", "Overlay Actions Image", "#66707D");
                image.cornerRadius = overlayCardCornerRadius;
                return image;
            };

            const createOverlayContent = async (withGradient: boolean, withTopRightHeartFab: boolean = false) => {
                const overlayActions = figma.createFrame();
                overlayActions.name = withGradient ? "Absolute Overlay Content (Gradient)" : "Absolute Overlay Content (Flat)";
                overlayActions.layoutMode = "NONE";
                overlayActions.fills = [];
                overlayActions.resize(320, 420);
                overlayActions.clipsContent = false;

                if (withGradient) {
                    const overlayScrim = figma.createRectangle();
                    overlayScrim.name = "Bottom Scrim";
                    overlayScrim.resize(320, 170);
                    overlayScrim.y = 250;
                    overlayScrim.fills = [{
                        type: "GRADIENT_LINEAR",
                        gradientStops: [
                            { position: 0, color: { r: 0.05, g: 0.08, b: 0.12, a: 0.45 } },
                            { position: 1, color: { r: 0, g: 0, b: 0, a: 0 } }
                        ],
                        gradientTransform: [[1, 0, 0], [0, 1, 0]]
                    }];
                    overlayActions.appendChild(overlayScrim);
                }

                const overlayTag = figma.createFrame();
                overlayTag.name = "Overlay Tag";
                overlayTag.layoutMode = "HORIZONTAL";
                overlayTag.primaryAxisSizingMode = "AUTO";
                overlayTag.counterAxisSizingMode = "AUTO";
                overlayTag.primaryAxisAlignItems = "CENTER";
                overlayTag.counterAxisAlignItems = "CENTER";
                overlayTag.paddingLeft = 10;
                overlayTag.paddingRight = 10;
                overlayTag.paddingTop = 6;
                overlayTag.paddingBottom = 6;
                overlayTag.cornerRadius = 999;
                overlayTag.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.14 }];
                overlayTag.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.30 }];
                overlayTag.appendChild(await createText("FEATURED", 11, "Bold", { r: 1, g: 1, b: 1 }, false));
                overlayTag.x = 16;
                overlayTag.y = 16;
                overlayActions.appendChild(overlayTag);

                const overlayTitle = await createText("Arctic Headphones", 22, "Bold", { r: 1, g: 1, b: 1 }, false);
                overlayTitle.textAutoResize = "WIDTH_AND_HEIGHT";
                overlayTitle.x = 16;
                overlayTitle.y = 300;
                overlayActions.appendChild(overlayTitle);

                const overlayMeta = await createText("$29 · 7 colors", 16, "Regular", { r: 0.92, g: 0.94, b: 0.98 }, false);
                overlayMeta.textAutoResize = "WIDTH_AND_HEIGHT";
                overlayMeta.x = 16;
                overlayMeta.y = 344;
                overlayActions.appendChild(overlayMeta);

                const overlayActionBar = figma.createFrame();
                overlayActionBar.name = "Overlay Action Bar";
                overlayActionBar.layoutMode = "HORIZONTAL";
                overlayActionBar.itemSpacing = 16;
                overlayActionBar.primaryAxisSizingMode = "AUTO";
                overlayActionBar.counterAxisSizingMode = "AUTO";
                overlayActionBar.fills = [{ type: "SOLID", color: { r: 0.10, g: 0.12, b: 0.18 }, opacity: 0.35 }];
                overlayActionBar.cornerRadius = 999;
                overlayActionBar.paddingLeft = 12;
                overlayActionBar.paddingRight = 12;
                overlayActionBar.paddingTop = 8;
                overlayActionBar.paddingBottom = 8;
                overlayActionBar.appendChild(await new Lucide_heart().create({ width: 16, color: { r: 1, g: 1, b: 1 }, strokeWeight: 2 }));
                overlayActionBar.appendChild(await new Lucide_message_circle().create({ width: 16, color: { r: 1, g: 1, b: 1 }, strokeWeight: 2 }));
                overlayActionBar.appendChild(await new Lucide_share_2().create({ width: 16, color: { r: 1, g: 1, b: 1 }, strokeWeight: 2 }));
                overlayActionBar.appendChild(await new Lucide_save().create({ width: 16, color: { r: 1, g: 1, b: 1 }, strokeWeight: 2 }));
                overlayActionBar.x = 16;
                overlayActionBar.y = 374;
                overlayActions.appendChild(overlayActionBar);

                if (withTopRightHeartFab) {
                    const overlayFab = await btn.create({
                        variant: "fab",
                        size: "small",
                        frontIcon: Lucide_heart,
                        baseColor: { r: 1, g: 1, b: 1 },
                        textColor: { r: 0.12, g: 0.12, b: 0.12 },
                        withShadow: true
                    }) as FrameNode;
                    overlayFab.x = 320 - overlayFab.width - 16;
                    overlayFab.y = 16;
                    overlayActions.appendChild(overlayFab);
                }

                return overlayActions;
            };

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 320,
                    height: 420,
                    variant: "elevated",
                    cornerRadius: overlayCardCornerRadius,
                    paddingMode: "none",
                    gap: 0,
                    imageNode: await createOverlayImage(),
                    overlayNode: await createOverlayContent(true),
                    overlay: {
                        enabled: true,
                        horizontal: "left",
                        vertical: "top",
                        insetX: 0,
                        insetY: 0
                    }
                }),
                "10. Absolute Overlay Actions",
                "Overlay",
                false
            ));

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 320,
                    height: 420,
                    variant: "elevated",
                    cornerRadius: overlayCardCornerRadius,
                    paddingMode: "none",
                    gap: 0,
                    imageNode: await createOverlayImage(),
                    overlayNode: await createOverlayContent(false, true),
                    overlay: {
                        enabled: true,
                        horizontal: "left",
                        vertical: "top",
                        insetX: 0,
                        insetY: 0
                    }
                }),
                "11. Absolute Overlay Actions (No Gradient)",
                "Overlay",
                false
            ));

            container.appendChild(row);

            // --- Card 12: Event Ticket Card (Own Row) ---
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
                "12. Event Ticket (Horizontal)",
                "Wrapper",
                false
            ));

            container.appendChild(eventRow);

            // --- Cards 13-16: Additional Real-World Patterns ---
            const modernPatternsRow = this.createRow(container, 32);

            // Card 13: Primary Action Media Card
            const card13Body = figma.createFrame();
            card13Body.name = "Card 13 Body";
            card13Body.layoutMode = "VERTICAL";
            card13Body.itemSpacing = 8;
            card13Body.fills = [];
            card13Body.layoutAlign = "STRETCH";
            card13Body.appendChild(await createText("Headphone Drop X9", 20, "Bold", { r: 0.1, g: 0.12, b: 0.18 }));
            card13Body.appendChild(await createText("Limited launch with adaptive noise canceling and 40h battery life.", 14, "Regular", { r: 0.32, g: 0.35, b: 0.42 }));

            const card13Actions = createHorizontalRow(8, "MIN");
            card13Actions.appendChild(await new Lucide_heart().create({ width: 16, color: { r: 0.35, g: 0.39, b: 0.46 }, strokeWeight: 2 }));
            card13Actions.appendChild(await new Lucide_message_circle().create({ width: 16, color: { r: 0.35, g: 0.39, b: 0.46 }, strokeWeight: 2 }));
            card13Actions.appendChild(await new Lucide_share_2().create({ width: 16, color: { r: 0.35, g: 0.39, b: 0.46 }, strokeWeight: 2 }));
            card13Body.appendChild(card13Actions);

            modernPatternsRow.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 360,
                    variant: "outlined",
                    cornerRadius: 20,
                    paddingMode: "all-in-one",
                    padding: 16,
                    gap: 0,
                    imageNode: await createPlaceholderImage(360, 220, "STRETCH", "Primary Action Media", "#66707D"),
                    chipCell: { label: "NEW", inset: 12, cornerRadius: 999, paddingHorizontal: 10, paddingVertical: 4, fontSize: 11 },
                    bodyNode: card13Body,
                    footerNode: await btn.create({ label: "Shop Now", variant: "primary", width: "fill", cornerRadius: 999 })
                }),
                "13. Primary Action Media Card",
                "Media + CTA",
                false
            ));

            // Card 14: Structured Header/Body/Footer Card
            const card14Header = createHorizontalRow(8, "SPACE_BETWEEN");
            card14Header.layoutAlign = "STRETCH";
            card14Header.primaryAxisSizingMode = "FIXED";
            card14Header.appendChild(await createText("Campaign Performance", 17, "Semi Bold", { r: 0.09, g: 0.11, b: 0.16 }, false));
            card14Header.appendChild(await new Lucide_more_horizontal().create({ width: 18, color: { r: 0.45, g: 0.5, b: 0.58 }, strokeWeight: 2 }));

            const card14Body = figma.createFrame();
            card14Body.name = "Card 14 Body";
            card14Body.layoutMode = "VERTICAL";
            card14Body.itemSpacing = 10;
            card14Body.fills = [];
            card14Body.layoutAlign = "STRETCH";
            card14Body.appendChild(await createText("Open rate increased by 12% this week compared to the last campaign run.", 14, "Regular", { r: 0.33, g: 0.36, b: 0.43 }));
            const card14Meta = createHorizontalRow(8, "MIN");
            card14Meta.appendChild(await bdg.create({ variant: "success", type: "solid", label: "+12%" }));
            card14Meta.appendChild(await createText("Updated 2h ago", 12, "Regular", { r: 0.5, g: 0.54, b: 0.61 }, false));
            card14Body.appendChild(card14Meta);

            const card14Footer = createHorizontalRow(10, "SPACE_BETWEEN");
            card14Footer.layoutAlign = "STRETCH";
            card14Footer.primaryAxisSizingMode = "FIXED";
            card14Footer.appendChild(await btn.create({ label: "Details", variant: "secondary", size: "small", cornerRadius: 999 }));
            card14Footer.appendChild(await btn.create({ label: "Approve", variant: "primary", size: "small", cornerRadius: 999 }));

            modernPatternsRow.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 360,
                    variant: "elevated",
                    cornerRadius: 20,
                    paddingMode: "all-in-one",
                    padding: 18,
                    gap: 0,
                    headerNode: card14Header,
                    bodyNode: card14Body,
                    footerNode: card14Footer
                }),
                "14. Structured Header/Body/Footer",
                "Dashboard Pattern",
                false
            ));

            // Card 15: Media Layer Stack Card (Overlay Preset Style)
            const card15Image = await createPlaceholderImage(360, 420, "STRETCH", "Layer Stack Media", "#66707D");
            card15Image.cornerRadius = 20;

            const card15Overlay = figma.createFrame();
            card15Overlay.name = "Card 15 Overlay";
            card15Overlay.layoutMode = "NONE";
            card15Overlay.fills = [];
            card15Overlay.resize(360, 420);

            const card15Scrim = figma.createRectangle();
            card15Scrim.resize(360, 190);
            card15Scrim.y = 230;
            card15Scrim.fills = [{
                type: "GRADIENT_LINEAR",
                gradientStops: [
                    { position: 0, color: { r: 0.05, g: 0.08, b: 0.12, a: 0.5 } },
                    { position: 1, color: { r: 0, g: 0, b: 0, a: 0 } }
                ],
                gradientTransform: [[1, 0, 0], [0, 1, 0]]
            }];
            card15Overlay.appendChild(card15Scrim);

            const card15Chip = await bdg.create({ variant: "info", type: "solid", label: "TRENDING" });
            card15Chip.x = 16;
            card15Chip.y = 16;
            card15Overlay.appendChild(card15Chip);

            const card15Title = await createText("Minimal Sound Studio", 24, "Bold", { r: 1, g: 1, b: 1 }, false);
            card15Title.x = 16;
            card15Title.y = 314;
            card15Overlay.appendChild(card15Title);

            const card15Meta = await createText("Playlist · 128 tracks", 14, "Regular", { r: 0.9, g: 0.92, b: 0.97 }, false);
            card15Meta.x = 16;
            card15Meta.y = 352;
            card15Overlay.appendChild(card15Meta);

            const card15Fab = await btn.create({
                variant: "fab",
                size: "small",
                frontIcon: Lucide_heart,
                baseColor: { r: 1, g: 1, b: 1 },
                textColor: { r: 0.12, g: 0.12, b: 0.12 },
                withShadow: true
            }) as FrameNode;
            card15Fab.x = 360 - card15Fab.width - 16;
            card15Fab.y = 16;
            card15Overlay.appendChild(card15Fab);

            modernPatternsRow.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 360,
                    height: 420,
                    variant: "elevated",
                    cornerRadius: 20,
                    paddingMode: "none",
                    gap: 0,
                    imageNode: card15Image,
                    overlayNode: card15Overlay,
                    overlay: {
                        enabled: true,
                        horizontal: "left",
                        vertical: "top",
                        insetX: 0,
                        insetY: 0
                    }
                }),
                "15. Media Layer Stack Card",
                "Overlay Preset",
                false
            ));

            const createProductImageArea = async () => {
                const imageArea = figma.createFrame();
                imageArea.name = "Product Image Area";
                imageArea.layoutMode = "VERTICAL";
                imageArea.primaryAxisSizingMode = "AUTO";
                imageArea.counterAxisSizingMode = "FIXED";
                imageArea.primaryAxisAlignItems = "CENTER";
                imageArea.counterAxisAlignItems = "CENTER";
                imageArea.fills = [];
                imageArea.layoutAlign = "STRETCH";

                const slot = figma.createFrame();
                slot.name = "Product Image Slot (Replace with PNG)";
                slot.resize(220, 180);
                slot.layoutMode = "VERTICAL";
                slot.primaryAxisAlignItems = "CENTER";
                slot.counterAxisAlignItems = "CENTER";
                slot.primaryAxisSizingMode = "FIXED";
                slot.counterAxisSizingMode = "FIXED";
                slot.fills = [{ type: "SOLID", color: { r: 0.40, g: 0.44, b: 0.49 } }];
                slot.strokes = [{ type: "SOLID", color: { r: 0.78, g: 0.81, b: 0.86 } }];
                slot.strokeWeight = 1;
                slot.dashPattern = [6, 4];
                slot.cornerRadius = 12;
                slot.appendChild(await new Lucide_image().create({ width: 26, color: { r: 0.90, g: 0.92, b: 0.96 }, strokeWeight: 2 }));
                slot.appendChild(await createText("Replace with PNG", 12, "Semi Bold", { r: 0.90, g: 0.92, b: 0.96 }, false));
                imageArea.appendChild(slot);

                return imageArea;
            };

            // Card 16: Product Slot Card (Centered Replaceable PNG Area)
            const card16Body = figma.createFrame();
            card16Body.name = "Card 16 Content";
            card16Body.layoutMode = "VERTICAL";
            card16Body.itemSpacing = 8;
            card16Body.fills = [];
            card16Body.layoutAlign = "STRETCH";
            card16Body.counterAxisSizingMode = "FIXED";
            card16Body.counterAxisAlignItems = "CENTER";
            card16Body.appendChild(await createText("Xiaomi 12 Pro", 24, "Semi Bold", { r: 0.12, g: 0.12, b: 0.14 }, false));
            card16Body.appendChild(await createText("Snapdragon 8 Gen 1", 16, "Regular", { r: 0.44, g: 0.45, b: 0.48 }, false));
            card16Body.appendChild(await createText("Rp 12.599.000", 20, "Semi Bold", { r: 0.12, g: 0.12, b: 0.14 }, false));

            const colorDots = createHorizontalRow(12, "CENTER");
            colorDots.layoutAlign = "INHERIT";
            colorDots.primaryAxisSizingMode = "AUTO";
            const dot1 = figma.createEllipse(); dot1.resize(24, 24); dot1.fills = [{ type: "SOLID", color: { r: 0.50, g: 0.52, b: 0.54 } }];
            const dot2 = figma.createEllipse(); dot2.resize(24, 24); dot2.fills = [{ type: "SOLID", color: { r: 0.26, g: 0.56, b: 0.94 } }];
            const dot3 = figma.createEllipse(); dot3.resize(24, 24); dot3.fills = [{ type: "SOLID", color: { r: 0.74, g: 0.30, b: 0.84 } }];
            colorDots.appendChild(dot1); colorDots.appendChild(dot2); colorDots.appendChild(dot3);
            card16Body.appendChild(colorDots);

            modernPatternsRow.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 360,
                    variant: "outlined",
                    cornerRadius: 16,
                    paddingMode: "all",
                    padding: 24,
                    gap: 18,
                    imageNode: await createProductImageArea(),
                    bodyNode: card16Body
                }),
                "16. Product Slot Card (PNG Replace)",
                "Centered Image Slot",
                false
            ));

            // Card 17: Product Slot Card (Left-Aligned Content)
            const card17Body = figma.createFrame();
            card17Body.name = "Card 17 Content";
            card17Body.layoutMode = "VERTICAL";
            card17Body.itemSpacing = 8;
            card17Body.fills = [];
            card17Body.layoutAlign = "STRETCH";
            card17Body.counterAxisSizingMode = "FIXED";
            card17Body.counterAxisAlignItems = "MIN";
            card17Body.appendChild(await createText("Xiaomi 12 Pro", 24, "Semi Bold", { r: 0.12, g: 0.12, b: 0.14 }, true));
            card17Body.appendChild(await createText("Snapdragon 8 Gen 1", 16, "Regular", { r: 0.44, g: 0.45, b: 0.48 }, true));
            card17Body.appendChild(await createText("Rp 12.599.000", 20, "Semi Bold", { r: 0.12, g: 0.12, b: 0.14 }, true));

            const colorDotsLeft = createHorizontalRow(12, "MIN");
            colorDotsLeft.layoutAlign = "STRETCH";
            colorDotsLeft.primaryAxisSizingMode = "FIXED";
            const leftDot1 = figma.createEllipse(); leftDot1.resize(24, 24); leftDot1.fills = [{ type: "SOLID", color: { r: 0.50, g: 0.52, b: 0.54 } }];
            const leftDot2 = figma.createEllipse(); leftDot2.resize(24, 24); leftDot2.fills = [{ type: "SOLID", color: { r: 0.26, g: 0.56, b: 0.94 } }];
            const leftDot3 = figma.createEllipse(); leftDot3.resize(24, 24); leftDot3.fills = [{ type: "SOLID", color: { r: 0.74, g: 0.30, b: 0.84 } }];
            colorDotsLeft.appendChild(leftDot1); colorDotsLeft.appendChild(leftDot2); colorDotsLeft.appendChild(leftDot3);
            card17Body.appendChild(colorDotsLeft);

            modernPatternsRow.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 360,
                    variant: "outlined",
                    cornerRadius: 16,
                    paddingMode: "all",
                    padding: 24,
                    gap: 18,
                    imageNode: await createProductImageArea(),
                    bodyNode: card17Body
                }),
                "17. Product Slot Card (Left Aligned)",
                "Centered Image + Left Content",
                false
            ));

            container.appendChild(modernPatternsRow);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

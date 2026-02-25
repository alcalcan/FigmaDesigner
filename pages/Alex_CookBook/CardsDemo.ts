import { ComponentProps } from "../../components/BaseComponent";
import { BaseDemoPage } from "./BaseDemoPage";
import { Card, CardContent, CardProps } from "../../components/Alex_CookBook/Card/Card";
import { button } from "../../components/Alex_CookBook/button/button";
import { badge } from "../../components/Alex_CookBook/badge/badge";
import { Lucide_clock } from "../../components/lucide_icons/Lucide_clock/Lucide_clock";
import { Lucide_user } from "../../components/lucide_icons/Lucide_user/Lucide_user";
import { Lucide_star } from "../../components/lucide_icons/Lucide_star/Lucide_star";
import { Lucide_image } from "../../components/lucide_icons/Lucide_image/Lucide_image";
import { Lucide_home } from "../../components/lucide_icons/Lucide_home/Lucide_home";
import { Lucide_heart } from "../../components/lucide_icons/Lucide_heart/Lucide_heart";
import { Lucide_arrow_left } from "../../components/lucide_icons/Lucide_arrow_left/Lucide_arrow_left";
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

        const cardApi = new Card();
        const hexToRgb = (hex: string): RGB => ({
            r: parseInt(hex.slice(1, 3), 16) / 255,
            g: parseInt(hex.slice(3, 5), 16) / 255,
            b: parseInt(hex.slice(5, 7), 16) / 255
        });

        const txt = async (
            text: string,
            size: number,
            weight: "Regular" | "Semi Bold" | "Bold" = "Regular",
            color: RGB = { r: 0, g: 0, b: 0 },
            fillWidth: boolean = true
        ) => cardApi.textNode({ text, size, weight, color, fill: fillWidth });

        const imgPlaceholder = async (
            width: number,
            height: number,
            layoutAlign: "INHERIT" | "STRETCH" = "STRETCH",
            name: string = "Image Placeholder",
            bgHex: string = "#CCD8E5",
            emoji: string = ""
        ) => cardApi.placeholderNode({
            width,
            height,
            layoutAlign,
            label: name,
            backgroundColor: hexToRgb(bgHex),
            emoji
        });

        const createAvatarPlaceholder = (size: number = 38): CardContent => Card.shape({
            shape: "ellipse",
            name: "Avatar Placeholder",
            width: size,
            height: size,
            fillColor: { r: 0.39, g: 0.46, b: 0.54 },
            strokeColor: { r: 0.87, g: 0.90, b: 0.94 },
            strokeWeight: 1,
            fill: false
        });

        const createMetaAction = (
            label: string,
            iconType: "heart" | "reply" | "none",
            compact: boolean
        ): CardContent => {
            const metaColor = { r: 0.52, g: 0.56, b: 0.62 };
            const iconSize = compact ? 12 : 14;
            const items: CardContent[] = [];
            if (iconType === "heart") {
                items.push(Card.component(Lucide_heart, { width: iconSize, color: metaColor, strokeWeight: 1.8 }, { fill: false }));
            } else if (iconType === "reply") {
                items.push(Card.component(Lucide_arrow_left, { width: iconSize, color: metaColor, strokeWeight: 1.8 }, { fill: false }));
            }

            items.push(Card.text(label, { size: compact ? 14 : 16, color: metaColor, fill: false }));
            return Card.row(items, { gap: 4, fill: false, crossAlign: "center" });
        };

        const createThreadComment = async (
            author: string,
            message: string,
            timeLabel: string,
            likesLabel: string,
            repliesLabel?: string,
            withToggleLabel?: string,
            compact: boolean = false
        ) => {
            const headingItems: CardContent[] = [
                Card.text(author, {
                    size: compact ? 20 : 24,
                    weight: "Semi Bold",
                    color: { r: 0.15, g: 0.20, b: 0.27 },
                    fill: false
                })
            ];
            if (timeLabel) {
                headingItems.push(Card.text(timeLabel, {
                    size: compact ? 14 : 16,
                    color: { r: 0.54, g: 0.59, b: 0.65 },
                    fill: false
                }));
            }

            const actionItems: CardContent[] = [
                createMetaAction("Like", "heart", compact),
                createMetaAction("Reply", "reply", compact),
                createMetaAction(likesLabel, "none", compact)
            ];
            if (repliesLabel) {
                actionItems.push(createMetaAction(repliesLabel, "none", compact));
            }

            const items: CardContent[] = [
                Card.row([
                    createAvatarPlaceholder(compact ? 38 : 44),
                    Card.column([
                        Card.row(headingItems, {
                            gap: 8,
                            fill: true,
                            crossAlign: "start",
                            align: timeLabel ? "space-between" : "start"
                        }),
                        Card.text(message, {
                            size: compact ? 18 : 20,
                            color: { r: 0.15, g: 0.20, b: 0.27 },
                            fill: true
                        }),
                        Card.row(actionItems, {
                            gap: compact ? 10 : 14,
                            fill: false,
                            crossAlign: "center"
                        })
                    ], {
                        gap: 16,
                        fill: true,
                        crossAlign: "stretch"
                    })
                ], {
                    gap: 12,
                    fill: true,
                    crossAlign: "start"
                })
            ];

            if (withToggleLabel) {
                items.push(Card.row([
                    Card.text(withToggleLabel, {
                        size: compact ? 16 : 18,
                        weight: "Semi Bold",
                        color: { r: 0.09, g: 0.12, b: 0.16 },
                        fill: false
                    })
                ], {
                    gap: 0,
                    fill: true,
                    padding: { left: compact ? 50 : 56, right: 0, top: 0, bottom: 0 }
                }));
            }

            return cardApi.contentNode(
                Card.column(items, {
                    gap: 16,
                    fill: true,
                    crossAlign: "stretch"
                }),
                `Comment: ${author}`
            );
        };

        const createThreadSeparator = async () => cardApi.contentNode(Card.shape({
            width: 100,
            height: 1,
            fill: true,
            fillColor: { r: 0.89, g: 0.91, b: 0.94 },
            name: "Thread Separator"
        }), "Thread Separator");

        const buildThreadCardBody = async (expanded: boolean) => {
            const firstComment = await createThreadComment(
                "Kathryn Murphy",
                "The fit is perfect, and the quality is top-notch.",
                "1 week ago",
                "7 likes",
                "3 replies",
                "Show replies"
            );

            const secondComment = await createThreadComment(
                "Esther Howard",
                "I recently purchased the grey blazer jacket for women, and I couldn't be happier with my purchase!",
                "2 weeks ago",
                "2 likes",
                "2 replies",
                expanded ? "Hide replies" : "Show replies"
            );

            let secondThread: SceneNode = await cardApi.contentNode(
                Card.column([Card.node(secondComment)], {
                    gap: 12,
                    fill: true,
                    crossAlign: "stretch"
                }),
                "Comment with Replies"
            );

            if (expanded) {
                const firstReply = await createThreadComment(
                    "Cameron Williamson",
                    "I've received multiple compliments on how stylish it looks.",
                    "",
                    "4 likes",
                    undefined,
                    undefined,
                    true
                );
                const secondReply = await createThreadComment(
                    "Jenny Wilson",
                    "It's versatile enough to wear to work or dress up for a night out.",
                    "",
                    "5 likes",
                    undefined,
                    undefined,
                    true
                );
                secondThread = await cardApi.threadWithReplies({
                    parentComment: secondComment,
                    replies: [firstReply, secondReply],
                    name: "Comment with Replies",
                    gap: 12,
                    repliesGap: 12,
                    repliesIndent: 56,
                    connectorStartY: 56,
                    connectorX: 22,
                    connectorColor: { r: 0.86, g: 0.89, b: 0.93 }
                });
            }

            const thirdComment = await createThreadComment(
                "Kristin Watson",
                "I highly recommend this blazer to any woman looking for a timeless and chic addition to their wardrobe.",
                "2 weeks ago",
                "1 likes",
                "1 replies",
                "Show replies"
            );

            const fourthComment = await createThreadComment(
                "Dianne Russell",
                "It provides just the right amount of warmth without making me too hot.",
                "1 month ago",
                "2 likes"
            );

            return cardApi.contentNode(
                Card.column([
                    Card.node(firstComment),
                    Card.node(await createThreadSeparator()),
                    Card.node(secondThread),
                    Card.node(await createThreadSeparator()),
                    Card.node(thirdComment),
                    Card.node(await createThreadSeparator()),
                    Card.node(fourthComment)
                ], {
                    gap: 16,
                    fill: true,
                    crossAlign: "stretch"
                }),
                expanded ? "Chat Thread Expanded" : "Chat Thread Collapsed"
            );
        };

        const card = new Card();
        const createCardSample = async (
            cardProps: CardProps,
            caption: string,
            wrapperName: string = "Wrapper",
            fillWidth: boolean = false
        ) => this.wrapWithCaption(
            await card.create(cardProps),
            caption,
            wrapperName,
            fillWidth
        );

        // --- SECTION 1: Standard Layouts ---
        await this.addSection(root, "Standard Layouts", "Vertical cards with different content block arrangements.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await createCardSample({
                width: 320,
                paddingMode: "all-in-one",
                variant: "elevated",
                gap: 0,
                contentGap: 16,
                media: Card.placeholder({ width: 320, height: 180, label: "Image Placeholder" }),
                header: Card.text("Standard Layout", { size: 20, weight: "Bold" }),
                body: Card.text("Image is full width at the top. Content wrapper underneath has consistent padding.", { size: 14 })
            }, "1. Standard Layout"));

            row.appendChild(await createCardSample({
                width: 320,
                paddingMode: "all",
                variant: "outlined",
                gap: 20,
                media: Card.placeholder({ width: 272, height: 180, label: "Image Placeholder" }),
                header: Card.text("Padded Card Content", { size: 20, weight: "Bold" }),
                body: Card.text("Root card has padding. The image inside is rounded automatically.", { size: 14 })
            }, "2. Padded Layout"));

            row.appendChild(await createCardSample({
                width: 320,
                height: 320,
                paddingMode: "none",
                variant: "elevated",
                media: Card.placeholder({ width: 320, height: 320, label: "Image Placeholder" }),
                overlayContent: Card.column([
                    Card.text("Overlaid Card", { size: 20, weight: "Bold", color: { r: 0, g: 0, b: 0 } }),
                    Card.text("Text is absolutely positioned at the bottom.", { size: 14, color: { r: 0, g: 0, b: 0 } })
                ], { padding: 24, gap: 8, fill: true, crossAlign: "stretch" })
            }, "3. Overlay Layout"));

            container.appendChild(row);
        });

        // --- SECTION 2: Horizontal Layouts ---
        await this.addSection(root, "Horizontal Layouts", "Cards with images on the left.", async (container) => {
            const row = this.createRow(container);

            row.appendChild(await createCardSample({
                fillWidth: true,
                mediaPosition: "left",
                paddingMode: "all-in-one",
                variant: "elevated",
                gap: 0,
                contentGap: 16,
                media: Card.placeholder({ width: 240, height: 200, layoutAlign: "INHERIT", label: "Image Placeholder" }),
                header: Card.text("Horizontal Highlight", { size: 20, weight: "Bold" }),
                body: Card.text("In horizontal mode, the content area fills the available space.", { size: 14 })
            }, "4. Horizontal Highlight", "Wrapper", true));

            container.appendChild(row);
        });

        // --- SECTION 3: Complex Content Cards ---
        await this.addSection(root, "Complex Content Cards", "Combining the Card component with buttons, badges, and complex layouts.", async (container) => {
            const card = new Card();
            const btn = new button();
            const row = this.createRow(container, 32); // Increased spacing between complex cards

            // Card 5: Recipe Card (Redesigned)
            row.appendChild(await createCardSample({
                width: 380,
                paddingMode: "all-in-one",
                variant: "elevated",
                gap: 0,
                contentGap: 16,
                media: Card.placeholder({ width: 380, height: 320, label: "Recipe Image", backgroundColor: { r: 0.82, g: 0.91, b: 0.87 }, emoji: "🥑" }),
                header: Card.column([
                    Card.component(badge, { variant: "success", type: "solid", label: "VEGETARIAN" }, { fill: false }),
                    Card.text("Avocado Toast", { size: 22, weight: "Bold", color: { r: 0, g: 0, b: 0 } })
                ], { gap: 8, fill: true, crossAlign: "stretch" }),
                body: Card.column([
                    Card.row([
                        Card.component(Lucide_clock, { width: 14, color: { r: 0.4, g: 0.4, b: 0.4 } }, { fill: false }),
                        Card.text("15 min", { size: 12, color: { r: 0.4, g: 0.4, b: 0.4 }, fill: false }),
                        Card.text("•", { size: 12, color: { r: 0.8, g: 0.8, b: 0.8 }, fill: false }),
                        Card.component(Lucide_user, { width: 14, color: { r: 0.4, g: 0.4, b: 0.4 } }, { fill: false }),
                        Card.text("Chef Alex", { size: 12, color: { r: 0.4, g: 0.4, b: 0.4 }, fill: false }),
                        Card.text("•", { size: 12, color: { r: 0.8, g: 0.8, b: 0.8 }, fill: false }),
                        Card.component(Lucide_star, { width: 14, color: { r: 0.9, g: 0.6, b: 0 }, strokeWeight: 2 }, { fill: false }),
                        Card.text("4.9", { size: 12, color: { r: 0.4, g: 0.4, b: 0.4 }, fill: false })
                    ], { gap: 6, fill: false, crossAlign: "center" }),
                    Card.text("A simple, healthy, and delicious breakfast option packed with essential healthy fats.", { size: 14 })
                ], { gap: 8, fill: true, crossAlign: "stretch" }),
                footer: Card.component(button, { label: "View Recipe", variant: "primary", width: "fill" })
            }, "5. Recipe Card"));

            // Card 6: Shopping Card (Redesigned)
            const saleBadgeOverlay = await cardApi.contentNode(
                Card.row([
                    Card.component(badge, { variant: "error", type: "solid", label: "-20% OFF" })
                ], { fill: false, crossAlign: "center" }),
                "Sale Overlay"
            ) as FrameNode;
            saleBadgeOverlay.x = 16;
            saleBadgeOverlay.y = 16;

            const heartBtn = await btn.create({
                variant: "ghost",
                frontIcon: Lucide_heart,
                padding: 4
            });

            row.appendChild(await createCardSample({
                width: 360,
                paddingMode: "all-in-one",
                variant: "outlined",
                gap: 0,
                contentGap: 16,
                media: Card.placeholder({ width: 360, height: 360, label: "Product Image", backgroundColor: { r: 0.89, g: 0.89, b: 0.90 }, emoji: "🎧" }),
                overlayNode: saleBadgeOverlay,
                overlayPosition: "custom",
                title: "Wireless Noise-Canceling Headphones",
                priceTag: { price: "$129.99", previousPrice: "$149.99" },
                body: Card.column([
                    Card.row([
                        Card.component(Lucide_star, { width: 16, color: { r: 0.9, g: 0.6, b: 0 }, strokeWeight: 2 }, { fill: false }),
                        Card.component(Lucide_star, { width: 16, color: { r: 0.9, g: 0.6, b: 0 }, strokeWeight: 2 }, { fill: false }),
                        Card.component(Lucide_star, { width: 16, color: { r: 0.9, g: 0.6, b: 0 }, strokeWeight: 2 }, { fill: false }),
                        Card.component(Lucide_star, { width: 16, color: { r: 0.9, g: 0.6, b: 0 }, strokeWeight: 2 }, { fill: false }),
                        Card.component(Lucide_star, { width: 16, color: { r: 0.7, g: 0.7, b: 0.7 }, strokeWeight: 1.5 }, { fill: false }),
                        Card.text("(128)", { size: 14, color: { r: 0.4, g: 0.4, b: 0.4 }, fill: false })
                    ], { gap: 2, fill: false, crossAlign: "center" })
                ], { gap: 8, fill: true, crossAlign: "stretch" }),
                footer: Card.row([
                    Card.component(button, { label: "Add to Cart", variant: "primary", width: "fill" }),
                    Card.node(heartBtn, { fill: false })
                ], { gap: 12, fill: true, align: "space-between", crossAlign: "center" })
            }, "6. Product/Shopping Card"));

            // Card 7: Casual Shirt Card (No Background, Split Price)
            const oldPriceNode = await txt("$35", 16, "Regular", { r: 0.6, g: 0.6, b: 0.65 }, false);
            oldPriceNode.textDecoration = "STRIKETHROUGH";

            const shirtCardWidth = 320;
            const shirtImageHeight = 320;

            row.appendChild(await createCardSample({
                width: shirtCardWidth,
                variant: "none",
                paddingMode: "all-in-one",
                padding: 16,
                gap: 0,
                media: Card.placeholder({ width: shirtCardWidth, height: shirtImageHeight, label: "Casual Shirt", backgroundColor: { r: 0.40, g: 0.44, b: 0.49 }, cornerRadius: 24 }),
                chipCell: { label: "SALE", inset: 12 },
                body: Card.column([
                    Card.row([
                        Card.text("Casual Shirt", { size: 20, weight: "Semi Bold", color: { r: 0.2, g: 0.25, b: 0.3 }, fill: false }),
                        Card.text("$29", { size: 28, weight: "Bold", color: { r: 0.2, g: 0.25, b: 0.3 }, fill: false })
                    ], { align: "space-between", fill: true, crossAlign: "center" }),
                    Card.row([
                        Card.text("7 Colors", { size: 16, color: { r: 0.6, g: 0.6, b: 0.65 }, fill: false }),
                        Card.node(oldPriceNode, { fill: false })
                    ], { align: "space-between", fill: true, crossAlign: "center" })
                ], { gap: 8, fill: true, crossAlign: "stretch" })
            }, "7. Casual Shirt (No Fill)", "Transparent"));

            // Card 8: Casual Shirt Card (Centered Text)
            const centeredOldPrice = await txt("$35", 16, "Regular", { r: 0.6, g: 0.6, b: 0.65 }, false);
            centeredOldPrice.textDecoration = "STRIKETHROUGH";

            row.appendChild(await createCardSample({
                width: shirtCardWidth,
                variant: "none",
                paddingMode: "all-in-one",
                padding: 16,
                gap: 0,
                media: Card.placeholder({ width: shirtCardWidth, height: shirtImageHeight, label: "Casual Shirt Centered", backgroundColor: { r: 0.40, g: 0.44, b: 0.49 }, cornerRadius: 24 }),
                chipCell: { label: "SALE", inset: 12 },
                body: Card.column([
                    Card.text("Casual Shirt", { size: 20, weight: "Semi Bold", color: { r: 0.2, g: 0.25, b: 0.3 }, fill: false, align: "center" }),
                    Card.text("$29", { size: 28, weight: "Bold", color: { r: 0.2, g: 0.25, b: 0.3 }, fill: false, align: "center" }),
                    Card.row([
                        Card.text("7 Colors", { size: 16, color: { r: 0.6, g: 0.6, b: 0.65 }, fill: false }),
                        Card.node(centeredOldPrice, { fill: false })
                    ], { gap: 12, fill: false, align: "center", crossAlign: "center" })
                ], { gap: 10, fill: true, crossAlign: "center" })
            }, "8. Casual Shirt (Centered Text)", "Transparent"));

            // Card 9: Social/Game Card (Avatar + Rating Chip)
            const socialContent = await cardApi.contentNode(
                Card.column([
                    Card.row([
                        Card.shape({
                            shape: "ellipse",
                            width: 32,
                            height: 32,
                            fillColor: { r: 0.96, g: 0.75, b: 0.20 },
                            strokes: [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.7 }],
                            strokeWeight: 1,
                            fill: false
                        }),
                        Card.text("Ralph Edwards", { size: 16, weight: "Semi Bold", color: { r: 0.12, g: 0.12, b: 0.13 }, fill: false })
                    ], { gap: 12, fill: true, crossAlign: "center" }),
                    {
                        type: "stack",
                        direction: "free",
                        width: 288,
                        height: 300,
                        fill: true,
                        clipsContent: false,
                        items: [
                        Card.shape({
                            width: 288,
                            height: 300,
                            fillColor: { r: 0.40, g: 0.44, b: 0.49 },
                            cornerRadius: 36,
                            name: "Game Image",
                            fill: true
                        }),
                        Card.row([
                            Card.component(Lucide_star, { width: 11, color: { r: 0.43, g: 0.26, b: 0.90 }, strokeWeight: 2 }, { fill: false }),
                            Card.text("3.7", { size: 11, weight: "Bold", color: { r: 0.43, g: 0.26, b: 0.90 }, fill: false })
                        ], {
                            gap: 6,
                            fill: false,
                            crossAlign: "center",
                            padding: { left: 10, right: 10, top: 5, bottom: 5 },
                            fillColor: { r: 1, g: 1, b: 1 },
                            cornerRadius: 999,
                            effects: [{
                                type: "DROP_SHADOW",
                                color: { r: 0, g: 0, b: 0, a: 0.06 },
                                offset: { x: 0, y: 2 },
                                radius: 6,
                                spread: 0,
                                visible: true,
                                blendMode: "NORMAL"
                            }],
                            position: "absolute",
                            x: 222,
                            y: 14,
                            constraints: { horizontal: "MAX", vertical: "MIN" }
                        })
                        ]
                    },
                    Card.text("Candy Crush Friends Saga", { size: 19, weight: "Semi Bold", color: { r: 0.08, g: 0.08, b: 0.09 } }),
                    Card.row([
                        Card.row([
                            Card.component(Lucide_heart, { width: 18, color: { r: 0.55, g: 0.55, b: 0.57 }, strokeWeight: 2 }, { fill: false }),
                            Card.component(Lucide_message_circle, { width: 18, color: { r: 0.55, g: 0.55, b: 0.57 }, strokeWeight: 2 }, { fill: false }),
                            Card.component(Lucide_share_2, { width: 18, color: { r: 0.55, g: 0.55, b: 0.57 }, strokeWeight: 2 }, { fill: false })
                        ], { gap: 14, fill: false, crossAlign: "center" }),
                        Card.component(Lucide_save, { width: 18, color: { r: 0.55, g: 0.55, b: 0.57 }, strokeWeight: 2 }, { fill: false })
                    ], { align: "space-between", fill: true, crossAlign: "center" })
                ], { gap: 16, fill: true, crossAlign: "stretch" }),
                "Social Game Content"
            );

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
                const image = await imgPlaceholder(320, 420, "STRETCH", "Overlay Actions Image", "#66707D");
                image.cornerRadius = overlayCardCornerRadius;
                return image;
            };

            const createOverlayContent = async (withGradient: boolean) => {
                const items: Array<ReturnType<typeof Card.shape> | ReturnType<typeof Card.row> | ReturnType<typeof Card.text> | ReturnType<typeof Card.component>> = [];

                if (withGradient) {
                    items.push(Card.shape({
                        name: "Bottom Scrim",
                        width: 320,
                        height: 170,
                        fills: [{
                            type: "GRADIENT_LINEAR",
                            gradientStops: [
                                { position: 0, color: { r: 0.05, g: 0.08, b: 0.12, a: 0.45 } },
                                { position: 1, color: { r: 0, g: 0, b: 0, a: 0 } }
                            ],
                            gradientTransform: [[1, 0, 0], [0, 1, 0]]
                        }],
                        position: "absolute",
                        x: 0,
                        y: 250
                    }));
                }

                items.push(
                    Card.row([Card.text("FEATURED", { size: 11, weight: "Bold", color: { r: 1, g: 1, b: 1 }, fill: false })], {
                        gap: 0,
                        fill: false,
                        padding: { left: 10, right: 10, top: 6, bottom: 6 },
                        cornerRadius: 999,
                        fillColor: { r: 1, g: 1, b: 1, a: 0.14 },
                        strokeColor: { r: 1, g: 1, b: 1, a: 0.30 },
                        strokeWeight: 1,
                        position: "absolute",
                        x: 16,
                        y: 16
                    }),
                    Card.text("Arctic Headphones", { size: 22, weight: "Bold", color: { r: 1, g: 1, b: 1 }, fill: false, position: "absolute", x: 16, y: 300 }),
                    Card.text("$29 · 7 colors", { size: 16, color: { r: 0.92, g: 0.94, b: 0.98 }, fill: false, position: "absolute", x: 16, y: 344 }),
                    Card.row([
                        Card.component(Lucide_heart, { width: 16, color: { r: 1, g: 1, b: 1 }, strokeWeight: 2 }, { fill: false }),
                        Card.component(Lucide_message_circle, { width: 16, color: { r: 1, g: 1, b: 1 }, strokeWeight: 2 }, { fill: false }),
                        Card.component(Lucide_share_2, { width: 16, color: { r: 1, g: 1, b: 1 }, strokeWeight: 2 }, { fill: false }),
                        Card.component(Lucide_save, { width: 16, color: { r: 1, g: 1, b: 1 }, strokeWeight: 2 }, { fill: false })
                    ], {
                        gap: 16,
                        fill: false,
                        padding: { left: 12, right: 12, top: 8, bottom: 8 },
                        cornerRadius: 999,
                        fillColor: { r: 0.10, g: 0.12, b: 0.18, a: 0.35 },
                        position: "absolute",
                        x: 16,
                        y: 374
                    })
                );

                return cardApi.contentNode(
                    {
                        type: "stack",
                        direction: "free",
                        width: 320,
                        height: 420,
                        fill: false,
                        clipsContent: false,
                        items
                    },
                    withGradient ? "Absolute Overlay Content (Gradient)" : "Absolute Overlay Content (Flat)"
                );
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
                    overlayNode: await createOverlayContent(false),
                    overlay: {
                        enabled: true,
                        horizontal: "left",
                        vertical: "top",
                        insetX: 0,
                        insetY: 0
                    },
                    floatingActionButton: {
                        props: {
                            frontIcon: Lucide_heart,
                            baseColor: { r: 1, g: 1, b: 1 },
                            textColor: { r: 0.12, g: 0.12, b: 0.12 },
                            withShadow: true
                        },
                        horizontal: "right",
                        vertical: "top",
                        insetX: 16,
                        insetY: 16
                    }
                }),
                "11. Absolute Overlay Actions (No Gradient)",
                "Overlay",
                false
            ));

            container.appendChild(row);

            // --- Card 12: Event Ticket Card (Own Row) ---
            const eventRow = this.createRow(container, 32);

            const barcodePattern = [2, 4, 2, 2, 4, 2, 4, 2, 2, 4, 2, 4, 2, 2, 4, 2];
            const ticketStub = await cardApi.contentNode(
                Card.column([
                    Card.text("OCT", { size: 24, weight: "Bold", color: { r: 1, g: 0.4, b: 0.4 }, fill: false }),
                    Card.text("24", { size: 48, weight: "Bold", color: { r: 1, g: 1, b: 1 }, fill: false }),
                    Card.row(
                        barcodePattern.map((barWidth) => Card.shape({
                            width: barWidth,
                            height: 24,
                            fillColor: { r: 1, g: 1, b: 1 },
                            fill: false
                        })),
                        { gap: 2, fill: false, crossAlign: "center" }
                    )
                ], {
                    gap: 16,
                    align: "center",
                    crossAlign: "center",
                    fill: false,
                    width: 160,
                    height: 200,
                    fillColor: { r: 0.1, g: 0.1, b: 0.15 },
                    strokeColor: { r: 0.3, g: 0.3, b: 0.35 },
                    strokeWeight: 2
                }),
                "Ticket Stub Graphic"
            ) as FrameNode;
            ticketStub.layoutAlign = "STRETCH";
            ticketStub.dashPattern = [4, 4];
            ticketStub.strokeLeftWeight = 0;
            ticketStub.strokeTopWeight = 0;
            ticketStub.strokeBottomWeight = 0;

            const eventHeader = await cardApi.contentNode(
                Card.row([
                    Card.component(badge, { variant: "info", type: "solid", label: "UPCOMING" }, { fill: false }),
                    Card.text("• Valid for 1 Person", { size: 12, color: { r: 0.5, g: 0.5, b: 0.5 }, fill: false })
                ], { gap: 8, fill: false, crossAlign: "center" }),
                "Event Header"
            );

            const eventInfo = await cardApi.contentNode(
                Card.column([
                    Card.text("Design Systems Conference 2024", { size: 20, weight: "Bold", color: { r: 0, g: 0, b: 0 } }),
                    Card.row([
                        Card.component(Lucide_home, { width: 14, color: { r: 0.3, g: 0.3, b: 0.3 } }, { fill: false }),
                        Card.text("Moscone Center, San Francisco, CA", { size: 14, color: { r: 0.3, g: 0.3, b: 0.3 } })
                    ], { gap: 6, fill: true, crossAlign: "center" }),
                    Card.row([
                        Card.component(Lucide_clock, { width: 14, color: { r: 0.3, g: 0.3, b: 0.3 } }, { fill: false }),
                        Card.text("09:00 AM - 05:00 PM PST", { size: 14, color: { r: 0.3, g: 0.3, b: 0.3 } })
                    ], { gap: 6, fill: true, crossAlign: "center" })
                ], {
                    gap: 16,
                    fill: true,
                    crossAlign: "stretch"
                }),
                "Event Info"
            );

            const eventFooter = await cardApi.contentNode(
                Card.row([
                    Card.component(button, { label: "Buy Tickets", variant: "primary", width: 140 }, { fill: false })
                ], { gap: 16, fill: false, crossAlign: "center" }),
                "Event Footer"
            );

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
            modernPatternsRow.appendChild(await createCardSample({
                width: 360,
                variant: "outlined",
                cornerRadius: 20,
                paddingMode: "all-in-one",
                padding: 16,
                gap: 0,
                media: Card.placeholder({ width: 360, height: 220, label: "Primary Action Media", backgroundColor: { r: 0.40, g: 0.44, b: 0.49 } }),
                chipCell: { label: "NEW", inset: 12, cornerRadius: 999, paddingHorizontal: 10, paddingVertical: 4, fontSize: 11 },
                body: Card.column([
                    Card.text("Headphone Drop X9", { size: 20, weight: "Bold", color: { r: 0.10, g: 0.12, b: 0.18 } }),
                    Card.text("Limited launch with adaptive noise canceling and 40h battery life.", { size: 14, color: { r: 0.32, g: 0.35, b: 0.42 } }),
                    Card.row([
                        Card.component(Lucide_heart, { width: 16, color: { r: 0.35, g: 0.39, b: 0.46 }, strokeWeight: 2 }),
                        Card.component(Lucide_message_circle, { width: 16, color: { r: 0.35, g: 0.39, b: 0.46 }, strokeWeight: 2 }),
                        Card.component(Lucide_share_2, { width: 16, color: { r: 0.35, g: 0.39, b: 0.46 }, strokeWeight: 2 })
                    ], { gap: 8, fill: false, crossAlign: "center" })
                ], { gap: 8, fill: true, crossAlign: "stretch" }),
                footer: Card.component(button, { label: "Shop Now", variant: "primary", width: "fill", cornerRadius: 999 })
            }, "13. Primary Action Media Card", "Media + CTA"));

            // Card 14: Structured Header/Body/Footer Card
            modernPatternsRow.appendChild(await createCardSample({
                width: 360,
                variant: "elevated",
                cornerRadius: 20,
                paddingMode: "all-in-one",
                padding: 18,
                gap: 0,
                header: Card.row([
                    Card.text("Campaign Performance", { size: 17, weight: "Semi Bold", color: { r: 0.09, g: 0.11, b: 0.16 }, fill: false }),
                    Card.component(Lucide_more_horizontal, { width: 18, color: { r: 0.45, g: 0.5, b: 0.58 }, strokeWeight: 2 })
                ], { align: "space-between", fill: true, crossAlign: "center", gap: 8 }),
                body: Card.column([
                    Card.text("Open rate increased by 12% this week compared to the last campaign run.", { size: 14, color: { r: 0.33, g: 0.36, b: 0.43 } }),
                    Card.row([
                        Card.component(badge, { variant: "success", type: "solid", label: "+12%" }),
                        Card.text("Updated 2h ago", { size: 12, color: { r: 0.5, g: 0.54, b: 0.61 }, fill: false })
                    ], { gap: 8, fill: false, crossAlign: "center" })
                ], { gap: 10, fill: true, crossAlign: "stretch" }),
                footer: Card.row([
                    Card.component(button, { label: "Details", variant: "secondary", size: "small", cornerRadius: 999 }),
                    Card.component(button, { label: "Approve", variant: "primary", size: "small", cornerRadius: 999 })
                ], { gap: 10, fill: true, align: "space-between", crossAlign: "center" })
            }, "14. Structured Header/Body/Footer", "Dashboard Pattern"));

            // Card 15: Media Layer Stack Card (Overlay Preset Style)
            const card15Image = await imgPlaceholder(360, 420, "STRETCH", "Layer Stack Media", "#66707D");
            card15Image.cornerRadius = 20;

            const card15Overlay = await cardApi.contentNode(
                {
                    type: "stack",
                    direction: "free",
                    width: 360,
                    height: 420,
                    fill: false,
                    clipsContent: false,
                    items: [
                        Card.shape({
                            name: "Card 15 Scrim",
                            width: 360,
                            height: 190,
                            fills: [{
                                type: "GRADIENT_LINEAR",
                                gradientStops: [
                                    { position: 0, color: { r: 0.05, g: 0.08, b: 0.12, a: 0.5 } },
                                    { position: 1, color: { r: 0, g: 0, b: 0, a: 0 } }
                                ],
                                gradientTransform: [[1, 0, 0], [0, 1, 0]]
                            }],
                            position: "absolute",
                            x: 0,
                            y: 230
                        }),
                        Card.component(badge, { variant: "info", type: "solid", label: "TRENDING" }, { position: "absolute", x: 16, y: 16, fill: false }),
                        Card.text("Minimal Sound Studio", { size: 24, weight: "Bold", color: { r: 1, g: 1, b: 1 }, fill: false, position: "absolute", x: 16, y: 314 }),
                        Card.text("Playlist · 128 tracks", { size: 14, color: { r: 0.9, g: 0.92, b: 0.97 }, fill: false, position: "absolute", x: 16, y: 352 })
                    ]
                },
                "Card 15 Overlay"
            );

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
                    },
                    floatingActionButton: {
                        props: {
                            frontIcon: Lucide_heart,
                            baseColor: { r: 1, g: 1, b: 1 },
                            textColor: { r: 0.12, g: 0.12, b: 0.12 },
                            withShadow: true
                        },
                        horizontal: "right",
                        vertical: "top",
                        insetX: 16,
                        insetY: 16
                    }
                }),
                "15. Media Layer Stack Card",
                "Overlay Preset",
                false
            ));

            const createProductImageArea = async () => {
                const imageArea = await cardApi.contentNode(
                    Card.column([
                        Card.column([
                            Card.component(Lucide_image, { width: 26, color: { r: 0.90, g: 0.92, b: 0.96 }, strokeWeight: 2 }, { fill: false }),
                            Card.text("Replace with PNG", { size: 12, weight: "Semi Bold", color: { r: 0.90, g: 0.92, b: 0.96 }, fill: false })
                        ], {
                            width: 220,
                            height: 180,
                            gap: 8,
                            fill: false,
                            align: "center",
                            crossAlign: "center",
                            fillColor: { r: 0.40, g: 0.44, b: 0.49 },
                            strokeColor: { r: 0.78, g: 0.81, b: 0.86 },
                            strokeWeight: 1,
                            cornerRadius: 12
                        })
                    ], {
                        fill: true,
                        crossAlign: "center"
                    }),
                    "Product Image Area"
                ) as FrameNode;
                imageArea.layoutAlign = "STRETCH";
                const slot = imageArea.children[0] as FrameNode;
                slot.dashPattern = [6, 4];
                return imageArea;
            };

            const createColorDot = (color: RGB): CardContent => Card.shape({
                shape: "ellipse",
                width: 24,
                height: 24,
                fillColor: color,
                fill: false
            });

            // Card 16: Product Slot Card (Centered Replaceable PNG Area)
            modernPatternsRow.appendChild(await createCardSample({
                width: 360,
                variant: "outlined",
                cornerRadius: 16,
                paddingMode: "all",
                padding: 24,
                gap: 18,
                media: { type: "node", node: await createProductImageArea() },
                body: Card.column([
                    Card.text("Xiaomi 12 Pro", { size: 24, weight: "Semi Bold", color: { r: 0.12, g: 0.12, b: 0.14 }, fill: false }),
                    Card.text("Snapdragon 8 Gen 1", { size: 16, color: { r: 0.44, g: 0.45, b: 0.48 }, fill: false }),
                    Card.text("Rp 12.599.000", { size: 20, weight: "Semi Bold", color: { r: 0.12, g: 0.12, b: 0.14 }, fill: false }),
                    Card.row([
                        createColorDot({ r: 0.50, g: 0.52, b: 0.54 }),
                        createColorDot({ r: 0.26, g: 0.56, b: 0.94 }),
                        createColorDot({ r: 0.74, g: 0.30, b: 0.84 })
                    ], { gap: 12, fill: false, align: "center", crossAlign: "center" })
                ], { gap: 8, fill: true, crossAlign: "center" })
            }, "16. Product Slot Card (PNG Replace)", "Centered Image Slot"));

            // Card 17: Product Slot Card (Left-Aligned Content)
            modernPatternsRow.appendChild(await createCardSample({
                width: 360,
                variant: "outlined",
                cornerRadius: 16,
                paddingMode: "all",
                padding: 24,
                gap: 18,
                media: { type: "node", node: await createProductImageArea() },
                body: Card.column([
                    Card.text("Xiaomi 12 Pro", { size: 24, weight: "Semi Bold", color: { r: 0.12, g: 0.12, b: 0.14 } }),
                    Card.text("Snapdragon 8 Gen 1", { size: 16, color: { r: 0.44, g: 0.45, b: 0.48 } }),
                    Card.text("Rp 12.599.000", { size: 20, weight: "Semi Bold", color: { r: 0.12, g: 0.12, b: 0.14 } }),
                    Card.row([
                        createColorDot({ r: 0.50, g: 0.52, b: 0.54 }),
                        createColorDot({ r: 0.26, g: 0.56, b: 0.94 }),
                        createColorDot({ r: 0.74, g: 0.30, b: 0.84 })
                    ], { gap: 12, fill: true, align: "start", crossAlign: "center" })
                ], { gap: 8, fill: true, crossAlign: "stretch" })
            }, "17. Product Slot Card (Left Aligned)", "Centered Image + Left Content"));

            container.appendChild(modernPatternsRow);
        });

        await this.addSection(root, "Chat Thread Cards", "Last variants: collapsed and expanded chat/review cards with reply connector line.", async (container) => {
            const row = this.createRow(container);
            const card = new Card();

            const createThreadCard = async (expanded: boolean, label: string) => {
                const chatCard = await card.create({
                    width: 820,
                    variant: "outlined",
                    cornerRadius: 14,
                    paddingMode: "all-in-one",
                    padding: 24,
                    gap: 0,
                    bodyNode: await buildThreadCardBody(expanded)
                });

                chatCard.fills = [{ type: "SOLID", color: { r: 0.98, g: 0.99, b: 1 } }];
                chatCard.strokes = [{ type: "SOLID", color: { r: 0.87, g: 0.90, b: 0.94 } }];
                chatCard.strokeWeight = 1;

                return this.wrapWithCaption(chatCard, label, "Thread Variant", false);
            };

            row.appendChild(await createThreadCard(false, "18. Chat Thread (Collapsed)"));
            row.appendChild(await createThreadCard(true, "19. Chat Thread (Expanded with replies)"));

            container.appendChild(row);

            const singleRow = this.createRow(container);
            const singleCommentBody = await createThreadComment(
                "Kathryn Murphy",
                "The fit is perfect, and the quality is top-notch.",
                "1 week ago",
                "7 likes",
                "3 replies",
                "Show replies"
            );

            const singleCard = await card.create({
                width: 620,
                variant: "none",
                cornerRadius: 16,
                paddingMode: "all-in-one",
                padding: 24,
                gap: 0,
                bodyNode: singleCommentBody
            });
            singleCard.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            singleCard.strokes = [{ type: "SOLID", color: { r: 0.95, g: 0.96, b: 0.98 } }];
            singleCard.strokeWeight = 1;
            singleCard.effects = [
                {
                    type: "DROP_SHADOW",
                    color: { r: 0.05, g: 0.10, b: 0.20, a: 0.06 },
                    offset: { x: 0, y: 14 },
                    radius: 30,
                    spread: 0,
                    visible: true,
                    blendMode: "NORMAL"
                },
                {
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.03 },
                    offset: { x: 0, y: 3 },
                    radius: 8,
                    spread: 0,
                    visible: true,
                    blendMode: "NORMAL"
                }
            ];

            singleRow.appendChild(await this.wrapWithCaption(
                singleCard,
                "20. Single Chat Card (White + Floaty)",
                "Thread Variant",
                false
            ));

            container.appendChild(singleRow);

            const singleReplyRow = this.createRow(container);
            const parentComment = await createThreadComment(
                "Esther Howard",
                "I recently purchased the grey blazer jacket for women, and I couldn't be happier with my purchase!",
                "2 weeks ago",
                "2 likes",
                "2 replies",
                "Hide replies"
            );

            const replyOne = await createThreadComment(
                "Cameron Williamson",
                "I've received multiple compliments on how stylish it looks.",
                "",
                "4 likes",
                undefined,
                undefined,
                true
            );
            const replyTwo = await createThreadComment(
                "Jenny Wilson",
                "It's versatile enough to wear to work or dress up for a night out.",
                "",
                "5 likes",
                undefined,
                undefined,
                true
            );

            const singleReplyBody = await cardApi.threadWithReplies({
                parentComment,
                replies: [replyOne, replyTwo],
                name: "Single Expanded Reply Body",
                gap: 16,
                repliesGap: 12,
                repliesIndent: 56,
                connectorStartY: 56,
                connectorX: 22,
                connectorColor: { r: 0.86, g: 0.89, b: 0.93 }
            });

            const singleReplyCard = await card.create({
                width: 620,
                variant: "none",
                cornerRadius: 16,
                paddingMode: "all-in-one",
                padding: 24,
                gap: 0,
                bodyNode: singleReplyBody
            });
            singleReplyCard.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
            singleReplyCard.strokes = [{ type: "SOLID", color: { r: 0.95, g: 0.96, b: 0.98 } }];
            singleReplyCard.strokeWeight = 1;
            singleReplyCard.effects = [
                {
                    type: "DROP_SHADOW",
                    color: { r: 0.05, g: 0.10, b: 0.20, a: 0.06 },
                    offset: { x: 0, y: 14 },
                    radius: 30,
                    spread: 0,
                    visible: true,
                    blendMode: "NORMAL"
                },
                {
                    type: "DROP_SHADOW",
                    color: { r: 0, g: 0, b: 0, a: 0.03 },
                    offset: { x: 0, y: 3 },
                    radius: 8,
                    spread: 0,
                    visible: true,
                    blendMode: "NORMAL"
                }
            ];

            singleReplyRow.appendChild(await this.wrapWithCaption(
                singleReplyCard,
                "21. Single Expanded Replies Card (White + Floaty)",
                "Thread Variant",
                false
            ));

            container.appendChild(singleReplyRow);
        });

        await this.addSection(root, "Disciplinary Cards", "Specialized UEFA cards with distinctive color accents.", async (container) => {
            const card = new Card();
            const row = this.createRow(container);

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 340,
                    height: 284,
                    variant: "disciplinary",
                    disciplinary: {
                        category: "INVESTIGATIONS",
                        title: "Olympiacos FC",
                        date: "04/09/2024",
                        themeColor: { r: 0.17, g: 0.35, b: 0.95 },
                        bodyText: "Art. 16(2)(a) DR\nThrowing of objects\n\nArt. 16(2)(c) DR\nLighting of fireworks"
                    }
                }),
                "22. Investigations Card",
            ));

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 340,
                    height: 284,
                    variant: "disciplinary",
                    disciplinary: {
                        category: "PROCEEDINGS",
                        title: "Olympique Lyonnais",
                        date: "04/09/2024",
                        themeColor: { r: 0.588, g: 0.400, b: 0.671 },
                        bodyText: "Art. 16(2)(a) DR\nThrowing of objects"
                    }
                }),
                "23. Proceedings Card",
            ));

            row.appendChild(await this.wrapWithCaption(
                await card.create({
                    width: 340,
                    height: 284,
                    variant: "disciplinary",
                    disciplinary: {
                        category: "DECISIONS",
                        title: "GNK Dinamo",
                        date: "04/09/2024",
                        themeColor: { r: 0.76, g: 0.17, b: 0.23 },
                        bodyText: "Art. 16(2)(c) DR\nLighting of fireworks\n\n• Fine: € 15,000"
                    }
                }),
                "24. Decisions Card",
            ));

            container.appendChild(row);
        });

        root.x = props.x ?? 0;
        root.y = props.y ?? 0;

        return root;
    }
}

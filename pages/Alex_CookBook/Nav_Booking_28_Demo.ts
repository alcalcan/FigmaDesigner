import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_28_Booking, Main_Navigation_28_BookingProps } from "../../components/Alex_CookBook/Main_Navigation_28_Booking/Main_Navigation_28_Booking";
import { UserObservationStickyNote } from "../../components/Miscellaneous/UserObservationStickyNote/UserObservationStickyNote";

interface VariantDefinition {
    title: string;
    props: Partial<Main_Navigation_28_BookingProps>;
    note: string;
}

export class Nav_Booking_28_Demo extends BaseComponent {

    async create(props: ComponentProps): Promise<SceneNode> {
        const desktopVariants: VariantDefinition[] = [
            // --- BASE / FULL MENU SECTION ---
            { title: "V1_Full Menu (Simple)", props: { platform: "desktop", showFullMenu: true }, note: "Full Menu - Simple Logo." },
            { title: "V2_Full Menu (Bordered)", props: { platform: "desktop", showFullMenu: true, showBorderedContainer: true }, note: "Full Menu - Bordered Container." },
            { title: "V3_Full Menu (Filled)", props: { platform: "desktop", showFullMenu: true, showFilledContainer: true, showBorder: false }, note: "Full Menu - Filled (No Border)." },
            { title: "V4_Full Menu (Gradient)", props: { platform: "desktop", showFullMenu: true, showGradientContainer: true, showBorder: false }, note: "Full Menu - Gradient (No Border)." },
            { title: "V5_Collapsed (Simple)", props: { platform: "desktop", showFullMenu: false }, note: "Collapsed Standard - Simple Logo." },
            { title: "V6_Collapsed (Bordered)", props: { platform: "desktop", showFullMenu: false, showBorderedContainer: true }, note: "Collapsed Standard - Bordered Container." },

            // --- GROUP A: CENTER + WITH MESSAGE (10 Styles) ---
            { title: "V7_Center+MSG (Style 1: Bdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Center+MSG S1." },
            { title: "V8_Center+MSG (Style 2: Bdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Center+MSG S2." },
            { title: "V9_Center+MSG (Style 3: Bdr+Fill 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Center+MSG S3." },
            { title: "V10_Center+MSG (Style 4: Bdr+Grad 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Center+MSG S4." },
            { title: "V11_Center+MSG (Style 5: Fill NoBdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: false, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Center+MSG S5." },
            { title: "V12_Center+MSG (Style 6: Grad NoBdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: false, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Center+MSG S6." },
            { title: "V13_Center+MSG (Style 7: Grad NoBdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: false, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Center+MSG S7." },
            { title: "V14_Center+MSG (Style 8: Bdr+Fill 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Center+MSG S8." },
            { title: "V15_Center+MSG (Style 9: Bdr+Grad 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Center+MSG S9." },
            { title: "V16_Center+MSG (Style 10: Fill NoBdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: false, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Center+MSG S10." },

            // --- GROUP B: CENTER + JUST LOGO (10 Styles) ---
            { title: "V17_Center+LOGO (Style 1: Bdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, logoRadius: 24 }, note: "Center+LOGO S1." },
            { title: "V18_Center+LOGO (Style 2: Bdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, logoRadius: 16 }, note: "Center+LOGO S2." },
            { title: "V19_Center+LOGO (Style 3: Bdr+Fill 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: true, logoRadius: 24 }, note: "Center+LOGO S3." },
            { title: "V20_Center+LOGO (Style 4: Bdr+Grad 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: true, logoRadius: 24 }, note: "Center+LOGO S4." },
            { title: "V21_Center+LOGO (Style 5: Fill NoBdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: false, logoRadius: 24 }, note: "Center+LOGO S5." },
            { title: "V22_Center+LOGO (Style 6: Grad NoBdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: false, logoRadius: 24 }, note: "Center+LOGO S6." },
            { title: "V23_Center+LOGO (Style 7: Grad NoBdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: false, logoRadius: 16 }, note: "Center+LOGO S7." },
            { title: "V24_Center+LOGO (Style 8: Bdr+Fill 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: true, logoRadius: 16 }, note: "Center+LOGO S8." },
            { title: "V25_Center+LOGO (Style 9: Bdr+Grad 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: true, logoRadius: 16 }, note: "Center+LOGO S9." },
            { title: "V26_Center+LOGO (Style 10: Fill NoBdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: false, logoRadius: 16 }, note: "Center+LOGO S10." },

            // --- GROUP C: RIGHT + WITH MESSAGE (10 Styles) ---
            { title: "V27_Right+MSG (Style 1: Bdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Right+MSG S1." },
            { title: "V28_Right+MSG (Style 2: Bdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Right+MSG S2." },
            { title: "V29_Right+MSG (Style 3: Bdr+Fill 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showFilledContainer: true, showBorder: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Right+MSG S3." },
            { title: "V30_Right+MSG (Style 4: Bdr+Grad 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showGradientContainer: true, showBorder: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Right+MSG S4." },
            { title: "V31_Right+MSG (Style 5: Fill NoBdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showFilledContainer: true, showBorder: false, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Right+MSG S5." },
            { title: "V32_Right+MSG (Style 6: Grad NoBdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showGradientContainer: true, showBorder: false, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 24 }, note: "Right+MSG S6." },
            { title: "V33_Right+MSG (Style 7: Grad NoBdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showGradientContainer: true, showBorder: false, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Right+MSG S7." },
            { title: "V34_Right+MSG (Style 8: Bdr+Fill 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showFilledContainer: true, showBorder: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Right+MSG S8." },
            { title: "V35_Right+MSG (Style 9: Bdr+Grad 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showGradientContainer: true, showBorder: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Right+MSG S9." },
            { title: "V36_Right+MSG (Style 10: Fill NoBdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showFilledContainer: true, showBorder: false, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true, logoRadius: 16 }, note: "Right+MSG S10." },

            // --- GROUP D: RIGHT + JUST LOGO (10 Styles) ---
            { title: "V37_Right+LOGO (Style 1: Bdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, logoRadius: 24 }, note: "Right+LOGO S1." },
            { title: "V38_Right+LOGO (Style 2: Bdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, logoRadius: 16 }, note: "Right+LOGO S2." },
            { title: "V39_Right+LOGO (Style 3: Bdr+Fill 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showFilledContainer: true, showBorder: true, logoRadius: 24 }, note: "Right+LOGO S3." },
            { title: "V40_Right+LOGO (Style 4: Bdr+Grad 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showGradientContainer: true, showBorder: true, logoRadius: 24 }, note: "Right+LOGO S4." },
            { title: "V41_Right+LOGO (Style 5: Fill NoBdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showFilledContainer: true, showBorder: false, logoRadius: 24 }, note: "Right+LOGO S5." },
            { title: "V42_Right+LOGO (Style 6: Grad NoBdr 24)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showGradientContainer: true, showBorder: false, logoRadius: 24 }, note: "Right+LOGO S6." },
            { title: "V43_Right+LOGO (Style 7: Grad NoBdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showGradientContainer: true, showBorder: false, logoRadius: 16 }, note: "Right+LOGO S7." },
            { title: "V44_Right+LOGO (Style 8: Bdr+Fill 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showFilledContainer: true, showBorder: true, logoRadius: 16 }, note: "Right+LOGO S8." },
            { title: "V45_Right+LOGO (Style 9: Bdr+Grad 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showGradientContainer: true, showBorder: true, logoRadius: 16 }, note: "Right+LOGO S9." },
            { title: "V46_Right+LOGO (Style 10: Fill NoBdr 16)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showFilledContainer: true, showBorder: false, logoRadius: 16 }, note: "Right+LOGO S10." }
        ];

        const mobileVariants: VariantDefinition[] = [
            // --- FULL MENU SECTION ---
            { title: "Variant 1_Mobile_Full Menu (Simple)", props: { platform: "mobile", showFullMenu: true }, note: "Mobile Full Menu - Simple." },
            { title: "Variant 2_Mobile_Full Menu (Bordered)", props: { platform: "mobile", showFullMenu: true, showBorderedContainer: true }, note: "Mobile Full Menu - Bordered." },

            // --- COLLAPSED SECTION - CENTER (LOGO RIGHT) ---
            { title: "Variant 3_Mobile_Center (Bordered + Message)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, message: "Unlock huge savings", showMarketingIcon: true }, note: "Mobile Center - Bordered." },
            { title: "Variant 4_Mobile_Center (Filled + Message)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: false, message: "Unlock huge savings", showMarketingIcon: true }, note: "Mobile Center - Filled." },
            { title: "Variant 5_Mobile_Center (Gradient + Message)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: false, message: "Unlock huge savings", showMarketingIcon: true }, note: "Mobile Center - Gradient." },

            // --- COLLAPSED SECTION - CENTER (LOGO LEFT) ---
            { title: "Variant 6_Mobile_Center (Logo Left + Bordered)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, message: "Unlock huge savings", showMarketingIcon: true, logoPosition: 'left' }, note: "Mobile Center - Logo Left - Bordered." },
            { title: "Variant 7_Mobile_Center (Logo Left + Filled)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: false, message: "Unlock huge savings", showMarketingIcon: true, logoPosition: 'left' }, note: "Mobile Center - Logo Left - Filled." },
            { title: "Variant 8_Mobile_Center (Logo Left + Gradient)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: false, message: "Unlock huge savings", showMarketingIcon: true, logoPosition: 'left' }, note: "Mobile Center - Logo Left - Gradient." },

            // --- COLLAPSED SECTION - CENTER (LOGO LEFT + RADIUS 16) ---
            { title: "Variant 9_Mobile_Center (Radius 16 + Logo Left + Bordered)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, message: "Unlock huge savings", showMarketingIcon: true, logoPosition: 'left', logoRadius: 16 }, note: "Mobile Center - Radius 16 - Logo Left - Bordered." },
            { title: "Variant 10_Mobile_Center (Radius 16 + Logo Left + Filled)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showFilledContainer: true, showBorder: false, message: "Unlock huge savings", showMarketingIcon: true, logoPosition: 'left', logoRadius: 16 }, note: "Mobile Center - Radius 16 - Logo Left - Filled." },
            { title: "Variant 11_Mobile_Center (Radius 16 + Logo Left + Gradient)", props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', showGradientContainer: true, showBorder: false, message: "Unlock huge savings", showMarketingIcon: true, logoPosition: 'left', logoRadius: 16 }, note: "Mobile Center - Radius 16 - Logo Left - Gradient." }
        ];

        const children: NodeDefinition[] = [];

        children.push({
            "type": "TEXT",
            "props": { "characters": "Booking 28 Navigation Case (Demo)", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        // DESKTOP SECTION
        children.push({
            "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
        });
        children.push({
            "type": "TEXT",
            "props": { "characters": "Desktop Variants", "fontSize": 36, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        desktopVariants.forEach((v, index) => {
            // Add Group Headers
            let groupHeader = "";
            if (v.title.includes("V1_")) groupHeader = "--- BASE / FULL MENU ---";
            if (v.title.includes("V7_")) groupHeader = "--- GROUP A: CENTER + WITH MESSAGE (10 Styles) ---";
            if (v.title.includes("V17_")) groupHeader = "--- GROUP B: CENTER + JUST LOGO (10 Styles) ---";
            if (v.title.includes("V27_")) groupHeader = "--- GROUP C: RIGHT + WITH MESSAGE (10 Styles) ---";
            if (v.title.includes("V37_")) groupHeader = "--- GROUP D: RIGHT + JUST LOGO (10 Styles) ---";

            if (groupHeader) {
                children.push({
                    "type": "FRAME", "name": "Divider", "layoutProps": { "height": 80, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
                });
                children.push({
                    "type": "TEXT",
                    "props": { "characters": groupHeader, "fontSize": 28, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                });
            }

            children.push(
                {
                    "type": "TEXT",
                    "props": { "characters": v.title, "fontSize": 24, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "COMPONENT", "name": v.title, "component": Main_Navigation_28_Booking,
                    "props": { ...v.props, name: v.title },
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                        "layoutAlign": "STRETCH",
                        "width": 1680
                    }
                },
                {
                    "type": "COMPONENT", "component": UserObservationStickyNote,
                    "props": { "text": v.note },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "FRAME", "name": "SmallSpacer", "layoutProps": { "height": 24, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
                }
            );
        });

        // MOBILE SECTION
        children.push({
            "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 100, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
        });
        children.push({
            "type": "TEXT",
            "props": { "characters": "Mobile Variants (Fixed 54px Header / 32px Branding Area)", "fontSize": 36, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        mobileVariants.forEach(v => {
            children.push(
                {
                    "type": "TEXT",
                    "props": { "characters": v.title, "fontSize": 24, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "COMPONENT", "name": v.title, "component": Main_Navigation_28_Booking,
                    "props": { ...v.props, name: v.title },
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                        "layoutAlign": "INHERIT",
                        "width": 375
                    }
                },
                {
                    "type": "COMPONENT", "component": UserObservationStickyNote,
                    "props": { "text": v.note },
                    "layoutProps": { "parentIsAutoLayout": true }
                }
            );
        });

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Nav_Booking_28_Demo",
            "props": {
                "layoutMode": "VERTICAL",
                "itemSpacing": 32,
                "paddingTop": 64, "paddingRight": 64, "paddingBottom": 64, "paddingLeft": 64,
                "fills": [{ "type": "SOLID", "color": { "r": 0.96, "g": 0.96, "b": 0.96 } }]
            },
            "layoutProps": { "width": 1800, "parentIsAutoLayout": false },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

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
            // --- FULL MENU SECTION ---
            { title: "Variant 1_Full Menu (Simple)", props: { platform: "desktop", showFullMenu: true }, note: "Full Menu - Simple Logo." },
            { title: "Variant 2_Full Menu (Bordered)", props: { platform: "desktop", showFullMenu: true, showBorderedContainer: true }, note: "Full Menu - Bordered Container." },
            { title: "Variant 3_Full Menu (Filled)", props: { platform: "desktop", showFullMenu: true, showBorderedContainer: true, showFilledContainer: true }, note: "Full Menu - Filled Container." },
            { title: "Variant 4_Full Menu (Gradient)", props: { platform: "desktop", showFullMenu: true, showBorderedContainer: true, showGradientContainer: true }, note: "Full Menu - Gradient Container." },
            { title: "Variant 5_Full Menu (Bordered + Message)", props: { platform: "desktop", showFullMenu: true, showBorderedContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Full Menu - Bordered + Message." },
            { title: "Variant 6_Full Menu (Filled + Message)", props: { platform: "desktop", showFullMenu: true, showBorderedContainer: true, showFilledContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Full Menu - Filled + Message." },
            { title: "Variant 7_Full Menu (Gradient + Message)", props: { platform: "desktop", showFullMenu: true, showBorderedContainer: true, showGradientContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Full Menu - Gradient + Message." },

            // --- COLLAPSED SECTION - STANDARD ---
            { title: "Variant 8_Standard (Simple)", props: { platform: "desktop", showFullMenu: false }, note: "Collapsed Standard - Simple Logo." },
            { title: "Variant 9_Standard (Bordered)", props: { platform: "desktop", showFullMenu: false, showBorderedContainer: true }, note: "Collapsed Standard - Bordered Container." },

            // --- COLLAPSED SECTION - CENTER ---
            { title: "Variant 10_Center (Simple)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center' }, note: "Collapsed Center - Simple Logo." },
            { title: "Variant 11_Center (Bordered)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true }, note: "Collapsed Center - Bordered." },
            { title: "Variant 12_Center (Filled)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, showFilledContainer: true }, note: "Collapsed Center - Filled." },
            { title: "Variant 13_Center (Gradient)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, showGradientContainer: true }, note: "Collapsed Center - Gradient." },
            { title: "Variant 14_Center (Bordered + Message)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Collapsed Center - Bordered + Message." },
            { title: "Variant 15_Center (Filled + Message)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, showFilledContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Collapsed Center - Filled + Message." },
            { title: "Variant 16_Center (Gradient + Message)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', showBorderedContainer: true, showGradientContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Collapsed Center - Gradient + Message." },

            // --- COLLAPSED SECTION - RIGHT ---
            { title: "Variant 17_Right (Simple)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right' }, note: "Collapsed Right - Simple Logo." },
            { title: "Variant 18_Right (Bordered)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true }, note: "Collapsed Right - Bordered." },
            { title: "Variant 19_Right (Filled)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, showFilledContainer: true }, note: "Collapsed Right - Filled." },
            { title: "Variant 20_Right (Gradient)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, showGradientContainer: true }, note: "Collapsed Right - Gradient." },
            { title: "Variant 21_Right (Bordered + Message)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Collapsed Right - Bordered + Message." },
            { title: "Variant 22_Right (Filled + Message)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, showFilledContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Collapsed Right - Filled + Message." },
            { title: "Variant 23_Right (Gradient + Message)", props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true, showGradientContainer: true, message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true }, note: "Collapsed Right - Gradient + Message." }
        ];

        const mobileVariants: VariantDefinition[] = [
            // FULL MENU
            {
                title: "Variant 1_Mobile_Full Menu (Simple)",
                props: { platform: "mobile", showFullMenu: true },
                note: "Mobile Full Menu - Simple Logo."
            },
            {
                title: "Variant 2_Mobile_Full Menu (Bordered)",
                props: { platform: "mobile", showFullMenu: true, showBorderedContainer: true },
                note: "Mobile Full Menu - Bordered Container."
            },
            {
                title: "Variant 3_Mobile_Full Menu (Filled)",
                props: { platform: "mobile", showFullMenu: true, showBorderedContainer: true, showFilledContainer: true },
                note: "Mobile Full Menu - Filled Container."
            },
            {
                title: "Variant 4_Mobile_Full Menu (Gradient)",
                props: { platform: "mobile", showFullMenu: true, showBorderedContainer: true, showGradientContainer: true },
                note: "Mobile Full Menu - Gradient Container."
            },

            // COLLAPSED
            {
                title: "Variant 5_Mobile_Standard (Simple)",
                props: { platform: "mobile", showFullMenu: false },
                note: "Mobile Collapsed (Standard)."
            },
            {
                title: "Variant 6_Mobile_Center (Simple)",
                props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center' },
                note: "Mobile Collapsed (Center) - Simple."
            },
            {
                title: "Variant 7_Mobile_Center (Bordered + Message)",
                props: {
                    platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center',
                    showBorderedContainer: true, message: "Unlock huge savings", showMarketingIcon: true
                },
                note: "Mobile Centered - Bordered + Message."
            },
            {
                title: "Variant 8_Mobile_Center (Filled + Message)",
                props: {
                    platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center',
                    showBorderedContainer: true, showFilledContainer: true, message: "Unlock huge savings", showMarketingIcon: true
                },
                note: "Mobile Centered - Filled + Message."
            },
            {
                title: "Variant 9_Mobile_Center (Gradient + Message)",
                props: {
                    platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center',
                    showBorderedContainer: true, showGradientContainer: true, message: "Unlock huge savings", showMarketingIcon: true
                },
                note: "Mobile Centered - Gradient + Message."
            },
            {
                title: "Variant 10_Mobile_Right (Bordered)",
                props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-right', showBorderedContainer: true },
                note: "Mobile Right - Bordered."
            }
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

        desktopVariants.forEach(v => {
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
                }
            );
        });

        // MOBILE SECTION
        children.push({
            "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 80, "parentIsAutoLayout": true }, "props": { "layoutMode": "VERTICAL" }
        });
        children.push({
            "type": "TEXT",
            "props": { "characters": "Mobile Variants", "fontSize": 36, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
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

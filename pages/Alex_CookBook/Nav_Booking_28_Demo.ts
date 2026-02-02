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
            {
                title: "Variant 1_Desktop_Full Menu (Standard)",
                props: { platform: "desktop", showFullMenu: true },
                note: "Standard Desktop view. Shows all menu items. Layout: Euro Left, Menu Center (Grow), Booking Right."
            },
            {
                title: "Variant 2_Desktop_Full Menu (Message)",
                props: {
                    platform: "desktop", showFullMenu: true,
                    message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true
                },
                note: "Standard Desktop (Full Menu) + Marketing Message. Layout: Euro Left, Menu Center, [Message + Logo] Right."
            },
            {
                title: "Variant 3_Desktop_Collapsed (Menu Only)",
                props: { platform: "desktop", showFullMenu: false },
                note: "Collapsed Desktop view. Layout: Euro Left, Menu Button Center, Booking Right."
            },
            {
                title: "Variant 4_Desktop_Collapsed (Booking Center)",
                props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center' },
                note: "Booking Logo Centered. Layout: Euro Left, Booking Center, Menu Button Right."
            },
            {
                title: "Variant 5_Desktop_Collapsed (Booking Center - Color)",
                props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', logoVariant: 'color' },
                note: "Booking Logo Centered (Color Variant). Layout: Euro Left, Booking Center, Menu Button Right."
            },
            {
                title: "Variant 6_Desktop_Collapsed (Booking Right)",
                props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right' },
                note: "Booking Logo Next to Menu. Layout: Euro Left, Spacer, Booking + Menu Button Right."
            },
            {
                title: "Variant 7_Desktop_Collapsed (Booking Center - Message White)",
                props: {
                    platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center', logoVariant: 'white',
                    message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true
                },
                note: "Booking Logo Centered (White) + Marketing Message. Layout: Euro Left, [Booking + Message] Center, Menu Button Right."
            },
            {
                title: "Variant 8_Desktop_Collapsed (Booking Right - Message White)",
                props: {
                    platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right', logoVariant: 'white',
                    message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true
                },
                note: "Booking Logo Right + Marketing Message. Layout: Euro Left, Spacer, [Message + Logo] Right, Menu."
            },
            {
                title: "Variant 9_Desktop_Full Menu (Bordered)",
                props: {
                    platform: "desktop", showFullMenu: true,
                    showBorderedContainer: true
                },
                note: "Standard Desktop (Full Menu) + Bordered Logo Container."
            },
            {
                title: "Variant 10_Desktop_Collapsed (Center - Bordered)",
                props: {
                    platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center',
                    showBorderedContainer: true
                },
                note: "Booking Center Layout + Bordered Logo Container."
            },
            {
                title: "Variant 11_Desktop_Collapsed (Center - Bordered + Message)",
                props: {
                    platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center',
                    showBorderedContainer: true,
                    message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true
                },
                note: "Booking Center Layout + Bordered Container wrapping [Message + Logo]."
            },
            {
                title: "Variant 12_Desktop_Collapsed (Right - Bordered + Message)",
                props: {
                    platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right',
                    showBorderedContainer: true,
                    message: "Unlock huge savings – up to 15% with Genius", showMarketingIcon: true
                },
                note: "Booking Right Layout + Bordered Container wrapping [Message + Logo]."
            }
        ];

        const mobileVariants: VariantDefinition[] = [
            {
                title: "Variant 1_Mobile_Full Menu (Standard)",
                props: { platform: "mobile", showFullMenu: true },
                note: "Standard Mobile view. Layout: Euro Left, Booking Left, Spacer, Menu Right."
            },
            {
                title: "Variant 2_Mobile_Collapsed (Menu Only)",
                props: { platform: "mobile", showFullMenu: false },
                note: "Collapsed Mobile view. Layout: Euro Left, Booking Left, Spacer, Menu Right."
            },
            {
                title: "Variant 3_Mobile_Collapsed (Booking Center)",
                props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center' },
                note: "Booking Logo Centered. Layout: Euro Left, Booking Center, Menu Button Right."
            },
            {
                title: "Variant 4_Mobile_Collapsed (Booking Center - Color)",
                props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', logoVariant: 'color' },
                note: "Booking Logo Centered (Color Variant). Layout: Euro Left, Booking Center, Menu Button Right."
            },
            {
                title: "Variant 5_Mobile_Collapsed (Booking Right)",
                props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-right' },
                note: "Booking Logo Next to Menu. Layout: Euro Left, Spacer, Booking + Menu Button Right."
            },
            {
                title: "Variant 6_Mobile_Collapsed (Booking Center - Message White)",
                props: {
                    platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center', logoVariant: 'white',
                    message: "Unlock huge savings", showMarketingIcon: true
                },
                note: "Booking Logo Centered (White) + Marketing Message. Mobile shortened message."
            },
            {
                title: "Variant 7_Mobile_Collapsed (Booking Right - Message White)",
                props: {
                    platform: "mobile", showFullMenu: false, brandingLayout: 'booking-right', logoVariant: 'white',
                    message: "Unlock huge savings", showMarketingIcon: true
                },
                note: "Booking Logo Right + Marketing Message. Mobile Layout: Euro Left, Spacer, [Message + Logo] Right."
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

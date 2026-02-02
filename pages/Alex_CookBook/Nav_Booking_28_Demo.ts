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
        const variants: VariantDefinition[] = [
            // Standard Layouts
            {
                title: "Desktop - Full Menu (Standard)",
                props: { platform: "desktop", showFullMenu: true },
                note: "Standard Desktop view. Shows all menu items. Layout: Euro Left, Menu Center (Grow), Booking Right."
            },
            {
                title: "Desktop - Collapsed (Menu Only)",
                props: { platform: "desktop", showFullMenu: false },
                note: "Collapsed Desktop view. Layout: Euro Left, Menu Button Center, Booking Right."
            },
            {
                title: "Mobile - Full Menu (Standard)",
                props: { platform: "mobile", showFullMenu: true },
                note: "Standard Mobile view. Layout: Euro Left, Menu Center (Grow), Booking Right."
            },
            {
                title: "Mobile - Collapsed (Menu Only)",
                props: { platform: "mobile", showFullMenu: false },
                note: "Collapsed Mobile view. Layout: Euro Left, Menu Button Center, Booking Right."
            },

            // New Layout: Booking Center, Menu Right
            {
                title: "Desktop - Collapsed (Booking Center)",
                props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-center' },
                note: "Booking Logo Centered. Layout: Euro Left, Booking Center, Menu Button Right."
            },
            {
                title: "Mobile - Collapsed (Booking Center)",
                props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-center' },
                note: "Booking Logo Centered. Layout: Euro Left, Booking Center, Menu Button Right."
            },

            // New Layout: Booking Right (Next to Menu)
            {
                title: "Desktop - Collapsed (Booking Right)",
                props: { platform: "desktop", showFullMenu: false, brandingLayout: 'booking-right' },
                note: "Booking Logo Next to Menu. Layout: Euro Left, Spacer, Booking + Menu Button Right."
            },
            {
                title: "Mobile - Collapsed (Booking Right)",
                props: { platform: "mobile", showFullMenu: false, brandingLayout: 'booking-right' },
                note: "Booking Logo Next to Menu. Layout: Euro Left, Spacer, Booking + Menu Button Right."
            }
        ];

        const children: NodeDefinition[] = [];

        children.push({
            "type": "TEXT",
            "props": { "characters": "Booking 28 Navigation Case (Demo)", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        variants.forEach(v => {
            const isMobile = v.props.platform === 'mobile';

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
                        "layoutAlign": isMobile ? "INHERIT" : "STRETCH",
                        "width": isMobile ? 375 : 1680
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
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "counterAxisAlignItems": "MIN",
                "itemSpacing": 24,
                "paddingTop": 60,
                "paddingRight": 60,
                "paddingBottom": 60,
                "paddingLeft": 60,
                "fills": [{ "type": "SOLID", "color": { "r": 0.95, "g": 0.95, "b": 0.97 } }]
            },
            "layoutProps": { "parentIsAutoLayout": false, "width": 1680 },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

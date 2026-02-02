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
            {
                title: "Booking 28 - Unified Desktop",
                props: { platform: "desktop" },
                note: "Unified Booking component in desktop mode. Uses 'Manrope' font, Booking colors, and 'BookingLogo_color' (White variant). Fills 1680px."
            },
            {
                title: "Booking 28 - Unified Mobile",
                props: { platform: "mobile" },
                note: "Unified Booking component in mobile mode (375px)."
            }
        ];

        const children: NodeDefinition[] = [];

        children.push({
            "type": "TEXT",
            "props": { "characters": "Booking 28 Navigation Case (Demo)", "fontSize": 48, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        variants.forEach(v => {
            const isMobile = v.props.platform === 'mobile';

            children.push(
                {
                    "type": "TEXT",
                    "props": { "characters": v.title, "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
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

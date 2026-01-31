import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_Booking } from "../../components/Alex_CookBook/Main_Navigation_Booking/Main_Navigation_Booking";

export class NavBookingDemo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "NavBookingDemo",
            "props": {
                "layoutMode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "AUTO",
                "itemSpacing": 40,
                "paddingTop": 40,
                "paddingRight": 40,
                "paddingBottom": 40,
                "paddingLeft": 40,
                "fills": [{ "type": "SOLID", "color": { "r": 0.95, "g": 0.95, "b": 0.95 } }]
            },
            "layoutProps": { "parentIsAutoLayout": false },
            "children": [
                {
                    "type": "COMPONENT",
                    "name": "LTR Gradient + Color Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "left-to-right", "logoVariant": "color" }
                },
                {
                    "type": "COMPONENT",
                    "name": "RTL Gradient + Color Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "right-to-left", "logoVariant": "color" }
                },
                {
                    "type": "COMPONENT",
                    "name": "LTR Gradient + White Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "left-to-right", "logoVariant": "white" }
                },
                {
                    "type": "COMPONENT",
                    "name": "RTL Gradient + White Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "right-to-left", "logoVariant": "white" }
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

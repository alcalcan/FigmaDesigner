import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_28_Booking } from "../../components/UEFA_web/Main_Navigation_28_Booking/Main_Navigation_28_Booking";

export class Nav_Booking_Simplified_Demo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME", "name": "Nav_Booking_Simplified_Demo",
            "props": {
                "layoutMode": "VERTICAL", "itemSpacing": 40,
                "paddingTop": 64, "paddingRight": 64, "paddingBottom": 64, "paddingLeft": 64,
                "fills": [{ "type": "SOLID", "color": { "r": 0.96, "g": 0.96, "b": 0.96 } }]
            },
            "layoutProps": { "width": 1000, "height": 800, "parentIsAutoLayout": true },
            "children": [
                {
                    "type": "FRAME", "name": "Gradient Variant",
                    "props": { "layoutMode": "VERTICAL", "fills": [] },
                    "children": [
                        {
                            "type": "COMPONENT", "name": "Booking Gradient",
                            "component": Main_Navigation_28_Booking,
                            "props": {
                                "platform": "desktop",
                                "brandingLayout": "booking-center",
                                "showGradientContainer": true,
                                "showBorder": true,
                                "logoRadius": 24,
                                "message": "Unlock huge savings"
                            },
                        }
                    ]
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0; root.y = props.y ?? 0;
        return root;
    }
}

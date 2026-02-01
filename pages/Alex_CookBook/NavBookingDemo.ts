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
                "counterAxisSizingMode": "FIXED",
                "itemSpacing": 40,
                "paddingTop": 40,
                "paddingRight": 40,
                "paddingBottom": 40,
                "paddingLeft": 40,
                "fills": [{ "type": "SOLID", "color": { "r": 0.95, "g": 0.95, "b": 0.95 } }]
            },
            "layoutProps": { "parentIsAutoLayout": false, "width": 1680 },
            "children": [
                {
                    "type": "COMPONENT",
                    "name": "LTR Gradient + Color Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "left-to-right", "logoVariant": "color" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "RTL Gradient + Color Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "right-to-left", "logoVariant": "color" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "LTR Gradient + White Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "left-to-right", "logoVariant": "white" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "RTL Gradient + White Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "right-to-left", "logoVariant": "white" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Floating Variant + Color Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "variant": "floating", "logoVariant": "color", "gradientDirection": "right-to-left" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Floating Variant + White Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "variant": "floating", "logoVariant": "white", "gradientDirection": "right-to-left" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Centered Floating Variant",
                    "component": Main_Navigation_Booking,
                    "props": { "variant": "centered-floating", "logoVariant": "color", "gradientDirection": "right-to-left" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Centered Floating + White Logo",
                    "component": Main_Navigation_Booking,
                    "props": { "variant": "centered-floating", "logoVariant": "white", "gradientDirection": "right-to-left" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Full-Width Centered Variant",
                    "component": Main_Navigation_Booking,
                    "props": { "variant": "full-width-centered", "logoVariant": "white", "gradientDirection": "right-to-left" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Marketing Message Variant",
                    "component": Main_Navigation_Booking,
                    "props": {
                        "variant": "full-width-centered-message",
                        "logoVariant": "white",
                        "gradientDirection": "right-to-left",
                        "pillContentAlignment": "center",
                        "message": "Unlock huge savings – up to 15% with Genius"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Marketing Message + Icon Variant",
                    "component": Main_Navigation_Booking,
                    "props": {
                        "variant": "full-width-centered-message",
                        "showMarketingIcon": true,
                        "logoVariant": "white",
                        "gradientDirection": "right-to-left",
                        "pillContentAlignment": "right",
                        "message": "Unlock huge savings – up to 15% with Genius"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Custom Centered Pill (800px)",
                    "component": Main_Navigation_Booking,
                    "props": {
                        "variant": "full-width-centered-message",
                        "showMarketingIcon": true,
                        "pillCornerRadius": 24,
                        "pillWidth": 800,
                        "pillContentAlignment": "right",
                        "logoVariant": "white",
                        "gradientDirection": "right-to-left",
                        "message": "Unlock huge savings – up to 15% with Genius"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                },
                {
                    "type": "COMPONENT",
                    "name": "Right Aligned Pill (800px)",
                    "component": Main_Navigation_Booking,
                    "props": {
                        "variant": "full-width-centered-message",
                        "showMarketingIcon": true,
                        "pillCornerRadius": 24,
                        "pillWidth": 800,
                        "pillAlignment": "right",
                        "pillContentAlignment": "right",
                        "logoVariant": "white",
                        "gradientDirection": "right-to-left",
                        "message": "Unlock huge savings – up to 15% with Genius"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "layoutGrow": 0, "width": 1680 }
                }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_Booking } from "../../components/Alex_CookBook/Main_Navigation_Booking/Main_Navigation_Booking";
import { UserObservationStickyNote } from "../../components/Miscellaneous/UserObservationStickyNote/UserObservationStickyNote";

export class NavBookingDemo extends BaseComponent {

    async create(props: ComponentProps): Promise<SceneNode> {
        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "NavBookingDemo",
            "props": {
                "layoutMode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "itemSpacing": 24, // Tighter spacing for interleaved feel
                "paddingTop": 60,
                "paddingRight": 60,
                "paddingBottom": 60,
                "paddingLeft": 60,
                "fills": [{ "type": "SOLID", "color": { "r": 0.92, "g": 0.92, "b": 0.92 } }]
            },
            "layoutProps": { "parentIsAutoLayout": false, "width": 1680 },
            "children": [
                // 1
                { "type": "TEXT", "props": { "characters": "Variant01_Standard (Solid Original Color)", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant01_Standard (Solid Original Color)", "component": Main_Navigation_Booking,
                    "props": { "showGradient": false, "logoVariant": "color", "name": "Variant01_Standard (Solid Original Color)" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Baseline Reference: This variant uses the original solid navigation background from Booking.com. UX Observation: While it provides a familiar brand context, the Color logo against the solid background highlights why a gradient or a High-Contrast White variant is often preferred for modern, high-legibility UI headers." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 2
                { "type": "TEXT", "props": { "characters": "Variant02_Standard RTL", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant02_Standard RTL", "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "right-to-left", "logoVariant": "color", "name": "Variant02_Standard RTL" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Observation: The color logo's interaction with the inverted darker gradient further emphasizes the contrast threshold challenges. The darker gradient is a strategic attempt to replicate the primary brand color while testing the legibility limits of the standard logo." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 3
                { "type": "TEXT", "props": { "characters": "Variant03_White Logo LTR", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant03_White Logo LTR", "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "left-to-right", "logoVariant": "white", "name": "Variant03_White Logo LTR" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Strategic Accessibility: This variant achieves peak cognitive fluency by combining a high-contrast white logo with an ascending diagonal scanning path. The eye naturally moves from the viewport's core toward the top-right brand anchor, where the identity is co-located with primary functional elements (Login/Search) to minimize saccadic eye movements and streamline the conversion path." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 4
                { "type": "TEXT", "props": { "characters": "Variant04_White Logo RTL", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant04_White Logo RTL", "component": Main_Navigation_Booking,
                    "props": { "gradientDirection": "right-to-left", "logoVariant": "white", "name": "Variant04_White Logo RTL" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Integrated Branding Pivot: This variant explores the emphasis of the brand presence within the RTL layout. The dynamic gradient flow from right-to-left ensures a seamless integration with the functional zone, allowing the brand identity to act as a high-visibility anchor for user scanning patterns." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 5
                { "type": "TEXT", "props": { "characters": "Variant05_Floating Color", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant05_Floating Color", "component": Main_Navigation_Booking,
                    "props": { "variant": "floating", "logoVariant": "color", "gradientDirection": "right-to-left", "name": "Variant05_Floating Color" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Physical Button Affordance: The transition to a floating state introduces a strong tactile 'button' mental model. Despite the inherent contrast challenges of the color logo on blue, this configuration transforms the navigation from a static header into a distinct interactive element that invites direct engagement." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 6
                { "type": "TEXT", "props": { "characters": "Variant06_Floating White", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant06_Floating White", "component": Main_Navigation_Booking,
                    "props": { "variant": "floating", "logoVariant": "white", "gradientDirection": "right-to-left", "name": "Variant06_Floating White" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "High-Contrast Affordance: Combines the interactive 'button' mental model with maximum legibility. This version is optimized for complex page backgrounds where the navigation must visually stand out as a primary action anchor." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 7
                { "type": "TEXT", "props": { "characters": "Variant07_Center Floating", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant07_Center Floating", "component": Main_Navigation_Booking,
                    "props": { "variant": "centered-floating", "logoVariant": "color", "gradientDirection": "right-to-left", "name": "Variant07_Center Floating" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Diagnostic Contrast Failure: This centered configuration serves as a visual benchmark for baseline contrast parity failure. Using the color logo against the primary blue gradient demonstrates why high-contrast white alternatives are a functional necessity in high-impact symmetrical layouts." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 8
                { "type": "TEXT", "props": { "characters": "Variant08_Centered Floating White", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant08_Centered Floating White", "component": Main_Navigation_Booking,
                    "props": { "variant": "centered-floating", "logoVariant": "white", "gradientDirection": "right-to-left", "name": "Variant08_Centered Floating White" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Negative Space Optimization: By incorporating increased negative space around the brand island, we fulfill the requirement for a more 'open' and 'premium' layout. This additional breathing room emphasizes the navigation's importance and clarity." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 9
                { "type": "TEXT", "props": { "characters": "Variant09_Full-Width Centered", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant09_Full-Width Centered", "component": Main_Navigation_Booking,
                    "props": { "variant": "full-width-centered", "logoVariant": "white", "gradientDirection": "right-to-left", "name": "Variant09_Full-Width Centered" },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Geometric Roundness & Entry: Introducing the Full-Width variant with softer geometric patterns. The extended branded area serves as an inviting entry point, creating a welcoming brand embrace that guides the user toward the functional edges." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 10
                { "type": "TEXT", "props": { "characters": "Variant10_Message Focused (Centered Content)", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant10_Message Focused (Centered Content)", "component": Main_Navigation_Booking,
                    "props": {
                        "variant": "full-width-centered-message",
                        "logoVariant": "white",
                        "gradientDirection": "right-to-left",
                        "pillContentAlignment": "center",
                        "message": "Unlock huge savings – up to 15% with Genius",
                        "name": "Variant10_Message Focused (Centered Content)"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Strategic Marketing Entry: This variant focuses on the core intent of 'Introducing a marketing message' directly within the brand pill. Regardless of the specific text, this architectural choice established immediate brand value and program awareness before the user initiates their journey." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 11
                { "type": "TEXT", "props": { "characters": "Variant11_Message + Icon (Right Content)", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant11_Message + Icon (Right Content)", "component": Main_Navigation_Booking,
                    "props": {
                        "variant": "full-width-centered-message",
                        "showMarketingIcon": true,
                        "logoVariant": "white",
                        "gradientDirection": "right-to-left",
                        "pillContentAlignment": "right",
                        "message": "Unlock huge savings – up to 15% with Genius",
                        "name": "Variant11_Message + Icon (Right Content)"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Interactive Conversion Anchor: By introducing a chevron (marketing icon), the message is elevated from static text to an interactive CTA. This visual cue signifies a distinct entry point for deeper program exploration, potentially supported by engaging micro-animations." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 12
                { "type": "TEXT", "props": { "characters": "Variant12_Identity Island (800px)", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant12_Identity Island (800px)", "component": Main_Navigation_Booking,
                    "props": {
                        "variant": "full-width-centered-message",
                        "showMarketingIcon": true,
                        "pillCornerRadius": 24,
                        "pillWidth": 800,
                        "pillContentAlignment": "right",
                        "logoVariant": "white",
                        "gradientDirection": "right-to-left",
                        "message": "Unlock huge savings – up to 15% with Genius",
                        "name": "Variant12_Identity Island (800px)"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Focused Identity Island + CTA: Combining the 800px 'Identity Island' with the marketing chevron creates a stable, high-value anchor. The chevron acts as a directional guide, inviting the user to explore the 'Genius' program while maintaining a compact, centered brand presence." }, "layoutProps": { "parentIsAutoLayout": true } },

                // 13
                { "type": "TEXT", "props": { "characters": "Variant13_Functional Pivot (800px Right)", "fontSize": 24, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] }, "layoutProps": { "parentIsAutoLayout": true } },
                {
                    "type": "COMPONENT", "name": "Variant13_Functional Pivot (800px Right)", "component": Main_Navigation_Booking,
                    "props": {
                        "variant": "full-width-centered-message",
                        "showMarketingIcon": true,
                        "pillCornerRadius": 24,
                        "pillWidth": 800,
                        "pillAlignment": "right",
                        "pillContentAlignment": "right",
                        "logoVariant": "white",
                        "gradientDirection": "right-to-left",
                        "message": "Unlock huge savings – up to 15% with Genius",
                        "name": "Variant13_Functional Pivot (800px Right)"
                    },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                { "type": "COMPONENT", "component": UserObservationStickyNote, "props": { "text": "Functional Pivot + Interactive Marketing: This configuration pushes the interactive marketing unit toward the primary functional zone (Login/Search). This alignment reduces eye-travel for users already in a 'transactional' mindset, effectively co-locating brand value with utility." } }
            ]
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}


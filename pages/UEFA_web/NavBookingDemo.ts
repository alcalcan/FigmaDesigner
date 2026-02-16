import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_Booking, Main_Navigation_BookingProps } from "../../components/UEFA_web/Main_Navigation_Booking/Main_Navigation_Booking";
import { UserObservationStickyNote } from "../../components/Miscellaneous/UserObservationStickyNote/UserObservationStickyNote";

interface VariantDefinition {
    title: string;
    props: Partial<Main_Navigation_BookingProps>;
    note: string;
}

export class NavBookingDemo extends BaseComponent {

    async create(props: ComponentProps): Promise<SceneNode> {
        const variants: VariantDefinition[] = [
            {
                title: "Variant01_Standard (Solid Original Color)",
                props: { showGradient: false, logoVariant: "color" },
                note: "Baseline Reference: This variant uses the original solid navigation background from Booking.com. UX Observation: While it provides a familiar brand context, the Color logo against the solid background highlights why a gradient or a High-Contrast White variant is often preferred for modern, high-legibility UI headers."
            },
            {
                title: "Variant02_Standard RTL",
                props: { gradientDirection: "right-to-left", logoVariant: "color" },
                note: "Observation: The color logo's interaction with the inverted darker gradient further emphasizes the contrast threshold challenges. The darker gradient is a strategic attempt to replicate the primary brand color while testing the legibility limits of the standard logo."
            },
            {
                title: "Variant03_White Logo LTR",
                props: { gradientDirection: "left-to-right", logoVariant: "white" },
                note: "Strategic Accessibility: This variant achieves peak cognitive fluency by combining a high-contrast white logo with an ascending diagonal scanning path. The eye naturally moves from the viewport's core toward the top-right brand anchor, where the identity is co-located with primary functional elements (Login/Search) to minimize saccadic eye movements and streamline the conversion path."
            },
            {
                title: "Variant04_White Logo RTL",
                props: { gradientDirection: "right-to-left", logoVariant: "white" },
                note: "Integrated Branding Pivot: This variant explores the emphasis of the brand presence within the RTL layout. The dynamic gradient flow from right-to-left ensures a seamless integration with the functional zone, allowing the brand identity to act as a high-visibility anchor for user scanning patterns."
            },
            {
                title: "Variant05_Floating Color",
                props: { variant: "floating", logoVariant: "color", gradientDirection: "right-to-left" },
                note: "Physical Button Affordance: The transition to a floating state introduces a strong tactile 'button' mental model. Despite the inherent contrast challenges of the color logo on blue, this configuration transforms the navigation from a static header into a distinct interactive element that invites direct engagement."
            },
            {
                title: "Variant06_Floating White",
                props: { variant: "floating", logoVariant: "white", gradientDirection: "right-to-left" },
                note: "High-Contrast Affordance: Combines the interactive 'button' mental model with maximum legibility. This version is optimized for complex page backgrounds where the navigation must visually stand out as a primary action anchor."
            },
            {
                title: "Variant07_Center Floating",
                props: { variant: "centered-floating", logoVariant: "color", gradientDirection: "right-to-left" },
                note: "Diagnostic Contrast Failure: This centered configuration serves as a visual benchmark for baseline contrast parity failure. Using the color logo against the primary blue gradient demonstrates why high-contrast white alternatives are a functional necessity in high-impact symmetrical layouts."
            },
            {
                title: "Variant08_Centered Floating White",
                props: { variant: "centered-floating", logoVariant: "white", gradientDirection: "right-to-left" },
                note: "Negative Space Optimization: By incorporating increased negative space around the brand island, we fulfill the requirement for a more 'open' and 'premium' layout. This additional breathing room emphasizes the navigation's importance and clarity."
            },
            {
                title: "Variant09_Full-Width Centered",
                props: { variant: "full-width-centered", logoVariant: "white", gradientDirection: "right-to-left" },
                note: "Geometric Roundness & Entry: Introducing the Full-Width variant with softer geometric patterns. The extended branded area serves as an inviting entry point, creating a welcoming brand embrace that guides the user toward the functional edges."
            },
            {
                title: "Variant10_Message + Icon (Centered Content)",
                props: {
                    variant: "full-width-centered-message",
                    showMarketingIcon: true,
                    logoVariant: "white",
                    gradientDirection: "right-to-left",
                    pillContentAlignment: "center",
                    message: "Unlock huge savings – up to 15% with Genius"
                },
                note: "Interactive Conversion Anchor (Centered): By introducing a chevron (marketing icon), the message is elevated from static text to an interactive CTA. This centered configuration establishes brand value while inviting deeper exploration, providing a symmetrical alternative to the right-aligned Variant 11."
            },
            {
                title: "Variant11_Message + Icon (Right Content)",
                props: {
                    variant: "full-width-centered-message",
                    showMarketingIcon: true,
                    logoVariant: "white",
                    gradientDirection: "right-to-left",
                    pillContentAlignment: "right",
                    message: "Unlock huge savings – up to 15% with Genius"
                },
                note: "Interactive Conversion Anchor: By introducing a chevron (marketing icon), the message is elevated from static text to an interactive CTA. This visual cue signifies a distinct entry point for deeper program exploration, potentially supported by engaging micro-animations."
            },
            {
                title: "Variant12_Identity Island (800px)",
                props: {
                    variant: "full-width-centered-message",
                    showMarketingIcon: true,
                    pillCornerRadius: 24,
                    pillWidth: 800,
                    pillContentAlignment: "right",
                    logoVariant: "white",
                    gradientDirection: "right-to-left",
                    message: "Unlock huge savings – up to 15% with Genius"
                },
                note: "Focused Identity Island + CTA: Combining the 800px 'Identity Island' with the marketing chevron creates a stable, high-value anchor. The chevron acts as a directional guide, inviting the user to explore the 'Genius' program while maintaining a compact, centered brand presence."
            },
            {
                title: "Variant13_Functional Pivot (800px Right)",
                props: {
                    variant: "full-width-centered-message",
                    showMarketingIcon: true,
                    pillCornerRadius: 24,
                    pillWidth: 800,
                    pillAlignment: "right",
                    pillContentAlignment: "right",
                    logoVariant: "white",
                    gradientDirection: "right-to-left",
                    message: "Unlock huge savings – up to 15% with Genius"
                },
                note: "Functional Pivot + Interactive Marketing: This configuration pushes the interactive marketing unit toward the primary functional zone (Login/Search). This alignment reduces eye-travel for users already in a 'transactional' mindset, effectively co-locating brand value with utility."
            }
        ];

        const children: NodeDefinition[] = [];

        // 1. Desktop Section
        children.push({
            "type": "TEXT",
            "props": { "characters": "Desktop Variants (1680px)", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0, "b": 0 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        variants.forEach(v => {
            children.push(
                {
                    "type": "TEXT",
                    "props": { "characters": v.title, "fontSize": 24, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "COMPONENT", "name": v.title, "component": Main_Navigation_Booking,
                    "props": { ...v.props, name: v.title, device: 'desktop' },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
                },
                {
                    "type": "COMPONENT", "component": UserObservationStickyNote,
                    "props": { "text": v.note },
                    "layoutProps": { "parentIsAutoLayout": true }
                }
            );
        });



        // 2. Mobile Section
        children.push({
            "type": "TEXT",
            "props": { "characters": "Mobile Selection (375px)", "fontSize": 48, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0, "b": 0 } }] },
            "layoutProps": { "parentIsAutoLayout": true }
        });

        const mobileVariants: VariantDefinition[] = [
            variants.find(v => v.title === "Variant04_White Logo RTL")!,
            {
                ...variants.find(v => v.title === "Variant06_Floating White")!,
                title: "Variant06_Floating White (Full-Width Mobile)",
                props: {
                    ...variants.find(v => v.title === "Variant06_Floating White")!.props,
                    variant: "full-width-centered",
                    pillWidth: "fill",
                    pillContentAlignment: "center",
                    hideLoginLabel: true
                }
            }
        ];

        mobileVariants.forEach(v => {
            const mobileTitle = v.title.includes("(Centered Mobile)") ? v.title : `${v.title} (Mobile)`;
            children.push(
                {
                    "type": "TEXT",
                    "props": { "characters": mobileTitle, "fontSize": 24, "font": { "family": "Inter", "style": "Bold" }, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.33, "b": 0.72 } }] },
                    "layoutProps": { "parentIsAutoLayout": true }
                },
                {
                    "type": "COMPONENT", "name": mobileTitle, "component": Main_Navigation_Booking,
                    "props": { ...v.props, name: mobileTitle, device: 'mobile' },
                    "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "INHERIT", "width": 375 } // Explicit width for mobile
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
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}

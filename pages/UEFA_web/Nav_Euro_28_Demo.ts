import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_28, Main_Navigation_28Props } from "../../components/UEFA_web/Main_Navigation_28/Main_Navigation_28";
import { UserObservationStickyNote } from "../../components/Miscellaneous/UserObservationStickyNote/UserObservationStickyNote";

interface VariantDefinition {
    title: string;
    props: Partial<Main_Navigation_28Props>;
    note: string;
}

export class Nav_Euro_28_Demo extends BaseComponent {

    async create(props: ComponentProps): Promise<SceneNode> {
        const variants: VariantDefinition[] = [
            {
                title: "Euro 28 - Unified Desktop",
                props: { platform: "desktop" },
                note: "Unified component running in desktop mode. Fills full 1680px width."
            },
            {
                title: "Euro 28 - Unified Mobile",
                props: { platform: "mobile" },
                note: "Unified component running in mobile mode (375px). Switched via 'platform' prop."
            }
        ];

        const children: NodeDefinition[] = [];

        // Title - Padding handled by parent container mostly, but we need horizontal padding for items that aren't full width
        // In NavBookingDemo, items are just children of a padded vertical frame.
        // However, the FULL WIDTH navigation needs to break out of that padding.
        // Or, we structure it like NavBookingDemo where "Main_Navigation_Booking" has layoutAlign: STRETCH and width: 1680.
        // If the parent has padding 60, straight STRETCH children will be width (1680 - 120).
        // Let's look closer at NavBookingDemo:
        // NavBookingDemo frame has padding 60.
        // But Main_Navigation_Booking is added as child.
        // Does Main_Navigation_Booking fill 1680 or 1440?
        // User said "desktop version is still not filling the width of the page".
        // If I put padding 60 on the parent, the functional full-width component will be constrained to 1560px.
        // To have true full-width (1680px) component inside a 1680px frame, the parent must have 0 horizontal padding,
        // and we apply padding to the TEXT elements instead.

        // Re-reading NavBookingDemo.ts:
        // props: { ... paddingLeft: 60, paddingRight: 60 ... }
        // ... "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH", "width": 1680 }
        // If parent has padding, layoutAlign: STRETCH respects it (so width becomes 1680 - 120 = 1560).
        // If the user wants the component to be FULL WIDTH (1680), then the parent padding concept in NavBookingDemo might be slightly different or the component is handled differently.
        // Wait, NavBookingDemo's header component DOES have margin? Or is it truly edge-to-edge?
        // "Variant09_Full-Width Centered" implies full width.
        // If the user wants strictly 1680px edge-to-edge for the nav, I should remove parent padding and pad the text items.
        // BUT, the user said "put padding like in other pages (page padding check the booking one)".
        // NavBookingDemo HAS padding 60 on the root.

        // I will follow NavBookingDemo EXACTLY:
        // Root padding: 60.
        // Item spacing: 24.
        children.push({
            "type": "TEXT",
            "props": { "characters": "Euro 28 Navigation Case (Demo)", "fontSize": 48, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
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
                    "type": "COMPONENT", "name": v.title, "component": Main_Navigation_28,
                    "props": { ...v.props, name: v.title },
                    "layoutProps": {
                        "parentIsAutoLayout": true,
                        // If proper full width is needed despite parent padding, we might need negative margins or breakout.
                        // But typically in Figma AutoLayout, full width means filling the content box.
                        // If the user liked NavBookingDemo, I will mirror it.
                        // If NavBookingDemo has padding 60, the navs there are 1560px wide.
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

        // However, if the user specifically asked for "desktop version is not full width" previously, maybe they WANT strict 1680px.
        // If so, I should set paddingLeft/Right to 0 on the parent, and add padding wrappers for Text and Sticky Notes.
        // BUT, looking at the previous request "desktop version is still not filling the width of the page", implies the previous attempt (which had internal padding wrappers and 0 root padding?) failed?
        // Wait, my previous attempt (Step 305/306) had:
        // "paddingLeft": 60, "paddingRight": 60 on "Header Area" etc.
        // And Root had NO horizontal padding.
        // Structure was:
        // Root (Width 1680, Pad 0)
        //   - Header Area (Pad 60) -> Text
        //   - Nav Component (Width 1680)
        // This SHOUL HAVE worked for full width.
        // Why did user say it's not filling width? -> Because of "Hug" on component root (fixed in Step 353).

        // NOW User says: "put padding like in other pages (page padding check the booking one)"
        // NavBookingDemo has `paddingLeft: 60` on the ROOT.
        // This means the "Full Width" navs in NavBookingDemo are actually 1560px wide (1680 - 120).
        // If that's what the user wants ("like the booking one"), I will do that.
        // I will revert to Root Padding 60, and remove the individual wrappers.

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Nav_Euro_28_Demo",
            "props": {
                "layoutMode": "VERTICAL",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "FIXED",
                "counterAxisAlignItems": "MIN", // Left aligned
                "itemSpacing": 24, // Matches NavBookingDemo
                "paddingTop": 60,
                "paddingRight": 60,
                "paddingBottom": 60,
                "paddingLeft": 60, // Matches NavBookingDemo
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

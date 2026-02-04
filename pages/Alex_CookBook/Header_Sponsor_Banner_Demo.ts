import { BaseComponent, ComponentProps, NodeDefinition } from "../../components/BaseComponent";
import { Main_Navigation_28 } from "../../components/Alex_CookBook/Main_Navigation_28/Main_Navigation_28";
import { SponsorBanner } from "../../components/Alex_CookBook/SponsorBanner/SponsorBanner";
import { UserObservationStickyNote } from "../../components/Miscellaneous/UserObservationStickyNote/UserObservationStickyNote";

export class Header_Sponsor_Banner_Demo extends BaseComponent {
    async create(props: ComponentProps): Promise<SceneNode> {

        const message = "Unlock huge savings – up to 15% with Genius";

        const children: NodeDefinition[] = [
            {
                "type": "TEXT",
                "props": { "characters": "Header + Sponsor Banner Combination", "fontSize": 48, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0.13, "g": 0.08, "b": 0.19 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },

            // --- COMBINATION 1: Desktop ---
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT",
                "name": "V1_BannerStrip_Label",
                "props": { "characters": "V1: Desktop Standard (Sponsor Banner)", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME",
                "name": "V1_BannerStrip_Combination_Desktop",
                "props": {
                    "layoutMode": "VERTICAL",
                    "itemSpacing": 0,
                    "fills": [],
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "FIXED"
                },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28,
                        "props": { "platform": "desktop" },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    },
                    {
                        "type": "COMPONENT", "name": "V1_SponsorBanner_Desktop_Standard", "component": SponsorBanner,
                        "props": { "platform": "desktop", "message": message, "showMarketingIcon": true, "logoVariant": "white" },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    }
                ]
            },
            {
                "type": "COMPONENT", "component": UserObservationStickyNote,
                "props": { "text": "Unified Euro Header (Desktop) stacked with new Sponsor Banner (90px height, Dark Blue, Centered Pill)." },
                "layoutProps": { "parentIsAutoLayout": true }
            },

            // --- COMBINATION 2: Mobile ---
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT",
                "name": "V2_BannerStrip_Label",
                "props": { "characters": "V2: Mobile Standard (Sponsor Banner)", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME",
                "name": "V2_BannerStrip_Combination_Mobile",
                "props": {
                    "layoutMode": "VERTICAL",
                    "itemSpacing": 0,
                    "fills": [],
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "FIXED"
                },
                "layoutProps": { "width": 375, "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28,
                        "props": { "platform": "mobile" },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    },
                    {
                        "type": "COMPONENT", "name": "V2_SponsorBanner_Mobile_Standard", "component": SponsorBanner,
                        "props": { "platform": "mobile", "message": "Unlock savings", "showMarketingIcon": true, "logoVariant": "white" },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    }
                ]
            },
            {
                "type": "COMPONENT", "component": UserObservationStickyNote,
                "props": { "text": "Mobile version (375px). Banner reduces to 48px height." },
                "layoutProps": { "parentIsAutoLayout": true }
            },

            // --- COMBINATION 3: Desktop + 25% Fill ---
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT",
                "name": "V3_BannerStrip_Label",
                "props": { "characters": "V3: Desktop + 25% Fill (Sponsor Banner)", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME",
                "name": "V3_BannerStrip_Combination_Desktop",
                "props": {
                    "layoutMode": "VERTICAL",
                    "itemSpacing": 0,
                    "fills": [],
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "FIXED"
                },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28,
                        "props": { "platform": "desktop" },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    },
                    {
                        "type": "COMPONENT", "name": "V3_SponsorBanner_Desktop_25Fill", "component": SponsorBanner,
                        "props": { "platform": "desktop", "message": message, "showMarketingIcon": true, "logoVariant": "white", "fillOpacity": 0.25 },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    }
                ]
            },

            // --- COMBINATION 4: Mobile + 25% Fill ---
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT",
                "name": "V4_BannerStrip_Label",
                "props": { "characters": "V4: Mobile + 25% Fill (Sponsor Banner)", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME",
                "name": "V4_BannerStrip_Combination_Mobile",
                "props": {
                    "layoutMode": "VERTICAL",
                    "itemSpacing": 0,
                    "fills": [],
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "FIXED"
                },
                "layoutProps": { "width": 375, "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28,
                        "props": { "platform": "mobile" },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    },
                    {
                        "type": "COMPONENT", "name": "V4_SponsorBanner_Mobile_25Fill", "component": SponsorBanner,
                        "props": { "platform": "mobile", "message": "Unlock savings", "showMarketingIcon": true, "logoVariant": "white", "fillOpacity": 0.25 },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    }
                ]
            },

            // --- COMBINATION 5: Desktop + Double Line + 25% Fill ---
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT",
                "name": "V5_BannerStrip_Label",
                "props": { "characters": "V5: Desktop + Double Line Layout (Sponsor Banner)", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME",
                "name": "V5_BannerStrip_Combination_Desktop",
                "props": {
                    "layoutMode": "VERTICAL",
                    "itemSpacing": 0,
                    "fills": [],
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "FIXED"
                },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28,
                        "props": { "platform": "desktop" },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    },
                    {
                        "type": "COMPONENT", "name": "V5_SponsorBanner_Desktop_Double", "component": SponsorBanner,
                        "props": {
                            "platform": "desktop",
                            "variant": "double",
                            "message": "Unlock huge savings\nup to 15% with Genius",
                            "showMarketingIcon": true,
                            "logoVariant": "white",
                            "fillOpacity": 0.25
                        },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    }
                ]
            },

            // --- COMBINATION 6: Desktop + LARGE + 25% Fill ---
            { "type": "FRAME", "name": "Spacer", "layoutProps": { "height": 40, "parentIsAutoLayout": true }, "props": { "fills": [] } },
            {
                "type": "TEXT",
                "name": "V6_BannerStrip_Label",
                "props": { "characters": "V6: Desktop + LARGE Layout (Sponsor Banner - 24px Font)", "fontSize": 32, "fontWeight": 700, "fills": [{ "type": "SOLID", "color": { "r": 0, "g": 0.35, "b": 1 } }] },
                "layoutProps": { "parentIsAutoLayout": true }
            },
            {
                "type": "FRAME",
                "name": "V6_BannerStrip_Combination_Desktop",
                "props": {
                    "layoutMode": "VERTICAL",
                    "itemSpacing": 0,
                    "fills": [],
                    "primaryAxisSizingMode": "AUTO",
                    "counterAxisSizingMode": "FIXED"
                },
                "layoutProps": { "width": 1680, "parentIsAutoLayout": true },
                "children": [
                    {
                        "type": "COMPONENT", "name": "Euro Header", "component": Main_Navigation_28,
                        "props": { "platform": "desktop" },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    },
                    {
                        "type": "COMPONENT", "name": "V6_SponsorBanner_Desktop_Large", "component": SponsorBanner,
                        "props": {
                            "platform": "desktop",
                            "variant": "large",
                            "message": "Unlock huge savings – up to 15% with Genius",
                            "showMarketingIcon": true,
                            "logoVariant": "white",
                            "fillOpacity": 0.25
                        },
                        "layoutProps": { "parentIsAutoLayout": true, "layoutAlign": "STRETCH" }
                    }
                ]
            },
        ];

        const structure: NodeDefinition = {
            "type": "FRAME",
            "name": "Header_Sponsor_Banner_Demo",
            "props": {
                "layoutMode": "VERTICAL",
                "itemSpacing": 24,
                "paddingTop": 60, "paddingRight": 60, "paddingBottom": 60, "paddingLeft": 60,
                "counterAxisAlignItems": "MIN",
                "primaryAxisSizingMode": "AUTO",
                "counterAxisSizingMode": "AUTO",
                "fills": [{ "type": "SOLID", "color": { "r": 0.96, "g": 0.96, "b": 0.96 } }]
            },
            "layoutProps": { "parentIsAutoLayout": false },
            "children": children
        };

        const root = await this.renderDefinition(structure);
        root.x = props.x ?? 0;
        root.y = props.y ?? 0;
        return root;
    }
}
